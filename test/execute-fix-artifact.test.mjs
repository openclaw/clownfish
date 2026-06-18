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

  assert.equal(codexSpawnCount, 6);
  assert.equal(codexMaxBufferCount, codexSpawnCount);
  assert.match(source, /CLOWNFISH_CODEX_STDOUT_MAX_BUFFER_BYTES/);
  assert.match(source, /child\.error\?\.code === "ENOBUFS"/);
});

test("execute-fix-artifact reserves broad validation and review for the executor", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(source, /this is an edit turn, not a handoff or final validation turn/);
  assert.match(source, /do not run `pnpm check:changed`, `\.agents\/skills\/autoreview`, or broad lint\/build\/test\/review commands/);
  assert.match(source, /validation_commands in the repository context are executor-managed requirements/);
});

test("execute-fix-artifact bounds auxiliary GitHub and git subprocesses by the fix deadline", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");
  const workflow = fs.readFileSync(path.join(repoRoot, ".github", "workflows", "cluster-worker.yml"), "utf8");

  assert.match(source, /function runStatus\([\s\S]*?remainingFixExecutionMs/);
  assert.match(source, /function remoteBranchSha\([\s\S]*?runStatus\("git", \["ls-remote"/);
  assert.match(source, /function pushRecoverableBranch\([\s\S]*?const pushed = runStatus\("git", args/);
  assert.match(source, /function fetchRemoteRecoverableBranch\([\s\S]*?runStatus\("git", \["fetch", "origin"/);
  assert.match(source, /function closeSupersededSourcePr\([\s\S]*?const closed = runStatus\("gh", \["pr", "close"/);
  assert.match(
    workflow,
    /- name: Execute credited fix artifact[\s\S]*?timeout-minutes: 30[\s\S]*?run: npm run execute-fix/,
  );
});

test("execute-fix-artifact clears a partial clone before retrying with the write token", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(
    source,
    /function ensureTargetCheckout\([\s\S]*?catch \(error\) \{[\s\S]*?removeIncompleteTargetCheckout\(targetDir\);[\s\S]*?run\("gh", \["repo", "clone", repo, targetDir/,
  );
  assert.match(
    source,
    /function removeIncompleteTargetCheckout\(targetDir\) \{[\s\S]*?fs\.rmSync\(targetDir, \{ recursive: true, force: true, maxRetries: 3, retryDelay: 100 \}\);/,
  );
});

test("execute-fix-artifact skips blocked worker results before invoking Codex or mutating", () => {
  const fixture = makeFixture();
  const resultPath = path.join(fixture.runDir, "result.json");
  const reportPath = path.join(fixture.runDir, "fix-execution-report.json");
  const codexMarker = path.join(fixture.root, "codex-invoked");

  fs.writeFileSync(fixture.jobPath, jobFile("blocked-result-cluster"));
  fs.writeFileSync(
    resultPath,
    `${JSON.stringify(
      {
        ...resultFile("blocked-result-cluster"),
        status: "blocked",
        actions: [
          { action: "fix_needed", status: "planned", target: "cluster:blocked-result-cluster" },
          { action: "build_fix_artifact", status: "planned", target: "cluster:blocked-result-cluster" },
        ],
      },
      null,
      2,
    )}\n`,
  );
  writeExecutable(
    path.join(fixture.binDir, "codex"),
    `#!/usr/bin/env node
require("node:fs").writeFileSync(${JSON.stringify(codexMarker)}, "invoked\\n");
process.exit(99);
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
      },
    },
  );

  assert.equal(child.status, 0, child.stderr || child.stdout);
  assert.equal(fs.existsSync(codexMarker), false);
  assert.equal(git(["status", "--porcelain"], { cwd: fixture.targetDir }), "");
  assert.equal(git(["ls-remote", "--heads", fixture.originDir, "clownfish/blocked-result-cluster"], { cwd: fixture.root }), "");

  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.status, "skipped");
  assert.equal(report.reason, "worker result status blocked is not executable");
  assert.deepEqual(report.actions, [
    {
      action: "execute_fix",
      status: "skipped",
      reason: "worker result status blocked is not executable",
    },
  ]);
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

test("execute-fix-artifact runs ordinary contributor repairs after a successful rebase", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(
    source,
    /mode: "repair",\s*baseBranch,\s*\/\/ Only explicit rebase-only jobs[\s\S]*?allowExistingChanges: rebaseOnly && rebased,/,
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

test("execute-fix-artifact permits narrow config-and-test repairs", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(source, /const mixedFeatureScope = likelyFiles\.length > 4 && crossSurfaceCount >= 3;/);
  assert.match(source, /!tooManyFiles && !tooManySurfaces && !mixedFeatureScope/);
});

test("execute-fix-artifact makes rebase-only repair a no-generated-edit path", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(source, /if \(!rebased && \(scopeBlock \|\| rebaseOnly\)\)/);
  assert.match(source, /allowReviewFixes: !rebaseOnly,/);
  assert.match(source, /if \(!allowReviewFixes \|\| attempt === maxReviewAttempts\) break;/);
  assert.match(
    source,
    /if \(rebaseOnlyRepair\) \{\s*const reason = `rebase-only repair stopped: \$\{error\.message\}`;[\s\S]*?outcome = \{\s*action: "repair_contributor_branch",\s*status: "blocked",/,
  );
  assert.match(source, /rebase-only repair does not resolve review threads/);
  assert.match(source, /if \(!rebaseOnly\) \{\s*const comment = repairContributorBranchComment/);
  assert.match(source, /function validateRebaseOnlyRepair\(\{ job, fixArtifact \}\)/);
  assert.match(
    source,
    /if \(rebaseOnlyRepair\) \{\s*const reason = `rebase-only repair stopped: \$\{error\.message\}`;[\s\S]*?\.{3}sourceHeadFetchFailureFields\(error\.message\)/,
  );
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
  assert.match(source, /function listOpenClownfishPrAreas\(\{ targetDir \}\)[\s\S]*?runGithubReadWithRetry/);
  assert.match(source, /function fetchPullRequestFilePaths\(\{ targetDir, number \}\)[\s\S]*?runGithubReadWithRetry/);
  assert.match(source, /function runGithubReadWithRetry\(commandArgs, options = \{\}\)/);
  assert.match(source, /function isRetryableGithubReadError\(error\)/);
  assert.match(source, /HTTP\\s\+\(\?:408\|429\|5\\d\\d\)/);
});

test("execute-fix-artifact records stale replacement branches as audited no-ops", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(source, /function executeReplacementBranch\([\s\S]*?const existingPrUrl = findOpenPullRequestForBranch\(branch, targetDir\);/);
  assert.match(source, /if \(!existingPrUrl && !branchHasBaseDiff\(\{ targetDir, baseBranch \}\)\)/);
  assert.match(source, /status: "skipped",\s*code: "no_diff_from_base"/);
  assert.match(source, /existingPrUrl \|\|\s*run\(\s*"gh",\s*\["pr", "create"/);
});

test("execute-fix-artifact writes a report before unknown executor failures escape", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");

  assert.match(
    source,
    /report\.status = "failed";[\s\S]*?report\.actions\.push\([\s\S]*?status: "failed",[\s\S]*?writeReport\(report, resultPath\);\s*throw error;/,
  );
});

test("execute-fix-artifact bounds and verifies contributor repair head fetches", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "execute-fix-artifact.mjs"), "utf8");
  const repairFetch = source.match(
    /function executeRepairBranch\([\s\S]*?run\("git", \["checkout", branch\]/,
  )?.[0];

  assert.match(source, /process\.env\.CLOWNFISH_FIX_FETCH_TIMEOUT_MS/);
  assert.match(source, /process\.env\.CLOWNFISH_FIX_FETCH_ATTEMPTS/);
  assert.match(source, /function boundedPositiveIntegerEnv\(value, fallback, \{ min, max \}\)/);
  assert.match(source, /Number\.isInteger\(parsed\)/);
  assert.match(source, /\{ min: 10 \* 1000, max: 5 \* 60 \* 1000 \}/);
  assert.match(source, /function fetchContributorPullHead\(\{ targetDir, sourcePr, pull, branch \}\)/);
  assert.match(source, /function contributorHeadFetchStrategies\(\{ sourcePr, pull \}\)/);
  assert.match(source, /name: "base_pull_ref"/);
  assert.match(source, /name: "same_repo_head_ref"/);
  assert.match(source, /name: "fork_head_ref"/);
  assert.match(source, /remote: `https:\/\/github\.com\/\$\{pull\.head\.repo\.full_name\}\.git`/);
  assert.match(source, /source_remote: true/);
  assert.match(source, /strategies\[\(attempt - 1\) % strategies\.length\]/);
  assert.match(source, /function ensureContributorFetchRemote\(\{ targetDir, sourcePr, strategy \}\)/);
  assert.match(source, /"remote", "add", remote, strategy\.remote/);
  assert.match(source, /`remote\.\$\{remote\}\.promisor`, "true"/);
  assert.match(source, /`remote\.\$\{remote\}\.partialclonefilter`, "blob:none"/);
  assert.match(source, /"--filter=blob:none"/);
  assert.match(source, /\["repo", "clone", repo, targetDir, "--", "--depth=1", "--filter=blob:none"\]/);
  assert.match(source, /GIT_TERMINAL_PROMPT: "0"/);
  assert.match(source, /"credential\.interactive=false"/);
  assert.match(source, /"http\.lowSpeedLimit=1"/);
  assert.match(source, /"http\.lowSpeedTime=30"/);
  assert.match(source, /source_pr_head_fetch_start/);
  assert.match(source, /source_pr_head_fetch_complete/);
  assert.match(source, /source_pr_head_fetch_failed/);
  assert.match(source, /function sourceHeadFetchFailureFields\(reason\)/);
  assert.match(source, /code: "source_pr_head_fetch_failed"/);
  assert.match(
    repairFetch,
    /fetchContributorPullHead\(\{\s*targetDir,\s*sourcePr,\s*pull,\s*branch,\s*\}\)/,
  );
  assert.match(repairFetch, /if \(!dryRun\) ghAuthSetupGit\(targetDir\);[\s\S]*?fetchContributorPullHead/);
  assert.match(source, /if \(!sameRepoBranch && !dryRun\) \{\s*assertRepairBranchWritable/);
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
  assert.equal(diagnostics.command, "pnpm check:changed -- src/app.js");
  assert.equal(diagnostics.exit_code, 9);
  assert.equal(diagnostics.timed_out, false);
  assert.match(diagnostics.stdout, /validation stdout token=\[redacted\]/);
  assert.match(diagnostics.stderr, /api_key=\[redacted\]/);
});

test("execute-fix-artifact repairs an ordinary validation exit failure within the edit budget", () => {
  const fixture = makeFixture();
  const resultPath = path.join(fixture.runDir, "result.json");
  const reportPath = path.join(fixture.runDir, "fix-execution-report.json");
  const editMarker = path.join(fixture.root, "codex-edit-calls");
  const validationPrompt = path.join(fixture.root, "validation-fix-prompt");

  fs.writeFileSync(fixture.jobPath, jobFile("validation-repair-cluster"));
  const result = resultFile("validation-repair-cluster");
  result.fix_artifact.validation_commands = ["pnpm check:changed"];
  fs.writeFileSync(resultPath, `${JSON.stringify(result, null, 2)}\n`);
  writeExecutable(
    path.join(fixture.binDir, "codex"),
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
const cd = args[args.indexOf("--cd") + 1];
const output = args.includes("--output-last-message") ? args[args.indexOf("--output-last-message") + 1] : "";
if (args.includes("--output-schema")) {
  fs.writeFileSync(output, JSON.stringify({
    status: "passed",
    summary: "clean",
    findings: [],
    findings_addressed: true,
    evidence: ["fixture review passed"],
  }));
  process.exit(0);
}
const marker = ${JSON.stringify(editMarker)};
const count = fs.existsSync(marker) ? Number(fs.readFileSync(marker, "utf8")) : 0;
fs.writeFileSync(marker, String(count + 1));
if (count === 0) {
  fs.writeFileSync(path.join(cd, "src", "app.js"), "export const fixture = invalid;\\n");
  fs.writeFileSync(path.join(cd, ".clownfish-edited"), "true\\n");
} else {
  fs.writeFileSync(${JSON.stringify(validationPrompt)}, fs.readFileSync(0, "utf8"));
  fs.writeFileSync(path.join(cd, "src", "app.js"), "export const fixture = true;\\n");
}
if (output) fs.writeFileSync(output, "edited\\n");
`,
  );
  writeExecutable(
    path.join(fixture.binDir, "pnpm"),
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
if (args[0] !== "check:changed") process.exit(0);
const source = fs.readFileSync(path.join(process.cwd(), "src", "app.js"), "utf8");
if (source.includes("invalid")) {
  console.error("\\u001b[4m" + path.join(process.cwd(), "src", "app.js") + "\\u001b[0m");
  console.error("  \\u001b[2m1:24\\u001b[0m  \\u001b[31merror\\u001b[0m  Expected { after 'if' condition.  \\u001b[2meslint(curly)\\u001b[0m");
  console.error("\\u001b[31m✖ 1 problem (1 error, 0 warnings)\\u001b[0m");
  console.error("[ELIFECYCLE] Command failed with exit code 1.");
  process.exit(1);
}
process.exit(0);
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
      "--dry-run",
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
        CLOWNFISH_FIX_EDIT_ATTEMPTS: "2",
        CLOWNFISH_CODEX_REVIEW_ATTEMPTS: "1",
      },
    },
  );

  assert.equal(child.status, 0, child.stderr || child.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.status, "planned");
  assert.equal(fs.readFileSync(editMarker, "utf8"), "2");
  const prompt = fs.readFileSync(validationPrompt, "utf8");
  assert.match(prompt, /Failed validation command: pnpm check:changed/);
  assert.match(prompt, /Expected \{ after 'if' condition/);
});

test("execute-fix-artifact tolerates unchanged baseline changed-gate diagnostics only after changed-test proof", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "baseline-diagnostic-cluster",
    baselineOutput: "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
    postOutput: "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "planned");
  assert.deepEqual(run.report.changed_gate_baseline, {
    command: "pnpm check:changed -- src/app.js",
    status: "failed",
    paths: ["src/app.js"],
    eligible: true,
    diagnostic_count: 1,
    unparsed_failure_count: 0,
    has_test_failure: false,
  });
  assert.equal(fs.readFileSync(run.targetedTestMarker, "utf8").trim(), "test:serial src/app.test.js");

  const baselineDebug = JSON.parse(
    fs.readFileSync(path.join(run.fixture.runDir, "fix-executor-debug", "validation-command-001.json"), "utf8"),
  );
  assert.equal(baselineDebug.phase, "baseline");
  assert.deepEqual(baselineDebug.argv, ["pnpm", "check:changed", "--", "src/app.js"]);
  assert.equal(baselineDebug.exit_code, 1);
});

test("execute-fix-artifact gives eligible baseline diagnostics to the initial repair worker", () => {
  const output = [
    "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
    "[ELIFECYCLE] Command failed with exit code 2.",
    "5.81s  failed:2   typecheck core",
  ].join("\n");
  const run = runBaselineChangedGateFixture({
    clusterId: "baseline-diagnostic-prompt-cluster",
    baselineOutput: output,
    postOutput: output,
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  const prompt = fs.readFileSync(run.initialPrompt, "utf8");
  assert.match(prompt, /Existing changed-gate baseline diagnostics:/);
  assert.match(prompt, /src\/web-search\/runtime\.ts\(374,10\): TS6133/);
});

test("execute-fix-artifact tolerates unchanged baseline changed-gate diagnostics for source-only repairs", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "baseline-source-only-cluster",
    baselineOutput: "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
    postOutput: "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
    editedFile: "src/app.js",
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "planned");
  assert.equal(fs.existsSync(run.targetedTestMarker), false);
});

test("execute-fix-artifact does not repeat a tolerated changed gate for normalized validation commands", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "deduplicated-changed-gate-cluster",
    baselineOutput: "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
    postOutput: "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
    validationCommands: ["pnpm test:serial src/app.test.js", "pnpm check:changed"],
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "planned");
  assert.equal(fs.readFileSync(run.changedGateMarker, "utf8").trim(), "2");
});

test("execute-fix-artifact accepts the allowed OpenClaw env prefixes for changed validation", () => {
  const output = "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.";
  const run = runBaselineChangedGateFixture({
    clusterId: "openclaw-validation-env-prefix-cluster",
    baselineOutput: output,
    postOutput: output,
    validationCommands: ["OPENCLAW_LOCAL_CHECK=1 OPENCLAW_LOCAL_CHECK_MODE=throttled pnpm check:changed"],
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "planned");
  assert.equal(fs.readFileSync(run.changedGateMarker, "utf8").trim(), "2");
});

test("execute-fix-artifact accepts the bounded OpenClaw branch autoreview command", () => {
  const output = "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.";
  const run = runBaselineChangedGateFixture({
    clusterId: "openclaw-autoreview-validation-cluster",
    baselineOutput: output,
    postOutput: output,
    validationCommands: [".agents/skills/autoreview/scripts/autoreview --mode branch --base origin/main"],
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "planned");
});

test("execute-fix-artifact accepts the bounded OpenClaw local autoreview command", () => {
  const output = "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.";
  const run = runBaselineChangedGateFixture({
    clusterId: "openclaw-local-autoreview-validation-cluster",
    baselineOutput: output,
    postOutput: output,
    validationCommands: [".agents/skills/autoreview/scripts/autoreview --mode local"],
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "planned");
});

test("execute-fix-artifact accepts the bounded corepack changed validation command", () => {
  const output = "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.";
  const run = runBaselineChangedGateFixture({
    clusterId: "corepack-changed-validation-cluster",
    baselineOutput: output,
    postOutput: output,
    validationCommands: ["corepack pnpm check:changed"],
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "planned");
});

test("execute-fix-artifact accepts a bounded shell syntax validation", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "shell-syntax-validation-cluster",
    baselineOutput: "",
    postOutput: "",
    strict: true,
    validationCommands: ["bash -n scripts/setup-auth-system.sh"],
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "planned");
});

test("execute-fix-artifact accepts bounded OpenClaw PR review artifact validation", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "pr-review-artifact-validation-cluster",
    baselineOutput: "",
    postOutput: "",
    strict: true,
    validationCommands: ["scripts/pr review-validate-artifacts 94022"],
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "planned");
});

test("execute-fix-artifact accepts bounded corepack oxfmt validation", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "corepack-oxfmt-validation-cluster",
    baselineOutput: "",
    postOutput: "",
    strict: true,
    validationCommands: ["corepack pnpm exec oxfmt --check --threads=1 src/app.js package.json"],
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "planned");
});

test("execute-fix-artifact rejects non-bounded OpenClaw PR validation commands", () => {
  for (const validationCommand of ["scripts/pr review-validate-artifacts 0", "scripts/pr prepare-run 94022"]) {
    const run = runBaselineChangedGateFixture({
      clusterId: `rejected-pr-review-validation-${validationCommand.split(" ")[1]}`,
      baselineOutput: "",
      postOutput: "",
      validationCommands: [validationCommand],
    });

    assert.equal(run.child.status, 1, run.child.stderr || run.child.stdout);
    assert.match(run.child.stderr, /unsupported validation command/);
    assert.equal(run.report.status, "failed");
  }
});

test("execute-fix-artifact rejects shell execution validation commands", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "shell-execution-validation-cluster",
    baselineOutput: "",
    postOutput: "",
    validationCommands: ["bash -c true"],
  });

  assert.equal(run.child.status, 1, run.child.stderr || run.child.stdout);
  assert.match(run.child.stderr, /unsupported validation command/);
  assert.equal(run.report.status, "failed");
});

test("execute-fix-artifact rejects shell syntax validation paths outside the checkout", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "shell-syntax-path-validation-cluster",
    baselineOutput: "",
    postOutput: "",
    validationCommands: ["bash -n ../setup-auth-system.sh"],
  });

  assert.equal(run.child.status, 1, run.child.stderr || run.child.stdout);
  assert.match(run.child.stderr, /unsupported validation command/);
  assert.equal(run.report.status, "failed");
});

test("execute-fix-artifact rejects corepack oxfmt paths outside the checkout", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "corepack-oxfmt-path-validation-cluster",
    baselineOutput: "",
    postOutput: "",
    validationCommands: ["corepack pnpm exec oxfmt --check src/app.js ../src/app.js"],
  });

  assert.equal(run.child.status, 1, run.child.stderr || run.child.stdout);
  assert.match(run.child.stderr, /unsupported validation command/);
  assert.equal(run.report.status, "failed");
});

