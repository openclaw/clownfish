---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-880-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523457684"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523457684"
head_sha: "285810749ecab52f85c511c2a3b9e5ffebad533b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:13:55.196Z"
canonical: "#87637"
canonical_issue: "#87637"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-880-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523457684](https://github.com/openclaw/clownfish/actions/runs/27523457684)

Workflow conclusion: success

Worker result: planned

Canonical: #87637

## Summary

Read-only plan: keep #87637 as the live canonical issue for the doctor memory-search versus memory-core dreaming diagnostic bug. Route #92165 to central security handling because the job explicitly marks it as a security-signal ref, while leaving the already-closed linked context refs unchanged.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #87630 | keep_closed | skipped | related | Already closed linked context only; preserve as evidence and do not mutate. |
| #87634 | keep_closed | skipped | related | Already closed linked context only; preserve as evidence and do not mutate. |
| #87637 | keep_canonical | planned | canonical | #87637 remains the best live non-security canonical for the root diagnostic bug. |
| #92165 | route_security | planned | security_sensitive | The job explicitly scopes #92165 to central security handling; route only this PR and keep the non-security canonical issue classified. |

## Needs Human

- none
