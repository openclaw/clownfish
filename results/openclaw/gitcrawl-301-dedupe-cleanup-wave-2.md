---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-301-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609383085"
workflow_run_id: "27609383085"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609383085"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.108Z"
canonical: "https://github.com/openclaw/openclaw/issues/79155"
canonical_issue: "https://github.com/openclaw/openclaw/issues/79155"
canonical_pr: "https://github.com/openclaw/openclaw/pull/81305"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-301-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609383085](https://github.com/openclaw/clownfish/actions/runs/27609383085)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/79155

## Summary

Classified the only actionable open candidate, #79155, as the canonical issue for this cluster. No close, merge, fix, or PR action is safe here: #81305 is a hydrated existing-overlap context PR and active fix path, but it is owned by another job and cannot be used as an actionable target in this cluster. Current main at 55c047e77e70a7d414d6fe8cad55ecf978ebbcf2 still slices slash-command bodies at the first newline, so the source issue should remain open until the existing fix path lands or a post-merge closeout job handles it.

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
| #79155 | keep_canonical | planned | canonical | Keep #79155 open as the canonical source issue; there is no duplicate candidate to close in this cluster and the active PR #81305 is context only. |

## Needs Human

- none
