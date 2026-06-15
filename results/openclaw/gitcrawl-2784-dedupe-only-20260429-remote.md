---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2784-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134533128"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134533128"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.005Z"
canonical: "https://github.com/openclaw/openclaw/issues/38829"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38829"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2784-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134533128](https://github.com/openclaw/clownfish/actions/runs/25134533128)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/38829

## Summary

No close, merge, or fix action is safe for this cluster. #41964 is closed historical context; #38829 is the open TUI live-transcript issue anchor; #45388 and #45417 remain related open TUI follow-up work. #73402 is quarantined because the hydrated review record contains an auth/sensitive-transcript boundary finding. #47739 and #69084 are independent gateway PRs with their own review/check blockers.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #41964 | keep_closed | skipped | superseded | Already closed refs must not receive close actions; retained as historical evidence only. |
| #38829 | keep_canonical | planned | canonical | Best open issue anchor for the TUI live-transcript subfamily while no safe landed fix exists. |
| #45388 | keep_related | planned | related | Related TUI live-session report with unique reproduction/follow-up details; keep open. |
| #45417 | keep_related | planned | related | Useful but not safely closeable or mergeable in this dedupe-only cluster; keep as related implementation context. |
| #73402 | route_security | planned | security_sensitive | Open PR appears to touch an auth/sensitive-transcript trust boundary, so it must route to central OpenClaw security handling before it can be used as a canonical fix path. |
| #47739 | keep_independent | planned | independent | Different root cause and user-visible failure from the TUI live-session cluster. |
| #69084 | keep_independent | planned | independent | Independent gateway heartbeat-visibility work; leave open for its own review path. |

## Needs Human

- none
