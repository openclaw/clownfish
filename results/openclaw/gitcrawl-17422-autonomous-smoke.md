---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-17422-autonomous-smoke"
mode: "autonomous"
run_id: "27488708525"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27488708525"
head_sha: "a975481a4e4fa45b6bcfc62032034df3e50f2da9"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-14T04:53:44.078Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-17422-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27488708525](https://github.com/openclaw/clownfish/actions/runs/27488708525)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Hydrated live state materially contradicts the job inventory: #660 and #672 are closed and unrelated to the acceptLicenseTerms ClawHub publish cluster, and the preflight artifact has no open items. No close, merge, or fix artifact is safe from this job without a refreshed cluster plan.

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
| Needs human | 1 |

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
| cluster:gitcrawl-17422-autonomous-smoke | needs_human | blocked | needs_human | Cluster changed materially or was generated against mismatched refs; canonical choice and fix/closure path are unclear. |
| #660 | keep_closed | skipped |  | Already closed and not a safe canonical for the job's stated root cause. |
| #672 | keep_closed | skipped |  | The job's only listed open candidate is already closed and unrelated in hydrated live state. |

## Needs Human

- Regenerate or re-plan cluster gitcrawl-17422-autonomous-smoke from current GitHub refs before any mutation: the hydrated live refs do not match the job's acceptLicenseTerms inventory and there is no open canonical or candidate to classify.
