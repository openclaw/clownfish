---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156940-autonomous-smoke"
mode: "autonomous"
run_id: "25102731398"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102731398"
head_sha: "9a08eb9ac982c5d395ca81610998f5f78efc9ef6"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T03:45:26.103Z"
canonical: "https://github.com/openclaw/openclaw/issues/11655"
canonical_issue: "https://github.com/openclaw/openclaw/issues/11655"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73389"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156940-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102731398](https://github.com/openclaw/clownfish/actions/runs/25102731398)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/11655

## Summary

Canonical remains open issue #11655. #52020 is already closed as a duplicate, #11699 is closed historical implementation context, and open PR #73389 is the active implementation candidate but is not merge-ready because the Aisle views.publish throttling finding, missing Codex /review merge preflight, and unknown mergeability need maintainer resolution.

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
| #11655 | keep_canonical | planned | canonical | #11655 is still the best live canonical tracker for Slack App Home tab support. |
| #52020 | keep_closed | skipped | duplicate | Already closed duplicate context; no close/comment mutation is valid for this target. |
| #11699 | keep_closed | skipped | superseded | Closed historical PR context only; do not mutate or close an already closed PR. |
| #73389 | needs_human | blocked | needs_human | Maintainer decision is required on #73389 before merge: resolve or explicitly accept the Aisle views.publish throttling finding, then rerun Codex /review and merge preflight. |

## Needs Human

- #73389: decide whether to resolve or explicitly accept the Aisle throttling finding about unthrottled Slack views.publish calls on app_home_opened before merge; Codex /review merge preflight is also missing and mergeable_state is unknown.
