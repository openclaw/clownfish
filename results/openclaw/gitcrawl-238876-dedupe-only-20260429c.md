---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238876-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108001422"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108001422"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.676Z"
canonical: "https://github.com/openclaw/openclaw/pull/41880"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41860"
canonical_pr: "https://github.com/openclaw/openclaw/pull/41880"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238876-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108001422](https://github.com/openclaw/clownfish/actions/runs/25108001422)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41880

## Summary

Classified #41880 as the narrow live canonical PR and #41860 as the open tracking issue for the Feishu underscore URL bug. #68514 stays open as broader related URL-boundary work with an unresolved Codex review finding, and #41946 is already closed as superseded. No close, merge, or fix PR action is planned.

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
| #41860 | keep_canonical | planned | canonical | Tracking issue should remain open until the canonical Feishu fix lands; post-merge closeout is disabled for this job. |
| #41880 | keep_canonical | planned | canonical | Best narrow live canonical path for the original bare URL-only Feishu underscore bug; keep open for maintainer review or branch repair outside this dedupe-only job. |
| #41946 | keep_closed | skipped | superseded | Already closed as superseded; no additional mutation is valid. |
| #68514 | keep_related | planned | related | Related broader implementation candidate; keep open for maintainer review rather than closing against #41880. |

## Needs Human

- none
