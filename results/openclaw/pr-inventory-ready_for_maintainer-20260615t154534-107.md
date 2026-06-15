---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-107"
mode: "plan"
run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T16:28:28.683Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 3
---

# pr-inventory-ready_for_maintainer-20260615T154534-107

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations are planned because this shard has no shared canonical, merge/fix actions are blocked, and low-signal/instant closeout is disabled. Each open PR is classified independently except #87919, which is routed to security because the hydrated title/body explicitly describe SSRF hardening.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 3 |

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
| #90992 | keep_independent | planned | independent | Standalone docs PR with proof and passing relevant checks. |
| #90994 | keep_independent | planned | independent | Draft contributor PR in execution-adjacent area; not closeable or mergeable in this shard. |
| #91000 | keep_independent | planned | independent | Focused gateway behavior fix with proof; no duplicate or close basis. |
| #91013 | keep_independent | planned | independent | Related gateway area but distinct root cause and diff scope. |
| #91049 | keep_independent | planned | independent | Open cross-client/gateway ACK handling PR; keep for maintainer review. |
| #91057 | keep_independent | planned | independent | Standalone session-retention fix. |
| #91078 | keep_independent | planned | independent | Focused sandbox bridge bug fix with passing checks. |
| #89569 | keep_independent | planned | independent | Large feature PR requiring maintainer/product review; not closeable or mergeable from this shard. |
| #83942 | keep_independent | planned | independent | Feature PR with its own scope and passing checks. |
| #84540 | keep_independent | planned | independent | Small focused fix with tests and passing checks. |
| #93156 | needs_human | planned | needs_human | Auth-profile migration has pending security/preflight checks. |
| #93088 | keep_independent | planned | independent | Focused Telegram message-delivery fix. |
| #86279 | needs_human | planned | needs_human | PR has commits and proof but no effective diff in hydrated artifact. |
| #71400 | needs_human | planned | needs_human | Broad waiting-on-author feature PR with unhydrated bot-review content. |
| #87771 | keep_independent | planned | independent | Standalone config feature/fix PR; keep for maintainer review. |
| #87800 | keep_independent | planned | independent | Provider onboarding/auth PR with distinct scope. |
| #87861 | keep_independent | planned | independent | Small model-usage bug fix with tests. |
| #87872 | keep_independent | planned | independent | Distinct usage-accounting PR with author-followup status. |
| #88886 | keep_independent | planned | independent | Low-signal closeout is disabled. |
| #87891 | keep_independent | planned | independent | Focused Telegram config PR; keep pending normal maintainer/check review. |
| #87898 | keep_independent | planned | independent | Secrets-audit bug/hardening PR without a live security routing flag. |
| #87919 | route_security | planned | security_sensitive | SSRF-shaped hardening belongs in central security handling. |
| #87923 | keep_independent | planned | independent | Focused agent behavior fix. |
| #87969 | keep_independent | planned | independent | Docs PR lacks closeout authority in this shard. |
| #87986 | keep_independent | planned | independent | Small docs/skill PR; keep independently. |

## Needs Human

- #93156: pending security/preflight checks on an auth-profile migration PR.
- #86279: open PR has commits and proof but zero changed files in hydrated artifact.
- #71400: broad waiting-on-author feature PR with unhydrated bot-review content.
