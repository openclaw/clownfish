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
import { normalizeResultMetadataFile } from "./result-metadata.mjs";
import { extractWorkerResultFromCodexJsonl } from "./worker-result-transcript.mjs";

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];
const mode = args.mode ?? "plan";
const dryRun = Boolean(args["dry-run"] || process.env.CLOWNFISH_DRY_RUN === "1");
const model = args.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.5";
const codexTimeoutMs = Number(process.env.CLOWNFISH_CODEX_TIMEOUT_MS ?? 30 * 60 * 1000);
const resultRepairAttempts = Math.max(0, Number(process.env.CLOWNFISH_RESULT_REPAIR_ATTEMPTS ?? 1));
const resultRepairTimeoutMs = Number(process.env.CLOWNFISH_RESULT_REPAIR_TIMEOUT_MS ?? 10 * 60 * 1000);
const codexReasoningEffort = String(process.env.CLOWNFISH_CODEX_REASONING_EFFORT ?? "medium");
const codexServiceTier = String(process.env.CLOWNFISH_CODEX_SERVICE_TIER ?? "fast").trim();
const codexStdoutMaxBufferBytes = parsePositiveIntegerEnv(
  process.env.CLOWNFISH_CODEX_STDOUT_MAX_BUFFER_BYTES,
  64 * 1024 * 1024,
);
const defaultCodexWorkerSandbox = process.env.GITHUB_ACTIONS === "true" ? "danger-full-access" : "read-only";
const codexWorkerSandbox = String(process.env.CLOWNFISH_CODEX_WORKER_SANDBOX ?? defaultCodexWorkerSandbox);

if (!jobPath) {
  console.error("usage: node scripts/run-worker.mjs <job.md> --mode plan|execute|autonomous [--dry-run]");
  process.exit(2);
}
if (!["plan", "execute", "autonomous"].includes(mode)) {
  console.error("mode must be plan, execute, or autonomous");
  process.exit(2);
}

const job = parseJob(jobPath);
const errors = validateJob(job);
if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

assertAllowedOwner(job.frontmatter.repo, process.env.CLOWNFISH_ALLOWED_OWNER);

if ((mode === "execute" || mode === "autonomous") && !dryRun) {
  if (job.frontmatter.mode !== mode) {
    throw new Error(`refusing ${mode}: job frontmatter mode is not ${mode}`);
  }
  if (process.env.CLOWNFISH_ALLOW_EXECUTE !== "1") {
    throw new Error(`refusing ${mode}: CLOWNFISH_ALLOW_EXECUTE must be 1`);
  }
}

const runDir = makeRunDir(job, mode);
const promptPath = path.join(runDir, "prompt.md");
const resultPath = path.join(runDir, "result.json");
const transcriptPath = path.join(runDir, "codex.jsonl");
const targetCheckout = resolveTargetCheckout(job.frontmatter.repo);
if (targetCheckout.error) {
  writeBlockedResult(targetCheckout.error);
  console.error(targetCheckout.error);
  process.exit(0);
}

const codexWorkingDir = targetCheckout.path ?? repoRoot();
const promptContext = {};
if (targetCheckout.path) {
  promptContext.targetCheckoutPath = targetCheckout.path;
  promptContext.targetCheckoutRepo = job.frontmatter.repo;
}

if (!dryRun) {
  const plannerArgs = ["scripts/plan-cluster.mjs", jobPath, "--run-dir", runDir];
  const planner = spawnSync(process.execPath, plannerArgs, {
    cwd: repoRoot(),
    encoding: "utf8",
    env: process.env,
  });
  if (planner.status !== 0) {
    console.error(planner.stderr || planner.stdout);
    process.exit(planner.status ?? 1);
  }
  promptContext.clusterPlanPath = path.join(runDir, "cluster-plan.json");
  promptContext.fixArtifactPath = path.join(runDir, "fix-artifact.json");
} else if (mode === "autonomous") {
  const plannerArgs = ["scripts/plan-cluster.mjs", jobPath, "--run-dir", runDir, "--offline"];
  const planner = spawnSync(process.execPath, plannerArgs, {
    cwd: repoRoot(),
    encoding: "utf8",
    env: process.env,
  });
  if (planner.status !== 0) {
    console.error(planner.stderr || planner.stdout);
    process.exit(planner.status ?? 1);
  }
  promptContext.clusterPlanPath = path.join(runDir, "cluster-plan.json");
  promptContext.fixArtifactPath = path.join(runDir, "fix-artifact.json");
}

