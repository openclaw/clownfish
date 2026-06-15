---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-035"
mode: "plan"
run_id: "27526369400"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526369400"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.360Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-mixed-20260615T0529-035

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526369400](https://github.com/openclaw/clownfish/actions/runs/27526369400)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for 10 listed PRs using the hydrated preflight artifact as live state. No GitHub mutations are planned beyond non-mutating classifications; merge, fix, and low-signal closeout are blocked by job permissions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #85642 | keep_related | planned | related | Open, distinct docs-hardening PR with unresolved review state; not safely closable or mergeable in this plan shard. |
| #85611 | keep_related | planned | related | Useful but blocked doc-hardening PR with unresolved review-bot findings; keep related for maintainer follow-up. |
| #85561 | keep_related | planned | related | Distinct small docs cleanup with pending author/review state; closeout is not allowed by the shard permissions. |
| #85400 | keep_related | planned | related | Keep as related independent benchmark tooling work; no close or merge action is allowed in this plan job. |
| #85293 | keep_related | planned | related | Distinct availability/timeout fix candidate requiring maintainer/proof follow-up; keep related rather than escalating the whole cluster. |
| #85173 | keep_closed | skipped | superseded | Historical closed context only; no action remains for Clownfish applicator. |
| #85134 | route_security | planned | security_sensitive | Security-sensitive boundary-shaped Slack message handling item is out of scope for backlog-cleanup automation. |
| #85004 | route_security | planned | security_sensitive | Closed but security-sensitive plugin boundary item should remain routed to central security handling, with no mutation planned. |
| #84937 | route_security | planned | security_sensitive | Large security-boundary-shaped feature PR is out of ProjectClownfish cleanup scope. |
| #84791 | keep_closed | skipped | fixed_by_candidate | Historical closed context only; no action remains for Clownfish applicator. |

## Needs Human

- none
