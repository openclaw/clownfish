---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1779-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130783060"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130783060"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.869Z"
canonical: "https://github.com/openclaw/openclaw/pull/39389"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39389"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1779-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130783060](https://github.com/openclaw/clownfish/actions/runs/25130783060)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39389

## Summary

Classified the live open candidates from the hydrated preflight artifact. #39389 remains the narrow Feishu accountId documentation canonical path; #49769 is related but broader and must stay open because it contains distinct CLI/types behavior changes plus unresolved review and failing checks. No close, merge, fix, or security routing action is planned.

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
| #39389 | keep_canonical | planned | canonical | #39389 is still the best live canonical for the narrow Feishu documentation path, but this run should only classify it because merge/fix actions are blocked and review findings remain unresolved. |
| #49769 | keep_related | planned | related | #49769 should not be closed as a duplicate or superseded PR because it carries broader useful work and unresolved review findings; keep it open as related to the #39389 Feishu-doc canonical path. |
| #64336 | keep_closed | skipped | independent | Closed context only; independent from this accountId routing dedupe decision. |

## Needs Human

- none
