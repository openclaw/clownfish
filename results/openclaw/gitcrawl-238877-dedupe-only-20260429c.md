---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238877-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102982937"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102982937"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.138Z"
canonical: "https://github.com/openclaw/openclaw/pull/42482"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42482"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238877-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102982937](https://github.com/openclaw/clownfish/actions/runs/25102982937)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42482

## Summary

#42482 remains the best live canonical PR for the remaining per-attempt AbortController / fallback-poisoning cron issue. #42680 is already closed and must not receive a close action. #52365 is related cron fallback-budget work with distinct remaining scope, failing checks, broad delta, and unresolved review-bot findings, so it should stay open outside this dedupe closeout.

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
| #42482 | keep_canonical | planned | canonical | Best surviving canonical path for the remaining non-security cron fallback-poisoning bug; keep open for maintainer review or later repair. |
| #42680 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid for this target. |
| #52365 | keep_related | planned | related | Related but distinct useful contributor PR; keep open and do not close as duplicate or superseded in this dedupe-only job. |

## Needs Human

- none
