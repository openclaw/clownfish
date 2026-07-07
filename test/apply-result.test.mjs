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
const TEST_MERGE_SHA = "d".repeat(40);
const REFRESHED_HEAD_SHA = "12".repeat(20);
const REFRESHED_TEST_MERGE_SHA = "34".repeat(20);
const REFRESHED_MERGE_TREE_SHA = "56".repeat(20);
const MOVED_MAIN_SHA = "78".repeat(20);
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

test("apply-result tolerates trusted exact-head automation metadata drift", () => {
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
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].reason, "merged by projectclownfish");
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

test("apply-result pins a clean merge to the reviewed PR head", () => {
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
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].expected_head_sha, EXPECTED_HEAD_SHA);
  const ghCalls = fs
    .readFileSync(callLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  const mergeArgs = ghCalls.find((args) => args[0] === "pr" && args[1] === "merge");
  assert.deepEqual(mergeArgs.slice(-3), ["--squash", "--match-head-commit", EXPECTED_HEAD_SHA]);
});

for (const mergeStateStatus of ["BLOCKED", "BEHIND"]) {
  test(`apply-result allows ${mergeStateStatus.toLowerCase()} state for an exact-bound external merge`, () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
    const binDir = path.join(tmp, "bin");
    const callLogPath = path.join(tmp, "gh-calls.jsonl");
    const mergeStatePath = path.join(tmp, "merge-state");
    fs.mkdirSync(binDir, { recursive: true });
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
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    assert.equal(report.actions[0].status, "executed");
    assert.equal(report.actions[0].effective_diff_sha256, EFFECTIVE_DIFF_SHA256);
    assert.equal(report.actions[0].verified_main_sha, CURRENT_MAIN_SHA);
    assert.equal(report.actions[0].exact_merge_check.name, "clownfish/exact-merge");
    assert.equal(report.actions[0].exact_merge_check.head_sha, TEST_MERGE_SHA);
    assert.equal(report.actions[0].exact_merge_check.app_id, 3535277);
    const ghCalls = fs
      .readFileSync(callLogPath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line));
    const authorizationIndex = ghCalls.findIndex(
      (args) =>
        args[0] === "api" &&
        args[1] === "repos/openclaw/openclaw/check-runs/4242" &&
        args.includes("PATCH"),
    );
    const mergeIndex = ghCalls.findIndex((args) => args[0] === "pr" && args[1] === "merge");
    assert.ok(authorizationIndex >= 0);
    assert.ok(mergeIndex > authorizationIndex);
    assert.equal(
      ghCalls
        .slice(authorizationIndex + 1, mergeIndex)
        .some(
          (args) =>
            args[0] === "api" &&
            args[1] === "repos/openclaw/openclaw/git/ref/heads/main",
        ),
      false,
    );
  });
}

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

