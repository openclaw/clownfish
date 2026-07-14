import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const EXPECTED_HEAD_SHA = "a".repeat(40);
const CHANGED_HEAD_SHA = "b".repeat(40);
const CURRENT_MAIN_SHA = "c".repeat(40);
const MOVED_MAIN_SHA = "78".repeat(20);
const SECOND_MOVED_MAIN_SHA = "9a".repeat(20);
const TEST_MERGE_SHA = "d".repeat(40);
const SQUASH_COMMIT_SHA = "6".repeat(40);
const SQUASH_TREE_SHA = "0".repeat(40);
const BASE_TREE_SHA = "e".repeat(40);
const MERGE_TREE_SHA = "f".repeat(40);
const CURRENT_MAIN_TREE_SHA = "8".repeat(40);
const REVIEWED_BASE_SHA = "4".repeat(40);
const REVIEWED_BASE_TREE_SHA = "5".repeat(40);
const REVIEWED_MERGE_TREE_SHA = "ab".repeat(20);
const BASE_BLOB_SHA = "1".repeat(40);
const MERGE_BLOB_SHA = "2".repeat(40);
const ADOPTION_BASE_CONTENT = "reviewed base content\n";
const ADOPTION_MERGE_CONTENT = "reviewed merge content\n";
const ADOPTION_DOC_CONTENT = "unrelated main documentation\n";
const ADOPTION_BASE_BLOB_SHA = gitBlobSha(ADOPTION_BASE_CONTENT);
const ADOPTION_MERGE_BLOB_SHA = gitBlobSha(ADOPTION_MERGE_CONTENT);
const ADOPTION_DOC_BLOB_SHA = gitBlobSha(ADOPTION_DOC_CONTENT);
const EFFECTIVE_DIFF_SHA256 = createHash("sha256")
  .update(
    `${JSON.stringify([
      "src/cli/effective.ts",
      `100644:blob:${BASE_BLOB_SHA}`,
      `100644:blob:${MERGE_BLOB_SHA}`,
    ])}\n`,
  )
  .digest("hex");
const ADOPTION_EFFECTIVE_DIFF_SHA256 = createHash("sha256")
  .update(
    `${JSON.stringify([
      "src/cli/effective.ts",
      `100644:blob:${ADOPTION_BASE_BLOB_SHA}`,
      `100644:blob:${ADOPTION_MERGE_BLOB_SHA}`,
    ])}\n`,
  )
  .digest("hex");

function gitBlobSha(content) {
  return createHash("sha1")
    .update(`blob ${Buffer.byteLength(content)}\0`)
    .update(content)
    .digest("hex");
}

test("apply-result maps the applicator token into gh CLI auth", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "apply-result.mjs"), "utf8");

  assert.match(source, /if \(!env\.GH_TOKEN && env\.CLOWNFISH_GH_TOKEN\) env\.GH_TOKEN = env\.CLOWNFISH_GH_TOKEN;/);
});

test("apply-result never refreshes contributor branches and binds authorization to the test merge", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "apply-result.mjs"), "utf8");

  assert.doesNotMatch(source, /update-branch|updatePullRequestBranch/);
  assert.match(source, /CLOWNFISH_CHECKS_GH_TOKEN/);
  assert.match(source, /repos\/\$\{repo\}\/check-runs/);
});

test("apply-result allows explicit current-main fixed-by close without candidate_fix", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "planned");
  assert.equal(report.actions[0].reason, "dry run");
  assert.equal(report.actions[0].canonical, "#60063");
  assert.equal(report.actions[0].candidate_fix, undefined);
});

test("apply-result strips ANSI from GitHub CLI JSON", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir, { ansi: true });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "planned");
});

test("apply-result keeps fixed-by close blocked without explicit unmerged-fix opt-in", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: false }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /fixed_by_candidate close requires a merged fix PR/);
});

test("apply-result allows a candidate fix hydrated in the preflight plan", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJsonWithHydratedCandidate(), null, 2)}\n`);
  fs.writeFileSync(
    path.join(tmp, "cluster-plan.json"),
    `${JSON.stringify(
      {
        items: [
          {
            ref: "#60064",
            kind: "pull_request",
            state: "closed",
            updated_at: "2026-06-11T05:07:30Z",
            hydration_error: null,
            security_sensitive: false,
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "planned");
  assert.equal(report.actions[0].candidate_fix, "#60064");
});

test("apply-result blocks a candidate fix with failed preflight hydration", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJsonWithHydratedCandidate(), null, 2)}\n`);
  fs.writeFileSync(
    path.join(tmp, "cluster-plan.json"),
    `${JSON.stringify(
      {
        items: [
          {
            ref: "#60064",
            kind: "pull_request",
            state: "closed",
            updated_at: "2026-06-11T05:07:30Z",
            hydration_error: "pull request details unavailable",
            security_sensitive: false,
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /candidate fix is not a hydrated close reference/);
});

test("apply-result treats closed target with matching marker as idempotently executed", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir, { issueState: "closed", includeExistingMarker: true });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].reason, "already closed with matching projectclownfish comment");
  assert.equal(report.actions[0].live_state, "closed");
});

test("apply-result blocks MEMBER-owned close targets before close-comment handling", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeGhStub(binDir, { authorAssociation: "MEMBER" });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, { dryRun: false, callLogPath });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].reason, "target author association is MEMBER");
  const ghCalls = fs
    .readFileSync(callLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  assert.equal(ghCalls.some((args) => args[1].includes("/comments")), false);
});

test("apply-result blocks high-risk close targets before comment or close mutation", () => {
  for (const label of ["merge-risk: availability", "clawsweeper:automerge"]) {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
    const binDir = path.join(tmp, "bin");
    const callLogPath = path.join(tmp, "gh-calls.jsonl");
    fs.mkdirSync(binDir, { recursive: true });
    fs.writeFileSync(callLogPath, "");
    writeGhStub(binDir, { labels: [label] });

    const jobPath = path.join(tmp, "job.md");
    const resultPath = path.join(tmp, "result.json");
    const reportPath = path.join(tmp, "apply-report.json");
    fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
    fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);

    const result = apply(jobPath, resultPath, reportPath, binDir, { dryRun: false, callLogPath });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    assert.equal(report.actions[0].status, "blocked");
    assert.equal(report.actions[0].reason, `target has blocked live label: ${label}`);
    const ghCalls = fs
      .readFileSync(callLogPath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line));
    assert.equal(
      ghCalls.some((args) => args[1].includes("/comments") && args.includes("POST")),
      false,
      JSON.stringify(ghCalls),
    );
    assert.equal(
      ghCalls.some((args) => args[0] === "pr" && args[1] === "close"),
      false,
      JSON.stringify(ghCalls),
    );
  }
});

test("apply-result retains prior reports as apply attempts", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);
  fs.writeFileSync(
    reportPath,
    `${JSON.stringify(
      {
        repo: "openclaw/openclaw",
        cluster_id: "ghcrawl-199237-agentic-merge",
        dry_run: false,
        result_path: "result.json",
        applied_at: "2026-06-17T00:00:00.000Z",
        actions: [{ target: "#60063", action: "close_fixed_by_candidate", status: "executed" }],
      },
      null,
      2,
    )}\n`,
  );

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "planned");
  assert.equal(report.apply_attempts.length, 2);
  assert.equal(report.apply_attempts[0].actions[0].status, "executed");
  assert.equal(report.apply_attempts[1].actions[0].status, "planned");
});

test("apply-result records primary GitHub rate limits as retryable blocks", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeRateLimitedGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, jobMarkdown({ allowUnmergedFixClose: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(resultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].retry_recommended, true);
  assert.equal(report.actions[0].transient_error, "github_rate_limit");
  assert.match(report.actions[0].reason, /GitHub rate limit/);
});

test("apply-result refuses worker-authored merge proof when deterministic external preflight is required", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, { headSha: EXPECTED_HEAD_SHA });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown({ requireExternalPreflight: true }));
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].reason, "merge must be applied by the deterministic external preflight");
  assert.equal(fs.readFileSync(callLogPath, "utf8"), "");
});

test("apply-result tolerates stale PR base when exact head remains mergeable with clean checks", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeStaleMergeGhStub(binDir);

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /CLOWNFISH_ALLOW_MERGE=1/);
});

test("apply-result blocks a stale PR base when latest checks are not clean", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeStaleMergeGhStub(binDir, { statusCheckRollup: [{ name: "CI", status: "COMPLETED", conclusion: "FAILURE" }] });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /checks are not clean/);
});

test("apply-result blocks failing legacy status contexts", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeStaleMergeGhStub(binDir, {
    statusCheckRollup: [{ context: "legacy-ci", state: "FAILURE" }],
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    env: {
      CLOWNFISH_APPLY_MERGEABLE_POLL_ATTEMPTS: "1",
      CLOWNFISH_APPLY_MERGEABLE_POLL_DELAY_MS: "0",
    },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /checks are not clean: legacy-ci: FAILURE/);
});

test("apply-result blocks a merge when the PR head changed after worker review", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, { headSha: CHANGED_HEAD_SHA });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, { mergeStatePath });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /head changed since worker review/);
  assert.equal(report.actions[0].expected_head_sha, EXPECTED_HEAD_SHA);
  assert.equal(report.actions[0].live_head_sha, CHANGED_HEAD_SHA);
});

test("apply-result accepts trusted metadata drift but still requires deterministic merge preflight", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    issueUpdatedAt: "2026-06-11T06:11:25Z",
    issueComments: [
      {
        user: { login: "clawsweeper[bot]" },
        created_at: "2026-06-11T05:00:00Z",
        updated_at: "2026-06-11T06:11:25Z",
        body: [
          "Codex review: needs maintainer review before merge.",
          "",
          "**Merge readiness**",
          "Result: ready for maintainer review.",
          "",
          "**Security**",
          "Cleared: no security-sensitive surface.",
          "",
          `<!-- clawsweeper-verdict:needs-human item=60063 sha=${EXPECTED_HEAD_SHA} confidence=high reviewed_at=2026-06-11T06:10:16.679Z -->`,
        ].join("\n"),
      },
    ],
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].reason, "merge execution requires deterministic external preflight");
});

