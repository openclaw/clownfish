import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const job = "jobs/openclaw/inbox/cluster-example.md";

test("throttled dispatch reserves accepted jobs while GitHub visibility lags", (t) => {
  const fixture = runDispatch("lag");
  t.after(() => fs.rmSync(fixture.root, { recursive: true, force: true }));

  assert.equal(fixture.result.status, 0, fixture.result.stderr || fixture.result.stdout);
  assertCapacitySequence(fixture.events, { laggedPolls: 2 });
});

test("throttled dispatch releases reservations when accepted jobs become visible", (t) => {
  const fixture = runDispatch("normal");
  t.after(() => fs.rmSync(fixture.root, { recursive: true, force: true }));

  assert.equal(fixture.result.status, 0, fixture.result.stderr || fixture.result.stdout);
  assertCapacitySequence(fixture.events, { laggedPolls: 0 });
});

test("throttled dispatch keeps a fitting batch in one wave", (t) => {
  const fixture = runDispatch("normal", 5);
  t.after(() => fs.rmSync(fixture.root, { recursive: true, force: true }));

  assert.equal(fixture.result.status, 0, fixture.result.stderr || fixture.result.stdout);
  const firstDispatchIndex = fixture.events.findIndex((event) => event.startsWith("dispatch:"));
  assert.ok(firstDispatchIndex >= 0, fixture.events.join("\n"));
  assert.equal(
    fixture.events.slice(firstDispatchIndex).filter((event) => event.startsWith("poll:")).length,
    0,
    fixture.events.join("\n"),
  );
  assert.equal(fixture.events.filter((event) => event.startsWith("dispatch:")).length, 5);
});

function runDispatch(visibility, jobCount = 8) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-dispatch-capacity-"));
  const fakeGh = path.join(root, "fake-ghx.mjs");
  const eventsPath = path.join(root, "events.log");
  const pollStatePath = path.join(root, "poll-state");
  writeFakeGhx(fakeGh);

  const result = spawnSync(
    process.execPath,
    [
      "scripts/dispatch-jobs.mjs",
      ...Array.from({ length: jobCount }, () => job),
      "--mode",
      "autonomous",
      "--ref",
      "HEAD",
      "--gh-bin",
      fakeGh,
      "--skip-token-secret-check",
      "--skip-publish-backlog-check",
      "--no-dispatch-ledger",
      "--wait-for-capacity",
      "--max-live-workers",
      "5",
      "--write-live-worker-cap",
      "5",
      "--dispatch-concurrency",
      "5",
      "--batch-delay-ms",
      "1",
    ],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        CLOWNFISH_LIVE_WORKER_CAPACITY_POLL_MS: "1",
        CLOWNFISH_LIVE_WORKER_CAPACITY_TIMEOUT_MS: "5000",
        FAKE_GHX_EVENTS: eventsPath,
        FAKE_GHX_POLL_STATE: pollStatePath,
        FAKE_GHX_VISIBILITY: visibility,
      },
    },
  );

  const events = fs.existsSync(eventsPath)
    ? fs.readFileSync(eventsPath, "utf8").trim().split("\n").filter(Boolean)
    : [];
  return { root, result, events };
}

function assertCapacitySequence(events, { laggedPolls }) {
  const dispatchIndexes = events
    .map((event, index) => (event.startsWith("dispatch:") ? index : -1))
    .filter((index) => index >= 0);
  assert.equal(dispatchIndexes.length, 8, events.join("\n"));

  const firstVisibleIndex = events.findIndex((event) => event.endsWith(":101,102,103,104,105"));
  const freedCapacityIndex = events.findIndex((event) => event.endsWith(":104,105"));
  assert.ok(firstVisibleIndex > dispatchIndexes[4], events.join("\n"));
  assert.ok(freedCapacityIndex > firstVisibleIndex, events.join("\n"));
  assert.ok(dispatchIndexes[5] > freedCapacityIndex, events.join("\n"));

  const lagged = events
    .slice(dispatchIndexes[4] + 1, firstVisibleIndex)
    .filter((event) => /^poll:5:\d+:$/.test(event));
  assert.equal(lagged.length, laggedPolls, events.join("\n"));
}

function writeFakeGhx(filePath) {
  fs.writeFileSync(
    filePath,
    `#!/usr/bin/env node
import fs from "node:fs";

const args = process.argv.slice(2);
const eventsPath = process.env.FAKE_GHX_EVENTS;
const pollStatePath = process.env.FAKE_GHX_POLL_STATE;

if (args.includes("--version")) {
  console.log("fake-ghx 1.0");
  process.exit(0);
}

if (args[0] === "workflow" && args[1] === "run") {
  const dispatchId = args.find((arg) => arg.startsWith("dispatch_id="))?.slice(12) ?? "unknown";
  fs.appendFileSync(eventsPath, \`dispatch:\${dispatchId}\\n\`);
  process.exit(0);
}

if (args[0] === "api" && args.some((arg) => arg.endsWith("/runs"))) {
  const status = args.find((arg) => arg.startsWith("status="))?.slice(7);
  if (status !== "queued") {
    console.log(JSON.stringify([{ workflow_runs: [] }]));
    process.exit(0);
  }

  const events = fs.existsSync(eventsPath)
    ? fs.readFileSync(eventsPath, "utf8").split("\\n").filter(Boolean)
    : [];
  const dispatchIds = events
    .filter((event) => event.startsWith("dispatch:"))
    .map((event) => event.slice(9));
  const dispatchCount = dispatchIds.length;
  let activeIds = [];
  let phasePoll = -1;

  if (dispatchCount === 5) {
    phasePoll = fs.existsSync(pollStatePath) ? Number(fs.readFileSync(pollStatePath, "utf8")) : 0;
    fs.writeFileSync(pollStatePath, String(phasePoll + 1));
    if (process.env.FAKE_GHX_VISIBILITY === "lag") {
      if (phasePoll >= 2) activeIds = phasePoll === 2 ? [101, 102, 103, 104, 105] : [104, 105];
    } else {
      activeIds = phasePoll === 0 ? [101, 102, 103, 104, 105] : [104, 105];
    }
  }

  fs.appendFileSync(eventsPath, \`poll:\${dispatchCount}:\${phasePoll}:\${activeIds.join(",")}\\n\`);
  console.log(JSON.stringify([{
    workflow_runs: activeIds.map((id) => ({
      id,
      status: "queued",
      created_at: "2026-07-06T00:00:00Z",
      html_url: \`https://example.invalid/actions/runs/\${id}\`,
      display_title: \`cluster worker \${dispatchIds[id - 101]}\`,
    })),
  }]));
  process.exit(0);
}

console.error("unexpected fake ghx args: " + args.join(" "));
process.exit(1);
`,
    { mode: 0o755 },
  );
}
