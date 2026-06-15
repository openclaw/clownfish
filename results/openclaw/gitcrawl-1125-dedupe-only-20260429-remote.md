---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1125-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109644355"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109644355"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.710Z"
canonical: "https://github.com/openclaw/openclaw/pull/61020"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/61020"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1125-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109644355](https://github.com/openclaw/clownfish/actions/runs/25109644355)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/61020

## Summary

Closed representative #70151 is historical evidence only. #61020 is the best open canonical for the stale assistant replay / idle-timeout fallback bug, but it remains open because checks failed and a Codex review comment is actionable. #67662 and linked #67661 are related runner incomplete-turn work with a different model-scoped cooldown root cause, so no close/comment/label mutations are planned.

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
| #61020 | keep_canonical | planned | canonical | Keep #61020 open as the current canonical PR for the stale assistant replay subfamily; do not close or merge while checks and the Codex review finding remain unresolved. |
| #67662 | keep_related | planned | related | Keep #67662 open as related but separate work; it addresses model-scoped cooldown persistence, not the #61020 stale assistant replay root cause. |
| #67661 | keep_related | planned | fixed_by_candidate | Keep the linked issue open; it is covered by candidate PR #67662 but is not resolved on main in this dedupe-only run. |
| #70151 | keep_closed | skipped | related | Already closed historical representative; no mutation is valid. |

## Needs Human

- none
