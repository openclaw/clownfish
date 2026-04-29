---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14107-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129758286"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129758286"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T19:50:44.407Z"
canonical: "https://github.com/openclaw/openclaw/issues/63272"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63272"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14107-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129758286](https://github.com/openclaw/clownfish/actions/runs/25129758286)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63272

## Summary

Kept #63272 as the live canonical issue for the CLI `skills uninstall` design. No close actions are planned because the duplicate/superseded cluster refs are already closed, and the only open linked PR (#69319) is a related Gateway RPC implementation with separate scope plus unresolved review/check blockers.

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
| #14264 | keep_closed | skipped | superseded | Historical duplicate/superseded context only; already closed. |
| #17503 | keep_closed | skipped | related | Closed historical PR on an orthogonal surface. |
| #63272 | keep_canonical | planned | canonical | Best live canonical issue for the cluster; no open duplicate is eligible for closure. |
| #64197 | keep_closed | skipped | superseded | Closed historical Gateway PR superseded by the newer hydrated Gateway uninstall path. |
| #69299 | keep_closed | skipped | superseded | Closed Gateway issue already routed to the hydrated open Gateway PR #69319. |
| #69319 | keep_related | planned | related | Related Gateway implementation path; keep open because it is not the CLI canonical and has unresolved review/check blockers. |

## Needs Human

- none
