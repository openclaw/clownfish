---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238836-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107720391"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107720391"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.653Z"
canonical: "https://github.com/openclaw/openclaw/issues/66705"
canonical_issue: "https://github.com/openclaw/openclaw/issues/66705"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73349"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238836-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107720391](https://github.com/openclaw/clownfish/actions/runs/25107720391)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/66705

## Summary

Hydrated state shows #66705 is the live exec-environment issue and #73349 is the best current focused PR candidate. The original representative #40423 remains useful but is broader runtime work with unique ACP/TUI scope, so it should stay open as related. #72980 is a useful session-key-only PR and should also stay open; #68859 is already closed. No close, merge, or fix action is high-confidence for this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #66705 | keep_canonical | planned | canonical | Keep #66705 as the canonical exec-environment issue while #73349 remains the focused implementation candidate. |
| #73349 | keep_canonical | planned | canonical | Best current focused PR candidate for #66705, but not merge-ready in this dedupe-only job because checks and review-comment evidence remain unresolved. |
| #40423 | keep_related | planned | related | Do not close #40423 as duplicate or superseded; it has broader unique ACP/TUI scope and useful contributor work. |
| #72980 | keep_related | planned | related | Keep as related useful session-key-only contributor work until maintainers choose the final implementation path or a clean canonical PR lands. |
| #68859 | keep_closed | skipped | superseded | Already closed; retain only as historical superseded context. |

## Needs Human

- none
