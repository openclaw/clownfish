import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("queue-status treats explicit App token auth as plan and execute ready", () => {
  const fixture = makeFixture();
  const fakeGh = writeFakeGh(fixture.bin, "ghx");
  writeJob(path.join(fixture.inbox, "app-auth-plan.md"), {
    clusterId: "app-auth-plan",
    mode: "plan",
    refs: ["#1", "#2"],
  });

  const result = spawnSync(
    process.execPath,
    [
      "scripts/queue-status.mjs",
      "--inbox",
      fixture.inbox,
      "--runs-dir",
      fixture.runs,
      "--dispatch-ledger",
      fixture.ledger,
      "--gh-bin",
      fakeGh,
      "--allow-app-token-auth",
      "--json",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.auth.read_secret_present, false);
  assert.equal(payload.auth.write_secret_present, false);
  assert.equal(payload.auth.write_auth_present, true);
  assert.equal(payload.auth.app_token_auth_allowed, true);
  assert.equal(payload.auth.app_token_auth_configured, true);
  assert.equal(payload.auth.plan_dispatch_ready, true);
  assert.equal(payload.auth.execute_dispatch_ready, true);
});

test("dispatch accepts explicit App token auth for plan and capped execute mode", () => {
  const fixture = makeFixture();
  writeFailingGh(fixture.bin, "gh");
  const fakeGhx = writeFakeGh(fixture.bin, "ghx");
  const env = {
    ...process.env,
    PATH: `${fixture.bin}${path.delimiter}${process.env.PATH}`,
    EXPECT_HYDRATION_FIELDS: "1",
  };

  const plan = spawnSync(
    process.execPath,
    [
      "scripts/dispatch-jobs.mjs",
      "jobs/openclaw/inbox/cluster-example.md",
      "--mode",
      "plan",
      "--gh-bin",
      fakeGhx,
      "--allow-app-token-auth",
      "--skip-publish-backlog-check",
      "--max-live-workers",
      "1",
      "--hydrate-comments",
      "0",
      "--max-linked-refs",
      "0",
      "--max-comments-per-item",
      "0",
      "--max-review-comments-per-pr",
      "0",
      "--no-dispatch-ledger",
    ],
    { cwd: repoRoot, encoding: "utf8", env },
  );
  assert.equal(plan.status, 0, plan.stderr || plan.stdout);
  assert.match(plan.stderr, /accepting GitHub App token auth/);
  assert.match(plan.stdout, /dispatched 1\/1/);

  const execute = spawnSync(
    process.execPath,
    [
      "scripts/dispatch-jobs.mjs",
      "jobs/openclaw/inbox/cluster-example.md",
      "--mode",
      "execute",
      "--gh-bin",
      fakeGhx,
      "--allow-app-token-auth",
      "--skip-publish-backlog-check",
      "--max-live-workers",
      "1",
      "--hydrate-comments",
      "0",
      "--max-linked-refs",
      "0",
      "--max-comments-per-item",
      "0",
      "--max-review-comments-per-pr",
      "0",
      "--no-dispatch-ledger",
    ],
    { cwd: repoRoot, encoding: "utf8", env },
  );
  assert.equal(execute.status, 0, execute.stderr || execute.stdout);
  assert.match(execute.stderr, /accepting GitHub App token auth for write\/apply/);
  assert.match(execute.stdout, /dispatched 1\/1/);
});

test("dispatch refuses high-volume write mode without explicit override", () => {
  const fixture = makeFixture();
  writeFailingGh(fixture.bin, "gh");
  const fakeGhx = writeFakeGh(fixture.bin, "ghx");
  const env = {
    ...process.env,
    PATH: `${fixture.bin}${path.delimiter}${process.env.PATH}`,
  };

  const result = spawnSync(
    process.execPath,
    [
      "scripts/dispatch-jobs.mjs",
      "jobs/openclaw/inbox/cluster-example.md",
      "--mode",
      "execute",
      "--gh-bin",
      fakeGhx,
      "--allow-app-token-auth",
      "--skip-publish-backlog-check",
      "--max-live-workers",
      "6",
      "--no-dispatch-ledger",
    ],
    { cwd: repoRoot, encoding: "utf8", env },
  );

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /refusing execute dispatch: max-live-workers=6 exceeds write lane cap=5/);
});

