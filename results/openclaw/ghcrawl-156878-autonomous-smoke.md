---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156878-autonomous-smoke"
mode: "autonomous"
run_id: "25103597377"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103597377"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.145Z"
canonical: "https://github.com/openclaw/openclaw/tree/20ed5974957f9b04da2b2eb104efc9d36df5db83"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56419"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156878-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103597377](https://github.com/openclaw/clownfish/actions/runs/25103597377)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/20ed5974957f9b04da2b2eb104efc9d36df5db83

## Summary

Hydrated live preflight shows #56419 remains open and non-security-sensitive, while #62944, #67889, #63483, and #67929 are already closed. Current main at 20ed5974957f9b04da2b2eb104efc9d36df5db83 is documented in the hydrated closeouts as containing the image-tool timeout resolver and MiniMax timeout propagation, so this plans only the high-confidence closeout for #56419 and keeps closed context refs skipped.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56419 | close_fixed_by_candidate | blocked | fixed_by_candidate | fixed_by_candidate close requires a merged fix PR unless allow_unmerged_fix_close: true |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56419 | close_fixed_by_candidate | planned | fixed_by_candidate | require_fix_before_close is satisfied because the hydrated current-main evidence shows the fix is already present; only #56419 remains open in this cluster. |
| #62944 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; retained only as evidence for the #56419 current-main closeout. |
| #63483 | keep_closed | skipped | superseded | Already closed as superseded by current main implementation. |
| #67889 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main and useful as supporting evidence for the remaining open report. |
| #67929 | keep_closed | skipped | superseded | Already closed as superseded after the relevant MiniMax fix was carried forward with attribution. |

## Needs Human

- none
