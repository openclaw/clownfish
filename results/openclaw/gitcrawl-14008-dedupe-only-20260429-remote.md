---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14008-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25110388392"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25110388392"
head_sha: "7d2adb9c59b8750974f50f0d9103e76d18fa9122"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.785Z"
canonical: "https://github.com/openclaw/openclaw/issues/62328"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62328"
canonical_pr: null
actions_total: 18
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14008-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25110388392](https://github.com/openclaw/clownfish/actions/runs/25110388392)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/62328

## Summary

Hydrated state at main abaa4326d81b56da1c468190a5006365b2a49cdc shows no security-sensitive refs. The closed representative #59518 should not receive actions; #62328 is the current open canonical for the FTS5-unavailable node:sqlite family. No close actions are planned because the remaining open items are distinct related subfamilies or non-merge-ready PRs, and the job is dedupe-only with fix/merge/raise_pr disabled.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
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
| #59518 | keep_closed | skipped | related | Representative is obsolete because it is already closed; use #62328 as the current open canonical for the FTS5-unavailable family. |
| #62328 | keep_canonical | planned | canonical | Current open canonical for the FTS5-unavailable node:sqlite memory-search family. |
| #46570 | keep_related | planned | related | Related memory-search recall issue with unique memory-file versus session-result behavior; keep open. |
| #48300 | keep_related | planned | related | Related hybrid keyword-filter bug with its own candidate PR; not a duplicate of #62328. |
| #48328 | keep_related | planned | related | Useful but stale/non-merge-ready candidate for #48300; keep open for separate repair/review. |
| #52115 | keep_related | planned | related | Related memory-search freshness subfamily; keep open. |
| #56862 | keep_related | planned | related | Related to the freshness/sync-on-search family, but it has specific forced-reindex recovery details; keep open. |
| #59137 | keep_related | planned | related | Related hardening PR, not a canonical fix for this dedupe cluster and not mergeable under this job. |
| #59451 | keep_related | planned | related | Related node:sqlite capability gap with distinct fallback-search scope; keep open. |
| #62599 | keep_independent | planned | independent | Independent status-command/plugin-runtime issue; do not close or route through this cluster. |
| #64187 | keep_related | planned | related | Related Windows memory-core atomic-reindex subfamily; keep open pending a corrected PR. |
| #71611 | keep_related | planned | related | Useful but not merge-ready implementation candidate; keep open for revision or replacement. |
| #65156 | keep_related | planned | related | Related sqlite-vec readiness subfamily; keep open. |
| #65704 | keep_closed | skipped | superseded | Already closed candidate; no mutation is valid. |
| #66746 | keep_related | planned | related | Related Windows sqlite-vec loader/readiness subfamily; keep open. |
| #66977 | keep_related | planned | related | Related macOS sqlite-vec/native-extension capability gap; keep open. |
| #69059 | keep_related | planned | related | Related useful PR for the Windows sqlite-vec subfamily; keep open rather than merge or close. |
| #69199 | keep_related | planned | related | Related narrow UX PR, not a dedupe closeout target. |

## Needs Human

- none
