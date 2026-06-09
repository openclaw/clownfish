import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("execute-fix-artifact preserves recoverable replacement branch when review deadline blocks", () => {
  const fixture = makeFixture();
  const resultPath = path.join(fixture.runDir, "result.json");
  const reportPath = path.join(fixture.runDir, "fix-execution-report.json");

  fs.writeFileSync(fixture.jobPath, jobFile("deadline-cluster"));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultFile("deadline-cluster"), null, 2)}\n`);

  const child = spawnSync(
    process.execPath,
    [
      "scripts/execute-fix-artifact.mjs",
      fixture.jobPath,
      resultPath,
      "--target-dir",
      fixture.targetDir,
      "--work-dir",
      fixture.workDir,
      "--report",
      reportPath,
    ],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
        CLOWNFISH_ALLOW_EXECUTE: "1",
        CLOWNFISH_ALLOW_FIX_PR: "1",
        CLOWNFISH_FIX_STEP_TIMEOUT_MS: "61000",
        CLOWNFISH_FIX_TIMEOUT_RESERVE_MS: "0",
        CLOWNFISH_FIX_REPORT_RESERVE_MS: "0",
        CLOWNFISH_INSTALL_TARGET_DEPS: "0",
        CLOWNFISH_SKIP_CODEX_WRITE_PREFLIGHT: "1",
        CLOWNFISH_CODEX_REVIEW_ATTEMPTS: "1",
      },
    },
  );

  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.status, "blocked");
  assert.equal(report.actions.length, 1);
  assert.equal(report.actions[0].action, "open_fix_pr");
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].branch, "clownfish/deadline-cluster");
  assert.equal(report.actions[0].repair_strategy, "new_fix_pr");
  assert.equal(report.actions[0].recoverable_branch_pushed, true);
  assert.equal(report.actions[0].retry_recommended, true);
  assert.match(report.actions[0].reason, /fix execution deadline exceeded before Codex \/review/);
  assert.match(report.actions[0].commit, /^[0-9a-f]{40}$/);
  assert.deepEqual(report.actions[0].checkpoint_commits, [report.actions[0].commit]);

  const remoteBranch = git(["ls-remote", "--heads", fixture.originDir, "clownfish/deadline-cluster"], {
    cwd: fixture.root,
  });
  assert.match(remoteBranch, new RegExp(`^${report.actions[0].commit}\\s+refs/heads/clownfish/deadline-cluster`));
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-fix-exec-"));
  const binDir = path.join(root, "bin");
  const runDir = path.join(root, "run");
  const workDir = path.join(root, "work");
  const seedDir = path.join(root, "seed");
  const originDir = path.join(root, "origin.git");
  const targetDir = path.join(root, "target");
  fs.mkdirSync(binDir, { recursive: true });
  fs.mkdirSync(runDir, { recursive: true });
  fs.mkdirSync(workDir, { recursive: true });
  writeStubs(binDir);

  git(["init", "--bare", originDir], { cwd: root });
  git(["init", "-b", "main", seedDir], { cwd: root });
  git(["config", "user.name", "Test User"], { cwd: seedDir });
  git(["config", "user.email", "test@example.com"], { cwd: seedDir });
  fs.mkdirSync(path.join(seedDir, "src"), { recursive: true });
  fs.writeFileSync(
    path.join(seedDir, "package.json"),
    `${JSON.stringify({ scripts: { "check:changed": "node scripts/check-changed.mjs" } }, null, 2)}\n`,
  );
  fs.writeFileSync(path.join(seedDir, "src", "app.js"), "export const value = 1;\n");
  git(["add", "."], { cwd: seedDir });
  git(["commit", "-m", "initial"], { cwd: seedDir });
  git(["remote", "add", "origin", originDir], { cwd: seedDir });
  git(["push", "-u", "origin", "main"], { cwd: seedDir });
  git(["clone", originDir, targetDir], { cwd: root });
  git(["checkout", "main"], { cwd: targetDir });

  return {
    root,
    binDir,
    runDir,
    workDir,
    originDir,
    targetDir,
    jobPath: path.join(root, "job.md"),
  };
}

function writeStubs(binDir) {
  writeExecutable(
    path.join(binDir, "codex"),
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
if (args.includes("--output-schema")) {
  console.error("review should not run after the deadline check");
  process.exit(42);
}
const cd = args[args.indexOf("--cd") + 1];
const output = args.includes("--output-last-message") ? args[args.indexOf("--output-last-message") + 1] : "";
Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 2500);
fs.appendFileSync(path.join(cd, "src", "app.js"), "\\n// ProjectClownfish test edit\\n");
if (output) fs.writeFileSync(output, "edited\\n");
`,
  );
  writeExecutable(
    path.join(binDir, "gh"),
    `#!/usr/bin/env node
const args = process.argv.slice(2);
if (args[0] === "auth" && args[1] === "setup-git") process.exit(0);
if (args[0] === "pr" && args[1] === "list") {
  console.log("[]");
  process.exit(0);
}
console.error("unexpected gh call: " + args.join(" "));
process.exit(2);
`,
  );
  writeExecutable(
    path.join(binDir, "pnpm"),
    `#!/usr/bin/env node
process.exit(0);
`,
  );
}

function writeExecutable(filePath, content) {
  fs.writeFileSync(filePath, content);
  fs.chmodSync(filePath, 0o755);
}

function jobFile(clusterId) {
  return `---
repo: openclaw/openclaw
cluster_id: ${clusterId}
mode: autonomous
allowed_actions:
  - comment
  - label
  - fix
  - raise_pr
blocked_actions:
  - close
  - merge
require_human_for:
  - close
  - merge
canonical: []
candidates:
  - "#1"
cluster_refs:
  - "#1"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: false
security_policy: central_security_only
security_sensitive: false
---

# Deadline test job
`;
}

function resultFile(clusterId) {
  return {
    status: "planned",
    repo: "openclaw/openclaw",
    cluster_id: clusterId,
    mode: "autonomous",
    summary: "open a replacement fix PR",
    actions: [{ action: "open_fix_pr", status: "planned", target: `cluster:${clusterId}` }],
    needs_human: [],
    fix_artifact: {
      summary: "Make a narrow test edit.",
      pr_title: "fix: preserve recoverable branch metadata",
      pr_body: "Test replacement PR body.",
      affected_surfaces: ["src"],
      likely_files: ["src/app.js"],
      linked_refs: ["#1"],
      validation_commands: ["pnpm check:changed"],
      credit_notes: ["No external contributor credit for this test."],
      changelog_required: false,
      repair_strategy: "new_fix_pr",
    },
  };
}

function git(args, options) {
  const child = spawnSync("git", args, { encoding: "utf8", ...options });
  assert.equal(child.status, 0, child.stderr || child.stdout);
  return child.stdout.trim();
}
