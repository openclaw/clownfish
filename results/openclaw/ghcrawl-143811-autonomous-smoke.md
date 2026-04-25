---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143811-autonomous-smoke"
mode: "autonomous"
run_id: "24939006288"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24939006288"
head_sha: "7db1f986bd485f7b71752bc77e40097172d6b6ef"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-25T23:09:32.132Z"
canonical: "https://github.com/openclaw/openclaw/pull/64713"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/64713"
actions_total: 6
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143811-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24939006288](https://github.com/openclaw/projectclownfish/actions/runs/24939006288)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/64713

## Summary

Hydrated preflight data makes closed PR #64713 the clearest canonical family item replacing closed representative #54659. No high-confidence close/comment/label mutation is safe for the remaining open candidates; #67158 and #68033 stay open as related, and #71256 stays open as independent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #64713 | keep_closed | skipped | canonical | Best surviving canonical family item in the hydrated cluster data; already closed, so no mutation is valid. |
| #54659 | keep_closed | skipped | duplicate | Historical duplicate in the #64713 scope family; already closed so no further close action is allowed. |
| #29269 | keep_closed | skipped | related | Closed related context PR, not the canonical path for this cluster. |
| #67158 | keep_related | planned | related | Keep open as related; the provider/auth surface overlaps this family, but the user-visible failure is distinct and not a safe duplicate. |
| #68033 | keep_related | planned | related | Keep open as related because only part of the report overlaps the #64713 scope family; duplicate closure would drop unique remaining work. |
| #71256 | keep_independent | planned | independent | Outside this cluster's canonical family and should remain open independently. |

## Needs Human

- none
