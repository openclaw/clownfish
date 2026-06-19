import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("sweep-openclaw-jobs finalizes jobs whose target refs are all closed", () => {
  const fixture = makeFixture();
  writeJob(path.join(fixture.inbox, "closed.md"), {
    clusterId: "closed-cluster",
    canonical: ["#1"],
    candidates: ["#1", "#2"],
    clusterRefs: ["#1", "#2"],
  });
  writeJob(path.join(fixture.inbox, "mixed.md"), {
    clusterId: "mixed-cluster",
    canonical: ["#3"],
    candidates: ["#3", "#4"],
    clusterRefs: ["#3", "#4"],
  });
  writeRunRecord(fixture, "100", {
    cluster_id: "mixed-cluster",
    run_id: "100",
    workflow_conclusion: "success",
    result_status: "needs_human",
    fix_actions: [],
    apply_actions: [],
  });
  const liveRefReport = path.join(fixture.root, "live-refs.json");
  fs.writeFileSync(
    liveRefReport,
    `${JSON.stringify(
      {
        refs: [
          liveRef(1, "CLOSED"),
          liveRef(2, "CLOSED"),
          liveRef(3, "CLOSED"),
          liveRef(4, "OPEN"),
        ],
      },
      null,
      2,
    )}\n`,
  );

  const dryRun = sweep(fixture, liveRefReport);
  assert.equal(dryRun.status, 0, dryRun.stderr || dryRun.stdout);
  const dryReport = JSON.parse(fs.readFileSync(fixture.report, "utf8"));
  assert.equal(dryReport.totals.move_to_outbox, 1);
  assert.equal(dryReport.totals.keep, 1);
  assert.equal(fs.existsSync(path.join(fixture.inbox, "closed.md")), true);

  const applied = sweep(fixture, liveRefReport, "--apply-outbox");
  assert.equal(applied.status, 0, applied.stderr || applied.stdout);
  const appliedReport = JSON.parse(fs.readFileSync(fixture.report, "utf8"));
  assert.equal(appliedReport.status, "applied");
  assert.equal(fs.existsSync(path.join(fixture.outbox, "closed.md")), true);
  assert.equal(fs.existsSync(path.join(fixture.inbox, "mixed.md")), true);
});

test("sweep-openclaw-jobs uses newest run id when published_at is absent", () => {
  const fixture = makeFixture();
  writeJob(path.join(fixture.inbox, "blocked.md"), {
    clusterId: "blocked-cluster",
    canonical: [],
    candidates: ["#999"],
    clusterRefs: ["#999"],
  });
  writeRunRecord(fixture, "100", {
    cluster_id: "blocked-cluster",
    run_id: "100",
    workflow_conclusion: "skipped",
    result_status: "planned",
    fix_actions: [],
    apply_actions: [],
  });
  writeRunRecord(fixture, "200", {
    cluster_id: "blocked-cluster",
    run_id: "200",
    workflow_conclusion: "success",
    result_status: "planned",
    fix_actions: [{ action: "execute_fix", status: "blocked" }],
    apply_actions: [],
  });

  const liveRefReport = path.join(fixture.root, "live-refs.json");
  fs.writeFileSync(liveRefReport, `${JSON.stringify({ refs: [] }, null, 2)}\n`);

  const dryRun = sweep(fixture, liveRefReport);
  assert.equal(dryRun.status, 0, dryRun.stderr || dryRun.stdout);
  const dryReport = JSON.parse(fs.readFileSync(fixture.report, "utf8"));
  assert.equal(dryReport.totals.requeue_candidate, 1);
  assert.equal(dryReport.requeue_candidates[0].latest_run_id, "200");
  assert.equal(dryReport.requeue_candidates[0].reason, "latest result has blocked or failed fix actions");
});

