---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-5264-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136025519"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136025519"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.260Z"
canonical: "https://github.com/openclaw/openclaw/pull/73588"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73588"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-5264-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136025519](https://github.com/openclaw/clownfish/actions/runs/25136025519)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73588

## Summary

Hydrated preflight changed the local open-candidate assumption: #46068 is already closed as of 2026-04-29T05:46:23Z after ClawSweeper identified the merged #73588 fix. #39758 and #42839 are closed context only, and #73588 is the already-merged canonical PR path; no GitHub mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #39758 | keep_closed | skipped | related | Closed historical context only; same broad Windows/provider-auth area but not a true duplicate of the merged boundary-aware stream fix. |
| #42839 | keep_closed | skipped | related | Representative issue is obsolete and closed; keep as related historical evidence rather than reopening or closing again. |
| #46068 | keep_closed | skipped | fixed_by_candidate | The only locally open candidate is already closed in live state and is covered by the merged #73588 fix path. |
| #73588 | keep_closed | skipped | canonical | This merged PR is the current canonical fix path for the #46068 boundary-aware embedded-stream 401 report. |

## Needs Human

- none
