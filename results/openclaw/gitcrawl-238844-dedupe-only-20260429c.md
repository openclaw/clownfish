---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238844-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107731811"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107731811"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.656Z"
canonical: "https://github.com/openclaw/openclaw/issues/48238"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48238"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238844-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107731811](https://github.com/openclaw/clownfish/actions/runs/25107731811)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/48238

## Summary

No closure, merge, or fix actions are safe for this dedupe-only cluster. The hydrated umbrella issue #48238 is the best canonical tracker; #48278, #48293, #48312, #48335, #48350, and #48368 are useful staged implementation PRs with distinct scopes, draft or failing-check blockers, and no duplicate/superseded closeout target.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #48238 | keep_canonical | planned | canonical | #48238 is the broad live tracker for the stacked compaction guard work; it should remain open. |
| #48278 | keep_related | planned | related | Keep as the prerequisite config PR in the #48238 implementation stack; do not close useful contributor work. |
| #48293 | keep_related | planned | related | Keep as the detector layer in the related stacked series; it has unique scope and is not a duplicate of the scorer or validator PRs. |
| #48312 | keep_related | planned | related | Keep as the scorer-layer implementation candidate under #48238; it is not merge-ready and should not be used to close sibling staged PRs. |
| #48335 | keep_related | planned | related | Keep as a related runtime-hook stage with unique work; no high-confidence duplicate or superseded closeout is available. |
| #48350 | keep_related | planned | related | Keep as a related validator stage with unique scope; it should not be closed as a duplicate or superseded by the scorer/runtime-hook PRs. |
| #48368 | keep_related | planned | related | Keep as a related follow-up escalation stage; it is not part of the closeable dedupe surface for this cluster. |

## Needs Human

- none
