---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2480-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133516138"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133516138"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.978Z"
canonical: "https://github.com/openclaw/openclaw/pull/50250"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50245"
canonical_pr: "https://github.com/openclaw/openclaw/pull/50250"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2480-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133516138](https://github.com/openclaw/clownfish/actions/runs/25133516138)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/50250

## Summary

#50250 is the canonical open PR for the #50245 health-command issue. #50245 should stay open until #50250 or an equivalent fix lands. #50269 is related diagnostics work but targets a different CLI path, so it should remain open and not be closed as part of this dedupe cluster.

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
| #50245 | keep_related | planned | fixed_by_candidate | Covered by the open canonical PR #50250, but no closeout is planned because the candidate is not merged and the issue should remain open for validation/follow-up until #50250 or an equivalent fix lands. |
| #50250 | keep_canonical | planned | canonical | Best live canonical path for the health-command root cause. Keep open for maintainer review; this worker cannot merge or repair it, and failing checks/unknown mergeability block any merge recommendation. |
| #50269 | keep_related | planned | related | Related diagnostics theme but different command path, root cause, and touched files. Keep open as separate work rather than closing or superseding it under #50250. |

## Needs Human

- none
