---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4384-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142624856"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142624856"
head_sha: "e1f2040c09ee35bcaddc73058175d3b802eb6214"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.327Z"
canonical: "https://github.com/openclaw/openclaw/issues/39777"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39777"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-4384-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142624856](https://github.com/openclaw/clownfish/actions/runs/25142624856)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/39777

## Summary

Hydrated state keeps #39777 as the canonical issue. #39806 is a focused open PR candidate for the same bug, but it is not merge-ready because bot review found an actionable layout regression, mergeability is unknown, one check is failing, and this dedupe-only job blocks merge/fix/PR creation; no close, comment, or label action is planned.

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
| #39777 | keep_canonical | planned | canonical | Representative #39777 is still open, current, non-security, and remains the best canonical tracking issue until #39806 is repaired/merged or replaced. |
| #39806 | keep_related | planned | related | #39806 is a useful implementation candidate for #39777, but unresolved bot feedback and failing/unknown merge state block fixed-by-candidate closeout or merge in this dedupe-only run. |

## Needs Human

- none
