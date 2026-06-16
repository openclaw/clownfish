---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-5707-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595877196"
workflow_run_id: "27595877196"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595877196"
head_sha: "d9b9bfb6cf45a4e1ff3cbc2c7635601fa862d87f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:26:37.853Z"
canonical: "https://github.com/openclaw/openclaw/pull/18889"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/18889"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-5707-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595877196](https://github.com/openclaw/clownfish/actions/runs/27595877196)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/18889

## Summary

Live hydrated state shows the representative #44348 is now closed, so it is historical evidence rather than the surviving canonical. The best surviving non-security canonical path is open PR #18889 for agent/tool lifecycle hook boundaries, but it is not merge-ready and this job does not allow merge, fix, or replacement PR work. No duplicate close actions are planned because all other job-listed candidates are already closed or security-routed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #18889 | keep_canonical | planned | canonical | #18889 is the only open job candidate that directly represents the cluster's surviving non-security lifecycle hook work. |
| #44348 | keep_closed | skipped | superseded | Representative is obsolete because it is already closed. |
| #40044 | keep_closed | skipped | related | Closed adjacent context PR, not an open target for this run. |
| #44011 | keep_closed | skipped | superseded | Already closed as superseded; #18889 remains the surviving canonical path. |
| #47491 | keep_closed | skipped | related | Closed related PR; no mutation planned. |
| #56036 | keep_closed | skipped | related | Closed related PR; no mutation planned. |
| #56672 | keep_closed | skipped | related | Closed related PR; no mutation planned. |
| #59312 | keep_closed | skipped | related | Closed related PR; no mutation planned. |
| #54725 | route_security | planned | security_sensitive | Exact ref is marked security-sensitive in hydrated preflight. |
| #55742 | route_security | planned | security_sensitive | Exact ref is marked security-sensitive in hydrated preflight. |
| #66312 | route_security | planned | security_sensitive | Exact ref is marked security-sensitive in hydrated preflight. |

## Needs Human

- none
