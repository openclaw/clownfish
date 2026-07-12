import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const intakeWorkflow = fs.readFileSync(
  path.join(repoRoot, ".github", "workflows", "checks-success-preflight-intake.yml"),
  "utf8",
);

test("autonomous live PR inventory defaults to stale candidates and terminal result filtering", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh);
  writePublishedResult(path.join(fixture.results, "processed.md"));

  const autonomous = runImport(fixture);
  assert.equal(autonomous.status, 0, autonomous.stderr || autonomous.stdout);
  const autonomousPayload = JSON.parse(autonomous.stdout);

  assert.equal(autonomousPayload.options.bucket, "stale_unassigned");
  assert.equal(autonomousPayload.options.existing_results_action_policy, "terminal");
  assert.deepEqual(autonomousPayload.candidates.map((candidate) => candidate.ref), ["#101", "#104"]);

  const broad = runImport(fixture, "--bucket", "all", "--existing-results-action-policy", "all");
  assert.equal(broad.status, 0, broad.stderr || broad.stdout);
  assert.deepEqual(JSON.parse(broad.stdout).candidates.map((candidate) => candidate.ref), ["#104", "#105", "#106", "#108"]);
});

test("plan inventory defaults result coverage to terminal actions", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh);
  writePublishedResult(path.join(fixture.results, "processed.md"));

  const plan = runImport(fixture, "--mode", "plan", "--strategy", "remediation", "--bucket", "all");
  assert.equal(plan.status, 0, plan.stderr || plan.stdout);
  const payload = JSON.parse(plan.stdout);

  assert.equal(payload.options.existing_results_action_policy, "terminal");
  const candidates = new Set(payload.candidates.map((candidate) => candidate.ref));
  assert.equal(candidates.has("#101"), true);
  assert.equal(candidates.has("#104"), true);
  assert.equal(candidates.has("#102"), false);
  assert.equal(candidates.has("#103"), false);
});

test("live PR inventory protects active structured job refs but not archived or incidental references", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh);
  writeExistingJob(path.join(fixture.out, "active.md"), "#101", "mentions #102 in notes");
  writeExistingJob(path.join(fixture.root, "outbox", "finalized", "archived.md"), "#104");

  const result = runImport(fixture, "--default-existing-dir", "--bucket", "all");
  assert.equal(result.status, 0, result.stderr || result.stdout);

  const candidates = new Set(JSON.parse(result.stdout).candidates.map((candidate) => candidate.ref));
  assert.equal(candidates.has("#101"), false);
  assert.equal(candidates.has("#102"), true);
  assert.equal(candidates.has("#104"), true);
});

test("remediation inventory enables plan and autonomous finalization recommendations", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh);

  const remediation = runImport(
    fixture,
    "--write",
    "--mode",
    "plan",
    "--strategy",
    "remediation",
    "--bucket",
    "ready_for_maintainer",
  );
  assert.equal(remediation.status, 0, remediation.stderr || remediation.stdout);
  const payload = JSON.parse(remediation.stdout);

  assert.equal(payload.options.strategy, "remediation");
  assert.equal(payload.options.bucket, "ready_for_maintainer");
  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#106"]);

  const job = fs.readFileSync(path.join(fixture.out, path.basename(payload.generated[0].path)), "utf8");
  assert.match(job, /mode: plan/);
  assert.match(job, /  - "merge"/);
  assert.match(job, /  - "fix"/);
  assert.match(job, /blocked_actions:\n  - "comment"/);
  assert.match(job, /allow_fix_pr: true/);
  assert.match(job, /allow_merge: true/);
  assert.match(job, /allow_post_merge_close: false/);
  assert.match(job, /plan-only remediation assessment/);
  assert.match(job, /complete merge preflight is required only for a merge recommendation; a repair requires a complete executable fix artifact/);
  assert.match(job, /Missing merge preflight alone is not a `needs_human` reason/);
  assert.match(job, /concrete repair with a complete executable `fix_artifact`/);
  assert.match(job, /classify the PR `keep_related` or `keep_independent`/);

  const autonomous = runImport(
    fixture,
    "--write",
    "--strategy",
    "remediation",
    "--bucket",
    "ready_for_maintainer",
    "--skip-existing",
    "false",
  );
  assert.equal(autonomous.status, 0, autonomous.stderr || autonomous.stdout);
  const autonomousPayload = JSON.parse(autonomous.stdout);
  const autonomousJob = fs.readFileSync(path.join(fixture.out, path.basename(autonomousPayload.generated[0].path)), "utf8");
  assert.match(autonomousJob, /mode: autonomous/);
  assert.match(autonomousJob, /autonomous remediation assessment/);
  assert.match(autonomousJob, /Mutations are limited to deterministic merge\/fix gates/);
  assert.match(autonomousJob, /deterministic applicator\/executor owns the actual merge or fix PR mutation/);
});

test("autonomous remediation defaults to hydrated pr-list intake", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh);

  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--bucket",
    "ready_for_maintainer",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.equal(payload.options.inventory_source, "pr-list");
  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#109", "#110"]);
});

test("live PR inventory accepts --key=value argument form", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh);
  writeExistingJob(path.join(fixture.existing, "active.md"), "#101");

  const result = runImport(fixture, "--bucket", "all", "--skip-existing=false");
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.equal(payload.options.skip_existing, false);
  assert.equal(payload.candidates.some((candidate) => candidate.ref === "#101"), true);
});

test("live low-signal inventory blocks proof, merge-risk, maintainer, and focused fix candidates", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, { includeLowSignal: true });

  const result = runImport(
    fixture,
    "--strategy",
    "low-signal",
    "--inventory-source",
    "search",
    "--min-score",
    "1",
    "--skip-existing",
    "false",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#123"]);
});

test("remediation inventory can use search source for faster ready PR intake", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh);
  writeExistingJob(path.join(fixture.existing, "active.md"), "#106");

  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--inventory-source",
    "search",
    "--bucket",
    "ready_for_maintainer",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.equal(payload.options.inventory_source, "search");
  assert.equal(payload.options.search_limit, 1000);
  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#109"]);
  assert.equal(payload.totals.fetched_open_prs, 4);
});

