---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238861-dedupe-only-20260429c"
mode: "autonomous"
run_id: "27594232100"
workflow_run_id: "27594232100"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27594232100"
head_sha: "8364aec238559663a0a8644042702a5c6ccea4db"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T04:34:46.708Z"
canonical: "https://github.com/openclaw/openclaw/pull/73228"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73228"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238861-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27594232100](https://github.com/openclaw/clownfish/actions/runs/27594232100)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73228

## Summary

Classified the cluster against the hydrated preflight artifact and target checkout. The live non-mutating evidence path is merged PR #73228 on current main, but the security-shaped issue/PR refs #24693, #68667, and #73228 are quarantined to central security handling only. #39046 is an open draft PR with the same behavior and no unique remaining delta, so it can be closed as superseded by the landed replacement evidence. Closed linked refs are kept as historical evidence.

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
| #39046 | close_superseded | blocked | superseded | canonical is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #24693 | route_security | planned | security_sensitive | Security-sensitive ref must be routed to central OpenClaw security triage without ProjectClownfish mutation. |
| #39046 | close_superseded | planned | superseded | The open draft PR is fully covered by the already-merged hydrated replacement #73228 and has no unique remaining work shown in the artifact. |
| #68667 | route_security | planned | security_sensitive | Security-sensitive PR ref must be routed to central OpenClaw security triage without ProjectClownfish mutation. |
| #73228 | route_security | planned | security_sensitive | Security-sensitive PR ref must be routed to central OpenClaw security triage without ProjectClownfish mutation. |
| #24016 | keep_closed | skipped | related | Closed related context only; not a target for this cluster's closeout. |

## Needs Human

- none
