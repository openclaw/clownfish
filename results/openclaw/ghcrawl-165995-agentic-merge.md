---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165995-agentic-merge"
mode: "autonomous"
run_id: "24963464192"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24963464192"
head_sha: "7e80ff4413a6e06bbc516f34992499a4b74ee92d"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-26T18:11:56.074Z"
canonical: "https://github.com/openclaw/openclaw/issues/43556"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43556"
canonical_pr: null
actions_total: 16
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-165995-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24963464192](https://github.com/openclaw/projectclownfish/actions/runs/24963464192)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43556

## Summary

Canonical representative #59390 is already closed. The live open canonical issue is #43556. No open merge-ready PR exists for the runtime failure: #68397 and #65282 were useful but are closed/uneditable, while #69170 is only the schema-hint subcluster and has failing checks. Because require_fix_before_close is enabled, duplicate closeouts are blocked until a replacement fix PR exists.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
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
| #43556 | keep_canonical | planned | canonical | Keep #43556 open as the canonical issue until a replacement fix PR lands. |
| #56326 | close_duplicate | blocked | duplicate | require_fix_before_close blocks duplicate closeout until the canonical fix path or fix PR exists. |
| #61724 | close_duplicate | blocked | duplicate | require_fix_before_close blocks duplicate closeout until the canonical fix path or fix PR exists. |
| #63120 | close_duplicate | blocked | duplicate | require_fix_before_close blocks duplicate closeout until the canonical fix path or fix PR exists. |
| #64714 | close_duplicate | blocked | duplicate | require_fix_before_close blocks duplicate closeout until the canonical fix path or fix PR exists. |
| #67248 | close_duplicate | blocked | duplicate | require_fix_before_close blocks duplicate closeout until the canonical fix path or fix PR exists. |
| #59225 | keep_related | planned | related | Related follow-up scope, not a true duplicate of the immediate streamTo validation bug. |
| #69170 | keep_related | planned | related | Keep as related schema-hint work; it is not merge-ready and is not the canonical fix for the runtime failure. |
| #53370 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| #56193 | keep_closed | skipped | duplicate | Already closed; no mutation planned. |
| #59390 | keep_closed | skipped | duplicate | Already closed; no mutation planned. |
| #60965 | keep_closed | skipped | duplicate | Already closed; no mutation planned. |
| #68275 | keep_closed | skipped | duplicate | Already closed; no mutation planned. |
| #69166 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| cluster:ghcrawl-165995-agentic-merge | fix_needed | planned |  | No viable canonical PR exists; build a narrow credited replacement fix PR. |
| cluster:ghcrawl-165995-agentic-merge | build_fix_artifact | planned |  | Replacement fix artifact is needed before duplicate closeout or post-merge close actions. |

## Needs Human

- none
