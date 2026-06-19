---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-045"
mode: "plan"
run_id: "27560323972-1-48"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T00:25:26.199Z"
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

# pr-inventory-needs_proof-20260615T154534-045

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was provided or inferred. Hydrated open PRs are kept as independent work because the shard is not a dedupe cluster and merge/fix/low-signal closeout are disabled; unhydrated job refs require human rehydration before classification.

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
| #76473 | keep_independent | planned | independent | Open, focused PR with failed proof and no duplicate/canonical evidence; keep as independent backlog item. |
| #76479 | keep_independent | planned | independent | Docs PR is not closable in this run because low-signal closeout is disabled and no duplicate/superseding evidence is hydrated. |
| #76490 | keep_independent | planned | independent | Non-security message-delivery fix candidate with failed proof; keep independent for normal review/proof. |
| #76590 | keep_independent | planned | independent | Focused sandbox bugfix candidate but proof/merge gates are not satisfied in this plan-only cleanup shard. |
| #76617 | keep_independent | planned | independent | Channel-specific fix should remain as an independent candidate pending proof. |
| #76618 | keep_independent | planned | independent | Small provider compatibility PR remains independent pending real behavior proof. |
| #76631 | keep_independent | planned | independent | Docs PR is waiting on author and lacks closure authority/evidence, so keep independent. |
| #76709 | keep_independent | planned | independent | Matrix compatibility fix candidate remains independent pending proof. |
| #76717 | keep_independent | planned | independent | Large feature PR needs maintainer/product review and working proof; keep independent rather than close or merge. |
| #77996 | keep_independent | planned | independent | Substantial web UI/session-state PR should remain independent for proof and review. |
| #78009 | keep_independent | planned | independent | Broad docs/automation rewrite has unresolved proof/review context and cannot be closed or merged in this plan. |
| #78020 | keep_independent | planned | independent | Telegram message-delivery PR remains an independent candidate pending proof. |
| #78022 | keep_independent | planned | independent | Non-security channel compatibility fix candidate should stay independent until proof/review completes. |
| #78026 | keep_independent | planned | independent | Focused UI fix is blocked by failing checks and remains independent. |
| #78033 | keep_independent | planned | independent | Unmodifiable contributor branch with failing checks and bot-review context should remain independent; no replacement fix is allowed. |
| #78034 | keep_independent | planned | independent | Focused UI fix has failing checks and should remain independent pending repair/proof. |
| #78035 | keep_independent | planned | independent | Strong candidate but merge is out of scope for this plan; keep independent for maintainer merge/review path. |
| #78075 | keep_independent | planned | independent | Plugin runtime fix candidate remains independent pending proof. |
| #78084 | keep_independent | planned | independent | Plugin contract compatibility PR is independent and needs proof/review before any merge decision. |
| #78085 | keep_independent | planned | independent | Focused compatibility fix remains independent until failing checks/proof are resolved. |
| #78124 | needs_human | blocked | needs_human | Requires rehydration before classification. |
| #78129 | needs_human | blocked | needs_human | Requires rehydration before classification. |
| #78130 | needs_human | blocked | needs_human | Requires rehydration before classification. |
| #78154 | needs_human | blocked | needs_human | Requires rehydration before classification. |
| #78226 | needs_human | blocked | needs_human | Requires rehydration before classification and security-boundary review. |

## Needs Human

- #78124 requires preflight hydration before classification.
- #78129 requires preflight hydration before classification.
- #78130 requires preflight hydration before classification.
- #78154 requires preflight hydration before classification.
- #78226 requires preflight hydration before classification and security-boundary review.
