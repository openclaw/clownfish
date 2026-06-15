---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1534-01
mode: plan
triage_policy: low_signal_prs
allowed_actions:
  - comment
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - label
require_human_for:
  - security_sensitive
  - maintainer_signal
  - active_author_followup
  - focused_bug_fix
  - green_checks
  - technical_correctness_judgment
canonical: []
candidates:
  - "#93025"
  - "#93222"
  - "#92946"
  - "#55766"
cluster_refs:
  - "#93025"
  - "#93222"
  - "#92946"
  - "#55766"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T15:34:55.194Z."
---

# Low-Signal PR Sweep 1

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #93025 [codex] fix(provider): expose session identity to stream hooks

- author: yu-xin-c
- updated: 2026-06-15T06:06:54Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Refs #73488 ## Summary - Add optional `sessionId` and `sessionKey` to `ProviderCreateStreamFnContext`. - Thread that request-scoped identity through provider stream registration for embedded agent turns, compaction, and `/btw` side question
- changed files: not hydrated in gitcrawl

### #93222 fix(discord): add configurable REST API timeout

- author: geekhuashan
- updated: 2026-06-15T08:35:38Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds `channels.discord.apiTimeoutMs` to the Discord channel config surface and threads it into Discord REST request-client construction. Default behavior stays at `15000` ms. Configured values are accepted at both `channels.disco
- changed files: not hydrated in gitcrawl

### #92946 fix(telegram): preserve delivery without rich API

- author: Glucksberg
- updated: 2026-06-15T09:46:56Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Preserves Telegram text delivery when rich Bot API methods are unavailable on a custom or lagging Bot API root. - Falls back from `sendRichMessage` / rich text edit to legacy `sendMessage` / `editMessageText`. - Re-chunks legac
- changed files: not hydrated in gitcrawl

### #55766 feat(acp): forward image blocks in tool call results

- author: David553
- updated: 2026-06-15T10:43:00Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - `extractToolCallContent()` in the ACP event mapper previously only extracted `type: "text"` blocks from tool results, silently dropping image content blocks - ACP clients (Feishu, Discord, etc.) could not display images produce
- changed files: not hydrated in gitcrawl
