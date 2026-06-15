---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-15281-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130280381"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130280381"
head_sha: "d8402244adeff9d7d53d01dc45e960e2851caca3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.854Z"
canonical: "https://github.com/openclaw/openclaw/issues/50274"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50274"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-15281-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130280381](https://github.com/openclaw/clownfish/actions/runs/25130280381)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50274

## Summary

Using the hydrated preflight artifact at main 7c51cd2baf1cca8de20b0133bc6bb00d2dc95dea, #50285 and #50286 are closed context only. #50274 is the current open broad canonical for the fallback-policy plus model-input guardrail family; #50287 remains open as a related focused guardrail follow-up. No close, comment, label, merge, or fix mutation is high-confidence for this dedupe-only job.

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
| #50274 | keep_canonical | planned | canonical | #50285 is closed and obsolete as canonical. #50274 is the best surviving open broad canonical for the cluster because it covers both unresolved halves and should not be closed as a duplicate of the narrower guardrail issue. |
| #50285 | keep_closed | skipped | superseded | Already closed umbrella context. No mutation is valid for this target. |
| #50286 | keep_closed | skipped | superseded | Already closed fallback-only context. No mutation is valid for this target. |
| #50287 | keep_related | planned | related | Keep open as a related focused guardrail issue. It overlaps the canonical family but contains narrower product/API contract work that should not be collapsed by autonomous dedupe cleanup. |

## Needs Human

- none
