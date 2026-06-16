---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-811-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610226243"
workflow_run_id: "27610226243"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610226243"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.505Z"
canonical: "https://github.com/openclaw/openclaw/issues/76275"
canonical_issue: "https://github.com/openclaw/openclaw/issues/76275"
canonical_pr: "https://github.com/openclaw/openclaw/pull/79181"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-811-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610226243](https://github.com/openclaw/clownfish/actions/runs/27610226243)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/76275

## Summary

Kept #76275 open as the canonical gateway restart-loop issue. The hydrated linked PR #79181 remains context and the active unmerged repair path, but this job excludes existing-overlap refs from actionable cleanup and does not allow merge, fix, or raise_pr actions. No closure is safe because the issue is still open, reporter-confirmed, and current main lacks the process-level startup restart throttle described by the linked PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #76275 | keep_canonical | planned | canonical | This is the best live canonical issue for the cluster. It should stay open until the linked fix path lands or maintainers choose a replacement path. |
| #79181 | keep_related | skipped | related | Context-only active fix path for the canonical issue; no mutation is allowed for this excluded overlap ref in this job. |

## Needs Human

- none
