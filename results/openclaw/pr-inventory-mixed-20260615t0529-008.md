---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-008"
mode: "plan"
run_id: "27526336314"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526336314"
head_sha: "57af288206309caab74909b4675b5447af9d7915"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.219Z"
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
needs_human_count: 1
---

# pr-inventory-mixed-20260615T0529-008

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526336314](https://github.com/openclaw/clownfish/actions/runs/27526336314)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for 10 listed PRs. No shared canonical was selected. Closed listed PRs are kept closed, three open security-sensitive PRs are routed to central security handling, one open non-security PR is kept independent pending proof, and one maintainer-owned draft PR needs human maintainer review.

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
| #83203 | keep_independent | planned | independent | Open non-security candidate with focused code, but proof gate is failing and no close/merge condition is satisfied. |
| #83240 | keep_closed | skipped | fixed_by_candidate | Already closed before this plan run; no mutation should be emitted. |
| #83363 | keep_closed | skipped | fixed_by_candidate | Already closed before this plan run; no mutation should be emitted. |
| #83436 | keep_closed | skipped | fixed_by_candidate | Already closed before this plan run; no mutation should be emitted. |
| #83446 | keep_closed | skipped | low_signal | Already closed before this plan run; no mutation should be emitted. |
| #83295 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for Clownfish backlog cleanup and should be routed centrally without close, merge, label, comment, or fix action. |
| #83537 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for Clownfish backlog cleanup and should be routed centrally without close, merge, label, comment, or fix action. |
| #83646 | keep_closed | skipped | fixed_by_candidate | Already closed before this plan run; no mutation should be emitted. |
| #83536 | needs_human | planned | needs_human | Maintainer-owned draft with active maintainer follow-up and unresolved review context requires maintainer judgment, not automated close/merge classification. |
| #83715 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for Clownfish backlog cleanup and should be routed centrally without close, merge, label, comment, or fix action. |

## Needs Human

- #83536 maintainer-owned draft PR has active maintainer proof/remediation comments and unresolved review context; maintainer judgment is required.
