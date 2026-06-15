---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-140-bulk-plan-20260615-a"
mode: "plan"
run_id: "27525950205"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525950205"
head_sha: "4574037aa1f27e59d5ea43eca0073b4c4dfc504c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:30:14.785Z"
canonical: null
canonical_issue: null
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

# gitcrawl-140-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525950205](https://github.com/openclaw/clownfish/actions/runs/27525950205)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Read-only plan only. The artifact shows the representative #87151 and all listed candidates are already closed, so no close/comment/label mutation is planned. Security-signaled #87151 and security-sensitive #90682 are quarantined with route_security; the non-security closed issue/PR are recorded as keep_closed, with #90682 as the landed fix context.

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
| #87151 | route_security | planned | security_sensitive | Security-signal quarantine is non-mutating and scoped to this item. |
| #90093 | keep_closed | skipped | fixed_by_candidate | Already closed; the landed fix context is recorded without planning a mutation. |
| #90682 | route_security | planned | security_sensitive | Security-sensitive item is quarantined for central OpenClaw security handling. |
| #92857 | keep_closed | skipped | superseded | Already closed as superseded; no further action is planned. |

## Needs Human

- none
