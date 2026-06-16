---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13985-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585128378"
workflow_run_id: "27585128378"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585128378"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:20:07.425Z"
canonical: "#44925"
canonical_issue: "#44925"
canonical_pr: null
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13985-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585128378](https://github.com/openclaw/clownfish/actions/runs/27585128378)

Workflow conclusion: success

Worker result: planned

Canonical: #44925

## Summary

Classified the live hydrated cluster without planning GitHub mutations. The original representative #57428 is closed, so #44925 is the best open canonical for the remaining durable subagent completion-delivery work. Other live open job candidates are related but not safe duplicate closeouts from the compacted evidence. Closed candidates are skipped, and security-sensitive linked issue/PR refs are routed only to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
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
| #44925 | keep_canonical | planned | canonical |  |
| #38836 | keep_closed | skipped | superseded | Already closed in live preflight state; no closure action is valid. |
| #50165 | keep_related | planned | related |  |
| #53684 | route_security | planned | security_sensitive | Security-sensitive issue context is outside ProjectClownfish backlog cleanup and must be routed to central OpenClaw security handling. |
| #55790 | keep_closed | skipped |  | Already closed in live preflight state; no closure action is valid. |
| #63279 | keep_closed | skipped |  | Already closed in live preflight state; no closure action is valid. |
| #64585 | keep_closed | skipped |  | Already closed in live preflight state; no closure action is valid. |
| #67777 | keep_related | planned | related |  |
| #69767 | keep_closed | skipped |  | Already closed in live preflight state; no closure action is valid. |
| #69778 | keep_closed | skipped |  | Already closed in live preflight state; no closure action is valid. |
| #46502 | route_security | planned | security_sensitive | Security-sensitive PRs are outside ProjectClownfish backlog cleanup and must be routed to central OpenClaw security handling. |
| #53716 | route_security | skipped | security_sensitive | Already closed historical security-sensitive context; no mutation is planned. |
| #81590 | route_security | planned | security_sensitive | Security-sensitive PRs are outside ProjectClownfish backlog cleanup and must be routed to central OpenClaw security handling. |
| #90561 | route_security | planned | security_sensitive | Security-sensitive PRs are outside ProjectClownfish backlog cleanup and must be routed to central OpenClaw security handling. |

## Needs Human

- none
