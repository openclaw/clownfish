#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  assertLiveWorkerCapacity,
  currentProjectRepo,
  liveWorkerCapacity,
  parseArgs,
  parseJob,
  readMaxLiveWorkers,
  repoRoot,
  validateJob,
  waitForLiveWorkerCapacity,
} from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const defaultRunner = process.env.CLOWNFISH_WORKER_RUNNER ?? "blacksmith-4vcpu-ubuntu-2404";
const defaultExecutionRunner = process.env.CLOWNFISH_EXECUTION_RUNNER ?? "blacksmith-16vcpu-ubuntu-2404";
const mode = args.mode ?? "plan";
const runner = args.runner ?? defaultRunner;
const executionRunner = args["execution-runner"] ?? args.execution_runner ?? defaultExecutionRunner;
const workflow = args.workflow ?? "cluster-worker.yml";
const repo = String(args.repo ?? currentProjectRepo());
const model = String(args.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.5");
const maxLiveWorkers = readMaxLiveWorkers(args);
const waitForCapacity = Boolean(args["wait-for-capacity"]);
const dispatchBatchSize = numberArg(
  args["batch-size"] ?? args.batch_size ?? process.env.CLOWNFISH_DISPATCH_BATCH_SIZE ?? 0,
  "batch-size",
);
const dispatchBatchDelayMs = numberArg(
  args["batch-delay-ms"] ?? args.batch_delay_ms ?? process.env.CLOWNFISH_DISPATCH_BATCH_DELAY_MS ?? 15_000,
  "batch-delay-ms",
);
const dispatchLimit = numberArg(
  args["dispatch-limit"] ?? args.dispatch_limit ?? process.env.CLOWNFISH_DISPATCH_LIMIT ?? 0,
  "dispatch-limit",
);
const throttledDispatch = waitForCapacity || dispatchBatchSize > 0;
const publishBacklogThreshold = Number(
  args["publish-backlog-threshold"] ?? process.env.CLOWNFISH_MAX_PUBLISH_BACKLOG ?? 25,
);
const publishBacklogLookback = Number(
  args["publish-backlog-lookback"] ?? process.env.CLOWNFISH_PUBLISH_BACKLOG_LOOKBACK ?? 500,
);
const skipPublishBacklogCheck = Boolean(args["skip-publish-backlog-check"]);
const ref = args.ref ? String(args.ref) : "";
const jobsFile = args["jobs-file"] ?? args.jobs_file ?? process.env.CLOWNFISH_JOBS_FILE;
const files = [...readJobsFile(jobsFile), ...args._];

if (files.length === 0) {
  console.error(
    "usage: node scripts/dispatch-jobs.mjs <job.md> [...] [--jobs-file path] [--mode plan|execute|autonomous] [--runner label] [--execution-runner label] [--model model] [--max-live-workers 50] [--wait-for-capacity] [--batch-size N] [--batch-delay-ms N] [--dispatch-limit N] [--publish-backlog-threshold 25]",
  );
  process.exit(2);
}

if (!Number.isInteger(publishBacklogThreshold) || publishBacklogThreshold < 0) {
  console.error("--publish-backlog-threshold must be a non-negative integer");
  process.exit(2);
}
if (!Number.isInteger(publishBacklogLookback) || publishBacklogLookback < 1) {
  console.error("--publish-backlog-lookback must be a positive integer");
  process.exit(2);
}
if (dispatchBatchSize > 0 && dispatchBatchDelayMs < 1) {
  console.error("--batch-delay-ms must be positive when --batch-size is set");
  process.exit(2);
}

let failed = false;
const jobs = [];
for (const file of files) {
  const job = parseJob(file);
  const errors = validateJob(job);
  if (errors.length > 0) {
    failed = true;
    console.error(`invalid job: ${file}`);
    for (const error of errors) console.error(`- ${error}`);
    continue;
  }

  const relative = job.relativePath;
  if (!fs.existsSync(path.join(repoRoot(), relative))) {
    failed = true;
    console.error(`job does not exist inside repo: ${file}`);
    continue;
  }
  jobs.push(relative);
}

const jobsToDispatch = dispatchLimit > 0 ? jobs.slice(0, dispatchLimit) : jobs;
const omittedJobs = jobs.length - jobsToDispatch.length;
if (!failed && omittedJobs > 0) {
  console.log(`dispatch limit: selected ${jobsToDispatch.length}/${jobs.length} job(s); omitted ${omittedJobs}`);
}

if (!failed) {
  if (!skipPublishBacklogCheck) assertPublishBacklog();
}

if (!failed) {
  const requested = throttledDispatch ? Math.min(jobsToDispatch.length, 1) : jobsToDispatch.length;
  const capacityOptions = { repo, workflow, requested, maxLiveWorkers };
  const capacity = throttledDispatch ? waitForLiveWorkerCapacity(capacityOptions) : assertLiveWorkerCapacity(capacityOptions);
  console.log(
    `live worker capacity: ${capacity.active}/${capacity.max_live_workers} active; dispatching ${jobsToDispatch.length} ${workflow} run(s)`,
  );
}

function assertPublishBacklog() {
  const result = spawnSync(
    process.execPath,
    [
      path.join(repoRoot(), "scripts", "publish-backlog.mjs"),
      "--repo",
      repo,
      "--workflow",
      workflow,
      "--lookback",
      String(publishBacklogLookback),
      "--conclusion",
      "success",
      "--threshold",
      String(publishBacklogThreshold),
      "--json",
    ],
    { cwd: repoRoot(), encoding: "utf8", stdio: "pipe" },
  );
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) {
    failed = true;
  }
}

