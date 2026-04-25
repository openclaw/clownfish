#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const mode = args.mode ?? "plan";
const runner = args.runner ?? "ubuntu-latest";
const workflow = args.workflow ?? "cluster-worker.yml";
const files = args._;

if (files.length === 0) {
  console.error("usage: node scripts/dispatch-jobs.mjs <job.md> [...] [--mode plan|execute] [--runner label]");
  process.exit(2);
}

let failed = false;
for (const file of files) {
  const job = parseJob(file);
  const errors = validateJob(job);
  if (errors.length > 0) {
    failed = true;
    console.error(`invalid job: ${file}`);
    for (const error of errors) console.error(`- ${error}`);
    continue;
  }

  const relative = path.relative(repoRoot(), path.resolve(file));
  if (!fs.existsSync(path.join(repoRoot(), relative))) {
    failed = true;
    console.error(`job does not exist inside repo: ${file}`);
    continue;
  }

  const result = spawnSync(
    "gh",
    ["workflow", "run", workflow, "-f", `job=${relative}`, "-f", `mode=${mode}`, "-f", `runner=${runner}`],
    { cwd: repoRoot(), encoding: "utf8", stdio: "pipe" },
  );
  if (result.status !== 0) {
    failed = true;
    console.error(result.stderr || result.stdout);
  } else {
    console.log(`dispatched ${relative} (${mode}) on ${runner}`);
  }
}

if (failed) process.exit(1);
