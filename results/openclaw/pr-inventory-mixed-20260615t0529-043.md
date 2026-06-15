---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-043"
mode: "plan"
run_id: "27526380839"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526380839"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.418Z"
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

# pr-inventory-mixed-20260615T0529-043

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526380839](https://github.com/openclaw/clownfish/actions/runs/27526380839)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for 10 listed candidates. No GitHub mutations planned; security-sensitive candidates are routed to central security handling, already-closed candidate is kept closed, and remaining open PRs are preserved for independent maintainer/review handling.

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
| #83095 | keep_independent | planned | independent | Open focused PR with useful code and no duplicate canonical in this shard; keep for normal review/proof flow. |
| #78253 | route_security | planned | security_sensitive | Marked security-sensitive by hydrated preflight; route to central OpenClaw security handling without closure or merge action. |
| #81778 | keep_independent | planned | independent | Useful narrow PR tied to an open issue, but this plan-mode inventory cannot merge and should not close it. |
| #84453 | keep_independent | planned | independent | Independent automation PR with substantial but focused code; keep for maintainer review rather than close. |
| #82552 | keep_independent | planned | independent | Open PR has unique compatibility-migration work but failing checks and needs-changes signal; preserve rather than close. |
| #86088 | keep_independent | planned | independent | Narrow replacement PR with contributor credit preserved in the branch history/body; keep independently for maintainer review. |
| #84146 | keep_closed | skipped | superseded | Already closed before this run; no mutation should be planned. |
| #86064 | keep_independent | planned | independent | Open focused PR with unique review path and no shared canonical selected; keep for proof/review. |
| #84581 | route_security | planned | security_sensitive | Secrets/API-key handling is security-sensitive in the hydrated artifact; route to central OpenClaw security handling. |
| #75121 | keep_independent | planned | independent | Substantial channel PR with addressed review feedback and passing checks, but no close/merge action is allowed or appropriate in this inventory shard. |

## Needs Human

- none
