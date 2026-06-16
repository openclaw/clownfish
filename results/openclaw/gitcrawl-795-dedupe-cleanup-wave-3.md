---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-795-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610223394"
workflow_run_id: "27610223394"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610223394"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.467Z"
canonical: "https://github.com/openclaw/openclaw/issues/77343"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77343"
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

# gitcrawl-795-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610223394](https://github.com/openclaw/clownfish/actions/runs/27610223394)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77343

## Summary

Classified #77343 as the live canonical issue. The hydrated linked PR #77361 is useful context for the fix path but was explicitly excluded as an existing-overlap ref and is not merge-ready due the real-behavior-proof failure and ClawSweeper human-review gate. No close, label, merge, or fix action is planned.

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
| #77343 | keep_canonical | planned | canonical | The bug remains open and real from the hydrated artifact and target checkout inspection; with fix, raise_pr, merge, and post-merge close blocked by job policy, the correct cluster action is to keep the canonical issue open. |
| #77361 | keep_related | skipped | related | #77361 is a relevant implementation path for #77343, but it is outside this cluster's actionable refs and remains blocked for proof/human-review, so this worker should not close, merge, repair, or label it. |

## Needs Human

- none
