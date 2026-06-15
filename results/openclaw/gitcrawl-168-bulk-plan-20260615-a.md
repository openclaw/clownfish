---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-168-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520812933"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520812933"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.902Z"
canonical: "#85126"
canonical_issue: "#85126"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-168-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520812933](https://github.com/openclaw/clownfish/actions/runs/27520812933)

Workflow conclusion: success

Worker result: planned

Canonical: #85126

## Summary

Read-only plan: keep #85126 as the live canonical issue for the wrong auto authProfileOverride/runtime fallback bug, quarantine security-sensitive #85311, keep already-closed #62710 closed, and keep #87957 as a related maintainer-owned resolver refactor rather than a duplicate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #85126 | keep_canonical | planned | canonical | #85126 is still the clearest open non-security canonical tracker for the current wrong-provider auto auth/runtime state bug. |
| #62710 | keep_closed | skipped | superseded | No close action is valid because the PR is already closed; retain as historical evidence and do not mutate it. |
| #85311 | route_security | planned | security_sensitive | Security-sensitive PR must be routed to central OpenClaw security handling and kept out of ProjectClownfish mutation. |
| #87957 | keep_related | planned | related | Same session/auth state family but a broader maintainer-owned refactor with distinct scope, so it should remain open and related rather than be closed as a duplicate. |

## Needs Human

- none