test("dispatch supports repository-worker canary dispatch", () => {
  const fixture = makeFixture();
  writeFailingGh(fixture.bin, "gh");
  const fakeGhx = writeFakeGh(fixture.bin, "ghx");
  writeShallowCheckoutGit(fixture.bin);
  const env = {
    ...process.env,
    PATH: `${fixture.bin}${path.delimiter}${process.env.PATH}`,
    EXPECT_REPOSITORY_WORKER_FIELDS: "1",
  };

  const result = spawnSync(
    process.execPath,
    [
      "scripts/dispatch-jobs.mjs",
      "jobs/openclaw/inbox/cluster-example.md",
      "--mode",
      "autonomous",
      "--dispatch-event",
      "repository-worker",
      "--gh-bin",
      fakeGhx,
      "--allow-app-token-auth",
      "--skip-publish-backlog-check",
      "--max-live-workers",
      "1",
      "--hydrate-comments",
      "1",
      "--max-linked-refs",
      "20",
      "--max-comments-per-item",
      "30",
      "--max-review-comments-per-pr",
      "50",
      "--dry-run",
      "1",
      "--no-dispatch-ledger",
    ],
    { cwd: repoRoot, encoding: "utf8", env },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /dispatched 1\/1/);
});

test("repository-worker falls back only from the known GitHub schema 422", () => {
  const fixture = makeFixture();
  writeFailingGh(fixture.bin, "gh");
  const fakeGhx = writeFakeGh(fixture.bin, "ghx");
  writeShallowCheckoutGit(fixture.bin);
  const env = {
    ...process.env,
    PATH: `${fixture.bin}${path.delimiter}${process.env.PATH}`,
    EXPECT_REPOSITORY_WORKER_FIELDS: "1",
    EXPECT_REPOSITORY_DISPATCH_FALLBACK: "1",
  };

  const result = spawnSync(
    process.execPath,
    [
      "scripts/dispatch-jobs.mjs",
      "jobs/openclaw/inbox/cluster-example.md",
      "--mode",
      "autonomous",
      "--dispatch-event",
      "repository-worker",
      "--gh-bin",
      fakeGhx,
      "--allow-app-token-auth",
      "--skip-publish-backlog-check",
      "--max-live-workers",
      "1",
      "--hydrate-comments",
      "1",
      "--max-linked-refs",
      "20",
      "--max-comments-per-item",
      "30",
      "--max-review-comments-per-pr",
      "50",
      "--dry-run",
      "1",
      "--no-dispatch-ledger",
    ],
    { cwd: repoRoot, encoding: "utf8", env },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stderr, /known GitHub 422 schema error/);
  assert.match(result.stdout, /dispatched 1\/1/);
});

test("repository-batch falls back only from the known GitHub schema 422", () => {
  const fixture = makeFixture();
  writeFailingGh(fixture.bin, "gh");
  const fakeGhx = writeFakeGh(fixture.bin, "ghx");
  writeShallowCheckoutGit(fixture.bin);
  const env = {
    ...process.env,
    PATH: `${fixture.bin}${path.delimiter}${process.env.PATH}`,
    EXPECT_REPOSITORY_BATCH_FALLBACK: "1",
  };

  const result = spawnSync(
    process.execPath,
    [
      "scripts/dispatch-jobs.mjs",
      "jobs/openclaw/inbox/cluster-example.md",
      "jobs/openclaw/outbox/finalized/gitcrawl-1109-intake-20260621.md",
      "--mode",
      "plan",
      "--dispatch-event",
      "repository-batch",
      "--gh-bin",
      fakeGhx,
      "--allow-app-token-auth",
      "--skip-publish-backlog-check",
      "--max-live-workers",
      "2",
      "--batch-max-parallel",
      "2",
      "--hydrate-comments",
      "1",
      "--max-linked-refs",
      "20",
      "--max-comments-per-item",
      "30",
      "--max-review-comments-per-pr",
      "50",
      "--no-dispatch-ledger",
    ],
    { cwd: repoRoot, encoding: "utf8", env },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stderr, /known GitHub 422 schema error for batch/);
  assert.match(result.stdout, /dispatched repository batch .* with 2 plan job\(s\)/);
});

