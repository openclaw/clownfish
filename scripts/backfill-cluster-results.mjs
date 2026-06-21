#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { currentProjectRepo, parseArgs, repoRoot } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? currentProjectRepo());
const workflow = String(args.workflow ?? "cluster-worker.yml");
const outDir = path.resolve(String(args.out ?? path.join(repoRoot(), ".projectclownfish", "backfill", "artifacts")));
const runsJson = path.resolve(String(args["runs-json"] ?? path.join(outDir, "runs.json")));
const manifestPath = path.resolve(String(args.manifest ?? path.join(outDir, "backfill-manifest.json")));
const limit = numberArg("limit", 50);
const lookback = numberArg("lookback", Math.max(limit * 4, 200));
const since = typeof args.since === "string" ? Date.parse(args.since) : null;
const conclusion = String(args.conclusion ?? "success");
const order = String(args.order ?? "newest");
const requestedRunId = args["run-id"] ? String(args["run-id"]) : "";
const requestedRunAttempt = args["run-attempt"] ? String(args["run-attempt"]) : "1";
const dryRun = Boolean(args["dry-run"]);
const allowPartial = Boolean(args["allow-partial"]) || process.env.CLOWNFISH_BACKFILL_ALLOW_PARTIAL === "1";
const batchChildRunIds = new Map();
const runAttempts = new Map();
const artifactNamesByRunId = new Map();

if (since !== null && Number.isNaN(since)) throw new Error("--since must be an ISO-compatible timestamp");
if (!["success", "failure", "cancelled", "timed_out", "action_required", "neutral", "skipped", "any"].includes(conclusion)) {
  throw new Error("--conclusion must be a GitHub Actions conclusion or any");
}
if (!["newest", "oldest"].includes(order)) throw new Error("--order must be newest or oldest");

const publishedRunIds = readPublishedRunIds();
const listedRuns = sortRuns(listWorkflowRuns());
const requestedRun = requestedRunId ? runFromRequestedId(requestedRunId, listedRuns) : null;
const candidates = selectCandidates(listedRuns, requestedRun);
const manifest = {
  repo,
  workflow,
  out_dir: outDir,
  runs_json: runsJson,
  dry_run: dryRun,
  generated_at: new Date().toISOString(),
  order,
  selected: candidates.map(summarizeRun),
  downloaded: [],
  skipped: [],
  failed: [],
};

if (!dryRun) fs.mkdirSync(outDir, { recursive: true });

for (const run of candidates) {
  if (dryRun) continue;
  const downloaded = downloadRunArtifacts(run);
  if (downloaded.ok) {
    manifest.downloaded.push({
      ...summarizeRun(run),
      artifact_dir: downloaded.dir,
      artifact_name: downloaded.artifact_name,
      artifact_count: downloaded.artifact_count ?? null,
    });
  } else if (downloaded.skipped) {
    manifest.skipped.push({ ...summarizeRun(run), reason: downloaded.reason });
  } else {
    manifest.failed.push({ ...summarizeRun(run), reason: downloaded.reason });
  }
}

const metadataRows = (dryRun ? candidates : manifest.downloaded).map((row) => ({
  databaseId: row.databaseId ?? row.run_id,
  id: row.databaseId ?? row.run_id,
  run_id: String(row.databaseId ?? row.run_id),
  run_attempt: String(row.runAttempt ?? row.run_attempt ?? "1"),
  url: row.url ?? null,
  headSha: row.headSha ?? row.head_sha ?? null,
  head_sha: row.headSha ?? row.head_sha ?? null,
  status: row.status ?? null,
  conclusion: row.conclusion ?? null,
  createdAt: row.createdAt ?? row.created_at ?? null,
  updatedAt: row.updatedAt ?? row.updated_at ?? null,
}));

