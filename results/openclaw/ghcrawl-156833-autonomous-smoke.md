---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156833-autonomous-smoke"
mode: "autonomous"
run_id: "27598130690"
workflow_run_id: "27598130690"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598130690"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:19:29.340Z"
canonical: "https://github.com/openclaw/openclaw/pull/72388"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48388"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72388"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156833-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598130690](https://github.com/openclaw/clownfish/actions/runs/27598130690)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72388

## Summary

No GitHub mutations are needed for this cluster. The three job candidates are already closed in the hydrated preflight state, and the concrete Feishu inbound filename mojibake bug is covered by merged PR #72388. The only live related item is #48788, which is a broader central filename-decoder follow-up and should remain open for maintainer review.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #48388 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by the merged canonical fix path #72388. |
| #59409 | keep_closed | skipped | fixed_by_candidate | Already closed as covered by the merged canonical fix path #72388. |
| #66500 | keep_closed | skipped | fixed_by_candidate | Already closed and now covered by the merged canonical fix path #72388. |
| #48788 | keep_related | planned | related | Related architectural follow-up remains open and is not a duplicate of the already-closed concrete Feishu mojibake reports. |

## Needs Human

- none
