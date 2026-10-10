import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("plan-cluster records the workflow target checkout ahead of a job-local override", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "plan-cluster.mjs"), "utf8");

  assert.match(
    source,
    /target_checkout: process\.env\.CLOWNFISH_TARGET_CHECKOUT \?\? job\.frontmatter\.target_checkout \?\? null/,
  );
});

test("plan-cluster records PR hydration errors without failing the run", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-plan-"));
  const binDir = path.join(tmp, "bin");
  const runDir = path.join(tmp, "run");
  fs.mkdirSync(binDir, { recursive: true });

  const ghPath = path.join(binDir, "gh");
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
const args = process.argv.slice(2);
function write(value) {
  process.stdout.write(JSON.stringify(value));
}
if (args[0] !== "api") process.exit(1);
const apiPath = args[1];
if (apiPath === "repos/openclaw/openclaw/branches/main") {
  write({ commit: { sha: "abc123" }, _links: { html: "https://github.com/openclaw/openclaw/tree/main" } });
} else if (apiPath === "repos/openclaw/openclaw/issues/1") {
  write({
    state: "open",
    title: "canonical issue",
    html_url: "https://github.com/openclaw/openclaw/issues/1",
    user: { login: "maintainer" },
    labels: [],
    body: "canonical body",
    comments: 0,
  });
} else if (apiPath === "repos/openclaw/openclaw/issues/2") {
  write({
    state: "open",
    title: "candidate pr",
    html_url: "https://github.com/openclaw/openclaw/pull/2",
    user: { login: "contributor" },
    labels: [],
    body: "candidate body",
    comments: 0,
    pull_request: { url: "https://api.github.com/repos/openclaw/openclaw/pulls/2" },
  });
} else if (apiPath === "repos/openclaw/openclaw/pulls/2") {
  process.stderr.write("unexpected end of JSON input\\n");
  process.exit(1);
} else {
  write([]);
}
`,
  );
  fs.chmodSync(ghPath, 0o755);

  const jobPath = path.join(tmp, "job.md");
  fs.writeFileSync(
    jobPath,
    `---
repo: openclaw/openclaw
cluster_id: test-pr-hydration
mode: plan
allowed_actions:
  - comment
maintainer_calibration:
  - "Require a planned fix or merge for an open canonical PR."
candidates:
  - "#2"
canonical:
  - "#1"
---

# Test job
`,
  );

  const result = spawnSync("node", ["scripts/plan-cluster.mjs", jobPath, "--run-dir", runDir], {
    cwd: repoRoot,
    env: {
      ...process.env,
      PATH: `${binDir}${path.delimiter}${process.env.PATH}`,
      CLOWNFISH_HYDRATE_COMMENTS: "0",
    },
    encoding: "utf8",
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const plan = JSON.parse(fs.readFileSync(path.join(runDir, "cluster-plan.json"), "utf8"));
  const candidate = plan.items.find((item) => item.ref === "#2");
  assert.deepEqual(plan.source_job_permissions, {
    source: null,
    canonical: ["#1"],
    allowed_actions: ["comment"],
    blocked_actions: [],
    allow_fix_pr: false,
    allow_merge: false,
    require_external_merge_preflight: false,
    repair_strategy: null,
    rebase_only: false,
    expected_head_shas: [],
    maintainer_calibration: ["Require a planned fix or merge for an open canonical PR."],
  });
  assert.equal(candidate.kind, "pull_request");
  assert.match(candidate.hydration_error, /pull request #2: unexpected end of JSON input/);
  assert.match(candidate.pull_request.hydration_error, /pull request #2: unexpected end of JSON input/);

  const contextJobPath = path.join(tmp, "context-job.md");
  const contextRunDir = path.join(tmp, "context-run");
  fs.writeFileSync(
    contextJobPath,
    `---
repo: openclaw/openclaw
cluster_id: mandatory-context-hydration
mode: plan
allowed_actions:
  - comment
candidates:
  - "#1"
canonical:
  - "#1"
existing_overlap_refs:
  - "#2"
security_signal_refs:
  - "#2"
---

# Read-only context hydration
`,
  );
  const contextResult = spawnSync("node", ["scripts/plan-cluster.mjs", contextJobPath, "--run-dir", contextRunDir], {
    cwd: repoRoot,
    env: {
      ...process.env,
      PATH: `${binDir}${path.delimiter}${process.env.PATH}`,
      CLOWNFISH_HYDRATE_COMMENTS: "0",
      CLOWNFISH_HYDRATE_CLUSTER_REFS: "0",
    },
    encoding: "utf8",
  });

  assert.equal(contextResult.status, 0, contextResult.stderr || contextResult.stdout);
  const contextPlan = JSON.parse(fs.readFileSync(path.join(contextRunDir, "cluster-plan.json"), "utf8"));
  assert.deepEqual(contextPlan.scope.read_only_context_refs, ["#2"]);
  assert.ok(contextPlan.items.some((item) => item.ref === "#2"));
});

test("plan-cluster rejects a PR whose live head drifted after intake", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-plan-head-pin-"));
  const binDir = path.join(tmp, "bin");
  const runDir = path.join(tmp, "run");
  fs.mkdirSync(binDir, { recursive: true });
  const expected = "a".repeat(40);
  const live = "b".repeat(40);

  const ghPath = path.join(binDir, "gh");
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
const args = process.argv.slice(2);
const apiPath = args[1];
if (apiPath === "repos/openclaw/openclaw/branches/main") {
  console.log(JSON.stringify({ commit: { sha: "abc123" }, _links: { html: "https://github.com/openclaw/openclaw/tree/main" } }));
} else if (apiPath === "repos/openclaw/openclaw/issues/2") {
  console.log(JSON.stringify({
    state: "open",
    title: "candidate pr",
    html_url: "https://github.com/openclaw/openclaw/pull/2",
    user: { login: "contributor" },
    labels: [],
    body: "candidate body",
    comments: 0,
    pull_request: { url: "https://api.github.com/repos/openclaw/openclaw/pulls/2" }
  }));
} else if (apiPath === "repos/openclaw/openclaw/pulls/2") {
  console.log(JSON.stringify({
    state: "open",
    draft: false,
    merged: false,
    base: { ref: "main" },
    head: { ref: "fix", sha: ${JSON.stringify(live)}, repo: { full_name: "contributor/openclaw", owner: { login: "contributor" } } },
    user: { login: "contributor" },
    labels: [],
    requested_reviewers: [],
    requested_teams: []
  }));
} else {
  console.log("[]");
}
`,
  );
  fs.chmodSync(ghPath, 0o755);

  const jobPath = path.join(tmp, "job.md");
  fs.writeFileSync(
    jobPath,
    `---
repo: openclaw/openclaw
cluster_id: pinned-head
mode: autonomous
allowed_actions:
  - fix
candidates:
  - "#2"
expected_head_shas:
  - "#2=${expected}"
---
`,
  );

  const result = spawnSync("node", ["scripts/plan-cluster.mjs", jobPath, "--run-dir", runDir], {
    cwd: repoRoot,
    env: {
      ...process.env,
      PATH: `${binDir}${path.delimiter}${process.env.PATH}`,
      CLOWNFISH_HYDRATE_COMMENTS: "0",
    },
    encoding: "utf8",
  });

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, new RegExp(`#2 head changed after intake: expected ${expected}, found ${live}`));
});

