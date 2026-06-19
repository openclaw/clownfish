---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-recent_active-20260615T154534-123"
mode: "plan"
run_id: "27560323972-1-124"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T01:31:37.475Z"
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

# pr-inventory-recent_active-20260615T154534-123

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for 25 hydrated open PRs. No GitHub mutations are performed. Most PRs are independent open review items; #91448 is a planned superseded closeout candidate in favor of #90841; #81362, #84560, and #90101 need specific maintainer judgment.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #91448 | close_superseded | planned | superseded | Same issue and UI surface, with #90841 providing the broader replacement fix. |
| #92953 | keep_independent | planned | independent | Independent focused bug-fix PR awaiting review. |
| #78010 | keep_independent | planned | independent | Independent docs PR awaiting maintainer review. |
| #78031 | keep_independent | planned | independent | Open product/docs-style change should remain in normal review. |
| #90079 | keep_independent | planned | independent | Draft PR still needs proof; no cleanup action applies. |
| #76082 | keep_independent | planned | independent | Substantial docs convention PR is independently reviewable. |
| #93034 | keep_independent | planned | independent | Independent focused bug-fix PR awaiting review. |
| #90101 | needs_human | planned | needs_human | Maintainer product and contract judgment is required before this broad feature PR can be classified as keepable, closable, or split-worthy. |
| #77629 | keep_independent | planned | independent | Focused docs PR is independently reviewable. |
| #79141 | keep_independent | planned | independent | Branch target and unstable/check gaps make this a normal maintainer review item. |
| #79846 | keep_independent | planned | independent | Closeout is disabled and the docs PR remains independently reviewable. |
| #90841 | keep_independent | planned | independent | Best apparent current implementation for the Telegram cron validation overlap, but still an independent open candidate for review. |
| #80924 | keep_independent | planned | independent | Large i18n/UI PR should remain open for targeted review. |
| #81305 | keep_independent | planned | independent | Focused bug-fix PR with useful code; keep independent. |
| #81362 | needs_human | planned | needs_human | Maintainer technical judgment is needed on unrelated/churny files before cleanup classification. |
| #59694 | keep_independent | planned | independent | Independent hardening/bug-fix PR awaiting maintainer review. |
| #79273 | keep_independent | planned | independent | Focused docs clarification remains independently reviewable. |
| #93106 | keep_independent | planned | independent | Ready docs PR should remain open for maintainer review. |
| #68280 | keep_independent | planned | independent | Independent open bug-fix PR awaiting review. |
| #84560 | needs_human | planned | needs_human | Maintainer judgment is needed because the PR is broad and contains substantial release/unrelated churn for a small CLI flag feature. |
| #87932 | keep_independent | planned | independent | Focused feature PR should remain open for normal review. |
| #73923 | keep_independent | planned | independent | Existing repair PR should remain open independently; merge/fix actions are disallowed. |
| #73925 | keep_independent | planned | independent | Existing repair PR should remain open for maintainer review. |
| #73948 | keep_independent | planned | independent | Existing repair PR has preserved attribution and should remain open for review. |
| #87247 | keep_independent | planned | independent | Focused docs PR remains independently reviewable. |

## Needs Human

- #90101: broad runtime self context feature with size XL, low-signal-docs/status needs proof labels, many Codex bot reviews, and unavailable hydrated review/check details requires maintainer product/contract judgment.
- #81362: focused bug claim is mixed with .mcp.json and changelog churn plus compatibility/security-boundary labels; maintainer technical judgment is required.
- #84560: CLI flag feature PR includes 141 changed files and release/unrelated churn; maintainer judgment is required to split, request cleanup, or close.
