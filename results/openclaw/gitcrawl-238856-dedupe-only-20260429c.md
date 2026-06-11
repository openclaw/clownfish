---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238856-dedupe-only-20260429c"
mode: "autonomous"
run_id: "27316212847"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27316212847"
head_sha: "08cb02f5c04d4e1682af0e8ca0372e1a84444c9b"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-11T00:56:02.044Z"
canonical: "https://github.com/openclaw/openclaw/issues/63956"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63956"
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

# gitcrawl-238856-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27316212847](https://github.com/openclaw/clownfish/actions/runs/27316212847)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63956

## Summary

Hydrated state makes the representative #72578 obsolete: #72578, #71992, and #72963 are already closed historical refs. The only open seed item is #63956, and it is related but not a strict duplicate of the closed post-final/history duplicate family because it tracks the during-stream visual layout where one assistant turn appears as multiple bubbles before collapsing. No close actions are planned. A non-mutating credited fix artifact is planned from closed source PR #63986 because current main still renders separate stream segment items and the source PR is closed, uneditable, and has review blockers to address.

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
| #63956 | keep_canonical | planned | canonical | Only open seed with a unique remaining symptom; keep as the live canonical for this narrow streaming layout subcluster. |
| #71992 | keep_closed | skipped | related | Already closed; not a valid closure target for this run. |
| #72578 | keep_closed | skipped | related | Already closed representative; use as historical evidence only. |
| #72963 | keep_closed | skipped | duplicate | Already closed by prior Clownfish duplicate closeout; no mutation is valid. |
| #69208 | keep_related | planned | related | Related umbrella context, but not a strict duplicate of the remaining open narrow streaming-layout issue. |
| #63986 | keep_closed | skipped | superseded | Closed uneditable contributor PR with useful idea and unresolved review blockers; replacement artifact should preserve credit. |
| cluster:gitcrawl-238856-dedupe-only-20260429c | fix_needed | planned |  | A narrow credited Control UI layout fix is still needed, but this worker may only emit the plan/artifact. |
| cluster:gitcrawl-238856-dedupe-only-20260429c | build_fix_artifact | planned |  | Prepare an auditable non-mutating replacement plan without opening a PR in this dedupe-only job. |

## Needs Human

- none
