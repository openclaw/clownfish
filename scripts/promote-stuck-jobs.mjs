#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { hasSecuritySignalText, parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? "openclaw");
const inboxDir = path.resolve(String(args.inbox ?? path.join(repoRoot(), "jobs", repo, "inbox")));
const stuckDir = path.resolve(String(args.stuck ?? path.join(repoRoot(), "jobs", repo, "outbox", "stuck")));
const reportPath = path.resolve(String(args.report ?? path.join(repoRoot(), "results", "stuck-job-promotion.json")));
const apply = Boolean(args.apply || args.execute);
const sort = String(args.sort ?? "name");
const modeFilter = String(args.mode ?? "all");
const includeSecurity = booleanArg("include-security", false);
const maxOpenCandidates = optionalNumberArg("max-open-candidates");
const minOpenCandidates = optionalNumberArg("min-open-candidates");
const maxMembers = optionalNumberArg("max-members");

if (!["name", "mtime", "size"].includes(sort)) {
  throw new Error("sort must be name, mtime, or size");
}
if (!["all", "plan", "execute", "autonomous"].includes(modeFilter)) {
  throw new Error("--mode must be one of all, plan, execute, autonomous");
}

const allJobs = listJobs(stuckDir).sort(sort === "mtime" ? sortOldestFirst : sort === "size" ? sortLargestFirst : sortByName);
const candidates = allJobs.filter(matchesFilters);
const limit = limitArg("limit", 20, candidates.length);
const selected = candidates.slice(0, limit);
const rows = selected.map((job) => promoteJob(job));
const skipped = allJobs.filter((job) => !candidates.includes(job));
const report = {
  status: apply ? "applied" : "dry_run",
  repo,
  inbox_dir: path.relative(repoRoot(), inboxDir),
  stuck_dir: path.relative(repoRoot(), stuckDir),
  sort,
  filters: {
    mode: modeFilter,
    include_security: includeSecurity,
    max_open_candidates: maxOpenCandidates,
    min_open_candidates: minOpenCandidates,
    max_members: maxMembers,
  },
  limit,
  generated_at: new Date().toISOString(),
  totals: {
    available: allJobs.length,
    eligible: candidates.length,
    skipped: skipped.length,
    selected: selected.length,
    promoted: rows.filter((row) => row.status === "promoted").length,
    planned: rows.filter((row) => row.status === "planned").length,
    blocked: rows.filter((row) => row.status === "blocked").length,
  },
  skipped_by_reason: countBy(skipped.flatMap((job) => job.skip_reasons), (reason) => reason),
  jobs: rows,
};

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
writeMarkdownReport(report, reportPath.replace(/\.json$/i, ".md"));
console.log(JSON.stringify(report, null, 2));

function listJobs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => {
      const filePath = path.join(dir, entry.name);
      return {
        name: entry.name,
        source: filePath,
        destination: path.join(inboxDir, entry.name),
        mtimeMs: fs.statSync(filePath).mtimeMs,
        ...readJobSummary(filePath),
      };
    });
}

function promoteJob(job) {
  const base = {
    job: job.name,
    source: path.relative(repoRoot(), job.source),
    destination: path.relative(repoRoot(), job.destination),
    total_members: job.totalMembers,
    open_candidates: job.openCandidates,
    mode: job.mode,
    cluster_id: job.clusterId,
    ref_count: job.refCount,
    title: job.title,
  };
  if (fs.existsSync(job.destination)) {
    return { ...base, status: "blocked", reason: "destination already exists" };
  }
  if (!apply) return { ...base, status: "planned", reason: "dry run" };

  fs.mkdirSync(inboxDir, { recursive: true });
  fs.renameSync(job.source, job.destination);
  return { ...base, status: "promoted", reason: "moved to inbox" };
}

function sortByName(left, right) {
  return left.name.localeCompare(right.name);
}

function sortOldestFirst(left, right) {
  return left.mtimeMs - right.mtimeMs || sortByName(left, right);
}

function sortLargestFirst(left, right) {
  return right.totalMembers - left.totalMembers || right.openCandidates - left.openCandidates || sortByName(left, right);
}

