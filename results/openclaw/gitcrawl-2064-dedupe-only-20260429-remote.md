---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2064-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131886997"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131886997"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.928Z"
canonical: "https://github.com/openclaw/openclaw/pull/59697"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/59697"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2064-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131886997](https://github.com/openclaw/clownfish/actions/runs/25131886997)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/59697

## Summary

Selected #59697 as the current open canonical PR for the relevant-memories user-message UI/history leak. No close actions are safe: the other open refs are useful contributor work or related follow-up subclusters with distinct root causes, failing checks, or unresolved review-bot findings. Closed representative #51288 is historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #59697 | keep_canonical | planned | canonical | Canonical open PR for this cluster, but not merge-ready or closable-as-fixed in this run. |
| #41851 | keep_related | planned | related | Useful contributor PR in a related sanitizer subcluster; not a duplicate and not safe to close. |
| #43061 | keep_related | planned | related | Related open implementation candidate for the #42165 tool-profile regression, not the relevant-memories UI/history canonical path. |
| #44445 | keep_related | planned | related | Useful but broad related contributor PR with unresolved review and check blockers; not closable as duplicate or superseded in this run. |
| #14629 | keep_related | planned | related | Open related sanitizer issue with unique remaining work; keep open. |
| #42165 | keep_related | planned | related | Open related policy issue that should remain tracked outside the #59697 canonical path. |
| #61675 | keep_related | planned | related | Linked related canonical path for daily/idle reset hooks; keep open and separate from this dedupe closeout. |

## Needs Human

- none
