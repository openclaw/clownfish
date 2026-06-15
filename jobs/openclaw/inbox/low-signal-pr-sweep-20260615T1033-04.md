---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-04
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
  - "#72187"
  - "#79855"
  - "#86085"
  - "#79478"
  - "#80246"
cluster_refs:
  - "#72187"
  - "#79855"
  - "#86085"
  - "#79478"
  - "#80246"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T10:33:33.321Z."
---

# Low-Signal PR Sweep 4

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #72187 feat(plugin-sdk): add service lifecycle test harness

- author: JB357345688
- updated: 2026-05-22T21:05:33Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds a generic plugin-SDK service lifecycle test harness for finite plugin service/hook tests. This gives plugin authors a supported test helper for exercising registered plugin services with a usable `stateDir`, optional `worksp
- changed files: not hydrated in gitcrawl

### #79855 plugin SDK: add inbound_activity hook + discord emit points

- author: AriAriXO
- updated: 2026-05-22T23:38:25Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds a new plugin hook `inbound_activity` that lets a sibling plugin participate in per-channel inbound debouncing without owning the channel inbound flow. Currently `@openclaw/discord` owns its `createChannelInboundDebouncer` pr
- changed files: not hydrated in gitcrawl

### #86085 i18n(zh-TW): align Control UI locale with Taiwan-standard terminology

- author: p3nchan
- updated: 2026-05-24T15:57:39Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary The `zh-TW` Control UI locale on `main` still uses a number of mainland-China terms that are not idiomatic Traditional Chinese (Taiwan). Key parity is already complete (1228/1228), so this is a focused **terminology** pass — no k
- changed files: not hydrated in gitcrawl

### #79478 fix(security): flag sensitive skill markdown network sends

- author: HemantSudarshan
- updated: 2026-05-25T05:00:47Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add a deep security-audit finding for installed skills whose `SKILL.md` asks for sensitive model-facing parameters while the skill code performs outbound network I/O - keep the check separate as `skills.markdown_sensitive_netwo
- changed files: not hydrated in gitcrawl

### #80246 feat(cron): include event time in failure alerts

- author: haishmg
- updated: 2026-05-27T04:58:47Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Closes #77497. Cron failure notifications now include the failed event time instead of relying only on the delivery timestamp. The timestamp uses the cron schedule timezone when present and falls back to UTC for non-cron schedule
- changed files: not hydrated in gitcrawl

