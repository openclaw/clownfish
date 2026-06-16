#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { hasSecuritySignalText, parseArgs, repoRoot } from "./lib.mjs";

const DEFAULT_BLOCK_LABELS = [
  "proof:*",
  "status:*ready for maintainer look",
  "status:*waiting on author",
  "status:*needs proof",
  "triage: needs-real-behavior-proof",
  "triage: mock-only-proof",
  "merge-risk:*",
  "rating:*platinum",
  "rating:*gold",
  "rating:*diamond",
];
const rawArgv = process.argv.slice(2);
const args = parseArgs(rawArgv);
const repo = String(args.repo ?? "openclaw/openclaw");
const dbPath = path.resolve(String(args.db ?? path.join(os.homedir(), ".config", "gitcrawl", "gitcrawl.db")));
const outDir = path.resolve(String(args.out ?? path.join(repoRoot(), "jobs", repo.split("/")[0], "inbox")));
const mode = String(args.mode ?? "autonomous");
const limit = numberArg("limit", 20);
const batchSize = numberArg("batch-size", 5);
const minScore = numberArg("min-score", 2);
const maxFiles = numberArg("max-files", 120);
const sort = String(args.sort ?? "stale");
const suffix = optionalSlug(args.suffix ?? "");
const skipExisting = args["skip-existing"] !== "false";
const hydrateFilesLive = Boolean(args["hydrate-files-live"] ?? args.hydrate_files_live);
const liveFileCandidateLimit = numberArg("live-file-candidate-limit", Math.max(limit * 10, 300));
const requiredSignals = signalSet(argValues(rawArgv, ["require-signal", "require_signal"], args["require-signal"] ?? args.require_signal ?? ""));
const excludedSignals = signalSet(argValues(rawArgv, ["exclude-signal", "exclude_signal"], args["exclude-signal"] ?? args.exclude_signal ?? ""));
const requiredLabels = labelSet(argValues(rawArgv, ["require-label", "require_label"], args["require-label"] ?? args.require_label ?? ""));
const excludedLabels = labelSet(argValues(rawArgv, ["exclude-label", "exclude_label"], args["exclude-label"] ?? args.exclude_label ?? ""));
const blockedLabelPatterns = compileLabelPatterns(
  argValues(rawArgv, ["block-label", "block_label"], args["block-label"] ?? args.block_label ?? DEFAULT_BLOCK_LABELS),
);
const ghCommand = String(args["gh-bin"] ?? args.gh_bin ?? process.env.CLOWNFISH_GH_BIN ?? firstAvailableCommand(["ghx", "gh"]));
const dryRun = Boolean(args["dry-run"]);
const jsonOutput = Boolean(args.json);
const changedFilesSourceSql = changedFilesSource();

if (!["plan", "execute", "autonomous"].includes(mode)) {
  console.error("mode must be plan, execute, or autonomous");
  process.exit(2);
}
if (!["stale", "recent", "score"].includes(sort)) {
  console.error("sort must be stale, recent, or score");
  process.exit(2);
}

const candidates = selectCandidates();
const batches = [];
for (let i = 0; i < candidates.length; i += batchSize) {
  batches.push(candidates.slice(i, i + batchSize));
}

fs.mkdirSync(outDir, { recursive: true });
const generated = batches.map((batch, index) => writeJob(batch, index + 1));

if (jsonOutput) {
  console.log(
    JSON.stringify(
      {
        options: {
          repo,
          mode,
          limit,
          batch_size: batchSize,
          min_score: minScore,
          max_files: maxFiles,
          sort,
          required_signals: [...requiredSignals],
          excluded_signals: [...excludedSignals],
          required_labels: [...requiredLabels],
          excluded_labels: [...excludedLabels],
          blocked_labels: blockedLabelPatterns.map((pattern) => pattern.source),
        },
        generated,
        candidates,
      },
      null,
      2,
    ),
  );
} else {
  for (const item of generated) console.log(item.path);
}

