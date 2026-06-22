---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157023-autonomous-smoke"
mode: "autonomous"
run_id: "27939883744"
workflow_run_id: "27939883744"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27939883744"
head_sha: "1763fdb0c23e13d9d9f5b94b8a476b1f0a0f65b4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T08:35:58.012Z"
canonical: "https://github.com/openclaw/openclaw/pull/73989"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73989"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-157023-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27939883744](https://github.com/openclaw/clownfish/actions/runs/27939883744)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73989

## Summary

The original job candidates are now closed. #41030 is superseded by the shipped transport-liveness design in #69833, while #45712 has already been replaced by the open Clownfish repair PR #73989 with contributor credit preserved. Current main still appears to need the reconnect-grace fix, but #73989 is not safely repairable by this deterministic result because the hydrated PR carries the blocked clawsweeper:automerge label, is dirty, has failing checks, and has unresolved review evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41030 | keep_closed | skipped | superseded | Already closed and superseded; keep as historical contributor context only. |
| #45712 | keep_closed | skipped | superseded | Already replaced by the open canonical repair PR #73989. |
| #73989 | needs_human | blocked | needs_human | A human or dedicated maintainer workflow must clear the blocked ClawSweeper/automerge state before any executable repair or merge plan can safely target #73989. |
| cluster:ghcrawl-157023-autonomous-smoke | needs_human | blocked | needs_human | No complete executable cluster fix artifact is safe from the provided artifacts without first resolving the blocked #73989 ClawSweeper/automerge state. |

## Needs Human

- Resolve the blocked #73989 ClawSweeper/automerge and human-review state before planning an executable repair or merge path for the reconnect-grace fix.
