---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-884-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523460061"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523460061"
head_sha: "285810749ecab52f85c511c2a3b9e5ffebad533b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:13:55.197Z"
canonical: "#74204"
canonical_issue: "#74204"
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

# gitcrawl-884-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523460061](https://github.com/openclaw/clownfish/actions/runs/27523460061)

Workflow conclusion: success

Worker result: planned

Canonical: #74204

## Summary

Plan-mode classification only. #74204 remains the open canonical issue for the QMD GGUF embed timeout/default and error-message problem. #87572 is an open PR that directly claims to fix #74204, but the job explicitly marks it as a security-signal ref requiring central routing, so it is quarantined with route_security rather than merge, close, or fixed-by-candidate handling. #60856 is hydrated closed context only and receives no closure mutation.

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
| #74204 | keep_canonical | planned | canonical | #74204 is the only non-security open issue in the cluster and still carries the root report and maintainer follow-up state. |
| #87572 | route_security | planned | security_sensitive | The job explicitly routes #87572 to central security handling despite the non-security functional relationship to #74204. |
| #60856 | keep_closed | skipped | fixed_by_candidate | Already-closed linked context refs are historical evidence only and must not receive closure actions. |

## Needs Human

- none
