import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

function runWorker(t, { planner = "", reviewer = "", codex = "", args = [], env = {} } = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-worker-timeout-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.mkdirSync(path.join(root, "scripts"));
  fs.mkdirSync(path.join(root, "bin"));
  for (const file of ["run-worker.mjs", "lib.mjs", "result-metadata.mjs", "worker-result-transcript.mjs"]) {
    fs.copyFileSync(path.join(repoRoot, "scripts", file), path.join(root, "scripts", file));
  }
  fs.cpSync(path.join(repoRoot, "prompts"), path.join(root, "prompts"), { recursive: true });
  fs.cpSync(path.join(repoRoot, "instructions"), path.join(root, "instructions"), { recursive: true });
  fs.copyFileSync(path.join(repoRoot, "jobs/openclaw/inbox/cluster-example.md"), path.join(root, "job.md"));
  fs.writeFileSync(path.join(root, "scripts/plan-cluster.mjs"), `
    ${planner}
    import fs from "node:fs";
    import path from "node:path";
    const runDir = process.argv[process.argv.indexOf("--run-dir") + 1];
    for (const file of ["cluster-plan.json", "fix-artifact.json"]) {
      fs.writeFileSync(path.join(runDir, file), "{}");
    }
  `);
  fs.writeFileSync(path.join(root, "scripts/review-results.mjs"), reviewer);
  fs.writeFileSync(path.join(root, "bin/codex"), `#!${process.execPath}\n${codex}`, { mode: 0o755 });
  // Do not inherit live credentials, target checkouts, or worker execution gates.
  const child = spawnSync(process.execPath, ["scripts/run-worker.mjs", "job.md", ...args], {
    cwd: root,
    encoding: "utf8",
    detached: process.platform !== "win32",
    timeout: 20000,
    killSignal: "SIGKILL",
    env: {
      PATH: `${path.join(root, "bin")}${path.delimiter}${path.dirname(process.execPath)}`,
      CLOWNFISH_PLANNER_TIMEOUT_MS: "10000",
      CLOWNFISH_REVIEW_TIMEOUT_MS: "10000",
      ...env,
    },
  });
  // A regression must not leave the deliberately wedged fixture alive.
  if (process.platform !== "win32" && child.pid) {
    try { process.kill(-child.pid, "SIGKILL"); } catch (error) {
      if (error.code !== "ESRCH") throw error;
    }
  }
  const runsRoot = path.join(root, ".projectclownfish/runs");
  const runDir = path.join(runsRoot, fs.readdirSync(runsRoot)[0]);
  const read = (file) => fs.existsSync(path.join(runDir, file))
    ? JSON.parse(fs.readFileSync(path.join(runDir, file), "utf8")) : null;
  return { child, result: read("result.json"), beforeTimeout: read("result.before-timeout.json") };
}

const hang = `process.on("SIGTERM", () => {}); setInterval(() => {}, 1000);`;
const writeResult = `
  const fs = require("node:fs");
  const output = process.argv[process.argv.indexOf("--output-last-message") + 1];
  fs.writeFileSync(output, JSON.stringify({ status: "planned", summary: "unvalidated result", actions: [{ action: "close_duplicate" }] }));
`;

function assertBlocked(run, stage) {
  assert.equal(run.child.error, undefined, `worker exceeded outer deadline: ${run.child.stderr}`);
  assert.equal(run.child.status, 0, run.child.stderr);
  assert.equal(run.result?.status, "blocked");
  assert.match(run.result.summary, new RegExp(`${stage} timed out after 1000ms`));
  assert.deepEqual(run.result.actions, []);
  assert.deepEqual(run.result.needs_human, [run.result.summary]);
}

test("worker bounds the planner even when it ignores SIGTERM", (t) => {
  assertBlocked(runWorker(t, { planner: hang, env: { CLOWNFISH_PLANNER_TIMEOUT_MS: "1000" } }), "Cluster planner");
});

test("worker bounds the offline autonomous planner", (t) => {
  assertBlocked(runWorker(t, {
    planner: hang, args: ["--mode", "autonomous", "--dry-run"], env: { CLOWNFISH_PLANNER_TIMEOUT_MS: "1000" },
  }), "Cluster planner");
});

test("review timeout blocks and preserves unvalidated output before repair", (t) => {
  const run = runWorker(t, { codex: writeResult, reviewer: hang, env: { CLOWNFISH_REVIEW_TIMEOUT_MS: "1000" } });
  assertBlocked(run, "Result review");
  assert.equal(run.beforeTimeout?.summary, "unvalidated result");
  assert.equal(run.beforeTimeout.actions.length, 1);
});

test("final review timeout is bounded when repair is disabled", (t) => {
  assertBlocked(runWorker(t, {
    codex: writeResult, reviewer: hang,
    env: { CLOWNFISH_RESULT_REPAIR_ATTEMPTS: "0", CLOWNFISH_REVIEW_TIMEOUT_MS: "1000" },
  }), "Result review");
});

test("review timeout blocks a result recovered from a failed Codex process", (t) => {
  const recovered = {
    status: "planned", repo: "openclaw/openclaw", cluster_id: "example-cron-timeout", mode: "plan",
    summary: "recovered result", actions: [{ action: "keep_related" }], needs_human: [],
    merge_preflight: [], canonical: null, canonical_issue: null, canonical_pr: null, fix_artifact: null,
  };
  const run = runWorker(t, {
    codex: `console.log(${JSON.stringify(JSON.stringify({ item: { type: "agent_message", text: JSON.stringify(recovered) } }))}); process.exit(1);`,
    reviewer: hang, env: { CLOWNFISH_RESULT_REPAIR_ATTEMPTS: "0", CLOWNFISH_REVIEW_TIMEOUT_MS: "1000" },
  });
  assertBlocked(run, "Result review");
  assert.equal(run.beforeTimeout?.summary, "recovered result");
});

test("reviewing a missing-result fallback cannot hang", (t) => {
  const run = runWorker(t, {
    reviewer: `
      import fs from "node:fs";
      import path from "node:path";
      if (!fs.existsSync(path.join(process.argv[2], "result.json"))) process.exit(1);
      ${hang}
    `,
    env: { CLOWNFISH_RESULT_REPAIR_ATTEMPTS: "0", CLOWNFISH_REVIEW_TIMEOUT_MS: "1000" },
  });
  assertBlocked(run, "Result review");
  assert.match(run.beforeTimeout?.summary, /without writing result.json/);
});

test("successful child steps preserve the normal result", (t) => {
  const run = runWorker(t, { codex: writeResult });
  assert.equal(run.child.status, 0, run.child.stderr);
  assert.equal(run.result.status, "planned");
  assert.equal(run.beforeTimeout, null);
});

test("ordinary planner failures retain their failing exit code", (t) => {
  const run = runWorker(t, { planner: 'console.error("planner failed"); process.exit(7);' });
  assert.equal(run.child.status, 7);
  assert.match(run.child.stderr, /planner failed/);
  assert.equal(run.result, null);
});

test("ordinary review failures remain failures", (t) => {
  const run = runWorker(t, {
    codex: writeResult, reviewer: 'console.error("invalid result"); process.exit(1);',
    env: { CLOWNFISH_RESULT_REPAIR_ATTEMPTS: "0" },
  });
  assert.equal(run.child.status, 1);
  assert.match(run.child.stderr, /invalid result/);
  assert.equal(run.beforeTimeout, null);
});