test("sweep-openclaw-jobs preserves requeue candidates with open target refs", () => {
  const fixture = makeFixture();
  writeJob(path.join(fixture.inbox, "blocked-open.md"), {
    clusterId: "blocked-open-cluster",
    canonical: ["#123"],
    candidates: ["#123"],
    clusterRefs: ["#123"],
  });
  writeRunRecord(fixture, "300", {
    cluster_id: "blocked-open-cluster",
    run_id: "300",
    workflow_conclusion: "success",
    result_status: "planned",
    fix_actions: [],
    apply_actions: [{ action: "close_superseded", status: "blocked" }],
  });

  const liveRefReport = path.join(fixture.root, "live-refs.json");
  fs.writeFileSync(liveRefReport, `${JSON.stringify({ refs: [liveRef(123, "OPEN")] }, null, 2)}\n`);

  const dryRun = sweep(fixture, liveRefReport);
  assert.equal(dryRun.status, 0, dryRun.stderr || dryRun.stdout);
  const dryReport = JSON.parse(fs.readFileSync(fixture.report, "utf8"));
  assert.equal(dryReport.totals.requeue_candidate, 1);
  assert.equal(dryReport.requeue_candidates[0].latest_run_id, "300");
  assert.equal(dryReport.requeue_candidates[0].live_target_refs_open, 1);
  assert.equal(dryReport.requeue_candidates[0].reason, "latest result has blocked apply actions");
});

test("sweep-openclaw-jobs keeps unrecorded jobs with open target refs", () => {
  const fixture = makeFixture();
  writeJob(path.join(fixture.inbox, "unrecorded-open.md"), {
    clusterId: "unrecorded-open-cluster",
    canonical: ["#321"],
    candidates: ["#321"],
    clusterRefs: ["#321"],
  });

  const liveRefReport = path.join(fixture.root, "live-refs.json");
  fs.writeFileSync(liveRefReport, `${JSON.stringify({ refs: [liveRef(321, "OPEN")] }, null, 2)}\n`);

  const dryRun = sweep(fixture, liveRefReport);
  assert.equal(dryRun.status, 0, dryRun.stderr || dryRun.stdout);
  const dryReport = JSON.parse(fs.readFileSync(fixture.report, "utf8"));
  assert.equal(dryReport.totals.move_to_stuck ?? 0, 0);
  assert.equal(dryReport.totals.keep, 1);
  assert.equal(
    dryReport.keep_jobs[0].reason,
    "no published run record found, but target issue/PR refs remain open in live GitHub state",
  );
});

test("sweep-openclaw-jobs keeps pushed repairs when only post-flight merge is blocked", () => {
  const fixture = makeFixture();
  writeJob(path.join(fixture.inbox, "pushed-repair.md"), {
    clusterId: "pushed-repair-cluster",
    canonical: ["#90468"],
    candidates: ["#90468"],
    clusterRefs: ["#90468"],
  });
  writeRunRecord(fixture, "400", {
    cluster_id: "pushed-repair-cluster",
    run_id: "400",
    workflow_conclusion: "success",
    result_status: "planned",
    fix_actions: [{ action: "repair_contributor_branch", status: "pushed" }],
    apply_actions: [{ action: "merge_canonical", status: "blocked", reason: "job does not allow merge" }],
  });

  const liveRefReport = path.join(fixture.root, "live-refs.json");
  fs.writeFileSync(liveRefReport, `${JSON.stringify({ refs: [liveRef(90468, "OPEN")] }, null, 2)}\n`);

  const dryRun = sweep(fixture, liveRefReport);
  assert.equal(dryRun.status, 0, dryRun.stderr || dryRun.stdout);
  const dryReport = JSON.parse(fs.readFileSync(fixture.report, "utf8"));
  assert.equal(dryReport.totals.requeue_candidate ?? 0, 0);
  assert.equal(dryReport.totals.keep, 1);
  assert.equal(dryReport.keep_jobs[0].latest_run_id, "400");
  assert.equal(dryReport.keep_jobs[0].reason, "one or more target issue/PR refs remain open in live GitHub state");
});

test("sweep-openclaw-jobs preserves finalized jobs with open target refs", () => {
  const fixture = makeFixture();
  writeJob(path.join(fixture.inbox, "finalized-open.md"), {
    clusterId: "finalized-open-cluster",
    canonical: ["#94015"],
    candidates: ["#94015"],
    clusterRefs: ["#94015"],
  });
  writeRunRecord(fixture, "500", {
    cluster_id: "finalized-open-cluster",
    run_id: "500",
    workflow_conclusion: "success",
    result_status: "planned",
    fix_actions: [],
    apply_actions: [],
  });

  const liveRefReport = path.join(fixture.root, "live-refs.json");
  fs.writeFileSync(liveRefReport, `${JSON.stringify({ refs: [liveRef(94015, "OPEN")] }, null, 2)}\n`);

  const dryRun = sweep(fixture, liveRefReport);
  assert.equal(dryRun.status, 0, dryRun.stderr || dryRun.stdout);
  const dryReport = JSON.parse(fs.readFileSync(fixture.report, "utf8"));
  assert.equal(dryReport.totals.move_to_outbox ?? 0, 0);
  assert.equal(dryReport.totals.keep, 1);
  assert.equal(dryReport.keep_jobs[0].live_target_refs_open, 1);
  assert.equal(dryReport.keep_jobs[0].reason, "one or more target issue/PR refs remain open in live GitHub state");
});

