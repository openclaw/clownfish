---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-409-bulk-plan-20260615-a"
mode: "plan"
run_id: "28824485477-1-16"
workflow_run_id: "28824485477"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28824485477"
head_sha: "6a77fbf951ba8b7b9a9969c9cfc421f0012c5e16"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T21:34:53.470Z"
canonical: "#78034"
canonical_issue: null
canonical_pr: "#78034"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-409-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28824485477](https://github.com/openclaw/clownfish/actions/runs/28824485477)

Workflow conclusion: success

Worker result: planned

Canonical: #78034

## Summary

Plan-only classification: #78034 is the best live canonical within the actionable remaining refs, but merge and fixed-by-candidate closeout are blocked by job policy and failing checks. #67915 is hydrated read-only existing-overlap context and should stay with its existing owner.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #78034 | keep_canonical | planned | canonical | Keep #78034 as the cluster canonical PR, but do not merge because blocked_actions includes merge and the hydrated check set contains failures. |
| #67915 | keep_related | skipped | related | Read-only existing-overlap context only; keep it associated with #78034 as the candidate fix path but leave action ownership to the existing job. |

## Needs Human

- none
