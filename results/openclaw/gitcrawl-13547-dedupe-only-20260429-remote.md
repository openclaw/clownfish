---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13547-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109698858"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109698858"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.727Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13547-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109698858](https://github.com/openclaw/clownfish/actions/runs/25109698858)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Autonomous dedupe pass used the hydrated 2026-04-29 preflight artifact at main 9881a808f2fc0d5302f98a040a9efaad00336097. The representative #68634 is closed and the live open candidates split into distinct subfamilies, so there is no single safe cluster-wide canonical and no close/comment/label mutation is planned. Live canonical threads are kept open for #42156, #53408, #59273, and #64664; related or independent reports stay open; #69698 is already closed; security-sensitive #60268 is quarantined only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #42156 | keep_canonical | planned | canonical | Best surviving open tracker for Telegram callback-query timeout behind sequentialize; keep it open for a narrow Telegram fix. |
| #48239 | keep_related | planned | related | Related Telegram approval-routing state drift, but not a high-confidence duplicate of the callback-timeout or closed native-approval scope-upgrade issues. |
| #53408 | keep_canonical | planned | canonical | Best surviving tracker for the custom/local Anthropic-compatible long-context tool-argument loss path; keep open. |
| #55224 | keep_related | planned | related | Related tool-argument loss report with unique reproduction detail; leave open rather than close as a duplicate. |
| #56597 | keep_related | planned | related | Same Discord stale exec-policy family as #59273, but the artifact shows different suspected root causes; keep related and open. |
| #56966 | keep_independent | planned | independent | Distinct Telegram authorization/config mismatch; do not close or route under this exec-approval dedupe cluster. |
| #59125 | keep_related | planned | related | Related approval-config report, but there is no hydrated merged candidate proving the whole issue is fixed; keep open. |
| #59273 | keep_canonical | planned | canonical | Best surviving tracker for Discord stale exec config through gateway restarts; keep open. |
| #59405 | keep_independent | planned | independent | Provider/model tool-output behavior is independent of the approval dedupe cluster; leave open. |
| #64664 | keep_canonical | planned | canonical | Best surviving tracker for stale approval callback UX after gateway restart; keep open. |
| #69698 | keep_closed | skipped | fixed_by_candidate | Already closed in live preflight state; no worker mutation is valid. |
| #60268 | route_security | planned | security_sensitive | Quarantine the exact security-sensitive linked ref to central OpenClaw security handling and continue ordinary non-security classification. |

## Needs Human

- none
