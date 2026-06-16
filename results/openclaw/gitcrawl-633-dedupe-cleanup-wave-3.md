---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-633-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610224191"
workflow_run_id: "27610224191"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610224191"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.477Z"
canonical: "https://github.com/openclaw/openclaw/issues/72111"
canonical_issue: "https://github.com/openclaw/openclaw/issues/72111"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-633-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610224191](https://github.com/openclaw/clownfish/actions/runs/27610224191)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/72111

## Summary

Classified #72111 as the live canonical issue. Current main still resolves command-bearing MCP configs as stdio before HTTP/streamable-http, so the mixed command+url timeout path is not proven fixed. The linked overlap PR #72515 is hydrated evidence for the focused fix path, but it is excluded from actionable refs for this job and is not merge-ready because behavior-proof/build/dependency checks are failing. No close, merge, or fix action is safe or allowed for this cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #72111 | keep_canonical | planned | canonical | Keep #72111 open as the canonical issue until the focused mixed command+url fix path lands or maintainers explicitly choose a different lifecycle behavior. |

## Needs Human

- none
