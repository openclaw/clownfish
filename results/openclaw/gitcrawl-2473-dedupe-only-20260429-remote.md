---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2473-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133510575"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133510575"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.978Z"
canonical: "https://github.com/openclaw/openclaw/tree/585c2bdba38992564a987199850ff0c49e99c665"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49568"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2473-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133510575](https://github.com/openclaw/clownfish/actions/runs/25133510575)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/585c2bdba38992564a987199850ff0c49e99c665

## Summary

Hydrated state shows #49568, #49586, #49600, and #49795 are already closed, and the original hot-reload model-catalog gap is represented by current main at 585c2bdba38992564a987199850ff0c49e99c665. The only open candidate, #53393, is related but broader than that closed bug family and has unresolved review/check blockers, so no close, merge, fix, or label mutation is planned.

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
| #49568 | keep_closed | skipped | canonical | Already closed root issue for the family; retained only as historical canonical evidence. |
| #49586 | keep_closed | skipped | superseded | Already closed historical PR; current main superseded the narrower closed implementation. |
| #49600 | keep_closed | skipped | superseded | Already closed historical PR; no mutation is available or appropriate. |
| #49795 | keep_closed | skipped | superseded | Already closed historical PR; no mutation is available or appropriate. |
| #53393 | keep_related | planned | related | #53393 should stay open as a related follow-up/refactor. It is not a true duplicate or safe superseded closeout because it carries broader cache-registry scope plus unresolved review and check blockers. |

## Needs Human

- none
