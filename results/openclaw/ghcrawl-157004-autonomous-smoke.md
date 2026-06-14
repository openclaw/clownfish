---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157004-autonomous-smoke"
mode: "autonomous"
run_id: "27487023623"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27487023623"
head_sha: "2a6367b2907f0eac3c7cc63b2ea0d14a27668940"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T03:42:59.725Z"
canonical: "https://github.com/openclaw/openclaw/pull/67783"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/67783"
actions_total: 5
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157004-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27487023623](https://github.com/openclaw/clownfish/actions/runs/27487023623)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/67783

## Summary

#67783 is the live canonical PR, but it is not merge-ready because the latest ClawSweeper review still asks for changes. Plan a repair of the contributor branch, keep the native Feishu typing API issue and the root_id routing PR related but separate, and leave the closed CI PR untouched.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #67783 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/73958 | clownfish/ghcrawl-157004-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #73958 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39 | keep_closed | skipped | independent | Already closed and unrelated to the Feishu cluster; no close/comment/label mutation is valid. |
| #67783 | fix_needed | planned | canonical | The bug is still present on current main and #67783 is a useful repairable contributor PR, but merge is blocked until the review finding is addressed, the branch is refreshed, validation runs, and Codex /review passes. |
| cluster:ghcrawl-157004-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair artifact for the canonical contributor PR rather than merging without resolved review proof. |
| #69572 | keep_related | planned | related | Same Feishu typing UX area, but different product/root-cause scope and not covered by the canonical PR. |
| #73958 | keep_related | planned | related | Related Feishu reply-routing work, not a duplicate or replacement for the canonical typing-reaction target fix; keep it open for its own repair/merge path. |

## Needs Human

- none
