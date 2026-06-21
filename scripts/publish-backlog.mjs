#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { currentProjectRepo, parseArgs, repoRoot } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? currentProjectRepo());
const workflow = String(args.workflow ?? "cluster-worker.yml");
const lookback = numberArg("lookback", 500);
const conclusion = String(args.conclusion ?? "success");
const threshold = args.threshold === undefined ? null : numberArg("threshold", 0);
const json = Boolean(args.json);
const fetch = args.fetch !== false && args.fetch !== "false";
const ghCommand = String(args["gh-bin"] ?? args.gh_bin ?? process.env.CLOWNFISH_GH_BIN ?? firstAvailableCommand(["ghx", "gh"]));
const ghRetries = numberArg("gh-retries", Number(process.env.CLOWNFISH_GH_RETRIES ?? 4));
const ghRetryBaseMs = numberArg("gh-retry-base-ms", Number(process.env.CLOWNFISH_GH_RETRY_BASE_MS ?? 1500));
const batchChildRunIds = new Map();
const runAttempts = new Map();

if (!["success", "failure", "cancelled", "timed_out", "action_required", "neutral", "skipped", "any"].includes(conclusion)) {
  throw new Error("--conclusion must be a GitHub Actions conclusion or any");
}

if (fetch) {
  execFileSync("git", ["fetch", "origin", "main", "--quiet"], { cwd: repoRoot(), stdio: "ignore" });
}

const publishedRunIds = readPublishedRunIds();
const runs = listWorkflowRuns();
const completed = runs.filter((run) => run.status === "completed");
const selected = completed.filter((run) => conclusion === "any" || run.conclusion === conclusion);
const missing = selected.filter((run) => !isPublishedRun(run, publishedRunIds));
const summary = {
  repo,
  workflow,
  lookback,
  conclusion,
  published_count: publishedRunIds.size,
  completed_count: completed.length,
  selected_count: selected.length,
  missing_count: missing.length,
  missing_run_ids: missing.map((run) => String(run.databaseId)),
  threshold,
  ok: threshold === null || missing.length <= threshold,
};

if (json) {
  console.log(JSON.stringify(summary, null, 2));
} else {
  console.log(
    [
      `repo=${repo}`,
      `workflow=${workflow}`,
      `lookback=${lookback}`,
      `conclusion=${conclusion}`,
      `selected=${summary.selected_count}`,
      `missing=${summary.missing_count}`,
      threshold === null ? null : `threshold=${threshold}`,
    ]
      .filter(Boolean)
      .join(" "),
  );
  if (missing.length > 0) console.log(`missing_run_ids=${summary.missing_run_ids.join(",")}`);
}

if (!summary.ok) {
  console.error(
    `publish backlog ${summary.missing_count} exceeds threshold ${threshold}; run publish-results workflow_dispatch or npm run backfill-results before dispatching more workers`,
  );
  process.exit(1);
}

function listWorkflowRuns() {
  return ghJson([
    "run",
    "list",
    "--repo",
    repo,
    "--workflow",
    workflow,
    "--limit",
    String(lookback),
    "--json",
    "databaseId,status,conclusion,createdAt,updatedAt,headSha,url",
  ]);
}

