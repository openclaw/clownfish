import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const EXPECTED_HEAD_SHA = "a".repeat(40);
const CHANGED_HEAD_SHA = "b".repeat(40);

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
  },
) {
  const ghPath = path.join(binDir, "gh");
  const viewCountPath = path.join(binDir, "view-count");
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
const fs = require("node:fs");
const args = process.argv.slice(2);
const merged = Boolean(process.env.MERGE_STATE && fs.existsSync(process.env.MERGE_STATE));
const mergeViews = ${JSON.stringify(mergeViews)};
const viewCountPath = ${JSON.stringify(viewCountPath)};
if (process.env.GH_CALL_LOG) fs.appendFileSync(process.env.GH_CALL_LOG, JSON.stringify(args) + "\\n");
function write(value) {
  process.stdout.write(JSON.stringify(value));
}
if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/issues/60063") {
  write({
    number: 60063,
    state: "open",
    title: "streaming fix",
    updated_at: ${JSON.stringify(issueUpdatedAt)},
    labels: ${JSON.stringify(labels)},
    author_association: "NONE",
    pull_request: { url: "https://api.github.com/repos/openclaw/openclaw/pulls/60063" }
  });
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/pulls/60063") {
  write({
    number: 60063,
    state: "open",
    draft: false,
    updated_at: "2026-06-11T05:07:30Z",
    labels: ${JSON.stringify(labels)},
    base: { ref: "main", sha: "current-main" },
    head: { sha: ${JSON.stringify(headSha)} },
    merged_at: merged ? "2026-06-11T05:09:00Z" : null,
    merge_commit_sha: merged ? "c".repeat(40) : null
  });
} else if (args[0] === "api" && args[1].startsWith("repos/openclaw/openclaw/issues/60063/comments")) {
  write([${JSON.stringify(issueComments)}]);
} else if (args[0] === "api" && args[1] === "repos/openclaw/openclaw/git/ref/heads/main") {
  write({ object: { sha: "current-main" } });
} else if (args[0] === "api" && args[1] === "graphql") {
  write({ data: { repository: { pullRequest: { reviewThreads: { pageInfo: { hasNextPage: false }, nodes: [] } } } } });
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
  fs.writeFileSync(process.env.MERGE_STATE, "merged");
} else {
  process.stderr.write("unexpected gh call: " + args.join(" ") + "\\n");
  process.exit(1);
}
`,
  );
  fs.chmodSync(ghPath, 0o755);
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

function mergeResultJson() {
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
        idempotency_key: "openclaw/openclaw#60063:merge:stale-test",
        expected_head_sha: EXPECTED_HEAD_SHA,
      },
    ],
    merge_preflight: [
      {
        target: "#60063",
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
      },
    ],
  };
}
