---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-142-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520796133"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520796133"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.894Z"
canonical: "#91739"
canonical_issue: "#91739"
canonical_pr: "#92526"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-142-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520796133](https://github.com/openclaw/clownfish/actions/runs/27520796133)

Workflow conclusion: success

Worker result: planned

Canonical: #91739

## Summary

Plan-only classification: keep #91739 as the canonical issue and #92526 as the leading non-security fix PR. Route #92072 to central security handling because the job explicitly marks it as a security-signal ref. Treat #92763 as superseded by #92526; no GitHub mutations were performed.

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
| #91739 | keep_canonical | planned | canonical | #91739 remains the best canonical issue because it is open, contains the source reproduction, and no hydrated merged fix closes the root cause yet. |
| #92072 | route_security | planned | security_sensitive | The job gives an explicit security-signal routing instruction for this exact PR, so it is quarantined from ProjectClownfish mutation while unrelated non-security items continue to be classified. |
| #92526 | keep_canonical | planned | canonical | #92526 is the clearest non-security fix candidate for the canonical issue, but this plan-mode job cannot merge it. |
| #92763 | close_superseded | planned | superseded | #92763 overlaps the same root cause and fix surface as #92526 but has weaker hydrated readiness signals, so it should be superseded with contributor credit preserved. |

## Needs Human

- none
