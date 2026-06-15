---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13976-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109793173"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109793173"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.766Z"
canonical: "https://github.com/openclaw/openclaw/issues/50779"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50779"
canonical_pr: "https://github.com/openclaw/openclaw/pull/52025"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13976-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109793173](https://github.com/openclaw/clownfish/actions/runs/25109793173)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50779

## Summary

Hydrated state shows the original representative #57152 is already closed. The current open canonical for the tool-result/image_generate rendering family is #50779, with #52025 as the focused but not merge-ready implementation candidate. The other open issues are related follow-up scope, not duplicates safe to close: #30389 keeps a remaining composer skill/capability-menu product request, while #30759 and #48700 track broader document/Office upload and extraction semantics.

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
| #57152 | keep_closed | skipped | superseded | Closed representative is obsolete; keep it closed and use #50779/#52025 as the current open canonical path for this subfamily. |
| #50779 | keep_canonical | planned | canonical | This is the best current open canonical issue for the tool-result/image_generate rendering family. |
| #52025 | keep_canonical | planned | canonical | Keep as the focused canonical PR candidate for #50779, but it is not merge-ready under the available gates. |
| #30389 | keep_related | planned | related | Keep open as related product/UI follow-up; closing as a duplicate would drop remaining unique scope. |
| #30759 | keep_related | planned | related | Keep open for the remaining document extraction policy and implementation scope. |
| #57612 | keep_related | planned | related | Keep as a useful related DOCX candidate for #30759; no merge or repair action is available in this dedupe-only job. |
| #48700 | keep_related | planned | related | Keep open as related broader Office-document upload scope; not enough overlap for high-confidence duplicate closure. |

## Needs Human

- none
