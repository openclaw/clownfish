---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-285-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520885699"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520885699"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.934Z"
canonical: "#78093"
canonical_issue: "#78093"
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

# gitcrawl-285-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520885699](https://github.com/openclaw/clownfish/actions/runs/27520885699)

Workflow conclusion: success

Worker result: planned

Canonical: #78093

## Summary

Plan mode only. #78093 remains the live non-security canonical issue. #78113 is explicitly listed by the job as a security-signal ref, so it is quarantined with route_security and no merge, close, label, comment, or fix action is planned.

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
| #78093 | keep_canonical | planned | canonical | #78093 is the open issue tracking the current non-security regression and should remain the canonical discussion path. |
| #78113 | route_security | planned | security_sensitive | The job explicitly requires quarantining #78113 as the exact security-signal ref. This is non-mutating and scoped only to that PR. |

## Needs Human

- none
