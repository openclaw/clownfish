---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-recent_active-20260615T154534-121"
mode: "plan"
run_id: "27560323972-1-122"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T17:11:47.661Z"
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
needs_human_count: 2
---

# pr-inventory-recent_active-20260615T154534-121

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. The job states this is not a dedupe cluster and the hydrated preflight artifact reports no security-sensitive items. No GitHub mutations, merge recommendations, or fix PRs are planned. Most open PRs are kept independently for normal maintainer review; two already-merged PRs are kept closed; two PRs need maintainer judgment because the hydrated artifact contains explicit decision signals.

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
| Needs human | 2 |

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
| #92040 | needs_human | planned | needs_human | Maintainer must choose the preferred approach; the competing PR is only mentioned in review evidence and is not hydrated as a primary item. |
| #92126 | keep_independent | planned | independent | Draft, focused, and independent; no closure or merge action is available in plan mode. |
| #91625 | keep_closed | skipped |  | Already merged before this plan result. |
| #91463 | keep_independent | planned | independent | Focused PR for its own issue, with no hydrated duplicate or superseding candidate in this shard. |
| #90267 | keep_independent | planned | independent | Independent maintainer-review candidate; no closure basis in this inventory shard. |
| #92227 | keep_independent | planned | independent | Independent PR requiring ordinary review rather than inventory closeout. |
| #90648 | keep_independent | planned | independent | Focused independent PR; review-bot gap blocks merge, not non-mutating classification. |
| #92237 | keep_independent | planned | independent | Independent bug-fix PR for normal review. |
| #92261 | keep_independent | planned | independent | Independent PR for normal maintainer review. |
| #90259 | keep_independent | planned | independent | Broad independent PR; no closeout or fix action is allowed by the job. |
| #92263 | keep_independent | planned | independent | Independent candidate; mergeability is clean but merge is blocked by job frontmatter. |
| #88796 | keep_independent | planned | independent | Independent PR for normal review. |
| #92283 | keep_independent | planned | independent | Independent PR for normal review. |
| #91644 | keep_independent | planned | independent | Large independent feature PR; no closeout basis in this inventory shard. |
| 91921 | keep_independent | planned | independent | Independent high-risk bug-fix PR for maintainer review, not inventory closeout. |
| #92339 | keep_independent | planned | independent | Independent PR; size and proof quality require normal review rather than automated closeout. |
| #92328 | keep_independent | planned | independent | Independent candidate; no hydrated target in this shard can be closed as superseded. |
| #92236 | keep_independent | planned | independent | Independent PR for normal review. |
| #92363 | keep_independent | planned | independent | Independent small PR; no closure basis in this inventory shard. |
| #92383 | keep_independent | planned | independent | Independent PR for normal review. |
| #88898 | keep_independent | planned | independent | Independent small PR; review-bot presence blocks merge proof, not classification. |
| #91889 | needs_human | planned | needs_human | Public SDK surface naming is a maintainer/product decision under the job's require_human_for maintainer_signal and technical_correctness_judgment gates. |
| #91776 | keep_independent | planned | independent | Independent iOS bug-fix PR for maintainer review. |
| #91768 | keep_closed | skipped |  | Already merged before this plan result. |
| #91977 | keep_independent | planned | independent | Independent PR for normal review. |

## Needs Human

- #92040 requires maintainer choice between generalized provider/API-family thinking routing and the unhydrated competing #92053 approach mentioned in review evidence.
- #91889 requires maintainer decision on whether accountId is the canonical public plugin SDK hook-context field name.
