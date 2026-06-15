---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-899-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526242802"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526242802"
head_sha: "df0ecb937a5f73036ef8def5c1f076a5c228a0d6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:37:32.191Z"
canonical: null
canonical_issue: null
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

# gitcrawl-899-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526242802](https://github.com/openclaw/clownfish/actions/runs/27526242802)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification: both hydrated refs are already closed. #86872 is not actionable; #92642 is a job-marked security-signal ref and is routed to central security handling without blocking the ordinary closed-state classification for #86872.

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
| #86872 | keep_closed | skipped | fixed_by_candidate | Already closed in the hydrated preflight artifact; no open issue remains to close or re-canonicalize. |
| #92642 | route_security | planned | security_sensitive | The job explicitly marks this PR as a security-signal ref requiring central security routing; route only this item and perform no mutation. |

## Needs Human

- none
