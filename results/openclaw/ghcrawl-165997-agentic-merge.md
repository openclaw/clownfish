---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165997-agentic-merge"
mode: "autonomous"
run_id: "24966557775"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24966557775"
head_sha: "23011a560ecd1e9edd009f92232cc2538590f2c9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T20:50:10.438Z"
canonical: "https://github.com/openclaw/openclaw/issues/39392"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39392"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72328"
actions_total: 16
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-165997-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24966557775](https://github.com/openclaw/projectclownfish/actions/runs/24966557775)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/39392

## Summary

Classified the hydrated cluster without direct GitHub mutation. The live canonical issue for the agent-switch stale model-selection bug is #39392, with #72328 as the current repair path, but merge/closeout is blocked until the dirty branch and Greptile test-flush finding are repaired. Config-reload and page-load/model-catalog items are related subfamilies and should remain open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72328 | merge_canonical | blocked | fix_pr | merge state status is UNSTABLE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39392 | keep_canonical | planned | canonical | Best live canonical issue for the agent-switch stale primary-model dropdown subfamily. |
| #72328 | fix_needed | planned | canonical | Repair/rebase #72328 and address the hydrated Greptile finding before any merge_canonical or duplicate closeout. |
| cluster:ghcrawl-165997-agentic-merge | build_fix_artifact | planned |  | Prepare an auditable fix artifact for repairing the existing replacement path without merging or closing anything in this worker run. |
| #39401 | keep_closed | skipped | superseded | Historical source PR superseded by hydrated replacement #72328. |
| #39495 | keep_closed | skipped | superseded | Closed duplicate patch attempt for the canonical agent-switch subfamily. |
| #46275 | keep_closed | skipped | superseded | Closed historical PR with unresolved review-bot findings; not a viable canonical path. |
| #40352 | keep_related | planned | related | Related but distinct root cause; keep open for a separate fix path. |
| #40441 | keep_related | planned | related | Related config-reload PR, but not merge-ready and not part of the canonical agent-switch closeout. |
| #40443 | keep_related | planned | related | Useful related config-reload work, but too broad to treat as this cluster's canonical path. |
| #43013 | keep_related | planned | related | Related page-load model selector subfamily; keep open. |
| #52948 | keep_related | planned | related | Related but distinct select-rendering subfamily; keep open. |
| #54724 | keep_related | planned | related | Related broad PR; not a safe canonical merge path for this cluster. |
| #70633 | keep_closed | skipped | superseded | Closed related duplicate in the page-load selected-option subfamily. |
| #39306 | keep_closed | skipped | independent | Closed historical independent PR. |
| #13142 | keep_closed | skipped | related | Closed broad historical context item. |
| #41344 | keep_closed | skipped | related | Closed related historical issue. |

## Needs Human

- none
