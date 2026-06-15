---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-250-plan-wave-20260615-a"
mode: "plan"
run_id: "27516715399"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516715399"
head_sha: "6bb552b68729da7580c0ee53a6e211c17d1b2e3a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.862Z"
canonical: "#76386"
canonical_issue: "#82304"
canonical_pr: "#76386"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-250-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516715399](https://github.com/openclaw/clownfish/actions/runs/27516715399)

Workflow conclusion: success

Worker result: planned

Canonical: #76386

## Summary

#76386 remains the best live canonical path for the installer Ctrl+C upgrade-doctor bug. #82304 and #90011 describe the same failure family and should stay tied to #76386 until the fix PR lands or is replaced; no close, merge, or fix PR action is planned in this read-only job.

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
| #76386 | keep_canonical | planned | canonical | Canonical remains clear, but merge is blocked by job frontmatter and missing merge preflight proof. |
| #82304 | keep_related | planned | fixed_by_candidate | This issue is covered by the canonical fix PR, but it should remain open until #76386 lands or is replaced. |
| #90011 | keep_related | planned | duplicate | #90011 is a duplicate of the #82304 report family, but closure is deferred because the canonical fix has not landed. |

## Needs Human

- none
