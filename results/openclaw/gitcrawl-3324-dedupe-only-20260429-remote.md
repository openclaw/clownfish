---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3324-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27590153848"
workflow_run_id: "27590153848"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27590153848"
head_sha: "207fe2e2134a14e5532e7b8b0d17a01bba81af38"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T02:37:15.271Z"
canonical: "https://github.com/openclaw/openclaw/issues/54882"
canonical_issue: "https://github.com/openclaw/openclaw/issues/54882"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3324-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27590153848](https://github.com/openclaw/clownfish/actions/runs/27590153848)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/54882

## Summary

Canonical #60008 is obsolete because it is already closed. The best live canonical is open issue #54882. Open PR #77312 remains the linked implementation candidate, but it is not merge-ready because the hydrated checks show Real behavior proof failing and the job blocks merge, fix, and raise_pr. No close actions are planned because the remaining duplicate/context refs are already closed and the only open issue is canonical.

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
| #54882 | keep_canonical | planned | canonical | #54882 is the only open issue in the cluster that tracks the remaining display/diagnostic alias compatibility question. |
| #77312 | keep_related | planned | related | #77312 is useful implementation context for #54882 but is not merge-ready and cannot be repaired or merged by this job. |
| #56694 | keep_closed | skipped | duplicate | Already closed duplicate/context ref; preserve as historical evidence only. |
| #60008 | keep_closed | skipped | duplicate | Obsolete closed representative; current canonical must be the live open issue #54882. |
| #60550 | keep_closed | skipped | duplicate | Already closed duplicate/context ref; preserve as historical evidence only. |
| #61904 | keep_closed | skipped | related | Already closed related/context ref; preserve as historical evidence only. |

## Needs Human

- none
