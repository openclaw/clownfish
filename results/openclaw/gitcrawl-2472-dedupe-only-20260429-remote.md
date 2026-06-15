---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2472-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133508168"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133508168"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.977Z"
canonical: "https://github.com/openclaw/openclaw/issues/49517"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49517"
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

# gitcrawl-2472-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133508168](https://github.com/openclaw/clownfish/actions/runs/25133508168)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49517

## Summary

Classified #49517 as the surviving canonical issue for the broad /new versus /reset contract. #49918 and linked PR #49945 are related TUI hook-observability work, not duplicates of #49517; they should remain open because #49918 has a distinct regression and #49945 is unmerged with unresolved review blockers and no reported checks. No close, merge, fix, or security routing actions are planned.

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
| #49517 | keep_canonical | planned | canonical | #49517 remains the clearest open canonical issue for the broad /new versus /reset behavior contract; no closeout is appropriate. |
| #49918 | keep_related | planned | related | Keep #49918 open as a related subcluster because it has a unique TUI hook regression and an active but unresolved PR candidate. |
| #49945 | keep_related | planned | related | #49945 is related implementation work for #49918 but is not merge-ready and cannot be acted on in this dedupe-only job. |

## Needs Human

- none
