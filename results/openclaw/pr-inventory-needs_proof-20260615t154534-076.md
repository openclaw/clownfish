---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-076"
mode: "plan"
run_id: "27560323972-1-79"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T16:45:39.838Z"
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

# pr-inventory-needs_proof-20260615T154534-076

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected; no close, merge, fix, label, or comment mutation is planned. Hydrated open PRs are kept independently for normal maintainer review/proof. Unhydrated listed refs require targeted hydration before classification.

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
| #75011 | keep_independent | planned | independent | Open docs PR needs normal proof/review, not closure in this shard. |
| #75024 | keep_independent | planned | independent | Feishu behavior fix remains a standalone PR needing proof. |
| #75270 | keep_independent | planned | independent | Substantial open PR with bot-review history should remain in maintainer review, not inventory closeout. |
| #76332 | keep_independent | planned | independent | Open subagent lifecycle PR is blocked by proof/check failures, not eligible for closure or merge planning. |
| #84666 | keep_independent | planned | independent | Narrow PR appears reviewable but merge/fix actions are blocked in plan mode and by job policy. |
| #84763 | keep_independent | planned | independent | Exec-adjacent provider credential handling is non-security per artifact posture but still needs normal proof/review. |
| #85664 | keep_independent | planned | independent | Standalone feature PR should stay open for maintainer review; no closure or merge allowed. |
| #74411 | keep_independent | planned | independent | Open browser feature PR has failing checks/proof and should remain independent. |
| #85696 | keep_independent | planned | independent | Draft PR with bot-review history should remain open; no merge or close action is appropriate. |
| #93184 | needs_human | blocked | needs_human | Hydrate this PR before classification. |
| #88738 | keep_independent | planned | independent | Small docs PR may be low-priority but closure is not allowed by this job. |
| #88961 | keep_independent | planned | independent | Draft PR should remain open for author/maintainer follow-up. |
| #88962 | keep_independent | planned | independent | Dirty/broad open PR needs maintainer or author narrowing; keep independent. |
| #88971 | keep_independent | planned | independent | Reviewable standalone PR, but merge is disallowed and no close basis exists. |
| #88980 | keep_independent | planned | independent | Open Telegram behavior PR needs proof; not eligible for closeout. |
| #89014 | keep_independent | planned | independent | Potential overlap with #89083 needs maintainer judgment outside closure automation; keep independent. |
| #89033 | keep_independent | planned | independent | Broad feature PR with proof failure remains independent for maintainer review. |
| #93262 | needs_human | blocked | needs_human | Hydrate this PR before classification. |
| #89083 | keep_independent | planned | independent | Potential overlap with #89014 should stay open for maintainer selection; no automatic closeout. |
| #89086 | keep_independent | planned | independent | Narrow reviewable PR remains independent; merge is disallowed. |
| #93256 | needs_human | blocked | needs_human | Hydrate this PR before classification. |
| #89099 | keep_independent | planned | independent | Standalone gateway PR needs proof; no inventory closeout. |
| #89107 | keep_independent | planned | independent | Secrets-related feature is non-security per artifact but requires normal proof/review. |
| #89117 | needs_human | blocked | needs_human | Hydrate this PR before classification. |
| #89190 | needs_human | blocked | needs_human | Hydrate this PR before classification. |

## Needs Human

- #93184 requires hydration before classification.
- #93262 requires hydration before classification.
- #93256 requires hydration before classification.
- #89117 requires hydration before classification.
- #89190 requires hydration before classification.