test("apply-result blocks untrusted metadata drift even when the head is unchanged", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    issueUpdatedAt: "2026-06-11T06:11:25Z",
    issueComments: [
      {
        user: { login: "reviewer" },
        created_at: "2026-06-11T06:11:25Z",
        updated_at: "2026-06-11T06:11:25Z",
        body: "Please take another look before merging.",
      },
    ],
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].reason, "target changed since worker review");
});

for (const [name, body] of [
  [
    "without an exact ready verdict",
    [
      "Result: changes requested.",
      `<!-- clawsweeper-verdict:needs-human item=60063 sha=${EXPECTED_HEAD_SHA} confidence=high -->`,
    ].join("\n"),
  ],
  [
    "with contradictory durable evidence",
    [
      "Result: ready for maintainer review.",
      "Result: changes requested.",
      `<!-- clawsweeper-verdict:needs-human item=60063 sha=${EXPECTED_HEAD_SHA} confidence=high -->`,
      `<!-- clawsweeper-action:fix-required item=60063 sha=${EXPECTED_HEAD_SHA} confidence=high -->`,
    ].join("\n"),
  ],
  [
    "with malformed confidence",
    [
      "Result: ready for maintainer review.",
      `<!-- clawsweeper-verdict:needs-human item=60063 sha=${EXPECTED_HEAD_SHA} confidence=high-risk -->`,
    ].join("\n"),
  ],
  [
    "with duplicate marker attributes",
    [
      "Result: ready for maintainer review.",
      `<!-- clawsweeper-verdict:needs-human item=60063 sha=${EXPECTED_HEAD_SHA} confidence=low confidence=high -->`,
    ].join("\n"),
  ],
]) {
  test(`apply-result blocks ClawSweeper metadata drift ${name}`, () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
    const binDir = path.join(tmp, "bin");
    fs.mkdirSync(binDir, { recursive: true });
    writeReadyMergeGhStub(binDir, {
      headSha: EXPECTED_HEAD_SHA,
      issueUpdatedAt: "2026-06-11T06:11:25Z",
      issueComments: [
        {
          user: { login: "clawsweeper[bot]" },
          created_at: "2026-06-11T05:00:00Z",
          updated_at: "2026-06-11T06:11:25Z",
          body,
        },
      ],
    });

    const jobPath = path.join(tmp, "job.md");
    const resultPath = path.join(tmp, "result.json");
    const reportPath = path.join(tmp, "apply-report.json");
    fs.writeFileSync(jobPath, mergeJobMarkdown());
    fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

    const result = apply(jobPath, resultPath, reportPath, binDir);

    assert.equal(result.status, 0, result.stderr || result.stdout);
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    assert.equal(report.actions[0].status, "blocked");
    assert.equal(report.actions[0].reason, "target changed since worker review");
  });
}

test("apply-result refuses executable generic merges without deterministic external binding", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, { headSha: EXPECTED_HEAD_SHA });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].reason, "merge execution requires deterministic external preflight");
  assert.equal(report.actions[0].expected_head_sha, EXPECTED_HEAD_SHA);
  const ghCalls = fs
    .readFileSync(callLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  assert.equal(ghCalls.some((args) => args[0] === "pr" && args[1] === "merge"), false);
});

for (const mergeStateStatus of ["BLOCKED", "BEHIND"]) {
  test(`apply-result allows ${mergeStateStatus.toLowerCase()} state for an exact-bound external merge`, () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
    const binDir = path.join(tmp, "bin");
    const authLogPath = path.join(tmp, "gh-auth.jsonl");
    const callLogPath = path.join(tmp, "gh-calls.jsonl");
    const mergeStatePath = path.join(tmp, "merge-state");
    fs.mkdirSync(binDir, { recursive: true });
    fs.writeFileSync(authLogPath, "");
    fs.writeFileSync(callLogPath, "");
    writeReadyMergeGhStub(binDir, {
      headSha: EXPECTED_HEAD_SHA,
      externalBinding: true,
      mergeStateStatus,
    });

    const jobPath = path.join(tmp, "job.md");
    const resultPath = path.join(tmp, "result.json");
    const reportPath = path.join(tmp, "apply-report.json");
    fs.writeFileSync(jobPath, mergeJobMarkdown());
    fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

    const result = apply(jobPath, resultPath, reportPath, binDir, {
      dryRun: false,
      allowMerge: true,
      callLogPath,
      mergeStatePath,
      env: { GH_AUTH_LOG: authLogPath },
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    assert.equal(report.actions[0].status, "executed");
    assert.equal(report.actions[0].effective_diff_sha256, EFFECTIVE_DIFF_SHA256);
    assert.equal(report.actions[0].verified_main_sha, CURRENT_MAIN_SHA);
    assert.equal(report.actions[0].ci_gate.name, "openclaw/ci-gate");
    assert.equal(report.actions[0].ci_gate.head_sha, EXPECTED_HEAD_SHA);
    assert.equal(report.actions[0].ci_gate.app_id, 15368);
    const ghCalls = fs
      .readFileSync(callLogPath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line));
    const gateIndexes = ghCalls
      .map((args, index) => ({ args, index }))
      .filter(({ args }) => args[1]?.startsWith(`repos/openclaw/openclaw/commits/${EXPECTED_HEAD_SHA}/check-runs?`))
      .map(({ index }) => index);
    const finalIssueIndex = ghCalls.findLastIndex(
      (args) => args[0] === "api" && args[1] === "repos/openclaw/openclaw/issues/60063",
    );
    const mergeIndex = ghCalls.findIndex((args) => args[0] === "pr" && args[1] === "merge");
    const mergeAuth = fs
      .readFileSync(authLogPath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line))
      .find(({ args }) => args[0] === "pr" && args[1] === "merge");
    assert.ok(gateIndexes.length >= 2);
    assert.ok(finalIssueIndex > gateIndexes.at(-1));
    assert.ok(mergeIndex > gateIndexes.at(-1));
    assert.equal(mergeAuth.ghToken, "fixture");
    assert.equal(ghCalls.some((args) => args[1]?.endsWith("/update-branch")), false);
    assert.equal(
      ghCalls.some(
        (args) =>
          args[0] === "api" &&
          args[1] === "repos/openclaw/openclaw/check-runs" &&
          args.includes("POST"),
      ),
      true,
    );
    assert.equal(report.actions[0].exact_merge_check.head_sha, TEST_MERGE_SHA);
  });
}

test("apply-result replaces a stale failed exact-merge check without refreshing the branch", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeStateStatus: "BLOCKED",
    statusCheckRollup: [
      { name: "CI", status: "COMPLETED", conclusion: "SUCCESS" },
      {
        name: "clownfish/exact-merge",
        status: "COMPLETED",
        conclusion: "FAILURE",
      },
    ],
  });
  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].exact_merge_check.head_sha, TEST_MERGE_SHA);
  const ghCalls = readCallLog(callLogPath);
  assert.equal(ghCalls.some((args) => args[1]?.endsWith("/update-branch")), false);
});

test("apply-result blocks external merge when the strict exact-merge rule is missing", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    exactMergeRule: false,
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /main must strictly require clownfish\/exact-merge/);
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result blocks external merge when the Clownfish App can bypass the exact rule", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    exactMergeAppBypass: true,
  });
  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /must be enforced without a GitHub App 3535277 bypass/);
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result blocks external merge when ruleset bypass actors are hidden", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const authLogPath = path.join(tmp, "gh-auth.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(authLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    exactMergeBypassActorsVisible: false,
  });
  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
    env: {
      CLOWNFISH_RULES_GH_TOKEN: "rules-test-token",
      GH_AUTH_LOG: authLogPath,
    },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /ruleset bypass actors are unavailable/);
  assert.equal(fs.existsSync(mergeStatePath), false);
  const rulesCalls = fs
    .readFileSync(authLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line))
    .filter(({ args }) => args[1]?.includes("/rules"));
  assert.ok(rulesCalls.length >= 2);
  assert.equal(rulesCalls.every(({ ghToken }) => ghToken === "rules-test-token"), true);
});

for (const gateCase of [
  { name: "failed", options: { ciGateConclusion: "failure" }, reason: /failure/ },
  { name: "wrong App", options: { ciGateAppId: 3535277 }, reason: /has no openclaw\/ci-gate/ },
  {
    name: "stale",
    options: { ciGateCompletedAt: "2026-06-09T05:30:00Z" },
    reason: /no successful canonical run within 24 hours/,
  },
]) {
  test(`apply-result blocks an external merge with a ${gateCase.name} exact-head gate`, () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
    const binDir = path.join(tmp, "bin");
    const mergeStatePath = path.join(tmp, "merge-state");
    fs.mkdirSync(binDir, { recursive: true });
    writeReadyMergeGhStub(binDir, {
      headSha: EXPECTED_HEAD_SHA,
      externalBinding: true,
      ...gateCase.options,
    });
    const jobPath = path.join(tmp, "job.md");
    const resultPath = path.join(tmp, "result.json");
    const reportPath = path.join(tmp, "apply-report.json");
    fs.writeFileSync(jobPath, mergeJobMarkdown());
    fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

    const result = apply(jobPath, resultPath, reportPath, binDir, {
      dryRun: false,
      allowMerge: true,
      mergeStatePath,
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    assert.equal(report.actions[0].status, "blocked");
    assert.match(report.actions[0].reason, gateCase.reason);
    assert.equal(fs.existsSync(mergeStatePath), false);
  });
}

test("apply-result reuses a successful canonical CI run when newer reruns fail or remain pending", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    statusCheckRollup: [
      { name: "CI", status: "COMPLETED", conclusion: "SUCCESS" },
      { name: "openclaw/ci-gate", status: "COMPLETED", conclusion: "FAILURE" },
    ],
    ciGateChecks: [
      {
        id: 7073,
        name: "openclaw/ci-gate",
        head_sha: EXPECTED_HEAD_SHA,
        status: "in_progress",
        conclusion: null,
        completed_at: null,
        details_url: "https://github.com/openclaw/openclaw/actions/runs/7073/job/7073",
        app: { id: 15368 },
      },
      {
        id: 7072,
        name: "openclaw/ci-gate",
        head_sha: EXPECTED_HEAD_SHA,
        status: "completed",
        conclusion: "failure",
        completed_at: "2026-06-11T05:45:00Z",
        details_url: "https://github.com/openclaw/openclaw/actions/runs/7072/job/7072",
        app: { id: 15368 },
      },
      {
        id: 7071,
        name: "openclaw/ci-gate",
        head_sha: EXPECTED_HEAD_SHA,
        status: "completed",
        conclusion: "success",
        completed_at: "2026-06-11T05:30:00Z",
        details_url: "https://github.com/openclaw/openclaw/actions/runs/7070/job/7071",
        app: { id: 15368 },
      },
    ],
  });
  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].ci_gate.check_run_id, 7071);
  assert.equal(report.actions[0].ci_gate.run_id, 7070);
});

