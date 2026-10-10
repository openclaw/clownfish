import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const head = "a".repeat(40);
const base = "b".repeat(40);
const commit = "c".repeat(40);

for (const outcome of ["queued", "queued-read-timeout", "queued-closed", "queued-reviewed-head", "queued-rejected-merged-head", "missing-sha", "invalid-sha", "confirmed", "head-drift", "already-missing-sha", "already-confirmed", "already-head-drift"]) {
  test(`post-flight requires confirmed merge proof before closeout: ${outcome}`, (t) => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-post-flight-merge-"));
    t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
    const bin = path.join(dir, "bin");
    fs.mkdirSync(bin);
    const state = path.join(dir, "state.json");
    fs.writeFileSync(state, JSON.stringify({ merged: outcome.startsWith("already-"), closed: false, calls: [] }));
    const job = path.join(dir, "job.md");
    fs.writeFileSync(job, `---
repo: openclaw/openclaw
cluster_id: merge-proof
mode: autonomous
allowed_actions:
  - merge
  - close
  - comment
  - label
candidates:
  - "#1"
  - "#2"
allow_merge: true
allow_post_merge_close: true
---
Synthetic merge proof regression.
`);
    const result = path.join(dir, "result.json");
    fs.writeFileSync(result, JSON.stringify({
      repo: "openclaw/openclaw", cluster_id: "merge-proof", mode: "autonomous",
      actions: [{ action: "post_merge_close", status: "blocked", target: "#1", candidate_fix: "#2" }],
    }));
    fs.writeFileSync(path.join(dir, "fix-execution-report.json"), JSON.stringify({ actions: [{
      action: "open_fix_pr", status: "opened", pr_url: "https://github.com/openclaw/openclaw/pull/2",
      merge_preflight: {
        head_sha: head, base_sha: base, security_status: "cleared", security_evidence: ["fixture"],
        comments_status: "resolved", comments_evidence: ["fixture"],
        bot_comments_status: "resolved", bot_comments_evidence: ["fixture"], validation_commands: ["fixture"],
        codex_review: { command: "/review", status: "passed", findings_addressed: true, evidence: ["fixture"] },
      },
    }] }));
    fs.writeFileSync(path.join(bin, "gh"), `#!/usr/bin/env node
const fs = require("node:fs");
const args = process.argv.slice(2);
const state = JSON.parse(fs.readFileSync(process.env.FIXTURE_STATE, "utf8"));
state.calls.push(args);
const outcome = process.env.FIXTURE_OUTCOME;
const liveHead = state.head_sha || (state.merged && outcome.endsWith("head-drift") ? "${"d".repeat(40)}" : "${head}");
let response;
if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/pulls/2") {
  if (outcome === "queued-read-timeout" && !state.read_timed_out && state.calls.some((call) => call[0] === "pr" && call[1] === "merge")) {
    state.read_timed_out = true;
    fs.writeFileSync(process.env.FIXTURE_STATE, JSON.stringify(state));
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 10000);
  }
  response = { number: 2, state: state.merged || state.pr_closed ? "closed" : "open", merged: state.merged, head: { sha: liveHead }, base: { ref: "main" },
    merged_at: state.merged ? "2026-09-26T00:00:00Z" : null,
    merge_commit_sha: outcome.includes("missing-sha") ? null : outcome === "invalid-sha" ? "abc" : "${commit}" };
} else if (args[0] === "pr" && args[1] === "view") {
  response = { baseRefName: "main", headRefOid: liveHead, mergeable: "MERGEABLE", mergeStateStatus: "CLEAN",
    mergedAt: state.merged ? "2026-09-26T00:00:00Z" : null,
    mergeCommit: outcome.includes("missing-sha") ? null : { oid: "${commit}" },
    statusCheckRollup: [{ name: "CI", status: "COMPLETED", conclusion: state.failing_checks ? "FAILURE" : "SUCCESS" }] };
} else if (args[0] === "api" && args[1].endsWith("git/ref/heads/main")) {
  response = { object: { sha: state.merged && outcome === "queued-rejected-merged-head" ? "${commit}" : "${base}" } };
} else if (args[0] === "api" && args[1] === "graphql") {
  response = { data: { repository: { pullRequest: { reviewThreads: { nodes: [], pageInfo: { hasNextPage: false } } } } } };
} else if (args[0] === "api" && args[1].includes("/comments?")) {
  response = "";
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/issues/1") {
  response = { state: state.closed ? "closed" : "open", labels: [] };
} else if (args[0] === "pr" && args[1] === "merge") {
  state.merged = !outcome.startsWith("queued");
} else if (args[0] === "issue" && args[1] === "close") {
  state.closed = true;
} else if (!(args[0] === "issue" && ["edit", "comment"].includes(args[1]))) {
  console.error("unexpected fixture invocation", args);
  process.exit(1);
}
fs.writeFileSync(process.env.FIXTURE_STATE, JSON.stringify(state));
if (response !== undefined) process.stdout.write(typeof response === "string" ? response : JSON.stringify(response));
`, { mode: 0o755 });
    const invoke = () => spawnSync(process.execPath, [path.join(root, "scripts/post-flight.mjs"), job, result], {
      encoding: "utf8", timeout: 30000,
      env: {
        PATH: `${bin}${path.delimiter}${path.dirname(process.execPath)}:/usr/bin:/bin`,
        CLOWNFISH_ALLOW_EXECUTE: "1", CLOWNFISH_ALLOW_MERGE: "1", CLOWNFISH_POST_FLIGHT_WAIT_MS: "0",
        CLOWNFISH_GH_EXEC_TIMEOUT_MS: outcome === "queued-read-timeout" ? "5000" : "120000",
        FIXTURE_STATE: state, FIXTURE_OUTCOME: outcome,
      },
    });
    const run = invoke();
    if (outcome === "queued-read-timeout") assert.notEqual(run.status, 0);
    else assert.equal(run.status, 0, run.stderr || run.stdout);
    const report = outcome === "queued-read-timeout"
      ? JSON.parse(fs.readFileSync(path.join(dir, "post-flight-report.json"), "utf8"))
      : JSON.parse(run.stdout);
    const after = JSON.parse(fs.readFileSync(state, "utf8"));
    const confirmed = outcome === "confirmed" || outcome === "already-confirmed";
    assert.equal(report.actions[0].status, confirmed ? "executed" : "blocked");
    assert.equal(after.closed, confirmed);
    assert.equal(after.calls.filter((args) => args[0] === "issue" && args[1] === "comment").length, confirmed ? 1 : 0);
    assert.equal(after.calls.filter((args) => args[0] === "pr" && args[1] === "merge").length, outcome.startsWith("already-") ? 0 : 1);
    if (confirmed) assert.equal(report.actions[0].merge_commit_sha, commit);
    else assert.equal(report.actions.length, 1);
    if (outcome.startsWith("queued")) {
      const waiting = invoke();
      assert.equal(waiting.status, 0, waiting.stderr || waiting.stdout);
      assert.equal(JSON.parse(waiting.stdout).actions[0].status, "blocked");
      assert.equal(JSON.parse(fs.readFileSync(state, "utf8")).calls.filter((args) => args[0] === "pr" && args[1] === "merge").length, 1);
      if (outcome === "queued-rejected-merged-head") {
        const nextHead = "d".repeat(40);
        const fixPath = path.join(dir, "fix-execution-report.json");
        const fix = JSON.parse(fs.readFileSync(fixPath, "utf8"));
        fix.actions[0].merge_preflight.head_sha = nextHead;
        fix.actions[0].merge_preflight.codex_review.status = "failed";
        fs.writeFileSync(fixPath, JSON.stringify(fix));
        fs.writeFileSync(state, JSON.stringify({ ...JSON.parse(fs.readFileSync(state, "utf8")), head_sha: nextHead, merged: true }));
        const rejected = invoke();
        assert.equal(rejected.status, 0, rejected.stderr || rejected.stdout);
        assert.equal(JSON.parse(rejected.stdout).actions[0].status, "blocked");
        assert.equal(JSON.parse(fs.readFileSync(state, "utf8")).closed, false);
        fix.actions[0].merge_preflight.codex_review.status = "passed";
        fs.writeFileSync(fixPath, JSON.stringify(fix));
        const accepted = invoke();
        assert.equal(accepted.status, 0, accepted.stderr || accepted.stdout);
        assert.equal(JSON.parse(accepted.stdout).actions[0].status, "executed");
        assert.equal(JSON.parse(fs.readFileSync(state, "utf8")).closed, true);
        return;
      }
      if (outcome === "queued-reviewed-head") {
        const nextHead = "d".repeat(40);
        const readState = () => JSON.parse(fs.readFileSync(state, "utf8"));
        const mergeCount = () => readState().calls.filter((args) => args[0] === "pr" && args[1] === "merge").length;
        fs.writeFileSync(state, JSON.stringify({ ...readState(), head_sha: nextHead }));
        const staleReview = invoke();
        assert.equal(staleReview.status, 0, staleReview.stderr || staleReview.stdout);
        assert.equal(JSON.parse(staleReview.stdout).actions[0].status, "blocked");
        assert.equal(mergeCount(), 1);
        const fixPath = path.join(dir, "fix-execution-report.json");
        const fix = JSON.parse(fs.readFileSync(fixPath, "utf8"));
        fix.actions[0].merge_preflight.head_sha = nextHead;
        fix.actions[0].merge_preflight.codex_review.status = "failed";
        fs.writeFileSync(fixPath, JSON.stringify(fix));
        const failedReview = invoke();
        assert.equal(failedReview.status, 0, failedReview.stderr || failedReview.stdout);
        assert.equal(mergeCount(), 1);
        fix.actions[0].merge_preflight.codex_review.status = "passed";
        fs.writeFileSync(fixPath, JSON.stringify(fix));
        fs.writeFileSync(state, JSON.stringify({ ...readState(), failing_checks: true }));
        const failedChecks = invoke();
        assert.equal(failedChecks.status, 0, failedChecks.stderr || failedChecks.stdout);
        assert.equal(mergeCount(), 1);
        fs.writeFileSync(state, JSON.stringify({ ...readState(), failing_checks: false }));
        const refreshed = invoke();
        assert.equal(refreshed.status, 0, refreshed.stderr || refreshed.stdout);
        assert.equal(mergeCount(), 2);
        assert.equal(JSON.parse(refreshed.stdout).actions[0].expected_head_sha, nextHead);
        const queuedAgain = invoke();
        assert.equal(queuedAgain.status, 0, queuedAgain.stderr || queuedAgain.stdout);
        assert.equal(mergeCount(), 2);
        fs.writeFileSync(state, JSON.stringify({ ...readState(), merged: true }));
        const settled = invoke();
        assert.equal(settled.status, 0, settled.stderr || settled.stdout);
        assert.equal(JSON.parse(settled.stdout).actions[0].status, "executed");
        assert.equal(mergeCount(), 2);
        assert.equal(readState().closed, true);
        return;
      }
      if (outcome === "queued-closed") {
        fs.writeFileSync(state, JSON.stringify({ ...JSON.parse(fs.readFileSync(state, "utf8")), pr_closed: true }));
        const closed = invoke();
        assert.equal(closed.status, 0, closed.stderr || closed.stdout);
        const closedAction = JSON.parse(closed.stdout).actions[0];
        assert.equal(closedAction.status, "blocked");
        assert.equal(closedAction.pending_merge_confirmation, undefined);
        assert.match(closedAction.reason, /closed without merging/);
        assert.equal(JSON.parse(fs.readFileSync(state, "utf8")).closed, false);
        return;
      }
      fs.writeFileSync(state, JSON.stringify({ ...JSON.parse(fs.readFileSync(state, "utf8")), merged: true }));
      const replay = invoke();
      assert.equal(replay.status, 0, replay.stderr || replay.stdout);
      assert.equal(JSON.parse(replay.stdout).actions[0].status, "executed");
      const settled = JSON.parse(fs.readFileSync(state, "utf8"));
      assert.equal(settled.calls.filter((args) => args[0] === "pr" && args[1] === "merge").length, 1);
      assert.equal(settled.closed, true);
    }
  });
}
