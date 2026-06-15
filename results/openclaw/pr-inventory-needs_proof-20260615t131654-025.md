---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-025"
mode: "plan"
run_id: "27550392967"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27550392967"
head_sha: "9a903e900d3280431ae7c80464316b3e5c248188"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:46:46.273Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-needs_proof-20260615T131654-025

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27550392967](https://github.com/openclaw/clownfish/actions/runs/27550392967)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode inventory classification for 40 PR refs. Eight security-sensitive refs are routed to central security handling. Twenty-one hydrated open non-security PRs are kept independent because this shard is not a dedupe cluster and merge/fix/close work is blocked or disabled. One already-closed PR is kept closed. Ten refs could not be classified from live state because the preflight artifact only has unavailable/rate-limited state.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #70056 | keep_independent | planned | independent |  |
| #70105 | keep_independent | planned | independent |  |
| #70287 | keep_independent | planned | independent |  |
| #70332 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #70471 | keep_independent | planned | independent |  |
| #70497 | keep_independent | planned | independent |  |
| #70605 | keep_independent | planned | independent |  |
| #70630 | keep_independent | planned | independent |  |
| #70813 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #70876 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #71113 | keep_independent | planned | independent |  |
| #89656 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #89680 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #89688 | keep_independent | planned | independent |  |
| #89693 | keep_independent | planned | independent |  |
| #90690 | keep_independent | planned | independent |  |
| #91712 | keep_closed | skipped |  | Already closed in hydrated preflight state. |
| #89553 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #89586 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #92764 | keep_independent | planned | independent |  |
| #92975 | keep_independent | planned | independent |  |
| #39496 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #40311 | keep_independent | planned | independent |  |
| #40877 | keep_independent | planned | independent |  |
| #41265 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #58679 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #59221 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #61335 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #92999 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #64649 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #64805 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #70268 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #70409 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #70676 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #71024 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #71062 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #71503 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #71563 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #72025 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |
| #72224 | needs_human | blocked | needs_human | Live PR state is unavailable in the authoritative preflight artifact. |

## Needs Human

- Live state unavailable in the preflight artifact for candidate refs #41265, #58679, #59221, #61335, #92999, #64649, #64805, #70268, #70409, #70676, #71024, #71062, #71503, #71563, #72025, and #72224; this result emits blocked needs_human actions for the subset listed in the job candidates that could not be safely classified from hydrated state.
