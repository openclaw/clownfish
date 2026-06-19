---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-086"
mode: "plan"
run_id: "27560323972-1-88"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T02:41:54.690Z"
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

# pr-inventory-ready_for_maintainer-20260615T154534-086

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job explicitly says this is not a dedupe cluster. Hydrated open PRs are classified independently for maintainer review; unhydrated refs are blocked only for missing live preflight state.

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
| #67077 | keep_independent | planned | independent | Independent open PR; no close, merge, or fix action is allowed in plan mode for this shard. |
| #92956 | needs_human | blocked | needs_human | Live preflight state is unavailable for this candidate. |
| #67946 | keep_independent | planned | independent | Independent open PR with no shared canonical in this inventory shard. |
| #68079 | keep_independent | planned | independent | Independent provider feature PR; maintainer review remains separate from this inventory classification. |
| #68558 | keep_independent | planned | independent | Independent PR; failing proof blocks any merge/fixed-by path but does not block non-mutating classification. |
| #68677 | keep_independent | planned | independent | Independent performance fix PR with no dedupe closeout target. |
| #65359 | keep_independent | planned | independent | Independent config compatibility fix PR. |
| #89349 | keep_independent | planned | independent | Independent agent behavior fix; no route_security signal in the preflight artifact. |
| #89618 | keep_independent | planned | independent | Independent provider feature PR; failing dependency guard blocks merge consideration only. |
| #89628 | keep_independent | planned | independent | Independent CLI performance PR. |
| #64782 | keep_independent | planned | independent | Independent gateway/session-state PR; size and review history require normal maintainer review. |
| #65065 | keep_independent | planned | independent | Independent CLI/docs PR. |
| #65783 | keep_independent | planned | independent | Independent memory fix PR; failing proof blocks merge-style recommendation. |
| #68967 | keep_independent | planned | independent | Independent Google Chat feature PR; conflicts and failing checks block any merge or close-as-fixed path. |
| #69059 | keep_independent | planned | independent | Independent Windows compatibility fix; failing checks block merge-style recommendation. |
| #69417 | keep_independent | planned | independent | Independent broad config/secrets-surface PR; no automated closeout or merge is appropriate in this shard. |
| #69707 | keep_independent | planned | independent | Independent memory-lancedb compatibility PR. |
| #69822 | keep_independent | planned | independent | Independent gateway availability/message-delivery PR. |
| #70002 | keep_independent | planned | independent | Independent automation PR; failing proof and risky-infra label require normal maintainer review. |
| #89648 | needs_human | blocked | needs_human | Live preflight state is unavailable for this candidate. |
| #89671 | needs_human | blocked | needs_human | Live preflight state is unavailable for this candidate. |
| #80947 | keep_independent | planned | independent | Independent docs/doctor PR. |
| #92947 | needs_human | blocked | needs_human | Live preflight state is unavailable for this candidate. |
| #92990 | needs_human | blocked | needs_human | Live preflight state is unavailable for this candidate. |
| #40874 | keep_independent | planned | independent | Independent iOS feature PR; failing proof and unresolved bot-review history block merge-style recommendation. |

## Needs Human

- #92956 lacks hydrated preflight state and target_updated_at in the compacted artifact.
- #89648 lacks hydrated preflight state and target_updated_at in the compacted artifact.
- #89671 lacks hydrated preflight state and target_updated_at in the compacted artifact.
- #92947 lacks hydrated preflight state and target_updated_at in the compacted artifact.
- #92990 lacks hydrated preflight state and target_updated_at in the compacted artifact.
