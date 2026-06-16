---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-451-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610220840"
workflow_run_id: "27610220840"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610220840"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.429Z"
canonical: "https://github.com/openclaw/openclaw/issues/77340"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77340"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-451-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610220840](https://github.com/openclaw/clownfish/actions/runs/27610220840)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77340

## Summary

Kept #77340 as the live canonical issue. The open overlapping PR #86898 appears to target the same root cause but remains non-mergeable for this job because merge/fix actions are blocked and the hydrated checks/review state still show proof/check blockers. No close action is safe or needed for #77340, and unrelated linked issue #86512 stays independent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

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
| #77340 | keep_canonical | planned | canonical | The canonical issue remains open and credible; no duplicate or fixed-by-candidate closeout is available. |
| #86898 | keep_related | planned | related | Related potential fix for the canonical issue, but existing-overlap policy and failing proof/check state prevent mutation or fixed-by-candidate closeout. |
| #86512 | keep_independent | planned | independent | Different subsystem and root cause; should remain outside this cluster. |
| #65233 | keep_closed | skipped | related | Historical related PR only. |
| #72865 | keep_closed | skipped | independent | Already closed and independent context. |
| #82779 | keep_closed | skipped | duplicate | Already-closed duplicate context; no action needed. |
| #85717 | keep_closed | skipped | independent | Already closed and independent context. |
| #85941 | keep_closed | skipped | related | Closed broad performance PR is context only. |

## Needs Human

- none
