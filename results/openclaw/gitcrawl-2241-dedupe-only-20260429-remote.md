---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2241-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132440497"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132440497"
head_sha: "8b6ee7ffa77533bbae10cb97289fd78b142edfab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.953Z"
canonical: "https://github.com/openclaw/openclaw/pull/57086"
canonical_issue: "https://github.com/openclaw/openclaw/issues/54164"
canonical_pr: "https://github.com/openclaw/openclaw/pull/57086"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2241-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132440497](https://github.com/openclaw/clownfish/actions/runs/25132440497)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/57086

## Summary

Classified the hydrated cluster without GitHub mutation. #57086 remains the best open canonical PR for the stale sessionId forwarding family; #45044 and #57126 are useful related but distinct session-persistence PRs and should stay open. No close action is high-confidence for the open items because the relevant implementation PRs remain unmerged or separately scoped.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #57086 | keep_canonical | planned | canonical | Best live canonical path, but only non-mutating classification is allowed in this dedupe-only autonomous job. |
| #45044 | keep_related | planned | related | Related session data-loss work with useful code and a distinct root cause; not a duplicate or superseded by #57086. |
| #57126 | keep_related | planned | related | Related session lifecycle bug with separate affected behavior; keep open as its own implementation candidate. |
| #54164 | keep_related | planned | fixed_by_candidate | Covered by the canonical PR path but not closable yet because #57086 is still open and unmerged. |
| #47839 | keep_closed | skipped | superseded | Closed historical context only. |
| #57020 | keep_closed | skipped | fixed_by_candidate | Closed historical context only. |
| #71845 | keep_closed | skipped | fixed_by_candidate | Merged historical context only. |

## Needs Human

- none
