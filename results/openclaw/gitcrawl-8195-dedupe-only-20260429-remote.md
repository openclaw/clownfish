---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-8195-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136881257"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136881257"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.297Z"
canonical: "https://github.com/openclaw/openclaw/pull/63696"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/63696"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-8195-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136881257](https://github.com/openclaw/clownfish/actions/runs/25136881257)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/63696

## Summary

#63696 remains the clear open canonical PR for the fallback-retry duplicate user persistence bug. #52903 and #61228 are already-closed superseded context and receive no close actions. No merge, fix, or post-merge action is emitted because the job blocks merge/fix/raise_pr and #63696 still has a failing check-additional gate plus maintainer-review follow-up.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #52903 | keep_closed | skipped | superseded | Already closed; retained only as superseded evidence for the open canonical #63696. |
| #61228 | keep_closed | skipped | superseded | Already closed; superseded by the clean v2 canonical PR #63696. |
| #63696 | keep_canonical | planned | canonical | Canonical PR is clear and should remain open; finalization is outside this job and currently blocked by job permissions plus the failing check-additional gate. |

## Needs Human

- none
