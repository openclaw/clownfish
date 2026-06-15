---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-107-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520780497"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520780497"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.880Z"
canonical: "#91460"
canonical_issue: "#91460"
canonical_pr: "#92613"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-107-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520780497](https://github.com/openclaw/clownfish/actions/runs/27520780497)

Workflow conclusion: success

Worker result: planned

Canonical: #91460

## Summary

Plan-mode classification only. #91460 remains the best live canonical for the invalid provider request schema report. #87651 is a separate earlier aggregate persisted-history issue fixed by merged #87639. #87912 is scoped to central security handling because the job marks it as a security-signal ref. #92315 is the same symptom family as #91460 with a candidate fix in #92613, but unique severity details and unresolved PR review make it related rather than safe duplicate closeout. #92613 is a plausible candidate fix path but remains non-mutating because merge/fix actions are blocked and maintainer review is still unresolved.

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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #87651 | close_fixed_by_candidate | planned | fixed_by_candidate |  |
| #87912 | route_security | planned | security_sensitive | Security-signal ref is out of scope for Clownfish backlog cleanup and should be handled by central OpenClaw security review. |
| #91460 | keep_canonical | planned | canonical |  |
| #92315 | keep_related | planned | related |  |
| #92613 | keep_related | planned | related |  |

## Needs Human

- none
