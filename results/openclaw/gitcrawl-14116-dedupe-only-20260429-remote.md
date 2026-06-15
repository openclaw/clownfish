---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14116-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129765815"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129765815"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.832Z"
canonical: "https://github.com/openclaw/openclaw/tree/dac72374944f35fb89e21dce0f3f2299f27d03c9"
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14116-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129765815](https://github.com/openclaw/clownfish/actions/runs/25129765815)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/dac72374944f35fb89e21dce0f3f2299f27d03c9

## Summary

Live preflight state shows the representative #60199 and all cluster/context refs are already closed. No close, merge, or fix action is valid. Current main is the canonical shipped path for the Codex proxy-auth fallback; the older pi-ai patch PRs remain closed. One closed context PR contains credential-leak evidence in hydrated review comments and is routed to central security handling only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #46370 | keep_closed | skipped | related | Closed linked context issue is evidence only; no mutation is valid. |
| #46382 | route_security | planned | security_sensitive | Security-shaped credential-leak evidence appears in hydrated review comments, so this closed context PR is not dedupe-cleanup work. |
| #48973 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by current main; no open target remains for closeout. |
| #60199 | keep_closed | skipped | fixed_by_candidate | The representative became obsolete before this run; it is closed and cannot receive a close action. |

## Needs Human

- none
