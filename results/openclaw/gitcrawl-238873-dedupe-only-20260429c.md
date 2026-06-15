---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238873-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107995515"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107995515"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.675Z"
canonical: "https://github.com/openclaw/openclaw/issues/55917"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55917"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238873-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107995515](https://github.com/openclaw/clownfish/actions/runs/25107995515)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/55917

## Summary

The hydrated state shows an over-broad Telegram media cluster, not a clean duplicate set. #55917 remains the document fallback canonical issue, while #40991 should stay open as the related video failure thread. #56312 is already closed as a duplicate of #40991. Linked PRs are useful context but are not merge/close candidates here because review comments, failing checks, stale layout, or broad scope block fixed-by or superseded closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #55917 | keep_canonical | planned | canonical | #55917 is still the best live canonical issue for the document-specific Telegram fallback behavior. |
| #40991 | keep_related | planned | related | Keep #40991 open as the video subfamily canonical; it is related to #55917 but not a high-confidence duplicate. |
| #56312 | keep_closed | skipped | duplicate | Already closed; no mutation should be emitted. |
| #55970 | keep_related | planned | related | Keep the useful contributor PR open for maintainer follow-up; it is not merge-ready and this dedupe-only job cannot repair it. |
| #41048 | keep_related | planned | related | Keep #41048 open as useful #40991 implementation context; unresolved bot findings and stale layout block merge or fixed-by-candidate closeout. |
| #42059 | keep_related | planned | related | Keep #42059 open as related implementation context only; broad scope and unresolved review/check blockers make it unsuitable for duplicate closeout or canonical merge. |
| #18577 | keep_closed | skipped | related | Closed historical context only. |

## Needs Human

- none
