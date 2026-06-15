---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3393-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135571598"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135571598"
head_sha: "f12a87189d5d814fe7dfd1bed3ac0e65f75e8fe3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.021Z"
canonical: "https://github.com/openclaw/openclaw/pull/63321"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/63321"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3393-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135571598](https://github.com/openclaw/clownfish/actions/runs/25135571598)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/63321

## Summary

Using the hydrated preflight artifact as live state, #63321 remains the best open canonical PR for the Tailscale JSON parsing family, but it is not merge-ready because Codex/ClawSweeper review identified unresolved semantic regressions. #58309 is quarantined only for its security-shaped device-identity key-material review signal; that does not block classification of the rest of the cluster. #58940 and #64630 are separate Tailscale/logging work, and the closed context PRs are left closed with no mutation.

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
| #46578 | keep_closed | skipped | superseded | Closed historical context only; no mutation planned. |
| #58309 | route_security | planned | security_sensitive | Quarantine #58309 only because the hydrated review comments introduce key-material handling concerns outside ordinary dedupe cleanup; continue with the non-security Tailscale JSON parsing cluster. |
| #58940 | keep_independent | planned | independent | Not a duplicate of the JSON parsing cluster; it should remain open or be handled in its own process-lifecycle cluster. |
| #63321 | keep_canonical | planned | canonical | Canonical PR is useful and should stay open, but allowed_actions excludes merge/fix/raise_pr and unresolved review findings block any merge or fixed-by-candidate closeout. |
| #63322 | keep_closed | skipped | related | Closed historical context only; no mutation planned. |
| #64630 | keep_independent | planned | independent | Linked-only context from an adjacent logging cleanup; keep it out of this dedupe cluster. |

## Needs Human

- none
