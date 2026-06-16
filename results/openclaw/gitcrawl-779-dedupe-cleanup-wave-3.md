---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-779-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610225117"
workflow_run_id: "27610225117"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610225117"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.493Z"
canonical: "https://github.com/openclaw/openclaw/issues/88809"
canonical_issue: "https://github.com/openclaw/openclaw/issues/88809"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-779-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610225117](https://github.com/openclaw/clownfish/actions/runs/27610225117)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/88809

## Summary

Canonical issue #88809 remains open and current for the macOS zsh handoff `status` crash. Linked PR #88823 is useful context and a plausible fix candidate, but it is excluded as existing-overlap context and is not merge-ready because the hydrated preflight shows a failing Real behavior proof check and an unresolved ClawSweeper proof blocker. No close, merge, label, comment, or fix PR action is safe or allowed for this cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #88809 | keep_canonical | planned | canonical | #88809 is the best live canonical tracking issue; keep it open until the linked fix path is proven and landed. |
| #88823 | keep_related | skipped | related | #88823 is useful related fix context for #88809, but is excluded from actionable refs and not merge-ready in this job. |

## Needs Human

- none
