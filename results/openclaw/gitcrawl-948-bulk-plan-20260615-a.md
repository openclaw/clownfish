---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-948-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523566461"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523566461"
head_sha: "86103b97bc1c06f021ad75d533f6055a87af8e57"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:17:30.979Z"
canonical: "#84835"
canonical_issue: "#84835"
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

# gitcrawl-948-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523566461](https://github.com/openclaw/clownfish/actions/runs/27523566461)

Workflow conclusion: success

Worker result: planned

Canonical: #84835

## Summary

Read-only plan: keep #84835 as the live non-security canonical issue. Route #84836 to central security handling because the preflight artifact explicitly marks it security-sensitive. No close, merge, label, comment, or fix PR action is planned.

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
| #78695 | keep_closed | skipped |  | Already closed historical context; no mutation is valid or needed. |
| #84835 | keep_canonical | planned | canonical | Best live non-security canonical for this cluster; keep open for maintainer review and any non-security follow-up. |
| #84836 | route_security | planned | security_sensitive | Quarantine this PR to central OpenClaw security handling without blocking the unrelated non-security canonical issue. |

## Needs Human

- none
