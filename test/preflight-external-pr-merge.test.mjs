import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const script = fs.readFileSync(path.join(repoRoot, "scripts", "preflight-external-pr-merge.mjs"), "utf8");
const workflow = fs.readFileSync(path.join(repoRoot, ".github", "workflows", "external-merge-preflight.yml"), "utf8");

test("external merge preflight is exact-head, read-only, and refuses unresolved review evidence", () => {
  assert.match(script, /source job does not explicitly contain/);
  assert.match(script, /pull\/\$\{pullRequest\}\/head:\$\{ref\}/);
  assert.match(script, /PR head changed during checkout/);
  assert.match(script, /function ensureMergeBase/);
  assert.match(script, /--deepen/);
  assert.match(script, /if \(secret\) redacted = redacted\.replaceAll/);
  assert.match(script, /base advanced before validation/);
  assert.match(script, /unresolved review thread/);
  assert.match(script, /top-level issue comment/);
  assert.match(script, /inline review comment/);
  assert.match(script, /--sandbox",\s*"read-only"/);
  assert.match(script, /delete env\[key\]/);
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
  assert.match(workflow, /npm run apply-result/);
  assert.match(workflow, /permission-pull-requests: write/);
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

test("external merge preflight tolerates non-actionable automation comments", () => {
  const fixture = makeFixture({
    mergeStateStatus: "UNSTABLE",
    pullLabels: [{ name: "clownfish:automerge" }],
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

function makeFixture({
  issueComments = [],
  reviewComments = [],
  reviews = [],
  pullLabels = [],
  statusCheckRollup = [],
  mergeStateStatus = "CLEAN",
  currentMainSha = null,
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
if (args[0] === "repo" && args[1] === "clone") {
  const target = args[3];
  fs.mkdirSync(path.join(target, ".git"), { recursive: true });
  fs.writeFileSync(path.join(target, "package.json"), JSON.stringify({ packageManager: "pnpm@10.33.0" }));
  process.exit(0);
}
if (args[0] === "pr" && args[1] === "view") {
  console.log(JSON.stringify({ comments: ${JSON.stringify(issueComments)}, headRefOid: head, isDraft: false, mergeStateStatus: ${JSON.stringify(mergeStateStatus)}, mergeable: "MERGEABLE", reviewDecision: "APPROVED", reviews: ${JSON.stringify(reviews)}, statusCheckRollup: ${JSON.stringify(statusCheckRollup)}, updatedAt: "2026-06-19T00:00:00Z", url: "https://github.com/openclaw/openclaw/pull/123" }));
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
  console.log(JSON.stringify({ state: "open", draft: false, title: "fix: fixture", body: "", html_url: "https://github.com/openclaw/openclaw/pull/123", updated_at: "2026-06-19T00:00:00Z", labels: ${JSON.stringify(pullLabels)}, head: { sha: head, ref: "fixture", repo: { full_name: "contributor/openclaw" } }, base: { sha: base, ref: "main" } }));
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
fs.writeFileSync(args[index + 1], JSON.stringify({ status: "clean", summary: "clean fixture review", findings: [], findings_addressed: true, evidence: ["Codex /review clean"] }));
`,
  );
  return { binDir, headSha, jobPath, runDir };
}

function writeExecutable(filePath, content) {
  fs.writeFileSync(filePath, content, { mode: 0o755 });
}
