---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-674-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523182151"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523182151"
head_sha: "2eb7becb97c14f307a0a4930f6deab62b7223dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:07:30.417Z"
canonical: "#67177"
canonical_issue: "#67177"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-674-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523182151](https://github.com/openclaw/clownfish/actions/runs/27523182151)

Workflow conclusion: success

Worker result: planned

Canonical: #67177

## Summary

Plan mode only. #67177 remains the live canonical issue for the MSTeams file.download.info downloadUrl Graph shares rewrite bug. #85845 is an open linked PR for the same narrow fix, but the job marks it as a security-signal ref requiring central security routing, so it is quarantined with a non-mutating route_security action rather than merge, close, or fixed-by-candidate handling. Closed linked refs are historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #24797 | keep_closed | skipped | superseded | Already closed; no closure action is valid. |
| #28014 | keep_closed | skipped | related | Already closed; no closure action is valid. |
| #55383 | keep_closed | skipped | related | Already closed; no closure action is valid. |
| #63942 | keep_closed | skipped | related | Merged historical fix; it informs the canonical issue but is not an open candidate. |
| #67177 | keep_canonical | planned | canonical | Best surviving non-security canonical issue for the root cause; keep open until a routed or replacement fix path lands. |
| #85845 | route_security | planned | security_sensitive | Quarantine only this PR per the job's explicit security-signal directive; do not merge, close, comment on, or use it for fixed-by-candidate closeout in this cluster. |

## Needs Human

- none
