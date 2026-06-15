---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238857-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102947642"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102947642"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.132Z"
canonical: "https://github.com/openclaw/openclaw/pull/67023"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/67023"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238857-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102947642](https://github.com/openclaw/clownfish/actions/runs/25102947642)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/67023

## Summary

Preflight shows every cluster candidate is already closed. The representative #65654 is not a live canonical; the hydrated canonical fix path is merged PR #67023 on current main, so all item actions are skipped keep_closed classifications with no GitHub mutation and no human decision required.

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
| #67023 | keep_closed | skipped | canonical | Canonical fix path is already merged and closed; no merge or close mutation is permitted or needed. |
| #65653 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; keep as historical fixed-by-candidate context only. |
| #65654 | keep_closed | skipped | independent | Already closed as not actionable; it should not be used as the canonical issue for the memory-core dreaming cleanup family. |
| #66358 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by merged #67023; no closeout action is valid for a closed issue. |
| #67611 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; keep closed and do not emit a new mutation. |

## Needs Human

- none
