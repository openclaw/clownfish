---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3135-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135543887"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135543887"
head_sha: "f12a87189d5d814fe7dfd1bed3ac0e65f75e8fe3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.016Z"
canonical: "https://github.com/openclaw/openclaw/pull/19328"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/19328"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3135-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135543887](https://github.com/openclaw/clownfish/actions/runs/25135543887)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/19328

## Summary

Hydrated state shows no security-sensitive refs. Closed representative #52786 is historical; open PR #19328 is the current canonical path for the stale-cache modelOverride race, but merge/fix work is outside this job and blocked by failing checks. Open issue #70575 is related but not a duplicate because it tracks residual delivery/channel stale writebacks that #19328 does not currently cover, so no close actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #5369 | keep_closed | skipped | related | Already closed historical model override report; no mutation is valid. |
| #6295 | keep_closed | skipped | duplicate | Already closed duplicate context; no close action is allowed. |
| #6671 | keep_closed | skipped | related | Closed related/context issue; not an open dedupe target. |
| #10883 | keep_closed | skipped | duplicate | Already closed duplicate context; no close action is allowed. |
| #10963 | keep_closed | skipped | related | Already closed historical model-default issue; no mutation is valid. |
| #18451 | keep_closed | skipped | related | Closed related display/reporting issue; not an open target. |
| #19328 | keep_canonical | planned | canonical | Open PR #19328 is the current canonical path for the #52786 stale-cache modelOverride regression, but this worker cannot merge or repair it. |
| #21705 | keep_closed | skipped | related | Closed historical context only. |
| #40159 | keep_closed | skipped | related | Closed related context; the current open canonical for the remaining stale-cache race is separate PR #19328. |
| #52786 | keep_closed | skipped | superseded | Already closed representative superseded by hydrated open PR #19328. |
| #70575 | keep_related | planned | related | Related follow-up, not duplicate: #70575 should remain open unless maintainers later fold the residual delivery/channel fix into #19328 or another PR. |

## Needs Human

- none
