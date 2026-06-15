---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-867-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526241676"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526241676"
head_sha: "df0ecb937a5f73036ef8def5c1f076a5c228a0d6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:36:40.336Z"
canonical: "#62328"
canonical_issue: "#62328"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-867-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526241676](https://github.com/openclaw/clownfish/actions/runs/27526241676)

Workflow conclusion: success

Worker result: planned

Canonical: #62328

## Summary

Plan-only classification: #62328 remains the best canonical tracker for the FTS5/BM25 memory search degradation, but it is an excluded existing-overlap ref owned by another job. #62338 is related useful diagnostic work, not a duplicate and not merge-ready because required proof/checks are failing and merge/fix actions are blocked for this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #62328 | keep_canonical | skipped | canonical | Context-only canonical; skipped because #62328 is excluded existing-overlap, not an actionable ref for this worker. |
| #62338 | keep_related | planned | related | Related diagnostic PR with useful unsuperseded work, but not canonical and not merge-ready in this plan-only job. |

## Needs Human

- none
