---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-297-bulk-plan-20260615-a"
mode: "plan"
run_id: "27525966929"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525966929"
head_sha: "4574037aa1f27e59d5ea43eca0073b4c4dfc504c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:29:00.262Z"
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

# gitcrawl-297-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525966929](https://github.com/openclaw/clownfish/actions/runs/27525966929)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. All hydrated cluster refs are already closed in the preflight artifact, so no close, label, comment, merge, or fix action is available. The representative #73394 is closed and there is no other open item to promote as live canonical. Per the job notes, #73279 and #73394 are quarantined as security-signal refs with non-mutating route_security actions; #73278 is kept closed as historical context.

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
| #73278 | keep_closed | skipped | fixed_by_candidate | Already closed in live preflight state; no mutation should be planned. |
| #73279 | route_security | planned | security_sensitive | Security-signal ref is quarantined non-mutatingly per the job, and it is already closed. |
| #73394 | route_security | planned | security_sensitive | Representative is closed, so it cannot remain a live canonical; security-signal routing is non-mutating and scoped to this item. |

## Needs Human

- none
