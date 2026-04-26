---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165992-agentic-merge"
mode: "autonomous"
run_id: "24950223631"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24950223631"
head_sha: "6b50602009482de00ccc2076b39326356dbea20b"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-04-26T06:49:34.903Z"
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

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24950223631](https://github.com/openclaw/projectclownfish/actions/runs/24950223631)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41985

## Summary

Hydrated state keeps #41985 as the best live canonical issue for the remaining Control UI/WebChat non-image attachment gap. Image upload already landed on main, but non-image files are still blocked by the image-only UI and gateway path, and there is no hydrated PR in scope, so this plan keeps open items non-mutating, records already-closed duplicates as historical, and emits a narrow new-fix artifact instead of any new close or merge action.

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
| #41985 | keep_canonical | planned | canonical | Strongest live maintainer-backed canonical for the surviving non-image WebChat/Control UI attachment gap. |
| #41985 | fix_needed | planned | canonical | Current main still blocks non-image attachments end-to-end and there is no viable PR in the hydrated artifact. |
| #41985 | build_fix_artifact | planned | canonical | A new narrow fix PR is the explicit next canonical path. |
| #30389 | keep_related | planned | related | Broader WebChat UX scope than the canonical file-upload issue, so it should stay open as related. |
| #30759 | keep_related | planned | duplicate | True duplicate of the canonical issue, but kept non-mutating here because the job requires a fix path before duplicate closeout. |
| #47933 | keep_related | planned | related | Broader upload/download scope than the canonical issue, so it should remain open as related. |
| #48700 | keep_related | planned | duplicate | Duplicate of the canonical non-image upload request; kept open in this plan until a fix path exists. |
| #56344 | keep_related | planned | duplicate | Duplicate of #41985, with repair/merge deferred because the referenced PR is not safely hydrated here. |
| #69185 | keep_related | planned | related | Related follow-up with broader arbitrary-file/config scope, not a safe duplicate close target. |
| #69447 | keep_related | planned | duplicate | Duplicate of the canonical issue, but kept non-mutating until a fix PR or landed canonical commit exists. |
| #70438 | keep_related | planned | related | Related implementation-policy thread, not a safe duplicate close target. |
| #36440 | keep_closed | skipped | related | Already closed historical prerequisite; no new action is allowed. |
| #41992 | keep_closed | skipped | duplicate | Already closed duplicate of the canonical issue; record only. |
| #43242 | keep_closed | skipped | duplicate | Already closed duplicate of the canonical issue; record only. |
| #51045 | keep_closed | skipped | related | Already closed historical evidence for the image-only implementation path. |
| #56298 | keep_closed | skipped | duplicate | Already closed duplicate of the canonical issue; record only. |
| #63094 | keep_closed | skipped | duplicate | Already closed duplicate of the canonical issue; record only. |
| #67622 | keep_closed | skipped | duplicate | Already closed duplicate of the canonical issue; record only. |

## Needs Human

- none
