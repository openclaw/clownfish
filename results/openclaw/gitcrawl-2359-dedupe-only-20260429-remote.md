---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2359-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132978403"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132978403"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.969Z"
canonical: "https://github.com/openclaw/openclaw/tree/06fcd3b60ea8b0b1fbc2805726f138d2f5ab04ec"
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-2359-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132978403](https://github.com/openclaw/clownfish/actions/runs/25132978403)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/tree/06fcd3b60ea8b0b1fbc2805726f138d2f5ab04ec

## Summary

No close, label, merge, or fix actions are safe for this pass. The closed representative #54344 is already implemented on current main for the /config subfamily, #54097 is the merged allowlist fix, and the two open PRs are related but not duplicates; both need maintainer policy direction before repair or closure.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #40321 | keep_closed | skipped | fixed_by_candidate | Closed historical allowlist PR; keep as evidence only. |
| #50221 | keep_related | planned | related | Related internal-scope cleanup, but not the same root cause as closed #54344 or merged #54097; maintainer direction is needed on the policy layer before repair or closure. |
| #54097 | keep_closed | skipped | canonical | Merged allowlist canonical context; no mutation needed. |
| #54343 | keep_related | planned | related | Related but not duplicate; it has unresolved branch defects and a maintainer policy decision on whether /stop should require operator.admin for internal gateway clients. |
| #54344 | keep_closed | skipped | fixed_by_candidate | Closed representative is obsolete as an open canonical; current main owns the implemented /config behavior. |

## Needs Human

- #50221: decide whether the remaining chat.send CommandAuthorized policy and request-scoped plugin runtime config sink guard should be pursued, and which policy layer should own command scope metadata or required scopes.
- #54343: confirm the intended /stop admin-vs-write policy before any repair; any future fix must preserve rejectUnauthorizedCommand sender authorization and then add the internal operator.admin scope gate if maintainers want that hardening.
