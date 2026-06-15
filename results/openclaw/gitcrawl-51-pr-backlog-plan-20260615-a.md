---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-51-pr-backlog-plan-20260615-a"
mode: "plan"
run_id: "27525177905"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525177905"
head_sha: "71716f3d6bcb42c20a7b66dbaacc1fdabe4fd9cf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:07:33.649Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-51-pr-backlog-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525177905](https://github.com/openclaw/clownfish/actions/runs/27525177905)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification. The hinted canonical #45839 is security-sensitive in the hydrated artifact, so there is no safe non-security canonical for the whole cluster. Security-sensitive refs are routed individually. The remaining non-security items split into separate work families: #72704/#89428 for inbound metadata prompt cleanup, #88032/#90745 for Telegram reply metadata contract work, and #88638 for Webchat quote/reply UI.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #45839 | route_security | planned | security_sensitive | Security-sensitive auth/pairing work must not be triaged or closed through ProjectClownfish backlog cleanup. |
| #46656 | route_security | planned | security_sensitive | The item includes security-review and authenticated callback surface, so route this exact ref without blocking unrelated non-security classification. |
| #48471 | route_security | planned | security_sensitive | Security-signal auth/bootstrap work belongs in central security handling, not cluster cleanup. |
| #72704 | keep_related | planned | related | Keep the issue open as the non-security tracker for inbound metadata prompt cleanup; do not close as fixed while the candidate PR is not merge-ready. |
| #72749 | route_security | planned | security_sensitive | The job explicitly requires security routing for this ref; quarantine only this item and continue non-security classification. |
| #88032 | needs_human | planned | needs_human | Maintainer product/API judgment is required before deciding whether reply metadata should change BodyForAgent/runtime contract semantics. |
| #88638 | keep_independent | planned | independent | Keep as an independent feature tracker; it should not be forced into the Telegram pairing or inbound metadata duplicate family. |
| #89428 | keep_related | planned | related | Useful candidate PR for #72704, but plan mode cannot merge and current checks/conflicts block treating it as landed. |
| #90745 | keep_related | planned | related | Keep related to #88032 for maintainer review; it is broader than #89428 and cannot be merged or used for closeout while checks and contract review are unresolved. |

## Needs Human

- #88032 requires maintainer product/API judgment on the Telegram reply metadata runtime contract before dedupe or PR finalization decisions.
