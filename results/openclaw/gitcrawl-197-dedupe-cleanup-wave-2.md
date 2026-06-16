---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-197-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609381810"
workflow_run_id: "27609381810"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609381810"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.100Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-197-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609381810](https://github.com/openclaw/clownfish/actions/runs/27609381810)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Routed the single hydrated open item to central OpenClaw security handling because deterministic validation marks #92563 as security-sensitive. No close, label, merge, or fix action is planned; the route is scoped only to the exact issue ref and does not emit any cluster-scoped security action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #92563 | route_security | planned | security_sensitive | #92563 is the only hydrated actionable ref in the cluster and validator output marks it security-sensitive. It must be routed to central OpenClaw security handling without close, label, merge, comment, or fix automation. |

## Needs Human

- none
