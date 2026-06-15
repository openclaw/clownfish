---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238784-dedupe-only-20260429"
mode: "autonomous"
run_id: "25107632698"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107632698"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.619Z"
canonical: "https://github.com/openclaw/openclaw/issues/58496"
canonical_issue: "https://github.com/openclaw/openclaw/issues/58496"
canonical_pr: null
actions_total: 41
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238784-dedupe-only-20260429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107632698](https://github.com/openclaw/clownfish/actions/runs/25107632698)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/58496

## Summary

Hydrated preflight shows #58496 and every job-provided candidate are already closed, so no close/comment/label action is valid for those refs. The only open hydrated linked item is #6966, which is related model-routing design work rather than the same live-session fallback override root cause, so it should remain open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 41 |
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
| #6966 | keep_related | planned | related | Keep open as related follow-up design work; not a high-confidence duplicate closeout. |
| #17465 | keep_closed | skipped | related | Closed historical context only; no mutation is valid. |
| #19249 | keep_closed | skipped | duplicate | Already closed duplicate-family context; no close action may be emitted. |
| #24378 | keep_closed | skipped | related | Closed related context only. |
| #29014 | keep_closed | skipped | related | Closed related fallback-behavior context only. |
| #32533 | keep_closed | skipped | related | Closed historical context only. |
| #45834 | keep_closed | skipped | related | Closed related context only. |
| #55118 | keep_closed | skipped | superseded | Closed broad contributor PR; no mutation or replacement path is available in this dedupe-only job. |
| #55919 | keep_closed | skipped | related | Closed related classification context only. |
| #56960 | keep_closed | skipped | independent | Independent closed auth-refresh/credential-source issue. |
| #57155 | keep_closed | skipped | related | Closed related cron-isolated model-switch issue. |
| #57812 | keep_closed | skipped | duplicate | Already closed duplicate-family item; no close action may be emitted. |
| #57906 | keep_closed | skipped | related | Closed related fallback-timing issue. |
| #57961 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58045 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58069 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58213 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58232 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58288 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58303 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58308 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58392 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58442 | keep_closed | skipped | related | Closed related provider/quota classification issue. |
| #58496 | keep_closed | skipped | canonical | Historical canonical only; already closed targets must not receive close/comment actions. |
| #58510 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58531 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58532 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58556 | keep_closed | skipped | duplicate | Already closed duplicate-family item with adjacent discussion. |
| #58578 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58600 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #58707 | keep_closed | skipped | related | Closed merged related fix; no merge or close action is allowed in this job. |
| #59064 | keep_closed | skipped | related | Closed related mixed-scope issue; no mutation is valid. |
| #59213 | keep_closed | skipped | duplicate | Already closed duplicate-family item with related classification details. |
| #59252 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #59303 | keep_closed | skipped | related | Closed related rate-limit escalation issue. |
| #59861 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #59928 | keep_closed | skipped | related | Closed related session model persistence issue. |
| #59959 | keep_closed | skipped | superseded | Closed historical contributor PR; no replacement or closeout is allowed because this job blocks fix/raise_pr actions and the PR is already closed. |
| #65676 | keep_closed | skipped | duplicate | Already closed duplicate-family item. |
| #66951 | keep_closed | skipped | related | Closed related fallback-order issue. |
| #67260 | keep_closed | skipped | related | Closed related session fallback persistence issue. |

## Needs Human

- none
