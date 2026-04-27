---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156610-autonomous-smoke"
mode: "autonomous"
run_id: "24985858345"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24985858345"
head_sha: "a357d4628713c59472019d207d99949bc4b4ad8e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T09:10:39.682Z"
canonical: "https://github.com/openclaw/openclaw/pull/72658"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37706"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72658"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 5
needs_human_count: 0
---

# ghcrawl-156610-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24985858345](https://github.com/openclaw/clownfish/actions/runs/24985858345)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72658

## Summary

Hydrated preflight shows #44256 is already closed and replaced by ProjectClownfish PR #72658. #72658 is the canonical repair path for the Feishu/Lark @all false-positive bug, but merge is blocked until the executor runs Codex /review and records clean merge preflight. Security-sensitive #49770 is quarantined only for central security triage. Non-security overlapping PRs are superseded by #72658, but closeout is blocked until the canonical fix path is merged or merge-ready under policy.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 5 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/72658 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49767 | close_superseded | skipped | superseded | action status is blocked |
| #50144 | close_superseded | skipped | superseded | action status is blocked |
| #50394 | close_superseded | skipped | superseded | action status is blocked |
| #50801 | close_superseded | skipped | superseded | action status is blocked |
| #58867 | close_superseded | skipped | superseded | action status is blocked |
| #72658 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #37706 | keep_canonical | planned | canonical |  |
| #39568 | keep_related | planned | related |  |
| #39569 | keep_related | planned | related |  |
| #44256 | keep_closed | skipped | superseded | Already closed refs are historical evidence only. |
| #49761 | keep_closed | skipped | duplicate | Already closed refs must not receive closure actions. |
| #49767 | close_superseded | blocked | superseded | Blocked on canonical fix path #72658 completing merge preflight and landing. |
| #49770 | route_security | planned | security_sensitive | Route only this ref to central OpenClaw security handling; do not close, merge, comment, or use it as implementation source. |
| #50144 | close_superseded | blocked | superseded | Blocked on canonical fix path #72658 completing merge preflight and landing. |
| #50394 | close_superseded | blocked | superseded | Blocked on canonical fix path #72658 completing merge preflight and landing. |
| #50801 | close_superseded | blocked | superseded | Blocked on canonical fix path #72658 completing merge preflight and landing. |
| #58867 | close_superseded | blocked | superseded | Blocked on canonical fix path #72658 completing merge preflight and landing. |
| #72658 | fix_needed | planned | canonical | Executor should repair/finalize the canonical PR branch by running Codex /review, addressing findings if any, rerunning pnpm check:changed, then producing merge_preflight before merge. |
| cluster:ghcrawl-156610-autonomous-smoke | build_fix_artifact | planned |  | Build a repair_contributor_branch artifact for #72658 rather than returning keep_canonical only. |

## Needs Human

- none
