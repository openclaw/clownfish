#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { parseArgs, parseJob, repoRoot } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2), { booleanKeys: ["write", "json"] });
const inboxDir = path.resolve(repoRoot(), String(args.inbox ?? "jobs/openclaw/inbox"));
const owner = String(args.owner ?? "openclaw");
const write = Boolean(args.write);
const json = Boolean(args.json);
const live = args.live !== false && args.live !== "false";
const limit = numberArg("limit", 0);
const files = args._.length > 0 ? args._.map((file) => path.resolve(file)) : listJobFiles(inboxDir);
const selectedFiles = limit > 0 ? files.slice(0, limit) : files;
const parsedJobs = selectedFiles.map((file) => {
  const job = parseJob(file);
  const fm = job.frontmatter;
  return {
    job,
    fm,
    candidates: normalizeRefs(fm.candidates ?? []),
    canonical: normalizeRefs(fm.canonical ?? []),
    clusterRefs: normalizeRefs(fm.cluster_refs ?? []),
    resultPath: resultFilePath(fm.cluster_id),
  };
});
const statusesByRepo = live ? fetchAllStatuses(parsedJobs) : new Map();
const rows = [];

for (const entry of parsedJobs) {
  const { job, fm, candidates, canonical, resultPath } = entry;
  const exactResultExists = fs.existsSync(resultPath);
  const statuses = exactResultExists ? {} : (statusesByRepo.get(fm.repo) ?? {});
  const openCandidates = candidates.filter((ref) => isOpenRef(statuses[ref]));
  const closedCandidates = candidates.filter((ref) => statuses[ref] && !isOpenRef(statuses[ref]));
  const closedCanonical = canonical.filter((ref) => statuses[ref] && !isOpenRef(statuses[ref]));
  const action = classify({ fm, exactResultExists, candidates, openCandidates, closedCanonical, live });
  const destination = destinationFor(job, action);
  rows.push({
    job: job.relativePath,
    repo: fm.repo,
    cluster_id: fm.cluster_id,
    mode: fm.mode,
    action,
    destination,
    result: exactResultExists ? path.relative(repoRoot(), resultPath) : null,
    candidates,
    open_candidates: openCandidates,
    closed_candidates: closedCandidates,
    closed_canonical: closedCanonical,
  });
}

if (write) {
  for (const row of rows) {
    if (!row.destination) continue;
    fs.mkdirSync(path.dirname(path.join(repoRoot(), row.destination)), { recursive: true });
    fs.renameSync(path.join(repoRoot(), row.job), path.join(repoRoot(), row.destination));
  }
}

const summary = summarize(rows);
const output = { write, live, inbox: path.relative(repoRoot(), inboxDir), summary, rows };
if (json) {
  console.log(JSON.stringify(output, null, 2));
} else {
  console.log(
    [
      `checked=${summary.checked}`,
      `dispatchable=${summary.dispatchable ?? 0}`,
      `already_resulted=${summary.already_resulted ?? 0}`,
      `all_candidates_closed=${summary.all_candidates_closed ?? 0}`,
      `single_open_candidate=${summary.single_open_candidate ?? 0}`,
      `needs_recanonicalize=${summary.needs_recanonicalize ?? 0}`,
      `moved=${write ? summary.movable : 0}`,
    ].join(" "),
  );
  for (const row of rows.filter((item) => item.action !== "dispatchable")) {
    console.log(`${row.action}\t${row.job}${row.destination ? ` -> ${row.destination}` : ""}`);
  }
}

function classify({ fm, exactResultExists, candidates, openCandidates, closedCanonical, live }) {
  if (isExampleJobId(fm.cluster_id)) return "example";
  if (exactResultExists) return "already_resulted";
  if (live && candidates.length > 0 && openCandidates.length === 0) return "all_candidates_closed";
  if (fm.mode === "plan" && openCandidates.length === 1) return "single_open_candidate";
  if (closedCanonical.length > 0 && openCandidates.length > 1) return "needs_recanonicalize";
  return "dispatchable";
}

