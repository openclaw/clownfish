---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-902-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523463965"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523463965"
head_sha: "285810749ecab52f85c511c2a3b9e5ffebad533b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:13:55.199Z"
canonical: "#86789"
canonical_issue: "#86789"
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

# gitcrawl-902-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523463965](https://github.com/openclaw/clownfish/actions/runs/27523463965)

Workflow conclusion: success

Worker result: planned

Canonical: #86789

## Summary

Plan-only classification from the hydrated preflight artifact. Keep #86789 as the live non-security canonical issue. Route #86795 to central security handling because the job explicitly marks it as a security-signal ref, with no close, merge, label, comment, or fix action planned. #87057 is already closed and only used as historical conflict/context evidence.

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
| #86789 | keep_canonical | planned | canonical | #86789 is the open canonical bug report for the non-security root cause and should remain open for maintainer follow-up. |
| #86795 | route_security | planned | security_sensitive | The exact PR is explicitly marked by the job as a security-signal ref requiring central security handling. |
| #87057 | keep_closed | skipped | related | Already closed merged linked context; no mutation or closeout action is valid in this plan. |

## Needs Human

- none