function selectCandidates() {
  const existing = skipExisting ? existingLowSignalRefs() : new Set();
  const rows = sqliteJson(`
    select
      t.id,
      t.number,
      t.state,
      t.title,
      t.body,
      t.author_login,
      t.author_type,
      t.labels_json,
      t.assignees_json,
      t.raw_json,
      t.is_draft,
      t.created_at_gh,
      t.updated_at_gh,
      t.last_pulled_at,
      group_concat(distinct f.path) as files
    from threads t
    join repositories r on r.id = t.repo_id
    left join (${changedFilesSourceSql}) f on f.thread_id = t.id
    where r.owner = ${sqlString(repo.split("/")[0])}
      and r.name = ${sqlString(repo.split("/")[1])}
      and t.kind = 'pull_request'
      and t.state = 'open'
      and t.closed_at_local is null
    group by t.id
  `);
  hydrateRowsWithLiveFiles(rows);

  return rows
    .map((row) => scoreCandidate(row))
    .filter((candidate) => !existing.has(candidate.ref))
    .filter((candidate) => candidate.score >= minScore)
    .filter((candidate) => requiredSignals.size === 0 || candidate.signals.some((signal) => requiredSignals.has(signal)))
    .filter((candidate) => !candidate.signals.some((signal) => excludedSignals.has(signal)))
    .filter((candidate) => requiredLabels.size === 0 || candidate.labels_normalized.some((label) => requiredLabels.has(label)))
    .filter((candidate) => !candidate.labels_normalized.some((label) => excludedLabels.has(label)))
    .filter((candidate) => candidate.files.length <= maxFiles)
    .sort(compareCandidates)
    .slice(0, limit);
}

function hydrateRowsWithLiveFiles(rows) {
  if (!hydrateFilesLive) return;
  const selected = rows
    .filter((row) => !String(row.files ?? "").trim())
    .filter((row) => !candidateHasDeterministicBlocker(row))
    .sort(compareRowsForHydration)
    .slice(0, liveFileCandidateLimit);
  if (selected.length === 0) return;

  const filesByNumber = fetchLivePullRequestFiles(selected.map((row) => Number(row.number)));
  for (const row of selected) {
    const files = filesByNumber.get(Number(row.number));
    if (files) row.files = files.join(",");
  }
}

function candidateHasDeterministicBlocker(row) {
  const raw = safeJson(row.raw_json);
  const labels = safeJson(row.labels_json);
  const assignees = safeJson(row.assignees_json);
  const title = String(row.title ?? "");
  const body = String(row.body ?? "");
  return isMaintainerAssociated(raw.author_association) || assignees.length > 0 || hasSecuritySignalText(title, body, labels);
}

function compareRowsForHydration(left, right) {
  const leftDate = String(left.updated_at_gh ?? left.last_pulled_at ?? "");
  const rightDate = String(right.updated_at_gh ?? right.last_pulled_at ?? "");
  if (sort === "recent") return rightDate.localeCompare(leftDate);
  return leftDate.localeCompare(rightDate);
}

function fetchLivePullRequestFiles(numbers) {
  const out = new Map();
  const uniqueNumbers = unique(numbers.filter(Number.isInteger));
  for (let index = 0; index < uniqueNumbers.length; index += 25) {
    const batch = uniqueNumbers.slice(index, index + 25);
    const payload = ghJson(["api", "graphql", "-f", `query=${renderPullRequestFilesQuery(batch)}`]);
    const fatalErrors = (payload.errors ?? []).filter(
      (error) => !/^Could not resolve to a PullRequest with the number of \d+\.$/.test(String(error.message ?? "")),
    );
    if (fatalErrors.length > 0) {
      throw new Error(`GitHub GraphQL failed while hydrating PR files: ${fatalErrors.map((error) => error.message).join("; ")}`);
    }
    for (const number of batch) {
      const node = payload.data?.repository?.[`pr${number}`];
      if (!node) continue;
      const files = (node.files?.nodes ?? []).map((file) => String(file.path ?? "")).filter(Boolean);
      if (node.files?.pageInfo?.hasNextPage) files.push("__truncated__");
      out.set(number, files);
    }
  }
  return out;
}

function renderPullRequestFilesQuery(numbers) {
  const [owner, name] = repo.split("/");
  return `query {
  repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) {
${numbers
  .map(
    (number) => `    pr${number}: pullRequest(number: ${number}) {
      files(first: 100) {
        nodes { path }
        pageInfo { hasNextPage }
      }
    }`,
  )
  .join("\n")}
  }
}`;
}

