---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13969-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109787980"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109787980"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.762Z"
canonical: "https://github.com/openclaw/openclaw/issues/67158"
canonical_issue: "https://github.com/openclaw/openclaw/issues/67158"
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-13969-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109787980](https://github.com/openclaw/clownfish/actions/runs/25109787980)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/67158

## Summary

Hydrated preflight artifact at main 9881a808f2fc0d5302f98a040a9efaad00336097 shows no security-sensitive refs. #67158 remains the best open canonical for the ChatGPT/Codex OAuth model-entitlement rejection family; the other open items are separate auth-refresh, node-host, multi-agent sync, hardening, or Cloudflare/container subtracks. No high-confidence instant close action is safe; #59629 and #60673 are already closed and must not receive close actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #67158 | keep_canonical | planned | canonical | Best surviving canonical for the model entitlement/catalog rejection family; keep open for provider-boundary handling or verified upstream resolution. |
| #8673 | keep_related | planned | related | Related auth-refresh work, but not a duplicate of #67158 and not safe to close. |
| #42291 | keep_related | planned | fixed_by_candidate | Covered by an active candidate PR that should own validation, but closeout is not safe before a reviewed/landed fix. |
| #42381 | keep_related | planned | related | Useful contributor PR should stay open for review/repair; no close, merge, or replacement path is permitted in this dedupe-only job. |
| #44571 | needs_human | planned | needs_human | Maintainer product decision is required for multi-agent auth semantics before this can be deduped or fixed narrowly. |
| #45359 | keep_related | planned | related | Related OpenAI Codex OAuth runtime issue with unique reproduction details; keep open. |
| #47684 | needs_human | planned | needs_human | Maintainer decision is needed on the product shape for cross-agent auth synchronization before a narrow implementation path is clear. |
| #53969 | keep_related | planned | related | Related auth-store hardening track with remaining unique work; keep open rather than closing as duplicate. |
| #59629 | keep_closed | skipped |  | Already closed in live preflight state; no close/comment mutation is valid. |
| #60673 | keep_closed | skipped |  | Already closed in live preflight state; no close/comment mutation is valid. |
| #68033 | keep_related | planned | related | Related OpenAI Codex provider issue with unique Cloudflare/container scope; not a clean duplicate and not safe to close. |

## Needs Human

- #44571: decide multi-agent onboarding auth semantics: sync selected credentials to configured agent dirs, or preserve isolation with a repair/warning path.
- #47684: decide API-key rotation auth-sync product shape: automatic sync, explicit command, or warning-only shadowing behavior.
