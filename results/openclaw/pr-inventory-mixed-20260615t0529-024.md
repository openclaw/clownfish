---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-024"
mode: "plan"
run_id: "27526355633"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526355633"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.289Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# pr-inventory-mixed-20260615T0529-024

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526355633](https://github.com/openclaw/clownfish/actions/runs/27526355633)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. Security-sensitive PRs are routed to central security handling. Non-security PRs are kept, closed only where already closed, or flagged for specific maintainer judgment when protected labels or maintainer signals block automated cleanup.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #59835 | needs_human | planned | needs_human | Substantively superseded by #86578, but protected maintainer label and maintainer-signal gate block automated close planning. |
| #78521 | route_security | planned | security_sensitive | Security-boundary PR; out of scope for Clownfish backlog cleanup. |
| #78392 | route_security | planned | security_sensitive | Security remediation PR; out of scope for Clownfish cleanup. |
| #82880 | route_security | planned | security_sensitive | Security-boundary PR; out of scope for Clownfish cleanup. |
| #78334 | route_security | planned | security_sensitive | Security automation hardening PR; out of scope for Clownfish cleanup. |
| #74302 | needs_human | planned | needs_human | Maintainer signal exists, but merge is blocked by job policy and current evidence requires maintainer review. |
| #84853 | keep_related | planned | related | Related active non-security PR; no safe close or merge action in this plan-mode inventory job. |
| #86078 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation planned. |
| #86168 | close_superseded | planned | superseded | Superseded by hydrated open replacement #88531; closure comment preserves source PR credit and reopen path. |
| #86175 | route_security | planned | security_sensitive | Security-sensitive possible data exposure; out of scope for Clownfish cleanup. |

## Needs Human

- #59835: maintainer-protected stale/superseded PR needs maintainer judgment before closeout against #86578.
- #74302: maintainer automerge signal exists, but merge is blocked in this job and latest ClawSweeper evidence requires maintainer review.
