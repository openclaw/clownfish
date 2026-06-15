---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-044"
mode: "plan"
run_id: "27526382321"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526382321"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.424Z"
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
needs_human_count: 2
---

# pr-inventory-mixed-20260615T0529-044

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526382321](https://github.com/openclaw/clownfish/actions/runs/27526382321)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No GitHub mutations are planned because the shard is not a dedupe cluster, merge/fix/raise_pr are blocked, low-signal closeout is disabled, and several open PRs still need maintainer judgment, proof, rebase, or security routing.

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
| Needs human | 2 |

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
| #76094 | keep_independent | planned | independent | Useful narrow docs PR, but this inventory shard has no shared canonical and merge/fix actions are blocked. |
| #76298 | route_security | planned | security_sensitive | Security-sensitive item must be quarantined to central OpenClaw security handling; no close, merge, label, comment, or fix action. |
| #72267 | keep_independent | planned | independent | Independent narrow bugfix candidate; no duplicate/superseding item is hydrated in this inventory shard. |
| #80388 | needs_human | planned | needs_human | Broad feature and protocol/UI surface needs maintainer product and technical review, not inventory closeout. |
| #78139 | keep_independent | planned | independent | Useful independent UX fix awaiting maintainer review; no duplicate/superseding item is hydrated. |
| #80779 | route_security | planned | security_sensitive | Security-sensitive item must be routed without mutation; unrelated non-security items remain classifiable. |
| #78765 | keep_independent | planned | independent | Independent narrow TUI bugfix awaiting maintainer review. |
| #85225 | keep_related | planned | related | Related heartbeat/session-state work, but not a duplicate or complete replacement for #14051. |
| #86146 | keep_closed | skipped | fixed_by_candidate | Already closed after being covered by merged #91281; no mutation should be planned. |
| #72807 | keep_closed | skipped | independent | Already closed; record only the non-mutating classification. |

## Needs Human

- #80388 needs maintainer product and technical review because it is a broad plugin Control UI entry point feature touching protocol, gateway, auth-adjacent launch tokens, UI, docs, and tests.
- #85225 remains a product-scope call against #14051 because it is related heartbeat work but not the full activity-based idle-timeout feature.
