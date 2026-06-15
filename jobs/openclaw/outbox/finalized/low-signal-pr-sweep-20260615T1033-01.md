---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-01
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
  - "#82193"
  - "#82213"
  - "#82514"
  - "#82577"
  - "#82691"
cluster_refs:
  - "#82193"
  - "#82213"
  - "#82514"
  - "#82577"
  - "#82691"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T10:33:33.320Z."
---

# Low-Signal PR Sweep 1

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #82193 feat(tools): add sessions_broadcast for multi-session A2A fan-out

- author: bryanbaer
- updated: 2026-05-15T15:18:51Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds `sessions_broadcast` — a fan-out primitive for multi-session A2A coordination. **Motivation:** `sessions_send` is one-to-one. Notifying multiple agent sessions (e.g. before a gateway restart, or coordinating a swarm) require
- changed files: not hydrated in gitcrawl

### #82213 plugin-sdk: add runtime.session.cancel and channel.outbound.sendToSession

- author: satoy-bot
- updated: 2026-05-15T16:28:28Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add `runtime.session.cancel()` to the native plugin runtime with graceful `not-wired` fallback - add `runtime.channel.outbound.sendToSession()` for direct text delivery to a session’s last recorded route - wire gateway plugin r
- changed files: not hydrated in gitcrawl

### #82514 feat(ui-i18n): localize Settings toolbar chrome strings (#46217 partial)

- author: ObliviateRickLin
- updated: 2026-05-16T10:05:58Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Phase 1 of #46217: replaces 20 hardcoded English strings in the Settings view toolbar with `t()` calls under a new `settings.*` namespace in `ui/src/i18n/locales/en.ts`. Runs `pnpm ui:i18n:sync` to regenerate all 18 locale bundle
- changed files: not hydrated in gitcrawl

### #82577 feat: show user-installed channel plugins in openclaw configure

- author: lukum21yandex-bit
- updated: 2026-05-16T13:54:12Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary When a user installs a channel plugin (third-party, origin "global"), `openclaw configure` does not show it — it only displays channels from the bundled `channel-catalog.json` (17 built-in channels). This PR adds `listAllChatChan
- changed files: not hydrated in gitcrawl

### #82691 feat(messages): add toolMessageLogging override

- author: laorient
- updated: 2026-05-16T18:16:08Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add a `messages.toolMessageLogging` configuration override to control tool-message logging behavior - wire the setting through schema labels/help/types and session zod schema - cover config dispatch behavior with auto-reply tes
- changed files: not hydrated in gitcrawl

