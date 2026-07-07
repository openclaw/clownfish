#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { assertAllowedOwner, parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";

const MERGE_ACTIONS = new Set(["merge_candidate", "merge_canonical"]);
const execFileAsync = promisify(execFile);

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];
const resultPathArg = args._[1];
const latest = Boolean(args.latest);
const dryRun = Boolean(args["dry-run"]);
const maxPrs = positiveInteger(args["max-prs"] ?? args.limit, Infinity, "--max-prs");
const concurrency = positiveInteger(
  args.concurrency ?? process.env.CLOWNFISH_EXTERNAL_PREFLIGHT_CONCURRENCY,
  3,
  "--concurrency",
);
const childHeartbeatMs = positiveInteger(
  process.env.CLOWNFISH_EXTERNAL_PREFLIGHT_HEARTBEAT_MS,
  60_000,
  "CLOWNFISH_EXTERNAL_PREFLIGHT_HEARTBEAT_MS",
);
const runRootArg = args["run-root"];

if (!jobPath) {
  console.error("usage: node scripts/run-external-merge-preflights.mjs <job.md> [result.json] [--latest] [--dry-run]");
  process.exit(2);
}
if (!resultPathArg && !latest) {
  console.error("result path is required unless --latest is set");
  process.exit(2);
}

const job = parseJob(jobPath);
const jobErrors = validateJob(job);
if (jobErrors.length > 0) throw new Error(jobErrors.join("\n"));
assertAllowedOwner(job.frontmatter.repo, process.env.CLOWNFISH_ALLOWED_OWNER);

const resultPath = resultPathArg ? path.resolve(resultPathArg) : findLatestResultPath();
const result = JSON.parse(fs.readFileSync(resultPath, "utf8"));
if (result.repo !== job.frontmatter.repo) {
  throw new Error(`result repo ${result.repo} does not match job repo ${job.frontmatter.repo}`);
}
if (result.cluster_id !== job.frontmatter.cluster_id) {
  throw new Error(`result cluster ${result.cluster_id} does not match job cluster ${job.frontmatter.cluster_id}`);
}

const runRoot = path.resolve(String(runRootArg ?? path.dirname(resultPath)));
const requests = findPreflightRequests(result).slice(0, maxPrs);
const report = {
  repo: result.repo,
  cluster_id: result.cluster_id,
  result_path: path.relative(repoRoot(), resultPath),
  dry_run: dryRun,
  preflight_concurrency: concurrency,
  generated_at: new Date().toISOString(),
  status: requests.length > 0 ? "planned" : "skipped",
  actions: [],
};

const reviewedActions = await mapLimit(requests, concurrency, runPreflightReview);
for (const action of reviewedActions) {
  report.actions.push(await applyReviewedPreflight(action));
}

if (report.actions.some((action) => action.status === "executed")) {
  report.status = "executed";
} else if (report.actions.some((action) => action.status === "passed")) {
  report.status = "passed";
} else if (report.actions.some((action) => action.status === "blocked")) {
  report.status = "blocked";
}

const reportPath = path.join(runRoot, "external-merge-preflight-report.json");
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));

function findPreflightRequests(workerResult) {
  const seen = new Set();
  const out = [];
  const requiredByJob = job.frontmatter.require_external_merge_preflight === true;
  for (const action of workerResult.actions ?? []) {
    if (!MERGE_ACTIONS.has(String(action.action ?? ""))) continue;
    if (requiredByJob) {
      if (!["planned", "blocked"].includes(String(action.status ?? ""))) continue;
    } else {
      if (action.status !== "blocked") continue;
      if (!wantsExternalMergePreflight(action)) continue;
    }
    const number = parseIssueNumber(action.target);
    if (!number || seen.has(number)) continue;
    seen.add(number);
    out.push({
      target: `#${number}`,
      pull_request: number,
      action: action.action,
      expected_head_sha: action.expected_head_sha ?? null,
      reason: action.reason ?? null,
      request_source: requiredByJob ? "job_policy" : "action_reason",
    });
  }
  return out;
}

function wantsExternalMergePreflight(action) {
  const text = [action.reason, action.comment, ...(action.evidence ?? [])].join("\n");
  return /\bexternal_merge_preflight_required\b/i.test(text);
}

async function runPreflightReview(request) {
  const runDir = path.join(runRoot, `external-merge-preflight-${request.pull_request}`);
  fs.rmSync(runDir, { recursive: true, force: true });
  fs.mkdirSync(runDir, { recursive: true });

  const preflight = await runNode([
    "scripts/preflight-external-pr-merge.mjs",
    job.relativePath,
    "--pr",
    String(request.pull_request),
    "--run-dir",
    runDir,
  ]);
  cleanupPreflightTarget(runDir);
  if (preflight.status !== 0) {
    return {
      ...request,
      status: "blocked",
      run_dir: path.relative(repoRoot(), runDir),
      reason: `external merge preflight command failed: ${compact(preflight.stderr || preflight.stdout)}`,
    };
  }

  const review = await runNode(["scripts/review-results.mjs", runDir]);
  if (review.status !== 0) {
    return {
      ...request,
      status: "blocked",
      run_dir: path.relative(repoRoot(), runDir),
      reason: `external merge preflight review failed: ${compact(review.stderr || review.stdout)}`,
    };
  }

  const preflightReport = readJsonIfExists(path.join(runDir, "preflight-report.json"));
  if (preflightReport?.status !== "passed") {
    return {
      ...request,
      status: "blocked",
      run_dir: path.relative(repoRoot(), runDir),
      reason: preflightReport?.reason ?? "external merge preflight did not pass",
    };
  }

  return {
    ...request,
    status: "passed",
    run_dir: path.relative(repoRoot(), runDir),
    reviewed_head_sha: preflightReport.reviewed_head_sha ?? null,
    reason: "external merge preflight passed",
  };
}

