---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156809-autonomous-smoke"
mode: "autonomous"
run_id: "27597933300"
workflow_run_id: "27597933300"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597933300"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:20:47.539Z"
canonical: "https://github.com/openclaw/openclaw/issues/44293"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44293"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156809-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597933300](https://github.com/openclaw/clownfish/actions/runs/27597933300)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/44293

## Summary

The representative PR #44824 is obsolete and already closed. The surviving canonical path is the hydrated open issue #44293, with no viable open PR left in the cluster. Plan a narrow credited replacement fix artifact for the docs formatter PowerShell/Windows shim gap, and do not emit any close/merge action because the fix has not landed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93512 | clownfish/ghcrawl-156809-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93512 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #44293 | fix_needed | planned | canonical | A narrow docs formatter fix is still needed before #44293 can be closed as implemented. |
| cluster:ghcrawl-156809-autonomous-smoke | build_fix_artifact | planned |  | No viable open contributor PR remains, but the issue and prior PR evidence define a narrow executable replacement fix. |
| #44824 | keep_closed | skipped | superseded | Historical superseded PR only; preserve as source-credit evidence for the replacement fix. |
| #48887 | keep_closed | skipped | superseded | Useful source-credit PR, but closed, unmerged, uneditable, and not merge-ready. |
| #49913 | keep_closed | skipped | superseded | Historical superseded PR only; preserve as source-credit evidence for the replacement fix. |
| #3460 | keep_closed | skipped | independent | Closed unrelated context ref; no mutation planned. |

## Needs Human

- none
