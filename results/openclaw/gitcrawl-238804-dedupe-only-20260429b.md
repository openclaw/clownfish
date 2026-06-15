---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238804-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107671048"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107671048"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.637Z"
canonical: "https://github.com/openclaw/openclaw/pull/67082"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/67082"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238804-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107671048](https://github.com/openclaw/clownfish/actions/runs/25107671048)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/67082

## Summary

Hydrated preflight shows the representative and all cluster candidates are already closed. The current canonical path is merged PR #67082, which shipped the exec approval modal overflow fix on main; no close, label, merge, or fix action is valid for this run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #59195 | keep_closed | skipped | fixed_by_candidate | Already closed in hydrated preflight; closure policy prohibits closing an already closed item. |
| #59315 | keep_closed | skipped | superseded | Closed, unmerged contributor PR is historical evidence and is superseded by the later merged canonical fix #67082. |
| #59377 | keep_closed | skipped | fixed_by_candidate | Already closed in hydrated preflight; closure policy prohibits closing an already closed item. |
| #59400 | keep_closed | skipped | superseded | Closed, unmerged, broader PR is historical evidence and is superseded by merged canonical fix #67082. |
| #59984 | keep_closed | skipped | fixed_by_candidate | The original representative is obsolete because it is already closed; current canonical path is merged PR #67082. |
| #60125 | keep_closed | skipped | fixed_by_candidate | Already closed in hydrated preflight; closure policy prohibits closing an already closed item. |
| #60496 | keep_closed | skipped | fixed_by_candidate | Already closed in hydrated preflight; closure policy prohibits closing an already closed item. |
| #66403 | keep_closed | skipped | fixed_by_candidate | Already closed in hydrated preflight; closure policy prohibits closing an already closed item. |
| #67082 | keep_closed | skipped | canonical | Canonical fix is already merged and closed; this job disallows merge, fix, and post-merge close actions and no mutation remains. |

## Needs Human

- none
