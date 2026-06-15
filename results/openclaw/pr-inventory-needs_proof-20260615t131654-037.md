---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-037"
mode: "plan"
run_id: "27549043422"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549043422"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.642Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 0
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-needs_proof-20260615T131654-037

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549043422](https://github.com/openclaw/clownfish/actions/runs/27549043422)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The provided preflight artifact hydrates 20 of 40 listed refs; all hydrated refs are independent open PRs in this inventory shard, not duplicates of a shared canonical. The remaining listed refs are not present in the compacted preflight item matrix, so no close/label/comment action is safe for them without rehydration.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 0 |
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
| _None_ |  |  |  |  |

## Needs Human

- Hydrated action matrix was returned in the structured tool result. Missing hydrated live state for listed refs: #84578, #84582, #84590, #84602, #84603, #84613, #84617, #84690, #84719, #84758, #84761, #90761, #90788, #90792, #90821, #90831, #90834, #90837, #92172.
