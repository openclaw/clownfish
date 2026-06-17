import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("queue-status ignores inbox example jobs", () => {
  const fixture = makeFixture();
  writeJob(path.join(fixture.inbox, "autonomous-example.md"), {
    clusterId: "example-autonomous-cron-timeout",
    mode: "autonomous",
    refs: ["#1", "#2"],
  });
  writeJob(path.join(fixture.inbox, "real-close.md"), {
    clusterId: "real-close",
    mode: "execute",
    refs: ["#3", "#4"],
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
      "--skip-secret-check",
      "--json",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.totals.inbox_jobs, 1);
  assert.equal(payload.totals.missing_execute, 1);
  assert.equal(payload.totals.missing_autonomous, 0);
  assert.deepEqual(payload.rows.map((row) => path.basename(row.path)), ["real-close.md"]);
});

test("queue-status can select a plan wave by ref budget", () => {
  const fixture = makeFixture();
  const waveFile = path.join(fixture.root, "plan-wave.txt");
  writeJob(path.join(fixture.inbox, "a-plan.md"), {
    clusterId: "a-plan",
    mode: "plan",
    refs: ["#1", "#2"],
  });
  writeJob(path.join(fixture.inbox, "b-plan.md"), {
    clusterId: "b-plan",
    mode: "plan",
    refs: ["#3", "#4", "#5"],
  });
  writeJob(path.join(fixture.inbox, "c-plan.md"), {
    clusterId: "c-plan",
    mode: "plan",
    refs: ["#6", "#7", "#8"],
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
      "--skip-secret-check",
      "--plan-ref-limit",
      "5",
      "--write-missing-plan",
      waveFile,
      "--json",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.selected_counts.plan, 2);
  assert.equal(payload.selected_ref_counts.plan, 5);
  assert.deepEqual(
    fs.readFileSync(waveFile, "utf8").trim().split(/\r?\n/).map((item) => path.basename(item)),
    ["a-plan.md", "b-plan.md"],
  );
});

test("queue-status counts published markdown reports as results", () => {
  const fixture = makeFixture();
  writeJob(path.join(fixture.inbox, "a-plan.md"), {
    clusterId: "a-plan",
    mode: "plan",
    refs: ["#1", "#2"],
  });
  writeJob(path.join(fixture.inbox, "b-plan.md"), {
    clusterId: "b-plan",
    mode: "plan",
    refs: ["#3", "#4"],
  });
  writeResultReport(path.join(fixture.resultReports, "a-plan.md"), {
    clusterId: "a-plan",
    runId: "12345",
    actionsTotal: 2,
  });

  const result = spawnSync(
    process.execPath,
    [
      "scripts/queue-status.mjs",
      "--inbox",
      fixture.inbox,
      "--runs-dir",
      fixture.runs,
      "--result-reports-dir",
      fixture.resultReports,
      "--dispatch-ledger",
      fixture.ledger,
      "--skip-secret-check",
      "--json",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.totals.with_results, 1);
  assert.equal(payload.totals.missing_plan, 1);
  assert.deepEqual(
    payload.rows.filter((row) => row.has_result).map((row) => row.cluster_id),
    ["a-plan"],
  );
  assert.equal(payload.rows.find((row) => row.cluster_id === "a-plan").latest_result.source, "result_markdown");
});

test("queue-status selects verified live sweep requeue jobs with published results", () => {
  const fixture = makeFixture();
  const waveFile = path.join(fixture.root, "sweep-requeue-wave.txt");
  const sweepReport = path.join(fixture.root, "sweep-report.json");
  const requeuePath = path.join(fixture.inbox, "requeue.md");
  const missingPath = path.join(fixture.inbox, "missing.md");
  writeJob(requeuePath, {
    clusterId: "requeue",
    mode: "autonomous",
    refs: ["#1"],
  });
  writeJob(missingPath, {
    clusterId: "missing",
    mode: "autonomous",
    refs: ["#2"],
  });
  writeResultReport(path.join(fixture.resultReports, "requeue.md"), {
    clusterId: "requeue",
    runId: "12345",
    actionsTotal: 1,
  });
  fs.writeFileSync(
    sweepReport,
    `${JSON.stringify({
      requeue_candidates: [
        { job: path.relative(repoRoot, requeuePath), live_target_refs_open: 1 },
        { job: path.relative(repoRoot, missingPath), live_target_refs_open: 1 },
      ],
    })}\n`,
  );

  const result = spawnSync(
    process.execPath,
    [
      "scripts/queue-status.mjs",
      "--inbox",
      fixture.inbox,
      "--runs-dir",
      fixture.runs,
      "--result-reports-dir",
      fixture.resultReports,
      "--dispatch-ledger",
      fixture.ledger,
      "--sweep-report",
      sweepReport,
      "--sweep-requeue-limit",
      "5",
      "--write-sweep-requeue",
      waveFile,
      "--skip-secret-check",
      "--json",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.totals.live_sweep_requeue_candidates, 1);
  assert.equal(payload.selected_counts.sweep_requeue, 1);
  assert.deepEqual(fs.readFileSync(waveFile, "utf8").trim().split(/\r?\n/).map((item) => path.basename(item)), ["requeue.md"]);
});

test("prune-inbox preserves example jobs even when writing", () => {
  const fixture = makeFixture();
  const examplePath = path.join(fixture.inbox, "autonomous-example.md");
  writeJob(examplePath, {
    clusterId: "example-autonomous-cron-timeout",
    mode: "autonomous",
    refs: ["#1", "#2"],
  });

  const result = spawnSync(
    process.execPath,
    ["scripts/prune-inbox-jobs.mjs", "--inbox", fixture.inbox, "--live", "false", "--write", "--json"],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.summary.example, 1);
  assert.equal(payload.summary.movable, 0);
  assert.equal(payload.rows[0].action, "example");
  assert.equal(payload.rows[0].destination, null);
  assert.equal(fs.existsSync(examplePath), true);
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-examples-"));
  const inbox = path.join(root, "inbox");
  const runs = path.join(root, "runs");
  const resultReports = path.join(root, "results");
  const ledger = path.join(root, "dispatch-ledger.json");
  fs.mkdirSync(inbox, { recursive: true });
  fs.mkdirSync(runs, { recursive: true });
  fs.mkdirSync(resultReports, { recursive: true });
  fs.writeFileSync(ledger, `${JSON.stringify({ attempts: [] })}\n`);
  return { root, inbox, runs, resultReports, ledger };
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

# Test Job
`,
  );
}

function writeResultReport(filePath, { clusterId, runId, actionsTotal }) {
  fs.writeFileSync(
    filePath,
    `---
repo: "openclaw/openclaw"
cluster_id: "${clusterId}"
mode: "plan"
run_id: "${runId}"
run_url: "https://github.com/openclaw/clownfish/actions/runs/${runId}"
head_sha: "abc123"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T16:28:29.523Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: ${actionsTotal}
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ${clusterId}
`,
  );
}
