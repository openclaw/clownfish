#!/usr/bin/env node
import { parseArgs, parseJob, renderPrompt, validateJob } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];
const mode = args.mode;

if (!jobPath) {
  console.error("usage: node scripts/render-prompt.mjs <job.md> [--mode plan|execute]");
  process.exit(2);
}

const job = parseJob(jobPath);
const errors = validateJob(job);
if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

process.stdout.write(renderPrompt(job, mode));
