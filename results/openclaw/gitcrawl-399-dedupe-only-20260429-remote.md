---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-399-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135985570"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135985570"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.025Z"
canonical: "https://github.com/openclaw/openclaw/pull/73399"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73399"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-399-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135985570](https://github.com/openclaw/clownfish/actions/runs/25135985570)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73399

## Summary

No GitHub mutations were emitted. The job's original open candidate #51032 is already closed and merged; closed cluster refs remain historical evidence. The current open successor for the remaining Feishu DM fallback/topic-label work is #73399, but its hydrated Aisle security analysis raises security-class claims, so the PR is routed to central security triage before any normal Clownfish merge/close path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #38958 | keep_closed | skipped | superseded | Closed historical canonical hint; replacement path is hydrated as #73399, but #38958 itself must remain a skipped closed-context item. |
| #51032 | keep_closed | skipped | related | The job listed #51032 as an open candidate, but live state shows it already landed. It is related baseline evidence, not an open target. |
| #69604 | keep_closed | skipped | independent | Closed independent context ref; no Clownfish action is needed or allowed. |
| #69938 | keep_closed | skipped | superseded | Closed superseded context ref; no close/comment action is valid. |
| #73399 | route_security | planned | security_sensitive | The only open successor PR has hydrated security-shaped findings. Quarantine this exact item for central OpenClaw security triage and do not close, merge, fix, label, or comment through this Clownfish job. |

## Needs Human

- none
