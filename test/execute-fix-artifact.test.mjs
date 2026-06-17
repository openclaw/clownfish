import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("execute-fix-artifact gives every Codex subprocess an explicit stdout buffer", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");
  const codexSpawnCount = source.match(/spawnSync\(\s*\n\s*"codex"/g)?.length ?? 0;
  const codexMaxBufferCount = source.match(/maxBuffer:\s*codexStdoutMaxBufferBytes/g)?.length ?? 0;

  assert.equal(codexSpawnCount, 5);
  assert.equal(codexMaxBufferCount, codexSpawnCount);
  assert.match(source, /CLOWNFISH_CODEX_STDOUT_MAX_BUFFER_BYTES/);
  assert.match(source, /child\.error\?\.code === "ENOBUFS"/);
});

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
        CLOWNFISH_FIX_STEP_TIMEOUT_MS: "70000",
        CLOWNFISH_FIX_TIMEOUT_RESERVE_MS: "0",
        CLOWNFISH_FIX_REPORT_RESERVE_MS: "0",
        CLOWNFISH_INSTALL_TARGET_DEPS: "0",
        CLOWNFISH_SKIP_CODEX_WRITE_PREFLIGHT: "1",
        CLOWNFISH_CODEX_REVIEW_ATTEMPTS: "1",
      },
    },
  );

  assert.equal(child.status, 0, child.stderr || child.stdout);

  const stdoutSummary = JSON.parse(child.stdout);
  assert.deepEqual(stdoutSummary, {
    repo: "openclaw/openclaw",
    cluster_id: "deadline-cluster",
    status: "blocked",
    dry_run: false,
    report_file: "fix-execution-report.json",
    action_count: 1,
  });
  assert.doesNotMatch(child.stdout, /fix execution deadline exceeded/);

  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.status, "blocked");
  assert.equal(report.actions.length, 1);
  assert.equal(report.actions[0].action, "open_fix_pr", JSON.stringify(report, null, 2));
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

test("execute-fix-artifact routes rebased fork repairs to replacement before expensive work", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");
  const guardIndex = source.indexOf("CLOWNFISH_ALLOW_REBASED_FORK_REPAIR");
  const toolchainIndex = source.indexOf("prepareTargetToolchain(targetDir);");

  assert.notEqual(guardIndex, -1);
  assert.notEqual(toolchainIndex, -1);
  assert.ok(guardIndex < toolchainIndex);
  assert.match(source, /fork branch requiring rebase/);
});

test("execute-fix-artifact validates a successful repair rebase without speculative edits", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(
    source,
    /mode: "repair",\s*baseBranch,\s*\/\/ A successful rebase[\s\S]*?allowExistingChanges: rebased,/,
  );
});

test("execute-fix-artifact defers a broad scope block only for explicit rebase-only repairs", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(source, /const rebaseOnlyRepair = job\.frontmatter\.rebase_only === true;/);
  assert.match(source, /const rebaseOnlyBlock = validateRebaseOnlyRepair\(\{ job, fixArtifact \}\);/);
  assert.match(
    source,
    /function executeRepairBranch\(\{ fixArtifact, targetDir, scopeBlock = null, rebaseOnly = false, ensureCodexWritePreflight \}\)/,
  );
  assert.match(source, /if \(!rebased && \(scopeBlock \|\| rebaseOnly\)\)/);
});

