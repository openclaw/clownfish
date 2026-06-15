---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-023"
mode: "plan"
run_id: "27526354465"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526354465"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.281Z"
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

# pr-inventory-mixed-20260615T0529-023

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526354465](https://github.com/openclaw/clownfish/actions/runs/27526354465)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Planned conservative inventory classification for the hydrated PR shard. Security-sensitive refs are routed to central handling; closed refs are left closed; active non-security PRs are kept as independent maintainer/backlog items because this shard is not a dedupe cluster and no close, merge, or fix action is permitted.

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
| #85748 | keep_independent | planned | independent | Active non-security PR with its own review path; not a duplicate or close candidate in this inventory shard. |
| #56904 | route_security | planned | security_sensitive | Security-boundary guard-hook work is out of ProjectClownfish backlog cleanup scope and should route to central OpenClaw security handling. |
| #86085 | keep_independent | planned | independent | Current focused locale PR should remain on its own maintainer-review path. |
| #79913 | route_security | planned | security_sensitive | Spawn allowlist authorization/config behavior is security-sensitive in this cluster and must route to central OpenClaw security handling. |
| #55828 | route_security | planned | security_sensitive | Teams interactivity parity work touches security-boundary-labeled plugin/channel behavior and is out of cleanup scope. |
| #59842 | keep_independent | planned | independent | Active gateway hardening PR with unresolved proof/check state; keep as independent maintainer/backlog work. |
| #59986 | keep_independent | planned | independent | Broad active draft refactor should remain independent; no close, merge, or fix action is permitted. |
| #58367 | keep_independent | planned | independent | Not a boring duplicate or superseded item; it is an active draft with unresolved proof/review work. |
| #58378 | route_security | planned | security_sensitive | Gateway trust and TLS/SSH pinning behavior is security-sensitive and should route to central OpenClaw security handling. |
| #59705 | keep_independent | planned | independent | Active draft automation PR needing proof; no close or merge action is justified in this inventory plan. |
| #39 | keep_closed | skipped | fixed_by_candidate | Historical closed context only. |
| #52357 | keep_closed | skipped | superseded | Older zh-TW PR is already closed and superseded by the current focused PR. |
| #58812 | keep_closed | skipped | independent | Historical closed context only. |
| #79490 | route_security | planned | security_sensitive | Spawn authorization issue is security-sensitive and should route to central OpenClaw security handling. |
| #79538 | route_security | planned | security_sensitive | Broad PR includes security-boundary spawn allowlist behavior and must route to central OpenClaw security handling. |
| #85718 | keep_closed | skipped | fixed_by_candidate | Merged historical context, not a live target. |
| #88279 | keep_closed | skipped | fixed_by_candidate | Historical closed context only. |
| #92856 | keep_closed | skipped | fixed_by_candidate | Historical closed context only. |

## Needs Human

- none
