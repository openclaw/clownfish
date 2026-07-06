---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-recent_active-20260615T154534-122"
mode: "plan"
run_id: "27560323972-1-123"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T21:38:06.179Z"
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
needs_human_count: 6
---

# pr-inventory-recent_active-20260615T154534-122

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The job explicitly says this is not a dedupe cluster, so no shared canonical is selected. No GitHub mutations are planned; closed PRs are kept closed, active/waiting/review-loop PRs are scoped to human follow-up, and the remaining open PRs are kept independent for normal maintainer review.

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
| Needs human | 6 |

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
| #92430 | keep_independent | planned | independent | Independent open PR; no close, merge, or fix action is allowed in plan mode. |
| #92441 | keep_independent | planned | independent | Broad standalone PR; keep for maintainer review outside this inventory shard. |
| #92445 | keep_independent | planned | independent | Independent channel fix; no security quarantine or close action is supported by the artifact. |
| #92456 | keep_independent | planned | independent | Independent feature/hardening PR; keep for normal technical review. |
| #92440 | keep_closed | skipped |  | Already closed; no mutation should be planned. |
| #91656 | keep_independent | planned | independent | Independent test coverage PR; keep for maintainer review. |
| #92541 | keep_independent | planned | independent | Independent plugin fix; keep for normal review. |
| #92156 | keep_closed | skipped |  | Already closed; no mutation should be planned. |
| #92556 | keep_independent | planned | independent | Independent provider feature; keep for maintainer review. |
| #92394 | keep_independent | planned | independent | Independent UI fix; keep for review rather than closing. |
| #92375 | keep_independent | planned | independent | Independent narrow bug fix; keep for normal review. |
| #92575 | keep_independent | planned | independent | Independent sessions fix; keep for review. |
| #92287 | keep_independent | planned | independent | Independent channel fix; keep for maintainer review. |
| #92570 | keep_closed | skipped |  | Already closed; no mutation should be planned. |
| #92499 | keep_independent | planned | independent | Independent broad memory-core PR; keep for dedicated review. |
| #92591 | keep_independent | planned | independent | Independent channel feature; keep for maintainer review. |
| #92035 | keep_independent | planned | independent | Independent memory feature/fix; keep for review. |
| #91721 | needs_human | planned | needs_human | Specific human decision needed: re-review loop status requires maintainer/author follow-up before any closure or merge classification beyond quarantine-free inventory tracking. |
| #92697 | keep_independent | planned | independent | Independent broad feature PR; keep for dedicated review. |
| #88845 | needs_human | planned | needs_human | Specific human decision needed: broad active release-branch work cannot be safely closed, merged, or classified as low-signal from this artifact. |
| #92860 | keep_independent | planned | independent | Independent small feature PR; keep for review. |
| #89515 | needs_human | planned | needs_human | Specific human decision needed: active author follow-up and docs/product trust judgment remain unresolved. |
| #74564 | needs_human | planned | needs_human | Specific human decision needed: maintainer proof/landing decision for a ClawSweeper replacement PR cannot be made in this inventory plan. |
| #75403 | needs_human | planned | needs_human | Specific human decision needed: maintainer proof/landing decision for repaired ClawSweeper work remains outside this plan shard. |
| #75148 | needs_human | planned | needs_human | Specific human decision needed: active author follow-up blocks automated close/merge classification; no security route is warranted from the hydrated artifact. |

## Needs Human

- #91721 re-review loop status needs maintainer/author follow-up; review details were not hydrated.
- #88845 is broad active release-branch work with blocked merge state and cannot be safely decided by this inventory shard.
- #89515 is waiting on author and involves docs/product trust judgment, but is not security-sensitive per preflight.
- #74564 needs maintainer proof/landing decision for a ClawSweeper replacement PR with unavailable checks.
- #75403 needs maintainer proof/landing decision for repaired ClawSweeper work with unavailable checks.
- #75148 is waiting on author; security-boundary label is not enough to route security because the hydrated artifact reports no security-sensitive signal.
