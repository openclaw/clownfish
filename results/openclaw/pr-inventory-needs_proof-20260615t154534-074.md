---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-074"
mode: "plan"
run_id: "27560323972-1-77"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T06:55:47.473Z"
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
needs_human_count: 1
---

# pr-inventory-needs_proof-20260615T154534-074

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job explicitly states this is not a dedupe cluster. Hydrated open PRs are kept independently for normal review/proof handling; already-closed PRs are skipped; refs missing from the compacted preflight require live hydration before a target_updated_at-backed classification.

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
| Needs human | 1 |

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
| #89695 | keep_independent | planned | independent | Independent open feature PR; no closure, merge, or fix action is allowed or proven in this plan. |
| #89696 | keep_independent | planned | independent | Independent open feature PR needing ordinary review/proof, not dedupe cleanup. |
| #89702 | keep_independent | planned | independent | Independent open bugfix PR with no hydrated duplicate/superseding target. |
| #89719 | keep_independent | planned | independent | Independent open cron bugfix; keep for normal review. |
| #93247 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact, so a target_updated_at-backed classification cannot be emitted. |
| #89754 | keep_closed | skipped | superseded | Already closed; no action to apply. |
| #52236 | keep_independent | planned | independent | Draft PR with failed proof and bot review signal; keep open independently rather than close or merge. |
| #89768 | keep_closed | skipped | superseded | Already closed; no action to apply. |
| #89772 | keep_independent | planned | independent | Independent open bugfix with failed proof; keep for follow-up review. |
| #92086 | needs_human | blocked | needs_human | Needs live hydrated state before classification because the item is missing from the provided artifact. |
| #89491 | keep_independent | planned | independent | Independent open provider-auth bugfix; no merge allowed in this plan. |
| #89645 | keep_independent | planned | independent | Independent open PR with failing proof/checks; keep for author/maintainer follow-up. |
| #89796 | keep_independent | planned | independent | Independent open feature PR with broad surface; keep for normal review. |
| #93241 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact. |
| #93244 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact. |
| #89687 | keep_independent | planned | independent | Independent open PR; keep for normal maintainer review. |
| #90579 | keep_independent | planned | independent | Independent open media delivery bugfix; no merge or close action allowed in this plan. |
| #90770 | keep_independent | planned | independent | Independent open UI bugfix; keep for review. |
| #90779 | keep_independent | planned | independent | Independent open channel availability bugfix; keep for review. |
| #90817 | keep_independent | planned | independent | Independent open agents bugfix; keep for normal review. |
| #90827 | keep_independent | planned | independent | Independent open PR with failing proof/lint; keep for author or maintainer follow-up. |
| #90828 | keep_independent | planned | independent | Independent open mac gateway bugfix; keep for review. |
| #90887 | keep_independent | planned | independent | Draft broad open PR; keep independently for continued work rather than close or merge. |
| #91315 | keep_independent | planned | independent | Independent open agents bugfix; keep for review. |
| #91479 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact. |

## Needs Human

- Hydrate missing job refs #93247, #92086, #93241, #93244, and #91479 before final target_updated_at-backed classification.
