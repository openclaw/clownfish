---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2585-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134032064"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134032064"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.989Z"
canonical: "https://github.com/openclaw/openclaw/commit/5a2e5446a4"
canonical_issue: "https://github.com/openclaw/openclaw/issues/67314"
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

# gitcrawl-2585-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134032064](https://github.com/openclaw/clownfish/actions/runs/25134032064)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/commit/5a2e5446a4

## Summary

Hydrated preflight shows all three job refs are already closed. #67314 is the canonical report and was closed as fixed on main by commit 5a2e5446a4; #67381 was closed as superseded with contributor credit preserved; #67330 was closed as not actionable because it only touched an unrelated file. No close, comment, label, merge, or fix action is valid for this run.

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
| #67314 | keep_closed | skipped | canonical | Already closed as the canonical report after the main-branch fix; keep closed and do not mutate. |
| #67330 | keep_closed | skipped | independent | Closed historical PR is not a viable canonical or candidate fix; it is unrelated in patch content and should remain closed. |
| #67381 | keep_closed | skipped | superseded | Already closed as superseded by the landed main-branch fix with source PR credit preserved. |

## Needs Human

- none
