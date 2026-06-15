---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2217-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132427978"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132427978"
head_sha: "2a25e72cd9df0710ef893de8f25823a6a78be854"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.948Z"
canonical: "https://github.com/openclaw/openclaw/pull/54724"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/54724"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2217-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132427978](https://github.com/openclaw/clownfish/actions/runs/25132427978)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/54724

## Summary

Hydrated state shows the original representative #41344 and job candidate #40352 are already closed. The remaining non-security canonical path for the primary-model selection/catalog-loading family is open PR #54724. Open issue #52928 is related but distinct, and open PR #71203 is security-sensitive and must be routed to central security handling. No close, merge, fix, or PR-opening action is emitted.

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
| #41344 | keep_closed | skipped | superseded | The canonical hint is obsolete because #41344 is closed; use open PR #54724 as the current canonical path for this subfamily. |
| #40352 | keep_closed | skipped | fixed_by_candidate | The explicit reload stale-state issue is already closed and covered by hydrated merged PR #72624. |
| #54724 | keep_canonical | planned | canonical | Keep #54724 open as the current canonical non-security PR, but do not plan merge or repair in this dedupe-only job. |
| #52928 | keep_related | planned | related | Keep #52928 open as a related but distinct Gateway protocol feature request. |
| #71203 | route_security | planned | security_sensitive | Route #71203 to central OpenClaw security handling; do not comment, close, merge, or fix it in this cluster. |

## Needs Human

- none
