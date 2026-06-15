---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2703-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134064633"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134064633"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.997Z"
canonical: "https://github.com/openclaw/openclaw/tree/cdb424a64282a073292a0b38f5b82aaa14c9f1eb"
canonical_issue: null
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

# gitcrawl-2703-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134064633](https://github.com/openclaw/clownfish/actions/runs/25134064633)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/cdb424a64282a073292a0b38f5b82aaa14c9f1eb

## Summary

Autonomous classification only. The closed representative #40199 remains historical; no open candidate is a true duplicate of the weekday/date-time system-prompt request. Current main cdb424a64282a073292a0b38f5b82aaa14c9f1eb is the canonical path for the original weekday need via a cache-stable prompt plus message/session time context. #40296 is already closed as superseded by a main commit, #52727 is security-sensitive and routed, #45062 also has security-review evidence and is routed, and the remaining open refs are distinct prompt/tooling subfamilies kept open. No close, merge, or fix PR action is planned.

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
| #40199 | keep_closed | skipped | superseded | Closed representative is historical evidence only; no mutation is valid. |
| #40296 | keep_closed | skipped | superseded | Already closed and superseded by a main commit; record only as skipped historical context. |
| #14432 | keep_related | planned | related | Distinct but related system-prompt guidance work; keep open. |
| #45062 | route_security | planned | security_sensitive | Security-shaped prompt-injection review evidence is out of scope for backlog dedupe automation. |
| #46647 | keep_related | planned | related | Ordinary Slack prompt-mismatch subcluster with unique remaining work; keep open. |
| #51683 | keep_related | planned | related | Focused but not merge-ready related PR; keep open. |
| #52727 | route_security | planned | security_sensitive | Security-sensitive trust-boundary prompt precedence item is quarantined to central security handling only. |
| #61422 | keep_related | planned | related | Related prompt-cache follow-up with failing checks; keep open. |
| #63940 | keep_related | planned | related | Distinct skills-prompt behavior; keep open. |
| #65777 | keep_related | planned | related | Valid-looking but separate prompt-context PR; keep open in this cluster. |
| #70605 | keep_related | planned | related | Related context-file prompt sanitation PR with unresolved review findings; keep open. |
| #8813 | keep_related | planned | related | Linked skills-prompt follow-up with unique scope; keep open. |
| #47668 | keep_related | planned | related | Broad context-management issue is related but not covered by this cluster. |

## Needs Human

- none
