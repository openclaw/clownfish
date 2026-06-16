---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-748-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610225965"
workflow_run_id: "27610225965"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610225965"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.504Z"
canonical: "https://github.com/openclaw/openclaw/issues/89225"
canonical_issue: "https://github.com/openclaw/openclaw/issues/89225"
canonical_pr: "https://github.com/openclaw/openclaw/pull/89226"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-748-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610225965](https://github.com/openclaw/clownfish/actions/runs/27610225965)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/89225

## Summary

The hydrated state keeps #89225 as the canonical open issue. Linked PR #89226 is an open, narrow active fix path for the same root cause, but this job excludes that overlap ref from actionable closeout and blocks merge, fix, and raise_pr actions, so no mutating action is planned.

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
| #89225 | keep_canonical | planned | canonical | Keep #89225 open as the canonical tracker until the linked fix path lands or maintainers choose a different canonical path. |
| #89226 | keep_related | skipped | related | Treat #89226 as the linked active fix context for #89225, but skip any action because overlap_policy excludes it and this job cannot merge or repair PRs. |

## Needs Human

- none
