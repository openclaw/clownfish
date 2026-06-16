---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-590-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610224067"
workflow_run_id: "27610224067"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610224067"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.475Z"
canonical: "https://github.com/openclaw/openclaw/issues/90953"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90953"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-590-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610224067](https://github.com/openclaw/clownfish/actions/runs/27610224067)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90953

## Summary

The hydrated artifact shows #90953 is still the live canonical issue for the localized WSL version parsing/install failure. #91089 is a related, excluded overlap PR for drift detection, not the immediate release-promotion fix for #90953; failing checks and merge-disabled job settings prevent merge/fixed-by-candidate handling.

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
| #90953 | keep_canonical | planned | canonical | #90953 remains the best live canonical thread; there is no hydrated merged candidate fix and the remaining resolution is maintainer release promotion/verification outside this close-only job. |
| #91089 | keep_related | skipped | related | #91089 is related context and excluded overlap, not the canonical immediate fix path for #90953; failing checks plus disabled merge/fix permissions block any stronger action. |

## Needs Human

- none
