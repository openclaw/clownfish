---
repo: "openclaw/openclaw"
cluster_id: "live-pr-inventory-20260621T1430-001"
mode: "plan"
run_id: "27907383699"
workflow_run_id: "27907383699"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27907383699"
head_sha: "366a80239ced7494a64c3f420f9e1eb37c44239f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T14:29:18.579Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# live-pr-inventory-20260621T1430-001

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27907383699](https://github.com/openclaw/clownfish/actions/runs/27907383699)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only result. No GitHub mutations are permitted. None of the five listed PRs has complete merge preflight: all are missing a passed Codex /review merge gate, several are draft, and #89142 has a failing Real behavior proof check. The prior fix_needed actions were not safely executable because this result has no complete bounded fix_artifact; the PRs are retained as related non-mutating classifications for maintainer follow-up or a later executable repair plan.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #89898 | keep_related | planned | related | Useful narrow PR, but draft status, missing merge preflight, maintainer_can_modify=false, and absence of a complete executable fix_artifact block a fix_needed or merge action. Retain as related for maintainer follow-up while preserving source PR credit. |
| #89880 | keep_related | planned | related | Useful narrow PR, but draft status, missing merge preflight, maintainer_can_modify=false, and absence of a complete executable fix_artifact block a fix_needed or merge action. Retain as related for maintainer follow-up while preserving source PR credit. |
| #89860 | keep_related | planned | related | Useful narrow PR, but draft status, missing merge preflight, maintainer_can_modify=false, and absence of a complete executable fix_artifact block a fix_needed or merge action. Retain as related for maintainer follow-up while preserving source PR credit. |
| #89747 | keep_related | planned | related | Useful narrow PR, but draft status, missing merge preflight, maintainer_can_modify=false, and absence of a complete executable fix_artifact block a fix_needed or merge action. Retain as related for maintainer follow-up while preserving source PR credit. |
| #89142 | keep_related | planned | related | Useful contributor PR with editable branch, but failing proof, missing merge preflight, and absence of a complete executable fix_artifact block a fix_needed or merge action. Retain as related for maintainer or later repair follow-up. |

## Needs Human

- none
