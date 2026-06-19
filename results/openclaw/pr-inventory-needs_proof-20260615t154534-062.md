---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-062"
mode: "plan"
run_id: "27560323972-1-65"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T05:41:39.806Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-needs_proof-20260615T154534-062

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The preflight artifact marks all hydrated refs non-security-sensitive and this shard has no shared canonical, so each open PR is kept as an independent review/proof item with no GitHub mutation planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
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
| #84987 | keep_independent | planned | independent | Standalone PR needing proof/review; no closure or merge action is safe in plan mode. |
| #85833 | keep_independent | planned | independent | Standalone focused PR; keep open for maintainer review because merge/fix actions are blocked. |
| #85932 | keep_independent | planned | independent | Keep as an independent PR needing real behavior proof. |
| #92751 | keep_independent | planned | independent | Non-mutating classification only because hydrated live state is unavailable in the prompt artifact. |
| #86053 | keep_independent | planned | independent | Standalone PR with proof supplied; keep open because merge is not allowed in this job. |
| #86064 | keep_independent | planned | independent | Standalone implementation PR; keep open for normal review/merge process outside this plan job. |
| #86079 | keep_independent | planned | independent | Keep as an independent proof-supplied PR; no route_security or merge action is supported by the artifact/job gates. |
| #86168 | keep_independent | planned | independent | Keep open for proof and review-bot follow-up; no close/merge classification is justified. |
| #86175 | keep_independent | planned | independent | Standalone PR with failing checks; keep open for author/maintainer repair rather than close. |
| #86421 | keep_independent | planned | independent | Keep as an independent feature/fix PR needing real behavior proof. |
| #92692 | keep_independent | planned | independent | Non-mutating classification only; keep independent pending hydration. |
| #86460 | keep_independent | planned | independent | Draft broad PR should remain open as an independent work item. |
| #86491 | keep_independent | planned | independent | Proof-supplied standalone PR; keep independent for maintainer review. |
| #86605 | keep_independent | planned | independent | Standalone provider feature PR; keep open for normal review because merge/fix actions are blocked. |
| #86622 | keep_independent | planned | independent | Keep independent for proof; no closure/merge action is justified. |
| #86681 | keep_independent | planned | independent | Keep independent; close-low-signal is disabled and no hydrated duplicate/superseding path exists. |
| #86716 | keep_independent | planned | independent | Standalone proof-supplied Discord PR; keep independent. |
| #86749 | keep_independent | planned | independent | Keep independent with failing dependency/proof gates. |
| #86936 | keep_independent | planned | independent | Keep independent; failing Windows check blocks merge/fixed-by-candidate closeout. |
| #86955 | keep_independent | planned | independent | Keep independent as a broad standalone PR needing proof and technical review. |
| #87046 | keep_independent | planned | independent | Standalone proof-supplied PR; keep independent. |
| #88810 | keep_independent | planned | independent | Non-mutating classification only; keep independent pending hydration. |
| #87083 | keep_independent | planned | independent | Standalone proof-supplied PR; keep independent. |
| #87088 | keep_independent | planned | independent | Non-mutating classification only; keep independent pending hydration. |
| #87092 | keep_independent | planned | independent | Keep independent because low-signal close is disabled and live hydration is unavailable. |

## Needs Human

- none
