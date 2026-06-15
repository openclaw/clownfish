---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2088-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131902028"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131902028"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.933Z"
canonical: "https://github.com/openclaw/openclaw/issues/31583"
canonical_issue: "https://github.com/openclaw/openclaw/issues/31583"
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2088-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131902028](https://github.com/openclaw/clownfish/actions/runs/25131902028)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/31583

## Summary

Hydrated state keeps #31583 as the canonical open issue for skills.entries env inheritance. #61095 is related but distinct, with #62204 as its candidate repair path. No close actions are safe: the only open non-canonical issue has a different root cause, and #62204 needs maintainer policy judgment before promotion.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #31583 | keep_canonical | planned | canonical | Best live canonical for the skill-scoped env inheritance root cause; keep open until #50960 or an equivalent reviewed fix lands. |
| #50960 | keep_related | planned | related | Useful implementation candidate for #31583, but not merge-ready because actionable bot review concerns remain and this dedupe-only job cannot repair or merge it. |
| #61095 | keep_related | planned | related | Related exec-env subcluster, not a duplicate of #31583; keep open for #62204 or a successor fix. |
| #62204 | needs_human | blocked | needs_human | Maintainer judgment is needed on the exact blocked-key contract before #62204 can be repaired or promoted. |
| #31611 | keep_closed | skipped | superseded | Already closed historical PR; no action should be applied. |
| #40179 | keep_closed | skipped | related | Closed related context only; no closure action is valid. |
| #43078 | keep_closed | skipped | duplicate | Already closed duplicate-context issue; no action should be applied. |
| #45750 | keep_closed | skipped | related | Closed related context only; no action should be applied. |
| #50380 | keep_closed | skipped | related | Closed related context only; no action should be applied. |
| #51679 | keep_closed | skipped | related | Closed related context only; no action should be applied. |
| #62370 | keep_closed | skipped | duplicate | Already closed duplicate-context issue; no action should be applied. |

## Needs Human

- #62204 needs maintainer judgment on the exact OPENCLAW service-marker blocklist contract before repair or merge promotion; #61095 should remain open while that decision is unresolved.
