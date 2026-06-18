#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";
import { hasSecuritySensitiveText, securityTextFromItem } from "./security-sensitive.mjs";

const CLOSE_ACTIONS = new Set([
  "close_duplicate",
  "close_fixed_by_candidate",
  "close_stale",
  "close_superseded",
  "close_low_signal",
]);
const PROTECTED_AUTHOR_ASSOCIATIONS = new Set(["MEMBER", "OWNER", "COLLABORATOR"]);

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? "openclaw/openclaw");
const [owner, name] = repo.split("/");
const resultsDir = path.resolve(repoRoot(), String(args["results-dir"] ?? args.results_dir ?? "results/runs"));
const outDir = path.resolve(repoRoot(), String(args.out ?? path.join("jobs", owner, "inbox")));
const existingDir = path.resolve(repoRoot(), String(args["existing-dir"] ?? args.existing_dir ?? path.join("jobs", owner)));
const limit = numberArg("limit", 40);
const liveFetchLimit = numberArg("live-fetch-limit", Math.max(limit * 5, limit));
const suffix = String(args.suffix ?? todayStamp());
const dryRun = Boolean(args["dry-run"] ?? args.dry_run);
const force = Boolean(args.force);
const jsonOutput = Boolean(args.json);

if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) die("--repo must be owner/repo");
if (!fs.existsSync(resultsDir)) die(`results dir not found: ${path.relative(repoRoot(), resultsDir)}`);

const existingCloseTargets = findExistingCloseTargets(existingDir);
const planned = collectPlannedCloseActions()
  .filter((item) => !existingCloseTargets.has(item.target))
  .slice(0, liveFetchLimit);

const liveByRef = fetchLiveRefs([
  ...new Set(planned.flatMap((item) => [item.target, item.canonical].filter(Boolean))),
]);

const selected = [];
const dropped = [];

for (const item of planned) {
  const target = liveByRef.get(item.target);
  const canonical = liveByRef.get(item.canonical);
  const dropReason = dropReasonFor(item, target, canonical);
  if (dropReason) {
    dropped.push({ ...publicItem(item), reason: dropReason });
    continue;
  }
  selected.push({ ...item, targetLive: target, canonicalLive: canonical });
  if (selected.length >= limit) break;
}

if (!dryRun) fs.mkdirSync(outDir, { recursive: true });
const generated = selected.map(writeJob);

const payload = {
  status: dryRun ? "dry_run" : "written",
  repo,
  generated: generated.map((item) => item.path),
  candidates: selected.map((item) => ({
    ...publicItem(item),
    target_title: item.targetLive.title,
    canonical_title: item.canonicalLive.title,
  })),
  dropped,
  totals: {
    generated: generated.length,
    planned_close_actions: planned.length,
    existing_close_targets: existingCloseTargets.size,
    live_refs: liveByRef.size,
  },
};

if (jsonOutput) {
  console.log(JSON.stringify(payload, null, 2));
} else {
  for (const item of generated) console.log(item.path);
  console.error(
    `generated=${generated.length} planned=${planned.length} dropped=${dropped.length} existing_close_targets=${existingCloseTargets.size}`,
  );
}

function collectPlannedCloseActions() {
  const items = [];
  const results = fs
    .readdirSync(resultsDir)
    .filter((entry) => entry.endsWith(".json"))
    .map((file) => {
      const absolute = path.join(resultsDir, file);
      return { file, absolute, result: safeJsonFile(absolute) };
    })
    .sort((left, right) => {
      const newest = Date.parse(right.result.published_at ?? "") - Date.parse(left.result.published_at ?? "");
      return Number.isNaN(newest) || newest === 0 ? right.file.localeCompare(left.file) : newest;
    });
  for (const { file, absolute, result } of results) {
    const clusterId = String(result.cluster_id ?? result.clusterId ?? path.basename(file, ".json"));
    const actions = Array.isArray(result.actions) ? result.actions : [];
    for (const action of actions) {
      if (action?.status !== "planned") continue;
      if (!CLOSE_ACTIONS.has(String(action.action ?? ""))) continue;
      const target = normalizeRef(action.target);
      const canonical = normalizeRef(action.candidate_fix ?? action.canonical ?? action.duplicate_of);
      if (!target || !canonical || target === canonical) continue;
      items.push({
        target,
        canonical,
        action: String(action.action),
        classification: String(action.classification ?? ""),
        reason: oneLine(action.reason),
        comment: oneLine(action.comment),
        evidence: Array.isArray(action.evidence) ? action.evidence : [],
        resultFile: path.relative(repoRoot(), absolute),
        runId: path.basename(file, ".json"),
        clusterId,
      });
    }
  }

  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.target}->${item.canonical}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function findExistingCloseTargets(root) {
  const targets = new Set();
  if (!fs.existsSync(root)) return targets;
  for (const entry of fs.readdirSync(root, { recursive: true })) {
    const file = path.join(root, String(entry));
    if (!file.endsWith(".md") || !fs.statSync(file).isFile()) continue;
    if (!/close-canary/.test(path.basename(file))) continue;
    const text = fs.readFileSync(file, "utf8");
    const match = text.match(/cluster_id:\s*(?:issue|pr)-close-canary-([0-9]+)-/);
    if (match) {
      targets.add(`#${match[1]}`);
      continue;
    }
    const candidate = text.match(/candidates:\n\s+-\s+"?(#[0-9]+)"?/);
    if (candidate) targets.add(candidate[1]);
  }
  return targets;
}

