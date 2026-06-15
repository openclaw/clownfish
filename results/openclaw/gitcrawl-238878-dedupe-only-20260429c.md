---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238878-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102985552"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102985552"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.138Z"
canonical: "https://github.com/openclaw/openclaw/pull/42904"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42904"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238878-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102985552](https://github.com/openclaw/clownfish/actions/runs/25102985552)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42904

## Summary

Hydrated preflight state shows the local-store inventory is obsolete: all three candidate PRs are already closed, and #42904 is merged as the canonical path. No close, comment, label, merge, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #42904 | keep_closed | skipped | canonical | Already merged canonical PR; workers must not mutate already-closed refs. |
| #43043 | keep_closed | skipped | superseded | Already closed unmerged PR superseded by merged canonical #42904; no closure action is valid. |
| #43093 | keep_closed | skipped | related | Already closed related PR; no mutation is planned. |

## Needs Human

- none
