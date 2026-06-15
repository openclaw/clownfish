---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-330-plan-wave-20260615-a"
mode: "plan"
run_id: "27518808154"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518808154"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.135Z"
canonical: "#49046"
canonical_issue: "#49046"
canonical_pr: "#92863"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-330-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518808154](https://github.com/openclaw/clownfish/actions/runs/27518808154)

Workflow conclusion: success

Worker result: planned

Canonical: #49046

## Summary

Read-only plan: keep #49046 as the live canonical docs-gap issue. Keep #92863 as the focused contributor PR candidate for that issue, but do not recommend merge or closeout in this job because merge/fix actions are blocked and the PR lacks merge preflight. Hydrated linked issues #13219 and #92338 are related usage-observability work with distinct scope and should not be forced into the #49046 duplicate family.

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
| #49046 | keep_canonical | planned | canonical | Best live canonical for the narrow docs gap: exact model.usage diagnostic event field names are not documented for parser authors. |
| #92863 | keep_related | planned | fixed_by_candidate | Focused candidate fix for #49046, but this plan-mode job cannot merge or repair it and lacks the required merge preflight. |
| #13219 | keep_related | planned | related | Related usage-observability family, but distinct root cause and scope from the #49046 docs field-name gap. |
| #92338 | keep_related | planned | related | Related diagnostics area, but it is a distinct runtime bug report with unverified reproduction and should not be closed or folded into the #49046 docs issue. |

## Needs Human

- none
