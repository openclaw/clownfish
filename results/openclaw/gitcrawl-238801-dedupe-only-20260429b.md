---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238801-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107666260"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107666260"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.636Z"
canonical: "https://github.com/openclaw/openclaw/issues/48488"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48488"
canonical_pr: "https://github.com/openclaw/openclaw/pull/48690"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238801-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107666260](https://github.com/openclaw/clownfish/actions/runs/25107666260)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/48488

## Summary

Classified the open cluster without mutations. #48488 remains the canonical issue and #48690 remains the canonical implementation candidate; #52747, #58244, and #68785 are related but not duplicates; #68381 is already closed as superseded.

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
| #48488 | keep_canonical | planned | canonical | Canonical user-facing issue remains open because current main is not fixed and the candidate PR has not landed. |
| #48690 | keep_canonical | planned | canonical | Best canonical implementation candidate, but not merge-ready or repairable in this job; keep open for maintainer or contributor rework. |
| #52747 | keep_related | planned | related | Related timeout subfamily with unique ACP behavior; not a true duplicate or superseded by #48690. |
| #58244 | keep_related | planned | related | Same command queue area, different user-visible failure and remaining review work; keep open as related. |
| #68381 | keep_closed | skipped | superseded | Already closed as superseded; no mutation is valid. |
| #68785 | keep_related | planned | related | Related command queue saturation proposal with unique scope; keep open rather than close into the task-timeout canonical path. |

## Needs Human

- none
