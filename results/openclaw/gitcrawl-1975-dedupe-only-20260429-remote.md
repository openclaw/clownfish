---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1975-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131317855"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131317855"
head_sha: "b5784ec6f81e07c69dcfb868449f4f451549e38e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.907Z"
canonical: "https://github.com/openclaw/openclaw/pull/72658"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72658"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1975-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131317855](https://github.com/openclaw/clownfish/actions/runs/25131317855)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72658

## Summary

Hydrated state shows the Feishu @all/@_all broadcast false-positive family has already been carried to the landed replacement path #72658. The only still-open hydrated items, #39568 and #39569, are a distinct Feishu reply-mention/thread-routing subcluster and should stay open. #50801 is already closed as superseded by #72658, so no close action is emitted for it.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #39568 | keep_related | planned | related | Keep open as a related but distinct Feishu mention subcluster with its own linked PR. |
| #39569 | keep_related | planned | related | Related Feishu mention work, but not the same root cause as the @all/@_all cluster. |
| #50801 | keep_closed | skipped | superseded | Already closed as superseded by the canonical replacement #72658. |

## Needs Human

- none
