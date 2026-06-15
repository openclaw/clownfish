---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-275-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520878403"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520878403"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.932Z"
canonical: "#75043"
canonical_issue: "#82109"
canonical_pr: "#75043"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-275-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520878403](https://github.com/openclaw/clownfish/actions/runs/27520878403)

Workflow conclusion: success

Worker result: planned

Canonical: #75043

## Summary

Plan-only classification for three open candidates. #75043 remains the live canonical PR for provider-aware automatic TTS emotion mapping. #82109 is a related tracking/product-boundary issue that should stay open with #75043. #81834 is security-sensitive per the preflight artifact and must be routed to central security handling only.

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
| #75043 | keep_canonical | planned | canonical | Best live canonical for the non-security autoEmotion feature family, but not mergeable by this job because merge/fix actions are blocked and product-boundary review remains. |
| #81834 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish backlog-cleanup scope; route only #81834 and continue classifying unrelated items. |
| #82109 | keep_related | planned | related | Same feature family as #75043, but it is a useful open tracker for the product-boundary decision and should not be closed in this plan. |

## Needs Human

- none
