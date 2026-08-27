import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  CODEX_REVIEW_DEPENDENCY,
  codexReviewProvenanceEvidence,
  validateCodexReviewProvenance,
  validateCodexReviewSourceEvidence,
} from "../scripts/codex-review-dependency.mjs";

const repoRoot = path.resolve(import.meta.dirname, "..");
const script = fs.readFileSync(path.join(repoRoot, "scripts", "preflight-external-pr-merge.mjs"), "utf8");
const runnerScript = fs.readFileSync(path.join(repoRoot, "scripts", "run-external-merge-preflights.mjs"), "utf8");
const workflow = fs.readFileSync(path.join(repoRoot, ".github", "workflows", "external-merge-preflight.yml"), "utf8");
const intakeWorkflow = fs.readFileSync(path.join(repoRoot, ".github", "workflows", "checks-success-preflight-intake.yml"), "utf8");
const clusterWorkflow = fs.readFileSync(path.join(repoRoot, ".github", "workflows", "cluster-worker.yml"), "utf8");
const autonomousPrompt = fs.readFileSync(path.join(repoRoot, "prompts", "autonomous.md"), "utf8");
const githubInventoryImporter = fs.readFileSync(path.join(repoRoot, "scripts", "import-github-pr-inventory.mjs"), "utf8");
const codexDependency = CODEX_REVIEW_DEPENDENCY;
const codexCitation = { source_path: "codex-rs/exec/src/lib.rs", line: 583 };

test("external merge preflight is exact-head, read-only, and refuses unresolved review evidence", () => {
  assert.match(script, /source job does not explicitly contain/);
  assert.match(script, /pull\/\$\{pullRequest\}\/head:\$\{ref\}/);
  assert.match(script, /PR head changed during checkout/);
  assert.match(script, /function ensureMergeBase/);
  assert.match(script, /function prepareSyntheticMergeReview/);
  assert.match(script, /"merge-tree", "--write-tree", baseSha, exactHeadSha/);
  assert.match(script, /"commit-tree",\s*mergeTreeSha,\s*"-p",\s*currentMainSha/);
  assert.match(script, /"rev-parse", "HEAD\^\{tree\}"/);
  assert.match(script, /"rev-parse", "HEAD\^"/);
  assert.match(script, /--deepen/);
  assert.match(script, /--unshallow/);
  assert.match(script, /if \(secret\) redacted = redacted\.replaceAll/);
  assert.match(script, /base advanced before validation/);
  assert.match(script, /unresolved review thread/);
  assert.match(script, /top-level issue comment/);
  assert.match(script, /inline review comment/);
  assert.match(
    script,
    /const defaultCodexReviewSandbox = "read-only";/,
  );
  assert.match(script, /CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_SANDBOX \?\? defaultCodexReviewSandbox/);
  assert.match(script, /CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_USE_LEGACY_LANDLOCK === "1"/);
  assert.match(script, /\["--enable", "use_legacy_landlock"\]/);
  assert.match(script, /--sandbox",\s*codexReviewSandbox/);
  assert.match(script, /--config\.enable-pre-post-scripts=false/);
  assert.match(script, /GIT_ALLOW_PROTOCOL: "https:ssh"/);
  assert.match(script, /GIT_CONFIG_KEY_0: "core\.hooksPath"/);
  assert.match(script, /GIT_CONFIG_VALUE_0: "\/dev\/null"/);
  assert.match(script, /GIT_CONFIG_KEY_2: "credential\.helper"/);
  assert.match(script, /GIT_CONFIG_KEY_3: "http\.extraHeader"/);
  assert.match(script, /GIT_CONFIG_KEY_4: "http\.https:\/\/github\.com\/\.extraHeader"/);
  assert.match(script, /GIT_NO_REPLACE_OBJECTS: "1"/);
  assert.match(script, /function verifyTrackedFilesystem/);
  assert.match(script, /function gitBlobSha/);
  assert.match(script, /"check:changed", "--base", baseSha, "--head", headSha/);
  assert.match(script, /do not use mutable branch refs/);
  assert.match(script, /delete env\[key\]/);
  assert.match(script, /if \(process\.env\.GITHUB_ACTIONS === "true"\) \{\s*delete env\.OPENAI_API_KEY;\s*delete env\.CODEX_API_KEY;/s);
  assert.match(script, /function validationEnv\(\)[\s\S]*?"CLOWNFISH_READ_GH_TOKEN"/);
  assert.equal((script.match(/"CLOWNFISH_CHECKS_GH_TOKEN"/g) ?? []).length, 2);
  assert.match(script, /function validationEnv\(\)[\s\S]*?\.\.\.gitIntegrityEnv\(\)/);
  assert.match(script, /function codexEnv\(\)[\s\S]*?gitIntegrityEnv\(\)/);
  assert.doesNotMatch(script, /pr", "merge"/);
  assert.doesNotMatch(script, /resolveReviewThread/);
});

test("external merge workflow validates before guarded apply", () => {
  assert.match(workflow, /- name: Prepare Codex Linux sandbox/);
  assert.match(workflow, /apt-get install -y bubblewrap apparmor-profiles apparmor-utils/);
  assert.match(workflow, /apparmor_parser -r \/etc\/apparmor\.d\/bwrap-userns-restrict/);
  assert.match(workflow, /npm run preflight-external-merge/);
  assert.match(workflow, /"\$SOURCE_JOB" --pr "\$PULL_REQUEST"/);
  assert.match(workflow, /npm run review-results/);
  assert.match(workflow, /id: outcome/);
  assert.match(workflow, /const passed = report\.status === "passed"/);
  assert.match(workflow, /preflight_passed: \$\{\{ steps\.outcome\.outputs\.preflight_passed \}\}/);
  assert.match(workflow, /needs\.preflight\.outputs\.preflight_passed == 'true'/);
  assert.match(workflow, /inputs\.apply && vars\.CLOWNFISH_ALLOW_EXECUTE == '1' && vars\.CLOWNFISH_ALLOW_MERGE == '1'/);
  assert.match(workflow, /runs-on: \$\{\{ inputs\.runner \}\}/);
  assert.match(workflow, /external-merge-preflight\/preflight-report\.json/);
  const preflightUpload = workflow.match(/- name: Upload preflight artifact[\s\S]*?(?=\n      - name: Fail blocked preflight)/)?.[0] ?? "";
  const applyUpload = workflow.match(/- name: Upload apply artifact[\s\S]*$/)?.[0] ?? "";
  assert.match(preflightUpload, /external-merge-preflight\/codex-review\.json/);
  assert.doesNotMatch(applyUpload, /external-merge-preflight\/codex-review\.json/);
  assert.equal((workflow.match(/external-merge-preflight\/codex-review\.json/g) ?? []).length, 1);
  assert.match(
    workflow,
    /- name: Upload preflight artifact[\s\S]*?if: always\(\)[\s\S]*?- name: Fail blocked preflight[\s\S]*?if: \$\{\{ always\(\) && steps\.outcome\.outputs\.preflight_passed != 'true' \}\}[\s\S]*?exit 1[\s\S]*?\n  apply:/,
  );
  assert.match(workflow, /npm run apply-result/);
  assert.match(workflow, /- name: Verify mutation integrity[\s\S]*?npm run assert-mutation-integrity/);
  assert.match(workflow, /- name: Verify mutation integrity[\s\S]*?- name: Upload apply artifact/);
  assert.match(workflow, /permission-pull-requests: write/);
  assert.match(workflow, /permission-checks: write/);
  assert.match(workflow, /permission-administration: write/);
  assert.match(workflow, /CLOWNFISH_APP_ID: \$\{\{ vars\.CLOWNFISH_APP_ID \}\}/);
  assert.match(workflow, /CLOWNFISH_CHECKS_GH_TOKEN: \$\{\{ steps\.app_token\.outputs\.token \}\}/);
  assert.match(workflow, /CLOWNFISH_RULES_GH_TOKEN: \$\{\{ steps\.rules_app_token\.outputs\.token \}\}/);
  assert.match(
    workflow,
    /CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_SANDBOX: \$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_SANDBOX \|\| 'read-only' \}\}/,
  );
  assert.match(
    workflow,
    /CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_USE_LEGACY_LANDLOCK: \$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_USE_LEGACY_LANDLOCK \|\| '1' \}\}/,
  );
});

test("cluster worker chains blocked merge candidates through external preflight", () => {
  assert.match(autonomousPrompt, /external_merge_preflight_required/);
  assert.match(githubInventoryImporter, /external_merge_preflight_required/);
  assert.match(runnerScript, /const MERGE_ACTIONS = new Set\(\["merge_candidate", "merge_canonical"\]\)/);
  assert.match(runnerScript, /action\.status !== "blocked"/);
  assert.match(runnerScript, /external_merge_preflight_required/);
  assert.match(runnerScript, /scripts\/preflight-external-pr-merge\.mjs/);
  assert.match(runnerScript, /scripts\/review-results\.mjs/);
  assert.match(runnerScript, /CLOWNFISH_ALLOW_MERGE !== "1"/);
  assert.match(runnerScript, /scripts\/apply-result\.mjs/);
  assert.match(runnerScript, /const phase = String\(args\.phase \?\? "all"\)/);
  assert.match(runnerScript, /const reviewedActions = await mapLimit\(requests, concurrency, runPreflightReview\)/);
  assert.match(
    runnerScript,
    /for \(let index = 0; index < report\.actions\.length; index \+= 1\) \{[\s\S]*?await applyReviewedPreflight\(report\.actions\[index\]\)/,
  );
  assert.match(runnerScript, /const execFileAsync = promisify\(execFile\)/);
  assert.match(runnerScript, /CLOWNFISH_EXTERNAL_PREFLIGHT_HEARTBEAT_MS/);
  assert.match(runnerScript, /still running after/);
  assert.match(runnerScript, /clearInterval\(heartbeat\)/);
  assert.match(runnerScript, /rmSync\(path\.join\(runDir, "target"\)/);
  assert.match(runnerScript, /rmSync\(path\.join\(runDir, "codex"\)/);
  assert.match(clusterWorkflow, /- name: Run external merge preflights/);
  assert.match(clusterWorkflow, /CLOWNFISH_APP_ID: \$\{\{ vars\.CLOWNFISH_APP_ID \}\}/);
  assert.match(
    clusterWorkflow,
    /CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_SANDBOX: \$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_SANDBOX \|\| 'read-only' \}\}/,
  );
  assert.match(
    clusterWorkflow,
    /CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_USE_LEGACY_LANDLOCK: \$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_USE_LEGACY_LANDLOCK \|\| '1' \}\}/,
  );
  assert.match(
    clusterWorkflow,
    /CLOWNFISH_EXTERNAL_PREFLIGHT_HEARTBEAT_MS: \$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_HEARTBEAT_MS \|\| '60000' \}\}/,
  );
  assert.match(
    clusterWorkflow,
    /CLOWNFISH_EXTERNAL_PREFLIGHT_MAX_BASE_REVALIDATIONS: \$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_MAX_BASE_REVALIDATIONS \|\| '2' \}\}/,
  );
  assert.match(
    clusterWorkflow,
    /CLOWNFISH_EXTERNAL_PREFLIGHT_MAX_DISJOINT_BASE_COMMITS: \$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_MAX_DISJOINT_BASE_COMMITS \|\| '20' \}\}/,
  );
  assert.match(
    clusterWorkflow,
    /CLOWNFISH_EXTERNAL_PREFLIGHT_MAX_DISJOINT_BASE_FILES: \$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_MAX_DISJOINT_BASE_FILES \|\| '128' \}\}/,
  );
  assert.equal((clusterWorkflow.match(/permission-checks: write/g) ?? []).length >= 2, true);
  assert.match(clusterWorkflow, /permission-administration: write/);
  assert.match(
    clusterWorkflow,
    /CLOWNFISH_RULES_GH_TOKEN: \$\{\{ steps\.rules_app_token\.outputs\.token \}\}/,
  );
  assert.match(
    clusterWorkflow,
    /npm run run-external-merge-preflights -- "\$\{\{ needs\.prepare\.outputs\.job \}\}"[\s\S]*?--phase preflight[\s\S]*?--max-prs "\$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_MAX_PRS \|\| '5' \}\}"[\s\S]*?--concurrency "\$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_CONCURRENCY \|\| '3' \}\}"/,
  );
  assert.match(
    clusterWorkflow,
    /- name: Apply reviewed external merge preflights[\s\S]*?--phase apply/,
  );
  assert.match(
    clusterWorkflow,
    /- name: Tag Clownfish targets[\s\S]*?- name: Verify mutation integrity[\s\S]*?- name: Upload final worker artifacts/,
  );
});

test("external merge runner persists preflight for a reviewer-free sequential apply", () => {
  const fixture = makeRunnerFixture();
  try {
    const liveEnv = {
      ...fixture.env,
      CLOWNFISH_ALLOW_EXECUTE: "1",
      CLOWNFISH_ALLOW_MERGE: "1",
    };
    const preflight = runExternalMergeRunner(fixture, ["--phase", "preflight"], liveEnv);
    assert.equal(preflight.status, 0, preflight.stderr || preflight.stdout);

    const initialReport = JSON.parse(fs.readFileSync(fixture.reportPath, "utf8"));
    assert.equal(initialReport.status, "passed");
    assert.equal(initialReport.actions[0].status, "passed");
    assert.ok(initialReport.preflight_completed_at);
    assert.equal(fs.existsSync(fixture.mergeLogPath), false);

    writeExecutable(
      fixture.codexPath,
      `#!/usr/bin/env node
require("node:fs").writeFileSync(${JSON.stringify(fixture.unexpectedReviewPath)}, "reviewer invoked during apply");
process.exit(91);
`,
    );

    const gatedApply = runExternalMergeRunner(
      fixture,
      ["--phase", "apply"],
      { ...liveEnv, CLOWNFISH_ALLOW_MERGE: "0" },
    );
    assert.equal(gatedApply.status, 0, gatedApply.stderr || gatedApply.stdout);
    let report = JSON.parse(fs.readFileSync(fixture.reportPath, "utf8"));
    assert.equal(report.actions[0].status, "passed");
    assert.match(report.actions[0].reason, /merge gate disabled/);
    assert.equal(fs.existsSync(fixture.mergeLogPath), false);

    const dryRunApply = runExternalMergeRunner(fixture, ["--phase", "apply", "--dry-run"], liveEnv);
    assert.equal(dryRunApply.status, 0, dryRunApply.stderr || dryRunApply.stdout);
    report = JSON.parse(fs.readFileSync(fixture.reportPath, "utf8"));
    assert.equal(report.dry_run, true);
    assert.equal(report.actions[0].status, "passed");
    assert.match(report.actions[0].reason, /dry run/);
    assert.equal(fs.existsSync(fixture.mergeLogPath), false);

    const apply = runExternalMergeRunner(fixture, ["--phase", "apply"], liveEnv);
    assert.equal(apply.status, 0, apply.stderr || apply.stdout);
    report = JSON.parse(fs.readFileSync(fixture.reportPath, "utf8"));
    assert.equal(report.generated_at, initialReport.generated_at);
    assert.equal(report.status, "executed", JSON.stringify(report, null, 2));
    assert.equal(report.dry_run, false);
    assert.equal(report.actions[0].status, "executed");
    assert.equal(report.actions[0].apply_actions.length, 1);
    assert.ok(report.apply_completed_at);
    assert.equal(fs.existsSync(fixture.unexpectedReviewPath), false);
    assert.deepEqual(fs.readFileSync(fixture.mergeLogPath, "utf8").trim().split("\n"), ["123"]);
    const nestedApplyReportPath = path.join(
      fixture.runRoot,
      "external-merge-preflight-123",
      "apply-report.json",
    );
    const nestedApplyReport = fs.readFileSync(nestedApplyReportPath, "utf8");

    const secondApply = runExternalMergeRunner(fixture, ["--phase", "apply"], liveEnv);
    assert.equal(secondApply.status, 0, secondApply.stderr || secondApply.stdout);
    assert.equal(fs.readFileSync(nestedApplyReportPath, "utf8"), nestedApplyReport);
    assert.deepEqual(fs.readFileSync(fixture.mergeLogPath, "utf8").trim().split("\n"), ["123"]);
  } finally {
    fs.rmSync(fixture.root, { recursive: true, force: true });
  }
});

test("external merge runner defaults to all while preserving dry-run", () => {
  const fixture = makeRunnerFixture();
  try {
    const child = runExternalMergeRunner(
      fixture,
      ["--dry-run"],
      {
        ...fixture.env,
        CLOWNFISH_ALLOW_EXECUTE: "1",
        CLOWNFISH_ALLOW_MERGE: "1",
      },
    );
    assert.equal(child.status, 0, child.stderr || child.stdout);

    const report = JSON.parse(fs.readFileSync(fixture.reportPath, "utf8"));
    assert.equal(report.status, "passed");
    assert.equal(report.dry_run, true);
    assert.equal(report.actions[0].status, "passed");
    assert.match(report.actions[0].reason, /dry run; guarded applicator not invoked/);
    assert.equal(fs.existsSync(fixture.mergeLogPath), false);
  } finally {
    fs.rmSync(fixture.root, { recursive: true, force: true });
  }
});

test("external merge runner removes stale and completed dependency checkouts", () => {
  const fixture = makeRunnerFixture();
  try {
    const nestedRunDir = path.join(fixture.runRoot, "external-merge-preflight-123");
    fs.mkdirSync(path.join(nestedRunDir, "target"), { recursive: true });
    fs.mkdirSync(path.join(nestedRunDir, "codex"), { recursive: true });
    fs.writeFileSync(path.join(nestedRunDir, "codex", "stale"), "stale\n");

    const child = runExternalMergeRunner(fixture, ["--phase", "preflight"], fixture.env);
    assert.equal(child.status, 0, child.stderr || child.stdout);
    assert.equal(fs.existsSync(path.join(nestedRunDir, "target")), false);
    assert.equal(fs.existsSync(path.join(nestedRunDir, "codex")), false);
  } finally {
    fs.rmSync(fixture.root, { recursive: true, force: true });
  }
});

test("external preflight job policy routes planned worker merges even with self-authored proof", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-external-route-"));
  const binDir = path.join(root, "bin");
  const runRoot = path.join(root, "run");
  const jobPath = path.join(root, "job.md");
  const resultPath = path.join(root, "result.json");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(
    path.join(binDir, "gh"),
    "#!/bin/sh\necho 'fixture hydration failure' >&2\nexit 1\n",
    { mode: 0o755 },
  );
  fs.writeFileSync(
    jobPath,
    `---
repo: openclaw/openclaw
cluster_id: external-route-test
mode: autonomous
expected_head_sha: ${"a".repeat(40)}
allowed_actions:
  - merge
blocked_actions:
  - close
candidates:
  - "#123"
allow_merge: true
require_external_merge_preflight: true
security_sensitive: false
---

# External route test
`,
  );
  fs.writeFileSync(
    resultPath,
    `${JSON.stringify(
      {
        repo: "openclaw/openclaw",
        cluster_id: "external-route-test",
        actions: [
          {
            target: "#123",
            action: "merge_canonical",
            status: "planned",
            expected_head_sha: "a".repeat(40),
            reason: "worker-authored proof claims this is ready",
          },
        ],
        merge_preflight: [{ target: "#123", security_status: "cleared" }],
      },
      null,
      2,
    )}\n`,
  );

  const child = spawnSync(
    process.execPath,
    [
      "scripts/run-external-merge-preflights.mjs",
      jobPath,
      resultPath,
      "--dry-run",
      "--run-root",
      runRoot,
    ],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
        CLOWNFISH_EXTERNAL_PREFLIGHT_HEARTBEAT_MS: "10000",
      },
    },
  );

  assert.equal(child.status, 0, child.stderr || child.stdout);
  const report = JSON.parse(fs.readFileSync(path.join(runRoot, "external-merge-preflight-report.json"), "utf8"));
  assert.equal(report.actions.length, 1);
  assert.equal(report.actions[0].target, "#123");
  assert.equal(report.actions[0].request_source, "job_policy");
  assert.equal(report.actions[0].status, "blocked");
});