function fetchLiveRefs(refs) {
  const out = new Map();
  const numbers = [...new Set(refs.map((ref) => Number(ref.replace(/^#/, ""))).filter(Number.isInteger))];
  for (let index = 0; index < numbers.length; index += 40) {
    const batch = numbers.slice(index, index + 40);
    const query = renderGraphqlQuery(batch);
    const json = ghJson(["api", "graphql", "-f", `query=${query}`]);
    const fatalErrors = (json.errors ?? []).filter(
      (error) => !/^Could not resolve to an issue or pull request with the number of \d+\.$/.test(String(error.message ?? "")),
    );
    if (fatalErrors.length > 0) {
      die(`GitHub GraphQL failed while fetching live refs: ${fatalErrors.map((error) => error.message).join("; ")}`);
    }
    for (const number of batch) {
      const node = json.data?.repository?.[`n${number}`];
      if (!node) continue;
      out.set(`#${number}`, normalizeLiveNode(node));
    }
  }
  return out;
}

function renderGraphqlQuery(numbers) {
  return `query {
  repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) {
${numbers
  .map(
    (number) => `    n${number}: issueOrPullRequest(number: ${number}) {
      __typename
      ... on Issue {
        number
        title
        body
        state
        updatedAt
        authorAssociation
        labels(first: 30) { nodes { name } }
      }
      ... on PullRequest {
        number
        title
        body
        state
        updatedAt
        mergedAt
        isDraft
        authorAssociation
        labels(first: 30) { nodes { name } }
      }
    }`,
  )
  .join("\n")}
  }
}`;
}

function normalizeLiveNode(node) {
  return {
    ref: `#${node.number}`,
    type: node.__typename === "PullRequest" ? "pr" : "issue",
    title: String(node.title ?? ""),
    body_excerpt: excerpt(node.body),
    state: String(node.state ?? ""),
    updatedAt: node.updatedAt ?? null,
    mergedAt: node.mergedAt ?? null,
    authorAssociation: node.authorAssociation ?? null,
    labels: (node.labels?.nodes ?? []).map((label) => String(label.name ?? "")).filter(Boolean),
  };
}

function dropReasonFor(item, target, canonical) {
  if (!target) return "target not found";
  if (!canonical) return "canonical not found";
  if (target.state !== "OPEN") return `target is ${target.state}`;
  const protectionReason = targetProtectionDropReason(target);
  if (protectionReason) return protectionReason;
  if (!canCloseAgainstCanonical(item, canonical)) return canonicalDropReason(item, canonical);
  const securityReason = securityDropReason(item, target, canonical);
  if (securityReason) return securityReason;
  return "";
}

function targetProtectionDropReason(target) {
  if (PROTECTED_AUTHOR_ASSOCIATIONS.has(target.authorAssociation)) {
    return `target author association is ${target.authorAssociation}`;
  }
  const holdLabel = target.labels.find(isHumanHoldLabel);
  return holdLabel ? `target has human-hold label ${holdLabel}` : "";
}

function isHumanHoldLabel(label) {
  const normalized = String(label ?? "").toLowerCase();
  return (
    normalized === "triage: needs-real-behavior-proof" ||
    normalized === "clawsweeper:needs-maintainer-review" ||
    normalized === "clawsweeper:needs-product-decision" ||
    normalized === "clawsweeper:needs-live-repro" ||
    /^status: .*needs proof$/.test(normalized) ||
    /^status: .*waiting on author$/.test(normalized)
  );
}

function canCloseAgainstCanonical(item, canonical) {
  if (item.action === "close_fixed_by_candidate") return canonical.type === "pr" && canonical.state === "MERGED" && Boolean(canonical.mergedAt);
  if (item.action === "close_duplicate" || item.action === "close_superseded") {
    return canonical.state === "OPEN" || (canonical.type === "pr" && canonical.state === "MERGED" && Boolean(canonical.mergedAt));
  }
  return false;
}

function canonicalDropReason(item, canonical) {
  if (item.action === "close_fixed_by_candidate") {
    if (canonical.type !== "pr") return "canonical is not a PR";
    return `canonical is ${canonical.state}`;
  }
  return `canonical is ${canonical.state}`;
}

function isSecuritySensitive(item) {
  return hasSecuritySensitiveText(securityTextFromItem(item));
}

function securityDropReason(item, target, canonical) {
  const signals = [];
  if (isSecuritySensitive(target)) signals.push("target");
  if (isSecuritySensitive(canonical)) signals.push("canonical");
  if (hasSecuritySensitiveText(...actionSecurityContext(item))) {
    signals.push("planned close context");
  }
  return signals.length > 0 ? `security signal in ${signals.join(", ")}` : "";
}

function actionSecurityContext(item) {
  return [item.classification, item.reason, item.comment, ...(item.evidence ?? [])].map((value) =>
    String(value ?? "").replace(
      /\bsecurity[-_\s]?sensitive\s*(?:[=:]\s*|\s+)(?:false|0|no)\b/gi,
      "non-security classification",
    ),
  );
}

function writeJob(item) {
  const kind = item.targetLive.type === "pr" ? "pr" : "issue";
  const number = item.target.replace(/^#/, "");
  const clusterId = `${kind}-close-canary-${number}-${suffix}`;
  const filePath = path.join(outDir, `${clusterId}.md`);
  const relative = path.relative(repoRoot(), filePath);
  if (fs.existsSync(filePath) && !force) die(`job already exists: ${relative} (use --force to overwrite)`);
  const mergedCandidate = item.canonicalLive.type === "pr" && item.canonicalLive.state === "MERGED" && Boolean(item.canonicalLive.mergedAt);
  const verb = mergedCandidate ? "fixed by" : "covered by";
  const title = `${kind === "pr" ? "PR" : "Issue"} Close Canary #${number}`;
  const preferredAction = closeInstruction(item);
  const canonicalHint = mergedCandidate
    ? `Close-only canary: ${item.target} was planned as ${verb} merged ${item.canonical} in run ${item.runId}. Re-fetch live state and only close if ${item.target} remains open and ${item.canonical} is still merged. Because ${item.canonical} is already merged/closed, use candidate_fix rather than canonical for the close action.`
    : `Close-only canary: ${item.target} was planned as ${item.action.replace(/^close_/, "")} of open canonical ${item.canonical} in run ${item.runId}. Re-fetch live state and only close if ${item.target} remains open and ${item.canonical} remains open as the best canonical ref.`;
  const markdown = [
    "---",
    `repo: ${repo}`,
    `cluster_id: ${clusterId}`,
    "mode: execute",
    "allowed_actions:",
    "  - comment",
    "  - label",
    "  - close",
    "blocked_actions:",
    "  - force_push",
    "  - bypass_checks",
    "  - merge",
    "  - fix",
    "  - raise_pr",
    "require_human_for:",
    "  - security_sensitive",
    "  - failing_checks",
    "  - conflicting_prs",
    "  - unclear_canonical",
    "  - broad_code_delta",
    "canonical:",
    `  - \"${item.canonical}\"`,
    "candidates:",
    `  - \"${item.target}\"`,
    `  - \"${item.canonical}\"`,
    "cluster_refs:",
    `  - \"${item.target}\"`,
    `  - \"${item.canonical}\"`,
    "overlap_policy: \"skip-any\"",
    "security_policy: central_security_only",
    "security_sensitive: false",
    "allow_instant_close: true",
    "allow_fix_pr: false",
    "allow_merge: false",
    "allow_post_merge_close: false",
    "require_fix_before_close: false",
    `canonical_hint: ${quoteYaml(canonicalHint)}`,
    `notes: ${quoteYaml(`Generated from ProjectClownfish result ${item.clusterId} after live refetch on ${new Date().toISOString().slice(0, 10)}.`)}`,
    "---",
    "",
    `# ${title}`,
    "",
    "## Goal",
    "",
    `Run one live close-only cleanup pass. Hydrate ${item.target} and ${item.canonical}, then emit at most one planned close action for ${item.target}. Do not merge, fix, raise a PR, or close the merged candidate.`,
    "",
    "## Live Refetch Baseline",
    "",
    `- target: ${item.target} ${item.targetLive.title}`,
    `- target live state at generation: ${item.targetLive.state}`,
    `- target updatedAt at generation: ${item.targetLive.updatedAt ?? "unknown"}`,
    `- canonical/candidate: ${item.canonical} ${item.canonicalLive.title}`,
    `- canonical/candidate live state at generation: ${item.canonicalLive.state}`,
    `- canonical/candidate mergedAt at generation: ${item.canonicalLive.mergedAt ?? "unknown"}`,
    `- source result: ProjectClownfish workflow run ${item.runId}`,
    "",
    "## Instructions",
    "",
    closeCanaryInstruction(item, preferredAction),
    "",
  ].join("\n");

  if (!dryRun) {
    fs.writeFileSync(filePath, markdown, "utf8");
    const job = parseJob(filePath);
    const errors = validateJob(job);
    if (errors.length > 0) {
      for (const error of errors) console.error(`- ${error}`);
      process.exit(1);
    }
  }
  return { path: relative, cluster_id: clusterId, target: item.target, canonical: item.canonical };
}

function closeInstruction(item) {
  const mergedCandidate = item.canonicalLive.type === "pr" && item.canonicalLive.state === "MERGED" && Boolean(item.canonicalLive.mergedAt);
  if (mergedCandidate) {
    return `\`close_fixed_by_candidate\` with \`candidate_fix: "${item.canonical}"\``;
  }
  if (item.action === "close_duplicate") {
    return `\`close_duplicate\` with \`canonical: "${item.canonical}"\``;
  }
  return `\`${item.action}\` with \`canonical: "${item.canonical}"\``;
}

function closeCanaryInstruction(item, preferredAction) {
  const mergedCandidate = item.canonicalLive.type === "pr" && item.canonicalLive.state === "MERGED" && Boolean(item.canonicalLive.mergedAt);
  if (mergedCandidate) {
    return `If ${item.target} is still open and ${item.canonical} is still merged, prefer ${preferredAction} for ${item.target}. Do not emit \`close_superseded\` with closed/merged ${item.canonical} in \`canonical\`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with \`needs_human\`.`;
  }
  return `If ${item.target} is still open and ${item.canonical} is still open, prefer ${preferredAction} for ${item.target}. Do not use \`candidate_fix\` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with \`needs_human\`.`;
}

function safeJsonFile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return {};
  }
}

function ghJson(ghArgs) {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  let text = "";
  try {
    text = execFileSync("ghx", ghArgs, {
      cwd: repoRoot(),
      env,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch (error) {
    text = String(error.stdout ?? "");
    if (!text.trim()) throw error;
  }
  return JSON.parse(stripAnsi(text) || "null");
}

function stripAnsi(text) {
  return text.replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function publicItem(item) {
  return {
    target: item.target,
    canonical: item.canonical,
    action: item.action,
    run_id: item.runId,
    cluster_id: item.clusterId,
  };
}

function normalizeRef(value) {
  const match = String(value ?? "").match(/#?([0-9]+)/);
  return match ? `#${match[1]}` : "";
}

function oneLine(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function excerpt(value, max = 700) {
  const text = oneLine(value);
  return text.length > max ? `${text.slice(0, max - 3)}...` : text;
}

function quoteYaml(value) {
  return JSON.stringify(String(value ?? ""));
}

function todayStamp() {
  return `${new Date().toISOString().replace(/[-:.]/g, "").slice(0, 8)}-bulk`;
}

function numberArg(name, fallback) {
  const raw = args[name] ?? args[name.replaceAll("-", "_")] ?? fallback;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1) die(`--${name} must be a positive integer`);
  return value;
}

function die(message) {
  console.error(message);
  process.exit(2);
}
