import assert from "node:assert/strict";
import test from "node:test";

import {
  evaluateValidationBaseDrift,
  isValidationDriftControlFile,
  MAX_VALIDATION_BASE_DRIFT_COMMITS,
} from "../scripts/base-drift-validation.mjs";

const OLD_BASE = "1".repeat(40);
const NEW_BASE = "2".repeat(40);
const HEAD = "3".repeat(40);

function reusableDrift(overrides = {}) {
  return evaluateValidationBaseDrift({
    validationCommands: ["pnpm check:changed"],
    validatedHeadSha: HEAD,
    currentHeadSha: HEAD,
    validatedBaseSha: OLD_BASE,
    currentBaseSha: NEW_BASE,
    validatedBaseIsAncestorOfHead: true,
    validatedBaseIsAncestorOfCurrentBase: true,
    driftCommitCount: 2,
    branchFiles: ["src/reply/dedupe.ts", "src/reply/dedupe.test.ts"],
    baseDriftFiles: ["docs/gateway.md"],
    branchAreas: ["src/reply"],
    baseDriftAreas: ["docs"],
    evidenceComplete: true,
    ...overrides,
  });
}

test("accepts bounded irrelevant fast-forward base drift", () => {
  const decision = reusableDrift();

  assert.equal(decision.status, "reused");
  assert.deepEqual(decision.proof, {
    status: "reused",
    validation_command: "pnpm check:changed",
    validated_head_sha: HEAD,
    validated_base_sha: OLD_BASE,
    reviewed_base_sha: NEW_BASE,
    head_unchanged: true,
    base_fast_forward: true,
    drift_commit_count: 2,
    branch_changed_files: ["src/reply/dedupe.test.ts", "src/reply/dedupe.ts"],
    base_drift_files: ["docs/gateway.md"],
    branch_areas: ["src/reply"],
    base_drift_areas: ["docs"],
    validation_control_files_changed: [],
    evidence_complete: true,
    bounds: {
      max_commits: 64,
      max_files_per_side: 128,
    },
  });
});

test("rejects overlapping changed paths", () => {
  const decision = reusableDrift({ baseDriftFiles: ["src/reply/dedupe.ts"], baseDriftAreas: ["src/reply"] });

  assert.equal(decision.status, "rejected");
  assert.equal(decision.reason, "overlapping_changed_paths");
});

test("rejects disjoint paths in an overlapping affected area", () => {
  const decision = reusableDrift({
    baseDriftFiles: ["src/reply/format.ts"],
    baseDriftAreas: ["src/reply"],
  });

  assert.equal(decision.status, "rejected");
  assert.equal(decision.reason, "overlapping_affected_areas");
});

test("rejects non-fast-forward base movement", () => {
  const decision = reusableDrift({ validatedBaseIsAncestorOfCurrentBase: false });

  assert.equal(decision.status, "rejected");
  assert.equal(decision.reason, "base_advance_not_fast_forward");
});

test("rejects a changed validated head", () => {
  const decision = reusableDrift({ currentHeadSha: "4".repeat(40) });

  assert.equal(decision.status, "rejected");
  assert.equal(decision.reason, "validated_head_changed");
});

test("rejects validation commands other than one normalized changed gate", () => {
  for (const validationCommands of [
    ["corepack pnpm check:changed"],
    ["pnpm check:changed", "git diff --check"],
    ["pnpm test:serial src/reply/dedupe.test.ts"],
  ]) {
    const decision = reusableDrift({ validationCommands });
    assert.equal(decision.status, "rejected");
    assert.equal(decision.reason, "unsupported_validation_command");
  }
});

test("rejects package-manager, TypeScript config, and changed-gate control drift", () => {
  for (const file of [
    "package.json",
    "pnpm-lock.yaml",
    "configs/tsconfig.build.json",
    "scripts/check-changed.mjs",
    `scripts/changed-gate${"-".repeat(10_000)}.mjs`,
  ]) {
    assert.equal(isValidationDriftControlFile(file), true);
    const decision = reusableDrift({ baseDriftFiles: [file] });
    assert.equal(decision.status, "rejected");
    assert.equal(decision.reason, "validation_control_file_drift");
  }
});

test("rejects incomplete or unbounded evidence", () => {
  assert.equal(reusableDrift({ evidenceComplete: false }).reason, "incomplete_evidence");
  assert.equal(reusableDrift({ baseDriftFiles: [" docs/drift.md"] }).reason, "incomplete_evidence");
  assert.equal(
    reusableDrift({ driftCommitCount: MAX_VALIDATION_BASE_DRIFT_COMMITS + 1 }).reason,
    "unbounded_commit_drift",
  );
  assert.equal(
    reusableDrift({ baseDriftFiles: Array.from({ length: 129 }, (_, index) => `docs/drift-${index}.md`) }).reason,
    "unbounded_file_drift",
  );
});