for (const runState of [
  { name: "another workflow job failed", status: "completed", conclusion: "failure" },
  { name: "another workflow job remains pending", status: "in_progress", conclusion: null },
  {
    name: "the workflow path includes its Git ref suffix",
    status: "completed",
    conclusion: "success",
    path: ".github/workflows/ci.yml@main",
  },
]) {
  test(`apply-result trusts the green canonical gate when ${runState.name}`, () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
    const binDir = path.join(tmp, "bin");
    const mergeStatePath = path.join(tmp, "merge-state");
    fs.mkdirSync(binDir, { recursive: true });
    writeReadyMergeGhStub(binDir, {
      headSha: EXPECTED_HEAD_SHA,
      externalBinding: true,
      ciRunStatus: runState.status,
      ciRunConclusion: runState.conclusion,
      ciRunPath: runState.path,
    });
    const jobPath = path.join(tmp, "job.md");
    const resultPath = path.join(tmp, "result.json");
    const reportPath = path.join(tmp, "apply-report.json");
    fs.writeFileSync(jobPath, mergeJobMarkdown());
    fs.writeFileSync(
      resultPath,
      `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`,
    );

    const result = apply(jobPath, resultPath, reportPath, binDir, {
      dryRun: false,
      allowMerge: true,
      mergeStatePath,
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    assert.equal(report.actions[0].status, "executed");
    assert.equal(report.actions[0].ci_gate.workflow_run_status, runState.status);
    assert.equal(report.actions[0].ci_gate.workflow_run_conclusion, runState.conclusion);
  });
}

test("apply-result finds a fresh canonical CI success on a later check-run page", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    ciGatePages: [
      [
        {
          id: 7072,
          name: "openclaw/ci-gate",
          head_sha: EXPECTED_HEAD_SHA,
          status: "completed",
          conclusion: "failure",
          completed_at: "2026-06-11T05:45:00Z",
          details_url: "https://github.com/openclaw/openclaw/actions/runs/7072/job/7072",
          app: { id: 15368 },
        },
      ],
      [
        {
          id: 7071,
          name: "openclaw/ci-gate",
          head_sha: EXPECTED_HEAD_SHA,
          status: "completed",
          conclusion: "success",
          completed_at: "2026-06-11T05:30:00Z",
          details_url: "https://github.com/openclaw/openclaw/actions/runs/7070/job/7071",
          app: { id: 15368 },
        },
      ],
    ],
  });
  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].ci_gate.check_run_id, 7071);
  const pageCall = readCallLog(callLogPath).find((args) =>
    args[1]?.startsWith(`repos/openclaw/openclaw/commits/${EXPECTED_HEAD_SHA}/check-runs?`),
  );
  assert.ok(pageCall.includes("--paginate"));
  assert.ok(pageCall.includes("--slurp"));
});

for (const workflowCase of [
  {
    name: "wrong CI workflow id",
    options: { ciRunWorkflowId: 123 },
  },
  {
    name: "wrong CI workflow path",
    options: { ciRunPath: ".github/workflows/other.yml" },
  },
  {
    name: "empty CI workflow ref suffix",
    options: { ciRunPath: ".github/workflows/ci.yml@" },
  },
  {
    name: "wrong PR binding",
    options: { ciRunPrNumber: 60064 },
  },
  {
    name: "wrong exact head",
    options: { ciRunHeadSha: CHANGED_HEAD_SHA },
  },
]) {
  test(`apply-result blocks an external merge with a ${workflowCase.name}`, () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
    const binDir = path.join(tmp, "bin");
    const mergeStatePath = path.join(tmp, "merge-state");
    fs.mkdirSync(binDir, { recursive: true });
    writeReadyMergeGhStub(binDir, {
      headSha: EXPECTED_HEAD_SHA,
      externalBinding: true,
      ...workflowCase.options,
    });
    const jobPath = path.join(tmp, "job.md");
    const resultPath = path.join(tmp, "result.json");
    const reportPath = path.join(tmp, "apply-report.json");
    fs.writeFileSync(jobPath, mergeJobMarkdown());
    fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

    const result = apply(jobPath, resultPath, reportPath, binDir, {
      dryRun: false,
      allowMerge: true,
      mergeStatePath,
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    assert.equal(report.actions[0].status, "blocked");
    assert.match(report.actions[0].reason, /not bound to the canonical completed CI workflow/);
    assert.equal(fs.existsSync(mergeStatePath), false);
  });
}

test("apply-result blocks main drift when adoption evidence is missing", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    reviewedBaseSha: REVIEWED_BASE_SHA,
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(
    resultPath,
    `${JSON.stringify(
      mergeResultJson({
        externalBinding: true,
        reviewedBaseSha: REVIEWED_BASE_SHA,
        baseAdoptionManifest: null,
      }),
      null,
      2,
    )}\n`,
  );

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(
    report.actions[0].reason,
    "external merge preflight base adoption manifest is missing or unsupported",
  );
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result blocks PRs that edit the canonical CI workflow", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  const mergeResult = mergeResultJson({ externalBinding: true });
  mergeResult.merge_preflight[0].base_adoption_manifest.effective_paths.push(
    ".github/workflows/ci.yml",
  );
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResult, null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(
    report.actions[0].reason,
    ".github/workflows/ci.yml changed in this PR; exact-head CI requires maintainer handling",
  );
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result adopts newer fast-forward main without updating the reviewed branch", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(
    binDir,
    adoptionStubOptions({
      adoptionDriftPath: "src/other/unrelated.ts",
      currentMainExtraPath: "src/other/unrelated.ts",
    }),
  );

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(adoptionMergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].reviewed_head_sha, EXPECTED_HEAD_SHA);
  assert.equal(report.actions[0].merge_head_sha, EXPECTED_HEAD_SHA);
  assert.equal(report.actions[0].verified_main_sha, CURRENT_MAIN_SHA);
  assert.equal(report.actions[0].base_adoption.status, "adopted");
  assert.equal(report.actions[0].base_adoption.reviewed_base_sha, REVIEWED_BASE_SHA);
  assert.equal(report.actions[0].base_adoption.adopted_base_sha, CURRENT_MAIN_SHA);
  assert.equal(report.actions[0].base_adoption.synthetic_merge_tree_sha, MERGE_TREE_SHA);
  assert.equal(report.actions[0].base_adoption.context_proof.review_context_unchanged, true);
  assert.match(report.actions[0].base_adoption.github_state_sha256, /^[0-9a-f]{64}$/);
  assert.match(report.actions[0].base_adoption.authorization_sha256, /^[0-9a-f]{64}$/);
  const ghCalls = readCallLog(callLogPath);
  assert.equal(ghCalls.some((args) => args[1]?.endsWith("/update-branch")), false);
  const mergeArgs = ghCalls.find((args) => args[0] === "pr" && args[1] === "merge");
  assert.deepEqual(mergeArgs.slice(-3), [
    "--squash",
    "--match-head-commit",
    EXPECTED_HEAD_SHA,
  ]);
  assert.equal(report.actions[0].ci_gate.name, "openclaw/ci-gate");
});

test("apply-result rejects duplicate base adoption manifest evidence", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, adoptionStubOptions());

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  const mergeResult = adoptionMergeResultJson();
  mergeResult.merge_preflight[0].base_adoption_manifest.affected_areas.push("src/cli");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResult, null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /base adoption manifest effective diff evidence is incomplete/);
  assert.equal(fs.existsSync(mergeStatePath), false);
});

