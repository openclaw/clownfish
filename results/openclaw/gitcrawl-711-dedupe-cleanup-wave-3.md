---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-711-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610225852"
workflow_run_id: "27610225852"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610225852"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.503Z"
canonical: "https://github.com/openclaw/openclaw/issues/90139"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90139"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-711-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610225852](https://github.com/openclaw/clownfish/actions/runs/27610225852)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90139

## Summary

Classified the only open actionable candidate, #90139, as the live canonical issue for this cluster. No close, label, merge, or fix action is safe or permitted: the hydrated ClawSweeper review says current main still does not prove a fix for the reported valid-text-to-placeholder loss, the issue has unique TUI/webchat/WeChat delivery-path scope, and fix/raise_pr are blocked by job frontmatter.

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
| #90139 | keep_canonical | planned | canonical | #90139 has a distinct open report and current-main proof remains incomplete, so it is the canonical issue to keep open rather than a duplicate or fixed-by-candidate closeout. |
| #87060 | keep_closed | skipped | superseded | Closed linked PR is historical evidence only for this cluster; no mutation is planned. |
| #42119 | keep_closed | skipped | related | Closed related PR is historical evidence only and not a closure or fixed-by-candidate target. |

## Needs Human

- none
