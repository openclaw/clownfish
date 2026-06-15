---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-116-plan-ramp"
mode: "plan"
run_id: "27516216388"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516216388"
head_sha: "55c1d70c5da8da84c47be43e492f5bca34739d4e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T00:02:45.769Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27516216388](https://github.com/openclaw/clownfish/actions/runs/27516216388)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan mode only. The hinted representative #75148 is open but must be quarantined as security-sensitive from the hydrated preflight artifact. The remaining live non-security work splits into separate canonical PRs for distinct auth/model root causes (#74564 and #75223). The other listed candidates are already closed in live state, so no close actions are planned.

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
| #74564 | keep_canonical | planned | canonical | Keep #74564 as the canonical PR for the separate `/models` provider-data auth-scope subcluster; do not close or merge it from this cluster. |
| #75148 | route_security | planned | security_sensitive | Route only #75148 to central OpenClaw security handling; continue classifying unrelated non-security candidates. |
| #75223 | keep_canonical | planned | canonical | Keep #75223 as the canonical PR for the separate CLI auth status/probe subcluster; do not close or merge it from this cluster. |
| #75388 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by the later #83498/current-main behavior; no mutation is valid. |
| #75397 | keep_closed | skipped | superseded | Already closed as superseded by current-main implementation; no mutation is valid. |

## Needs Human

- none
