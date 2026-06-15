---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4748-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142640293"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142640293"
head_sha: "e1f2040c09ee35bcaddc73058175d3b802eb6214"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.328Z"
canonical: "https://github.com/openclaw/openclaw/issues/41064"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41064"
canonical_pr: "https://github.com/openclaw/openclaw/pull/41067"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-4748-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142640293](https://github.com/openclaw/clownfish/actions/runs/25142640293)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41064

## Summary

Kept #41064 as the canonical open issue and #41067 as the active implementation candidate, but no close, merge, or fix mutation is safe in this job. #41067 is open, dirty, and has unresolved automated review findings; #38836 is related restart-notification work with distinct scope. Closed linked restart-feedback issues are historical evidence only.

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
| #21641 | keep_closed | skipped |  | Already closed; retained only as historical linked evidence. |
| #26986 | keep_closed | skipped |  | Already closed; no action should be replayed. |
| #38836 | keep_related | planned | related | Related restart/session recovery family, but distinct Feishu restart-notification scope with remaining work. |
| #41064 | keep_canonical | planned | canonical | #41064 remains the best live canonical issue for the Dashboard busy-state regression. |
| #41067 | keep_canonical | planned | canonical | #41067 is the canonical implementation candidate for #41064, but it is not merge-ready and this dedupe-only job cannot repair or merge it. |

## Needs Human

- none
