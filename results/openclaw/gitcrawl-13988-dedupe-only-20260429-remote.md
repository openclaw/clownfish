---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13988-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109806452"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109806452"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.778Z"
canonical: "https://github.com/openclaw/openclaw/issues/40540"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40540"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13988-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109806452](https://github.com/openclaw/clownfish/actions/runs/25109806452)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/40540

## Summary

Planned classification only. The closed representative #69181 is obsolete; #40540 is the best open canonical for the update/global npm self-update subset. No instant close/comment/label action is safe because the other open items have distinct roots, unresolved open PRs, or stale/failing review evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #69181 | keep_closed | skipped | duplicate | Representative is already closed as a duplicate of #61175; no mutation planned. |
| #40540 | keep_canonical | planned | canonical | Best surviving open canonical for the Windows npm global self-update/EBUSY subfamily. |
| #44614 | keep_related | planned | related | Useful related implementation candidate, but not merge-ready and merge/fix actions are blocked for this job. |
| #43712 | keep_related | planned | related | Related update/install-path issue, but not a duplicate of the chosen canonical. |
| #52558 | keep_independent | planned | independent | Independent from this update/install dedupe family; leave open. |
| #63719 | keep_related | planned | related | Related npm global update issue with unresolved linked PR state; no high-confidence close. |
| #63794 | keep_related | planned | related | Keep open for maintainer/contributor follow-up; not merge-ready and not safe to close as superseded from this dedupe pass. |
| #64892 | keep_related | planned | related | Related but distinct maintainer report; leave open. |
| #65130 | keep_related | planned | related | Related container npm update failure; no high-confidence fixed-by-candidate close action from the hydrated evidence. |

## Needs Human

- none
