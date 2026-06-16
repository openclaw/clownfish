---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-105-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608149496"
workflow_run_id: "27608149496"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608149496"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:36:29.393Z"
canonical: "https://github.com/openclaw/openclaw/issues/91697"
canonical_issue: "https://github.com/openclaw/openclaw/issues/91697"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-105-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608149496](https://github.com/openclaw/clownfish/actions/runs/27608149496)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/91697

## Summary

Classified the live hydrated cluster around canonical issue #91697. Current main at a89e6e05efab58751bef8f1f5f674af761c196b1 still has the reported idle-only pruning behavior and failed recovery outcomes still skip state mutation, so #91697 remains the canonical issue. No close, merge, or fix actions are safe in this job: merge/fix are blocked by frontmatter, the open PRs are useful but unmerged candidate fixes with unresolved readiness gates, and the closed PRs are historical evidence only.

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
| #91697 | keep_canonical | planned | canonical | The representative issue is still open, current main still matches the reported bug, and no merged candidate fix is available. |
| #91712 | keep_closed | skipped | superseded | Already closed context refs are evidence only under the job policy. |
| #91721 | keep_related | planned | related | This is a useful open candidate for #91697, but it is not merge-ready under the provided gates and must stay open rather than be closed as cleanup. |
| #92188 | keep_related | planned | related | This PR is related to #91697 but should remain open because the canonical fix path is not landed and the job cannot repair or replace it. |
| #92581 | keep_closed | skipped | related | Already closed context refs are historical evidence only. |
| #93247 | keep_related | planned | related | This linked PR is related to the canonical issue but should stay open; failing behavior proof blocks treating it as a candidate fix or closeout target. |

## Needs Human

- none
