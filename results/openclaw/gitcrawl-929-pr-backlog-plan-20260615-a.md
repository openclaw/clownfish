---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-929-pr-backlog-plan-20260615-a"
mode: "plan"
run_id: "27525199232"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525199232"
head_sha: "cfc08bc772e6bd5163d31944cfc2e3df26150d5d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:06:38.631Z"
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

# gitcrawl-929-pr-backlog-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525199232](https://github.com/openclaw/clownfish/actions/runs/27525199232)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification: both hydrated open items are security-scoped and should be routed to central OpenClaw security handling. No close, label, merge, or fix action is recommended.

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
| #51872 | route_security | planned | security_sensitive | The canonical issue is security-sensitive and out of scope for Clownfish backlog cleanup; route to central OpenClaw security handling. |
| #73168 | route_security | planned | security_sensitive | The PR is explicitly security-signaled by the job and touches auth/token behavior, so it should be quarantined for central security review rather than classified as mergeable, duplicate, or fixed-by-candidate. |

## Needs Human

- none
