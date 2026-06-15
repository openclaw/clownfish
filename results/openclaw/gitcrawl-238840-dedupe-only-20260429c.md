---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238840-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102922870"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102922870"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.128Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/25102922870](https://github.com/openclaw/clownfish/actions/runs/25102922870)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72328

## Summary

Canonical switch-state fix is the already-merged #72328 on current main e1fd27fb24ae81e27cf4ac1297410491009a70c0. No new close actions are safe: #43013 and #54724 are related model-selector subfamilies with unique remaining scope or unresolved review/check blockers, while #46275 and #72328 are already closed.

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
| #43013 | keep_related | planned | related | Related page-load/default-selector subfamily with useful but not merge-ready contributor work; not a high-confidence duplicate or fixed-by-candidate close. |
| #46275 | keep_closed | skipped | superseded | Already closed historical PR; retain as superseded evidence only. |
| #54724 | keep_related | planned | related | Related broader follow-up, not fully superseded by the narrow merged switch fix. |
| #72328 | keep_closed | skipped | canonical | Canonical fix path for the switch-state portion is already merged; no post-merge or close action is allowed by this job. |

## Needs Human

- none
