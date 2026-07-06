import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const script = fs.readFileSync(path.join(repoRoot, "scripts", "preflight-external-pr-merge.mjs"), "utf8");
const runnerScript = fs.readFileSync(path.join(repoRoot, "scripts", "run-external-merge-preflights.mjs"), "utf8");
const workflow = fs.readFileSync(path.join(repoRoot, ".github", "workflows", "external-merge-preflight.yml"), "utf8");
const intakeWorkflow = fs.readFileSync(path.join(repoRoot, ".github", "workflows", "checks-success-preflight-intake.yml"), "utf8");
const clusterWorkflow = fs.readFileSync(path.join(repoRoot, ".github", "workflows", "cluster-worker.yml"), "utf8");
const autonomousPrompt = fs.readFileSync(path.join(repoRoot, "prompts", "autonomous.md"), "utf8");
const githubInventoryImporter = fs.readFileSync(path.join(repoRoot, "scripts", "import-github-pr-inventory.mjs"), "utf8");

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
  assert.match(script, /--sandbox",\s*codexReviewSandbox/);
  assert.match(script, /--config\.enable-pre-post-scripts=false/);
  assert.match(script, /GIT_NO_REPLACE_OBJECTS: "1"/);
  assert.match(script, /function verifyTrackedFilesystem/);
  assert.match(script, /function gitBlobSha/);
  assert.match(script, /"check:changed", "--base", baseSha, "--head", headSha/);
  assert.match(script, /do not use mutable branch refs/);
  assert.match(script, /delete env\[key\]/);
  assert.match(script, /if \(process\.env\.GITHUB_ACTIONS === "true"\) \{\s*delete env\.OPENAI_API_KEY;\s*delete env\.CODEX_API_KEY;/s);
  assert.match(script, /function validationEnv\(\)[\s\S]*?"CLOWNFISH_READ_GH_TOKEN"/);
  assert.match(script, /function validationEnv\(\)[\s\S]*?GIT_NO_REPLACE_OBJECTS: "1"/);
  assert.match(script, /function codexEnv\(\)[\s\S]*?GIT_NO_REPLACE_OBJECTS: "1"/);
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
  assert.match(
    workflow,
    /- name: Upload preflight artifact[\s\S]*?if: always\(\)[\s\S]*?- name: Fail blocked preflight[\s\S]*?if: \$\{\{ always\(\) && steps\.outcome\.outputs\.preflight_passed != 'true' \}\}[\s\S]*?exit 1[\s\S]*?\n  apply:/,
  );
  assert.match(workflow, /npm run apply-result/);
  assert.match(workflow, /- name: Verify mutation integrity[\s\S]*?npm run assert-mutation-integrity/);
  assert.match(workflow, /- name: Verify mutation integrity[\s\S]*?- name: Upload apply artifact/);
  assert.match(workflow, /permission-pull-requests: write/);
  assert.match(workflow, /permission-checks: write/);
  assert.match(workflow, /CLOWNFISH_APP_ID: \$\{\{ vars\.CLOWNFISH_APP_ID \}\}/);
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
  assert.match(runnerScript, /const reviewedActions = await mapLimit\(requests, concurrency, runPreflightReview\)/);
  assert.match(
    runnerScript,
    /for \(const action of reviewedActions\) \{\s*report\.actions\.push\(await applyReviewedPreflight\(action\)\);\s*\}/,
  );
  assert.match(runnerScript, /const execFileAsync = promisify\(execFile\)/);
  assert.match(runnerScript, /CLOWNFISH_EXTERNAL_PREFLIGHT_HEARTBEAT_MS/);
  assert.match(runnerScript, /still running after/);
  assert.match(runnerScript, /clearInterval\(heartbeat\)/);
  assert.match(clusterWorkflow, /- name: Run external merge preflights/);
  assert.match(clusterWorkflow, /CLOWNFISH_APP_ID: \$\{\{ vars\.CLOWNFISH_APP_ID \}\}/);
  assert.equal((clusterWorkflow.match(/permission-checks: write/g) ?? []).length >= 2, true);
  assert.match(
    clusterWorkflow,
    /npm run run-external-merge-preflights -- "\$\{\{ needs\.prepare\.outputs\.job \}\}"[\s\S]*?--max-prs "\$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_MAX_PRS \|\| '5' \}\}"[\s\S]*?--concurrency "\$\{\{ vars\.CLOWNFISH_EXTERNAL_PREFLIGHT_CONCURRENCY \|\| '3' \}\}"/,
  );
  assert.match(clusterWorkflow, /- name: Run external merge preflights[\s\S]*?- name: Apply safe closure actions/);
  assert.match(
    clusterWorkflow,
    /- name: Tag Clownfish targets[\s\S]*?- name: Verify mutation integrity[\s\S]*?- name: Upload final worker artifacts/,
  );
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
  assert.equal(result.merge_preflight[0].reviewed_base_sha, fixture.baseSha);
  assert.equal(result.merge_preflight[0].reviewed_head_sha, fixture.headSha);
  assert.equal(result.merge_preflight[0].effective_diff_sha256, fixture.effectiveDiffSha256);
  assert.equal(result.merge_preflight[0].effective_diff_files, 1);
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

test("external merge preflight blocks when main moves during validation or review", () => {
  const fixture = makeFixture({ refreshedMainSha: "9".repeat(40) });
  const { report } = runPreflightFixture(fixture);

  assert.equal(report.status, "blocked");
  assert.match(report.reason, /changed while validation or review was running/);
  assert.match(report.reason, new RegExp(`${fixture.baseSha}, current ${"9".repeat(40)}`));
});

test("external merge preflight treats zero-finding clean reviews as clean", () => {
  const fixture = makeFixture({
    codexReview: {
      status: "clean",
      summary: "No blocking findings; best-fix verdict: best for this scope.",
      findings: [],
      findings_addressed: false,
      evidence: ["No findings were emitted, so there is nothing to address."],
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

function runPreflightFixture(fixture, extraEnv = {}) {
  const child = spawnSync(
    process.execPath,
    ["scripts/preflight-external-pr-merge.mjs", fixture.jobPath, "--pr", "123", "--run-dir", fixture.runDir],
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

function makeFixture({
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
  issueUpdatedAt = "2026-06-19T00:00:00Z",
  pullUpdatedAt = "2026-06-19T00:00:00Z",
  pullAssignees = [],
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
  validationFailure = null,
  syntheticMergeFailure = null,
  codexMutatesCheckout = false,
  codexReview = {
    status: "clean",
    summary: "clean fixture review",
    findings: [],
    findings_addressed: true,
    evidence: ["Codex /review clean"],
  },
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
  const pnpmCommandsPath = path.join(root, "pnpm-commands.log");
  const codexPromptPath = path.join(root, "codex-prompt.txt");
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
  fs.writeFileSync(
    jobPath,
    `---
repo: openclaw/openclaw
cluster_id: fixture-source
mode: plan
allowed_actions:
  - "merge"
blocked_actions:
  - "comment"
  - "label"
  - "close"
canonical:
  - "#123"
candidates:
  - "#123"
cluster_refs:
  - "#123"
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
const head = ${JSON.stringify(headSha)};
const base = ${JSON.stringify(baseSha)};
const mergeViews = ${JSON.stringify(mergeViews)};
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
if (args[0] === "pr" && args[1] === "view") {
  const counterPath = ${JSON.stringify(path.join(root, "pr-view-count"))};
  const count = fs.existsSync(counterPath) ? Number(fs.readFileSync(counterPath, "utf8")) : 0;
  fs.writeFileSync(counterPath, String(count + 1));
  const mergeView = Array.isArray(mergeViews) ? mergeViews[Math.min(count, mergeViews.length - 1)] : {};
  console.log(JSON.stringify({ comments: mergeView.comments ?? ${JSON.stringify(issueComments)}, headRefOid: mergeView.headRefOid ?? head, isDraft: false, mergeStateStatus: mergeView.mergeStateStatus ?? ${JSON.stringify(mergeStateStatus)}, mergeable: mergeView.mergeable ?? "MERGEABLE", reviewDecision: mergeView.reviewDecision ?? "APPROVED", reviews: mergeView.reviews ?? ${JSON.stringify(reviews)}, statusCheckRollup: mergeView.statusCheckRollup ?? ${JSON.stringify(statusCheckRollup)}, updatedAt: mergeView.updatedAt ?? "2026-06-19T00:00:00Z", url: "https://github.com/openclaw/openclaw/pull/123" }));
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
if (args[0] === "api" && args[1].includes("/pulls/123/comments")) {
  console.log(JSON.stringify(nextValue("review-comments-count", ${JSON.stringify(reviewComments)}, ${JSON.stringify(finalReviewComments)})));
  process.exit(0);
}
if (args[0] === "api" && args[1].includes("/issues/123/comments")) {
  console.log(${JSON.stringify(JSON.stringify(issueComments))});
  process.exit(0);
}
if (args[0] === "api" && args[1].endsWith("/issues/123")) {
  const issue = nextValue(
    "issue-state-count",
    { state: "open", updated_at: ${JSON.stringify(issueUpdatedAt)}, labels: ${JSON.stringify(pullLabels)}, assignees: ${JSON.stringify(pullAssignees)} },
    { state: ${JSON.stringify(finalState)}, updated_at: ${JSON.stringify(finalIssueUpdatedAt)}, labels: ${JSON.stringify(finalPullLabels)}, assignees: ${JSON.stringify(finalPullAssignees)} },
  );
  console.log(JSON.stringify({ ...issue, draft: false, title: ${JSON.stringify(pullTitle)}, body: ${JSON.stringify(pullBody)}, html_url: "https://github.com/openclaw/openclaw/pull/123", pull_request: { url: "https://api.github.com/repos/openclaw/openclaw/pulls/123" } }));
  process.exit(0);
}
if (args[0] === "api" && args[1].endsWith("/pulls/123")) {
  const pull = nextValue(
    "pull-state-count",
    { state: "open", updated_at: ${JSON.stringify(pullUpdatedAt)}, labels: ${JSON.stringify(pullLabels)}, assignees: ${JSON.stringify(pullAssignees)}, headSha: head },
    { state: ${JSON.stringify(finalState)}, updated_at: ${JSON.stringify(finalPullUpdatedAt)}, labels: ${JSON.stringify(finalPullLabels)}, assignees: ${JSON.stringify(finalPullAssignees)}, headSha: ${JSON.stringify(finalHeadSha)} },
  );
  console.log(JSON.stringify({ number: 123, ...pull, draft: false, title: ${JSON.stringify(pullTitle)}, body: ${JSON.stringify(pullBody)}, html_url: "https://github.com/openclaw/openclaw/pull/123", user: ${JSON.stringify(pullUser)}, head: { sha: pull.headSha, ref: "fixture", repo: { full_name: "contributor/openclaw" } }, base: { sha: base, ref: "main" } }));
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
const mergeTree = ${JSON.stringify(mergeTreeSha)};
const synthetic = ${JSON.stringify(syntheticMergeSha)};
const baseBlob = ${JSON.stringify(baseBlobSha)};
const mergeBlob = ${JSON.stringify(mergeBlobSha)};
const statePath = path.join(${JSON.stringify(root)}, "git-state");
const refreshedMainPath = path.join(${JSON.stringify(root)}, "main-refreshed");
const mainFetchCountPath = path.join(${JSON.stringify(root)}, "main-fetch-count");
const commandLog = ${JSON.stringify(gitCommandsPath)};
fs.appendFileSync(commandLog, args.join(" ") + "\\n");
const state = fs.existsSync(statePath) ? fs.readFileSync(statePath, "utf8") : "pr";
if (args[0] === "rev-parse") {
  if (args[1] === "origin/main") {
    console.log(fs.existsSync(refreshedMainPath) ? refreshedMain : currentMain);
  }
  else if (args[1] === "HEAD^") console.log(currentMain);
  else if (args[1] === "HEAD^{tree}") console.log(mergeTree);
  else if (args[1] === "--is-shallow-repository") console.log("false");
  else console.log(state === "synthetic" ? synthetic : state === "main" ? currentMain : head);
  process.exit(0);
}
if (args[0] === "fetch" && args.some((arg) => arg === "main:refs/remotes/origin/main")) {
  const count = fs.existsSync(mainFetchCountPath) ? Number(fs.readFileSync(mainFetchCountPath, "utf8")) : 0;
  fs.writeFileSync(mainFetchCountPath, String(count + 1));
  if (count >= 1) fs.writeFileSync(refreshedMainPath, "refreshed");
  process.exit(0);
}
if (args[0] === "merge-base") {
  console.log(base);
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
  const target = args.at(-1);
  const files = target.endsWith("...HEAD") ? ["src/effective.ts"] : ["src/raw.ts", "src/already-on-main.ts"];
  process.stdout.write(files.join("\\n") + "\\n");
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
const failure = ${JSON.stringify(validationFailure)};
if (failure && args[0] === "check:changed") {
  process.stdout.write(String(failure.stdout ?? ""));
  process.stderr.write(String(failure.stderr ?? ""));
  process.exit(Number(failure.status ?? 1));
}
`,
  );
  writeExecutable(
    path.join(binDir, "codex"),
    `#!/usr/bin/env node
const fs = require("node:fs");
const args = process.argv.slice(2);
const index = args.indexOf("--output-last-message");
fs.writeFileSync(${JSON.stringify(codexPromptPath)}, fs.readFileSync(0, "utf8"));
if (${JSON.stringify(codexMutatesCheckout)}) {
  fs.writeFileSync("src/effective.ts", "mutated by fixture review\\n");
}
fs.writeFileSync(args[index + 1], JSON.stringify(${JSON.stringify(codexReview)}));
`,
  );
  return {
    baseSha,
    binDir,
    effectiveDiffSha256,
    codexPromptPath,
    gitCommandsPath,
    headSha,
    jobPath,
    mergeTreeSha,
    pnpmCommandsPath,
    runDir,
    syntheticMergeSha,
  };
}

function writeExecutable(filePath, content) {
  fs.writeFileSync(filePath, content, { mode: 0o755 });
}