function readPublishedRunIds() {
  const fromOrigin = execFileSync(
    "git",
    ["ls-tree", "-r", "--name-only", "origin/main", "results/runs", "results/review-rejections"],
    {
      cwd: repoRoot(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    },
  )
    .split("\n")
    .filter(Boolean)
    .filter((file) => file.startsWith("results/runs/"))
    .map((file) => path.basename(file, ".json"));
  const terminalRejections = readTerminalRejectionIdsFromGit("origin/main");
  if (fromOrigin.length > 0 || terminalRejections.size > 0) return new Set([...fromOrigin, ...terminalRejections]);

  const dir = path.join(repoRoot(), "results", "runs");
  const resultRuns = !fs.existsSync(dir)
    ? []
    : fs
        .readdirSync(dir)
        .filter((name) => name.endsWith(".json"))
        .map((name) => path.basename(name, ".json"));
  return new Set([...resultRuns, ...readTerminalRejectionIdsFromDirectory()]);
}

function readTerminalRejectionIdsFromGit(ref) {
  const files = execFileSync("git", ["ls-tree", "-r", "--name-only", ref, "results/review-rejections"], {
    cwd: repoRoot(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  })
    .split("\n")
    .filter((file) => file.startsWith("results/review-rejections/") && file.endsWith(".json"));
  const ids = new Set();
  for (const file of files) {
    try {
      const rejection = JSON.parse(
        execFileSync("git", ["show", `${ref}:${file}`], {
          cwd: repoRoot(),
          encoding: "utf8",
          stdio: ["ignore", "pipe", "pipe"],
        }),
      );
      const runId = validTerminalRejectionRunId(rejection);
      if (runId === path.basename(file, ".json")) ids.add(runId);
    } catch {
      continue;
    }
  }
  return ids;
}

function readTerminalRejectionIdsFromDirectory() {
  const directory = path.join(repoRoot(), "results", "review-rejections");
  if (!fs.existsSync(directory)) return new Set();
  const ids = new Set();
  for (const name of fs.readdirSync(directory)) {
    if (!name.endsWith(".json")) continue;
    try {
      const runId = validTerminalRejectionRunId(JSON.parse(fs.readFileSync(path.join(directory, name), "utf8")));
      if (runId === path.basename(name, ".json")) ids.add(runId);
    } catch {
      continue;
    }
  }
  return ids;
}

function validTerminalRejectionRunId(value) {
  const runId = String(value?.run_id ?? "");
  const workflowRunId = String(value?.workflow_run_id ?? "");
  const runAttempt = String(value?.run_attempt ?? "");
  const matrixIndex = value?.matrix_index === null ? null : String(value?.matrix_index ?? "");
  const targets = Array.isArray(value?.targets) ? value.targets.map(String) : [];
  if (!/^\d+(?:-\d+-\d+)?$/.test(runId)) return null;
  if (!/^\d+$/.test(workflowRunId) || !/^\d+$/.test(runAttempt)) return null;
  if (matrixIndex !== null && !/^\d+$/.test(matrixIndex)) return null;
  if (runId !== workflowRunId && runId !== `${workflowRunId}-${runAttempt}-${matrixIndex}`) return null;
  if (value?.code !== "high_risk_close_target" || targets.length === 0 || !targets.every((target) => /^#\d+$/.test(target))) {
    return null;
  }
  return runId;
}

function isPublishedRun(run, publishedRunIds) {
  if (workflow !== "cluster-batch.yml") return publishedRunIds.has(String(run.databaseId));

  const expected = expectedBatchChildRunIds(run);
  return expected.length > 0 && expected.every((runId) => publishedRunIds.has(runId));
}

function expectedBatchChildRunIds(run) {
  const runId = String(run.databaseId);
  const runAttempt = selectedRunAttempt(run);
  const cacheKey = `${runId}-${runAttempt}`;
  const cached = batchChildRunIds.get(cacheKey);
  if (cached) return cached;

  const prefix = `projectclownfish-${runId}-${runAttempt}-`;
  const expected = [
    ...new Set(
      listRunArtifactNames(runId)
        .filter((name) => name.startsWith(prefix))
        .map((name) => name.slice(prefix.length))
        .filter((matrixIndex) => /^\d+$/.test(matrixIndex))
        .map((matrixIndex) => `${runId}-${runAttempt}-${matrixIndex}`),
    ),
  ];
  batchChildRunIds.set(cacheKey, expected);
  return expected;
}

function selectedRunAttempt(run) {
  const listed = run.runAttempt ?? run.run_attempt ?? run.attempt;
  if (/^\d+$/.test(String(listed ?? ""))) return String(listed);

  const runId = String(run.databaseId);
  const cached = runAttempts.get(runId);
  if (cached) return cached;

  const details = ghJson(["api", `repos/${repo}/actions/runs/${runId}`]);
  const runAttempt = String(details?.run_attempt ?? details?.runAttempt ?? "");
  if (!/^\d+$/.test(runAttempt)) {
    throw new Error(`could not determine run attempt for cluster-batch wrapper ${runId}`);
  }
  runAttempts.set(runId, runAttempt);
  return runAttempt;
}

function listRunArtifactNames(runId) {
  const pages = ghJson([
    "api",
    `repos/${repo}/actions/runs/${runId}/artifacts?per_page=100`,
    "--paginate",
    "--slurp",
  ]);
  return [
    ...new Set(
      (Array.isArray(pages) ? pages : [])
        .flatMap((page) => (Array.isArray(page?.artifacts) ? page.artifacts : []))
        .filter((artifact) => artifact && !artifact.expired)
        .map((artifact) => String(artifact.name ?? ""))
        .filter(Boolean),
    ),
  ];
}

function ghJson(ghArgs) {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  for (let attempt = 0; ; attempt++) {
    try {
      const output = execFileSync(ghCommand, ghArgs, {
        cwd: repoRoot(),
        env,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
        maxBuffer: 128 * 1024 * 1024,
      });
      return JSON.parse(stripAnsi(output) || "null");
    } catch (error) {
      if (attempt >= ghRetries || !isTransientGhError(error)) throw error;
      const delayMs = ghRetryBaseMs * 2 ** attempt;
      console.error(
        `transient ${ghCommand} failure while listing workflow runs; retrying in ${delayMs}ms (${attempt + 1}/${ghRetries})`,
      );
      sleepMs(delayMs);
    }
  }
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function isTransientGhError(error) {
  const stderr = stripAnsi(error?.stderr ?? error?.output?.[2] ?? error?.message ?? "");
  return /HTTP (?:502|503|504)|Server Error|timeout|timed out|connection reset|EOF/i.test(stderr);
}

function sleepMs(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function numberArg(name, fallback) {
  const value = Number(args[name] ?? fallback);
  if (!Number.isInteger(value) || value < 0) throw new Error(`--${name} must be a non-negative integer`);
  return value;
}

function firstAvailableCommand(commands) {
  for (const command of commands) {
    try {
      execFileSync(command, ["--version"], { cwd: repoRoot(), stdio: "ignore" });
      return command;
    } catch {
      continue;
    }
  }
  return commands.at(-1);
}
