#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  assertAllowedOwner,
  makeRunDir,
  parseArgs,
  parseJob,
  renderPrompt,
  repoRoot,
  validateJob,
} from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];
const mode = args.mode ?? "plan";
const dryRun = Boolean(args["dry-run"] || process.env.CLOWNFISH_DRY_RUN === "1");
const model = args.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.4";

if (!jobPath) {
  console.error("usage: node scripts/run-worker.mjs <job.md> --mode plan|execute [--dry-run]");
  process.exit(2);
}
if (!["plan", "execute"].includes(mode)) {
  console.error("mode must be plan or execute");
  process.exit(2);
}

const job = parseJob(jobPath);
const errors = validateJob(job);
if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

assertAllowedOwner(job.frontmatter.repo, process.env.CLOWNFISH_ALLOWED_OWNER);

if (mode === "execute") {
  if (job.frontmatter.mode !== "execute") {
    throw new Error("refusing execute: job frontmatter mode is not execute");
  }
  if (process.env.CLOWNFISH_ALLOW_EXECUTE !== "1") {
    throw new Error("refusing execute: CLOWNFISH_ALLOW_EXECUTE must be 1");
  }
}

const runDir = makeRunDir(job, mode);
const promptPath = path.join(runDir, "prompt.md");
const resultPath = path.join(runDir, "result.json");
const transcriptPath = path.join(runDir, "codex.jsonl");
const prompt = renderPrompt(job, mode);

fs.writeFileSync(promptPath, prompt);

if (dryRun) {
  const dryResult = {
    status: "planned",
    repo: job.frontmatter.repo,
    cluster_id: job.frontmatter.cluster_id,
    mode,
    summary: "dry run only; prompt rendered but Codex was not invoked",
    actions: [],
    prompt_path: path.relative(repoRoot(), promptPath),
  };
  fs.writeFileSync(resultPath, `${JSON.stringify(dryResult, null, 2)}\n`);
  console.log(JSON.stringify(dryResult, null, 2));
  process.exit(0);
}

const codexArgs = [
  "exec",
  "--cd",
  repoRoot(),
  "--model",
  model,
  "--output-schema",
  path.join(repoRoot(), "schemas", "codex-result.schema.json"),
  "--output-last-message",
  resultPath,
  "--json",
];

if (process.env.CLOWNFISH_CODEX_BYPASS === "1") {
  codexArgs.push("--dangerously-bypass-approvals-and-sandbox");
} else {
  codexArgs.push("--full-auto");
}

codexArgs.push("-");

const child = spawnSync("codex", codexArgs, {
  cwd: repoRoot(),
  input: prompt,
  encoding: "utf8",
  env: process.env,
});

fs.writeFileSync(transcriptPath, child.stdout ?? "");
if (child.stderr) fs.writeFileSync(path.join(runDir, "codex.stderr.log"), child.stderr);

if (child.status !== 0) {
  console.error(child.stderr || child.stdout);
  process.exit(child.status ?? 1);
}

console.log(`result: ${path.relative(repoRoot(), resultPath)}`);
