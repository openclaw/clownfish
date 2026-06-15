---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13971-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109790138"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109790138"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.764Z"
canonical: "https://github.com/openclaw/openclaw/issues/32473"
canonical_issue: "https://github.com/openclaw/openclaw/issues/32473"
canonical_pr: null
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 2
needs_human_count: 0
---

# gitcrawl-13971-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109790138](https://github.com/openclaw/clownfish/actions/runs/25109790138)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/32473

## Summary

Closed representative #60076 is not a live canonical. The best open canonical for the secure-context Control UI/device-identity family is #32473; the remaining hydrated open refs split into related or independent subfamilies. No planned close is safe: the direct candidate fixes #56357 and #62532 are still open with relevant failing/cancelled checks or merge disabled, and #65408/#68280 are routed to central security because their hydrated evidence involves auth/token or credential-disclosure concerns.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 2 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41740 | close_fixed_by_candidate | skipped | fixed_by_candidate | Fix-first closeout is blocked on fix PR #62532 until the candidate is green or an equivalent fix path lands. |
| #55600 | close_fixed_by_candidate | skipped | fixed_by_candidate | Closeout is blocked until the candidate fix is green or landed. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #60076 | keep_closed | skipped |  | Closed representative is obsolete for live dedupe routing. |
| #32473 | keep_canonical | planned | canonical | Keep the secure-context/device-identity family anchored on the live open issue. |
| #53274 | keep_related | planned | related | Related design subproblem with unique scope; not a duplicate close candidate. |
| #56830 | keep_related | planned | related | Useful related PR, but not a canonical fix for the underlying issue. |
| #71669 | keep_related | planned | related | Related operator UX follow-up, not a duplicate of the canonical policy issue. |
| #12441 | keep_independent | planned | independent | Independent auth feature request; do not close in this cluster. |
| #41740 | close_fixed_by_candidate | blocked | fixed_by_candidate | Fix-first closeout is blocked on fix PR #62532 until the candidate is green or an equivalent fix path lands. |
| #62532 | keep_related | planned | related | Keep open as related implementation candidate; do not merge or close. |
| #55600 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closeout is blocked until the candidate fix is green or landed. |
| #56357 | keep_related | planned | related | Keep open as the candidate fix for the logo/favicon subfamily. |
| #63427 | keep_independent | planned | independent | Independent live bug; not a dedupe close candidate. |
| #65408 | route_security | planned | security_sensitive | Route exact auth/token-rotation item to central OpenClaw security handling. |
| #66279 | keep_related | planned | related | Related TLS fingerprint follow-up; not a duplicate close candidate. |
| #66946 | keep_independent | planned | independent | Independent current Control UI base-path bug; keep open. |
| #68280 | route_security | planned | security_sensitive | Route exact credential-disclosure/security-sensitive PR to central OpenClaw security handling. |

## Needs Human

- none
