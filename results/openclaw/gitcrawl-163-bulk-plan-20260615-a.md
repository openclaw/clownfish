---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-163-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520811105"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520811105"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.901Z"
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

# gitcrawl-163-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520811105](https://github.com/openclaw/clownfish/actions/runs/27520811105)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification for two open PR candidates. Both actionable open refs are quarantined as security-sensitive, with no close, label, merge, or fix mutation planned.

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
| #73925 | route_security | planned | security_sensitive | The job explicitly flags #73925 for security routing, and the hydrated PR evidence includes auth/watchdog security-boundary concerns. ProjectClownfish should quarantine this exact item only. |
| #73987 | route_security | planned | security_sensitive | The live preflight artifact marks #73987 security-sensitive and route-only. It should be handled by central OpenClaw security review, not ProjectClownfish cleanup. |

## Needs Human

- none
