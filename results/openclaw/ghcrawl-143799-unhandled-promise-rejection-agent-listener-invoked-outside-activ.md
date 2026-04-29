---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143799-unhandled-promise-rejection-agent-listener-invoked-outside-activ"
mode: "autonomous"
run_id: "25105387483"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25105387483"
head_sha: "f4310f686a7c936b6d823e2f2236940847c8f999"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T11:28:07.183Z"
canonical: "https://github.com/openclaw/openclaw/pull/62821"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/62821"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143799-unhandled-promise-rejection-agent-listener-invoked-outside-activ

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25105387483](https://github.com/openclaw/clownfish/actions/runs/25105387483)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/62821

## Summary

Representative issue #61917 is closed and should not be replaced by an open canonical for the original late-listener crash family. The best canonical path for that family is the already-merged PR #62821 on current main 77a5d82e64d1bdce09d87b3f42a56150b1b103ef. The only live items in the hydrated cluster are #65983 and linked PR #66001; they are a related orphan-process/session-loss follow-up, not the same duplicate family, and #66001 is not merge-ready because checks fail and actionable Codex/Greptile review comments remain unresolved.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #62821 | keep_closed | skipped | canonical | Closed merged PR retained as canonical fix evidence; no mutation needed. |
| #61917 | keep_closed | skipped | fixed_by_candidate | Already closed; treat as fixed by the merged canonical PR rather than closing or reopening. |
| #61741 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by the merged canonical fix; no close action is valid. |
| #62754 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no mutation needed. |
| #63220 | keep_closed | skipped | duplicate | Already closed duplicate; retain historical classification only. |
| #65285 | keep_closed | skipped | duplicate | Already closed duplicate; no close action is valid. |
| #69920 | keep_closed | skipped | duplicate | Already closed duplicate; no close action is valid. |
| #65983 | keep_related | planned | related | Related but distinct from the already-fixed late-listener crash family; keep open with #66001 as the active implementation candidate. |
| #66001 | keep_canonical | planned | canonical | Canonical for the related orphan-process subfamily, but not merge-ready; keep open for author/maintainer repair rather than merging, closing, or folding into the fixed crash family. |

## Needs Human

- none