test("remediation inventory pr-list source filters obvious merge blockers", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh);
  writeExistingJob(path.join(fixture.existing, "active.md"), "#109");

  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--inventory-source",
    "pr-list",
    "--bucket",
    "ready_for_maintainer",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.equal(payload.options.inventory_source, "pr-list");
  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#110"]);
  assert.equal(payload.totals.fetched_open_prs, 2);
});

test("remediation inventory pr-list source filters merge-risk candidates by default", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, { includeRiskPrList: true });

  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--inventory-source",
    "pr-list",
    "--bucket",
    "ready_for_maintainer",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.equal(payload.candidates.some((candidate) => candidate.ref === "#113"), false);
  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#109", "#110"]);
});

test("remediation inventory filters title-only noise candidates", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, { includeNoisePrList: true });

  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--inventory-source",
    "pr-list",
    "--bucket",
    "ready_for_maintainer",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.equal(payload.candidates.some((candidate) => candidate.ref === "#118"), false);
  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#109", "#110"]);
});

test("remediation inventory routes opted-in merge-risk candidates to repair-only jobs", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, { includeRiskPrList: true, includeSecondRiskPrList: true });

  const result = runImport(
    fixture,
    "--write",
    "--strategy",
    "remediation",
    "--inventory-source",
    "pr-list",
    "--include-merge-risk-candidates",
    "--bucket",
    "merge_risk_remediation",
    "--batch-size",
    "5",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#113", "#119"]);
  assert.equal(payload.options.batch_size, 1);
  assert.equal(payload.generated.length, 2);
  assert.equal(payload.generated[0].bucket, "merge_risk_remediation");

  const job = fs.readFileSync(path.join(fixture.out, path.basename(payload.generated[0].path)), "utf8");
  assert.match(job, /candidates:\n  - "#113"\ncluster_refs:\n  - "#113"/);
  assert.match(job, /allowed_actions:\n  - "fix"\n  - "raise_pr"/);
  assert.match(job, /blocked_actions:[\s\S]*  - "merge"/);
  assert.match(job, /allow_merge: false/);
  assert.match(job, /Merge-risk candidates are repair-only and must not be merged from this shard/);
  assert.match(job, /Do not emit `merge_candidate`/);
});

test("remediation inventory emits exact-head singleton conflicting branch repair jobs", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, { includeConflictingBranchRepairPrList: true });

  const result = runImport(
    fixture,
    "--write",
    "--strategy",
    "remediation",
    "--inventory-source",
    "pr-list",
    "--bucket",
    "conflicting_branch_repair",
    "--batch-size",
    "5",
    "--skip-existing",
    "false",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.deepEqual(
    payload.candidates.map((candidate) => [candidate.ref, candidate.repair_profile]),
    [
      ["#130", "rebase_only"],
      ["#131", "review_fix"],
      ["#132", "review_fix"],
      ["#138", "rebase_only"],
    ],
  );
  assert.equal(payload.options.batch_size, 1);
  assert.equal(payload.generated.length, 4);
  assert.equal(payload.generated.every((item) => item.candidates.length === 1), true);

  const rebaseJob = fs.readFileSync(path.join(fixture.out, path.basename(payload.generated[0].path)), "utf8");
  assert.match(rebaseJob, /canonical:\n  - "#130"/);
  assert.match(rebaseJob, /expected_head_shas:\n  - "#130=[0-9a-f]{40}"/);
  assert.match(rebaseJob, /repair_strategy: repair_contributor_branch/);
  assert.match(rebaseJob, /rebase_only: true/);
  assert.match(rebaseJob, /allowed_actions:\n  - "fix"\n  - "raise_pr"\n  - "force_push"/);
  assert.doesNotMatch(rebaseJob, /blocked_actions:\n(?:  - ".+"\n)*  - "force_push"/);
  assert.match(rebaseJob, /maintainer_calibration:/);
  assert.match(rebaseJob, /profile=rebase_only/);

  const reviewFixJob = fs.readFileSync(path.join(fixture.out, path.basename(payload.generated[2].path)), "utf8");
  assert.match(reviewFixJob, /canonical:\n  - "#132"/);
  assert.doesNotMatch(reviewFixJob, /rebase_only: true/);
  assert.match(reviewFixJob, /exact-current-head actionable ClawSweeper finding/);
  assert.match(reviewFixJob, /profile=review_fix/);

  const refs = new Set(payload.candidates.map((candidate) => candidate.ref));
  for (const skipped of ["#133", "#134", "#135", "#136", "#137"]) {
    assert.equal(refs.has(skipped), false, skipped);
  }

  const rerun = runImport(
    fixture,
    "--write",
    "--strategy",
    "remediation",
    "--inventory-source",
    "pr-list",
    "--bucket",
    "conflicting_branch_repair",
    "--batch-size",
    "5",
    "--skip-existing",
    "false",
    "--limit",
    "all",
  );
  assert.equal(rerun.status, 0, rerun.stderr || rerun.stdout);
  const retryPayload = JSON.parse(rerun.stdout);
  assert.equal(retryPayload.generated.length, 4);
  assert.equal(retryPayload.generated.every((item) => item.retry === true), true);

  for (const item of payload.generated) {
    fs.writeFileSync(
      path.join(fixture.results, `${item.cluster_id}.md`),
      `---
repo: "openclaw/openclaw"
cluster_id: "${item.cluster_id}"
mode: "autonomous"
---
`,
    );
  }
  const completedRerun = runImport(
    fixture,
    "--write",
    "--strategy",
    "remediation",
    "--inventory-source",
    "pr-list",
    "--bucket",
    "conflicting_branch_repair",
    "--batch-size",
    "5",
    "--skip-existing",
    "false",
    "--limit",
    "all",
  );
  assert.equal(completedRerun.status, 0, completedRerun.stderr || completedRerun.stdout);
  assert.equal(JSON.parse(completedRerun.stdout).generated.length, 0);
});

