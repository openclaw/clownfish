---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1871-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130795892"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130795892"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.880Z"
canonical: "https://github.com/openclaw/openclaw/pull/47581"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48638"
canonical_pr: "https://github.com/openclaw/openclaw/pull/47581"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1871-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130795892](https://github.com/openclaw/clownfish/actions/runs/25130795892)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/47581

## Summary

Hydrated preflight shows the original provider-prefix bug represented by #48638 is already closed and the canonical fix path is merged PR #47581. The only open targets, #54240 and #67988, are related Control UI model-dropdown reports but not duplicates of the wrong-provider-prefix root cause, so no close/comment/label mutation is planned.

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
| #54240 | keep_related | planned | related | #54240 is related to Control UI model switching but has a distinct remaining root cause, so it should stay open rather than be closed as a duplicate of #48638. |
| #67988 | keep_related | planned | related | #67988 is related to the same model-dropdown surface but is a separate UI-label bug, so it should stay open rather than be closed as a duplicate of #48638. |

## Needs Human

- none
