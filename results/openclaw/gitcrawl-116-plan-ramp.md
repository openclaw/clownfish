---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-116-plan-ramp"
mode: "plan"
run_id: "27518750927"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518750927"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.093Z"
canonical: null
canonical_issue: null
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

# gitcrawl-116-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518750927](https://github.com/openclaw/clownfish/actions/runs/27518750927)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification for gitcrawl cluster 116. The hinted canonical #75148 is security-sensitive in the hydrated preflight artifact and must be routed to central security handling, so it should not be used as the cleanup canonical. The remaining open PRs split into separate non-security auth/provider regressions, while the listed closed PRs are already closed and require no mutation.

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
| #75148 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish backlog cleanup scope and should be routed centrally without poisoning unrelated items. |
| #74564 | keep_independent | planned | independent | Separate non-security auth/provider bug; no close or merge action is appropriate in this plan-only cluster. |
| #75223 | keep_independent | planned | independent | Separate non-security CLI auth/probe regression; keep it as an independent candidate rather than forcing it under the security-routed representative. |
| #75388 | keep_closed | skipped | superseded | Already closed; historical message-delivery follow-up is covered by later merged #83498, but no mutation is allowed or needed. |
| #75397 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on current main; keep as historical context only. |

## Needs Human

- none
