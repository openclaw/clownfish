---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-18
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
  - "#72557"
  - "#91493"
  - "#90450"
  - "#55927"
  - "#55901"
cluster_refs:
  - "#72557"
  - "#91493"
  - "#90450"
  - "#55927"
  - "#55901"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T10:33:33.324Z."
---

# Low-Signal PR Sweep 18

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #72557 feat: PluginStatusProvider plugin API for TUI footer status (resolves #64086)

- author: dodge1218
- updated: 2026-06-08T16:36:40Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Resolves #64086. Coordinates with #53774 (broader footer-customization tracker). ## What this PR does Adds a typed `PluginStatusProvider` interface and `registerStatusProvider` method to `OpenClawPluginApi`, following the same registration 
- changed files: not hydrated in gitcrawl

### #91493 Add fail-on-tool-failure contract for isolated cron agent turns

- author: cristbc
- updated: 2026-06-08T19:32:19Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Title: Add fail-on-tool-failure contract for isolated cron agent turns ## Summary - add `payload.failOnToolFailure` to agent-turn cron payload validation and runtime types - persist the flag through cron SQLite projections and additive stat
- changed files: not hydrated in gitcrawl

### #90450 fix(agents): preserve streamed assistant text when Claude CLI result event is empty

- author: totobusnello
- updated: 2026-06-09T04:10:52Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - The claude `stream-json` dialect can emit a final `result` event with **empty text** even though assistant text deltas were already streamed (or the turn was tool-only). Both JSONL parsers trust the final event and discard ever
- changed files: not hydrated in gitcrawl

### #55927 feat(ui): visible room and channel context for sessions and chat

- author: escalonalabs
- updated: 2026-06-09T05:05:36Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary This PR ships the full Phase 0 + Phase 1 Control UI visibility work for sessions/chat. ### Phase 0 - Sync `GatewaySessionRow` with current gateway payload - Surface room/channel/title metadata in Sessions and Chat - Show Guardian
- changed files: not hydrated in gitcrawl

### #55901 feat(irc): support markdown messages via draft/multiline

- author: grepsuzette
- updated: 2026-06-10T05:02:02Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds support for sending markdown-formatted messages over IRC using the `draft/multiline` CAP extension. This preserves newlines in bot responses, allowing IRC clients to properly render markdown content. ## Motivation OpenClaw b
- changed files: not hydrated in gitcrawl

