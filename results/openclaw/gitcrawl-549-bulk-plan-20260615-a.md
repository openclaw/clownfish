---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-549-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526074233"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526074233"
head_sha: "150815b50791d4135faf2d65f72f30e14c8a168b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:33:03.549Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-549-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526074233](https://github.com/openclaw/clownfish/actions/runs/27526074233)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. The only actionable open candidate, #55563, is not a duplicate of the excluded existing-overlap canonical family #54669: it preserves distinct remaining work around the browser CLI syntax mismatch and partially addressed gateway doctor behavior. No GitHub mutations are planned.

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
| #55563 | keep_independent | planned | independent | Distinct remaining root cause and user-visible failure from the excluded overlap issue #54669. |
| #54669 | keep_related | skipped | related | Context-only overlap ref; no mutation or actionable ownership in this cluster. |
| #39407 | keep_closed | skipped | fixed_by_candidate | Already closed linked PR, retained only as historical context and contributor-credit evidence. |

## Needs Human

- none
