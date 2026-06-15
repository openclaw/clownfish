---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T060018-173"
mode: "plan"
run_id: "27528129978"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27528129978"
head_sha: "28ca7608fe04d5b128115fe66d3fb3222e904399"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T06:29:42.388Z"
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
needs_human_count: 6
---

# pr-inventory-needs_proof-20260615T060018-173

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27528129978](https://github.com/openclaw/clownfish/actions/runs/27528129978)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected. Closed PRs stay closed, the security-sensitive PR is routed to central security handling, one hydrated open PR needs maintainer/product proof before any merge path, and five listed candidates need a refreshed preflight because live state was unavailable due GitHub API rate limiting.

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
| Needs human | 6 |

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
| #63578 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation should be planned. |
| #63571 | needs_human | planned | needs_human | Hydrated open feature/config PR needs maintainer judgment and real behavior proof before merge; close, merge, and fix actions are not allowed or not safe in this plan. |
| #63593 | keep_closed | skipped | superseded | Already closed as superseded; #92911 is mentioned as evidence only because it was not hydrated. |
| #63633 | keep_closed | skipped | superseded | Already closed after durable review; any remaining SOCKS proxy work belongs in a refreshed, separately hydrated path. |
| #63924 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope and should be handled by central OpenClaw security flow. |
| #62545 | needs_human | planned | needs_human | Live state unavailable; re-run preflight before deciding or mutating this listed candidate. |
| #65381 | needs_human | planned | needs_human | Live state unavailable; re-run preflight before deciding or mutating this listed candidate. |
| #63636 | needs_human | planned | needs_human | Live state unavailable; re-run preflight before deciding or mutating this listed candidate. |
| #64832 | needs_human | planned | needs_human | Live state unavailable; re-run preflight before deciding or mutating this listed candidate. |
| #63662 | needs_human | planned | needs_human | Live state unavailable; re-run preflight before deciding or mutating this listed candidate. |

## Needs Human

- #63571 requires maintainer/product judgment and real behavior proof before any merge path.
- #62545 needs refreshed hydration; live state unavailable in the preflight artifact.
- #65381 needs refreshed hydration; live state unavailable in the preflight artifact.
- #63636 needs refreshed hydration; live state unavailable in the preflight artifact.
- #64832 needs refreshed hydration; live state unavailable in the preflight artifact.
- #63662 needs refreshed hydration; live state unavailable in the preflight artifact.
