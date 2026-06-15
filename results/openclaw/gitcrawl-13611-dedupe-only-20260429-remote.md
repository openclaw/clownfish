---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13611-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109721251"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109721251"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.736Z"
canonical: "https://github.com/openclaw/openclaw/issues/43300"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43300"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13611-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109721251](https://github.com/openclaw/clownfish/actions/runs/25109721251)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43300

## Summary

Autonomous classification used the hydrated preflight artifact at main 9881a808f2fc0d5302f98a040a9efaad00336097. The closed representative #17761 is obsolete; #43300 is the current open trusted-proxy/internal-self-connection canonical. #50630/#50631 are quarantined because the hydrated issue and PR explicitly frame a CVSS/gateway-auth boundary vulnerability. #57241 is related Tailscale gateway work but not a duplicate. No close/comment/label mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #43300 | keep_canonical | planned | canonical | Closed #17761 cannot be the live canonical. #43300 is the clearest open canonical for the trusted-proxy internal self-connection root family and should remain open. |
| #50630 | route_security | planned | security_sensitive | The hydrated issue text contains explicit vulnerability/CVSS and gateway-auth boundary claims, so this item is routed to central OpenClaw security handling with no mutation. |
| #50631 | route_security | planned | security_sensitive | The PR implements the security-shaped #50630 report, so it is quarantined with the issue and left for central security/review handling. |
| #57241 | keep_related | planned | related | Related gateway/Tailscale work, but not a true duplicate of the trusted-proxy fallback canonical and not safe to close in this cluster. |

## Needs Human

- none
