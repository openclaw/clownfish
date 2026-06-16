---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-159-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609381841"
workflow_run_id: "27609381841"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609381841"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.101Z"
canonical: "https://github.com/openclaw/openclaw/issues/80387"
canonical_issue: "https://github.com/openclaw/openclaw/issues/80387"
canonical_pr: "https://github.com/openclaw/openclaw/pull/80386"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-159-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609381841](https://github.com/openclaw/clownfish/actions/runs/27609381841)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/80387

## Summary

Hydrated live state keeps #80387 as the canonical open issue for the Homebrew/Node-major global install breakage. The linked contributor PR #80386 is an open, related fix candidate, but merge, fix, and raise_pr are blocked by the job, and there is no duplicate or superseded open candidate to close in this cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #80387 | keep_canonical | planned | canonical | #80387 is the best live canonical issue for this root cause and should stay open until the linked fix path lands or maintainers choose a replacement. |
| #80386 | keep_related | planned | related | #80386 is related as the open linked contributor fix candidate for #80387, but it is not actionable in this close-only cluster. |

## Needs Human

- none
