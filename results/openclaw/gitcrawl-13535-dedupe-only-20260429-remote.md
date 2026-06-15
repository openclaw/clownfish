---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13535-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109689728"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109689728"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.719Z"
canonical: "https://github.com/openclaw/openclaw/tree/9881a808f2fc0d5302f98a040a9efaad00336097"
canonical_issue: null
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 2
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-13535-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109689728](https://github.com/openclaw/clownfish/actions/runs/25109689728)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/9881a808f2fc0d5302f98a040a9efaad00336097

## Summary

Closed representative #65283 is obsolete. Current main at 9881a808f2fc0d5302f98a040a9efaad00336097 is the canonical fixed path for the Gateway configured-provider image-capability reports, with hydrated #67766 carrying the current-main validation evidence. #64213 and #65165 are high-confidence fixed-by-current-main closeouts. #65746, #67976, #55688, and #61716 remain related follow-ups, while #53738 needs maintainer triage against the narrower PDF path in #65746.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 2 |
| Apply skipped | 0 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #64213 | close_fixed_by_candidate | blocked | fixed_by_candidate | candidate fix is not listed in job refs |
| #65165 | close_fixed_by_candidate | blocked | fixed_by_candidate | candidate fix is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #64213 | close_fixed_by_candidate | planned | fixed_by_candidate | The open issue matches the configured-provider Gateway catalog-miss image-capability bug that current main now fixes; no unique remaining scope is evident in the hydrated comments. |
| #65165 | close_fixed_by_candidate | planned | fixed_by_candidate | The issue's attachment-drop behavior is covered by the same current-main Gateway catalog fix validated through hydrated #67766. |
| #53738 | needs_human | planned | needs_human | Maintainer judgment is required to choose the PDF canonical path because #53738 overlaps an already-implemented image path and competes with narrower #65746. |
| #65746 | keep_related | planned | related | Related PDF-tool custom-provider resolution work should remain open; it is not a duplicate close target and is not merge-ready because an actionable bot review finding remains. |
| #67976 | keep_related | planned | related | Provider-specific Volcengine Plan imageModel support is related to the imageModel cluster but remains unique and should stay open. |
| #55688 | keep_related | planned | related | Keep open as related partial Volc catalog work; it is not a complete canonical fix for the Volcengine Plan endpoint issue. |
| #61716 | keep_related | planned | related | This is related configuration UX work, not the same runtime Gateway image attachment bug and not a close target in this cluster. |

## Needs Human

- #53738 needs maintainer triage against #65746: decide whether #65746 is the canonical narrow PDF fix or whether #53738 should be rebased/reduced to remove already-implemented image-path work and keep only the approved PDF resolver change.
