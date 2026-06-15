---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-237-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520855272"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520855272"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.923Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-237-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520855272](https://github.com/openclaw/clownfish/actions/runs/27520855272)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification for cluster gitcrawl-237-bulk-plan-20260615-a. The hydrated artifact marks the hinted canonical #49183 and candidate #44484 as security-sensitive route-only, so they are quarantined for central OpenClaw security handling. #73864 is already closed in live preflight state and should not receive a close action. No GitHub mutations are planned.

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
| https://github.com/openclaw/openclaw/issues/49183 | route_security | planned | security_sensitive | The canonical representative is security-sensitive in the hydrated artifact, so it cannot be used as a normal dedupe canonical in this backlog-cleanup plan. |
| https://github.com/openclaw/openclaw/issues/44484 | route_security | planned | security_sensitive | This is related to the per-session tool-policy family but carries explicit security-sensitive labels and route-only artifact hints, so Clownfish should quarantine it instead of closing it as duplicate. |
| https://github.com/openclaw/openclaw/issues/73864 | keep_closed | skipped | superseded | Already-closed candidate; retain historical context only. |

## Needs Human

- none
