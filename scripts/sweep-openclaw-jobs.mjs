#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  hasDeterministicSecuritySignal,
  hasSecuritySignalText,
  parseArgs,
  parseJob,
  repoRoot,
  validateJob,
} from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const jobsDir = path.resolve(String(args.jobs ?? path.join(repoRoot(), "jobs", "openclaw", "inbox")));
const outboxDir = path.resolve(String(args.outbox ?? path.join(repoRoot(), "jobs", "openclaw", "outbox", "finalized")));
const stuckDir = path.resolve(String(args.stuck ?? path.join(repoRoot(), "jobs", "openclaw", "outbox", "stuck")));
const reportPath = path.resolve(String(args.report ?? path.join(repoRoot(), "results", "openclaw-job-sweep.json")));
const runRecordsDir = path.resolve(String(args["run-records"] ?? path.join(repoRoot(), "results", "runs")));
const live = Boolean(args.live);
const verifyTargetRefsLive = Boolean(args["verify-target-refs-live"] || args["live-target-refs"]);
const applyDeleteTests = Boolean(args["apply-delete-tests"]);
const applyOutbox = Boolean(args["apply-outbox"]);
const applyStuck = Boolean(args["apply-stuck"]);
const dryRun = !applyDeleteTests && !applyOutbox && !applyStuck;

const records = readRunRecords();
const latestByCluster = latestClusterRecords(records);
const openPrClusters = live ? readOpenClownfishPrClusters() : new Map();
const activeRuns = live ? readActiveClusterRuns() : [];
const jobFiles = activeJobFiles(jobsDir);
const liveTargetRefs = verifyTargetRefsLive ? readLiveTargetRefs(jobFiles) : new Map();
const liveFixPrClusters = live ? readLiveFixPrClusters([...latestByCluster.values()]) : new Map();
const rows = [];

for (const jobPath of jobFiles) {
  rows.push(classifyJob(jobPath));
}

const byStatus = countBy(rows, (row) => row.status);
const report = {
  status: dryRun ? "dry_run" : "applied",
  generated_at: new Date().toISOString(),
  live,
  verify_target_refs_live: verifyTargetRefsLive,
  jobs_dir: path.relative(repoRoot(), jobsDir),
  outbox_dir: path.relative(repoRoot(), outboxDir),
  stuck_dir: path.relative(repoRoot(), stuckDir),
  active_cluster_runs: activeRuns,
  totals: {
    jobs: rows.length,
    ...byStatus,
  },
  delete_test_jobs: rows.filter((row) => row.status === "delete_test_job").map(publicRow),
  outbox_jobs: rows.filter((row) => row.status === "move_to_outbox").map(publicRow),
  stuck_jobs: rows.filter((row) => row.status === "move_to_stuck").map(publicRow),
  requeue_candidates: rows.filter((row) => row.status === "requeue_candidate").map(publicRow),
  active_jobs: rows.filter((row) => row.status === "active").map(publicRow),
  security_hold_jobs: rows.filter((row) => row.status === "security_hold").map(publicRow),
  keep_jobs: rows.filter((row) => row.status === "keep").map(publicRow),
  invalid_jobs: rows.filter((row) => row.status === "invalid").map(publicRow),
};

if (applyDeleteTests || applyOutbox || applyStuck) applyActions(rows);

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
writeMarkdownReport(report, reportPath.replace(/\.json$/i, ".md"));
console.log(JSON.stringify(report, null, 2));

function activeJobFiles(root) {
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => path.join(root, entry.name))
    .sort();
}

