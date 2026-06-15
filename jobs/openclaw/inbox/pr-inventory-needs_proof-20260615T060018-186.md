---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-186
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - maintainer_signal
  - active_author_followup
  - technical_correctness_judgment
canonical: []
candidates:
  - "#61973"
  - "#61624"
  - "#62710"
  - "#63061"
  - "#62195"
  - "#63710"
  - "#61522"
  - "#62201"
  - "#60830"
  - "#62822"
cluster_refs:
  - "#61973"
  - "#61624"
  - "#62710"
  - "#63061"
  - "#62195"
  - "#63710"
  - "#61522"
  - "#62201"
  - "#60830"
  - "#62822"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.676Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 186

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #61973 feat(update): add `openclaw update review` pre-upgrade risk assessment

- bucket: needs_proof
- author: ziggy2socks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:46:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this adds `openclaw update review` — a read-only pre-upgrade risk assessment subcommand. Run it before `openclaw update` to understand what changed and whether it is safe to upgrade right now. ``` openclaw update review openclaw update review --json op

### #61624 feat(whatsapp): add dmRequireMention for DM trigger gating

- bucket: needs_proof
- author: mubbie
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: S, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:46:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `dmRequireMention` config option to WhatsApp channel (and base `ExtensionChannelConfig`) that gates DM replies behind mention-pattern matching - Reuses existing `mentionPatterns` + `resolveMentionGating` infrastructure — no new pattern config

### #62710 fix(auth): stop new sessions inheriting auto-selected auth profile overrides

- bucket: needs_proof
- author: zeynalnia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-06T04:46:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: New sessions inherit `authProfileOverride` from rate-limited or cooldown backup profiles instead of using the default/best available profile. The auto-failover override persists across gateway restarts, `/new`, `/reset`, and manual sessio

### #63061 CLI: align profile state dir with OPENCLAW_HOME

- bucket: needs_proof
- author: wpq3142
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:46:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Problem When both `OPENCLAW_HOME` (physical isolation) and `--profile` / `OPENCLAW_PROFILE` are used, the daemon resolves state under `$OPENCLAW_HOME/.openclaw`, but the CLI forced `$OPENCLAW_HOME/.openclaw-<profile>`, so CLI commands could not reach the r

### #62195 feat(cron): add preHook gate for pre-run script checks

- bucket: needs_proof
- author: scottgl9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, agents, size: L, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an optional `preHook` configuration for cron jobs and heartbeat triggers that runs a shell command before agent execution. This gates agent runs on system preconditions (disk space, network, API availability) — eliminating wasteful runs on reso

### #63710 fix(image): mixed-source image input for vision-capable models

- bucket: needs_proof
- author: xiaoHEI-312
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: In WebUI, when a prompt mixes an uploaded inline image with an explicit HTTP(S) image URL, only the inline image is included in the first native vision request. The HTTP(S) URL remains plain text and is effectively ignored unless the mode

### #61522 config/io: add proper logging for IO error handling

- bucket: needs_proof
- author: soumojit-D48
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Config IO catches errors with empty catch blocks, making it impossible to debug configuration issues (disk full, permission denied, locked files) - **Why it matters:** Operators cannot see why config operations fail; silent data loss 

### #62201   fix: mitigate stale toolResult replay pollution

- bucket: needs_proof
- author: avatasia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-06T04:46:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This change mitigates stale diagnostic `toolResult` replay pollution in session history. It adds structured replay metadata for transient environment-diagnostic tool results, then omits stale results during replay when they are either: - older than 

### #60830 fix(agents): detect empty provider responses as failures, improve Telegram error routing

- bucket: needs_proof
- author: garnetlyx
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:46:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `EmptyResponseError` typed class in `model-fallback.ts`; replaces the fragile string-matched `new Error("Empty response content received from provider")` - In `runFallbackAttempt`: treats a raw provider response with `content: []` and no `met

### #62822 Speed up Discord permission audits

- bucket: needs_proof
- author: RONNYKHALIL
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:47:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - speed up the Discord permission audit path that feeds `channels.status` - audit Discord channel permissions with a small bounded worker pool while preserving output order - cache Discord bot and guild/member permission context for 30 seconds to av

