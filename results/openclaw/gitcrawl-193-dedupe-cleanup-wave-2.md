---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-193-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609381772"
workflow_run_id: "27609381772"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609381772"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:58:18.469Z"
canonical: "https://github.com/openclaw/openclaw/issues/90980"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90980"
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

# gitcrawl-193-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609381772](https://github.com/openclaw/clownfish/actions/runs/27609381772)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90980

## Summary

Classified the only hydrated open candidate, #90980, as the surviving canonical issue for the Docker exec hang/startup-blocking report. No close, merge, or fix action is safe or allowed: the representative PR #91015 and security-signal PR #66836 are excluded overlap context and are not hydrated action targets, closed linked refs are historical evidence only, and fix/raise_pr/merge are blocked by the job frontmatter.

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
| #90980 | keep_canonical | planned | canonical | Only remaining open hydrated ref is the best surviving canonical issue; no high-confidence duplicate closeout target exists in scope. |
| #5135 | keep_closed | skipped |  | Already closed context ref; evidence only. |
| #7586 | keep_closed | skipped |  | Already closed context ref; evidence only. |
| #73846 | keep_closed | skipped |  | Already closed context ref; evidence only. |

## Needs Human

- none