test("apply-result blocks an external preflight when the effective diff changes", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeBlobSha: "3".repeat(40),
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
    env: { CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0" },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].reason, "effective merge diff changed since Codex review");
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result safely refreshes and adopts a stale GitHub test merge", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeBaseSha: "9".repeat(40),
    branchRefresh: true,
    maintainerCanModify: false,
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
    env: {
      CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0",
      CLOWNFISH_APPLY_BRANCH_REFRESH_DELAY_MS: "0",
    },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "executed");
  assert.equal(report.actions[0].reviewed_head_sha, EXPECTED_HEAD_SHA);
  assert.equal(report.actions[0].merge_head_sha, REFRESHED_HEAD_SHA);
  assert.equal(report.actions[0].branch_refresh.status, "adopted");
  assert.equal(report.actions[0].branch_refresh.method, "merge");
  assert.equal(report.actions[0].branch_refresh.expected_old_head_sha, EXPECTED_HEAD_SHA);
  assert.equal(report.actions[0].branch_refresh.refreshed_head_sha, REFRESHED_HEAD_SHA);
  assert.equal(
    report.actions[0].branch_refresh.refreshed_test_merge_sha,
    REFRESHED_TEST_MERGE_SHA,
  );
  assert.equal(report.actions[0].exact_merge_check.head_sha, REFRESHED_TEST_MERGE_SHA);
  const ghCalls = fs
    .readFileSync(callLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  const updateArgs = ghCalls.find(
    (args) =>
      args[0] === "api" &&
      args[1] === "repos/openclaw/openclaw/pulls/60063/update-branch",
  );
  assert.ok(updateArgs);
  assert.equal(updateArgs.includes("--method"), true);
  assert.equal(updateArgs[updateArgs.indexOf("--method") + 1], "PUT");
  const inputPath = updateArgs[updateArgs.indexOf("--input") + 1];
  assert.deepEqual(JSON.parse(fs.readFileSync(inputPath, "utf8")), {
    expected_head_sha: EXPECTED_HEAD_SHA,
  });
  const mergeArgs = ghCalls.find((args) => args[0] === "pr" && args[1] === "merge");
  assert.deepEqual(mergeArgs.slice(-3), [
    "--squash",
    "--match-head-commit",
    REFRESHED_HEAD_SHA,
  ]);
});

