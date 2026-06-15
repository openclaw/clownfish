#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseArgs, repoRoot } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const artifactDir = path.resolve(String(args._[0] ?? "artifacts"));
const reviewReportPath = path.resolve(String(args["review-report"] ?? path.join(artifactDir, "review-results.json")));
const runsJsonPath = path.resolve(String(args["runs-json"] ?? path.join(artifactDir, "runs.json")));
const quarantinePath = path.resolve(String(args.quarantine ?? path.join(artifactDir, "review-quarantine.json")));

if (!fs.existsSync(reviewReportPath)) throw new Error(`review report not found: ${reviewReportPath}`);
if (!fs.existsSync(runsJsonPath)) throw new Error(`runs json not found: ${runsJsonPath}`);

const reviewReport = readJson(reviewReportPath);
const reports = Array.isArray(reviewReport.reports) ? reviewReport.reports : [];
const failedReports = reports.filter((report) => report.status === "failed");
const quarantined = [];
const failedRunIds = new Set();

for (const report of failedReports) {
  const resultPath = resolveReportPath(report.result);
  const runId = inferRunId(resultPath);
  if (runId) failedRunIds.add(runId);

  const quarantinedPath = `${resultPath}.failed`;
  if (fs.existsSync(resultPath)) {
    fs.renameSync(resultPath, quarantinedPath);
  }
  quarantined.push({
    ...report,
    run_id: runId,
    result: relative(resultPath),
    quarantined_result: fs.existsSync(quarantinedPath) ? relative(quarantinedPath) : null,
  });
}

const rows = readJson(runsJsonPath);
if (!Array.isArray(rows)) throw new Error(`runs json must be an array: ${runsJsonPath}`);
const filteredRows = rows.filter((row) => !failedRunIds.has(String(row.run_id ?? row.databaseId ?? row.id ?? "")));
fs.writeFileSync(runsJsonPath, `${JSON.stringify(filteredRows, null, 2)}\n`, "utf8");
fs.writeFileSync(
  quarantinePath,
  `${JSON.stringify(
    {
      generated_at: new Date().toISOString(),
      artifact_dir: artifactDir,
      review_report: reviewReportPath,
      runs_json: runsJsonPath,
      failed_reports: failedReports.length,
      failed_run_ids: [...failedRunIds],
      runs_before: rows.length,
      runs_after: filteredRows.length,
      quarantined,
    },
    null,
    2,
  )}\n`,
  "utf8",
);

console.log(
  JSON.stringify(
    {
      status: "ok",
      failed_reports: failedReports.length,
      failed_run_ids: failedRunIds.size,
      runs_before: rows.length,
      runs_after: filteredRows.length,
      quarantine: quarantinePath,
    },
    null,
    2,
  ),
);

function resolveReportPath(value) {
  const filePath = String(value ?? "");
  if (!filePath) return "";
  return path.isAbsolute(filePath) ? filePath : path.join(repoRoot(), filePath);
}

function inferRunId(filePath) {
  const match = String(filePath).match(/projectclownfish(?:-worker)?-(\d+)-\d+/);
  return match?.[1] ?? null;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function relative(filePath) {
  const rel = path.relative(repoRoot(), filePath);
  return rel.startsWith("..") ? filePath : rel;
}
