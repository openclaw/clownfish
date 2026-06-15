---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-247-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520867888"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520867888"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.926Z"
canonical: "#90941"
canonical_issue: "#90941"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-247-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520867888](https://github.com/openclaw/clownfish/actions/runs/27520867888)

Workflow conclusion: success

Worker result: planned

Canonical: #90941

## Summary

Plan-only classification completed from the hydrated cluster artifact. #90941 remains the live canonical issue for the symlinked launcher resolver bug. #90942 is explicitly listed by the job as a security-signal ref and is routed to central security handling without blocking unrelated classification. #90951 is related but tracks a distinct npm-package asset/product decision, not a duplicate of #90941.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #90941 | keep_canonical | planned | canonical | #90941 is the best live canonical for the symlinked launcher sandbox-script resolution bug. |
| #90942 | route_security | planned | security_sensitive | The job explicitly marks #90942 as the security-signal ref requiring route_security, so it is out of scope for ProjectClownfish mutation. |
| #90951 | keep_related | planned | related | #90951 should stay open as related follow-up/product-decision work, not be folded into the #90941 symlink resolver canonical. |

## Needs Human

- none
