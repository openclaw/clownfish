---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156978-autonomous-smoke"
mode: "autonomous"
run_id: "27594977909"
workflow_run_id: "27594977909"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27594977909"
head_sha: "18b34d1bcbd8ea89da8bf1b22f08d918abdc8088"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T04:55:40.195Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156978-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27594977909](https://github.com/openclaw/clownfish/actions/runs/27594977909)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Hydrated preflight marks #40678 and #73402 security-sensitive, and deterministic validation also requires #38829 and #45388 to route through central security handling. #41964 and #43341 are already closed historical context only. Because the only live canonical/follow-up issue refs for the TUI transcript bug are now security-routed, no executable non-security fix lane is safe in this result; the cluster-level fix path is downgraded to maintainer/security triage.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #38829 | route_security | planned | security_sensitive | Validator security classification requires quarantining this exact issue ref for central OpenClaw security handling instead of keeping it as a non-security canonical target. |
| #40678 | route_security | planned | security_sensitive | Security-sensitive cross-channel observation request is outside Clownfish backlog cleanup; quarantine this exact ref for central OpenClaw security handling. |
| #41964 | keep_closed | skipped | superseded | Already closed historical PR; no mutation is valid. |
| #43341 | keep_closed | skipped | duplicate | Already closed duplicate context; no mutation is valid. |
| #45388 | route_security | planned | security_sensitive | Validator security classification requires quarantining this exact issue ref for central OpenClaw security handling instead of keeping it as a non-security related target. |
| #73402 | route_security | planned | security_sensitive | Security-sensitive PR cannot be merged, closed, repaired, or used as candidate_fix by Clownfish; quarantine this exact ref for central security handling. |
| cluster:ghcrawl-156978-autonomous-smoke | needs_human | blocked | needs_human | Cluster-level implementation must wait for central security/maintainer triage of the routed live issue and PR refs; no non-security fix artifact is safe to emit. |

## Needs Human

- Cluster-level fix path blocked: #38829 and #45388 must route_security per validator, while #40678 and #73402 are security-sensitive in hydrated preflight; no complete executable non-security fix artifact remains safe.
