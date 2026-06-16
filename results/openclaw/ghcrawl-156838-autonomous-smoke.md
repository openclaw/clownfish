---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156838-autonomous-smoke"
mode: "autonomous"
run_id: "27598131643"
workflow_run_id: "27598131643"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598131643"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:20:47.542Z"
canonical: "https://github.com/openclaw/openclaw/pull/49131"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48944"
canonical_pr: "https://github.com/openclaw/openclaw/pull/49131"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156838-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598131643](https://github.com/openclaw/clownfish/actions/runs/27598131643)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/49131

## Summary

All hydrated refs in this cluster are already closed. The canonical path is merged PR #49131, which closed linked issue #48944 and superseded the narrower closed PRs #54991 and #55111. No GitHub mutation or fix PR is needed.

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
| #49131 | keep_closed | skipped | canonical | Already merged canonical PR; closed refs must not receive close or merge actions. |
| #54991 | keep_closed | skipped | superseded | Already closed superseded PR; no close action is valid. |
| #55111 | keep_closed | skipped | superseded | Already closed superseded PR; no close action is valid. |
| #48944 | keep_closed | skipped | fixed_by_candidate | Already closed by the merged canonical PR; no post-merge close action is valid for a closed issue. |

## Needs Human

- none
