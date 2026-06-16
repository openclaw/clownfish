---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-970-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610226501"
workflow_run_id: "27610226501"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610226501"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.511Z"
canonical: "https://github.com/openclaw/openclaw/issues/83877"
canonical_issue: "https://github.com/openclaw/openclaw/issues/83877"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-970-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610226501](https://github.com/openclaw/clownfish/actions/runs/27610226501)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/83877

## Summary

Canonical issue #83877 remains open and current for the browser action-input CLI test coverage gap. Linked PR #92574 is the focused open fix path, but merge, fix, raise_pr, and post-merge close actions are blocked by job permissions, so this run emits only non-mutating classifications and no closeout.

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
| #83877 | keep_canonical | planned | canonical | Keep #83877 open as the canonical issue; the coverage gap is not closed on main and the linked fix PR has not merged. |
| #92574 | keep_related | planned | related | Keep #92574 open as the related focused fix path for #83877; this worker cannot recommend or apply merge/post-merge closeout under the job permissions. |

## Needs Human

- none
