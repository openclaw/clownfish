---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2727-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134073007"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134073007"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.999Z"
canonical: "https://github.com/openclaw/openclaw/pull/42245"
canonical_issue: "https://github.com/openclaw/openclaw/issues/42196"
canonical_pr: "https://github.com/openclaw/openclaw/pull/42245"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2727-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134073007](https://github.com/openclaw/clownfish/actions/runs/25134073007)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42245

## Summary

Closed representative #40571 is obsolete. The current canonical path for the --agent warning subfamily is open issue #42196 with open PR #42245. The Telegram cron delivery PRs #43808 and #49704 plus draft PR #58893 are related follow-up work, not duplicates. Linked security-shaped PR #43469 is quarantined only for central security triage. No close, merge, or fix actions are planned.

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
| #40571 | keep_closed | skipped | superseded | Historical representative only; no mutation is valid for an already-closed PR. |
| #42196 | keep_canonical | planned | canonical | Keep the issue open as the canonical report until #42245 or an equivalent fix lands. |
| #42245 | keep_canonical | planned | canonical | Canonical PR for the --agent warning subfamily; merge is not allowed by this job and merge preflight is not present. |
| #43469 | route_security | planned | security_sensitive | Quarantine this exact linked security-shaped item to central OpenClaw security handling without affecting unrelated cron classifications. |
| #43808 | keep_related | planned | related | Related cron delivery work with remaining unique scope; not safe to close as duplicate or fixed. |
| #49704 | keep_related | planned | related | Related but distinct Telegram cron delivery PR; failing checks and unresolved review feedback block fixed-by-candidate closeout. |
| #58893 | keep_related | planned | related | Same broad cron reminder area, but a different root cause and draft implementation path. |

## Needs Human

- none
