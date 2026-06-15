---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-221-plan-wave-20260615-a"
mode: "plan"
run_id: "27516707273"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516707273"
head_sha: "6bb552b68729da7580c0ee53a6e211c17d1b2e3a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.857Z"
canonical: "#91947"
canonical_issue: "#91947"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-221-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516707273](https://github.com/openclaw/clownfish/actions/runs/27516707273)

Workflow conclusion: success

Worker result: planned

Canonical: #91947

## Summary

Plan-mode classification only. #91947 remains the canonical open issue. #91958 is already closed and should not receive a closure action. #92065 is a related open fix PR for #91947, but failing checks and missing merge preflight block merge or fixed-by-candidate closeout in this job.

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
| #91947 | keep_canonical | planned | canonical | #91947 is the best surviving canonical report for the shared memory_search/QMD timeout root cause. |
| #91958 | keep_closed | skipped | superseded | Already closed historical contributor PR for the same root cause; keep as closed context and preserve its evidence/credit in any future replacement or landing path. |
| #92065 | keep_related | planned | related | Keep the open PR related to the canonical issue, but do not merge or close the issue as fixed-by-candidate because required checks and merge preflight are not clean. |

## Needs Human

- #92065 has failing required checks (`Real behavior proof`, `check-test-types`, `check-prod-types`) and unknown mergeability; maintainer or executor follow-up is needed before it can become a merge candidate or fixed-by-candidate closeout path.