function destinationFor(job, action) {
  if (action === "already_resulted") return moveDestination(job, "finalized");
  if (action === "all_candidates_closed" || action === "single_open_candidate") return moveDestination(job, "stale");
  return null;
}

function isExampleJobId(clusterId) {
  return clusterId === "example-autonomous-cron-timeout" || clusterId === "example-cron-timeout";
}

function moveDestination(job, bucket) {
  const parts = job.relativePath.split("/");
  if (parts.length < 4 || parts[0] !== "jobs" || parts[2] !== "inbox") {
    throw new Error(`cannot infer outbox destination for ${job.relativePath}`);
  }
  return path.join(parts[0], parts[1], "outbox", bucket, path.basename(job.relativePath));
}

function listJobFiles(directory) {
  return fs
    .readdirSync(directory)
    .filter((name) => name.endsWith(".md"))
    .sort()
    .map((name) => path.join(directory, name));
}

function resultFilePath(clusterId) {
  return path.join(repoRoot(), "results", owner, `${clusterId}.md`);
}

function fetchAllStatuses(entries) {
  const refsByRepo = new Map();
  for (const entry of entries) {
    if (fs.existsSync(entry.resultPath)) continue;
    const refs = refsByRepo.get(entry.fm.repo) ?? new Set();
    for (const ref of [...entry.candidates, ...entry.clusterRefs]) refs.add(ref);
    refsByRepo.set(entry.fm.repo, refs);
  }

  const out = new Map();
  for (const [repo, refs] of refsByRepo) {
    const [repoOwner, repoName] = String(repo).split("/");
    const statuses = {};
    const numbers = [...refs].map((ref) => Number(ref.slice(1))).filter((number) => Number.isInteger(number));
    for (let index = 0; index < numbers.length; index += 40) {
      Object.assign(statuses, ghIssueOrPrStatuses(repoOwner, repoName, numbers.slice(index, index + 40)));
    }
    out.set(repo, statuses);
  }
  return out;
}

function ghIssueOrPrStatuses(repoOwner, repoName, numbers) {
  if (numbers.length === 0) return {};
  const aliases = numbers
    .map(
      (number) => `n${number}: issueOrPullRequest(number: ${number}) {
        __typename
        ... on Issue { number state closed }
        ... on PullRequest { number state merged closed }
      }`,
    )
    .join("\n");
  const query = `query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      ${aliases}
    }
  }`;
  const data = ghJson(["api", "graphql", "-f", `query=${query}`, "-F", `owner=${repoOwner}`, "-F", `name=${repoName}`]);
  const repository = data?.data?.repository ?? {};
  return Object.fromEntries(
    Object.values(repository)
      .filter(Boolean)
      .map((item) => [
        `#${item.number}`,
        {
          type: item.__typename,
          state: item.state,
          closed: Boolean(item.closed),
          merged: Boolean(item.merged),
        },
      ]),
  );
}

function isOpenRef(status) {
  if (!status) return false;
  if (status.type === "PullRequest") return status.state === "OPEN" && !status.merged && !status.closed;
  return status.state === "OPEN" && !status.closed;
}

function normalizeRefs(refs) {
  return [...new Set(refs.map(normalizeRef).filter(Boolean))];
}

function normalizeRef(ref) {
  const text = String(ref ?? "").trim();
  const match = text.match(/(?:^#?|github\.com\/[^/]+\/[^/]+\/(?:issues|pull)\/)([0-9]+)$/);
  return match ? `#${match[1]}` : "";
}

function summarize(items) {
  const summary = { checked: items.length, movable: 0 };
  for (const item of items) {
    summary[item.action] = (summary[item.action] ?? 0) + 1;
    if (item.destination) summary.movable += 1;
  }
  return summary;
}

function ghJson(ghArgs) {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  const output = execFileSync("gh", ghArgs, {
    cwd: repoRoot(),
    env,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 64 * 1024 * 1024,
  });
  return JSON.parse(stripAnsi(output) || "null");
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function numberArg(name, fallback) {
  const value = Number(args[name] ?? fallback);
  if (!Number.isInteger(value) || value < 0) throw new Error(`--${name} must be a non-negative integer`);
  return value;
}
