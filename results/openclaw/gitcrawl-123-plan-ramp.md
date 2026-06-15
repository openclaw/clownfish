---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-123-plan-ramp"
mode: "plan"
run_id: "27516217942"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516217942"
head_sha: "55c1d70c5da8da84c47be43e492f5bca34739d4e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.345Z"
canonical: "#92819"
canonical_issue: "#92776"
canonical_pr: "#92819"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-123-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516217942](https://github.com/openclaw/clownfish/actions/runs/27516217942)

Workflow conclusion: success

Worker result: planned

Canonical: #92819

## Summary

Plan-only classification for cluster gitcrawl-123-plan-ramp: #92819 remains the best live canonical PR for the stale auto-fallback origin bug; #92776 is covered by #92819; #75270 is related but broader and blocked for merge/closeout by risk and review state; #92821 is already closed and superseded. No security-sensitive items were detected, and no merge or fix actions are planned.

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
| #75270 | keep_related | planned | related | Related auto-fallback work, but not the same narrow root cause and not safe to close or merge as part of this cluster. |
| #92776 | close_fixed_by_candidate | planned | fixed_by_candidate | The open issue is covered by the live canonical PR #92819, which should own validation and follow-up for this root cause. |
| #92819 | keep_canonical | planned | canonical | Best surviving canonical PR for the cluster. Merge is not planned because this job is plan mode and merge is blocked by frontmatter. |
| #92821 | keep_closed | skipped | superseded | Already closed and superseded by the live canonical path #92819; no mutation is valid for this target. |

## Needs Human

- none
