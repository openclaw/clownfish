import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const workflow = fs.readFileSync(path.join(repoRoot, ".github", "workflows", "comment-router.yml"), "utf8");
const reviewedHead = "a".repeat(40);
const mergedHead = "b".repeat(40);
const since = "2026-07-12T00:00:00.000Z";
const comments = [
  {
    id: 202,
    node_id: "IC_merge",
    issue_url: "https://api.github.com/repos/openclaw/openclaw/issues/2",
    html_url: "https://github.com/openclaw/openclaw/pull/2#issuecomment-202",
    user: { login: "clawsweeper[bot]" },
    author_association: "NONE",
    body: `<!-- clawsweeper-verdict: pass sha=${reviewedHead} -->`,
    created_at: "2026-07-12T00:02:00.000Z",
    updated_at: "2026-07-12T00:02:00.000Z",
  },
  {
    id: 101,
    node_id: "IC_status",
    issue_url: "https://api.github.com/repos/openclaw/openclaw/issues/1",
    html_url: "https://github.com/openclaw/openclaw/issues/1#issuecomment-101",
    user: { login: "maintainer" },
    author_association: "MEMBER",
    body: "/clownfish status",
    created_at: "2026-07-12T00:01:00.000Z",
    updated_at: "2026-07-12T00:01:00.000Z",
  },
];

test("route phase defers direct merge intents and exact replay records them once", () => {
  const fixture = makeFixture();
  const scopeFile = path.join(fixture.root, ".projectclownfish", "deferred-merges.json");
  const route = runRouter(fixture, [
    "--execute",
    "--defer-merges",
    "--deferred-merge-file",
    scopeFile,
    "--repo",
    "openclaw/openclaw",
    "--since",
    since,
    "--max-comments",
    "10",
  ]);

  assert.equal(route.status, 0, route.stderr || route.stdout);
  const routeReport = JSON.parse(route.stdout);
  assert.equal(routeReport.mode, "route");
  assert.equal(routeReport.actionable, 1);
  assert.equal(routeReport.deferred_merge_comments, 1);
  assert.deepEqual(
    routeReport.commands.map((command) => [command.comment_id, command.status]),
    [
      ["202", "deferred"],
      ["101", "executed"],
    ],
  );

  const scope = readJson(scopeFile);
  assert.equal(scope.repo, "openclaw/openclaw");
  assert.equal(scope.since, since);
  assert.equal(scope.execute, true);
  assert.deepEqual(scope.comment_ids, ["202"]);
  assert.equal(scope.comments[0].comment_version_key, "202:2026-07-12T00:02:00.000Z");

  const routeLedger = readJson(path.join(fixture.root, "results", "comment-router.json"));
  assert.deepEqual(routeLedger.commands.map((command) => command.comment_id), ["101"]);

  let state = readJson(fixture.state);
  assert.equal(state.merged, false);
  assert.equal(state.issue_comments["1"].length, 1);
  assert.equal(state.issue_comments["2"].length, 0);
  assert.equal(state.calls.filter((call) => call.type === "pr_merge").length, 0);
  assert.equal(state.calls.filter((call) => call.comment_id === "202").length, 0);

  const replay = runRouter(fixture, [
    "--execute",
    "--merge-only",
    "--merge-scope-file",
    scopeFile,
    "--repo",
    scope.repo,
    "--since",
    scope.since,
    "--comment-ids",
    scope.comment_ids.join(","),
  ]);

  assert.equal(replay.status, 0, replay.stderr || replay.stdout);
  const replayReport = JSON.parse(replay.stdout);
  assert.equal(replayReport.mode, "merge_only");
  assert.equal(replayReport.commands.length, 1);
  assert.equal(replayReport.commands[0].comment_id, "202");
  assert.equal(replayReport.commands[0].status, "executed");

  const replayLedger = readJson(path.join(fixture.root, "results", "comment-router.json"));
  assert.deepEqual(
    replayLedger.commands.map((command) => [command.comment_id, command.status]),
    [
      ["101", "executed"],
      ["202", "executed"],
    ],
  );

  state = readJson(fixture.state);
  assert.equal(state.merged, true);
  assert.equal(state.issue_comments["1"].length, 1);
  assert.equal(state.issue_comments["2"].length, 1);
  assert.match(state.issue_comments["2"][0].body, /clownfish-command:202:2026-07-12T00:02:00.000Z/);
  assert.equal(state.calls.filter((call) => call.type === "pr_merge").length, 1);
  assert.equal(state.calls.filter((call) => call.comment_id === "202").length, 0);
});

