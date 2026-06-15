---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-200-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520838580"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520838580"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.914Z"
canonical: "#92361"
canonical_issue: "#92361"
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

# gitcrawl-200-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520838580](https://github.com/openclaw/clownfish/actions/runs/27520838580)

Workflow conclusion: success

Worker result: planned

Canonical: #92361

## Summary

Read-only plan classification for cluster gitcrawl-200-bulk-plan-20260615-a. #92361 remains the live canonical issue. #92411 is the strongest non-security candidate fix path but is not merge-planned in this job because merge is blocked and merge preflight is incomplete. #92592 is explicitly listed by the job as a security-signal ref and is routed to central security handling without blocking unrelated classification.

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
| #92361 | keep_canonical | planned | canonical |  |
| #92411 | keep_related | planned | related | Keep as related candidate fix path for #92361, but do not plan merge or fixed-by-candidate closeout in this read-only job. |
| #92592 | route_security | planned | security_sensitive | Scoped quarantine per job-provided security-signal ref. |

## Needs Human

- none
