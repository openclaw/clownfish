---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-614-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136435604"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136435604"
head_sha: "421ddc981e12f60cbb3ea60e4527004e3a033e79"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.270Z"
canonical: "https://github.com/openclaw/openclaw/pull/42637"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42637"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-614-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136435604](https://github.com/openclaw/clownfish/actions/runs/25136435604)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42637

## Summary

Classified #42637 as the open canonical PR for the narrow omitted-skill-name truncation bug. No close, merge, label, or fix actions are planned: #50677 remains related but broader, and all other hydrated refs are already closed historical context.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #42637 | keep_canonical | planned | canonical | #42637 is the best live canonical path, but this dedupe-only autonomous job should keep it open rather than merge, repair, replace, or close it. |
| #50677 | keep_related | planned | related | Keep open as related follow-up scope; do not close as duplicate of the narrower canonical PR. |
| #46623 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by current main context; retain as historical evidence only. |
| #46627 | keep_closed | skipped | superseded | Already closed older candidate; keep as superseded historical context. |
| #47553 | keep_closed | skipped | related | Merged related context only; not the current open canonical for omitted-name listing. |
| #55617 | keep_closed | skipped | related | Already closed as not reproducible/current-contract mismatch; retain as related historical context. |
| #64167 | keep_closed | skipped | independent | Closed independent ordering issue; historical evidence only. |

## Needs Human

- none
