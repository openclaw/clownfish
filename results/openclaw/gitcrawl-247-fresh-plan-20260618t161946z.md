---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-247-fresh-plan-20260618t161946z"
mode: "plan"
run_id: "27774039014-1-13"
workflow_run_id: "27774039014"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27774039014"
head_sha: "e70d2f096efd01487cdadb1b7e83853618e965da"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T16:31:57.764Z"
canonical: "#90941"
canonical_issue: "#90941"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-247-fresh-plan-20260618t161946z

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27774039014](https://github.com/openclaw/clownfish/actions/runs/27774039014)

Workflow conclusion: success

Worker result: planned

Canonical: #90941

## Summary

Read-only plan classification for two hydrated open issue refs. #90941 remains the canonical issue for the symlinked launcher path-resolution bug. #90951 is related but tracks a distinct published-package packaging/product decision because setup scripts are not shipped, so it should not be closed as a duplicate of #90941.

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
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90941 | keep_canonical | planned | canonical | Best surviving canonical for the symlinked launcher sandbox setup-script lookup root cause. |
| #90951 | keep_related | planned | related | Same doctor sandbox auto-build area, but a different root cause and product/package-shipping decision from #90941; keep it open as related rather than closing as duplicate. |

## Needs Human

- none
