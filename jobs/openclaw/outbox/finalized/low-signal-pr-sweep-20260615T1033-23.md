---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-23
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
  - "#92213"
  - "#91889"
  - "#91967"
  - "#88581"
  - "#92477"
cluster_refs:
  - "#92213"
  - "#91889"
  - "#91967"
  - "#88581"
  - "#92477"
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

# Low-Signal PR Sweep 23

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #92213 feat(plugins): add iFlow Search external provider

- author: zhengyanglsun
- updated: 2026-06-12T04:00:24Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Add [iFlow Search (心流搜索)](https://platform.iflow.cn) as an external Web Search provider in the official plugin catalog, so users can select it during `openclaw onboard` or `openclaw configure --section web`. This integration uses
- changed files: not hydrated in gitcrawl

### #91889 feat(plugin-sdk): surface accountId on agent hook context

- author: yukunlabs
- updated: 2026-06-12T08:42:39Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## TL;DR Adds an optional `accountId` to the plugin **agent hook context** so account-aware plugins can read which channel account a turn belongs to, instead of reverse-engineering it from `sessionKey` (which doesn't carry it for group or c
- changed files: not hydrated in gitcrawl

### #91967 feat(ios): show OpenClaw logo in notch

- author: zats
- updated: 2026-06-12T10:04:38Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Show the existing `OpenClawIcon` in the iOS notch/Dynamic Island capture area. - Add `TopNotch` from `zats/TopNotch` pinned to `0.1.0`. - Present the notch view when the app scene becomes active. ## Proof <table> <tr> <td><img 
- changed files: not hydrated in gitcrawl

### #88581 feat(commands): add /name to rename the current session from chat

- author: BSG2000
- updated: 2026-06-12T14:43:09Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds a `/name <title>` chat slash command so users can name or rename the **current session** directly from any chat channel, instead of only through the web/admin session manager. This makes it easy to keep parallel sessions the
- changed files: not hydrated in gitcrawl

### #92477 fix: migrate watch app to single-target app

- author: zats
- updated: 2026-06-12T15:14:24Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Migrates the watch app from the deprecated WatchKit extension product to a single-target watchOS app. - Keeps the watch app bundle id and UI/runtime behavior unchanged. - Moves the existing watch Swift sources into the single w
- changed files: not hydrated in gitcrawl

