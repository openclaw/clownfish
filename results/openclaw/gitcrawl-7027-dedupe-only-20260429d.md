---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7027-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142707307"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142707307"
head_sha: "0b2576f505f062756bdfed443c12fd6d9a764b16"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.329Z"
canonical: "https://github.com/openclaw/openclaw/pull/49001"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/49001"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-7027-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142707307](https://github.com/openclaw/clownfish/actions/runs/25142707307)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/49001

## Summary

Classified #49001 as the best live canonical PR for the Discord thread post-reset startup queue race and #53524 as a related channel/thread extension, not a duplicate. No close, merge, or fix actions are planned because closure/fix/merge are disabled or blocked by unresolved review findings, dirty/unknown mergeability, and failing checks.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49001 | keep_canonical | planned | canonical | #49001 remains the clearest canonical PR for the original Discord thread startup queue race, but it is not merge-ready and this job does not permit repair, merge, or fix PR work. |
| #53524 | keep_related | planned | related | #53524 should stay open as a related implementation candidate for the broader channel plus thread reset race; it is not safe to close, merge, or mark fixed-by-candidate in this run. |

## Needs Human

- none
