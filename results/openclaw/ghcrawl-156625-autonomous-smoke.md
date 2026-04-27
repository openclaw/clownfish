---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156625-autonomous-smoke"
mode: "autonomous"
run_id: "24980261072"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24980261072"
head_sha: "40a5c7418ff46bf3e60da63dc6e2345c96900f78"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:40:06.176Z"
canonical: "https://github.com/openclaw/openclaw/issues/48360"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48360"
canonical_pr: null
actions_total: 19
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156625-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24980261072](https://github.com/openclaw/clownfish/actions/runs/24980261072)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/48360

## Summary

Classified the hydrated gateway probe/status cluster from the preflight artifact. #48360 remains the canonical non-security tracker for loopback gateway probe false-negative timeout/close behavior; #64400 and #47981 are quarantined as security-sensitive; no close or merge actions are planned because open non-security items are related/independent rather than exact duplicates and the canonical fix has not landed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 19 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #42019 | keep_closed | skipped | duplicate | Already closed duplicate context only. |
| #47981 | route_security | planned | security_sensitive | Security-sensitive PR must be routed to central OpenClaw security handling without ProjectClownfish mutation. |
| #48084 | keep_closed | skipped | independent | Already closed independent context. |
| #48087 | keep_closed | skipped | independent | Already closed independent context. |
| #48360 | keep_canonical | planned | canonical | #48360 remains the best live canonical issue for the non-security gateway probe false-negative family. |
| #49180 | keep_closed | skipped | superseded | Already closed superseded context; no close action is valid. |
| #49236 | keep_closed | skipped | independent | Already closed independent context. |
| #49297 | keep_closed | skipped | independent | Already closed independent context. |
| #49305 | keep_related | planned | related | Related health/state reporting family, not a duplicate of the canonical gateway probe issue. |
| #49311 | keep_independent | planned | independent | Separate root cause and remediation path. |
| #49758 | keep_closed | skipped | superseded | Already closed superseded context. |
| #51016 | keep_closed | skipped | fixed_by_candidate | Already closed implemented context. |
| #51357 | keep_closed | skipped | superseded | Already closed superseded context. |
| #59287 | keep_related | planned | related | Related diagnostics family with a distinct channel health JSON root cause. |
| #62762 | keep_related | planned | related | Related open tracker with unique reproduction detail and broader impact. |
| #64400 | route_security | planned | security_sensitive | Security-sensitive issue must be quarantined and routed to central OpenClaw security handling. |
| #64511 | keep_closed | skipped | superseded | Closed contributor PR is historical evidence only; no close or merge action is valid. |
| cluster:ghcrawl-156625-autonomous-smoke | fix_needed | planned |  | A narrow non-security fix path is needed for the canonical gateway probe false-negative behavior. |
| cluster:ghcrawl-156625-autonomous-smoke | build_fix_artifact | planned |  | Build a narrow replacement fix artifact for #48360 rather than merging quarantined or closed PRs. |

## Needs Human

- none
