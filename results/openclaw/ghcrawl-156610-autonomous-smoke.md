---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156610-autonomous-smoke"
mode: "autonomous"
run_id: "24985367888"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24985367888"
head_sha: "8ffde172f9f9317fcea4f231a536be493c2f7f18"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T08:52:55.505Z"
canonical: "https://github.com/openclaw/openclaw/pull/72658"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37706"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72658"
actions_total: 14
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 5
needs_human_count: 0
---

# ghcrawl-156610-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24985367888](https://github.com/openclaw/clownfish/actions/runs/24985367888)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72658

## Summary

Hydrated state shows #44256 is already closed and replaced by the maintainer-calibrated ProjectClownfish PR #72658. #72658 is the canonical repair path for open issue #37706, but it is not merge-ready because required checks include failures and no clean Codex /review preflight is present. Security-sensitive #49770 is routed to central security handling only. Related reply-mention work #39568/#39569 remains separate. Superseded contributor PR closeouts are blocked until #72658 is repaired and merge-ready or merged, preserving source credit.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 5 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #72658 has maintainer_can_modify=false |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72658 | clownfish/ghcrawl-156610-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49767 | close_superseded | skipped | superseded | action status is blocked |
| #50144 | close_superseded | skipped | superseded | action status is blocked |
| #50394 | close_superseded | skipped | superseded | action status is blocked |
| #50801 | close_superseded | skipped | superseded | action status is blocked |
| #58867 | close_superseded | skipped | superseded | action status is blocked |
| #72658 | merge_canonical | blocked | fix_pr | pull request is closed |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #37706 | keep_canonical | planned | canonical | Keep the issue open until the canonical fix PR #72658 is repaired and merged. |
| #39568 | keep_related | planned | related | Related Feishu mention area, but distinct root cause and should remain outside this @all cleanup cluster. |
| #39569 | keep_related | planned | related | Keep open as a related but separate Feishu reply-mention repair path. |
| #44256 | keep_closed | skipped | superseded | Already closed refs must not receive close actions. |
| #49761 | keep_closed | skipped | duplicate | Already closed duplicate; no further close action is valid. |
| #49767 | close_superseded | blocked | superseded | Closeout is blocked on canonical fix path #72658 becoming merge-ready or merged. |
| #49770 | route_security | planned | security_sensitive | Route this exact PR to central OpenClaw security handling; do not close, merge, or use it as an implementation source in ProjectClownfish. |
| #50144 | close_superseded | blocked | superseded | Closeout is blocked on canonical fix path #72658 becoming merge-ready or merged. |
| #50394 | close_superseded | blocked | superseded | Closeout is blocked on canonical fix path #72658 becoming merge-ready or merged. |
| #50801 | close_superseded | blocked | superseded | Closeout is blocked on canonical fix path #72658 becoming merge-ready or merged. |
| #58867 | close_superseded | blocked | superseded | Closeout is blocked on canonical fix path #72658 becoming merge-ready or merged. |
| #72658 | keep_canonical | planned | canonical | Canonical PR, but merge is not recommended until repair preflight is complete. |
| #72658 | fix_needed | planned | canonical | Repair the calibrated canonical PR branch, rerun validation and Codex /review, then only merge after clean preflight. |
| cluster:ghcrawl-156610-autonomous-smoke | build_fix_artifact | planned |  | Build a repair-contributor-branch artifact for #72658 rather than merging or closing superseded PRs now. |

## Needs Human

- none
