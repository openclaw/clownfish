---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238883-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102999194"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102999194"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.140Z"
canonical: "https://github.com/openclaw/openclaw/issues/50165"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50165"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238883-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102999194](https://github.com/openclaw/clownfish/actions/runs/25102999194)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50165

## Summary

Kept #50165 as the live canonical issue. No close actions are planned: #44925 and #69767 are related subagent-completion reports with distinct remaining failure modes, #43367 is a broader orchestration cluster, and #68464 is a related open PR blocked by dirty merge state, failing checks, and unresolved bot review findings.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #50165 | keep_canonical | planned | canonical | #50165 is still the best live canonical issue for the early-completion/lifecycle-state family. |
| #44925 | keep_related | planned | related | Related to #50165, but not a true duplicate because it tracks retry, notification, and timeout-recovery gaps beyond early completion state. |
| #69767 | keep_related | planned | related | Related to #50165, but it preserves a distinct payload-availability race and should not be closed as a duplicate. |
| #68464 | keep_related | planned | related | Useful related PR, but failing checks, dirty merge state, and unresolved bot findings block merge or fixed-by-candidate closeout. |
| #43367 | keep_related | planned | related | Related follow-up cluster, not a duplicate of the #50165 canonical issue. |

## Needs Human

- none
