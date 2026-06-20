import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("requeue opens and restores an explicit merge window after gate capture", () => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-requeue-"));
  const bin = path.join(fixture, "bin");
  const state = path.join(fixture, "state.json");
  fs.mkdirSync(bin);
  fs.writeFileSync(
    state,
    JSON.stringify({
      viewCalls: 0,
      dispatchArgs: [],
      dispatchPayload: null,
      variables: { CLOWNFISH_ALLOW_EXECUTE: "1", CLOWNFISH_ALLOW_MERGE: "0" },
      gateSets: [],
    }),
  );
  fs.writeFileSync(
    path.join(bin, "gh"),
    `#!/usr/bin/env node
import fs from "node:fs";
const statePath = process.env.FAKE_GH_STATE;
const state = JSON.parse(fs.readFileSync(statePath, "utf8"));
const args = process.argv.slice(2);
const json = (value) => process.stdout.write(JSON.stringify(value));

if (args[0] === "variable" && args[1] === "list") {
  json(Object.entries(state.variables).map(([name, value]) => ({ name, value })));
} else if (args[0] === "variable" && args[1] === "set") {
  state.variables[args[2]] = args.at(-1);
  state.gateSets.push({ name: args[2], value: args.at(-1) });
  fs.writeFileSync(statePath, JSON.stringify(state));
  process.stdout.write("");
} else if (args[0] === "api" && args.some((arg) => arg.endsWith("/dispatches"))) {
  state.dispatchArgs = args;
  state.dispatchPayload = JSON.parse(fs.readFileSync(0, "utf8"));
  fs.writeFileSync(statePath, JSON.stringify(state));
  process.stdout.write("");
} else if (args[0] === "api") {
  json([]);
} else if (args[0] === "run" && args[1] === "list") {
  json([
    {
      databaseId: 123456,
      displayTitle: "cluster worker " + state.dispatchPayload.client_payload.dispatch_id,
      headSha: "newer-publisher-sha",
      status: "in_progress",
      conclusion: null,
      createdAt: new Date().toISOString(),
      url: "https://example.test/runs/123456",
    },
  ]);
} else if (args[0] === "run" && args[1] === "view") {
  state.viewCalls += 1;
  fs.writeFileSync(statePath, JSON.stringify(state));
  const clusterStatus = state.viewCalls === 1 ? "queued" : "in_progress";
  json({
    databaseId: 123456,
    status: "in_progress",
    conclusion: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    url: "https://example.test/runs/123456",
    jobs: [
      {
        name: "Prepare worker inputs",
        status: "completed",
        conclusion: "success",
        startedAt: "2026-01-01T00:00:00Z",
        completedAt: "2026-01-01T00:00:01Z",
      },
      {
        name: "Plan and review cluster",
        status: clusterStatus,
        startedAt: clusterStatus === "queued" ? "0001-01-01T00:00:00Z" : "2026-01-01T00:00:02Z",
        completedAt: "0001-01-01T00:00:00Z",
      },
    ],
  });
} else {
  process.stderr.write("unexpected gh call: " + args.join(" "));
  process.exit(1);
}
`,
    { mode: 0o755 },
  );

  const headSha = spawnSync("git", ["rev-parse", "origin/main"], { cwd: repoRoot, encoding: "utf8" }).stdout.trim();
  const result = spawnSync(
    process.execPath,
    [
      "scripts/requeue-job.mjs",
      "jobs/openclaw/outbox/finalized/merge-88551-cli-owned-auth-gate-20260619.md",
      "--mode",
      "autonomous",
      "--execute",
      "--open-execute-window",
      "--open-merge-window",
    ],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${bin}${path.delimiter}${process.env.PATH}`,
        FAKE_GH_STATE: state,
        FAKE_HEAD_SHA: headSha,
      },
    },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(result.stdout.match(/\{[\s\S]*\}/)?.[0] ?? "");
  assert.equal(report.gate_capture_runs[0].gate_capture_job, "Prepare worker inputs");
  assert.equal(report.gate_capture_runs[0].gate_capture_job_status, "completed");
  const finalState = JSON.parse(fs.readFileSync(state, "utf8"));
  assert.equal(finalState.viewCalls, 1);
  assert.deepEqual(finalState.dispatchArgs.slice(0, 5), ["api", "--method", "POST", "repos/openclaw/clownfish/dispatches", "--input"]);
  assert.equal(finalState.dispatchPayload.event_type, "projectclownfish_worker");
  assert.equal(finalState.dispatchPayload.client_payload.dry_run, false);
  assert.equal(finalState.dispatchPayload.client_payload.ref, "main");
  assert.equal(finalState.dispatchPayload.client_payload.required_ancestor_sha, headSha);
  assert.match(report.dispatch_id, /^requeue-[0-9]+-merge-88551-cli-owned-auth-gate-20260619$/);
  assert.deepEqual(
    finalState.gateSets.filter((entry) => entry.name === "CLOWNFISH_ALLOW_MERGE"),
    [
    { name: "CLOWNFISH_ALLOW_MERGE", value: "1" },
    { name: "CLOWNFISH_ALLOW_MERGE", value: "0" },
    ],
  );
  assert.equal(finalState.variables.CLOWNFISH_ALLOW_MERGE, "0");
});

test("requeue refuses a merge window without the explicit execute window", () => {
  const result = spawnSync(
    process.execPath,
    [
      "scripts/requeue-job.mjs",
      "jobs/openclaw/outbox/finalized/merge-88551-cli-owned-auth-gate-20260619.md",
      "--mode",
      "autonomous",
      "--execute",
      "--open-merge-window",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /--open-merge-window requires --open-execute-window/);
});

test("requeue rejects a write-mode override until the job itself is promoted", () => {
  const result = spawnSync(
    process.execPath,
    [
      "scripts/requeue-job.mjs",
      "jobs/openclaw/inbox/live-pr-inventory-20260618T170451-002.md",
      "--mode",
      "execute",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /refusing requeue mode override/);
});

test("cluster worker run names expose repository dispatch ids", () => {
  const workflow = fs.readFileSync(path.join(repoRoot, ".github/workflows/cluster-worker.yml"), "utf8");
  assert.match(workflow, /run-name: cluster worker .*github\.event\.client_payload\.dispatch_id/);
  assert.match(workflow, /github\.event\.inputs\.dispatch_id/);
});
