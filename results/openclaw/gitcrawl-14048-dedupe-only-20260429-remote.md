---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14048-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129107675"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129107675"
head_sha: "c6792f0250a6710fb4bca0bf6ba7777e5c4f0fbc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.819Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14048-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129107675](https://github.com/openclaw/clownfish/actions/runs/25129107675)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

No high-confidence closeout is safe. The closed representative #66523 is historical for the Windows OPENCLAW_STATE_DIR report, while the live refs split into distinct path/config subfamilies with open bugs or unresolved PR review blockers.

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
| #66523 | keep_closed | skipped | canonical | The representative is closed and no open candidate shares that exact OPENCLAW_STATE_DIR-on-Windows root cause. |
| #44599 | keep_canonical | planned | canonical | This is a live Docker whitespace bug, not a duplicate of the closed Windows OPENCLAW_STATE_DIR representative. |
| #44671 | keep_related | planned | related | Useful candidate PR for #44599, but not merge-ready or closeable in this dedupe-only job. |
| #45765 | keep_canonical | planned | canonical | This is a live OPENCLAW_HOME nesting bug with unique reproduction details, so it should remain open as the canonical issue for that subfamily. |
| #45784 | keep_related | planned | related | Useful but incomplete contributor PR; keep open for repair rather than closing or treating the issue as fixed. |
| #51429 | keep_related | planned | related | Related path/config portability issue, but not the same root cause as #66523, #44599, or #45765. |
| #54014 | keep_related | planned | related | Related broad OPENCLAW_HOME contract issue; not a true duplicate and not safe to close in this cluster. |
| #65536 | keep_related | planned | related | Related focused PR for one OPENCLAW_HOME/HOME path-resolution facet; keep open because merge is disallowed and maintainer review is still needed. |

## Needs Human

- none
