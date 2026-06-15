---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3089-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142548882"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142548882"
head_sha: "635e49e8d0f5f1f39d5a829d2a709a0e61ee5f73"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.325Z"
canonical: "https://github.com/openclaw/openclaw/pull/51124"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/51124"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3089-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142548882](https://github.com/openclaw/clownfish/actions/runs/25142548882)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/51124

## Summary

Classified both open PRs from the hydrated preflight artifact. #51124 remains the canonical Telegram session-label cleanup path, but it is not merge-ready because actionable Greptile/Codex review comments remain and merge/fix actions are blocked for this dedupe-only job. #68850 is related session-selector label work for synthetic webchat transport names, not a true duplicate of #51124, so no close/comment/label mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #51124 | keep_canonical | planned | canonical | #51124 is the best surviving canonical PR for the Telegram-specific root cause, but unresolved review findings and job permissions block merge or repair planning in this run. |
| #68850 | keep_related | planned | related | Related same-area UI label cleanup, but not the same user-visible Telegram root cause and not safely closable under this cluster. |

## Needs Human

- none
