#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseArgs, repoRoot } from "./lib.mjs";
import { inferResultRunIdentity } from "./result-run-identity.mjs";

const args = parseArgs(process.argv.slice(2));
const artifactDir = path.resolve(String(args._[0] ?? "artifacts"));
const reviewReportPath = path.resolve(String(args["review-report"] ?? path.join(artifactDir, "review-results.json")));
const runsJsonPath = path.resolve(String(args["runs-json"] ?? path.join(artifactDir, "runs.json")));
const quarantinePath = path.resolve(String(args.quarantine ?? path.join(artifactDir, "review-quarantine.json")));
const terminalPath = path.resolve(String(args.terminal ?? path.join(artifactDir, "review-terminal.json")));

if (!fs.existsSync(reviewReportPath)) throw new Error(`review report not found: ${reviewReportPath}`);
if (!fs.existsSync(runsJsonPath)) throw new Error(`runs json not found: ${runsJsonPath}`);

const reviewReport = readJson(reviewReportPath);
const reports = Array.isArray(reviewReport.reports) ? reviewReport.reports : [];
const failedReports = reports.filter((report) => report.status === "failed");
const quarantined = [];
const failedRunIds = new Set();
const terminalRejections = [];

for (const report of failedReports) {
  const resultPath = resolveReportPath(report.result ?? report.input);
  const runId = inferRunId(resultPath);
  if (runId) failedRunIds.add(runId);
  const terminalRejection = terminalRejectionFor(report, resultPath);
  if (terminalRejection) terminalRejections.push(terminalRejection);

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
const remainingRunIds = remainingResultRunIds(artifactDir);
const filteredRows = rows.filter((row) => {
  const runId = String(row.run_id ?? row.databaseId ?? row.id ?? "");
  return remainingRunIds.has(runId);
});
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
fs.writeFileSync(
  terminalPath,
  `${JSON.stringify(
    {
      version: 1,
      generated_at: new Date().toISOString(),
      artifact_dir: artifactDir,
      review_report: reviewReportPath,
      rejections: uniqueTerminalRejections(terminalRejections),
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
      terminal_rejections: terminalRejections.length,
      terminal: terminalPath,
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
  return inferResultRunIdentity(filePath)?.workflow_run_id ?? null;
}

function remainingResultRunIds(root) {
  const ids = new Set();
  if (!fs.existsSync(root)) return ids;
  for (const entry of fs.readdirSync(root, { recursive: true })) {
    const filePath = path.join(root, String(entry));
    if (path.basename(filePath) !== "result.json" || !fs.statSync(filePath).isFile()) continue;
    const runId = inferRunId(filePath);
    if (runId) ids.add(runId);
  }
  return ids;
}

function terminalRejectionFor(report, resultPath) {
  const rejection = report?.terminal_rejection;
  const identity = inferResultRunIdentity(resultPath);
  if (!identity || !rejection || rejection.code !== "high_risk_close_target") return null;
  if (!Array.isArray(rejection.targets) || rejection.targets.length === 0) return null;
  const targets = [...new Set(rejection.targets.map(String))].sort();
  if (!targets.every((target) => /^#\d+$/.test(target))) return null;
  return {
    run_id: identity.run_id,
    workflow_run_id: identity.workflow_run_id,
    run_attempt: identity.run_attempt,
    matrix_index: identity.matrix_index,
    code: rejection.code,
    targets,
  };
}

function uniqueTerminalRejections(rejections) {
  return [
    ...new Map(
      rejections
        .sort((left, right) => left.run_id.localeCompare(right.run_id))
        .map((rejection) => [rejection.run_id, rejection]),
    ).values(),
  ];
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function relative(filePath) {
  const rel = path.relative(repoRoot(), filePath);
  return rel.startsWith("..") ? filePath : rel;
}