test("remediation inventory can hydrate only included refs", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, { failPrList: true, includeRiskPrList: true });
  const includeRefs = path.join(fixture.root, "refs.txt");
  fs.writeFileSync(includeRefs, ["#110", "#111", "#112", "#113"].join("\n"));

  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--inventory-source",
    "pr-list",
    "--hydrate-include-refs",
    "--include-refs-file",
    includeRefs,
    "--bucket",
    "ready_for_maintainer",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.doesNotMatch(result.stderr, /falling back to search plus per-PR hydration/);
  assert.equal(payload.options.inventory_source, "pr-list");
  assert.equal(payload.options.hydrate_include_refs, true);
  assert.equal(payload.totals.include_refs, 4);
  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#110"]);
  assert.equal(payload.totals.fetched_open_prs, 1);
});

test("checks-success remediation intake filters noisy preflight blockers", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, {
    includeChecksSuccessPreflight: true,
    includeNoisePrList: true,
    requireSearchBase: true,
  });
  writeChecksSuccessJob(path.join(fixture.existing, "retry.md"), "#116", {
    generatedAt: new Date().toISOString(),
    updatedAt: "2026-01-16T00:00:00Z",
  });

  const result = runImport(
    fixture,
    "--write",
    "--strategy",
    "remediation",
    "--checks-success",
    "--limit",
    "30",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.equal(payload.options.inventory_source, "search");
  assert.equal(payload.options.bucket, "all");
  assert.equal(payload.options.checks_success_preflight, true);
  assert.equal(payload.options.checks_success_retry_cooldown_hours, 72);
  assert.equal(payload.options.search_limit, 1000);

  const refs = new Set(payload.candidates.map((candidate) => candidate.ref));
  assert.equal(refs.has("#116"), false);
  assert.equal(refs.has("#114"), true);
  assert.equal(refs.has("#115"), false);
  assert.equal(refs.has("#117"), false);
  assert.equal(refs.has("#118"), false);
  assert.equal(refs.has("#120"), false);
  assert.equal(refs.has("#121"), false);
  assert.match(payload.candidates.find((candidate) => candidate.ref === "#114")?.head_sha ?? "", /^[0-9a-f]{40}$/);

  const job = fs.readFileSync(path.join(fixture.out, path.basename(payload.generated[0].path)), "utf8");
  assert.match(job, /Checks-Success PR External Preflight/);
  assert.match(job, /external-preflight shard/);
  assert.match(job, /external_merge_preflight_required/);
  assert.match(job, /expected_head_shas:\n  - "#114=[0-9a-f]{40}"/);
});

test("checks-success remediation refreshes stale writable branches and defers their preflight", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, {
    includeChecksSuccessPreflight: true,
    staleBaseNumber: 116,
    maintainerCanModifyNumber: 116,
    maintainerCanModifyValue: true,
  });

  const result = runImport(
    fixture,
    "--write",
    "--strategy",
    "remediation",
    "--checks-success",
    "--refresh-stale-checks-success-branches",
    "--limit",
    "30",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.equal(payload.options.refresh_stale_checks_success_branches, true);
  assert.match(payload.options.checks_success_main_sha, /^[0-9a-f]{40}$/);
  assert.equal(payload.candidates.some((candidate) => candidate.ref === "#116"), false);
  assert.deepEqual(payload.checks_success_refreshes, [
    {
      ref: "#116",
      status: "requested",
      reason: "stale_base",
      expected_head_sha: "a".repeat(40),
      base_ref_oid: "c".repeat(40),
      live_main_sha: "b".repeat(40),
      update_method: "rebase",
    },
  ]);
  assert.equal(payload.totals.checks_success_refresh_requested, 1);

  const calls = readFakeGhCalls(fixture);
  assert.equal(calls.filter((call) => call.join(" ") === "api repos/openclaw/openclaw/git/ref/heads/main").length, 1);
  const updateCall = calls.find(
    (call) => call.includes("graphql") && call.some((arg) => arg.includes("updatePullRequestBranch")),
  );
  assert.ok(updateCall);
  assert.equal(updateCall.includes("pullRequestId=PR_116"), true);
  assert.equal(updateCall.includes(`expectedHeadOid=${"a".repeat(40)}`), true);
  assert.equal(updateCall.includes("updateMethod=REBASE"), true);
});

test("checks-success remediation skips stale unwritable or ambiguous branches without mutation", () => {
  for (const scenario of [
    {
      name: "unwritable",
      options: {
        staleBaseNumber: 116,
        maintainerCanModifyNumber: 116,
        maintainerCanModifyValue: false,
      },
      reason: "maintainer_cannot_modify",
      refresh: true,
    },
    {
      name: "missing base snapshot",
      options: { missingBaseNumber: 116 },
      reason: "base_snapshot_unavailable",
      refresh: true,
    },
    {
      name: "refresh disabled",
      options: {
        staleBaseNumber: 116,
        maintainerCanModifyNumber: 116,
        maintainerCanModifyValue: true,
      },
      reason: "refresh_disabled",
      refresh: false,
    },
  ]) {
    const fixture = makeFixture();
    writeFakeGh(fixture.gh, {
      includeChecksSuccessPreflight: true,
      ...scenario.options,
    });
    const result = runImport(
      fixture,
      "--write",
      "--strategy",
      "remediation",
      "--checks-success",
      ...(scenario.refresh ? ["--refresh-stale-checks-success-branches"] : ["--refresh-stale-checks-success-branches=false"]),
      "--limit",
      "30",
    );
    assert.equal(result.status, 0, `${scenario.name}: ${result.stderr || result.stdout}`);
    const payload = JSON.parse(result.stdout);

    assert.equal(payload.candidates.some((candidate) => candidate.ref === "#116"), false, scenario.name);
    assert.equal(
      payload.checks_success_refreshes.some(
        (refresh) => refresh.ref === "#116" && refresh.status === "skipped" && refresh.reason === scenario.reason,
      ),
      true,
      scenario.name,
    );
    assert.equal(
      readFakeGhCalls(fixture).some(
        (call) => call.includes("graphql") && call.some((arg) => arg.includes("updatePullRequestBranch")),
      ),
      false,
      scenario.name,
    );
  }
});

