---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-264-plan-wave-20260615-a"
mode: "plan"
run_id: "27518786330"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518786330"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.119Z"
canonical: "#89899"
canonical_issue: "#89425"
canonical_pr: "#89899"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-264-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518786330](https://github.com/openclaw/clownfish/actions/runs/27518786330)

Workflow conclusion: success

Worker result: planned

Canonical: #89899

## Summary

Plan-mode classification only. No GitHub mutations were performed. #89899 remains the best live canonical fix path for the speech-core bundled runtime facade/package mismatch; #89425 is the source issue covered by that candidate fix; #92355 is superseded by #89899; #88853 is a related mixed branch with separate poll-scope work; #92240 is already closed.

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
| #89899 | keep_canonical | planned | canonical | #89899 is the narrowest hydrated open fix for the root speech-core packaged-facade mismatch and has the strongest proof/check state among the candidate PRs. |
| #89425 | close_fixed_by_candidate | planned | fixed_by_candidate | The issue is clearly covered by the canonical candidate fix #89899; this is a planned recommendation only and requires applicator live-state revalidation before any close/comment. |
| #92355 | close_superseded | planned | superseded | #92355 is a same-root-cause PR with a weaker installed-package fix strategy; #89899 is the clearer canonical repair and should preserve contributor attribution if superseding this branch. |
| #88853 | keep_related | planned | related | Related mixed branch; do not close or merge in this cluster because it contains non-speech-core poll/schema work and failing checks. |
| #92240 | keep_closed | skipped | duplicate | Already closed duplicate context; no mutation is valid or needed. |

## Needs Human

- none
