---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-05
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
  - "#85238"
  - "#85866"
  - "#87759"
  - "#86608"
  - "#83590"
cluster_refs:
  - "#85238"
  - "#85866"
  - "#87759"
  - "#86608"
  - "#83590"
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

# Low-Signal PR Sweep 5

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #85238 fix: include pnpm 11 bins in gateway PATH

- author: shbernal
- updated: 2026-05-28T09:51:19Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - include pnpm 11's `PNPM_HOME/bin` layout in managed gateway service PATH generation - keep pnpm 10-style `PNPM_HOME` paths for compatibility - add npm-global and package-manager env bin fallbacks to runtime PATH bootstrap while
- changed files: not hydrated in gitcrawl

### #85866 [codex] Add WhatsApp phone-code login

- author: VishalJ99
- updated: 2026-05-28T09:51:50Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add `openclaw channels login --phone-number <number>` to the generic channel auth adapter and CLI - implement WhatsApp phone-code pairing through Baileys as a headless/QR-free login fallback, including cleanup for stale partial
- changed files: not hydrated in gitcrawl

### #87759 Add Telegram per-group UI overrides

- author: Al-bots
- updated: 2026-05-29T05:09:42Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add Telegram per-group/topic overrides for UI streaming settings (`streaming.mode`, preview/progress toolProgress) and `ackReaction` - resolve Telegram scoped overrides before account/channel defaults - honor explicit `delivery
- changed files: not hydrated in gitcrawl

### #86608 docs: add existing-solutions preflight guardrail

- author: cablackmon
- updated: 2026-05-29T06:23:03Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add a repo-root AGENTS.md rule requiring a lightweight existing-solutions check before custom builds - add the same reusable guardrail to default workspace AGENTS templates and the Kubernetes starter AGENTS config - keep wordin
- changed files: not hydrated in gitcrawl

### #83590 plugin-sdk: restore legacy compat helper exports

- author: san-tian
- updated: 2026-05-29T06:27:26Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - extend the deprecated `openclaw/plugin-sdk/compat` surface with additional legacy channel plugin helpers - keep the root `openclaw/plugin-sdk` export small; this only affects the explicit compat subpath - add coverage that impo
- changed files: not hydrated in gitcrawl

