---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238878-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108005524"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108005524"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.677Z"
canonical: "https://github.com/openclaw/openclaw/pull/42904"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42904"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238878-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108005524](https://github.com/openclaw/clownfish/actions/runs/25108005524)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42904

## Summary

Hydrated preflight shows the original open-candidate view is stale: canonical PR #42904 is now merged and all three cluster PR targets are already closed. No GitHub mutations, fix PRs, merges, labels, or comments are planned.

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
| #42904 | keep_closed | skipped | canonical | Canonical PR is already merged and closed in hydrated live state. |
| #43043 | keep_closed | skipped | superseded | Already-closed contributor PR is superseded by merged canonical #42904; no mutation is allowed. |
| #43093 | keep_closed | skipped | superseded | Already-closed overlapping PR is superseded by current main behavior and the merged canonical cluster path. |

## Needs Human

- none