const prompt = renderPrompt(job, mode, promptContext);

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

const child = runCodex({
  input: prompt,
  outputPath: resultPath,
  transcriptPath,
  stderrPath: path.join(runDir, "codex.stderr.log"),
  timeoutMs: codexTimeoutMs,
});

if (child.error?.code === "ETIMEDOUT") {
  writeBlockedResult(`Codex worker timed out after ${codexTimeoutMs}ms`);
  console.error(`Codex worker timed out after ${codexTimeoutMs}ms`);
  process.exit(0);
}
if (child.error?.code === "ENOBUFS") {
  writeBlockedResult(`Codex worker stdout exceeded ${codexStdoutMaxBufferBytes} bytes before writing result.json`);
  console.error(`Codex worker stdout exceeded ${codexStdoutMaxBufferBytes} bytes`);
  process.exit(0);
}

if (child.status !== 0) {
  if (recoverResultFromTranscriptIfMissing()) {
    repairResultIfNeeded();
    const recoveredReview = reviewResult();
    if (recoveredReview.status === 0) {
      console.log(`result: ${path.relative(repoRoot(), resultPath)}`);
      process.exit(0);
    }
    fs.writeFileSync(path.join(runDir, "review-results-recovered.json"), recoveredReview.stdout || recoveredReview.stderr || "");
  }
  const detail = child.stderr || child.stdout || `Codex worker exited ${child.status}`;
  writeBlockedResult(detail.trim());
  console.error(detail);
  process.exit(0);
}

recoverResultFromTranscriptIfMissing();
repairResultIfNeeded();
const finalReview = reviewResult();
if (finalReview.status !== 0) {
  fs.writeFileSync(path.join(runDir, "review-results-final.json"), finalReview.stdout || finalReview.stderr || "");
  if (!fs.existsSync(resultPath)) {
    writeBlockedResult("Codex worker completed without writing result.json; see codex.jsonl for the transcript");
    const blockedReview = reviewResult();
    if (blockedReview.status !== 0) {
      fs.writeFileSync(path.join(runDir, "review-results-blocked.json"), blockedReview.stdout || blockedReview.stderr || "");
      console.error(blockedReview.stdout || blockedReview.stderr || "blocked worker result failed validation");
      process.exit(1);
    }
  } else {
    console.error(finalReview.stdout || finalReview.stderr || "worker result failed validation");
    process.exit(1);
  }
}

console.log(`result: ${path.relative(repoRoot(), resultPath)}`);

function runCodex({ input, outputPath, transcriptPath: codexTranscriptPath, stderrPath, timeoutMs }) {
  const codexArgs = [
    "exec",
    "--cd",
    codexWorkingDir,
    "--model",
    model,
    "--sandbox",
    codexWorkerSandbox,
    ...codexConfigArgs(),
    "--output-schema",
    path.join(repoRoot(), "schemas", "codex-result.schema.json"),
    "--output-last-message",
    outputPath,
    "--ephemeral",
    "--json",
    "-",
  ];

  const child = spawnSync("codex", codexArgs, {
    cwd: codexWorkingDir,
    input,
    encoding: "utf8",
    env: codexEnv(),
    timeout: timeoutMs,
    maxBuffer: codexStdoutMaxBufferBytes,
  });

  fs.writeFileSync(codexTranscriptPath, child.stdout ?? "");
  if (child.stderr) fs.writeFileSync(stderrPath, child.stderr);
  return child;
}

