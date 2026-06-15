---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238839-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107726052"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107726052"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.654Z"
canonical: "https://github.com/openclaw/openclaw/pull/42908"
canonical_issue: "https://github.com/openclaw/openclaw/issues/42754"
canonical_pr: "https://github.com/openclaw/openclaw/pull/42908"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238839-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107726052](https://github.com/openclaw/clownfish/actions/runs/25107726052)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42908

## Summary

Classified the Feishu card-action cluster from the hydrated preflight artifact. #42908 remains the canonical PR and #42754 is the paired canonical issue; #43953/#43202 are related broader input_value/name work, and #73514/#74191 are already closed historical context. No close, merge, fix, or label mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #42754 | keep_canonical | planned | canonical | Keep the source issue open while canonical PR #42908 remains under review and unmerged. |
| #42908 | keep_canonical | planned | canonical | Canonical contributor PR, but this dedupe-only job should keep it open for maintainer review rather than merge or repair it. |
| #43202 | keep_related | planned | related | Related Feishu callback-field work with unique broader scope; not a true duplicate of #42908. |
| #43953 | keep_related | planned | related | Keep open as related broader work; closing it as superseded would lose the input_value/name scope and active contributor context. |
| #73514 | keep_closed | skipped | superseded | Already closed historical context; superseded by the broader canonical path #42908. |
| #74191 | keep_closed | skipped | superseded | Already closed by prior Clownfish superseded closeout; retain only as evidence. |

## Needs Human

- none
