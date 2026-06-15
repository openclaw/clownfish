---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-41-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135987030"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135987030"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.027Z"
canonical: "https://github.com/openclaw/openclaw/pull/49145"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/49145"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-41-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135987030](https://github.com/openclaw/clownfish/actions/runs/25135987030)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/49145

## Summary

Classified the hydrated cluster without GitHub mutation. #36630 is quarantined to central security handling, #49145 is the best non-security surviving broad Signal quote-reply canonical PR but not merge-ready, and #56791 is a related narrow contributor PR that should remain open. No close, merge, fix, or PR-opening actions are planned.

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
| #36630 | route_security | planned | security_sensitive | #36630 is out of ProjectClownfish cleanup scope and should be routed to central OpenClaw security handling. |
| #49145 | keep_canonical | planned | canonical | #49145 is the clearest non-security broad canonical PR after #36630 is quarantined, but it is not merge-ready in this dedupe-only job. |
| #56791 | keep_related | planned | related | #56791 overlaps with the Signal quote-reply family but has narrower scope, active maintainer follow-up, useful contributor work, and failing checks; it is not safe to close as a duplicate or superseded PR. |
| #47368 | keep_closed | skipped | superseded | Already closed linked context; no mutation is valid. |
| #57413 | keep_closed | skipped | independent | Already closed and channel scope is independent of the open Signal PR decisions. |
| #57806 | keep_closed | skipped | related | Already closed related context; no mutation is valid. |

## Needs Human

- none
