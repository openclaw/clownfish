---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156720-autonomous-smoke"
mode: "autonomous"
run_id: "25070819579"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25070819579"
head_sha: "0cf1f18e77f38d918c7ae148f3ad4a7d47c03221"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T18:35:37.876Z"
canonical: "https://github.com/openclaw/openclaw/pull/45270"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45268"
canonical_pr: "https://github.com/openclaw/openclaw/pull/45270"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156720-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25070819579](https://github.com/openclaw/clownfish/actions/runs/25070819579)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/45270

## Summary

Hydrated state shows two distinct status families. #45270 remains the canonical open PR for the totalTokensFresh context-usage bug and covers linked issue #45268, but merge is not recommended because mergeability is unknown and there is no fresh Codex /review merge preflight. #65381/#65109 are a related cache-cost subcluster with failing checks, so they stay open. Security-sensitive hydrated closed PRs #52329 and #63238 are quarantined only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45268 | close_fixed_by_candidate | skipped | fixed_by_candidate | Closeout is blocked on the canonical fix path landing. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45270 | keep_canonical | planned | canonical | Canonical PR is clear, useful, and narrow, but merge gates are incomplete. |
| #45268 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closeout is blocked on the canonical fix path landing. |
| #52329 | route_security | planned | security_sensitive | Security-sensitive hydrated item is routed to central OpenClaw security handling without mutation. |
| #63238 | route_security | planned | security_sensitive | Security-sensitive hydrated item is routed to central OpenClaw security handling without mutation. |
| #65109 | keep_related | planned | related | Related cache-cost subcluster should remain open until #65381 or an equivalent fix lands. |
| #65381 | keep_related | planned | related | Related implementation candidate is not merge-ready because checks are failing. |

## Needs Human

- none
