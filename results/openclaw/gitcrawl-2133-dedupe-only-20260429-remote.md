---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2133-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131919153"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131919153"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.936Z"
canonical: "https://github.com/openclaw/openclaw/pull/50992"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/50992"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2133-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131919153](https://github.com/openclaw/clownfish/actions/runs/25131919153)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/50992

## Summary

Classified the hydrated cluster without GitHub mutations. Closed representative #49624 is historical evidence only; #50992 is the best open canonical PR for the original plugin-sdk/agent-runtime export request, but it is not merge-ready and no closeout is safe. #52412 and #66532 remain related open runtime API requests with distinct surfaces, so no duplicate/superseded close actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #42172 | keep_closed | skipped | related | Closed context ref retained as evidence only. |
| #49624 | keep_closed | skipped | related | Closed representative is obsolete for live routing; #50992 is the best open canonical PR for the original export request. |
| #50992 | keep_canonical | planned | canonical | Best open canonical implementation candidate for the original plugin-sdk active-run helper export request; keep open and do not close or merge. |
| #52411 | keep_closed | skipped | related | Closed linked context ref retained as historical evidence only. |
| #52412 | keep_related | planned | related | Related plugin cancellation API request with unique runtime/runId semantics; not a high-confidence duplicate or superseded closeout. |
| #66531 | keep_closed | skipped | related | Closed gateway RPC context ref retained as evidence only. |
| #66532 | keep_related | planned | related | Related plugin runtime helper-family request with a distinct API surface; keep open. |
| #67586 | keep_closed | skipped | related | Closed linked PR retained as historical evidence only. |

## Needs Human

- none