test("daily checks-success intake feeds guarded external merge preflights", () => {
  assert.match(intakeWorkflow, /cron: "17 7 \* \* \*"/);
  assert.match(intakeWorkflow, /CLOWNFISH_CHECKS_SUCCESS_PREFLIGHT_ENABLED == ''/);
  assert.match(intakeWorkflow, /CLOWNFISH_CHECKS_SUCCESS_PREFLIGHT_ENABLED != '0'/);
  assert.match(intakeWorkflow, /scripts\/import-github-pr-inventory\.mjs/);
  assert.match(intakeWorkflow, /--strategy remediation/);
  assert.match(intakeWorkflow, /--checks-success/);
  assert.match(intakeWorkflow, /--sort recent/);
  assert.match(intakeWorkflow, /default: "30"/);
  assert.match(intakeWorkflow, /default: ubuntu-latest/);
  assert.match(intakeWorkflow, /git commit -m "chore: add daily checks-success preflight jobs"/);
  assert.match(intakeWorkflow, /gh workflow run external-merge-preflight\.yml/);
  assert.match(intakeWorkflow, /-f "apply=\$\{apply\}"/);
  assert.match(intakeWorkflow, /--bucket conflicting_branch_repair/);
  assert.match(intakeWorkflow, /CLOWNFISH_CONFLICTING_BRANCH_REPAIR_LIMIT \|\| '5'/);
  assert.match(intakeWorkflow, /--skip-existing false/);
  assert.match(intakeWorkflow, /--search-limit 100/);
  assert.match(intakeWorkflow, /--batch-size 1/);
  assert.match(intakeWorkflow, /gh workflow run cluster-worker\.yml/);
  assert.match(intakeWorkflow, /-f "mode=autonomous"/);
  assert.match(intakeWorkflow, /-f "execution_runner=\$\{REPAIR_EXECUTION_RUNNER\}"/);
  assert.match(intakeWorkflow, /repair_runner:[\s\S]*?default: blacksmith-4vcpu-ubuntu-2404/);
  assert.match(intakeWorkflow, /execution_runner:[\s\S]*?default: blacksmith-16vcpu-ubuntu-2404/);
  assert.match(
    intakeWorkflow,
    /REPAIR_RUNNER: \$\{\{ github\.event_name == 'workflow_dispatch' && inputs\.repair_runner \|\| vars\.CLOWNFISH_WORKER_RUNNER \|\| 'blacksmith-4vcpu-ubuntu-2404' \}\}/,
  );
  assert.match(
    intakeWorkflow,
    /REPAIR_EXECUTION_RUNNER: \$\{\{ github\.event_name == 'workflow_dispatch' && inputs\.execution_runner \|\| vars\.CLOWNFISH_EXECUTION_RUNNER \|\| 'blacksmith-16vcpu-ubuntu-2404' \}\}/,
  );
  assert.match(
    intakeWorkflow,
    /if \[ "\$\{\{ github\.event_name \}\}" = "workflow_dispatch" \]; then\s+apply="\$\{\{ inputs\.apply \}\}"/,
  );
  assert.doesNotMatch(intakeWorkflow, /APPLY: \$\{\{ github\.event_name == 'workflow_dispatch' && inputs\.apply \|\|/);
  assert.match(intakeWorkflow, /dispatch_failed=0[\s\S]*?if ! gh workflow run cluster-worker\.yml[\s\S]*?dispatch_failed=1[\s\S]*?exit "\$dispatch_failed"/);
});

test("external merge preflight emits an applicator-valid exact-head merge artifact", () => {
  const fixture = makeFixture({
    issueUpdatedAt: "2026-06-19T00:05:00Z",
    pullUpdatedAt: "2026-06-19T00:00:00Z",
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const result = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "result.json"), "utf8"));
  assert.equal(result.actions.length, 1);
  assert.equal(result.actions[0].action, "merge_canonical");
  assert.equal(result.actions[0].expected_head_sha, fixture.headSha);
  assert.equal(result.actions[0].target_updated_at, "2026-06-19T00:05:00Z");
  assert.equal(result.merge_preflight[0].codex_review.status, "clean");
  assert.equal(
    result.merge_preflight[0].codex_review.evidence.filter((entry) =>
      entry.startsWith("Codex dependency provenance: "),
    ).length,
    1,
  );
  assert.equal(result.merge_preflight[0].reviewed_base_sha, fixture.baseSha);
  assert.equal(result.merge_preflight[0].reviewed_head_sha, fixture.headSha);
  assert.equal(result.merge_preflight[0].effective_diff_sha256, fixture.effectiveDiffSha256);
  assert.equal(result.merge_preflight[0].effective_diff_files, 1);
  assert.equal(result.merge_preflight[0].decision_authority, null);
  assert.deepEqual(
    {
      schema_version: result.merge_preflight[0].base_adoption_manifest.schema_version,
      policy: result.merge_preflight[0].base_adoption_manifest.policy,
      reviewed_base_sha: result.merge_preflight[0].base_adoption_manifest.reviewed_base_sha,
      reviewed_head_sha: result.merge_preflight[0].base_adoption_manifest.reviewed_head_sha,
      effective_paths: result.merge_preflight[0].base_adoption_manifest.effective_paths,
      validation_gate: result.merge_preflight[0].base_adoption_manifest.validation_gate,
    },
    {
      schema_version: 1,
      policy: "bounded-fast-forward-v1",
      reviewed_base_sha: fixture.baseSha,
      reviewed_head_sha: fixture.headSha,
      effective_paths: ["src/effective.ts"],
      validation_gate: "pnpm check:changed",
    },
  );
  assert.equal(result.merge_preflight[0].base_adoption_manifest.reviewed_paths.complete, true);
  assert.equal(result.merge_preflight[0].base_adoption_manifest.review_context.complete, true);
  assert.match(result.actions[0].evidence.join("\n"), /synthetic squash-result commit/);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.synthetic_merge_sha, fixture.syntheticMergeSha);
  assert.equal(report.synthetic_merge_tree_sha, fixture.mergeTreeSha);
  assert.equal(report.raw_diff_files, 2);
  assert.equal(report.effective_diff_files, 1);
  assert.equal(report.effective_diff_sha256, fixture.effectiveDiffSha256);
  const gitCommands = fs.readFileSync(fixture.gitCommandsPath, "utf8");
  assert.match(gitCommands, new RegExp(`merge-tree --write-tree ${fixture.baseSha} ${fixture.headSha}`));
  assert.match(gitCommands, new RegExp(`commit-tree ${fixture.mergeTreeSha} -p ${fixture.baseSha}`));
  assert.match(gitCommands, new RegExp(`checkout --detach ${fixture.syntheticMergeSha}`));
  assert.match(
    gitCommands,
    new RegExp(`diff --check ${fixture.baseSha}\\.\\.\\.${fixture.syntheticMergeSha}`),
  );
  assert.doesNotMatch(gitCommands, /diff --check origin\/main\.\.\.HEAD/);
  const pnpmCommands = fs.readFileSync(fixture.pnpmCommandsPath, "utf8");
  assert.match(
    pnpmCommands,
    new RegExp(`check:changed --base ${fixture.baseSha} --head ${fixture.syntheticMergeSha}`),
  );
  const codexPrompt = fs.readFileSync(fixture.codexPromptPath, "utf8");
  assert.match(
    codexPrompt,
    new RegExp(`${fixture.baseSha}\\.\\.\\.${fixture.syntheticMergeSha}`),
  );
  assert.doesNotMatch(codexPrompt, /origin\/main\.\.\.HEAD/);

  const reviewed = spawnSync(process.execPath, ["scripts/review-results.mjs", fixture.runDir], {
    cwd: repoRoot,
    encoding: "utf8",
  });
  assert.equal(reviewed.status, 0, reviewed.stderr || reviewed.stdout);
});

test("external merge preflight binds OpenClaw review to pinned Codex source", () => {
  const fixture = makeFixture();
  const { report, result } = runPreflightFixture(fixture, {
    GITHUB_TOKEN: "github-secret",
    OPENAI_API_KEY: "openai-secret",
    NPM_TOKEN: "npm-secret",
    GENERIC_SECRET: "generic-secret",
    PRIVATE_KEY: "private-key",
  });

  assert.equal(report.status, "passed", report.reason);
  assert.deepEqual(report.codex_review.dependency, {
    repository: "openai/codex",
    version: codexDependency.version,
    tag: codexDependency.tag,
    tag_object: codexDependency.tagObject,
    commit: codexDependency.commit,
    ...codexCitation,
  });
  const prompt = fs.readFileSync(fixture.codexPromptPath, "utf8");
  assert.match(prompt, new RegExp(codexDependency.commit));
  assert.match(prompt, /\.\.\/codex\/codex-rs\/\.\.\.:<line>/);
  assert.equal(Number(fs.readFileSync(fixture.codexVersionCountPath, "utf8")), 1);
  assert.equal(Number(fs.readFileSync(fixture.codexCloneCountPath, "utf8")), 1);
  assert.match(
    fs.readFileSync(fixture.gitCommandsPath, "utf8"),
    /clone --depth 1 --branch rust-v0\.125\.0 --single-branch https:\/\/github\.com\/openai\/codex\.git /,
  );
  assert.deepEqual(JSON.parse(fs.readFileSync(fixture.codexDependencyEnvPath, "utf8")), {
    allowProtocol: "https",
    terminalPrompt: "0",
    askpass: "/bin/false",
    configCount: "5",
    configValues: ["", "", ""],
    cwdHasGit: false,
    homeEntries: [],
    xdgEntries: [],
    credentialKeys: [],
  });
  assert.equal(result.merge_preflight[0].codex_review.evidence.includes(codexReviewProvenanceEvidence(codexCitation)), true);
  const versionEnv = JSON.parse(fs.readFileSync(fixture.codexVersionEnvPath, "utf8"));
  assert.equal(versionEnv.cwdHasGit, false);
  assert.deepEqual(versionEnv.homeEntries, []);
  assert.equal(fs.existsSync(versionEnv.cwd), false);
  assert.equal(fs.existsSync(path.join(fixture.runDir, "codex")), false);
});

test("external merge preflight isolates dependency bootstrap from hostile Git configuration", () => {
  const fixture = makeFixture({ initialGitConfig: { key: "credential.helper", value: "fixture-local" } });
  fs.mkdirSync(fixture.hostileHome, { recursive: true });
  fs.writeFileSync(
    path.join(fixture.hostileHome, ".gitconfig"),
    `[credential]\n\thelper = !touch ${fixture.credentialSentinelPath}\n[http]\n\textraHeader = Authorization: hostile\n`,
  );
  const { report } = runPreflightFixture(fixture, {
    HOME: fixture.hostileHome,
    GIT_CONFIG_COUNT: "1",
    GIT_CONFIG_KEY_0: "credential.helper",
    GIT_CONFIG_VALUE_0: `!touch ${fixture.credentialSentinelPath}`,
    GIT_CONFIG_SYSTEM: path.join(fixture.hostileHome, ".gitconfig"),
    GIT_CONFIG_PARAMETERS: "'http.extraHeader=Authorization: inherited'",
  });

  assert.equal(report.status, "passed", report.reason);
  assert.equal(fs.existsSync(fixture.credentialSentinelPath), false);
});

for (const [name, options, reason] of [
  ["malformed version", { codexVersion: "Codex 0.125.0" }, /unsupported Codex version/],
  ["mismatched version", { codexVersion: "codex-cli 0.126.0" }, /unsupported Codex version/],
  ["clone failure", { codexCloneFailure: "fixture clone failure" }, /fixture clone failure/],
  ["lightweight tag", { codexTagType: "commit" }, /tag is not annotated/],
  ["tag object mismatch", { codexTagObject: "4".repeat(40) }, /tag object mismatch/],
  ["peeled commit mismatch", { codexCommitSha: "5".repeat(40) }, /commit mismatch/],
  [
    "missing required file",
    { codexFileFault: { path: "codex-rs/core/src/lib.rs", type: "missing" } },
    /required file is not regular/,
  ],
  [
    "nonregular required file",
    { codexFileFault: { path: "codex-rs/protocol/src/protocol.rs", type: "directory" } },
    /required file is not regular/,
  ],
]) {
  test(`external merge preflight rejects Codex dependency ${name}`, () => {
    const fixture = makeFixture(options);
    const { report } = runPreflightFixture(fixture);

    assert.equal(report.status, "blocked");
    assert.match(report.reason, reason);
    assert.equal(fs.existsSync(path.join(fixture.runDir, "codex")), false);
  });
}

test("external merge preflight requires pinned Codex source citations", () => {
  const fixture = makeFixture({
    codexReview: {
      status: "clean",
      summary: "clean without source proof",
      findings: [],
      findings_addressed: true,
      evidence: ["reviewed the target checkout"],
    },
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /did not cite the pinned sibling Codex source/);
  assert.equal(fs.existsSync(path.join(fixture.runDir, "codex")), false);
});

for (const status of ["failed", "blocked"]) {
  test(`external merge preflight preserves ${status} reviews without source citations`, () => {
    const finding = { severity: "high", summary: "fixture finding", evidence: "target source" };
    const fixture = makeFixture({
      codexReview: {
        status,
        summary: `${status} fixture review`,
        findings: [finding],
        findings_addressed: false,
        evidence: ["review did not claim pinned source proof"],
      },
    });
    const { report } = runPreflightFixture(fixture);
    const artifact = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "codex-review.json"), "utf8"));

    assert.equal(report.status, "blocked");
    assert.equal(report.codex_review.status, status);
    assert.equal(report.codex_review.findings, 1);
    assert.equal(artifact.summary, `${status} fixture review`);
    assert.deepEqual(artifact.findings, [finding]);
  });
}

test("pinned Codex source citations reject unsafe or unverifiable locations", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-codex-evidence-"));
  const regular = "codex-rs/exec/src/lib.rs";
  const missing = "codex-rs/exec/src/missing.rs";
  const nonregular = "codex-rs/exec/src/nonregular.rs";
  const symlink = "codex-rs/exec/src/symlink.rs";
  const untracked = "codex-rs/exec/src/untracked.rs";
  fs.mkdirSync(path.join(root, path.dirname(regular)), { recursive: true });
  fs.writeFileSync(path.join(root, regular), "one\ntwo\n");
  fs.writeFileSync(path.join(root, untracked), "untracked\n");
  fs.mkdirSync(path.join(root, nonregular));
  fs.symlinkSync(regular, path.join(root, symlink));
  const tracked = [regular, missing, nonregular, symlink].join("\0") + "\0";
  const validate = (evidence) =>
    validateCodexReviewSourceEvidence({ evidence }, root, () => tracked);
  const commit = codexDependency.commit;

  assert.deepEqual(validate([`${commit} ../codex/${regular}:2`]), {
    error: "",
    citation: { source_path: regular, line: 2 },
  });
  for (const [name, evidence, reason] of [
    ["traversal", [`${commit} ../codex/codex-rs/../AGENTS.md:1`], /invalid/],
    ["absolute", [`${commit} ../codex//etc/passwd:1`], /invalid/],
    ["backslash", [`${commit} ../codex/codex-rs\\exec\\src\\lib.rs:1`], /invalid/],
    ["nonexistent", [`${commit} ../codex/${missing}:1`], /not a regular file/],
    ["untracked", [`${commit} ../codex/${untracked}:1`], /not tracked/],
    ["nonregular", [`${commit} ../codex/${nonregular}:1`], /not a regular file/],
    ["symlink", [`${commit} ../codex/${symlink}:1`], /not a regular file/],
    ["zero", [`${commit} ../codex/${regular}:0`], /invalid/],
    ["out-of-range", [`${commit} ../codex/${regular}:3`], /out of range/],
    ["split entry", [commit, `../codex/${regular}:1`], /same entry/],
    ["malformed extra entry", [`${commit} ../codex/${regular}:1`, `../codex/${regular}`], /same entry/],
  ]) {
    assert.match(validate(evidence).error, reason, name);
  }
});

test("OpenClaw Codex provenance accepts only one exact canonical record", () => {
  const canonical = codexReviewProvenanceEvidence(codexCitation);
  const prefix = canonical.slice(0, canonical.indexOf("{"));
  const parsed = JSON.parse(canonical.slice(prefix.length));
  const tupleOnly = { ...parsed };
  delete tupleOnly.source_path;
  delete tupleOnly.line;
  assert.equal(canonical, `${prefix}${JSON.stringify({ repository: "openai/codex", version: codexDependency.version, tag: codexDependency.tag, tag_object: codexDependency.tagObject, commit: codexDependency.commit, ...codexCitation })}`);
  assert.equal(validateCodexReviewProvenance("openclaw/openclaw", [canonical]), "");
  assert.equal(validateCodexReviewProvenance("openclaw/example", []), "");
  for (const [name, evidence, reason] of [
    ["missing", [], /exactly one/],
    ["duplicate", [canonical, canonical], /exactly one/],
    ["malformed", ["Codex dependency provenance: {"], /malformed/],
    ["tuple-only", [`${prefix}${JSON.stringify(tupleOnly)}`], /fields/],
    ["missing field", [`${prefix}${JSON.stringify({ ...parsed, line: undefined })}`], /fields/],
    ["extra field", [`${prefix}${JSON.stringify({ ...parsed, extra: true })}`], /fields/],
    ["traversal", [`${prefix}${JSON.stringify({ ...parsed, source_path: "codex-rs/../AGENTS.md" })}`], /citation/],
    ["zero line", [`${prefix}${JSON.stringify({ ...parsed, line: 0 })}`], /citation/],
    ["noninteger line", [`${prefix}${JSON.stringify({ ...parsed, line: 1.5 })}`], /citation/],
    ["noncanonical serialization", [`${prefix}${JSON.stringify(parsed, null, 2)}`], /not canonical/],
    ["tuple mismatch", [canonical.replace("0.125.0", "0.126.0")], /does not match/],
  ]) {
    assert.match(validateCodexReviewProvenance("openclaw/openclaw", evidence), reason, name);
  }
});

test("external merge preflight leaves non-OpenClaw review behavior unchanged", () => {
  const fixture = makeFixture({
    repo: "openclaw/example",
    codexReview: {
      status: "clean",
      summary: "clean fixture review",
      findings: [],
      findings_addressed: true,
      evidence: ["ordinary target review"],
    },
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
  assert.equal(report.codex_review.dependency, null);
  assert.equal(fs.existsSync(fixture.codexVersionCountPath), false);
  assert.equal(fs.existsSync(fixture.codexCloneCountPath), false);
});

test("external merge preflight refuses and preserves an unowned Codex dependency path", () => {
  const fixture = makeFixture({ preexistingCodexCheckout: true });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /Codex dependency path already exists/);
  assert.equal(fs.readFileSync(path.join(fixture.runDir, "codex", "unowned"), "utf8"), "preserve\n");
  assert.equal(fs.existsSync(fixture.codexCloneCountPath), false);
});

test("external merge preflight removes the Codex dependency after review failure", () => {
  const fixture = makeFixture({ codexFailure: "fixture Codex failure" });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /fixture Codex failure/);
  assert.equal(fs.existsSync(path.join(fixture.runDir, "codex")), false);
});

test("external merge preflight removes mutated Codex source and blocks the review", () => {
  const fixture = makeFixture({ codexMutatesSource: true });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /Codex dependency checkout is dirty/);
  assert.equal(fs.existsSync(path.join(fixture.runDir, "codex")), false);
});

test("external merge preflight does not provision Codex when validation fails", () => {
  const fixture = makeFixture({ validationFailure: { stderr: "fixture validation failure" } });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /fixture validation failure/);
  assert.equal(fs.existsSync(fixture.codexVersionCountPath), false);
  assert.equal(fs.existsSync(fixture.codexCloneCountPath), false);
  assert.equal(fs.existsSync(path.join(fixture.runDir, "codex")), false);
});

test("external merge preflight selects legacy Landlock without weakening read-only review", () => {
  const fixture = makeFixture();
  runPreflightFixture(fixture, {
    CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_USE_LEGACY_LANDLOCK: "1",
  });

  const args = JSON.parse(fs.readFileSync(fixture.codexArgsPath, "utf8"));
  assert.deepEqual(args.slice(0, 3), ["exec", "--enable", "use_legacy_landlock"]);
  assert.equal(args[args.indexOf("--sandbox") + 1], "read-only");
  assert.equal(args.includes("danger-full-access"), false);
});

test("external merge preflight can disable the legacy Landlock compatibility backend", () => {
  const fixture = makeFixture();
  runPreflightFixture(fixture, {
    CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_USE_LEGACY_LANDLOCK: "0",
  });

  const args = JSON.parse(fs.readFileSync(fixture.codexArgsPath, "utf8"));
  assert.equal(args.includes("use_legacy_landlock"), false);
  assert.equal(args[args.indexOf("--sandbox") + 1], "read-only");
});

test("external merge preflight blocks when the source job pins a different head", () => {
  const expectedHeadSha = "f".repeat(40);
  const fixture = makeFixture({ expectedHeadSha });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.equal(report.expected_head_sha, expectedHeadSha);
  assert.match(
    report.reason,
    new RegExp(`PR head does not match source job: expected ${expectedHeadSha}, current ${fixture.headSha}`),
  );
  assert.equal(fs.existsSync(fixture.gitCommandsPath), false);
});

test("external merge preflight selects the target from expected_head_shas", () => {
  const expectedHeadSha = "f".repeat(40);
  const fixture = makeFixture({ expectedHeadShas: [`#123=${expectedHeadSha}`] });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "blocked");
  assert.equal(report.expected_head_sha, expectedHeadSha);
  assert.match(report.reason, /PR head does not match source job/);
});

test("external merge preflight preserves the decisive tail of long validation stdout", () => {
  const fixture = makeFixture({
    validationFailure: {
      stdout: [
        "$ node scripts/check-changed.mjs",
        "[check:changed] lanes=core, coreTests, extensions, extensionTests",
        "x".repeat(5000),
        "src/plugins/memory-state.ts(42,7): error TS2322: decisive stdout tail",
      ].join("\n"),
    },
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /^command failed with exit 1: pnpm check:changed/);
  assert.match(report.reason, /stdout:\n\$ node scripts\/check-changed\.mjs/);
  assert.match(report.reason, /\[truncated; showing head and tail\]/);
  assert.match(report.reason, /error TS2322: decisive stdout tail$/);
  assert.ok(report.reason.length <= 4000, `reason was ${report.reason.length} chars`);
});

test("external merge preflight reports both output tails without leaking secrets", () => {
  const secret = `github_pat_${"s".repeat(32)}`;
  const fixture = makeFixture({
    validationFailure: {
      stdout: `stdout prefix token=${secret}\n${"o".repeat(5000)}\ndecisive stdout tail`,
      stderr: `stderr prefix Authorization: Bearer ${secret}\n${"e".repeat(5000)}\ndecisive stderr tail`,
    },
  });
  const { report } = runPreflightFixture(fixture, { GH_TOKEN: secret });

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /stderr:\nstderr prefix Authorization: Bearer \[redacted\]/);
  assert.match(report.reason, /decisive stderr tail/);
  assert.match(report.reason, /stdout:\nstdout prefix token=\[redacted\]/);
  assert.match(report.reason, /decisive stdout tail$/);
  assert.doesNotMatch(report.reason, new RegExp(secret));
  assert.ok(report.reason.length <= 4000, `reason was ${report.reason.length} chars`);
});

test("external merge preflight blocks synthetic merge conflicts", () => {
  const fixture = makeFixture({ syntheticMergeFailure: "fixture merge conflict" });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /git merge-tree --write-tree/);
  assert.match(report.reason, /fixture merge conflict/);
});

test("external merge preflight blocks tracked checkout mutation after review", () => {
  const fixture = makeFixture({ codexMutatesCheckout: true });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /synthetic review checkout changed tracked bytes/);
});

test("external merge preflight refuses a reused target before running Git", () => {
  const fixture = makeFixture({ preexistingTargetCheckout: true });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /target checkout path already exists; refusing reused target/);
  assert.equal(fs.existsSync(fixture.gitCommandsPath), false);
});

test("external merge preflight allows target setup to update local Git config", () => {
  const fixture = makeFixture({
    toolchainGitConfig: { key: "core.hooksPath", value: "git-hooks" },
  });
  const { report, result } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
  assert.equal(result.actions[0]?.action, "merge_canonical");
  assert.match(
    fs.readFileSync(fixture.gitCommandsPath, "utf8"),
    /config --local --includes --list --null/,
  );
});

