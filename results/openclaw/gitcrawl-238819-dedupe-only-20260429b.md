---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238819-dedupe-only-20260429b"
mode: "autonomous"
run_id: "27594231178"
workflow_run_id: "27594231178"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27594231178"
head_sha: "8364aec238559663a0a8644042702a5c6ccea4db"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T04:33:00.403Z"
canonical: "https://github.com/openclaw/openclaw/issues/90158"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90158"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238819-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27594231178](https://github.com/openclaw/clownfish/actions/runs/27594231178)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90158

## Summary

Hydrated state shows the original representative #67544 is already closed as implemented. The best current open canonical for the remaining Windows Scheduled Task restart failure family is #90158. The other open original candidates remain related but not duplicate-cleanup safe because they carry distinct active-run drain, mixed restart-health, or hot-reload crash-loop details. No GitHub mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #90158 | keep_canonical | planned | canonical | Current open canonical for the unresolved Windows Scheduled Task self-restart / relaunch failure family. |
| #56284 | keep_related | planned | related | Related to the canonical Windows restart family, but it contains distinct active-task/session-state and product-decision scope, so it should not be closed as a duplicate. |
| #63491 | keep_related | planned | related | Related to #90158, but broader and mixed-symptom enough that duplicate closure would risk losing unique restart-health and post-ready behavior. |
| #68493 | keep_related | planned | related | Related to the canonical Windows restart failure, but hot-reload plus stale lock/EADDRINUSE is distinct enough to keep open. |
| #67416 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; included only to account for the original candidate list. |
| #67544 | keep_closed | skipped | fixed_by_candidate | Original representative is closed and no longer the live canonical; included only to account for the original candidate list. |

## Needs Human

- none
