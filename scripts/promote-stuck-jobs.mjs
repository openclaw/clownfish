#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseArgs, repoRoot } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? "openclaw");
const inboxDir = path.resolve(String(args.inbox ?? path.join(repoRoot(), "jobs", repo, "inbox")));
const stuckDir = path.resolve(String(args.stuck ?? path.join(repoRoot(), "jobs", repo, "outbox", "stuck")));
const reportPath = path.resolve(String(args.report ?? path.join(repoRoot(), "results", "stuck-job-promotion.json")));
const limit = numberArg("limit", 20);
const apply = Boolean(args.apply || args.execute);
const sort = String(args.sort ?? "name");

if (!["name", "mtime"].includes(sort)) {
  throw new Error("sort must be name or mtime");
}

const candidates = listJobs(stuckDir).sort(sort === "mtime" ? sortOldestFirst : sortByName);
const selected = candidates.slice(0, limit);
const rows = selected.map((job) => promoteJob(job));
const report = {
  status: apply ? "applied" : "dry_run",
  repo,
  inbox_dir: path.relative(repoRoot(), inboxDir),
  stuck_dir: path.relative(repoRoot(), stuckDir),
  generated_at: new Date().toISOString(),
  totals: {
    available: candidates.length,
    selected: selected.length,
    promoted: rows.filter((row) => row.status === "promoted").length,
    planned: rows.filter((row) => row.status === "planned").length,
    blocked: rows.filter((row) => row.status === "blocked").length,
  },
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
      };
    });
}

function promoteJob(job) {
  const base = {
    job: job.name,
    source: path.relative(repoRoot(), job.source),
    destination: path.relative(repoRoot(), job.destination),
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

function numberArg(name, fallback) {
  const raw = args[name];
  if (raw === undefined || raw === true) return fallback;
  const value = Number(raw);
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function writeMarkdownReport(report, filePath) {
  const rows = report.jobs
    .map((job) => `| ${job.job} | ${job.status} | ${job.source} | ${job.destination} | ${job.reason} |`)
    .join("\n");
  const body = `# Stuck Job Promotion

Mode: ${report.status}

| Metric | Count |
| --- | ---: |
| Available | ${report.totals.available} |
| Selected | ${report.totals.selected} |
| Planned | ${report.totals.planned} |
| Promoted | ${report.totals.promoted} |
| Blocked | ${report.totals.blocked} |

| Job | Status | Source | Destination | Reason |
| --- | --- | --- | --- | --- |
${rows || "| _None_ |  |  |  |  |"}
`;
  fs.writeFileSync(filePath, body, "utf8");
}
