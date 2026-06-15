---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238839-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102920529"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102920529"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.127Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/25102920529](https://github.com/openclaw/clownfish/actions/runs/25102920529)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42908

## Summary

Canonical #42908 remains the live canonical PR for the Feishu card-action option/options/form_value data-loss path. #42754 is the paired issue, while #43953/#43202 remain related broader input_value/name work. #73514 and #74191 are already closed, so no new close/comment/label/merge/fix actions are emitted.

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
| #42754 | keep_canonical | planned | canonical | Keep the paired canonical issue open until the canonical PR path lands; current main is not fixed. |
| #42908 | keep_canonical | planned | canonical | #42908 is still the best live canonical PR, but this dedupe-only job must leave merge/repair to a later gated run. |
| #43202 | keep_related | planned | related | Keep open as related broader Feishu card-action field work rather than closing it into the narrower canonical PR. |
| #43953 | keep_related | planned | related | Keep #43953 open as related broader work for #43202; do not collapse it into #42908 in this dedupe-only pass. |
| #73514 | keep_closed | skipped | superseded | Already closed; preserve as historical superseded context only. |
| #74191 | keep_closed | skipped | superseded | Already closed by the canonical-path closeout; no further action. |

## Needs Human

- none
