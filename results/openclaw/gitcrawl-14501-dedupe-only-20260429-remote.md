---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14501-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130271033"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130271033"
head_sha: "d8402244adeff9d7d53d01dc45e960e2851caca3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.851Z"
canonical: "https://github.com/openclaw/openclaw/pull/42009"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42009"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14501-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130271033](https://github.com/openclaw/clownfish/actions/runs/25130271033)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42009

## Summary

Hydrated preflight state shows #42009 remains the best open canonical PR for the explicit --agent + --to routing bug. #35241, #44448, and #54864 are related but distinct follow-up surfaces; #56370 is high-confidence fixed by merged #72414. Closed cluster PRs are kept as skipped historical context only. No merge or fix actions are emitted because the job blocks merge, fix, and raise_pr.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #56370 | close_fixed_by_candidate | blocked | fixed_by_candidate | target is not listed in job candidates |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #42009 | keep_canonical | planned | canonical | #42009 is the best surviving open canonical path, but merge is blocked by job frontmatter. |
| #35241 | keep_related | planned | related | Related CLI session-key feature work should remain open; it is not a duplicate of #42009. |
| #44448 | keep_related | planned | related | Same symptom family, different root cause and broader channel delivery-context scope; keep open as related. |
| #54864 | keep_related | planned | related | Related session-isolation CLI feature request; not a duplicate of the canonical routing bug. |
| #56370 | close_fixed_by_candidate | planned | fixed_by_candidate | The open issue's default-agent --to mismatch is covered by already-merged hydrated candidate #72414; close_fixed_by_candidate is allowed by the job's instant-close policy. |
| #60621 | keep_closed | skipped | fixed_by_candidate | Already closed in live preflight state; no mutation planned. |
| #56453 | keep_closed | skipped | fixed_by_candidate | Already closed; retained only as historical evidence for the #72414 fixed-by-candidate path. |
| #64108 | keep_closed | skipped | superseded | Already closed after credited replacement by #72414; no mutation planned. |
| #69108 | keep_closed | skipped | superseded | Already closed as superseded; remaining feature scope stays open in #54864. |

## Needs Human

- none
