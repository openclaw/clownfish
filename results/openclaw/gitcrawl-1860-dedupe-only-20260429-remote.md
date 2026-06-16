---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1860-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585128741"
workflow_run_id: "27585128741"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585128741"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:20:07.482Z"
canonical: "#61288"
canonical_issue: "#61288"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1860-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585128741](https://github.com/openclaw/clownfish/actions/runs/27585128741)

Workflow conclusion: success

Worker result: planned

Canonical: #61288

## Summary

Hydrated preflight state shows #61288 is still the closed historical canonical for Bailian/DashScope streaming token capture. No open replacement canonical is safe to choose. #41645 is security-sensitive and should be routed to central security handling. #55678 is related provider-usage product work, not a duplicate of #61288. #43009, #44845, and #63425 are already closed and must not receive close actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #61288 | keep_closed | skipped |  | Historical canonical is already closed; no closure or mutation is valid. |
| #41645 | route_security | planned | security_sensitive | Per-user token accounting has identity-linked usage, retention, and authorization implications; quarantine this exact item for central OpenClaw security/product handling. |
| #43009 | keep_closed | skipped |  | Already closed in live preflight state; no mutation is valid. |
| #44845 | keep_closed | skipped |  | Already closed in live preflight state; no mutation is valid. |
| #55678 | keep_related | planned | related | Related token-usage area, but materially different root cause and product surface; leave open for provider-owner/product review rather than duplicate closeout. |
| #63425 | keep_closed | skipped |  | Already closed in live preflight state; no mutation is valid. |

## Needs Human

- none
