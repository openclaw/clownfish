---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-207038-agentic-merge"
mode: "autonomous"
run_id: "24977043657"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24977043657"
head_sha: "50a0b51ad3e3cfffa74443fc81bf0c842f9747bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T04:49:07.510Z"
canonical: "https://github.com/openclaw/openclaw/pull/42009"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42009"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-207038-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24977043657](https://github.com/openclaw/clownfish/actions/runs/24977043657)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42009

## Summary

Classified the hydrated cluster without direct GitHub mutation. #42009 remains the best canonical open PR for the original --agent + --to bug, but no merge is recommended because merge preflight is incomplete. Default-agent --to/session-key items form a related subfamily: #56370/#56453/#63992 stay open, #64108 is already superseded/closed, and security-sensitive replacement PR #72414 is quarantined. Already-closed refs are not targeted for closure.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #30654 | route_security | planned | security_sensitive | Security-sensitive hydrated ref must be routed to central OpenClaw security handling, not processed by ProjectClownfish mutation. |
| #42009 | keep_canonical | planned | canonical | Best canonical for the representative bug, but merge is not recommended until the branch is refreshed/reviewed and merge_preflight is populated. |
| #56370 | keep_related | planned | related | Related default-agent routing issue should remain open until a non-security canonical fix lands or security triage resolves #72414. |
| #56453 | keep_related | planned | related | Useful related PR, but not the canonical PR for the representative #42009 bug and not merge-preflighted in this run. |
| #60614 | keep_closed | skipped | fixed_by_candidate | Already-closed refs must not receive close actions. |
| #60621 | keep_closed | skipped | superseded | Already-closed PR; no close action permitted. |
| #63992 | keep_related | planned | related | Keep the issue open while the security-sensitive replacement PR is routed to central security handling. |
| #64108 | keep_closed | skipped | superseded | Already closed as superseded by a replacement path; no further closure action is valid. |
| #72414 | route_security | planned | security_sensitive | Security-sensitive linked PR must be routed to central OpenClaw security handling; continue non-security classification only. |

## Needs Human

- none
