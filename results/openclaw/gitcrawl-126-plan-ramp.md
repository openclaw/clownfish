---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-126-plan-ramp"
mode: "plan"
run_id: "27519851638"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519851638"
head_sha: "22d161e1bb6775432f7eb60a80e61685d748f60c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:12:42.955Z"
canonical: "#92684"
canonical_issue: "#92684"
canonical_pr: "#92731"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-126-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519851638](https://github.com/openclaw/clownfish/actions/runs/27519851638)

Workflow conclusion: success

Worker result: planned

Canonical: #92684

## Summary

Read-only classification completed from the supplied preflight artifact. #92684 remains the live canonical issue. #92731 is the strongest non-security fix candidate for the same doctor false-positive, but no merge or fixed-by-candidate closeout is planned because the job blocks merge/fix actions and merge preflight is not available. #92692 remains related but blocked by failing checks and review feedback. #92691 is security-sensitive in the artifact and is routed to central security handling only.

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
| #92684 | keep_canonical | planned | canonical |  |
| #92691 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for Clownfish backlog cleanup and should be handled by central OpenClaw security triage only. |
| #92692 | keep_related | planned | related | Related candidate, but not safe to close or merge in this plan because it has failing checks and unresolved review feedback. |
| #92731 | keep_related | planned | related | Best current non-security fix candidate, but this worker may only classify in plan mode and cannot recommend a merge without required merge preflight. |
| #92607 | keep_closed | skipped | independent |  |
| #92897 | keep_closed | skipped | independent |  |

## Needs Human

- none
