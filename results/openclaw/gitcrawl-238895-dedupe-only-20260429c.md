---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238895-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108037759"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108037759"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.682Z"
canonical: "https://github.com/openclaw/openclaw/pull/47613"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/47613"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238895-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108037759](https://github.com/openclaw/clownfish/actions/runs/25108037759)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/47613

## Summary

Canonical non-security path is #47613: it is the narrow focused PR for the gateway/WebSocket no-callback reasoning stream gap. #52642 and #61469 are not safe dedupe closeouts in this run because hydrated review comments raise auth/trust-boundary or hidden-reasoning exposure concerns; those exact PRs are routed to central security handling, while #47613 remains open for maintainer review.

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
| #47613 | keep_canonical | planned | canonical | Best surviving focused PR for the non-security gateway/WebSocket no-callback reasoning-stream gap; merge and fix actions are blocked by the job, so keep it open as canonical. |
| #52642 | route_security | planned | security_sensitive | The hydrated review comments raise auth/trust-boundary regressions in this candidate branch. Quarantine this exact PR for central OpenClaw security handling; do not close, label, comment, merge, or use it as the dedupe canonical. |
| #61469 | route_security | planned | security_sensitive | The hydrated review comments raise hidden/suppressed reasoning exposure concerns in this candidate branch. Quarantine this exact PR for central OpenClaw security handling instead of closing it as a duplicate or superseded PR. |

## Needs Human

- none
