---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238855-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102943097"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102943097"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.131Z"
canonical: "https://github.com/openclaw/openclaw/commit/73ba282b54cd8bfe2986f953b1fa7992f8a591e4"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65480"
canonical_pr: "https://github.com/openclaw/openclaw/pull/65481"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238855-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102943097](https://github.com/openclaw/clownfish/actions/runs/25102943097)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/commit/73ba282b54cd8bfe2986f953b1fa7992f8a591e4

## Summary

Hydrated state shows the representative #65481 and overlapping #66259 are already closed as superseded by current main, #63678 is an already-closed related QMD vector-status parser fix, and #68590 remains open as a related follow-up with unresolved review-bot findings. No close, merge, or fix actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #63678 | keep_closed | skipped | related | Already closed and related to the same memory-core/QMD area, but not the same root cause as the mask-first collection-pattern cluster. |
| #65481 | keep_closed | skipped | canonical | Canonical path is already landed on current main; the representative PR is closed and should not receive further mutation. |
| #66259 | keep_closed | skipped | superseded | Already closed as superseded by the current-main implementation of the mask-first QMD compatibility fix. |
| #68590 | keep_related | planned | related | Keep open as a related follow-up PR; it is not a duplicate of the mask-first canonical path and has unresolved review-bot blockers. |

## Needs Human

- none
