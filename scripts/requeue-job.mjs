#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import {
  assertLiveWorkerCapacity,
  currentProjectRepo,
  parseArgs,
  parseJob,
  readMaxLiveWorkers,
  repoRoot,
  validateJob,
  waitForLiveWorkerCapacity,
} from "./lib.mjs";
import { restoreGateValue } from "./gate-restore.mjs";

const DEFAULT_REPO = currentProjectRepo();
const DEFAULT_WORKFLOW = "cluster-worker.yml";
const DEFAULT_RUNNER = process.env.CLOWNFISH_WORKER_RUNNER ?? "blacksmith-4vcpu-ubuntu-2404";
const DEFAULT_EXECUTION_RUNNER = process.env.CLOWNFISH_EXECUTION_RUNNER ?? "blacksmith-16vcpu-ubuntu-2404";
const DEFAULT_OBSERVE_TIMEOUT_MS = 5 * 60 * 1000;
const DEFAULT_GATE_CAPTURE_TIMEOUT_MS = 5 * 60 * 1000;

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? DEFAULT_REPO);
const workflow = String(args.workflow ?? DEFAULT_WORKFLOW);
const runner = String(args.runner ?? DEFAULT_RUNNER);
const executionRunner = String(args["execution-runner"] ?? args.execution_runner ?? DEFAULT_EXECUTION_RUNNER);
const model = String(args.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.5");
const maxLiveWorkers = readMaxLiveWorkers(args);
const waitForCapacity = Boolean(args["wait-for-capacity"]);
const execute = Boolean(args.execute || args.live);
const openExecuteWindow = Boolean(args["open-execute-window"] || args.live);
const openMergeWindow = Boolean(args["open-merge-window"]);
const requestedMode = typeof args.mode === "string" ? args.mode : null;
const requestedRunId = args["run-id"] ?? (looksLikeRunId(args._[0]) ? args._[0] : null);

const resolved = requestedRunId
  ? resolveFromRunId(String(requestedRunId))
  : { source_job: args._[0], mode: requestedMode };

if (!resolved.source_job) {
  console.error(
    "usage: node scripts/requeue-job.mjs <job.md|run-id> [--mode plan|execute|autonomous] [--execute] [--open-execute-window] [--open-merge-window] [--runner label] [--execution-runner label] [--model model] [--max-live-workers 50] [--wait-for-capacity]",
  );
  process.exit(2);
}

const sourceJob = resolveExistingJobPath(resolved.source_job);
if (!fs.existsSync(path.resolve(repoRoot(), sourceJob))) {
  throw new Error(`job not found for requeue: ${resolved.source_job}`);
}
const job = parseJob(sourceJob);
const errors = validateJob(job);
if (errors.length > 0) {
  console.error(`invalid job: ${job.relativePath}`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const mode = requestedMode ?? job.frontmatter.mode;
if (!["plan", "execute", "autonomous"].includes(mode)) {
  throw new Error(`unsupported mode: ${mode}`);
}
if (mode !== job.frontmatter.mode) {
  throw new Error(
    `refusing requeue mode override: job frontmatter mode is ${job.frontmatter.mode}; promote the job before dispatching ${mode}`,
  );
}
if (openMergeWindow && !execute) {
  throw new Error("--open-merge-window requires --execute");
}
if (openMergeWindow && !openExecuteWindow) {
  throw new Error("--open-merge-window requires --open-execute-window");
}
if (openMergeWindow && !["execute", "autonomous"].includes(mode)) {
  throw new Error("--open-merge-window requires execute or autonomous job mode");
}
if (
  openMergeWindow &&
  (job.frontmatter.allow_merge !== true || !job.frontmatter.allowed_actions.includes("merge"))
) {
  throw new Error("--open-merge-window requires a job with allow_merge: true and allowed_actions including merge");
}

const summary = {
  status: execute ? "dispatching" : "dry_run",
  repo,
  workflow,
  source_run_id: requestedRunId,
  source_job: job.relativePath,
  mode,
  runner,
  execution_runner: executionRunner,
  model,
  max_live_workers: maxLiveWorkers,
  open_execute_window: openExecuteWindow,
  open_merge_window: openMergeWindow,
};

if (!execute) {
  console.log(JSON.stringify(summary, null, 2));
  process.exit(0);
}

const gateRestores = [];
const headSha = currentHeadSha();
const dispatchStartedAt = new Date(Date.now() - 5000).toISOString();
const dispatchId = `requeue-${Date.now()}-${path.basename(job.relativePath, path.extname(job.relativePath))}`;

try {
  if (openExecuteWindow && ["execute", "autonomous"].includes(mode)) {
    openGate("CLOWNFISH_ALLOW_EXECUTE");
    if (job.frontmatter.allow_fix_pr === true || job.frontmatter.allowed_actions.includes("fix")) {
      openGate("CLOWNFISH_ALLOW_FIX_PR");
    }
  }
  if (openMergeWindow) {
    openGate("CLOWNFISH_ALLOW_MERGE");
  }

  assertGateOpenIfNeeded(mode);
  summary.live_worker_capacity_before_dispatch = waitForCapacity
    ? waitForLiveWorkerCapacity({ repo, workflow, requested: 1, maxLiveWorkers })
    : assertLiveWorkerCapacity({ repo, workflow, requested: 1, maxLiveWorkers });
  dispatchJob(job.relativePath, mode, headSha, dispatchId);
  const observedRuns = waitForObservedRuns({ dispatchId, since: dispatchStartedAt, expectedCount: 1 });
  if (observedRuns.length !== 1) {
    throw new Error(`timed out observing dispatched run for ${dispatchId}; execute gates were not captured`);
  }

  summary.status = "dispatched";
  summary.dispatch_id = dispatchId;
  summary.observed_runs = observedRuns.map((run) => ({
    run_id: String(run.databaseId),
    status: run.status,
    conclusion: run.conclusion ?? null,
    created_at: run.createdAt,
    url: run.url,
  }));
  if (openExecuteWindow && ["execute", "autonomous"].includes(mode)) {
    const gateCaptureRuns = waitForRunsAtGateCapture(observedRuns.map((run) => run.databaseId));
    summary.gate_capture_runs = gateCaptureRuns.map(({ run, gateCaptureJob }) => ({
      run_id: String(run.databaseId),
      status: run.status,
      conclusion: run.conclusion ?? null,
      created_at: run.createdAt,
      url: run.url,
      gate_capture_job: gateCaptureJob.name,
      gate_capture_job_status: gateCaptureJob.status,
      gate_capture_job_started_at: gateCaptureJob.startedAt,
    }));
  }
  console.log(JSON.stringify(summary, null, 2));
} finally {
  for (const gate of gateRestores.reverse()) {
    setGate(gate.name, restoreGateValue(gate.previous));
  }
}

function resolveFromRunId(runId) {
  const fromLedger = readPublishedRunRecord(runId);
  if (fromLedger?.source_job) {
    return { source_job: resolveExistingJobPath(fromLedger.source_job), mode: fromLedger.mode };
  }

  const artifactDir = fs.mkdtempSync(path.join(os.tmpdir(), `projectclownfish-requeue-${runId}-`));
  const downloaded = spawnSync(
    "gh",
    ["run", "download", runId, "--repo", repo, "--dir", artifactDir],
    { cwd: repoRoot(), encoding: "utf8", env: ghEnv(), stdio: "pipe" },
  );
  if (downloaded.status !== 0) {
    throw new Error(`could not resolve run ${runId}: ${downloaded.stderr || downloaded.stdout}`);
  }
  const planPath = findFirstFile(artifactDir, "cluster-plan.json");
  const resultPath = findFirstFile(artifactDir, "result.json");
  if (!planPath) throw new Error(`run ${runId} artifact did not include cluster-plan.json`);
  const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
  const result = resultPath ? JSON.parse(fs.readFileSync(resultPath, "utf8")) : null;
  return { source_job: resolveExistingJobPath(plan.source_job), mode: result?.mode ?? plan.mode };
}

function resolveExistingJobPath(sourceJob) {
  const text = String(sourceJob ?? "");
  if (!text) return text;
  if (fs.existsSync(path.resolve(repoRoot(), text))) return text;

  const basename = path.basename(text);
  const roots = [
    path.join(repoRoot(), "jobs", "openclaw", "inbox"),
    path.join(repoRoot(), "jobs", "openclaw", "outbox", "finalized"),
    path.join(repoRoot(), "jobs", "openclaw", "outbox", "stuck"),
  ];
  for (const root of roots) {
    const candidate = path.join(root, basename);
    if (fs.existsSync(candidate)) return path.relative(repoRoot(), candidate);
  }
  const jobsRoot = path.join(repoRoot(), "jobs", "openclaw");
  if (fs.existsSync(jobsRoot)) {
    for (const entry of fs.readdirSync(jobsRoot, { recursive: true })) {
      const candidate = path.join(jobsRoot, String(entry));
      if (path.basename(candidate) === basename && fs.existsSync(candidate)) {
        return path.relative(repoRoot(), candidate);
      }
    }
  }
  return text;
}

function readPublishedRunRecord(runId) {
  const file = path.join(repoRoot(), "results", "runs", `${runId}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function findFirstFile(root, basename) {
  for (const entry of fs.readdirSync(root, { recursive: true })) {
    const candidate = path.join(root, String(entry));
    if (path.basename(candidate) === basename && fs.statSync(candidate).isFile()) return candidate;
  }
  return null;
}

function dispatchJob(jobPath, mode, requiredAncestorSha, dispatchId) {
  const payload = {
    event_type: "projectclownfish_worker",
    client_payload: {
      dispatch_id: dispatchId,
      job: jobPath,
      mode,
      runner,
      execution_runner: executionRunner,
      model,
      dry_run: false,
      ref: "main",
      required_ancestor_sha: requiredAncestorSha,
    },
  };
  const result = spawnSync(
    "gh",
    [
      "api",
      "--method",
      "POST",
      `repos/${repo}/dispatches`,
      "--input",
      "-",
    ],
    {
      cwd: repoRoot(),
      encoding: "utf8",
      env: ghEnv(),
      input: `${JSON.stringify(payload)}\n`,
      stdio: "pipe",
    },
  );
  if (result.status !== 0) {
    if (isRepositoryDispatchSchemaBug(result)) {
      const fallback = spawnSync(
        "gh",
        [
          "workflow",
          "run",
          workflow,
          "--repo",
          repo,
          "--ref",
          "main",
          "-f",
          `dispatch_id=${dispatchId}`,
          "-f",
          `job=${jobPath}`,
          "-f",
          `mode=${mode}`,
          "-f",
          `runner=${runner}`,
          "-f",
          `execution_runner=${executionRunner}`,
          "-f",
          `model=${model}`,
          "-f",
          "dry_run=false",
        ],
        {
          cwd: repoRoot(),
          encoding: "utf8",
          env: ghEnv(),
          stdio: "pipe",
        },
      );
      if (fallback.status === 0) {
        console.warn(
          `repository_dispatch returned the known GitHub 422 schema error for ${jobPath}; retried via workflow_dispatch`,
        );
        return;
      }
      throw new Error(`failed to dispatch ${jobPath} with workflow fallback: ${fallback.stderr || fallback.stdout}`);
    }
    throw new Error(`failed to dispatch ${jobPath}: ${result.stderr || result.stdout}`);
  }
}

function isRepositoryDispatchSchemaBug(result) {
  const output = `${result.stderr ?? ""}\n${result.stdout ?? ""}`;
  return /HTTP 422/i.test(output) && /links\/0\/schema/i.test(output);
}

function waitForObservedRuns({ expectedCount, dispatchId, since }) {
  const timeoutMs = Number(process.env.CLOWNFISH_REQUEUE_OBSERVE_TIMEOUT_MS ?? DEFAULT_OBSERVE_TIMEOUT_MS);
  const deadline = Date.now() + (Number.isInteger(timeoutMs) && timeoutMs > 0 ? timeoutMs : DEFAULT_OBSERVE_TIMEOUT_MS);
  let latest = [];
  while (Date.now() < deadline) {
    latest = listClusterRuns()
      .filter((run) => Date.parse(run.createdAt) >= Date.parse(since))
      .filter((run) => String(run.displayTitle ?? "").includes(dispatchId))
      .sort((left, right) => Date.parse(left.createdAt) - Date.parse(right.createdAt));
    if (latest.length >= expectedCount) {
      return latest.slice(-expectedCount);
    }
    sleepMs(5_000);
  }
  return latest.slice(-expectedCount);
}

function waitForRunsAtGateCapture(runIds) {
  const timeoutMs = Number(process.env.CLOWNFISH_REQUEUE_GATE_CAPTURE_TIMEOUT_MS ?? DEFAULT_GATE_CAPTURE_TIMEOUT_MS);
  const deadline = Date.now() + (Number.isInteger(timeoutMs) && timeoutMs > 0 ? timeoutMs : DEFAULT_GATE_CAPTURE_TIMEOUT_MS);
  const wanted = new Set(runIds.map((runId) => Number(runId)));
  let latest = [];
  while (Date.now() < deadline) {
    latest = [...wanted].map((runId) => {
      const run = readClusterRun(runId);
      const gateCaptureJob = (run.jobs ?? []).find((job) => job.name === "Prepare worker inputs");
      return { run, gateCaptureJob };
    });
    if (
      latest.length === wanted.size &&
      latest.every(
        ({ gateCaptureJob }) =>
          gateCaptureJob &&
          gateCaptureJob.status === "completed" &&
          gateCaptureJob.conclusion === "success",
      )
    ) {
      return latest;
    }
    sleepMs(5_000);
  }
  throw new Error(
    `timed out waiting for dispatched run(s) to capture execute gates during Prepare worker inputs: ${[...wanted].join(", ")}`,
  );
}

function readClusterRun(runId) {
  return ghJson([
    "run",
    "view",
    String(runId),
    "--repo",
    repo,
    "--json",
    "databaseId,status,conclusion,createdAt,updatedAt,url,jobs",
  ]);
}

function assertGateOpenIfNeeded(mode) {
  if (!["execute", "autonomous"].includes(mode)) return;
  if (readGate("CLOWNFISH_ALLOW_EXECUTE") !== "1") {
    throw new Error("refusing write-mode requeue: CLOWNFISH_ALLOW_EXECUTE is not 1; use --open-execute-window");
  }
}

function listClusterRuns() {
  return ghJson([
    "run",
    "list",
    "--repo",
    repo,
    "--workflow",
    workflow,
    "--limit",
    "50",
    "--json",
    "databaseId,displayTitle,status,conclusion,createdAt,url",
  ]);
}

function readGate(name) {
  const variables = ghJson(["variable", "list", "--repo", repo, "--json", "name,value"]);
  return variables.find((variable) => variable.name === name)?.value ?? "";
}

function openGate(name) {
  const previous = readGate(name);
  gateRestores.push({ name, previous });
  if (previous !== "1") setGate(name, "1");
}

function setGate(name, value) {
  execFileSync("gh", ["variable", "set", name, "--repo", repo, "--body", value], {
    cwd: repoRoot(),
    encoding: "utf8",
    env: ghEnv(),
    stdio: ["ignore", "pipe", "pipe"],
  });
  console.log(`${name}=${value}`);
}

function currentHeadSha() {
  return execFileSync("git", ["rev-parse", "origin/main"], {
    cwd: repoRoot(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function ghJson(ghArgs) {
  const text = execFileSync("gh", ghArgs, {
    cwd: repoRoot(),
    encoding: "utf8",
    env: ghEnv(),
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 64 * 1024 * 1024,
  });
  return JSON.parse(stripAnsi(text) || "null");
}

function ghEnv() {
  return { ...process.env, NO_COLOR: "1", CLICOLOR: "0", CLICOLOR_FORCE: "0", GH_FORCE_TTY: "0" };
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-9;?]*[ -/]*[@-~]/g, "").trim();
}

function looksLikeRunId(value) {
  return /^[0-9]{6,}$/.test(String(value ?? ""));
}

function sleepMs(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}
