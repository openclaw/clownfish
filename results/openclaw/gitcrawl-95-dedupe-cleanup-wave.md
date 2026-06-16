---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-95-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608150591"
workflow_run_id: "27608150591"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608150591"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:36:29.402Z"
canonical: "https://github.com/openclaw/openclaw/pull/92147"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/92147"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-95-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608150591](https://github.com/openclaw/clownfish/actions/runs/27608150591)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92147

## Summary

Classified the only still-open cluster item, #92147, as the current canonical PR. The prior representative #92439 and related refs are already closed and kept as historical evidence only. No close, merge, label, or fix-PR actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #92147 | keep_canonical | planned | canonical | #92147 is the clearest surviving canonical path for the strict OpenAI Responses instructions-placement compatibility work; it remains open for maintainer review. |
| #92400 | keep_closed | skipped | superseded | Already closed as superseded by #92147; retained only as context evidence. |
| #92439 | keep_closed | skipped | superseded | Closed unmerged representative is historical evidence only; #92147 replaces it as the open canonical PR. |
| #92436 | keep_closed | skipped | superseded | Closed unmerged overlapping PR is superseded by the open canonical path #92147. |
| #92437 | keep_closed | skipped | superseded | Closed unmerged overlapping PR is superseded by the open canonical path #92147. |
| #60385 | keep_closed | skipped | related | Merged related prior work is context, not the canonical remaining path for this cluster. |

## Needs Human

- none