test("execute-fix-artifact rejects unrecognized validation env prefixes", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "unsupported-validation-env-prefix-cluster",
    baselineOutput: "",
    postOutput: "",
    validationCommands: ["UNSAFE_VALIDATION_FLAG=1 pnpm check:changed"],
  });

  assert.equal(run.child.status, 1, run.child.stderr || run.child.stdout);
  assert.match(run.child.stderr, /unsupported validation command/);
  assert.equal(run.report.status, "failed");
  assert.match(run.report.actions[0].reason, /unsupported validation command/);
});

test("execute-fix-artifact rejects changed-gate failures with new diagnostics", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "new-diagnostic-cluster",
    baselineOutput: "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
    postOutput: [
      "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
      "src/app.test.js(2,1): error TS2322: Type 'string' is not assignable to type 'number'.",
    ].join("\n"),
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "blocked");
  assert.match(run.report.actions[0].reason, /validation command failed/);
  assert.equal(fs.existsSync(run.targetedTestMarker), false);
});

test("execute-fix-artifact rejects unchanged baseline diagnostics that touch changed files", () => {
  const output = "src/app.test.js(2,1): error TS2322: Type 'string' is not assignable to type 'number'.";
  const run = runBaselineChangedGateFixture({
    clusterId: "changed-file-diagnostic-cluster",
    baselineOutput: output,
    postOutput: output,
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "blocked");
  assert.equal(run.report.changed_gate_baseline.eligible, true);
  assert.equal(fs.existsSync(run.targetedTestMarker), false);
});

test("execute-fix-artifact does not tolerate baseline test failures", () => {
  const output = [
    "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
    "FAIL src/app.test.js",
  ].join("\n");
  const run = runBaselineChangedGateFixture({
    clusterId: "baseline-test-failure-cluster",
    baselineOutput: output,
    postOutput: output,
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "blocked");
  assert.equal(run.report.changed_gate_baseline.eligible, false);
  assert.equal(run.report.changed_gate_baseline.has_test_failure, true);
  assert.equal(fs.existsSync(run.targetedTestMarker), false);
});

test("execute-fix-artifact does not mask stalled changed-gate failures", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "stalled-changed-gate-cluster",
    baselineOutput: "stalled Vitest process",
    postOutput: "stalled Vitest process",
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "blocked");
  assert.equal(run.report.changed_gate_baseline.eligible, false);
  assert.equal(fs.existsSync(run.targetedTestMarker), false);
});

