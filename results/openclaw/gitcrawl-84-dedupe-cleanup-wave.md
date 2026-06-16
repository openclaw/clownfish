---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-84-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608148951"
workflow_run_id: "27608148951"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608148951"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:36:29.384Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-84-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608148951](https://github.com/openclaw/clownfish/actions/runs/27608148951)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Repaired the deterministic validation failure without GitHub mutations. #90271 is quarantined with an exact-ref route_security action because the validator marked that target security-sensitive. The remaining open PRs are kept as related non-mutating classifications because they touch distinct test surfaces or distinct hardlink behavior, and #90275 is already merged/closed and retained only as historical related evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #90271 | route_security | planned | security_sensitive | Quarantine exact PR ref #90271 for central security handling; do not mutate, merge, close, or use it as an automated canonical path in this result. |
| #90215 | keep_related | planned | related | Related Windows symlink test-compatibility work, not a true duplicate of the quarantined #90271 ref. |
| #90217 | keep_related | planned | related | Related symlink capability-gating PR, but it covers a different subsystem and should not be closed as a duplicate. |
| #90266 | keep_related | planned | related | Related infra symlink test compatibility work, not a duplicate of the quarantined #90271 ref. |
| #90273 | keep_related | planned | related | Same file family as quarantined #90271 but distinct hardlink behavior, so no high-confidence duplicate or superseded closure. |
| #90275 | keep_closed | skipped | related | Already closed/merged; no mutation is valid or needed. |

## Needs Human

- none
