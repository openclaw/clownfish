---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156637-autonomous-smoke"
mode: "autonomous"
run_id: "25102380172"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102380172"
head_sha: "9a08eb9ac982c5d395ca81610998f5f78efc9ef6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.093Z"
canonical: "https://github.com/openclaw/openclaw/issues/37591"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37591"
canonical_pr: null
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156637-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102380172](https://github.com/openclaw/clownfish/actions/runs/25102380172)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/37591

## Summary

Hydrated state shows every job-provided candidate is already closed. The historical canonical is #37591, and later ClawSweeper context on #38781 says current main at d33c3f7da651f74134688a78c0d10522dd178592 has the user-visible exec host=node fallback, so no close, comment, merge, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
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
| #29171 | keep_closed | skipped | related | Closed context evidence only. |
| #31959 | keep_closed | skipped | duplicate | Already closed duplicate context. |
| #34561 | keep_closed | skipped | related | Closed related context only. |
| #36504 | keep_closed | skipped | superseded | Closed unmerged implementation context only. |
| #37591 | keep_closed | skipped | canonical | Historical canonical is now closed; no mutation is valid. |
| #38781 | keep_closed | skipped | superseded | Closed PR, superseded by current-main behavior. |
| #43171 | keep_closed | skipped | fixed_by_candidate | Closed issue fixed by hydrated merged PR #46843. |
| #43330 | keep_closed | skipped | superseded | Closed unmerged PR context only. |
| #46843 | keep_closed | skipped | fixed_by_candidate | Merged historical fix context. |
| #49031 | keep_closed | skipped | duplicate | Already closed duplicate/superseded context. |
| #58356 | keep_closed | skipped | duplicate | Already closed duplicate context. |
| #64499 | keep_closed | skipped | duplicate | Already closed duplicate context. |
| #64551 | keep_closed | skipped | duplicate | Already closed duplicate context. |
| #66839 | keep_closed | skipped | duplicate | Already closed duplicate context. |
| #69725 | keep_closed | skipped | superseded | Closed unmerged implementation context only. |

## Needs Human

- none
