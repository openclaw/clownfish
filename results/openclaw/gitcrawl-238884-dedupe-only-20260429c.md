---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238884-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25100259952"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25100259952"
head_sha: "567e275f854175d34fbcb261cb413a1d6aa237b9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T09:11:24.718Z"
canonical: "https://github.com/openclaw/openclaw/pull/62195"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/62195"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238884-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25100259952](https://github.com/openclaw/clownfish/actions/runs/25100259952)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/62195

## Summary

Selected #62195 as the live canonical preHook implementation. Planned one superseded closeout for #45129, kept #45465 and #9465 open as related broader lifecycle-hooks work, and quarantined linked security-sensitive #17529 without letting it block non-security dedupe.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45129 | close_superseded | blocked | superseded | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #62195 | keep_canonical | planned | canonical | Best surviving live canonical for the preHook gate family; merge and fix actions are blocked by the job, so this run only classifies it as canonical. |
| #45129 | close_superseded | planned | superseded | Superseded by the newer open canonical #62195 for the same cron pre-run gating feature, with contributor credit preserved in the planned close comment. |
| #45465 | keep_related | planned | related | Related same cron hooks family, but not a true duplicate because it tracks a broader lifecycle-hooks feature that should remain open separately. |
| #9465 | keep_related | planned | related | Related broader feature-request issue; leave open for maintainer follow-up rather than closing as covered by #62195. |
| #17529 | route_security | planned | security_sensitive | Hydrated linked ref is marked security-sensitive, so it is routed to central OpenClaw security handling only. |

## Needs Human

- none
