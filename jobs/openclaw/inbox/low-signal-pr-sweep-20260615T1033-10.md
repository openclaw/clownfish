---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-10
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
  - "#86130"
  - "#64127"
  - "#82519"
  - "#89190"
  - "#89282"
cluster_refs:
  - "#86130"
  - "#64127"
  - "#82519"
  - "#89190"
  - "#89282"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T10:33:33.322Z."
---

# Low-Signal PR Sweep 10

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #86130 fix(plugin-sdk): restore Codex task runtime export compat

- author: NianJiuZst
- updated: 2026-06-01T14:18:33Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - restore `./plugin-sdk/codex-native-task-runtime` in `openclaw` package exports as a compatibility-only path for stale official Codex installs - keep the legacy Codex task-runtime subpath out of generic source/root alias publica
- changed files: not hydrated in gitcrawl

### #64127 feat: Provider circuit breaker for quota exhaustion

- author: dodge1218
- updated: 2026-06-01T16:36:08Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Resolves #64085 This PR introduces proper handling for daily/weekly/monthly quota exhaustion errors: 1. Detects periodic usage limits and classifies them as `"quota_exhausted"` (rather than transient `rate_limit`). 2. Routes `quota_exhauste
- changed files: not hydrated in gitcrawl

### #82519 fix(test): stabilize red CI tests

- author: lidge-jun
- updated: 2026-06-01T20:10:56Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Keep empty cron payload text/message values shape-valid so the cron service can record the intended skipped status. - Adjust the malformed reload schedule test to use a shape-valid cron schedule with an invalid expression. - Av
- changed files: not hydrated in gitcrawl

### #89190 feat(xai): add grok-composer-2.5-fast model

- author: lidge-jun
- updated: 2026-06-01T20:15:13Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Adds `grok-composer-2.5-fast` to xAI model catalog in `extensions/xai/model-definitions.ts` - Adds `grok-composer` prefix to modern model list in `extensions/xai/provider-models.ts` - Model is live on xAI `/v1/chat/completions`
- changed files: not hydrated in gitcrawl

### #89282 fix: skip platform-incompatible skills in doctor warnings

- author: arkyu2077
- updated: 2026-06-02T02:06:59Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - exclude platform-incompatible skills from the actionable doctor warning list - keep them visible as a single summary note instead of dozens of false-positive missing-requirement lines - add coverage for separating actionable vs
- changed files: not hydrated in gitcrawl

