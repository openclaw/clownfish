---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4852-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136012429"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136012429"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.257Z"
canonical: "https://github.com/openclaw/openclaw/pull/41461"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41444"
canonical_pr: "https://github.com/openclaw/openclaw/pull/41461"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-4852-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136012429](https://github.com/openclaw/clownfish/actions/runs/25136012429)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41461

## Summary

Classified the hydrated cluster without planning any GitHub mutation. #41444/#41461 remain the canonical Anthropic OAuth beta-header path; the other live items are separate related or independent work, and #46607 is quarantined to security because review comments allege path-escape and host-file exposure risk.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
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
| #41444 | keep_canonical | planned | canonical | Canonical issue for the representative Anthropic OAuth/model-level beta-header bug. |
| #41461 | keep_canonical | planned | canonical | Best live canonical PR for the representative bug, but not merge-ready in this dedupe-only job. |
| #43791 | keep_independent | planned | independent | Separate agents payload-retention bug; not a duplicate of #41444/#41461. |
| #44319 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by merged replacement #74007. |
| #45395 | keep_independent | planned | independent | Independent xAI/Grok tool-call compatibility work; not closable in this cluster. |
| #45550 | keep_related | planned | related | Related Anthropic header subcluster whose canonical work should stay with #45613. |
| #45592 | keep_closed | skipped | superseded | Already closed historical duplicate/superseded GA migration PR. |
| #45613 | keep_related | planned | related | Related but distinct Anthropic 1M GA subcluster; keep open for maintainer review. |
| #46607 | route_security | planned | security_sensitive | Security-sensitive review signal is scoped to #46607; route to central OpenClaw security handling and do not mutate it through Clownfish. |
| #46735 | keep_closed | skipped | fixed_by_candidate | Closed historical context only. |
| #46765 | keep_closed | skipped | fixed_by_candidate | Closed historical context only. |
| #53819 | keep_closed | skipped | fixed_by_candidate | Closed historical context only. |
| #57187 | keep_closed | skipped | fixed_by_candidate | Already closed historical context for the Anthropic OAuth family. |
| #65909 | keep_related | planned | related | Related to closed context #67843, but independent from this cluster's canonical Anthropic OAuth bug. |
| #67843 | keep_closed | skipped | fixed_by_candidate | Merged historical context only. |

## Needs Human

- none
