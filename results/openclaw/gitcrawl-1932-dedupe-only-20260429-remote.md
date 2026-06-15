---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1932-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130816171"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130816171"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.897Z"
canonical: "https://github.com/openclaw/openclaw/issues/45846"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45846"
canonical_pr: null
actions_total: 18
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-1932-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130816171](https://github.com/openclaw/clownfish/actions/runs/25130816171)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/45846

## Summary

Classified the open issue candidates against live preflight state at main f05b789736004a8ee93b7a8b44907b5f7f72ee1a. #45846 remains the canonical issue for the oversized Web UI chat image subfamily, with #46947 as an open but unmerged candidate PR. No high-confidence duplicate closeout is safe because the remaining open issues are distinct Control UI performance, rendering, attachment, stale-state, or product-contract reports.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
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
| #45846 | keep_canonical | planned | canonical | Best surviving canonical issue for the oversized image sizing subfamily; do not close before #46947 or an equivalent fix lands. |
| #44107 | keep_independent | planned | independent | Different root causes and reproduction paths from #45846; no duplicate closeout. |
| #45698 | keep_related | planned | related | Related Control UI regression family, but not the same oversized-image root cause as #45846. |
| #47979 | keep_related | planned | related | Same broad Web UI area but a distinct browser-specific freeze path; keep open. |
| #49776 | keep_related | planned | related | Related Control UI freeze report with unresolved unique diagnostic paths; not a duplicate of #45846. |
| #54874 | keep_related | planned | related | Potentially related Control UI responsiveness bug, but root cause is not established enough for duplicate closure. |
| #58702 | keep_related | planned | related | Related chat layout bug but not the same root cause or user-visible failure as #45846. |
| #63432 | keep_related | planned | related | Image-adjacent attachment send failure, not an image display sizing duplicate. |
| #64004 | keep_related | planned | related | Related Control UI performance report with distinct evidence; keep open for follow-up triage. |
| #64220 | keep_related | planned | related | Related Control UI stale-state bug, but independent of oversized image display. |
| #66409 | keep_related | planned | related | Under-specified related Web UI regression; no high-confidence duplicate or fixed-by-candidate closeout. |
| #67035 | keep_related | planned | related | Related chat UI regression but distinct from image sizing; keep open. |
| #67709 | keep_related | planned | related | Related Control UI startup performance bug; no merged candidate proves it fixed. |
| #68264 | needs_human | planned | needs_human | Maintainer product decision needed before classifying this as a bug fix, docs/tool-description gap, or feature request. |
| #45930 | keep_related | planned | related | Useful candidate for #45698, but not merge-ready and merge/fix actions are blocked by this job. |
| #46947 | keep_related | planned | related | Best open implementation candidate for #45846, but not a landed fix and no merge action is allowed. |
| #49335 | keep_related | planned | related | Related candidate for large-history freeze reports, but not merge-ready and not a duplicate-resolution basis. |
| #69454 | keep_related | planned | related | Useful overlapping candidate for #45698/#64004-style performance issues, but blocked from merge/fixed-by-candidate closeout. |

## Needs Human

- #68264 needs maintainer product direction: decide whether canvas/browser state-changing actions should produce chat-visible previews, explicit snapshots, or clearer node/tool guidance.
