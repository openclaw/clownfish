---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-security_route_candidate-20260615T154534-125"
mode: "plan"
run_id: "27560323972-1-125"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T05:48:04.006Z"
canonical: null
canonical_issue: null
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

# pr-inventory-security_route_candidate-20260615T154534-125

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Planning only. All three hydrated open PRs are marked security-sensitive by the preflight artifact and should be routed to central OpenClaw security handling without closure, merge, label, comment, or fix actions.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #79481 | route_security | planned | security_sensitive | The hydrated PR is security-sensitive and open; central security handling is required, so no dedupe, close, merge, or fix action is planned. |
| #79478 | route_security | planned | security_sensitive | The hydrated PR is security-sensitive and open; central security handling is required, so no dedupe, close, merge, or fix action is planned. |
| #87758 | route_security | planned | security_sensitive | The hydrated PR is security-sensitive and open; central security handling is required, so no dedupe, close, merge, or fix action is planned. |

## Needs Human

- none