for (const rejection of [
  {
    name: "reviewed path overlap",
    options: { adoptionDriftPath: "src/cli/effective.ts" },
    reason: /changed reviewed path/,
  },
  {
    name: "review context overlap",
    options: { adoptionDriftPath: "src/cli/context.ts" },
    reason: /overlapping_affected_areas/,
  },
  {
    name: "validation control drift",
    options: { adoptionDriftPath: "package.json" },
    reason: /validation_control_file_drift/,
  },
  {
    name: "nonlinear main movement",
    options: { adoptionLinear: false },
    reason: /changed non-linearly/,
  },
  {
    name: "excessive main movement",
    options: { adoptionDriftCommitCount: 21 },
    reason: /bounded review-reuse window/,
  },
  {
    name: "target-native validation failure",
    options: { adoptionValidationFailure: true },
    reason: /adopted-main validation failure/,
  },
  {
    name: "fresh actionable comment",
    options: {
      issueComments: [
        {
          user: { login: "reviewer" },
          body: "Please do not merge this yet.",
          created_at: "2026-06-11T05:08:00Z",
          updated_at: "2026-06-11T05:08:00Z",
        },
      ],
    },
    reason: /actionable top-level issue comment/,
  },
  {
    name: "fresh risk label",
    options: { adoptionLabels: [{ name: "merge-risk: availability" }] },
    reason: /blocked live label/,
  },
]) {
  test(`apply-result rejects newer-main adoption for ${rejection.name}`, () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
    const binDir = path.join(tmp, "bin");
    const mergeStatePath = path.join(tmp, "merge-state");
    fs.mkdirSync(binDir, { recursive: true });
    writeReadyMergeGhStub(binDir, adoptionStubOptions(rejection.options));

    const jobPath = path.join(tmp, "job.md");
    const resultPath = path.join(tmp, "result.json");
    const reportPath = path.join(tmp, "apply-report.json");
    fs.writeFileSync(jobPath, mergeJobMarkdown());
    fs.writeFileSync(resultPath, `${JSON.stringify(adoptionMergeResultJson(), null, 2)}\n`);

    const result = apply(jobPath, resultPath, reportPath, binDir, {
      dryRun: false,
      allowMerge: true,
      mergeStatePath,
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    assert.equal(report.actions[0].status, "blocked");
    assert.match(report.actions[0].reason, rejection.reason);
    assert.equal(fs.existsSync(mergeStatePath), false);
  });
}

test("apply-result rejects a changed effective fingerprint during newer-main adoption", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(
    binDir,
    adoptionStubOptions({ mergeBlobSha: "3".repeat(40) }),
  );

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(adoptionMergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /effective merge (?:diff|fingerprint) changed/);
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result rejects an adopted squash whose parent is not the authorized main", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(
    binDir,
    adoptionStubOptions({ squashParentSha: REVIEWED_BASE_SHA }),
  );

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(adoptionMergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].reason, "actual squash commit is not based on the authorized main SHA");
  assert.equal(fs.existsSync(mergeStatePath), true);
});

test("apply-result does not retry when GitHub reports merge ref movement", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeFailure: "Base branch was modified. Review and try the merge again.",
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
    mergeStatePath,
    env: { CLOWNFISH_GH_RETRY_BASE_MS: "1" },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].retry_recommended, true);
  const ghCalls = fs
    .readFileSync(callLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  assert.equal(
    ghCalls.filter((args) => args[0] === "pr" && args[1] === "merge").length,
    1,
  );
});

test("apply-result does not retry merge-time HTTP 503 responses", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeFailure: "HTTP 503: Service Unavailable",
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
    mergeStatePath,
    env: { CLOWNFISH_GH_RETRY_BASE_MS: "1" },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /merge command failed without retry/);
  const ghCalls = fs
    .readFileSync(callLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  assert.equal(
    ghCalls.filter((args) => args[0] === "pr" && args[1] === "merge").length,
    1,
  );
});

test("apply-result requires post-merge GitHub proof", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeSucceedsWithoutState: true,
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].reason, "merge command returned without a verified merged pull request");
  const ghCalls = fs
    .readFileSync(callLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  assert.equal(
    ghCalls.filter(
      (args) =>
        args[0] === "api" &&
        args[1]?.startsWith(`repos/openclaw/openclaw/commits/${EXPECTED_HEAD_SHA}/check-runs?`),
    ).length,
    2,
  );
  assert.equal(
    ghCalls.some(
      (args) => args[0] === "api" && args[1] === "repos/openclaw/openclaw/check-runs",
    ),
    true,
  );
  const exactCheck = JSON.parse(
    fs.readFileSync(path.join(binDir, "exact-check-state.json"), "utf8"),
  );
  assert.equal(exactCheck.head_sha, TEST_MERGE_SHA);
  assert.equal(exactCheck.status, "completed");
  assert.equal(exactCheck.conclusion, "failure");
});

test("apply-result verifies the actual squash commit tree after merge", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    squashBlobSha: "9".repeat(40),
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].reason, "actual squash commit diff does not match the reviewed effective diff");
  assert.equal(fs.existsSync(mergeStatePath), true);
});

test("apply-result verifies an already-merged external preflight result", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(mergeStatePath, "merged");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].merge_commit_sha, SQUASH_COMMIT_SHA);
  assert.equal(report.actions[0].effective_diff_sha256, EFFECTIVE_DIFF_SHA256);
});

test("apply-result restores adopted-base proof when replaying an already-merged result", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(mergeStatePath, "merged");
  writeReadyMergeGhStub(
    binDir,
    adoptionStubOptions({
      adoptionDriftPath: "src/other/unrelated.ts",
      currentMainExtraPath: "src/other/unrelated.ts",
    }),
  );

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  const proof = baseAdoptionProof();
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(adoptionMergeResultJson(), null, 2)}\n`);
  fs.writeFileSync(
    reportPath,
    `${JSON.stringify(
      {
        checkpoint: "base_adoption_verified",
        actions: [
          {
            target: "#60063",
            status: "authorizing",
            reviewed_head_sha: EXPECTED_HEAD_SHA,
            merge_head_sha: EXPECTED_HEAD_SHA,
            effective_diff_sha256: ADOPTION_EFFECTIVE_DIFF_SHA256,
            verified_main_sha: CURRENT_MAIN_SHA,
            base_adoption: proof,
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].merge_commit_sha, SQUASH_COMMIT_SHA);
  assert.equal(report.actions[0].effective_diff_sha256, ADOPTION_EFFECTIVE_DIFF_SHA256);
  assert.equal(report.actions[0].verified_main_sha, CURRENT_MAIN_SHA);
  assert.equal(report.actions[0].base_adoption.authorization_sha256, proof.authorization_sha256);
});

test("apply-result rejects a tampered adopted-base replay checkpoint", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(mergeStatePath, "merged");
  writeReadyMergeGhStub(
    binDir,
    adoptionStubOptions({
      adoptionDriftPath: "src/other/unrelated.ts",
      currentMainExtraPath: "src/other/unrelated.ts",
    }),
  );

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  const proof = { ...baseAdoptionProof(), authorization_sha256: "0".repeat(64) };
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(adoptionMergeResultJson(), null, 2)}\n`);
  fs.writeFileSync(
    reportPath,
    `${JSON.stringify(
      {
        checkpoint: "base_adoption_verified",
        actions: [
          {
            target: "#60063",
            status: "authorizing",
            reviewed_head_sha: EXPECTED_HEAD_SHA,
            merge_head_sha: EXPECTED_HEAD_SHA,
            effective_diff_sha256: ADOPTION_EFFECTIVE_DIFF_SHA256,
            verified_main_sha: CURRENT_MAIN_SHA,
            base_adoption: proof,
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(
    report.actions[0].reason,
    "actual squash commit is not based on the authorized main SHA",
  );
});

test("apply-result rejects an already-merged replay with invalid review policy", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(mergeStatePath, "merged");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  const replay = mergeResultJson({ externalBinding: true });
  replay.merge_preflight[0].codex_review.status = "failed";
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(replay, null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].reason, "Codex /review status is failed");
});

test("apply-result re-reads an ambiguous merge failure and verifies accepted state", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeFailure: "HTTP 503: Service Unavailable",
    mergeAcceptedBeforeFailure: true,
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].reason, "merge command failed after GitHub accepted the merge");
  assert.equal(report.actions[0].merge_commit_sha, SQUASH_COMMIT_SHA);
});

test("apply-result retries transient GitHub 5xx during merge preflight", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    transientViewFailures: 1,
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
    mergeStatePath,
    env: { CLOWNFISH_GH_RETRY_BASE_MS: "1" },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
  const ghCalls = fs
    .readFileSync(callLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  assert.equal(ghCalls.filter((args) => args[0] === "pr" && args[1] === "view").length >= 2, true);
});

test("apply-result polls transient unknown mergeability before merge", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeViews: [
      { mergeable: "UNKNOWN", mergeStateStatus: "UNKNOWN" },
      { mergeable: "MERGEABLE", mergeStateStatus: "CLEAN" },
    ],
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
    mergeStatePath,
    env: { CLOWNFISH_APPLY_MERGEABLE_POLL_DELAY_MS: "0" },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
});

test("apply-result allows unstable merge state when latest checks are clean", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeStateStatus: "UNSTABLE",
    statusCheckRollup: [
      { name: "Real behavior proof", workflowName: "Real behavior proof", status: "COMPLETED", conclusion: "CANCELLED", completedAt: "2026-06-18T16:38:12Z" },
      { name: "Real behavior proof", workflowName: "Real behavior proof", status: "COMPLETED", conclusion: "SUCCESS", completedAt: "2026-06-19T03:15:25Z" },
    ],
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson({ externalBinding: true }), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
});

for (const mergeStateStatus of ["BLOCKED", "BEHIND"]) {
  test(`apply-result blocks generic merges in ${mergeStateStatus.toLowerCase()} state`, () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
    const binDir = path.join(tmp, "bin");
    const callLogPath = path.join(tmp, "gh-calls.jsonl");
    const mergeStatePath = path.join(tmp, "merge-state");
    fs.mkdirSync(binDir, { recursive: true });
    fs.writeFileSync(callLogPath, "");
    writeReadyMergeGhStub(binDir, {
      headSha: EXPECTED_HEAD_SHA,
      mergeStateStatus,
    });

    const jobPath = path.join(tmp, "job.md");
    const resultPath = path.join(tmp, "result.json");
    const reportPath = path.join(tmp, "apply-report.json");
    fs.writeFileSync(jobPath, mergeJobMarkdown());
    fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

    const result = apply(jobPath, resultPath, reportPath, binDir, {
      dryRun: false,
      allowMerge: true,
      callLogPath,
      mergeStatePath,
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    assert.equal(report.actions[0].status, "blocked");
    assert.equal(report.actions[0].reason, `merge state status is ${mergeStateStatus}`);
    const ghCalls = fs
      .readFileSync(callLogPath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line));
    assert.equal(ghCalls.some((args) => args[0] === "pr" && args[1] === "merge"), false);
  });
}

