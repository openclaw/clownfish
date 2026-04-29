#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
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
import { parseCommand, renderResponse } from "./comment-router-core.mjs";

const DEFAULT_TARGET_REPO = "openclaw/openclaw";
const DEFAULT_HEAD_PREFIX = "clownfish/";
const DEFAULT_LABEL = "clownfish";
const DEFAULT_ALLOWED_ASSOCIATIONS = ["OWNER", "MEMBER", "COLLABORATOR"];
const REPAIR_INTENTS = new Set(["fix_ci", "address_review", "rebase"]);

const args = parseArgs(process.argv.slice(2));
const targetRepo = String(args.repo ?? process.env.CLOWNFISH_TARGET_REPO ?? DEFAULT_TARGET_REPO);
const clownfishRepo = String(args["clownfish-repo"] ?? process.env.CLOWNFISH_REPO ?? currentProjectRepo());
const workflow = String(args.workflow ?? process.env.CLOWNFISH_COMMENT_WORKFLOW ?? "cluster-worker.yml");
const runner = String(args.runner ?? process.env.CLOWNFISH_WORKER_RUNNER ?? "blacksmith-4vcpu-ubuntu-2404");
const executionRunner = String(
  args["execution-runner"] ?? args.execution_runner ?? process.env.CLOWNFISH_EXECUTION_RUNNER ?? "blacksmith-16vcpu-ubuntu-2404",
);
const model = String(args.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.5");
const headPrefix = String(args["head-prefix"] ?? process.env.CLOWNFISH_HEAD_PREFIX ?? DEFAULT_HEAD_PREFIX);
const label = String(args.label ?? process.env.CLOWNFISH_LABEL ?? DEFAULT_LABEL);
const execute = Boolean(args.execute);
const writeReport = Boolean(args["write-report"] || execute);
const waitForCapacity = Boolean(args["wait-for-capacity"]);
const maxLiveWorkers = readMaxLiveWorkers(args);
const maxComments = positiveInteger(args["max-comments"] ?? process.env.CLOWNFISH_COMMENT_MAX_COMMENTS ?? 100, "max-comments");
const lookbackMinutes = positiveInteger(
  args["lookback-minutes"] ?? process.env.CLOWNFISH_COMMENT_LOOKBACK_MINUTES ?? 180,
  "lookback-minutes",
);
const since = String(args.since ?? new Date(Date.now() - lookbackMinutes * 60 * 1000).toISOString());
const allowedAssociations = new Set(
  String(process.env.CLOWNFISH_COMMENT_ALLOWED_ASSOCIATIONS ?? DEFAULT_ALLOWED_ASSOCIATIONS.join(","))
    .split(",")
    .map((value) => value.trim().toUpperCase())
    .filter(Boolean),
);

assertRepo(targetRepo, "repo");
assertRepo(clownfishRepo, "clownfish-repo");

const ledger = readLedger();
const processedCommentIds = new Set((ledger.commands ?? []).map((entry) => String(entry.comment_id)));
const comments = listRecentComments().slice(0, maxComments);
const commands = [];

for (const comment of comments) {
  const parsed = parseCommand(comment.body);
  if (!parsed) continue;
  const issueNumber = issueNumberFromUrl(comment.issue_url);
  const command = {
    idempotency_key: `comment-router:${targetRepo}:${comment.id}:${parsed.intent}`,
    comment_id: String(comment.id),
    comment_url: comment.html_url,
    repo: targetRepo,
    issue_number: issueNumber,
    author: comment.user?.login ?? null,
    author_association: String(comment.author_association ?? "").toUpperCase(),
    created_at: comment.created_at,
    updated_at: comment.updated_at,
    trigger: parsed.trigger,
    command: parsed.command,
    intent: parsed.intent,
    status: "pending",
    actions: [],
  };
  commands.push(classifyCommand(command));
}

const actionable = commands.filter((command) => command.status === "ready");
const report = {
  status: execute ? "executed" : "dry_run",
  generated_at: new Date().toISOString(),
  repo: targetRepo,
  clownfish_repo: clownfishRepo,
  since,
  execute,
  max_comments: maxComments,
  scanned_comments: comments.length,
  commands_seen: commands.length,
  actionable: actionable.length,
  commands,
};

if (execute) {
  const dispatchCount = actionable.filter((command) => REPAIR_INTENTS.has(command.intent)).length;
  if (dispatchCount > 0) {
    report.live_worker_capacity_before_dispatch = waitForCapacity
      ? waitForLiveWorkerCapacity({ repo: clownfishRepo, workflow, requested: dispatchCount, maxLiveWorkers })
      : assertLiveWorkerCapacity({ repo: clownfishRepo, workflow, requested: dispatchCount, maxLiveWorkers });
  }
  for (const command of actionable) executeCommand(command);
  appendLedger(ledger, commands);
  writeLedger(ledger);
}

if (writeReport) writeReportFile(report);
console.log(JSON.stringify(report, null, 2));

function classifyCommand(command) {
  if (!allowedAssociations.has(command.author_association)) {
    return {
      ...command,
      status: "ignored",
      reason: `author association ${command.author_association || "unknown"} is not allowed`,
    };
  }
  if (!command.issue_number) {
    return { ...command, status: "ignored", reason: "could not resolve issue or PR number" };
  }
  if (processedCommentIds.has(command.comment_id)) {
    return { ...command, status: "skipped", reason: "comment already processed in ledger" };
  }
  if (hasExistingResponse(command.issue_number, command.comment_id)) {
    return { ...command, status: "skipped", reason: "matching Clownfish response comment already exists" };
  }

  const issue = fetchIssue(command.issue_number);
  const pull = issue.pull_request ? fetchPullRequestView(command.issue_number) : null;
  const target = pull ? classifyPullTarget(pull) : classifyIssueTarget(issue);
  const next = { ...command, target };

  if (["status", "explain", "help"].includes(command.intent)) {
    return { ...next, status: "ready", actions: [{ action: "comment", status: execute ? "pending" : "planned" }] };
  }
  if (command.intent === "stop") {
    return {
      ...next,
      status: "ready",
      actions: [
        { action: "label", label: "clownfish:human-review", status: execute ? "pending" : "planned" },
        { action: "comment", status: execute ? "pending" : "planned" },
      ],
    };
  }
  if (!REPAIR_INTENTS.has(command.intent)) {
    return { ...next, status: "ready", actions: [{ action: "comment", status: execute ? "pending" : "planned" }] };
  }
  if (!pull) {
    return {
      ...next,
      status: "ready",
      actions: [{ action: "comment", status: execute ? "pending" : "planned" }],
      reason: "repair commands currently require an existing Clownfish PR",
    };
  }
  if (!target.is_clownfish_pr) {
    return {
      ...next,
      status: "ready",
      actions: [{ action: "comment", status: execute ? "pending" : "planned" }],
      reason: "repair commands only run on Clownfish PRs",
    };
  }
  if (!target.job_path) {
    return {
      ...next,
      status: "ready",
      actions: [{ action: "comment", status: execute ? "pending" : "planned" }],
      reason: "could not find the Clownfish job for this PR branch",
    };
  }

  return {
    ...next,
    status: "ready",
    actions: [
      { action: "dispatch_repair", workflow, job_path: target.job_path, mode: target.mode, status: execute ? "pending" : "planned" },
      { action: "comment", status: execute ? "pending" : "planned" },
    ],
  };
}

function executeCommand(command) {
  let dispatched = null;
  if (REPAIR_INTENTS.has(command.intent) && command.target?.job_path && command.target?.is_clownfish_pr) {
    dispatched = dispatchRepair(command);
    command.actions = command.actions.map((action) =>
      action.action === "dispatch_repair" ? { ...action, status: "executed", dispatched_at: new Date().toISOString() } : action,
    );
  }
  if (command.intent === "stop" && command.issue_number) {
    ensureHumanReviewLabel(command.repo);
    ghBestEffort(["issue", "edit", String(command.issue_number), "--repo", command.repo, "--add-label", "clownfish:human-review"]);
    command.actions = command.actions.map((action) =>
      action.action === "label" ? { ...action, status: "executed", label: "clownfish:human-review" } : action,
    );
  }

  postComment(command, renderResponse(command, dispatched));
  command.actions = command.actions.map((action) =>
    action.action === "comment" ? { ...action, status: "executed", commented_at: new Date().toISOString() } : action,
  );
  command.status = "executed";
}

function dispatchRepair(command) {
  const result = spawnSync(
    "gh",
    [
      "workflow",
      "run",
      workflow,
      "--repo",
      clownfishRepo,
      "-f",
      `job=${command.target.job_path}`,
      "-f",
      `mode=${command.target.mode}`,
      "-f",
      `runner=${runner}`,
      "-f",
      `execution_runner=${executionRunner}`,
      "-f",
      `model=${model}`,
    ],
    { cwd: repoRoot(), encoding: "utf8", env: ghEnv(), stdio: "pipe" },
  );
  if (result.status !== 0) {
    throw new Error(`failed to dispatch ${command.target.job_path}: ${result.stderr || result.stdout}`);
  }
  return {
    workflow,
    clownfish_repo: clownfishRepo,
    job_path: command.target.job_path,
    mode: command.target.mode,
    runner,
    execution_runner: executionRunner,
    model,
  };
}

function classifyIssueTarget(issue) {
  return {
    kind: "issue",
    state: issue.state ?? null,
    title: issue.title ?? null,
    labels: (issue.labels ?? []).map((item) => item.name ?? item),
  };
}

function classifyPullTarget(pull) {
  const branch = String(pull.headRefName ?? "");
  const labels = (pull.labels ?? []).map((item) => item.name ?? item);
  const clusterId = branch.startsWith(headPrefix) ? branch.slice(headPrefix.length) : null;
  const jobPath = clusterId ? existingJobPath(clusterId) : null;
  return {
    kind: "pull_request",
    title: pull.title ?? null,
    branch,
    head_sha: pull.headRefOid ?? null,
    labels,
    is_clownfish_pr: branch.startsWith(headPrefix) || labels.includes(label),
    cluster_id: clusterId,
    job_path: jobPath,
    mode: jobPath ? dispatchMode(jobPath) : "autonomous",
    merge_state_status: pull.mergeStateStatus ?? null,
    review_decision: pull.reviewDecision ?? null,
    checks: summarizeChecks(pull.statusCheckRollup ?? []),
  };
}

function dispatchMode(jobPath) {
  const job = parseJob(jobPath);
  const errors = validateJob(job);
  if (errors.length > 0) throw new Error(`invalid job ${jobPath}: ${errors.join("; ")}`);
  return ["execute", "autonomous"].includes(String(job.frontmatter.mode ?? "")) ? job.frontmatter.mode : "autonomous";
}

function existingJobPath(clusterId) {
  for (const relative of [
    path.join("jobs", "openclaw", "inbox", `${clusterId}.md`),
    path.join("jobs", "openclaw", `${clusterId}.md`),
    path.join("jobs", "openclaw", "outbox", "finalized", `${clusterId}.md`),
    path.join("jobs", "openclaw", "outbox", "stuck", `${clusterId}.md`),
  ]) {
    if (fs.existsSync(path.join(repoRoot(), relative))) return relative;
  }
  return null;
}

function summarizeChecks(checks) {
  const counts = {};
  const blockers = [];
  for (const check of checks) {
    const name = String(check.name ?? check.context ?? "unknown check");
    const status = String(check.status ?? check.state ?? "").toUpperCase();
    const conclusion = String(check.conclusion ?? "").toUpperCase();
    const key = conclusion || status || "UNKNOWN";
    counts[key] = (counts[key] ?? 0) + 1;
    if (status && !["COMPLETED", "SUCCESS"].includes(status)) blockers.push(`${name}:${status}`);
    if (conclusion && !["SUCCESS", "SKIPPED", "NEUTRAL"].includes(conclusion)) blockers.push(`${name}:${conclusion}`);
  }
  return { total: checks.length, counts, blockers };
}

function listRecentComments() {
  const list = ghPaged(`repos/${targetRepo}/issues/comments?since=${encodeURIComponent(since)}&per_page=100`);
  return list.sort((left, right) => Date.parse(right.created_at ?? "") - Date.parse(left.created_at ?? ""));
}

function fetchIssue(number) {
  return ghJson(["api", `repos/${targetRepo}/issues/${number}`]);
}

function fetchPullRequestView(number) {
  return ghJson([
    "pr",
    "view",
    String(number),
    "--repo",
    targetRepo,
    "--json",
    [
      "headRefName",
      "headRefOid",
      "labels",
      "mergeStateStatus",
      "reviewDecision",
      "statusCheckRollup",
      "title",
    ].join(","),
  ]);
}

function hasExistingResponse(number, commentId) {
  const marker = `<!-- clownfish-command:${commentId}:`;
  return ghPaged(`repos/${targetRepo}/issues/${number}/comments?per_page=100`).some((comment) => String(comment.body ?? "").includes(marker));
}

function postComment(command, body) {
  const payloadPath = writePayload(`comment-router-${command.comment_id}`, { body });
  ghText(["api", `repos/${command.repo}/issues/${command.issue_number}/comments`, "--method", "POST", "--input", payloadPath]);
}

function ensureHumanReviewLabel(repo) {
  ghBestEffort([
    "label",
    "create",
    "clownfish:human-review",
    "--repo",
    repo,
    "--color",
    "B60205",
    "--description",
    "Needs maintainer review before Clownfish can continue",
  ]);
}

function readLedger() {
  const file = ledgerPath();
  if (!fs.existsSync(file)) return { updated_at: null, commands: [] };
  try {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    return { updated_at: data.updated_at ?? null, commands: Array.isArray(data.commands) ? data.commands : [] };
  } catch {
    return { updated_at: null, commands: [] };
  }
}

function appendLedger(current, entries) {
  const compact = entries
    .filter((entry) => ["executed", "skipped"].includes(entry.status))
    .map((entry) => ({
      idempotency_key: entry.idempotency_key,
      comment_id: entry.comment_id,
      comment_url: entry.comment_url,
      repo: entry.repo,
      issue_number: entry.issue_number,
      author: entry.author,
      author_association: entry.author_association,
      trigger: entry.trigger,
      command: entry.command,
      intent: entry.intent,
      status: entry.status,
      processed_at: new Date().toISOString(),
      target: entry.target
        ? {
            kind: entry.target.kind,
            branch: entry.target.branch,
            head_sha: entry.target.head_sha,
            cluster_id: entry.target.cluster_id,
            job_path: entry.target.job_path,
          }
        : null,
    }));
  const byComment = new Map((current.commands ?? []).map((entry) => [String(entry.comment_id), entry]));
  for (const entry of compact) byComment.set(String(entry.comment_id), entry);
  current.updated_at = new Date().toISOString();
  current.commands = [...byComment.values()].slice(-1000);
}

function writeLedger(current) {
  const file = ledgerPath();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(current, null, 2)}\n`);
}

function ledgerPath() {
  return path.join(repoRoot(), "results", "comment-router.json");
}

function writeReportFile(data) {
  const file = path.join(repoRoot(), "results", "comment-router-latest.json");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

function writePayload(name, payload) {
  const dir = path.join(repoRoot(), ".projectclownfish", "payloads");
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${safeName(name)}.json`);
  fs.writeFileSync(file, `${JSON.stringify(payload)}\n`);
  return file;
}

