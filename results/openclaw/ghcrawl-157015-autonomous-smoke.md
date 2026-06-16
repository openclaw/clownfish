---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157015-autonomous-smoke"
mode: "autonomous"
run_id: "27602308813"
workflow_run_id: "27602308813"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27602308813"
head_sha: "bb90f9cf4df0d1866c012593830268f375f16efa"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T08:13:45.564Z"
canonical: "https://github.com/openclaw/openclaw/issues/38966"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38966"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157015-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27602308813](https://github.com/openclaw/clownfish/actions/runs/27602308813)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/38966

## Summary

Current main still has the external reset gap: `sessions.reset` emits `sessions.changed`, but the TUI dispatch path handles only `chat`, `chat.side_result`, and `agent` events. The live canonical path is open issue #38966. Both job PRs are already closed; #40472 is useful prior art but closed, dirty, and not maintainer-editable, so the executable path is a narrow credited replacement fix artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93562 | clownfish/ghcrawl-157015-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93562 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #38966 | keep_canonical | planned | canonical | #38966 is the only open hydrated item that tracks the still-present external session reset behavior. |
| #40472 | keep_closed | skipped | superseded | Already closed source PR; use as credited source material for the replacement fix rather than attempting merge or closure. |
| #62602 | keep_closed | skipped | superseded | Already closed related PR; historical evidence only. |
| #62395 | keep_closed | skipped | fixed_by_candidate | Already closed historical linked issue; no mutation needed. |
| #67401 | keep_closed | skipped | fixed_by_candidate | Merged historical PR for a related streaming-state family; not the canonical reset-refresh fix. |
| cluster:ghcrawl-157015-autonomous-smoke | fix_needed | planned |  | No viable open canonical PR exists, and the job allows fix and raise_pr. |
| cluster:ghcrawl-157015-autonomous-smoke | build_fix_artifact | planned |  | Executable credited replacement fix is safer than repairing the closed uneditable #40472 branch. |

## Needs Human

- none
