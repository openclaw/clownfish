---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T060018-089"
mode: "plan"
run_id: "27527910515"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27527910515"
head_sha: "a2e72c1643ea3846434c7f2e5f7cadde5c103b50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T06:25:44.289Z"
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

# pr-inventory-needs_proof-20260615T060018-089

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27527910515](https://github.com/openclaw/clownfish/actions/runs/27527910515)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification for 10 candidate PRs. No GitHub mutations are planned because this shard has no shared canonical, merge/fix actions are blocked, low-signal/instant close is disabled, several open PRs still need real behavior proof or maintainer/product review, and security-sensitive #75247 is quarantined for central handling.

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
| #76065 | keep_closed | skipped | fixed_by_candidate | Already closed; keep as historical context only. |
| #75796 | keep_closed | skipped | fixed_by_candidate | Already closed; linked replacement context exists but no mutation is available or needed in this plan shard. |
| #75179 | keep_independent | planned | independent | Independent open PR with active technical review state; not closable, not mergeable, and no fix/merge action is allowed in this job. |
| #76473 | keep_related | planned | related | Related current cron warning PR, but maintainer/product review and proof are still required; no close, merge, or fix action is permitted. |
| #74425 | keep_independent | planned | independent | Open standalone PR with useful contributor work but proof and mergeability blockers; not a closure candidate. |
| #75545 | keep_related | planned | related | Related to the gateway SIGTERM/start-idempotency family, but the open PR remains proof-blocked and cannot be merged or repaired in this plan job. |
| #75714 | keep_closed | skipped | fixed_by_candidate | Already closed as covered by #90728; preserve as historical contributor context only. |
| #75247 | route_security | planned | security_sensitive | Security-sensitive review evidence must be routed to central OpenClaw security handling; no ProjectClownfish mutation. |
| #76034 | keep_independent | planned | independent | Open feature/config-ui PR with failing proof and CI; no duplicate/superseded evidence and no merge/fix authority in this job. |
| #75786 | keep_related | planned | related | Related to the hydrated open issue it claims to fix, but proof and merge-preflight blockers prevent merge/fixed-by-candidate closeout. |

## Needs Human

- none
