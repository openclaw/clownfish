---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13540-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109694600"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109694600"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.723Z"
canonical: "https://github.com/openclaw/openclaw/issues/44935"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44935"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-13540-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109694600](https://github.com/openclaw/clownfish/actions/runs/25109694600)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/44935

## Summary

No GitHub mutations are planned. The representative #65234 is already closed as implemented on current main, #37813 also closed before this run, #44935 is the only surviving open fallback-recovery thread, #44941 is a related notification companion, #40464 belongs to a separate config-write subcluster, and #64676 needs a maintainer product decision on the per-agent models.json persistence contract.

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
| Needs human | 1 |

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
| #65234 | keep_closed | skipped | fixed_by_candidate | Historical representative is already closed as implemented on current main, so no closure or comment action is valid. |
| #37813 | keep_closed | skipped | fixed_by_candidate | The item changed from the job's open-candidate list to closed in hydrated live state. |
| #44935 | keep_canonical | planned | canonical | Best surviving open fallback-recovery issue in this hydrated cluster; keep open as the canonical follow-up thread for recovery behavior. |
| #44941 | keep_related | planned | related | Related companion feature, not a duplicate of the fallback recovery mechanism. |
| #40464 | keep_related | planned | related | Separate config-write subcluster; keep open for its own review/repair path rather than closing or merging here. |
| #64676 | needs_human | planned | needs_human | Maintainer decision needed: define whether per-agent models.json is user-owned persistent config or generated cache before dedupe closure or fix planning is safe. |

## Needs Human

- #64676: decide the intended contract for per-agent agents/*/models.json persistence versus generated cache before closing, labeling as duplicate, or planning a fix.
