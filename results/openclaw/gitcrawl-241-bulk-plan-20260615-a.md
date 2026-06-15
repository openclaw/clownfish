---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-241-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520859728"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520859728"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.925Z"
canonical: "#87136"
canonical_issue: "#87136"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-241-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520859728](https://github.com/openclaw/clownfish/actions/runs/27520859728)

Workflow conclusion: success

Worker result: planned

Canonical: #87136

## Summary

Plan-only classification: keep #87136 as the live canonical issue for percentage/relative compaction threshold semantics, keep #81856 as related but not a duplicate because it asks for an absolute-token trigger contract, and route #87932 to central security handling because the job explicitly lists it as a security-signal ref.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #87136 | keep_canonical | planned | canonical | #87136 remains the best live canonical for the relative/percentage compaction threshold family. |
| #81856 | keep_related | planned | related | Same compaction threshold area and product-decision surface, but not a true duplicate of the percentage-string canonical because the requested semantics differ. |
| #87932 | route_security | planned | security_sensitive | Exact job-listed security-signal ref; quarantine this item only and continue classifying unrelated non-security issues. |

## Needs Human

- none
