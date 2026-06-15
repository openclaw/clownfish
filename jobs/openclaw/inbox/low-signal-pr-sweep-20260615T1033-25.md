---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-25
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
  - "#80627"
  - "#82253"
  - "#91239"
  - "#91408"
  - "#88743"
cluster_refs:
  - "#80627"
  - "#82253"
  - "#91239"
  - "#91408"
  - "#88743"
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

# Low-Signal PR Sweep 25

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #80627 fix: improve error messages for skills update argument validation

- author: Sujabaral
- updated: 2026-06-13T06:27:52Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Improves validation error messages for invalid `openclaw skills update` usage. ## Changes - Adds clearer error when `skills update` is called without a skill slug or `--all`. - Adds clearer error when both a skill slug and `--all
- changed files: not hydrated in gitcrawl

### #82253 feat(slack): support per-channel replyToMode

- author: truiem-bot
- updated: 2026-06-13T06:28:43Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add `replyToMode` to Slack per-channel config/schema/types and generated channel metadata - resolve channel config before account/chat-type fallback when determining Slack reply/thread mode - pass resolved channel config throug
- changed files: not hydrated in gitcrawl

### #91239 fix(opencode-go): complete catalog, onboarding, and tiered pricing

- author: samson910022
- updated: 2026-06-13T06:43:14Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Closes #91238. This PR completes the OpenCode Go catalog repair initially attempted in #91351. The prior fix was incomplete — it only added Flat Pricing assertions in test files without implementing the official tiered pricing in
- changed files: not hydrated in gitcrawl

### #91408 feat(channels/acp): support ACP bindings for direct-message peers

- author: pablospe
- updated: 2026-06-13T07:22:57Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Motivation OpenClaw can route a conversation to an **ACP backend** — an external agent runtime (the `acpx` agents: claude-code, codex, gemini, droid, opencode, or any custom ACP runtime) — via a `type:"acp"` binding. On Telegram, a `type
- changed files: not hydrated in gitcrawl

### #88743 docs(sms): add Twilio A2P delivery guidance

- author: clawSean
- updated: 2026-06-13T08:46:30Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Add a short US A2P / 10DLC delivery section to the SMS channel docs. - Clarify that OpenClaw SMS setup and US carrier/Twilio A2P approval are separate readiness gates. - Add troubleshooting guidance for Twilio sends that are ac
- changed files: not hydrated in gitcrawl

