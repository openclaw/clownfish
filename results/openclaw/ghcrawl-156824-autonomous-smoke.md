---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156824-autonomous-smoke"
mode: "autonomous"
run_id: "25107441623"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107441623"
head_sha: "a746142e846c8487ff6cabaafd172955050d63c3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.618Z"
canonical: "https://github.com/openclaw/openclaw/issues/50404"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50404"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156824-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107441623](https://github.com/openclaw/clownfish/actions/runs/25107441623)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50404

## Summary

Hydrated preflight state shows the original canonical hint #46835 and duplicate #46833 are already closed. The best live canonical path for the sidebar session-history family is #50404. #56997 remains open as related but not duplicate because it asks for separated/merged channel timelines and Gateway protocol design, not only a native session-history sidebar. No close, merge, or fix PR action is safe or needed in this run.

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
| #46833 | keep_closed | skipped | duplicate | Closed historical ref; keep as evidence only. |
| #46835 | keep_closed | skipped | duplicate | Closed canonical hint is obsolete; keep as historical duplicate evidence. |
| #50404 | keep_canonical | planned | canonical | Best live canonical issue for the Control UI session-sidebar/history management family. |
| #56997 | keep_related | planned | related | Related Control UI/session work with a distinct channel timeline and Gateway protocol design scope. |

## Needs Human

- none
