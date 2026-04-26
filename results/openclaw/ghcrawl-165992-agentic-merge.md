---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165992-agentic-merge"
mode: "autonomous"
run_id: "24949296587"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24949296587"
head_sha: "4cbf250a45aca7be64c28c3e18eb223af461579c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T06:14:06.400Z"
canonical: "https://github.com/openclaw/openclaw/issues/41985"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41985"
canonical_pr: null
actions_total: 18
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-165992-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24949296587](https://github.com/openclaw/projectclownfish/actions/runs/24949296587)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41985

## Summary

Canonical remains issue #41985: maintainer comments and the already-closed duplicates confirm it is the live tracker for the unresolved non-image WebChat/Control UI attachment gap on main. Open refs split into four duplicates to hold until a fix PR exists (#30759, #48700, #56344, #69447) and four related-but-broader threads (#30389, #47933, #69185, #70438). A narrow new fix PR is needed, but opening it is blocked in this run because the provided fix artifact has target_checkout=null.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41985 | fix_needed | planned | canonical | The canonical issue is still live and unresolved, so the next step is a narrow fix path rather than more duplicate churn. |
| #41985 | build_fix_artifact | planned | canonical | A concrete repair plan is clear from the hydrated artifacts even though no patch branch was provided to this worker. |
| #41985 | open_fix_pr | blocked | canonical | Implementation handoff is blocked by missing checkout/branch context; only the fix artifact can be emitted here. |
| #30389 | keep_related | planned | related | This overlaps with the upload family but is a broader WebChat UX umbrella, not a true duplicate of the canonical non-image attachment issue. |
| #30759 | keep_related | planned | duplicate | High-confidence duplicate of #41985, but require_fix_before_close blocks duplicate closeout until a fix PR or landed canonical change exists. |
| #36440 | keep_closed | skipped | related | Already closed in live hydrated state; retain only as context for partial progress on the broader family. |
| #41992 | keep_closed | skipped | duplicate | Already closed in live hydrated state; no further action is valid. |
| #43242 | keep_closed | skipped | duplicate | Already closed in live hydrated state; no further action is valid. |
| #47933 | keep_related | planned | related | It overlaps on upload, but local download behavior is distinct remaining work, so this should stay open as related. |
| #48700 | keep_related | planned | duplicate | High-confidence duplicate of #41985, but duplicate closeout should wait for a concrete fix PR or landed canonical fix. |
| #51045 | keep_closed | skipped | related | Already closed in live hydrated state; retain only as evidence that the current gap is now non-image attachments, not images. |
| #56298 | keep_closed | skipped | duplicate | Already closed in live hydrated state; no further action is valid. |
| #56344 | keep_related | planned | duplicate | High-confidence duplicate of #41985, but keep it open until a fix PR or landed canonical change exists and the unverified #57707 claim can be ignored safely. |
| #63094 | keep_closed | skipped | duplicate | Already closed in live hydrated state; no further action is valid. |
| #67622 | keep_closed | skipped | duplicate | Already closed in live hydrated state; no further action is valid. |
| #69185 | keep_related | planned | related | Keep open as related because archives/binaries and configuration policy are broader follow-up scope, not a pure duplicate closeout. |
| #69447 | keep_related | planned | duplicate | High-confidence duplicate of #41985, but keep it open until a concrete fix PR or landed canonical change exists. |
| #70438 | keep_related | planned | related | Keep open as related because configuration and content-routing policy are distinct follow-up decisions beyond restoring basic non-image attachment support. |

## Needs Human

- none
