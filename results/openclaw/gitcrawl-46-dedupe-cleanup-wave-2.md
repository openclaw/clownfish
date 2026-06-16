---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-46-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609383186"
workflow_run_id: "27609383186"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609383186"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.111Z"
canonical: "https://github.com/openclaw/openclaw/pull/87449"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87322"
canonical_pr: "https://github.com/openclaw/openclaw/pull/87449"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-46-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609383186](https://github.com/openclaw/clownfish/actions/runs/27609383186)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/87449

## Summary

Autonomous classification only. No close, label, merge, fix, or PR action is safe for this cluster: #87322 remains the canonical open issue for the Mattermost block-streaming overwrite bug, #87449 is the hydrated canonical PR path but is not merge/closeout-ready in this job, #71569 is related but keeps a distinct final-notification product/live-repro question, #88766 is already closed, and security-sensitive #75256 is quarantined only as an exact linked ref.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #32868 | keep_closed | skipped | related | Closed historical context only. |
| #47838 | keep_closed | skipped | related | Merged historical context only. |
| #48522 | keep_closed | skipped | related | Closed related context only. |
| #70253 | keep_closed | skipped | related | Closed mixed-scope context only. |
| #71565 | keep_closed | skipped | superseded | Already closed as superseded by #71569. |
| #71569 | needs_human | planned | needs_human | Keep open for maintainer/product decision on final notification behavior; no fix PR is allowed by this job. |
| #75256 | route_security | planned | security_sensitive | Exact security-sensitive linked ref must be routed to central OpenClaw security handling only. |
| #87322 | keep_canonical | planned | canonical | Canonical open issue for the Mattermost block-streaming overwrite bug; closeout must wait for a landed fix. |
| #87449 | keep_canonical | planned | canonical | Best hydrated canonical PR path, but not merge-ready or actionable under this close-only job. |
| #88766 | keep_closed | skipped | related | Already closed and not a live dedupe target. |
| #91331 | keep_closed | skipped | related | Merged adjacent fix, historical context only. |

## Needs Human

- #71569 needs a maintainer/product decision and live Mattermost proof for whether final answers should trigger a new notification instead of silently editing the draft preview post.
