---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-815-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136879852"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136879852"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.297Z"
canonical: "https://github.com/openclaw/openclaw/tree/9a3a341d93721f808d9deeae6e39c727249d2824"
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-815-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136879852](https://github.com/openclaw/clownfish/actions/runs/25136879852)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/9a3a341d93721f808d9deeae6e39c727249d2824

## Summary

Hydrated preflight shows the representative PR #66776 and all cluster/context refs are already closed. Current main at 9a3a341d93721f808d9deeae6e39c727249d2824 is the canonical resolved path because the pre-commit hook no longer invokes pnpm/corepack checks. No close, comment, label, merge, or fix action is valid or needed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #66695 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on current main; closed refs must not receive close actions. |
| #66776 | keep_closed | skipped | superseded | The canonical hint is obsolete because #66776 is already closed and current main supersedes the branch. |
| #67870 | keep_closed | skipped | superseded | Already closed as superseded by current main; no close/comment/merge action is valid. |
| #69115 | keep_closed | skipped | superseded | Already closed as superseded by current main; bot findings remain historical merge blockers only. |

## Needs Human

- none
