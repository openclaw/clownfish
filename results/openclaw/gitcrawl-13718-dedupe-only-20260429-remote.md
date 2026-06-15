---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13718-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109758922"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109758922"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.752Z"
canonical: "https://github.com/openclaw/openclaw/issues/67915"
canonical_issue: "https://github.com/openclaw/openclaw/issues/67915"
canonical_pr: "https://github.com/openclaw/openclaw/pull/67916"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13718-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109758922](https://github.com/openclaw/clownfish/actions/runs/25109758922)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/67915

## Summary

Hydrated state shows no security-sensitive refs. The obsolete representative #66206 and the other context refs are already closed. The current live canonical issue is #67915, with open PR #67916 as the focused candidate fix; keep both open because the PR is unmerged and merge/fix actions are blocked for this job.

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
| #60046 | keep_closed | skipped | related | Already closed in hydrated live state; no mutation is valid. |
| #66206 | keep_closed | skipped | related | Already closed in hydrated live state; use #67915/#67916 as the current live canonical path instead. |
| #67915 | keep_canonical | planned | canonical | This is the current open canonical issue; do not close it before #67916 lands or maintainers choose a replacement fix. |
| #67916 | keep_canonical | planned | canonical | This is the focused open candidate fix for canonical issue #67915; keep it open for normal maintainer review rather than closing or merging in this dedupe-only job. |
| #69183 | keep_closed | skipped | related | Already closed in hydrated live state; related historical context only. |
| #71052 | keep_closed | skipped | related | Already closed in hydrated live state; no mutation is valid. |

## Needs Human

- none