if (!dryRun) {
  fs.mkdirSync(path.dirname(runsJson), { recursive: true });
  fs.writeFileSync(runsJson, `${JSON.stringify(metadataRows, null, 2)}\n`, "utf8");
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

console.log(
  JSON.stringify(
    {
      status: manifest.failed.length > 0 ? "partial" : "ok",
      repo,
      workflow,
      selected: candidates.length,
      downloaded: manifest.downloaded.length,
      skipped: manifest.skipped.length,
      failed: manifest.failed.length,
      allow_partial: allowPartial,
      dry_run: dryRun,
      out_dir: dryRun ? null : outDir,
      runs_json: dryRun ? null : runsJson,
      manifest: dryRun ? manifest : manifestPath,
    },
    null,
    2,
  ),
);

if (manifest.failed.length > 0 && !allowPartial) process.exit(1);
if (manifest.failed.length > 0 && manifest.downloaded.length === 0) process.exit(1);

function selectCandidates(runs, requested) {
  const byId = new Map();
  if (requested) byId.set(String(requested.databaseId), requested);
  for (const run of runs) {
    const id = String(run.databaseId);
    if (!id || isPublishedRun(run, publishedRunIds)) continue;
    if (since !== null && Date.parse(run.createdAt ?? "") < since) continue;
    if (run.status !== "completed") continue;
    if (conclusion !== "any" && run.conclusion !== conclusion) continue;
    byId.set(id, run);
    if (byId.size >= limit) break;
  }
  return [...byId.values()].slice(0, limit);
}

function runFromRequestedId(runId, runs) {
  const listed = runs.find((run) => String(run.databaseId) === runId);
  if (listed) return { ...listed, runAttempt: requestedRunAttempt };
  const viewed = ghJson([
    "run",
    "view",
    runId,
    "--repo",
    repo,
    "--json",
    "databaseId,status,conclusion,createdAt,updatedAt,headSha,url",
  ]);
  return { ...viewed, runAttempt: requestedRunAttempt };
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

function sortRuns(runs) {
  return [...runs].sort((a, b) => {
    const left = Date.parse(a.createdAt ?? "") || 0;
    const right = Date.parse(b.createdAt ?? "") || 0;
    return order === "oldest" ? left - right : right - left;
  });
}

function downloadRunArtifacts(run) {
  const runId = String(run.databaseId);
  const runAttempt = selectedRunAttempt(run);
  const artifactName = `projectclownfish-${runId}-${runAttempt}`;
  const destination = path.join(outDir, artifactName);
  fs.rmSync(destination, { recursive: true, force: true });
  fs.mkdirSync(destination, { recursive: true });

  const artifactNames = listRunArtifactNames(runId);
  if (artifactNames.includes(artifactName)) {
    const specific = spawnGh(["run", "download", runId, "--repo", repo, "--name", artifactName, "--dir", destination]);
    if (specific.status === 0) return acceptResultArtifact(destination, { artifact_name: artifactName });
  }

  const matrixNames = artifactNames.filter((name) => name.startsWith(`${artifactName}-`));
  if (matrixNames.length > 0) {
    const matrix = spawnGh([
      "run",
      "download",
      runId,
      "--repo",
      repo,
      "--dir",
      destination,
      ...matrixNames.flatMap((name) => ["--name", name]),
    ]);
    if (matrix.status === 0) {
      return acceptResultArtifact(destination, {
        artifact_name: `${artifactName}-*`,
        artifact_count: matrixNames.length,
      });
    }
    fs.rmSync(destination, { recursive: true, force: true });
    return {
      ok: false,
      reason: stripAnsi(matrix.stderr || matrix.stdout || "matrix artifact download failed").trim(),
    };
  }

  const fallback = spawnGh(["run", "download", runId, "--repo", repo, "--dir", destination]);
  if (fallback.status !== 0) {
    fs.rmSync(destination, { recursive: true, force: true });
    return {
      ok: false,
      reason: stripAnsi(fallback.stderr || fallback.stdout || specific.stderr || specific.stdout || "artifact download failed").trim(),
    };
  }

  removeWorkerArtifacts(destination);
  return acceptResultArtifact(destination, { artifact_name: null });
}

function acceptResultArtifact(destination, details) {
  if (containsResultArtifact(destination)) return { ok: true, dir: destination, ...details };
  fs.rmSync(destination, { recursive: true, force: true });
  return {
    ok: false,
    skipped: true,
    reason: "downloaded artifacts did not contain result.json",
  };
}

function containsResultArtifact(directory) {
  for (const entry of fs.readdirSync(directory, { recursive: true })) {
    const candidate = path.join(directory, String(entry));
    if (path.basename(candidate) === "result.json" && fs.statSync(candidate).isFile()) return true;
  }
  return false;
}

function listRunArtifactNames(runId) {
  const cached = artifactNamesByRunId.get(runId);
  if (cached) return cached;
  const pages = ghJson([
    "api",
    `repos/${repo}/actions/runs/${runId}/artifacts?per_page=100`,
    "--paginate",
    "--slurp",
  ]);
  const names = [
    ...new Set(
      (Array.isArray(pages) ? pages : [])
        .flatMap((page) => (Array.isArray(page?.artifacts) ? page.artifacts : []))
        .filter((artifact) => artifact && !artifact.expired)
        .map((artifact) => String(artifact.name ?? ""))
        .filter(Boolean),
    ),
  ];
  artifactNamesByRunId.set(runId, names);
  return names;
}

function removeWorkerArtifacts(directory) {
  for (const entry of fs.readdirSync(directory, { recursive: true })) {
    const candidate = path.join(directory, String(entry));
    if (path.basename(candidate).startsWith("projectclownfish-worker-") && fs.existsSync(candidate)) {
      fs.rmSync(candidate, { recursive: true, force: true });
    }
  }
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
  if (workflow !== "cluster-batch.yml") return String(run.runAttempt ?? run.run_attempt ?? run.attempt ?? "1");

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

function readPublishedRunIds() {
  const dir = path.join(repoRoot(), "results", "runs");
  const resultRuns = !fs.existsSync(dir)
    ? []
    : fs
        .readdirSync(dir)
        .filter((name) => name.endsWith(".json"))
        .map((name) => path.basename(name, ".json"));
  return new Set([...resultRuns, ...readTerminalRejectionIds()]);
}

function readTerminalRejectionIds() {
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

function summarizeRun(run) {
  return {
    databaseId: String(run.databaseId),
    runAttempt: workflow === "cluster-batch.yml" ? selectedRunAttempt(run) : String(run.runAttempt ?? "1"),
    status: run.status ?? null,
    conclusion: run.conclusion ?? null,
    createdAt: run.createdAt ?? null,
    updatedAt: run.updatedAt ?? null,
    headSha: run.headSha ?? null,
    url: run.url ?? null,
  };
}

function ghJson(ghArgs) {
  const output = execFileSync("gh", ghArgs, {
    cwd: repoRoot(),
    env: ghEnv(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 128 * 1024 * 1024,
  });
  return JSON.parse(stripAnsi(output) || "null");
}

function spawnGh(ghArgs) {
  return spawnSync("gh", ghArgs, {
    cwd: repoRoot(),
    env: ghEnv(),
    encoding: "utf8",
    stdio: "pipe",
    maxBuffer: 64 * 1024 * 1024,
  });
}

function ghEnv() {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  return env;
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function numberArg(name, fallback) {
  const value = Number(args[name] ?? fallback);
  if (!Number.isInteger(value) || value < 1) throw new Error(`--${name} must be a positive integer`);
  return value;
}
