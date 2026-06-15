---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-5242-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142654222"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142654222"
head_sha: "8f933d29316dafa444b508672aa421a6a4fea48c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.328Z"
canonical: "https://github.com/openclaw/openclaw/pull/42771"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42771"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-5242-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142654222](https://github.com/openclaw/clownfish/actions/runs/25142654222)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42771

## Summary

Hydrated preflight keeps #42771 as the best open canonical PR for the Docker Playwright browser path issue. #42819 is the paired same-author issue and should remain open until #42771 is reviewed, repaired, landed, replaced, or closed. No close/comment/label mutation is planned because instant close is disabled and current main remains unfixed.

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
| #42771 | keep_canonical | planned | canonical | #42771 is the best surviving canonical implementation path, but it is not merge-ready and this dedupe-only job blocks merge, fix, and raise_pr actions. |
| #42819 | keep_related | planned | related | #42819 is the paired bug report for canonical PR #42771, but current main is not fixed and the canonical PR has not landed, so no duplicate or fixed-by-candidate closure is safe in this run. |

## Needs Human

- none