test("external merge preflight rejects unrecognized target setup Git config", () => {
  const sensitiveValue = "ext::malicious-review-helper";
  const fixture = makeFixture({
    toolchainGitConfig: { key: "remote.origin.url", value: sensitiveValue },
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /phase=target toolchain preparation/);
  assert.match(report.reason, /mismatched_fields=config/);
  assert.match(report.reason, /changed_git_config_keys=remote\.\[redacted\]\.url/);
  assert.doesNotMatch(report.reason, new RegExp(sensitiveValue));
  assert.deepEqual(report.validation_commands, []);
  assert.equal(report.codex_review, null);
});

test("external merge preflight blocks later Git config mutation with precise diagnostics", () => {
  const sensitiveValue = "sensitive-review-helper-value";
  const fixture = makeFixture({
    toolchainGitConfig: { key: "core.hooksPath", value: "git-hooks" },
    codexGitConfigMutation: { key: "credential.helper", value: sensitiveValue },
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /phase=Codex review/);
  assert.match(report.reason, /mismatched_fields=config/);
  assert.match(report.reason, new RegExp(`expected_head=${fixture.syntheticMergeSha}; actual_head=${fixture.syntheticMergeSha}`));
  assert.match(report.reason, new RegExp(`expected_tree=${fixture.mergeTreeSha}; actual_tree=${fixture.mergeTreeSha}`));
  assert.match(report.reason, new RegExp(`expected_parent=${fixture.baseSha}; actual_parent=${fixture.baseSha}`));
  const expectedConfig = report.reason.match(/expected_config_sha256=([0-9a-f]{64})/)?.[1];
  const actualConfig = report.reason.match(/actual_config_sha256=([0-9a-f]{64})/)?.[1];
  assert.ok(expectedConfig);
  assert.ok(actualConfig);
  assert.notEqual(expectedConfig, actualConfig);
  assert.match(report.reason, /changed_git_config_keys=credential\.helper/);
  assert.doesNotMatch(report.reason, /git-hooks|sensitive-review-helper-value/);
  assert.deepEqual(report.validation_commands, [
    `pnpm check:changed --base ${fixture.baseSha} --head ${fixture.syntheticMergeSha}`,
    `git diff --check ${fixture.baseSha}...${fixture.syntheticMergeSha}`,
    "git diff --check",
  ]);
  assert.deepEqual(report.codex_review, {
    status: "clean",
    findings: 0,
    dependency: {
      repository: "openai/codex",
      version: codexDependency.version,
      tag: codexDependency.tag,
      tag_object: codexDependency.tagObject,
      commit: codexDependency.commit,
      ...codexCitation,
    },
  });
});

test("external merge preflight fingerprints included Git config values", () => {
  const initialValue = "initial-credential-helper";
  const sensitiveValue = "mutated-credential-helper";
  const fixture = makeFixture({
    initialGitConfig: { key: "include.path", value: "../review-config" },
    initialIncludedGitConfig: { key: "credential.helper", value: initialValue },
    codexIncludedGitConfigMutation: { key: "credential.helper", value: sensitiveValue },
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /phase=Codex review/);
  assert.match(report.reason, /mismatched_fields=config/);
  assert.match(report.reason, /changed_git_config_keys=credential\.helper/);
  assert.doesNotMatch(report.reason, new RegExp(`${initialValue}|${sensitiveValue}`));
});

test("external merge preflight accepts #100910 assignee and harmless label drift after final recheck", () => {
  const fixture = makeFixture({
    issueUpdatedAt: "2026-07-06T13:38:20Z",
    pullUpdatedAt: "2026-07-06T13:38:20Z",
    rehydratedIssueUpdatedAt: "2026-07-06T14:11:07Z",
    rehydratedPullUpdatedAt: "2026-07-06T14:11:07Z",
    rehydratedPullAssignees: [{ login: "maintainer" }],
    rehydratedPullLabels: [{ name: "P2" }],
  });
  const { report, result } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
  assert.equal(result.actions[0].expected_head_sha, fixture.headSha);
  assert.equal(result.actions[0].target_updated_at, "2026-07-06T14:11:07Z");
  assert.match(result.actions[0].evidence.join("\n"), /Final GitHub recheck after validation and Codex review/);
});

for (const drift of [
  {
    name: "head",
    options: { rehydratedHeadSha: "c".repeat(40) },
    reason: /PR head changed after validation/,
  },
  {
    name: "state",
    options: { rehydratedState: "closed" },
    reason: /PR state changed after validation/,
  },
]) {
  test(`external merge preflight blocks real ${drift.name} drift during final recheck`, () => {
    const { report } = runPreflightFixture(makeFixture(drift.options));
    assert.equal(report.status, "blocked");
    assert.match(report.reason, drift.reason);
  });
}

for (const guardedDrift of [
  {
    name: "security",
    options: { rehydratedPullLabels: [{ name: "merge-risk: security-boundary" }] },
    reason: /security-sensitive signal|blocked live label/,
  },
  {
    name: "review",
    options: { mergeViews: [{}, { reviewDecision: "CHANGES_REQUESTED" }] },
    reason: /review decision is CHANGES_REQUESTED/,
  },
  {
    name: "checks",
    options: {
      mergeViews: [
        {},
        {
          statusCheckRollup: [
            {
              name: "CI",
              workflowName: "CI",
              status: "COMPLETED",
              conclusion: "FAILURE",
              completedAt: "2026-07-06T14:11:07Z",
            },
          ],
        },
      ],
    },
    reason: /non-passing checks: CI/,
  },
  {
    name: "mergeability",
    options: { mergeViews: [{}, { mergeable: "CONFLICTING", mergeStateStatus: "DIRTY" }] },
    reason: /mergeability is CONFLICTING|merge state is DIRTY/,
  },
]) {
  test(`external merge preflight blocks ${guardedDrift.name} drift during final recheck`, () => {
    const { report } = runPreflightFixture(makeFixture(guardedDrift.options));
    assert.equal(report.status, "blocked");
    assert.match(report.reason, guardedDrift.reason);
  });
}

test("external merge preflight ignores coordinator check churn owned by final authorization", () => {
  const { report } = runPreflightFixture(
    makeFixture({
      mergeViews: [
        {},
        {
          statusCheckRollup: [
            {
              name: "openclaw/ci-gate",
              workflowName: "CI",
              status: "COMPLETED",
              conclusion: "FAILURE",
              completedAt: "2026-07-06T14:11:07Z",
            },
            {
              name: "clownfish/exact-merge",
              status: "IN_PROGRESS",
              conclusion: null,
              startedAt: "2026-07-06T14:11:08Z",
            },
          ],
        },
      ],
    }),
  );

  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight tolerates base drift when exact head remains clean", () => {
  const fixture = makeFixture({ currentMainSha: "9".repeat(40) });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const result = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "result.json"), "utf8"));
  assert.equal(result.actions.length, 1);
  assert.match(result.actions[0].evidence.join("\n"), /drifted from origin\/main/);
  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.base_drift_allowed, true);
});

test("external merge preflight reuses review across bounded disjoint main drift", () => {
  const fixture = makeFixture({ refreshedMainSha: "9".repeat(40) });
  const { report, result } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
  assert.equal(report.reviewed_base_sha, "9".repeat(40));
  assert.equal(report.codex_reviewed_base_sha, fixture.baseSha);
  assert.equal(report.base_drift_proof.status, "revalidated_disjoint");
  assert.equal(report.base_drift_proof.drift_commit_count, 7);
  assert.equal(report.base_drift_proof.validation_reruns, 1);
  assert.equal(result.merge_preflight[0].reviewed_base_sha, "9".repeat(40));
  assert.match(result.merge_preflight[0].codex_review.evidence.join("\n"), new RegExp(fixture.baseSha));
  assert.match(result.actions[0].evidence.join("\n"), /reran validation 1 time/);
  assert.match(
    fs.readFileSync(fixture.pnpmCommandsPath, "utf8"),
    new RegExp(`check:changed --base ${"9".repeat(40)} --head ${fixture.syntheticMergeSha}`),
  );
  const reviewed = spawnSync(process.execPath, ["scripts/review-results.mjs", fixture.runDir], {
    cwd: repoRoot,
    encoding: "utf8",
  });
  assert.equal(reviewed.status, 0, reviewed.stderr || reviewed.stdout);
});

test("external merge preflight preserves the last clean review when moving main exhausts revalidations", () => {
  const firstAdvancedMain = "9".repeat(40);
  const stillMovingMain = "8".repeat(40);
  const fixture = makeFixture({
    refreshedMainShas: [firstAdvancedMain, stillMovingMain],
  });
  const { report, result } = runPreflightFixture(fixture, {
    CLOWNFISH_EXTERNAL_PREFLIGHT_MAX_BASE_REVALIDATIONS: "1",
  });

  assert.equal(report.status, "passed", report.reason);
  assert.equal(report.reviewed_base_sha, firstAdvancedMain);
  assert.equal(report.validated_main_sha, firstAdvancedMain);
  assert.equal(report.current_main_sha, stillMovingMain);
  assert.equal(report.apply_time_adoption_required, true);
  assert.deepEqual(report.pending_apply_adoption, {
    status: "required",
    from_base_sha: firstAdvancedMain,
    observed_main_sha: stillMovingMain,
    drift_commit_count: 7,
    drift_file_count: 1,
    drift_paths_sha256: createHash("sha256").update("docs/main-drift.md").digest("hex"),
    exhausted_revalidations: 1,
  });
  assert.equal(result.merge_preflight[0].reviewed_base_sha, firstAdvancedMain);
  assert.equal(
    result.merge_preflight[0].base_adoption_manifest.reviewed_base_sha,
    firstAdvancedMain,
  );
  assert.match(result.actions[0].evidence.join("\n"), /apply must adopt from validated base/);
  assert.equal(Number(fs.readFileSync(fixture.codexCountPath, "utf8")), 1);
  assert.equal(
    fs.readFileSync(fixture.pnpmCommandsPath, "utf8").match(/check:changed/g)?.length,
    2,
  );

  const reviewed = spawnSync(process.execPath, ["scripts/review-results.mjs", fixture.runDir], {
    cwd: repoRoot,
    encoding: "utf8",
  });
  assert.equal(reviewed.status, 0, reviewed.stderr || reviewed.stdout);
});

test("external merge preflight hands bounded disjoint runtime drift to no-model adoption", () => {
  const fixture = makeFixture({
    refreshedMainSha: "9".repeat(40),
    refreshedMainFiles: ["src/other/unrelated.ts"],
  });
  const { report, result } = runPreflightFixture(fixture, {
    CLOWNFISH_EXTERNAL_PREFLIGHT_MAX_BASE_REVALIDATIONS: "0",
  });

  assert.equal(report.status, "passed", report.reason);
  assert.equal(report.apply_time_adoption_required, true);
  assert.deepEqual(report.pending_apply_adoption, {
    status: "required",
    from_base_sha: fixture.baseSha,
    observed_main_sha: "9".repeat(40),
    drift_commit_count: 7,
    drift_file_count: 1,
    drift_paths_sha256: createHash("sha256")
      .update("src/other/unrelated.ts")
      .digest("hex"),
    exhausted_revalidations: 0,
  });
  assert.equal(result.actions.length, 1);
  assert.equal(result.merge_preflight[0].base_adoption_manifest.reviewed_base_sha, fixture.baseSha);
});

