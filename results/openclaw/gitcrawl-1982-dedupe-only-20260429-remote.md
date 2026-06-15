---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1982-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131321756"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131321756"
head_sha: "b5784ec6f81e07c69dcfb868449f4f451549e38e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.909Z"
canonical: "https://github.com/openclaw/openclaw/pull/39551"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39551"
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1982-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131321756](https://github.com/openclaw/clownfish/actions/runs/25131321756)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39551

## Summary

The closed representative #56203 is obsolete. The best live canonical path for the runtime sessions_send sessionKey-first behavior is the open, maintained contributor PR #39551. No duplicate closeout is planned in this pass: the obvious duplicate PRs are already closed, the open issues/PRs retain related but distinct scope, and #74009 has a security-shaped bot finding that is quarantined for central security triage.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
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
| #39551 | keep_canonical | planned | canonical | Best live canonical after the hinted representative #56203 was already closed. |
| #41199 | keep_related | planned | related | Related sessions_send evidence, but not a true duplicate of the canonical PR. |
| #41255 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #56193 | keep_closed | skipped | independent | Closed independent context ref. |
| #56203 | keep_closed | skipped | superseded | Representative is obsolete; #39551 is the live canonical PR. |
| #59324 | keep_closed | skipped | superseded | Already closed; no action is valid. |
| #63308 | keep_related | planned | related | Related docs/schema symptom family with distinct remaining scope. |
| #63334 | keep_closed | skipped | superseded | Closed docs-context PR; no action is valid. |
| #63339 | keep_related | planned | related | Keep open as related docs/schema work. |
| #63377 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #63556 | keep_related | planned | related | Related documentation/tool-description work, not a true duplicate of the runtime canonical PR. |
| #64699 | keep_related | planned | related | Related validation context with unique reproduction details. |
| #64846 | keep_closed | skipped | superseded | Already closed; no action is valid. |
| #74009 | route_security | planned | security_sensitive | Security-sensitive bot finding requires scoped central security triage. |

## Needs Human

- none
