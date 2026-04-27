---
repo: "openclaw/openclaw"
cluster_id: "low-signal-pr-sweep-20260427T0530-02"
mode: "autonomous"
run_id: "24978252339"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978252339"
head_sha: "ef3a582bffe2ffa57be653d2945931140635f43a"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-27T05:33:37.318Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# low-signal-pr-sweep-20260427T0530-02

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978252339](https://github.com/openclaw/clownfish/actions/runs/24978252339)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Used the provided hydrated preflight artifact for the low-signal PR sweep. All non-security candidate PRs are already closed, so no close_low_signal mutation is valid. The security-sensitive candidate is routed to central security handling as a non-mutating quarantine action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #58005 | keep_closed | skipped | low_signal | Already closed in live preflight state; closed refs must not receive close_low_signal actions. |
| #58386 | keep_closed | skipped | low_signal | Already closed in live preflight state; closed refs must not receive close_low_signal actions. |
| #58291 | keep_closed | skipped | low_signal | Already closed in live preflight state; closed refs must not receive close_low_signal actions. |
| #58500 | keep_closed | skipped | low_signal | Already closed in live preflight state; closed refs must not receive close_low_signal actions. |
| #59082 | route_security | planned | security_sensitive | Security-sensitive item is outside ProjectClownfish low-signal cleanup scope; route only this exact ref to central security handling. |

## Needs Human

- none
