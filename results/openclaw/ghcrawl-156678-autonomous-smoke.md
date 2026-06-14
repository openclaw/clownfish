---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156678-autonomous-smoke"
mode: "autonomous"
run_id: "27514423561"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27514423561"
head_sha: "3ec749a472ab32e853dda0b67cf060e75a274aa5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T23:34:20.529Z"
canonical: "https://github.com/openclaw/openclaw/issues/50795"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50795"
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156678-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27514423561](https://github.com/openclaw/clownfish/actions/runs/27514423561)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50795

## Summary

#50795 is the only open live item and is the best canonical path. Current main f1b8827d20c8f1d648cdb1d4034120a67d1ff3e7 still zeroes every assistant usage snapshot after a non-retry embedded compaction, while all overlapping PRs are already closed, unmerged, uneditable, broad, or explicitly flawed. Plan a narrow credited replacement fix PR; no close or merge actions are safe in this run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93084 | clownfish/ghcrawl-156678-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93084 | merge_canonical | executed | fix_pr | already merged |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #50795 | fix_needed | planned | canonical | No viable canonical PR exists; #50795 should remain open while Clownfish prepares a narrow replacement fix. |
| #50845 | keep_closed | skipped | superseded | Historical closed source PR only; do not mutate or merge. |
| #60126 | keep_closed | skipped | independent | Closed independent context ref. |
| #69202 | keep_closed | skipped | related | Closed related context only. |
| #69269 | keep_closed | skipped | related | Closed related context only. |
| #69270 | keep_closed | skipped | superseded | Closed broad contributor PR; replacement fix should be narrow and credited. |
| #69286 | keep_closed | skipped | related | Closed related context only. |
| #69287 | keep_closed | skipped | related | Closed representative; use open #50795 as canonical. |
| #82874 | keep_closed | skipped | superseded | Closed useful source PR; replacement fix should preserve attribution. |
| #91143 | keep_closed | skipped | independent | Closed independent context ref. |
| #91468 | keep_closed | skipped | superseded | Closed flawed source PR; replacement fix should use a more robust boundary. |
| cluster:ghcrawl-156678-autonomous-smoke | build_fix_artifact | planned |  | Fix-enabled autonomous job with no viable open canonical PR. |

## Needs Human

- none
