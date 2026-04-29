---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2463-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133505905"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133505905"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T20:59:39.344Z"
canonical: "https://github.com/openclaw/openclaw/issues/48855"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48855"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2463-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133505905](https://github.com/openclaw/clownfish/actions/runs/25133505905)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/48855

## Summary

Hydrated state has one open item. #48855 should remain open as the canonical Android gateway support feature request; closed #69065 and #69035 are historical evidence only and receive no mutation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #48855 | keep_canonical | planned | canonical | The representative #69065 is closed and no longer an open canonical thread. The only open hydrated item is a feature request with unique remaining product scope, so it should stay open as the canonical path rather than be closed as a duplicate. |
| #69065 | keep_closed | skipped | related | Already closed refs must not receive close/comment actions. #69065 remains useful historical context, while #48855 is the open canonical feature thread. |
| #69035 | keep_closed | skipped | related | Already closed refs are historical evidence only. This item is related Android gateway context but not a duplicate closure target for the open feature request. |

## Needs Human

- none
