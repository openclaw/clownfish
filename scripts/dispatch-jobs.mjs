#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawn, spawnSync } from "node:child_process";
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
const ghCommand = String(args["gh-bin"] ?? args.gh_bin ?? process.env.CLOWNFISH_GH_BIN ?? firstAvailableCommand(["ghx", "gh"]));
const dispatchEvent = String(
  args["dispatch-event"] ?? args.dispatch_event ?? process.env.CLOWNFISH_DISPATCH_EVENT ?? "workflow",
);
const validDispatchEvents = new Set(["workflow", "repository-worker", "repository-batch"]);
if (!validDispatchEvents.has(dispatchEvent)) {
  console.error(`--dispatch-event must be one of ${[...validDispatchEvents].join(", ")}`);
  process.exit(2);
}
const repositoryWorkerDispatch = dispatchEvent === "repository-worker";
const repositoryBatchDispatch = dispatchEvent === "repository-batch";
const batchWorkflow = String(
  args["batch-workflow"] ?? args.batch_workflow ?? process.env.CLOWNFISH_BATCH_WORKFLOW ?? "cluster-batch.yml",
);
const batchEventType = String(
  args["batch-event-type"] ?? args.batch_event_type ?? process.env.CLOWNFISH_BATCH_EVENT_TYPE ?? "projectclownfish_batch",
);
const BATCH_MAX_PARALLEL_CAP = 32;
const workerEventType = String(
  args["worker-event-type"] ??
    args.worker_event_type ??
    process.env.CLOWNFISH_WORKER_EVENT_TYPE ??
    "projectclownfish_worker",
);
const batchMaxParallel = positiveNumberArg(
  args["batch-max-parallel"] ?? args.batch_max_parallel ?? process.env.CLOWNFISH_BATCH_MAX_PARALLEL ?? 8,
  "batch-max-parallel",
);
const batchMatrixLimit = positiveNumberArg(
  args["batch-matrix-limit"] ?? args.batch_matrix_limit ?? process.env.CLOWNFISH_BATCH_MATRIX_LIMIT ?? 200,
  "batch-matrix-limit",
);
const dispatchWorkflow = repositoryBatchDispatch ? batchWorkflow : workflow;
const writeMode = mode === "execute" || mode === "autonomous";
const writeLiveWorkerCap = positiveNumberArg(
  args["write-live-worker-cap"] ??
    args.write_live_worker_cap ??
    process.env.CLOWNFISH_WRITE_LIVE_WORKER_CAP ??
    5,
  "write-live-worker-cap",
);
const allowHighVolumeWrite = Boolean(
  truthyFlag(args["allow-high-volume-write"] ?? args.allow_high_volume_write ?? process.env.CLOWNFISH_ALLOW_HIGH_VOLUME_WRITE),
);
const maxLiveWorkers = readMaxLiveWorkers(effectiveCapacityArgs(args));
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
const publishBacklogWaitMs = numberArg(
  args["publish-backlog-wait-ms"] ?? process.env.CLOWNFISH_PUBLISH_BACKLOG_WAIT_MS ?? 600_000,
  "publish-backlog-wait-ms",
);
const publishBacklogPollMs = positiveNumberArg(
  args["publish-backlog-poll-ms"] ?? process.env.CLOWNFISH_PUBLISH_BACKLOG_POLL_MS ?? 30_000,
  "publish-backlog-poll-ms",
);
const skipPublishBacklogCheck = Boolean(args["skip-publish-backlog-check"]);
const skipTokenSecretCheck = Boolean(args["skip-token-secret-check"] ?? args.skip_token_secret_check);
const allowAppTokenAuth = Boolean(
  args["allow-app-token-auth"] ?? args.allow_app_token_auth ?? process.env.CLOWNFISH_ALLOW_APP_TOKEN_AUTH === "1",
);
const hydrationInputs = optionalDispatchInputs({
  hydrate_comments: optionalBooleanString(args["hydrate-comments"] ?? args.hydrate_comments, "hydrate-comments"),
  max_linked_refs: optionalNonNegativeIntegerString(args["max-linked-refs"] ?? args.max_linked_refs, "max-linked-refs"),
  max_comments_per_item: optionalNonNegativeIntegerString(
    args["max-comments-per-item"] ?? args.max_comments_per_item,
    "max-comments-per-item",
  ),
  max_review_comments_per_pr: optionalNonNegativeIntegerString(
    args["max-review-comments-per-pr"] ?? args.max_review_comments_per_pr,
    "max-review-comments-per-pr",
  ),
});
const dryRunInput = optionalBooleanString(args["dry-run"] ?? args.dry_run, "dry-run") ?? "0";
const dryRunBoolean = dryRunInput === "1";
const writeDispatchLedger = !Boolean(args["no-dispatch-ledger"] ?? args.no_dispatch_ledger);
const dispatchLedgerPath = path.resolve(
  repoRoot(),
  String(args["dispatch-ledger"] ?? args.dispatch_ledger ?? path.join(".projectclownfish", "dispatch-ledger.json")),
);
const ref = args.ref ? String(args.ref) : "";
const jobsFile = args["jobs-file"] ?? args.jobs_file ?? process.env.CLOWNFISH_JOBS_FILE;
const files = [...readJobsFile(jobsFile), ...args._];
const dispatchBatchId = `dispatch-${new Date().toISOString().replace(/[:.]/g, "-")}`;
const headSha = currentHeadSha();

