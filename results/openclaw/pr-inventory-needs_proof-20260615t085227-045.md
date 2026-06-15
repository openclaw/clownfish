---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T085227-045"
mode: "plan"
run_id: "178151585733"
run_url: null
head_sha: null
workflow_conclusion: null
result_status: "needs_human"
published_at: "2026-06-15T09:36:31.067Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# pr-inventory-needs_proof-20260615T085227-045

Repo: openclaw/openclaw

Run: unknown

Workflow conclusion: unknown

Worker result: needs_human

Canonical: unknown

## Summary

Plan only. The preflight artifact could not hydrate either PR because GitHub API rate limit was exceeded, so no reliable live state, target kind, updated_at, PR diff, checks, or comments are available. No close, label, comment, merge, or fix action is safe from this artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #56785 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated live PR state. Re-run after GitHub API quota recovers. |
| #59141 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated live PR state. Re-run after GitHub API quota recovers. |

## Needs Human

- #56785 requires refreshed hydration before classification.
- #59141 requires refreshed hydration before classification.
