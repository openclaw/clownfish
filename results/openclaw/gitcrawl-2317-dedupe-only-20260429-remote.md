---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2317-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132952549"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132952549"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.960Z"
canonical: "https://github.com/openclaw/openclaw/issues/29384"
canonical_issue: "https://github.com/openclaw/openclaw/issues/29384"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73491"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2317-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132952549](https://github.com/openclaw/clownfish/actions/runs/25132952549)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/29384

## Summary

No GitHub mutation is safe or needed for this dedupe-only pass. #57976/#58124 were already closed after the GPU-only fix landed in #73491, while #29384 remains the open canonical issue for the broader host IPC/raw Docker argument request. #53108 is related Docker sandbox capability work, not a duplicate or merge candidate for this cluster.

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
| #29384 | keep_canonical | planned | canonical | #29384 has unique remaining scope after the GPU fix landed, so it should remain open as the canonical follow-up issue for host IPC/raw Docker argument policy. |
| #53108 | keep_related | planned | related | Related sandbox Docker permission work, but it is not a duplicate of #29384 and is not a viable canonical path for this dedupe-only job. |
| #57976 | keep_closed | skipped | fixed_by_candidate | Already closed GPU passthrough issue; no close action is valid for a closed target. |
| #58124 | keep_closed | skipped | superseded | Already closed as superseded by the landed replacement #73491; no closure action is valid. |
| #73491 | keep_closed | skipped | canonical | Merged canonical PR for the GPU-only sub-scope; retained as closed context with no mutation. |

## Needs Human

- #29384 still needs maintainer/secops direction on whether the remaining host IPC/raw Docker argument request should become a narrow typed guarded setting such as `sandbox.docker.ipc` or be rejected as out of scope.
