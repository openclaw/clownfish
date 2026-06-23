---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-198-autonomous-refresh-20260623a"
mode: "autonomous"
run_id: "28005018132"
workflow_run_id: "28005018132"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28005018132"
head_sha: "c3d4877276db1f97103fe56d12a5ddad91fc73e0"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-23T05:46:38.609Z"
canonical: "https://github.com/openclaw/openclaw/issues/92267"
canonical_issue: "https://github.com/openclaw/openclaw/issues/92267"
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

# gitcrawl-198-autonomous-refresh-20260623a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28005018132](https://github.com/openclaw/clownfish/actions/runs/28005018132)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/92267

## Summary

Classified the cluster without GitHub mutation. #92267 remains the canonical open issue on current main; #92287 is the already-owned linked fix candidate and stays read-only context for this job; #85678 is routed to central security because the preflight explicitly marks it security-sensitive.

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
| #85678 | route_security | planned | security_sensitive | Security-sensitive item is out of Clownfish backlog-cleanup scope and should route to central OpenClaw security handling. |
| #92267 | keep_canonical | planned | canonical | The issue describes the still-present source-level behavior on current main and has a hydrated active fix candidate in #92287, so it should remain the canonical tracking issue rather than be closed or duplicated. |
| #92287 | keep_related | skipped | related | Keep #92287 as the linked candidate-fix context owned by the existing overlap job; do not mutate, merge, supersede, or replace it from this one-candidate cluster. |

## Needs Human

- none
