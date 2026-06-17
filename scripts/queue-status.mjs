#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { currentProjectRepo, parseArgs, parseJob, parseSimpleYaml, repoRoot } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const inboxDir = path.resolve(repoRoot(), String(args.inbox ?? "jobs/openclaw/inbox"));
const runsDir = path.resolve(repoRoot(), String(args["runs-dir"] ?? args.runs_dir ?? "results/runs"));
const resultReportsDir = path.resolve(
  repoRoot(),
  String(
    args["result-reports-dir"] ??
      args.result_reports_dir ??
      args["results-dir"] ??
      args.results_dir ??
      path.join("results", path.basename(path.dirname(inboxDir))),
  ),
);
const dispatchLedgerPath = path.resolve(
  repoRoot(),
  String(args["dispatch-ledger"] ?? args.dispatch_ledger ?? path.join(".projectclownfish", "dispatch-ledger.json")),
);
const dispatchRepo = String(args.repo ?? currentProjectRepo());
const jsonOutput = Boolean(args.json);
const skipSecretCheck = Boolean(args["skip-secret-check"] ?? args.skip_secret_check);
const allowAppTokenAuth = Boolean(
  args["allow-app-token-auth"] ?? args.allow_app_token_auth ?? process.env.CLOWNFISH_ALLOW_APP_TOKEN_AUTH === "1",
);
const sweepReportPath = args["sweep-report"] ?? args.sweep_report;
const planLimit = numberArg("plan-limit", 0);
const executeLimit = numberArg("execute-limit", 0);
const autonomousLimit = numberArg("autonomous-limit", 0);
const closeLimit = numberArg("close-limit", 0);
const sweepRequeueLimit = numberArg("sweep-requeue-limit", 0);
const planRefLimit = numberArg("plan-ref-limit", 0);
const executeRefLimit = numberArg("execute-ref-limit", 0);
const autonomousRefLimit = numberArg("autonomous-ref-limit", 0);
const closeRefLimit = numberArg("close-ref-limit", 0);
const sweepRequeueRefLimit = numberArg("sweep-requeue-ref-limit", 0);
const attemptFilter = String(args["attempt-filter"] ?? args.attempt_filter ?? "all");
const validAttemptFilters = new Set(["all", "unattempted", "attempted", "accepted", "failed"]);
if (!validAttemptFilters.has(attemptFilter)) {
  console.error(`--attempt-filter must be one of ${[...validAttemptFilters].join(", ")}`);
  process.exit(2);
}
if (sweepRequeueLimit > 0 && !sweepReportPath) {
  console.error("--sweep-requeue-limit requires --sweep-report");
  process.exit(2);
}

const jobs = readInboxJobs();
const resultsByCluster = readRunResults();
const attemptsByJob = readDispatchAttemptsByJob();
const rows = jobs.map(classifyJob);
const rowsByPath = new Map(rows.map((row) => [row.path, row]));
const missingPlan = rows.filter((row) => row.mode === "plan" && !row.has_result);
const missingExecute = rows.filter((row) => row.mode === "execute" && !row.has_result);
const missingAutonomous = rows.filter((row) => row.mode === "autonomous" && !row.has_result);
const closeCanaries = rows.filter((row) => row.close_canary && !row.has_result);
const liveSweepRequeue = selectLiveSweepRequeueCandidates(sweepReportPath, rowsByPath);
const attemptedMissing = rows.filter((row) => !row.has_result && row.latest_dispatch_attempt);
const unattemptedMissing = rows.filter((row) => !row.has_result && !row.latest_dispatch_attempt);
const secrets = skipSecretCheck ? null : readSecretNames(dispatchRepo);
const variables = skipSecretCheck ? null : readVariableNames(dispatchRepo);
const auth = summarizeAuth({ secrets, variables, targetRepos: new Set(rows.map((row) => row.repo).filter(Boolean)) });

