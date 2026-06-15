---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13656-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109739401"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109739401"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.744Z"
canonical: "https://github.com/openclaw/openclaw/pull/49983"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/49983"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13656-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109739401](https://github.com/openclaw/clownfish/actions/runs/25109739401)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/49983

## Summary

Selected #49983 as the current open canonical PR for the Feishu outbound blue @mention rendering family. No close, merge, or fix action is safe in this dedupe-only job: #39001 and #48786 are related but distinct Feishu mention work, #48976 is quarantined for central security handling because its hydrated review comments touch auth/config boundaries, and the closed representative/context PRs remain historical evidence only.

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
| #49983 | keep_canonical | planned | canonical | #49983 is the current open canonical for the outbound Feishu blue @mention root cause, but it is not merge-ready in this dedupe-only job. |
| #39001 | keep_related | planned | related | Related Feishu mention work, but not a duplicate of the outbound blue @mention canonical. |
| #48976 | route_security | planned | security_sensitive | Security-boundary review is required for this PR before any backlog cleanup, closeout, or replacement decision. |
| #48786 | keep_related | planned | related | Related Feishu mention issue, not a duplicate of the canonical outbound post-message rendering PR. |
| #49850 | keep_closed | skipped | superseded | Closed obsolete representative; retained only as evidence for choosing #49983 as the current canonical path. |
| #49837 | keep_closed | skipped | superseded | Closed superseded context PR; retained only as evidence for the current canonical path. |

## Needs Human

- none
