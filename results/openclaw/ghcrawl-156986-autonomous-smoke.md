---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156986-autonomous-smoke"
mode: "autonomous"
run_id: "25102854842"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102854842"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.113Z"
canonical: "https://github.com/openclaw/openclaw/pull/72445"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72445"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156986-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102854842](https://github.com/openclaw/clownfish/actions/runs/25102854842)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72445

## Summary

All hydrated job refs are already closed. The open-canonical hint for #39457 is obsolete; the current canonical fix path is the already-merged wrapper persistence PR #72445, while #58579 is a related post-update service-refresh report already closed as implemented on current main. No GitHub mutations are planned.

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
| #39457 | keep_closed | skipped | fixed_by_candidate | Already closed in live preflight; keep closed and record #72445 as the hydrated merged fix path for the wrapper-persistence failure mode. |
| #58579 | keep_closed | skipped | related | Already closed and related, not an open duplicate target for this run. |
| #69400 | keep_closed | skipped | fixed_by_candidate | Historical linked issue already closed by the hydrated merged canonical PR #72445. |
| #69425 | keep_closed | skipped | superseded | Already closed as superseded by the hydrated merged canonical PR #72445; no new close action is valid. |
| #72445 | keep_closed | skipped | canonical | Canonical merged PR is historical evidence only in this run; no mutation or merge preflight is applicable. |

## Needs Human

- none
