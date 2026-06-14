---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2491-autonomous-smoke"
mode: "autonomous"
run_id: "27488930442"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27488930442"
head_sha: "174f98c691cc8ad2a6c29f671541c354831222e1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T05:05:45.238Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2491-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27488930442](https://github.com/openclaw/clownfish/actions/runs/27488930442)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Cluster classification used the hydrated preflight artifact. #51347 and linked #27884 are security-sensitive in the artifact, so they are routed item-by-item to central security handling; all other hydrated refs are already closed evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #27884 | route_security | planned | security_sensitive | Security-sensitive linked ref must be quarantined to central OpenClaw security triage. |
| #51347 | route_security | planned | security_sensitive | Open candidate #51347 is security-sensitive in the hydrated artifact and must be routed to central OpenClaw security triage. |
| #40623 | keep_closed | skipped | fixed_by_candidate | Already merged and closed; no mutation planned. |
| #49082 | keep_closed | skipped | superseded | Closed superseded PR retained as evidence only. |
| #51375 | keep_closed | skipped | superseded | Closed superseded PR retained as evidence only. |
| #53917 | keep_closed | skipped | fixed_by_candidate | Closed representative retained as evidence only; it is not a live canonical target. |
| #57156 | keep_closed | skipped | fixed_by_candidate | Closed context ref retained as evidence only. |
| #58591 | keep_closed | skipped | superseded | Closed superseded PR retained as evidence only. |

## Needs Human

- none
