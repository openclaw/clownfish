#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { parseArgs, parseJob, repoRoot } from "./lib.mjs";
import { hasSecuritySensitiveText } from "./security-sensitive.mjs";

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? "openclaw/openclaw");
const [owner, name] = repo.split("/");
const outDir = path.resolve(String(args.out ?? path.join(repoRoot(), "jobs", owner, "inbox")));
const existingDir = path.resolve(String(args["existing-dir"] ?? args.existing_dir ?? outDir));
const existingResultsDir = path.resolve(
  String(args["existing-results-dir"] ?? args.existing_results_dir ?? path.join(repoRoot(), "results", owner)),
);
const mode = String(args.mode ?? "autonomous");
const existingResultsActionPolicy = String(
  args["existing-results-action-policy"] ?? args.existing_results_action_policy ?? "terminal",
);
const strategy = String(args.strategy ?? "triage");
const limit = limitArg("limit", 100);
const batchSize = numberArg("batch-size", 5);
const sort = String(args.sort ?? "stale");
const bucketFilter = String(args.bucket ?? defaultBucketFor({ mode, strategy }));
const skipExisting = args["skip-existing"] !== "false";
const includeSecurity = Boolean(args["include-security-candidates"]);
const includeRefs = optionalRefsFile(args["include-refs-file"] ?? args.include_refs_file);
const dryRun = Boolean(args["dry-run"] ?? args.dry_run);
const jsonOutput = Boolean(args.json);
const ghCommand = String(args["gh-bin"] ?? args.gh_bin ?? process.env.CLOWNFISH_GH_BIN ?? firstAvailableCommand(["ghx", "gh"]));

if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) die("--repo must be owner/repo");
if (!["plan", "autonomous"].includes(mode)) die("--mode must be plan or autonomous");
if (!["triage", "remediation"].includes(strategy)) die("--strategy must be triage or remediation");
if (strategy === "remediation" && mode !== "plan") die("--strategy remediation requires --mode plan");
if (!["stale", "recent", "bucket"].includes(sort)) die("--sort must be stale, recent, or bucket");
if (!["all", "terminal"].includes(existingResultsActionPolicy)) die("--existing-results-action-policy must be all or terminal");

const existingRefs = skipExisting ? existingMentionedRefs([existingDir]) : new Set();
if (skipExisting) mergeRefs(existingRefs, existingPublishedResultRefs(existingResultsDir, repo, existingResultsActionPolicy));
const candidates = dedupeCandidates(
  fetchOpenPullRequests()
  .map(classifyCandidate)
  .filter((candidate) => !includeRefs || includeRefs.has(candidate.ref))
  .filter((candidate) => !skipExisting || !existingRefs.has(candidate.ref))
  .filter((candidate) => includeSecurity || candidate.bucket !== "security_route_candidate")
  .filter((candidate) => bucketFilter === "all" || candidate.bucket === bucketFilter),
).sort(compareCandidates);
const limitedCandidates = limit === "all" ? candidates : candidates.slice(0, limit);

const batches = [];
for (let index = 0; index < limitedCandidates.length; index += batchSize) {
  batches.push(limitedCandidates.slice(index, index + batchSize));
}

if (!dryRun) fs.mkdirSync(outDir, { recursive: true });
const generated = batches.map((batch, index) => writeJob(batch, index + 1));

const payload = sanitizeJsonValue({
  generated,
  candidates: limitedCandidates,
  options: {
    repo,
    mode,
    strategy,
    dry_run: dryRun,
    limit,
    batch_size: batchSize,
    sort,
    bucket: bucketFilter,
    skip_existing: skipExisting,
    include_security_candidates: includeSecurity,
    include_refs_file: includeRefs
      ? path.relative(repoRoot(), path.resolve(String(args["include-refs-file"] ?? args.include_refs_file)))
      : null,
    existing_results_action_policy: existingResultsActionPolicy,
    existing_dir: path.relative(repoRoot(), existingDir),
    existing_results_dir: path.relative(repoRoot(), existingResultsDir),
    gh_bin: ghCommand,
  },
  totals: {
    generated: generated.length,
    candidates: limitedCandidates.length,
    fetched_open_prs: fetchOpenPullRequests.cache?.length ?? null,
    include_refs: includeRefs?.size ?? null,
    existing_refs: existingRefs.size,
  },
});

