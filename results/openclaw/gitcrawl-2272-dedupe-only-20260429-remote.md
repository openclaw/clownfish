---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2272-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132452761"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132452761"
head_sha: "8b6ee7ffa77533bbae10cb97289fd78b142edfab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.956Z"
canonical: "https://github.com/openclaw/openclaw/issues/43567"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43567"
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2272-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132452761](https://github.com/openclaw/clownfish/actions/runs/25132452761)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43567

## Summary

Classified the hydrated open candidates against current main b83b639287298a67326f8c17cf1c1635b1d19e3d. The closed representative #54408 is not a valid live canonical; #43567 is the best hydrated open canonical for the internal memory-flush/system-message visibility and provenance family. No close actions are planned because the open candidates are related subfamilies with distinct root causes or unmerged/conflicting fix paths.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #54408 | keep_closed | skipped | superseded | Closed representative retained as historical evidence only; #43567 is the live open tracker for the same internal-system-message visibility/provenance family. |
| #43567 | keep_canonical | planned | canonical | Best open canonical for the representative memory-flush/internal-system-message leak family. |
| #45488 | keep_related | planned | related | Related compaction prompt/provenance family; not a true duplicate and not safe to close. |
| #53008 | keep_related | planned | related | Related memoryFlush/compaction runtime issue with unique lane-blocking scope. |
| #55694 | keep_related | planned | related | Related retry-loop symptom family, but distinct root cause and reproduction path. |
| #60858 | keep_related | planned | related | Related compaction reliability issue with unique guard/input-state scope. |
| #63335 | keep_related | planned | related | Related long-turn retry/stuck-session family, not a duplicate. |
| #63892 | keep_related | planned | related | Related compaction scheduler/accounting subfamily with open conflicting candidate PRs. |
| #66126 | keep_related | planned | related | Related prompt replay/compaction-resume issue; unique root cause remains. |
| #66263 | keep_related | planned | related | Related compaction accounting issue with distinct implementation surface. |
| #68401 | keep_related | planned | related | Related nonblocking-compaction design issue; keep open. |
| #68470 | keep_related | planned | related | Related compaction trigger/accounting issue; candidate PR ref remains evidence only because it is not hydrated as a primary item. |

## Needs Human

- none
