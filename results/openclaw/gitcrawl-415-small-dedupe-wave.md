---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-415-small-dedupe-wave"
mode: "plan"
run_id: "27807724346-1-4"
workflow_run_id: "27807724346"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27807724346"
head_sha: "deb2ac7ddd03604b39c80460a2c07a603f493d82"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T05:41:41.651Z"
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

# gitcrawl-415-small-dedupe-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27807724346](https://github.com/openclaw/clownfish/actions/runs/27807724346)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Both hydrated open issues in this cluster are explicitly security-sensitive in the preflight artifact, so the only safe plan is scoped quarantine via central OpenClaw security handling. No duplicate closure, canonical cleanup, merge, or fix artifact is planned.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #38439 | route_security | planned | security_sensitive | Security-sensitive hydrated refs are read-only and must be routed to central OpenClaw security handling; ProjectClownfish must not close, comment on, label, merge, or open a fix PR for this item. |
| #41201 | route_security | planned | security_sensitive | Security-sensitive hydrated refs are read-only and must be routed to central OpenClaw security handling; ProjectClownfish must not close, comment on, label, merge, or open a fix PR for this item. |

## Needs Human

- none
