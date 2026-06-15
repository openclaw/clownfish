---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238875-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107999555"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107999555"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.676Z"
canonical: "https://github.com/openclaw/openclaw/pull/51371"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/51371"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238875-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107999555](https://github.com/openclaw/clownfish/actions/runs/25107999555)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/51371

## Summary

Hydrated state shows #51371 is the surviving open canonical PR for the WebSocketTaskBox.sendPing checked-continuation double-resume crash. #41653 and #51311 are already closed as superseded by #51371, and the unrelated linked #1 is closed context only. No close, merge, fix, or PR actions are planned.

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
| #51371 | keep_canonical | planned | canonical | Representative #41653 is obsolete because it is now closed; #51371 is the only open focused canonical path in the hydrated cluster. Merge and fix actions are disabled for this job, so the correct worker action is to keep #51371 open as canonical. |
| #41653 | keep_closed | skipped | superseded | Already closed refs are historical evidence only. #41653 remains superseded by the open canonical #51371. |
| #51311 | keep_closed | skipped | superseded | Already closed refs are historical evidence only. #51311 remains superseded by the open canonical #51371. |
| #1 | keep_closed | skipped | independent | Closed unrelated context ref; no cluster action is appropriate. |

## Needs Human

- none
