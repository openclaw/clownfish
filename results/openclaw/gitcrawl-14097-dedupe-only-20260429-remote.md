---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14097-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129748867"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129748867"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.828Z"
canonical: "https://github.com/openclaw/openclaw/commit/9f450dcf06"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56579"
canonical_pr: "https://github.com/openclaw/openclaw/pull/56582"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14097-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129748867](https://github.com/openclaw/clownfish/actions/runs/25129748867)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/commit/9f450dcf06

## Summary

Representative #56582 is already closed after the trailing-at ClawHub parser fix landed on main via 9f450dcf06. The only open PR candidate, #56394, belongs to the separate #56368 ClawHub 429 login-hint request, so it should stay open and is not a duplicate or replacement canonical for this cluster. No close, merge, or fix actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #56394 | keep_independent | planned | independent | Different root cause and user-visible failure from the closed trailing-at parser cluster; keep this PR open under its own #56368 path. |
| #56368 | keep_independent | planned | independent | Linked open issue belongs to a separate 429 login-hint subcluster, not the trailing-at parser family. |
| #56579 | keep_closed | skipped | canonical | Already closed canonical issue for the trailing-at parser bug; closed context is evidence only. |
| #56582 | keep_closed | skipped | superseded | Closed representative PR was superseded by the landed main commit; no close action is valid for an already-closed PR. |
| #56466 | keep_closed | skipped | independent | Already-closed independent ClawHub wildcard range context; no mutation target. |
| #56446 | keep_closed | skipped | independent | Closed independent issue from a different ClawHub plugin API range family. |
| #56790 | keep_closed | skipped | related | Already-closed mixed-scope related PR; no mutation is valid or needed. |

## Needs Human

- none
