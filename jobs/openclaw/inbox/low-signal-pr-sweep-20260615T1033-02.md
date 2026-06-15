---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-02
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
  - "#82618"
  - "#82894"
  - "#82870"
  - "#83137"
  - "#83458"
cluster_refs:
  - "#82618"
  - "#82894"
  - "#82870"
  - "#83137"
  - "#83458"
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

# Low-Signal PR Sweep 2

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #82618 feat(edit): populate details.diff so HTML export renders edit changes (#82015)

- author: therahul-yo
- updated: 2026-05-16T20:02:04Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Closes #82015. The export-html template at `src/auto-reply/reply/export-html/template.js` already knows how to render `result.details.diff` as a coloured diff block (case `"edit"` around L1143-L1162 — added/removed/context lines 
- changed files: not hydrated in gitcrawl

### #82894 fix(gateway): prewarm agent runtime before ready

- author: hansolo949
- updated: 2026-05-17T04:32:57Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Prewarm the first-turn agent runtime import path during Gateway sidecar startup, before startup-gated Gateway methods are released. - Keep the prewarm import-only: it does not submit a model request, touch user transcripts, or 
- changed files: not hydrated in gitcrawl

### #82870 fix(agent): keep tool media authoritative in replies

- author: Merlinzy
- updated: 2026-05-17T07:39:38Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Keep tool-produced media authoritative when an assistant reply also contains `MEDIA:` directives, so stale or invented assistant paths cannot override real tool artifacts. - Preserve attempt-level tool media after pending media
- changed files: not hydrated in gitcrawl

### #83137 Add Peekaboo tool and local skill updates

- author: alesanabriav7
- updated: 2026-05-17T15:06:05Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Add a native `peekaboo` agent tool for macOS visual UI automation, screenshots, annotated UI maps, window targeting, and input actions. - Add gateway hardening for connect-error reporting and stuck-channel stop timeouts that re
- changed files: not hydrated in gitcrawl

### #83458 fix(feishu): preserve ACP topic conversation bindings

- author: veryoung
- updated: 2026-05-18T07:47:51Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Refreshes #50943 onto current `openclaw/main` as a narrow Feishu plugin fix. - Adds Feishu `messaging.resolveInboundConversation` so ACP thread binding uses plugin-owned topic conversation grammar. - Covers topic, sender-scoped
- changed files: not hydrated in gitcrawl

