---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-207-bulk-plan-20260615-a"
mode: "plan"
run_id: "27525953857"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525953857"
head_sha: "4574037aa1f27e59d5ea43eca0073b4c4dfc504c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:30:14.789Z"
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

# gitcrawl-207-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525953857](https://github.com/openclaw/clownfish/actions/runs/27525953857)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. The representative #75 is open but marked security-sensitive in the hydrated preflight artifact, so it is quarantined to central security handling rather than used for ProjectClownfish closeout. The open overlap PRs #59859 and #61576 are also security-sensitive and excluded from this cluster's actionable dedupe scope; route them without mutation. No close, merge, label, comment, or fix action is planned.

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
| #75 | route_security | planned | security_sensitive | The canonical candidate is explicitly security-sensitive in live preflight state, so it must be quarantined rather than closed, merged, or used as a normal dedupe canonical. |
| #59859 | route_security | planned | security_sensitive | This open overlap PR is security-sensitive and excluded from the cluster's actionable refs; route only, with no ProjectClownfish mutation. |
| #61576 | route_security | planned | security_sensitive | This open overlap PR is security-sensitive and excluded from the cluster's actionable refs; route only, with no ProjectClownfish mutation. |

## Needs Human

- none
