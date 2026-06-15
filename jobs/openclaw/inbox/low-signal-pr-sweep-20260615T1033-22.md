---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-22
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
  - "#53467"
  - "#92091"
  - "#92028"
  - "#92227"
  - "#78381"
cluster_refs:
  - "#53467"
  - "#92091"
  - "#92028"
  - "#92227"
  - "#78381"
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

# Low-Signal PR Sweep 22

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #53467 feat(slack): add ignoreOtherMentions channel config

- author: hanamizuki
- updated: 2026-06-10T21:31:29Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Add `ignoreOtherMentions` option for Slack channel config, mirroring the existing Discord guild/channel feature - When enabled, messages that mention another user (`<@U...>`) but do not explicitly mention the bot are dropped — 
- changed files: not hydrated in gitcrawl

### #92091 feat(discord): reprocess edited messages and cancel runs on delete

- author: sws-apps
- updated: 2026-06-11T04:33:45Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: # Discord: reprocess edited messages, cancel runs when the source message is deleted Closes #53654. Also covers the edit-to-reprocess half tracked in #20173 and #38505. ## Summary Adds Discord `MESSAGE_UPDATE` / `MESSAGE_DELETE` gateway han
- changed files: not hydrated in gitcrawl

### #92028 feat(skills): report malformed SKILL.md files via `skills lint`

- author: hansraj316
- updated: 2026-06-11T08:06:21Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Malformed SKILL.md directories were silently dropped. `loadSkillsFromDirSafe` now returns skipped dirs with a discriminated reason (parse-error, or missing-required-field naming the field); `status.ts` threads it through, and a n
- changed files: not hydrated in gitcrawl

### #92227 fix(codex): avoid refreshing valid app-server OAuth

- author: dredozubov
- updated: 2026-06-11T17:29:21Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Avoid forced OAuth refresh for Codex app-server token callbacks when the selected OAuth credential is still usable. - Keep near-expiry credentials refreshing through the existing provider-auth path. - Classify OpenAI app-sessio
- changed files: not hydrated in gitcrawl

### #78381 feat(embedded-runner): expose prep stage timings

- author: guanbear
- updated: 2026-06-12T03:19:58Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Expose embedded runner prep stage snapshots on `EmbeddedRunAttemptResult`. - Include the same prep stage summary on the `agent_end` hook event for plugin observability. - Add focused coverage for attempt result and hook event p
- changed files: not hydrated in gitcrawl

