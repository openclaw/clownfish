---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-960-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610226573"
workflow_run_id: "27610226573"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610226573"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.513Z"
canonical: "https://github.com/openclaw/openclaw/issues/84297"
canonical_issue: "https://github.com/openclaw/openclaw/issues/84297"
canonical_pr: "https://github.com/openclaw/openclaw/pull/84335"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-960-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610226573](https://github.com/openclaw/clownfish/actions/runs/27610226573)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/84297

## Summary

Kept #84297 as the canonical open issue. #84335 is a hydrated, related active fix candidate but is excluded overlap context and this job cannot merge, fix, or raise PRs. No close/comment/label mutations are planned because the only actionable open ref is the canonical issue.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #84297 | keep_canonical | planned | canonical | #84297 remains the best live canonical report for the Slack per-agent identity loss across cron announce and heartbeat target-channel sends. |
| #84335 | keep_related | planned | related | Keep the linked PR open as related active fix context; do not mutate it from this overlap-excluding cleanup job. |
| #38235 | keep_closed | skipped | related | Already closed context ref; no closure action is valid. |
| #89663 | keep_closed | skipped | independent | Already closed context ref with a conflicting behavioral direction; no mutation is valid. |
| #91417 | keep_closed | skipped | superseded | Already closed partial fix attempt; keep as historical superseded context only. |

## Needs Human

- none
