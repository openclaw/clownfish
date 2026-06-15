import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("queue-status treats explicit App token auth as plan-ready", () => {
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
  assert.equal(payload.auth.app_token_auth_allowed, true);
  assert.equal(payload.auth.app_token_auth_configured, true);
  assert.equal(payload.auth.plan_dispatch_ready, true);
  assert.equal(payload.auth.execute_dispatch_ready, false);
});

test("dispatch accepts explicit App token auth for plan mode only", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.bin, "gh");
  const fakeGhx = writeFakeGh(fixture.bin, "ghx");
  const env = { ...process.env, PATH: `${fixture.bin}${path.delimiter}${process.env.PATH}` };

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
      "--no-dispatch-ledger",
    ],
    { cwd: repoRoot, encoding: "utf8", env },
  );
  assert.notEqual(execute.status, 0);
  assert.match(execute.stderr, /need CLOWNFISH_GH_TOKEN for write\/apply steps/);
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
  console.log("accepted");
  process.exit(0);
}
if (args[0] === "api" && args.some((arg) => arg.endsWith("/runs"))) {
  console.log(JSON.stringify([{ workflow_runs: [] }]));
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
