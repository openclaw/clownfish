---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157009-autonomous-smoke"
mode: "autonomous"
run_id: "25102913163"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102913163"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.125Z"
canonical: "https://github.com/openclaw/openclaw/commit/6a55a00da4"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40144"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157009-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102913163](https://github.com/openclaw/clownfish/actions/runs/25102913163)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/commit/6a55a00da4

## Summary

No GitHub mutations are planned. The hydrated preflight artifact shows the seed PRs #40217 and #40798 are already closed, the linked root issue #40144 was closed as completed after a maintainer-owned fix landed on main in 6a55a00da4, and there are no security-sensitive items. Closed refs are kept as historical evidence only.

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
| #40144 | keep_closed | skipped | canonical | The root issue is already closed as completed; no closure, label, comment, merge, or fix action is valid for this item. |
| #40217 | keep_closed | skipped | superseded | The PR is already closed as superseded by the maintainer-owned main fix, so the worker must not emit a close or merge action. |
| #40656 | keep_closed | skipped | superseded | This linked PR is already closed and is not a live mutation target. |
| #40798 | keep_closed | skipped | superseded | The PR is already closed as superseded by the maintainer-owned main fix, so no close, merge, or replacement fix action is allowed. |

## Needs Human

- none
