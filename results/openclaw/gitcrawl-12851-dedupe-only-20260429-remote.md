---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-12851-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109675769"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109675769"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-29T13:00:09.115Z"
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
needs_human_count: 0
---

# gitcrawl-12851-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109675769](https://github.com/openclaw/clownfish/actions/runs/25109675769)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

No close, merge, label, or fix action is safe from this dedupe-only pass. The canonical hint #67816 and related QR follow-up #67820 have security-shaped Aisle findings and are routed to central security handling; the remaining open PRs are related WhatsApp reliability/QR/setup work with distinct scopes, unresolved review blockers, failing checks, stale paths, or unhydrated replacement context.

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
| #42843 | keep_related | planned | related | Keep open as related reconnect-policy work; not a high-confidence duplicate or superseded PR. |
| #43978 | keep_related | planned | related | Keep open as related stale-but-useful WhatsApp delivery reliability work. |
| #47710 | keep_related | planned | related | Keep open as related QR 408 timeout work with unresolved review and CI blockers. |
| #63037 | keep_related | planned | related | Keep open as related incomplete connection-wait timeout work. |
| #63939 | keep_related | planned | related | Keep open because the remaining config-surface decision is not duplicate-cleanup safe and the replacement context is not hydrated. |
| #67816 | route_security | planned | security_sensitive | Route the hinted canonical PR to central security triage before any canonical or closeout decision. |
| #67818 | keep_related | planned | related | Keep open as related QR preflight work; unresolved review feedback blocks any merge/fixed-by-candidate decision. |
| #67820 | route_security | planned | security_sensitive | Route #67820 to central security triage and do not use it as a closeout/superseding candidate in this run. |
| cluster:gitcrawl-12851-dedupe-only-20260429-remote | route_security | planned | security_sensitive | Route the canonical-family decision to central security triage; unrelated non-security PRs were still classified individually. |

## Needs Human

- none
