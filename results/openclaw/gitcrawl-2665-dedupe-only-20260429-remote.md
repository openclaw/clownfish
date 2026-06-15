---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2665-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134047466"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134047466"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.991Z"
canonical: "https://github.com/openclaw/openclaw/issues/38235"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38235"
canonical_pr: "https://github.com/openclaw/openclaw/pull/38237"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2665-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134047466](https://github.com/openclaw/clownfish/actions/runs/25134047466)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/38235

## Summary

Closed representative #37763 stays historical. #38235 is the current open canonical issue for Slack draft/streaming identity passthrough, with #38237 as the open repair candidate but not merge-ready in this dedupe-only job. #58737 and #58800 are related Slack identity edit-flow work, not true duplicates of #38235, so no close action is planned.

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
| #37763 | keep_closed | skipped | superseded | Closed representative is historical evidence only; #38235 replaces it as the live canonical issue for this cluster. |
| #38235 | keep_canonical | planned | canonical | This is the best live canonical issue for the closed #37763 root cause. |
| #38237 | keep_canonical | planned | canonical | #38237 is the open repair candidate for #38235, but merge/fix work is outside this job and current evidence blocks fixed-by-candidate closeout. |
| #58737 | keep_related | planned | related | Same Slack identity area, but the reported edit-flow failure has distinct behavior and its own open PR path. |
| #58800 | keep_related | planned | related | This PR belongs with the related #58737 edit-flow subcluster and should remain open for repair/review, not be deduped into #38235. |

## Needs Human

- none
