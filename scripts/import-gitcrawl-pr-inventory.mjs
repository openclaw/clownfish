#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { parseArgs, repoRoot } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? "openclaw/openclaw");
const dbPath = path.resolve(String(args.db ?? path.join(os.homedir(), ".config", "gitcrawl", "gitcrawl.db")));
const outDir = path.resolve(String(args.out ?? path.join(repoRoot(), "jobs", repo.split("/")[0], "inbox")));
const existingDir = path.resolve(String(args["existing-dir"] ?? path.join(repoRoot(), "jobs", repo.split("/")[0])));
const mode = String(args.mode ?? "plan");
const limit = numberArg("limit", 500);
const batchSize = numberArg("batch-size", 10);
const sort = String(args.sort ?? "stale");
const bucketFilter = String(args.bucket ?? "all");
const skipExisting = args["skip-existing"] !== "false";
const includeSecurity = Boolean(args["include-security-candidates"]);
const dryRun = Boolean(args["dry-run"]);
const jsonOutput = Boolean(args.json);

if (mode !== "plan") {
  console.error("PR inventory shards are plan-only; use --mode plan");
  process.exit(2);
}
if (!["stale", "recent", "bucket"].includes(sort)) {
  console.error("sort must be stale, recent, or bucket");
  process.exit(2);
}

const existingRefs = skipExisting ? existingJobRefs(existingDir) : new Set();
const candidates = selectCandidates()
  .filter((candidate) => !skipExisting || !existingRefs.has(candidate.ref))
  .filter((candidate) => includeSecurity || candidate.bucket !== "security_route_candidate")
  .filter((candidate) => bucketFilter === "all" || candidate.bucket === bucketFilter)
  .sort(compareCandidates)
  .slice(0, limit);

const batches = [];
for (let i = 0; i < candidates.length; i += batchSize) {
  batches.push(candidates.slice(i, i + batchSize));
}

if (!dryRun) fs.mkdirSync(outDir, { recursive: true });
const generated = batches.map((batch, index) => writeJob(batch, index + 1));

if (jsonOutput) {
  console.log(JSON.stringify({
    generated,
    candidates,
    options: {
      repo,
      mode,
      dry_run: dryRun,
      limit,
      batch_size: batchSize,
      sort,
      bucket: bucketFilter,
      skip_existing: skipExisting,
      include_security_candidates: includeSecurity,
    },
    totals: {
      generated: generated.length,
      candidates: candidates.length,
      existing_refs: existingRefs.size,
    },
  }, null, 2));
} else {
  for (const item of generated) console.log(item.path);
}

function selectCandidates() {
  return sqliteJson(`
    select
      t.number,
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
      t.last_pulled_at
    from threads t
    join repositories r on r.id = t.repo_id
    where r.owner = ${sqlString(repo.split("/")[0])}
      and r.name = ${sqlString(repo.split("/")[1])}
      and t.kind = 'pull_request'
      and t.state = 'open'
      and t.closed_at_local is null
  `).map(classifyCandidate);
}

function classifyCandidate(row) {
  const raw = safeJson(row.raw_json, {});
  const labels = labelNames(row.labels_json);
  const assignees = safeJson(row.assignees_json, []);
  const title = String(row.title ?? "");
  const body = String(row.body ?? "");
  const authorAssociation = raw.author_association ?? "";
  const bucket = chooseBucket({ row, title, body, labels, assignees, authorAssociation });

  return {
    number: Number(row.number),
    ref: `#${row.number}`,
    title,
    author: row.author_login ?? "",
    author_association: authorAssociation || null,
    labels,
    assignees: assignees.map((assignee) => assignee.login ?? assignee).filter(Boolean),
    is_draft: Boolean(row.is_draft),
    created_at: row.created_at_gh ?? null,
    updated_at: row.updated_at_gh ?? row.last_pulled_at ?? null,
    bucket,
    body_excerpt: excerpt(body),
  };
}

function chooseBucket({ row, title, body, labels, assignees, authorAssociation }) {
  if (hasExactSecuritySignal({ title, body, labels })) return "security_route_candidate";
  if (isMaintainerAssociated(authorAssociation) || assignees.length > 0) return "maintainer_owned";
  if (Boolean(row.is_draft)) return "draft";
  if (labels.some((label) => /proof:\s*sufficient|ready for maintainer look/i.test(label))) {
    return "ready_for_maintainer";
  }
  if (labels.some((label) => /needs-real-behavior-proof|needs proof|needs-maintainer-review/i.test(label))) {
    return "needs_proof";
  }
  if (daysSince(row.updated_at_gh ?? row.last_pulled_at) >= 14) return "stale_unassigned";
  return "recent_active";
}

