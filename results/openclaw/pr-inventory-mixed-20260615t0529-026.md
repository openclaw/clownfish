---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-026"
mode: "plan"
run_id: "27526358031"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526358031"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.305Z"
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
needs_human_count: 1
---

# pr-inventory-mixed-20260615T0529-026

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526358031](https://github.com/openclaw/clownfish/actions/runs/27526358031)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Classified the PR inventory shard independently. Four security-sensitive PRs are scoped for central security routing, one already-closed PR is kept closed, four open non-security PRs are distinct active candidates to keep independent, and one PR has a maintainer-directed unresolved stale-change decision.

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
| Needs human | 1 |

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
| #80710 | route_security | planned | security_sensitive | Security-sensitive exact ref is out of scope for backlog cleanup and should be handled by central OpenClaw security review. |
| #80670 | keep_independent | planned | independent | Distinct active WebChat/session-state PR; not a duplicate or low-signal close candidate in this shard. |
| #80632 | route_security | planned | security_sensitive | Security-sensitive exact ref is out of scope for ProjectClownfish mutation and should be routed centrally. |
| #84908 | route_security | planned | security_sensitive | Security-sensitive exact ref should be quarantined for central security handling. |
| #84140 | needs_human | blocked | needs_human | Maintainer signal plus broad formatting churn makes close/keep/repair a human decision in this plan-only job; no fix or merge actions are allowed. |
| #80965 | route_security | planned | security_sensitive | Security-sensitive exact ref should be routed to central OpenClaw security handling. |
| #81045 | keep_closed | skipped | fixed_by_candidate | Already closed refs must not receive closure actions. |
| #80985 | keep_independent | planned | independent | Distinct cron/webchat validation PR; keep as an independent active candidate rather than close or merge in plan mode. |
| #80982 | keep_independent | planned | independent | Distinct feature/API candidate with contributor follow-up; not a duplicate or close candidate in this shard. |
| #80957 | keep_independent | planned | independent | Distinct active status/model-switch candidate; keep independent because there is no hydrated open canonical for closure and merge is blocked. |

## Needs Human

- #84140 maintainer-directed stale subchange removal versus broad formatting PR disposition
