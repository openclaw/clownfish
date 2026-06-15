---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-029"
mode: "plan"
run_id: "27526361318"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526361318"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:45:03.650Z"
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
needs_human_count: 1
---

# pr-inventory-mixed-20260615T0529-029

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526361318](https://github.com/openclaw/clownfish/actions/runs/27526361318)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job is an inventory shard. Open non-security PRs are kept for normal maintainer review unless the hydrated artifact identifies security-sensitive routing or missing live state blocks classification. Closed PRs are recorded as already closed only.

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
| Needs human | 1 |

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
| #75716 | keep_independent | planned | independent | Useful contributor PR, but not part of a shared dedupe cluster and not merge-ready under the artifact review state. |
| #86127 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #80649 | needs_human | planned | needs_human | The branch combines locale copy with runtime timeout behavior, so maintainer judgment is needed on scope before any cleanup or merge recommendation. |
| #81415 | route_security | planned | security_sensitive | Security-sensitive item is quarantined to central OpenClaw security handling; unrelated non-security PRs remain classified. |
| #81362 | keep_independent | planned | independent | Useful contributor PR with attribution concerns and failing checks; keep for normal review rather than close or merge from this inventory shard. |
| #80770 | route_security | planned | security_sensitive | The PR touches exec/apply_patch authority behavior and is explicitly routed as security-sensitive in the artifact. |
| #81300 | keep_independent | planned | independent | Focused but blocked PR; no dedupe, close, fix, or merge action is allowed by this inventory plan. |
| #79962 | keep_related | planned | related | Related to the session lineage family, but not a duplicate and not safely closable or mergeable from this inventory shard. |
| #85362 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #87761 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |

## Needs Human

- #80649 requires maintainer judgment because the PR mixes Indonesian locale changes with Code Mode QuickJS timeout/runtime changes.
