#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
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
const dispatchConcurrency = numberArg(
  args["dispatch-concurrency"] ?? args.dispatch_concurrency ?? process.env.CLOWNFISH_DISPATCH_CONCURRENCY ?? 1,
  "dispatch-concurrency",
);
const throttledDispatch = waitForCapacity || dispatchBatchSize > 0;
const publishBacklogThreshold = Number(
  args["publish-backlog-threshold"] ?? process.env.CLOWNFISH_MAX_PUBLISH_BACKLOG ?? 25,
);
const publishBacklogLookback = Number(
  args["publish-backlog-lookback"] ?? process.env.CLOWNFISH_PUBLISH_BACKLOG_LOOKBACK ?? 500,
);
const skipPublishBacklogCheck = Boolean(args["skip-publish-backlog-check"]);
const skipTokenSecretCheck = Boolean(args["skip-token-secret-check"] ?? args.skip_token_secret_check);
const ref = args.ref ? String(args.ref) : "";
const jobsFile = args["jobs-file"] ?? args.jobs_file ?? process.env.CLOWNFISH_JOBS_FILE;
const files = [...readJobsFile(jobsFile), ...args._];

if (files.length === 0) {
  console.error(
    "usage: node scripts/dispatch-jobs.mjs <job.md> [...] [--jobs-file path] [--mode plan|execute|autonomous] [--runner label] [--execution-runner label] [--model model] [--max-live-workers 50] [--wait-for-capacity] [--batch-size N] [--batch-delay-ms N] [--dispatch-limit N] [--dispatch-concurrency N] [--publish-backlog-threshold 25] [--skip-token-secret-check]",
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
if (dispatchConcurrency < 1) {
  console.error("--dispatch-concurrency must be positive");
  process.exit(2);
}

let failed = false;
const jobs = [];
const targetRepos = new Set();
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
  if (typeof job.frontmatter.repo === "string") targetRepos.add(job.frontmatter.repo);
}

const jobsToDispatch = dispatchLimit > 0 ? jobs.slice(0, dispatchLimit) : jobs;
const omittedJobs = jobs.length - jobsToDispatch.length;
if (!failed && omittedJobs > 0) {
  console.log(`dispatch limit: selected ${jobsToDispatch.length}/${jobs.length} job(s); omitted ${omittedJobs}`);
}

if (!failed) {
  if (!skipTokenSecretCheck) assertRequiredTokenSecrets();
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
    if (!skipPublishBacklogCheck) assertPublishBacklog();
    if (failed) break;

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

  const batch = jobsToDispatch.slice(index, index + batchSize);
  const results = await dispatchBatch(batch, dispatchConcurrency);
  for (const result of results) {
    dispatched += 1;
    if (result.status === 0) {
      console.log(
        `dispatched ${result.position}/${jobsToDispatch.length} ${result.relative} (${mode}) on ${runner}; execution on ${executionRunner}`,
      );
    } else {
      failed = true;
      console.error(result.stderr || result.stdout || `failed to dispatch ${result.relative}`);
    }
  }
  index += batchSize;
  if (throttledDispatch && !failed && index < jobsToDispatch.length) {
    sleepMs(dispatchBatchDelayMs);
  }
}

function assertRequiredTokenSecrets() {
  if (workflow !== "cluster-worker.yml") return;
  const dispatchRepo = repo;
  const crossRepoTargets = [...targetRepos].filter((targetRepo) => targetRepo && targetRepo !== dispatchRepo);
  if (crossRepoTargets.length === 0) return;

  const secrets = listRepoSecrets(dispatchRepo);
  if (!secrets) return;

  const hasReadSecret = secrets.has("CLOWNFISH_READ_GH_TOKEN") || secrets.has("CLOWNFISH_GH_TOKEN");
  const hasWriteSecret = secrets.has("CLOWNFISH_GH_TOKEN");
  if (!hasReadSecret) {
    failed = true;
    console.error(
      [
        `refusing dispatch: ${dispatchRepo} Actions cannot hydrate ${crossRepoTargets.join(", ")} without a readable GitHub token secret`,
        "missing CLOWNFISH_READ_GH_TOKEN or CLOWNFISH_GH_TOKEN",
        "use --skip-token-secret-check only after confirming the GitHub App token can read the target repo",
      ].join("\n"),
    );
    return;
  }
  if ((mode === "execute" || mode === "autonomous") && !hasWriteSecret) {
    failed = true;
    console.error(
      [
        `refusing ${mode} dispatch: ${dispatchRepo} Actions need CLOWNFISH_GH_TOKEN for write/apply steps`,
        "use --skip-token-secret-check only for an intentionally read-only dry run or a verified alternate write token",
      ].join("\n"),
    );
  }
}

function listRepoSecrets(dispatchRepo) {
  const result = spawnSync("ghx", ["secret", "list", "--repo", dispatchRepo, "--json", "name"], {
    cwd: repoRoot(),
    encoding: "utf8",
    stdio: "pipe",
  });
  if (result.status !== 0) {
    console.warn(
      `warning: could not inspect repo secrets for ${dispatchRepo}; skipping token-secret preflight\n${result.stderr || result.stdout}`,
    );
    return null;
  }
  try {
    return new Set(JSON.parse(stripAnsi(result.stdout)).map((secret) => secret.name));
  } catch (error) {
    console.warn(`warning: could not parse repo secrets for ${dispatchRepo}; skipping token-secret preflight: ${error.message}`);
    return null;
  }
}

function dispatchBatch(batch, concurrency) {
  const results = [];
  let cursor = 0;
  let active = 0;
  let stop = false;
  return new Promise((resolve) => {
    const launch = () => {
      while (!stop && active < concurrency && cursor < batch.length) {
        const relative = batch[cursor];
        const position = index + cursor + 1;
        cursor += 1;
        active += 1;
        dispatchJob(relative, position).then((result) => {
          results.push(result);
          if (result.status !== 0) stop = true;
          active -= 1;
          if ((stop || cursor >= batch.length) && active === 0) {
            results.sort((left, right) => left.position - right.position);
            resolve(results);
          } else {
            launch();
          }
        });
      }
    };
    launch();
  });
}

function dispatchJob(relative, position) {
  return runCommand(
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
    relative,
    position,
  );
}

function runCommand(command, commandArgs, relative, position) {
  return new Promise((resolve) => {
    const child = spawn(command, commandArgs, { cwd: repoRoot(), stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", (error) => {
      resolve({ relative, position, status: 1, stdout, stderr: `${stderr}${error.message}` });
    });
    child.on("close", (status) => {
      resolve({ relative, position, status: status ?? 1, stdout, stderr });
    });
  });
}

function stripAnsi(text) {
  return text.replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
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