function codexConfigArgs() {
  const configs = ['approval_policy="never"', `model_reasoning_effort=${JSON.stringify(codexReasoningEffort)}`];
  if (codexServiceTier) configs.push(`service_tier=${JSON.stringify(codexServiceTier)}`);
  return configs.flatMap((config) => ["-c", config]);
}

function repairResultIfNeeded() {
  for (let attempt = 1; attempt <= resultRepairAttempts; attempt += 1) {
    const review = reviewResult();
    if (review.status === 0) return;
    fs.writeFileSync(path.join(runDir, `review-results-failed-${attempt}.json`), review.stdout || review.stderr || "");
    if (!fs.existsSync(resultPath)) return;

    const beforePath = path.join(runDir, `result.before-repair-${attempt}.json`);
    fs.copyFileSync(resultPath, beforePath);
    const repairPrompt = [
      "You are repairing a ProjectClownfish structured JSON result that failed deterministic validation.",
      "",
      "Do not mutate GitHub. Do not change the job scope. Return a complete replacement JSON result only.",
      "Fix the validation failures with the narrowest safe changes. If a PR closeout comment is missing contributor credit, update that action comment to explicitly preserve credit, including wording such as `credit`, `attribution`, `thanks @user`, or `source PR`, and keep the canonical/fix links intact.",
      "If a validator failure reveals that an action is not safely repairable from the provided artifacts, downgrade only that action to a non-mutating `keep_related`, `keep_independent`, blocked fix-first action, or `needs_human` with exact evidence.",
      "Security repair rule: `route_security` must target exact issue/PR refs only. Never emit `route_security` for `cluster:<cluster_id>`. If a security-sensitive ref is separately routed and the non-security cluster-level fix action still has a complete executable `fix_artifact`, keep or repair that fix action. Replace it with cluster-scoped `needs_human` using `target_kind: null` and `target_updated_at: null` only when the fix itself depends on the quarantined security decision or no complete executable fix artifact is safe.",
      "Fix artifact repair rule: never emit `build_fix_artifact`, `open_fix_pr`, or planned `fix_needed` as a placeholder. If no complete executable `fix_artifact` is safe from the artifacts, use cluster-scoped `needs_human` instead.",
      "Exception: for `source: clawsweeper_commit` jobs where current main already fixed the finding, do not downgrade to `keep_related`; emit a cluster-scoped `build_fix_artifact` action with `status: \"skipped\"`, `target_kind: null`, `target_updated_at: null`, and a `fix_artifact` using `repair_strategy: \"already_fixed_on_main\"` plus `allow_no_pr: true`.",
      "",
      "## Validator output",
      "```json",
      (review.stdout || review.stderr || "").trim(),
      "```",
      "",
      "## Current result JSON",
      "```json",
      fs.readFileSync(beforePath, "utf8").trim(),
      "```",
      "",
      "## Original worker prompt",
      "```md",
      prompt,
      "```",
    ].join("\n");

    const repair = runCodex({
      input: repairPrompt,
      outputPath: resultPath,
      transcriptPath: path.join(runDir, `codex-repair-${attempt}.jsonl`),
      stderrPath: path.join(runDir, `codex-repair-${attempt}.stderr.log`),
      timeoutMs: resultRepairTimeoutMs,
    });
    if (repair.error?.code === "ETIMEDOUT") {
      console.error(`Codex result repair timed out after ${resultRepairTimeoutMs}ms`);
      return;
    }
    if (repair.status !== 0) {
      console.error(repair.stderr || repair.stdout || `Codex result repair exited ${repair.status}`);
      return;
    }
  }
}

function reviewResult() {
  normalizeResultMetadata();
  return spawnSync(process.execPath, ["scripts/review-results.mjs", runDir], {
    cwd: repoRoot(),
    encoding: "utf8",
    env: process.env,
  });
}

