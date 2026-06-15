---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156636-autonomous-smoke"
mode: "autonomous"
run_id: "25102377741"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102377741"
head_sha: "9a08eb9ac982c5d395ca81610998f5f78efc9ef6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.091Z"
canonical: "#73228"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73228"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156636-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102377741](https://github.com/openclaw/clownfish/actions/runs/25102377741)

Workflow conclusion: success

Worker result: planned

Canonical: #73228

## Summary

Canonical target-agent hook event routing is already merged in #73228 on main d33c3f7. The obsolete open draft #39046 can be closed as fixed by that merged PR. Security-sensitive #24693 is quarantined only. The deliver:false/shared-hook announcement-policy items are a related subfamily; their current open path is #73800, which stays open because merge is blocked by a failing parity gate and unresolved security-review feedback.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39046 | close_fixed_by_candidate | blocked | fixed_by_candidate | canonical is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #24693 | route_security | planned | security_sensitive | Security-sensitive report is quarantined for central OpenClaw security handling; no GitHub mutation is planned by this worker. |
| #39046 | close_fixed_by_candidate | planned | fixed_by_candidate | Merged PR #73228 is the explicit current canonical path for the target-agent hook event routing fix, so the older draft #39046 can be closed as fixed by that candidate. |
| #49234 | keep_closed | skipped | superseded | Already closed and superseded by the related #73800 shared-hook announcement-policy path; no mutation is needed. |
| #55704 | keep_closed | skipped | superseded | Already closed and now carried by the related open #73800 replacement path; no mutation is needed. |
| #55761 | keep_closed | skipped | superseded | Already closed and superseded by the credited #73800 replacement path; no mutation is needed. |
| #68667 | keep_closed | skipped | superseded | Already closed as superseded by merged replacement #73228; no mutation is needed. |
| #73228 | keep_closed | skipped | canonical | Canonical fix is already merged, so it is included only as skipped historical evidence. |
| #73800 | keep_related | planned | related | Keep open as a related implementation candidate; merge and fixed-by-candidate closeout are blocked until checks and review/security feedback are resolved. |

## Needs Human

- none
