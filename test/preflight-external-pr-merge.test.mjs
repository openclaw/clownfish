import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
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
  assert.match(script, /--deepen/);
  assert.match(script, /--unshallow/);
  assert.match(script, /if \(secret\) redacted = redacted\.replaceAll/);
  assert.match(script, /base advanced before validation/);
  assert.match(script, /unresolved review thread/);
  assert.match(script, /top-level issue comment/);
  assert.match(script, /inline review comment/);
  assert.match(
    script,
    /const defaultCodexReviewSandbox = process\.env\.GITHUB_ACTIONS === "true" \? "danger-full-access" : "read-only";/,
  );
  assert.match(script, /CLOWNFISH_EXTERNAL_PREFLIGHT_CODEX_SANDBOX \?\? defaultCodexReviewSandbox/);
  assert.match(script, /--sandbox",\s*codexReviewSandbox/);
  assert.match(script, /delete env\[key\]/);
  assert.match(script, /if \(process\.env\.GITHUB_ACTIONS === "true"\) \{\s*delete env\.OPENAI_API_KEY;\s*delete env\.CODEX_API_KEY;/s);
  assert.match(script, /function validationEnv\(\)[\s\S]*?"CLOWNFISH_READ_GH_TOKEN"/);
  assert.doesNotMatch(script, /pr", "merge"/);
  assert.doesNotMatch(script, /resolveReviewThread/);
});

test("external merge workflow validates before guarded apply", () => {
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
  assert.match(workflow, /npm run apply-result/);
  assert.match(workflow, /permission-pull-requests: write/);
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
  assert.match(clusterWorkflow, /- name: Run external merge preflights/);
  assert.match(clusterWorkflow, /npm run run-external-merge-preflights -- "\$\{\{ needs\.prepare\.outputs\.job \}\}" --latest --max-prs 2/);
  assert.match(clusterWorkflow, /- name: Run external merge preflights[\s\S]*?- name: Apply safe closure actions/);
});

test("daily checks-success intake feeds guarded external merge preflights", () => {
  assert.match(intakeWorkflow, /cron: "17 7 \* \* \*"/);
  assert.match(intakeWorkflow, /CLOWNFISH_CHECKS_SUCCESS_PREFLIGHT_ENABLED != '0'/);
  assert.match(intakeWorkflow, /scripts\/import-github-pr-inventory\.mjs/);
  assert.match(intakeWorkflow, /--strategy remediation/);
  assert.match(intakeWorkflow, /--checks-success/);
  assert.match(intakeWorkflow, /default: "30"/);
  assert.match(intakeWorkflow, /default: ubuntu-latest/);
  assert.match(intakeWorkflow, /git commit -m "chore: add daily checks-success preflight jobs"/);
  assert.match(intakeWorkflow, /gh workflow run external-merge-preflight\.yml/);
  assert.match(intakeWorkflow, /-f "apply=\$\{apply\}"/);
});

test("external merge preflight emits an applicator-valid exact-head merge artifact", () => {
  const fixture = makeFixture();
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
  assert.equal(result.merge_preflight[0].codex_review.status, "clean");

  const reviewed = spawnSync(process.execPath, ["scripts/review-results.mjs", fixture.runDir], {
    cwd: repoRoot,
    encoding: "utf8",
  });
  assert.equal(reviewed.status, 0, reviewed.stderr || reviewed.stdout);
});

test("external merge preflight tolerates base drift when exact head remains clean", () => {
  const fixture = makeFixture({ currentMainSha: "c".repeat(40) });
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
        author: { login: "external-reviewer" },
        authorAssociation: "NONE",
        body: "This seems like the right fix boundary and matches the reported behavior.",
        url: "https://github.com/openclaw/openclaw/pull/123#issuecomment-4",
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

test("external merge preflight tolerates author take-a-look status comments", () => {
  const fixture = makeFixture({
    pullUser: { login: "contributor" },
    issueComments: [
      {
        author: { login: "contributor" },
        authorAssociation: "CONTRIBUTOR",
        body: [
          "This one and #456 are the remaining two, both with regression tests and ClawSweeper approval.",
          "Would you mind taking a look when you have a chance? Thanks!",
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

function makeFixture({
  issueComments = [],
  reviewComments = [],
  reviews = [],
  pullLabels = [],
  pullUser = { login: "contributor" },
  statusCheckRollup = [],
  mergeStateStatus = "CLEAN",
  mergeViews = null,
  currentMainSha = null,
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
if (args[0] === "repo" && args[1] === "clone") {
  const target = args[3];
  fs.mkdirSync(path.join(target, ".git"), { recursive: true });
  fs.writeFileSync(path.join(target, "package.json"), JSON.stringify({ packageManager: "pnpm@10.33.0" }));
  process.exit(0);
}
if (args[0] === "pr" && args[1] === "view") {
  const counterPath = ${JSON.stringify(path.join(root, "pr-view-count"))};
  const count = fs.existsSync(counterPath) ? Number(fs.readFileSync(counterPath, "utf8")) : 0;
  fs.writeFileSync(counterPath, String(count + 1));
  const mergeView = Array.isArray(mergeViews) ? mergeViews[Math.min(count, mergeViews.length - 1)] : {};
  console.log(JSON.stringify({ comments: ${JSON.stringify(issueComments)}, headRefOid: head, isDraft: false, mergeStateStatus: mergeView.mergeStateStatus ?? ${JSON.stringify(mergeStateStatus)}, mergeable: mergeView.mergeable ?? "MERGEABLE", reviewDecision: "APPROVED", reviews: ${JSON.stringify(reviews)}, statusCheckRollup: ${JSON.stringify(statusCheckRollup)}, updatedAt: "2026-06-19T00:00:00Z", url: "https://github.com/openclaw/openclaw/pull/123" }));
  process.exit(0);
}
if (args[0] === "api" && args[1] === "graphql") {
  console.log(JSON.stringify({ data: { repository: { pullRequest: { reviewThreads: { pageInfo: { hasNextPage: false }, nodes: [] } } } } }));
  process.exit(0);
}
if (args[0] === "api" && args[1].includes("/pulls/123/comments")) {
  console.log(${JSON.stringify(JSON.stringify(reviewComments))});
  process.exit(0);
}
if (args[0] === "api" && args[1].endsWith("/pulls/123")) {
  console.log(JSON.stringify({ state: "open", draft: false, title: "fix: fixture", body: "", html_url: "https://github.com/openclaw/openclaw/pull/123", updated_at: "2026-06-19T00:00:00Z", labels: ${JSON.stringify(pullLabels)}, user: ${JSON.stringify(pullUser)}, head: { sha: head, ref: "fixture", repo: { full_name: "contributor/openclaw" } }, base: { sha: base, ref: "main" } }));
  process.exit(0);
}
process.stderr.write("unexpected gh command: " + args.join(" "));
process.exit(1);
`,
  );
  writeExecutable(
    path.join(binDir, "git"),
    `#!/usr/bin/env node
const args = process.argv.slice(2);
const head = ${JSON.stringify(headSha)};
const base = ${JSON.stringify(baseSha)};
const currentMain = ${JSON.stringify(currentMainSha)} || base;
if (args[0] === "rev-parse") console.log(args[1] === "origin/main" ? currentMain : head);
if (args[0] === "merge-base") console.log(base);
process.exit(0);
`,
  );
  for (const command of ["corepack", "pnpm"]) {
    writeExecutable(path.join(binDir, command), "#!/bin/sh\nexit 0\n");
  }
  writeExecutable(
    path.join(binDir, "codex"),
    `#!/usr/bin/env node
const fs = require("node:fs");
const args = process.argv.slice(2);
const index = args.indexOf("--output-last-message");
fs.writeFileSync(args[index + 1], JSON.stringify(${JSON.stringify(codexReview)}));
`,
  );
  return { binDir, headSha, jobPath, runDir };
}

function writeExecutable(filePath, content) {
  fs.writeFileSync(filePath, content, { mode: 0o755 });
}
