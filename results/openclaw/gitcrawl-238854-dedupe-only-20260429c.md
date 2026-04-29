---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238854-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25105236571"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25105236571"
head_sha: "195790bbe8a80284a2d1f7ba4ba947b141428867"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T11:20:40.981Z"
canonical: "https://github.com/openclaw/openclaw/issues/73160"
canonical_issue: "https://github.com/openclaw/openclaw/issues/73160"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238854-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25105236571](https://github.com/openclaw/clownfish/actions/runs/25105236571)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/73160

## Summary

Representative #60886 is already closed as implemented on current main. #73160 is the best live canonical for the remaining restart-recovery/context-loss slice; #60542 and #51549 are related but not true duplicates, and the closed refs remain historical evidence only. No close/comment/label mutations are planned.

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
| #73160 | keep_canonical | planned | canonical | Best surviving open canonical for the restart-recovery/context-loss portion of the cluster; keep open for focused maintainer follow-up. |
| #60542 | keep_related | planned | related | Related session-state corruption report with unique stale registry and input-wedge details; do not close as a duplicate in this pass. |
| #51549 | keep_related | planned | related | First-hop related WebChat UI persistence issue with active unhydrated implementation context; keep open and do not use unhydrated #73154 as candidate_fix. |
| #60250 | keep_closed | skipped | fixed_by_candidate | Already closed historical context; no mutation planned. |
| #60886 | keep_closed | skipped | fixed_by_candidate | Original representative is obsolete because it is already closed as implemented. |
| #66522 | keep_closed | skipped | related | Already closed related context; no mutation planned. |

## Needs Human

- none
