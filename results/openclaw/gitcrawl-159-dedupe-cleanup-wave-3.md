---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-159-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610221139"
workflow_run_id: "27610221139"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610221139"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.438Z"
canonical: "https://github.com/openclaw/openclaw/issues/80387"
canonical_issue: "https://github.com/openclaw/openclaw/issues/80387"
canonical_pr: "https://github.com/openclaw/openclaw/pull/80386"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-159-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610221139](https://github.com/openclaw/clownfish/actions/runs/27610221139)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/80387

## Summary

Classified the live hydrated cluster as an open canonical bug (#80387) with an open linked repair PR (#80386). No close, merge, or fix action is safe or allowed here: #80387 is still reproducible on current main, and #80386 is useful context but is dirty/unmergeable and outside the job's allowed mutation set.

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
| #80387 | keep_canonical | planned | canonical | #80387 remains the best live canonical issue. It should stay open until #80386 or an equivalent fix lands; the job disables fix, merge, and post-merge close actions. |
| #80386 | keep_related | planned | related | #80386 is the active linked repair path for the canonical issue, but it is not merge-ready and this job blocks merge, fix, and raise_pr actions. Keep it open as related context for the canonical issue. |

## Needs Human

- none
