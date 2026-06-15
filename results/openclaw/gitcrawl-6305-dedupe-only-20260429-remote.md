---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-6305-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136441668"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136441668"
head_sha: "421ddc981e12f60cbb3ea60e4527004e3a033e79"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.272Z"
canonical: "https://github.com/openclaw/openclaw/issues/25592"
canonical_issue: "https://github.com/openclaw/openclaw/issues/25592"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-6305-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136441668](https://github.com/openclaw/clownfish/actions/runs/25136441668)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/25592

## Summary

Hydrated state supports #25592 as the live canonical issue for the broader internal/planning chat leak. #46559 remains a related open implementation candidate, but it is not safe to merge or close around because checks are failing or cancelled, review-bot findings remain unresolved, and the diff includes broad unrelated plugin/channel changes. Closed context refs stay historical only; #66815 is routed narrowly because one hydrated comment contains security-sensitive disclosure language.

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
| #25592 | keep_canonical | planned | canonical | Keep #25592 as the live canonical issue for the internal/planning chat leakage family. |
| #46559 | keep_related | planned | related | Keep #46559 open as related implementation work; merge, fixed-by-candidate closeout, and superseding closeout are blocked by unresolved review findings, failing checks, and broad unrelated diff surface. |
| #46301 | keep_closed | skipped | independent | Already closed historical context; no action. |
| #46554 | keep_closed | skipped | duplicate | Already closed same-family context; do not emit close actions for closed refs. |
| #46609 | keep_closed | skipped | independent | Already closed independent context; no action. |
| #46611 | keep_closed | skipped | independent | Already closed independent context; no action. |
| #66815 | route_security | planned | security_sensitive | Quarantine only #66815 because its hydrated comments contain security-sensitive disclosure language. |

## Needs Human

- none
