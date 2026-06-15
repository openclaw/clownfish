---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13979-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109796790"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109796790"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.770Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 17
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13979-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109796790](https://github.com/openclaw/clownfish/actions/runs/25109796790)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Autonomous dedupe pass found no high-confidence close/comment/label mutations. The closed representative #49118 is obsolete and the hydrated open candidates split into multiple live subfamilies: Control UI reconnect recovery, sessions_send/A2A timeouts, Feishu WebSocket/retry issues, browser-control state, logs provenance, and plugin gateway-call timeout. All security gates are clear in the preflight artifact; no security-sensitive refs were detected. Current main checked from artifact: 9881a808f2fc0d5302f98a040a9efaad00336097.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 17 |
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
| #49118 | keep_closed | skipped | superseded | Closed representative; not a live mutation target. |
| #38091 | keep_canonical | planned | canonical | Canonical for the Control UI/WebChat active-run reconnect subfamily. |
| #42354 | keep_related | planned | related | Related Feishu WebSocket symptom, but not a true duplicate of any single canonical in this cluster. |
| #45926 | keep_canonical | planned | canonical | Canonical for the sessions_send caller-timeout A2A announce loss subfamily. |
| #52336 | keep_related | planned | related | Related gateway-close symptom, but not proven duplicate or fixed. |
| #52511 | keep_canonical | planned | canonical | Canonical for the Control UI browser-control permission/reconnect subfamily. |
| #52618 | keep_canonical | planned | canonical | Canonical for the Feishu SDK retry-exhaustion recovery subfamily. |
| #54904 | keep_independent | planned | independent | Independent useful PR; not a duplicate or close candidate in this cluster. |
| #55532 | keep_canonical | planned | canonical | Canonical for the Feishu reconnect backoff/PingInterval subfamily. |
| #55619 | keep_closed | skipped | superseded | Already closed; record historical supersession only. |
| #56215 | keep_independent | planned | independent | Distinct resource-leak report; leave open. |
| #56651 | keep_related | planned | related | Related timeout feature/workflow gap, but not a true duplicate. |
| #57978 | keep_related | planned | related | Useful related implementation candidate; keep open. |
| #59339 | keep_related | planned | related | Related A2A timeout report with unique scope; leave open. |
| #59470 | keep_independent | planned | independent | Distinct plugin RPC timeout report; leave open. |
| #66841 | keep_canonical | planned | canonical | Canonical for the logs provenance/side-by-side cutover subfamily. |
| #70879 | keep_canonical | planned | canonical | Canonical for Feishu outbound rate-limit retry handling. |

## Needs Human

- none