const selectedRows = {
  plan: takeByLimits(filterByAttempt(missingPlan), { itemLimit: planLimit, refLimit: planRefLimit }),
  execute: takeByLimits(filterByAttempt(missingExecute), { itemLimit: executeLimit, refLimit: executeRefLimit }),
  autonomous: takeByLimits(filterByAttempt(missingAutonomous), {
    itemLimit: autonomousLimit,
    refLimit: autonomousRefLimit,
  }),
  close_canaries: takeByLimits(filterByAttempt(closeCanaries), { itemLimit: closeLimit, refLimit: closeRefLimit }),
  sweep_requeue: takeByLimits(liveSweepRequeue, {
    itemLimit: sweepRequeueLimit,
    refLimit: sweepRequeueRefLimit,
  }),
};
const selected = {
  plan: selectedRows.plan.map((row) => row.path),
  execute: selectedRows.execute.map((row) => row.path),
  autonomous: selectedRows.autonomous.map((row) => row.path),
  close_canaries: selectedRows.close_canaries.map((row) => row.path),
  sweep_requeue: selectedRows.sweep_requeue.map((row) => row.path),
};

writeJobsFile(args["write-missing-plan"] ?? args.write_missing_plan, selected.plan);
writeJobsFile(args["write-missing-execute"] ?? args.write_missing_execute, selected.execute);
writeJobsFile(args["write-missing-autonomous"] ?? args.write_missing_autonomous, selected.autonomous);
writeJobsFile(args["write-close-canaries"] ?? args.write_close_canaries, selected.close_canaries);
writeJobsFile(args["write-sweep-requeue"] ?? args.write_sweep_requeue, selected.sweep_requeue);

const payload = {
  generated_at: new Date().toISOString(),
  inbox: path.relative(repoRoot(), inboxDir),
  runs_dir: path.relative(repoRoot(), runsDir),
  result_reports_dir: path.relative(repoRoot(), resultReportsDir),
  dispatch_ledger: path.relative(repoRoot(), dispatchLedgerPath),
  sweep_report: sweepReportPath ? path.resolve(String(sweepReportPath)) : null,
  dispatch_repo: dispatchRepo,
  attempt_filter: attemptFilter,
  auth,
  totals: {
    inbox_jobs: rows.length,
    with_results: rows.filter((row) => row.has_result).length,
    missing_results: rows.filter((row) => !row.has_result).length,
    missing_plan: missingPlan.length,
    missing_execute: missingExecute.length,
    missing_autonomous: missingAutonomous.length,
    close_canaries_ready: closeCanaries.length,
    live_sweep_requeue_candidates: liveSweepRequeue.length,
    attempted_missing_results: attemptedMissing.length,
    unattempted_missing_results: unattemptedMissing.length,
  },
  by_missing_attempt_status: countBy(
    rows.filter((row) => !row.has_result),
    (row) => row.latest_dispatch_attempt?.status ?? "unattempted",
  ),
  ref_totals: {
    all_jobs: sumBy(rows, (row) => row.ref_count),
    missing_results: sumBy(rows.filter((row) => !row.has_result), (row) => row.ref_count),
    missing_plan: sumBy(missingPlan, (row) => row.ref_count),
    missing_execute: sumBy(missingExecute, (row) => row.ref_count),
    missing_autonomous: sumBy(missingAutonomous, (row) => row.ref_count),
    close_canaries_ready: sumBy(closeCanaries, (row) => row.ref_count),
    live_sweep_requeue_candidates: sumBy(liveSweepRequeue, (row) => row.ref_count),
  },
  by_mode: countBy(rows, (row) => row.mode),
  by_mode_result: countBy(rows, (row) => `${row.mode}:${row.has_result ? "has_result" : "missing_result"}`),
  selected_counts: Object.fromEntries(Object.entries(selected).map(([name, items]) => [name, items.length])),
  selected_ref_counts: Object.fromEntries(
    Object.entries(selectedRows).map(([name, items]) => [name, sumBy(items, (row) => row.ref_count)]),
  ),
  selected,
  rows: jsonOutput ? rows : undefined,
};

