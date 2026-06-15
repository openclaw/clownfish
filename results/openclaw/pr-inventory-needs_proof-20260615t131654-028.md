---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-028"
mode: "plan"
run_id: "27549043246"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549043246"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.624Z"
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
needs_human_count: 0
---

# pr-inventory-needs_proof-20260615T131654-028

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549043246](https://github.com/openclaw/clownfish/actions/runs/27549043246)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated artifact reports 40 open pull requests, no security-sensitive job refs, and no shared canonical; merge, fix, raise_pr, and low-signal closeout are disabled, so each PR is kept independent for maintainer review rather than closed or merged from this shard.

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
| #77053 | keep_independent | planned | independent | Independent provider feature PR; no close, merge, or fix action is available or proven for this shard. |
| #77067 | keep_independent | planned | independent | Independent channel reliability PR with proof still failing; keep open for its own validation path. |
| #77312 | keep_independent | planned | independent | Independent bug-fix PR; no duplicate or superseding PR is proven. |
| #77393 | keep_independent | planned | independent | Independent multi-area PR; too broad for closure or merge recommendation in this plan-only inventory shard. |
| #90868 | keep_independent | planned | independent | Independent exec-adjacent compatibility fix; security boundary label alone is not routed because the hydrated security gate did not flag it, but dirty state and failing proof block merge. |
| #89982 | keep_independent | planned | independent | Independent small logging cleanup; keep open for normal maintainer review and proof. |
| #92889 | keep_independent | planned | independent | Independent doctor bug fix; no merge action is allowed and no close target is in scope. |
| #58421 | keep_independent | planned | independent | Independent large plugin/gateway API PR with unresolved proof/check evidence; keep open, do not merge or close. |
| #59517 | keep_independent | planned | independent | Independent session-history bug fix with failing checks; keep open for proof and review resolution. |
| #75138 | keep_independent | planned | independent | Independent daemon env-loading fix; dirty branch and failing proof block any stronger action. |
| #75139 | keep_independent | planned | independent | Independent memory-core bug fix; keep open pending proof. |
| #75141 | keep_independent | planned | independent | Independent gateway schema warning fix; keep open for validation. |
| #75951 | keep_independent | planned | independent | Independent memory-core remediation-hints PR with failing checks; keep open. |
| #76034 | keep_independent | planned | independent | Independent config UI feature PR with failing checks; keep open. |
| #76141 | keep_independent | planned | independent | Independent TUI fix with failing validation; keep open. |
| #76175 | keep_independent | planned | independent | Independent WhatsApp message-delivery feature PR with failing gates; keep open. |
| #76230 | keep_independent | planned | independent | Independent but mixed-scope PR with failing checks; keep open rather than close. |
| #76234 | keep_independent | planned | independent | Independent broad feature PR; keep open for maintainer review rather than emit merge. |
| #76341 | keep_independent | planned | independent | Independent Slack message-delivery PR; keep open pending proof. |
| #76364 | keep_independent | planned | independent | Independent infra restart fix; keep open for validation. |
| #76473 | keep_independent | planned | independent | Independent cron behavior PR; keep open. |
| #76479 | keep_independent | planned | independent | Potential low-signal docs PR, but low-signal closeout is disabled; keep independent. |
| #76490 | keep_independent | planned | independent | Independent agent message-routing fix; keep open pending proof. |
| #76590 | keep_independent | planned | independent | Independent sandbox availability/compatibility fix; keep open. |
| #76617 | keep_independent | planned | independent | Independent channel formatting fix; keep open. |
| #76618 | keep_independent | planned | independent | Independent provider status mapping fix; keep open. |
| #76631 | keep_independent | planned | independent | Independent docs PR with author-followup state; keep open rather than close. |
| #76709 | keep_independent | planned | independent | Independent Matrix persistence fix; keep open. |
| #76717 | keep_independent | planned | independent | Independent large Telegram feature PR with failing proof; keep open. |
| #77996 | keep_independent | planned | independent | Independent broad Control UI/session-state PR; keep open for maintainer review. |
| #78009 | keep_independent | planned | independent | Independent docs/automation PR with author-followup and disabled low-signal closeout; keep open. |
| #78020 | keep_independent | planned | independent | Independent Telegram message-delivery PR; keep open pending proof. |
| #78022 | keep_independent | planned | independent | Independent Signal compatibility fix; security boundary label alone does not trigger route_security under the hydrated artifact. |
| #78026 | keep_independent | planned | independent | Independent Control UI rendering fix with failing validation; keep open. |
| #78033 | keep_independent | planned | independent | Independent Feishu message-delivery PR with failing checks; keep open. |
| #78034 | keep_independent | planned | independent | Independent Control UI attachment fix with failing validation; keep open. |
| #78035 | keep_independent | planned | independent | Independent memory-core PR; merge is blocked by job frontmatter and missing merge preflight. |
| #78075 | keep_independent | planned | independent | Independent plugin runtime fix; keep open pending proof. |
| #78084 | keep_independent | planned | independent | Independent plugin contract compatibility PR; keep open pending proof. |
| #78085 | keep_independent | planned | independent | Independent agents compatibility fix with failing checks and human review context; keep open. |

## Needs Human

- none