if (jsonOutput) {
  console.log(JSON.stringify(payload, null, 2));
} else {
  for (const item of generated) console.log(item.path);
}

function fetchOpenPullRequests() {
  if (fetchOpenPullRequests.cache) return fetchOpenPullRequests.cache;
  const query = `query($endCursor:String){
    repository(owner:${jsonString(owner)}, name:${jsonString(name)}) {
      pullRequests(states:OPEN, first:100, after:$endCursor, orderBy:{field:UPDATED_AT, direction:ASC}) {
        nodes {
          number
          title
          url
          createdAt
          updatedAt
          isDraft
          author { login }
          authorAssociation
          labels(first:30) { nodes { name } }
          assignees(first:10) { nodes { login } }
        }
        pageInfo { hasNextPage endCursor }
      }
    }
  }`;
  const pulls = [];
  let endCursor = null;
  for (;;) {
    const args = ["api", "graphql", "-f", `query=${query}`];
    if (endCursor) args.push("-F", `endCursor=${endCursor}`);
    const page = ghJsonWithRetry(args, { operation: "fetch open pull request inventory page" });
    const pullRequests = page?.data?.repository?.pullRequests;
    pulls.push(...(pullRequests?.nodes ?? []));
    if (!pullRequests?.pageInfo?.hasNextPage) break;
    endCursor = pullRequests.pageInfo.endCursor;
    if (!endCursor) throw new Error("GitHub open PR pagination returned hasNextPage without endCursor");
  }
  fetchOpenPullRequests.cache = pulls;
  return pulls;
}

function classifyCandidate(raw) {
  const labels = labelNames(raw.labels);
  const assignees = assigneeNames(raw.assignees);
  const title = asciiString(raw.title ?? "");
  const authorAssociation = asciiString(raw.authorAssociation ?? "");
  const bucket = chooseBucket({ raw, title, labels, assignees, authorAssociation });

  return {
    number: Number(raw.number),
    ref: `#${raw.number}`,
    title,
    author: asciiString(raw.author?.login ?? ""),
    author_association: authorAssociation || null,
    labels,
    assignees,
    is_draft: Boolean(raw.isDraft),
    created_at: nullableAscii(raw.createdAt),
    updated_at: nullableAscii(raw.updatedAt),
    url: asciiString(raw.url ?? ""),
    bucket,
  };
}

function dedupeCandidates(candidates) {
  const byRef = new Map();
  for (const candidate of candidates) {
    const existing = byRef.get(candidate.ref);
    if (!existing || String(candidate.updated_at).localeCompare(String(existing.updated_at)) > 0) {
      byRef.set(candidate.ref, candidate);
    }
  }
  return [...byRef.values()];
}

function chooseBucket({ raw, title, labels, assignees, authorAssociation }) {
  if (hasExactSecuritySignal({ title, labels })) return "security_route_candidate";
  if (isMaintainerAssociated(authorAssociation) || assignees.length > 0) return "maintainer_owned";
  if (Boolean(raw.isDraft)) return "draft";
  if (labels.some((label) => /needs-real-behavior-proof|needs proof|mock-only-proof|waiting on author/i.test(label))) {
    return "needs_proof";
  }
  if (labels.some((label) => /proof:\s*sufficient|ready for maintainer look/i.test(label))) {
    return "ready_for_maintainer";
  }
  if (daysSince(raw.updatedAt) >= 14) return "stale_unassigned";
  return "recent_active";
}