test("repository-worker dispatch fetches main when a shallow checkout lacks origin/main", () => {
  const fixture = makeFixture();
  writeFailingGh(fixture.bin, "gh");
  const fakeGhx = writeFakeGh(fixture.bin, "ghx");
  writeShallowCheckoutGit(fixture.bin);
  const env = {
    ...process.env,
    PATH: `${fixture.bin}${path.delimiter}${process.env.PATH}`,
    EXPECT_REPOSITORY_WORKER_FIELDS: "1",
  };

  const result = spawnSync(
    process.execPath,
    [
      "scripts/dispatch-jobs.mjs",
      "jobs/openclaw/inbox/cluster-example.md",
      "--repo",
      "openclaw/clownfish",
      "--mode",
      "autonomous",
      "--dispatch-event",
      "repository-worker",
      "--ref",
      "main",
      "--gh-bin",
      fakeGhx,
      "--allow-app-token-auth",
      "--skip-publish-backlog-check",
      "--max-live-workers",
      "1",
      "--hydrate-comments",
      "1",
      "--max-linked-refs",
      "20",
      "--max-comments-per-item",
      "30",
      "--max-review-comments-per-pr",
      "50",
      "--dry-run",
      "1",
      "--no-dispatch-ledger",
    ],
    { cwd: repoRoot, encoding: "utf8", env },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /dispatched 1\/1/);
});

test("repository-worker dispatch refreshes an existing stale origin/main ref", () => {
  const fixture = makeFixture();
  writeFailingGh(fixture.bin, "gh");
  const fakeGhx = writeFakeGh(fixture.bin, "ghx");
  writeStaleMainGit(fixture.bin);
  const env = {
    ...process.env,
    PATH: `${fixture.bin}${path.delimiter}${process.env.PATH}`,
    EXPECT_REPOSITORY_WORKER_FIELDS: "1",
    EXPECT_REQUIRED_ANCESTOR: "a".repeat(40),
  };

  const result = spawnSync(
    process.execPath,
    [
      "scripts/dispatch-jobs.mjs",
      "jobs/openclaw/inbox/cluster-example.md",
      "--repo",
      "openclaw/clownfish",
      "--mode",
      "autonomous",
      "--dispatch-event",
      "repository-worker",
      "--ref",
      "main",
      "--gh-bin",
      fakeGhx,
      "--allow-app-token-auth",
      "--skip-publish-backlog-check",
      "--max-live-workers",
      "1",
      "--hydrate-comments",
      "1",
      "--max-linked-refs",
      "20",
      "--max-comments-per-item",
      "30",
      "--max-review-comments-per-pr",
      "50",
      "--dry-run",
      "1",
      "--no-dispatch-ledger",
    ],
    { cwd: repoRoot, encoding: "utf8", env },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /dispatched 1\/1/);
});

