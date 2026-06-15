---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T060018-088"
mode: "plan"
run_id: "27527908819"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27527908819"
head_sha: "a2e72c1643ea3846434c7f2e5f7cadde5c103b50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T06:24:18.785Z"
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

# pr-inventory-needs_proof-20260615T060018-088

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27527908819](https://github.com/openclaw/clownfish/actions/runs/27527908819)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No shared canonical was selected because the job is an inventory shard. Open non-security PRs are kept as independent proof-needed candidates; already closed non-security PRs are recorded as closed; security-sensitive PRs are quarantined with route_security.

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
| #76230 | keep_independent | planned | independent | Open, non-security, no hydrated canonical, and not merge-ready. |
| #75881 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #75350 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #75435 | route_security | planned | security_sensitive | Security-sensitive item; route to central OpenClaw security handling. |
| #75899 | route_security | planned | security_sensitive | Security-sensitive item; route to central OpenClaw security handling. |
| #75505 | route_security | planned | security_sensitive | Security-sensitive item; route to central OpenClaw security handling. |
| #75677 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #75127 | keep_independent | planned | independent | Open, non-security, proof-needed standalone PR. |
| #76185 | keep_closed | skipped | fixed_by_candidate | Already closed after current-main coverage was recorded. |
| #74994 | route_security | planned | security_sensitive | Security-sensitive item; route to central OpenClaw security handling. |

## Needs Human

- none
