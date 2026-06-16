---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14009-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599299275"
workflow_run_id: "27599299275"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599299275"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:48:18.527Z"
canonical: "https://github.com/openclaw/openclaw/tree/20964d3e3bbcab4f842e84843fb0b93882fd6dfc"
canonical_issue: null
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14009-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599299275](https://github.com/openclaw/clownfish/actions/runs/27599299275)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/20964d3e3bbcab4f842e84843fb0b93882fd6dfc

## Summary

Live preflight shows every job-listed open candidate and the representative are already closed. No close/comment/label/merge/fix mutations are valid. #52207 is the only security-sensitive hydrated item and is quarantined for central security handling; unrelated closed items are kept closed as historical context.

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
| #47279 | keep_closed | skipped | fixed_by_candidate | Representative is obsolete and already closed; no open canonical replacement is needed in this close-only job. |
| #19075 | keep_closed | skipped | fixed_by_candidate | Already closed in live preflight; no mutation is valid. |
| #52207 | route_security | planned | security_sensitive | Exact security-sensitive ref is quarantined for central security triage; no public mutation is planned. |
| #54116 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #54928 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #54939 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #57194 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #57496 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #61972 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #65940 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid. |
| #66645 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid. |

## Needs Human

- none
