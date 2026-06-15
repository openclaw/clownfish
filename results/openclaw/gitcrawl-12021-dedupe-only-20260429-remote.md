---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-12021-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109653547"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109653547"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.712Z"
canonical: "https://github.com/openclaw/openclaw/issues/53242"
canonical_issue: "https://github.com/openclaw/openclaw/issues/53242"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-12021-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109653547](https://github.com/openclaw/clownfish/actions/runs/25109653547)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/53242

## Summary

Closed representative #65238 is obsolete for this dedupe pass. #53242 is the current open canonical for the unresolved default chat.history text-cap truncation bug. #53243 is an open related candidate PR, but it is not merge-ready because review-bot findings and relevant check failures remain. The TTS/audio-base64 placeholder refs are already closed context and should not be mutated.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #53242 | keep_canonical | planned | canonical | #53242 is the best surviving open canonical issue for the unresolved chat.history premature text truncation family. |
| #53243 | keep_related | planned | related | Useful candidate work for #53242, but not safe to merge or close in this dedupe-only job. |
| #16015 | keep_closed | skipped | related | Closed historical PR context only. |
| #26644 | keep_closed | skipped | duplicate | Same root cause as #53242, but already closed. |
| #63514 | keep_closed | skipped | related | Closed merged TTS context only. |
| #65238 | keep_closed | skipped | related | Obsolete closed representative; not the current canonical for the open text-cap issue. |
| #65660 | keep_closed | skipped | related | Closed TTS/context-accounting context only. |
| #65688 | keep_closed | skipped | related | Closed historical PR context only. |
| #67773 | keep_closed | skipped | related | Closed TTS audio-base64 placeholder context only. |
| #68218 | keep_closed | skipped | related | Closed TTS/channel transcript context only. |

## Needs Human

- none
