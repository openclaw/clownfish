---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-772-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136868754"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136868754"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.291Z"
canonical: "https://github.com/openclaw/openclaw/pull/65359"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65305"
canonical_pr: "https://github.com/openclaw/openclaw/pull/65359"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-772-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136868754](https://github.com/openclaw/clownfish/actions/runs/25136868754)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/65359

## Summary

Canonical path is the open bug #65305 plus the narrower open implementation PR #65359. #65359 is not merge-ready or merge-eligible in this job because merge/fix actions are blocked and relevant checks failed. #65425 is superseded by #65359 because it contains the same config fix plus unrelated memory-core search changes with unresolved review risk, so a credited closeout is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #65425 | close_superseded | blocked | superseded | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65305 | keep_canonical | planned | canonical | Keep the bug issue open as the canonical issue until the candidate PR or equivalent fix lands. |
| #65359 | keep_canonical | planned | canonical | Best live canonical PR for the config bug, but not merge-ready or merge-eligible in this run. |
| #65425 | close_superseded | planned | superseded | Superseded by narrower canonical PR #65359; broad unrelated memory-core changes and unresolved bot review comments make #65425 unsafe as the canonical path. |

## Needs Human

- none