test("cluster-worker repository dispatch guard accepts descendants", () => {
  const workflow = fs.readFileSync(path.join(repoRoot, ".github/workflows/cluster-worker.yml"), "utf8");

  assert.match(workflow, /required_ancestor_sha/);
  assert.match(workflow, /parsedPayload && typeof parsedPayload === "object" \? parsedPayload : {}/);
  assert.match(workflow, /spawnSync\("git", \["merge-base", "--is-ancestor", requiredAncestor, "HEAD"\]/);
  assert.match(workflow, /--deepen=250/);
  assert.match(workflow, /--unshallow/);
  assert.match(workflow, /repository_dispatch worker requires required_ancestor_sha or legacy head_sha/);
});

test("cluster-worker respects per-job label permissions before tagging targets", () => {
  const workflow = fs.readFileSync(path.join(repoRoot, ".github/workflows/cluster-worker.yml"), "utf8");

  assert.match(workflow, /const allowLabels = allowedActions\.has\("label"\) && !blockedActions\.has\("label"\);/);
  assert.match(workflow, /allow_labels=\$\{allowLabels \? "1" : "0"\}/);
  assert.match(
    workflow,
    /needs\.prepare\.outputs\.allow_labels == '1'/,
  );
});

test("cluster-worker snapshots write gates before the queued worker starts", () => {
  const workflow = fs.readFileSync(path.join(repoRoot, ".github/workflows/cluster-worker.yml"), "utf8");

  assert.match(workflow, /INPUT_ALLOW_EXECUTE: \$\{\{ vars\.CLOWNFISH_ALLOW_EXECUTE \|\| '0' \}\}/);
  assert.match(workflow, /const allowExecute = writeMode && process\.env\.INPUT_ALLOW_EXECUTE === "1" \? "1" : "0";/);
  assert.match(workflow, /allow_execute=\$\{allowExecute\}/);
  assert.match(workflow, /CLOWNFISH_ALLOW_EXECUTE: \$\{\{ needs\.prepare\.outputs\.allow_execute \}\}/);
  assert.match(workflow, /CLOWNFISH_ALLOW_FIX_PR: \$\{\{ needs\.prepare\.outputs\.allow_fix_pr \}\}/);
  assert.match(workflow, /CLOWNFISH_ALLOW_MERGE: \$\{\{ needs\.prepare\.outputs\.allow_merge \}\}/);
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-app-auth-"));
  const inbox = path.join(root, "inbox");
  const runs = path.join(root, "runs");
  const bin = path.join(root, "bin");
  const ledger = path.join(root, "dispatch-ledger.json");
  fs.mkdirSync(inbox, { recursive: true });
  fs.mkdirSync(runs, { recursive: true });
  fs.mkdirSync(bin, { recursive: true });
  fs.writeFileSync(ledger, `${JSON.stringify({ attempts: [] })}\n`);
  return { root, inbox, runs, bin, ledger };
}

function writeFakeGh(binDir, name) {
  const filePath = path.join(binDir, name);
  fs.writeFileSync(
    filePath,
    `#!/usr/bin/env node
const fs = require("fs");
const args = process.argv.slice(2);
if (args[0] === "secret" && args[1] === "list") {
  console.log(JSON.stringify([{ name: "CLOWNFISH_APP_PRIVATE_KEY" }]));
  process.exit(0);
}
if (args[0] === "variable" && args[1] === "list") {
  console.log(JSON.stringify([{ name: "CLOWNFISH_APP_ID" }]));
  process.exit(0);
}
if (args[0] === "workflow" && args[1] === "run") {
  if (process.env.EXPECT_REPOSITORY_BATCH_FALLBACK === "1") {
    for (const expected of [
      "jobs_json=[\\"jobs/openclaw/inbox/cluster-example.md\\",\\"jobs/openclaw/outbox/finalized/gitcrawl-1109-intake-20260621.md\\"]",
      "mode=plan",
      "runner=blacksmith-4vcpu-ubuntu-2404",
      "execution_runner=blacksmith-16vcpu-ubuntu-2404",
      "model=gpt-5.5",
      "max_parallel=2",
      "hydrate_comments=1",
      "max_linked_refs=20",
      "max_comments_per_item=30",
      "max_review_comments_per_pr=50",
    ]) {
      if (!args.some((arg) => arg.includes(expected))) {
        console.error("missing repository batch fallback field", expected, args.join(" "));
        process.exit(1);
      }
    }
  }
  if (process.env.EXPECT_REPOSITORY_DISPATCH_FALLBACK === "1") {
    if (!args.join(" ").includes("dispatch_id=dispatch-")) {
      console.error("missing repository dispatch fallback id", args.join(" "));
      process.exit(1);
    }
    for (const expected of [
      "job=jobs/openclaw/inbox/cluster-example.md",
      "mode=autonomous",
      "runner=blacksmith-4vcpu-ubuntu-2404",
      "execution_runner=blacksmith-16vcpu-ubuntu-2404",
      "model=gpt-5.5",
      "dry_run=true",
      "hydrate_comments=1",
      "max_linked_refs=20",
      "max_comments_per_item=30",
      "max_review_comments_per_pr=50",
    ]) {
      if (!args.includes(expected)) {
        console.error("missing repository fallback field", expected, args.join(" "));
        process.exit(1);
      }
    }
  }
  if (process.env.EXPECT_HYDRATION_FIELDS === "1") {
    for (const expected of [
      "hydrate_comments=0",
      "max_linked_refs=0",
      "max_comments_per_item=0",
      "max_review_comments_per_pr=0",
    ]) {
      if (!args.includes(expected)) {
        console.error("missing expected workflow field", expected, args.join(" "));
        process.exit(1);
      }
    }
  }
  console.log("accepted");
  process.exit(0);
}
if (args[0] === "api" && args.some((arg) => arg.endsWith("/runs"))) {
  console.log(JSON.stringify([{ workflow_runs: [] }]));
  process.exit(0);
}
if (args[0] === "api" && args.includes("repos/openclaw/clownfish/dispatches")) {
  const payload = JSON.parse(fs.readFileSync(0, "utf8"));
  if (process.env.EXPECT_REPOSITORY_BATCH_FALLBACK === "1") {
    const client = payload.client_payload || {};
    const expected = [
      ["event_type", payload.event_type, "projectclownfish_batch"],
      ["mode", client.mode, "plan"],
      ["runner", client.runner, "blacksmith-4vcpu-ubuntu-2404"],
      ["execution_runner", client.execution_runner, "blacksmith-16vcpu-ubuntu-2404"],
      ["model", client.model, "gpt-5.5"],
      ["max_parallel", String(client.max_parallel), "2"],
    ];
    for (const [name, actual, wanted] of expected) {
      if (actual !== wanted) {
        console.error("bad repository batch field", name, actual, "wanted", wanted, JSON.stringify(payload));
        process.exit(1);
      }
    }
    console.error("gh: Invalid request.\\nFor 'links/0/schema', nil is not an object. (HTTP 422)");
    process.exit(1);
  }
  if (process.env.EXPECT_REPOSITORY_WORKER_FIELDS === "1") {
    const client = payload.client_payload || {};
    const hydration = client.hydration || {};
    const expected = [
      ["event_type", payload.event_type, "projectclownfish_worker"],
      ["job", client.job, "jobs/openclaw/inbox/cluster-example.md"],
      ["mode", client.mode, "autonomous"],
      ["runner", client.runner, "blacksmith-4vcpu-ubuntu-2404"],
      ["execution_runner", client.execution_runner, "blacksmith-16vcpu-ubuntu-2404"],
      ["model", client.model, "gpt-5.5"],
      ["dry_run", String(client.dry_run), "true"],
      ["ref", client.ref, "main"],
      ["hydrate_comments", hydration.hydrate_comments, "1"],
      ["max_linked_refs", hydration.max_linked_refs, "20"],
      ["max_comments_per_item", hydration.max_comments_per_item, "30"],
      ["max_review_comments_per_pr", hydration.max_review_comments_per_pr, "50"],
    ];
    for (const [name, actual, wanted] of expected) {
      if (actual !== wanted) {
        console.error("bad repository worker field", name, actual, "wanted", wanted, JSON.stringify(payload));
        process.exit(1);
      }
    }
    if (client.head_sha) {
      console.error("repository worker payload must not pin exact head_sha", JSON.stringify(payload));
      process.exit(1);
    }
    if (!client.required_ancestor_sha || !/^[0-9a-f]{40,64}$/i.test(client.required_ancestor_sha)) {
      console.error("missing required_ancestor_sha", JSON.stringify(payload));
      process.exit(1);
    }
    if (process.env.EXPECT_REQUIRED_ANCESTOR && client.required_ancestor_sha !== process.env.EXPECT_REQUIRED_ANCESTOR) {
      console.error("wrong required_ancestor_sha", client.required_ancestor_sha, "wanted", process.env.EXPECT_REQUIRED_ANCESTOR);
      process.exit(1);
    }
  }
  if (process.env.EXPECT_REPOSITORY_DISPATCH_FALLBACK === "1") {
    console.error("gh: Invalid request.\\nFor 'links/0/schema', nil is not an object. (HTTP 422)");
    process.exit(1);
  }
  console.log("accepted repository dispatch");
  process.exit(0);
}
if (args.includes("--version")) {
  console.log("gh fake");
  process.exit(0);
}
console.error("unexpected fake gh call", args.join(" "));
process.exit(1);
`,
  );
  fs.chmodSync(filePath, 0o755);
  return filePath;
}

function writeFailingGh(binDir, name) {
  const filePath = path.join(binDir, name);
  fs.writeFileSync(
    filePath,
    `#!/usr/bin/env node
console.error("plain gh should not be used by this test");
process.exit(1);
`,
  );
  fs.chmodSync(filePath, 0o755);
  return filePath;
}

function writeShallowCheckoutGit(binDir) {
  const filePath = path.join(binDir, "git");
  fs.writeFileSync(
    filePath,
    `#!/usr/bin/env node
const args = process.argv.slice(2);
if (args[0] === "rev-parse" && args[1] === "origin/main") process.exit(1);
if (args[0] === "fetch" && args[1] === "origin" && args[2] === "main") process.exit(0);
if (args[0] === "rev-parse" && args[1] === "FETCH_HEAD") {
  console.log("${"a".repeat(40)}");
  process.exit(0);
}
console.error("unexpected fake git call", args.join(" "));
process.exit(1);
`,
  );
  fs.chmodSync(filePath, 0o755);
  return filePath;
}

function writeStaleMainGit(binDir) {
  const filePath = path.join(binDir, "git");
  fs.writeFileSync(
    filePath,
    `#!/usr/bin/env node
const args = process.argv.slice(2);
if (args[0] === "fetch" && args[1] === "origin" && args[2] === "main") process.exit(0);
if (args[0] === "rev-parse" && args[1] === "FETCH_HEAD") {
  console.log("${"a".repeat(40)}");
  process.exit(0);
}
if (args[0] === "rev-parse" && args[1] === "origin/main") {
  console.log("${"b".repeat(40)}");
  process.exit(0);
}
console.error("unexpected fake git call", args.join(" "));
process.exit(1);
`,
  );
  fs.chmodSync(filePath, 0o755);
  return filePath;
}

function writeJob(filePath, { clusterId, mode, refs }) {
  fs.writeFileSync(
    filePath,
    `---
repo: openclaw/openclaw
cluster_id: ${clusterId}
mode: ${mode}
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - merge
require_human_for:
  - merge
canonical:
  - "${refs[0]}"
candidates:
${refs.map((ref) => `  - "${ref}"`).join("\n")}
cluster_refs:
${refs.map((ref) => `  - "${ref}"`).join("\n")}
security_sensitive: false
---

# App Auth Test Job
`,
  );
}
