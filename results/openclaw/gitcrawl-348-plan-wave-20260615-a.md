---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-348-plan-wave-20260615-a"
mode: "plan"
run_id: "27516760854"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516760854"
head_sha: "6bb552b68729da7580c0ee53a6e211c17d1b2e3a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:43:28.405Z"
canonical: "#44294"
canonical_issue: "#44294"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-348-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516760854](https://github.com/openclaw/clownfish/actions/runs/27516760854)

Workflow conclusion: success

Worker result: planned

Canonical: #44294

## Summary

Plan only: #44294 remains the open canonical issue. #91603 is the linked implementation candidate, but it should stay open as related because proof, check, and review-comment blockers prevent merge or fixed-by-candidate closeout.

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
| Needs human | 1 |

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
| #44294 | keep_canonical | planned | canonical | #44294 is the best surviving canonical thread for the ACP structured error-kind behavior. |
| #91603 | keep_related | planned | related | #91603 is directly related to the canonical issue and may be the implementation path, but failing proof and unresolved review/contract blockers prevent merge or closing #44294 as fixed-by-candidate in this plan. |

## Needs Human

- Maintainer/product decision remains for #44294/#91603: confirm the client-visible ACP error contract for non-refusal backend errors before advancing the PR or closing the issue.