function issueNumberFromUrl(value) {
  const match = String(value ?? "").match(/\/issues\/(\d+)$/);
  return match ? Number(match[1]) : 0;
}

function ghJson(ghArgs) {
  return JSON.parse(ghText(ghArgs) || "null");
}

function ghPaged(apiPath) {
  const pages = ghJson(["api", apiPath, "--paginate", "--slurp"]);
  if (!Array.isArray(pages)) return [];
  return pages.flatMap((page) => (Array.isArray(page) ? page : []));
}

function ghText(ghArgs) {
  const text = execFileSync("gh", ghArgs, {
    cwd: repoRoot(),
    env: ghEnv(),
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
  });
  return stripAnsi(text).trim();
}

function ghBestEffort(ghArgs) {
  try {
    ghText(ghArgs);
  } catch {
    // Visibility labels are helpful but should not block command acknowledgement.
  }
}

function ghEnv() {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  return env;
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function safeName(value) {
  return String(value).replace(/[^A-Za-z0-9_.-]+/g, "-").slice(0, 120);
}

function positiveInteger(value, name) {
  const number = Number(value);
  if (!Number.isInteger(number) || number < 1) throw new Error(`${name} must be a positive integer`);
  return number;
}

function assertRepo(value, name) {
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(value)) throw new Error(`${name} must be owner/repo`);
}
