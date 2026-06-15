---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-997-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526252090"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526252090"
head_sha: "df0ecb937a5f73036ef8def5c1f076a5c228a0d6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:37:32.195Z"
canonical: "#65374"
canonical_issue: "#65374"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-997-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526252090](https://github.com/openclaw/clownfish/actions/runs/27526252090)

Workflow conclusion: success

Worker result: planned

Canonical: #65374

## Summary

Read-only plan result. #65374 remains the live non-security canonical issue for the shared-workspace dreaming contamination bug, but it is an existing-overlap context ref owned by another job. The only listed open candidate, #76140, is explicitly marked security-sensitive in the preflight artifact and must be routed to central OpenClaw security handling. No close, merge, label, comment, or fix PR action is planned.

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
| #1 | keep_closed | skipped | independent | Already closed and unrelated historical linked context only. |
| #2 | keep_closed | skipped | independent | Already closed and unrelated historical linked context only. |
| #3 | keep_closed | skipped | independent | Already closed and unrelated historical linked context only. |
| #65374 | keep_canonical | planned | canonical | Best live canonical issue for the non-security bug family, but not actionable in this cluster because overlap policy excludes it. |
| #76140 | route_security | planned | security_sensitive | Security-sensitive open PR must be quarantined to central OpenClaw security handling; no close, merge, or fix action is allowed from this worker. |

## Needs Human

- none