test("daily checks-success workflow opts into bounded branch refresh with minimal App permissions", () => {
  assert.match(intakeWorkflow, /--refresh-stale-checks-success-branches/);
  assert.match(intakeWorkflow, /permission-actions: write/);
  assert.match(intakeWorkflow, /permission-contents: write/);
  assert.match(intakeWorkflow, /permission-pull-requests: read/);
  assert.doesNotMatch(intakeWorkflow, /permission-issues:/);
});

test("checks-success remediation rejects the unhydrated graphql source", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, { includeChecksSuccessPreflight: true });
  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--checks-success",
    "--inventory-source",
    "graphql",
  );

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /--checks-success does not support --inventory-source graphql; use search or pr-list/);
});

test("checks-success remediation retries changed or cooled-down candidates", () => {
  const changedFixture = makeFixture();
  writeFakeGh(changedFixture.gh, { includeChecksSuccessPreflight: true });
  writeChecksSuccessJob(path.join(changedFixture.existing, "changed.md"), "#116", {
    generatedAt: new Date().toISOString(),
    updatedAt: "2026-01-15T00:00:00Z",
  });
  const changedResult = runImport(
    changedFixture,
    "--strategy",
    "remediation",
    "--checks-success",
    "--limit",
    "all",
  );
  assert.equal(changedResult.status, 0, changedResult.stderr || changedResult.stdout);
  assert.equal(JSON.parse(changedResult.stdout).candidates.some((candidate) => candidate.ref === "#116"), true);

  const cooledFixture = makeFixture();
  writeFakeGh(cooledFixture.gh, { includeChecksSuccessPreflight: true });
  writeChecksSuccessJob(path.join(cooledFixture.existing, "cooled.md"), "#116", {
    generatedAt: new Date(Date.now() - 73 * 60 * 60 * 1000).toISOString(),
    updatedAt: "2026-01-16T00:00:00Z",
  });
  const cooledResult = runImport(
    cooledFixture,
    "--strategy",
    "remediation",
    "--checks-success",
    "--limit",
    "all",
  );
  assert.equal(cooledResult.status, 0, cooledResult.stderr || cooledResult.stdout);
  assert.equal(JSON.parse(cooledResult.stdout).candidates.some((candidate) => candidate.ref === "#116"), true);

  const crossRepoFixture = makeFixture();
  writeFakeGh(crossRepoFixture.gh, { includeChecksSuccessPreflight: true });
  writeChecksSuccessJob(path.join(crossRepoFixture.existing, "cross-repo.md"), "#116", {
    repo: "openclaw/clownfish",
    generatedAt: new Date().toISOString(),
    updatedAt: "2026-01-16T00:00:00Z",
  });
  const crossRepoResult = runImport(
    crossRepoFixture,
    "--strategy",
    "remediation",
    "--checks-success",
    "--limit",
    "all",
  );
  assert.equal(crossRepoResult.status, 0, crossRepoResult.stderr || crossRepoResult.stdout);
  assert.equal(JSON.parse(crossRepoResult.stdout).candidates.some((candidate) => candidate.ref === "#116"), true);
});

test("checks-success remediation skips stale search results that cannot hydrate", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, {
    includeChecksSuccessPreflight: true,
    failHydrateNumber: 116,
    failHydrateNotFound: true,
  });
  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--checks-success",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stderr, /hydrate pull request #116 could not be hydrated; skipping candidate/);
  assert.equal(JSON.parse(result.stdout).candidates.some((candidate) => candidate.ref === "#116"), false);
});

test("checks-success remediation skips hydrated candidates without an exact head SHA", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, {
    includeChecksSuccessPreflight: true,
    missingHeadNumber: 116,
  });
  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--checks-success",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stderr, /skip pull request #116 after hydration: head SHA unavailable/);
  assert.equal(JSON.parse(result.stdout).candidates.some((candidate) => candidate.ref === "#116"), false);
});

test("checks-success remediation fails closed on hydration auth errors", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, {
    includeChecksSuccessPreflight: true,
    failHydrateNumber: 116,
    failHydrateAuth: true,
  });
  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--checks-success",
    "--limit",
    "all",
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /HTTP 401: Bad credentials/);
});

test("checks-success remediation polls transient unknown mergeability", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, {
    includeChecksSuccessPreflight: true,
    unknownHydrateNumber: 116,
    unknownHydrateResponses: 2,
  });
  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--checks-success",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stderr, /pull request #116 mergeability is UNKNOWN on attempt 1\/3; polling/);
  assert.match(result.stderr, /pull request #116 mergeability is UNKNOWN on attempt 2\/3; polling/);
  assert.equal(JSON.parse(result.stdout).candidates.some((candidate) => candidate.ref === "#116"), true);
});

test("checks-success remediation defers persistent unknown mergeability to external preflight", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, {
    includeChecksSuccessPreflight: true,
    unknownHydrateNumber: 116,
    unknownHydrateResponses: 3,
  });
  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--checks-success",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(
    result.stderr,
    /pull request #116 mergeability remains UNKNOWN after polling; deferring exact decision to external preflight/,
  );
  assert.equal(JSON.parse(result.stdout).candidates.some((candidate) => candidate.ref === "#116"), true);
});

test("checks-success remediation still blocks known conflicts when another mergeability field is unknown", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, {
    includeChecksSuccessPreflight: true,
    unknownHydrateNumber: 116,
    unknownHydrateResponses: 3,
    unknownMergeableValue: "CONFLICTING",
    unknownMergeStateStatusValue: "UNKNOWN",
  });
  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--checks-success",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stderr, /skip pull request #116 after hydration: mergeable=CONFLICTING merge_state=UNKNOWN/);
  assert.equal(JSON.parse(result.stdout).candidates.some((candidate) => candidate.ref === "#116"), false);
});

test("checks-success remediation still blocks known dirty state when mergeable is unknown", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, {
    includeChecksSuccessPreflight: true,
    unknownHydrateNumber: 116,
    unknownHydrateResponses: 3,
    unknownMergeableValue: "UNKNOWN",
    unknownMergeStateStatusValue: "DIRTY",
  });
  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--checks-success",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stderr, /skip pull request #116 after hydration: mergeable=UNKNOWN merge_state=DIRTY/);
  assert.equal(JSON.parse(result.stdout).candidates.some((candidate) => candidate.ref === "#116"), false);
});

