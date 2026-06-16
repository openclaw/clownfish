---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156934-autonomous-smoke"
mode: "autonomous"
run_id: "27589624918"
workflow_run_id: "27589624918"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27589624918"
head_sha: "6a654d1757156670f15b7d53c36c840c3e903935"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T02:21:27.646Z"
canonical: "https://github.com/openclaw/openclaw/issues/8147"
canonical_issue: "https://github.com/openclaw/openclaw/issues/8147"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 2
---

# ghcrawl-156934-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27589624918](https://github.com/openclaw/clownfish/actions/runs/27589624918)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/8147

## Summary

Deterministic validation flagged #8147 and #86035 as security-sensitive, so both exact refs are quarantined with route_security. Closed duplicate context #39821 and #19859 remains non-mutating keep_closed. PR #73390 remains blocked from superseded closeout because the replacement path cannot proceed while the canonical/security-linked fix lane is routed to central security handling. The cluster-level fix lane is downgraded to needs_human; no executable fix artifact is emitted.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 2 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #73390 | close_superseded | skipped | superseded | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #8147 | route_security | planned | security_sensitive | Quarantine the exact canonical issue for central OpenClaw security handling before any further ProjectClownfish fix or closeout work. |
| #39821 | keep_closed | skipped | duplicate | Already closed duplicate; closure actions are invalid for closed live targets. |
| #19859 | keep_closed | skipped | duplicate | Already closed duplicate; no mutation should be planned. |
| #73390 | close_superseded | blocked | superseded | Supersede only after a replacement fix PR exists and the security-routed canonical path is cleared; candidate_fix must remain null until that PR is hydrated. |
| #86035 | route_security | planned | security_sensitive | Quarantine the exact linked issue for central OpenClaw security handling. |
| cluster:ghcrawl-156934-autonomous-smoke | needs_human | blocked | needs_human | Central security handling must decide whether and how the #8147/#86035-linked composer work can proceed before any ProjectClownfish replacement fix PR is planned. |

## Needs Human

- Security-routed #8147 blocks the canonical WebChat send-shortcut replacement fix lane; central OpenClaw security handling must clear or redirect the work before ProjectClownfish emits an executable fix artifact.
- Security-routed #86035 should be handled by central OpenClaw security triage and not closed or fixed from this cluster.
