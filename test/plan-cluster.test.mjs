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
    allowed_actions: ["comment"],
    blocked_actions: [],
    allow_fix_pr: false,
    allow_merge: false,
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
