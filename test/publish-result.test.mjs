import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("publish-result publishes a bounded repair candidate from sibling artifacts", (t) => {
  const fixture = makeFixture();
  const runId = `publish-result-${process.pid}-${Date.now()}`;
  const clusterId = `publish-result-candidate-${process.pid}-${Date.now()}`;
  const reportPath = path.join(repoRoot, "results", "openclaw", `${clusterId}.md`);
  const runRecordPath = path.join(repoRoot, "results", "runs", `${runId}.json`);
  const previousReport = readIfExists(reportPath);
  const previousRunRecord = readIfExists(runRecordPath);
  t.after(() => {
    restore(reportPath, previousReport);
    restore(runRecordPath, previousRunRecord);
    fs.rmSync(fixture.root, { recursive: true, force: true });
  });

  fs.writeFileSync(
    path.join(fixture.runDir, "result.json"),
    `${JSON.stringify(
      {
        status: "planned",
        repo: "openclaw/openclaw",
        cluster_id: clusterId,
        mode: "plan",
        canonical_pr: "#501",
        summary: "Plan a narrow repair.",
        needs_human: ["wait for maintainer confirmation"],
        actions: [
          {
            target: "cluster:publish-result-candidate",
            action: "build_fix_artifact",
            status: "planned",
          },
          {
            target: "#777",
            action: "route_security",
            status: "planned",
            classification: "security_sensitive",
          },
        ],
        fix_artifact: {
          source_prs: ["https://github.com/openclaw/openclaw/pull/501"],
          summary: "Repair the contributor branch with the smallest compatible change.",
          pr_title: "fix: preserve repair candidate publication",
          pr_body: "Keep the branch repair scoped. token=super-secret-value",
          likely_files: ["scripts/publish-result.mjs", "test/publish-result.test.mjs"],
          validation_commands: ["node --test test/publish-result.test.mjs"],
          credit_notes: ["Preserve credit for #501."],
          repair_strategy: "repair_contributor_branch",
          giant_raw_context: "x".repeat(20_000),
          api_key: "should-not-be-published",
        },
      },
      null,
      2,
    )}\n`,
  );
  fs.writeFileSync(
    path.join(fixture.runDir, "fix-artifact.json"),
    `${JSON.stringify(
      {
        source_job: "jobs/openclaw/inbox/repair-501.md",
        canonical_candidates: [{ ref: "#501" }],
        item_matrix: [
          { ref: "#501", security_sensitive: false },
          { ref: "#777", security_sensitive: true },
        ],
      },
      null,
      2,
    )}\n`,
  );
  fs.writeFileSync(
    path.join(fixture.runDir, "fix-execution-report.json"),
    `${JSON.stringify(
      {
        actions: [
          {
            action: "repair_contributor_branch",
            status: "pushed",
            target: "#501",
            repair_strategy: "repair_contributor_branch",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const child = spawnSync(
    process.execPath,
    ["scripts/publish-result.mjs", fixture.runDir, "--run-id", runId, "--skip-aggregate", "--no-run-url"],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(child.status, 0, child.stderr || child.stdout);
  const report = fs.readFileSync(reportPath, "utf8");
  const candidate = JSON.parse(report.match(/## Repair Candidate\n\n```json\n([\s\S]*?)\n```/)?.[1] ?? "");

  assert.deepEqual(candidate.source_refs, ["#501", "#777"]);
  assert.equal(candidate.target, "#501");
  assert.equal(candidate.repair_strategy, "repair_contributor_branch");
  assert.deepEqual(candidate.planned_actions, ["build_fix_artifact"]);
  assert.equal(candidate.source_job, "jobs/openclaw/inbox/repair-501.md");
  assert.equal(candidate.security_sensitive, false);
  assert.deepEqual(candidate.security_routed_refs, ["#777"]);
  assert.deepEqual(candidate.needs_human, ["wait for maintainer confirmation"]);
  assert.equal(candidate.repair_status, "pushed");
  assert.equal(candidate.terminal, true);
  assert.match(candidate.pr_body, /\[REDACTED\]/);
  assert.doesNotMatch(report, /super-secret-value|should-not-be-published|giant_raw_context/);
  assert.deepEqual(candidate.validation_commands, ["node --test test/publish-result.test.mjs"]);
  assert.deepEqual(candidate.credit_notes, ["Preserve credit for #501."]);
});

test("publish-result leaves reports unchanged when fix-artifact.json is absent", (t) => {
  const fixture = makeFixture();
  const runId = `publish-result-no-artifact-${process.pid}-${Date.now()}`;
  const clusterId = `publish-result-no-artifact-${process.pid}-${Date.now()}`;
  const reportPath = path.join(repoRoot, "results", "openclaw", `${clusterId}.md`);
  const runRecordPath = path.join(repoRoot, "results", "runs", `${runId}.json`);
  const previousReport = readIfExists(reportPath);
  const previousRunRecord = readIfExists(runRecordPath);
  t.after(() => {
    restore(reportPath, previousReport);
    restore(runRecordPath, previousRunRecord);
    fs.rmSync(fixture.root, { recursive: true, force: true });
  });

  fs.writeFileSync(
    path.join(fixture.runDir, "result.json"),
    `${JSON.stringify(
      {
        status: "planned",
        repo: "openclaw/openclaw",
        cluster_id: clusterId,
        mode: "plan",
        actions: [],
        needs_human: [],
        fix_artifact: {
          summary: "A worker artifact without a planner sibling must not be promoted.",
        },
      },
      null,
      2,
    )}\n`,
  );

  const child = spawnSync(
    process.execPath,
    ["scripts/publish-result.mjs", fixture.runDir, "--run-id", runId, "--skip-aggregate", "--no-run-url"],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(child.status, 0, child.stderr || child.stdout);
  assert.doesNotMatch(fs.readFileSync(reportPath, "utf8"), /## Repair Candidate/);
});

test("publish-result records validated terminal review rejections separately from normal results", (t) => {
  const fixture = makeFixture();
  const runId = "27901628359-1-3";
  const recordPath = path.join(repoRoot, "results", "review-rejections", `${runId}.json`);
  const previousRecord = readIfExists(recordPath);
  t.after(() => {
    restore(recordPath, previousRecord);
    fs.rmSync(fixture.root, { recursive: true, force: true });
  });

  const terminalPath = path.join(fixture.root, "review-terminal.json");
  fs.writeFileSync(
    terminalPath,
    `${JSON.stringify(
      {
        rejections: [
          {
            run_id: runId,
            workflow_run_id: "27901628359",
            run_attempt: "1",
            matrix_index: "3",
            code: "high_risk_close_target",
            targets: ["#91444", "#91446"],
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const child = spawnSync(
    process.execPath,
    ["scripts/publish-result.mjs", fixture.root, "--review-terminal", terminalPath, "--skip-aggregate", "--no-run-url"],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(child.status, 0, child.stderr || child.stdout);
  assert.deepEqual(JSON.parse(fs.readFileSync(recordPath, "utf8")).targets, ["#91444", "#91446"]);
  assert.match(child.stdout, /"terminal_rejections": 1/);
});

test("publish-result preserves executed apply actions across later apply attempts", (t) => {
  const fixture = makeFixture();
  const runId = `publish-result-apply-attempts-${process.pid}-${Date.now()}`;
  const clusterId = `publish-result-apply-attempts-${process.pid}-${Date.now()}`;
  const reportPath = path.join(repoRoot, "results", "openclaw", `${clusterId}.md`);
  const runRecordPath = path.join(repoRoot, "results", "runs", `${runId}.json`);
  const closedRecordPath = path.join(repoRoot, "jobs", "openclaw", "closed", "90876.md");
  const previousReport = readIfExists(reportPath);
  const previousRunRecord = readIfExists(runRecordPath);
  const previousClosedRecord = readIfExists(closedRecordPath);
  t.after(() => {
    restore(reportPath, previousReport);
    restore(runRecordPath, previousRunRecord);
    restore(closedRecordPath, previousClosedRecord);
    fs.rmSync(fixture.root, { recursive: true, force: true });
  });

  fs.writeFileSync(
    path.join(fixture.runDir, "result.json"),
    `${JSON.stringify(
      {
        status: "planned",
        repo: "openclaw/openclaw",
        cluster_id: clusterId,
        mode: "autonomous",
        actions: [],
        needs_human: [],
      },
      null,
      2,
    )}\n`,
  );
  fs.writeFileSync(
    path.join(fixture.runDir, "apply-report.json"),
    `${JSON.stringify(
      {
        repo: "openclaw/openclaw",
        cluster_id: clusterId,
        actions: [
          {
            target: "#90876",
            action: "close_low_signal",
            status: "blocked",
            reason: "already closed",
          },
        ],
        apply_attempts: [
          {
            applied_at: "2026-06-17T00:00:00.000Z",
            actions: [
              {
                target: "#90876",
                action: "close_low_signal",
                status: "executed",
                reason: "closed by ProjectClownfish",
              },
            ],
          },
          {
            applied_at: "2026-06-17T00:01:00.000Z",
            actions: [
              {
                target: "#90876",
                action: "close_low_signal",
                status: "blocked",
                reason: "already closed",
              },
            ],
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const child = spawnSync(
    process.execPath,
    ["scripts/publish-result.mjs", fixture.runDir, "--run-id", runId, "--skip-aggregate", "--no-run-url"],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(child.status, 0, child.stderr || child.stdout);
  const record = JSON.parse(fs.readFileSync(runRecordPath, "utf8"));
  assert.deepEqual(record.apply_counts, { executed: 1 });
  assert.equal(record.apply_actions.length, 1);
  assert.equal(record.apply_actions[0].status, "executed");
  assert.deepEqual(
    record.apply_audit_actions.map((action) => [action.apply_attempt, action.status]),
    [
      [1, "executed"],
      [2, "blocked"],
    ],
  );
  assert.match(fs.readFileSync(reportPath, "utf8"), /## Apply Audit/);
  assert.match(fs.readFileSync(reportPath, "utf8"), /\| 2 \| apply \| #90876 \| close_low_signal \| blocked \| already closed \|/);
});

test("publish-result keeps external preflight child run records separate from parent run records", (t) => {
  const fixture = makeFixture();
  const runId = `publish-result-external-${process.pid}-${Date.now()}`;
  const parentClusterId = `publish-result-parent-${process.pid}-${Date.now()}`;
  const childClusterId = `external-merge-preflight-98354-${process.pid}`;
  const parentDir = path.join(fixture.root, "parent");
  const childDir = path.join(fixture.root, "external", "child");
  fs.mkdirSync(parentDir, { recursive: true });
  fs.mkdirSync(childDir, { recursive: true });

  const parentRunRecordPath = path.join(repoRoot, "results", "runs", `${runId}.json`);
  const childRunRecordPath = path.join(repoRoot, "results", "runs", `${runId}-${childClusterId}.json`);
  const parentReportPath = path.join(repoRoot, "results", "openclaw", `${parentClusterId}.md`);
  const childReportPath = path.join(repoRoot, "results", "openclaw", `${childClusterId}.md`);
  const closedRecordPath = path.join(repoRoot, "jobs", "openclaw", "closed", "98354.md");
  const previousParentRunRecord = readIfExists(parentRunRecordPath);
  const previousChildRunRecord = readIfExists(childRunRecordPath);
  const previousParentReport = readIfExists(parentReportPath);
  const previousChildReport = readIfExists(childReportPath);
  const previousClosedRecord = readIfExists(closedRecordPath);
  t.after(() => {
    restore(parentRunRecordPath, previousParentRunRecord);
    restore(childRunRecordPath, previousChildRunRecord);
    restore(parentReportPath, previousParentReport);
    restore(childReportPath, previousChildReport);
    restore(closedRecordPath, previousClosedRecord);
    fs.rmSync(fixture.root, { recursive: true, force: true });
  });

  fs.writeFileSync(
    path.join(parentDir, "result.json"),
    `${JSON.stringify(
      {
        status: "planned",
        repo: "openclaw/openclaw",
        cluster_id: parentClusterId,
        mode: "autonomous",
        summary: "Parent worker result.",
        actions: [
          {
            target: "#98354",
            action: "merge_candidate",
            status: "blocked",
            reason: "external_merge_preflight_required",
          },
        ],
        needs_human: [],
      },
      null,
      2,
    )}\n`,
  );
  fs.writeFileSync(
    path.join(childDir, "result.json"),
    `${JSON.stringify(
      {
        status: "planned",
        repo: "openclaw/openclaw",
        cluster_id: childClusterId,
        mode: "autonomous",
        summary: "External preflight result.",
        actions: [
          {
            target: "#98354",
            action: "merge_canonical",
            status: "planned",
            classification: "canonical",
          },
        ],
        needs_human: [],
      },
      null,
      2,
    )}\n`,
  );
  fs.writeFileSync(
    path.join(childDir, "apply-report.json"),
    `${JSON.stringify(
      {
        actions: [
          {
            target: "#98354",
            action: "merge_canonical",
            status: "executed",
            classification: "canonical",
            reason: "merged by projectclownfish",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
  fs.writeFileSync(
    path.join(parentDir, "cluster-plan.json"),
    `${JSON.stringify(
      {
        cluster_id: parentClusterId,
        source_job: "jobs/openclaw/inbox/external-preflight-parent.md",
      },
      null,
      2,
    )}\n`,
  );
  fs.writeFileSync(
    path.join(parentDir, "external-merge-preflight-report.json"),
    `${JSON.stringify(
      {
        actions: [
          {
            target: "#98354",
            expected_head_sha: "abc123",
            status: "blocked",
            apply_actions: [
              {
                target: "#98354",
                action: "merge_canonical",
                status: "blocked",
                retry_recommended: true,
                transient_error: "github_rate_limit",
                reason: "GitHub rate limit while applying action",
              },
            ],
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const child = spawnSync(
    process.execPath,
    ["scripts/publish-result.mjs", fixture.root, "--run-id", runId, "--skip-aggregate", "--no-run-url"],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(child.status, 0, child.stderr || child.stdout);
  const parentRecord = JSON.parse(fs.readFileSync(parentRunRecordPath, "utf8"));
  assert.equal(parentRecord.cluster_id, parentClusterId);
  assert.equal(parentRecord.source_job, "jobs/openclaw/inbox/external-preflight-parent.md");
  assert.equal(parentRecord.apply_actions[0].status, "blocked");
  assert.equal(parentRecord.apply_actions[0].retry_recommended, true);
  assert.equal(parentRecord.apply_actions[0].transient_error, "github_rate_limit");
  assert.equal(parentRecord.apply_actions[0].report_source, "external_merge_preflight");
  const childRecord = JSON.parse(fs.readFileSync(childRunRecordPath, "utf8"));
  assert.equal(childRecord.cluster_id, childClusterId);
  assert.deepEqual(childRecord.apply_counts, { executed: 1 });
  assert.equal(JSON.parse(fs.readFileSync(parentRunRecordPath, "utf8")).apply_counts.skipped, undefined);
  assert.match(fs.readFileSync(closedRecordPath, "utf8"), new RegExp(`cluster_id: "${childClusterId}"`));
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-publish-result-"));
  const runDir = path.join(root, "run");
  fs.mkdirSync(runDir, { recursive: true });
  return { root, runDir };
}

function readIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath) : null;
}

function restore(filePath, contents) {
  if (contents) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, contents);
  } else {
    fs.rmSync(filePath, { force: true });
  }
}
