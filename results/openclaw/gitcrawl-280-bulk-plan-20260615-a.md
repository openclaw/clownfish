---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-280-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520882699"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520882699"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.933Z"
canonical: null
canonical_issue: "#78904"
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

# gitcrawl-280-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520882699](https://github.com/openclaw/clownfish/actions/runs/27520882699)

Workflow conclusion: success

Worker result: planned

Canonical: #78904

## Summary

Plan-only classification for cluster gitcrawl-280-bulk-plan-20260615-a. Job-declared security-signal refs #72253 and #79044 are routed to central security handling as instructed; unrelated non-security issue #78904 stays open and related to the status/heartbeat-cadence family pending maintainer review of the linked PR path.

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
| #72253 | route_security | planned | security_sensitive | Job explicitly requires central security routing for this ref; no GitHub mutation is planned in plan mode. |
| #78904 | keep_related | planned | related | The issue is related to the canonical PR path but should remain open; fixed-by-candidate closeout is blocked because the linked PR is open, not merged, and is separately routed by the job's security-signal instruction. |
| #79044 | route_security | planned | security_sensitive | Job explicitly requires central security routing for this ref; no close, label, comment, merge, or fix action is planned. |

## Needs Human

- none
