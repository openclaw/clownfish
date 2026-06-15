---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3433-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135576685"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135576685"
head_sha: "f12a87189d5d814fe7dfd1bed3ac0e65f75e8fe3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.023Z"
canonical: "https://github.com/openclaw/openclaw/issues/65504"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65504"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3433-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135576685](https://github.com/openclaw/clownfish/actions/runs/25135576685)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65504

## Summary

Hydrated preflight keeps #65504 as the canonical open issue for the remaining live-gateway timeout attribution work. #65505 is a duplicate of that same timeout-attribution/auth-profile poisoning request and can be closed with a credit-preserving comment; linked scheduler and closed context items stay open or closed without mutation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #65505 | close_duplicate | blocked | duplicate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65504 | keep_canonical | planned | canonical | Best surviving canonical issue for the shared remaining OpenClaw timeout-attribution contract. |
| #65505 | close_duplicate | planned | duplicate | Same root cause and no unique remaining work beyond the canonical #65504 tracking issue. |
| #54488 | keep_related | planned | related | Related live-gateway responsiveness family, but a different scheduler fairness root cause. |
| #65507 | keep_closed | skipped | fixed_by_candidate | Already closed historical context; no mutation allowed. |
| #65233 | keep_closed | skipped | related | Merged historical related fix; no mutation allowed. |
| #65511 | keep_closed | skipped | related | Closed unmerged historical implementation attempt; not a viable canonical fix in this dedupe-only run. |
| #65517 | keep_closed | skipped | related | Already closed related context; no mutation allowed. |

## Needs Human

- none