function classifyJob(jobPath) {
  let job;
  try {
    job = parseJob(jobPath);
  } catch (error) {
    return baseRow(jobPath, null, "invalid", error.message);
  }
  const errors = validateJob(job);
  if (errors.length > 0) {
    return baseRow(jobPath, job.frontmatter.cluster_id, "invalid", errors.join("; "));
  }

  const clusterId = String(job.frontmatter.cluster_id);
  const latest = latestByCluster.get(clusterId);
  const openPrs = openPrClusters.get(clusterId) ?? [];
  const liveFixPrs = liveFixPrClusters.get(clusterId) ?? [];
  const row = baseRow(jobPath, clusterId, "keep", "job is still eligible for normal dispatch");
  row.mode = job.frontmatter.mode;
  row.latest_run_id = latest?.run_id ?? null;
  row.latest_workflow_conclusion = latest?.workflow_conclusion ?? null;
  row.latest_result_status = latest?.result_status ?? null;
  row.open_prs = openPrs;
  if (liveFixPrs.length > 0) row.live_fix_prs = liveFixPrs;
  addLiveTargetRefSummary(row, job);

  if (isExampleJob(job)) {
    return { ...row, status: "keep", reason: "example job is referenced by local run docs" };
  }
  if (job.frontmatter.security_sensitive === true || hasSecuritySignalText(job.raw)) {
    return { ...row, status: "security_hold", reason: "security-sensitive job stays out of automation cleanup" };
  }
  if (hasOpenSecuritySensitiveLiveTarget(row)) {
    return { ...row, status: "security_hold", reason: "live target refs include security-sensitive open issue/PR" };
  }
  if (openPrs.length > 0) {
    return { ...row, status: "active", reason: "open clownfish PR exists for this cluster" };
  }
  if (latest && latestOpenedFixPrsAreMerged(latest, liveFixPrs)) {
    return { ...row, status: "move_to_outbox", reason: "opened Clownfish fix PR is merged in live GitHub state" };
  }
  if (verifyTargetRefsLive && row.live_target_refs_total > 0 && row.live_target_refs_missing === 0) {
    if (row.live_target_refs_open === 0) {
      return { ...row, status: "move_to_outbox", reason: "all target issue/PR refs are closed in live GitHub state" };
    }
  }
  if (isTestJob(job) && latest) {
    return { ...row, status: "delete_test_job", reason: "old smoke/test job has a published result and no open clownfish PR" };
  }
  if (!latest) {
    return { ...row, status: "move_to_stuck", reason: "no published run record found" };
  }
  if (needsRequeue(latest)) {
    return { ...row, status: "requeue_candidate", reason: requeueReason(latest) };
  }
  if (verifyTargetRefsLive && row.live_target_refs_total > 0 && row.live_target_refs_missing === 0 && row.live_target_refs_open > 0) {
    return { ...row, status: "keep", reason: "one or more target issue/PR refs remain open in live GitHub state" };
  }
  if (isFinalized(latest)) {
    return { ...row, status: "move_to_outbox", reason: "latest run is clean and no open clownfish PR remains" };
  }
  return row;
}

function baseRow(jobPath, clusterId, status, reason) {
  return {
    job: path.relative(repoRoot(), jobPath),
    cluster_id: clusterId,
    status,
    reason,
  };
}

function isTestJob(job) {
  const name = path.basename(job.path);
  return name.includes("autonomous-smoke");
}

function isExampleJob(job) {
  const name = path.basename(job.path);
  return name === "cluster-example.md" || name === "autonomous-example.md";
}

function addLiveTargetRefSummary(row, job) {
  if (!verifyTargetRefsLive) return;
  const refs = targetRefNumbers(job);
  const records = refs.map(
    (number) =>
      liveTargetRefs.get(liveRefKey(job.frontmatter.repo, number)) ?? {
        repo: job.frontmatter.repo,
        number,
        status: "missing",
        reason: "not present in live ref report",
      },
  );
  const found = records.filter((record) => record.status === "found");
  const missing = records.filter((record) => record.status !== "found");
  row.live_target_refs_total = refs.length;
  row.live_target_refs_found = found.length;
  row.live_target_refs_missing = missing.length;
  row.live_target_refs_open = found.filter((record) => record.state === "open").length;
  row.live_target_refs_closed = found.filter((record) => record.state !== "open").length;
  row.live_target_refs = found.map((record) => ({
    ref: `#${record.number}`,
    kind: record.kind,
    state: record.state,
    merged: record.merged ?? undefined,
    title: record.title,
    url: record.url,
    labels: record.labels?.length > 0 ? record.labels : undefined,
    security_sensitive: record.security_sensitive === true ? true : undefined,
  }));
  if (missing.length > 0) {
    row.live_target_ref_errors = missing.map((record) => ({
      ref: `#${record.number}`,
      status: record.status,
      reason: record.reason ?? "not found",
    }));
  }
}