let dispatched = 0;
let index = 0;
while (!failed && index < jobsToDispatch.length) {
  let batchSize = jobsToDispatch.length - index;
  if (throttledDispatch) {
    const capacity = waitForLiveWorkerCapacity({
      repo,
      workflow,
      requested: 1,
      maxLiveWorkers,
    });
    const refreshed = liveWorkerCapacity({ repo, workflow, requested: 1, maxLiveWorkers });
    batchSize = Math.min(
      batchSize,
      Math.max(1, refreshed.available || capacity.available || 1),
      dispatchBatchSize > 0 ? dispatchBatchSize : Number.POSITIVE_INFINITY,
    );
    console.log(
      `live worker capacity: ${refreshed.active}/${refreshed.max_live_workers} active; dispatching next ${batchSize} run(s)`,
    );
  }

  for (const relative of jobsToDispatch.slice(index, index + batchSize)) {
    if (failed) break;
    dispatched += 1;
    dispatchJob(relative, dispatched, jobsToDispatch.length);
  }
  index += batchSize;
  if (throttledDispatch && !failed && index < jobsToDispatch.length) {
    sleepMs(dispatchBatchDelayMs);
  }
}

function dispatchJob(relative, position, total) {
  const result = spawnSync(
    "gh",
    [
      "workflow",
      "run",
      workflow,
      "--repo",
      repo,
      ...(ref ? ["--ref", ref] : []),
      "-f",
      `job=${relative}`,
      "-f",
      `mode=${mode}`,
      "-f",
      `runner=${runner}`,
      "-f",
      `execution_runner=${executionRunner}`,
      "-f",
      `model=${model}`,
    ],
    { cwd: repoRoot(), encoding: "utf8", stdio: "pipe" },
  );
  if (result.status !== 0) {
    failed = true;
    console.error(result.stderr || result.stdout);
  } else {
    console.log(`dispatched ${position}/${total} ${relative} (${mode}) on ${runner}; execution on ${executionRunner}`);
  }
}

function sleepMs(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

if (failed) process.exit(1);

function readJobsFile(file) {
  if (!file) return [];
  const absolute = path.resolve(repoRoot(), String(file));
  return fs
    .readFileSync(absolute, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

function numberArg(value, name) {
  const number = Number(value);
  if (!Number.isInteger(number) || number < 0) {
    console.error(`--${name} must be a non-negative integer`);
    process.exit(2);
  }
  return number;
}
