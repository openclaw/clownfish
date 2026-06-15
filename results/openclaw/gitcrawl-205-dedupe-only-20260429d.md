---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-205-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142138752"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142138752"
head_sha: "a0b870a07f2988db4b233d32e6ac2590b6afdb2d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.318Z"
canonical: "https://github.com/openclaw/openclaw/issues/70371"
canonical_issue: "https://github.com/openclaw/openclaw/issues/70371"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-205-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142138752](https://github.com/openclaw/clownfish/actions/runs/25142138752)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/70371

## Summary

Hydrated live state shows both primary cluster refs are already closed. #70371 was closed as implemented on current main, and #70394 was closed unmerged as obsolete in favor of the narrower shipped startup/recovery behavior. No comment, label, close, merge, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #70371 | keep_closed | skipped | canonical | Already closed in hydrated live state; closure policy forbids emitting a close action for a closed issue. |
| #70394 | keep_closed | skipped | superseded | Already closed in hydrated live state; closed historical PR is evidence only and must not receive a close_superseded action. |

## Needs Human

- none
