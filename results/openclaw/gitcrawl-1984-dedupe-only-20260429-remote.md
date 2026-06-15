---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1984-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131325460"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131325460"
head_sha: "b5784ec6f81e07c69dcfb868449f4f451549e38e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.910Z"
canonical: "https://github.com/openclaw/openclaw/issues/44448"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44448"
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1984-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131325460](https://github.com/openclaw/clownfish/actions/runs/25131325460)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/44448

## Summary

Hydrated autonomous pass kept #44448 as the live canonical issue for CLI Discord delivery-context routing on main 60c2a9055037a31c43fc03392b2806031e574413. No high-confidence close action is safe: the other open issues are related or independent subfamilies, open PRs are not merge/close-ready in this dedupe-only job, and #73403 is routed to security because hydrated review comments raise security-shaped findings.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #44448 | keep_canonical | planned | canonical | #44448 remains the best live canonical for the CLI Discord delivery-context routing subfamily. |
| #41355 | keep_related | planned | related | Keep open as a related but distinct thread-metadata subfamily. |
| #41483 | keep_related | planned | related | Same resolver family as #44448, but with unique explicit-agent/custom-channel scope and no safe close path. |
| #44584 | keep_related | planned | related | Keep open as an over-broad related issue until its two subfamilies are resolved or split. |
| #48641 | keep_independent | planned | independent | Independent from this dedupe canonical; leave open for maintainer-owned Discord configuration behavior. |
| #50522 | keep_related | planned | related | Keep the contributor PR open as the active related candidate for #41355; it is not safe to close or merge here. |
| #56370 | keep_related | planned | related | Related CLI session-routing/product-semantics follow-up; not a duplicate close. |
| #59817 | keep_related | planned | related | Keep open as a related Discord session-routing subfamily. |
| #62024 | keep_related | planned | related | Related target-normalization subfamily with an open candidate PR; not safe for instant close. |
| #68126 | keep_related | planned | related | Keep open as a related Discord DM routing bug with no viable hydrated candidate fix. |
| #72580 | keep_related | planned | related | Keep open as the active related candidate for #62024. |
| #73403 | route_security | planned | security_sensitive | Route #73403 to central OpenClaw security handling before Clownfish uses, merges, or closes around it. |

## Needs Human

- none