function scoreCandidate(row) {
  const raw = safeJson(row.raw_json);
  const labels = safeJson(row.labels_json);
  const assignees = safeJson(row.assignees_json);
  const files = unique(String(row.files ?? "").split(",").filter(Boolean));
  const title = String(row.title ?? "");
  const body = String(row.body ?? "");
  const signals = [];
  const blockers = [];

  if (isMaintainerAssociated(raw.author_association)) blockers.push(`author association is ${raw.author_association}`);
  if (assignees.length > 0) blockers.push("assigned PR");
  if (hasSecuritySignalText(title, body, labels)) blockers.push("security-sensitive text or labels");
  for (const label of labelNames(labels)) {
    const normalized = normalizeLabel(label);
    const blockedBy = blockedLabelPatterns.find((pattern) => pattern.test(normalized));
    if (blockedBy) blockers.push(`close-blocking label: ${label}`);
  }

  addSignal(signals, blankTemplateSignal(body), "blank_template");
  addSignal(signals, docsOnlySignal(title, files), "docs_only");
  addSignal(signals, testsOnlySignal(title, files), "test_only");
  addSignal(signals, refactorOnlySignal(title, body, files), "refactor_or_cleanup");
  addSignal(signals, thirdPartyCoreSignal(title, body, files), "third_party_or_external_capability");
  addSignal(signals, riskyInfraSignal(title, files), "risky_infra");
  addSignal(signals, dirtyBranchSignal(files), "dirty_branch");

  const hasConcreteFix = /\b(fixes|fixes?|root cause|repro|regression|bug|problem)\b/i.test(`${title}\n${body}`);
  if (hasConcreteFix && signals.length === 1 && !signals.includes("blank_template")) {
    blockers.push("possible focused fix needs human review");
  }

  const score = blockers.length > 0 ? 0 : signals.length;
  return {
    number: Number(row.number),
    ref: `#${row.number}`,
    title,
    author: row.author_login,
    author_association: raw.author_association ?? null,
    created_at: row.created_at_gh,
    updated_at: row.updated_at_gh ?? row.last_pulled_at,
    is_draft: Boolean(row.is_draft),
    files,
    file_count: files.length,
    labels: labelNames(labels),
    labels_normalized: labelNames(labels).map((label) => normalizeLabel(label)),
    score,
    signals,
    blockers,
    body_excerpt: excerpt(body),
  };
}

function writeJob(batch, index) {
  const now = new Date();
  const stamp = now.toISOString().replace(/[-:]/g, "").slice(0, 13);
  const suffixPart = suffix ? `-${suffix}` : "";
  const clusterId = `low-signal-pr-sweep-${stamp}${suffixPart}-${String(index).padStart(2, "0")}`;
  const filePath = path.join(outDir, `${clusterId}.md`);
  const markdown = [
    "---",
    `repo: ${repo}`,
    `cluster_id: ${clusterId}`,
    `mode: ${mode}`,
    "triage_policy: low_signal_prs",
    "allowed_actions:",
    "  - comment",
    "  - close",
    "blocked_actions:",
    "  - force_push",
    "  - bypass_checks",
    "  - merge",
    "  - fix",
    "  - label",
    "require_human_for:",
    "  - security_sensitive",
    "  - maintainer_signal",
    "  - active_author_followup",
    "  - focused_bug_fix",
    "  - green_checks",
    "  - technical_correctness_judgment",
    "canonical: []",
    "candidates:",
    ...yamlList(batch.map((candidate) => candidate.ref)),
    "cluster_refs:",
    ...yamlList(batch.map((candidate) => candidate.ref)),
    "security_policy: central_security_only",
    "security_sensitive: false",
    "allow_instant_close: false",
    "allow_low_signal_pr_close: true",
    "allow_fix_pr: false",
    "allow_merge: false",
    "allow_post_merge_close: false",
    `canonical_hint: ${quoteYaml("No canonical is needed; this is an opt-in low-signal PR cleanup sweep.")}`,
    `notes: ${quoteYaml(`Generated from local gitcrawl open PR data on ${now.toISOString()}.`)}`,
    "---",
    "",
    `# Low-Signal PR Sweep ${index}`,
    "",
    "Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.",
    "",
    "## Goal",
    "",
    "Review only the listed open pull requests. Emit `close_low_signal` with `classification: \"low_signal\"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.",
    "",
    "The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.",
    "",
    "## Gitcrawl Candidate Signals",
    "",
    ...batch.flatMap(candidateBlock),
    "",
  ].join("\n");

  if (!dryRun) fs.writeFileSync(filePath, markdown);
  return {
    path: path.relative(repoRoot(), filePath),
    cluster_id: clusterId,
    candidates: batch.map((candidate) => candidate.ref),
  };
}

