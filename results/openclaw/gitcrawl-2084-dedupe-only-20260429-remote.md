---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2084-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131900123"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131900123"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.932Z"
canonical: "https://github.com/openclaw/openclaw/issues/49740"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49740"
canonical_pr: "https://github.com/openclaw/openclaw/pull/51001"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2084-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131900123](https://github.com/openclaw/clownfish/actions/runs/25131900123)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49740

## Summary

Classified the obsolete closed representative against the hydrated open cron-retry family. The current canonical path is open issue #49740 with open implementation candidate #51001; #38069 is a high-confidence duplicate and can be closed with a credit-preserving comment while #49740 remains open for validation and repair.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #38069 | close_duplicate | blocked | duplicate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #13609 | keep_closed | skipped | superseded | Closed representative is obsolete for the remaining unshipped per-job recurring cron retry request. |
| #49740 | keep_canonical | planned | canonical | Best open canonical issue for the remaining per-job recurring cron retry work. |
| #51001 | keep_canonical | planned | canonical | Canonical implementation candidate exists but must be repaired and validated outside this dedupe-only closeout. |
| #38069 | close_duplicate | planned | duplicate | Same root cause and same remaining user-visible failure as #49740, with no unique work that should keep a second issue open. |

## Needs Human

- none