test("apply-result blocks merge targets with live merge-risk labels", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    labels: [{ name: "merge-risk: availability" }],
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

  const result = apply(jobPath, resultPath, reportPath, binDir, {
    dryRun: false,
    allowMerge: true,
    callLogPath,
    mergeStatePath,
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].reason, "target has blocked live label: merge-risk: availability");
  assert.equal(fs.existsSync(mergeStatePath), false);
});

function apply(jobPath, resultPath, reportPath, binDir, { dryRun = true, callLogPath, allowMerge = false, mergeStatePath, env = {} } = {}) {
  const args = ["scripts/apply-result.mjs", jobPath, resultPath];
  if (dryRun) args.push("--dry-run");
  args.push("--report", reportPath);
  return spawnSync(
    process.execPath,
    args,
    {
      cwd: repoRoot,
      env: {
        ...process.env,
        PATH: `${binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOW_EXECUTE: "1",
        CLOWNFISH_APP_ID: "3535277",
        CLOWNFISH_GATE_NOW: "2026-06-11T06:00:00Z",
        CLOWNFISH_APPLY_MERGE_BINDING_ATTEMPTS: "1",
        CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0",
        ...(callLogPath ? { GH_CALL_LOG: callLogPath } : {}),
        ...(allowMerge
          ? { CLOWNFISH_ALLOW_MERGE: "1", CLOWNFISH_CHECKS_GH_TOKEN: "fixture" }
          : {}),
        ...(mergeStatePath ? { MERGE_STATE: mergeStatePath } : {}),
        ...env,
      },
      encoding: "utf8",
    },
  );
}

function writeGhStub(
  binDir,
  { issueState = "open", includeExistingMarker = false, authorAssociation = "NONE", ansi = false, labels = [] } = {},
) {
  const ghPath = path.join(binDir, "gh");
  const ansiPrefix = ansi ? "\u001b[1;32m" : "";
  const ansiSuffix = ansi ? "\u001b[0m" : "";
  const existingCommentBody = includeExistingMarker
    ? `<!-- projectclownfish:close:ghcrawl-199237-agentic-merge:#60063:${resultJson().actions[0].idempotency_key} -->`
    : "";
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
if (process.env.GH_CALL_LOG) fs.appendFileSync(process.env.GH_CALL_LOG, JSON.stringify(args) + "\\n");
function write(value) {
  process.stdout.write(${JSON.stringify(ansiPrefix)} + JSON.stringify(value) + ${JSON.stringify(ansiSuffix)});
}
if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/issues/60063") {
  write({
    number: 60063,
    state: ${JSON.stringify(issueState)},
    title: "streaming fix",
    updated_at: ${JSON.stringify(issueState === "open" ? "2026-06-11T05:07:30Z" : "2026-06-11T12:38:26Z")},
    labels: ${JSON.stringify(labels)},
    author_association: ${JSON.stringify(authorAssociation)},
    pull_request: { url: "https://api.github.com/repos/openclaw/openclaw/pulls/60063" }
  });
} else if (args[0] === "api" && args[1].startsWith("repos/openclaw/openclaw/issues/60063/comments")) {
  write(${JSON.stringify(existingCommentBody ? [[{ body: existingCommentBody }]] : [[]])});
} else {
  process.stderr.write("unexpected gh call: " + args.join(" ") + "\\n");
  process.exit(1);
}
`,
  );
  fs.chmodSync(ghPath, 0o755);
}

function writeRateLimitedGhStub(binDir) {
  const ghPath = path.join(binDir, "gh");
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
process.stderr.write("GraphQL: API rate limit already exceeded for installation ID 127893203.\\n");
process.exit(1);
`,
  );
  fs.chmodSync(ghPath, 0o755);
}

function writeStaleMergeGhStub(binDir, { statusCheckRollup = [{ name: "CI", status: "COMPLETED", conclusion: "SUCCESS" }] } = {}) {
  const ghPath = path.join(binDir, "gh");
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
const args = process.argv.slice(2);
function write(value) {
  process.stdout.write(JSON.stringify(value));
}
if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/issues/60063") {
  write({
    number: 60063,
    state: "open",
    title: "streaming fix",
    updated_at: "2026-06-11T05:07:30Z",
    labels: [],
    author_association: "NONE",
    pull_request: { url: "https://api.github.com/repos/openclaw/openclaw/pulls/60063" }
  });
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/pulls/60063") {
  write({
    number: 60063,
    state: "open",
    draft: false,
    updated_at: "2026-06-11T05:07:30Z",
    labels: [],
    base: { ref: "main", sha: "stale-base" },
    head: { sha: ${JSON.stringify(EXPECTED_HEAD_SHA)} }
  });
} else if (args[0] === "api" && args[1].startsWith("repos/openclaw/openclaw/issues/60063/comments")) {
  write([[]]);
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/ref/heads/main") {
  write({ object: { sha: "current-main" } });
} else if (args[0] === "api" && args[1] === "graphql") {
  write({ data: { repository: { pullRequest: { reviewThreads: { pageInfo: { hasNextPage: false }, nodes: [] } } } } });
} else if (args[0] === "pr" && args[1] === "view" && args[2] === "60063") {
  write({
    baseRefName: "main",
    isDraft: false,
    mergeable: "MERGEABLE",
    mergeStateStatus: "CLEAN",
    reviewDecision: "APPROVED",
    statusCheckRollup: ${JSON.stringify(statusCheckRollup)}
  });
} else {
  process.stderr.write("unexpected gh call: " + args.join(" ") + "\\n");
  process.exit(1);
}
`,
  );
  fs.chmodSync(ghPath, 0o755);
}

function writeReadyMergeGhStub(
  binDir,
  {
    headSha,
    mergeStateStatus = "CLEAN",
    mergeViews = null,
    transientViewFailures = 0,
    statusCheckRollup = [{ name: "CI", status: "COMPLETED", conclusion: "SUCCESS" }],
    labels = [],
    issueUpdatedAt = "2026-06-11T05:07:30Z",
    issueComments = [],
    externalBinding = false,
    mergeBlobSha = MERGE_BLOB_SHA,
    mergeBaseSha = CURRENT_MAIN_SHA,
    mergeHeadSha = headSha,
    reviewedBaseSha = CURRENT_MAIN_SHA,
    currentMainBlobSha = BASE_BLOB_SHA,
    currentMainExtraPath = "src/other/unrelated.ts",
    mergeFailure = null,
    mergeSucceedsWithoutState = false,
    mergeAcceptedBeforeFailure = false,
    squashParentSha = CURRENT_MAIN_SHA,
    squashBlobSha = mergeBlobSha,
    exactMergeRule = true,
    exactMergeAppBypass = false,
    exactMergeBypassActorsVisible = true,
    ciGateAppId = 15368,
    ciGateStatus = "completed",
    ciGateConclusion = "success",
    ciGateCompletedAt = "2026-06-11T05:30:00Z",
    ciGateChecks = null,
    ciGatePages = null,
    ciWorkflowId = 209874334,
    ciRunWorkflowId = ciWorkflowId,
    ciWorkflowPath = ".github/workflows/ci.yml",
    ciRunPath = ciWorkflowPath,
    ciRunHeadSha = headSha,
    ciRunPrNumber = 60063,
    ciRunStatus = "completed",
    ciRunConclusion = "success",
    adoptionValidation = false,
    adoptionDriftPath = "docs/main.md",
    adoptionDriftCommitCount = 1,
    adoptionLinear = true,
    adoptionValidationFailure = false,
    adoptionLabels = null,
    reflectCoordinatorChecksInView = false,
  },
) {
  const ghPath = path.join(binDir, "gh");
  const viewCountPath = path.join(binDir, "view-count");
  const normalizeAdoptionComments = (comments) =>
    comments.map((comment) => ({
      author: { login: comment.user?.login ?? "reviewer" },
      authorAssociation: comment.author_association ?? "NONE",
      body: comment.body ?? "",
      createdAt: comment.created_at ?? "2026-06-11T05:07:30Z",
      updatedAt: comment.updated_at ?? comment.created_at ?? "2026-06-11T05:07:30Z",
      isMinimized: false,
      minimizedReason: null,
      url: "https://github.test/comment",
    }));
  const resolvedCiGateChecks = ciGateChecks ?? [
    {
      id: 7071,
      name: "openclaw/ci-gate",
      head_sha: headSha,
      status: ciGateStatus,
      conclusion: ciGateConclusion,
      completed_at: ciGateCompletedAt,
      details_url: "https://github.com/openclaw/openclaw/actions/runs/7070/job/7071",
      app: { id: ciGateAppId },
    },
  ];
  const resolvedCiGatePages = ciGatePages ?? [resolvedCiGateChecks];
  const adoptionIssueComments = normalizeAdoptionComments(issueComments);
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
const merged = Boolean(process.env.MERGE_STATE && fs.existsSync(process.env.MERGE_STATE));
const mergeViews = ${JSON.stringify(mergeViews)};
const viewCountPath = ${JSON.stringify(viewCountPath)};
const adoptionStatePath = ${JSON.stringify(path.join(binDir, "adoption-started"))};
const exactCheckStatePath = ${JSON.stringify(path.join(binDir, "exact-check-state.json"))};
const externalBinding = ${JSON.stringify(externalBinding)};
const reviewedBaseSha = ${JSON.stringify(reviewedBaseSha)};
if (process.env.GH_CALL_LOG) fs.appendFileSync(process.env.GH_CALL_LOG, JSON.stringify(args) + "\\n");
if (process.env.GH_AUTH_LOG) {
  fs.appendFileSync(
    process.env.GH_AUTH_LOG,
    JSON.stringify({ args, ghToken: process.env.GH_TOKEN ?? null }) + "\\n",
  );
}
function write(value) {
  process.stdout.write(JSON.stringify(value));
}
if (${JSON.stringify(adoptionValidation)} && args[0] === "repo" && args[1] === "clone") {
  const target = args[3];
  fs.mkdirSync(path.join(target, ".git"), { recursive: true });
  fs.mkdirSync(path.join(target, "src", "cli"), { recursive: true });
  fs.writeFileSync(path.join(target, "package.json"), JSON.stringify({ packageManager: "pnpm@10.33.0" }));
  fs.writeFileSync(path.join(target, "src", "cli", "effective.ts"), ${JSON.stringify(ADOPTION_MERGE_CONTENT)});
  const driftPath = ${JSON.stringify(adoptionDriftPath)};
  if (driftPath && driftPath !== "src/cli/effective.ts" && driftPath !== "package.json") {
    fs.mkdirSync(path.dirname(path.join(target, driftPath)), { recursive: true });
    fs.writeFileSync(path.join(target, driftPath), ${JSON.stringify(ADOPTION_DOC_CONTENT)});
  }
  fs.writeFileSync(adoptionStatePath, "started");
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/issues/60063") {
  write({
    number: 60063,
    state: merged ? "closed" : "open",
    title: "streaming fix",
    updated_at: ${JSON.stringify(issueUpdatedAt)},
    labels: fs.existsSync(adoptionStatePath) && ${JSON.stringify(adoptionLabels)} ? ${JSON.stringify(adoptionLabels)} : ${JSON.stringify(labels)},
    author_association: "NONE",
    pull_request: { url: "https://api.github.com/repos/openclaw/openclaw/pulls/60063" }
  });
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/pulls/60063") {
  write({
    number: 60063,
    state: "open",
    draft: false,
    updated_at: "2026-06-11T05:07:30Z",
    labels: fs.existsSync(adoptionStatePath) && ${JSON.stringify(adoptionLabels)} ? ${JSON.stringify(adoptionLabels)} : ${JSON.stringify(labels)},
    base: { ref: "main", sha: externalBinding ? ${JSON.stringify(CURRENT_MAIN_SHA)} : "current-main" },
    head: {
      sha: ${JSON.stringify(headSha)},
      ref: "feature/exact-head",
      repo: { full_name: "openclaw/openclaw" }
    },
    maintainer_can_modify: true,
    merged_at: merged ? "2026-06-11T05:09:00Z" : null,
    merge_commit_sha: merged
      ? (externalBinding ? ${JSON.stringify(SQUASH_COMMIT_SHA)} : "c".repeat(40))
      : (externalBinding ? ${JSON.stringify(TEST_MERGE_SHA)} : null)
  });
} else if (args[0] === "api" && args[1].startsWith("repos/openclaw/openclaw/issues/60063/comments")) {
  const comments = ${JSON.stringify(issueComments)};
  write(args.includes("--slurp") ? [comments] : comments);
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/ref/heads/main") {
  write({
    object: {
      sha: externalBinding ? ${JSON.stringify(CURRENT_MAIN_SHA)} : "current-main"
    }
  });
} else if (
  externalBinding &&
  args[0] === "api" &&
  args[1].startsWith("repos/openclaw/openclaw/commits/${headSha}/check-runs?")
) {
  const checkRunPages = ${JSON.stringify(resolvedCiGatePages)}.map((checkRuns) => ({
    total_count: checkRuns.length,
    check_runs: checkRuns,
  }));
  write(args.includes("--slurp") ? checkRunPages : checkRunPages[0]);
} else if (
  externalBinding &&
  args[0] === "api" &&
  args[1] === "repos/openclaw/openclaw/actions/jobs/7071"
) {
  write({
    id: 7071,
    run_id: 7070,
    name: "openclaw/ci-gate",
    head_sha: ${JSON.stringify(headSha)},
    status: "completed",
    conclusion: "success",
    check_run_url: "https://api.github.com/repos/openclaw/openclaw/check-runs/7071",
    html_url: "https://github.com/openclaw/openclaw/actions/runs/7070/job/7071"
  });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/actions/runs/7070") {
  write({
    id: 7070,
    workflow_id: ${JSON.stringify(ciRunWorkflowId)},
    path: ${JSON.stringify(ciRunPath)},
    event: "pull_request",
    head_sha: ${JSON.stringify(ciRunHeadSha)},
    status: ${JSON.stringify(ciRunStatus)},
    conclusion: ${JSON.stringify(ciRunConclusion)},
    pull_requests: [{
      number: ${JSON.stringify(ciRunPrNumber)},
      head: { sha: ${JSON.stringify(headSha)} },
      base: { ref: "main" }
    }]
  });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/actions/workflows/ci.yml") {
  write({ id: ${JSON.stringify(ciWorkflowId)}, path: ${JSON.stringify(ciWorkflowPath)}, state: "active" });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/rules/branches/main") {
  write(${JSON.stringify(exactMergeRule)} ? [{
    type: "required_status_checks",
    ruleset_source_type: "Repository",
    ruleset_source: "openclaw/openclaw",
    ruleset_id: 18588237,
    parameters: {
      strict_required_status_checks_policy: true,
      required_status_checks: [
        { context: "clownfish/exact-merge", integration_id: 3535277 }
      ]
    }
  }] : []);
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/rulesets/18588237") {
  write({
    id: 18588237,
    enforcement: "active",
    target: "branch",
    ...(${JSON.stringify(exactMergeBypassActorsVisible)} ? {
      bypass_actors: ${JSON.stringify(exactMergeAppBypass ? [{ actor_id: 3535277, actor_type: "Integration", bypass_mode: "exempt" }] : [])}
    } : {}),
    rules: [{
      type: "required_status_checks",
      parameters: {
        strict_required_status_checks_policy: true,
        required_status_checks: [
          { context: "clownfish/exact-merge", integration_id: 3535277 }
        ]
      }
    }]
  });
} else if (
  externalBinding &&
  args[0] === "api" &&
  args[1].startsWith("repos/openclaw/openclaw/commits/${TEST_MERGE_SHA}/check-runs?")
) {
  const exactCheck = fs.existsSync(exactCheckStatePath)
    ? JSON.parse(fs.readFileSync(exactCheckStatePath, "utf8"))
    : null;
  write({ total_count: exactCheck ? 1 : 0, check_runs: exactCheck ? [exactCheck] : [] });
} else if (
  externalBinding &&
  args[0] === "api" &&
  args[1] === "repos/openclaw/openclaw/check-runs" &&
  args.includes("POST")
) {
  const payload = JSON.parse(fs.readFileSync(args[args.indexOf("--input") + 1], "utf8"));
  const exactCheck = { id: 8080, ...payload, conclusion: null, app: { id: 3535277 } };
  fs.writeFileSync(exactCheckStatePath, JSON.stringify(exactCheck));
  write(exactCheck);
} else if (
  externalBinding &&
  args[0] === "api" &&
  args[1] === "repos/openclaw/openclaw/check-runs/8080" &&
  args.includes("PATCH")
) {
  const current = JSON.parse(fs.readFileSync(exactCheckStatePath, "utf8"));
  const payload = JSON.parse(fs.readFileSync(args[args.indexOf("--input") + 1], "utf8"));
  const exactCheck = { ...current, ...payload, app: { id: 3535277 } };
  fs.writeFileSync(exactCheckStatePath, JSON.stringify(exactCheck));
  write(exactCheck);
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/commits/${TEST_MERGE_SHA}") {
  write({
    sha: ${JSON.stringify(TEST_MERGE_SHA)},
    tree: { sha: ${JSON.stringify(MERGE_TREE_SHA)} },
    parents: [
      { sha: ${JSON.stringify(CURRENT_MAIN_SHA)} },
      { sha: ${JSON.stringify(headSha)} }
    ]
  });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/commits/${SQUASH_COMMIT_SHA}") {
  write({
    sha: ${JSON.stringify(SQUASH_COMMIT_SHA)},
    tree: { sha: ${JSON.stringify(SQUASH_TREE_SHA)} },
    parents: [{ sha: ${JSON.stringify(squashParentSha)} }]
  });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/commits/${mergeBaseSha}") {
  write({ sha: ${JSON.stringify(mergeBaseSha)}, tree: { sha: ${JSON.stringify(BASE_TREE_SHA)} }, parents: [] });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/commits/${CURRENT_MAIN_SHA}") {
  write({ sha: ${JSON.stringify(CURRENT_MAIN_SHA)}, tree: { sha: ${JSON.stringify(CURRENT_MAIN_TREE_SHA)} }, parents: [] });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/commits/${REVIEWED_BASE_SHA}") {
  write({ sha: ${JSON.stringify(REVIEWED_BASE_SHA)}, tree: { sha: ${JSON.stringify(REVIEWED_BASE_TREE_SHA)} }, parents: [] });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/compare/${REVIEWED_BASE_SHA}...${CURRENT_MAIN_SHA}") {
  write({
    status: "ahead",
    ahead_by: 1,
    total_commits: 1,
    merge_base_commit: { sha: ${JSON.stringify(REVIEWED_BASE_SHA)} }
  });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/trees/${BASE_TREE_SHA}?recursive=1") {
  write({
    truncated: false,
    tree: [
      { path: "src/cli/effective.ts", mode: "100644", type: "blob", sha: ${JSON.stringify(adoptionValidation ? ADOPTION_BASE_BLOB_SHA : BASE_BLOB_SHA)} },
      { path: ${JSON.stringify(currentMainExtraPath)}, mode: "100644", type: "blob", sha: ${JSON.stringify(adoptionValidation ? ADOPTION_DOC_BLOB_SHA : "7".repeat(40))} }
    ]
  });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/trees/${MERGE_TREE_SHA}?recursive=1") {
  write({
    truncated: false,
    tree: [
      { path: "src/cli/effective.ts", mode: "100644", type: "blob", sha: ${JSON.stringify(mergeBlobSha)} },
      { path: ${JSON.stringify(currentMainExtraPath)}, mode: "100644", type: "blob", sha: ${JSON.stringify(adoptionValidation ? ADOPTION_DOC_BLOB_SHA : "7".repeat(40))} }
    ]
  });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/trees/${SQUASH_TREE_SHA}?recursive=1") {
  write({
    truncated: false,
    tree: [
      { path: "src/cli/effective.ts", mode: "100644", type: "blob", sha: ${JSON.stringify(squashBlobSha)} },
      { path: ${JSON.stringify(currentMainExtraPath)}, mode: "100644", type: "blob", sha: ${JSON.stringify(adoptionValidation ? ADOPTION_DOC_BLOB_SHA : "7".repeat(40))} }
    ]
  });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/trees/${CURRENT_MAIN_TREE_SHA}?recursive=1") {
  write({
    truncated: false,
    tree: [
      { path: "src/cli/effective.ts", mode: "100644", type: "blob", sha: ${JSON.stringify(currentMainBlobSha)} },
      { path: ${JSON.stringify(currentMainExtraPath)}, mode: "100644", type: "blob", sha: ${JSON.stringify(adoptionValidation ? ADOPTION_DOC_BLOB_SHA : "7".repeat(40))} }
    ]
  });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/trees/${REVIEWED_BASE_TREE_SHA}?recursive=1") {
  write({
    truncated: false,
    tree: [{ path: "src/cli/effective.ts", mode: "100644", type: "blob", sha: ${JSON.stringify(adoptionValidation ? ADOPTION_BASE_BLOB_SHA : BASE_BLOB_SHA)} }]
  });
} else if (args[0] === "api" && args[1] === "graphql") {
  const query = args.find((value) => value.startsWith("query=")) ?? "";
  if (query.includes("comments(first: 100)")) {
    write({ data: { repository: { pullRequest: { comments: { nodes: ${JSON.stringify(adoptionIssueComments)} } } } } });
  } else {
    write({ data: { repository: { pullRequest: { reviewThreads: { pageInfo: { hasNextPage: false }, nodes: [] } } } } });
  }
} else if (args[0] === "api" && args[1].includes("/pulls/60063/comments")) {
  write([]);
} else if (args[0] === "pr" && args[1] === "view" && args[2] === "60063") {
  const count = fs.existsSync(viewCountPath) ? Number(fs.readFileSync(viewCountPath, "utf8")) : 0;
  fs.writeFileSync(viewCountPath, String(count + 1));
  if (count < ${JSON.stringify(transientViewFailures)}) {
    process.stderr.write("HTTP 503: 503 Service Unavailable (https://api.github.com/graphql)\\n");
    process.exit(1);
  }
  const mergeView = Array.isArray(mergeViews) ? mergeViews[Math.min(count, mergeViews.length - 1)] : {};
  write({
    baseRefName: "main",
    isDraft: false,
    mergeable: mergeView.mergeable ?? "MERGEABLE",
    mergeStateStatus: mergeView.mergeStateStatus ?? ${JSON.stringify(mergeStateStatus)},
    reviewDecision: "APPROVED",
    statusCheckRollup: mergeView.statusCheckRollup ?? [
      ...${JSON.stringify(statusCheckRollup)},
      ...(${JSON.stringify(reflectCoordinatorChecksInView)} && fs.existsSync(exactCheckStatePath)
        ? [
            { name: "clownfish/exact-merge", status: "IN_PROGRESS", conclusion: null },
            { name: "openclaw/ci-gate", status: "IN_PROGRESS", conclusion: null },
          ]
        : []),
    ]
  });
} else if (args[0] === "pr" && args[1] === "merge" && args[2] === "60063") {
  if (${JSON.stringify(mergeFailure)}) {
    if (${JSON.stringify(mergeAcceptedBeforeFailure)}) {
      fs.writeFileSync(process.env.MERGE_STATE, "merged");
    }
    process.stderr.write(${JSON.stringify(mergeFailure)} + "\\n");
    process.exit(1);
  }
  if (!${JSON.stringify(mergeSucceedsWithoutState)}) {
    fs.writeFileSync(process.env.MERGE_STATE, "merged");
  }
} else {
  process.stderr.write("unexpected gh call: " + args.join(" ") + "\\n");
  process.exit(1);
}
`,
  );
  fs.chmodSync(ghPath, 0o755);
  if (adoptionValidation) {
    writeAdoptionValidationStubs(binDir, {
      driftPath: adoptionDriftPath,
      driftCommitCount: adoptionDriftCommitCount,
      linear: adoptionLinear,
      validationFailure: adoptionValidationFailure,
      checkoutHeadSha: headSha,
      adoptedBaseSha: CURRENT_MAIN_SHA,
      mergeBlobSha,
    });
  }
}

