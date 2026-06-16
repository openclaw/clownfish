---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-92065-20260616-bulk"
mode: "execute"
run_id: "27589214517"
workflow_run_id: "27589214517"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27589214517"
head_sha: "d2836181abae9bd5aa1fd28990b5beddebe95849"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T02:09:19.198Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-92065-20260616-bulk

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27589214517](https://github.com/openclaw/clownfish/actions/runs/27589214517)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Deterministic validation identified #91947 and #92065 as security-sensitive, so both hydrated refs are quarantined with exact-ref route_security actions. The prior close_superseded plan for #92065 is removed; no GitHub mutation, closeout comment, merge, or fix action is planned in this repaired result.

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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #91947 | route_security | planned | security_sensitive | Security-sensitive target is out of ProjectClownfish closeout scope and must be routed to central security handling. |
| #92065 | route_security | planned | security_sensitive | Security-sensitive target is out of ProjectClownfish closeout scope and must be routed to central security handling. |

## Needs Human

- none
