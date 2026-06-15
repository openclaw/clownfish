---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2918-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134559278"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134559278"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.010Z"
canonical: "https://github.com/openclaw/openclaw/issues/45447"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45447"
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

# gitcrawl-2918-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134559278](https://github.com/openclaw/clownfish/actions/runs/25134559278)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/45447

## Summary

The empty hooks update --all family is already closed and fixed on current main, with #45447 as the historical root issue. The only open candidate, #70255, is related hooks CLI work with a different root cause, so no close, comment, label, merge, or fix action is planned.

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
| #45447 | keep_closed | skipped | canonical | Historical root issue for the empty hooks update --all bug; already closed as implemented. |
| #45448 | keep_closed | skipped | superseded | Closed historical PR for the #45447 family, superseded by the current main shared updater implementation. |
| #45583 | keep_closed | skipped | superseded | Closed historical PR for the same empty-update family, superseded by current main. |
| #70255 | keep_related | planned | related | Same hooks CLI area, but distinct one-shot process-exit behavior; keep the contributor PR open outside this dedupe closeout. |

## Needs Human

- none
