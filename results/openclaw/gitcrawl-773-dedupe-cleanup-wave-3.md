---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-773-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610223112"
workflow_run_id: "27610223112"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610223112"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.461Z"
canonical: "https://github.com/openclaw/openclaw/issues/78729"
canonical_issue: "https://github.com/openclaw/openclaw/issues/78729"
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

# gitcrawl-773-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610223112](https://github.com/openclaw/clownfish/actions/runs/27610223112)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/78729

## Summary

Kept #78729 as the live canonical issue. The linked PR #78730 is useful context for the same gateway transcript bug, but it is excluded as existing-overlap context and is not merge/fixed-by-candidate ready because the Real behavior proof check is failing. No close, merge, label, or fix action is safe or allowed for this cluster.

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
| #78729 | keep_canonical | planned | canonical | Canonical issue remains live and unresolved on current main; no closeout target exists in this cluster. |
| #78730 | keep_related | skipped | related | Context-only linked PR for the canonical issue; keep open for its own overlap job or maintainer workflow, with no mutation from this cluster. |

## Needs Human

- none
