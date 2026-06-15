---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2822-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134546111"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134546111"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.007Z"
canonical: "https://github.com/openclaw/openclaw/pull/42904"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42904"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2822-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134546111](https://github.com/openclaw/clownfish/actions/runs/25134546111)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42904

## Summary

Live preflight shows the representative #42904 is already closed and merged. All hydrated cluster refs are closed, no security-sensitive items were detected, and no close/comment/label mutation is needed.

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
| #42904 | keep_closed | skipped | canonical | Already closed and merged; closed refs must not receive mutation actions. |
| #43043 | keep_closed | skipped | superseded | Already closed and superseded by the merged canonical PR; no close action is valid. |
| #43093 | keep_closed | skipped | superseded | Already closed as implemented on current main; no mutation is valid. |
| #42875 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by the landed canonical path; no mutation needed. |
| #49489 | keep_closed | skipped | independent | Independent closed linked ref; no cluster action needed. |

## Needs Human

- none
