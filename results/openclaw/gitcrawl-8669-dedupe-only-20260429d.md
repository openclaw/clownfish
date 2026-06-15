---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-8669-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143033450"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143033450"
head_sha: "409422518ec79d91a76943837b4592abd04b8a86"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:05:51.331Z"
canonical: "https://github.com/openclaw/openclaw/issues/54531"
canonical_issue: "https://github.com/openclaw/openclaw/issues/54531"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-8669-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143033450](https://github.com/openclaw/clownfish/actions/runs/25143033450)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/54531

## Summary

#54531 remains the open canonical issue. #57802 is already closed and unmerged, so it is historical prior art only. No close, merge, or fix actions are planned because the remaining reply-routing behavior needs maintainer policy review, and this job disables instant close, merge, fix, and raise_pr.

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
| #54531 | keep_canonical | planned | canonical | Keep the canonical issue open; the remaining decision is maintainer policy, not mechanical dedupe cleanup. |
| #57802 | keep_closed | skipped | superseded | Already closed and unmerged; retain as historical prior art for #54531. |

## Needs Human

- #54531: maintainer must choose the cross-surface reply-routing policy before any implementation, because automatic origin-channel routing can send dashboard/WebChat replies to stale or unintended external chats.
