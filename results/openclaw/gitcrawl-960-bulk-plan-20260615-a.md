---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-960-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523568075"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523568075"
head_sha: "86103b97bc1c06f021ad75d533f6055a87af8e57"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:16:19.503Z"
canonical: "#84297"
canonical_issue: "#84297"
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

# gitcrawl-960-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523568075](https://github.com/openclaw/clownfish/actions/runs/27523568075)

Workflow conclusion: success

Worker result: planned

Canonical: #84297

## Summary

Plan-only classification: keep #84297 as the live canonical issue. Route #84335 to central security handling because the job explicitly marks it as a security-signal ref requiring quarantine; no close, merge, label, comment, or fix action is planned.

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
| #84297 | keep_canonical | planned | canonical | #84297 is the open issue tracking the non-security root cause and remains the best canonical thread for maintainer follow-up. |
| #84335 | route_security | planned | security_sensitive | The exact PR is explicitly marked by the job as a security-signal ref requiring scoped quarantine, so ProjectClownfish should not close, merge, comment on, or repair it. |

## Needs Human

- none
