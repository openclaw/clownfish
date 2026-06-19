---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-071"
mode: "plan"
run_id: "27560323972-1-74"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T01:31:37.980Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 5
---

# pr-inventory-needs_proof-20260615T154534-071

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. This shard has no shared canonical and merge/fix/low-signal closeout are disabled, so hydrated open PRs are classified independently unless live state is missing.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 5 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72829 | keep_independent | planned | independent | Independent open PR needing proof; no shared canonical or close basis. |
| #72972 | keep_independent | planned | independent | Independent Feishu fix needing proof. |
| #73168 | keep_independent | planned | independent | Independent Android auth feature; no closure or merge path in this plan. |
| #73294 | keep_independent | planned | independent | Independent candidate remains open and not merge-ready. |
| #74232 | keep_independent | planned | independent | Independent agent/session fix needing proof. |
| #74954 | keep_independent | planned | independent | Independent broad auth-provider fix; no close or merge action allowed. |
| #75066 | keep_independent | planned | independent | Independent session-state fix needing proof. |
| #93202 | needs_human | planned | needs_human | Live hydrated state is unavailable from the provided artifact, so the worker cannot emit a target_updated_at-backed classification. |
| #80599 | keep_independent | planned | independent | Independent PR with proof but blocked merge gates. |
| #86338 | keep_independent | planned | independent | Independent draft PR; keep open. |
| #87102 | keep_independent | planned | independent | Independent agent compatibility fix needing proof. |
| #93210 | needs_human | planned | needs_human | Missing hydrated state and security posture for the exact PR require human follow-up. |
| #87521 | keep_independent | planned | independent | Independent infra fix with failed gates. |
| #87526 | keep_independent | planned | independent | Independent Volcengine provider feature needing proof. |
| #87527 | keep_independent | planned | independent | Independent small compatibility fix needing proof. |
| #87528 | keep_independent | planned | independent | Independent web UI/gateway fix needing proof. |
| #87545 | keep_independent | planned | independent | Independent test PR needing proof. |
| #87552 | keep_independent | planned | independent | Independent draft PR needing proof. |
| #87592 | keep_independent | planned | independent | Independent UI feature needing proof and product review. |
| #87759 | keep_independent | planned | independent | Independent feature with proof but no merge action allowed. |
| #87784 | keep_independent | planned | independent | Independent Slack fix with proof but no merge action allowed. |
| #87793 | keep_independent | planned | independent | Independent Codex extension fix with failed/skipped gates. |
| #87937 | needs_human | planned | needs_human | Live hydrated state is unavailable from the provided artifact. |
| #90740 | needs_human | planned | needs_human | Live hydrated state is unavailable from the provided artifact. |
| #90932 | needs_human | planned | needs_human | Live hydrated state is unavailable from the provided artifact. |

## Needs Human

- #93202 missing hydrated live state and target_updated_at in the provided preflight artifact.
- #93210 missing hydrated live state, target_updated_at, and exact security-sensitive posture in the provided preflight artifact.
- #87937 missing hydrated live state and target_updated_at in the provided preflight artifact.
- #90740 missing hydrated live state and target_updated_at in the provided preflight artifact.
- #90932 missing hydrated live state and target_updated_at in the provided preflight artifact.
