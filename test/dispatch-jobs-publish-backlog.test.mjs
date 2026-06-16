import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("throttled dispatch waits for a transient publisher backlog", () => {
  const fixture = makeFixture();
  writeFakeGhx(fixture);

  const result = spawnSync(
    process.execPath,
    [
      "scripts/dispatch-jobs.mjs",
      "jobs/openclaw/inbox/cluster-example.md",
      "--mode",
      "plan",
      "--gh-bin",
      fixture.gh,
      "--skip-token-secret-check",
      "--no-dispatch-ledger",
      "--wait-for-capacity",
      "--batch-size",
      "1",
      "--batch-delay-ms",
      "1",
      "--publish-backlog-threshold",
      "0",
      "--publish-backlog-wait-ms",
      "100",
      "--publish-backlog-poll-ms",
      "1",
    ],
    { cwd: repoRoot, encoding: "utf8", env: { ...process.env, FAKE_GHX_STATE: fixture.state } },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /waiting up to 100ms for publisher reconciliation/);
  assert.match(result.stdout, /publish backlog drained after/);
  assert.match(result.stdout, /dispatched 1\/1 jobs\/openclaw\/inbox\/cluster-example\.md/);
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-dispatch-publish-backlog-"));
  return {
    gh: path.join(root, "fake-ghx.mjs"),
    state: path.join(root, "state"),
  };
}

function writeFakeGhx(fixture) {
  fs.writeFileSync(
    fixture.gh,
    `#!/usr/bin/env node
import fs from "node:fs";

const args = process.argv.slice(2);
if (args[0] === "--version") {
  console.log("fake-ghx 1.0");
  process.exit(0);
}
if (args[0] === "run" && args[1] === "list") {
  const state = process.env.FAKE_GHX_STATE;
  const count = fs.existsSync(state) ? Number(fs.readFileSync(state, "utf8")) : 0;
  fs.writeFileSync(state, String(count + 1));
  if (count === 0) {
    console.log(JSON.stringify([{ databaseId: 999991, status: "completed", conclusion: "success" }]));
  } else {
    console.log("[]");
  }
  process.exit(0);
}
if (args[0] === "api") {
  console.log("[]");
  process.exit(0);
}
if (args[0] === "workflow" && args[1] === "run") process.exit(0);
console.error("unexpected fake ghx args: " + args.join(" "));
process.exit(1);
`,
    { mode: 0o755 },
  );
}
