---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238856-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104676921"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104676921"
head_sha: "060ab197c47d0017911b7555f5dc7306282e5988"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-29T11:01:28.943Z"
canonical: "https://github.com/openclaw/openclaw/issues/72578"
canonical_issue: "https://github.com/openclaw/openclaw/issues/72578"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72004"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238856-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104676921](https://github.com/openclaw/clownfish/actions/runs/25104676921)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/72578

## Summary

Hydrated state splits this cluster into related non-security Control UI duplicate-message subfamilies. #72578 remains the canonical issue for both user and assistant optimistic/history duplication; #71992 with #72004 is the focused assistant final-render race path; #63956 is related streaming-layout work. Planned one duplicate close for #72963 to #71992, kept distinct open work open, and included a planning-only fix artifact for #72578 because fix/raise_pr are disabled.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72963 | close_duplicate | blocked | duplicate | candidate fix is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72578 | keep_canonical | planned | canonical | Best surviving issue for the job representative's user+assistant duplication root cause; keep open for a narrow frontend history/optimistic merge fix. |
| cluster:gitcrawl-238856-dedupe-only-20260429c | fix_needed | planned |  | A narrow fix is still needed for #72578, but implementation and PR creation are outside this job's allowed actions. |
| cluster:gitcrawl-238856-dedupe-only-20260429c | build_fix_artifact | planned |  | Prepare a narrow credited fix plan without opening a PR in this run. |
| #71992 | keep_canonical | planned | canonical | Canonical issue for the assistant-final duplicate-render race; keep open until #72004 or an equivalent fix lands. |
| #72004 | keep_canonical | planned | canonical | Best current candidate PR for #71992, but this worker must not recommend or execute a merge in this job. |
| #72963 | close_duplicate | planned | duplicate | Same root cause and user-visible failure as #71992, with no unique platform/provider detail requiring separate tracking. |
| #63956 | keep_related | planned | related | Related Control UI duplicate-looking symptom, but a distinct streaming layout/root-cause family; keep open rather than deduping into #72578 or #71992. |

## Needs Human

- none