test("fix-first plans allow verified duplicates without relaxing other closeouts", (t) => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-fix-first-"));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const jobPath = path.join(tmp, "job.md");
  fs.writeFileSync(jobPath, `---
repo: openclaw/openclaw
cluster_id: issue-only-dedupe
mode: autonomous
allowed_actions:
  - comment
  - close
canonical:
  - "#101"
candidates:
  - "#102"
allow_instant_close: true
require_fix_before_close: true
---

# Duplicate issue cleanup
`);
  const result = spawnSync(process.execPath, [
    "scripts/plan-cluster.mjs", jobPath, "--offline", "--run-dir", tmp,
  ], { cwd: repoRoot, encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const plan = JSON.parse(fs.readFileSync(path.join(tmp, "fix-artifact.json"), "utf8"));
  assert.equal(plan.permissions.require_fix_before_close, true);
  assert.match(plan.drive_plan.fix_first_close, /duplicate.*does not require a fix/i);
  assert.match(plan.drive_plan.fix_first_close, /superseded.*fix PR|fix PR.*superseded/i);
  const prompt = spawnSync(process.execPath, [
    "scripts/render-prompt.mjs", jobPath, "--mode", "autonomous",
  ], { cwd: repoRoot, encoding: "utf8" });
  assert.equal(prompt.status, 0, prompt.stderr || prompt.stdout);
  assert.match(prompt.stdout, /close_duplicate.*exempt from.*require_fix_before_close/);
});

test("plan-cluster marks security_signal_refs security-sensitive", () => {
  const plan = planSecurityIssue({
    clusterId: "security-signal-ref",
    frontmatterLines: 'security_signal_refs:\n  - "#7"\n',
    title: "ordinary duplicate report",
    body: "same stack trace as the canonical bug",
  });
  assert.equal(plan.item.security_sensitive, true);
  assert.deepEqual(plan.security_sensitive_items, ["#7"]);
});

test("plan-cluster ignores security prose that only appears in a comment", () => {
  const plan = planSecurityIssue({
    clusterId: "security-signal-comment",
    frontmatterLines: "",
    title: "ordinary duplicate report",
    body: "same stack trace as the canonical bug",
    comments: ["This is an authentication bypass and GHSA-1234-5678-abcd."],
    hydrateComments: true,
  });
  assert.equal(plan.item.comments_hydrated, 1);
  assert.equal(plan.item.security_sensitive, false);
  assert.deepEqual(plan.security_sensitive_items, []);
});

test("plan-cluster keeps an overridden security_signal ref non-security", () => {
  const plan = planSecurityIssue({
    clusterId: "security-signal-override",
    frontmatterLines: 'security_signal_refs:\n  - "#7"\nsecurity_override_refs:\n  - "#7"\n',
    title: "authentication bypass in gateway auth",
    body: "maintainer cleared this false positive",
  });
  assert.equal(plan.item.security_sensitive, false);
  assert.deepEqual(plan.security_sensitive_items, []);
});

function planSecurityIssue({ clusterId, frontmatterLines, title, body, comments = [], hydrateComments = false }) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-plan-security-"));
  const binDir = path.join(tmp, "bin");
  const runDir = path.join(tmp, "run");
  fs.mkdirSync(binDir, { recursive: true });
  const ghPath = path.join(binDir, "gh");
  const commentPage = comments.map((commentBody) => ({ body: commentBody }));
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
const args = process.argv.slice(2);
function write(value) {
  process.stdout.write(JSON.stringify(value));
}
if (args[0] !== "api") process.exit(1);
const apiPath = args[1];
if (apiPath === "repos/openclaw/openclaw/branches/main") {
  write({ commit: { sha: "abc123" }, _links: { html: "https://github.com/openclaw/openclaw/tree/main" } });
} else if (apiPath === "repos/openclaw/openclaw/issues/7") {
  write({
    state: "open",
    title: ${JSON.stringify(title)},
    html_url: "https://github.com/openclaw/openclaw/issues/7",
    user: { login: "contributor" },
    author_association: "NONE",
    labels: [],
    body: ${JSON.stringify(body)},
    comments: ${comments.length},
  });
} else if (apiPath.startsWith("repos/openclaw/openclaw/issues/7/comments")) {
  write(${JSON.stringify([commentPage])});
} else {
  write([]);
}
`,
  );
  fs.chmodSync(ghPath, 0o755);
  const jobPath = path.join(tmp, "job.md");
  fs.writeFileSync(
    jobPath,
    `---
repo: openclaw/openclaw
cluster_id: ${clusterId}
mode: plan
allowed_actions:
  - comment
candidates:
  - "#7"
canonical:
  - "#7"
${frontmatterLines}
---

# Security signal plan
`,
  );
  const result = spawnSync("node", ["scripts/plan-cluster.mjs", jobPath, "--run-dir", runDir], {
    cwd: repoRoot,
    env: {
      ...process.env,
      PATH: `${binDir}${path.delimiter}${process.env.PATH}`,
      CLOWNFISH_HYDRATE_COMMENTS: hydrateComments ? "1" : "0",
      CLOWNFISH_MAX_LINKED_REFS: "0",
    },
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const plan = JSON.parse(fs.readFileSync(path.join(runDir, "cluster-plan.json"), "utf8"));
  return {
    item: plan.items.find((item) => item.ref === "#7"),
    security_sensitive_items: plan.security_boundary.security_sensitive_items,
  };
}