function writeJob(batch, index) {
  const now = new Date();
  const stamp = now.toISOString().replace(/[-:.]/g, "").slice(0, 15);
  const bucket = batch.every((item) => item.bucket === batch[0].bucket) ? batch[0].bucket : "mixed";
  const inventoryScope = skipExisting
    ? "open pull requests not already represented in Clownfish jobs or results"
    : "open pull requests, including previously represented PRs being refreshed against live GitHub state";
  const clusterId = `live-pr-inventory-${stamp}-${String(index).padStart(3, "0")}`;
  const filePath = path.join(outDir, `${clusterId}.md`);
  const refs = batch.map((candidate) => candidate.ref);
  const remediation = strategy === "remediation";
  const allowedActions = remediation ? ["merge", "fix", "raise_pr"] : ["comment", "label", "close"];
  const blockedActions = remediation
    ? ["comment", "label", "close", "force_push", "bypass_checks"]
    : ["force_push", "bypass_checks", "merge", "fix", "raise_pr"];
  const requireHumanFor = remediation
    ? ["security_sensitive", "unclear_canonical", "broad_code_delta", "active_author_followup"]
    : [
        "security_sensitive",
        "maintainer_signal",
        "active_author_followup",
        "green_checks",
        "focused_bug_fix",
        "technical_correctness_judgment",
      ];
  const markdown = [
    "---",
    `repo: ${repo}`,
    `cluster_id: ${clusterId}`,
    `mode: ${mode}`,
    "allowed_actions:",
    ...yamlList(allowedActions),
    "blocked_actions:",
    ...yamlList(blockedActions),
    "require_human_for:",
    ...yamlList(requireHumanFor),
    "canonical: []",
    "candidates:",
    ...yamlList(refs),
    "cluster_refs:",
    ...yamlList(refs),
    "security_policy: central_security_only",
    "security_sensitive: false",
    `allow_instant_close: ${remediation ? "false" : "true"}`,
    `allow_fix_pr: ${remediation ? "true" : "false"}`,
    `allow_merge: ${remediation ? "true" : "false"}`,
    `allow_post_merge_close: false`,
    `require_fix_before_close: false`,
    `canonical_hint: ${quoteYaml(
      remediation
        ? "This is a fresh PR remediation inventory shard. Classify each PR independently. A complete merge preflight is required only for a merge recommendation; a repair requires a complete executable fix artifact."
        : "This is a live PR inventory shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical.",
    )}`,
    `notes: ${quoteYaml(
      remediation
        ? `Generated from live GitHub open PR inventory on ${now.toISOString()}; bucket=${bucket}; plan-only remediation assessment. No GitHub mutation is permitted from this job.`
        : `Generated from live GitHub open PR inventory on ${now.toISOString()}; bucket=${bucket}; only safe close/comment/label actions are allowed.`,
    )}`,
    "---",
    "",
    `# ${remediation ? "PR Remediation Inventory" : "Live PR Inventory"} ${index}`,
    "",
    remediation
      ? "This is a high-volume plan-only remediation shard over fresh maintainer-ready pull requests."
      : `This is a high-volume live inventory shard over ${inventoryScope}.`,
    "",
    "## Goal",
    "",
    remediation
      ? "Hydrate live GitHub state for each listed PR and produce a current finalization path. Emit `merge_candidate` only with a complete merge preflight. Missing merge preflight alone is not a `needs_human` reason: it blocks only `merge_candidate`. Emit bounded `fix_needed` plus `build_fix_artifact` and `open_fix_pr` only for a concrete repair with a complete executable `fix_artifact`; otherwise classify the PR `keep_related` or `keep_independent`. Use `needs_human` only for unclear scope, active author follow-up, broad work, or another specific maintainer decision. Route security-sensitive PRs centrally. Do not perform mutations: this job is plan-only."
      : "Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. Do not merge, fix, or raise PRs.",
    "",
    "## Inventory",
    "",
    ...batch.flatMap(candidateBlock),
    "",
  ].join("\n");

  if (!dryRun) fs.writeFileSync(filePath, cleanGeneratedMarkdown(markdown));
  return {
    path: path.relative(repoRoot(), filePath),
    cluster_id: clusterId,
    bucket,
    candidates: refs,
    dry_run: dryRun,
  };
}

function defaultBucketFor({ mode, strategy }) {
  if (strategy === "remediation") return "ready_for_maintainer";
  return mode === "autonomous" ? "stale_unassigned" : "all";
}

function candidateBlock(candidate) {
  return [
    `### ${candidate.ref} ${candidate.title}`,
    "",
    `- bucket: ${candidate.bucket}`,
    `- author: ${candidate.author || "unknown"}`,
    `- author association: ${candidate.author_association || "unknown"}`,
    `- draft: ${candidate.is_draft ? "yes" : "no"}`,
    `- assignees: ${candidate.assignees.join(", ") || "none"}`,
    `- labels: ${candidate.labels.join(", ") || "none"}`,
    `- live updated: ${candidate.updated_at || "unknown"}`,
    `- live url: ${candidate.url || "unknown"}`,
    "",
  ];
}