function writeAdoptionValidationStubs(
  binDir,
  {
    driftPath,
    driftCommitCount,
    linear,
    validationFailure,
    checkoutHeadSha,
    adoptedBaseSha,
    mergeBlobSha,
  },
) {
  const gitPath = path.join(binDir, "git");
  const statePath = path.join(binDir, "adoption-git-state");
  const adoptedSyntheticSha = "cd".repeat(20);
  const reviewedSyntheticSha = "bc".repeat(20);
  const extraEntry = `100644 blob ${ADOPTION_DOC_BLOB_SHA}\t${driftPath}\0`;
  fs.writeFileSync(
    gitPath,
    `#!/usr/bin/env node
const fs = require("node:fs");
const args = process.argv.slice(2);
const statePath = ${JSON.stringify(statePath)};
const state = fs.existsSync(statePath) ? fs.readFileSync(statePath, "utf8") : "head";
const setState = (value) => fs.writeFileSync(statePath, value);
const baseEntry = ${JSON.stringify(`100644 blob ${ADOPTION_BASE_BLOB_SHA}\tsrc/cli/effective.ts\0`)};
const reviewedMergeEntry = ${JSON.stringify(`100644 blob ${ADOPTION_MERGE_BLOB_SHA}\tsrc/cli/effective.ts\0`)};
const mergeEntry = ${JSON.stringify("100644 blob ")} + ${JSON.stringify(mergeBlobSha)} + ${JSON.stringify("\tsrc/cli/effective.ts\0")};
const extraEntry = ${JSON.stringify(extraEntry)};
if (args[0] === "status") process.exit(0);
if (args[0] === "config" && args.includes("--list") && args.includes("--null")) process.exit(0);
if (args[0] === "fetch") process.exit(0);
if (args[0] === "checkout") {
  const target = args.at(-1);
  setState(target === ${JSON.stringify(adoptedSyntheticSha)} ? "adopted" : target === ${JSON.stringify(reviewedSyntheticSha)} ? "reviewed" : "head");
  process.exit(0);
}
if (args[0] === "rev-parse") {
  if (args[1] === "origin/main") console.log(${JSON.stringify(adoptedBaseSha)});
  else if (args[1] === "--is-shallow-repository") console.log("false");
  else if (args[1] === "HEAD^{tree}") console.log(${JSON.stringify(MERGE_TREE_SHA)});
  else if (args[1] === "HEAD^") console.log(${JSON.stringify(adoptedBaseSha)});
  else console.log(state === "adopted" ? ${JSON.stringify(adoptedSyntheticSha)} : state === "reviewed" ? ${JSON.stringify(reviewedSyntheticSha)} : ${JSON.stringify(checkoutHeadSha)});
  process.exit(0);
}
if (args[0] === "merge-base" && args[1] === "--is-ancestor") {
  process.exit(${linear ? 0 : 1});
}
if (args[0] === "merge-base") {
  console.log(${JSON.stringify(REVIEWED_BASE_SHA)});
  process.exit(0);
}
if (args[0] === "rev-list" && args[1] === "--count") {
  console.log(${JSON.stringify(driftCommitCount)});
  process.exit(0);
}
if (args[0] === "merge-tree" && args[1] === "--write-tree") {
  console.log(args[2] === ${JSON.stringify(REVIEWED_BASE_SHA)} ? ${JSON.stringify(REVIEWED_MERGE_TREE_SHA)} : ${JSON.stringify(MERGE_TREE_SHA)});
  process.exit(0);
}
if (args[0] === "commit-tree") {
  console.log(args[1] === ${JSON.stringify(REVIEWED_MERGE_TREE_SHA)} ? ${JSON.stringify(reviewedSyntheticSha)} : ${JSON.stringify(adoptedSyntheticSha)});
  process.exit(0);
}
if (args[0] === "ls-tree") {
  const treeish = args.at(-1);
  if (treeish === ${JSON.stringify(REVIEWED_BASE_SHA)}) process.stdout.write(baseEntry);
  else if (treeish === ${JSON.stringify(REVIEWED_MERGE_TREE_SHA)}) process.stdout.write(reviewedMergeEntry);
  else if (treeish === ${JSON.stringify(adoptedBaseSha)}) process.stdout.write(baseEntry + extraEntry);
  else if (treeish === ${JSON.stringify(MERGE_TREE_SHA)}) process.stdout.write(mergeEntry + extraEntry);
  process.exit(0);
}
if (args[0] === "diff" && args[1] === "--name-only") {
  if (args.includes("--diff-filter=U")) process.exit(0);
  const separator = args.includes("-z") ? "\\0" : "\\n";
  const range = args.find((value) => /^[0-9a-f]{40}\\.\\.[0-9a-f]{40}$/i.test(value));
  const files = range ? [${JSON.stringify(driftPath)}] : ["src/cli/effective.ts"];
  process.stdout.write(files.join(separator) + separator);
  process.exit(0);
}
if (args[0] === "diff") process.exit(0);
process.stderr.write("unexpected git command: " + args.join(" ") + "\\n");
process.exit(1);
`,
  );
  fs.chmodSync(gitPath, 0o755);
  fs.writeFileSync(path.join(binDir, "corepack"), "#!/bin/sh\nexit 0\n", { mode: 0o755 });
  fs.writeFileSync(
    path.join(binDir, "pnpm"),
    `#!/usr/bin/env node
const args = process.argv.slice(2);
if (${JSON.stringify(validationFailure)} && args[0] === "check:changed") {
  process.stderr.write("fixture adopted-main validation failure\\n");
  process.exit(1);
}
`,
    { mode: 0o755 },
  );
}

