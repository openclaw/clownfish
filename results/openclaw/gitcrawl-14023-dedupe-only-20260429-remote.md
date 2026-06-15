---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14023-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25110419656"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25110419656"
head_sha: "7d2adb9c59b8750974f50f0d9103e76d18fa9122"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.796Z"
canonical: "https://github.com/openclaw/openclaw/pull/42065"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42065"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14023-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25110419656](https://github.com/openclaw/clownfish/actions/runs/25110419656)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42065

## Summary

Classified the hydrated cluster without planning mutations. #42065 remains the live canonical PR for the global Control UI locale-switcher request. The other open PRs are useful related or independent i18n slices, not high-confidence duplicates; #39692 is already closed and is carried forward by hydrated replacement #73980.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #39692 | keep_closed | skipped | superseded | Already closed in live hydrated state; replacement evidence is #73980. |
| #42065 | keep_canonical | planned | canonical | Best live canonical for the global locale-switcher request, but no mutation is appropriate in this dedupe-only run. |
| #43827 | keep_related | planned | related | Related Control UI i18n work with useful code and unresolved review work; not a safe duplicate close. |
| #44695 | keep_independent | planned | independent | Distinct CLI onboarding scope; keep out of this Control UI dedupe closeout. |
| #48836 | keep_related | planned | related | Useful related chat-i18n candidate; not covered by #42065 or by a merged fix. |
| #48902 | keep_related | planned | related | Related but not duplicate; unresolved review findings and failing checks block any close/merge path. |
| #52776 | keep_related | planned | related | Related broad implementation candidate; keep open. |
| #61073 | keep_related | planned | related | Useful related PR with remaining current-main refresh work; no close action. |
| #61080 | keep_related | planned | related | Related logs-localization candidate; not a duplicate or fixed-by-candidate closeout. |
| #61092 | keep_related | planned | related | Related surface-specific PR with review/check blockers; keep open. |
| #61104 | keep_related | planned | related | Related useful PR; not superseded by the canonical global-switch PR. |
| #61112 | keep_related | planned | related | Related stale-but-useful localization PR; keep open for refresh rather than closing. |
| #73980 | keep_related | planned | related | Related replacement path for #39692; keep open and separate from this cluster canonical. |

## Needs Human

- none
