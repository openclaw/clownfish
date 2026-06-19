---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1247-small-dedupe-wave"
mode: "plan"
run_id: "27807724346-1-0"
workflow_run_id: "27807724346"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27807724346"
head_sha: "deb2ac7ddd03604b39c80460a2c07a603f493d82"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T05:41:41.649Z"
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

# gitcrawl-1247-small-dedupe-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27807724346](https://github.com/openclaw/clownfish/actions/runs/27807724346)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan mode only. #40945 is explicitly security-sensitive in the hydrated preflight artifact and should be routed to central OpenClaw security handling. #94466 is non-security and related to the same broad image/WebChat area, but it describes a distinct native Mac App MEDIA open/download regression rather than the remote markdown image rendering behavior in #40945, so no duplicate closeout is planned.

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
| #40945 | route_security | planned | security_sensitive | Security-sensitive hydrated items are out of scope for Clownfish dedupe cleanup and must be routed without close, label, comment, merge, or fix actions. |
| #94466 | keep_related | planned | related | Same broad WebChat image handling area, but the affected surface and user-visible failure differ enough that #94466 should not be closed as a duplicate of the quarantined #40945. |

## Needs Human

- none
