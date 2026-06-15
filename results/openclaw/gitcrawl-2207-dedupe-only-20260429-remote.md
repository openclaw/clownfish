---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2207-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132422703"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132422703"
head_sha: "2a25e72cd9df0710ef893de8f25823a6a78be854"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.946Z"
canonical: "https://github.com/openclaw/openclaw/pull/44288"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40786"
canonical_pr: "https://github.com/openclaw/openclaw/pull/44288"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2207-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132422703](https://github.com/openclaw/clownfish/actions/runs/25132422703)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/44288

## Summary

Kept #40786 as the canonical issue and #44288 as the canonical implementation PR. No close, merge, or fix actions are planned: #44288 is open but not merge-ready, with failing checks and unresolved review/follow-up evidence; related backup issues remain open because they have distinct remaining scope.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #40786 | keep_canonical | planned | canonical | Keep the issue open as the canonical tracker until the implementation candidate lands or is replaced. |
| #44288 | keep_canonical | planned | canonical | Keep as the active canonical implementation candidate, but do not plan merge or repair from this dedupe-only job. |
| #40804 | keep_closed | skipped | superseded | Already closed and superseded by the canonical #44288 path. |
| #40810 | keep_closed | skipped | superseded | Already closed and superseded by the canonical #44288 path. |
| #41258 | keep_closed | skipped | related | Already closed; no action is valid. |
| #41830 | keep_closed | skipped | related | Already closed; no action is valid. |
| #42273 | keep_related | planned | related | Related to the canonical backup exclude path, but it carries distinct large-backup behavior and UX scope that remains open. |
| #42282 | keep_closed | skipped | related | Already closed; no action is valid. |
| #44361 | keep_closed | skipped | superseded | Already closed and tied to the canonical #44288 implementation branch. |
| #44362 | keep_closed | skipped | superseded | Already closed and tied to the canonical #44288 implementation branch. |
| #54242 | keep_related | planned | related | Keep open as related follow-up work, not a duplicate of #40786 or #44288. |
| #54243 | keep_related | planned | related | Keep open as related backup filtering semantics work, not a duplicate closeout target. |

## Needs Human

- none
