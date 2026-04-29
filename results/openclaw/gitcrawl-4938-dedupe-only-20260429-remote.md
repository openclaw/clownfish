---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4938-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136015515"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136015515"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T22:08:49.916Z"
canonical: "https://github.com/openclaw/openclaw/pull/42304"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42304"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-4938-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136015515](https://github.com/openclaw/clownfish/actions/runs/25136015515)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42304

## Summary

Hydrated state shows the historical representative #39786 and the docs-only candidate #59914 are already closed under the ClawHub/community-plugin discovery policy. The only open non-security candidate is #42304, which should remain open as the current Android Adaptive Card renderer canonical path but is not merge-ready. Security-sensitive #42350 is quarantined only for central OpenClaw security handling. No close, merge, fix, or PR actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #42304 | keep_canonical | planned | canonical | #42304 is the best live non-security canonical candidate for the Android Adaptive Card renderer subfamily, but it needs maintainer product review and review-finding repair before any merge path. |
| #42350 | route_security | planned | security_sensitive | Security-sensitive hydrated evidence requires routing #42350 to central OpenClaw security handling while continuing non-security classification. |
| #59914 | keep_closed | skipped | superseded | Already closed before this run; retain as historical evidence only and do not emit a close/comment/label mutation. |

## Needs Human

- none
