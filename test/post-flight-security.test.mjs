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

for (const target of [1, 2]) {
  test(`post-flight quarantines listed ${target === 1 ? "closeout" : "merge"} targets`, (t) => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-post-security-"));
    t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
    const bin = path.join(dir, "bin");
    fs.mkdirSync(bin);
    const statePath = path.join(dir, "state.json");
    fs.writeFileSync(statePath, JSON.stringify({ merged: false, calls: [] }));
    const job = path.join(dir, "job.md");
    fs.writeFileSync(job, `---
repo: openclaw/openclaw
cluster_id: security-post-flight
mode: autonomous
allowed_actions:
  - merge
  - close
  - comment
  - label
candidates:
  - "#1"
  - "#2"
security_signal_refs:
  - "#${target}"
allow_merge: true
allow_post_merge_close: true
---
Synthetic security quarantine regression.
`);
    const resultPath = path.join(dir, "result.json");
    fs.writeFileSync(resultPath, JSON.stringify({
      repo: "openclaw/openclaw", cluster_id: "security-post-flight", mode: "autonomous",
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
let response;
if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/pulls/2") {
  response = { number: 2, state: state.merged ? "closed" : "open", head: { sha: "${head}" }, base: { ref: "main" },
    merged_at: state.merged ? "2026-10-09T00:00:00Z" : null, merge_commit_sha: "${commit}" };
} else if (args[0] === "pr" && args[1] === "view") {
  response = { baseRefName: "main", headRefOid: "${head}", mergeable: "MERGEABLE", mergeStateStatus: "CLEAN",
    statusCheckRollup: [{ name: "CI", status: "COMPLETED", conclusion: "SUCCESS" }] };
} else if (args[0] === "api" && args[1].endsWith("git/ref/heads/main")) {
  response = { object: { sha: "${base}" } };
} else if (args[0] === "api" && args[1] === "graphql") {
  response = { data: { repository: { pullRequest: { reviewThreads: { nodes: [], pageInfo: { hasNextPage: false } } } } } };
} else if (args[0] === "api" && args[1].includes("/comments?")) {
  response = "";
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/issues/1") {
  response = { number: 1, state: "open", labels: [] };
} else if (args[0] === "pr" && args[1] === "merge") {
  state.merged = true;
} else {
  console.error("unexpected fixture invocation", args);
  process.exit(1);
}
fs.writeFileSync(process.env.FIXTURE_STATE, JSON.stringify(state));
if (response !== undefined) process.stdout.write(typeof response === "string" ? response : JSON.stringify(response));
`, { mode: 0o755 });
    const child = spawnSync(process.execPath, [path.join(root, "scripts/post-flight.mjs"), job, resultPath], {
      encoding: "utf8", timeout: 30000,
      env: {
        PATH: `${bin}${path.delimiter}${path.dirname(process.execPath)}:/usr/bin:/bin`,
        CLOWNFISH_ALLOW_EXECUTE: "1", CLOWNFISH_ALLOW_MERGE: "1", CLOWNFISH_POST_FLIGHT_WAIT_MS: "0",
        FIXTURE_STATE: statePath,
      },
    });
    assert.equal(child.status, 0, child.stderr || child.stdout);
    const report = JSON.parse(fs.readFileSync(path.join(dir, "post-flight-report.json"), "utf8"));
    const blocked = report.actions.find((action) => action.action === (target === 1 ? "post_merge_closeout" : "finalize_fix_pr"));
    assert.equal(blocked.status, "blocked");
    assert.match(blocked.reason, /security-sensitive/);
    const { calls, merged } = JSON.parse(fs.readFileSync(statePath, "utf8"));
    assert.equal(merged, target === 1);
    assert.equal(calls.some((args) => args[0] === "issue" && ["close", "comment", "edit"].includes(args[1])), false);
  });
}