function jobMarkdown({ allowUnmergedFixClose }) {
  return `---
repo: openclaw/openclaw
cluster_id: ghcrawl-199237-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - close
blocked_actions:
  - force_push
canonical:
  - "#60063"
candidates:
  - "#60063"
cluster_refs:
  - "#60063"
allow_instant_close: true
require_fix_before_close: true
allow_unmerged_fix_close: ${allowUnmergedFixClose ? "true" : "false"}
security_sensitive: false
---

# Test job
`;
}

function mergeJobMarkdown({ requireExternalPreflight = false } = {}) {
  return `---
repo: openclaw/openclaw
cluster_id: stale-merge-test
mode: autonomous
allowed_actions:
  - merge
blocked_actions:
  - force_push
allow_merge: true
require_external_merge_preflight: ${requireExternalPreflight ? "true" : "false"}
security_sensitive: false
canonical:
  - "#60063"
candidates:
  - "#60063"
cluster_refs:
  - "#60063"
---

# Test job
`;
}

function resultJson() {
  return {
    status: "planned",
    repo: "openclaw/openclaw",
    cluster_id: "ghcrawl-199237-agentic-merge",
    mode: "autonomous",
    summary: "current main already contains the fix",
    actions: [
      {
        target: "#60063",
        action: "close_fixed_by_candidate",
        status: "planned",
        classification: "fixed_by_candidate",
        canonical: "#60063",
        target_updated_at: "2026-06-11T05:07:30Z",
        reason: "current main already contains the narrow streaming fix and regression coverage",
        idempotency_key: "openclaw/openclaw#60063:close_fixed_by_current_main:test",
      },
    ],
  };
}

