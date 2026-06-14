---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156880-autonomous-smoke"
mode: "autonomous"
run_id: "27486520641"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27486520641"
head_sha: "fb8f137c423b876399d9e3e4ff1a8695add173e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T03:04:19.632Z"
canonical: "https://github.com/openclaw/openclaw/tree/9f32bea3970c71f922f4992a6d33a211e67c761e"
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 2
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156880-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27486520641](https://github.com/openclaw/clownfish/actions/runs/27486520641)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/9f32bea3970c71f922f4992a6d33a211e67c761e

## Summary

Current main at 9f32bea already contains the Slack block-action wake/thread-routing fix and the queued interaction payload path. Plan: close #61374 and #61502 as fixed on current main; keep the already-closed historical refs skipped as evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 2 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #61374 | close_fixed_by_candidate | blocked | fixed_by_candidate | fixed_by_candidate close requires a merged fix PR unless allow_unmerged_fix_close: true |
| #61502 | close_fixed_by_candidate | blocked | fixed_by_candidate | fixed_by_candidate close requires a merged fix PR unless allow_unmerged_fix_close: true |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #54753 | keep_closed | skipped | duplicate | Closed context ref; no mutation planned. |
| #57308 | keep_closed | skipped | superseded | Closed context PR; no mutation planned. |
| #67751 | keep_closed | skipped | superseded | Closed context PR; no mutation planned. |
| #61374 | close_fixed_by_candidate | planned | fixed_by_candidate | The open PR's narrow block-action wake/thread-routing behavior is already present on current main; no merge or repair PR is needed. |
| #61502 | close_fixed_by_candidate | planned | fixed_by_candidate | The open issue's reported wake-plus-payload/thread behavior is covered by current main source-level evidence. |

## Needs Human

- none
