---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-863-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526240294"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526240294"
head_sha: "df0ecb937a5f73036ef8def5c1f076a5c228a0d6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:36:40.335Z"
canonical: null
canonical_issue: null
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

# gitcrawl-863-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526240294](https://github.com/openclaw/clownfish/actions/runs/27526240294)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification completed from the hydrated cluster preflight artifact. The hinted canonical issue #73328 is already closed, so no close action is valid and there is no live non-security canonical to promote. The only open candidate, #73382, is explicitly listed by the job as a security-signal ref requiring central routing, so it is quarantined with a non-mutating route_security action.

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
| #73328 | keep_closed | skipped | canonical | Already closed in live hydrated state; retain as historical canonical evidence only. |
| #73382 | route_security | planned | security_sensitive | The job explicitly marks this exact open PR as a security-signal ref requiring central security routing, so Clownfish should not close, merge, label, comment, or repair it in this cluster. |

## Needs Human

- none