function resultJsonWithHydratedCandidate() {
  return {
    status: "planned",
    repo: "openclaw/openclaw",
    cluster_id: "ghcrawl-199237-agentic-merge",
    mode: "autonomous",
    summary: "a hydrated pull request contains the fix",
    actions: [
      {
        target: "#60063",
        action: "close_fixed_by_candidate",
        status: "planned",
        classification: "fixed_by_candidate",
        candidate_fix: "#60064",
        target_updated_at: "2026-06-11T05:07:30Z",
        reason: "a hydrated pull request contains the narrow streaming fix and regression coverage",
        idempotency_key: "openclaw/openclaw#60063:close_fixed_by_candidate:60064:test",
      },
    ],
  };
}

function mergeResultJson({
  externalBinding = false,
  reviewedBaseSha = CURRENT_MAIN_SHA,
  effectiveDiffSha256 = EFFECTIVE_DIFF_SHA256,
  baseAdoptionManifest = undefined,
} = {}) {
  const resolvedManifest =
    externalBinding && baseAdoptionManifest === undefined
      ? currentBaseManifest()
      : baseAdoptionManifest;
  return {
    status: "planned",
    repo: "openclaw/openclaw",
    cluster_id: "stale-merge-test",
    mode: "autonomous",
    actions: [
      {
        target: "#60063",
        target_kind: "pull_request",
        target_updated_at: "2026-06-11T05:07:30Z",
        action: "merge_canonical",
        status: "planned",
        classification: "fix_pr",
        idempotency_key: externalBinding
          ? `external-merge-preflight:openclaw/openclaw#60063:${EXPECTED_HEAD_SHA}:${effectiveDiffSha256}`
          : "openclaw/openclaw#60063:merge:stale-test",
        expected_head_sha: EXPECTED_HEAD_SHA,
      },
    ],
    merge_preflight: [
      {
        target: "#60063",
        ...(externalBinding
          ? {
              reviewed_base_sha: reviewedBaseSha,
              reviewed_head_sha: EXPECTED_HEAD_SHA,
              synthetic_merge_tree_sha:
                resolvedManifest?.reviewed_merge_tree_sha ?? MERGE_TREE_SHA,
              effective_diff_sha256: effectiveDiffSha256,
              effective_diff_files: 1,
            }
          : {}),
        security_status: "cleared",
        security_evidence: ["no security-sensitive labels or comments"],
        comments_status: "resolved",
        comments_evidence: ["no unresolved human review threads"],
        bot_comments_status: "resolved",
        bot_comments_evidence: ["no unresolved bot review threads"],
        validation_commands: ["pnpm check:changed"],
        codex_review: {
          command: "/review",
          status: "clean",
          findings_addressed: true,
          evidence: ["Codex /review returned clean"],
        },
        base_adoption_manifest: resolvedManifest,
      },
    ],
  };
}

function currentBaseManifest() {
  const reviewedPathBlobs = [
    {
      path: "src/cli/effective.ts",
      reviewed_base_entry: `100644:blob:${BASE_BLOB_SHA}`,
      reviewed_result_entry: `100644:blob:${MERGE_BLOB_SHA}`,
    },
  ];
  return {
    schema_version: 1,
    policy: "bounded-fast-forward-v1",
    reviewed_base_sha: CURRENT_MAIN_SHA,
    reviewed_head_sha: EXPECTED_HEAD_SHA,
    reviewed_synthetic_merge_sha: "bc".repeat(20),
    reviewed_merge_tree_sha: MERGE_TREE_SHA,
    effective_diff_sha256: EFFECTIVE_DIFF_SHA256,
    effective_diff_files: 1,
    effective_paths: ["src/cli/effective.ts"],
    affected_areas: ["src/cli"],
    validation_gate: "pnpm check:changed",
    reviewed_paths: blobSnapshot(reviewedPathBlobs),
    validation_controls: blobSnapshot([]),
    review_context: blobSnapshot(reviewedPathBlobs),
  };
}

function baseAdoptionManifest() {
  const reviewedPathBlobs = [
    {
      path: "src/cli/effective.ts",
      reviewed_base_entry: `100644:blob:${ADOPTION_BASE_BLOB_SHA}`,
      reviewed_result_entry: `100644:blob:${ADOPTION_MERGE_BLOB_SHA}`,
    },
  ];
  return {
    schema_version: 1,
    policy: "bounded-fast-forward-v1",
    reviewed_base_sha: REVIEWED_BASE_SHA,
    reviewed_head_sha: EXPECTED_HEAD_SHA,
    reviewed_synthetic_merge_sha: "bc".repeat(20),
    reviewed_merge_tree_sha: REVIEWED_MERGE_TREE_SHA,
    effective_diff_sha256: ADOPTION_EFFECTIVE_DIFF_SHA256,
    effective_diff_files: 1,
    effective_paths: ["src/cli/effective.ts"],
    affected_areas: ["src/cli"],
    validation_gate: "pnpm check:changed",
    reviewed_paths: blobSnapshot(reviewedPathBlobs),
    validation_controls: blobSnapshot([]),
    review_context: blobSnapshot(reviewedPathBlobs),
  };
}

function baseAdoptionProof() {
  const manifest = baseAdoptionManifest();
  const authorization = {
    policy: manifest.policy,
    reviewed_base_sha: REVIEWED_BASE_SHA,
    adopted_base_sha: CURRENT_MAIN_SHA,
    reviewed_head_sha: EXPECTED_HEAD_SHA,
    synthetic_merge_tree_sha: MERGE_TREE_SHA,
    effective_diff_files: 1,
    effective_diff_sha256: ADOPTION_EFFECTIVE_DIFF_SHA256,
    drift_commit_count: 1,
    drift_file_count: 1,
    drift_paths_sha256: createHash("sha256")
      .update("src/other/unrelated.ts")
      .digest("hex"),
    reviewed_paths_sha256: manifest.reviewed_paths.sha256,
    validation_controls_sha256: manifest.validation_controls.sha256,
    review_context_sha256: manifest.review_context.sha256,
    validation_commands: ["pnpm check:changed"],
    github_state_sha256: "9".repeat(64),
    issue_updated_at: "2026-06-11T05:07:30Z",
    pull_updated_at: "2026-06-11T05:07:30Z",
  };
  return {
    schema_version: 1,
    status: "adopted",
    reason: "validated newer fast-forward main without another Codex review",
    ...authorization,
    authorization_sha256: createHash("sha256")
      .update(JSON.stringify(authorization))
      .digest("hex"),
    synthetic_merge_sha: "cd".repeat(20),
    drift_proof: { status: "reused" },
    context_proof: {
      reviewed_paths_unchanged: true,
      validation_controls_unchanged: true,
      review_context_unchanged: true,
    },
    validated_at: "2026-06-11T05:08:00Z",
  };
}

function blobSnapshot(blobs) {
  return {
    complete: true,
    files: blobs.length,
    sha256: createHash("sha256")
      .update(`${blobs.map((entry) => JSON.stringify(entry)).join("\n")}\n`)
      .digest("hex"),
    blobs,
  };
}

function adoptionMergeResultJson() {
  return mergeResultJson({
    externalBinding: true,
    reviewedBaseSha: REVIEWED_BASE_SHA,
    effectiveDiffSha256: ADOPTION_EFFECTIVE_DIFF_SHA256,
    baseAdoptionManifest: baseAdoptionManifest(),
  });
}

function adoptionStubOptions(overrides = {}) {
  return {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    reviewedBaseSha: REVIEWED_BASE_SHA,
    mergeBaseSha: CURRENT_MAIN_SHA,
    mergeBlobSha: ADOPTION_MERGE_BLOB_SHA,
    currentMainBlobSha: ADOPTION_BASE_BLOB_SHA,
    currentMainExtraPath: "docs/main.md",
    squashParentSha: CURRENT_MAIN_SHA,
    squashBlobSha: ADOPTION_MERGE_BLOB_SHA,
    adoptionValidation: true,
    reflectCoordinatorChecksInView: true,
    ...overrides,
  };
}

function readCallLog(callLogPath) {
  return fs
    .readFileSync(callLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}