function hasOpenSecuritySensitiveLiveTarget(row) {
  return (row.live_target_refs ?? []).some(
    (record) => record.state === "open" && record.security_sensitive === true,
  );
}

function targetRefNumbers(job) {
  const refs = [
    ...(job.frontmatter.canonical ?? []),
    ...(job.frontmatter.candidates ?? []),
    ...(job.frontmatter.cluster_refs ?? []),
    ...(job.frontmatter.maintainer_close_refs ?? []),
  ];
  return [...new Set(refs.map(refNumber).filter((number) => number !== null))].sort((left, right) => left - right);
}

function refNumber(ref) {
  const match = String(ref).match(/(?:^|[#/])([0-9]+)(?:$|[?#/])/);
  if (!match) return null;
  return Number(match[1]);
}

function needsRequeue(record) {
  if (["failure", "cancelled", "timed_out"].includes(String(record.workflow_conclusion ?? ""))) return true;
  if ((record.fix_actions ?? []).some((action) => ["failed", "blocked"].includes(String(action.status ?? "")))) {
    return true;
  }
  if ((record.apply_actions ?? []).some((action) => String(action.status ?? "") === "blocked")) {
    return !hasTerminalFixOutcome(record);
  }
  return false;
}

function hasTerminalFixOutcome(record) {
  return (record.fix_actions ?? []).some((action) =>
    ["pushed", "opened", "executed", "merged"].includes(String(action.status ?? "")),
  );
}

function requeueReason(record) {
  if (["failure", "cancelled", "timed_out"].includes(String(record.workflow_conclusion ?? ""))) {
    return `latest workflow conclusion is ${record.workflow_conclusion}`;
  }
  if ((record.fix_actions ?? []).some((action) => ["failed", "blocked"].includes(String(action.status ?? "")))) {
    return "latest result has blocked or failed fix actions";
  }
  return "latest result has blocked apply actions";
}

function latestOpenedFixPrsAreMerged(record, liveFixPrs) {
  const refs = openedFixPrRefs(record);
  if (refs.length === 0 || liveFixPrs.length === 0) return false;
  const merged = new Set(
    liveFixPrs
      .filter((pr) => pr.kind === "pull_request" && pr.merged === true)
      .map((pr) => liveRefKey(pr.repo, pr.number)),
  );
  return refs.every((ref) => merged.has(liveRefKey(ref.repo, ref.number)));
}

function openedFixPrRefs(record) {
  const defaultRepo = String(record.repo ?? process.env.CLOWNFISH_TARGET_REPO ?? "openclaw/openclaw");
  const refs = [];
  const seen = new Set();
  for (const action of record.fix_actions ?? []) {
    if (String(action?.action ?? "") !== "open_fix_pr" || String(action?.status ?? "") !== "opened") continue;
    const ref = parseGitHubPrRef(action.pr ?? action.url ?? action.target, defaultRepo);
    if (!ref) continue;
    const key = liveRefKey(ref.repo, ref.number);
    if (seen.has(key)) continue;
    seen.add(key);
    refs.push(ref);
  }
  return refs;
}

function parseGitHubPrRef(value, defaultRepo) {
  const text = String(value ?? "").trim();
  const urlMatch = text.match(/^https:\/\/github\.com\/([^/\s]+\/[^/\s]+)\/pull\/([0-9]+)(?:$|[/?#])/);
  if (urlMatch) return { repo: urlMatch[1], number: Number(urlMatch[2]) };
  const number = refNumber(text);
  if (number === null) return null;
  return { repo: defaultRepo, number };
}

function readLiveFixPrClusters(runRecords) {
  const refsByRepo = new Map();
  const clusterRefs = new Map();
  for (const record of runRecords) {
    const clusterId = String(record.cluster_id ?? "");
    if (!clusterId) continue;
    for (const ref of openedFixPrRefs(record)) {
      const numbers = refsByRepo.get(ref.repo) ?? new Set();
      numbers.add(ref.number);
      refsByRepo.set(ref.repo, numbers);
      const refs = clusterRefs.get(clusterId) ?? [];
      refs.push(ref);
      clusterRefs.set(clusterId, refs);
    }
  }

  const liveByKey = new Map();
  for (const [repo, numbers] of refsByRepo.entries()) {
    for (const record of fetchLiveIssueOrPullRequestRefs(repo, [...numbers])) {
      liveByKey.set(liveRefKey(repo, record.number), record);
    }
  }

  const out = new Map();
  for (const [clusterId, refs] of clusterRefs.entries()) {
    out.set(
      clusterId,
      refs
        .map((ref) => liveByKey.get(liveRefKey(ref.repo, ref.number)))
        .filter(Boolean),
    );
  }
  return out;
}

function readLiveTargetRefs(jobPaths) {
  const report = args["live-ref-report"];
  if (report !== undefined && report !== true) return readLiveTargetRefReport(path.resolve(String(report)));

  const refsByRepo = new Map();
  for (const jobPath of jobPaths) {
    let job;
    try {
      job = parseJob(jobPath);
    } catch {
      continue;
    }
    const repo = String(job.frontmatter.repo ?? "");
    if (!repo) continue;
    const numbers = refsByRepo.get(repo) ?? new Set();
    for (const number of targetRefNumbers(job)) numbers.add(number);
    refsByRepo.set(repo, numbers);
  }

  const out = new Map();
  for (const [repo, numbers] of refsByRepo.entries()) {
    for (const record of fetchLiveIssueOrPullRequestRefs(repo, [...numbers])) {
      out.set(liveRefKey(repo, record.number), record);
    }
  }
  return out;
}

function readLiveTargetRefReport(filePath) {
  const parsed = readJson(filePath);
  const rows = Array.isArray(parsed) ? parsed : (parsed?.refs ?? parsed?.live_target_refs ?? []);
  const out = new Map();
  for (const row of rows) {
    const repo = String(row.repo ?? row.repository ?? "");
    const number = Number(row.number);
    if (!repo || !Number.isInteger(number)) continue;
    out.set(liveRefKey(repo, number), normalizeLiveRefRecord(repo, { ...row, number }));
  }
  return out;
}

function fetchLiveIssueOrPullRequestRefs(repo, numbers) {
  if (numbers.length === 0) return [];
  const [owner, name] = repo.split("/");
  const rows = [];
  for (const chunk of chunks(numbers, 80)) {
    const query = liveRefsGraphqlQuery(chunk);
    const data = ghJson(
      [
        "api",
        "graphql",
        "-f",
        `owner=${owner}`,
        "-f",
        `name=${name}`,
        "-f",
        `query=${query}`,
      ],
      { allowPartial: true },
    );
    const repository = data?.data?.repository ?? data?.repository ?? {};
    for (const number of chunk) {
      const raw = repository[`n${number}`];
      rows.push(normalizeLiveRefRecord(repo, raw ? { ...raw, number } : { number, status: "missing", reason: "GitHub returned no issueOrPullRequest" }));
    }
  }
  return rows;
}

function liveRefsGraphqlQuery(numbers) {
  const selections = numbers
    .map(
      (number) => `n${number}: issueOrPullRequest(number: ${number}) {
        __typename
        ... on Issue {
          number
          state
          stateReason
          title
          url
          updatedAt
          closedAt
          labels(first: 30) {
            nodes {
              name
            }
          }
        }
        ... on PullRequest {
          number
          state
          merged
          title
          url
          updatedAt
          closedAt
          labels(first: 30) {
            nodes {
              name
            }
          }
        }
      }`,
    )
    .join("\n");
  return `query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      ${selections}
    }
  }`;
}

function normalizeLiveRefRecord(repo, raw) {
  const number = Number(raw.number);
  const typename = String(raw.__typename ?? raw.typename ?? raw.kind ?? "").toLowerCase();
  const state = normalizeLiveRefState(raw.state);
  const labels = normalizeLabels(raw.labels);
  if (!Number.isInteger(number)) {
    return { repo, number: null, status: "invalid", reason: "missing number" };
  }
  if (raw.status && raw.status !== "found") {
    return {
      repo,
      number,
      status: String(raw.status),
      reason: raw.reason ?? null,
    };
  }
  if (!state) {
    return {
      repo,
      number,
      status: "missing",
      reason: raw.reason ?? "missing state",
    };
  }
  return {
    repo,
    number,
    status: "found",
    kind: typename.includes("pull") ? "pull_request" : "issue",
    state,
    merged: raw.merged === undefined ? undefined : Boolean(raw.merged),
    title: raw.title ?? "",
    url: raw.url ?? "",
    updated_at: raw.updatedAt ?? raw.updated_at ?? null,
    closed_at: raw.closedAt ?? raw.closed_at ?? null,
    labels,
    security_sensitive: hasDeterministicSecuritySignal({ labels }),
  };
}

function normalizeLabels(labels) {
  if (Array.isArray(labels)) {
    return labels
      .map((label) => (typeof label === "string" ? label : label?.name))
      .filter((label) => typeof label === "string" && label.length > 0);
  }
  if (Array.isArray(labels?.nodes)) {
    return labels.nodes
      .map((label) => label?.name)
      .filter((label) => typeof label === "string" && label.length > 0);
  }
  return [];
}

function normalizeLiveRefState(value) {
  const state = String(value ?? "").toLowerCase();
  if (state === "open") return "open";
  if (state === "closed" || state === "merged") return state;
  return null;
}

function liveRefKey(repo, number) {
  return `${repo}#${number}`;
}

function chunks(values, size) {
  const out = [];
  for (let index = 0; index < values.length; index += size) out.push(values.slice(index, index + size));
  return out;
}

function isFinalized(record) {
  if (record.workflow_conclusion !== "success") return false;
  if (record.result_status === "needs_human") return false;
  if ((record.needs_human ?? []).length > 0) return false;
  if (needsRequeue(record)) return false;
  return true;
}

function applyActions(classifiedRows) {
  for (const row of classifiedRows) {
    const absolute = path.join(repoRoot(), row.job);
    if (applyDeleteTests && row.status === "delete_test_job") {
      fs.unlinkSync(absolute);
      row.applied = "deleted";
    }
    if (applyOutbox && row.status === "move_to_outbox") {
      fs.mkdirSync(outboxDir, { recursive: true });
      const destination = path.join(outboxDir, path.basename(row.job));
      fs.renameSync(absolute, destination);
      row.applied = `moved:${path.relative(repoRoot(), destination)}`;
    }
    if (applyStuck && row.status === "move_to_stuck") {
      fs.mkdirSync(stuckDir, { recursive: true });
      const destination = path.join(stuckDir, path.basename(row.job));
      fs.renameSync(absolute, destination);
      row.applied = `moved:${path.relative(repoRoot(), destination)}`;
    }
  }
}

function readRunRecords() {
  if (!fs.existsSync(runRecordsDir)) return [];
  return fs
    .readdirSync(runRecordsDir)
    .filter((name) => name.endsWith(".json"))
    .map((name) => readJson(path.join(runRecordsDir, name)))
    .filter(Boolean);
}

function latestClusterRecords(runRecords) {
  const latest = new Map();
  for (const record of runRecords) {
    const clusterId = String(record.cluster_id ?? "");
    if (!clusterId) continue;
    const previous = latest.get(clusterId);
    if (!previous || compareRunRecordRecency(record, previous) > 0) {
      latest.set(clusterId, record);
    }
  }
  return latest;
}

function compareRunRecordRecency(left, right) {
  const leftRunId = parseNumericRunId(left.run_id);
  const rightRunId = parseNumericRunId(right.run_id);
  if (leftRunId !== null && rightRunId !== null && leftRunId !== rightRunId) {
    return leftRunId > rightRunId ? 1 : -1;
  }

  const leftTime = runRecordTimestamp(left);
  const rightTime = runRecordTimestamp(right);
  if (leftTime !== null && rightTime !== null && leftTime !== rightTime) return leftTime - rightTime;
  if (leftTime !== null && rightTime === null) return 1;
  if (leftTime === null && rightTime !== null) return -1;

  return String(left.run_id ?? "").localeCompare(String(right.run_id ?? ""));
}

function parseNumericRunId(value) {
  const text = String(value ?? "").trim();
  if (!/^[0-9]+$/.test(text)) return null;
  return BigInt(text);
}

function runRecordTimestamp(record) {
  for (const key of ["published_at", "completed_at", "updated_at", "generated_at", "created_at"]) {
    const timestamp = Date.parse(String(record[key] ?? ""));
    if (Number.isFinite(timestamp)) return timestamp;
  }
  return null;
}

function readOpenClownfishPrClusters() {
  const repo = process.env.CLOWNFISH_TARGET_REPO ?? "openclaw/openclaw";
  const pulls = readOpenPullRequests(repo);
  const byCluster = new Map();
  for (const pull of pulls ?? []) {
    const head = String(pull.headRefName ?? "");
    if (!head.startsWith("clownfish/")) continue;
    const clusterId = head.replace(/^clownfish\//, "");
    const rows = byCluster.get(clusterId) ?? [];
    rows.push({
      number: pull.number,
      title: pull.title,
      url: pull.url,
      head_ref: head,
      updated_at: pull.updatedAt,
    });
    byCluster.set(clusterId, rows);
  }
  return byCluster;
}

function readOpenPullRequests(repo) {
  return ghJsonStream([
    "api",
    "--paginate",
    `repos/${repo}/pulls?state=open&per_page=100`,
    "--jq",
    ".[] | {number,title,headRefName:.head.ref,url:.html_url,updatedAt:.updated_at}",
  ]);
}

function githubEnv() {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0", GH_FORCE_TTY: "never", TERM: "dumb" };
  delete env.FORCE_COLOR;
  return env;
}

function readActiveClusterRuns() {
  const repo = process.env.CLOWNFISH_REPO ?? "openclaw/clownfish";
  const statuses = ["queued", "in_progress", "waiting", "requested", "pending"];
  const runs = [];
  for (const status of statuses) {
    try {
      runs.push(
        ...ghJson([
          "run",
          "list",
          "--repo",
          repo,
          "--workflow",
          "cluster-worker.yml",
          "--status",
          status,
          "--limit",
          "100",
          "--json",
          "databaseId,status,conclusion,createdAt,updatedAt,url,displayTitle",
        ]),
      );
    } catch {
      // Some statuses are not accepted on older gh versions; active PR detection is still useful.
    }
  }
  const byId = new Map();
  for (const run of runs) byId.set(String(run.databaseId), run);
  return [...byId.values()].sort((left, right) => String(right.createdAt).localeCompare(String(left.createdAt)));
}

function publicRow(row) {
  const out = Object.fromEntries(Object.entries(row).filter(([, value]) => value !== undefined));
  if (Array.isArray(out.live_target_refs)) {
    const refs = out.live_target_refs;
    delete out.live_target_refs;
    const openRefs = refs.filter((ref) => ref.state === "open").map(compactLiveTargetRef);
    const closedRefs = refs.filter((ref) => ref.state !== "open").map(compactLiveTargetRef);
    if (openRefs.length > 0) out.live_target_open_refs = openRefs.slice(0, 20);
    if (closedRefs.length > 0) out.live_target_closed_refs_sample = closedRefs.slice(0, 10);
  }
  if (Array.isArray(out.live_fix_prs)) out.live_fix_prs = out.live_fix_prs.map(compactLiveTargetRef);
  return out;
}

function compactLiveTargetRef(ref) {
  return Object.fromEntries(Object.entries({
    ref: ref.ref,
    kind: ref.kind,
    state: ref.state,
    title: ref.title,
    url: ref.url,
    labels: ref.labels,
    security_sensitive: ref.security_sensitive,
  }).filter(([, value]) => value !== undefined));
}

function countBy(rows, keyFn) {
  const out = {};
  for (const row of rows) {
    const key = keyFn(row);
    out[key] = (out[key] ?? 0) + 1;
  }
  return out;
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function ghJson(ghArgs, options = {}) {
  const env = githubEnv();
  let text;
  try {
    text = execFileSync(githubCli(), ghArgs, {
      cwd: repoRoot(),
      encoding: "utf8",
      env,
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch (error) {
    if (!options.allowPartial || !error.stdout) throw error;
    text = error.stdout;
  }
  return JSON.parse(stripAnsi(text) || "null");
}

function ghJsonStream(ghArgs) {
  const text = execFileSync(githubCli(), ghArgs, {
    cwd: repoRoot(),
    encoding: "utf8",
    env: githubEnv(),
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 64 * 1024 * 1024,
  });
  return parseJsonStream(stripAnsi(text));
}

function parseJsonStream(text) {
  const values = [];
  let buffer = "";
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (const char of text) {
    if (depth === 0) {
      if (/\s/.test(char)) continue;
      buffer = "";
    }
    buffer += char;
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }
    if (char === '"') {
      inString = true;
    } else if (char === "{" || char === "[") {
      depth += 1;
    } else if (char === "}" || char === "]") {
      depth -= 1;
      if (depth === 0) {
        values.push(JSON.parse(buffer));
        buffer = "";
      }
    }
  }
  if (buffer.trim()) throw new Error("failed to parse complete JSON stream from gh output");
  return values;
}

function githubCli() {
  if (process.env.CLOWNFISH_GH_BIN) return process.env.CLOWNFISH_GH_BIN;
  return hasCommand("ghx") ? "ghx" : "gh";
}

function hasCommand(command) {
  try {
    execFileSync("sh", ["-lc", `command -v ${command}`], {
      cwd: repoRoot(),
      encoding: "utf8",
      stdio: ["ignore", "ignore", "ignore"],
    });
    return true;
  } catch {
    return false;
  }
}

function stripAnsi(text) {
  return text.replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function writeMarkdownReport(report, filePath) {
  const sections = [
    ["Delete Test Jobs", report.delete_test_jobs],
    ["Move To Outbox", report.outbox_jobs],
    ["Move To Stuck Queue", report.stuck_jobs],
    ["Requeue Candidates", report.requeue_candidates],
    ["Active Jobs", report.active_jobs],
    ["Security Hold Jobs", report.security_hold_jobs],
    ["Invalid Jobs", report.invalid_jobs],
  ];
  const body = `# OpenClaw Job Sweep

Mode: ${report.status}

| Metric | Count |
| --- | ---: |
| Jobs | ${report.totals.jobs ?? 0} |
| Delete test jobs | ${report.totals.delete_test_job ?? 0} |
| Move to outbox | ${report.totals.move_to_outbox ?? 0} |
| Move to stuck queue | ${report.totals.move_to_stuck ?? 0} |
| Requeue candidates | ${report.totals.requeue_candidate ?? 0} |
| Active | ${report.totals.active ?? 0} |
| Security hold | ${report.totals.security_hold ?? 0} |
| Invalid | ${report.totals.invalid ?? 0} |

${sections.map(renderSection).join("\n\n")}
`;
  fs.writeFileSync(filePath, body, "utf8");
}

function renderSection([title, rows]) {
  const body = rows
    .slice(0, 150)
    .map((row) => `| ${row.job} | ${row.cluster_id ?? ""} | ${row.reason} |`)
    .join("\n");
  return `## ${title}

| Job | Cluster | Reason |
| --- | --- | --- |
${body || "| _None_ |  |  |"}`;
}
