---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-92704-close-wave-20260616a"
mode: "execute"
run_id: "27582532004"
workflow_run_id: "27582532004"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27582532004"
head_sha: "49c3b7a7e488d8827bdcd870f37e5eaf2b5b8c63"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T10:04:56.982Z"
canonical: null
canonical_issue: null
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

# pr-close-canary-92704-close-wave-20260616a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27582532004](https://github.com/openclaw/clownfish/actions/runs/27582532004)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Close-only canary repair: validator classified #92770 as security-sensitive, so #92770 is quarantined with route_security. Because the planned #92704 close depended on #92770 as the surviving canonical path, #92704 is downgraded to a non-mutating related classification and no close is proposed.

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
| #92770 | route_security | planned | security_sensitive | Validator classified the canonical PR target as security-sensitive; quarantine the exact item with route_security. |
| #92704 | keep_related | planned | related | Downgraded from close_superseded to non-mutating keep_related because the planned canonical close target is security-routed. |

## Needs Human

- #92770 was validator-classified as security-sensitive and routed to central OpenClaw security handling; #92704 closeout should not proceed while its canonical path is quarantined.