test("remediation inventory pr-list source falls back to per-PR hydration on GitHub 502s", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, { failPrList: true });
  writeExistingJob(path.join(fixture.existing, "active.md"), "#109");

  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--inventory-source",
    "pr-list",
    "--bucket",
    "ready_for_maintainer",
    "--limit",
    "all",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.match(result.stderr, /falling back to search plus per-PR hydration/);
  assert.equal(payload.options.inventory_source, "pr-list");
  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#110"]);
  assert.equal(payload.totals.fetched_open_prs, 1);
});

test("remediation fallback skips one PR when hydration keeps failing", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.gh, { failPrList: true, failHydrateNumber: 109, failHydrateIncident: true });

  const result = runImport(
    fixture,
    "--strategy",
    "remediation",
    "--bucket",
    "ready_for_maintainer",
    "--limit",
    "all",
    "--skip-existing",
    "false",
  );
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);

  assert.match(result.stderr, /hydrate pull request #109 failed after retries; skipping candidate/);
  assert.deepEqual(payload.candidates.map((candidate) => candidate.ref), ["#110"]);
});

function runImport(fixture, ...extraArgs) {
  const write = extraArgs.includes("--write");
  const defaultExistingDir = extraArgs.includes("--default-existing-dir");
  const args = extraArgs.filter((arg) => arg !== "--write" && arg !== "--default-existing-dir");
  return spawnSync(
    process.execPath,
    [
      "scripts/import-github-pr-inventory.mjs",
      "--repo",
      "openclaw/openclaw",
      "--mode",
      "autonomous",
      "--limit",
      "all",
      "--batch-size",
      "10",
      ...(defaultExistingDir ? [] : ["--existing-dir", fixture.existing]),
      "--existing-results-dir",
      fixture.results,
      "--out",
      fixture.out,
      "--gh-bin",
      fixture.gh,
      ...(write ? [] : ["--dry-run"]),
      "--json",
      ...args,
    ],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        CLOWNFISH_CHECKS_SUCCESS_MERGEABILITY_POLL_DELAY_MS: "0",
      },
    },
  );
}

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-live-pr-import-"));
  const out = path.join(root, "out");
  const existing = path.join(root, "existing");
  const results = path.join(root, "results");
  const gh = path.join(root, "fake-gh.mjs");
  const ghCalls = `${gh}.calls`;
  fs.mkdirSync(out, { recursive: true });
  fs.mkdirSync(existing, { recursive: true });
  fs.mkdirSync(results, { recursive: true });
  return { root, out, existing, results, gh, ghCalls };
}

