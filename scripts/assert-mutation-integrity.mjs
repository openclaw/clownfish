#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const RETRYABLE_STATUSES = new Set(["blocked", "failed"]);
const REPORT_NAMES = new Set([
  "apply-report.json",
  "clownfish-label-report.json",
  "external-merge-preflight-report.json",
  "fix-execution-report.json",
  "post-flight-report.json",
]);

const root = path.resolve(process.argv[2] ?? ".projectclownfish/runs");
const reports = findReports(root);
const failures = uniqueFailures(
  reports.flatMap((reportPath) => {
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    return terminalActions(reportPath, report).filter(isRetryableFailure).map((failure) => ({
      report: path.relative(process.cwd(), reportPath),
      target: failure.target ?? failure.pr ?? null,
      action: failure.action ?? null,
      status: failure.status,
      transient_error: failure.transient_error ?? null,
      reason: failure.reason ?? null,
    }));
  }),
);

if (failures.length > 0) {
  console.error(
    JSON.stringify(
      {
        status: "failed",
        reason: "retryable mutation failures require another run",
        failures,
      },
      null,
      2,
    ),
  );
  process.exitCode = 1;
} else {
  console.log(JSON.stringify({ status: "passed", reports_checked: reports.length }, null, 2));
}

function findReports(inputPath) {
  if (!fs.existsSync(inputPath)) return [];
  const stat = fs.statSync(inputPath);
  if (stat.isFile()) return REPORT_NAMES.has(path.basename(inputPath)) ? [inputPath] : [];

  const reports = [];
  for (const entry of fs.readdirSync(inputPath, { withFileTypes: true })) {
    const entryPath = path.join(inputPath, entry.name);
    if (entry.isDirectory()) {
      reports.push(...findReports(entryPath));
    } else if (entry.isFile() && REPORT_NAMES.has(entry.name)) {
      reports.push(entryPath);
    }
  }
  return reports.sort();
}

function terminalActions(reportPath, report) {
  switch (path.basename(reportPath)) {
    case "external-merge-preflight-report.json":
      return (report?.actions ?? []).flatMap((action) => action?.apply_actions ?? [action]);
    case "clownfish-label-report.json":
      return report?.targets ?? [];
    default:
      return report?.actions ?? [];
  }
}

function isRetryableFailure(action) {
  return (
    action?.retry_recommended === true &&
    RETRYABLE_STATUSES.has(String(action.status ?? ""))
  );
}

function uniqueFailures(rows) {
  const byFailure = new Map();
  for (const row of rows) {
    const key = JSON.stringify([
      row.target,
      row.action,
      row.status,
      row.transient_error,
      row.reason,
    ]);
    if (!byFailure.has(key)) byFailure.set(key, row);
  }
  return [...byFailure.values()];
}
