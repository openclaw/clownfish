---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156844-autonomous-smoke"
mode: "autonomous"
run_id: "27598130537"
workflow_run_id: "27598130537"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598130537"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:19:29.336Z"
canonical: "https://github.com/openclaw/openclaw/pull/73986"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49855"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73986"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156844-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598130537](https://github.com/openclaw/clownfish/actions/runs/27598130537)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73986

## Summary

All job-provided candidates are already closed. The canonical implementation path is the landed replacement PR #73986, which fixed #49855 and carried forward credit for #50164. No close, merge, or fix PR action is valid for this run. Security-sensitive closed PRs #49967 and #51196 are scoped to central security routing only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #49855 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by hydrated merged PR #73986; no closure action is valid. |
| #49967 | route_security | planned | security_sensitive | Security-sensitive item must be routed to central OpenClaw security handling; no public close/comment/merge action is planned. |
| #50164 | keep_closed | skipped | superseded | Representative is obsolete and already closed; #73986 is the hydrated landed canonical path. |
| #51196 | route_security | planned | security_sensitive | Security-sensitive item must be routed to central OpenClaw security handling; it is independent of the landed #73986 download fallback. |
| #73937 | keep_closed | skipped | superseded | Already closed and superseded by hydrated merged PR #73986; no closure action is valid. |
| #73986 | keep_closed | skipped | canonical | This is the canonical landed fix path; the PR is already closed/merged, so no merge action is valid. |

## Needs Human

- none