test("apply-result blocks stale test merge recovery for an unwritable branch", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeBaseSha: "9".repeat(40),
    branchRefresh: true,
    maintainerCanModify: false,
    headRepo: "contributor/openclaw",
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
    env: { CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0" },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].retry_recommended, true);
  assert.match(report.actions[0].reason, /branch is not writable/);
  const ghCalls = fs
    .readFileSync(callLogPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  assert.equal(ghCalls.some((args) => args[1]?.endsWith("/update-branch")), false);
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result blocks branch refresh when the effective diff changes", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeBaseSha: "9".repeat(40),
    branchRefresh: true,
    refreshedMergeBlobSha: "3".repeat(40),
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
      CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0",
      CLOWNFISH_APPLY_BRANCH_REFRESH_DELAY_MS: "0",
    },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].retry_recommended, true);
  assert.equal(report.actions[0].reason, "effective merge diff changed after branch refresh");
  assert.equal(report.actions[0].reviewed_head_sha, EXPECTED_HEAD_SHA);
  assert.equal(report.actions[0].merge_head_sha, REFRESHED_HEAD_SHA);
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result blocks branch refresh when main moves", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    mergeBaseSha: "9".repeat(40),
    branchRefresh: true,
    mainAfterRefreshSha: MOVED_MAIN_SHA,
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
      CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0",
      CLOWNFISH_APPLY_BRANCH_REFRESH_DELAY_MS: "0",
    },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].retry_recommended, true);
  assert.equal(report.actions[0].reason, "main changed during stale test merge branch refresh");
  assert.equal(report.actions[0].verified_main_sha, MOVED_MAIN_SHA);
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result blocks any main drift since external review", () => {
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
      mergeResultJson({ externalBinding: true, reviewedBaseSha: REVIEWED_BASE_SHA }),
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
  assert.equal(report.actions[0].reason, "main changed since external validation and Codex review");
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result blocks overlapping main drift since external review", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(binDir, {
    headSha: EXPECTED_HEAD_SHA,
    externalBinding: true,
    reviewedBaseSha: REVIEWED_BASE_SHA,
    currentMainExtraPath: "src/cli/help.ts",
  });

  const jobPath = path.join(tmp, "job.md");
  const resultPath = path.join(tmp, "result.json");
  const reportPath = path.join(tmp, "apply-report.json");
  fs.writeFileSync(jobPath, mergeJobMarkdown());
  fs.writeFileSync(
    resultPath,
    `${JSON.stringify(
      mergeResultJson({ externalBinding: true, reviewedBaseSha: REVIEWED_BASE_SHA }),
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
  assert.equal(report.actions[0].reason, "main changed since external validation and Codex review");
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
    env: { CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0" },
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
  assert.equal(report.actions[0].base_adoption.test_merge_sha, TEST_MERGE_SHA);
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
  assert.match(report.actions[0].exact_merge_check.external_id, /:adopt:[0-9a-f]{64}$/);
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
    env: { CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0" },
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
    reason: /fixture adopted-main validation failure/,
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
      env: { CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0" },
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
    env: { CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0" },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /effective merge diff changed/);
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result does not update the branch while waiting for an adopted test merge", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const callLogPath = path.join(tmp, "gh-calls.jsonl");
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(callLogPath, "");
  writeReadyMergeGhStub(
    binDir,
    adoptionStubOptions({ mergeBaseSha: REVIEWED_BASE_SHA }),
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
    env: {
      CLOWNFISH_APPLY_MERGE_BINDING_ATTEMPTS: "1",
      CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0",
    },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /not based on the current main SHA/);
  assert.equal(readCallLog(callLogPath).some((args) => args[1]?.endsWith("/update-branch")), false);
});

test("apply-result keeps the exact-merge check pending while final state validation catches main drift", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(
    binDir,
    adoptionStubOptions({ mainMovesAfterPendingCheck: true }),
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
    env: { CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0" },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.match(report.actions[0].reason, /main changed during apply-time adoption validation/);
  assert.equal(report.actions[0].exact_merge_revocation.status, "revoked");
  assert.equal(fs.existsSync(mergeStatePath), false);
});

test("apply-result keeps the exact-merge check pending while final state validation catches comment drift", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-apply-"));
  const binDir = path.join(tmp, "bin");
  const mergeStatePath = path.join(tmp, "merge-state");
  fs.mkdirSync(binDir, { recursive: true });
  writeReadyMergeGhStub(
    binDir,
    adoptionStubOptions({
      pendingCheckIssueComments: [
        {
          user: { login: "openclaw-clownfish[bot]" },
          author_association: "CONTRIBUTOR",
          body: "Clownfish is on the reef for this PR. I tagged `clownfish:automerge`.",
          created_at: "2026-06-11T05:08:03Z",
          updated_at: "2026-06-11T05:08:03Z",
        },
      ],
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
    mergeStatePath,
    env: { CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0" },
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(
    report.actions[0].reason,
    "GitHub comments, reviews, metadata, or checks changed during exact-merge authorization",
  );
  assert.equal(report.actions[0].exact_merge_revocation.status, "revoked");
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
    env: { CLOWNFISH_APPLY_MERGE_BINDING_DELAY_MS: "0" },
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
    mergeFailure: "Base branch was modified. Review and try the merge again.",
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

test("apply-result revokes the exact-merge check when an external merge is not accepted", () => {
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
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.actions[0].status, "blocked");
  assert.equal(report.actions[0].exact_merge_revocation.status, "revoked");
  assert.equal(report.actions[0].exact_merge_revocation.check_id, 4242);
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
        args[1] === "repos/openclaw/openclaw/check-runs/4242" &&
        args.includes("PATCH"),
    ).length,
    2,
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
    mergeFailure: "HTTP 503: Service Unavailable",
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
  assert.equal(report.actions[0].exact_merge_revocation.status, "revoked");
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
        args[1] === "repos/openclaw/openclaw/check-runs/4242" &&
        args.includes("PATCH"),
    ).length,
    2,
  );
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
    transientViewFailures: 1,
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
    mergeViews: [
      { mergeable: "UNKNOWN", mergeStateStatus: "UNKNOWN" },
      { mergeable: "MERGEABLE", mergeStateStatus: "CLEAN" },
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
  fs.writeFileSync(resultPath, `${JSON.stringify(mergeResultJson(), null, 2)}\n`);

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
        ...(callLogPath ? { GH_CALL_LOG: callLogPath } : {}),
        ...(allowMerge ? { CLOWNFISH_ALLOW_MERGE: "1" } : {}),
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
    branchRefresh = false,
    maintainerCanModify = true,
    headRepo = "openclaw/openclaw",
    headRef = "feature/stale-test-merge",
    refreshedHeadSha = REFRESHED_HEAD_SHA,
    refreshedTestMergeSha = REFRESHED_TEST_MERGE_SHA,
    refreshedMergeBlobSha = mergeBlobSha,
    mainAfterRefreshSha = CURRENT_MAIN_SHA,
    currentMainBlobSha = BASE_BLOB_SHA,
    reviewedBaseSha = CURRENT_MAIN_SHA,
    currentMainExtraPath = "src/other/unrelated.ts",
    mergeFailure = null,
    mergeSucceedsWithoutState = false,
    mergeAcceptedBeforeFailure = false,
    squashParentSha = CURRENT_MAIN_SHA,
    squashBlobSha = mergeBlobSha,
    exactMergeRule = true,
    adoptionValidation = false,
    adoptionDriftPath = "docs/main.md",
    adoptionDriftCommitCount = 1,
    adoptionLinear = true,
    adoptionValidationFailure = false,
    mainMovesAfterPendingCheck = false,
    adoptionLabels = null,
    pendingCheckIssueComments = null,
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
  const adoptionIssueComments = normalizeAdoptionComments(issueComments);
  const pendingCheckAdoptionIssueComments =
    pendingCheckIssueComments == null
      ? null
      : normalizeAdoptionComments(pendingCheckIssueComments);
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const args = process.argv.slice(2);
const merged = Boolean(process.env.MERGE_STATE && fs.existsSync(process.env.MERGE_STATE));
const mergeViews = ${JSON.stringify(mergeViews)};
const viewCountPath = ${JSON.stringify(viewCountPath)};
const checkStatePath = ${JSON.stringify(path.join(binDir, "exact-merge-check.json"))};
const branchRefreshStatePath = ${JSON.stringify(path.join(binDir, "branch-refresh-state"))};
const adoptionStatePath = ${JSON.stringify(path.join(binDir, "adoption-started"))};
const externalBinding = ${JSON.stringify(externalBinding)};
const reviewedBaseSha = ${JSON.stringify(reviewedBaseSha)};
const branchRefreshed = () => fs.existsSync(branchRefreshStatePath);
if (process.env.GH_CALL_LOG) fs.appendFileSync(process.env.GH_CALL_LOG, JSON.stringify(args) + "\\n");
function write(value) {
  process.stdout.write(JSON.stringify(value));
}
function checkRuns() {
  return fs.existsSync(checkStatePath)
    ? JSON.parse(fs.readFileSync(checkStatePath, "utf8"))
    : [];
}
function writeCheck(check) {
  const checks = checkRuns().filter((item) => item.external_id !== check.external_id);
  checks.push(check);
  fs.writeFileSync(checkStatePath, JSON.stringify(checks));
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
    updated_at: branchRefreshed() ? "2026-06-11T05:07:31Z" : ${JSON.stringify(issueUpdatedAt)},
    labels: fs.existsSync(adoptionStatePath) && ${JSON.stringify(adoptionLabels)} ? ${JSON.stringify(adoptionLabels)} : ${JSON.stringify(labels)},
    author_association: "NONE",
    pull_request: { url: "https://api.github.com/repos/openclaw/openclaw/pulls/60063" }
  });
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/pulls/60063") {
  write({
    number: 60063,
    state: "open",
    draft: false,
    updated_at: branchRefreshed() ? "2026-06-11T05:07:31Z" : "2026-06-11T05:07:30Z",
    labels: fs.existsSync(adoptionStatePath) && ${JSON.stringify(adoptionLabels)} ? ${JSON.stringify(adoptionLabels)} : ${JSON.stringify(labels)},
    base: { ref: "main", sha: externalBinding ? ${JSON.stringify(CURRENT_MAIN_SHA)} : "current-main" },
    head: {
      sha: branchRefreshed() ? ${JSON.stringify(refreshedHeadSha)} : ${JSON.stringify(headSha)},
      ref: ${JSON.stringify(headRef)},
      repo: { full_name: ${JSON.stringify(headRepo)} }
    },
    maintainer_can_modify: ${JSON.stringify(maintainerCanModify)},
    merged_at: merged ? "2026-06-11T05:09:00Z" : null,
    merge_commit_sha: externalBinding
      ? (merged
          ? ${JSON.stringify(SQUASH_COMMIT_SHA)}
          : (branchRefreshed()
              ? ${JSON.stringify(refreshedTestMergeSha)}
              : ${JSON.stringify(TEST_MERGE_SHA)}))
      : (merged ? "c".repeat(40) : null)
  });
} else if (args[0] === "api" && args[1].startsWith("repos/openclaw/openclaw/issues/60063/comments")) {
  const comments = ${JSON.stringify(issueComments)};
  write(args.includes("--slurp") ? [comments] : comments);
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/ref/heads/main") {
  write({
    object: {
      sha: externalBinding
        ? (${JSON.stringify(mainMovesAfterPendingCheck)} && checkRuns().some((check) => check.status === "in_progress")
            ? ${JSON.stringify(MOVED_MAIN_SHA)}
            : (branchRefreshed() ? ${JSON.stringify(mainAfterRefreshSha)} : ${JSON.stringify(CURRENT_MAIN_SHA)}))
        : "current-main"
    }
  });
} else if (
  externalBinding &&
  ${JSON.stringify(branchRefresh)} &&
  args[0] === "api" &&
  args[1] === "repos/openclaw/openclaw/pulls/60063/update-branch" &&
  args.includes("PUT")
) {
  const inputIndex = args.indexOf("--input");
  const payload = JSON.parse(fs.readFileSync(args[inputIndex + 1], "utf8"));
  if (payload.expected_head_sha !== ${JSON.stringify(headSha)}) {
    process.stderr.write("expected_head_sha mismatch\\n");
    process.exit(1);
  }
  fs.writeFileSync(branchRefreshStatePath, "refreshed");
  write({ message: "Updating pull request branch.", url: "https://api.github.test/update-branch" });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/rules/branches/main") {
  write(${JSON.stringify(exactMergeRule)} ? [
    {
      type: "required_status_checks",
      parameters: {
        strict_required_status_checks_policy: true,
        required_status_checks: [
          { context: "clownfish/exact-merge", integration_id: 3535277 }
        ]
      }
    }
  ] : []);
} else if (
  externalBinding &&
  args[0] === "api" &&
  (
    args[1].startsWith("repos/openclaw/openclaw/commits/${TEST_MERGE_SHA}/check-runs?") ||
    args[1].startsWith("repos/openclaw/openclaw/commits/${refreshedTestMergeSha}/check-runs?")
  )
) {
  const checks = checkRuns();
  write({ total_count: checks.length, check_runs: checks });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/check-runs" && args.includes("POST")) {
  const inputIndex = args.indexOf("--input");
  const payload = JSON.parse(fs.readFileSync(args[inputIndex + 1], "utf8"));
  const check = {
    id: 4242,
    name: payload.name,
    head_sha: payload.head_sha,
    external_id: payload.external_id,
    status: payload.status,
    conclusion: payload.conclusion,
    completed_at: "2026-06-11T05:08:02Z",
    app: { id: 3535277 }
  };
  writeCheck(check);
  write(check);
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/check-runs/4242" && args.includes("PATCH")) {
  const inputIndex = args.indexOf("--input");
  const payload = JSON.parse(fs.readFileSync(args[inputIndex + 1], "utf8"));
  const existing = checkRuns().find((item) => item.id === 4242);
  const check = {
    id: 4242,
    name: payload.name,
    head_sha: existing?.head_sha ?? ${JSON.stringify(TEST_MERGE_SHA)},
    external_id: existing?.external_id,
    status: payload.status,
    conclusion: payload.conclusion,
    completed_at: "2026-06-11T05:08:03Z",
    app: { id: 3535277 }
  };
  writeCheck(check);
  write(check);
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/commits/${TEST_MERGE_SHA}") {
  write({
    sha: ${JSON.stringify(TEST_MERGE_SHA)},
    tree: { sha: ${JSON.stringify(MERGE_TREE_SHA)} },
    parents: [{ sha: ${JSON.stringify(mergeBaseSha)} }, { sha: ${JSON.stringify(headSha)} }]
  });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/commits/${refreshedHeadSha}") {
  write({
    sha: ${JSON.stringify(refreshedHeadSha)},
    parents: [
      { sha: ${JSON.stringify(headSha)} },
      { sha: ${JSON.stringify(reviewedBaseSha)} }
    ]
  });
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/commits/${refreshedTestMergeSha}") {
  write({
    sha: ${JSON.stringify(refreshedTestMergeSha)},
    tree: { sha: ${JSON.stringify(REFRESHED_MERGE_TREE_SHA)} },
    parents: [
      { sha: ${JSON.stringify(reviewedBaseSha)} },
      { sha: ${JSON.stringify(refreshedHeadSha)} }
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
} else if (externalBinding && args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/trees/${REFRESHED_MERGE_TREE_SHA}?recursive=1") {
  write({
    truncated: false,
    tree: [
      { path: "src/cli/effective.ts", mode: "100644", type: "blob", sha: ${JSON.stringify(refreshedMergeBlobSha)} },
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
    const comments =
      ${JSON.stringify(pendingCheckAdoptionIssueComments)} &&
      checkRuns().some((check) => check.status === "in_progress")
        ? ${JSON.stringify(pendingCheckAdoptionIssueComments)}
        : ${JSON.stringify(adoptionIssueComments)};
    write({ data: { repository: { pullRequest: { comments: { nodes: comments } } } } });
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
    statusCheckRollup: ${JSON.stringify(statusCheckRollup)}
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
    });
  }
}

function writeAdoptionValidationStubs(
  binDir,
  { driftPath, driftCommitCount, linear, validationFailure },
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
const mergeEntry = ${JSON.stringify(`100644 blob ${ADOPTION_MERGE_BLOB_SHA}\tsrc/cli/effective.ts\0`)};
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
  if (args[1] === "origin/main") console.log(${JSON.stringify(CURRENT_MAIN_SHA)});
  else if (args[1] === "--is-shallow-repository") console.log("false");
  else if (args[1] === "HEAD^{tree}") console.log(${JSON.stringify(MERGE_TREE_SHA)});
  else if (args[1] === "HEAD^") console.log(${JSON.stringify(CURRENT_MAIN_SHA)});
  else console.log(state === "adopted" ? ${JSON.stringify(adoptedSyntheticSha)} : state === "reviewed" ? ${JSON.stringify(reviewedSyntheticSha)} : ${JSON.stringify(EXPECTED_HEAD_SHA)});
  process.exit(0);
}
if (args[0] === "merge-base" && args[1] === "--is-ancestor") process.exit(${linear ? 0 : 1});
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
  else if (treeish === ${JSON.stringify(REVIEWED_MERGE_TREE_SHA)}) process.stdout.write(mergeEntry);
  else if (treeish === ${JSON.stringify(CURRENT_MAIN_SHA)}) process.stdout.write(baseEntry + extraEntry);
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

function mergeJobMarkdown() {
  return `---
repo: openclaw/openclaw
cluster_id: stale-merge-test
mode: autonomous
allowed_actions:
  - merge
blocked_actions:
  - force_push
allow_merge: true
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
  baseAdoptionManifest = null,
} = {}) {
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
        base_adoption_manifest: baseAdoptionManifest,
      },
    ],
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
    test_merge_sha: TEST_MERGE_SHA,
    test_merge_tree_sha: MERGE_TREE_SHA,
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
