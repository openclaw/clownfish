---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2360-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132980349"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132980349"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.969Z"
canonical: "https://github.com/openclaw/openclaw/pull/47318"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/47318"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2360-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132980349](https://github.com/openclaw/clownfish/actions/runs/25132980349)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/47318

## Summary

No close, merge, label, or fix actions are safe for this dedupe-only cluster. #47318 remains the canonical config-set invalid-model warning PR, but it is not merge-ready; #40355 and #41268 are useful related contributor PRs with distinct scopes and should remain open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #47318 | keep_canonical | planned | canonical | Canonical PR is useful but not merge-ready; no mutation is allowed or appropriate in this dedupe-only pass. |
| #40355 | keep_related | planned | related | Related same symptom family, but distinct diagnostic surface and unresolved review findings; keep open for contributor/maintainer follow-up. |
| #41268 | keep_related | planned | related | Related config-set warning work, but not a duplicate of the invalid-model catalog warning canonical path. |
| #39811 | keep_related | planned | related | Open tracking issue has a specific related candidate PR, but the candidate has not landed and the issue should remain open. |
| #20522 | keep_closed | skipped | fixed_by_candidate | Already closed historical source issue; no mutation should be emitted. |
| #37623 | keep_closed | skipped | related | Closed related context only; no mutation should be emitted. |
| #39818 | keep_closed | skipped | related | Closed related context only; no mutation should be emitted. |
| #41270 | keep_closed | skipped | related | Closed related context only; no mutation should be emitted. |

## Needs Human

- none
