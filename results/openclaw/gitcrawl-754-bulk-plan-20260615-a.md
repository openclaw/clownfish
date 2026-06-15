---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-754-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523293725"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523293725"
head_sha: "2eb7becb97c14f307a0a4930f6deab62b7223dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:08:52.672Z"
canonical: "#77717"
canonical_issue: "#77717"
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

# gitcrawl-754-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523293725](https://github.com/openclaw/clownfish/actions/runs/27523293725)

Workflow conclusion: success

Worker result: planned

Canonical: #77717

## Summary

#77717 remains the live canonical non-security issue for the Feishu abort-gated identity recovery race. #89156 is an open security-sensitive PR explicitly listed for central security routing, so it must be quarantined with route_security and not used for close, merge, or fixed-by-candidate planning. Linked PR #63481 is already closed and is historical evidence only.

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
| #77717 | keep_canonical | planned | canonical |  |
| #89156 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for Clownfish backlog cleanup and must be routed to central OpenClaw security handling. |
| #63481 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions; retained only as historical evidence. |

## Needs Human

- none
