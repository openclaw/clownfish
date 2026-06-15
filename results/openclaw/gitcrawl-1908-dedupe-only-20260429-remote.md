---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1908-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130808080"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130808080"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.886Z"
canonical: "https://github.com/openclaw/openclaw/issues/58775"
canonical_issue: "https://github.com/openclaw/openclaw/issues/58775"
canonical_pr: "https://github.com/openclaw/openclaw/pull/60860"
actions_total: 21
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1908-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130808080](https://github.com/openclaw/clownfish/actions/runs/25130808080)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/58775

## Summary

Preflight artifact at main f05b789736004a8ee93b7a8b44907b5f7f72ee1a showed no security-sensitive hydrated refs. The closed representative #48479 is obsolete for live routing; the current open canonical issue for the google-vertex auth/transport family is #58775, with #60860 as the active but not merge-ready implementation PR. Planned one high-confidence duplicate close for #62212 to #58775. All other open hydrated refs are kept open as related or independent because they carry distinct scope, unresolved review/check blockers, or separate follow-up work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 21 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #62212 | close_duplicate | blocked | duplicate | candidate fix is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48479 | keep_closed | skipped | superseded | Already closed refs are historical evidence only and must not receive closure actions. |
| #58775 | keep_canonical | planned | canonical | Best live canonical issue for the original google-vertex auth/transport family. |
| #60860 | keep_canonical | planned | canonical | Active canonical implementation path for #58775, but not merge-ready in this dedupe-only job. |
| #62212 | close_duplicate | planned | duplicate | High-confidence duplicate of the open canonical google-vertex ADC/auth transport issue. |
| #52648 | keep_related | planned | related | Related google-vertex auth family, but distinct proxychains reproduction and likely separate validation requirement. |
| #65023 | keep_related | planned | related | Related broad provider work, not a clean canonical fix or close target for this dedupe-only cluster. |
| #9409 | keep_related | planned | related | Related context-overflow subfamily; keep open for separate maintainer follow-up. |
| #9986 | keep_related | planned | related | Related model/context fallback feature, not a duplicate of the google-vertex canonical issue. |
| #39857 | keep_related | planned | fixed_by_candidate | Covered by an open candidate PR, but not closeable before the candidate lands. |
| #39859 | keep_related | planned | related | Useful open candidate for the context-window subfamily; keep open. |
| #41398 | keep_related | planned | related | Useful but not merge-ready, not safe to close without a replacement path, and outside this dedupe-only mutation scope. |
| #41517 | keep_related | planned | related | Focused but unresolved overlapping implementation; keep open for maintainer consolidation. |
| #41594 | keep_independent | planned | independent | Independent broad feature request; no dedupe close is appropriate. |
| #50619 | keep_related | planned | related | Related context-switch subfamily with unique product decisions. |
| #50719 | keep_independent | planned | independent | Independent local provider regression; keep open for a separate focused reproduction/fix path. |
| #51205 | keep_related | planned | related | Related but insufficiently specified model-switch report; keep open for reporter details. |
| #53578 | keep_independent | planned | independent | Independent Gemini CLI OAuth latency regression. |
| #56594 | keep_independent | planned | independent | Independent post-doctor/update 404 regression; keep open. |
| #58957 | keep_related | planned | related | Related context-management subfamily; keep open. |
| #63685 | keep_related | planned | related | Related Google provider/model catalog issue with distinct setup-validation scope. |
| #66830 | keep_related | planned | related | Related context/compaction follow-up; keep open. |

## Needs Human

- none
