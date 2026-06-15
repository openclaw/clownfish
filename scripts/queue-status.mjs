#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { currentProjectRepo, parseArgs, parseJob, repoRoot } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const inboxDir = path.resolve(repoRoot(), String(args.inbox ?? "jobs/openclaw/inbox"));
const runsDir = path.resolve(repoRoot(), String(args["runs-dir"] ?? args.runs_dir ?? "results/runs"));
const dispatchLedgerPath = path.resolve(
  repoRoot(),
  String(args["dispatch-ledger"] ?? args.dispatch_ledger ?? path.join(".projectclownfish", "dispatch-ledger.json")),
);
const dispatchRepo = String(args.repo ?? currentProjectRepo());
const jsonOutput = Boolean(args.json);
const skipSecretCheck = Boolean(args["skip-secret-check"] ?? args.skip_secret_check);
const planLimit = numberArg("plan-limit", 0);
const executeLimit = numberArg("execute-limit", 0);
const autonomousLimit = numberArg("autonomous-limit", 0);
const closeLimit = numberArg("close-limit", 0);

const jobs = readInboxJobs();
const resultsByCluster = readRunResults();
const attemptsByJob = readDispatchAttemptsByJob();
const rows = jobs.map(classifyJob);
const missingPlan = rows.filter((row) => row.mode === "plan" && !row.has_result);
const missingExecute = rows.filter((row) => row.mode === "execute" && !row.has_result);
const missingAutonomous = rows.filter((row) => row.mode === "autonomous" && !row.has_result);
const closeCanaries = rows.filter((row) => row.close_canary && !row.has_result);
const attemptedMissing = rows.filter((row) => !row.has_result && row.latest_dispatch_attempt);
const unattemptedMissing = rows.filter((row) => !row.has_result && !row.latest_dispatch_attempt);
const secrets = skipSecretCheck ? null : readSecretNames(dispatchRepo);
const auth = summarizeAuth({ secrets, targetRepos: new Set(rows.map((row) => row.repo).filter(Boolean)) });

const selected = {
  plan: take(missingPlan, planLimit).map((row) => row.path),
  execute: take(missingExecute, executeLimit).map((row) => row.path),
  autonomous: take(missingAutonomous, autonomousLimit).map((row) => row.path),
  close_canaries: take(closeCanaries, closeLimit).map((row) => row.path),
};

writeJobsFile(args["write-missing-plan"] ?? args.write_missing_plan, selected.plan);
writeJobsFile(args["write-missing-execute"] ?? args.write_missing_execute, selected.execute);
writeJobsFile(args["write-missing-autonomous"] ?? args.write_missing_autonomous, selected.autonomous);
writeJobsFile(args["write-close-canaries"] ?? args.write_close_canaries, selected.close_canaries);

const payload = {
  generated_at: new Date().toISOString(),
  inbox: path.relative(repoRoot(), inboxDir),
  runs_dir: path.relative(repoRoot(), runsDir),
  dispatch_ledger: path.relative(repoRoot(), dispatchLedgerPath),
  dispatch_repo: dispatchRepo,
  auth,
  totals: {
    inbox_jobs: rows.length,
    with_results: rows.filter((row) => row.has_result).length,
    missing_results: rows.filter((row) => !row.has_result).length,
    missing_plan: missingPlan.length,
    missing_execute: missingExecute.length,
    missing_autonomous: missingAutonomous.length,
    close_canaries_ready: closeCanaries.length,
    attempted_missing_results: attemptedMissing.length,
    unattempted_missing_results: unattemptedMissing.length,
  },
  by_mode: countBy(rows, (row) => row.mode),
  by_mode_result: countBy(rows, (row) => `${row.mode}:${row.has_result ? "has_result" : "missing_result"}`),
  selected,
  rows: jsonOutput ? rows : undefined,
};

if (jsonOutput) {
  console.log(JSON.stringify(payload, null, 2));
} else {
  console.log(
    [
      `jobs=${payload.totals.inbox_jobs}`,
      `missing=${payload.totals.missing_results}`,
      `plan=${payload.totals.missing_plan}`,
      `execute=${payload.totals.missing_execute}`,
      `autonomous=${payload.totals.missing_autonomous}`,
      `close_canaries=${payload.totals.close_canaries_ready}`,
      `attempted_missing=${payload.totals.attempted_missing_results}`,
      `unattempted_missing=${payload.totals.unattempted_missing_results}`,
      `read_secret=${auth.read_secret_present ? "yes" : "no"}`,
      `write_secret=${auth.write_secret_present ? "yes" : "no"}`,
      `plan_ready=${auth.plan_dispatch_ready ? "yes" : "no"}`,
      `execute_ready=${auth.execute_dispatch_ready ? "yes" : "no"}`,
    ].join(" "),
  );
  if (auth.blockers.length > 0) {
    for (const blocker of auth.blockers) console.log(`blocker\t${blocker}`);
  }
  for (const [name, items] of Object.entries(selected)) {
    if (items.length > 0) console.log(`selected_${name}\t${items.length}`);
  }
}

function readInboxJobs() {
  if (!fs.existsSync(inboxDir)) return [];
  return fs
    .readdirSync(inboxDir)
    .filter((name) => name.endsWith(".md"))
    .sort()
    .map((name) => {
      const job = parseJob(path.join(inboxDir, name));
      return {
        path: job.relativePath,
        basename: name,
        frontmatter: job.frontmatter,
      };
    });
}

