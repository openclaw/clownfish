import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("requeue waits for the cluster job that captures execute gates", () => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-requeue-"));
  const bin = path.join(fixture, "bin");
  const state = path.join(fixture, "state.json");
  fs.mkdirSync(bin);
  fs.writeFileSync(state, JSON.stringify({ viewCalls: 0 }));
  fs.writeFileSync(
    path.join(bin, "gh"),
    `#!/usr/bin/env node
import fs from "node:fs";
const statePath = process.env.FAKE_GH_STATE;
const state = JSON.parse(fs.readFileSync(statePath, "utf8"));
const args = process.argv.slice(2);
const json = (value) => process.stdout.write(JSON.stringify(value));

if (args[0] === "variable" && args[1] === "list") {
  json([{ name: "CLOWNFISH_ALLOW_EXECUTE", value: "1" }]);
} else if (args[0] === "variable" && args[1] === "set") {
  process.stdout.write("");
} else if (args[0] === "api") {
  json([]);
} else if (args[0] === "run" && args[1] === "list") {
  json([
    {
      databaseId: 123456,
      headSha: process.env.FAKE_HEAD_SHA,
      status: "in_progress",
      conclusion: null,
      createdAt: new Date().toISOString(),
      url: "https://example.test/runs/123456",
    },
  ]);
} else if (args[0] === "workflow" && args[1] === "run") {
  process.stdout.write("");
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
      "jobs/openclaw/inbox/pr-close-canary-94489-20260618a.md",
      "--mode",
      "execute",
      "--execute",
      "--open-execute-window",
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
  assert.equal(report.gate_capture_runs[0].worker_job_status, "in_progress");
  assert.equal(JSON.parse(fs.readFileSync(state, "utf8")).viewCalls, 2);
});
