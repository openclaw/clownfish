---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1895-autonomous-bulk-20260622a"
mode: "autonomous"
run_id: "27958790452"
workflow_run_id: "27958790452"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27958790452"
head_sha: "6df12705136a41273cee813d009a7bf18ef7423f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T14:11:22.830Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1895-autonomous-bulk-20260622a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27958790452](https://github.com/openclaw/clownfish/actions/runs/27958790452)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

No live non-overlap canonical PR remains for this cluster. The job's original candidates #48270, #53561, and #58840 are already closed in the hydrated preflight; the only open hydrated refs are broad/overlap context (#41372 and #54692), so this pass plans non-mutating classification only plus item-scoped security routing for preflight-marked security refs. No tests were run because no merge, close, or fix artifact is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #48270 | keep_closed | skipped | superseded | Already closed; closed refs are historical evidence only. |
| #53561 | keep_closed | skipped | superseded | Already closed; closed refs are historical evidence only. |
| #58840 | keep_closed | skipped | superseded | Already closed; closed refs are historical evidence only. |
| #41372 | keep_related | planned | related | Related umbrella evidence only; not safe to close or turn into a cluster fix artifact. |
| #54692 | keep_related | planned | related | Related overlap PR with failing proof; not this cluster's canonical path. |
| #48285 | route_security | planned | security_sensitive | Central security policy requires quarantining exact hydrated security-sensitive refs. |
| #50751 | route_security | planned | security_sensitive | Central security policy requires quarantining exact hydrated security-sensitive refs. |
| #65641 | route_security | planned | security_sensitive | Central security policy requires quarantining exact hydrated security-sensitive refs. |

## Needs Human

- none
