---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-936-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25137275846"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25137275846"
head_sha: "ca8a3303df8e547d7f06bee2c26da230fe0cdb72"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.305Z"
canonical: "https://github.com/openclaw/openclaw/issues/49740"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49740"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-936-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25137275846](https://github.com/openclaw/clownfish/actions/runs/25137275846)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49740

## Summary

Classified the hydrated cluster without GitHub mutations. The obsolete closed representative #69252 is not actionable; #49740 is the current open canonical issue for configurable per-job recurring cron retry, #51001 stays open as a related implementation candidate with unresolved checks/review, #46341 stays open as a related narrower bug, and #46423 is quarantined to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #49740 | keep_canonical | planned | canonical | Best current open canonical issue for the configurable recurring cron retry feature subfamily after closed representative #69252 became obsolete. |
| #51001 | keep_related | planned | related | Related implementation candidate for #49740, but not safe to close, merge, or treat as fixed-by-candidate because checks and review findings are unresolved. |
| #46341 | keep_related | planned | related | Same cron retry symptom family as #49740, but a narrower transient-error/backoff bug with distinct scope; keep open rather than duplicate-close. |
| #46423 | route_security | planned | security_sensitive | Security-sensitive hydrated PR must be routed to central OpenClaw security handling; no close, label, comment, merge, or fix action is planned for this item. |
| #69252 | keep_closed | skipped | superseded | Closed representative is obsolete context only. |
| #38069 | keep_closed | skipped | duplicate | Already closed duplicate of the current canonical issue #49740. |
| #24355 | keep_closed | skipped | related | Closed historical related issue; no action needed. |

## Needs Human

- none
