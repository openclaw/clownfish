import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("promote-repair-candidates selects only the newest viable repair, dedupes jobs, and requires --write", () => {
  const fixture = makeFixture();
  writeReport(fixture.results, "eligible-old.md", {
    clusterId: "eligible-old",
    publishedAt: "2026-06-14T00:00:00.000Z",
    target: "#101",
  });
  writeReport(fixture.results, "eligible-new.md", {
    clusterId: "eligible-new",
    publishedAt: "2026-06-15T00:00:00.000Z",
    target: "#101",
    strategy: "replace_uneditable_branch",
  });
  writeReport(fixture.results, "terminal.md", {
    clusterId: "terminal",
    publishedAt: "2026-06-16T00:00:00.000Z",
    target: "#102",
    repairStatus: "pushed",
  });
  writeReport(fixture.results, "security.md", {
    clusterId: "security",
    publishedAt: "2026-06-16T00:00:00.000Z",
    target: "#103",
    security: true,
  });
  writeReport(fixture.results, "hold.md", {
    clusterId: "hold",
    publishedAt: "2026-06-16T00:00:00.000Z",
    target: "#104",
    hold: true,
  });
  writeReport(fixture.results, "broad.md", {
    clusterId: "broad",
    publishedAt: "2026-06-16T00:00:00.000Z",
    target: "#108",
    likelyFiles: Array.from({ length: 9 }, (_, index) => `src/broad-${index}.ts`),
  });
  writeReport(fixture.results, "dedupe.md", {
    clusterId: "dedupe",
    publishedAt: "2026-06-16T00:00:00.000Z",
    target: "#105",
  });
  writeReport(fixture.results, "plan-only-existing.md", {
    clusterId: "plan-only-existing",
    publishedAt: "2026-06-16T00:00:00.000Z",
    target: "#106",
  });
  writeReport(fixture.results, "classification-only-existing.md", {
    clusterId: "classification-only-existing",
    publishedAt: "2026-06-16T00:00:00.000Z",
    target: "#107",
  });
  fs.writeFileSync(
    path.join(fixture.existing, "already-queued.md"),
    `---
repo: openclaw/openclaw
cluster_id: existing-105
mode: autonomous
allowed_actions:
  - fix
candidates:
  - "#105"
---
`,
  );
  fs.writeFileSync(
    path.join(fixture.existing, "plan-only.md"),
    `---
repo: openclaw/openclaw
cluster_id: plan-only-106
mode: plan
allowed_actions:
  - fix
candidates:
  - "#106"
---
`,
  );
  fs.writeFileSync(
    path.join(fixture.existing, "classification-only.md"),
    `---
repo: openclaw/openclaw
cluster_id: classification-only-107
mode: autonomous
allowed_actions:
  - close
candidates:
  - "#107"
---
`,
  );

  const dryRun = runPromoter(fixture);
  assert.equal(dryRun.status, 0, dryRun.stderr || dryRun.stdout);
  const dryPayload = JSON.parse(dryRun.stdout);
  assert.equal(dryPayload.status, "dry_run");
  assert.deepEqual(dryPayload.generated.map((item) => item.target), ["#106", "#107", "#101"]);
  assert.equal(fs.readdirSync(fixture.out).length, 0);
  assert.deepEqual(
    new Map(dryPayload.skipped.map((item) => [item.target, item.reason])),
    new Map([
      ["#102", "repair already has a terminal outcome"],
      ["#103", "security-sensitive candidate"],
      ["#104", "candidate requires human review"],
      ["#105", "source ref already has a job"],
      ["#108", "repair candidate exceeds autonomous file limit (8)"],
    ]),
  );

  const write = runPromoter(fixture, "--write");
  assert.equal(write.status, 0, write.stderr || write.stdout);
  const payload = JSON.parse(write.stdout);
  assert.equal(payload.status, "written");
  assert.deepEqual(payload.generated.map((item) => item.target), ["#106", "#107", "#101"]);

  const job = fs.readFileSync(path.join(fixture.out, "repair-101-eligible-new-test.md"), "utf8");
  assert.match(job, /mode: autonomous/);
  assert.match(job, /allowed_actions:\n  - fix\n  - raise_pr/);
  assert.match(job, /blocked_actions:\n  - comment\n  - label\n  - close\n  - merge\n  - force_push\n  - bypass_checks/);
  assert.match(job, /require_human_for:\n  - security_sensitive\n  - active_author_followup\n  - broad_code_delta/);
  assert.doesNotMatch(job, /failing_checks|conflicting_prs/);
  assert.match(job, /repair_strategy: "replace_uneditable_branch"/);
  assert.match(job, /source report: .*eligible-new\.md/);
  assert.match(job, /#101/);
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-promote-repair-"));
  const results = path.join(root, "results");
  const out = path.join(root, "out");
  const existing = path.join(root, "existing");
  fs.mkdirSync(results, { recursive: true });
  fs.mkdirSync(out, { recursive: true });
  fs.mkdirSync(existing, { recursive: true });
  return { root, results, out, existing };
}

function writeReport(
  results,
  filename,
  {
    clusterId,
    publishedAt,
    target,
    strategy = "repair_contributor_branch",
    repairStatus = "",
    security = false,
    hold = false,
    likelyFiles = ["src/example.ts"],
  },
) {
  const candidate = {
    target,
    source_refs: [target],
    repair_strategy: strategy,
    planned_action: "build_fix_artifact",
    summary: `Repair ${target} narrowly.`,
    pr_title: `fix: repair ${target}`,
    pr_body: `Preserve credit for ${target}.`,
    likely_files: likelyFiles,
    validation_commands: ["pnpm test:serial src/example.test.ts"],
    credit_notes: [`Preserve source credit for ${target}.`],
    source_job: `jobs/openclaw/inbox/${clusterId}.md`,
    repair_status: repairStatus,
    security_sensitive: security,
    needs_human: hold ? ["await maintainer decision"] : [],
  };
  fs.writeFileSync(
    path.join(results, filename),
    `---
repo: "openclaw/openclaw"
cluster_id: "${clusterId}"
mode: "plan"
run_id: "${clusterId}-run"
result_status: "planned"
published_at: "${publishedAt}"
needs_human_count: ${hold ? 1 : 0}
fix_executed: 0
---

# ${clusterId}

## Repair Candidate

\`\`\`json
${JSON.stringify(candidate, null, 2)}
\`\`\`

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| ${target} | build_fix_artifact | planned | canonical | narrow repair |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
`,
    "utf8",
  );
}

function runPromoter(fixture, ...extraArgs) {
  return spawnSync(
    process.execPath,
    [
      "scripts/promote-repair-candidates.mjs",
      "--repo",
      "openclaw/openclaw",
      "--results-dir",
      fixture.results,
      "--out",
      fixture.out,
      "--existing-dir",
      fixture.existing,
      "--suffix",
      "test",
      "--json",
      ...extraArgs,
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );
}
