---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-051"
mode: "plan"
run_id: "27549046074"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549046074"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.728Z"
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

# pr-inventory-ready_for_maintainer-20260615T131654-051

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549046074](https://github.com/openclaw/clownfish/actions/runs/27549046074)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. The supplied preflight artifact hydrates live state for 20 of 40 listed PRs; those are classified independently because the job says this is not a dedupe cluster. The remaining 20 refs lack hydrated live state in the compacted artifact, so they are scoped needs_human rather than mutating recommendations.

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

- Hydrated live state is missing from the supplied compacted preflight artifact for #90592, #90819, #90530, #91346, #91409, #91488, #91520, #91559, #91543, #91640, #91646, #91663, #91706, #91758, #91674, #91803, #91797, #91438, #91810, and #91907. Re-run or provide an untruncated preflight artifact before classifying those refs.
