---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2411-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132998659"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132998659"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.972Z"
canonical: "https://github.com/openclaw/openclaw/issues/56771"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56771"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2411-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132998659](https://github.com/openclaw/clownfish/actions/runs/25132998659)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/56771

## Summary

Classified #56771 as the canonical open issue for automatic tool parameter validation, planned duplicate closeout for #56562, and kept #43263 as closed historical context. No security-sensitive items, PRs, merge, or fix actions are in scope for this run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56562 | close_duplicate | blocked | duplicate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56771 | keep_canonical | planned | canonical | #56771 is the best live canonical issue for the shared tool-parameter-validation root cause. |
| #56562 | close_duplicate | planned | duplicate | Same root cause and user-visible failure as #56771; #56562's proposed option names and retry wording are implementation-shape details that can remain on the canonical thread. |
| #43263 | keep_closed | skipped | fixed_by_candidate | Already closed before this run; retained only as historical context for the parameter-validation family. |

## Needs Human

- none