if (jsonOutput) {
  console.log(JSON.stringify(payload, null, 2));
} else {
  console.log(
    [
      `jobs=${payload.totals.inbox_jobs}`,
      `missing=${payload.totals.missing_results}`,
      `missing_refs=${payload.ref_totals.missing_results}`,
      `plan=${payload.totals.missing_plan}`,
      `plan_refs=${payload.ref_totals.missing_plan}`,
      `execute=${payload.totals.missing_execute}`,
      `execute_refs=${payload.ref_totals.missing_execute}`,
      `autonomous=${payload.totals.missing_autonomous}`,
      `autonomous_refs=${payload.ref_totals.missing_autonomous}`,
      `close_canaries=${payload.totals.close_canaries_ready}`,
      `close_canary_refs=${payload.ref_totals.close_canaries_ready}`,
      `sweep_requeue=${payload.totals.live_sweep_requeue_candidates}`,
      `sweep_requeue_refs=${payload.ref_totals.live_sweep_requeue_candidates}`,
      `attempted_missing=${payload.totals.attempted_missing_results}`,
      `unattempted_missing=${payload.totals.unattempted_missing_results}`,
      `attempt_filter=${payload.attempt_filter}`,
      `read_secret=${auth.read_secret_present ? "yes" : "no"}`,
      `write_secret=${auth.write_secret_present ? "yes" : "no"}`,
      `plan_ready=${auth.plan_dispatch_ready ? "yes" : "no"}`,
      `execute_ready=${auth.execute_dispatch_ready ? "yes" : "no"}`,
    ].join(" "),
  );
  if (auth.blockers.length > 0) {
    for (const blocker of auth.blockers) console.log(`blocker\t${blocker}`);
  }
  for (const [name, items] of Object.entries(selected)) {
    if (items.length > 0) console.log(`selected_${name}\t${items.length}`);
  }
}

function readInboxJobs() {
  if (!fs.existsSync(inboxDir)) return [];
  return fs
    .readdirSync(inboxDir)
    .filter((name) => name.endsWith(".md"))
    .filter((name) => !isExampleJobName(name))
    .sort()
    .map((name) => {
      const job = parseJob(path.join(inboxDir, name));
      return {
        path: job.relativePath,
        basename: name,
        frontmatter: job.frontmatter,
      };
    });
}

function readRunResults() {
  const out = new Map();
  readRunResultJson(out);
  readPublishedResultReports(out);
  return out;
}

function readRunResultJson(out) {
  if (!fs.existsSync(runsDir)) return;
  for (const name of fs.readdirSync(runsDir).filter((entry) => entry.endsWith(".json"))) {
    const filePath = path.join(runsDir, name);
    try {
      const result = JSON.parse(fs.readFileSync(filePath, "utf8"));
      const clusterId = String(result.cluster_id ?? result.clusterId ?? "");
      if (!clusterId) continue;
      upsertResult(out, clusterId, {
        run_id: name.replace(/\.json$/, ""),
        path: path.relative(repoRoot(), filePath),
        status: result.status ?? null,
        actions_total: Array.isArray(result.actions) ? result.actions.length : 0,
        source: "run_json",
      });
    } catch {
      continue;
    }
  }
}

function readPublishedResultReports(out) {
  if (!fs.existsSync(resultReportsDir)) return;
  for (const name of fs.readdirSync(resultReportsDir).filter((entry) => entry.endsWith(".md"))) {
    const filePath = path.join(resultReportsDir, name);
    try {
      const raw = fs.readFileSync(filePath, "utf8");
      const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
      if (!match) continue;
      const fm = parseSimpleYaml(match[1]);
      const clusterId = String(fm.cluster_id ?? fm.clusterId ?? "");
      if (!clusterId) continue;
      upsertResult(out, clusterId, {
        run_id: String(fm.run_id ?? ""),
        path: path.relative(repoRoot(), filePath),
        status: fm.result_status ?? fm.workflow_conclusion ?? null,
        workflow_conclusion: fm.workflow_conclusion ?? null,
        published_at: fm.published_at ?? null,
        actions_total: Number(fm.actions_total ?? 0),
        source: "result_markdown",
      });
    } catch {
      continue;
    }
  }
}

function upsertResult(out, clusterId, record) {
  const existing = out.get(clusterId);
  if (!existing || compareResultRecords(record, existing) > 0) out.set(clusterId, record);
}

