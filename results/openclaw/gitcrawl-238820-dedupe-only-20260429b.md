---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238820-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107697160"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107697160"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.645Z"
canonical: "https://github.com/openclaw/openclaw/pull/72393"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72393"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238820-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107697160](https://github.com/openclaw/clownfish/actions/runs/25107697160)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72393

## Summary

Live preflight shows representative #64661 is already closed. The current canonical landed path for this dedupe family is merged maintainer PR #72393 on main 579334f9f8a02d264c2a4d421ab94e37fb8b6244. #73751 remains a related open maintainer follow-up with unique remaining qmd/tui streaming coverage, failing checks, and an unresolved Greptile finding, so no close/comment/label mutation is safe or needed.

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
| #56538 | keep_closed | skipped | superseded | Already closed; preserve as historical superseded contributor work and emit no mutation. |
| #64661 | keep_closed | skipped | superseded | Already closed as superseded by the maintainer replacement path; no close/comment/label mutation should be emitted. |
| #64709 | keep_closed | skipped | superseded | Already closed as superseded; keep it as historical evidence only. |
| #72393 | keep_closed | skipped | canonical | This is the landed canonical fix for the closed duplicate/superseded PR family; it is already closed and merged, so no mutation is valid. |
| #73751 | keep_related | planned | related | Keep open as related follow-up work; it is not a high-confidence duplicate of #72393 and is not safe to close. |

## Needs Human

- none
