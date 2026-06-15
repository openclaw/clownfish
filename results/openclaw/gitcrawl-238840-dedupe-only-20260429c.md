---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238840-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107728012"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107728012"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.655Z"
canonical: "https://github.com/openclaw/openclaw/pull/72328"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72328"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238840-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107728012](https://github.com/openclaw/clownfish/actions/runs/25107728012)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72328

## Summary

Representative #46275 is obsolete and already closed. The narrow agent-switch stale dropdown fix has landed via merged PR #72328, but the remaining open PRs are not safe duplicate closeouts: #43013 covers a related initial-load/default selector path with unresolved review concerns, and #54724 is a broader related catalog-hydration/model-selection follow-up. No GitHub mutations are recommended for this pass.

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
| #43013 | keep_related | planned | related | Related selector-state work remains distinct and has unresolved review/check blockers, so it should stay open rather than be closed as fixed or duplicate. |
| #46275 | keep_closed | skipped | superseded | Already-closed historical candidate; keep as evidence only. |
| #54724 | keep_related | planned | related | Related but broader follow-up scope with unique catalog-hydration work; leave open for maintainer review rather than closing as fixed by #72328. |
| #72328 | keep_closed | skipped | canonical | Merged canonical path for the narrow agent-switch stale model-selection bug; already closed, so no mutation is needed. |

## Needs Human

- none
