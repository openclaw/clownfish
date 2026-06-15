---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2275-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132454647"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132454647"
head_sha: "8b6ee7ffa77533bbae10cb97289fd78b142edfab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.957Z"
canonical: "https://github.com/openclaw/openclaw/pull/56726"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56635"
canonical_pr: "https://github.com/openclaw/openclaw/pull/56726"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2275-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132454647](https://github.com/openclaw/clownfish/actions/runs/25132454647)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/56726

## Summary

Hydrated preflight shows #56635 is the open root issue and #56726 remains the narrowest live canonical PR for the Gmail watcher --exclude-labels regression. No close actions are planned because #56720 and #56736 overlap the same bug but carry broader config/test scope that is not a high-confidence duplicate closeout in this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #56635 | keep_canonical | planned | canonical | Root bug report remains the canonical issue; it should not be closed before a fix lands. |
| #56726 | keep_canonical | planned | canonical | #56726 remains the best canonical PR for dedupe purposes: it is focused, matches the original regression, and has no unresolved hydrated review comments. |
| #56720 | keep_related | planned | related | Related implementation of the same regression, but not a high-confidence closeout target because it has unique config/test scope and failing checks. |
| #56736 | keep_related | planned | related | Related broader implementation of the same bug; not closed because it carries unique config behavior outside the canonical one-line restore. |

## Needs Human

- none
