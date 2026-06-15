---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-24
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
  - "#89762"
  - "#92529"
  - "#92544"
  - "#91210"
  - "#92591"
cluster_refs:
  - "#89762"
  - "#92529"
  - "#92544"
  - "#91210"
  - "#92591"
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

# Low-Signal PR Sweep 24

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #89762 feat(messages): config-level default for responseUsage (persistent /usage footer)

- author: Marvinthebored
- updated: 2026-06-12T15:15:32Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## What Adds a config-level default for `responseUsage` (the per-reply usage footer mode `on|off|tokens|full`). Today the mode is **per-session** — sticky within a session, but every new session starts effectively `off` until a user runs `/
- changed files: not hydrated in gitcrawl

### #92529 fix(agents): prevent local exec policy errors from triggering model fallback

- author: jml001
- updated: 2026-06-12T20:24:34Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary A Codex app-server local exec policy denial was classified as a model failure, so the agent switched providers/models on what is a local configuration outcome - burning fallback budget and changing models mid-session with no avai
- changed files: not hydrated in gitcrawl

### #92544 Add TrustedRouter setup docs

- author: jperla
- updated: 2026-06-12T22:53:30Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add TrustedRouter provider setup documentation - add the docs page to the provider navigation - include the OpenAI-compatible base URL https://api.trustedrouter.com/v1 and router aliases ## Testing - git diff --check
- changed files: not hydrated in gitcrawl

### #91210 fix(ui): localize skill workshop switcher

- author: SYU8384
- updated: 2026-06-13T03:14:19Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Splits out the i18n portion of #79745. This PR localizes the Skill Workshop mode switcher (Board / Today) into all supported Control UI locales. It does not touch the qmd/mcporter memory path. ## Verification Rebased onto current `upstream/
- changed files: not hydrated in gitcrawl

### #92591 feat(msteams): respond to channel messages by keyword without an @mention

- author: colton-octaria
- updated: 2026-06-13T04:11:07Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary The MS Teams channel is the only group-capable channel that ignores `messages.groupChat.mentionPatterns`. Discord, Slack and WhatsApp each expose a per-provider `mentionPatterns` policy that scopes those patterns and treats a tex
- changed files: not hydrated in gitcrawl

