---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-603-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136431159"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136431159"
head_sha: "648e71ed1e7bd7c58c0085195d8e3302fdbfa10f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T22:12:28.176Z"
canonical: "https://github.com/openclaw/openclaw/issues/39768"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39768"
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

# gitcrawl-603-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136431159](https://github.com/openclaw/clownfish/actions/runs/25136431159)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/39768

## Summary

Hydrated state supports keeping #39768 as the live canonical issue. No close, label, merge, or fix actions are planned: the only open PR, #63634, is a related narrower MCP inputSchema candidate with remaining review context and blocked merge/fix permissions, and all other hydrated refs are already closed historical context.

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
| #39768 | keep_canonical | planned | canonical | Keep #39768 open as the canonical follow-up because no hydrated candidate proves the under-specified MCP tool failure is fixed. |
| #63634 | keep_related | planned | related | Keep #63634 open as related implementation work; it is not a closeout candidate for this dedupe-only cluster. |
| #29416 | keep_closed | skipped | related | Closed historical context only; closure actions are invalid for already-closed refs. |
| #39328 | keep_closed | skipped | related | Closed merged context only; no action is valid or needed in this dedupe-only pass. |
| #41209 | keep_closed | skipped | related | Closed historical context only; do not emit close actions for already-closed issues. |
| #58084 | keep_closed | skipped | related | Closed historical context only; no mutation is valid. |
| #63602 | keep_closed | skipped | related | Closed historical context only; keep it as evidence for the related #63634 path. |

## Needs Human

- none
