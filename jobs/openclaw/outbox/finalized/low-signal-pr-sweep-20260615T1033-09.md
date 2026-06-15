---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-09
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
  - "#88869"
  - "#78606"
  - "#78544"
  - "#79339"
  - "#77921"
cluster_refs:
  - "#88869"
  - "#78606"
  - "#78544"
  - "#79339"
  - "#77921"
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

# Low-Signal PR Sweep 9

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #88869 Follow up MiniMax M3 pricing and PDF extraction defaults

- author: NianJiuZst
- updated: 2026-06-01T03:27:01Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary MiniMax M3 support already landed separately. This PR only covers the remaining MiniMax M3 follow-up work. - add MiniMax M3 tiered pricing metadata and update shared cost calculation so tiered provider pricing is applied at runti
- changed files: not hydrated in gitcrawl

### #78606 fix: keep origin-only approval delivery out of DMs

- author: jar-vision-ai
- updated: 2026-06-01T05:07:33Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - keep native approval delivery in origin-only mode from falling back to approver DMs when the origin target cannot be resolved - preserve approver-DM delivery for DM-preferred/native DM modes - update approval delivery tests, Di
- changed files: not hydrated in gitcrawl

### #78544 fix(gateway): fail hot reload when channel stop times out

- author: pronzcw
- updated: 2026-06-01T05:10:10Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add a `failOnTimeout` stop option for channel shutdowns - make gateway hot reload fail fast when a channel does not stop within the abort timeout - leave timed-out channel runtime marked as not running instead of preserving a f
- changed files: not hydrated in gitcrawl

### #79339 fix: preserve final media reply directives

- author: TnzGit
- updated: 2026-06-01T05:11:42Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Flush the streaming reply directive accumulator on final empty block chunks so trailing `MEDIA:/path` lines held in `pendingTail` are not dropped. - Parse phase-aware final-answer text at `text_end` so providers that only surfa
- changed files: not hydrated in gitcrawl

### #77921 feat(inworld): default to inworld-tts-2 (Realtime TTS-2)

- author: cshape
- updated: 2026-06-01T05:13:36Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds `inworld-tts-2` to the bundled Inworld TTS provider as the new default, while keeping `inworld-tts-1.5-max` and `inworld-tts-1.5-mini` as valid options. Updates types, the plugin manifest, and docs accordingly. ## Changes - 
- changed files: not hydrated in gitcrawl

