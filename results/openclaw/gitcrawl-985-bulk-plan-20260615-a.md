---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-985-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523575995"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523575995"
head_sha: "86103b97bc1c06f021ad75d533f6055a87af8e57"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:17:30.983Z"
canonical: "#82900"
canonical_issue: "#82900"
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

# gitcrawl-985-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523575995](https://github.com/openclaw/clownfish/actions/runs/27523575995)

Workflow conclusion: success

Worker result: planned

Canonical: #82900

## Summary

Plan-only classification: keep #82900 as the open canonical issue for the preserved-totalTokens display/regression bug. Route #82966 to central security handling because the job explicitly marks it as a security-signal ref, even though the hydrated artifact does not mark the item security_sensitive. No GitHub mutations are planned directly by the worker.

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
| #82900 | keep_canonical | planned | canonical | #82900 is the best surviving non-security canonical thread for the regression and remains open in the hydrated artifact. |
| #82966 | route_security | planned | security_sensitive | The job explicitly requires quarantine of #82966 as a security-signal ref; no close, merge, label, comment, or fix action should be applied to that item by Clownfish. |
| #82578 | keep_closed | skipped | superseded | Already-closed linked context only; included to make the hydrated ref matrix explicit without planning mutation. |

## Needs Human

- none
