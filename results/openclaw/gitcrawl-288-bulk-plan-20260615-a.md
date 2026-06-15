---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-288-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520888056"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520888056"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.935Z"
canonical: "#77849"
canonical_issue: "#77849"
canonical_pr: "#86971"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-288-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520888056](https://github.com/openclaw/clownfish/actions/runs/27520888056)

Workflow conclusion: success

Worker result: planned

Canonical: #77849

## Summary

Plan-only classification for three hydrated open items. Keep #77849 as the live canonical issue. Route the artifact-marked security-sensitive PR #78010 to central security handling without closing it. Keep #86971 related as the non-security restore-docs candidate path, but do not merge or close anything because merge/fix actions are blocked and no merge preflight was requested.

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
| #77849 | keep_canonical | planned | canonical | #77849 remains the best surviving canonical issue for the restore-docs gap while the candidate docs PR remains unmerged. |
| #78010 | route_security | planned | security_sensitive | Security-sensitive routing is scoped to #78010; no close, merge, label, or comment action should be applied by Clownfish for this item. |
| #86971 | keep_related | planned | related | #86971 is the related candidate fix path for the canonical issue, but this plan should not recommend merge or closure under the current blocked actions and missing merge preflight. |

## Needs Human

- none
