---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-235-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520854055"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520854055"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.922Z"
canonical: "#91280"
canonical_issue: "#53250"
canonical_pr: "#91280"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-235-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520854055](https://github.com/openclaw/clownfish/actions/runs/27520854055)

Workflow conclusion: success

Worker result: planned

Canonical: #91280

## Summary

Plan-mode classification only. #83440 is the listed security-signal PR and should be quarantined to central security handling. #91280 remains the best live non-security canonical PR for the exec approval recovery guidance work linked to #53250, but it is not merge-ready because proof is failing and bot review still requests real behavior proof/shared-path follow-up.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #83440 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for Clownfish backlog cleanup; route only this PR and do not let it block classification of #91280. |
| #91280 | keep_canonical | planned | canonical | Best surviving non-security canonical path, but only a keep-canonical plan is safe because merge and fix actions are blocked by job frontmatter and current proof/review gates. |

## Needs Human

- none
