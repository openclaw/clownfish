---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-11359-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143124292"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143124292"
head_sha: "82a75cbed53460e49c2bd45f5695375a0ca1eeb1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.333Z"
canonical: "https://github.com/openclaw/openclaw/issues/63265"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63265"
canonical_pr: "https://github.com/openclaw/openclaw/pull/63268"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-11359-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143124292](https://github.com/openclaw/clownfish/actions/runs/25143124292)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63265

## Summary

Kept #63265 as the canonical open bug and #63268 as the paired canonical repair PR. No close, merge, fix, or replacement PR action is planned: instant close, merge, fix, and PR creation are disabled for this dedupe-only job, and #63268 still has unresolved review-bot concerns despite passing checks.

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
| #63265 | keep_canonical | planned | canonical | #63265 remains the best live canonical issue for the reported doctor --fix config-path divergence, with #63268 as the hydrated paired implementation path. |
| #63268 | keep_canonical | planned | canonical | #63268 is the only hydrated open implementation path for #63265, but it is not merge-ready and this job is not allowed to repair, merge, or replace it. |

## Needs Human

- none
