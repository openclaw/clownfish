---
repo: "openclaw/openclaw"
cluster_id: "external-merge-preflight-96736-7aa3cbcff208"
mode: "autonomous"
run_id: "28342924322"
workflow_run_id: "28342924322"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28342924322"
head_sha: "e7a86cde3baaf6ac3ccb1d6c94cee9dd006b6075"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-29T01:31:56.581Z"
canonical: "https://github.com/openclaw/openclaw/pull/96736"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/96736"
actions_total: 0
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# external-merge-preflight-96736-7aa3cbcff208

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28342924322](https://github.com/openclaw/clownfish/actions/runs/28342924322)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/96736

## Summary

External merge preflight blocked: $ node scripts/check-changed.mjs
[check:changed] lanes=coreTests
[check:changed] src/runtime.test.ts: core test

[check:changed] conflict markers
$ node scripts/check-no-conflict-markers.mjs

[check:changed] changelog attributions
$ node scripts/check-changelog-attributions.mjs

[check:changed] guarded extension wildcard re-exports
$ node scripts/check-extension-wildcard-reexports.mjs

[check:changed] plugin-sdk wildcard re-exports
$ node scripts/check-plugin-sdk-wildcard-reexports.mjs

[check:changed] duplicate scan target coverage
$ node scripts/check-duplicates.mjs --coverage

[check:changed] dependency pin guard
$ node scripts/check-dependency-pins.mjs

[check:changed] package patch guard
$ node scripts/check-package-patches.mjs

[check:changed] test temp creation report (warning-only)
No new bare test temp-directory creation patterns found.

[check:changed] typecheck core tests
$ node scripts/run-tsgo.mjs -p test/tsconfig/tsconfig.core.test.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/core-test.tsbuildinfo

[check:changed] summary
   277ms  ok         conflict markers
   238ms  ok         changelog attributions
   245ms  ok         guarded extension wildcard re-e

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 0 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Needs Human

- none
