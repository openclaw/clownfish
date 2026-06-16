---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157041-autonomous-smoke"
mode: "autonomous"
run_id: "27598133345"
workflow_run_id: "27598133345"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598133345"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:19:29.378Z"
canonical: "https://github.com/openclaw/openclaw/pull/72009"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72009"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157041-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598133345](https://github.com/openclaw/clownfish/actions/runs/27598133345)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72009

## Summary

The original representative #42105 and candidate #42851 are already closed in hydrated live state, so no close actions are valid for them. The current open canonical path is hydrated PR #72009, which tracks the same configurable typing TTL feature with the narrower implementation. #72009 should be repaired on its editable contributor branch before any merge recommendation because mergeability is unknown and the latest ClawSweeper/Codex review preflight is not clean enough for merge.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41516 | keep_closed | skipped | fixed_by_candidate | Historical closed issue for the same feature; keep as evidence only. |
| #42105 | keep_closed | skipped | superseded | Already closed and superseded by the hydrated open canonical PR #72009. |
| #42851 | keep_closed | skipped | superseded | Already closed and superseded; broad unrelated branch is not a viable canonical path. |
| #61992 | keep_closed | skipped | fixed_by_candidate | Historical closed issue for the same feature; keep as evidence only. |
| #72009 | fix_needed | planned | canonical | Repair the editable contributor branch for #72009, rerun review and pnpm check:changed, then merge only after deterministic merge preflight is clean. |
| cluster:ghcrawl-157041-autonomous-smoke | build_fix_artifact | planned |  | Executable repair plan for the hydrated open canonical PR. |

## Needs Human

- none
