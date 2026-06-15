---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1569-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130291003"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130291003"
head_sha: "59815fb21cd4e74e6fe01972c176792bdc76c884"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.858Z"
canonical: "https://github.com/openclaw/openclaw/pull/73365"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73365"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1569-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130291003](https://github.com/openclaw/clownfish/actions/runs/25130291003)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73365

## Summary

Hydrated representative #65010 is closed; the current core canonical path is open maintainer PR #73365. No high-confidence close action is safe for the open candidates: #64758 remains related useful contributor work with abort-semantics and rebase questions, while #65222 and #66247 are related Telegram delivery-bypass candidates with broad-delta or review blockers. Closed context refs are recorded as skipped evidence only. No security-sensitive item was detected.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #73365 | keep_canonical | planned | canonical | Current best open canonical for the core active non-streaming steer-injection family; keep open for maintainer review and validation. |
| #64758 | keep_related | planned | related | Related useful contributor implementation, not a safe duplicate/superseded close target in this dedupe-only job. |
| #65222 | keep_related | planned | related | Keep open as a related Telegram delivery-bypass candidate; broad delta and overlapping open PRs make closure unsafe. |
| #66247 | keep_related | planned | related | Related Telegram subcluster candidate; not closeable or merge-ready from this job. |
| #65221 | keep_closed | skipped | related | Already closed; closed context refs must not receive close/comment/label mutations. |
| #65010 | keep_closed | skipped | superseded | Historical representative only; current open canonical is #73365. |
| #52351 | keep_closed | skipped | superseded | Closed historical context only; no mutation. |
| #60604 | keep_closed | skipped | superseded | Closed historical Telegram context only; no mutation. |

## Needs Human

- none
