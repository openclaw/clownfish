---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7910-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136871490"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136871490"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.294Z"
canonical: "https://github.com/openclaw/openclaw/pull/51946"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/51946"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-7910-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136871490](https://github.com/openclaw/clownfish/actions/runs/25136871490)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/51946

## Summary

Classified the open candidates only. #51946 remains the best live canonical for the directory-backed session-store family, but it is not merge-ready. #58550 is related SQLite-backed storage work with a distinct backend/config/CLI scope, so it should stay open rather than be closed as a duplicate or superseded PR. No GitHub mutations, merge, fix, or PR actions are planned.

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
| #51946 | keep_canonical | planned | canonical | Keep #51946 as the canonical tracking PR only. Failing checks, unresolved review-bot findings, broad XL diff, and blocked merge/fix permissions prevent any merge, fixed-by-candidate, or repair action in this dedupe-only job. |
| #58550 | keep_related | planned | related | Related, not duplicate. It addresses the same performance family but proposes a broader SQLite backend rather than the directory-backed canonical path, and it has its own unresolved review/check blockers. |

## Needs Human

- none
