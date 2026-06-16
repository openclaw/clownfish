---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1836-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585128911"
workflow_run_id: "27585128911"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585128911"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:20:07.491Z"
canonical: "#46899"
canonical_issue: "#46899"
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

# gitcrawl-1836-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585128911](https://github.com/openclaw/clownfish/actions/runs/27585128911)

Workflow conclusion: success

Worker result: planned

Canonical: #46899

## Summary

Classified the hydrated open/non-closed candidate lane against the obsolete closed representative #57601. The current canonical should be open issue #46899. No close, merge, or fix PR action is safe: #91162 is the linked fix path but has failing real-behavior proof checks, #58443 is already closed, and #64831/#70814 are security-sensitive route-only items.

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
| #46899 | keep_canonical | planned | canonical | Open issue #46899 is the clearest surviving canonical for the non-security cron channel-mismatch lane. |
| #91162 | keep_related | planned | related | This is the linked fix path for #46899, but merge/fixed-by closeout is blocked by failing proof checks and merge is not allowed by the job. |
| #58443 | keep_closed | skipped | superseded | Already closed historical context; no mutation is valid. |
| #64831 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope and should be quarantined to central OpenClaw security handling. |
| #70814 | route_security | planned | security_sensitive | Security-sensitive PR concern must be routed to central security handling, not backlog cleanup. |

## Needs Human

- none
