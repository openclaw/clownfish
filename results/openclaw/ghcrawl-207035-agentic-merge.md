---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-207035-agentic-merge"
mode: "autonomous"
run_id: "24977042053"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24977042053"
head_sha: "50a0b51ad3e3cfffa74443fc81bf0c842f9747bf"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-04-27T04:49:51.172Z"
canonical: "https://github.com/openclaw/openclaw/pull/72417"
canonical_issue: "https://github.com/openclaw/openclaw/issues/42538"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72417"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 4
needs_human_count: 1
---

# ghcrawl-207035-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24977042053](https://github.com/openclaw/clownfish/actions/runs/24977042053)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/pull/72417

## Summary

Canonical PR #39921 is already closed and was replaced by #72417, but #72417 is hydrated as security-sensitive due Aisle security findings. Route only #72417 to central security triage. Non-security overlapping PRs are clear superseded/replacement candidates, but their closeout is blocked until the canonical fix path is cleared or replaced by security triage.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 4 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #42586 | close_superseded | skipped | superseded | action status is blocked |
| #46527 | close_superseded | skipped | superseded | action status is blocked |
| #52770 | close_superseded | skipped | superseded | action status is blocked |
| #46494 | close_duplicate | skipped | duplicate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72417 | route_security | planned | security_sensitive | Security-sensitive PRs are out of ProjectClownfish mutation scope. |
| #39921 | keep_closed | skipped | superseded | Historical source PR only; already closed. |
| #42586 | close_superseded | blocked | superseded | Blocked on canonical fix path #72417 clearing central security review or being replaced. |
| #46527 | close_superseded | blocked | superseded | Blocked on canonical fix path #72417 clearing central security review or being replaced. |
| #52770 | close_superseded | blocked | superseded | Blocked on canonical fix path #72417 clearing central security review or being replaced. |
| #42538 | keep_canonical | planned | canonical | Keep open as the non-security canonical issue thread until the fix path is cleared. |
| #46494 | close_duplicate | blocked | duplicate | Blocked on canonical fix path #72417 clearing central security review or being replaced. |
| #17105 | keep_closed | skipped | duplicate | Already closed. |
| #20967 | keep_closed | skipped | related | Already closed historical context. |
| #31307 | keep_closed | skipped | related | Already closed related context, not a mutation target. |
| #32689 | keep_closed | skipped | related | Already closed historical context. |
| #42543 | keep_closed | skipped | superseded | Already closed and superseded by the replacement path. |

## Needs Human

- #72417 must be handled by central OpenClaw security triage before ProjectClownfish can merge it or close non-security PRs/issues as fixed or superseded by it.
