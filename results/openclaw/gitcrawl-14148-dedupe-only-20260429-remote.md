---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14148-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129785433"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129785433"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.842Z"
canonical: "https://github.com/openclaw/openclaw/pull/73949"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73949"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14148-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129785433](https://github.com/openclaw/clownfish/actions/runs/25129785433)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73949

## Summary

Hydrated state shows the original representative #58216 is now closed. The best live canonical path for that root cause is linked replacement PR #73949. No close, merge, or fix mutation is planned from this dedupe-only job: #62721 and #73989 remain open as related but distinct work, #41372 is independent, and closed candidate refs are historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #73949 | keep_canonical | planned | canonical | Original canonical #58216 is closed; #73949 is the active same-root canonical PR for the reconnect-exhausted stale-socket restart fix. |
| #73989 | keep_related | planned | related | Keep as related follow-up subcluster; do not close or merge it as part of the #58216/#73949 duplicate family. |
| #62721 | keep_related | planned | related | Useful but distinct contributor PR; keep open and out of this dedupe closeout. |
| #41372 | keep_independent | planned | independent | Independent broad maintainer-triage issue; no dedupe closeout belongs in this cluster. |
| #58216 | keep_closed | skipped | superseded | Closed representative superseded by hydrated open replacement #73949. |
| #45712 | keep_closed | skipped | superseded | Closed contributor PR superseded by hydrated replacement #73989; historical evidence only for this cluster. |
| #57781 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented/fixed by the shipped transport-liveness work; historical context only. |
| #58988 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by current main; historical context only. |

## Needs Human

- none