function writeFakeGh(filePath, options = {}) {
  const mainSha = "b".repeat(40);
  const pulls = [101, 102, 103, 104].map((number) => ({
    number,
    title: `candidate ${number}`,
    url: `https://github.com/openclaw/openclaw/pull/${number}`,
    createdAt: "2026-01-01T00:00:00Z",
    updatedAt: `2026-01-0${number - 100}T00:00:00Z`,
    isDraft: false,
    author: { login: `contributor-${number}` },
    authorAssociation: "CONTRIBUTOR",
    labels: { nodes: [] },
    assignees: { nodes: [] },
  }));
  pulls.push(
    {
      number: 105,
      title: "maintainer candidate",
      url: "https://github.com/openclaw/openclaw/pull/105",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-05T00:00:00Z",
      isDraft: true,
      author: { login: "maintainer" },
      authorAssociation: "MEMBER",
      labels: { nodes: [{ name: "maintainer" }] },
      assignees: { nodes: [] },
    },
    {
      number: 106,
      title: "ready candidate",
      url: "https://github.com/openclaw/openclaw/pull/106",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-06T00:00:00Z",
      isDraft: false,
      author: { login: "contributor-106" },
      authorAssociation: "CONTRIBUTOR",
      labels: { nodes: [{ name: "proof: sufficient" }] },
      assignees: { nodes: [] },
    },
    {
      number: 107,
      title: "security candidate",
      url: "https://github.com/openclaw/openclaw/pull/107",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-07T00:00:00Z",
      isDraft: false,
      author: { login: "contributor-107" },
      authorAssociation: "CONTRIBUTOR",
      labels: { nodes: [{ name: "security" }] },
      assignees: { nodes: [] },
    },
    {
      number: 108,
      title: "waiting candidate",
      url: "https://github.com/openclaw/openclaw/pull/108",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-08T00:00:00Z",
      isDraft: false,
      author: { login: "contributor-108" },
      authorAssociation: "CONTRIBUTOR",
      labels: { nodes: [{ name: "proof: sufficient" }, { name: "status: waiting on author" }] },
      assignees: { nodes: [] },
    },
    {
      number: 106,
      title: "ready candidate refreshed",
      url: "https://github.com/openclaw/openclaw/pull/106",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-08T00:00:00Z",
      isDraft: false,
      author: { login: "contributor-106" },
      authorAssociation: "CONTRIBUTOR",
      labels: { nodes: [{ name: "proof: sufficient" }] },
      assignees: { nodes: [] },
    },
  );
  const searchOnlyPull = {
    number: 109,
    title: "search ready candidate",
    url: "https://github.com/openclaw/openclaw/pull/109",
    createdAt: "2026-01-01T00:00:00Z",
    updatedAt: "2026-01-09T00:00:00Z",
    isDraft: false,
    author: { login: "contributor-109" },
    authorAssociation: "CONTRIBUTOR",
    labels: { nodes: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }] },
    assignees: { nodes: [] },
  };
  const cleanPrListPull = {
    id: "PR_110",
    number: 110,
    title: "clean ready candidate",
    url: "https://github.com/openclaw/openclaw/pull/110",
    createdAt: "2026-01-01T00:00:00Z",
    updatedAt: "2026-01-10T00:00:00Z",
    isDraft: false,
    author: { login: "contributor-110" },
    baseRefName: "main",
    baseRefOid: mainSha,
    headRefOid: "a".repeat(40),
    mergeable: "MERGEABLE",
    mergeStateStatus: "CLEAN",
    reviewDecision: "APPROVED",
    statusCheckRollup: [{ name: "test", status: "COMPLETED", conclusion: "SUCCESS", completedAt: "2026-01-10T00:00:00Z" }],
    labels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
    assignees: [],
    commentsCount: 0,
    body: "",
  };
  const searchPulls = [106, 107, 105].map((number) => {
    const pull = pulls.find((item) => item.number === number);
    return {
      ...pull,
      labels: pull.labels.nodes,
      assignees: pull.assignees.nodes,
      commentsCount: Number(pull.comments?.totalCount ?? 0),
      body: "",
    };
  }).concat({
    ...searchOnlyPull,
    labels: searchOnlyPull.labels.nodes,
    assignees: searchOnlyPull.assignees.nodes,
    commentsCount: 0,
    body: "",
  }).concat(options.includeLowSignal ? [
    {
      number: 122,
      title: "feat: add blocked external plugin",
      url: "https://github.com/openclaw/openclaw/pull/122",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-22T00:00:00Z",
      isDraft: false,
      author: { login: "contributor-122" },
      authorAssociation: "CONTRIBUTOR",
      labels: [
        { name: "triage: external-plugin-candidate" },
        { name: "status: needs proof" },
        { name: "merge-risk: automation" },
      ],
      assignees: [],
      commentsCount: 0,
      body: "External plugin proposal.",
    },
    {
      number: 123,
      title: "feat: add clean external plugin",
      url: "https://github.com/openclaw/openclaw/pull/123",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-23T00:00:00Z",
      isDraft: false,
      author: { login: "contributor-123" },
      authorAssociation: "CONTRIBUTOR",
      labels: [{ name: "triage: external-plugin-candidate" }],
      assignees: [],
      commentsCount: 0,
      body: "External plugin proposal.",
    },
    {
      number: 124,
      title: "fix: repair external plugin",
      url: "https://github.com/openclaw/openclaw/pull/124",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-24T00:00:00Z",
      isDraft: false,
      author: { login: "contributor-124" },
      authorAssociation: "CONTRIBUTOR",
      labels: [{ name: "triage: external-plugin-candidate" }],
      assignees: [],
      commentsCount: 0,
      body: "Repairs a broken integration.",
    },
  ] : []).concat(options.failPrList ? [{
    ...cleanPrListPull,
    baseRefName: undefined,
    mergeable: undefined,
    mergeStateStatus: undefined,
    reviewDecision: undefined,
    statusCheckRollup: undefined,
  }] : []);
  const dirtyPrListPull = {
    ...cleanPrListPull,
    number: 111,
    title: "dirty ready candidate",
    url: "https://github.com/openclaw/openclaw/pull/111",
    updatedAt: "2026-01-11T00:00:00Z",
    mergeable: "CONFLICTING",
    mergeStateStatus: "DIRTY",
  };
  const existingPrListPull = {
    ...cleanPrListPull,
    number: 109,
    title: "existing clean ready candidate",
    url: "https://github.com/openclaw/openclaw/pull/109",
    updatedAt: "2026-01-09T00:00:00Z",
  };
  const securityPrListPull = {
    ...cleanPrListPull,
    number: 112,
    title: "security ready candidate",
    url: "https://github.com/openclaw/openclaw/pull/112",
    updatedAt: "2026-01-12T00:00:00Z",
    labels: [{ name: "security" }, { name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
  };
  const riskPrListPull = {
    ...cleanPrListPull,
    number: 113,
    title: "risky ready candidate",
    url: "https://github.com/openclaw/openclaw/pull/113",
    updatedAt: "2026-01-13T00:00:00Z",
    mergeable: "CONFLICTING",
    mergeStateStatus: "DIRTY",
    labels: [{ name: "merge-risk: availability" }, { name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
  };
  const secondRiskPrListPull = {
    ...riskPrListPull,
    number: 119,
    title: "second risky ready candidate",
    url: "https://github.com/openclaw/openclaw/pull/119",
    updatedAt: "2026-01-14T00:00:00Z",
  };
  const noisePrListPull = {
    ...cleanPrListPull,
    number: 118,
    title: "test(shared): add helper coverage",
    url: "https://github.com/openclaw/openclaw/pull/118",
    updatedAt: "2026-01-18T00:00:00Z",
  };
  if (options.includeNoisePrList) {
    searchPulls.push({
      ...noisePrListPull,
      labels: noisePrListPull.labels,
      assignees: noisePrListPull.assignees,
      commentsCount: noisePrListPull.commentsCount,
    });
  }
  const checksSuccessPull = {
    ...cleanPrListPull,
    id: "PR_116",
    number: 116,
    title: "checks success clean candidate",
    url: "https://github.com/openclaw/openclaw/pull/116",
    updatedAt: "2026-01-16T00:00:00Z",
    labels: [{ name: "size: S" }, { name: "P2" }, { name: "rating: platinum hermit" }],
    commentsCount: 0,
  };
  const commentedChecksSuccessPull = {
    ...checksSuccessPull,
    number: 114,
    title: "commented checks success candidate",
    url: "https://github.com/openclaw/openclaw/pull/114",
    updatedAt: "2026-01-14T00:00:00Z",
    commentsCount: 2,
  };
  const statusBlockedChecksSuccessPull = {
    ...checksSuccessPull,
    number: 115,
    title: "status blocked checks success candidate",
    url: "https://github.com/openclaw/openclaw/pull/115",
    updatedAt: "2026-01-15T00:00:00Z",
    labels: [{ name: "status: needs proof" }],
  };
  const maintainerChecksSuccessPull = {
    ...checksSuccessPull,
    number: 117,
    title: "maintainer checks success candidate",
    url: "https://github.com/openclaw/openclaw/pull/117",
    updatedAt: "2026-01-17T00:00:00Z",
    labels: [{ name: "maintainer" }],
  };
  const assignedChecksSuccessPull = {
    ...checksSuccessPull,
    number: 120,
    title: "assigned checks success candidate",
    url: "https://github.com/openclaw/openclaw/pull/120",
    updatedAt: "2026-01-20T00:00:00Z",
    assignees: [{ login: "steipete" }],
  };
  const conflictingChecksSuccessPull = {
    ...checksSuccessPull,
    number: 121,
    title: "conflicting checks success candidate",
    url: "https://github.com/openclaw/openclaw/pull/121",
    updatedAt: "2026-01-21T00:00:00Z",
    mergeable: "CONFLICTING",
    mergeStateStatus: "DIRTY",
  };
  const conflictingRepairPulls = options.includeConflictingBranchRepairPrList
    ? makeConflictingBranchRepairPulls(cleanPrListPull)
    : [];
  if (conflictingRepairPulls.length > 0) {
    searchPulls.push(
      ...conflictingRepairPulls.map((pull) => ({
        ...pull,
        labels: pull.labels,
        assignees: pull.assignees,
        commentsCount: pull.commentsCount,
      })),
    );
  }
  if (options.includeChecksSuccessPreflight) {
    searchPulls.push(
      ...[
        commentedChecksSuccessPull,
        statusBlockedChecksSuccessPull,
        checksSuccessPull,
        maintainerChecksSuccessPull,
        assignedChecksSuccessPull,
        conflictingChecksSuccessPull,
      ].map((pull) => ({
        ...pull,
        labels: pull.labels,
        assignees: pull.assignees,
        commentsCount: pull.commentsCount,
      })),
    );
  }
  const prListPulls = [
    existingPrListPull,
    dirtyPrListPull,
    securityPrListPull,
    ...(options.includeRiskPrList ? [riskPrListPull] : []),
    ...(options.includeSecondRiskPrList ? [secondRiskPrListPull] : []),
    ...(options.includeNoisePrList ? [noisePrListPull] : []),
    ...(options.includeChecksSuccessPreflight
      ? [
          commentedChecksSuccessPull,
          statusBlockedChecksSuccessPull,
          checksSuccessPull,
          maintainerChecksSuccessPull,
          assignedChecksSuccessPull,
          conflictingChecksSuccessPull,
        ]
      : []),
    ...conflictingRepairPulls,
    cleanPrListPull,
  ];
  fs.writeFileSync(
    filePath,
    `#!/usr/bin/env node
import fs from "node:fs";
const prListPulls = ${JSON.stringify(prListPulls)};
fs.appendFileSync(${JSON.stringify(`${filePath}.calls`)}, JSON.stringify(process.argv.slice(2)) + "\\n");
if (process.argv[2] === "pr" && process.argv[3] === "list" && ${JSON.stringify(Boolean(options.failPrList))}) {
  console.error("HTTP 502: 502 Bad Gateway (https://api.github.com/graphql)");
  process.exit(1);
}
if (process.argv[2] === "pr" && process.argv[3] === "view" && String(process.argv[4]) === ${JSON.stringify(String(options.failHydrateNumber ?? ""))}) {
  console.error(${JSON.stringify(
    options.failHydrateNotFound
      ? "Could not resolve to a PullRequest with the number of 116."
      : options.failHydrateAuth
        ? "HTTP 401: Bad credentials"
      : options.failHydrateIncident
      ? "GraphQL: Something went wrong while executing your query on 2026-07-01T08:35:56Z. Please include `EFAC:390CD1:97CD82:99C543:6A44D16B` when reporting this issue."
      : "HTTP 502: 502 Bad Gateway (https://api.github.com/graphql)",
  )});
  process.exit(1);
}
if (
  process.argv[2] === "search" &&
  ${JSON.stringify(Boolean(options.requireSearchBase))} &&
  process.argv[process.argv.indexOf("--base") + 1] !== "main"
) {
  console.error("checks-success search must target base main");
  process.exit(1);
}
let payload;
if (process.argv[2] === "api" && process.argv.includes("repos/openclaw/openclaw/git/ref/heads/main")) {
  payload = { object: { sha: ${JSON.stringify(mainSha)} } };
} else if (
  process.argv[2] === "api" &&
  process.argv.includes("graphql") &&
  process.argv.some((arg) => arg.includes("updatePullRequestBranch"))
) {
  payload = { data: { updatePullRequestBranch: { pullRequest: { headRefOid: ${JSON.stringify("a".repeat(40))} } } } };
} else if (process.argv[2] === "search") {
  payload = ${JSON.stringify(searchPulls)};
} else if (process.argv[2] === "pr" && process.argv[3] === "view") {
  payload = prListPulls.find((pull) => String(pull.number) === String(process.argv[4])) ?? null;
  if (String(process.argv[4]) === ${JSON.stringify(String(options.staleBaseNumber ?? ""))} && payload) {
    payload = { ...payload, baseRefOid: ${JSON.stringify("c".repeat(40))} };
  }
  if (String(process.argv[4]) === ${JSON.stringify(String(options.maintainerCanModifyNumber ?? ""))} && payload) {
    payload = { ...payload, maintainerCanModify: ${JSON.stringify(options.maintainerCanModifyValue)} };
  }
  if (String(process.argv[4]) === ${JSON.stringify(String(options.missingHeadNumber ?? ""))} && payload) {
    payload = { ...payload, headRefOid: undefined };
  }
  if (String(process.argv[4]) === ${JSON.stringify(String(options.missingBaseNumber ?? ""))} && payload) {
    payload = { ...payload, baseRefOid: undefined };
  }
  if (String(process.argv[4]) === ${JSON.stringify(String(options.unknownHydrateNumber ?? ""))} && payload) {
    const countPath = ${JSON.stringify(path.join(path.dirname(filePath), "unknown-mergeability-count"))};
    const count = fs.existsSync(countPath) ? Number(fs.readFileSync(countPath, "utf8")) : 0;
    fs.writeFileSync(countPath, String(count + 1));
    if (count < ${JSON.stringify(Number(options.unknownHydrateResponses ?? 0))}) {
      payload = {
        ...payload,
        mergeable: ${JSON.stringify(String(options.unknownMergeableValue ?? "UNKNOWN"))},
        mergeStateStatus: ${JSON.stringify(String(options.unknownMergeStateStatusValue ?? "UNKNOWN"))},
      };
    }
  }
} else if (process.argv[2] === "pr") {
  payload = prListPulls;
} else {
  payload = ${JSON.stringify({
  data: {
    repository: {
      pullRequests: {
        nodes: pulls,
        pageInfo: { hasNextPage: false, endCursor: null },
      },
    },
  },
})};
}
console.log(JSON.stringify(payload));
`,
    { mode: 0o755 },
  );
}

function makeConflictingBranchRepairPulls(base) {
  const pull = (number, overrides = {}) => {
    const headSha = String.fromCharCode(97 + (number % 6)).repeat(40);
    return {
      ...base,
      id: `PR_${number}`,
      number,
      title: `conflicting repair candidate ${number}`,
      url: `https://github.com/openclaw/openclaw/pull/${number}`,
      updatedAt: `2026-02-${String(number - 120).padStart(2, "0")}T00:00:00Z`,
      headRefOid: headSha,
      mergeable: "CONFLICTING",
      mergeStateStatus: "DIRTY",
      maintainerCanModify: true,
      labels: [{ name: "proof: sufficient" }, { name: "status: ready for maintainer look" }],
      comments: [],
      commentsCount: 0,
      ...overrides,
    };
  };
  const readyComment = (number, headSha) => ({
    author: { login: "clawsweeper[bot]" },
    body: [
      "Codex review: needs maintainer review before merge.",
      "",
      "**Review metrics:** none identified.",
      "Result: ready for maintainer review.",
      "No ClawSweeper repair lane is needed; the remaining action is normal maintainer review.",
      "",
      `<!-- clawsweeper-verdict:needs-human item=${number} sha=${headSha} confidence=high -->`,
      `<!-- clawsweeper-review item=${number} -->`,
    ].join("\n"),
  });
  const fixComment = (number, headSha) => ({
    author: { login: "clawsweeper[bot]" },
    body: [
      "Codex review: changes required before merge.",
      `<!-- clawsweeper-verdict:needs-changes item=${number} sha=${headSha} confidence=high -->`,
      `<!-- clawsweeper-action:fix-required item=${number} sha=${headSha} confidence=high finding=review-feedback -->`,
      `<!-- clawsweeper-review item=${number} -->`,
    ].join("\n"),
  });

  const ready = pull(130);
  ready.comments = [readyComment(ready.number, ready.headRefOid)];
  ready.commentsCount = ready.comments.length;

  const actionable = pull(131);
  actionable.comments = [fixComment(actionable.number, actionable.headRefOid)];
  actionable.commentsCount = actionable.comments.length;

  const both = pull(132);
  both.comments = [
    readyComment(both.number, both.headRefOid),
    fixComment(both.number, both.headRefOid),
  ];
  both.commentsCount = both.comments.length;

  const stale = pull(133);
  stale.comments = [fixComment(stale.number, "f".repeat(40))];
  stale.commentsCount = stale.comments.length;

  const malformed = pull(134);
  malformed.comments = [
    {
      author: { login: "clawsweeper[bot]" },
      body: `<!-- clawsweeper-action:fix-required item=134 sha=${malformed.headRefOid} confidence=high confidence=low -->`,
    },
  ];
  malformed.commentsCount = malformed.comments.length;

  const unwritable = pull(135, { maintainerCanModify: false });
  unwritable.comments = [readyComment(unwritable.number, unwritable.headRefOid)];
  unwritable.commentsCount = unwritable.comments.length;

  const needsHumanOnly = pull(136);
  needsHumanOnly.comments = [
    {
      author: { login: "clawsweeper[bot]" },
      body: `<!-- clawsweeper-verdict:needs-human item=136 sha=${needsHumanOnly.headRefOid} confidence=high -->`,
    },
  ];
  needsHumanOnly.commentsCount = needsHumanOnly.comments.length;

  const security = pull(137, { labels: [{ name: "security" }] });
  security.comments = [fixComment(security.number, security.headRefOid)];
  security.commentsCount = security.comments.length;

  const supersededFinding = pull(138);
  supersededFinding.comments = [
    {
      ...fixComment(supersededFinding.number, supersededFinding.headRefOid),
      updatedAt: "2026-02-01T00:00:00Z",
    },
    {
      ...readyComment(supersededFinding.number, supersededFinding.headRefOid),
      updatedAt: "2026-02-02T00:00:00Z",
    },
  ];
  supersededFinding.commentsCount = supersededFinding.comments.length;

  return [ready, actionable, both, stale, malformed, unwritable, needsHumanOnly, security, supersededFinding];
}

function readFakeGhCalls(fixture) {
  if (!fs.existsSync(fixture.ghCalls)) return [];
  return fs
    .readFileSync(fixture.ghCalls, "utf8")
    .trim()
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function writePublishedResult(filePath) {
  fs.writeFileSync(
    filePath,
    `---
repo: "openclaw/openclaw"
cluster_id: "live-pr-inventory-test"
mode: "autonomous"
result_status: "planned"
---

# live-pr-inventory-test

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #103 | close_duplicate | executed | duplicate | Closed by applicator. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #101 | keep_independent | planned | independent | Non-terminal inventory classification. |
| #102 | keep_closed | skipped | superseded | Already closed. |
| #103 | close_duplicate | planned | duplicate | Planned close that executed. |
`,
  );
}

function writeExistingJob(filePath, ref, notes = "") {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(
    filePath,
    `---
repo: openclaw/openclaw
cluster_id: existing-${ref.slice(1)}
mode: plan
candidates:
  - "${ref}"
cluster_refs:
  - "${ref}"
---

${notes}
`,
  );
}

function writeChecksSuccessJob(filePath, ref, { repo = "openclaw/openclaw", generatedAt, updatedAt }) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(
    filePath,
    `---
repo: ${repo}
cluster_id: checks-success-${ref.slice(1)}
mode: autonomous
candidates:
  - "${ref}"
cluster_refs:
  - "${ref}"
notes: "Generated from live GitHub checks-success PR inventory on ${generatedAt}; fixture"
---

# Checks-Success PR External Preflight 1

## Inventory

### ${ref} fixture candidate

- live updated: ${updatedAt}
- live url: https://github.com/openclaw/openclaw/pull/${ref.slice(1)}
`,
  );
}
