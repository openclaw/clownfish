---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-550-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610225660"
workflow_run_id: "27610225660"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610225660"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.500Z"
canonical: "https://github.com/openclaw/openclaw/issues/55600"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55600"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-550-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610225660](https://github.com/openclaw/clownfish/actions/runs/27610225660)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/55600

## Summary

Kept #55600 as the live canonical issue for the remaining Control UI logo/favicon/static-asset behavior. #56357 is an open linked PR with explicit security-boundary signals, so it is quarantined only for central security handling. Closed linked PRs are retained as historical evidence and receive no close actions. No fix PR, merge, or post-merge closeout is allowed by this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #55600 | keep_canonical | planned | canonical | #55600 remains the best live canonical issue. It has unresolved unique reproduction/context and no safe close or fix action is available in this close-only job. |
| #56357 | route_security | planned | security_sensitive | Security-sensitive linked PRs must be routed to central OpenClaw security handling without comment, close, merge, label, or fix action from Clownfish. |
| #7178 | keep_closed | skipped | related | Already closed related context; no mutation is valid. |
| #53272 | keep_closed | skipped | related | Already closed related context; no mutation is valid. |
| #53411 | keep_closed | skipped | related | Already closed related context; no mutation is valid. |

## Needs Human

- none
