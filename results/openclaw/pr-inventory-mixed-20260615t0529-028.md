---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-028"
mode: "plan"
run_id: "27526360256"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526360256"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.335Z"
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

# pr-inventory-mixed-20260615T0529-028

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526360256](https://github.com/openclaw/clownfish/actions/runs/27526360256)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification using the provided preflight artifact as live state. No GitHub mutations are planned. Security-sensitive refs are routed item-by-item; already-closed refs are kept closed; open non-security PRs are kept related based on unresolved maintainer/review/proof blockers.

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
| #85359 | route_security | planned | security_sensitive | Security-sensitive item per preflight; quarantine this PR without close, merge, label, comment, or fix planning. |
| #85507 | keep_related | planned | related | Distinct Slack behavior change with proof and conflict blockers; no close-style action is justified in plan mode. |
| #85522 | keep_related | planned | related | Open non-security PR with useful focused code but unresolved proof/review blockers; classify without closure. |
| #85716 | route_security | planned | security_sensitive | Security-sensitive gateway/auth-adjacent item per preflight; quarantine this PR without other action. |
| #85747 | keep_related | planned | related | Broad, mixed-scope availability/session-state PR with proof blocker; keep related for maintainer follow-up rather than closing as duplicate. |
| #85746 | keep_closed | skipped | superseded | Already closed; no further action in plan mode. |
| #85828 | keep_related | planned | related | Focused feature PR with unresolved review/author/conflict state; keep related rather than close or merge. |
| #85866 | keep_related | planned | related | Open feature PR with supplied proof but broad auth-provider/session-state surface; keep related for maintainer review. |
| #85151 | keep_closed | skipped | fixed_by_candidate | Already closed after fixed-on-main determination; no further action in plan mode. |
| #83292 | keep_closed | skipped | security_sensitive | Already closed; security-sensitive historical context remains quarantined and receives no mutation. |

## Needs Human

- none