test("execute-fix-artifact does not tolerate signaled changed-gate failures", () => {
  const output = "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.";
  const run = runBaselineChangedGateFixture({
    clusterId: "signaled-changed-gate-cluster",
    baselineOutput: output,
    postOutput: output,
    postSignal: "SIGKILL",
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "blocked");
  assert.equal(fs.existsSync(run.targetedTestMarker), false);
  const signals = fs
    .readdirSync(path.join(run.fixture.runDir, "fix-executor-debug"))
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(fs.readFileSync(path.join(run.fixture.runDir, "fix-executor-debug", file), "utf8")).signal);
  assert.equal(signals.includes("SIGKILL"), true);
});

test("execute-fix-artifact keeps changed-gate failures strict when strict validation is enabled", () => {
  const run = runBaselineChangedGateFixture({
    clusterId: "strict-baseline-cluster",
    baselineOutput: "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
    postOutput: "src/web-search/runtime.ts(374,10): error TS6133: 'resolveWebSearchDefinition' is declared but its value is never read.",
    strict: true,
  });

  assert.equal(run.child.status, 0, run.child.stderr || run.child.stdout);
  assert.equal(run.report.status, "blocked");
  assert.equal(run.report.changed_gate_baseline, undefined);
  const phases = fs
    .readdirSync(path.join(run.fixture.runDir, "fix-executor-debug"))
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(fs.readFileSync(path.join(run.fixture.runDir, "fix-executor-debug", file), "utf8")).phase);
  assert.equal(phases.includes("baseline"), false);
});

