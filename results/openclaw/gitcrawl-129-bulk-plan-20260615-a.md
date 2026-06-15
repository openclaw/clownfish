---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-129-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520789812"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520789812"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.890Z"
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

# gitcrawl-129-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520789812](https://github.com/openclaw/clownfish/actions/runs/27520789812)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan mode only. Both actionable open candidates are security-sensitive filesystem-boundary items in the hydrated preflight artifact, so they should be routed to central OpenClaw security handling rather than deduped, closed, merged, or fixed by Clownfish. Existing-overlap refs remain context only.

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
| #90977 | route_security | planned | security_sensitive | The item changes the local filesystem trust boundary and is explicitly marked security-sensitive in the live preflight artifact. |
| #90986 | route_security | planned | security_sensitive | The PR directly modifies a filesystem boundary contract and is explicitly listed as a security-signal ref for central handling. |

## Needs Human

- none
