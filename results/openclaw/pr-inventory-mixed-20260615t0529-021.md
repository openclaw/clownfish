---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-021"
mode: "plan"
run_id: "27526351836"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526351836"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.261Z"
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
needs_human_count: 0
---

# pr-inventory-mixed-20260615T0529-021

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526351836](https://github.com/openclaw/clownfish/actions/runs/27526351836)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification for 10 job-listed PRs. No shared canonical is chosen because the job is an inventory shard, not a dedupe cluster. Closed candidates are kept closed, security-sensitive open candidates are routed to central security handling, and open non-security candidates are kept as independent PRs with their current blockers noted.

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
| #83612 | keep_independent | planned | independent | Standalone open PR with maintainer-review and CI blockers; no close, merge, or shared canonical action is appropriate in plan mode. |
| #83633 | keep_closed | skipped | superseded | Already closed; no mutation should be planned. |
| #83760 | keep_independent | planned | independent | Standalone open feature/fix PR with proof and review blockers; keep it independent for maintainer follow-up. |
| #84161 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish backlog-cleanup mutation scope and should be routed to central OpenClaw security handling. |
| #85598 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no mutation should be planned. |
| #85136 | route_security | planned | security_sensitive | Security-sensitive workflow/automation item is out of ProjectClownfish mutation scope and should be routed to central OpenClaw security handling. |
| #85055 | keep_independent | planned | independent | Standalone open PR with unresolved automated review findings; keep independent for author/maintainer follow-up. |
| #85751 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation should be planned. |
| #74068 | keep_independent | planned | independent | Standalone draft PR with proof/review blockers; keep independent for owner follow-up. |
| #77325 | keep_independent | planned | independent | Standalone open fix PR with remaining changes/check blockers; keep independent and do not close or merge in this plan shard. |

## Needs Human

- none
