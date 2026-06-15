---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-015"
mode: "plan"
run_id: "27526345071"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526345071"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.239Z"
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

# pr-inventory-mixed-20260615T0529-015

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526345071](https://github.com/openclaw/clownfish/actions/runs/27526345071)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory shard. Classified each job-listed PR independently using the hydrated preflight artifact; no shared canonical was invented and no mutating GitHub action is proposed.

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
| #69972 | route_security | planned | security_sensitive | Security-boundary-adjacent gateway restart and plugin resolution work is out of ProjectClownfish backlog mutation scope. |
| #69999 | keep_independent | planned | independent | Standalone feature PR with unresolved proof/review gates; no closure or merge action is safe in this plan shard. |
| #84769 | keep_closed | skipped | security_sensitive | Already closed; closed refs must not receive close actions. Security-sensitive historical context is preserved as evidence only. |
| #85464 | keep_independent | planned | independent | Plausible standalone maintainer-review PR; this plan job does not allow merge/fix work and no duplicate closeout is warranted. |
| #44476 | keep_independent | planned | independent | Open non-security PR with unresolved proof/check/review blockers; keep as a standalone candidate rather than close or merge. |
| #46793 | route_security | planned | security_sensitive | Tool-policy bypass/security-boundary work must be routed to central OpenClaw security handling, not backlog cleanup. |
| #49022 | route_security | planned | security_sensitive | Media/file rendering behavior crosses security-sensitive surfaces; quarantine this exact PR while leaving unrelated inventory items classified. |
| #85402 | needs_human | planned | needs_human | Maintainer judgment is needed on whether to close this active-author PR as superseded by current main/release without a hydrated canonical fix ref. |
| #55997 | route_security | planned | security_sensitive | Admin/reset privilege-boundary work belongs in central security handling, not ProjectClownfish cleanup. |
| #71154 | route_security | planned | security_sensitive | Exec allowlist and approval semantics are security-sensitive; route this exact item and do not plan mutation. |

## Needs Human

- #85402: decide whether to close as superseded by current main/release after active author follow-up, because no hydrated canonical fix ref is available for a safe close action.
