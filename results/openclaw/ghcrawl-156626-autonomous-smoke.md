---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156626-autonomous-smoke"
mode: "autonomous"
run_id: "25102355668"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102355668"
head_sha: "9a08eb9ac982c5d395ca81610998f5f78efc9ef6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.087Z"
canonical: "https://github.com/openclaw/openclaw/pull/72663"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72663"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156626-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102355668](https://github.com/openclaw/clownfish/actions/runs/25102355668)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72663

## Summary

The original representative #42083 is no longer live. Its auto-capture root cause was replaced and merged through #72663, while the remaining open PRs are separate memory-lancedb subfamilies with their own review blockers or validation needs. No close, merge, or fix artifact is safe for this over-broad cluster pass.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #72663 | keep_closed | skipped | canonical | Canonical auto-capture path is already closed and merged; workers must not emit close actions for closed refs. |
| #42083 | keep_closed | skipped | fixed_by_candidate | Already closed after the credited replacement path landed. |
| #62741 | keep_closed | skipped | independent | Closed historical item with a distinct root cause from this cluster's canonical auto-capture path. |
| #47285 | keep_related | planned | related | Keep open as a separate related provider-support subcluster; do not close or merge from this auto-capture cluster. |
| #63413 | keep_related | planned | related | Keep open as a separate related repair candidate; no duplicate closeout or merge is justified here. |
| #67952 | keep_related | planned | related | Keep open as a separate related CLI-listing subcluster with unresolved review work. |
| #68116 | keep_related | planned | related | Keep open as a separate related maintenance-command subcluster; bot findings block merge in this pass. |
| #70040 | keep_related | planned | related | Keep open as a separate related CJK trigger subcluster; no safe duplicate/superseded closeout exists. |

## Needs Human

- none
