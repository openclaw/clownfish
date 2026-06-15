---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238817-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107690910"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107690910"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.642Z"
canonical: "https://github.com/openclaw/openclaw/issues/47975"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47975"
canonical_pr: null
actions_total: 8
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

Run: [https://github.com/openclaw/clownfish/actions/runs/25107690910](https://github.com/openclaw/clownfish/actions/runs/25107690910)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/47975

## Summary

Hydrated state keeps #47975 as the live canonical issue. #56516 and #58534 are already closed duplicates of #47975, while #58649 and #67902 are already closed narrower related reports. Open linked #54488 and #64253 should remain related follow-up trackers, and #47884 is independent. No GitHub mutation is planned.

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
| #47975 | keep_canonical | planned | canonical | #47975 remains the best live canonical tracker for the broad subagent lifecycle, retention, and responsiveness problem. |
| #56516 | keep_closed | skipped | duplicate | Already closed as a duplicate of the live canonical issue; no close or comment action is valid. |
| #58534 | keep_closed | skipped | duplicate | Already closed as a duplicate of the live canonical issue; no close or comment action is valid. |
| #58649 | keep_closed | skipped | related | Already closed as an implemented narrower related issue; it should not receive a new close action. |
| #67902 | keep_closed | skipped | related | Already closed as an implemented narrower related issue; it should not receive a new close action. |
| #54488 | keep_related | planned | related | Related scheduler/session-lane starvation follow-up, but not a duplicate of #47975's completed-subagent retention tracker. |
| #64253 | keep_related | planned | related | Related subagent responsiveness and announcement-delivery follow-up, but distinct from #47975's session retention and stale child-row canonical issue. |
| #47884 | keep_independent | planned | independent | Independent memory provider bug linked only by a general state-drift comment; it should not be closed or routed under the subagent lifecycle cluster. |

## Needs Human

- none