function existingMentionedRefs(roots) {
  const refs = new Set();
  const visited = new Set();
  for (const root of roots) {
    if (!fs.existsSync(root) || visited.has(root)) continue;
    visited.add(root);
    for (const file of markdownJobFiles(root)) addStructuredJobRefs(refs, file);
  }
  return refs;
}

function addStructuredJobRefs(refs, file) {
  try {
    const job = parseJob(file);
    for (const ref of [...normalizeRefs(job.frontmatter.candidates), ...normalizeRefs(job.frontmatter.cluster_refs)]) {
      refs.add(ref);
    }
  } catch {
    // Result markdown and ad hoc reports are not necessarily job files.
  }
}

function existingPublishedResultRefs(root, targetRepo, actionPolicy) {
  if (!fs.existsSync(root)) return new Set();
  const refs = new Set();
  for (const entry of fs.readdirSync(root, { recursive: true })) {
    const file = path.join(root, String(entry));
    if (!file.endsWith(".md") || !fs.statSync(file).isFile()) continue;
    const raw = fs.readFileSync(file, "utf8");
    const frontmatter = raw.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!frontmatter) continue;
    const parsed = parsePublishedResultFrontmatter(frontmatter[1]);
    if (String(parsed.repo ?? "") !== targetRepo) continue;
    for (const ref of publishedResultRefs(raw, actionPolicy)) refs.add(ref);
  }
  return refs;
}

function publishedResultRefs(markdown, actionPolicy) {
  if (actionPolicy === "all") return workerActionRows(markdown).map((row) => row.target);
  const refs = new Set();
  for (const row of applyActionRows(markdown)) {
    if (row.status === "executed") refs.add(row.target);
  }
  for (const row of workerActionRows(markdown)) {
    if (row.action === "keep_closed" || row.action === "route_security") refs.add(row.target);
  }
  return [...refs];
}

function mergeRefs(target, source) {
  for (const ref of source) target.add(ref);
  return target;
}

function parsePublishedResultFrontmatter(text) {
  const out = {};
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    out[match[1]] = String(match[2] ?? "").trim().replace(/^"(.*)"$/, "$1");
  }
  return out;
}

function applyActionRows(markdown) {
  return actionTableRows(markdown, "Apply Actions");
}

function workerActionRows(markdown) {
  return actionTableRows(markdown, "Worker Action Matrix");
}

function actionTableRows(markdown, headingName) {
  const heading = markdown.match(new RegExp(`^## ${escapeRegExp(headingName)}[^\\n]*\\n`, "m"));
  if (!heading) return [];
  const rest = markdown.slice((heading.index ?? 0) + heading[0].length);
  const nextHeading = rest.search(/\n## /);
  const section = nextHeading >= 0 ? rest.slice(0, nextHeading) : rest;
  return section
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("| #"))
    .map(parseActionRow)
    .filter(Boolean);
}

function parseActionRow(line) {
  const cells = line
    .split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());
  if (cells.length < 3) return null;
  return {
    target: cells[0],
    action: cells[1],
    status: cells[2],
  };
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function markdownJobFiles(root) {
  const files = [];
  for (const entry of fs.readdirSync(root, { recursive: true })) {
    const file = path.join(root, String(entry));
    if (!fs.statSync(file).isFile()) continue;
    if (file.endsWith(".md")) files.push(file);
  }
  return files;
}

