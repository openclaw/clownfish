---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156901-autonomous-smoke"
mode: "autonomous"
run_id: "25103662626"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103662626"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.148Z"
canonical: "https://github.com/openclaw/openclaw/issues/60364"
canonical_issue: "https://github.com/openclaw/openclaw/issues/60364"
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

# ghcrawl-156901-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103662626](https://github.com/openclaw/clownfish/actions/runs/25103662626)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/60364

## Summary

Hydrated preflight state shows the stale_running issue family (#60364, #60887, #60892) is already closed after implementation on main and release v2026.4.23. The only open linked ref, #60864, is a broader task-continuation RFC and should remain open as related follow-up; no close, merge, or fix action is planned.

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
| #60364 | keep_closed | skipped | canonical | The representative canonical issue is already closed in hydrated live state, so no closure or comment mutation is valid. |
| #60887 | keep_closed | skipped | duplicate | This is the same root-cause family as #60364 but is already closed, so it must remain historical evidence only. |
| #60892 | keep_closed | skipped | duplicate | This duplicate stale_running report is already closed in live hydrated state, so no closeout mutation is valid. |
| #60864 | keep_related | planned | related | #60864 is adjacent restart-continuation product work, not a true duplicate of the stale_running ledger cleanup family and not a narrow fix artifact for this cluster. |

## Needs Human

- none
