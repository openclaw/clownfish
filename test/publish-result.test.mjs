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
