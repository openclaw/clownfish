---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-5625-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136424322"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136424322"
head_sha: "648e71ed1e7bd7c58c0085195d8e3302fdbfa10f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.265Z"
canonical: "https://github.com/openclaw/openclaw/pull/46502"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/46502"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-5625-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136424322](https://github.com/openclaw/clownfish/actions/runs/25136424322)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/46502

## Summary

Hydrated state supports #46502 as the current open canonical path for the closed #44113 rescue-watchdog family. The two open job candidates, #44441 and #53716, are related but not duplicates or safe closeouts; #44441 is a focused docs-only macOS runbook and #53716 covers a separate gateway failure notification/startup-diagnostics path with failing checks and unresolved review findings. No close, merge, or fix action is planned.

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
| #46502 | keep_canonical | planned | canonical | Current open canonical PR for the rescue-watchdog core family, but no merge or repair action is allowed in this job. |
| #44441 | keep_related | planned | related | Focused related docs follow-up; keep open for maintainer review rather than closing as duplicate or superseded. |
| #53716 | keep_related | planned | related | Related but distinct implementation with unresolved review and CI blockers; no high-confidence close action is available. |
| #36314 | keep_related | planned | related | Open related feature request with broader remaining scope; keep open. |
| #53684 | keep_related | planned | related | Open related issue remains unresolved; no fixed-by-candidate or duplicate closeout is safe. |
| #44113 | keep_closed | skipped | superseded | Closed context ref only; retained as evidence for choosing #46502 as current canonical. |
| #58780 | keep_closed | skipped | fixed_by_candidate | Closed historical context already resolved by merged #71997. |

## Needs Human

- none
