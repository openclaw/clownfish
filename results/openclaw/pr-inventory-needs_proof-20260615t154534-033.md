---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-033"
mode: "plan"
run_id: "27560323972-1-36"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T09:37:13.884Z"
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
needs_human_count: 6
---

# pr-inventory-needs_proof-20260615T154534-033

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No GitHub mutations are planned. Hydrated open PRs are classified conservatively as independent or related inventory items; one already-closed PR is skipped; five listed candidates were absent from the preflight artifact and require hydration before classification.

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
| Needs human | 6 |

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
| #92284 | keep_independent | planned | independent |  |
| #92723 | needs_human | planned | needs_human | The hydrated diff does not obviously match the reported Slack runtime bug, so this specific PR needs human review before any close or label action. |
| #92726 | keep_related | planned | related |  |
| #91682 | keep_independent | planned | independent |  |
| #92517 | keep_independent | planned | independent |  |
| #92755 | keep_related | planned | related |  |
| #91800 | keep_independent | planned | independent |  |
| #92763 | needs_human | blocked | needs_human | Needs a refreshed preflight artifact before classification or any mutation planning. |
| #92774 | needs_human | blocked | needs_human | Needs a refreshed preflight artifact before classification or any mutation planning. |
| #92756 | keep_related | planned | related |  |
| #92762 | keep_independent | planned | independent |  |
| #92759 | keep_closed | skipped | superseded |  |
| #91668 | keep_independent | planned | independent |  |
| #88192 | keep_independent | planned | independent |  |
| #90216 | keep_independent | planned | independent |  |
| #88850 | keep_independent | planned | independent |  |
| #88883 | keep_independent | planned | independent |  |
| #92822 | needs_human | blocked | needs_human | Needs a refreshed preflight artifact before classification or any mutation planning. |
| #48396 | keep_independent | planned | independent |  |
| #92831 | needs_human | blocked | needs_human | Needs a refreshed preflight artifact before classification or any mutation planning. |
| #92682 | keep_related | planned | related |  |
| #92420 | keep_independent | planned | independent |  |
| #92716 | keep_related | planned | related |  |
| #92660 | keep_independent | planned | independent |  |
| #92770 | needs_human | blocked | needs_human | Needs a refreshed preflight artifact before classification or any mutation planning. |

## Needs Human

- #92723 requires maintainer technical-correctness judgment because the hydrated diff does not match the claimed Slack runtime bug.
- #92763 was listed in the job but absent from the preflight artifact.
- #92774 was listed in the job but absent from the preflight artifact.
- #92822 was listed in the job but absent from the preflight artifact.
- #92831 was listed in the job but absent from the preflight artifact.
- #92770 was listed in the job but absent from the preflight artifact.
