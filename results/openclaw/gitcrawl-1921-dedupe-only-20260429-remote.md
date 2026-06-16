---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1921-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27594231339"
workflow_run_id: "27594231339"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27594231339"
head_sha: "8364aec238559663a0a8644042702a5c6ccea4db"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T04:34:46.706Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 18
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1921-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27594231339](https://github.com/openclaw/clownfish/actions/runs/27594231339)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

The obsolete representative #64663 is closed and cannot be the live canonical target. The hydrated cluster contains security-sensitive workspace-symlink and exec-approvals refs, so this repaired result routes the exact security-sensitive refs (#29736, #38622, #40230, #62938, #64472, #64473, #73401, #73988, #74002) to central security handling and leaves the remaining already-closed context refs non-mutating. No close, merge, or fix PR action is planned because open actionable work is security-routed and fix/merge are blocked by the job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
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
| #38622 | route_security | planned | security_sensitive | Open security-sensitive issue must be quarantined to central OpenClaw security triage instead of ProjectClownfish backlog cleanup. |
| #64472 | route_security | planned | security_sensitive | Open security-sensitive issue must be routed to central OpenClaw security triage. |
| #73401 | route_security | planned | security_sensitive | Open security-sensitive PR must not be merged, closed, or fixed by ProjectClownfish automation. |
| #29736 | route_security | planned | security_sensitive | Security-sensitive issue ref must be routed to central OpenClaw security handling even though it is closed historical context. |
| #62938 | route_security | planned | security_sensitive | Security-sensitive PR ref must be routed to central OpenClaw security handling even though it is closed historical context. |
| #73988 | route_security | planned | security_sensitive | Security-sensitive PR ref must be routed to central OpenClaw security handling even though it is closed historical context. |
| #74002 | route_security | planned | security_sensitive | Security-sensitive PR ref must be routed to central OpenClaw security handling even though it is closed historical context. |
| #38650 | keep_closed | skipped | superseded | Closed historical PR; no close action is valid. |
| #40230 | route_security | planned | security_sensitive | Security-sensitive PR ref must be routed to central OpenClaw security handling even though it is closed historical context. |
| #44512 | keep_closed | skipped | fixed_by_candidate | Closed historical PR; no close action is valid. |
| #51277 | keep_closed | skipped | independent | Closed historical PR; no close action is valid. |
| #52522 | keep_closed | skipped | superseded | Closed historical PR; no close action is valid. |
| #62917 | keep_closed | skipped | duplicate | Closed historical issue; no close action is valid. |
| #64473 | route_security | planned | security_sensitive | Security-sensitive PR ref must be routed to central OpenClaw security handling even though it is closed historical context. |
| #64663 | keep_closed | skipped | superseded | Closed representative is obsolete and cannot be a live canonical target. |
| #65736 | keep_closed | skipped | superseded | Closed historical PR; no close action is valid. |
| #66404 | keep_closed | skipped | superseded | Closed historical PR; no close action is valid. |
| #68417 | keep_closed | skipped | related | Closed historical PR; no close action is valid. |

## Needs Human

- none
