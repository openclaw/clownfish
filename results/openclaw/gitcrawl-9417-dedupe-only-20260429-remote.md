---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-9417-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25137277255"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25137277255"
head_sha: "ca8a3303df8e547d7f06bee2c26da230fe0cdb72"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.306Z"
canonical: "https://github.com/openclaw/openclaw/issues/65201"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65201"
canonical_pr: "https://github.com/openclaw/openclaw/pull/67463"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-9417-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25137277255](https://github.com/openclaw/clownfish/actions/runs/25137277255)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65201

## Summary

Closed representative #56982 is historical only. The current canonical issue is #65201, with #67463 as the narrow open PR candidate for the Gateway doctor SecretRef false-positive. #65229 is planned for superseded close because it is broader, has unresolved review history, and is covered by the narrower hydrated candidate #67463.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65229 | close_superseded | blocked | superseded | target is not listed in job candidates |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #17761 | keep_closed | skipped |  | Already closed in live preflight state; no mutation planned. |
| #33819 | keep_closed | skipped |  | Already closed in live preflight state; no mutation planned. |
| #43561 | keep_closed | skipped |  | Already closed in live preflight state; no mutation planned. |
| #54536 | keep_closed | skipped |  | Already closed in live preflight state; no mutation planned. |
| #56982 | keep_closed | skipped |  | Representative is obsolete and already closed; current canonical issue is #65201. |
| #57087 | keep_closed | skipped |  | Already closed in live preflight state; no mutation planned. |
| #65201 | keep_canonical | planned | canonical | Keep open as the canonical issue for the current Gateway doctor SecretRef false-positive. |
| #65229 | close_superseded | planned | superseded | Superseded by the narrower hydrated canonical PR #67463 for the same #65201 root cause. |
| #67463 | keep_canonical | planned | canonical | Canonical open PR candidate for #65201; keep open for maintainer review and landing outside this dedupe-only job. |

## Needs Human

- none
