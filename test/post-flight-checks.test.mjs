import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

import {
  shouldRequirePrChecks,
  shouldWaitForMergeReadiness,
  validateMergePreflightBinding,
  validateStatusChecks,
} from "../scripts/post-flight-checks.mjs";

const HEAD_SHA = "a".repeat(40);
const BASE_SHA = "b".repeat(40);
const repoRoot = path.resolve(import.meta.dirname, "..");

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

test("post-flight binds merge preflight to the reviewed head and base", () => {
  assert.equal(
    validateMergePreflightBinding({
      preflight: { head_sha: HEAD_SHA, base_sha: BASE_SHA },
      headSha: HEAD_SHA,
      baseSha: BASE_SHA,
    }),
    "",
  );
  assert.match(
    validateMergePreflightBinding({
      preflight: { head_sha: "c".repeat(40), base_sha: BASE_SHA },
      headSha: HEAD_SHA,
      baseSha: BASE_SHA,
    }),
    /head_sha does not match/,
  );
  assert.match(
    validateMergePreflightBinding({
      preflight: { head_sha: HEAD_SHA, base_sha: "c".repeat(40) },
      headSha: HEAD_SHA,
      baseSha: BASE_SHA,
    }),
    /base_sha does not match/,
  );
});

test("post-flight rejects unbound merge preflight evidence", () => {
  assert.match(
    validateMergePreflightBinding({
      preflight: {},
      headSha: HEAD_SHA,
      baseSha: BASE_SHA,
    }),
    /head_sha is missing or invalid/,
  );
});

test("post-flight compares reviewed base proof with the live base ref head", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "post-flight.mjs"), "utf8");

  assert.match(source, /const liveBaseSha = baseRef === "main" \? fetchBranchHeadSha\(result\.repo, baseRef\) : "";/);
  assert.match(source, /baseSha: liveBaseSha,/);
  assert.doesNotMatch(source, /baseSha: pull\.base\?\.sha/);
});
