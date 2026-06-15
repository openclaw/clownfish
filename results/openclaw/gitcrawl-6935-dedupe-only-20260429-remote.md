---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-6935-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136461732"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136461732"
head_sha: "421ddc981e12f60cbb3ea60e4527004e3a033e79"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.278Z"
canonical: "https://github.com/openclaw/openclaw/pull/48732"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/48732"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-6935-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136461732](https://github.com/openclaw/clownfish/actions/runs/25136461732)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/48732

## Summary

Classified hydrated cluster refs without GitHub mutation. #48732 remains the canonical open PR for the healthcheck local-timezone rule; #68755 is a separate related firewall-probe PR, not a duplicate; #30361 is quarantined to central security handling; already-closed context refs remain untouched.

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
| #48732 | keep_canonical | planned | canonical | #48732 is still the best live canonical path for the timezone-display root cause, but this dedupe-only job cannot merge or repair it. |
| #68755 | keep_related | planned | related | #68755 should remain open as a related healthcheck/firewall subcluster, not closed under the timezone canonical. |
| #30361 | route_security | planned | security_sensitive | #30361 is out of scope for Clownfish backlog mutation and should be handled by central OpenClaw security triage. |
| #48688 | keep_closed | skipped | fixed_by_candidate | Already-closed refs must not receive close actions. |
| #48691 | keep_closed | skipped | related | Already-closed refs must not receive close actions. |
| #48733 | keep_closed | skipped | related | Already-closed refs must not receive close actions. |

## Needs Human

- none
