---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238834-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102907928"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102907928"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.124Z"
canonical: "https://github.com/openclaw/openclaw/pull/39489"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39489"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238834-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102907928](https://github.com/openclaw/clownfish/actions/runs/25102907928)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39489

## Summary

Canonical path is the still-open repaired PR #39489. Already-closed overlapping PRs #39487 and #41940 stay closed as superseded context. No close is planned for #53533 or #43765 because both retain related but distinct or broad candidate work, and #39489 is not merged or merge-ready in this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #39489 | keep_canonical | planned | canonical | Best current canonical branch, but this dedupe-only autonomous job cannot merge or repair it. |
| #39487 | keep_closed | skipped | superseded | Already closed; historical superseded context only. |
| #41940 | keep_closed | skipped | superseded | Already closed; superseded by the open repaired canonical path #39489. |
| #53533 | keep_related | planned | related | Related useful contributor work; not safe to close while canonical #39489 is still open and unmerged. |
| #43765 | keep_related | planned | related | Related broad candidate work; leave open for split or maintainer follow-up. |
| #35532 | keep_closed | skipped | related | Closed related context only. |
| #39486 | keep_closed | skipped | related | Closed related context only. |
| #39488 | keep_closed | skipped | related | Closed related context only. |
| #72411 | keep_closed | skipped | related | Merged adjacent context only; not a replacement for #39489. |

## Needs Human

- none
