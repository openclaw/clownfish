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

test("publish backlog accepts a complete cluster batch", () => {
  const result = runPublishBacklog({
    workflow: "cluster-batch.yml",
    runs: [completedRun(200)],
    runAttemptsByRunId: { 200: 3 },
    artifactsByRunId: {
      200: [
        "projectclownfish-200-3-0",
        "projectclownfish-200-3-1",
        "projectclownfish-200-3-2",
      ],
    },
    publishedRunIds: ["200-3-0", "200-3-1", "200-3-2"],
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.equal(JSON.parse(result.stdout).missing_count, 0);
});

test("publish backlog keeps a partial cluster batch missing", () => {
  const result = runPublishBacklog({
    workflow: "cluster-batch.yml",
    runs: [completedRun(200, 3)],
    artifactsByRunId: {
      200: [
        "projectclownfish-200-3-0",
        "projectclownfish-200-3-1",
        "projectclownfish-200-3-2",
      ],
    },
    publishedRunIds: ["200-3-0", "200-3-2"],
  });

  assert.notEqual(result.status, 0);
  const summary = JSON.parse(result.stdout);
  assert.equal(summary.missing_count, 1);
  assert.deepEqual(summary.missing_run_ids, ["200"]);
});

test("publish backlog accepts a terminal review rejection for a missing batch child", () => {
  const result = runPublishBacklog({
    workflow: "cluster-batch.yml",
    runs: [completedRun(200, 3)],
    artifactsByRunId: {
      200: [
        "projectclownfish-200-3-0",
        "projectclownfish-200-3-1",
        "projectclownfish-200-3-2",
      ],
    },
    publishedRunIds: ["200-3-0", "200-3-2"],
    terminalRejections: [
      {
        run_id: "200-3-1",
        workflow_run_id: "200",
        run_attempt: "3",
        matrix_index: "1",
        code: "high_risk_close_target",
        targets: ["#91444"],
      },
    ],
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.equal(JSON.parse(result.stdout).missing_count, 0);
});

test("publish backlog ignores malformed terminal review rejections", () => {
  const result = runPublishBacklog({
    workflow: "cluster-batch.yml",
    runs: [completedRun(200, 3)],
    artifactsByRunId: {
      200: [
        "projectclownfish-200-3-0",
        "projectclownfish-200-3-1",
        "projectclownfish-200-3-2",
      ],
    },
    publishedRunIds: ["200-3-0", "200-3-2"],
    terminalRejections: [
      {
        run_id: "200-3-1",
        workflow_run_id: "200",
        run_attempt: "3",
        matrix_index: "1",
        code: "high_risk_close_target",
        targets: [],
      },
    ],
  });

  assert.notEqual(result.status, 0);
  assert.equal(JSON.parse(result.stdout).missing_count, 1);
});

test("publish backlog keeps exact IDs for single cluster workers", () => {
  const result = runPublishBacklog({
    workflow: "cluster-worker.yml",
    runs: [completedRun(300, 1)],
    publishedRunIds: ["300-1-0"],
  });

  assert.notEqual(result.status, 0);
  const summary = JSON.parse(result.stdout);
  assert.equal(summary.missing_count, 1);
  assert.deepEqual(summary.missing_run_ids, ["300"]);
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-dispatch-publish-backlog-"));
  return {
    gh: path.join(root, "fake-ghx.mjs"),
    state: path.join(root, "state"),
  };
}

function runPublishBacklog({
  workflow,
  runs,
  artifactsByRunId = {},
  runAttemptsByRunId = {},
  publishedRunIds,
  terminalRejections = [],
}) {
  const fixture = makeFixture();
  writeFakeGhx(fixture);
  writeFakeGit(fixture);

  return spawnSync(
    process.execPath,
    [
      "scripts/publish-backlog.mjs",
      "--repo",
      "openclaw/clownfish",
      "--workflow",
      workflow,
      "--lookback",
      "10",
      "--conclusion",
      "success",
      "--threshold",
      "0",
      "--fetch",
      "false",
      "--gh-bin",
      fixture.gh,
      "--json",
    ],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${fixture.bin}${path.delimiter}${process.env.PATH ?? ""}`,
        FAKE_GHX_RUNS: JSON.stringify(runs),
        FAKE_GHX_ARTIFACTS: JSON.stringify(artifactsByRunId),
        FAKE_GHX_RUN_ATTEMPTS: JSON.stringify(runAttemptsByRunId),
        FAKE_GIT_PUBLISHED_RUN_IDS: JSON.stringify(publishedRunIds),
        FAKE_GIT_TERMINAL_REJECTIONS: JSON.stringify(terminalRejections),
      },
    },
  );
}

function completedRun(databaseId, runAttempt = undefined) {
  return {
    databaseId,
    ...(runAttempt === undefined ? {} : { runAttempt }),
    status: "completed",
    conclusion: "success",
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
  if (process.env.FAKE_GHX_RUNS) {
    console.log(process.env.FAKE_GHX_RUNS);
    process.exit(0);
  }
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
  if (process.env.FAKE_GHX_ARTIFACTS) {
    const endpoint = args.find((arg) => arg.includes("/actions/runs/"));
    const runId = endpoint?.match(/\\/actions\\/runs\\/(\\d+)/)?.[1];
    if (!endpoint?.includes("/artifacts")) {
      console.log(JSON.stringify({ run_attempt: JSON.parse(process.env.FAKE_GHX_RUN_ATTEMPTS ?? "{}")[runId] ?? 1 }));
      process.exit(0);
    }
    const artifacts = JSON.parse(process.env.FAKE_GHX_ARTIFACTS)[runId] ?? [];
    console.log(JSON.stringify([{ artifacts: artifacts.map((name) => ({ name, expired: false })) }]));
    process.exit(0);
  }
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

function writeFakeGit(fixture) {
  fixture.bin = path.join(path.dirname(fixture.gh), "bin");
  fs.mkdirSync(fixture.bin, { recursive: true });
  fs.writeFileSync(
    path.join(fixture.bin, "git"),
    `#!/usr/bin/env node
const args = process.argv.slice(2);
if (args[0] === "ls-tree") {
  const runIds = JSON.parse(process.env.FAKE_GIT_PUBLISHED_RUN_IDS ?? "[]");
  const terminalRejections = JSON.parse(process.env.FAKE_GIT_TERMINAL_REJECTIONS ?? "[]");
  const wantsRuns = args.includes("results/runs");
  const wantsTerminal = args.includes("results/review-rejections");
  const files = [
    ...(wantsRuns ? runIds.map((runId) => \`results/runs/\${runId}.json\`) : []),
    ...(wantsTerminal ? terminalRejections.map((rejection) => \`results/review-rejections/\${rejection.run_id}.json\`) : []),
  ];
  process.stdout.write(files.join("\\n"));
  process.exit(0);
}
if (args[0] === "show") {
  const terminalRejections = JSON.parse(process.env.FAKE_GIT_TERMINAL_REJECTIONS ?? "[]");
  const file = String(args[1] ?? "").split(":").at(-1);
  const runId = file.split("/").at(-1).replace(/\\.json$/, "");
  const rejection = terminalRejections.find((candidate) => candidate.run_id === runId);
  if (rejection) {
    process.stdout.write(JSON.stringify(rejection));
    process.exit(0);
  }
  process.stderr.write("missing terminal rejection: " + file + "\\n");
  process.exit(1);
}
process.stderr.write("unexpected git invocation: " + args.join(" ") + "\\n");
process.exit(1);
`,
    { mode: 0o755 },
  );
}
