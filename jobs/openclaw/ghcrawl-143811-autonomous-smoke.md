---
repo: openclaw/openclaw
cluster_id: ghcrawl-143811-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#54659"
candidates:
  - "#67158"
  - "#68033"
  - "#71256"
cluster_refs:
  - "#42721"
  - "#46385"
  - "#47372"
  - "#49138"
  - "#51175"
  - "#54284"
  - "#54659"
  - "#56658"
  - "#56960"
  - "#57107"
  - "#57286"
  - "#57399"
  - "#59704"
  - "#62236"
  - "#62688"
  - "#63385"
  - "#64133"
  - "#64465"
  - "#65347"
  - "#66952"
  - "#67158"
  - "#68033"
  - "#71256"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #54659 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143811 on 2026-04-25."
---

# GHCrawl Cluster 143811

Generated from local ghcrawl run cluster 143811 for `openclaw/openclaw`.

Display title:

> [Bug]: openai-codex provider fails with HTTP 401 "Missing scopes: model.request"

Cluster shape from ghcrawl:

- total members: 23
- issues: 23
- pull requests: 0
- open candidates in local store: 3
- representative: #54659, currently closed in local store
- latest member update: 2026-04-25T11:13:27.717Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42721 [Bug]: openclaw models status shows expired OAuth profiles as ok when a refresh token exists
- #46385 OAuth refresh token invalidated after gateway restart — should auto-recover
- #47372 OpenAI Codex OAuth missing model.request scope — causes 401 errors
- #49138 OAuth flow missing api.responses.write scope — blocks GPT-5.4 in subagents
- #51175 [Bug]: openai-codex OAuth fails with 403 unsupported_country_region_territory while codex-cli works
- #54284 [Bug]: Regression in 2026.3.23(-2): openai-codex OAuth succeeds but model becomes unusable with refresh_token_reused
- #54659 [Bug]: openai-codex provider fails with HTTP 401 "Missing scopes: model.request"
- #56658 OpenAI Codex OAuth login requests missing scope `model.request`, causing 401 on all model calls
- #56960 openai-codex provider: refresh_token_reused loop causes severe gateway event-loop degradation
- #57107 Repeated OpenAI Codex refresh_token_reused errors after re-onboard / gateway restart
- #57286 Codex OAuth login creates fresh named profile but runtime keeps preferring stale openai-codex:default
- #57399 [Bug]: OAuth token refresh silently fails for openai-codex provider, requiring manual re-authentication every ~10–30 days
- #59704 Codex relogin can leave stale openai-codex:default profile that causes refresh_token_reused conflicts
- #62236 [Bug] OpenAI Codex OAuth token refresh fails with 'token has already been used' — Issue #52037 still not fixed in 2026.4.5
- #62688 openai-codex OAuth flow missing model.request scope — all API calls fail with 401
- #63385 OpenAI Codex external-CLI auth can drift in long-running gateway and hit refresh_token_reused
- #64133 OpenAI Codex OAuth: 401 api.responses.write scope missing after 2026.4.9 upgrade
- #64465 [Bug]:
- #65347 [Bug]: OpenAI Codex OAuth Authentication Failed: invalid_scope and missing authorization code
- #66952 [Bug]: openai-codex OAuth refresh race can invalidate shared refresh token; models status misreports expired Codex profiles as OK

Open candidates:

- #67158 [Bug]: openai-codex gpt-5.1/5.2/5.3 rejected on ChatGPT/Codex OAuth, only gpt-5.4 works
- #68033 openai-codex provider broken since 2026.4.5 — Cloudflare challenge + missing OAuth scope
- #71256 Claude CLI auth status can show expired/expiring even when local Claude credentials are fresh and runtime works
