---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-652-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610225273"
workflow_run_id: "27610225273"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610225273"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.494Z"
canonical: "https://github.com/openclaw/openclaw/issues/77429"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77429"
canonical_pr: "https://github.com/openclaw/openclaw/pull/89744"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-652-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610225273](https://github.com/openclaw/clownfish/actions/runs/27610225273)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77429

## Summary

Classified #77429 as the live canonical issue. The hydrated linked PR #89744 is the current canonical fix path, but it is an existing-overlap context ref and this job does not allow merge, fix, raise_pr, or post-merge closeout. No close/comment/label mutation is safe or needed for this cluster.

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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #77429 | keep_canonical | planned | canonical | #77429 remains the best live canonical issue for the Discord default/main account startup-priority bug; no duplicate closeout target exists in this cluster. |
| #89744 | keep_canonical | skipped | canonical | #89744 is the current canonical fix path for #77429, but it is context-only for this job and merge/fix actions are not permitted. |

## Needs Human

- none
