---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-046"
mode: "plan"
run_id: "27526385181"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526385181"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.438Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-mixed-20260615T0529-046

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526385181](https://github.com/openclaw/clownfish/actions/runs/27526385181)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations recommended. Security-sensitive refs are quarantined individually; already-closed PRs stay closed; open non-security PRs are kept for maintainer/proof follow-up rather than closed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #73455 | route_security | planned | security_sensitive | Security-boundary-shaped Matrix participation work is out of scope for Clownfish backlog cleanup. |
| #74503 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is available in plan mode. |
| #73897 | keep_related | planned | related | Not a duplicate and not low-signal enough for closeout; keep open for proof and maintainer review. |
| #73984 | keep_closed | skipped | fixed_by_candidate | Already closed after replacement/current-main implementation; no mutation is available in plan mode. |
| #73635 | keep_related | planned | related | Related to existing provider HTML classification work but still an open, distinct candidate requiring proof. |
| #73792 | keep_closed | skipped | related | Already closed; keep as historical evidence for any future MCP runtime recovery cluster. |
| #73917 | route_security | planned | security_sensitive | Bootstrap file selection touches trust-boundary-shaped behavior; quarantine to central security handling rather than backlog cleanup. |
| #73165 | route_security | planned | security_sensitive | MCP readiness and skill exposure crosses security-boundary-shaped behavior; route the item only. |
| #74411 | keep_related | planned | related | Related to prior browser-download work, but still an active open PR with unique current implementation details and proof blockers. |
| #74200 | route_security | planned | security_sensitive | Skill sync/readability behavior is security-boundary-shaped and should be quarantined for central security handling. |

## Needs Human

- none
