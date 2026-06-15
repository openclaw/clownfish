---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14058-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142058551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142058551"
head_sha: "a0b870a07f2988db4b233d32e6ac2590b6afdb2d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.316Z"
canonical: "https://github.com/openclaw/openclaw/issues/23926"
canonical_issue: "https://github.com/openclaw/openclaw/issues/23926"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14058-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142058551](https://github.com/openclaw/clownfish/actions/runs/25142058551)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/23926

## Summary

Representative #9256 is security-sensitive and cannot be used for dedupe cleanup. #23926 is the best live non-security canonical for the skill install lifecycle hook gap; #45031 is related but broader scanner/policy product work. Security-shaped refs #9256, #10827, #18196, #18677, and #57535 are routed to central security handling. No close, merge, or fix actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #9256 | route_security | planned | security_sensitive | Security-shaped supply-chain threat claims are out of scope for Clownfish dedupe mutation and must be quarantined to central OpenClaw security handling. |
| #10827 | route_security | planned | security_sensitive | The issue contains explicit security-boundary and persistent compromise claims, so only a route_security action is appropriate. |
| #18196 | route_security | planned | security_sensitive | Open security enforcement PR with unresolved security review and failing checks belongs in central security handling, not dedupe closure or merge planning. |
| #18677 | route_security | planned | security_sensitive | The issue asks for security blocking against explicit exploit classes, so it should be quarantined rather than deduped or closed here. |
| #57535 | route_security | planned | security_sensitive | The report is explicitly security-sensitive and must be routed to central security handling without public dedupe mutation. |
| #23926 | keep_canonical | planned | canonical | #23926 is the clearest live non-security canonical for the install lifecycle hook gap after the original representative #9256 was quarantined. |
| #45031 | keep_related | planned | related | #45031 is related to #23926 but is not a true duplicate because it tracks broader built-in scanner and policy decisions. |
| #61557 | keep_closed | skipped | related | Already closed historical context; no mutation is valid. |

## Needs Human

- none
