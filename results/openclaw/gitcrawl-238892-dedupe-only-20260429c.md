---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238892-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107798912"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107798912"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.672Z"
canonical: "https://github.com/openclaw/openclaw/issues/50248"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50248"
canonical_pr: "https://github.com/openclaw/openclaw/pull/69954"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238892-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107798912](https://github.com/openclaw/clownfish/actions/runs/25107798912)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50248

## Summary

Hydrated state supports #50248 as the canonical open cleanup-safety issue, with #69954 as the active but not merge-ready implementation PR. #63897 and #72167 are already closed and receive no close actions. #46369/#46506 and #73471 are related but distinct workstreams and should stay open. No GitHub mutations, merge, or fix PR actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #24753 | keep_closed | skipped | related | Already closed historical context; no mutation is allowed or needed. |
| #27508 | keep_closed | skipped | related | Already closed historical predecessor; no mutation is allowed or needed. |
| #46369 | keep_related | planned | related | Same session/cron area, but different root cause and validation path; keep open as a related subcluster. |
| #46506 | keep_related | planned | related | Useful related PR, but it is not merge-ready and is outside this dedupe-only cluster's closure target. |
| #50248 | keep_canonical | planned | canonical | Best live canonical issue for the cleanup-specific stale sessionFile safety bug. |
| #63897 | keep_closed | skipped | duplicate | Already closed duplicate of #50248; no close action may be emitted. |
| #69954 | keep_canonical | planned | canonical | Canonical implementation candidate for #50248, but merge/fix actions are blocked by job policy and unresolved bot review feedback. |
| #72167 | keep_closed | skipped | superseded | Already closed superseded PR; no mutation is allowed or needed. |
| #73471 | keep_related | planned | related | Related orphan/transcript classification family, but distinct root cause and owner surface; keep open separately. |

## Needs Human

- none
