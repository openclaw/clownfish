---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14347-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129796903"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129796903"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.848Z"
canonical: "https://github.com/openclaw/openclaw/pull/39115"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39115"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14347-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129796903](https://github.com/openclaw/clownfish/actions/runs/25129796903)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39115

## Summary

Hydrated preflight shows no security-sensitive refs. The obsolete representative #45880 is closed; the canonical path is merged PR #39115 on current main dac72374944f35fb89e21dce0f3f2299f27d03c9. Plan one close_fixed_by_candidate for open issue #13607, keep related open follow-ups #71817 and #73182 open, and leave already-closed historical refs untouched.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #13607 | close_fixed_by_candidate | blocked | fixed_by_candidate | canonical is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #1656 | keep_closed | skipped | fixed_by_candidate | Already closed; retained only as historical evidence for the reasoning-default family. |
| #13607 | close_fixed_by_candidate | planned | fixed_by_candidate | The open issue is fully covered by the landed canonical fix PR #39115. |
| #24132 | keep_closed | skipped | superseded | Already closed and superseded by merged PR #39115. |
| #24161 | keep_closed | skipped | fixed_by_candidate | Already closed; remaining request is covered by merged PR #39115. |
| #28704 | keep_closed | skipped | superseded | Already closed and superseded by the landed canonical PR. |
| #39094 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation needed. |
| #39115 | keep_canonical | planned | canonical | This merged PR is the canonical fix path for the cluster. |
| #41809 | keep_closed | skipped | superseded | Already closed and superseded by #39115. |
| #44513 | keep_closed | skipped | fixed_by_candidate | Already closed; covered by the landed canonical fix. |
| #45880 | keep_closed | skipped | fixed_by_candidate | Closed representative is historical only; canonical path is merged PR #39115. |
| #45907 | keep_closed | skipped | superseded | Already closed and superseded by #39115. |
| #50854 | keep_closed | skipped | superseded | Already closed and superseded by the landed canonical PR. |
| #51974 | keep_closed | skipped | related | Closed merged related work; distinct scope from the global default fixed by #39115. |
| #71817 | keep_related | planned | related | Keep open as related follow-up work; do not close or merge in this dedupe-only cluster. |
| #73182 | keep_related | planned | related | Keep open as a related but distinct follow-up; it should not be closed as fixed by the global config option alone. |

## Needs Human

- none
