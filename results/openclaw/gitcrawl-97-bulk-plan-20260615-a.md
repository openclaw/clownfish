---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-97-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523572288"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523572288"
head_sha: "86103b97bc1c06f021ad75d533f6055a87af8e57"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:17:30.981Z"
canonical: "#77973"
canonical_issue: null
canonical_pr: "#77973"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-97-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523572288](https://github.com/openclaw/clownfish/actions/runs/27523572288)

Workflow conclusion: success

Worker result: planned

Canonical: #77973

## Summary

Plan-mode classification only. #77973 remains the live canonical PR for the non-security agentRunCache cap; #77976 is the matching open issue and should stay open while #77973 is unmerged. #77986 is security-sensitive and must be routed to central security handling. #77987 is the paired auth-rate-limit PR for that security-sensitive report, so it is also routed rather than handled by Clownfish backlog cleanup.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #77973 | keep_canonical | planned | canonical | Best surviving non-security canonical for the agentRunCache unbounded-growth root cause; merge is not planned because the job blocks merge and no merge_preflight is requested. |
| #77976 | keep_related | planned | fixed_by_candidate | Same root cause as canonical PR #77973 and covered by that candidate fix, but it should not be closed in this plan because the fix is still unmerged and the hydrated ClawSweeper review says to keep it open. |
| #77986 | route_security | planned | security_sensitive | Security-sensitive auth-rate-limit report is outside Clownfish backlog cleanup and must be quarantined to central security handling. |
| #77987 | route_security | planned | security_sensitive | The PR is the paired fix path for the security-routed #77986 auth-rate-limit report, so it should be handled by central security review rather than Clownfish cleanup. |

## Needs Human

- none