function candidateBlock(candidate) {
  return [
    `### ${candidate.ref} ${candidate.title}`,
    "",
    `- author: ${candidate.author}`,
    `- updated: ${candidate.updated_at}`,
    `- score: ${candidate.score}`,
    `- signals: ${candidate.signals.join(", ")}`,
    `- files: ${candidate.file_count}`,
    `- body excerpt: ${candidate.body_excerpt || "none"}`,
    `- changed files: ${candidate.files.slice(0, 18).join(", ") || "not hydrated in gitcrawl"}`,
    "",
  ];
}

function existingLowSignalRefs() {
  const jobsDir = path.join(repoRoot(), "jobs");
  if (!fs.existsSync(jobsDir)) return new Set();
  const refs = new Set();
  for (const entry of fs.readdirSync(jobsDir, { recursive: true })) {
    const file = path.join(jobsDir, String(entry));
    if (!file.endsWith(".md") || !fs.statSync(file).isFile()) continue;
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes("triage_policy: low_signal_prs")) continue;
    for (const match of text.matchAll(/#(\d+)\b/g)) refs.add(`#${match[1]}`);
  }
  return refs;
}

function compareCandidates(left, right) {
  if (sort === "score") return right.score - left.score || staleCompare(left, right);
  if (sort === "recent") return String(right.updated_at).localeCompare(String(left.updated_at));
  return staleCompare(left, right);
}

function staleCompare(left, right) {
  return String(left.updated_at).localeCompare(String(right.updated_at));
}

function blankTemplateSignal(body) {
  const text = String(body ?? "");
  if (/Describe the problem and fix in 2.?5 bullets:\s*[\r\n]+\s*-\s*Problem:\s*[\r\n]+\s*-\s*Fix:/i.test(text)) {
    return true;
  }
  const placeholders = ["Problem:", "Why it matters:", "Describe the problem and fix"];
  return placeholders.filter((placeholder) => text.includes(placeholder)).length >= 2 && text.length < 700;
}

function docsOnlySignal(title, files) {
  return /\bdocs?\b/i.test(title) && files.length > 0 && files.every((file) => isDocsPath(file));
}

function testsOnlySignal(title, files) {
  return /\btest\b/i.test(title) && files.length > 0 && files.every((file) => isTestPath(file));
}

function refactorOnlySignal(title, body, files) {
  return /\b(refactor|cleanup|format|chore)\b/i.test(title) && !/#\d+\b/.test(`${title}\n${body}`) && files.length > 0;
}

function thirdPartyCoreSignal(title, body, files) {
  const text = `${title}\n${body}`.toLowerCase();
  return (
    /\b(new|add|feat).*(plugin|provider|channel|skill|tool|app)\b/.test(text) ||
    files.some((file) => /^apps\/linux\//.test(file))
  );
}

function riskyInfraSignal(title, files) {
  return (
    /\b(ci|infra|docker|build|release|workflow)\b/i.test(title) &&
    files.some((file) => /^\.github\/|^Dockerfile|^scripts\/|^fly\.|^render\.|^docker-compose/.test(file))
  );
}

function dirtyBranchSignal(files) {
  if (files.length < 12) return false;
  const topLevels = new Set(files.map((file) => file.split("/")[0]));
  return topLevels.size >= 4 || (files.some((file) => file.includes(".generated")) && topLevels.size >= 2);
}

function isDocsPath(file) {
  return /(^docs\/|^README|\.md$|\.mdx$|^skills\/|^\.github\/ISSUE_TEMPLATE)/.test(file);
}

function isTestPath(file) {
  return /(\.test\.|\.spec\.|__tests__|^test\/|^test-fixtures\/)/.test(file);
}

function isMaintainerAssociated(value) {
  return ["OWNER", "MEMBER", "COLLABORATOR"].includes(String(value ?? "").toUpperCase());
}

function addSignal(signals, enabled, name) {
  if (enabled) signals.push(name);
}

function signalSet(value) {
  return new Set(listArgValues(value));
}

function labelSet(value) {
  return new Set(listArgValues(value).map((label) => normalizeLabel(label)));
}

function argValues(argv, names, fallback) {
  const keys = new Set(names.map((name) => `--${name}`));
  const values = [];
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    const equalMatch = item.match(/^(--[^=]+)=(.*)$/);
    if (equalMatch) {
      if (keys.has(equalMatch[1])) values.push(equalMatch[2]);
      continue;
    }
    if (!keys.has(item)) continue;
    const next = argv[index + 1];
    if (next && !next.startsWith("--")) {
      values.push(next);
      index += 1;
    } else {
      values.push("true");
    }
  }
  return values.length > 0 ? values : fallback;
}

function listArgValues(value) {
  const values = Array.isArray(value) ? value : [value];
  return values
    .flatMap((item) => String(item ?? "").split(/[\n,]/))
    .map((item) => item.trim())
    .filter(Boolean);
}

function labelNames(labels) {
  return labels.map((label) => label.name ?? label).filter(Boolean).map(String);
}

function normalizeLabel(label) {
  return String(label ?? "").toLowerCase().replace(/\s+/g, " ").trim();
}

function compileLabelPatterns(values) {
  return listArgValues(values).map((value) => {
    const normalized = normalizeLabel(value);
    if (normalized.includes("*")) return new RegExp(`^${normalized.split("*").map(escapeRegExp).join(".*")}$`);
    return new RegExp(`^${escapeRegExp(normalized)}$`);
  });
}

function escapeRegExp(value) {
  return String(value).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
}

function optionalSlug(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  const slug = raw.toLowerCase().replace(/[^a-z0-9_.-]+/g, "-").replace(/^-+|-+$/g, "");
  if (!slug) return "";
  if (slug.length > 48) return slug.slice(0, 48).replace(/[-.]+$/g, "");
  return slug;
}

function sqliteJson(sql) {
  const output = execFileSync("sqlite3", ["-json", dbPath, sql], {
    cwd: repoRoot(),
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  }).trim();
  return JSON.parse(output || "[]");
}

function sqliteScalar(sql) {
  const output = execFileSync("sqlite3", [dbPath, sql], {
    cwd: repoRoot(),
    encoding: "utf8",
    maxBuffer: 1024 * 1024,
  }).trim();
  return output;
}

function ghJson(argv) {
  const output = execFileSync(ghCommand, argv, {
    cwd: repoRoot(),
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  }).trim();
  return JSON.parse(stripAnsi(output) || "{}");
}

function changedFilesSource() {
  const sources = [];
  if (tableExists("thread_revisions") && tableExists("thread_code_snapshots") && tableExists("thread_changed_files")) {
    sources.push(`
      select tr.thread_id, f.path
      from thread_revisions tr
      join thread_code_snapshots s on s.thread_revision_id = tr.id
      join thread_changed_files f on f.snapshot_id = s.id
    `);
  }
  if (tableExists("pull_request_files")) {
    sources.push(`
      select thread_id, path
      from pull_request_files
    `);
  }
  return sources.length > 0 ? sources.join("\nunion\n") : "select null as thread_id, null as path where 0";
}

function tableExists(table) {
  return Number(sqliteScalar(`select count(*) from sqlite_master where type = 'table' and name = ${sqlString(table)};`)) > 0;
}

function numberArg(name, fallback) {
  const value = Number(args[name] ?? fallback);
  if (!Number.isInteger(value) || value < 1) throw new Error(`--${name} must be a positive integer`);
  return value;
}

function yamlList(values) {
  if (values.length === 0) return ["  []"];
  return values.map((value) => `  - ${quoteYaml(value)}`);
}

function quoteYaml(value) {
  return JSON.stringify(String(value));
}

function sqlString(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

function safeJson(value) {
  try {
    return JSON.parse(value || "[]");
  } catch {
    return [];
  }
}

function unique(values) {
  return [...new Set(values)];
}

function excerpt(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, 240);
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-9;]*m/g, "");
}

function firstAvailableCommand(commands) {
  for (const command of commands) {
    try {
      execFileSync("sh", ["-lc", `command -v ${shellQuote(command)}`], { stdio: "ignore" });
      return command;
    } catch {
      // Keep looking.
    }
  }
  return commands[commands.length - 1];
}

function shellQuote(value) {
  return `'${String(value).replaceAll("'", "'\\''")}'`;
}
