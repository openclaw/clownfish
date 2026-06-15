---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1921-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130811320"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130811320"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.892Z"
canonical: "https://github.com/openclaw/openclaw/issues/29736"
canonical_issue: "https://github.com/openclaw/openclaw/issues/29736"
canonical_pr: null
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1921-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130811320](https://github.com/openclaw/clownfish/actions/runs/25130811320)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/29736

## Summary

Classified the live hydrated cluster against main f05b789736004a8ee93b7a8b44907b5f7f72ee1a. The obsolete representative #64663 is already covered by merged replacement #72377; the best remaining open non-security canonical for exec-approvals state-root reports is #29736. Planned one duplicate close for #62917, kept distinct workspace-symlink reports open, and quarantined PRs whose hydrated review evidence touches approval or workspace boundary security concerns.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
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
| #62917 | close_duplicate | blocked | duplicate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #29736 | keep_canonical | planned | canonical | Best open canonical issue for the remaining non-security exec-approvals state-root bug. |
| #62917 | close_duplicate | planned | duplicate | Same root cause and same user-visible state-dir drift as #29736, with no unique remaining work outside the canonical issue. |
| #62938 | route_security | planned | security_sensitive | Quarantine only this PR because its approval-store symlink validation changes cross the security review boundary. |
| #64472 | keep_related | planned | related | Related workspace bootstrap symlink subfamily, not a duplicate of the exec-approvals canonical issue and not safe to close in this cluster. |
| #64473 | route_security | planned | security_sensitive | Quarantine only this PR because review evidence frames the boundary-path relaxation as security-sensitive. |
| #73401 | route_security | planned | security_sensitive | Quarantine this PR for central security/maintainer review rather than dedupe mutation. |
| #73988 | route_security | planned | security_sensitive | Security-sensitive workspace file-read expansion; route the PR without closing or merging it. |
| #74002 | route_security | planned | security_sensitive | Security-sensitive approval-path behavior; route the PR and keep issue #29736 as the non-security canonical thread. |
| #38650 | keep_closed | skipped | superseded | Historical closed contributor PR; no mutation valid in this run. |
| #40230 | keep_closed | skipped | superseded | Historical closed PR retained as evidence only. |
| #51277 | keep_closed | skipped | independent | Closed historical PR with unrelated/broad churn; evidence only. |
| #52522 | keep_closed | skipped | superseded | Historical closed workspace bootstrap PR retained as evidence only. |
| #64663 | keep_closed | skipped | fixed_by_candidate | Obsolete representative already replaced and merged; evidence only. |
| #65736 | keep_closed | skipped | superseded | Historical closed contributor PR; replacement exists but is not merge/close evidence in this dedupe run. |

## Needs Human

- none