function writeJob(batch, index) {
  const now = new Date();
  const stamp = now.toISOString().replace(/[-:.]/g, "").slice(0, 15);
  const bucket = batch.every((item) => item.bucket === batch[0].bucket) ? batch[0].bucket : "mixed";
  const clusterId = `pr-inventory-${bucket}-${stamp}-${String(index).padStart(3, "0")}`;
  const filePath = path.join(outDir, `${clusterId}.md`);
  const refs = batch.map((candidate) => candidate.ref);
  const markdown = [
    "---",
    `repo: ${repo}`,
    `cluster_id: ${clusterId}`,
    "mode: plan",
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
    "  - maintainer_signal",
    "  - active_author_followup",
    "  - technical_correctness_judgment",
    "canonical: []",
    "candidates:",
    ...yamlList(refs),
    "cluster_refs:",
    ...yamlList(refs),
    "security_policy: central_security_only",
    "security_sensitive: false",
    `canonical_hint: ${quoteYaml("This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical.")}`,
    `notes: ${quoteYaml(`Generated from local gitcrawl open PR inventory on ${now.toISOString()}; bucket=${bucket}; no GitHub mutation is possible in plan mode.`)}`,
    "---",
    "",
    `# PR Inventory ${bucket} ${index}`,
    "",
    "This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.",
    "",
    "## Goal",
    "",
    "Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.",
    "",
    "## Inventory",
    "",
    ...batch.flatMap(candidateBlock),
    "",
  ].join("\n");

  if (!dryRun) fs.writeFileSync(filePath, markdown);
  return {
    path: path.relative(repoRoot(), filePath),
    cluster_id: clusterId,
    bucket,
    candidates: refs,
    dry_run: dryRun,
  };
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
    `- gitcrawl snapshot updated: ${candidate.updated_at || "unknown"} (ignore for target_updated_at; use hydrated preflight)`,
    `- body excerpt: ${scrubExcerpt(candidate.body_excerpt) || "none"}`,
    "",
  ];
}

function existingJobRefs(root) {
  if (!fs.existsSync(root)) return new Set();
  const refs = new Set();
  for (const entry of fs.readdirSync(root, { recursive: true })) {
    const file = path.join(root, String(entry));
    if (!file.endsWith(".md") || !fs.statSync(file).isFile()) continue;
    const text = fs.readFileSync(file, "utf8");
    for (const match of text.matchAll(/#(\d+)\b/g)) refs.add(`#${match[1]}`);
  }
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

function hasExactSecuritySignal({ title, body, labels }) {
  const exactSecurityLabel = labels.some((label) =>
    /^(?:security|security[-_: ]sensitive|security[:/].+|type:\s*security|kind:\s*security|impact:\s*security|clawsweeper:needs-security-review)$/i.test(label),
  );
  const structuredMarker = /<!--\s*clawsweeper-(?:security|route|verdict)\s*:\s*(?:security|security-sensitive|sensitive|route-security|central-security)\b[^>]*-->/i.test(
    `${title}\n${body}`,
  );
  return exactSecurityLabel || structuredMarker;
}

function isMaintainerAssociated(value) {
  return ["OWNER", "MEMBER", "COLLABORATOR"].includes(String(value ?? "").toUpperCase());
}

function daysSince(value) {
  const time = Date.parse(value ?? "");
  if (!Number.isFinite(time)) return 0;
  return Math.floor((Date.now() - time) / (24 * 60 * 60 * 1000));
}

function sqliteJson(sql) {
  const output = execFileSync("sqlite3", ["-json", dbPath, sql], {
    cwd: repoRoot(),
    encoding: "utf8",
    maxBuffer: 128 * 1024 * 1024,
  }).trim();
  return JSON.parse(output || "[]");
}

function numberArg(name, fallback) {
  const value = Number(args[name] ?? fallback);
  if (!Number.isInteger(value) || value < 1) throw new Error(`--${name} must be a positive integer`);
  return value;
}

function labelNames(value) {
  return safeJson(value, [])
    .map((label) => label.name ?? label)
    .filter(Boolean)
    .map(String);
}

function safeJson(value, fallback) {
  try {
    return JSON.parse(value || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
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

function excerpt(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, 260);
}

function scrubExcerpt(value) {
  return String(value ?? "")
    .replace(/\/Users\/[A-Za-z0-9._-]+/g, "/Users/<user>")
    .replace(/\/home\/[A-Za-z0-9._-]+/g, "/home/<user>")
    .replace(/\b(token|secret|password)=\S+/gi, "$1=<redacted>")
    .replace(/\b(token|secret|password):\s*\S+/gi, "$1: <redacted>");
}