function readRunResults() {
  const out = new Map();
  if (!fs.existsSync(runsDir)) return out;
  for (const name of fs.readdirSync(runsDir).filter((entry) => entry.endsWith(".json"))) {
    const filePath = path.join(runsDir, name);
    try {
      const result = JSON.parse(fs.readFileSync(filePath, "utf8"));
      const clusterId = String(result.cluster_id ?? result.clusterId ?? "");
      if (!clusterId) continue;
      const existing = out.get(clusterId);
      if (!existing || Number(name.replace(/\.json$/, "")) > Number(existing.run_id)) {
        out.set(clusterId, {
          run_id: name.replace(/\.json$/, ""),
          path: path.relative(repoRoot(), filePath),
          status: result.status ?? null,
          actions_total: Array.isArray(result.actions) ? result.actions.length : 0,
        });
      }
    } catch {
      continue;
    }
  }
  return out;
}

function classifyJob(job) {
  const fm = job.frontmatter;
  const clusterId = String(fm.cluster_id ?? "");
  const result = resultsByCluster.get(clusterId) ?? null;
  const latestDispatchAttempt = attemptsByJob.get(job.path) ?? null;
  return {
    path: job.path,
    cluster_id: clusterId,
    repo: String(fm.repo ?? ""),
    mode: String(fm.mode ?? ""),
    close_canary: /(?:^|-)close-canary(?:-|$)/.test(job.basename),
    has_result: Boolean(result),
    latest_result: result,
    latest_dispatch_attempt: latestDispatchAttempt,
  };
}

function readDispatchAttemptsByJob() {
  const out = new Map();
  if (!fs.existsSync(dispatchLedgerPath)) return out;
  let ledger;
  try {
    ledger = JSON.parse(fs.readFileSync(dispatchLedgerPath, "utf8"));
  } catch {
    return out;
  }
  for (const attempt of ledger.attempts ?? []) {
    const sourceJob = String(attempt.source_job ?? "");
    if (!sourceJob) continue;
    const current = out.get(sourceJob);
    if (!current || Date.parse(attempt.dispatched_at ?? "") > Date.parse(current.dispatched_at ?? "")) {
      out.set(sourceJob, {
        batch_id: attempt.batch_id ?? null,
        status: attempt.status ?? null,
        mode: attempt.mode ?? null,
        dispatched_at: attempt.dispatched_at ?? null,
        head_sha: attempt.head_sha ?? null,
      });
    }
  }
  return out;
}

function readSecretNames(repo) {
  const result = execFileSync("ghx", ["secret", "list", "--repo", repo, "--json", "name"], {
    cwd: repoRoot(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  return new Set(JSON.parse(stripAnsi(result)).map((secret) => String(secret.name)));
}

function summarizeAuth({ secrets, targetRepos }) {
  if (!secrets) {
    return {
      checked: false,
      read_secret_present: false,
      write_secret_present: false,
      dispatch_ready: false,
      blockers: ["secret check skipped"],
    };
  }
  const crossRepoTargets = [...targetRepos].filter((repo) => repo && repo !== dispatchRepo);
  const readSecretPresent = secrets.has("CLOWNFISH_READ_GH_TOKEN") || secrets.has("CLOWNFISH_GH_TOKEN");
  const writeSecretPresent = secrets.has("CLOWNFISH_GH_TOKEN");
  const blockers = [];
  if (crossRepoTargets.length > 0 && !readSecretPresent) {
    blockers.push(`missing CLOWNFISH_READ_GH_TOKEN or CLOWNFISH_GH_TOKEN for ${crossRepoTargets.join(", ")}`);
  }
  if (crossRepoTargets.length > 0 && !writeSecretPresent) {
    blockers.push(`missing CLOWNFISH_GH_TOKEN for execute/autonomous write steps`);
  }
  return {
    checked: true,
    cross_repo_targets: crossRepoTargets,
    read_secret_present: readSecretPresent,
    write_secret_present: writeSecretPresent,
    plan_dispatch_ready: crossRepoTargets.length === 0 || readSecretPresent,
    execute_dispatch_ready: crossRepoTargets.length === 0 || writeSecretPresent,
    blockers,
  };
}

function writeJobsFile(filePath, items) {
  if (!filePath) return;
  const absolute = path.resolve(repoRoot(), String(filePath));
  fs.mkdirSync(path.dirname(absolute), { recursive: true });
  fs.writeFileSync(absolute, `${items.join("\n")}${items.length > 0 ? "\n" : ""}`, "utf8");
}

function take(items, limit) {
  return limit > 0 ? items.slice(0, limit) : items;
}

function countBy(items, keyFn) {
  const out = {};
  for (const item of items) {
    const key = keyFn(item) || "unknown";
    out[key] = (out[key] ?? 0) + 1;
  }
  return out;
}

function numberArg(name, fallback) {
  const value = Number(args[name] ?? args[name.replaceAll("-", "_")] ?? fallback);
  if (!Number.isInteger(value) || value < 0) {
    console.error(`--${name} must be a non-negative integer`);
    process.exit(2);
  }
  return value;
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}
