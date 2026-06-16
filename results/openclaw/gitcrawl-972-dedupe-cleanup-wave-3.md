---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-972-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610226893"
workflow_run_id: "27610226893"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610226893"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.518Z"
canonical: "https://github.com/openclaw/openclaw/issues/83903"
canonical_issue: "https://github.com/openclaw/openclaw/issues/83903"
canonical_pr: "https://github.com/openclaw/openclaw/pull/87121"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-972-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610226893](https://github.com/openclaw/clownfish/actions/runs/27610226893)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/83903

## Summary

Current main still lacks a bannerEmitted test-reset helper, so #83903 remains the live canonical issue. Hydrated linked PR #87121 is the focused open implementation path, but this job excludes the overlap PR from actionable refs and does not allow merge, fix, raise_pr, post-merge close, or fixed-by-candidate closeout before it lands.

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
| #83903 | keep_canonical | planned | canonical | #83903 is the best surviving canonical issue; no close action is appropriate because the linked fix PR is still open and this job does not allow merge or post-merge closeout. |
| #87121 | keep_related | skipped | related | #87121 is useful context and the likely fix path for #83903, but it is excluded by overlap_policy and this worker cannot merge or repair it in this job. |

## Needs Human

- none
