---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-201-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609382345"
workflow_run_id: "27609382345"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609382345"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.104Z"
canonical: "https://github.com/openclaw/openclaw/issues/92474"
canonical_issue: "https://github.com/openclaw/openclaw/issues/92474"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-201-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609382345](https://github.com/openclaw/clownfish/actions/runs/27609382345)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/92474

## Summary

Classified #92474 as the canonical open issue for this cluster. No close, merge, post-merge close, or fix-PR action is safe or allowed: the only actionable hydrated item is the canonical issue, linked PRs #92484 and #92491 are explicitly excluded overlap context and are not hydrated preflight targets, and job permissions block merge/fix/raise_pr.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #92474 | keep_canonical | planned | canonical | #92474 remains the best live canonical issue. The bug appears real on current main, but this close-only/dedupe cleanup job has allow_fix_pr=false, allow_merge=false, and allow_post_merge_close=false, so the correct cluster action is to keep the canonical issue open. |

## Needs Human

- none
