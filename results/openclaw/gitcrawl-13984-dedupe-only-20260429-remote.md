---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13984-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109801644"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109801644"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.774Z"
canonical: "https://github.com/openclaw/openclaw/issues/45028"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45028"
canonical_pr: null
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13984-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109801644](https://github.com/openclaw/clownfish/actions/runs/25109801644)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/45028

## Summary

Autonomous dedupe-only pass using hydrated preflight state at main 9881a808f2fc0d5302f98a040a9efaad00336097. #45028 remains the best open canonical for the Control UI to externally backed channel routing family. No open issue is safe for instant close in this pass; most candidates are related but have distinct remaining work. #44424 and #69326 are already closed and are kept skipped. Linked PR #73402 is quarantined to central security triage because the hydrated bot review raises an auth-boundary finding.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #45028 | keep_canonical | planned | canonical | Best surviving canonical issue for the Control UI-to-external-channel routing family. |
| #38829 | keep_related | planned | related | Related cross-surface messaging issue, but distinct TUI live transcript subscription root cause. |
| #43848 | keep_related | planned | related | Related Telegram routing/session-send work, but not the same Control UI reply-route root cause as #45028. |
| #44424 | keep_closed | skipped | duplicate | Already closed before this worker result; included only to record live-state drift from the job inventory. |
| #45388 | keep_related | planned | related | Related external-channel visibility bug, but distinct TUI live-tail implementation path. |
| #45554 | keep_related | planned | related | Related session routing/state cleanup work with unique remaining scope. |
| #47561 | keep_related | planned | related | Related session/routing lifecycle bug, not a duplicate of the canonical Control UI external-delivery issue. |
| #47643 | keep_related | planned | related | Related Telegram/multi-surface report, but too broad and platform-specific for duplicate closure against #45028. |
| #52286 | keep_related | planned | related | Related Telegram route-preservation bug, but a distinct message-tool attachment/topic behavior. |
| #64157 | keep_related | planned | related | Related multi-surface route-preservation issue, but not high-confidence duplicate due provider-specific and timing-specific details. |
| #64917 | keep_related | planned | related | Related webchat delivery-context contamination issue, but distinct sessions_send/internal handoff scope. |
| #69326 | keep_closed | skipped | duplicate | Already closed duplicate of #45028 before this worker result. |
| #73402 | route_security | planned | security_sensitive | Security-shaped authorization finding on a linked PR must be quarantined instead of handled by backlog dedupe automation. |

## Needs Human

- none