test("sweep-openclaw-jobs holds jobs with open security-sensitive live refs", () => {
  const fixture = makeFixture();
  writeJob(path.join(fixture.inbox, "blocked-security-open.md"), {
    clusterId: "blocked-security-open-cluster",
    canonical: ["#50011"],
    candidates: ["#50011"],
    clusterRefs: ["#50011"],
  });
  writeRunRecord(fixture, "400", {
    cluster_id: "blocked-security-open-cluster",
    run_id: "400",
    workflow_conclusion: "success",
    result_status: "planned",
    fix_actions: [],
    apply_actions: [{ action: "close_fixed_by_candidate", status: "blocked" }],
  });

  const liveRefReport = path.join(fixture.root, "live-refs.json");
  fs.writeFileSync(
    liveRefReport,
    `${JSON.stringify({ refs: [liveRef(50011, "OPEN", ["impact:security"])] }, null, 2)}\n`,
  );

  const dryRun = sweep(fixture, liveRefReport);
  assert.equal(dryRun.status, 0, dryRun.stderr || dryRun.stdout);
  const dryReport = JSON.parse(fs.readFileSync(fixture.report, "utf8"));
  assert.equal(dryReport.totals.security_hold, 1);
  assert.equal(dryReport.security_hold_jobs[0].latest_run_id, "400");
  assert.equal(dryReport.security_hold_jobs[0].reason, "live target refs include security-sensitive open issue/PR");
  assert.equal(dryReport.security_hold_jobs[0].live_target_open_refs[0].security_sensitive, true);
  assert.deepEqual(dryReport.security_hold_jobs[0].live_target_open_refs[0].labels, ["impact:security"]);
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-sweep-"));
  const inbox = path.join(root, "inbox");
  const outbox = path.join(root, "outbox");
  const stuck = path.join(root, "stuck");
  const runs = path.join(root, "runs");
  const report = path.join(root, "report.json");
  fs.mkdirSync(inbox, { recursive: true });
  fs.mkdirSync(runs, { recursive: true });
  return { root, inbox, outbox, stuck, runs, report };
}

function writeJob(filePath, { clusterId, canonical, candidates, clusterRefs }) {
  fs.writeFileSync(
    filePath,
    `---
repo: openclaw/openclaw
cluster_id: ${clusterId}
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - merge
require_human_for:
  - merge
canonical:
${canonical.map((ref) => `  - "${ref}"`).join("\n")}
candidates:
${candidates.map((ref) => `  - "${ref}"`).join("\n")}
cluster_refs:
${clusterRefs.map((ref) => `  - "${ref}"`).join("\n")}
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
security_sensitive: false
---

# Test Job
`,
  );
}

function writeRunRecord(fixture, runId, record) {
  fs.writeFileSync(path.join(fixture.runs, `${runId}.json`), `${JSON.stringify(record, null, 2)}\n`);
}

function liveRef(number, state, labels = []) {
  return {
    repo: "openclaw/openclaw",
    number,
    __typename: "PullRequest",
    state,
    merged: state === "MERGED",
    title: `PR ${number}`,
    url: `https://github.com/openclaw/openclaw/pull/${number}`,
    labels,
  };
}

function sweep(fixture, liveRefReport, ...extraArgs) {
  return spawnSync(
    process.execPath,
    [
      "scripts/sweep-openclaw-jobs.mjs",
      "--jobs",
      fixture.inbox,
      "--outbox",
      fixture.outbox,
      "--stuck",
      fixture.stuck,
      "--report",
      fixture.report,
      "--run-records",
      fixture.runs,
      "--verify-target-refs-live",
      "--live-ref-report",
      liveRefReport,
      ...extraArgs,
    ],
    {
      cwd: repoRoot,
      encoding: "utf8",
    },
  );
}
