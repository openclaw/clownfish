---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3432-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135575115"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135575115"
head_sha: "f12a87189d5d814fe7dfd1bed3ac0e65f75e8fe3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.023Z"
canonical: "https://github.com/openclaw/openclaw/pull/58736"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/58736"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3432-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135575115](https://github.com/openclaw/clownfish/actions/runs/25135575115)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/58736

## Summary

Hydrated preflight shows representative #65481 is closed and the original QMD --mask/--glob pattern root is already covered on main by hydrated merged PR #58736. The open hydrated refs are related QMD/memory follow-ups, not high-confidence duplicates or superseded closeouts, so no close/comment/label mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #62646 | keep_related | planned | related | Useful contributor PR for a distinct QMD managed-collection state bug; not a duplicate of the mask canonical and not safe to close. |
| #65547 | keep_related | planned | related | Useful test-only follow-up for the QMD pattern family; not obsolete, not a true duplicate, and not closable under the contributor-credit policy. |
| #65914 | keep_related | planned | related | Distinct open PR for the QMD status-timeout/checkpoint-export subfamily; keep open for normal PR finalization rather than dedupe closeout. |
| #68590 | keep_related | planned | related | Useful but not merge-ready related PR with unresolved review-bot findings; no replacement or closure path is allowed in this dedupe-only job. |
| #69759 | keep_related | planned | related | Distinct linked follow-up issue; keep open because no hydrated candidate is proven to fix it. |

## Needs Human

- none