function compareResultRecords(left, right) {
  const leftRun = Number(left.run_id);
  const rightRun = Number(right.run_id);
  if (Number.isFinite(leftRun) && Number.isFinite(rightRun) && leftRun !== rightRun) return leftRun - rightRun;

  const leftPublished = Date.parse(left.published_at ?? "");
  const rightPublished = Date.parse(right.published_at ?? "");
  if (Number.isFinite(leftPublished) && Number.isFinite(rightPublished) && leftPublished !== rightPublished) {
    return leftPublished - rightPublished;
  }
  if (Number.isFinite(leftPublished) !== Number.isFinite(rightPublished)) return Number.isFinite(leftPublished) ? 1 : -1;

  const sourceRank = { run_json: 0, result_markdown: 1 };
  return (sourceRank[left.source] ?? 0) - (sourceRank[right.source] ?? 0);
}

function classifyJob(job) {
  const fm = job.frontmatter;
  const clusterId = String(fm.cluster_id ?? "");
  const result = resultsByCluster.get(clusterId) ?? null;
  const latestDispatchAttempt = attemptsByJob.get(job.path) ?? null;
  return {
    path: job.path,
    cluster_id: clusterId,
    repo: String(fm.repo ?? ""),
    mode: String(fm.mode ?? ""),
    ref_count: uniqueRefs(fm.cluster_refs ?? fm.candidates ?? []).length,
    close_canary: /(?:^|-)close-canary(?:-|$)/.test(job.basename),
    has_result: Boolean(result),
    latest_result: result,
    latest_dispatch_attempt: latestDispatchAttempt,
  };
}

function selectLiveSweepRequeueCandidates(reportPath, rowsByPath) {
  if (!reportPath) return [];
  let report;
  try {
    report = JSON.parse(fs.readFileSync(path.resolve(String(reportPath)), "utf8"));
  } catch (error) {
    console.error(`failed to read --sweep-report: ${error.message}`);
    process.exit(2);
  }
  if (!Array.isArray(report.requeue_candidates)) {
    console.error("--sweep-report must contain a requeue_candidates array");
    process.exit(2);
  }
  return report.requeue_candidates
    .filter((candidate) => Number(candidate.live_target_refs_open ?? 0) > 0)
    .map((candidate) => rowsByPath.get(String(candidate.job)))
    .filter((row) => row?.has_result);
}

function isExampleJobName(name) {
  return name === "cluster-example.md" || name === "autonomous-example.md";
}

function readDispatchAttemptsByJob() {
  const out = new Map();
  if (!fs.existsSync(dispatchLedgerPath)) return out;
  let ledger;
  try {
    ledger = JSON.parse(fs.readFileSync(dispatchLedgerPath, "utf8"));
  } catch {
    return out;
  }
  for (const attempt of ledger.attempts ?? []) {
    const sourceJob = String(attempt.source_job ?? "");
    if (!sourceJob) continue;
    const current = out.get(sourceJob);
    if (!current || Date.parse(attempt.dispatched_at ?? "") > Date.parse(current.dispatched_at ?? "")) {
      out.set(sourceJob, {
        batch_id: attempt.batch_id ?? null,
        status: attempt.status ?? null,
        mode: attempt.mode ?? null,
        dispatched_at: attempt.dispatched_at ?? null,
        head_sha: attempt.head_sha ?? null,
      });
    }
  }
  return out;
}

