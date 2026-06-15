---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3007-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142525454"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142525454"
head_sha: "635e49e8d0f5f1f39d5a829d2a709a0e61ee5f73"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:05:51.324Z"
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
needs_human_count: 1
---

# gitcrawl-3007-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142525454](https://github.com/openclaw/clownfish/actions/runs/25142525454)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Hydrated refs show two open, useful WhatsApp PRs covering the same allowFrom/outbound root cause, but choosing between #48387's narrow explicit-target bypass and #49549's fuller allowTo model requires maintainer product and authorization judgment. No close, label, merge, or fix action is safe from this dedupe-only job.

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
| #48387 | needs_human | blocked | needs_human | Canonical choice is unclear: #48387 is useful and narrow but represents the explicit-target bypass model, while #49549 implements a broader allowTo model. The hydrated bot review explicitly asks for maintainer judgment between those paths. |
| #49549 | needs_human | blocked | needs_human | Needs maintainer direction: #49549 may be the fuller canonical fix for the allowFrom/outbound coupling, but it has unresolved product-scope and review/check blockers and cannot safely supersede #48387 in this dedupe-only pass. |

## Needs Human

- Choose the canonical WhatsApp outbound authorization path: #48387's narrow explicit-target bypass or #49549's broader allowTo/outbound policy. Both are open useful PRs, neither is merge-ready, and #49549 still has an unresolved directory-resolution review finding and failing checks in the hydrated artifact.
