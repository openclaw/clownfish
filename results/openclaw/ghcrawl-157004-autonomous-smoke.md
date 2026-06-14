---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157004-autonomous-smoke"
mode: "autonomous"
run_id: "27486521167"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27486521167"
head_sha: "fb8f137c423b876399d9e3e4ff1a8695add173e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T03:22:03.993Z"
canonical: "https://github.com/openclaw/openclaw/pull/67783"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/67783"
actions_total: 5
fix_executed: 0
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157004-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27486521167](https://github.com/openclaw/clownfish/actions/runs/27486521167)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/67783

## Summary

Canonical path is open PR #67783. It is narrow, editable, and current-main verification shows the reported Feishu typing-reaction target bug still exists, but unresolved ClawSweeper/Codex bot review findings block merge. Planned result: repair #67783's contributor branch, keep linked non-duplicate Feishu items open, and leave closed historical PR #39 untouched.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #67783 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | blocked |  | clownfish/ghcrawl-157004-autonomous-smoke | Codex /review did not pass after 2 attempt(s): No security-sensitive code issue found in the Feishu dispatch/typing diff. The code addresses the synthetic-id typing concern and the Greptile dead-parameter comment, but the current PR metadata is stale for this repair and should be fixed before merge. |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #67783 | fix_needed | planned | canonical | Repair the useful canonical contributor PR branch before merge; the branch is editable and narrow, but actionable bot review findings remain unresolved. |
| cluster:ghcrawl-157004-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair artifact for the existing #67783 branch instead of merging with unresolved review findings. |
| #69572 | keep_related | planned | related | Same Feishu typing UX area, but not the same root cause or fix scope as #67783; keep open as related follow-up. |
| #73958 | keep_related | planned | related | Related Feishu thread-routing PR with separate scope and unresolved checks/review; leave it open for its own repair/merge path. |
| #39 | keep_closed | skipped | independent | Already closed and independent historical context only. |

## Needs Human

- none