test("execute-fix-artifact makes rebase-only repair a no-generated-edit path", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(source, /if \(!rebased && \(scopeBlock \|\| rebaseOnly\)\)/);
  assert.match(source, /allowReviewFixes: !rebaseOnly,/);
  assert.match(source, /if \(!allowReviewFixes \|\| attempt === maxReviewAttempts\) break;/);
  assert.match(source, /if \(rebaseOnlyRepair\) \{\s*outcome = \{\s*action: "repair_contributor_branch",\s*status: "blocked",/);
  assert.match(source, /rebase-only repair does not resolve review threads/);
  assert.match(source, /if \(!rebaseOnly\) \{\s*const comment = repairContributorBranchComment/);
  assert.match(source, /function validateRebaseOnlyRepair\(\{ job, fixArtifact \}\)/);
});

test("execute-fix-artifact bounds and traces rebase-only repair execution", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(source, /CLOWNFISH_REBASE_ONLY_FIX_STEP_TIMEOUT_MS/);
  assert.match(source, /CLOWNFISH_REBASE_ONLY_REVIEW_TIMEOUT_MS/);
  assert.match(source, /CLOWNFISH_REBASE_ONLY_FIX_STEP_TIMEOUT_MS \?\? 25 \* 60 \* 1000/);
  assert.match(source, /if \(rebaseOnlyRepair\) \{\s*fixStepDeadlineAtMs = Math\.min/);
  assert.match(source, /function noteFixStage\(stage, details = \{\}\)/);
  assert.match(source, /event: "projectclownfish_fix_stage"/);
  assert.match(source, /console\.error\(/);
  assert.match(source, /rebase-only repair defers Codex write preflight/);
  assert.match(source, /ensureCodexWritePreflight\?\.\(\);/);
  assert.match(source, /validation_command_start/);
  assert.match(source, /codex_review_start/);
  assert.match(source, /refreshBaseBeforeReview: rebaseOnly/);
  assert.match(source, /noteFixStage\("base_refresh_before_review"/);
  assert.match(source, /refreshBaseBeforeReview && branch && refreshValidatedBranchBase/);
  assert.match(source, /do not rerun pnpm, npm, corepack, test, lint, build, or other validation commands/);
  assert.match(source, /may run the minimum read-only `gh pr view` or `gh api` query needed to satisfy them/);
  assert.match(source, /do not mutate GitHub: do not push, comment, review, label, close, merge, assign, or change any remote state/);
});

test("execute-fix-artifact retries transient GitHub reads before branch repair", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(source, /const maxGithubReadAttempts = .*CLOWNFISH_GITHUB_READ_ATTEMPTS/);
  assert.match(source, /function fetchPullRequest\(number\)[\s\S]*runGithubReadWithRetry/);
  assert.match(source, /function runGithubReadWithRetry\(commandArgs, options = \{\}\)/);
  assert.match(source, /function isRetryableGithubReadError\(error\)/);
  assert.match(source, /HTTP\\s\+\(\?:408\|429\|5\\d\\d\)/);
});

test("execute-fix-artifact fetches contributor repair heads through the base PR ref", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");
  const repairFetch = source.match(
    /function executeRepairBranch\([\s\S]*?run\("git", \["checkout", branch\]/,
  )?.[0];

  assert.match(
    repairFetch,
    /\["fetch", "--no-tags", "origin", `refs\/pull\/\$\{sourcePr\.number\}\/head:\$\{branch\}`\]/,
  );
  assert.doesNotMatch(repairFetch, /https:\/\/github\.com\/\$\{pull\.head\.repo\.full_name\}\.git/);
});

test("execute-fix-artifact rejects review-fix workers that leave no diff", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(source, /function runCodexReviewFix/);
  assert.match(source, /reviewFixBase = run\("git", \["rev-parse", "HEAD"\]/);
  assert.match(source, /\["diff", "--quiet", reviewFixBase, "--"\]/);
  assert.match(source, /Codex review-fix worker produced no target repo changes while findings remained/);
  assert.match(source, /onReviewFix\?\.\(attempt, reviewFix\)/);
  assert.match(source, /else if \(reviewFix\.head_changed\)/);
});

test("execute-fix-artifact preserves failed validation diagnostics in the uploaded debug artifacts", () => {
  const fixture = makeFixture();
  const resultPath = path.join(fixture.runDir, "result.json");
  const reportPath = path.join(fixture.runDir, "fix-execution-report.json");

  fs.writeFileSync(fixture.jobPath, jobFile("validation-debug-cluster"));
  fs.writeFileSync(
    resultPath,
    `${JSON.stringify(
      {
        ...resultFile("validation-debug-cluster"),
        fix_artifact: {
          ...resultFile("validation-debug-cluster").fix_artifact,
          validation_commands: ["pnpm check:changed"],
        },
      },
      null,
      2,
    )}\n`,
  );
  writeExecutable(
    path.join(fixture.binDir, "codex"),
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
const cd = args[args.indexOf("--cd") + 1];
const output = args.includes("--output-last-message") ? args[args.indexOf("--output-last-message") + 1] : "";
fs.appendFileSync(path.join(cd, "src", "app.js"), "\\n// ProjectClownfish validation debug edit\\n");
if (output) fs.writeFileSync(output, "edited\\n");
`,
  );
  writeExecutable(
    path.join(fixture.binDir, "pnpm"),
    `#!/usr/bin/env node
console.log("validation stdout token=ghp_abcdefghijklmnopqrstuvwxyz123456");
console.error("validation stderr api_key=should-not-leak");
process.exit(9);
`,
  );

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
        CLOWNFISH_FIX_STEP_TIMEOUT_MS: "120000",
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
  assert.match(report.actions[0].reason, /validation command failed/);
  assert.match(report.debug_artifacts, /fix-executor-debug$/);

  const diagnostics = JSON.parse(
    fs.readFileSync(path.join(fixture.runDir, "fix-executor-debug", "validation-command-001.json"), "utf8"),
  );
  assert.equal(diagnostics.command, "pnpm check:changed");
  assert.equal(diagnostics.exit_code, 9);
  assert.equal(diagnostics.timed_out, false);
  assert.match(diagnostics.stdout, /validation stdout token=\[redacted\]/);
  assert.match(diagnostics.stderr, /api_key=\[redacted\]/);
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
Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 10000);
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
      validation_commands: [
        'pnpm test:serial src/app.js -t "previewRemHarness|skips REM short-term candidates whose source file disappeared"',
        "pnpm check:changed",
      ],
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
