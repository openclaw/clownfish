---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3117-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135540247"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135540247"
head_sha: "f12a87189d5d814fe7dfd1bed3ac0e65f75e8fe3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.016Z"
canonical: "https://github.com/openclaw/openclaw/pull/52357"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/52357"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3117-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135540247](https://github.com/openclaw/clownfish/actions/runs/25135540247)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/52357

## Summary

Hydrated state keeps #52357 as the sole live canonical zh-TW Control UI terminology/key-parity PR. No close/comment/label mutations are planned: companion cluster PRs are already closed, #28303 is a distinct locale-ID contract issue, and merge/fix/PR actions are disallowed for this job.

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
| #52357 | keep_canonical | planned | canonical | #52357 is the best surviving canonical PR for the zh-TW terminology and key-parity work. This job does not permit merge, fix, or replacement PR actions, so the safe cluster action is to keep it canonical. |
| #28303 | keep_related | planned | related | Same i18n area, different root cause and decision surface. Keep open as related follow-up, not a duplicate of #52357. |
| #28050 | keep_closed | skipped | related | Already closed refs are historical evidence only and must not receive close actions. |
| #52138 | keep_closed | skipped | independent | Different locale and docs pipeline surface; keep closed as independent context. |
| #54930 | keep_closed | skipped | related | Already closed and only related context for the surviving canonical #52357 path. |
| #59706 | keep_closed | skipped | superseded | Already closed as superseded by the current canonical #52357 path. |
| #63621 | keep_closed | skipped | superseded | Already closed as superseded/no-op context; the live canonical path remains #52357. |

## Needs Human

- none
