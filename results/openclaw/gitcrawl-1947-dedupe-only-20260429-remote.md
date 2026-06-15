---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1947-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130821268"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130821268"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.902Z"
canonical: "https://github.com/openclaw/openclaw/issues/51396"
canonical_issue: "https://github.com/openclaw/openclaw/issues/51396"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1947-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130821268](https://github.com/openclaw/clownfish/actions/runs/25130821268)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/51396

## Summary

#51396 remains the best open canonical issue for this scope-clearing family. No close/comment/label mutation is planned: the other open refs either carry unique reproduction detail, are plausible but unresolved implementation PRs, or ask a broader gateway-auth policy question. Closed context refs were treated as evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #51396 | keep_canonical | planned | canonical | Open representative is still the clearest canonical issue for the root symptom and root-cause family. |
| #48229 | keep_related | planned | related | Related to the canonical issue, but not safe for duplicate closure because it preserves unique deployment/reproduction detail and the fix path is unresolved. |
| #51413 | keep_related | planned | related | Plausible implementation candidate for #51396, but not merge-ready and not a high-confidence supersede/close target in this dedupe-only job. |
| #52059 | keep_related | planned | related | Related gateway-auth feature work; keep open separately instead of closing or treating it as the canonical regression fix. |
| #57889 | keep_related | planned | related | Useful candidate PR remains open, but conflicting implementation scope and failing checks make it unsuitable for merge, closure, or supersede action in this pass. |
| #60225 | keep_related | planned | related | Related follow-up issue with a broader product/auth-policy decision; keep open rather than closing as a duplicate of #51396. |

## Needs Human

- none
