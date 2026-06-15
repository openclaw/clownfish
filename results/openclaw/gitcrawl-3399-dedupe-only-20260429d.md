---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3399-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142080347"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142080347"
head_sha: "a0b870a07f2988db4b233d32e6ac2590b6afdb2d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.317Z"
canonical: "https://github.com/openclaw/openclaw/pull/63481"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63475"
canonical_pr: "https://github.com/openclaw/openclaw/pull/63481"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3399-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142080347](https://github.com/openclaw/clownfish/actions/runs/25142080347)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/63481

## Summary

Hydrated preflight shows three open, non-security Feishu startup refs. #63481 remains the best canonical implementation path for #63475, but no merge, fix, or closeout is planned because this dedupe-only job disables merge/fix/instant close and #63481 still has merge-preflight blockers. #67466 is related follow-up/rework, not a duplicate or safe superseded closeout.

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
| #63481 | keep_canonical | planned | canonical | #63481 is the clearest focused canonical PR for the Feishu multi-account startup bot-info probe serialization bug, but it should remain open for maintainer/review workflow rather than be merged by this job. |
| #63475 | keep_related | planned | fixed_by_candidate | #63475 is covered by the #63481 candidate path, but should stay open until a canonical fix lands and validation is complete. |
| #67466 | keep_related | planned | related | #67466 is not a duplicate of #63481 and is not safe to close as superseded: it contains distinct Feishu startup latency/status timeout work but needs rework before it could be a merge candidate. |

## Needs Human

- none
