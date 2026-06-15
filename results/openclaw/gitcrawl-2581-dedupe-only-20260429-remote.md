---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2581-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134030126"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134030126"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.989Z"
canonical: "https://github.com/openclaw/openclaw/pull/70368"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/70368"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2581-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134030126](https://github.com/openclaw/clownfish/actions/runs/25134030126)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/70368

## Summary

Hydrated state keeps #70368 as the live canonical PR for the gateway.trusted_proxies_missing loopback audit work. #66272 is an older overlapping PR against the same root cause, now stale against the active audit collector with unresolved review/check blockers, so it can be closed as superseded by #70368 with explicit contributor credit. Closed refs remain skipped context; no merge or fix PR is planned because this job blocks merge/fix actions and #70368 still needs normal maintainer review before landing.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #66272 | close_superseded | blocked | superseded | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #70368 | keep_canonical | planned | canonical | #70368 is the clearest hydrated live canonical path, but it is not merge-ready in this dedupe-only job. |
| #66272 | close_superseded | planned | superseded | The PR is a useful but stale overlapping implementation and is superseded by hydrated canonical PR #70368; the planned close comment preserves contributor credit and gives a reopen path. |
| #70357 | keep_closed | skipped | superseded | Already closed in live preflight state; retained only as evidence for the canonical path. |
| #70377 | keep_closed | skipped | superseded | Already closed in live preflight state; no mutation is valid or needed. |

## Needs Human

- none
