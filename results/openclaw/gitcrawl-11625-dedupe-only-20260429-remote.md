---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-11625-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109648852"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109648852"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.712Z"
canonical: "https://github.com/openclaw/openclaw/pull/73946"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73946"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-11625-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109648852](https://github.com/openclaw/clownfish/actions/runs/25109648852)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73946

## Summary

Canonical #64060 is obsolete: hydrated linked PR #73946 has merged on current main as the text-payload model override fix. The only still-open cluster PR is #66543, which is related cron model-ID whitespace work with unresolved review-bot blockers, not a duplicate of #73946. No close, merge, fix, or PR-open actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #28905 | keep_closed | skipped | fixed_by_candidate | Closed historical issue covered by the merged canonical fix; no mutation is needed. |
| #49780 | keep_closed | skipped | related | Closed related cron-normalization report with a different root cause from the canonical text/model override fix. |
| #49979 | keep_closed | skipped | related | Closed related PR with a different root cause and no live mutation target. |
| #50942 | keep_closed | skipped | related | Closed related schedule-normalization issue, distinct from the canonical payload model override fix. |
| #50994 | keep_closed | skipped | related | Closed related schedule-validation PR, distinct from the canonical payload model override fix. |
| #52804 | keep_closed | skipped | related | Closed related cron payload compatibility issue, distinct from the canonical text/model override fix. |
| #52858 | keep_closed | skipped | related | Closed related PR with a different root cause and no live mutation target. |
| #64060 | keep_closed | skipped | superseded | The former canonical contributor PR is already closed and superseded by the merged replacement #73946. |
| #66203 | keep_closed | skipped | related | Closed related model-ID whitespace issue, not a duplicate of the canonical text/model override fix. |
| #66543 | keep_related | planned | related | Keep open as related follow-up work; it is not a duplicate of the merged canonical fix and has actionable review-bot blockers. |
| #73946 | keep_closed | skipped | canonical | Merged canonical fix is already closed; it is the canonical path for the text-payload model override subcluster. |

## Needs Human

- none
