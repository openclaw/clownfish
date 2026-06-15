---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238844-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102929630"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102929630"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.128Z"
canonical: "https://github.com/openclaw/openclaw/issues/48238"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48238"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238844-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102929630](https://github.com/openclaw/clownfish/actions/runs/25102929630)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/48238

## Summary

Hydrated state shows an active stacked implementation series tied to #48238. #48238 is the best canonical tracker; #48312 is the gitcrawl representative/scorer PR, but the PRs are staged, useful, and not duplicates of each other. No close, merge, or fix action is safe or allowed for this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #48238 | keep_canonical | planned | canonical | Use the open umbrella issue as the canonical tracker for this stacked PR family; no mutation is needed. |
| #48278 | keep_related | planned | related | Related prerequisite PR, not a duplicate or superseded item. |
| #48293 | keep_related | planned | related | Related prerequisite stack PR; keep open for maintainer review or a later dedicated cluster. |
| #48312 | keep_related | planned | related | Representative PR remains useful, but #48238 is the better canonical tracker for the whole staged guard family. |
| #48335 | keep_related | planned | related | Related follow-up PR in the same stack; not a duplicate of the scorer PR. |
| #48350 | keep_related | planned | related | Related validator PR with unique scope; keep open rather than closing as duplicate or superseded. |
| #48368 | keep_related | planned | related | Related follow-up stack PR; no close or fix action is appropriate for this job. |

## Needs Human

- none
