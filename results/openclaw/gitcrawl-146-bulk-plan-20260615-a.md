---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-146-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520806295"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520806295"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.897Z"
canonical: "#92779"
canonical_issue: null
canonical_pr: "#92779"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-146-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520806295](https://github.com/openclaw/clownfish/actions/runs/27520806295)

Workflow conclusion: success

Worker result: planned

Canonical: #92779

## Summary

Plan-mode classification only. The live fix path is the hydrated merged PR #92779, which landed the Workspace Files collapsed-strip/default-collapsed behavior on main. #90754 is superseded by that landed path, #91036 is covered by that landed fix, #90701 is already closed, and #91543 is routed to central security handling because the job explicitly marks it as a security-signal ref.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #90701 | keep_closed | skipped | fixed_by_candidate | Already closed items must not receive close actions. |
| #90754 | close_superseded | planned | superseded | A hydrated maintainer PR already landed the same workspace-rail collapse/default-collapsed path on main, while this overlapping contributor PR has failing checks and an older release base. |
| #91036 | close_fixed_by_candidate | planned | fixed_by_candidate | The open issue has the same root request and is covered by the hydrated merged fix #92779. |
| #91543 | route_security | planned | security_sensitive | The job explicitly marks this exact ref for security routing; it is quarantined without blocking classification of unrelated non-security items. |
| #92779 | keep_closed | skipped | canonical | Hydrated merged PR is the canonical landed fix path for this cluster. |

## Needs Human

- none