function readJobSummary(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = safeParseJob(filePath);
  return {
    clusterId: parsed.job?.frontmatter?.cluster_id ?? null,
    mode: parsed.job?.frontmatter?.mode ?? "unknown",
    refCount: parsed.job ? targetRefCount(parsed.job) : 0,
    totalMembers: Number(raw.match(/- total members:\s*(\d+)/)?.[1] ?? 0),
    openCandidates: Number(raw.match(/- open candidates in local store:\s*(\d+)/)?.[1] ?? 0),
    title: raw.match(/Display title:\n\n>\s*(.+)/)?.[1] ?? "",
    securitySensitive: parsed.job?.frontmatter?.security_sensitive === true || hasSecuritySignalText(raw),
    validationErrors: parsed.errors,
  };
}

function safeParseJob(filePath) {
  try {
    const job = parseJob(filePath);
    return { job, errors: validateJob(job) };
  } catch (error) {
    return { job: null, errors: [error.message] };
  }
}

function matchesFilters(job) {
  job.skip_reasons = skipReasons(job);
  return job.skip_reasons.length === 0;
}

function skipReasons(job) {
  const reasons = [];
  if (job.validationErrors.length > 0) reasons.push("invalid_job");
  if (modeFilter !== "all" && job.mode !== modeFilter) reasons.push("mode");
  if (!includeSecurity && job.securitySensitive) reasons.push("security_sensitive");
  if (maxOpenCandidates !== null && job.openCandidates > maxOpenCandidates) reasons.push("too_many_open_candidates");
  if (minOpenCandidates !== null && job.openCandidates < minOpenCandidates) reasons.push("too_few_open_candidates");
  if (maxMembers !== null && job.totalMembers > maxMembers) reasons.push("too_many_members");
  return reasons;
}

function targetRefCount(job) {
  const refs = [
    ...(job.frontmatter.canonical ?? []),
    ...(job.frontmatter.candidates ?? []),
    ...(job.frontmatter.cluster_refs ?? []),
  ];
  return new Set(refs.map((ref) => String(ref)).filter((ref) => /^#\d+$/.test(ref))).size;
}

function limitArg(name, fallback, allCount) {
  const raw = args[name];
  if (raw === undefined || raw === true) return fallback;
  if (String(raw).toLowerCase() === "all") return allCount;
  const value = Number(raw);
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function optionalNumberArg(name) {
  const raw = args[name] ?? args[name.replaceAll("-", "_")];
  if (raw === undefined || raw === false) return null;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 0) throw new Error(`--${name} must be a non-negative integer`);
  return value;
}

function booleanArg(name, fallback) {
  const raw = args[name] ?? args[name.replaceAll("-", "_")];
  if (raw === undefined) return fallback;
  if (raw === true || raw === "true") return true;
  if (raw === false || raw === "false") return false;
  throw new Error(`--${name} must be true or false`);
}

function countBy(items, keyFn) {
  const out = {};
  for (const item of items) {
    const key = String(keyFn(item) || "unknown");
    out[key] = (out[key] ?? 0) + 1;
  }
  return out;
}

function writeMarkdownReport(report, filePath) {
  const rows = report.jobs
    .map(
      (job) =>
        `| ${job.job} | ${job.mode ?? "unknown"} | ${job.total_members ?? 0} | ${job.open_candidates ?? 0} | ${job.ref_count ?? 0} | ${job.status} | ${job.source} | ${job.destination} | ${job.reason} |`,
    )
    .join("\n");
  const body = `# Stuck Job Promotion

Mode: ${report.status}

| Metric | Count |
| --- | ---: |
| Available | ${report.totals.available} |
| Eligible | ${report.totals.eligible} |
| Skipped | ${report.totals.skipped} |
| Selected | ${report.totals.selected} |
| Planned | ${report.totals.planned} |
| Promoted | ${report.totals.promoted} |
| Blocked | ${report.totals.blocked} |

Filters:

- mode: ${report.filters.mode}
- include security: ${report.filters.include_security ? "yes" : "no"}
- max open candidates: ${report.filters.max_open_candidates ?? "none"}
- min open candidates: ${report.filters.min_open_candidates ?? "none"}
- max members: ${report.filters.max_members ?? "none"}

| Job | Mode | Members | Open | Refs | Status | Source | Destination | Reason |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- |
${rows || "| _None_ |  |  |  |  |  |  |  |  |"}
`;
  fs.writeFileSync(filePath, body, "utf8");
}