function runBaselineChangedGateFixture({
  clusterId,
  baselineOutput,
  postOutput,
  strict = false,
  editedFile = "src/app.test.js",
  validationCommands = ["pnpm check:changed"],
  postSignal = null,
}) {
  const fixture = makeFixture();
  const resultPath = path.join(fixture.runDir, "result.json");
  const reportPath = path.join(fixture.runDir, "fix-execution-report.json");
  const targetedTestMarker = path.join(fixture.root, "targeted-test-command");
  const changedGateMarker = path.join(fixture.root, "check-changed-calls");
  const initialPrompt = path.join(fixture.root, "initial-codex-prompt");

  fs.writeFileSync(fixture.jobPath, jobFile(clusterId));
  const result = resultFile(clusterId);
  result.fix_artifact.validation_commands = validationCommands;
  fs.writeFileSync(resultPath, `${JSON.stringify(result, null, 2)}\n`);
  writeExecutable(
    path.join(fixture.binDir, "codex"),
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
const cd = args[args.indexOf("--cd") + 1];
const output = args.includes("--output-last-message") ? args[args.indexOf("--output-last-message") + 1] : "";
if (args.includes("--output-schema")) {
  fs.writeFileSync(output, JSON.stringify({
    status: "passed",
    summary: "clean",
    findings: [],
    findings_addressed: true,
    evidence: ["fixture review passed"],
  }));
  process.exit(0);
}
if (!fs.existsSync(${JSON.stringify(initialPrompt)})) {
  fs.writeFileSync(${JSON.stringify(initialPrompt)}, fs.readFileSync(0, "utf8"));
}
fs.writeFileSync(path.join(cd, ${JSON.stringify(editedFile)}), "export const fixture = true;\\n");
fs.writeFileSync(path.join(cd, ".clownfish-edited"), "true\\n");
if (output) fs.writeFileSync(output, "edited\\n");
`,
  );
  writeExecutable(
    path.join(fixture.binDir, "pnpm"),
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
if (args[0] === "check:changed") {
  const marker = ${JSON.stringify(changedGateMarker)};
  const count = fs.existsSync(marker) ? Number(fs.readFileSync(marker, "utf8")) : 0;
  fs.writeFileSync(marker, String(count + 1));
  const output = fs.existsSync(path.join(process.cwd(), ".clownfish-edited"))
    ? ${JSON.stringify(postOutput)}
    : ${JSON.stringify(baselineOutput)};
  console.error(output);
  if (fs.existsSync(path.join(process.cwd(), ".clownfish-edited")) && ${JSON.stringify(postSignal)}) {
    process.kill(process.pid, ${JSON.stringify(postSignal)});
  }
  process.exit(1);
}
if (args[0] === "test:serial") {
  fs.writeFileSync(${JSON.stringify(targetedTestMarker)}, args.join(" "));
  process.exit(0);
}
process.exit(0);
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
      "--dry-run",
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
        ...(strict ? { CLOWNFISH_TARGET_VALIDATION_MODE: "strict" } : {}),
      },
    },
  );

  return {
    fixture,
    child,
    report: JSON.parse(fs.readFileSync(reportPath, "utf8")),
    targetedTestMarker,
    changedGateMarker,
    initialPrompt,
  };
}

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
  fs.mkdirSync(path.join(seedDir, "scripts"), { recursive: true });
  fs.writeFileSync(path.join(seedDir, "scripts", "setup-auth-system.sh"), "#!/usr/bin/env bash\nset -euo pipefail\n");
  writeExecutable(
    path.join(seedDir, "scripts", "pr"),
    `#!/usr/bin/env bash
set -euo pipefail
test "$1" = "review-validate-artifacts"
test "$2" = "94022"
`,
  );
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
  writeExecutable(
    path.join(binDir, "corepack"),
    `#!/usr/bin/env node
const { spawnSync } = require("node:child_process");
const [command, ...args] = process.argv.slice(2);
if (command !== "pnpm") process.exit(2);
const child = spawnSync("pnpm", args, { stdio: "inherit" });
process.exit(child.status ?? 1);
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
