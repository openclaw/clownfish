---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-224-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384969"
workflow_run_id: "27609384969"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384969"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:04:56.996Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-224-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384969](https://github.com/openclaw/clownfish/actions/runs/27609384969)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Deterministic repair quarantines the refs flagged by validation as security-sensitive. #58968, #72653, and #80147 are routed individually to central OpenClaw security handling with no GitHub mutation. #63332 remains closed historical context only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #58968 | route_security | planned | security_sensitive | Security-sensitive refs must be routed to central OpenClaw security handling as exact issue/PR refs. |
| #72653 | route_security | planned | security_sensitive | Security-sensitive refs must be routed to central OpenClaw security handling as exact issue/PR refs. |
| #63332 | keep_closed | skipped | related | Historical related PR is already closed and is not an actionable target for this cluster. |
| #80147 | route_security | planned | security_sensitive | Security-sensitive refs must be routed to central OpenClaw security handling as exact issue/PR refs. |

## Needs Human

- none
