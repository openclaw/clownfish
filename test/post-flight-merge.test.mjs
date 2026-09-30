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

for (const outcome of ["queued", "missing-sha", "invalid-sha", "confirmed", "already-missing-sha", "already-confirmed"]) {
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
let response;
if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/pulls/2") {
  response = { number: 2, state: state.merged ? "closed" : "open", head: { sha: "${head}" }, base: { ref: "main" },
    merged_at: state.merged ? "2026-09-26T00:00:00Z" : null,
    merge_commit_sha: outcome.includes("missing-sha") ? null : outcome === "invalid-sha" ? "abc" : "${commit}" };
} else if (args[0] === "pr" && args[1] === "view") {
  response = { baseRefName: "main", mergeable: "MERGEABLE", mergeStateStatus: "CLEAN",
    mergedAt: state.merged ? "2026-09-26T00:00:00Z" : null,
    mergeCommit: outcome.includes("missing-sha") ? null : { oid: "${commit}" },
    statusCheckRollup: [{ name: "CI", status: "COMPLETED", conclusion: "SUCCESS" }] };
} else if (args[0] === "api" && args[1].endsWith("git/ref/heads/main")) {
  response = { object: { sha: "${base}" } };
} else if (args[0] === "api" && args[1] === "graphql") {
  response = { data: { repository: { pullRequest: { reviewThreads: { nodes: [], pageInfo: { hasNextPage: false } } } } } };
} else if (args[0] === "api" && args[1].includes("/comments?")) {
  response = "";
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/issues/1") {
  response = { state: state.closed ? "closed" : "open", labels: [] };
} else if (args[0] === "pr" && args[1] === "merge") {
  state.merged = outcome !== "queued";
} else if (args[0] === "issue" && args[1] === "close") {
  state.closed = true;
} else if (!(args[0] === "issue" && ["edit", "comment"].includes(args[1]))) {
  console.error("unexpected fixture invocation", args);
  process.exit(1);
}
fs.writeFileSync(process.env.FIXTURE_STATE, JSON.stringify(state));
if (response !== undefined) process.stdout.write(typeof response === "string" ? response : JSON.stringify(response));
`, { mode: 0o755 });
    const run = spawnSync(process.execPath, [path.join(root, "scripts/post-flight.mjs"), job, result], {
      encoding: "utf8", timeout: 30000,
      env: {
        PATH: `${bin}${path.delimiter}${path.dirname(process.execPath)}:/usr/bin:/bin`,
        CLOWNFISH_ALLOW_EXECUTE: "1", CLOWNFISH_ALLOW_MERGE: "1", CLOWNFISH_POST_FLIGHT_WAIT_MS: "0",
        FIXTURE_STATE: state, FIXTURE_OUTCOME: outcome,
      },
    });
    assert.equal(run.status, 0, run.stderr || run.stdout);
    const report = JSON.parse(run.stdout);
    const after = JSON.parse(fs.readFileSync(state, "utf8"));
    const confirmed = outcome === "confirmed" || outcome === "already-confirmed";
    assert.equal(report.actions[0].status, confirmed ? "executed" : "blocked");
    assert.equal(after.closed, confirmed);
    assert.equal(after.calls.filter((args) => args[0] === "issue" && args[1] === "comment").length, confirmed ? 1 : 0);
    assert.equal(after.calls.filter((args) => args[0] === "pr" && args[1] === "merge").length, outcome.startsWith("already-") ? 0 : 1);
    if (confirmed) assert.equal(report.actions[0].merge_commit_sha, commit);
    else assert.equal(report.actions.length, 1);
  });
}
