---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238837-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107722251"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107722251"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.653Z"
canonical: "https://github.com/openclaw/openclaw/issues/41764"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41764"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238837-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107722251](https://github.com/openclaw/clownfish/actions/runs/25107722251)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41764

## Summary

Live preflight shows all four job candidates are already closed. The canonical family is #41764, with the current-main fix documented through #50170 and existing closeouts; no close, label, merge, or fix actions are emitted.

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
| #41764 | keep_closed | skipped | canonical | Representative canonical issue is already closed in live state; no mutation is valid. |
| #50170 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main; keep as historical fixed evidence for the #41764 family. |
| #65464 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on current main; no duplicate or fixed-by closeout can be planned. |
| #73556 | keep_closed | skipped | fixed_by_candidate | Already closed by prior guarded closeout; keep closed and emit no mutation. |

## Needs Human

- none
