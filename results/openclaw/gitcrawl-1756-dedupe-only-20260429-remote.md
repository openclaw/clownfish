---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1756-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130779398"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130779398"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.868Z"
canonical: "https://github.com/openclaw/openclaw/pull/72389"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72389"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1756-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130779398](https://github.com/openclaw/clownfish/actions/runs/25130779398)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72389

## Summary

Hydrated state shows the original representative #66192 is closed and the closest merged canonical path for the stale late-terminal/orphaned-final streaming family is #72389 on current main f05b789736004a8ee93b7a8b44907b5f7f72ee1a. The remaining open refs are related but distinct subfamilies, so no close, merge, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #72389 | keep_closed | skipped | canonical | Canonical merged path for the original stale streaming/orphaned-final subfamily. |
| #40472 | keep_related | planned | related | Related external-reset subcluster; not safe to close as duplicate of the stale streaming fix. |
| #38966 | keep_related | planned | related | Keep with #40472 as the active related PR path. |
| #49310 | keep_related | planned | related | Related follow-up-wait subcluster; not a duplicate closeout target. |
| #68596 | keep_related | planned | related | Related watchdog-threshold subcluster; keep open with #69026 as the active PR path. |
| #69026 | keep_related | planned | related | Related watchdog UX subcluster; unresolved review feedback makes closure or merge inappropriate. |
| #52745 | keep_closed | skipped | superseded | Already closed as replaced by hydrated merged PR #72389. |
| #59582 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by hydrated merged PR #60043. |
| #62602 | keep_closed | skipped | superseded | Already closed as superseded by hydrated merged PR #67401. |
| #64862 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by hydrated merged PR #67401. |
| #66192 | keep_closed | skipped | fixed_by_candidate | Obsolete closed representative; #72389 is the hydrated merged canonical path for this subfamily. |
| #66289 | keep_closed | skipped | superseded | Already closed as superseded by hydrated merged PR #67401. |
| #67302 | keep_closed | skipped | superseded | Already closed as superseded/not needed after current main's watchdog path. |

## Needs Human

- none
