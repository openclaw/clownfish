---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T060018-075"
mode: "plan"
run_id: "27527886361"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27527886361"
head_sha: "a2e72c1643ea3846434c7f2e5f7cadde5c103b50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T06:24:18.764Z"
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

# pr-inventory-needs_proof-20260615T060018-075

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27527886361](https://github.com/openclaw/clownfish/actions/runs/27527886361)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification completed for 10 listed candidates. No GitHub mutations are planned directly by the worker. Open non-security PRs are kept for further proof/review because they are not merge-ready; already-closed PRs are kept closed; security-sensitive PRs are routed to central OpenClaw security handling.

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
| #72829 | keep_related | planned | related | Open non-security PR with a plausible bug/provider fix path, but proof and merge readiness are not established. |
| #73200 | keep_closed | skipped | superseded | Historical context only; no close action is valid for an already-closed PR. |
| #73382 | keep_related | planned | related | Open non-security provider fix candidate, but not merge-ready and not eligible for fix/merge in this plan job. |
| #73171 | keep_related | planned | related | Open non-security bugfix candidate with unresolved review feedback and failing proof; keep for follow-up rather than close. |
| #73294 | keep_related | planned | related | Open non-security message-delivery PR with a plausible narrow scope, but proof and merge readiness are not established. |
| #73363 | route_security | planned | security_sensitive | Security-sensitive item is read-only for this workflow even though the PR is already closed. |
| #73311 | keep_related | planned | related | Open non-security UI feature PR with unresolved review/proof blockers; keep for maintainer or author follow-up. |
| #73295 | keep_closed | skipped | superseded | Historical context only; no close action is valid for an already-closed PR. |
| #73883 | route_security | planned | security_sensitive | Open security-sensitive PR must be routed to central OpenClaw security handling, not classified for cleanup or merge. |
| #73345 | keep_closed | skipped | related | Historical context only; no close action is valid for an already-closed PR. |

## Needs Human

- none
