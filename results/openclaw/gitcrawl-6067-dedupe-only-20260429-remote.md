---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-6067-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136432601"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136432601"
head_sha: "421ddc981e12f60cbb3ea60e4527004e3a033e79"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.269Z"
canonical: "https://github.com/openclaw/openclaw/pull/45626"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45574"
canonical_pr: "https://github.com/openclaw/openclaw/pull/45626"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-6067-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136432601](https://github.com/openclaw/clownfish/actions/runs/25136432601)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/45626

## Summary

Hydrated preflight state shows no security-sensitive refs. #45574 is the live canonical issue and #45626 is the focused canonical PR for the Slack download-file fileId schema gap. No close, merge, or fix actions are safe in this dedupe-only job: the other open refs are related or independent work with unique scope and/or unresolved review/check blockers.

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
| #45574 | keep_canonical | planned | canonical | Canonical issue remains open; do not close before the candidate fix lands. |
| #45626 | keep_canonical | planned | canonical | Best canonical PR for the schema gap, but merge/fix work is out of scope and checks are not clean. |
| #38170 | keep_related | planned | related | Related file-id/media-download theme, but different provider, root cause, and unresolved review/check state. |
| #50200 | keep_related | planned | related | Useful related Slack media PR; not a duplicate or superseded by the schema fix. |
| #62792 | keep_related | planned | related | Related broad implementation candidate, but not safe to close, merge, or replace in this dedupe-only run. |
| #64429 | keep_related | planned | related | Complementary Slack file-id propagation work; not a duplicate of the schema PR. |
| #51458 | keep_independent | planned | independent | Distinct Slack outbound workflow and root cause; leave outside this cluster. |
| #62927 | keep_related | planned | related | Related Slack attachment-drop PR with a distinct root cause and unresolved review/check blockers. |

## Needs Human

- none
