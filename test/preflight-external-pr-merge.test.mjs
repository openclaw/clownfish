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

function makeFixture() {
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
  console.log(JSON.stringify({ comments: [], headRefOid: head, isDraft: false, mergeStateStatus: "CLEAN", mergeable: "MERGEABLE", reviewDecision: "APPROVED", reviews: [], statusCheckRollup: [], updatedAt: "2026-06-19T00:00:00Z", url: "https://github.com/openclaw/openclaw/pull/123" }));
  process.exit(0);
}
if (args[0] === "api" && args[1] === "graphql") {
  console.log(JSON.stringify({ data: { repository: { pullRequest: { reviewThreads: { pageInfo: { hasNextPage: false }, nodes: [] } } } } }));
  process.exit(0);
}
if (args[0] === "api" && args[1].includes("/pulls/123/comments")) {
  console.log("[]");
  process.exit(0);
}
if (args[0] === "api" && args[1].endsWith("/pulls/123")) {
  console.log(JSON.stringify({ state: "open", draft: false, title: "fix: fixture", body: "", html_url: "https://github.com/openclaw/openclaw/pull/123", updated_at: "2026-06-19T00:00:00Z", labels: [], head: { sha: head, ref: "fixture", repo: { full_name: "contributor/openclaw" } }, base: { sha: base, ref: "main" } }));
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
if (args[0] === "rev-parse") console.log(args[1] === "origin/main" ? base : head);
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
