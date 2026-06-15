---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157019-autonomous-smoke"
mode: "autonomous"
run_id: "25102937098"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102937098"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.130Z"
canonical: "#69288"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/69288"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157019-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102937098](https://github.com/openclaw/clownfish/actions/runs/25102937098)

Workflow conclusion: success

Worker result: planned

Canonical: #69288

## Summary

All hydrated refs for this cluster are already closed. The live canonical hint #40777 is obsolete because it was closed as implemented by current main, and #69288 is the landed canonical PR for the namespaced antml streaming subcase. No close, comment, label, merge, or fix PR action is planned.

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
| #40736 | keep_closed | skipped | fixed_by_candidate | Already closed in hydrated live state. |
| #40777 | keep_closed | skipped | fixed_by_candidate | Representative canonical hint is obsolete because the PR is already closed and the shipped current-main path owns the fix. |
| #51915 | keep_closed | skipped | superseded | Already closed as superseded by a direct main commit. |
| #59550 | keep_closed | skipped | related | Already merged and closed; related historical antml sanitizer context only. |
| #69235 | keep_closed | skipped | fixed_by_candidate | Already closed after the landed #69288 fix path. |
| #69288 | keep_closed | skipped | canonical | Landed canonical PR for the antml streaming subcase; already closed and merged. |

## Needs Human

- none
