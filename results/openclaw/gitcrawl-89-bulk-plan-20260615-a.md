---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-89-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523461235"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523461235"
head_sha: "285810749ecab52f85c511c2a3b9e5ffebad533b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:13:55.198Z"
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

# gitcrawl-89-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523461235](https://github.com/openclaw/clownfish/actions/runs/27523461235)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. The actionable live candidates are security-sensitive Feishu proxy/egress items, so they are routed to central OpenClaw security handling rather than deduped, closed, merged, or repaired by Clownfish. The already-closed candidate remains closed with no mutation planned.

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
| #77323 | keep_closed | skipped | security_sensitive | Already closed before this plan run; keep closed and do not emit any close/comment/label mutation. |
| #86386 | route_security | planned | security_sensitive | Security-sensitive egress/proxy-boundary PR is outside Clownfish cleanup; route the item to central OpenClaw security handling. |
| #90324 | route_security | planned | security_sensitive | Security-sensitive WebSocket proxy-routing PR is outside Clownfish cleanup; route the item to central OpenClaw security handling. |

## Needs Human

- none
