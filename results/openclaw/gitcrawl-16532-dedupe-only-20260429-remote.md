---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-16532-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130300734"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130300734"
head_sha: "59815fb21cd4e74e6fe01972c176792bdc76c884"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.863Z"
canonical: "https://github.com/openclaw/openclaw/pull/44523"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/44523"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-16532-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130300734](https://github.com/openclaw/clownfish/actions/runs/25130300734)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/44523

## Summary

Live preflight shows #47994 is closed and obsolete as the representative. #44523 is the only still-open candidate and is the current canonical PR for the remaining daily/idle rollover model-override preservation bug. No close, merge, or fix actions are planned: #44523 should stay open, and the other named candidates are already closed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #44523 | keep_canonical | planned | canonical | Best surviving open canonical path, but not merge-ready and this dedupe-only job blocks merge, fix, and raise_pr actions. |
| #47994 | keep_closed | skipped | superseded | Closed representative is obsolete and must not receive a close action. |
| #58317 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #65330 | keep_closed | skipped | superseded | Already closed; no close or merge action is valid. |
| #67591 | keep_closed | skipped | superseded | Already closed and superseded by current main; no mutation is valid. |

## Needs Human

- none
