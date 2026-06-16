---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2573-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599300724"
workflow_run_id: "27599300724"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599300724"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:48:18.533Z"
canonical: "https://github.com/openclaw/openclaw/issues/64427"
canonical_issue: "https://github.com/openclaw/openclaw/issues/64427"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2573-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599300724](https://github.com/openclaw/clownfish/actions/runs/27599300724)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/64427

## Summary

Hydrated preflight shows the original canonical #64427 and duplicate #67020 are already closed, so no close/comment/label mutation is needed for the dedupe lane. #7359 is an open linked security-sensitive Slack cross-session visibility issue and is routed to central security handling without affecting the already-closed non-security items.

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
| #64427 | keep_closed | skipped | canonical | Canonical issue is already closed as completed; keep as historical canonical evidence only. |
| #67020 | keep_closed | skipped | duplicate | Already closed as a duplicate of the canonical #64427; no further action. |
| #67987 | keep_closed | skipped | related | Closed related context item only; it has a distinct reported path and no open dedupe action remains. |
| #728 | keep_closed | skipped | related | Merged historical related implementation, not an open target for this dedupe-only job. |
| #67054 | keep_closed | skipped | superseded | Closed unmerged prior attempt superseded by the canonical #64427 main-branch fix path. |
| #7359 | route_security | planned | security_sensitive | Route the exact security-sensitive linked issue to central OpenClaw security handling; do not mutate it through dedupe automation. |

## Needs Human

- none
