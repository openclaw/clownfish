#!/usr/bin/env node
import { parseArgs, parseJob, validateJob } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];

if (!jobPath) {
  console.error("usage: node scripts/validate-job.mjs <job.md>");
  process.exit(2);
}

const job = parseJob(jobPath);
const errors = validateJob(job);

if (errors.length > 0) {
  console.error(`invalid job: ${job.relativePath}`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`valid job: ${job.relativePath}`);
