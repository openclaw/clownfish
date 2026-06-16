---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-426-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610220684"
workflow_run_id: "27610220684"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610220684"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.424Z"
canonical: "https://github.com/openclaw/openclaw/issues/92536"
canonical_issue: "https://github.com/openclaw/openclaw/issues/92536"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-426-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610220684](https://github.com/openclaw/clownfish/actions/runs/27610220684)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/92536

## Summary

Classified #92536 as the live canonical issue for the Dreaming sidecar allowlist activation bug. No close, label, merge, or fix action is appropriate: there are no open duplicate candidates in scope, #65411 is already closed/merged historical context for an earlier loader-slot fix, and this job blocks fix PR creation.

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
| #92536 | keep_canonical | planned | canonical | #92536 remains the best live canonical thread for this unresolved behavior bug; keep it open for maintainer/fix follow-up. |
| #65411 | keep_closed | skipped | related | Already-closed linked PRs are evidence only and must not receive close actions. |

## Needs Human

- none