test("external merge preflight blocks main drift that overlaps the reviewed diff", () => {
  const fixture = makeFixture({
    refreshedMainSha: "9".repeat(40),
    refreshedMainFiles: ["src/effective.ts"],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /changed reviewed path\(s\).*src\/effective\.ts/);
});

test("external merge preflight blocks main drift beyond the bounded reuse window", () => {
  const fixture = makeFixture({
    refreshedMainSha: "9".repeat(40),
    refreshedMainCommitCount: 21,
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /advanced beyond the bounded review-reuse window.*commits 21\/20/);
});

test("external merge preflight reruns Codex review for same-area main drift", () => {
  const fixture = makeFixture({
    refreshedMainSha: "9".repeat(40),
    refreshedMainFiles: ["src/other.ts"],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
  assert.equal(report.codex_reviewed_base_sha, "9".repeat(40));
  assert.equal(report.base_drift_proof.segments[0]?.codex_rereview, true);
  assert.equal(Number(fs.readFileSync(fixture.codexCountPath, "utf8")), 2);
  assert.equal(Number(fs.readFileSync(fixture.codexVersionCountPath, "utf8")), 2);
  assert.equal(Number(fs.readFileSync(fixture.codexCloneCountPath, "utf8")), 2);
  assert.equal(fs.existsSync(path.join(fixture.runDir, "codex")), false);
});

test("external merge preflight rejects stale Codex output during a required rereview", () => {
  const fixture = makeFixture({
    refreshedMainSha: "9".repeat(40),
    refreshedMainFiles: ["src/other.ts"],
    codexSkipsSecondWrite: true,
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /Codex \/review did not write structured output/);
  assert.equal(Number(fs.readFileSync(fixture.codexCountPath, "utf8")), 2);
});

test("external merge preflight treats zero-finding clean reviews as clean", () => {
  const fixture = makeFixture({
    codexReview: {
      status: "clean",
      summary: "No blocking findings; best-fix verdict: best for this scope.",
      findings: [],
      findings_addressed: false,
      evidence: [
        `No findings were emitted at ${codexDependency.commit}; ../codex/codex-rs/exec/src/lib.rs:583 was inspected.`,
      ],
    },
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "passed");
});

test("external merge preflight polls transient unknown mergeability", () => {
  const fixture = makeFixture({
    mergeViews: [
      { mergeable: "UNKNOWN", mergeStateStatus: "UNKNOWN" },
      { mergeable: "MERGEABLE", mergeStateStatus: "CLEAN" },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
        CLOWNFISH_MERGEABLE_POLL_DELAY_MS: "0",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const result = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "result.json"), "utf8"));
  assert.equal(result.actions.length, 1);
  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "passed");
});

test("external merge preflight refreshes REST before every GraphQL mergeability attempt", () => {
  const fixture = makeFixture({
    restSnapshots: [
      { mergeable: null, mergeable_state: "unknown" },
      { mergeable: true, mergeable_state: "unstable" },
    ],
    mergeViews: [
      {
        mergeable: "UNKNOWN",
        mergeStateStatus: "UNKNOWN",
        potentialMergeCommit: { oid: "d".repeat(40) },
      },
    ],
  });
  const { report } = runPreflightFixture(fixture, {
    CLOWNFISH_MERGEABLE_POLL_ATTEMPTS: "2",
    CLOWNFISH_MERGEABLE_POLL_DELAY_MS: "0",
  });

  assert.equal(report.status, "passed", report.reason);
  assert.deepEqual(snapshotCallKinds(fixture.ghCallsPath).slice(0, 4), [
    "rest",
    "graphql",
    "rest",
    "graphql",
  ]);
});

for (const [name, mergeView] of [
  ["head", { headRefOid: "9".repeat(40) }],
  ["base", { baseRefOid: "8".repeat(40) }],
]) {
  test(`external merge preflight blocks persistent REST/GraphQL ${name} identity mismatch`, () => {
    const fixture = makeFixture({ mergeViews: [mergeView] });
    const { report } = runPreflightFixture(fixture, {
      CLOWNFISH_MERGEABLE_POLL_ATTEMPTS: "2",
      CLOWNFISH_MERGEABLE_POLL_DELAY_MS: "0",
    });

    assert.equal(report.status, "blocked");
    assert.match(report.reason, new RegExp(`${name}.*REST.*GraphQL|REST.*GraphQL.*${name}`, "i"));
  });
}

test("external merge preflight retries an identity mismatch with a fresh REST snapshot", () => {
  const fixture = makeFixture({
    mergeViews: [
      { baseRefOid: "8".repeat(40) },
      { baseRefOid: "b".repeat(40) },
    ],
  });
  const { report } = runPreflightFixture(fixture, {
    CLOWNFISH_MERGEABLE_POLL_ATTEMPTS: "2",
    CLOWNFISH_MERGEABLE_POLL_DELAY_MS: "0",
  });

  assert.equal(report.status, "passed", report.reason);
  assert.deepEqual(snapshotCallKinds(fixture.ghCallsPath).slice(0, 4), [
    "rest",
    "graphql",
    "rest",
    "graphql",
  ]);
});

for (const [kind, firstView] of [
  ["mergeability", { mergeable: "CONFLICTING", mergeStateStatus: "CLEAN" }],
  ["merge state", { mergeable: "MERGEABLE", mergeStateStatus: "UNSTABLE" }],
]) {
  test(`external merge preflight retries transient REST/GraphQL ${kind} disagreement`, () => {
    const fixture = makeFixture({
      restSnapshots: [{ mergeable: true, mergeable_state: "clean" }],
      mergeViews: [firstView, { mergeable: "MERGEABLE", mergeStateStatus: "CLEAN" }],
    });
    const { report } = runPreflightFixture(fixture, {
      CLOWNFISH_MERGEABLE_POLL_ATTEMPTS: "2",
      CLOWNFISH_MERGEABLE_POLL_DELAY_MS: "0",
    });

    assert.equal(report.status, "passed", report.reason);
    assert.deepEqual(snapshotCallKinds(fixture.ghCallsPath).slice(0, 4), [
      "rest",
      "graphql",
      "rest",
      "graphql",
    ]);
  });
}

for (const [kind, mergeView, reason] of [
  ["mergeability", { mergeable: "CONFLICTING", mergeStateStatus: "CLEAN" }, /REST and GraphQL mergeability disagree/i],
  ["merge state", { mergeable: "MERGEABLE", mergeStateStatus: "UNSTABLE" }, /REST and GraphQL merge state disagree/i],
]) {
  test(`external merge preflight blocks persistent REST/GraphQL ${kind} disagreement after retries`, () => {
    const fixture = makeFixture({
      restSnapshots: [{ mergeable: true, mergeable_state: "clean" }],
      mergeViews: [mergeView],
    });
    const { report } = runPreflightFixture(fixture, {
      CLOWNFISH_MERGEABLE_POLL_ATTEMPTS: "2",
      CLOWNFISH_MERGEABLE_POLL_DELAY_MS: "0",
    });

    assert.equal(report.status, "blocked");
    assert.match(report.reason, reason);
    assert.deepEqual(snapshotCallKinds(fixture.ghCallsPath).slice(0, 4), [
      "rest",
      "graphql",
      "rest",
      "graphql",
    ]);
  });
}

test("external merge preflight maps authoritative REST conflicts into unknown GraphQL fields", () => {
  const fixture = makeFixture({
    restSnapshots: [{ mergeable: false, mergeable_state: "dirty" }],
    mergeViews: [{ mergeable: "UNKNOWN", mergeStateStatus: "UNKNOWN" }],
  });
  const { report } = runPreflightFixture(fixture, {
    CLOWNFISH_MERGEABLE_POLL_ATTEMPTS: "1",
  });

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /PR mergeability is CONFLICTING/);
  assert.match(report.reason, /PR merge state is DIRTY/);
});

test("external merge preflight blocks unsupported REST merge states", () => {
  const fixture = makeFixture({
    restSnapshots: [{ mergeable: true, mergeable_state: "mystery" }],
  });
  const { report } = runPreflightFixture(fixture, {
    CLOWNFISH_MERGEABLE_POLL_ATTEMPTS: "1",
  });

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /unsupported REST merge state/i);
});

test("external merge preflight blocks exhausted REST null mergeability", () => {
  const fixture = makeFixture({
    restSnapshots: [{ mergeable: null, mergeable_state: "unknown" }],
  });
  const { report } = runPreflightFixture(fixture, {
    CLOWNFISH_MERGEABLE_POLL_ATTEMPTS: "2",
    CLOWNFISH_MERGEABLE_POLL_DELAY_MS: "0",
  });

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /REST mergeability.*did not settle/i);
});

test("external merge preflight blocks REST/GraphQL test merge disagreement", () => {
  const fixture = makeFixture({
    restSnapshots: [{ merge_commit_sha: "7".repeat(40) }],
    mergeViews: [{ potentialMergeCommit: { oid: "6".repeat(40) } }],
  });
  const { report } = runPreflightFixture(fixture, {
    CLOWNFISH_MERGEABLE_POLL_ATTEMPTS: "1",
  });

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /test merge.*REST.*GraphQL|REST.*GraphQL.*test merge/i);
});

for (const mergeStateStatus of ["BLOCKED", "BEHIND"]) {
  test(`external merge preflight accepts ${mergeStateStatus.toLowerCase()} state for exact review`, () => {
    const fixture = makeFixture({
      mergeStateStatus,
      statusCheckRollup: [
        {
          name: "CI",
          workflowName: "CI",
          status: "COMPLETED",
          conclusion: "SUCCESS",
          completedAt: "2026-07-06T20:25:00Z",
        },
      ],
    });
    const { report, result } = runPreflightFixture(fixture);

    assert.equal(report.status, "passed", report.reason);
    assert.equal(result.actions[0].expected_head_sha, fixture.headSha);
  });
}

test("external merge preflight ignores a cancelled ClawSweeper dispatch on a behind head", () => {
  const fixture = makeFixture({
    mergeStateStatus: "BEHIND",
    statusCheckRollup: [
      {
        name: "CI",
        workflowName: "CI",
        status: "COMPLETED",
        conclusion: "SUCCESS",
        completedAt: "2026-07-06T20:25:00Z",
      },
      {
        name: "dispatch",
        workflowName: "ClawSweeper Dispatch",
        status: "COMPLETED",
        conclusion: "CANCELLED",
        completedAt: "2026-07-06T20:26:00Z",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight tolerates non-actionable automation comments", () => {
  const fixture = makeFixture({
    mergeStateStatus: "UNSTABLE",
    pullLabels: [{ name: "status: ready for maintainer look" }, { name: "proof: sufficient" }],
    statusCheckRollup: [
      {
        name: "Real behavior proof",
        workflowName: "Real behavior proof",
        status: "COMPLETED",
        conclusion: "CANCELLED",
        startedAt: "2026-06-18T16:38:09Z",
        completedAt: "2026-06-18T16:38:12Z",
      },
      {
        name: "Real behavior proof",
        workflowName: "Real behavior proof",
        status: "COMPLETED",
        conclusion: "SUCCESS",
        startedAt: "2026-06-19T03:15:11Z",
        completedAt: "2026-06-19T03:15:25Z",
      },
    ],
    issueComments: [
      {
        author: { login: "clawsweeper" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "",
          "Result: ready for maintainer review.",
          "",
          "**Next step before merge**",
          "- [P2] No repair job is needed; the remaining action is the maintainer or automerge path for this exact head after normal checks and mergeability gates.",
          "",
          "**Maintainer options:**",
          "1. **Decide the mitigation before merge**",
          "   Land the narrow fix after normal maintainer review.",
          "2. **Pause or close**",
          "   Do not merge this PR until maintainers decide whether the risk is worth taking.",
          "",
          "**Security**",
          "Cleared: Security review cleared: the diff does not touch credentials, auth, dependencies, workflows, package resolution, or code execution surfaces.",
          "",
          "<!-- clawsweeper-verdict:needs-human item=123 sha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa confidence=high -->",
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "vincentkoc" },
        authorAssociation: "MEMBER",
        body: [
          "<!-- clownfish-command:4748167943:2026-06-19T03:09:29Z:automerge:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->",
          "Clownfish is on the reef for this PR.",
          "",
          "I tagged `clownfish:automerge` and sent ClawSweeper over this exact head. If the sweep finds rough coral, failing checks, or `needs-human`, I will take another bounded repair lap.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
      {
        author: { login: "openclaw-clownfish[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: "Clownfish is on the reef for this PR. I tagged `clownfish:automerge`.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-3",
      },
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: "@clawsweeper re-review",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-5",
      },
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "<!-- clawsweeper-pr-ack:opened item=123 -->",
          "🦞👀",
          "ClawSweeper picked this up.",
          "",
          "Pull request received.",
          "I will update this pull request when review starts.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-6",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "passed");
});

test("external merge preflight accepts the current ClawSweeper ready-review presentation", () => {
  const fixture = makeFixture({
    issueComments: [
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "# ClawSweeper review",
          "",
          "## Merge readiness",
          "",
          "⚠️ **Ready for maintainer review - 3 items remain**",
          "",
          "## Verification",
          "",
          "| Check | Result | Evidence |",
          "|---|---|---|",
          "| **Findings** | None | None. |",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-current-ready",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight accepts a maintainer exact-head proof summary", () => {
  const fixture = makeFixture({
    issueComments: [
      {
        author: { login: "maintainer" },
        authorAssociation: "MEMBER",
        body: [
          `Exact-head configured-service proof for \`${"b".repeat(40)}\`:`,
          "",
          "- Artifact SHA-256: `0123456789abcdef`",
          "- Endpoint verified cold before the request",
          "- Focused tests passed",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-proof",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight ignores a stale ready review and exact-head ClawSweeper review-start lease", () => {
  const headSha = "a".repeat(40);
  const startedAt = new Date(Date.now() - 60_000).toISOString();
  const leaseExpiresAt = new Date(Date.now() + 30 * 60_000).toISOString();
  const fixture = makeFixture({
    headSha,
    issueComments: [
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "Result: ready for maintainer review.",
          "",
          "**Next step before merge**",
          "- No automated repair is needed; the remaining action is normal maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"b".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-stale-ready",
      },
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "ClawSweeper status: review started.",
          "",
          "I am starting a fresh review of this pull request.",
          "",
          "This placeholder means the worker is alive and reading the current context.",
          "",
          `<!-- clawsweeper-review-status:started item=123 sha=${headSha} started_at=${startedAt} lease_expires_at=${leaseExpiresAt} v=1 -->`,
          "<!-- clawsweeper-review-lease item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-review-started",
      },
    ],
  });
  const { report, result } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
  assert.equal(result.actions[0]?.action, "merge_canonical");
});

for (const [name, startedAt, leaseExpiresAt, extraLine, trailingLine = ""] of [
  [
    "expired",
    "1999-12-31T23:30:00.000Z",
    "2000-01-01T00:00:00.000Z",
    "This placeholder means the worker is alive and reading the current context.",
  ],
  [
    "contradictory",
    new Date(Date.now() - 60_000).toISOString(),
    new Date(Date.now() + 30 * 60_000).toISOString(),
    "Do not merge; security issue remains.",
  ],
  [
    "trailing contradictory",
    new Date(Date.now() - 60_000).toISOString(),
    new Date(Date.now() + 30 * 60_000).toISOString(),
    "This placeholder means the worker is alive and reading the current context.",
    "Do not merge; security issue remains.",
  ],
]) {
  test(`external merge preflight keeps ${name} ClawSweeper review-start leases blocking`, () => {
    const headSha = "a".repeat(40);
    const fixture = makeFixture({
      headSha,
      issueComments: [
        {
          author: { login: "clawsweeper[bot]" },
          authorAssociation: "CONTRIBUTOR",
          body: [
            "Codex review: needs maintainer review before merge.",
            "",
            "**Review metrics:** none identified.",
            "Result: ready for maintainer review.",
            "",
            "**Next step before merge**",
            "- No automated repair is needed; the remaining action is normal maintainer review.",
            "",
            `<!-- clawsweeper-verdict:needs-human item=123 sha=${"b".repeat(40)} confidence=high -->`,
            "<!-- clawsweeper-review item=123 -->",
          ].join("\n"),
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-stale-ready",
        },
        {
          author: { login: "clawsweeper[bot]" },
          authorAssociation: "CONTRIBUTOR",
          body: [
            "ClawSweeper status: review started.",
            "",
            extraLine,
            "",
            `<!-- clawsweeper-review-status:started item=123 sha=${headSha} started_at=${startedAt} lease_expires_at=${leaseExpiresAt} v=1 -->`,
            "<!-- clawsweeper-review-lease item=123 -->",
            trailingLine,
          ].join("\n"),
          url: `https://github.com/openclaw/openclaw/pull/123#issuecomment-review-started-${name}`,
        },
      ],
    });
    const { report } = runPreflightFixture(fixture);

    assert.equal(report.status, "blocked");
    assert.match(report.reason, /security-sensitive signal|actionable top-level issue comment/);
  });
}

for (const [name, body] of [
  [
    "unmarked",
    [
      "ClawSweeper status: review started.",
      "",
      "I am starting a fresh review of this pull request.",
    ].join("\n"),
  ],
  [
    "wrong item",
    [
      "ClawSweeper status: review started.",
      "",
      `<!-- clawsweeper-review-status:started item=456 sha=${"a".repeat(40)} started_at=2026-07-11T22:30:53.000Z lease_expires_at=2026-07-11T23:00:53.000Z v=1 -->`,
      "<!-- clawsweeper-review-lease item=456 -->",
    ].join("\n"),
  ],
]) {
  test(`external merge preflight keeps ${name} ClawSweeper review-start prose blocking`, () => {
    const fixture = makeFixture({
      issueComments: [
        {
          author: { login: "clawsweeper[bot]" },
          authorAssociation: "CONTRIBUTOR",
          body,
          url: `https://github.com/openclaw/openclaw/pull/123#issuecomment-${name}`,
        },
      ],
    });
    const { report } = runPreflightFixture(fixture);

    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
  });
}

test("external merge preflight accepts current guard clearance and structured author proof", () => {
  const headSha = "a".repeat(40);
  const fixture = makeFixture({
    headSha,
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "github-actions[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "<!-- openclaw:dependency-graph-guard -->",
          "",
          "### Dependency graph guard cleared",
          "",
          "This PR no longer has blocked dependency graph changes. A future dependency graph change requires a fresh `/allow-dependencies-change` comment after the guard blocks that new head SHA.",
          "",
          `- Current SHA: \`${headSha}\``,
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "## Real Behavior Proof",
          "",
          "### System Environment",
          "- OS: Linux 4.19.112-2.el8.x86_64",
          "- lsof version: available at /usr/bin/lsof",
          "- Test date: 2026-07-01 18:35 UTC",
          "",
          "### Raw lsof Output (Sample)",
          "```bash",
          "$ lsof -nP -iTCP -sTCP:LISTEN -FpFcn | head -30",
          "p5897",
          "cwpscloudsvr",
          "n127.0.0.1:58890",
          "```",
          "",
          "### Behavior Verification",
          "The fix ensures that only process records with valid positive PIDs are accepted.",
          "",
          "**Before this fix**: A malformed `p` record (e.g., `p-1` or `pabc`) followed by address lines would create listener entries with invalid or missing PIDs.",
          "",
          "**After this fix**: The parser at `src/infra/ports-inspect.ts:55-56` validates that parsed PIDs are positive integers before accepting them:",
          "```typescript",
          "const pid = Number.parseInt(line.slice(1), 10);",
          "processFields = Number.isFinite(pid) && pid > 0 ? { pid } : {};",
          "```",
          "",
          "This means subsequent address lines (`n...`) are only attached to valid process records, preventing phantom listeners in diagnostic output.",
          "",
          "### Test Coverage",
          "Unit tests verify this behavior:",
          "- Valid PIDs (positive integers) → accepted",
          "- Invalid PIDs (negative, non-numeric, or missing) → skipped",
          "- Address lines without valid PID context → ignored",
          "",
          "All 14 tests in `src/infra/ports.test.ts` pass, confirming the fix works correctly.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const { report, result } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
  assert.equal(result.actions[0]?.action, "merge_canonical");
});

for (const [name, proofLines] of [
  [
    "ongoing failure hidden in historical line",
    [
      "### Behavior Verification",
      "**Before this fix**: valid listeners were missing, and they are still missing.",
      "- Invalid PIDs (negative, non-numeric, or missing) → skipped",
      "### Test Coverage",
      "- All 14 focused tests passed.",
    ],
  ],
  [
    "mismatched parser snippets",
    [
      "### Behavior Verification",
      "- Invalid PIDs (negative, non-numeric, or missing) → skipped",
      "```typescript",
      "const pid = Number.parseInt(line.slice(1), 10);",
      "processFields = pid === undefined ? {} : { pid };",
      "```",
      "### Test Coverage",
      "- All 14 focused tests passed.",
    ],
  ],
  [
    "environment metadata with trailing prose",
    [
      "### System Environment",
      "- OS: Linux wrong process",
      "### Behavior Verification",
      "- Invalid PIDs (negative, non-numeric, or missing) → skipped",
      "### Test Coverage",
      "- All 14 focused tests passed.",
    ],
  ],
  [
    "accepted assertion with unrelated qualifier",
    [
      "### Behavior Verification",
      "- Valid PIDs from the wrong process are accepted.",
      "### Test Coverage",
      "- All 14 focused tests passed.",
    ],
  ],
  [
    "negative assertion with exception",
    [
      "### Behavior Verification",
      "- No invalid records except malformed rows are accepted.",
      "### Test Coverage",
      "- All 14 focused tests passed.",
    ],
  ],
  [
    "passing test claim with current failure",
    [
      "### Behavior Verification",
      "- Invalid PIDs (negative, non-numeric, or missing) → skipped",
      "### Test Coverage",
      "All 14 tests pass, but the parser returns the wrong process.",
    ],
  ],
  [
    "invalid calendar timestamp",
    [
      "### System Environment",
      "- Test date: 2026-99-99 99:99 UTC",
      "### Behavior Verification",
      "- Invalid PIDs (negative, non-numeric, or missing) → skipped",
      "### Test Coverage",
      "- All 14 focused tests passed.",
    ],
  ],
  [
    "zero passing tests",
    [
      "### Behavior Verification",
      "- Invalid PIDs (negative, non-numeric, or missing) → skipped",
      "### Test Coverage",
      "- All 0 focused tests passed.",
    ],
  ],
]) {
  test(`external merge preflight rejects malformed structured proof: ${name}`, () => {
    const fixture = makeFixture({
      pullUser: { login: "contributor" },
      issueComments: [
        {
          author: { login: "contributor" },
          authorAssociation: "CONTRIBUTOR",
          body: ["## Real Behavior Proof", ...proofLines].join("\n"),
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
        },
      ],
    });
    const { report } = runPreflightFixture(fixture);

    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
  });
}

test("external merge preflight accepts the objection-loop control proof", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "## Real Behavior Proof",
          "### Behavior Verification",
          "- Valid PIDs (positive integers) → accepted",
          "- Invalid PIDs (negative, non-numeric, or missing) → skipped",
          "### Test Coverage",
          "- All 14 focused tests passed.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight accepts author behavior proof follow-up comments", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Behavior proof follow-up for the ClawSweeper note:",
          "",
          "- Focused command: `node scripts/run-vitest.mjs src/plugins/document-extractors.runtime.test.ts`",
          "- Result: passed locally, 1 test file / 5 tests.",
          "- Regression assertion: an explicit empty allowlist resolves to no extractors.",
          "- Scope: local document extractor resolver; no live service or key required.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight accepts author exact-head re-review status comments", () => {
  const headSha = "a".repeat(40);
  const fixture = makeFixture({
    headSha,
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "@clawsweeper re-review",
          "",
          "Branch refreshed onto the merged CI baseline fix at upstream/main.",
          "The review finding was addressed with shared resolver and regression proof.",
          "",
          `Latest head: ${headSha}`,
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "@clawsweeper re-review",
          "",
          `Please re-review current head \`${headSha}\`.`,
          "The PR evidence includes controlled proof showing the blank query returns before provider bootstrap.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
});

for (const objection of [
  "Known failure: valid listeners are skipped on Alpine.",
  "- Invalid listener records are accepted.",
  "- The parser still accepts malformed PID rows.",
  "- Known defect: malformed rows still create listeners.",
  "- No valid listeners are accepted.",
  "- Invalid PIDs are allowed.",
  "- Malformed rows produce listener entries.",
  "- Known issue fixed; current risk remains: valid listeners disappear.",
  "### The parser loses listeners on Alpine",
  "**After this fix**: The parser validates PIDs, but still loses valid listeners.",
  "The fix ensures strict parsing, but still loses valid listeners.",
  "This means only valid records attach, but the parser still loses listeners.",
  "- OS: Linux; the parser still loses valid listeners.",
  "```text\nThe parser still loses valid listeners.\n```",
  "The parser validates PIDs, but returns the wrong process.",
  "The fix ensures strict parsing, except listener ownership remains incorrect.",
  "This means only valid records attach, but duplicate listeners remain.",
  "```typescript\nThe parser returns the wrong process.\n```",
  "- OS: Linux; the parser returns the wrong process",
]) {
  test(`external merge preflight blocks inverted author proof: ${objection}`, () => {
    const fixture = makeFixture({
      pullUser: { login: "contributor" },
      issueComments: [
        {
          author: { login: "contributor" },
          authorAssociation: "CONTRIBUTOR",
          body: [
            "## Real Behavior Proof",
            "",
            "### Behavior Verification",
            "- Valid PIDs (positive integers) → accepted",
            "- Invalid PIDs (negative, non-numeric, or missing) → skipped",
            "",
            objection,
            "",
            "### Test Coverage",
            "- All 14 focused tests passed.",
          ].join("\n"),
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
        },
      ],
    });
    const { report } = runPreflightFixture(fixture);

    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
  });
}

for (const resolvedEvidence of [
  "- Known issue fixed.",
  "- Remaining issue count: 0.",
  "- No valid listeners are skipped.",
  "- No invalid listeners are accepted.",
  "**Before this fix**: valid listeners were still missing.",
  "**Before this fix**: Known issue: valid listeners were missing.",
]) {
  test(`external merge preflight accepts resolved author proof: ${resolvedEvidence}`, () => {
    const fixture = makeFixture({
      pullUser: { login: "contributor" },
      issueComments: [
        {
          author: { login: "contributor" },
          authorAssociation: "CONTRIBUTOR",
          body: [
            "## Real Behavior Proof",
            "",
            "### Behavior Verification",
            resolvedEvidence,
            "- Invalid PIDs (negative, non-numeric, or missing) → skipped",
            "",
            "### Test Coverage",
            "- All 14 focused tests passed.",
          ].join("\n"),
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
        },
      ],
    });
    const { report, result } = runPreflightFixture(fixture);

    assert.equal(report.status, "passed", report.reason);
    assert.equal(result.actions[0]?.action, "merge_canonical");
  });
}

test("external merge preflight ignores #89997 positive review, maintainer status, and review command comments", () => {
  const fixture = makeFixture({
    pullUser: { login: "kenners22" },
    issueComments: [
      {
        author: { login: "clawsweeper" },
        authorAssociation: "CONTRIBUTOR",
        isMinimized: false,
        body: [
          "Codex review: needs maintainer review before merge. _Reviewed July 6, 2026, 11:18 AM ET / 15:18 UTC._",
          "",
          "**Review metrics:** 1 noteworthy metric.",
          "",
          "**Merge readiness**",
          "Result: ready for maintainer review.",
          "",
          "**Next step before merge**",
          "- No automated repair is needed; the patch looks correct and the remaining action is maintainer landing review for the clean exact head.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/89997#issuecomment-review",
      },
      {
        author: { login: "vincentkoc" },
        authorAssociation: "MEMBER",
        isMinimized: false,
        body: [
          "Clownfish reef update",
          "",
          "Thanks for the contribution here. Clownfish kept this PR as the main lane.",
          "",
          "Source PR: https://github.com/openclaw/openclaw/pull/89997",
          "Validation: git diff --check; node scripts/run-vitest.mjs src/cli/command-startup-policy.test.ts; pnpm check:changed",
          "Contributor credit stays on this marker, with the PR history doing the receipts.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/89997#issuecomment-status",
      },
      {
        author: { login: "vincentkoc" },
        authorAssociation: "MEMBER",
        isMinimized: false,
        body: "@clawsweeper re-review",
        url: "https://github.com/openclaw/openclaw/pull/89997#issuecomment-command",
      },
      {
        author: { login: "reviewer" },
        authorAssociation: "CONTRIBUTOR",
        isMinimized: true,
        minimizedReason: "OUTDATED",
        body: "Please fix the startup stdout regression before merge.",
        url: "https://github.com/openclaw/openclaw/pull/89997#issuecomment-minimized",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "passed", report.reason);
});

const maintainerRefreshComment = [
  "Maintainer refresh complete at `0a1b721ae6a1a4eeffd21d0b31ad4969cb0f2d53`.",
  "",
  "- Enforced the MCP Streamable HTTP handshake boundary.",
  "- Added a focused regression proving the request order and bounded error.",
  "- Exact-head CI: green.",
  "",
  "Ready for the next landing batch.",
].join("\n");

test("external merge preflight trusts proof-shaped comments from live admins with stale contributor association", () => {
  const fixture = makeFixture({
    collaboratorPermissions: { steipete: "admin" },
    issueComments: [
      {
        author: { login: "steipete" },
        authorAssociation: "CONTRIBUTOR",
        isMinimized: false,
        body: maintainerRefreshComment,
        url: "https://github.com/openclaw/openclaw/pull/104554#issuecomment-4949173508",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
});

for (const [kind, objection] of [
  ["request", "Please add another regression test before merge."],
  ["finding", "I found a regression: the tool call still runs after the failed acknowledgement."],
]) {
  test(`external merge preflight keeps admin ${kind} comments blocking`, () => {
    const fixture = makeFixture({
      collaboratorPermissions: { steipete: "admin" },
      issueComments: [
        {
          author: { login: "steipete" },
          authorAssociation: "CONTRIBUTOR",
          isMinimized: false,
          body: `${maintainerRefreshComment}\n\n${objection}`,
          url: `https://github.com/openclaw/openclaw/pull/104554#issuecomment-${kind}`,
        },
      ],
    });
    const { report } = runPreflightFixture(fixture);

    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
  });
}

for (const [kind, fixtureOptions] of [
  ["read-only", { collaboratorPermissions: { steipete: "read" } }],
  ["lookup failure", { collaboratorPermissionErrors: ["steipete"] }],
]) {
  test(`external merge preflight fails closed for ${kind} proof commenters`, () => {
    const fixture = makeFixture({
      ...fixtureOptions,
      issueComments: [
        {
          author: { login: "steipete" },
          authorAssociation: "CONTRIBUTOR",
          isMinimized: false,
          body: maintainerRefreshComment,
          url: `https://github.com/openclaw/openclaw/pull/104554#issuecomment-${kind}`,
        },
      ],
    });
    const { report } = runPreflightFixture(fixture);

    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
  });
}

for (const [kind, body] of [
  [
    "ask",
    [
      "Validation: git diff --check passed.",
      "Please add a focused ACP regression test before merge.",
    ].join("\n"),
  ],
  [
    "finding",
    [
      "Validation: git diff --check passed.",
      "I found a regression: bare ACP startup still writes diagnostics to stdout.",
    ].join("\n"),
  ],
]) {
  test(`external merge preflight keeps unresolved maintainer ${kind} comments blocking`, () => {
    const fixture = makeFixture({
      issueComments: [
        {
          author: { login: "maintainer" },
          authorAssociation: "MEMBER",
          isMinimized: false,
          body,
          url: `https://github.com/openclaw/openclaw/pull/123#issuecomment-${kind}`,
        },
      ],
    });
    const { report } = runPreflightFixture(fixture);
    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
  });
}

function trustedReadyReviewComment({
  nextStep = "No automated repair is needed; the remaining action is normal maintainer review.",
} = {}) {
  return {
    author: { login: "clawsweeper[bot]" },
    authorAssociation: "CONTRIBUTOR",
    isMinimized: false,
    createdAt: "2026-07-07T01:40:00Z",
    body: [
      "Codex review: needs maintainer review before merge.",
      "",
      "**Review metrics:** none identified.",
      "",
      "Result: ready for maintainer review.",
      "",
      "**Next step before merge**",
      `- ${nextStep}`,
      "",
      `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
      "<!-- clawsweeper-review item=123 -->",
    ].join("\n"),
    url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-ready-review",
  };
}

function exactHeadReadyReviewComment({
  headSha = "a".repeat(40),
  pullRequest = 123,
  createdAt = "2026-08-26T13:05:08Z",
  updatedAt = "2026-08-26T18:19:18Z",
} = {}) {
  return {
    author: { login: "clawsweeper[bot]" },
    authorAssociation: "CONTRIBUTOR",
    isMinimized: false,
    createdAt,
    updatedAt,
    body: [
      "Codex review: needs maintainer review before merge.",
      "",
      "## Merge readiness",
      "",
      "⚠️ **Ready for maintainer review - 2 items remain**",
      "",
      "No actionable review findings were identified.",
      "",
      "| Check | Result | Evidence |",
      "|---|---|---|",
      "| **Findings** | None | None. |",
      "| **Security** | None | None. |",
      "",
      "### Rank-up moves",
      "",
      "- Allow the queued exact-head checks to complete before merging.",
      "",
      `<!-- clawsweeper-verdict:needs-human item=${pullRequest} sha=${headSha} confidence=high -->`,
      `<!-- clawsweeper-review item=${pullRequest} -->`,
    ].join("\n"),
    url: `https://github.com/openclaw/openclaw/pull/${pullRequest}#issuecomment-ready-review`,
  };
}

const LIVE_REPAIR_OUTCOME_5429512844 = `<!-- clownfish-repair-outcome:automerge-openclaw-openclaw-130108:automerge-openclaw-openclaw-130108-autonomous-2026-08-26T17-57-21-947Z:#130108 -->
Clownfish 🐠 reef automerge status

This repair lap finished without changing the PR. Clownfish checked the reef and found no safe patch to push this time.

Target: #130108
Executor outcome: base branch advanced again during validation; reuse blocked: validated_base_not_ancestor_of_head.
Worker summary: PR #130108 is the canonical item, but it is not merge-ready for this worker lane: the hydrated artifact shows it is open, non-security, behind base, has pending checks, and \`maintainer_can_modify=false\`. Because fix PRs are allowed and merges/closes are blocked, the safe path is a narrow credited replacement PR that carries forward @vincentkoc's test-only deletion.

Worker actions:
- \`fix_needed\` on \`#130108\`: planned - The useful source PR is blocked from in-place repair by \`maintainer_can_modify=false\` and is behind base; replacement is executable and preserves contributor credit.
- \`build_fix_artifact\` on \`cluster:automerge-openclaw-openclaw-130108\`: planned - Build one credited replacement PR because the canonical source branch cannot be safely updated by Clownfish.

No push, rebase, replacement PR, merge, or ClawSweeper re-review happened this swim.

fish notes: model gpt-5.5, reasoning medium.`;

const LIVE_REPAIR_OUTCOME_5430046612 = `<!-- clownfish-repair-outcome:automerge-openclaw-openclaw-130108:automerge-openclaw-openclaw-130108-autonomous-2026-08-26T18-55-12-493Z:#130108 -->
Clownfish 🐠 reef automerge status

No new branch changes from this lap. Clownfish kept the current tidy instead of splashing around.

Target: #130108
Executor outcome: base branch advanced again during validation; reuse blocked: validation_control_file_drift.
Worker summary: PR #130108 remains the canonical source item, but it is not repairable in place by this worker lane because the hydrated preflight reports \`maintainer_can_modify=false\` and \`mergeable_state=behind\`. The narrow, executable path is a credited replacement PR carrying forward @vincentkoc's one-file test-only deletion; no close or merge action is planned because the job blocks both.

Worker actions:
- \`fix_needed\` on \`#130108\`: planned - replace_uneditable_branch_needed_for_safe_automerge_repair
- \`build_fix_artifact\` on \`cluster:automerge-openclaw-openclaw-130108\`: planned - narrow_credited_replacement_pr

Clownfish left the PR as-is: no push, no rebase, no replacement PR, no merge, and no fresh ClawSweeper pass.

fish notes: model gpt-5.5, reasoning medium.`;

function repairOutcomeComment({
  createdAt,
  id,
  marker = null,
  action = "fix_needed",
  detail = "replace_uneditable_branch_needed_for_safe_automerge_repair",
  concern = "",
} = {}) {
  return {
    author: { login: "vincentkoc" },
    authorAssociation: "MEMBER",
    isMinimized: false,
    createdAt,
    body: [
      marker ??
        `<!-- clownfish-repair-outcome:automerge-openclaw-openclaw-123:automerge-openclaw-openclaw-123-autonomous-${id}:#123 -->`,
      "Clownfish 🐠 reef automerge status",
      "",
      "No new branch changes from this lap.",
      "",
      "Target: #123",
      "Executor outcome: base branch advanced during validation; reuse blocked: validation_control_file_drift.",
      "Worker summary: PR #123 remains canonical but was behind base; a credited replacement was only planned.",
      concern,
      "",
      "Worker actions:",
      `- \`${action}\` on \`#123\`: planned - ${detail}`,
      "- `build_fix_artifact` on `cluster:automerge-openclaw-openclaw-123`: planned - narrow_credited_replacement_pr",
      "",
      "Clownfish left the PR as-is: no push, no rebase, no replacement PR, no merge, and no fresh ClawSweeper pass.",
      "",
      "fish notes: model gpt-5.5, reasoning medium.",
    ]
      .filter(Boolean)
      .join("\n"),
    url: `https://github.com/openclaw/openclaw/pull/123#issuecomment-${id}`,
  };
}

function exactHeadMaintainerDecision({
  headSha = "a".repeat(40),
  pullRequest = 123,
  createdAt = "2026-08-26T22:05:24Z",
  prefix = `Maintainer decision for \`${headSha}\`: accept`,
  authorAssociation = "MEMBER",
  databaseId = 5431659670,
} = {}) {
  return {
    databaseId,
    author: { login: "vincentkoc" },
    authorAssociation,
    isMinimized: false,
    createdAt,
    updatedAt: createdAt,
    body: [
      `${prefix} this test-only cleanup; the retained identity-aware lifecycle E2E remains the canonical owner, and exact-head CI is green.`,
      "Clownfish must validate the current-main effective diff through the exact merge gate.",
      "No branch repair, rebase, or replacement PR is requested.",
    ].join(" "),
    url: `https://github.com/openclaw/openclaw/pull/${pullRequest}#issuecomment-5431659670`,
  };
}

function liveRepairOutcomeComment({ id, createdAt, body }) {
  return {
    author: { login: "vincentkoc" },
    authorAssociation: "MEMBER",
    isMinimized: false,
    createdAt,
    body,
    url: `https://github.com/openclaw/openclaw/pull/130108#issuecomment-${id}`,
  };
}

test("external merge preflight accepts the exact #130108 repair-outcome decision sequence", () => {
  const decision = exactHeadMaintainerDecision({ pullRequest: 130108 });
  const fixture = makeFixture({
    pullRequest: 130108,
    collaboratorPermissions: { vincentkoc: "admin" },
    issueComments: [
      exactHeadReadyReviewComment({ pullRequest: 130108 }),
      liveRepairOutcomeComment({
        id: "5429512844",
        createdAt: "2026-08-26T18:35:12Z",
        body: LIVE_REPAIR_OUTCOME_5429512844,
      }),
      liveRepairOutcomeComment({
        id: "5430046612",
        createdAt: "2026-08-26T19:24:15Z",
        body: LIVE_REPAIR_OUTCOME_5430046612,
      }),
      decision,
    ],
  });
  const { report, result } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
  assert.deepEqual(result.merge_preflight[0].decision_authority, {
    schema_version: 1,
    comment_id: String(decision.databaseId),
    author_login: "vincentkoc",
    head_sha: fixture.headSha,
    body_sha256: createHash("sha256").update(decision.body).digest("hex"),
    comment_updated_at: decision.updatedAt,
  });
});

test("external merge preflight keeps repeated valid exact-head decisions benign and uses the latest boundary", () => {
  const fixture = makeFixture({
    pullRequest: 130108,
    collaboratorPermissions: { vincentkoc: "admin" },
    issueComments: [
      exactHeadReadyReviewComment({ pullRequest: 130108 }),
      liveRepairOutcomeComment({
        id: "5429512844",
        createdAt: "2026-08-26T18:35:12Z",
        body: LIVE_REPAIR_OUTCOME_5429512844,
      }),
      exactHeadMaintainerDecision({ pullRequest: 130108, createdAt: "2026-08-26T19:00:00Z" }),
      liveRepairOutcomeComment({
        id: "5430046612",
        createdAt: "2026-08-26T19:24:15Z",
        body: LIVE_REPAIR_OUTCOME_5430046612,
      }),
      exactHeadMaintainerDecision({ pullRequest: 130108 }),
    ],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight decision authority accepts stale CONTRIBUTOR association with live admin permission", () => {
  const fixture = makeFixture({
    pullRequest: 130108,
    collaboratorPermissions: { vincentkoc: "admin" },
    issueComments: [
      exactHeadReadyReviewComment({ pullRequest: 130108 }),
      liveRepairOutcomeComment({
        id: "5430046612",
        createdAt: "2026-08-26T19:24:15Z",
        body: LIVE_REPAIR_OUTCOME_5430046612,
      }),
      exactHeadMaintainerDecision({
        pullRequest: 130108,
        authorAssociation: "CONTRIBUTOR",
      }),
    ],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "passed", report.reason);
});

for (const [name, permissionOptions] of [
  ["rejects MEMBER association with live read permission", { collaboratorPermissions: { vincentkoc: "read" } }],
  ["blocks permission lookup failure", { collaboratorPermissionErrors: ["vincentkoc"] }],
]) {
  test(`external merge preflight decision authority ${name}`, () => {
    const fixture = makeFixture({
      pullRequest: 130108,
      ...permissionOptions,
      issueComments: [
        exactHeadReadyReviewComment({ pullRequest: 130108 }),
        liveRepairOutcomeComment({
          id: "5430046612",
          createdAt: "2026-08-26T19:24:15Z",
          body: LIVE_REPAIR_OUTCOME_5430046612,
        }),
        exactHeadMaintainerDecision({ pullRequest: 130108 }),
      ],
    });
    const { report } = runPreflightFixture(fixture);

    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
    const ghCalls = fs
      .readFileSync(fixture.ghCallsPath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line));
    assert.equal(ghCalls.some((args) => args[0] === "repo" && args[1] === "clone"), false);
    assert.equal(fs.existsSync(fixture.codexCloneCountPath), false);
    assert.equal(fs.existsSync(fixture.codexCountPath), false);
    assert.equal(fs.existsSync(fixture.mergeLogPath), false);
  });
}

test("external merge preflight refreshes exact-head decision authority for final blockers", () => {
  const fixture = makeFixture({
    pullRequest: 130108,
    collaboratorPermissions: { vincentkoc: ["admin", "read"] },
    issueComments: [
      exactHeadReadyReviewComment({ pullRequest: 130108 }),
      liveRepairOutcomeComment({
        id: "5430046612",
        createdAt: "2026-08-26T19:24:15Z",
        body: LIVE_REPAIR_OUTCOME_5430046612,
      }),
      exactHeadMaintainerDecision({ pullRequest: 130108 }),
    ],
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
  const permissionCalls = fs
    .readFileSync(fixture.ghCallsPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line))
    .filter(
      (args) =>
        args[0] === "api" &&
        args[1].includes("/collaborators/vincentkoc/permission"),
    );
  assert.equal(permissionCalls.length, 2);
  assert.equal(fs.existsSync(fixture.mergeLogPath), false);
});

for (const [name, body] of [
  ["wrong fix target", LIVE_REPAIR_OUTCOME_5430046612.replace("`#130108`: planned", "`#130109`: planned")],
  ["wrong artifact target", LIVE_REPAIR_OUTCOME_5430046612.replace("`cluster:automerge-openclaw-openclaw-130108`: planned", "`cluster:wrong`: planned")],
  ["missing companion action", LIVE_REPAIR_OUTCOME_5430046612.replace(/\n- `build_fix_artifact`[^\n]+/, "")],
  ["duplicate action", LIVE_REPAIR_OUTCOME_5430046612.replace(/(- `fix_needed`[^\n]+)/, "$1\n$1")],
  ["marker pull mismatch", LIVE_REPAIR_OUTCOME_5430046612.replace(":#130108 -->", ":#130109 -->")],
  ["marker run mismatch", LIVE_REPAIR_OUTCOME_5430046612.replace("automerge-openclaw-openclaw-130108-autonomous-", "automerge-openclaw-openclaw-130109-autonomous-")],
]) {
  test(`external merge preflight keeps repair outcome with ${name} blocking`, () => {
    const fixture = makeFixture({
      pullRequest: 130108,
      collaboratorPermissions: { vincentkoc: "admin" },
      issueComments: [
        exactHeadReadyReviewComment({ pullRequest: 130108 }),
        liveRepairOutcomeComment({
          id: "5430046612",
          createdAt: "2026-08-26T19:24:15Z",
          body,
        }),
        exactHeadMaintainerDecision({ pullRequest: 130108 }),
      ],
    });
    const { report } = runPreflightFixture(fixture);

    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
  });
}

for (const [name, objection] of [
  ["do-not-merge objection", "Do not merge this PR."],
  ["unsafe-to-merge objection", "This PR is not safe to merge."],
  ["hold-merge objection", "Hold the merge until validation is repaired."],
  ["blocked objection", "The PR remains blocked."],
  ["changes-requested objection", "Changes requested: address the defect."],
  ["requested-changes objection", "Requested changes remain unresolved."],
  ["severity-tagged finding", "[P1] Package provenance binding is broken."],
  ["unresolved defect", "An unresolved defect remains in package provenance binding."],
  ["remaining bug", "A bug remains in package provenance binding."],
  ["regression", "This is a regression in package provenance binding."],
  ["unresolved failure", "Package provenance validation failure remains unresolved."],
  ["still-fails finding", "Package provenance validation still fails."],
  ["still-broken finding", "Package provenance binding is still broken."],
  ["continued failure", "Package provenance validation continues to fail."],
]) {
  test(`external merge preflight keeps repair outcome with ${name} blocking`, () => {
    const body = LIVE_REPAIR_OUTCOME_5430046612.replace(
      "Worker summary: ",
      `Worker summary: ${objection} `,
    );
    const fixture = makeFixture({
      pullRequest: 130108,
      collaboratorPermissions: { vincentkoc: "admin" },
      issueComments: [
        exactHeadReadyReviewComment({ pullRequest: 130108 }),
        liveRepairOutcomeComment({
          id: "5430046612",
          createdAt: "2026-08-26T19:24:15Z",
          body,
        }),
        exactHeadMaintainerDecision({ pullRequest: 130108 }),
      ],
    });
    const { report } = runPreflightFixture(fixture);

    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
  });
}

for (const [name, comments] of [
  [
    "mismatched decision SHA",
    [
      exactHeadReadyReviewComment(),
      repairOutcomeComment({ id: "outcome", createdAt: "2026-08-26T19:24:15Z" }),
      exactHeadMaintainerDecision({ headSha: "9".repeat(40) }),
    ],
  ],
  [
    "generic maintainer decision",
    [
      exactHeadReadyReviewComment(),
      repairOutcomeComment({ id: "outcome", createdAt: "2026-08-26T19:24:15Z" }),
      exactHeadMaintainerDecision({ prefix: "Maintainer decision: accept" }),
    ],
  ],
  [
    "decision before ready review",
    [
      exactHeadMaintainerDecision({ createdAt: "2026-08-26T12:00:00Z" }),
      exactHeadReadyReviewComment(),
      repairOutcomeComment({ id: "outcome", createdAt: "2026-08-26T19:24:15Z" }),
    ],
  ],
  [
    "later repair outcome",
    [
      exactHeadReadyReviewComment(),
      exactHeadMaintainerDecision(),
      repairOutcomeComment({ id: "outcome", createdAt: "2026-08-26T22:06:00Z" }),
    ],
  ],
  [
    "malformed repair marker",
    [
      exactHeadReadyReviewComment(),
      repairOutcomeComment({
        id: "outcome",
        createdAt: "2026-08-26T19:24:15Z",
        marker: "<!-- clownfish-repair-outcome:broken -->",
      }),
      exactHeadMaintainerDecision(),
    ],
  ],
  [
    "unknown repair action",
    [
      exactHeadReadyReviewComment(),
      repairOutcomeComment({
        id: "outcome",
        createdAt: "2026-08-26T19:24:15Z",
        action: "delete_branch",
      }),
      exactHeadMaintainerDecision(),
    ],
  ],
]) {
  test(`external merge preflight keeps ${name} blocking`, () => {
    const { report } = runPreflightFixture(
      makeFixture({
        collaboratorPermissions: { vincentkoc: "admin" },
        issueComments: comments,
      }),
    );
    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
  });
}

for (const [name, concern, reason] of [
  ["code defect", "Known defect: attachment ownership is still broken.", /actionable top-level issue comment/],
  ["failing checks", "Checks are failing on the exact head.", /actionable top-level issue comment/],
  ["security concern", "Security concern: token exposure remains possible.", /security-sensitive signal/],
  ["dependency concern", "Dependency risk: the pinned runtime contract is unresolved.", /actionable top-level issue comment/],
  ["withdrawal", "The author withdrew this PR.", /actionable top-level issue comment/],
  ["stop request", "Stop this pull request.", /actionable top-level issue comment/],
]) {
  test(`external merge preflight never supersedes a repair outcome with ${name}`, () => {
    const fixture = makeFixture({
      collaboratorPermissions: { vincentkoc: "admin" },
      issueComments: [
        exactHeadReadyReviewComment(),
        repairOutcomeComment({
          id: "outcome",
          createdAt: "2026-08-26T19:24:15Z",
          concern,
        }),
        exactHeadMaintainerDecision(),
      ],
    });
    const { report } = runPreflightFixture(fixture);

    assert.equal(report.status, "blocked");
    assert.match(report.reason, reason);
  });
}

test("external merge preflight accepts an explicit maintainer decision with an exact-gate handoff", () => {
  const fixture = makeFixture({
    issueComments: [
      trustedReadyReviewComment(),
      {
        author: { login: "vincentkoc" },
        authorAssociation: "MEMBER",
        isMinimized: false,
        createdAt: "2026-07-07T01:48:12Z",
        body: [
          "Maintainer decision: accepting the system-before-user managed service PATH precedence.",
          "This is intentional hardening; the pnpm and npm user paths remain present, and Clownfish must still verify the current-main effective diff through the exact merge gate before landing.",
        ].join(" "),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-maintainer-decision",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight accepts indicated-no-repair wording with a maintainer decision", () => {
  const fixture = makeFixture({
    issueComments: [
      trustedReadyReviewComment({
        nextStep:
          "No automated repair is indicated; maintainers should do normal review and exact-merge validation for the behind-but-mergeable head.",
      }),
      {
        author: { login: "vincentkoc" },
        authorAssociation: "MEMBER",
        isMinimized: false,
        createdAt: "2026-07-07T02:02:09Z",
        body: [
          "Maintainer decision: accept the fail-closed port ownership behavior.",
          "Malformed PID output is rejected, the fuser fallback preserves recovery where possible, and the stale-port wait remains bounded.",
          "The compatibility and availability risk labels were false positives; no code repair is needed.",
        ].join(" "),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-maintainer-decision-indicated",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight keeps requested changes in a maintainer decision blocking", () => {
  const fixture = makeFixture({
    issueComments: [
      trustedReadyReviewComment(),
      {
        author: { login: "maintainer" },
        authorAssociation: "MEMBER",
        isMinimized: false,
        createdAt: "2026-07-07T01:48:12Z",
        body: "Maintainer decision: accepting the direction, but please add a focused regression test before merge.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-maintainer-decision-change",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight requires a current-head ready review before accepting a maintainer decision", () => {
  const fixture = makeFixture({
    issueComments: [
      {
        author: { login: "vincentkoc" },
        authorAssociation: "MEMBER",
        isMinimized: false,
        createdAt: "2026-07-07T01:48:12Z",
        body: "Maintainer decision: accepting the documented tradeoff.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-unbound-maintainer-decision",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight tolerates ready ClawSweeper docs reviews without proof labels", () => {
  const fixture = makeFixture({
    pullLabels: [
      { name: "docs" },
      { name: "triage: low-signal-docs" },
      { name: "status: ready for maintainer look" },
    ],
    issueComments: [
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "",
          "**Merge readiness**",
          "Result: ready for maintainer review.",
          "",
          "**Next step before merge**",
          "- No automated repair is needed; the remaining action is normal maintainer docs review and possible merge.",
          "",
          "<!-- clawsweeper-verdict:needs-human item=123 sha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa confidence=high -->",
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "passed");
});

test("external merge preflight ignores #98052 pull-author proof updates", () => {
  const fixture = makeFixture({
    pullUser: { login: "ly-wang19" },
    issueComments: [
      {
        author: { login: "ly-wang19" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Rebased this PR onto current `origin/main` and re-ran focused proof on the pushed head `aaaaaaaa`.",
          "",
          "Proof:",
          "- `node scripts/run-vitest.mjs src/runtime.test.ts` - passed",
          "- `rg -n 'createNonExitingRuntime|ExitError|RuntimeExit' src/runtime.ts src/plugin-sdk src/runtime.test.ts` - confirms the typed exit is limited to the non-exiting runtime helper/test surface",
          "- `.agents/skills/autoreview/scripts/autoreview --mode branch --base origin/main` - clean, no accepted/actionable findings",
          "- GitHub checks on `aaaaaaaa` - no failures; CI/status rollup is green aside from skipped/neutral jobs",
          "",
          "The change preserves the existing `Error` message text while adding `ExitError` so callers can distinguish simulated exits without string matching.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/98052#issuecomment-4881919898",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight accepts #99607 timestamped exact-head live review shape", () => {
  const fixture = makeFixture({
    pullUser: { login: "brian-bell" },
    pullLabels: [
      { name: "gateway" },
      { name: "size: L" },
      { name: "proof: sufficient" },
      { name: "P2" },
      { name: "rating: diamond lobster" },
      { name: "status: ready for maintainer look" },
    ],
    issueComments: [
      {
        author: { login: "clawsweeper" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-07-03T17:41:31Z",
        updatedAt: "2026-07-06T14:00:25Z",
        isMinimized: false,
        minimizedReason: null,
        body: [
          "Codex review: needs maintainer review before merge. _Reviewed July 6, 2026, 9:59 AM ET / 13:59 UTC._",
          "",
          "**Review metrics:** none identified.",
          "",
          "**Merge readiness**",
          "Result: ready for maintainer review.",
          "",
          "**Next step before merge**",
          "- No repair job is needed; there are no blocking review findings and the remaining step is normal maintainer review plus required merge gates.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high updated_at=2026-07-06T13:46:47Z reviewed_at=2026-07-06T13:59:22.489Z -->`,
          "",
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/99607#issuecomment-4878396209",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight accepts #98505 current-head ready review phrasing", () => {
  const fixture = makeFixture({
    pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
    issueComments: [
      {
        author: { login: "clawsweeper" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Codex review: needs maintainer review before merge. _Reviewed July 6, 2026, 5:44 PM ET / 21:44 UTC._",
          "",
          "**Review metrics:** 1 noteworthy metric.",
          "",
          "**Merge readiness**",
          "Result: ready for maintainer review.",
          "",
          "**Next step before merge**",
          "- No ClawSweeper repair lane is needed; the latest head has no concrete code finding, and the remaining action is maintainer review, CI completion, and risk acceptance.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "",
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/98505#issuecomment-4852565769",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight blocks explicit objections appended to positive ready-review phrasing", () => {
  for (const objection of [
    "No concrete code finding, but maintainers must not merge this.",
    "No concrete code finding, but maintainers mustn't merge this.",
    "No ClawSweeper repair lane is needed, but merge remains blocked.",
    "No concrete code finding, but merge is still blocked.",
    "No concrete code finding, but merging remains blocked.",
    "No concrete code finding, but this is not safe to merge.",
    "No concrete code finding, but this PR must not be merged.",
    "No concrete code finding, but merge cannot proceed.",
    "No concrete code finding, but merge should wait.",
    "No concrete code finding; do not proceed with the merge.",
    "No concrete code finding; this is not ready to merge.",
    "Hold merge until the compatibility concern is resolved.",
    "The PR remains blocked pending compatibility proof.",
    "It is unsafe to merge until the availability risk is accepted.",
    "No concrete code finding; merge must wait for maintainer approval.",
    "No concrete code finding; maintainer approval is required before merge.",
    "No concrete code finding; awaiting maintainer risk acceptance.",
    "No pending maintainer decision remains, but merge is still blocked.",
    "The earlier concern is resolved, but maintainers must not merge.",
    "Prior objection addressed; merge must wait for policy approval.",
  ]) {
    const fixture = makeFixture({
      pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
      issueComments: [
        {
          author: { login: "clawsweeper" },
          authorAssociation: "CONTRIBUTOR",
          body: [
            "Codex review: needs maintainer review before merge.",
            "",
            "**Merge readiness**",
            "Result: ready for maintainer review.",
            "",
            objection,
            "",
            `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
            "<!-- clawsweeper-review item=123 -->",
          ].join("\n"),
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
        },
      ],
    });
    const { report } = runPreflightFixture(fixture);
    assert.equal(report.status, "blocked", objection);
    assert.match(report.reason, /actionable top-level issue comment/, objection);
  }
});

test("external merge preflight accepts negated or resolved historical objection wording", () => {
  for (const resolved of [
    "No pending maintainer decision remains.",
    "No maintainer approval is pending.",
    "Previously pending maintainer risk acceptance is now granted.",
    'The earlier review said "must not merge", but that concern is resolved.',
    "There is no reason the merge is blocked.",
    "Merge is not allowed to remain blocked.",
  ]) {
    const fixture = makeFixture({
      pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
      issueComments: [
        {
          author: { login: "clawsweeper" },
          authorAssociation: "CONTRIBUTOR",
          body: [
            "Codex review: needs maintainer review before merge.",
            "",
            "**Merge readiness**",
            "Result: ready for maintainer review.",
            "",
            "No concrete code finding.",
            resolved,
            "",
            `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
            "<!-- clawsweeper-review item=123 -->",
          ].join("\n"),
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
        },
      ],
    });
    const { report } = runPreflightFixture(fixture);
    assert.equal(report.status, "passed", resolved);
  }
});

test("external merge preflight scopes ClawSweeper risk signals to the risk section", () => {
  const fixture = makeFixture({
    issueComments: [
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "",
          "**Merge readiness**",
          "Result: ready for maintainer review.",
          "",
          "**Risk before merge**",
          "- [P1] The generated service PATH order is upgrade-visible.",
          "",
          "**Maintainer options:**",
          "1. Land the hardened order.",
          "2. Request a narrower version that only adds the missing bin candidates.",
          "",
          "**Next step before merge**",
          "- No automated repair is needed; the remaining action is normal maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-risk-scope",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "passed", report.reason);
});

for (const check of [
  { status: "COMPLETED", conclusion: "SUCCESS", expected: "passed" },
  { status: "COMPLETED", conclusion: "SKIPPED", expected: "blocked" },
  { status: "COMPLETED", conclusion: "NEUTRAL", expected: "blocked" },
  { status: "IN_PROGRESS", conclusion: null, expected: "blocked" },
]) {
  test(`external merge preflight treats a ClawSweeper CI wait as ${check.expected} when checks are ${check.status.toLowerCase()}`, () => {
    const fixture = makeFixture({
      statusCheckRollup: [
        {
          name: "test",
          workflowName: "CI",
          status: check.status,
          conclusion: check.conclusion,
          completedAt: check.status === "COMPLETED" ? "2026-07-06T22:30:00Z" : null,
          startedAt: "2026-07-06T22:20:00Z",
        },
      ],
      issueComments: [
        {
          author: { login: "clawsweeper[bot]" },
          authorAssociation: "CONTRIBUTOR",
          body: [
            "Codex review: needs maintainer review before merge.",
            "",
            "**Review metrics:** none identified.",
            "",
            "**Merge readiness**",
            "Result: ready for maintainer review.",
            "",
            "**Risk before merge**",
            "- [P1] The synthetic merge tree is clean, but final merge should wait for the current-head CI signal.",
            "",
            "**Next step before merge**",
            "- No ClawSweeper repair is needed; the remaining action is normal maintainer review.",
            "",
            `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
            "<!-- clawsweeper-review item=123 -->",
          ].join("\n"),
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-ci-wait",
        },
      ],
    });
    const { report } = runPreflightFixture(fixture);
    assert.equal(report.status, check.expected, report.reason);
  });
}

test("external merge preflight does not clear a CI wait from an unrelated passing check", () => {
  const fixture = makeFixture({
    statusCheckRollup: [
      {
        name: "check",
        workflowName: "PR metadata",
        status: "COMPLETED",
        conclusion: "SUCCESS",
        completedAt: "2026-07-06T22:30:00Z",
      },
    ],
    issueComments: [
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Merge readiness**",
          "Result: ready for maintainer review.",
          "",
          "**Risk before merge**",
          "- [P1] Final merge should wait for the current-head CI signal.",
          "",
          "**Next step before merge**",
          "- No automated repair is needed; the remaining action is normal maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-ci-wait-metadata",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "blocked");
});

test("external merge preflight ignores #98821 stale QA and refresh comments after a newer exact-head ready review", () => {
  const fixture = makeFixture({
    pullUser: { login: "harjothkhara" },
    pullLabels: [{ name: "gateway" }, { name: "size: S" }, { name: "P2" }],
    issueComments: [
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-07-02T01:21:02Z",
        updatedAt: "2026-07-06T14:33:20Z",
        body: [
          "Codex review: needs maintainer review before merge. _Reviewed July 6, 2026, 10:32 AM ET / 14:32 UTC._",
          "",
          "**Summary**",
          "The PR adds process-local, tool-qualified warning deduplication plus focused regression tests.",
          "",
          "**Review metrics:** 1 noteworthy metric.",
          "- **Warning branches deduped:** 3 warning branches routed through 1 helper.",
          "",
          "**Stored data model**",
          "Persistent data-model change detected. Confirm migration or upgrade compatibility proof before merge.",
          "",
          "**Merge readiness**",
          "Overall: platinum hermit",
          "Proof: diamond lobster",
          "Patch quality: platinum hermit",
          "Result: ready for maintainer review.",
          "",
          "Overall follows the weaker of proof and patch quality, so missing proof can cap an otherwise strong patch.",
          "",
          "**Risk before merge**",
          "- [P1] The linked canonical issue also discusses logger-prefix double-write and structural-equality false positives; this PR reduces repeated rebuild floods but may not close every residual operator-log complaint.",
          "",
          "**Maintainer options:**",
          "1. **Decide the mitigation before merge**",
          "   Land this diagnostic-preserving dedupe if maintainers choose it as the candidate path.",
          "2. **Pause or close**",
          "   Do not merge this PR until maintainers decide whether the risk is worth taking.",
          "",
          "**Next step before merge**",
          "- No ClawSweeper repair is needed because the patch has sufficient proof and no blocking code finding; the remaining action is normal maintainer review of the candidate fix.",
          "",
          "<details>",
          "<summary>Review history (3 earlier review cycles)</summary>",
          "",
          "<!-- clawsweeper-review-history v=1 total=3 -->",
          "- reviewed 2026-07-04T02:20:55.571Z sha 663d1bb8eaa53939167724d455d540577aa483a8 :: needs real behavior proof before merge. :: none",
          `- reviewed 2026-07-04T20:17:08.322Z sha ${"a".repeat(40)} :: needs real behavior proof before merge. :: none`,
          `- reviewed 2026-07-04T20:21:39.322Z sha ${"a".repeat(40)} :: needs maintainer review before merge. :: none`,
          "</details>",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high updated_at=2026-07-06T14:06:54Z reviewed_at=2026-07-06T14:32:03.361Z source_revision=70f8e22996ef475c126a2781ae12ed8a15538c814a1257d58e9a6836cc6f17b6 -->`,
          "",
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/98821#issuecomment-4861354589",
      },
      {
        author: { login: "harjothkhara" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-07-04T03:40:04Z",
        updatedAt: "2026-07-04T03:40:04Z",
        body: [
          "**QA Smoke CI failure is unrelated to this change.**",
          "",
          "On the current head, the QA smoke run completes every scenario successfully - `[qa-suite] run complete: passed=25 failed=0 total=25` - and writes its report/evidence/scorecard, then the wrapper process exits 1 in a post-run step. The identical failure reproduces on other open PRs whose diffs don't touch this code path, and the repo has an active `qa-smoke-flake` branch, so this looks like a known QA-harness flake on `main` rather than something introduced here.",
          "",
          "This PR is rebased onto latest `main` and its own surface is green: `src/gateway/mcp-http.test.ts` passes 232/232 locally, and the PR-relevant CI lanes pass - **Real behavior proof**, **Select Critical Quality shards**, and all **Security High** boundaries. `QA Smoke CI` is the only red check.",
          "",
          "Could a maintainer re-run the `QA Smoke CI` job? I don't have permission to retrigger workflows on a fork PR.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/98821#issuecomment-4880518218",
      },
      {
        author: { login: "brokemac79" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-07-05T19:58:24Z",
        updatedAt: "2026-07-05T19:58:24Z",
        isMinimized: false,
        minimizedReason: null,
        body: [
          "Hi! Small heads-up: ClawSweeper had a short-lived label/comment sync bug that may have affected this PR.",
          "",
          "Your latest ClawSweeper review comment appears to be for the current PR head and says this is ready for maintainer review, but the ready/proof/rating labels were later removed by stale local review state. The ClawSweeper fix has merged, but this PR needs a fresh author-triggered review so the labels and comment are reconciled again.",
          "",
          "Could you please post a new comment asking ClawSweeper to re-review? Use the bot mention followed by `re-review`.",
          "",
          "Thanks, and sorry for the noise.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/98821#issuecomment-4887405035",
      },
      {
        author: { login: "vincentkoc" },
        authorAssociation: "MEMBER",
        createdAt: "2026-07-06T14:05:25Z",
        updatedAt: "2026-07-06T14:05:25Z",
        body: "@clawsweeper re-review",
        url: "https://github.com/openclaw/openclaw/pull/98821#issuecomment-4893721028",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight blocks a #98821-shaped QA failure note newer than the ready review", () => {
  const fixture = makeFixture({
    pullUser: { login: "harjothkhara" },
    issueComments: [
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-07-06T14:32:03Z",
        updatedAt: "2026-07-06T14:33:20Z",
        body: [
          "Codex review: needs maintainer review before merge. _Reviewed July 6, 2026, 10:32 AM ET / 14:32 UTC._",
          "",
          "**Review metrics:** none identified.",
          "Result: ready for maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/98821#issuecomment-4861354589",
      },
      {
        author: { login: "harjothkhara" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-07-06T14:34:00Z",
        body: [
          "**QA Smoke CI failure is unrelated to this change.**",
          "",
          "The identical failure reproduces on other open PRs, so this looks like a known QA-harness flake on `main` rather than something introduced here.",
          "",
          "This PR's own surface is green, and the PR-relevant CI lanes pass. `QA Smoke CI` is the only red check.",
          "",
          "Could a maintainer re-run the `QA Smoke CI` job?",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/98821#issuecomment-newer",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

for (const liveShape of [
  {
    number: 100900,
    url: "https://github.com/openclaw/openclaw/pull/100900#issuecomment-4893455348",
    body: [
      "Codex review: needs real behavior proof before merge.",
      "",
      "**Merge readiness**",
      "Result: blocked until stronger real behavior proof is added.",
      "",
      "**Proof guidance**",
      "- [P1] Needs stronger real behavior proof before merge: add redacted after-fix Docker or gateway output.",
      "",
      "**Risk before merge**",
      "- [P1] The remaining merge blocker is proof quality.",
      "",
      "**Next step before merge**",
      "- [P1] The remaining action is contributor-supplied after-fix real behavior proof before maintainer merge review.",
    ],
  },
  {
    number: 100902,
    url: "https://github.com/openclaw/openclaw/pull/100902#issuecomment-4893494572",
    body: [
      "Codex review: needs real behavior proof before merge.",
      "",
      "**Merge readiness**",
      "Result: blocked until real behavior proof from a real setup is added.",
      "",
      "**Proof guidance**",
      "- [P1] Needs real behavior proof before merge: add a redacted patched-branch Docker or CLI transcript.",
      "",
      "**Risk before merge**",
      "- [P1] After-fix real behavior proof is still missing.",
      "",
      "**Next step before merge**",
      "- [P1] The remaining merge blocker is contributor-supplied after-fix real behavior proof.",
    ],
  },
]) {
  test(`external merge preflight keeps #${liveShape.number} ClawSweeper proof requirements blocking`, () => {
    const fixture = makeFixture({
      pullLabels: [{ name: "status: needs proof" }],
      issueComments: [
        {
          author: { login: "clawsweeper[bot]" },
          authorAssociation: "CONTRIBUTOR",
          body: [
            ...liveShape.body,
            "",
            `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
            "",
            "<!-- clawsweeper-review item=123 -->",
          ].join("\n"),
          url: liveShape.url,
        },
      ],
    });
    const { report } = runPreflightFixture(fixture);
    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
  });
}

test("external merge preflight ignores resolved review-refresh noise covered by an exact-head ready review", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T00:00:00Z",
        body: [
          "@clawsweeper re-review",
          "",
          "Real behavior proof has been added to the PR body, and the Real behavior proof check is passing.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "untrusted-user" },
        authorAssociation: "NONE",
        createdAt: "2026-06-18T00:15:00Z",
        isMinimized: true,
        minimizedReason: "SPAM",
        body: "<!-- codegraph-conflict -->\n### Cross-PR Conflict Detected\nCoordinate before merging.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T00:30:00Z",
        body: [
          "@ClawSweeper re-review please",
          "",
          "Addressed the review follow-up in `7d5fcc95ef4f`:",
          "- Rebuilt the PR on current `upstream/main`, which resolved the GitHub merge conflict.",
          "- Preserved `markCommandReplyForDelivery` for every handled fast-path reply path.",
          "- Removed the unrelated CI heap change from this PR scope.",
          "- Updated the PR body to reflect the current narrow diff and current-head validation.",
          "",
          "Current local validation:",
          "- `npm run format:check -- changed-files`",
          "- `npm run check:test-types`",
          "",
          "GitHub Real behavior proof is passing on the new head.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-3",
      },
      {
        author: { login: "maintainer" },
        authorAssociation: "MEMBER",
        createdAt: "2026-06-18T01:00:00Z",
        body: [
          "Hi! Small heads-up: ClawSweeper had a short-lived label/comment sync bug that may have affected this PR.",
          "",
          "Could you please post a new comment asking ClawSweeper to re-review?",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-4",
      },
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T01:30:00Z",
        body: [
          "@clawsweeper re-review",
          "",
          "Rebased this PR onto current `main` and resolved the conflict.",
          "",
          "Current status on head `aaaaaaaaaaaa`:",
          "- Merge state is clean.",
          "- All GitHub checks are passing or skipped.",
          "- Real behavior proof is passing.",
          "",
          "Local validation after the rebase:",
          "- `npm run check:test-types`",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-5",
      },
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T02:00:00Z",
        updatedAt: "2026-06-18T02:05:00Z",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "Result: ready for maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-6",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight blocks unresolved maintainer review-refresh requests newer than the ready review", () => {
  const fixture = makeFixture({
    pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
    issueComments: [
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T00:00:00Z",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "Result: ready for maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "maintainer" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T01:00:00Z",
        body: [
          "ClawSweeper had a label/comment sync bug.",
          "Please post a new comment asking ClawSweeper to re-review.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight keeps real concerns in older refresh-shaped comments blocking", () => {
  const fixture = makeFixture({
    issueComments: [
      {
        author: { login: "clawsweeper" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T02:00:00Z",
        updatedAt: "2026-06-18T02:05:00Z",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "Result: ready for maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "maintainer" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T01:00:00Z",
        body: [
          "ClawSweeper had a label/comment sync bug.",
          "Please post a new comment asking ClawSweeper to re-review.",
          "",
          "The branch still fails CI and is not ready to merge.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight lets an exact-head ready review cover earlier author status comments", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T00:00:00Z",
        body: ["Ready for review.", "Thanks!"].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T01:00:00Z",
        updatedAt: "2026-06-19T01:00:00Z",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "Result: ready for maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight lets an exact-head ready review cover earlier author progress evidence", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T00:00:00Z",
        body: "Changes made.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T00:30:00Z",
        body: "Tests are passing.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1a",
      },
      {
        author: { login: "maintainer" },
        authorAssociation: "MEMBER",
        createdAt: "2026-06-18T01:00:00Z",
        body: [
          "<!-- dependency-guard-rebase-needed-backfill -->",
          "Heads up: this PR needs to be updated against current `main` before the new required Dependency Guard check can pass.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T02:00:00Z",
        body: ["Rebased onto current `main`.", "The Dependency Guard check should pass now."].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-3",
      },
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T03:00:00Z",
        updatedAt: "2026-06-19T01:00:00Z",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "Result: ready for maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-4",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight still blocks author-reported current concerns", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: "Tests are still failing after the rebase.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight blocks author hesitation newer than a trusted exact-head approval", () => {
  for (const body of [
    "I am not convinced this is ready.",
    "Could we pause before landing this?",
    "I would rather not merge this yet.",
    "We should pause before merging.",
    "Let's pause before landing.",
    "I would prefer we not merge.",
    "I have concerns about merging this.",
    "I don't want to merge this.",
  ]) {
    const fixture = makeFixture({
      pullUser: { login: "contributor" },
      pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
      issueComments: [
        {
          author: { login: "maintainer" },
          authorAssociation: "MEMBER",
          createdAt: "2026-06-17T23:00:00Z",
          body: `<!-- clownfish-author-evidence-approved sha=${"a".repeat(40)} -->`,
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-0",
        },
        {
          author: { login: "contributor" },
          authorAssociation: "CONTRIBUTOR",
          createdAt: "2026-06-18T00:00:00Z",
          body,
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
        },
        {
          author: { login: "clawsweeper[bot]" },
          authorAssociation: "CONTRIBUTOR",
          createdAt: "2026-06-18T01:00:00Z",
          body: [
            "Codex review: needs maintainer review before merge.",
            "",
            "**Review metrics:** none identified.",
            "Result: ready for maintainer review.",
            "",
            `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
            "<!-- clawsweeper-review item=123 -->",
          ].join("\n"),
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
        },
      ],
    });
    const child = spawnSync(
      process.execPath,
      ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
      {
        cwd: repoRoot,
        encoding: "utf8",
        env: {
          ...process.env,
          PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
          CLOWNFISH_ALLOWED_OWNER: "openclaw",
        },
      },
    );
    assert.equal(child.status, 0, child.stderr || child.stdout);

    const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
    assert.equal(report.status, "blocked", body);
    assert.match(report.reason, /actionable top-level issue comment/, body);
  }
});

test("external merge preflight blocks author prose without a trusted exact-head approval", () => {
  for (const body of [
    "I have one more thought about this.",
    "I haven't fixed everything in the migration.",
    "Update: I am worried about the migration.",
    "Update: the fix is incomplete.",
    "Update: still investigating the fix.",
    "Update: nothing was fixed in the migration.",
    "Update: migration behavior is unclear + I need more time.",
  ]) {
    const fixture = makeFixture({
      pullUser: { login: "contributor" },
      pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
      issueComments: [
        {
          author: { login: "contributor" },
          authorAssociation: "CONTRIBUTOR",
          createdAt: "2026-06-18T00:00:00Z",
          body,
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
        },
        {
          author: { login: "clawsweeper[bot]" },
          authorAssociation: "CONTRIBUTOR",
          createdAt: "2026-06-18T01:00:00Z",
          body: [
            "Codex review: needs maintainer review before merge.",
            "",
            "**Review metrics:** none identified.",
            "Result: ready for maintainer review.",
            "",
            `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
            "<!-- clawsweeper-review item=123 -->",
          ].join("\n"),
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
        },
      ],
    });
    const child = spawnSync(
      process.execPath,
      ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
      {
        cwd: repoRoot,
        encoding: "utf8",
        env: {
          ...process.env,
          PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
          CLOWNFISH_ALLOWED_OWNER: "openclaw",
        },
      },
    );
    assert.equal(child.status, 0, child.stderr || child.stdout);

    const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
    assert.equal(report.status, "blocked", body);
    assert.match(report.reason, /actionable top-level issue comment/, body);
  }
});

test("external merge preflight ignores objection-free author proof updates newer than the exact-head ready review", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
    issueComments: [
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T00:00:00Z",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "Result: ready for maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T01:00:00Z",
        body: "Updated the proof and tests after the review.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight never lets a ready review suppress an author security concern", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T00:00:00Z",
        body: "Updated the patch, but this may expose an API token.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T01:00:00Z",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "Result: ready for maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /security-sensitive signal/);
});

test("external merge preflight ignores approval security modes inside fenced runtime proof", () => {
  const fixture = makeFixture({
    pullBody: [
      "Real behavior proof:",
      "",
      "```text",
      "Exec approval required",
      "Session: agent:main:telegram:direct:424242",
      "Security: allowlist",
      "```",
    ].join("\n"),
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "passed", report.reason);
});

for (const [name, pullBody] of [
  ["prose security heading", "Security: authorization boundary needs review."],
  ["fenced security concern", "```text\nSecurity: possible token exposure\n```"],
]) {
  test(`external merge preflight keeps ${name} blocking`, () => {
    const { report } = runPreflightFixture(makeFixture({ pullBody }));
    assert.equal(report.status, "blocked");
    assert.match(report.reason, /security-sensitive signal/);
  });
}

test("external merge preflight never lets a ready review suppress author withdrawal", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T00:00:00Z",
        body: "Updated the patch, but I withdraw this PR for now.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T01:00:00Z",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "Result: ready for maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight blocks unknown prose appended to a review request", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T00:00:00Z",
        body: "@clawsweeper re-review\nUpdate: I retract this submission.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T01:00:00Z",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Review metrics:** none identified.",
          "Result: ready for maintainer review.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight rejects malformed exact-head ready review approvals", () => {
  for (const marker of [
    `<!-- clawsweeper-verdict:needs-human item=123 sha=${"b".repeat(40)} confidence=high -->`,
    `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=medium -->`,
    `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high confidence =low -->`,
    [
      `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
      `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
    ].join("\n"),
    [
      `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
      `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high`,
    ].join("\n"),
    [
      `<!-- clawsweeper-verdict:needs-human item=123 sha=${"a".repeat(40)} confidence=high -->`,
      `<!-- clawsweeper-action:fix-required item=123 sha=${"a".repeat(40)} confidence=high -->`,
    ].join("\n"),
  ]) {
    const fixture = makeFixture({
      pullUser: { login: "contributor" },
      pullLabels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
      issueComments: [
        {
          author: { login: "contributor" },
          authorAssociation: "CONTRIBUTOR",
          createdAt: "2026-06-18T00:00:00Z",
          body: "Updated the proof and tests.",
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
        },
        {
          author: { login: "clawsweeper[bot]" },
          authorAssociation: "CONTRIBUTOR",
          createdAt: "2026-06-18T01:00:00Z",
          body: [
            "Codex review: needs maintainer review before merge.",
            "",
            "**Review metrics:** none identified.",
            "Result: ready for maintainer review.",
            "",
            marker,
            "<!-- clawsweeper-review item=123 -->",
          ].join("\n"),
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
        },
      ],
    });
    const child = spawnSync(
      process.execPath,
      ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
      {
        cwd: repoRoot,
        encoding: "utf8",
        env: {
          ...process.env,
          PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
          CLOWNFISH_ALLOWED_OWNER: "openclaw",
        },
      },
    );
    assert.equal(child.status, 0, child.stderr || child.stdout);

    const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
    assert.equal(report.status, "blocked", marker);
    assert.match(report.reason, /actionable top-level issue comment/, marker);
  }
});

test("external merge preflight rejects stale and untrusted author-evidence approval markers", () => {
  for (const approval of [
    {
      author: { login: "maintainer" },
      authorAssociation: "MEMBER",
      body: `<!-- clownfish-author-evidence-approved sha=${"b".repeat(40)} -->`,
    },
    {
      author: { login: "contributor" },
      authorAssociation: "CONTRIBUTOR",
      body: `<!-- clownfish-author-evidence-approved sha=${"a".repeat(40)} -->`,
    },
  ]) {
    const fixture = makeFixture({
      pullUser: { login: "contributor" },
      issueComments: [
        {
          author: { login: "contributor" },
          authorAssociation: "CONTRIBUTOR",
          createdAt: "2026-06-18T00:00:00Z",
          body: "This is old author context.",
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
        },
        {
          ...approval,
          createdAt: "2026-06-18T01:00:00Z",
          url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
        },
      ],
    });
    const child = spawnSync(
      process.execPath,
      ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
      {
        cwd: repoRoot,
        encoding: "utf8",
        env: {
          ...process.env,
          PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
          CLOWNFISH_ALLOWED_OWNER: "openclaw",
        },
      },
    );
    assert.equal(child.status, 0, child.stderr || child.stdout);

    const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
    assert.equal(report.status, "blocked");
    assert.match(report.reason, /actionable top-level issue comment/);
  }
});

test("external merge preflight blocks author comments with ambiguous approval ordering", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        createdAt: "2026-06-18T01:00:00Z",
        body: "This comment may be newer than the approval.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "maintainer" },
        authorAssociation: "MEMBER",
        createdAt: "2026-06-18T01:00:00Z",
        body: `<!-- clownfish-author-evidence-approved sha=${"a".repeat(40)} -->`,
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight blocks objections appended to review requests", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: "@clawsweeper review\nDo not merge; this is broken.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight blocks unclassified pull-author objections", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: "Please wait; I found another issue.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight blocks objections mixed into pull-author evidence", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: "This fixes the installer signal handling bug. Please wait; I found another issue.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight does not accept dependency confirmation from another commenter", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "maintainer" },
        authorAssociation: "MEMBER",
        body: [
          "<!-- dependency-guard-rebase-needed-backfill -->",
          "Heads up: this PR needs to be updated against current `main` before the new required Dependency Guard check can pass.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "reviewer" },
        authorAssociation: "MEMBER",
        body: "Dependency Guard should pass now.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight accepts exact-head dependency guard authorization", () => {
  const headSha = "a".repeat(40);
  const fixture = makeFixture({
    headSha,
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "github-actions[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "<!-- openclaw:dependency-guard -->",
          "This PR changes the dependency graph. A maintainer must authorize the change.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "maintainer" },
        authorAssociation: "MEMBER",
        body: "/allow-dependencies-change intentional parser dependency",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
      {
        author: { login: "github-actions[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "<!-- openclaw:dependency-graph-guard -->",
          "### Dependency graph change authorized",
          "",
          `Approved SHA: \`${headSha}\``,
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-3",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "passed", report.reason);
  const result = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "result.json"), "utf8"));
  assert.equal(result.actions[0]?.action, "merge_canonical");
});

test("external merge preflight accepts GraphQL github-actions cleared dependency guard", () => {
  const headSha = "a".repeat(40);
  const fixture = makeFixture({
    headSha,
    issueComments: [
      {
        author: { login: "github-actions" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "<!-- openclaw:dependency-graph-guard -->",
          "",
          "### Dependency graph guard cleared",
          "",
          "This PR no longer has blocked dependency graph changes. A future dependency graph change requires a fresh `/allow-dependencies-change` comment after the guard blocks that new head SHA.",
          "",
          `- Current SHA: \`${headSha}\``,
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/98505#issuecomment-4853327954",
      },
    ],
  });
  const { report } = runPreflightFixture(fixture);
  assert.equal(report.status, "passed", report.reason);
});

test("external merge preflight blocks stale dependency guard authorization", () => {
  const fixture = makeFixture({
    headSha: "a".repeat(40),
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "github-actions[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "<!-- openclaw:dependency-graph-guard -->",
          "### Dependency graph change authorized",
          "",
          `Approved SHA: \`${"c".repeat(40)}\``,
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight blocks dependency notices with appended concerns", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "maintainer" },
        authorAssociation: "MEMBER",
        body: [
          "<!-- dependency-guard-rebase-needed-backfill -->",
          "Heads up: this PR needs to be updated against current main before Dependency Guard can pass.",
          "Do not merge; the credential handling is still unsafe.",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: "Rebased onto current main. The Dependency Guard check should pass now.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /security-sensitive signal|actionable top-level issue comment/);
});

test("external merge preflight blocks actionable human comments", () => {
  const fixture = makeFixture({
    issueComments: [
      {
        author: { login: "reviewer" },
        authorAssociation: "NONE",
        body: "Please add a regression test before merge.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight blocks potentially truncated issue comment history", () => {
  const fixture = makeFixture({
    issueComments: Array.from({ length: 100 }, (_, index) => ({
      author: { login: "dependabot[bot]" },
      authorAssociation: "NONE",
      body: `automated status ${index + 1}`,
      url: `https://github.com/openclaw/openclaw/pull/123#issuecomment-${index + 1}`,
    })),
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /comment history may be truncated/);
});

test("external merge preflight blocks potentially truncated inline review comment history", () => {
  const fixture = makeFixture({
    reviewComments: Array.from({ length: 100 }, (_, index) => ({
      user: { login: `reviewer-${index}` },
      body: "resolved inline review context",
      path: "src/effective.ts",
      line: 1,
    })),
  });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /inline review comments; comment history may be truncated/);
});

test("external merge preflight blocks non-keyword human objections", () => {
  const fixture = makeFixture({
    issueComments: [
      {
        author: { login: "reviewer" },
        authorAssociation: "MEMBER",
        body: "I am not convinced by this approach.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight blocks objections inside approved review bodies", () => {
  const fixture = makeFixture({
    reviews: [
      {
        author: { login: "reviewer" },
        authorAssociation: "MEMBER",
        state: "APPROVED",
        body: "Do not merge this yet; the security boundary is still unclear.",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable human review body comment/);
});

test("external merge preflight allows descriptive approved review bodies", () => {
  const fixture = makeFixture({
    reviews: [
      {
        author: { login: "reviewer" },
        authorAssociation: "MEMBER",
        state: "APPROVED",
        body: "No blocking concerns; tested locally. Security review passed.",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "passed");
});

test("external merge preflight blocks contradictory approved review bodies", () => {
  const fixture = makeFixture({
    reviews: [
      {
        author: { login: "reviewer" },
        authorAssociation: "MEMBER",
        state: "APPROVED",
        body: "This breaks Windows; don't land it yet.",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable human review body comment/);
});

test("external merge preflight blocks actionable comment findings", () => {
  const fixture = makeFixture({
    issueComments: [
      {
        author: { login: "clawsweeper[bot]" },
        authorAssociation: "CONTRIBUTOR",
        body: "Codex review: found issues before merge. This changes the wrong source file.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight ignores stale automation findings from previous heads", () => {
  const fixture = makeFixture({
    issueComments: [
      {
        author: { login: "clawsweeper" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Codex review: needs changes before merge.",
          "",
          "Review findings:",
          "- [P2] Remove the stale changelog entry.",
          "",
          "<!-- clawsweeper-verdict:needs-changes item=123 sha=cccccccccccccccccccccccccccccccccccccccc confidence=high -->",
          "<!-- clawsweeper-action:fix-required item=123 sha=cccccccccccccccccccccccccccccccccccccccc confidence=high finding=review-feedback -->",
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
      {
        author: { login: "barnacle-openclaw" },
        authorAssociation: "NONE",
        body: "This pull request has been automatically marked as stale due to inactivity.\nPlease add updates or it will be closed.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-2",
      },
      {
        author: { login: "greptile-apps" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Greptile review: found issues before merge.",
          "",
          "Please address the escaping issue before merging.",
          "",
          "Last reviewed commit: https://github.com/openclaw/openclaw/commit/dddddddddddddddddddddddddddddddddddddddd",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-3",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "passed");
});

test("external merge preflight still blocks current-head automation findings", () => {
  const fixture = makeFixture({
    issueComments: [
      {
        author: { login: "clawsweeper" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "Codex review: needs changes before merge.",
          "",
          "Review findings:",
          "- [P2] Remove the stale changelog entry.",
          "",
          "<!-- clawsweeper-verdict:needs-changes item=123 sha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa confidence=high -->",
          "<!-- clawsweeper-review item=123 -->",
        ].join("\n"),
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-1",
      },
    ],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /actionable top-level issue comment/);
});

test("external merge preflight blocks merge-risk labels", () => {
  const fixture = makeFixture({
    pullLabels: [{ name: "merge-risk: availability" }, { name: "proof: sufficient" }],
  });
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);

  const report = JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8"));
  assert.equal(report.status, "blocked");
  assert.match(report.reason, /blocked live label: merge-risk: availability/);
});

function makeRunnerFixture() {
  const fixture = makeFixture({
    statusCheckRollup: [
      {
        name: "fixture",
        workflowName: "fixture",
        status: "COMPLETED",
        conclusion: "SUCCESS",
        startedAt: "2026-06-19T00:00:00Z",
        completedAt: "2026-06-19T00:00:01Z",
      },
    ],
  });
  const runRoot = path.join(fixture.root, "runner");
  const resultPath = path.join(fixture.root, "runner-result.json");
  const reportPath = path.join(runRoot, "external-merge-preflight-report.json");
  const unexpectedReviewPath = path.join(fixture.root, "unexpected-review");
  fs.writeFileSync(
    resultPath,
    `${JSON.stringify(
      {
        status: "planned",
        repo: "openclaw/openclaw",
        cluster_id: "fixture-source",
        mode: "plan",
        actions: [
          {
            target: "#123",
            action: "merge_candidate",
            status: "blocked",
            reason: "external_merge_preflight_required",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
  return {
    ...fixture,
    runRoot,
    resultPath,
    reportPath,
    unexpectedReviewPath,
    env: {
      ...process.env,
      PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
      CLOWNFISH_ALLOWED_OWNER: "openclaw",
      CLOWNFISH_APPLY_MERGE_BINDING_ATTEMPTS: "1",
      CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0",
      CLOWNFISH_APPLY_MERGEABLE_POLL_DELAY_MS: "0",
      CLOWNFISH_APP_ID: "3535277",
      CLOWNFISH_CHECKS_GH_TOKEN: "fixture-checks-token",
      CLOWNFISH_EXTERNAL_PREFLIGHT_HEARTBEAT_MS: "10000",
      CLOWNFISH_MERGEABLE_POLL_DELAY_MS: "0",
    },
  };
}

function runExternalMergeRunner(fixture, extraArgs, env) {
  return spawnSync(
    process.execPath,
    [
      "scripts/run-external-merge-preflights.mjs",
      fixture.jobPath,
      fixture.resultPath,
      "--run-root",
      fixture.runRoot,
      ...extraArgs,
    ],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env,
      timeout: 60_000,
    },
  );
}

function runPreflightFixture(fixture, extraEnv = {}) {
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", String(fixture.pullRequest), "--run-dir", fixture.runDir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        ...extraEnv,
        PATH: `${fixture.binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOWED_OWNER: "openclaw",
      },
    },
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);
  return {
    report: JSON.parse(fs.readFileSync(path.join(fixture.runDir, "preflight-report.json"), "utf8")),
    result: JSON.parse(fs.readFileSync(path.join(fixture.runDir, "result.json"), "utf8")),
  };
}

function snapshotCallKinds(callLogPath) {
  return fs
    .readFileSync(callLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line))
    .flatMap((args) => {
      if (args[0] === "api" && args[1]?.endsWith("/pulls/123")) return ["rest"];
      if (args[0] === "pr" && args[1] === "view" && args[2] === "123") {
        return ["graphql"];
      }
      return [];
    });
}

function makeFixture({
  repo = "openclaw/openclaw",
  pullRequest = 123,
  issueComments = [],
  reviewComments = [],
  reviews = [],
  pullTitle = "fix: fixture",
  pullBody = "",
  pullLabels = [],
  pullUser = { login: "contributor" },
  statusCheckRollup = [],
  mergeStateStatus = "CLEAN",
  mergeViews = null,
  restSnapshots = null,
  issueUpdatedAt = "2026-06-19T00:00:00Z",
  pullUpdatedAt = "2026-06-19T00:00:00Z",
  pullAssignees = [],
  expectedHeadSha = null,
  expectedHeadShas = null,
  rehydratedIssueComments = null,
  rehydratedReviewComments = null,
  rehydratedReviewThreads = null,
  rehydratedPullLabels = null,
  rehydratedIssueUpdatedAt = null,
  rehydratedPullUpdatedAt = null,
  rehydratedPullAssignees = null,
  rehydratedHeadSha = null,
  rehydratedState = null,
  currentMainSha = null,
  refreshedMainSha = null,
  refreshedMainShas = null,
  refreshedMainCommitCount = 7,
  refreshedMainFiles = ["docs/main-drift.md"],
  validationFailure = null,
  syntheticMergeFailure = null,
  codexMutatesCheckout = false,
  codexMutatesSource = false,
  codexSkipsSecondWrite = false,
  codexVersion = codexDependency.version,
  codexCloneFailure = null,
  codexTagType = "tag",
  codexTagObject = codexDependency.tagObject,
  codexCommitSha = codexDependency.commit,
  codexFileFault = null,
  codexFailure = null,
  initialGitConfig = null,
  initialIncludedGitConfig = null,
  preexistingTargetCheckout = false,
  preexistingCodexCheckout = false,
  toolchainGitConfig = null,
  codexGitConfigMutation = null,
  codexIncludedGitConfigMutation = null,
  codexReview = {
    status: "clean",
    summary: "clean fixture review",
    findings: [],
    findings_addressed: true,
    evidence: [`${codexDependency.commit} ../codex/codex-rs/exec/src/lib.rs:583`],
  },
  collaboratorPermissions = {},
  collaboratorPermissionErrors = [],
} = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-external-preflight-"));
  const binDir = path.join(root, "bin");
  const runDir = path.join(root, "run");
  const jobPath = path.join(root, "source-job.md");
  const headSha = "a".repeat(40);
  const baseSha = "b".repeat(40);
  const mergeTreeSha = "c".repeat(40);
  const syntheticMergeSha = "d".repeat(40);
  const baseBlobSha = "e".repeat(40);
  const squashCommitSha = "f".repeat(40);
  const baseTreeSha = "1".repeat(40);
  const squashTreeSha = "2".repeat(40);
  const effectiveContent = "fixture effective content\n";
  const mergeBlobSha = createHash("sha1")
    .update(`blob ${Buffer.byteLength(effectiveContent)}\0`)
    .update(effectiveContent)
    .digest("hex");
  const effectiveDiffSha256 = createHash("sha256")
    .update(
      `${JSON.stringify([
        "src/effective.ts",
        `100644:blob:${baseBlobSha}`,
        `100644:blob:${mergeBlobSha}`,
      ])}\n`,
    )
    .digest("hex");
  const gitCommandsPath = path.join(root, "git-commands.log");
  const ghCallsPath = path.join(root, "gh-calls.jsonl");
  const pnpmCommandsPath = path.join(root, "pnpm-commands.log");
  const codexPromptPath = path.join(root, "codex-prompt.txt");
  const codexArgsPath = path.join(root, "codex-args.json");
  const codexCountPath = path.join(root, "codex-count");
  const codexVersionCountPath = path.join(root, "codex-version-count");
  const codexCloneCountPath = path.join(root, "codex-clone-count");
  const codexDependencyEnvPath = path.join(root, "codex-dependency-env.json");
  const codexVersionEnvPath = path.join(root, "codex-version-env.json");
  const hostileHome = path.join(root, "hostile-home");
  const credentialSentinelPath = path.join(root, "credential-sentinel");
  const codexPath = path.join(binDir, "codex");
  const mergeLogPath = path.join(root, "merge.log");
  const mergedStatePath = path.join(root, "merged");
  const exactMergeCheckStatePath = path.join(root, "exact-merge-check.json");
  const gitConfigStatePath = path.join(root, "git-config-state");
  const gitIncludedConfigStatePath = path.join(root, "git-included-config-state");
  const finalIssueComments = rehydratedIssueComments ?? issueComments;
  const finalReviewComments = rehydratedReviewComments ?? reviewComments;
  const finalReviewThreads = rehydratedReviewThreads ?? [];
  const finalPullLabels = rehydratedPullLabels ?? pullLabels;
  const finalIssueUpdatedAt = rehydratedIssueUpdatedAt ?? issueUpdatedAt;
  const finalPullUpdatedAt = rehydratedPullUpdatedAt ?? pullUpdatedAt;
  const finalPullAssignees = rehydratedPullAssignees ?? pullAssignees;
  const finalHeadSha = rehydratedHeadSha ?? headSha;
  const finalState = rehydratedState ?? "open";
  fs.mkdirSync(binDir, { recursive: true });
  if (preexistingTargetCheckout) {
    fs.mkdirSync(path.join(runDir, "target", ".git"), { recursive: true });
  }
  if (preexistingCodexCheckout) {
    fs.mkdirSync(path.join(runDir, "codex"), { recursive: true });
    fs.writeFileSync(path.join(runDir, "codex", "unowned"), "preserve\n");
  }
  if (initialGitConfig) {
    fs.writeFileSync(
      gitConfigStatePath,
      `${initialGitConfig.key}\n${initialGitConfig.value}\0`,
    );
  }
  if (initialIncludedGitConfig) {
    fs.writeFileSync(
      gitIncludedConfigStatePath,
      `${initialIncludedGitConfig.key}\n${initialIncludedGitConfig.value}\0`,
    );
  }
  fs.writeFileSync(
    jobPath,
    `---
repo: ${repo}
cluster_id: fixture-source
mode: plan
${expectedHeadSha ? `expected_head_sha: ${expectedHeadSha}\n` : ""}${expectedHeadShas ? `expected_head_shas:\n${expectedHeadShas.map((value) => `  - "${value}"`).join("\n")}\n` : ""}allowed_actions:
  - "merge"
blocked_actions:
  - "comment"
  - "label"
  - "close"
canonical:
  - "#${pullRequest}"
candidates:
  - "#${pullRequest}"
cluster_refs:
  - "#${pullRequest}"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
---

# Fixture
`,
  );
  writeExecutable(
    path.join(binDir, "gh"),
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
fs.appendFileSync(${JSON.stringify(ghCallsPath)}, JSON.stringify(args) + "\\n");
const repo = ${JSON.stringify(repo)};
const pullRequest = ${JSON.stringify(pullRequest)};
const head = ${JSON.stringify(headSha)};
const base = ${JSON.stringify(baseSha)};
const baseTree = ${JSON.stringify(baseTreeSha)};
const mergeTree = ${JSON.stringify(mergeTreeSha)};
const testMerge = ${JSON.stringify(syntheticMergeSha)};
const squashCommit = ${JSON.stringify(squashCommitSha)};
const squashTree = ${JSON.stringify(squashTreeSha)};
const baseBlob = ${JSON.stringify(baseBlobSha)};
const mergeBlob = ${JSON.stringify(mergeBlobSha)};
const mergeViews = ${JSON.stringify(mergeViews)};
const restSnapshots = ${JSON.stringify(restSnapshots)};
const mergedStatePath = ${JSON.stringify(mergedStatePath)};
const mergeLogPath = ${JSON.stringify(mergeLogPath)};
const exactMergeCheckStatePath = ${JSON.stringify(exactMergeCheckStatePath)};
const collaboratorPermissions = ${JSON.stringify(collaboratorPermissions)};
const collaboratorPermissionErrors = new Set(${JSON.stringify(collaboratorPermissionErrors)});
const isMerged = () => fs.existsSync(mergedStatePath);
function write(value) {
  process.stdout.write(JSON.stringify(value));
}
function exactMergeChecks() {
  return fs.existsSync(exactMergeCheckStatePath)
    ? JSON.parse(fs.readFileSync(exactMergeCheckStatePath, "utf8"))
    : [];
}
function writeExactMergeCheck(check) {
  fs.writeFileSync(exactMergeCheckStatePath, JSON.stringify([check]));
}
function nextValue(name, initial, refreshed) {
  const counterPath = path.join(${JSON.stringify(root)}, name);
  const count = fs.existsSync(counterPath) ? Number(fs.readFileSync(counterPath, "utf8")) : 0;
  fs.writeFileSync(counterPath, String(count + 1));
  return count === 0 ? initial : refreshed;
}
if (args[0] === "repo" && args[1] === "clone") {
  const target = args[3];
  fs.mkdirSync(path.join(target, ".git"), { recursive: true });
  fs.mkdirSync(path.join(target, "src"), { recursive: true });
  fs.writeFileSync(path.join(target, "package.json"), JSON.stringify({ packageManager: "pnpm@10.33.0" }));
  fs.writeFileSync(path.join(target, "src", "effective.ts"), ${JSON.stringify(effectiveContent)});
  process.exit(0);
}
if (args[0] === "pr" && args[1] === "merge") {
  fs.appendFileSync(mergeLogPath, String(pullRequest) + "\\n");
  fs.writeFileSync(mergedStatePath, "merged");
  process.exit(0);
}
if (args[0] === "pr" && args[1] === "view") {
  const counterPath = ${JSON.stringify(path.join(root, "pr-view-count"))};
  const count = fs.existsSync(counterPath) ? Number(fs.readFileSync(counterPath, "utf8")) : 0;
  fs.writeFileSync(counterPath, String(count + 1));
  const mergeView = Array.isArray(mergeViews) ? mergeViews[Math.min(count, mergeViews.length - 1)] : {};
  write({ baseRefName: "main", baseRefOid: mergeView.baseRefOid ?? base, comments: mergeView.comments ?? ${JSON.stringify(issueComments)}, headRefOid: mergeView.headRefOid ?? head, isDraft: false, mergeStateStatus: mergeView.mergeStateStatus ?? ${JSON.stringify(mergeStateStatus)}, mergeable: mergeView.mergeable ?? "MERGEABLE", mergedAt: isMerged() ? "2026-06-19T00:10:00Z" : null, potentialMergeCommit: mergeView.potentialMergeCommit === null ? null : (mergeView.potentialMergeCommit ?? { oid: testMerge }), reviewDecision: mergeView.reviewDecision ?? "APPROVED", reviews: mergeView.reviews ?? ${JSON.stringify(reviews)}, state: isMerged() ? "MERGED" : "OPEN", statusCheckRollup: mergeView.statusCheckRollup ?? ${JSON.stringify(statusCheckRollup)}, updatedAt: mergeView.updatedAt ?? "2026-06-19T00:00:00Z", url: "https://github.com/openclaw/openclaw/pull/" + pullRequest });
  process.exit(0);
}
if (args[0] === "api" && args[1] === "graphql") {
  const query = args.find((value) => value.startsWith("query=")) || "";
  if (query.includes("comments(first: 100)")) {
    const comments = nextValue("issue-comments-count", ${JSON.stringify(issueComments)}, ${JSON.stringify(finalIssueComments)});
    console.log(JSON.stringify({ data: { repository: { pullRequest: { comments: { nodes: comments } } } } }));
    process.exit(0);
  }
  const threads = nextValue("review-threads-count", [], ${JSON.stringify(finalReviewThreads)});
  console.log(JSON.stringify({ data: { repository: { pullRequest: { reviewThreads: { pageInfo: { hasNextPage: false }, nodes: threads } } } } }));
  process.exit(0);
}
if (args[0] === "api" && args[1].includes("/pulls/" + pullRequest + "/comments")) {
  console.log(JSON.stringify(nextValue("review-comments-count", ${JSON.stringify(reviewComments)}, ${JSON.stringify(finalReviewComments)})));
  process.exit(0);
}
if (args[0] === "api" && args[1].includes("/issues/" + pullRequest + "/comments")) {
  const comments = ${JSON.stringify(issueComments)};
  console.log(JSON.stringify(args.includes("--slurp") ? [comments] : comments));
  process.exit(0);
}
if (args[0] === "api" && args[1].startsWith("repos/" + repo + "/collaborators/") && args[1].endsWith("/permission")) {
  const login = decodeURIComponent(args[1].split("/").at(-2)).toLowerCase();
  if (collaboratorPermissionErrors.has(login)) {
    process.stderr.write("fixture collaborator permission failure");
    process.exit(1);
  }
  const permissions = collaboratorPermissions[login] ?? "read";
  write({
    permission: Array.isArray(permissions)
      ? nextValue("collaborator-permission-" + login, permissions[0], permissions[1])
      : permissions,
  });
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/git/ref/heads/main") {
  write({ object: { sha: base } });
  process.exit(0);
}
if (args[0] === "api" && args[1].startsWith("repos/" + repo + "/commits/" + head + "/check-runs?")) {
  const page = {
    total_count: 1,
    check_runs: [{
      id: 7070,
      name: "openclaw/ci-gate",
      head_sha: head,
      status: "completed",
      conclusion: "success",
      completed_at: new Date().toISOString(),
      details_url: "https://github.com/openclaw/openclaw/actions/runs/7071/job/7070",
      app: { id: 15368 },
    }],
  };
  write(args.includes("--slurp") ? [page] : page);
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/actions/jobs/7070") {
  write({
    id: 7070,
    run_id: 7071,
    name: "openclaw/ci-gate",
    head_sha: head,
    status: "completed",
    conclusion: "success",
    check_run_url: "https://api.github.com/repos/openclaw/openclaw/check-runs/7070",
    html_url: "https://github.com/openclaw/openclaw/actions/runs/7071/job/7070",
  });
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/actions/runs/7071") {
  write({
    id: 7071,
    workflow_id: 8081,
    path: ".github/workflows/ci.yml",
    event: "pull_request",
    head_sha: head,
    status: "completed",
    conclusion: "success",
    pull_requests: [{ number: pullRequest, head: { sha: head }, base: { ref: "main" } }],
  });
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/actions/workflows/ci.yml") {
  write({ id: 8081, path: ".github/workflows/ci.yml", state: "active" });
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/rules/branches/main") {
  write([{
    type: "required_status_checks",
    ruleset_source_type: "Repository",
    ruleset_source: "openclaw/openclaw",
    ruleset_id: 18588237,
    parameters: {
      strict_required_status_checks_policy: true,
      required_status_checks: [
        { context: "clownfish/exact-merge", integration_id: 3535277 },
      ],
    },
  }]);
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/rulesets/18588237") {
  write({
    id: 18588237,
    enforcement: "active",
    target: "branch",
    bypass_actors: [],
    rules: [{
      type: "required_status_checks",
      parameters: {
        strict_required_status_checks_policy: true,
        required_status_checks: [
          { context: "clownfish/exact-merge", integration_id: 3535277 },
        ],
      },
    }],
  });
  process.exit(0);
}
if (args[0] === "api" && args[1].startsWith("repos/" + repo + "/commits/" + testMerge + "/check-runs?")) {
  const checks = exactMergeChecks();
  write({ total_count: checks.length, check_runs: checks });
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/check-runs" && args.includes("POST")) {
  const inputIndex = args.indexOf("--input");
  const payload = JSON.parse(fs.readFileSync(args[inputIndex + 1], "utf8"));
  const check = {
    id: 4242,
    name: payload.name,
    head_sha: payload.head_sha,
    external_id: payload.external_id,
    status: payload.status,
    conclusion: payload.conclusion ?? null,
    app: { id: 3535277 },
  };
  writeExactMergeCheck(check);
  write(check);
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/check-runs/4242" && args.includes("PATCH")) {
  const inputIndex = args.indexOf("--input");
  const payload = JSON.parse(fs.readFileSync(args[inputIndex + 1], "utf8"));
  const previous = exactMergeChecks()[0];
  const check = {
    id: 4242,
    name: payload.name,
    head_sha: previous?.head_sha ?? testMerge,
    external_id: previous?.external_id,
    status: payload.status,
    conclusion: payload.conclusion,
    app: { id: 3535277 },
  };
  writeExactMergeCheck(check);
  write(check);
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/git/commits/" + testMerge) {
  write({ sha: testMerge, tree: { sha: mergeTree }, parents: [{ sha: base }, { sha: head }] });
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/git/commits/" + squashCommit) {
  write({ sha: squashCommit, tree: { sha: squashTree }, parents: [{ sha: base }] });
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/git/commits/" + base) {
  write({ sha: base, tree: { sha: baseTree }, parents: [] });
  process.exit(0);
}
if (args[0] === "api" && args[1] === "repos/" + repo + "/git/trees/" + baseTree + "?recursive=1") {
  write({
    truncated: false,
    tree: [{ path: "src/effective.ts", mode: "100644", type: "blob", sha: baseBlob }],
  });
  process.exit(0);
}
if (
  args[0] === "api" &&
  [mergeTree, squashTree].some((tree) => args[1] === "repos/" + repo + "/git/trees/" + tree + "?recursive=1")
) {
  write({
    truncated: false,
    tree: [{ path: "src/effective.ts", mode: "100644", type: "blob", sha: mergeBlob }],
  });
  process.exit(0);
}
if (args[0] === "api" && args[1].endsWith("/issues/" + pullRequest)) {
  const issue = nextValue(
    "issue-state-count",
    { state: "open", updated_at: ${JSON.stringify(issueUpdatedAt)}, labels: ${JSON.stringify(pullLabels)}, assignees: ${JSON.stringify(pullAssignees)} },
    { state: ${JSON.stringify(finalState)}, updated_at: ${JSON.stringify(finalIssueUpdatedAt)}, labels: ${JSON.stringify(finalPullLabels)}, assignees: ${JSON.stringify(finalPullAssignees)} },
  );
  console.log(JSON.stringify({ number: pullRequest, ...issue, draft: false, title: ${JSON.stringify(pullTitle)}, body: ${JSON.stringify(pullBody)}, html_url: "https://github.com/" + repo + "/pull/" + pullRequest, pull_request: { url: "https://api.github.com/repos/" + repo + "/pulls/" + pullRequest } }));
  process.exit(0);
}
if (args[0] === "api" && args[1].endsWith("/pulls/" + pullRequest)) {
  const restCounterPath = path.join(${JSON.stringify(root)}, "rest-pull-count");
  const restCount = fs.existsSync(restCounterPath) ? Number(fs.readFileSync(restCounterPath, "utf8")) : 0;
  fs.writeFileSync(restCounterPath, String(restCount + 1));
  const restSnapshot = Array.isArray(restSnapshots)
    ? restSnapshots[Math.min(restCount, restSnapshots.length - 1)]
    : {};
  const pull = nextValue(
    "pull-state-count",
    { state: "open", updated_at: ${JSON.stringify(pullUpdatedAt)}, labels: ${JSON.stringify(pullLabels)}, assignees: ${JSON.stringify(pullAssignees)}, headSha: head },
    { state: ${JSON.stringify(finalState)}, updated_at: ${JSON.stringify(finalPullUpdatedAt)}, labels: ${JSON.stringify(finalPullLabels)}, assignees: ${JSON.stringify(finalPullAssignees)}, headSha: ${JSON.stringify(finalHeadSha)} },
  );
  write({ number: pullRequest, ...pull, state: isMerged() ? "closed" : pull.state, draft: false, title: ${JSON.stringify(pullTitle)}, body: ${JSON.stringify(pullBody)}, html_url: "https://github.com/" + repo + "/pull/" + pullRequest, merged_at: isMerged() ? "2026-06-19T00:10:00Z" : null, mergeable: Object.hasOwn(restSnapshot, "mergeable") ? restSnapshot.mergeable : true, mergeable_state: Object.hasOwn(restSnapshot, "mergeable_state") ? restSnapshot.mergeable_state : ${JSON.stringify(mergeStateStatus.toLowerCase())}, merge_commit_sha: isMerged() ? squashCommit : (Object.hasOwn(restSnapshot, "merge_commit_sha") ? restSnapshot.merge_commit_sha : testMerge), user: ${JSON.stringify(pullUser)}, head: { sha: restSnapshot.headSha ?? pull.headSha, ref: "fixture", repo: { full_name: "contributor/openclaw" } }, base: { sha: restSnapshot.baseSha ?? base, ref: "main" } });
  process.exit(0);
}
process.stderr.write("unexpected gh command: " + args.join(" "));
process.exit(1);
`,
  );
  writeExecutable(
    path.join(binDir, "git"),
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
const head = ${JSON.stringify(headSha)};
const base = ${JSON.stringify(baseSha)};
const currentMain = ${JSON.stringify(currentMainSha)} || base;
const refreshedMain = ${JSON.stringify(refreshedMainSha)} || currentMain;
const mainSequence = [
  currentMain,
  ...(${JSON.stringify(refreshedMainShas)} || [refreshedMain]),
];
const refreshedMainCommitCount = ${JSON.stringify(refreshedMainCommitCount)};
const refreshedMainFiles = ${JSON.stringify(refreshedMainFiles)};
const mergeTree = ${JSON.stringify(mergeTreeSha)};
const synthetic = ${JSON.stringify(syntheticMergeSha)};
const baseBlob = ${JSON.stringify(baseBlobSha)};
const mergeBlob = ${JSON.stringify(mergeBlobSha)};
const statePath = path.join(${JSON.stringify(root)}, "git-state");
const mainFetchCountPath = path.join(${JSON.stringify(root)}, "main-fetch-count");
const commandLog = ${JSON.stringify(gitCommandsPath)};
const dependencyCloneDir = args[0] === "clone" ? path.resolve(args.at(-1)) : null;
const dependencyDir =
  dependencyCloneDir ??
  (path.basename(process.cwd()) === "codex"
    ? process.cwd()
    : path.join(${JSON.stringify(runDir)}, "codex"));
const dependencyFiles = ${JSON.stringify(codexDependency.files)};
const dependencyTrackedFiles = [...dependencyFiles, "codex-rs/exec/src/lib.rs"];
const dependencyCloneCountPath = ${JSON.stringify(codexCloneCountPath)};
const dependencyEnvPath = ${JSON.stringify(codexDependencyEnvPath)};
function mainFetchCount() {
  return fs.existsSync(mainFetchCountPath) ? Number(fs.readFileSync(mainFetchCountPath, "utf8")) : 0;
}
function currentMainRef() {
  return mainSequence[Math.min(Math.max(mainFetchCount() - 1, 0), mainSequence.length - 1)];
}
fs.appendFileSync(commandLog, args.join(" ") + "\\n");
const dependencyCommand =
  process.env.GIT_ALLOW_PROTOCOL === "https" ||
  process.cwd() === dependencyDir ||
  (args[0] === "clone" && path.resolve(args.at(-1)) === dependencyDir);
const hardeningMissing =
  process.env.GIT_CONFIG_NOSYSTEM !== "1" ||
  process.env.GIT_CONFIG_GLOBAL !== "/dev/null" ||
  (dependencyCommand &&
    (process.env.GIT_CONFIG_SYSTEM !== undefined ||
      process.env.GIT_CONFIG_PARAMETERS !== undefined)) ||
  process.env.GIT_CONFIG_COUNT !== (dependencyCommand ? "5" : "2") ||
  process.env.GIT_CONFIG_KEY_0 !== "core.hooksPath" ||
  process.env.GIT_CONFIG_VALUE_0 !== "/dev/null" ||
  process.env.GIT_CONFIG_KEY_1 !== "protocol.ext.allow" ||
  process.env.GIT_CONFIG_VALUE_1 !== "never" ||
  (dependencyCommand &&
    (process.env.GIT_CONFIG_KEY_2 !== "credential.helper" ||
      process.env.GIT_CONFIG_VALUE_2 !== "" ||
      process.env.GIT_CONFIG_KEY_3 !== "http.extraHeader" ||
      process.env.GIT_CONFIG_VALUE_3 !== "" ||
      process.env.GIT_CONFIG_KEY_4 !== "http.https://github.com/.extraHeader" ||
      process.env.GIT_CONFIG_VALUE_4 !== "")) ||
  process.env.GIT_NO_REPLACE_OBJECTS !== "1";
if (
  hardeningMissing ||
  process.env.GIT_ALLOW_PROTOCOL !== (dependencyCommand ? "https" : "https:ssh") ||
  (dependencyCommand &&
    (process.env.GIT_TERMINAL_PROMPT !== "0" ||
      process.env.GCM_INTERACTIVE !== "Never" ||
      Object.keys(process.env).some((key) =>
        /(?:github|openai|codex|npm|token|secret|password|private[_-]?key)/i.test(key),
      )))
) {
  process.stderr.write("missing Git hardening: " + JSON.stringify({
    dependencyCommand,
    allowProtocol: process.env.GIT_ALLOW_PROTOCOL,
    configNoSystem: process.env.GIT_CONFIG_NOSYSTEM,
    configGlobal: process.env.GIT_CONFIG_GLOBAL,
    configKey0: process.env.GIT_CONFIG_KEY_0,
    configValue0: process.env.GIT_CONFIG_VALUE_0,
    configKey1: process.env.GIT_CONFIG_KEY_1,
    configValue1: process.env.GIT_CONFIG_VALUE_1,
    noReplaceObjects: process.env.GIT_NO_REPLACE_OBJECTS,
    terminalPrompt: process.env.GIT_TERMINAL_PROMPT,
    interactive: process.env.GCM_INTERACTIVE,
    credentialKeys: Object.keys(process.env).filter((key) =>
      /(?:github|openai|codex|npm|token|secret|password|private[_-]?key)/i.test(key),
    ),
  }));
  process.exit(97);
}
if (args[0] === "clone" && dependencyCommand) {
  fs.writeFileSync(
    dependencyEnvPath,
    JSON.stringify({
      allowProtocol: process.env.GIT_ALLOW_PROTOCOL,
      terminalPrompt: process.env.GIT_TERMINAL_PROMPT,
      askpass: process.env.GIT_ASKPASS,
      configCount: process.env.GIT_CONFIG_COUNT,
      configValues: [process.env.GIT_CONFIG_VALUE_2, process.env.GIT_CONFIG_VALUE_3, process.env.GIT_CONFIG_VALUE_4],
      cwdHasGit: fs.existsSync(path.join(process.cwd(), ".git")),
      homeEntries: fs.readdirSync(process.env.HOME),
      xdgEntries: fs.readdirSync(process.env.XDG_CONFIG_HOME),
      credentialKeys: Object.keys(process.env).filter((key) =>
        /(?:github|openai|codex|npm|token|secret|password|private[_-]?key)/i.test(key),
      ),
    }),
  );
}
if (args[0] === "clone" && dependencyCommand) {
  const failure = ${JSON.stringify(codexCloneFailure)};
  if (failure) {
    process.stderr.write(failure);
    process.exit(1);
  }
  const count = fs.existsSync(dependencyCloneCountPath)
    ? Number(fs.readFileSync(dependencyCloneCountPath, "utf8"))
    : 0;
  fs.writeFileSync(dependencyCloneCountPath, String(count + 1));
  fs.mkdirSync(path.join(dependencyDir, ".git"), { recursive: true });
  for (const file of dependencyTrackedFiles) {
    if (${JSON.stringify(codexFileFault)}?.path === file && ${JSON.stringify(codexFileFault)}?.type === "missing") continue;
    const target = path.join(dependencyDir, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    if (${JSON.stringify(codexFileFault)}?.path === file && ${JSON.stringify(codexFileFault)}?.type === "directory") {
      fs.mkdirSync(target, { recursive: true });
    } else {
      fs.writeFileSync(target, "fixture pinned codex source\\n".repeat(600));
    }
  }
  process.exit(0);
}
if (dependencyCommand) {
  if (args[0] === "remote" && args[1] === "get-url") console.log("https://github.com/openai/codex.git");
  else if (args[0] === "cat-file" && args[1] === "-t") console.log(${JSON.stringify(codexTagType)});
  else if (args[0] === "rev-parse" && args[1] === "refs/tags/rust-v0.125.0") console.log(${JSON.stringify(codexTagObject)});
  else if (args[0] === "rev-parse") console.log(${JSON.stringify(codexCommitSha)});
  else if (args[0] === "status" && args[1] === "--porcelain") {
    const source = path.join(dependencyDir, "codex-rs", "exec", "src", "main.rs");
    if (fs.existsSync(source) && fs.readFileSync(source, "utf8") !== "fixture pinned codex source\\n".repeat(600)) {
      console.log(" M codex-rs/exec/src/main.rs");
    }
  }
  else if (args[0] === "ls-files" && args[1] === "-z") process.stdout.write(dependencyTrackedFiles.join("\\0") + "\\0");
  process.exit(0);
}
const state = fs.existsSync(statePath) ? fs.readFileSync(statePath, "utf8") : "pr";
if (args[0] === "config" && args.includes("--local") && args.includes("--list") && args.includes("--null")) {
  if (fs.existsSync(${JSON.stringify(gitConfigStatePath)})) {
    process.stdout.write(fs.readFileSync(${JSON.stringify(gitConfigStatePath)}));
  }
  if (args.includes("--includes") && fs.existsSync(${JSON.stringify(gitIncludedConfigStatePath)})) {
    process.stdout.write(fs.readFileSync(${JSON.stringify(gitIncludedConfigStatePath)}));
  }
  process.exit(0);
}
if (args[0] === "rev-parse") {
  if (args[1] === "origin/main") console.log(currentMainRef());
  else if (args[1] === "HEAD^") console.log(currentMainRef());
  else if (args[1] === "HEAD^{tree}") console.log(mergeTree);
  else if (args[1] === "--is-shallow-repository") console.log("false");
  else console.log(state === "synthetic" ? synthetic : state === "main" ? currentMain : head);
  process.exit(0);
}
if (args[0] === "fetch" && args.some((arg) => arg === "main:refs/remotes/origin/main")) {
  const count = mainFetchCount();
  fs.writeFileSync(mainFetchCountPath, String(count + 1));
  process.exit(0);
}
if (args[0] === "merge-base") {
  if (args[1] === "--is-ancestor") process.exit(0);
  console.log(base);
  process.exit(0);
}
if (args[0] === "rev-list" && args[1] === "--count") {
  console.log(refreshedMainCommitCount);
  process.exit(0);
}
if (args[0] === "checkout") {
  fs.writeFileSync(statePath, args.at(-1) === synthetic ? "synthetic" : args.at(-1) === "origin/main" ? "main" : "pr");
  process.exit(0);
}
if (args[0] === "merge-tree" && args[1] === "--write-tree") {
  const failure = ${JSON.stringify(syntheticMergeFailure)};
  if (failure) {
    process.stderr.write(failure);
    process.exit(1);
  }
  console.log(mergeTree);
  process.exit(0);
}
if (args[0] === "commit-tree") {
  console.log(synthetic);
  process.exit(0);
}
if (args[0] === "ls-tree") {
  const treeish = args.at(-1);
  const blob = treeish === mergeTree ? mergeBlob : baseBlob;
  process.stdout.write("100644 blob " + blob + "\\tsrc/effective.ts\\0");
  process.exit(0);
}
if (args[0] === "diff" && args[1] === "--name-only") {
  if (args.includes("--diff-filter=U")) process.exit(0);
  const range = args.find((value) => /^[0-9a-f]{40}\.\.[0-9a-f]{40}$/i.test(value));
  const target = args.at(-1);
  const files = range
    ? refreshedMainFiles
    : target.endsWith("...HEAD")
      ? ["src/effective.ts"]
      : ["src/raw.ts", "src/already-on-main.ts"];
  const separator = args.includes("-z") ? "\\0" : "\\n";
  process.stdout.write(files.join(separator) + separator);
  process.exit(0);
}
process.exit(0);
`,
  );
  writeExecutable(path.join(binDir, "corepack"), "#!/bin/sh\nexit 0\n");
  writeExecutable(
    path.join(binDir, "pnpm"),
    `#!/usr/bin/env node
const fs = require("node:fs");
const args = process.argv.slice(2);
fs.appendFileSync(${JSON.stringify(pnpmCommandsPath)}, args.join(" ") + "\\n");
const toolchainGitConfig = ${JSON.stringify(toolchainGitConfig)};
if (toolchainGitConfig && args[0] === "install") {
  fs.writeFileSync(
    ${JSON.stringify(gitConfigStatePath)},
    toolchainGitConfig.key + "\\n" + toolchainGitConfig.value + "\\0",
  );
}
const failure = ${JSON.stringify(validationFailure)};
if (failure && args[0] === "check:changed") {
  process.stdout.write(String(failure.stdout ?? ""));
  process.stderr.write(String(failure.stderr ?? ""));
  process.exit(Number(failure.status ?? 1));
}
`,
  );
  writeExecutable(
    codexPath,
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
if (args.length === 1 && args[0] === "--version") {
  const versionCountPath = ${JSON.stringify(codexVersionCountPath)};
  const versionCount = fs.existsSync(versionCountPath) ? Number(fs.readFileSync(versionCountPath, "utf8")) : 0;
  fs.writeFileSync(versionCountPath, String(versionCount + 1));
  fs.writeFileSync(${JSON.stringify(codexVersionEnvPath)}, JSON.stringify({
    cwd: process.cwd(),
    cwdHasGit: fs.existsSync(path.join(process.cwd(), ".git")),
    homeEntries: fs.readdirSync(process.env.HOME),
  }));
  const credentialKeys = Object.keys(process.env).filter((key) =>
    /(?:github|openai|codex|npm|token|secret|password|private[_-]?key)/i.test(key),
  );
  if (
    process.env.GIT_TERMINAL_PROMPT !== "0" ||
    process.env.GCM_INTERACTIVE !== "Never" ||
    credentialKeys.length > 0
  ) {
    process.stderr.write("unsafe Codex dependency environment");
    process.exit(96);
  }
  process.stdout.write(${JSON.stringify(codexVersion)});
  process.exit(0);
}
fs.writeFileSync(${JSON.stringify(codexArgsPath)}, JSON.stringify(args));
const index = args.indexOf("--output-last-message");
const countPath = ${JSON.stringify(codexCountPath)};
const count = fs.existsSync(countPath) ? Number(fs.readFileSync(countPath, "utf8")) : 0;
fs.writeFileSync(countPath, String(count + 1));
fs.writeFileSync(${JSON.stringify(codexPromptPath)}, fs.readFileSync(0, "utf8"));
if (${JSON.stringify(codexMutatesCheckout)}) {
  fs.writeFileSync("src/effective.ts", "mutated by fixture review\\n");
}
if (${JSON.stringify(codexMutatesSource)}) {
  fs.writeFileSync(path.join("..", "codex", "codex-rs", "exec", "src", "main.rs"), "mutated source\\n");
}
const codexGitConfigMutation = ${JSON.stringify(codexGitConfigMutation)};
if (codexGitConfigMutation) {
  const configPath = ${JSON.stringify(gitConfigStatePath)};
  const currentConfig = fs.existsSync(configPath) ? fs.readFileSync(configPath) : Buffer.alloc(0);
  fs.writeFileSync(
    configPath,
    Buffer.concat([
      currentConfig,
      Buffer.from(codexGitConfigMutation.key + "\\n" + codexGitConfigMutation.value + "\\0"),
    ]),
  );
}
const codexIncludedGitConfigMutation = ${JSON.stringify(codexIncludedGitConfigMutation)};
if (codexIncludedGitConfigMutation) {
  fs.writeFileSync(
    ${JSON.stringify(gitIncludedConfigStatePath)},
    codexIncludedGitConfigMutation.key + "\\n" + codexIncludedGitConfigMutation.value + "\\0",
  );
}
if (!${JSON.stringify(codexSkipsSecondWrite)} || count === 0) {
  fs.writeFileSync(args[index + 1], JSON.stringify(${JSON.stringify(codexReview)}));
}
if (${JSON.stringify(codexFailure)}) {
  process.stderr.write(${JSON.stringify(codexFailure)});
  process.exit(1);
}
`,
  );
  return {
    baseSha,
    binDir,
    codexPath,
    effectiveDiffSha256,
    codexArgsPath,
    codexCloneCountPath,
    codexCountPath,
    codexDependencyEnvPath,
    codexPromptPath,
    codexVersionCountPath,
    codexVersionEnvPath,
    credentialSentinelPath,
    gitCommandsPath,
    ghCallsPath,
    headSha,
    jobPath,
    mergeTreeSha,
    mergeLogPath,
    pnpmCommandsPath,
    pullRequest,
    root,
    runDir,
    hostileHome,
    syntheticMergeSha,
  };
}

function writeExecutable(filePath, content) {
  fs.writeFileSync(filePath, content, { mode: 0o755 });
}
