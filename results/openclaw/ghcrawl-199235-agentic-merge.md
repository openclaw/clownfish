---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199235-agentic-merge"
mode: "autonomous"
run_id: "24968248718"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24968248718"
head_sha: "7d4cb531a8aefe63df69f7cc78f50c73fe08de4d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T22:20:51.411Z"
canonical: "https://github.com/openclaw/openclaw/pull/55978"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/55978"
actions_total: 9
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-199235-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24968248718](https://github.com/openclaw/projectclownfish/actions/runs/24968248718)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/55978

## Summary

Hydrated state shows this ghcrawl cluster is over-broad. The live canonical for this cluster's representative family is open PR #55978 for the cron workspace sticky-offset CSS bug, but merge is not safe because checks are failing, mergeability is unknown, and no Codex /review preflight is present. The unrelated line-clamp and command-palette PRs should stay open for separate follow-up, while already-closed exec-approval PRs remain historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #55978 | keep_canonical | planned | canonical | Canonical PR is clear, but it needs repair/validation before any merge action. |
| cluster:ghcrawl-199235-agentic-merge | build_fix_artifact | planned |  | Prepare a repair/validation path for #55978 before merge consideration. |
| #45020 | keep_independent | planned | independent | Separate line-clamp bug family; leave open for its own canonical path. |
| #45114 | keep_independent | planned | independent | Useful but unrelated PR; keep open for a separate line-clamp follow-up. |
| #45536 | keep_closed | skipped | duplicate | Already closed; no close action is valid. |
| #47245 | keep_independent | planned | independent | Unrelated open PR; leave open for its own review/merge path. |
| #50980 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation should be emitted. |
| #60031 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation should be emitted. |
| #66658 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation should be emitted. |

## Needs Human

- none