function readSecretNames(repo) {
  const result = execFileSync(ghCommand(), ["secret", "list", "--repo", repo, "--json", "name"], {
    cwd: repoRoot(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  return new Set(JSON.parse(stripAnsi(result)).map((secret) => String(secret.name)));
}

function readVariableNames(repo) {
  const result = execFileSync(ghCommand(), ["variable", "list", "--repo", repo, "--json", "name"], {
    cwd: repoRoot(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  return new Set(JSON.parse(stripAnsi(result)).map((variable) => String(variable.name)));
}

function summarizeAuth({ secrets, variables, targetRepos }) {
  if (!secrets) {
    return {
      checked: false,
      read_secret_present: false,
      write_secret_present: false,
      write_auth_present: false,
      app_token_auth_allowed: false,
      app_token_auth_configured: false,
      dispatch_ready: false,
      blockers: ["secret check skipped"],
    };
  }
  const crossRepoTargets = [...targetRepos].filter((repo) => repo && repo !== dispatchRepo);
  const readSecretPresent = secrets.has("CLOWNFISH_READ_GH_TOKEN") || secrets.has("CLOWNFISH_GH_TOKEN");
  const writeSecretPresent = secrets.has("CLOWNFISH_GH_TOKEN");
  const appTokenAuthConfigured =
    allowAppTokenAuth &&
    secrets.has("CLOWNFISH_APP_PRIVATE_KEY") &&
    (variables?.has("CLOWNFISH_APP_ID") || Boolean(process.env.CLOWNFISH_APP_ID));
  const readAuthPresent = readSecretPresent || appTokenAuthConfigured;
  const writeAuthPresent = writeSecretPresent || appTokenAuthConfigured;
  const blockers = [];
  if (crossRepoTargets.length > 0 && !readAuthPresent) {
    blockers.push(`missing CLOWNFISH_READ_GH_TOKEN or CLOWNFISH_GH_TOKEN for ${crossRepoTargets.join(", ")}`);
  }
  if (crossRepoTargets.length > 0 && !writeAuthPresent) {
    blockers.push(`missing CLOWNFISH_GH_TOKEN or verified App token auth for execute/autonomous write steps`);
  }
  return {
    checked: true,
    cross_repo_targets: crossRepoTargets,
    read_secret_present: readSecretPresent,
    write_secret_present: writeSecretPresent,
    write_auth_present: writeAuthPresent,
    app_token_auth_allowed: allowAppTokenAuth,
    app_token_auth_configured: appTokenAuthConfigured,
    plan_dispatch_ready: crossRepoTargets.length === 0 || readAuthPresent,
    execute_dispatch_ready: crossRepoTargets.length === 0 || writeAuthPresent,
    blockers,
  };
}

function ghCommand() {
  return String(args["gh-bin"] ?? args.gh_bin ?? process.env.CLOWNFISH_GH_BIN ?? "ghx");
}

function writeJobsFile(filePath, items) {
  if (!filePath) return;
  const absolute = path.resolve(repoRoot(), String(filePath));
  fs.mkdirSync(path.dirname(absolute), { recursive: true });
  fs.writeFileSync(absolute, `${items.join("\n")}${items.length > 0 ? "\n" : ""}`, "utf8");
}

function takeByLimits(items, { itemLimit = 0, refLimit = 0 } = {}) {
  const out = [];
  let refs = 0;
  for (const item of items) {
    if (itemLimit > 0 && out.length >= itemLimit) break;
    if (refLimit > 0 && out.length > 0 && refs + item.ref_count > refLimit) break;
    out.push(item);
    refs += item.ref_count;
    if (refLimit > 0 && refs >= refLimit) break;
  }
  return out;
}

function filterByAttempt(items) {
  if (attemptFilter === "all") return items;
  return items.filter((item) => {
    const status = item.latest_dispatch_attempt?.status ?? "unattempted";
    if (attemptFilter === "attempted") return status !== "unattempted";
    return status === attemptFilter;
  });
}

function countBy(items, keyFn) {
  const out = {};
  for (const item of items) {
    const key = keyFn(item) || "unknown";
    out[key] = (out[key] ?? 0) + 1;
  }
  return out;
}

function sumBy(items, valueFn) {
  return items.reduce((total, item) => total + Number(valueFn(item) || 0), 0);
}

function uniqueRefs(value) {
  const items = Array.isArray(value) ? value : [value];
  return [...new Set(items.map((item) => String(item ?? "").trim()).filter((item) => /^#\d+$/.test(item)))];
}

function numberArg(name, fallback) {
  const value = Number(args[name] ?? args[name.replaceAll("-", "_")] ?? fallback);
  if (!Number.isInteger(value) || value < 0) {
    console.error(`--${name} must be a non-negative integer`);
    process.exit(2);
  }
  return value;
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}
