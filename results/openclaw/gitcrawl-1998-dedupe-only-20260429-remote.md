---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1998-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131329587"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131329587"
head_sha: "b5784ec6f81e07c69dcfb868449f4f451549e38e"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-29T20:19:16.068Z"
canonical: "https://github.com/openclaw/openclaw/pull/39772"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39772"
actions_total: 16
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-1998-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131329587](https://github.com/openclaw/clownfish/actions/runs/25131329587)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/39772

## Summary

Classified the hydrated open candidates plus the security-linked #39582. The closed representative #41105 is obsolete; #39772 is the current canonical open Telegram reply-to/deleted-message path. No close actions are planned because the remaining open PRs are related or independent active work, broad/blocked, or require product-direction review; closed candidates are skipped and #39582 is routed to security.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
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
| #39772 | keep_canonical | planned | canonical | Best surviving open canonical for the Telegram reply_to/deleted-message subfamily. |
| #40366 | keep_related | planned | related | Related delivery fallback work, but distinct provider and root cause. |
| #41403 | keep_independent | planned | independent | Docs/hook-surface work is outside the Telegram streaming dedupe target. |
| #45290 | keep_related | planned | related | Related delivery family, but broad and not a true duplicate of #39772. |
| #47631 | keep_related | planned | related | Related Telegram streaming work with a separate root cause and active branch path. |
| #48466 | keep_related | planned | related | Related Telegram preview resilience work, not duplicate closeout. |
| #53762 | keep_related | planned | related | Related Telegram delivery bug with separate validation and review blockers. |
| #54165 | keep_independent | planned | independent | Heartbeat sanitizer work is independent of the canonical Telegram streaming reply target. |
| #55550 | keep_independent | planned | independent | Telegram health reporting is independent from the streaming reply_to cluster. |
| #58101 | keep_independent | planned | independent | Heartbeat token cleanup is an independent bug family. |
| #60830 | keep_related | planned | related | Related Telegram/error-routing work, not duplicate closeout. |
| #63695 | keep_related | planned | related | Related Telegram preview finalization work with distinct blockers. |
| #64731 | needs_human | blocked | needs_human | Maintainer product-direction choice is needed between a Telegram-specific fallback-notice fix and broader fallback notification configuration. |
| #65421 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #71554 | keep_closed | skipped | fixed_by_candidate | Already merged candidate retained as historical fixed-by evidence only. |
| #39582 | route_security | planned | security_sensitive | Security-labeled middleware/security-layer report is outside ProjectClownfish backlog cleanup and should remain with central OpenClaw security handling. |

## Needs Human

- #64731 requires maintainer product-direction choice: Telegram-specific fallback notices outside verbose mode versus the broader unhydrated fallback-notice configuration direction; no duplicate, superseded, or fixed-by-candidate action is safe from this artifact.
