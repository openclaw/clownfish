---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238863-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107747621"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107747621"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.660Z"
canonical: "https://github.com/openclaw/openclaw/pull/73972"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38806"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73972"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238863-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107747621](https://github.com/openclaw/clownfish/actions/runs/25107747621)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73972

## Summary

Representative #38808 is already closed. The current canonical path is open replacement PR #73972 for issue #38806. #74001 overlaps the same fix family but has a security-shaped Aisle DoS finding, so it is routed to central security handling instead of dedupe closeout. #66631 is related Feishu threading work but a different topic-group root-resolution bug.

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
| #38808 | keep_closed | skipped | superseded | Already-closed primary candidate; no closure mutation is valid. Replacement #73972 is the surviving canonical path. |
| #73972 | keep_canonical | planned | canonical | Best surviving canonical PR for the P2P direct-message thread reply regression. Merge is not emitted because this job blocks merge actions. |
| #74001 | route_security | planned | security_sensitive | Security-shaped review finding requires central security handling for this exact PR, so dedupe closeout is not safe in this worker result. |
| #38806 | keep_related | planned | fixed_by_candidate | The issue is covered by the canonical open PR path but must remain open until a fix lands. |
| #66631 | keep_related | planned | related | Related Feishu threading area, but different root cause and scope from the P2P direct-message thread regression handled by #73972. |

## Needs Human

- none
