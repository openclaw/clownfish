---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-885-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610226934"
workflow_run_id: "27610226934"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610226934"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.518Z"
canonical: "https://github.com/openclaw/openclaw/issues/90732"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90732"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-885-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610226934](https://github.com/openclaw/clownfish/actions/runs/27610226934)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90732

## Summary

Classified the only open actionable ref, #90732, as an independent canonical UX/product-copy issue. It is not a duplicate of the closed invalid_request_error/thinking-signature context refs, and no close, fix, PR, or merge action is permitted or appropriate for this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #90732 | keep_canonical | planned | canonical | Keep #90732 open as the canonical live issue for the Control UI wording/product decision. It is not a duplicate of the closed invalid_request_error or signed-thinking replay context refs, and no high-confidence close action is available. |

## Needs Human

- #90732 remains open for maintainer product wording choice before implementation; this run can classify it but cannot choose final copy or open a fix PR because fix and raise_pr are blocked.
