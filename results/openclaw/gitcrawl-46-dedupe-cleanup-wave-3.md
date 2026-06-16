---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-46-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610220995"
workflow_run_id: "27610220995"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610220995"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.436Z"
canonical: "https://github.com/openclaw/openclaw/pull/87449"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87322"
canonical_pr: "https://github.com/openclaw/openclaw/pull/87449"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-46-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610220995](https://github.com/openclaw/clownfish/actions/runs/27610220995)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/87449

## Summary

Autonomous classification only. The canonical live fix path for the Mattermost text-block overwrite/block-streaming failure is open PR #87449, with #87322 kept as the canonical source issue until that PR lands. #71569 is related but not a duplicate because its remaining unresolved surface is final-notification UX/product behavior. Security-sensitive linked PR #75256 is quarantined only for central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #87449 | keep_canonical | planned | canonical | Best live canonical PR for the #87322 Mattermost text-block boundary/block-streaming failure, but not mergeable by this job. |
| #87322 | keep_canonical | planned | canonical | Canonical source issue for the live #87449 fix path; closeout must wait for the canonical PR to land or be replaced. |
| #71569 | keep_related | planned | related | Related Mattermost streaming UX report with a distinct unresolved final-notification behavior; not safe to close as duplicate of the text-block overwrite issue. |
| #75256 | route_security | planned | security_sensitive | Exact security-sensitive linked ref routed to central OpenClaw security handling; no mutation or close action planned by Clownfish. |
| #32868 | keep_closed | skipped | related | Already closed context ref; no close action permitted. |
| #47838 | keep_closed | skipped | related | Already merged historical context; no mutation target in this cluster. |
| #48522 | keep_closed | skipped | related | Already closed context item. |
| #70253 | keep_closed | skipped | related | Already closed and partly broader than this cluster. |
| #71565 | keep_closed | skipped | superseded | Already closed as superseded by #71569. |
| #91331 | keep_closed | skipped | related | Already merged related progress-preview fix, but excluded overlap context only for this cluster. |

## Needs Human

- none
