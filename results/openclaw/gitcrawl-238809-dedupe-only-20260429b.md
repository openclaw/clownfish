---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238809-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107677207"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107677207"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.637Z"
canonical: "https://github.com/openclaw/openclaw/pull/73923"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41545"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73923"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238809-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107677207](https://github.com/openclaw/clownfish/actions/runs/25107677207)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73923

## Summary

Hydrated state shows the original representative #41546 is already closed and superseded. The current canonical path is open PR #73923 for open issue #41545. No new close/comment/label actions are needed because #41546, #41552, #41718, and #42001 are already closed, merge/fix/post-merge closeout are disabled, and #73923 remains the live canonical fix path with green checks.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #41545 | keep_canonical | planned | canonical | Keep the root bug issue open until the canonical fix lands. |
| #73923 | keep_canonical | planned | canonical | #73923 is the current canonical PR, but this worker may only keep it open for review because merge is blocked by job policy. |
| #41546 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #41552 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #41718 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #42001 | keep_closed | skipped | superseded | Already closed; no close action is valid. |

## Needs Human

- none
