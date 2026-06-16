---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2685-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27594231727"
workflow_run_id: "27594231727"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27594231727"
head_sha: "8364aec238559663a0a8644042702a5c6ccea4db"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T04:35:56.006Z"
canonical: "https://github.com/openclaw/openclaw/pull/39046"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39046"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2685-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27594231727](https://github.com/openclaw/clownfish/actions/runs/27594231727)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39046

## Summary

Dedupe-only autonomous pass used the hydrated preflight artifact. #39046 remains the only open cluster candidate and should stay open as the canonical maintainer PR; it is draft/waiting-on-author with a failing Real behavior proof, so no close/merge/fix action is safe or allowed. Closed context refs are historical evidence only. #24693 and #68667 carry security-sensitive cross-agent exposure signals and are routed to central security handling without blocking ordinary non-security classification.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #39046 | keep_canonical | planned | canonical | Canonical choice is clear, but the open PR is not merge-ready and this job is close-only/dedupe-only. |
| #24693 | route_security | planned | security_sensitive | Security-sensitive historical ref is routed to central OpenClaw security handling only. |
| #49234 | keep_closed | skipped | superseded | Already closed context PR. |
| #55607 | keep_closed | skipped | independent | Already closed independent/context PR. |
| #55704 | keep_closed | skipped | fixed_by_candidate | Already closed issue covered by the merged #73800 path. |
| #55747 | keep_closed | skipped | fixed_by_candidate | Already closed context PR. |
| #55761 | keep_closed | skipped | fixed_by_candidate | Already closed source PR covered by merged replacement #73800. |
| #68667 | route_security | planned | security_sensitive | Security-sensitive historical PR is routed to central OpenClaw security handling only. |

## Needs Human

- none
