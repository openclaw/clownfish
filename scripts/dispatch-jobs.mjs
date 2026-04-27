#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
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
const files = args._;

if (files.length === 0) {
  console.error(
    "usage: node scripts/dispatch-jobs.mjs <job.md> [...] [--mode plan|execute|autonomous] [--runner label] [--execution-runner label] [--model model] [--max-live-workers 50] [--wait-for-capacity]",
  );
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

if (!failed) {
  const capacityOptions = { repo, workflow, requested: jobs.length, maxLiveWorkers };
  const capacity = waitForCapacity ? waitForLiveWorkerCapacity(capacityOptions) : assertLiveWorkerCapacity(capacityOptions);
  console.log(
    `live worker capacity: ${capacity.active}/${capacity.max_live_workers} active; dispatching ${jobs.length} ${workflow} run(s)`,
  );
}

for (const relative of jobs) {
  if (failed) break;

  const result = spawnSync(
    "gh",
    [
      "workflow",
      "run",
      workflow,
      "--repo",
      repo,
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
    console.log(`dispatched ${relative} (${mode}) on ${runner}; execution on ${executionRunner}`);
  }
}

if (failed) process.exit(1);
