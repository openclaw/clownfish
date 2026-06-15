---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3228-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135556119"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135556119"
head_sha: "f12a87189d5d814fe7dfd1bed3ac0e65f75e8fe3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.019Z"
canonical: "https://github.com/openclaw/openclaw/pull/55789"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/55789"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3228-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135556119](https://github.com/openclaw/clownfish/actions/runs/25135556119)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/55789

## Summary

Hydrated preflight shows #55789 is still the best live canonical PR for the internal HTTP session override root cause. The other open PRs are useful but cover distinct gateway/hooks/history surfaces, so no high-confidence duplicate, superseded, merge, or fixed-by-candidate closeout is planned.

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
| #55789 | keep_canonical | planned | canonical | Keep #55789 open as the canonical PR for this root cause; no close action applies to the canonical item. |
| #45344 | keep_related | planned | related | Related gateway request-context hardening, but not the same user-visible failure or root cause as #55789. |
| #55767 | keep_related | planned | related | Related internal session namespace hardening on a different input surface; keep open for its own validation path. |
| #55928 | keep_related | planned | related | Related gateway internal-session hardening, but the endpoint and user-visible failure differ from #55789. |

## Needs Human

- none
