---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-088"
mode: "plan"
run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T16:28:29.439Z"
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
needs_human_count: 0
---

# pr-inventory-ready_for_maintainer-20260615T154534-088

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations planned; merge/fix actions are blocked by job frontmatter. Hydrated open PRs are kept as independent maintainer-review candidates unless already closed or security-routed. Missing hydrated refs are classified conservatively without target_updated_at.

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
| #92996 | keep_independent | planned | independent | No hydrated live state is available for a mutating action; classify independently for maintainer review. |
| #75100 | keep_independent | planned | independent | Substantial feature PR with no duplicate canonical in this inventory shard; keep for independent maintainer review. |
| #75157 | keep_independent | planned | independent | Focused UI fix with passing checks, but merge is blocked in plan mode and by allowed_actions. |
| #75213 | keep_closed | skipped | superseded | Already closed in live artifact; no action should be applied. |
| #88901 | keep_closed | skipped | superseded | Already closed in live artifact; no action should be applied. |
| #75293 | keep_independent | planned | independent | Pending checks and dirty merge state block any stronger recommendation; keep as independent maintainer-review candidate. |
| #77736 | keep_independent | planned | independent | Provider-routing fix is not a duplicate in this inventory shard and needs normal maintainer review. |
| #89800 | keep_independent | planned | independent | Focused independent bugfix candidate. |
| #89806 | keep_independent | planned | independent | Focused independent Feishu bugfix candidate. |
| #89818 | keep_independent | planned | independent | Independent provider completeness fix. |
| #92243 | keep_independent | planned | independent | No hydrated live state is available for a mutating action; broad provider feature should remain independent. |
| #92185 | keep_independent | planned | independent | No hydrated live state is available for a mutating action; keep as independent maintainer-review candidate. |
| #89855 | keep_independent | planned | independent | Focused independent Telegram bugfix candidate. |
| #89864 | keep_independent | planned | independent | Focused independent mention-matching bugfix candidate. |
| #89882 | keep_independent | planned | independent | No hydrated live state is available for a mutating action; large plugin fix remains an independent maintainer-review candidate. |
| #87487 | keep_independent | planned | independent | Focused independent CLI/docs clarification candidate. |
| #51822 | keep_independent | planned | independent | Failing proof and unresolved review-bot context block stronger action; keep as independent review item. |
| #55901 | keep_independent | planned | independent | Feature PR with failing proof and unresolved review-bot context; keep independent for maintainer review. |
| #92899 | keep_independent | planned | independent | No hydrated live state is available for a mutating action; keep as independent maintainer-review candidate. |
| #64316 | keep_independent | planned | independent | Focused independent bugfix candidate; no merge action allowed. |
| #64546 | route_security | planned | security_sensitive | This appears to involve token forgery and a security boundary/authentication concern; route only this item to central security handling. |
| #66150 | keep_independent | planned | independent | Focused independent session-state bugfix candidate. |
| #66174 | keep_independent | planned | independent | Failing proof and core checks block stronger action; keep as independent review item. |
| #66478 | keep_independent | planned | independent | Independent Feishu message-delivery fix; no closure or merge action is allowed. |
| #67432 | keep_independent | planned | independent | Small accessibility fix, but failing proof/core check blocks stronger action; keep as independent review item. |

## Needs Human

- none
