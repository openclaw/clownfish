---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14029-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25128779202"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25128779202"
head_sha: "557d1c04d653f3697f794ea5d55fd484f1831d03"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T19:18:15.220Z"
canonical: "https://github.com/openclaw/openclaw/issues/53345"
canonical_issue: "https://github.com/openclaw/openclaw/issues/53345"
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

# gitcrawl-14029-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25128779202](https://github.com/openclaw/clownfish/actions/runs/25128779202)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/53345

## Summary

No close, merge, or fix action is safe for this over-broad locale cluster. The obsolete Korean representative #40817 is closed; the only open Korean canonical path is #53345 for remaining non-UI agent/search localization asks. Other open refs are related but distinct Russian, Vietnamese, Swedish, and docs-localization work and should stay open.

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
| #40817 | keep_closed | skipped | superseded | Closed historical representative; retained only as evidence. |
| #43911 | keep_related | planned | related | Useful open locale PR, but distinct from the Korean canonical path and not closable. |
| #45309 | keep_closed | skipped | independent | Already closed before this worker action matrix; no mutation planned. |
| #49028 | keep_related | planned | related | Open Vietnamese UI locale work is useful and related, but not a duplicate of the Korean canonical issue. |
| #53345 | keep_canonical | planned | canonical | Best surviving Korean-family canonical item after the original representative #40817 closed. |
| #57531 | keep_closed | skipped | superseded | Already closed as implemented/superseded on main. |
| #57644 | keep_closed | skipped | superseded | Already closed as implemented/superseded on main. |
| #62063 | keep_related | planned | related | Distinct useful locale PR; keep open. |
| #65190 | keep_related | planned | related | Related Vietnamese localization work, but docs pipeline scope is distinct from #49028 and from the Korean canonical issue. |

## Needs Human

- none
