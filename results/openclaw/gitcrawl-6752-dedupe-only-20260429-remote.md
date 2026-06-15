---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-6752-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136450866"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136450866"
head_sha: "421ddc981e12f60cbb3ea60e4527004e3a033e79"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.275Z"
canonical: "https://github.com/openclaw/openclaw/issues/48238"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48238"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-6752-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136450866](https://github.com/openclaw/clownfish/actions/runs/25136450866)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/48238

## Summary

Hydrated state shows no security-sensitive refs and no high-confidence duplicate, superseded, fixed-by-candidate, merge, or fix path allowed for this dedupe-only job. #48238 is the best live canonical tracker for the loop-aware compaction guard family; the seven open PRs are useful staged implementation/docs candidates that should stay open for maintainer review rather than be closed by cleanup automation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #48238 | keep_canonical | planned | canonical | #48238 is the best live canonical issue for the full loop-aware compaction guard family. |
| #48278 | keep_related | planned | related | Useful first-stage implementation candidate; not a duplicate or superseded PR, but not merge-ready or closable in this job. |
| #48293 | keep_related | planned | related | Dependent detector work remains related and useful if the canonical #48238 stack proceeds. |
| #48312 | keep_related | planned | related | Distinct scorer layer with unresolved review/product context; keep related rather than close. |
| #48335 | keep_related | planned | related | Related runtime-hook implementation candidate; not a duplicate or safe cleanup closure target. |
| #48350 | keep_related | planned | related | Related validator work has unique scope and unresolved integration context; keep open. |
| #48368 | keep_related | planned | related | Related escalation work remains a distinct staged PR and should not be closed by dedupe cleanup. |
| #48406 | keep_related | planned | related | Related operator docs are premature but useful; keep open rather than close as duplicate or low-signal. |

## Needs Human

- none