test("merge replay fails closed when a queued comment is edited", () => {
  const fixture = makeFixture();
  const scopeFile = path.join(fixture.root, ".projectclownfish", "deferred-merges.json");
  const route = runRouter(fixture, [
    "--execute",
    "--defer-merges",
    "--deferred-merge-file",
    scopeFile,
    "--repo",
    "openclaw/openclaw",
    "--since",
    since,
    "--max-comments",
    "10",
  ]);
  assert.equal(route.status, 0, route.stderr || route.stdout);

  const editedComments = comments.map((comment) =>
    comment.id === 202
      ? {
          ...comment,
          body: `<!-- clawsweeper-verdict: pass sha=${"c".repeat(40)} -->`,
          updated_at: "2026-07-12T00:04:00.000Z",
        }
      : comment,
  );
  const replay = runRouter(
    fixture,
    [
      "--execute",
      "--merge-only",
      "--merge-scope-file",
      scopeFile,
      "--repo",
      "openclaw/openclaw",
      "--since",
      since,
      "--comment-ids",
      "202",
    ],
    editedComments,
  );

  assert.notEqual(replay.status, 0);
  assert.match(replay.stderr, /deferred merge comment 202 changed field comment_version_key/);
  const state = readJson(fixture.state);
  assert.equal(state.merged, false);
  assert.equal(state.calls.filter((call) => call.type === "pr_merge").length, 0);
});

test("duplicate deferred scopes replay one merge and preserve executed audit", () => {
  const fixture = makeFixture();
  const scopeFiles = ["first", "second"].map((name) =>
    path.join(fixture.root, ".projectclownfish", `deferred-merges-${name}.json`),
  );
  for (const scopeFile of scopeFiles) {
    const route = runRouter(fixture, [
      "--execute",
      "--defer-merges",
      "--deferred-merge-file",
      scopeFile,
      "--repo",
      "openclaw/openclaw",
      "--since",
      since,
      "--max-comments",
      "10",
    ]);
    assert.equal(route.status, 0, route.stderr || route.stdout);
    assert.deepEqual(readJson(scopeFile).comment_ids, ["202"]);
  }

  for (const [index, scopeFile] of scopeFiles.entries()) {
    const replay = runRouter(fixture, [
      "--execute",
      "--merge-only",
      "--merge-scope-file",
      scopeFile,
      "--repo",
      "openclaw/openclaw",
      "--since",
      since,
      "--comment-ids",
      "202",
    ]);
    assert.equal(replay.status, 0, replay.stderr || replay.stdout);
    assert.equal(JSON.parse(replay.stdout).commands[0].status, index === 0 ? "executed" : "skipped");
  }

  const state = readJson(fixture.state);
  assert.equal(state.calls.filter((call) => call.type === "pr_merge").length, 1);
  const ledger = readJson(path.join(fixture.root, "results", "comment-router.json"));
  assert.equal(ledger.commands.find((command) => command.comment_id === "202").status, "executed");
});

test("route phase preserves dry-run behavior without deferring or mutating", () => {
  const fixture = makeFixture();
  const scopeFile = path.join(fixture.root, ".projectclownfish", "deferred-merges.json");
  const result = runRouter(fixture, [
    "--write-report",
    "--defer-merges",
    "--deferred-merge-file",
    scopeFile,
    "--repo",
    "openclaw/openclaw",
    "--since",
    since,
    "--max-comments",
    "10",
  ]);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(result.stdout);
  assert.equal(report.status, "dry_run");
  assert.equal(report.mode, "route");
  assert.equal(report.deferred_merge_comments, 0);
  assert.equal(report.commands.find((command) => command.comment_id === "202").status, "ready");
  assert.deepEqual(readJson(scopeFile).comment_ids, []);
  assert.equal(fs.existsSync(path.join(fixture.root, "results", "comment-router.json")), false);

  const state = readJson(fixture.state);
  assert.equal(state.merged, false);
  assert.deepEqual(state.issue_comments, { 1: [], 2: [] });
  assert.deepEqual(state.calls, []);
});

