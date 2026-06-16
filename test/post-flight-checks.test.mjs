import assert from "node:assert/strict";
import test from "node:test";

import {
  shouldRequirePrChecks,
  shouldWaitForMergeReadiness,
  validateStatusChecks,
} from "../scripts/post-flight-checks.mjs";

test("post-flight requires PR checks unless explicitly disabled", () => {
  assert.equal(shouldRequirePrChecks(undefined), true);
  assert.equal(shouldRequirePrChecks("1"), true);
  assert.equal(shouldRequirePrChecks("0"), false);
});

test("post-flight waits for checks to register instead of merging through an empty rollup", () => {
  const mergeBlock = validateStatusChecks([]);

  assert.equal(mergeBlock, "no PR checks found");
  assert.equal(shouldWaitForMergeReadiness({ mergeBlock, view: { statusCheckRollup: [] } }), true);
});

test("post-flight does not treat ignored checks as readiness proof", () => {
  const checks = [{ name: "auto-response", status: "COMPLETED", conclusion: "SUCCESS" }];
  const mergeBlock = validateStatusChecks(checks);

  assert.equal(mergeBlock, "no PR checks found");
  assert.equal(shouldWaitForMergeReadiness({ mergeBlock, view: { statusCheckRollup: checks } }), true);
});

test("post-flight waits for pending checks and blocks terminal failures", () => {
  const pending = [{ name: "CI", status: "IN_PROGRESS", conclusion: null }];
  const pendingBlock = validateStatusChecks(pending);
  assert.equal(pendingBlock, "checks are not clean: CI: IN_PROGRESS");
  assert.equal(shouldWaitForMergeReadiness({ mergeBlock: pendingBlock, view: { statusCheckRollup: pending } }), true);

  const failed = [{ name: "CI", status: "COMPLETED", conclusion: "FAILURE" }];
  const failedBlock = validateStatusChecks(failed);
  assert.equal(failedBlock, "checks are not clean: CI: FAILURE");
  assert.equal(shouldWaitForMergeReadiness({ mergeBlock: failedBlock, view: { statusCheckRollup: failed } }), false);
});

test("post-flight accepts completed passing checks", () => {
  const passing = [{ name: "CI", status: "COMPLETED", conclusion: "SUCCESS" }];
  assert.equal(validateStatusChecks(passing), "");
});
