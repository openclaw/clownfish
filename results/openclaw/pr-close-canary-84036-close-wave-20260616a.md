---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-84036-close-wave-20260616a"
mode: "execute"
run_id: "27582174736"
workflow_run_id: "27582174736"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27582174736"
head_sha: "628bd0577548681836c70f54751ba86a83a56eba"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T10:04:56.975Z"
canonical: null
canonical_issue: "#83999"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-close-canary-84036-close-wave-20260616a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27582174736](https://github.com/openclaw/clownfish/actions/runs/27582174736)

Workflow conclusion: failure

Worker result: planned

Canonical: #83999

## Summary

Hydrated preflight state shows #84036 and #91345 are both open, but deterministic validation classified #91345 as security-sensitive and requires route_security. Quarantine #91345 without mutation, and downgrade #84036 from close_superseded to non-mutating keep_related because its closeout depended on the quarantined canonical PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #91345 | route_security | planned | security_sensitive | #91345 was classified as security-sensitive by deterministic validation, so the only safe scoped action is route_security. |
| #84036 | keep_related | planned | related | Downgraded from close_superseded because the planned canonical PR #91345 is security-routed, making the closeout unsafe to replay. |

## Needs Human

- #84036 closeout depends on #91345, which deterministic validation classified as security-sensitive and routed to central OpenClaw security handling.
