---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-220-plan-wave-20260615-a"
mode: "plan"
run_id: "27516705836"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516705836"
head_sha: "6bb552b68729da7580c0ee53a6e211c17d1b2e3a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.857Z"
canonical: "#91914"
canonical_issue: "#91914"
canonical_pr: "#91963"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-220-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516705836](https://github.com/openclaw/clownfish/actions/runs/27516705836)

Workflow conclusion: success

Worker result: planned

Canonical: #91914

## Summary

#91914 remains the live canonical issue. #91963 is the current focused fix PR but is not merge-ready because merge is blocked for this job and hydrated checks include failures. #91964 tracks the same root cause and can be duplicate-closed against #91914 with credit preserved.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #91914 | keep_canonical | planned | canonical | #91914 is open, hydrated, and remains the best root-cause thread for https://github.com/openclaw/openclaw/issues/91914. |
| #91963 | keep_related | planned | related | Keep #91963 open as the current fix candidate for #91914; do not recommend merge or fixed-by-candidate closeout until failing checks and merge preflight are resolved. |
| #91964 | close_duplicate | planned | duplicate | Duplicate closeout is against the live canonical issue https://github.com/openclaw/openclaw/issues/91914; the hydrated current fix candidate is https://github.com/openclaw/openclaw/pull/91963. |

## Needs Human

- none
