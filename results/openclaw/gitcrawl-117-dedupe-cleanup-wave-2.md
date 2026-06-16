---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-117-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609383140"
workflow_run_id: "27609383140"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609383140"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T09:58:18.473Z"
canonical: "https://github.com/openclaw/openclaw/issues/66360"
canonical_issue: "https://github.com/openclaw/openclaw/issues/66360"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-117-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609383140](https://github.com/openclaw/clownfish/actions/runs/27609383140)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/66360

## Summary

Classified the remaining hydrated cluster without GitHub mutations. #66360 is the only open non-security issue in scope and should remain open as the canonical transcript-maintenance/product-direction issue. #88332 is an open security-sensitive linked issue and must be routed to central OpenClaw security handling only. Closed refs are historical evidence and receive no close actions.

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
| Needs human | 1 |

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
| #66360 | needs_human | planned | needs_human | Maintainer product direction is still required for whether OpenClaw should add an opt-in raw transcript cap under session.maintenance or document compaction-only behavior. Keep #66360 open as the canonical non-security tracker. |
| #88332 | route_security | planned | security_sensitive | Security-sensitive linked issue must be quarantined to central OpenClaw security handling with no ProjectClownfish close, label, merge, or fix action. |
| #18572 | keep_closed | skipped | related | Already-closed linked context ref; no close action is valid. |
| #80003 | keep_closed | skipped | related | Already-closed PR; historical evidence only and no merge or close action is permitted. |
| #87610 | keep_closed | skipped | related | Already-closed cluster context ref; no close action is valid. |

## Needs Human

- #66360 requires maintainer product direction: add a raw active transcript cap under session.maintenance versus document compaction-only behavior. This job cannot raise a fix PR and should leave the issue open.
