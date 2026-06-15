---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238817-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25102874409"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102874409"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.117Z"
canonical: "https://github.com/openclaw/openclaw/issues/47975"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47975"
canonical_pr: null
actions_total: 16
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238817-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102874409](https://github.com/openclaw/clownfish/actions/runs/25102874409)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/47975

## Summary

Hydrated state keeps #47975 as the live canonical issue for the broader one-shot subagent session retention and responsiveness problem. No mutating actions are planned: the duplicate candidates #56516 and #58534 are already closed against #47975, #58649 and #67902 are already closed as narrower related implemented reports, and linked open issues are either related follow-ups or independent provider work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
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
| #4355 | keep_closed | skipped | related | Already closed related context; no mutation is valid. |
| #7666 | keep_closed | skipped | related | Already closed related context; no mutation is valid. |
| #40295 | keep_closed | skipped | related | Already closed related context; no mutation is valid. |
| #41155 | keep_closed | skipped | related | Already closed related context; no mutation is valid. |
| #44032 | keep_closed | skipped | related | Already closed related context; no mutation is valid. |
| #47884 | keep_independent | planned | independent | Independent provider bug; leave open outside this subagent lifecycle cluster. |
| #47975 | keep_canonical | planned | canonical | Best live canonical for the broader retained one-shot subagent session and responsiveness family. |
| #49000 | keep_closed | skipped | related | Already closed narrower related bug; no mutation is valid. |
| #54488 | keep_related | planned | related | Related but distinct scheduler fairness issue; leave open. |
| #56044 | keep_closed | skipped | related | Already closed related context; no mutation is valid. |
| #56516 | keep_closed | skipped | duplicate | Already closed duplicate of the live canonical #47975; no mutation is valid. |
| #58534 | keep_closed | skipped | duplicate | Already closed duplicate of the live canonical #47975; no mutation is valid. |
| #58649 | keep_closed | skipped | related | Already closed narrower related report; no mutation is valid. |
| #64253 | keep_related | planned | related | Related but distinct Windows Gateway announcement-timeout issue; leave open. |
| #67718 | keep_closed | skipped | related | Already closed related context; no mutation is valid. |
| #67902 | keep_closed | skipped | related | Already closed narrower related report; no mutation is valid. |

## Needs Human

- none
