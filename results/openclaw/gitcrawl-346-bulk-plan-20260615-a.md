---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-346-bulk-plan-20260615-a"
mode: "plan"
run_id: "27525979752"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525979752"
head_sha: "4574037aa1f27e59d5ea43eca0073b4c4dfc504c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:30:14.798Z"
canonical: "#45314"
canonical_issue: "#45314"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-346-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525979752](https://github.com/openclaw/clownfish/actions/runs/27525979752)

Workflow conclusion: success

Worker result: planned

Canonical: #45314

## Summary

Plan only. #45314 remains the live canonical issue for the early-abort responsePrefix template interpolation bug. #45315 is the active related implementation candidate but is not merge-ready because review-bot findings remain open and checks include failures. #45454 is already closed historical context.

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
| #45314 | keep_canonical | planned | canonical | The canonical issue is still open, hydrated, and best represents the root cause and user-visible failure. |
| #45315 | keep_related | planned | related | This PR belongs to the canonical family but cannot be recommended for merge or fixed-by-candidate closure in this plan because review findings and failing checks remain. |
| #45454 | keep_closed | skipped | superseded | Already-closed linked context must not receive a close action; it remains historical evidence for the canonical family. |

## Needs Human

- none
