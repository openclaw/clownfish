---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156624-autonomous-smoke"
mode: "autonomous"
run_id: "25102349804"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102349804"
head_sha: "9a08eb9ac982c5d395ca81610998f5f78efc9ef6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.086Z"
canonical: "https://github.com/openclaw/openclaw/pull/72662"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72662"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156624-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102349804](https://github.com/openclaw/clownfish/actions/runs/25102349804)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72662

## Summary

#48072 is no longer the live canonical path. The hydrated artifact shows #72662 was merged into main as the canonical Docker named-volume EACCES fix, with all relevant checks passing. No open hydrated item is a high-confidence duplicate of that landed fix, so this pass plans only non-mutating classifications.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #22585 | keep_closed | skipped | related | Already closed historical context; no mutation planned. |
| #41624 | keep_related | planned | related | Different Docker ownership subproblem from the landed named-volume state-dir fix; not safe to close or merge in this cluster. |
| #42771 | keep_related | planned | related | Related Docker runtime/cache work, but not a duplicate of the landed canonical named-volume fix. |
| #47660 | keep_independent | planned | independent | Independent broad Dockerfile refactor; no close, merge, or fix action belongs in this cluster. |
| #48072 | keep_closed | skipped | superseded | Already closed as superseded by the hydrated canonical replacement #72662; no close action allowed. |
| #52176 | keep_independent | planned | independent | Independent Docker feature work with unresolved review findings; keep open outside this closeout. |
| #55933 | keep_related | planned | related | Related Docker follow-up, not a duplicate of #72662 and not merge-ready under the cluster merge gates. |
| #59601 | keep_closed | skipped | related | Already closed related context; no mutation planned. |
| #60052 | keep_closed | skipped | related | Already closed related context; no close action allowed. |
| #61167 | keep_related | planned | related | Related but broader Docker setup subcluster with failing checks and unresolved review comments; keep open. |
| #61279 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed by the merged canonical PR; no action allowed. |
| #63959 | keep_closed | skipped | superseded | Already closed as superseded by #72662; no close action allowed. |
| #72662 | keep_closed | skipped | canonical | Canonical path is already merged and closed; no merge or close mutation is planned. |

## Needs Human

- none
