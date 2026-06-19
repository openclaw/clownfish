---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-083"
mode: "plan"
run_id: "27560323972-1-85"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T01:31:38.088Z"
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

# pr-inventory-ready_for_maintainer-20260615T154534-083

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification shard. No shared canonical was selected; each hydrated PR is classified independently, already-closed PR #91693 is skipped, and refs missing hydrated preflight state are held for targeted human/live-state follow-up.

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
| #92147 | keep_independent | planned | independent | Independent draft provider-compatibility PR; no closure or merge action is allowed in plan mode. |
| #92165 | keep_independent | planned | independent | Independent contributor PR with author-followup signal; keep for maintainer/author path rather than closing. |
| #92174 | keep_independent | planned | independent | Independent provider feature PR with broad compatibility/auth-provider review surface; no duplicate closeout. |
| #91693 | keep_closed | skipped | superseded | Already closed in hydrated live state; closure action is invalid. |
| #92196 | keep_independent | planned | independent | Independent focused memory-core fix; keep for normal maintainer review. |
| #92176 | keep_independent | planned | independent | Independent focused model-resolution fix; keep for maintainer review. |
| #92376 | keep_independent | planned | independent | Independent approval UX fix with author-followup signal; keep rather than close. |
| #91923 | keep_independent | planned | independent | Independent iOS cleanup PR; keep for maintainer review. |
| #91967 | keep_independent | planned | independent | Independent iOS feature PR; keep for maintainer review. |
| #88581 | keep_independent | planned | independent | Independent contributor feature PR with useful code; no duplicate/superseded evidence. |
| #92477 | needs_human | blocked | needs_human | Hydrated live state is missing for this listed candidate; needs targeted rehydration before classification. |
| #91828 | keep_independent | planned | independent | Independent memory-wiki hardening PR; keep for maintainer review. |
| #90089 | keep_independent | planned | independent | Independent sandbox bugfix PR; keep for maintainer review. |
| #91807 | keep_independent | planned | independent | Independent CLI feature/fix PR with author-followup signal; keep rather than close. |
| #92178 | keep_independent | planned | independent | Independent gateway robustness fix; keep for maintainer review. |
| #91499 | needs_human | blocked | needs_human | Broad tool-boundary behavior change with active reviewer/check signals requires maintainer technical judgment. |
| #92484 | needs_human | blocked | needs_human | Hydrated live state is missing and the job body suggests a possible overlap with #92491; needs targeted rehydration. |
| #92594 | needs_human | blocked | needs_human | Hydrated live state is missing for this listed candidate; needs targeted rehydration before classification. |
| #88180 | keep_independent | planned | independent | Independent small prompt fix, but failing proof blocks any merge/fixed-by closeout; keep for maintainer review. |
| #88885 | keep_independent | planned | independent | Independent session-delivery recovery PR; keep for maintainer review. |
| #91481 | keep_independent | planned | independent | Independent approval delivery PR; keep for maintainer review in this plan-only shard. |
| #91600 | keep_independent | planned | independent | Independent logging/session recovery fix; keep for maintainer review. |
| #91870 | keep_independent | planned | independent | Independent provider metadata PR, but failed proof and author-followup signal block stronger action. |
| #92491 | needs_human | blocked | needs_human | Hydrated live state is missing and possible duplicate/superseded relationship needs targeted rehydration. |
| #92495 | needs_human | blocked | needs_human | Hydrated live state is missing for this listed candidate; needs targeted rehydration before classification. |

## Needs Human

- #92477 missing hydrated preflight item; rehydrate before classification.
- #92484 missing hydrated preflight item and may overlap with #92491; rehydrate both before dedupe decision.
- #92594 missing hydrated preflight item; rehydrate before classification.
- #92491 missing hydrated preflight item and may overlap with #92484; rehydrate both before dedupe decision.
- #92495 missing hydrated preflight item; rehydrate before classification.
- #91499 has broad tool-boundary changes, requested reviewer signal, queued Security High/Critical Quality checks, and waiting-on-author status; maintainer technical judgment is required.
