---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-121-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520785760"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520785760"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.884Z"
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

# gitcrawl-121-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520785760](https://github.com/openclaw/clownfish/actions/runs/27520785760)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification completed from the provided preflight artifact. The representative #83244 is open but explicitly listed by the job as a security-signal ref requiring quarantine, so no non-security canonical is selected for closure. The other open candidates are related config/doctor follow-up work with distinct scopes and should remain open; no close, merge, label, or fix action is planned.

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
| #83244 | route_security | planned | security_sensitive | The job explicitly marks this exact ref as requiring route_security, so it is out of scope for ProjectClownfish mutations. |
| #72535 | keep_related | planned | related | Same broad config compatibility area, but not the same root cause or fix shape as the quarantined representative; failing proof blocks merge-style handling. |
| #77802 | keep_related | planned | related | Related config validation/repair family, but it has unique doctor --fix behavior and remains open for product/maintainer follow-up; not a duplicate close candidate. |

## Needs Human

- none
