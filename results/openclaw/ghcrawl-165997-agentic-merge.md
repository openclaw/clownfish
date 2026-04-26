---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165997-agentic-merge"
mode: "autonomous"
run_id: "24965158529"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24965158529"
head_sha: "27c2c310692398fc86d262abfd33e1b06e631178"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T19:34:09.120Z"
canonical: "https://github.com/openclaw/openclaw/pull/72328"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39392"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72328"
actions_total: 12
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-165997-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24965158529](https://github.com/openclaw/projectclownfish/actions/runs/24965158529)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72328

## Summary

Hydrated artifact shows no security-sensitive items. The original representative #46275 is closed and superseded; the live canonical path for the agent-switch stale model-select bug is replacement PR #72328 with issue #39392 kept open. No merge or post-merge close is recommended because #72328 is currently dirty and has an unresolved Greptile review finding. Other open refs split into related config-reload and page-load select subfamilies rather than duplicate closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39392 | keep_canonical | planned | canonical | Keep the issue open as the canonical bug until #72328 is mergeable and landed. |
| #39401 | keep_closed | skipped | superseded | Already closed refs must not receive closure actions. |
| #39495 | keep_closed | skipped | superseded | Already closed refs must not receive closure actions. |
| #46275 | keep_closed | skipped | superseded | Representative is obsolete and already closed; use #39392/#72328 as the live canonical path. |
| #70633 | keep_closed | skipped | superseded | Already closed refs must not receive closure actions. |
| #72328 | keep_canonical | planned | canonical | Canonical PR is useful and narrow, but merge is blocked by dirty mergeability and an unresolved review-bot finding. |
| #40352 | keep_related | planned | related | Related config-reload subfamily; do not close as duplicate of the agent-switch canonical. |
| #40441 | keep_related | planned | related | Useful related PR, but not merge-ready and not a duplicate close target. |
| #40443 | keep_related | planned | related | Related config-reload follow-up; keep open for separate review rather than merging in the agent-switch cluster. |
| #43013 | keep_related | planned | related | Related page-load select subfamily; keep open rather than closing before a clean canonical page-load fix lands. |
| #52948 | keep_related | planned | related | Related page-load select subfamily; not the canonical agent-switch fix. |
| #54724 | keep_related | planned | related | Broader related follow-up; do not merge or close it in this narrow canonical path. |

## Needs Human

- none
