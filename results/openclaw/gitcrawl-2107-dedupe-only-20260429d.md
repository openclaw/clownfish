---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2107-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142065333"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142065333"
head_sha: "a0b870a07f2988db4b233d32e6ac2590b6afdb2d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.317Z"
canonical: "https://github.com/openclaw/openclaw/pull/47387"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/47387"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2107-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142065333](https://github.com/openclaw/clownfish/actions/runs/25142065333)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/47387

## Summary

Hydrated state shows no security-sensitive refs. The closed representative #42012 is obsolete, and #44182/#60565 are already closed evidence only. #47387 is the best current open canonical for the remaining outbound Telegram media proxy transport path, but this dedupe-only job cannot merge or create a fix PR. #63633 is related SOCKS proxy work with a separate root cause and unresolved review/check blockers, so it should stay open rather than close as a duplicate.

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
| #42012 | keep_closed | skipped | superseded | Closed representative is historical evidence only; no mutation planned. |
| #44182 | keep_closed | skipped | superseded | Closed context PR is evidence only. |
| #60565 | keep_closed | skipped | independent | Already closed and the actual diff is independent of this Telegram media proxy cluster. |
| #47387 | keep_canonical | planned | canonical | Best current open canonical for the outbound Telegram media proxy transport subproblem; not merge-ready in this dedupe-only job. |
| #63633 | keep_related | planned | related | Related SOCKS proxy subcluster with unique scope and unresolved review/check blockers; leave open and do not close as a duplicate. |

## Needs Human

- none
