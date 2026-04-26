---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165992-agentic-merge"
mode: "autonomous"
run_id: "24947854416"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24947854416"
head_sha: "43d96e8f84d5f66f270ea7e7ca7220dc196492a6"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-04-26T04:11:25.326Z"
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

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24947854416](https://github.com/openclaw/projectclownfish/actions/runs/24947854416)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/41985

## Summary

Retained #41985 as the live canonical issue for the remaining non-image Control UI/WebChat attachment gap. Pure upload duplicates were classified but not newly closed because the bug is still open and this cluster requires fix-first closeout. A narrow fix artifact was built for end-to-end non-image attachment support; raising that fix PR is blocked in this run because no writable checkout or hydrated repairable PR branch was provided.

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
| #41985 | fix_needed | planned | canonical | Keep #41985 as the canonical issue and require a narrow fix path for non-image browser attachments before any further duplicate closeout. |
| cluster:ghcrawl-165992-agentic-merge | build_fix_artifact | planned | canonical | Prepare a focused implementation plan for end-to-end non-image attachment support in Control UI/WebChat and the gateway. |
| cluster:ghcrawl-165992-agentic-merge | open_fix_pr | blocked | canonical | Implementation is blocked on a writable checkout or separately hydrated repairable PR branch. |
| #30389 | keep_related | planned | related | Keep open as related; only the file-upload subset overlaps this cluster. |
| #30759 | keep_related | planned | duplicate | Treat as a duplicate of #41985, but keep it open in this run because the canonical bug is still unfixed and no fix PR was opened. |
| #47933 | keep_related | planned | related | Keep open as related; #41985 covers the upload root cause, but download UX remains separate scope. |
| #48700 | keep_related | planned | duplicate | Treat as duplicate of #41985, but defer closeout until the canonical fix exists. |
| #56344 | keep_related | planned | related | Keep linked ref open as related evidence until the referenced PR path is explicitly hydrated or the canonical fix lands. |
| #69185 | keep_related | planned | related | Keep open as related because it extends beyond the canonical document-upload gap. |
| #69447 | keep_related | planned | duplicate | Treat as a technical duplicate of #41985 and use it as implementation evidence until a fix lands. |
| #70438 | keep_related | planned | related | Keep open as a related design follow-up, not as the canonical issue for the basic upload gap. |
| #36440 | keep_closed | skipped | related | Historical evidence only; do not mutate an already-closed image-upload issue. |
| #41992 | keep_closed | skipped | duplicate | Already closed as a duplicate of #41985; preserve as historical dedupe evidence only. |
| #43242 | keep_closed | skipped | duplicate | Already closed as a duplicate of #41985; preserve as historical dedupe evidence only. |
| #51045 | keep_closed | skipped | related | Use as evidence that image support landed; do not reopen or mutate it in this cluster. |
| #56298 | keep_closed | skipped | duplicate | Already closed as a duplicate of #41985; preserve as historical dedupe evidence only. |
| #63094 | keep_closed | skipped | duplicate | Already closed as a duplicate of #41985; preserve as historical dedupe evidence only. |
| #67622 | keep_closed | skipped | duplicate | Already closed as a duplicate of #41985; preserve as historical dedupe evidence only. |

## Needs Human

- none
