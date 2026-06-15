---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2357-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132976547"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132976547"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.968Z"
canonical: "https://github.com/openclaw/openclaw/pull/66241"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/66241"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2357-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132976547](https://github.com/openclaw/clownfish/actions/runs/25132976547)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/66241

## Summary

Classified #66241 as the current open canonical PR for Discord component registry persistence. No close/comment/label mutations are planned: closed context PRs are already closed, #70626 is only related draft helper work, and #66241 is not merge/fix eligible in this dedupe-only job because checks and bot review findings remain unresolved.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #66241 | keep_canonical | planned | canonical | #66241 is the best live canonical path, but it must stay open because checks and bot findings are unresolved and this job forbids merge/fix/raise_pr. |
| #70626 | keep_related | planned | related | Keep #70626 open as related helper work; it is not the canonical Discord registry fix and should not be closed in this cluster. |
| #40288 | keep_closed | skipped | superseded | Historical closed context only; already superseded by #66241. |
| #47818 | keep_closed | skipped | superseded | Historical closed context only; already superseded by #66241. |
| #47817 | keep_closed | skipped | duplicate | Closed historical issue for the same root cause; keep closed and route current work through #66241. |
| #1 | keep_closed | skipped | independent | Closed unrelated first-hop ref; no action. |
| #2 | keep_closed | skipped | independent | Closed unrelated first-hop ref; no action. |
| #3 | keep_closed | skipped | independent | Closed unrelated first-hop ref; no action. |

## Needs Human

- none
