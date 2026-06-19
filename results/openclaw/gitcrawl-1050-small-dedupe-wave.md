---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1050-small-dedupe-wave"
mode: "plan"
run_id: "27807724346-1-2"
workflow_run_id: "27807724346"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27807724346"
head_sha: "deb2ac7ddd03604b39c80460a2c07a603f493d82"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T05:41:41.650Z"
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

# gitcrawl-1050-small-dedupe-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27807724346](https://github.com/openclaw/clownfish/actions/runs/27807724346)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. #61009 is the only open item and is explicitly security-sensitive in the preflight artifact, so it is routed to central security handling. #87213 and #92141 are already closed in live preflight state and must not receive close actions. No live non-security canonical remains in this cluster.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #61009 | route_security | planned | security_sensitive | Security-sensitive issue is outside ProjectClownfish cleanup scope and should be routed to central OpenClaw security handling without closing, labeling, commenting, merging, or fixing. |
| #87213 | keep_closed | skipped | related | Already closed in live preflight state; no mutation is valid. It is related context, not a live duplicate closeout target. |
| #92141 | keep_closed | skipped | canonical | Historical canonical representative is already closed. No open non-security item in this cluster should replace it as live canonical. |

## Needs Human

- none
