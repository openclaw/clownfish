---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-977-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610226531"
workflow_run_id: "27610226531"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610226531"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.512Z"
canonical: "https://github.com/openclaw/openclaw/issues/83636"
canonical_issue: "https://github.com/openclaw/openclaw/issues/83636"
canonical_pr: "https://github.com/openclaw/openclaw/pull/91192"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-977-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610226531](https://github.com/openclaw/clownfish/actions/runs/27610226531)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/83636

## Summary

Representative issue #83636 is still the live canonical bug. Hydrated linked PR #91192 is the active fix path, but it is existing-overlap context for this job and merge/fix/post-merge close actions are blocked, so no close/comment/label mutation is planned.

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
| #83636 | keep_canonical | planned | canonical | Keep #83636 open as the canonical issue while linked PR #91192 remains unmerged and this job forbids merge, fix, raise_pr, and post-merge closeout. |
| #91192 | keep_related | planned | related | Keep #91192 open as the related active fix candidate for #83636; do not merge or close it from this cluster because it is overlap context and merge/fix actions are blocked. |

## Needs Human

- none
