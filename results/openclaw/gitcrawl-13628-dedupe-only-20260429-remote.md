---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13628-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109728950"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109728950"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.739Z"
canonical: "https://github.com/openclaw/openclaw/pull/64720"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/64720"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13628-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109728950](https://github.com/openclaw/clownfish/actions/runs/25109728950)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/64720

## Summary

Selected #64720 as the best live canonical thread for the channel inbound external-content wrapping family. No close, merge, fix, or PR actions are safe here: the open provider PRs have distinct unresolved provider-path issues, review-bot blockers, or failing checks, and #66521 is independent Signal typing work. Security-sensitive linked #24286 is quarantined only.

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
| #24286 | route_security | planned | security_sensitive | Security-sensitive linked issue is out of ProjectClownfish mutation scope and should stay with central OpenClaw security handling. |
| #26700 | keep_closed | skipped | related | Closed historical PR, related to external-content display sanitization but not an open dedupe target. |
| #64720 | keep_canonical | planned | canonical | Best live canonical thread for the non-security provider/channel hardening family, but it is not merge-ready because review-bot findings remain unresolved and merge is blocked by job policy. |
| #66196 | keep_related | planned | related | Related provider-specific hardening candidate with unique WhatsApp path and unresolved blockers; not a true duplicate and not safe to close or merge. |
| #66197 | keep_closed | skipped | related | Closed Telegram-specific context PR; no mutation planned. |
| #66198 | keep_related | planned | related | Related Signal-specific hardening candidate with unresolved model-facing path and review-bot blockers; keep open rather than close as duplicate. |
| #66199 | keep_related | planned | related | Related provider-specific candidate with unique iMessage prompt-path blockers; not a safe duplicate closeout. |
| #66200 | keep_related | planned | related | Related provider-specific candidate with unresolved BlueBubbles prompt-path and review blockers; no closure planned. |
| #66521 | keep_independent | planned | independent | Same Signal area but different user-visible behavior and root cause; keep out of this dedupe cluster. |

## Needs Human

- none
