---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238852-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102936352"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102936352"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.129Z"
canonical: "https://github.com/openclaw/openclaw/issues/71783"
canonical_issue: "https://github.com/openclaw/openclaw/issues/71783"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72297"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238852-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102936352](https://github.com/openclaw/clownfish/actions/runs/25102936352)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/71783

## Summary

Hydrated live state makes the gitcrawl representative #59967 obsolete because it is already closed as implemented. The remaining open live canonical is #71783, with #72297 as a focused related PR candidate for the manual-repair warning path. No close, merge, label, fix, or PR-opening actions are safe or necessary in this dedupe-only run.

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
| #59073 | keep_closed | skipped | fixed_by_candidate | Closed historical memory-alt/default QMD collection report; keep as evidence only. |
| #59967 | keep_closed | skipped | fixed_by_candidate | Historical representative is obsolete; closed refs remain evidence only. |
| #65908 | keep_closed | skipped | fixed_by_candidate | Closed historical stale-collection report; keep as evidence only. |
| #66141 | keep_closed | skipped | related | Merged historical fix remains relevant evidence but is not an open target. |
| #71783 | keep_canonical | planned | canonical | Current live canonical issue for the unresolved metadata-free different-name QMD conflict. |
| #72297 | keep_related | planned | related | Keep open as the active focused PR candidate for #71783; merge and repair are out of scope for this dedupe-only job. |

## Needs Human

- none
