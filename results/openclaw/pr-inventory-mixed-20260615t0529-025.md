---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-025"
mode: "plan"
run_id: "27526356761"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526356761"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.297Z"
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

# pr-inventory-mixed-20260615T0529-025

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526356761](https://github.com/openclaw/clownfish/actions/runs/27526356761)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected. Security-sensitive PRs are routed to central OpenClaw security handling; unrelated non-security PRs are kept open for maintainer review or follow-up because merge, close, fix, and low-signal cleanup gates are not satisfied in this job.

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
| #72548 | route_security | planned | security_sensitive | Security-sensitive PRs are out of scope for ProjectClownfish mutation and must be quarantined item-by-item. |
| #79655 | keep_related | planned | related | Related to prior Codex replay work but not a safe duplicate closeout or merge candidate in this plan-only shard. |
| #79880 | route_security | planned | security_sensitive | The PR changes security-boundary-adjacent doctor warning behavior and must route through central security handling. |
| #80293 | keep_independent | planned | independent | Independent PR inventory item; keep open for normal maintainer review rather than dedupe or close. |
| #80532 | route_security | planned | security_sensitive | Exec path approval behavior is security-boundary-adjacent and should be handled outside ProjectClownfish cleanup. |
| #80243 | route_security | planned | security_sensitive | Security-boundary and dependency-sensitive changes should be routed to central security handling. |
| #85035 | route_security | planned | security_sensitive | Plugin hook and dependency changes marked security-sensitive are outside cleanup automation. |
| #81341 | keep_related | planned | related | Related to the hydrated ACP follow-up issue, but not closable or mergeable under current gates. |
| #80455 | keep_related | planned | related | Keep open as the related implementation path for #80435; not safe for closeout or merge recommendation in this shard. |
| #80716 | keep_independent | planned | independent | Independent docs PR; keep open rather than plan low-signal closure because the job disabled that closeout path. |

## Needs Human

- none