if (files.length === 0) {
  console.error(
    "usage: node scripts/dispatch-jobs.mjs <job.md> [...] [--jobs-file path] [--mode plan|execute|autonomous] [--runner label] [--execution-runner label] [--model model] [--gh-bin ghx] [--max-live-workers 32] [--wait-for-capacity] [--batch-size N] [--batch-delay-ms N] [--dispatch-limit N] [--dispatch-concurrency N] [--dispatch-event workflow|repository-worker|repository-batch] [--batch-max-parallel N] [--publish-backlog-threshold 25] [--publish-backlog-wait-ms 600000] [--publish-backlog-poll-ms 30000] [--hydrate-comments 0|1] [--max-linked-refs N] [--dry-run 0|1] [--allow-app-token-auth] [--skip-token-secret-check]",
  );
  process.exit(2);
}
if (repositoryWorkerDispatch && !headSha) {
  console.error("repository-worker dispatch requires a resolved main ancestor SHA");
  process.exit(1);
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
if (repositoryBatchDispatch && writeMode) {
  console.error("refusing repository-batch dispatch for execute/autonomous mode; batch v1 is plan-only");
  process.exit(2);
}
if (repositoryBatchDispatch && dispatchBatchSize > 0) {
  console.error("--batch-size is for single workflow dispatch waves; use --batch-matrix-limit for repository-batch");
  process.exit(2);
}
if (repositoryWorkerDispatch && ref && ref !== "main") {
  console.error("repository-worker dispatch only supports --ref main because repository_dispatch runs the default-branch workflow");
  process.exit(2);
}
if (repositoryBatchDispatch && batchMaxParallel > BATCH_MAX_PARALLEL_CAP) {
  console.error(`--batch-max-parallel cannot exceed ${BATCH_MAX_PARALLEL_CAP}`);
  process.exit(2);
}
if (repositoryBatchDispatch && batchMaxParallel > maxLiveWorkers) {
  console.error("--batch-max-parallel cannot exceed --max-live-workers");
  process.exit(2);
}
if (writeMode && maxLiveWorkers > writeLiveWorkerCap && !allowHighVolumeWrite) {
  console.error(
    [
      `refusing ${mode} dispatch: max-live-workers=${maxLiveWorkers} exceeds write lane cap=${writeLiveWorkerCap}`,
      "plan/classification waves may run wide, but write/apply waves must stay small unless explicitly overridden",
      "use --allow-high-volume-write only after reviewing fresh canary artifacts and GitHub App rate-limit headroom",
    ].join("\n"),
  );
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
  if (repositoryBatchDispatch && job.frontmatter.mode !== "plan") {
    failed = true;
    console.error(
      `repository-batch only accepts job files with mode: plan; ${file} declares mode: ${job.frontmatter.mode}`,
    );
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
  const requested = repositoryBatchDispatch
    ? Math.ceil(jobsToDispatch.length / batchMatrixLimit) * batchMaxParallel
    : throttledDispatch
      ? Math.min(jobsToDispatch.length, 1)
      : jobsToDispatch.length;
  const capacityOptions = { repo, workflow: dispatchWorkflow, requested, maxLiveWorkers, ghCommand };
  const capacity = throttledDispatch ? waitForLiveWorkerCapacity(capacityOptions) : assertLiveWorkerCapacity(capacityOptions);
  if (repositoryBatchDispatch && capacity.active > 0) {
    throw new Error(
      `refusing repository-batch dispatch: ${capacity.active} active ${batchWorkflow} run(s) already occupy unknown matrix capacity; retry after they finish`,
    );
  }
  console.log(
    `live worker capacity: ${capacity.active}/${capacity.max_live_workers} active; dispatching ${jobsToDispatch.length} ${dispatchWorkflow} job(s)`,
  );
}

function assertPublishBacklog() {
  let result = readPublishBacklog();
  if (result.status === 0) {
    writePublishBacklogOutput(result);
    return;
  }
  if (!waitForCapacity || publishBacklogWaitMs === 0) {
    writePublishBacklogOutput(result);
    failed = true;
    return;
  }

  const startedAt = Date.now();
  const deadline = startedAt + publishBacklogWaitMs;
  const initial = publishBacklogSummary(result);
  console.log(
    `publish backlog ${initial?.missing_count ?? "unknown"} exceeds threshold ${publishBacklogThreshold}; waiting up to ${publishBacklogWaitMs}ms for publisher reconciliation`,
  );
  while (Date.now() < deadline) {
    sleepMs(Math.min(publishBacklogPollMs, deadline - Date.now()));
    result = readPublishBacklog();
    if (result.status === 0) {
      writePublishBacklogOutput(result);
      console.log(`publish backlog drained after ${Date.now() - startedAt}ms`);
      return;
    }
  }
  writePublishBacklogOutput(result);
  failed = true;
}

function readPublishBacklog() {
  return spawnSync(
    process.execPath,
    [
      path.join(repoRoot(), "scripts", "publish-backlog.mjs"),
      "--repo",
      repo,
      "--workflow",
      dispatchWorkflow,
      "--lookback",
      String(publishBacklogLookback),
      "--conclusion",
      "success",
      "--threshold",
      String(publishBacklogThreshold),
      "--gh-bin",
      ghCommand,
      "--json",
    ],
    { cwd: repoRoot(), encoding: "utf8", stdio: "pipe" },
  );
}

function publishBacklogSummary(result) {
  try {
    return JSON.parse(String(result.stdout ?? ""));
  } catch {
    return null;
  }
}

function writePublishBacklogOutput(result) {
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
}

let dispatched = 0;
let index = 0;
const dispatchAttempts = [];
if (!failed && repositoryBatchDispatch) {
  while (index < jobsToDispatch.length) {
    if (!skipPublishBacklogCheck) assertPublishBacklog();
    if (failed) break;

    const batch = jobsToDispatch.slice(index, index + batchMatrixLimit);
    const result = await dispatchRepositoryBatch(batch, index + 1);
    if (result.status === 0) {
      const acceptedAt = new Date().toISOString();
      for (let offset = 0; offset < batch.length; offset += 1) {
        dispatched += 1;
        dispatchAttempts.push(
          dispatchAttempt(
            {
              relative: batch[offset],
              position: index + offset + 1,
              batch_dispatch_id: result.batch_dispatch_id,
              stdout: result.stdout,
              stderr: result.stderr,
              dispatched_at: acceptedAt,
            },
            "accepted",
          ),
        );
      }
      console.log(
        `dispatched repository batch ${result.batch_dispatch_id} with ${batch.length} ${mode} job(s); max_parallel=${batchMaxParallel}`,
      );
    } else {
      failed = true;
      for (let offset = 0; offset < batch.length; offset += 1) {
        dispatchAttempts.push(
          dispatchAttempt(
            {
              relative: batch[offset],
              position: index + offset + 1,
              batch_dispatch_id: result.batch_dispatch_id,
              stdout: result.stdout,
              stderr: result.stderr,
            },
            "failed",
          ),
        );
      }
      console.error(result.stderr || result.stdout || `failed to dispatch repository batch ${result.batch_dispatch_id}`);
    }
    if (writeDispatchLedger && dispatchAttempts.length > 0) appendDispatchLedger(dispatchAttempts);
    index += batch.length;
  }
}
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
      ghCommand,
    });
    const refreshed = liveWorkerCapacity({ repo, workflow, requested: 1, maxLiveWorkers, ghCommand });
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
      dispatchAttempts.push(dispatchAttempt(result, "accepted"));
      console.log(
        `dispatched ${result.position}/${jobsToDispatch.length} ${result.relative} (${mode}) on ${runner}; execution on ${executionRunner}`,
      );
    } else {
      dispatchAttempts.push(dispatchAttempt(result, "failed"));
      failed = true;
      console.error(result.stderr || result.stdout || `failed to dispatch ${result.relative}`);
    }
  }
  if (writeDispatchLedger && dispatchAttempts.length > 0) appendDispatchLedger(dispatchAttempts);
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
  const variables = listRepoVariables(dispatchRepo);

  const hasReadSecret = secrets.has("CLOWNFISH_READ_GH_TOKEN") || secrets.has("CLOWNFISH_GH_TOKEN");
  const hasWriteSecret = secrets.has("CLOWNFISH_GH_TOKEN");
  const hasAppTokenAuth = appTokenAuthConfigured({ secrets, variables, purpose: writeMode ? "write/apply" : "read hydration" });
  if (!hasReadSecret && !hasAppTokenAuth) {
    failed = true;
    console.error(
      [
        `refusing dispatch: ${dispatchRepo} Actions cannot hydrate ${crossRepoTargets.join(", ")} without a readable GitHub token secret`,
        "missing CLOWNFISH_READ_GH_TOKEN or CLOWNFISH_GH_TOKEN",
        "use --allow-app-token-auth only after confirming the GitHub App installation can read the target repo",
        "use --skip-token-secret-check only for an intentionally read-only dry run or verified alternate token path",
      ].join("\n"),
    );
    return;
  }
  if (writeMode && !hasWriteSecret && !hasAppTokenAuth) {
    failed = true;
    console.error(
      [
        `refusing ${mode} dispatch: ${dispatchRepo} Actions need CLOWNFISH_GH_TOKEN for write/apply steps`,
        "use --skip-token-secret-check only for an intentionally read-only dry run or a verified alternate write token",
      ].join("\n"),
    );
  }
}

