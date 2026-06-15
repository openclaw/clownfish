---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238868-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102959289"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102959289"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.133Z"
canonical: "https://github.com/openclaw/openclaw/pull/73976"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73976"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238868-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102959289](https://github.com/openclaw/clownfish/actions/runs/25102959289)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73976

## Summary

Canonical drift is resolved: #39555 is already closed and the hydrated replacement path is open #73976. #48112 is related memory hybrid-search work with distinct fallback-scoring scope and should remain open; no close, merge, or fix action is safe for it in this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #39555 | keep_closed | skipped | superseded | Already closed and superseded by hydrated replacement #73976; no mutation planned. |
| #73976 | keep_canonical | planned | canonical | Best current canonical path, but not merge-ready and merge is blocked by this job. |
| #48112 | keep_related | planned | related | Related memory hybrid-search work with distinct scope and unresolved review/product semantics; keep open rather than close as duplicate or superseded. |

## Needs Human

- none