function normalizeResultMetadata() {
  try {
    normalizeResultMetadataFile(resultPath, path.join(runDir, "cluster-plan.json"));
  } catch (error) {
    fs.writeFileSync(
      path.join(runDir, "result-metadata-normalize-error.txt"),
      `${error?.stack ?? error}\n`,
      "utf8",
    );
  }
}

function recoverResultFromTranscriptIfMissing() {
  if (fs.existsSync(resultPath) || !fs.existsSync(transcriptPath)) return false;
  const recovered = extractWorkerResultFromCodexJsonl(fs.readFileSync(transcriptPath, "utf8"));
  if (!recovered) return false;

  fs.writeFileSync(resultPath, `${JSON.stringify(recovered, null, 2)}\n`);
  fs.writeFileSync(
    path.join(runDir, "result.recovered-from-transcript.json"),
    `${JSON.stringify(
      {
        source: path.basename(transcriptPath),
        reason: "Codex emitted terminal worker JSON in an agent_message but did not write output-last-message",
      },
      null,
      2,
    )}\n`,
  );
  return true;
}

function codexEnv() {
  const env = { ...process.env };
  delete env.GH_TOKEN;
  delete env.GITHUB_TOKEN;
  delete env.CLOWNFISH_GH_TOKEN;
  delete env.CLOWNFISH_READ_GH_TOKEN;
  delete env.CLOWNFISH_CODEX_GH_TOKEN;
  if (process.env.GITHUB_ACTIONS === "true") {
    delete env.OPENAI_API_KEY;
    delete env.CODEX_API_KEY;
  }
  return env;
}

function parsePositiveIntegerEnv(value, fallback) {
  if (value === undefined || value === "") return fallback;
  const parsed = Number(value);
  if (!Number.isSafeInteger(parsed) || parsed <= 0) return fallback;
  return parsed;
}

function resolveTargetCheckout(expectedRepo) {
  const configuredPath = process.env.CLOWNFISH_TARGET_CHECKOUT;
  if (!configuredPath) return { path: null };

  const targetPath = path.resolve(configuredPath);
  const checkout = spawnSync("git", ["rev-parse", "--is-inside-work-tree"], {
    cwd: targetPath,
    encoding: "utf8",
  });
  if (checkout.status !== 0 || checkout.stdout.trim() !== "true") {
    return { error: "CLOWNFISH_TARGET_CHECKOUT is not a git checkout" };
  }

  const origin = spawnSync("git", ["config", "--get", "remote.origin.url"], {
    cwd: targetPath,
    encoding: "utf8",
  });
  const actualRepo = repoFromGithubRemote(origin.stdout);
  if (origin.status !== 0 || !actualRepo) {
    return { error: "CLOWNFISH_TARGET_CHECKOUT origin is not a GitHub repository remote" };
  }

  if (actualRepo.toLowerCase() !== expectedRepo.toLowerCase()) {
    return {
      error: `CLOWNFISH_TARGET_CHECKOUT origin repo mismatch: expected ${expectedRepo}, got ${actualRepo}`,
    };
  }

  return { path: targetPath };
}

function repoFromGithubRemote(remote) {
  const value = String(remote ?? "").trim();
  const match = value.match(
    /^(?:git@github\.com:|(?:https?|ssh):\/\/(?:[^@/\s]+@)?github\.com\/)([^/\s]+)\/([^/\s]+?)(?:\.git)?\/?$/i,
  );
  if (!match) return null;
  return `${match[1]}/${match[2]}`;
}

function writeBlockedResult(summary) {
  if (fs.existsSync(resultPath)) return;
  const result = {
    status: "blocked",
    repo: job.frontmatter.repo,
    cluster_id: job.frontmatter.cluster_id,
    mode,
    summary,
    actions: [],
    needs_human: [summary],
    canonical: null,
    canonical_issue: null,
    canonical_pr: null,
    merge_preflight: [],
    fix_artifact: null,
  };
  fs.writeFileSync(resultPath, `${JSON.stringify(result, null, 2)}\n`);
}
