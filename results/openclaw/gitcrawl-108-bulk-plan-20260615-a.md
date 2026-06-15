---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-108-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520781506"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520781506"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.881Z"
canonical: "#91375"
canonical_issue: "#91375"
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

# gitcrawl-108-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520781506](https://github.com/openclaw/clownfish/actions/runs/27520781506)

Workflow conclusion: success

Worker result: planned

Canonical: #91375

## Summary

Plan-only classification for five open cluster candidates. #91375 remains the live canonical issue. #75621, #78381, and #81595 are related but not duplicates of the canonical regression. #81787 is scoped to route_security because the job explicitly marks it as a security-signal ref. No close, merge, label, comment, or fix PR action is planned.

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
| #91375 | keep_canonical | planned | canonical | #91375 is the clearest surviving canonical for the latest-release bundle-tools regression and remains open in the live preflight state. |
| #75621 | keep_related | planned | related | #75621 is in the same MCP/gateway performance family as #91375, but it describes a separate runtime ownership/duplicate-child root cause rather than the specific 2026.6.1 bundle-tools regression. |
| #78381 | keep_related | planned | related | #78381 improves observability for prep-stage timings, so it is related to diagnosing #91375, but it does not itself fix the reported bundle-tools regression and is not a duplicate issue. |
| #81595 | keep_related | planned | related | #81595 is a related observability issue that may help diagnose #91375, but it is not the canonical regression report and should not be closed while its linked fix path remains open. |
| #81787 | route_security | planned | security_sensitive | The job explicitly requires #81787 to be quarantined with route_security, so no merge, close, label, comment, or fix action is planned for that PR. |

## Needs Human

- none
