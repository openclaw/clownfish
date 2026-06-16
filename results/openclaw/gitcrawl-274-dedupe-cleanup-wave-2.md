---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-274-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609382225"
workflow_run_id: "27609382225"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609382225"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.104Z"
canonical: "https://github.com/openclaw/openclaw/issues/80432"
canonical_issue: "https://github.com/openclaw/openclaw/issues/80432"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-274-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609382225](https://github.com/openclaw/clownfish/actions/runs/27609382225)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/80432

## Summary

Repaired deterministic validation failure without mutation: #80432 remains the canonical open Matrix outbound sibling-mention rendering issue; #45184 and #52146 are routed to central security handling as exact security-sensitive refs.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #80432 | keep_canonical | planned | canonical | Best surviving canonical issue for outbound Matrix sibling-account mention rendering; keep open for maintainer product decision. |
| #45184 | route_security | planned | security_sensitive | Security-sensitive exact ref per deterministic validation; route only this issue to central OpenClaw security handling and do not mutate it through Clownfish cleanup. |
| #52146 | route_security | planned | security_sensitive | Security-sensitive linked ref; route only this item to central OpenClaw security handling and do not mutate it through Clownfish cleanup. |

## Needs Human

- none
