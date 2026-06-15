---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-8187-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143024885"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143024885"
head_sha: "409422518ec79d91a76943837b4592abd04b8a86"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.331Z"
canonical: "https://github.com/openclaw/openclaw/issues/52875"
canonical_issue: "https://github.com/openclaw/openclaw/issues/52875"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-8187-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143024885](https://github.com/openclaw/clownfish/actions/runs/25143024885)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/52875

## Summary

Kept #52875 as the open canonical non-security issue. Routed #52921 to central security handling because the hydrated artifact marks it security-sensitive and review comments identify session visibility/A2A policy concerns; no close, merge, fix, or PR action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #52875 | keep_canonical | planned | canonical | Representative #52875 is still the best live canonical issue. It remains open because current main lacks the reported fix and the only hydrated PR candidate is quarantined for central security review. |
| #52921 | route_security | planned | security_sensitive | Security-sensitive PR #52921 must be handled by central OpenClaw security triage. This worker must not comment, close, merge, repair, or replace that PR. |

## Needs Human

- none