function normalizeRefs(values) {
  if (!Array.isArray(values)) return [];
  return values
    .map((value) => String(value ?? "").trim())
    .filter((value) => /^#\d+$/.test(value));
}

function optionalRefsFile(filePath) {
  if (!filePath) return null;
  const absolutePath = path.resolve(String(filePath));
  const refs = new Set(
    fs
      .readFileSync(absolutePath, "utf8")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("# "))
      .map((line) => (line.match(/^#?\d+$/) ? `#${line.replace(/^#/, "")}` : line))
      .filter((line) => /^#\d+$/.test(line)),
  );
  if (refs.size === 0) throw new Error(`--include-refs-file ${absolutePath} did not contain any refs`);
  return refs;
}

function compareCandidates(left, right) {
  if (sort === "recent") return String(right.updated_at).localeCompare(String(left.updated_at));
  if (sort === "bucket") return left.bucket.localeCompare(right.bucket) || staleCompare(left, right);
  return staleCompare(left, right);
}

function staleCompare(left, right) {
  return String(left.updated_at).localeCompare(String(right.updated_at));
}

function hasExactSecuritySignal({ title, labels }) {
  const exactSecurityLabel = labels.some((label) =>
    /^(?:security|security[-_: ]sensitive|security[:/].+|type:\s*security|kind:\s*security|impact:\s*security|clawsweeper:needs-security-review)$/i.test(label),
  );
  return exactSecurityLabel || hasSecuritySensitiveText(title, "", labels);
}

function isMaintainerAssociated(value) {
  return ["OWNER", "MEMBER", "COLLABORATOR"].includes(String(value ?? "").toUpperCase());
}

function daysSince(value) {
  const time = Date.parse(value ?? "");
  if (!Number.isFinite(time)) return 0;
  return Math.floor((Date.now() - time) / (24 * 60 * 60 * 1000));
}

function labelNames(value) {
  return (value?.nodes ?? [])
    .map((label) => label?.name)
    .filter(Boolean)
    .map(asciiString);
}

function assigneeNames(value) {
  return (value?.nodes ?? [])
    .map((assignee) => assignee?.login)
    .filter(Boolean)
    .map(asciiString);
}

function numberArg(name, fallback) {
  const value = Number(args[name] ?? fallback);
  if (!Number.isInteger(value) || value < 1) throw new Error(`--${name} must be a positive integer`);
  return value;
}

function limitArg(name, fallback) {
  const raw = args[name] ?? fallback;
  if (String(raw).toLowerCase() === "all") return "all";
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1) throw new Error(`--${name} must be a positive integer or all`);
  return value;
}

function yamlList(values) {
  if (values.length === 0) return ["  []"];
  return values.map((value) => `  - ${quoteYaml(value)}`);
}

function quoteYaml(value) {
  return JSON.stringify(asciiString(value));
}

function jsonString(value) {
  return JSON.stringify(String(value));
}

function ghRaw(ghArgs) {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  return execFileSync(ghCommand, ghArgs, {
    cwd: repoRoot(),
    env,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 128 * 1024 * 1024,
    timeout: Number(process.env.CLOWNFISH_GITHUB_IMPORT_PAGE_TIMEOUT_MS ?? 180_000),
  });
}

function ghJsonWithRetry(ghArgs, { operation }) {
  const attempts = numberFromEnv("CLOWNFISH_GITHUB_IMPORT_RETRIES", 4);
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return JSON.parse(stripAnsi(ghRaw(ghArgs)) || "null");
    } catch (error) {
      lastError = error;
      if (attempt === attempts || !isRetryableGhError(error)) break;
      const delayMs = Math.min(30_000, 1_000 * 2 ** (attempt - 1));
      console.error(`${operation} failed on attempt ${attempt}/${attempts}; retrying in ${delayMs}ms`);
      sleepMs(delayMs);
    }
  }
  throw lastError;
}

function isRetryableGhError(error) {
  const message = String(error?.stderr ?? error?.message ?? error);
  return /timed out|timeout|TLS handshake|connection reset|502 Bad Gateway|503 Service Unavailable|504 Gateway Timeout|secondary rate/i.test(
    message,
  );
}

function numberFromEnv(name, fallback) {
  const value = Number(process.env[name] ?? fallback);
  if (!Number.isInteger(value) || value < 1) return fallback;
  return value;
}

function sleepMs(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-9;]*m/g, "");
}

function cleanGeneratedMarkdown(value) {
  return String(value).replace(/[ \t]+$/gm, "").replace(/\n+$/, "\n");
}

function nullableAscii(value) {
  if (value == null) return null;
  return asciiString(value);
}

function sanitizeJsonValue(value) {
  if (typeof value === "string") return asciiString(value);
  if (Array.isArray(value)) return value.map(sanitizeJsonValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [asciiString(key), sanitizeJsonValue(item)]));
  }
  return value;
}

function asciiString(value) {
  return String(value ?? "")
    .replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function firstAvailableCommand(commands) {
  for (const command of commands) {
    const result = spawnSync(command, ["--version"], { cwd: repoRoot(), stdio: "ignore" });
    if (result.status === 0) return command;
  }
  return commands[0];
}

function die(message) {
  console.error(message);
  process.exit(2);
}
