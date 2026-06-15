---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-173
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
  - "#63578"
  - "#63571"
  - "#63593"
  - "#63633"
  - "#63924"
  - "#62545"
  - "#65381"
  - "#63636"
  - "#64832"
  - "#63662"
cluster_refs:
  - "#63578"
  - "#63571"
  - "#63593"
  - "#63633"
  - "#63924"
  - "#62545"
  - "#65381"
  - "#63636"
  - "#64832"
  - "#63662"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.675Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 173

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #63578 fix(message): hydrate send action media for plugin channels

- bucket: needs_proof
- author: OwenYWT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-05T05:00:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hydrate attachment payloads for plugin-handled `send` actions when callers provide `media`, `path`, `filePath`, `mediaUrl`, or `fileUrl`. ## Changes - allow `hydrateAttachmentParamsForAction()` to hydrate `send` actions when attachment hints are pre

### #63571 feat(web-search): add explicit provider fallback support

- bucket: needs_proof
- author: scriptsth
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-05T05:00:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When a provider is explicitly configured with a fallbacks array, retry the next configured provider on any error instead of failing immediately. Without fallbacks, explicit mode keeps existing fail-fast behavior. ## Summary Describe the problem and fix in 2–5 

### #63593 fix(cli): avoid false downgrade prompt for latest tag

- bucket: needs_proof
- author: Andy312432
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-05T05:00:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw update` could treat `latest` as a downgrade target when the current installed version was a date-style release and the tag lookup did not resolve to a concrete version. - Why it matters: this blocks or misleads users on older in

### #63633 fix: support socks5/socks4 proxy via undici Socks5ProxyAgent

- bucket: needs_proof
- author: heichaowo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-05T05:01:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes openclaw/openclaw#60472 makeProxyFetch() previously passed any proxy URL directly... No new dependencies required. ## Summary - **Problem:** `makeProxyFetch()` passes any proxy URL directly to undici's `ProxyAgent`, which only supports HTTP/HTTPS schemes

### #63924 fix: 4 bug fixes for feishu, health, models, and skills

- bucket: needs_proof
- author: hubbyxiao-cpu
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: commands, agents, channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-05T05:01:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 4 bug fixes addressing stability issues in OpenClaw 2026.4.9. ### 1. fix(feishu): use buildChannelConfigSchema instead of hand-written JSON Schema - **Problem**: Hand-written JSON Schema only listed 11 properties for accounts, while the Zod schema d

### #62545 docs: replace Anthropic model with provider placeholder (#62529)

- bucket: needs_proof
- author: MadanChaollaPark
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-05T05:01:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary Docs hardcoded anthropic/claude-opus-4-6 as the example model, but since our main README now is model agnostic we should change our other docs accordingly. Why it matters: New users may not realize they can use other providers/models. What changed: Rep

### #65381 fix(status): include cache tokens in cost estimate

- bucket: needs_proof
- author: OwenYWT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-05T05:02:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - include cache read/write counters in the `/status` cost estimate so cache usage appears in the CLI breakdown - propagate the cache counters into the unit GST cost estimate when they are present ## Testing - node scripts/run-vitest.mjs run src/auto

### #63636 fix(compaction): guard malformed token estimation

- bucket: needs_proof
- author: GaosCode
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-05T05:02:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: long-lived `main` sessions could crash before provider dispatch when compaction token estimation hit malformed replay history and `estimateTokens()` read missing `.length` fields. - Why it matters: once a session contained one malformed h

### #64832 fix(agents): archive orphaned isolated-session transcripts after rotation

- bucket: needs_proof
- author: alexander-applyinnovations
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-05T05:02:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Complement to #65203. That PR cleared `sessionFile` on rotation so each `isolatedSession: true` run writes to a fresh path — but the *prior* transcript file at the old path is now orphaned: nothing in the store references it, and `cleanupArchivedSes

### #63662 feat(memory-core): configurable MEMORY.md injection mode + per-turn autoRecall

- bucket: needs_proof
- author: ZardLi1115
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, scripts, agents, size: L, extensions: qa-lab, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-05T05:03:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `agents.defaults.memoryInjection` with `full`, `core-only`, and `recall-only` modes - add `agents.defaults.memorySearch.autoRecall` for per-turn memory recall injection in `memory-core` - update memory docs and schema metadata for the new conf

