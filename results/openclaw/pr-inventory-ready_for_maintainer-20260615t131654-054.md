---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-054"
mode: "plan"
run_id: "27550393184"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27550393184"
head_sha: "9a903e900d3280431ae7c80464316b3e5c248188"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:49:10.321Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 16
---

# pr-inventory-ready_for_maintainer-20260615T131654-054

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27550393184](https://github.com/openclaw/clownfish/actions/runs/27550393184)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job explicitly says this is not a dedupe cluster. Hydrated open non-security PRs are kept independent for maintainer review. Security-sensitive hydrated PRs are routed to central security handling. Candidates whose live state was unavailable in the preflight artifact are scoped needs_human because target_kind and target_updated_at could not be hydrated.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 16 |

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
| #92939 | keep_independent | planned | independent | Independent open PR awaiting ordinary maintainer review. |
| #59336 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish mutation and should route to central OpenClaw security handling. |
| #60212 | keep_independent | planned | independent | Independent broad PR, not a duplicate/low-signal closeout candidate. |
| #66685 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #66985 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #67077 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #92956 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish mutation and should route to central OpenClaw security handling. |
| #67946 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #68079 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish mutation and should route to central OpenClaw security handling. |
| #68558 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #68677 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #65359 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #89349 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish mutation and should route to central OpenClaw security handling. |
| #89618 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish mutation and should route to central OpenClaw security handling. |
| #89628 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #64782 | keep_independent | planned | independent | Independent broad PR, not a duplicate/low-signal closeout candidate. |
| #65065 | keep_independent | planned | independent | Independent PR with unresolved review feedback; no closeout action is safe. |
| #65783 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #68967 | keep_independent | planned | independent | Independent feature PR awaiting maintainer review. |
| #69059 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #69417 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish mutation and should route to central OpenClaw security handling. |
| #69707 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #69822 | keep_independent | planned | independent | Independent feature/fix PR awaiting maintainer review. |
| #70002 | keep_independent | planned | independent | Independent CI PR awaiting maintainer review; low-signal closeout disabled by job permissions. |
| #89648 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #89671 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #80947 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #92947 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #92990 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #40874 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #52664 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #54724 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #55596 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #56806 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #72092 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #72314 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #72557 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #92524 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #73649 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |
| #89724 | needs_human | blocked | needs_human | Live PR state unavailable in the preflight artifact. |

## Needs Human

- #89648 live state unavailable in preflight artifact
- #89671 live state unavailable in preflight artifact
- #80947 live state unavailable in preflight artifact
- #92947 live state unavailable in preflight artifact
- #92990 live state unavailable in preflight artifact
- #40874 live state unavailable in preflight artifact
- #52664 live state unavailable in preflight artifact
- #54724 live state unavailable in preflight artifact
- #55596 live state unavailable in preflight artifact
- #56806 live state unavailable in preflight artifact
- #72092 live state unavailable in preflight artifact
- #72314 live state unavailable in preflight artifact
- #72557 live state unavailable in preflight artifact
- #92524 live state unavailable in preflight artifact
- #73649 live state unavailable in preflight artifact
- #89724 live state unavailable in preflight artifact