function appTokenAuthConfigured({ secrets, variables, purpose }) {
  if (!allowAppTokenAuth) return false;
  const hasAppSecret = secrets.has("CLOWNFISH_APP_PRIVATE_KEY");
  const hasAppId = variables?.has("CLOWNFISH_APP_ID") || Boolean(process.env.CLOWNFISH_APP_ID);
  if (hasAppSecret && hasAppId) {
    console.warn(
      [
        `warning: accepting GitHub App token auth for ${purpose} because --allow-app-token-auth was set`,
        "ensure the App installation has the needed target-repo permissions before broad dispatch",
      ].join("\n"),
    );
    return true;
  }
  console.warn(
    [
      "warning: --allow-app-token-auth set but App credentials are incomplete",
      `CLOWNFISH_APP_PRIVATE_KEY secret=${hasAppSecret ? "yes" : "no"}`,
      `CLOWNFISH_APP_ID variable/env=${hasAppId ? "yes" : "no"}`,
    ].join("\n"),
  );
  return false;
}

function listRepoSecrets(dispatchRepo) {
  const result = spawnSync(ghCommand, ["secret", "list", "--repo", dispatchRepo, "--json", "name"], {
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

function listRepoVariables(dispatchRepo) {
  const result = spawnSync(ghCommand, ["variable", "list", "--repo", dispatchRepo, "--json", "name"], {
    cwd: repoRoot(),
    encoding: "utf8",
    stdio: "pipe",
  });
  if (result.status !== 0) {
    console.warn(
      `warning: could not inspect repo variables for ${dispatchRepo}; App-token preflight may be incomplete\n${result.stderr || result.stdout}`,
    );
    return null;
  }
  try {
    return new Set(JSON.parse(stripAnsi(result.stdout)).map((variable) => variable.name));
  } catch (error) {
    console.warn(`warning: could not parse repo variables for ${dispatchRepo}: ${error.message}`);
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
  if (repositoryWorkerDispatch) return dispatchRepositoryWorker(relative, position);
  return runCommand(
    ghCommand,
    workflowDispatchArgs(relative),
    relative,
    position,
  );
}

function dispatchRepositoryWorker(relative, position) {
  const workerDispatchId = `${dispatchBatchId}-${String(position).padStart(4, "0")}`;
  const payload = {
    event_type: workerEventType,
    client_payload: {
      dispatch_id: workerDispatchId,
      job: relative,
      mode,
      runner,
      execution_runner: executionRunner,
      model,
      dry_run: dryRunBoolean,
      ref: ref || "main",
      required_ancestor_sha: headSha,
      hydration: {
        hydrate_comments: hydrationInputs.hydrate_comments ?? "",
        max_linked_refs: hydrationInputs.max_linked_refs ?? "",
        max_comments_per_item: hydrationInputs.max_comments_per_item ?? "",
        max_review_comments_per_pr: hydrationInputs.max_review_comments_per_pr ?? "",
      },
    },
  };
  return runCommand(
    ghCommand,
    ["api", "--method", "POST", `repos/${repo}/dispatches`, "--input", "-"],
    relative,
    position,
    `${JSON.stringify(payload)}\n`,
    workerDispatchId,
  ).then((result) => {
    if (!isRepositoryDispatchSchemaBug(result)) return result;

    console.warn(
      `repository_dispatch returned the known GitHub 422 schema error for ${relative}; retrying via workflow_dispatch`,
    );
    return runCommand(
      ghCommand,
      workflowDispatchArgs(relative, workerDispatchId),
      relative,
      position,
      null,
      workerDispatchId,
    ).then((fallback) => ({
      ...fallback,
      dispatch_event: "workflow",
      dispatch_fallback_reason: "repository_dispatch_422_links_schema",
    }));
  });
}

function workflowDispatchArgs(relative, dispatchId = null) {
  return [
    "workflow",
    "run",
    workflow,
    "--repo",
    repo,
    "--ref",
    ref || "main",
    ...(dispatchId ? ["-f", `dispatch_id=${dispatchId}`] : []),
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
    "-f",
    `dry_run=${dryRunBoolean ? "true" : "false"}`,
    ...Object.entries(hydrationInputs).flatMap(([name, value]) => ["-f", `${name}=${value}`]),
  ];
}

function isRepositoryDispatchSchemaBug(result) {
  if (result.status === 0) return false;
  const output = `${result.stderr ?? ""}\n${result.stdout ?? ""}`;
  return /HTTP 422/i.test(output) && /links\/0\/schema/i.test(output);
}

function dispatchRepositoryBatch(batch, position) {
  const batchDispatchId = `${dispatchBatchId}-${String(position).padStart(4, "0")}`;
  const payload = {
    event_type: batchEventType,
    client_payload: {
      batch_id: batchDispatchId,
      jobs: batch,
      mode,
      runner,
      execution_runner: executionRunner,
      model,
      max_parallel: batchMaxParallel,
      ref: ref || "main",
      head_sha: headSha,
      hydration: {
        hydrate_comments: hydrationInputs.hydrate_comments ?? "0",
        max_linked_refs: hydrationInputs.max_linked_refs ?? "0",
        max_comments_per_item: hydrationInputs.max_comments_per_item ?? "0",
        max_review_comments_per_pr: hydrationInputs.max_review_comments_per_pr ?? "0",
      },
    },
  };
  return runCommand(
    ghCommand,
    ["api", "--method", "POST", `repos/${repo}/dispatches`, "--input", "-"],
    "__repository_batch__",
    position,
    `${JSON.stringify(payload)}\n`,
    batchDispatchId,
  ).then((result) => {
    if (!isRepositoryDispatchSchemaBug(result)) return result;

    console.warn(
      `repository_dispatch returned the known GitHub 422 schema error for batch ${batchDispatchId}; retrying via workflow_dispatch`,
    );
    return runCommand(
      ghCommand,
      batchWorkflowDispatchArgs(batch),
      "__repository_batch__",
      position,
      null,
      batchDispatchId,
    ).then((fallback) => ({
      ...fallback,
      dispatch_event: "workflow",
      dispatch_fallback_reason: "repository_dispatch_422_links_schema",
    }));
  });
}

function batchWorkflowDispatchArgs(batch) {
  return [
    "workflow",
    "run",
    batchWorkflow,
    "--repo",
    repo,
    "--ref",
    ref || "main",
    "-f",
    `jobs_json=${JSON.stringify(batch)}`,
    "-f",
    `mode=${mode}`,
    "-f",
    `runner=${runner}`,
    "-f",
    `execution_runner=${executionRunner}`,
    "-f",
    `model=${model}`,
    "-f",
    `max_parallel=${batchMaxParallel}`,
    ...Object.entries(hydrationInputs).flatMap(([name, value]) => ["-f", `${name}=${value}`]),
  ];
}

function runCommand(command, commandArgs, relative, position, stdin = null, batchDispatchId = null) {
  return new Promise((resolve) => {
    const child = spawn(command, commandArgs, { cwd: repoRoot(), stdio: ["pipe", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", (error) => {
      resolve({ relative, position, status: 1, stdout, stderr: `${stderr}${error.message}`, batch_dispatch_id: batchDispatchId });
    });
    child.on("close", (status) => {
      resolve({ relative, position, status: status ?? 1, stdout, stderr, batch_dispatch_id: batchDispatchId });
    });
    if (stdin !== null) child.stdin.end(stdin);
    else child.stdin.end();
  });
}

function dispatchAttempt(result, status) {
  return {
    batch_id: dispatchBatchId,
    status,
    repo,
    workflow: repositoryBatchDispatch ? batchWorkflow : workflow,
    source_job: result.relative,
    mode,
    runner,
    execution_runner: executionRunner,
    model,
    ref: ref || null,
    head_sha: headSha,
    required_ancestor_sha: repositoryWorkerDispatch ? headSha : null,
    position: result.position,
    dispatched_at: result.dispatched_at ?? new Date().toISOString(),
    batch_dispatch_id: result.batch_dispatch_id ?? null,
    dispatch_event: result.dispatch_event ?? dispatchEvent,
    dispatch_fallback_reason: result.dispatch_fallback_reason ?? null,
    error: status === "failed" ? stripAnsi(result.stderr || result.stdout || "") : null,
  };
}

function appendDispatchLedger(attempts) {
  const ledger = readDispatchLedger();
  const existingKeys = new Set(
    (ledger.attempts ?? []).map((attempt) => `${attempt.batch_id}:${attempt.source_job}:${attempt.position}`),
  );
  const nextAttempts = attempts.filter(
    (attempt) => !existingKeys.has(`${attempt.batch_id}:${attempt.source_job}:${attempt.position}`),
  );
  if (nextAttempts.length === 0) return;
  ledger.updated_at = new Date().toISOString();
  ledger.attempts = [...(ledger.attempts ?? []), ...nextAttempts];
  fs.mkdirSync(path.dirname(dispatchLedgerPath), { recursive: true });
  fs.writeFileSync(dispatchLedgerPath, `${JSON.stringify(ledger, null, 2)}\n`, "utf8");
}

function readDispatchLedger() {
  if (!fs.existsSync(dispatchLedgerPath)) return { updated_at: null, attempts: [] };
  try {
    return JSON.parse(fs.readFileSync(dispatchLedgerPath, "utf8"));
  } catch {
    return { updated_at: null, attempts: [] };
  }
}

function currentHeadSha() {
  if (!isMainRef(ref)) return gitRevision(ref);

  try {
    execFileSync("git", ["fetch", "origin", "main", "--depth=1"], {
      cwd: repoRoot(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return "";
  }
  return gitRevision("FETCH_HEAD");
}

function isMainRef(value) {
  return !value || value === "main" || value === "origin/main" || value === "refs/heads/main";
}

function gitRevision(revision) {
  try {
    return execFileSync("git", ["rev-parse", revision], {
      cwd: repoRoot(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
  }
}

function stripAnsi(text) {
  return text.replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function sleepMs(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

if (failed) process.exit(1);

function firstAvailableCommand(commands) {
  for (const command of commands) {
    const result = spawnSync(command, ["--version"], { cwd: repoRoot(), stdio: "ignore" });
    if (result.status === 0) return command;
  }
  return commands.at(-1);
}

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

function positiveNumberArg(value, name) {
  const number = Number(value);
  if (!Number.isInteger(number) || number < 1) {
    console.error(`--${name} must be a positive integer`);
    process.exit(2);
  }
  return number;
}

function truthyFlag(value) {
  return value === true || ["1", "true", "yes"].includes(String(value ?? "").trim().toLowerCase());
}

function effectiveCapacityArgs(rawArgs) {
  if (!writeMode) return rawArgs;
  const explicitMaxLiveWorkers =
    rawArgs["max-live-workers"] !== undefined ||
    rawArgs.max_live_workers !== undefined ||
    process.env.CLOWNFISH_MAX_LIVE_WORKERS !== undefined;
  if (explicitMaxLiveWorkers) return rawArgs;
  return {
    ...rawArgs,
    "max-live-workers": process.env.CLOWNFISH_MAX_LIVE_WRITE_WORKERS ?? String(writeLiveWorkerCap),
  };
}

function optionalBooleanString(value, name) {
  if (value === undefined || value === null || value === "") return null;
  const normalized = String(value).trim().toLowerCase();
  if (["1", "true", "yes"].includes(normalized)) return "1";
  if (["0", "false", "no"].includes(normalized)) return "0";
  console.error(`--${name} must be 0 or 1`);
  process.exit(2);
}

function optionalNonNegativeIntegerString(value, name) {
  if (value === undefined || value === null || value === "") return null;
  return String(numberArg(value, name));
}

function optionalDispatchInputs(inputs) {
  return Object.fromEntries(Object.entries(inputs).filter(([, value]) => value !== null));
}