test("merge-only requires executable exact replay scope", () => {
  for (const [args, message] of [
    [["--execute", "--merge-only", "--comment-ids", "202"], /requires --since/],
    [["--execute", "--merge-only", "--since", since], /requires --comment-ids/],
    [["--merge-only", "--since", since, "--comment-ids", "202"], /requires --execute/],
    [
      ["--execute", "--merge-only", "--since", since, "--comment-ids", "202"],
      /requires --merge-scope-file/,
    ],
  ]) {
    const result = spawnSync(process.execPath, ["scripts/comment-router.mjs", ...args], {
      cwd: repoRoot,
      encoding: "utf8",
      env: { ...process.env, CLOWNFISH_REPO: "openclaw/clownfish" },
    });
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, message);
  }
});

test("workflow holds the merge queue through replay and ledger publication", () => {
  const routeStart = workflow.indexOf("  route-comments:");
  const mergeStart = workflow.indexOf("  merge-comments:");
  const recordStart = workflow.indexOf("  record-merge-comments:");
  assert.ok(routeStart >= 0 && mergeStart > routeStart);
  assert.equal(recordStart, -1);

  const routeJob = workflow.slice(routeStart, mergeStart);
  const mergeJob = workflow.slice(mergeStart);

  assert.doesNotMatch(routeJob, /\n    concurrency:/);
  assert.match(routeJob, /--defer-merges/);
  assert.match(routeJob, /comment-router-merge-scope-\$\{\{ github\.run_id \}\}/);
  assert.match(routeJob, /overwrite: true/);
  assert.match(routeJob, /merge_comment_ids: \$\{\{ steps\.route\.outputs\.merge_comment_ids \}\}/);
  assert.match(routeJob, /git rebase -X ours origin\/main/);
  assert.match(routeJob, /appendLedger\(ledger, recordable\)/);
  assert.match(routeJob, /git rev-parse HEAD\)" = "\$\(git rev-parse origin\/main\)"[\s\S]*?git commit -m "chore: record Clownfish comment routing"/);
  assert.match(routeJob, /git commit --amend --no-edit/);
  assert.doesNotMatch(routeJob, /git rebase -X theirs/);

  assert.match(mergeJob, /\n    concurrency:\n      group: projectclownfish-merge-\$\{\{ needs\.route-comments\.outputs\.target_repo \}\}/);
  assert.match(mergeJob, /cancel-in-progress: false/);
  assert.match(mergeJob, /queue: max/);
  assert.match(mergeJob, /ref: main/);
  assert.match(mergeJob, /--merge-only/);
  assert.match(mergeJob, /--merge-scope-file "\$scope_file"/);
  assert.match(mergeJob, /--comment-ids "\$comment_ids"/);
  assert.match(mergeJob, /appendLedger\(ledger, recordable\)/);
  assert.match(mergeJob, /git push origin HEAD:main/);
  assert.match(mergeJob, /comment-router-merge-result-\$\{\{ github\.run_id \}\}-\$\{\{ github\.run_attempt \}\}/);
  assert.ok(mergeJob.indexOf("Replay deferred merge comments") < mergeJob.indexOf("Commit merged comment ledger"));
  assert.ok(mergeJob.indexOf("Commit merged comment ledger") < mergeJob.indexOf("Upload merge replay result"));
  assert.equal((workflow.match(/\n    concurrency:/g) ?? []).length, 1);
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-comment-router-"));
  const scripts = path.join(root, "scripts");
  const bin = path.join(root, "bin");
  const state = path.join(root, "state.json");
  fs.mkdirSync(scripts, { recursive: true });
  fs.mkdirSync(bin, { recursive: true });
  fs.mkdirSync(path.join(root, "results"), { recursive: true });
  for (const file of ["comment-router.mjs", "comment-router-core.mjs", "comment-router-utils.mjs", "lib.mjs"]) {
    fs.copyFileSync(path.join(repoRoot, "scripts", file), path.join(scripts, file));
  }
  fs.writeFileSync(
    state,
    `${JSON.stringify({ merged: false, issue_comments: { 1: [], 2: [] }, calls: [] }, null, 2)}\n`,
  );
  writeFakeGh(path.join(bin, "gh"));
  return { root, bin, state };
}

function runRouter(fixture, args, fixtureComments = comments) {
  return spawnSync(process.execPath, ["scripts/comment-router.mjs", ...args], {
    cwd: fixture.root,
    encoding: "utf8",
    env: {
      ...process.env,
      PATH: `${fixture.bin}${path.delimiter}${process.env.PATH}`,
      CLOWNFISH_REPO: "openclaw/clownfish",
      CLOWNFISH_ALLOW_AUTOMERGE: "1",
      CLOWNFISH_ALLOW_MERGE: "1",
      FAKE_GH_STATE: fixture.state,
      FAKE_GH_COMMENTS: JSON.stringify(fixtureComments),
    },
  });
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeFakeGh(file) {
  fs.writeFileSync(
    file,
    `#!/usr/bin/env node
const fs = require("fs");
const args = process.argv.slice(2);
const stateFile = process.env.FAKE_GH_STATE;
const state = JSON.parse(fs.readFileSync(stateFile, "utf8"));
const comments = JSON.parse(process.env.FAKE_GH_COMMENTS);
const save = () => fs.writeFileSync(stateFile, JSON.stringify(state, null, 2) + "\\n");
const send = (value) => process.stdout.write(JSON.stringify(value) + "\\n");
const inputPayload = () => {
  const index = args.indexOf("--input");
  return index >= 0 ? JSON.parse(fs.readFileSync(args[index + 1], "utf8")) : {};
};

if (args[0] === "api") {
  const endpoint = args[1];
  if (endpoint.startsWith("repos/openclaw/openclaw/issues/comments?since=")) {
    send([comments]);
    process.exit(0);
  }
  if (endpoint === "repos/openclaw/openclaw/collaborators/maintainer/permission") {
    send({ permission: "write" });
    process.exit(0);
  }
  const issueComments = endpoint.match(/^repos\\/openclaw\\/openclaw\\/issues\\/(\\d+)\\/comments\\?per_page=100$/);
  if (issueComments) {
    send([state.issue_comments[issueComments[1]] || []]);
    process.exit(0);
  }
  const createComment = endpoint.match(/^repos\\/openclaw\\/openclaw\\/issues\\/(\\d+)\\/comments$/);
  if (createComment && args.includes("POST")) {
    const payload = inputPayload();
    state.issue_comments[createComment[1]] ||= [];
    state.issue_comments[createComment[1]].push({ body: payload.body });
    state.calls.push({ type: "comment", issue_number: createComment[1], body: payload.body });
    save();
    send({});
    process.exit(0);
  }
  const reaction = endpoint.match(/^repos\\/openclaw\\/openclaw\\/issues\\/comments\\/(\\d+)\\/reactions$/);
  if (reaction && args.includes("POST")) {
    const payload = inputPayload();
    state.calls.push({ type: "reaction", comment_id: reaction[1], content: payload.content });
    save();
    send({});
    process.exit(0);
  }
  if (endpoint === "graphql") {
    const subject = args.find((arg) => arg.startsWith("subjectId=")) || "";
    state.calls.push({ type: "clear_reaction", comment_id: subject.includes("status") ? "101" : "202" });
    save();
    send({ data: {} });
    process.exit(0);
  }
  if (endpoint === "repos/openclaw/openclaw/issues/1") {
    send({ number: 1, state: "open", title: "status target", labels: [] });
    process.exit(0);
  }
  if (endpoint === "repos/openclaw/openclaw/issues/2") {
    send({ number: 2, state: "open", title: "merge target", labels: [], pull_request: {} });
    process.exit(0);
  }
}

if (args[0] === "pr" && args[1] === "view" && args[2] === "2") {
  send({
    headRefName: "feature",
    headRefOid: "${reviewedHead}",
    author: { login: "contributor" },
    baseRefName: "main",
    isDraft: false,
    labels: [{ name: "clownfish:automerge" }],
    mergeable: "MERGEABLE",
    mergeCommit: state.merged ? { oid: "${mergedHead}" } : null,
    mergeStateStatus: "CLEAN",
    mergedAt: state.merged ? "2026-07-12T00:03:00.000Z" : null,
    reviewDecision: "APPROVED",
    state: state.merged ? "MERGED" : "OPEN",
    statusCheckRollup: [{ name: "ci", status: "COMPLETED", conclusion: "SUCCESS" }],
    title: "merge target"
  });
  process.exit(0);
}

if (args[0] === "pr" && args[1] === "merge" && args[2] === "2") {
  state.merged = true;
  state.calls.push({ type: "pr_merge", number: "2", args });
  save();
  process.exit(0);
}

process.stderr.write("unexpected fake gh invocation: " + JSON.stringify(args) + "\\n");
process.exit(1);
`,
  );
  fs.chmodSync(file, 0o755);
}