async function applyReviewedPreflight(action) {
  if (action.status !== "passed") return action;

  if (dryRun || process.env.CLOWNFISH_ALLOW_EXECUTE !== "1" || process.env.CLOWNFISH_ALLOW_MERGE !== "1") {
    return {
      ...action,
      status: "passed",
      reason: dryRun ? "dry run; guarded applicator not invoked" : "merge gate disabled; guarded applicator not invoked",
    };
  }

  const runDir = path.resolve(repoRoot(), action.run_dir);
  const apply = await runNode([
    "scripts/apply-result.mjs",
    path.join(runDir, "preflight-job.md"),
    path.join(runDir, "result.json"),
    "--report",
    path.join(runDir, "apply-report.json"),
  ]);
  if (apply.status !== 0) {
    return {
      ...action,
      status: "blocked",
      reason: `guarded merge apply failed: ${compact(apply.stderr || apply.stdout)}`,
    };
  }

  const applyReport = readJsonIfExists(path.join(runDir, "apply-report.json"));
  const executed = (applyReport?.actions ?? []).some((action) => action.status === "executed");
  return {
    ...action,
    status: executed ? "executed" : "blocked",
    apply_actions: applyReport?.actions ?? [],
    reason: executed ? "guarded external merge applied" : "guarded applicator did not execute a merge",
  };
}

async function runNode(commandArgs) {
  const label = nodeCommandLabel(commandArgs);
  const started = Date.now();
  console.error(`${label}: started`);
  const heartbeat = setInterval(() => {
    console.error(`${label}: still running after ${Math.round((Date.now() - started) / 1000)}s`);
  }, childHeartbeatMs);
  heartbeat.unref();
  try {
    const { stdout = "", stderr = "" } = await execFileAsync(process.execPath, commandArgs, {
      cwd: repoRoot(),
      encoding: "utf8",
      env: process.env,
      maxBuffer: 64 * 1024 * 1024,
    });
    return { status: 0, stdout, stderr };
  } catch (error) {
    return {
      status: Number.isInteger(error?.code) ? error.code : 1,
      stdout: String(error?.stdout ?? ""),
      stderr: String(error?.stderr ?? error?.message ?? error),
    };
  } finally {
    clearInterval(heartbeat);
    console.error(`${label}: finished after ${Math.round((Date.now() - started) / 1000)}s`);
  }
}

function findLatestResultPath() {
  const runsRoot = path.join(repoRoot(), ".projectclownfish", "runs");
  if (!fs.existsSync(runsRoot)) throw new Error("no run directory exists");
  const candidates = [];
  for (const runName of fs.readdirSync(runsRoot)) {
    const candidate = path.join(runsRoot, runName, "result.json");
    if (!fs.existsSync(candidate)) continue;
    candidates.push({ path: candidate, mtimeMs: fs.statSync(candidate).mtimeMs });
  }
  candidates.sort((left, right) => right.mtimeMs - left.mtimeMs);
  if (!candidates[0]) throw new Error("no result.json files found");
  return candidates[0].path;
}

function parseIssueNumber(ref) {
  const match = String(ref ?? "").match(/^#?([1-9][0-9]*)$/);
  return match ? Number(match[1]) : null;
}

function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function cleanupPreflightTarget(runDir) {
  fs.rmSync(path.join(runDir, "target"), { recursive: true, force: true });
}

function positiveInteger(value, fallback, label) {
  if (value === undefined || value === null || value === "") return fallback;
  const number = Number(value);
  if (!Number.isInteger(number) || number < 1) throw new Error(`${label} must be a positive integer`);
  return number;
}

function nodeCommandLabel(commandArgs) {
  const script = path.basename(String(commandArgs[0] ?? "node child"));
  const pullRequestIndex = commandArgs.indexOf("--pr");
  const pullRequest =
    pullRequestIndex >= 0 && /^[1-9][0-9]*$/.test(String(commandArgs[pullRequestIndex + 1] ?? ""))
      ? ` PR #${commandArgs[pullRequestIndex + 1]}`
      : "";
  return `${script}${pullRequest}`;
}

async function mapLimit(values, limit, mapper) {
  const results = new Array(values.length);
  let nextIndex = 0;
  const workers = Array.from({ length: Math.min(limit, values.length) }, async () => {
    while (nextIndex < values.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(values[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

function compact(value) {
  return String(value ?? "")
    .replace(/\u001b\[[0-9;]*m/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 1000);
}
