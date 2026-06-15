---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-9565-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25137279928"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25137279928"
head_sha: "ca8a3303df8e547d7f06bee2c26da230fe0cdb72"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.308Z"
canonical: "https://github.com/openclaw/openclaw/tree/8f50920c4565017679f99d6a7e0a2ebbd2021eb9"
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-9565-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25137279928](https://github.com/openclaw/clownfish/actions/runs/25137279928)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/8f50920c4565017679f99d6a7e0a2ebbd2021eb9

## Summary

Representative #57502 is already closed. Hydrated state shows current main at https://github.com/openclaw/openclaw/tree/8f50920c4565017679f99d6a7e0a2ebbd2021eb9 already contains the Discord explicit-target/user:<id> delivery behavior covered by the older closed PRs. The only open cluster candidate, #68278, is a related but distinct Discord accountId token-resolution PR with unresolved review-bot blockers, so it should remain open. No close, merge, or fix actions are planned.

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
| #5055 | keep_closed | skipped | independent | Already closed linked context outside this Discord dedupe family. |
| #33978 | keep_closed | skipped | fixed_by_candidate | Already closed linked issue; no closure action is valid. |
| #53627 | keep_closed | skipped | superseded | Already closed; useful historical duplicate/superseded PR, not an open mutation target. |
| #53824 | keep_closed | skipped | fixed_by_candidate | Already closed linked issue; no closure action is valid. |
| #57502 | keep_closed | skipped | fixed_by_candidate | Representative is obsolete because it is already closed and current main is the canonical path. |
| #65123 | keep_closed | skipped | fixed_by_candidate | Already closed after current-main verification. |
| #68179 | keep_closed | skipped | superseded | Already closed duplicate/superseded context for the explicit-target normalization fix. |
| #68278 | keep_related | planned | related | Related Discord cron/accountId token-resolution work with unique scope and unresolved review blockers; not a duplicate of the closed explicit-target fixes. |
| #72247 | keep_closed | skipped | superseded | Already closed duplicate/superseded context. |
| #74303 | keep_closed | skipped | related | Already merged related context, not an open dedupe target. |

## Needs Human

- none
