---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1113-intake-20260619"
mode: "plan"
run_id: "27797598373-1-3"
workflow_run_id: "27797598373"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27797598373"
head_sha: "f8969478d2e3a887fcc1cb04027b43aefeb6a665"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T00:25:28.128Z"
canonical: "#78493"
canonical_issue: "#78493"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1113-intake-20260619

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27797598373](https://github.com/openclaw/clownfish/actions/runs/27797598373)

Workflow conclusion: success

Worker result: planned

Canonical: #78493

## Summary

Plan-mode classification only. #78493 is the only hydrated open actionable ref, is not security-sensitive in the preflight artifact, and carries unique macOS LaunchAgent mixed-ownership/config-clobber reproduction detail, so it should remain open as the live canonical for this remaining actionable slice rather than be closed against excluded overlap context.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #78493 | keep_canonical | planned | canonical | Only one actionable open item is hydrated; keep it as canonical for the remaining non-security issue slice and do not emit any mutating close/comment/label action in plan mode. |

## Needs Human

- none
