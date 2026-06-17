import assert from "node:assert/strict";
import test from "node:test";
import { isActiveInboxJob, selectRetryableFailedRuns } from "../scripts/self-heal-selection.mjs";

function record(runId, overrides = {}) {
  return {
    run_id: String(runId),
    source_job: `jobs/openclaw/inbox/cluster-${runId}.md`,
    workflow_conclusion: "failure",
    result_status: "planned",
    fix_actions: [],
    apply_actions: [],
    ...overrides,
  };
}

test("self-heal retries only explicit recoverable executor failures", () => {
  const candidates = selectRetryableFailedRuns([
    record(1),
    record(2, { result_status: "needs_human" }),
    record(4, { fix_actions: [{ action: "repair_contributor_branch", status: "failed" }] }),
    record(5, {
      fix_actions: [
        {
          action: "open_fix_pr",
          status: "blocked",
          retry_recommended: true,
          recoverable_branch_pushed: true,
        },
      ],
    }),
    record(6, {
      fix_actions: [
        { action: "repair_contributor_branch", status: "failed" },
        { action: "open_fix_pr", status: "opened" },
      ],
    }),
    record(7, {
      fix_actions: [
        { action: "repair_contributor_branch", status: "failed" },
        {
          action: "open_fix_pr",
          status: "blocked",
          retry_recommended: true,
          recoverable_branch_pushed: true,
        },
      ],
      apply_actions: [{ action: "merge_canonical", status: "executed" }],
    }),
    record(8, {
      source_job: "jobs/openclaw/outbox/finalized/cluster-8.md",
      fix_actions: [
        {
          action: "open_fix_pr",
          status: "blocked",
          retry_recommended: true,
          recoverable_branch_pushed: true,
        },
      ],
    }),
    record(9, {
      fix_actions: [
        {
          action: "execute_fix",
          status: "blocked",
          code: "source_pr_head_fetch_failed",
          retry_recommended: true,
        },
      ],
    }),
  ]);

  assert.deepEqual(
    candidates.map((candidate) => [candidate.run_id, candidate.self_heal_reason]),
    [
      ["9", "retryable source PR head fetch failed"],
      ["5", "recoverable fix execution failed"],
    ],
  );
});

test("self-heal uses the latest run for each job before applying retry policy", () => {
  const sourceJob = "jobs/openclaw/inbox/cluster.md";
  const candidates = selectRetryableFailedRuns([
    record(10, {
      source_job: sourceJob,
      fix_actions: [
        {
          action: "open_fix_pr",
          status: "blocked",
          retry_recommended: true,
          recoverable_branch_pushed: true,
        },
      ],
    }),
    record(11, { source_job: sourceJob, result_status: "planned" }),
  ]);

  assert.deepEqual(candidates, []);
});

test("self-heal skips already-attempted source jobs unless repeats are explicit", () => {
  const failed = record(12, {
    fix_actions: [
      {
        action: "open_fix_pr",
        status: "blocked",
        retry_recommended: true,
        recoverable_branch_pushed: true,
      },
    ],
  });
  const attempts = [{ source_job: failed.source_job }];

  assert.deepEqual(selectRetryableFailedRuns([failed], attempts), []);
  assert.equal(selectRetryableFailedRuns([failed], attempts, { allowRepeat: true }).length, 1);
});

test("self-heal treats only current inbox paths as active", () => {
  assert.equal(isActiveInboxJob("jobs/openclaw/inbox/cluster.md"), true);
  assert.equal(isActiveInboxJob("jobs/openclaw/outbox/finalized/cluster.md"), false);
});
