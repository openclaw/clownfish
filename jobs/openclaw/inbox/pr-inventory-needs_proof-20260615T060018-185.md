---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-185
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
  - "#62092"
  - "#62070"
  - "#61576"
  - "#62552"
  - "#62733"
  - "#62021"
  - "#61807"
  - "#61735"
  - "#90617"
  - "#62157"
cluster_refs:
  - "#62092"
  - "#62070"
  - "#61576"
  - "#62552"
  - "#62733"
  - "#62021"
  - "#61807"
  - "#61735"
  - "#90617"
  - "#62157"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.676Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 185

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #62092 memory-core: don't abort auto provider selection on auth/config errors

- bucket: needs_proof
- author: ricardoshiroma14
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-06T04:45:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Problem When `memorySearch.provider` is set to `auto` (the default), the first remote embedding provider candidate can throw on missing API key / unauthorized errors. Because the adapter doesn't always provide `shouldContinueAutoSelection`, this aborts aut

### #62070 fix: sanitize OpenAI compat gateway images and surface streaming errors

- bucket: needs_proof
- author: htplbc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:45:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #59913 - **Bug 1**: Gateway-provided images (via OpenAI compat `/v1/chat/completions` `image_url` parts) bypassed the sanitization/resize pipeline. `detectAndLoadPromptImages()` early-returned `existingImages` unsanitized when no image refs we

### #61576 feat: Rust/GTK4 Linux companion app (#75, alternative track)

- bucket: needs_proof
- author: 00xglitch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:45:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a native Linux desktop companion under `apps/linux-gtk/` written in **Rust + GTK4 + libadwaita** - Alternative-track contribution for [#75](https://github.com/openclaw/openclaw/issues/75) alongside @tiagonix's C/GTK4 work at `apps/linux/` — d

### #62552 fix(acp): stabilize bridge session keys

- bucket: needs_proof
- author: kong373
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:46:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # PR: fix(acp): stabilize bridge session keys ## Summary - Use `acp-bridge:<uuid>` for ACP bridge fallback sessions created without metadata. - Match pending ACP prompts across raw and Gateway-canonical session keys, e.g. `acp-bridge:<uuid>` and `agent:main:ac

### #62733 Fix local memory embedding VRAM fallback and logging file resolution

- bucket: needs_proof
- author: nSPIR3D
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes two issues in local OpenClaw setups: 1. Logging could ignore a valid configured `logging.file` path because the logging runtime depended on a fragile built-module require path. 2. Local memory embeddings could fail hard on VRAM-fit initia

### #62021 fix(macos): rewrite wildcard A2UI host to loopback

- bucket: needs_proof
- author: ThanhNguyxn07
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes macOS node A2UI URL resolution by rewriting wildcard canvas hosts (`0.0.0.0` / `::`) to loopback before appending the A2UI path. - Keeps the change minimal and isolated to macOS node runtime URL handling, so existing non-wildcard host behavi

### #61807 fix(feishu): extract video thumbnail via ffmpeg for native video bubbles

- bucket: needs_proof
- author: raylanlin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #38554 — Feishu video messages now display a native cover thumbnail instead of a plain file attachment. ## Problem Feishu's `media` message type requires both `file_key` **and** `image_key` in the content payload. Without `image_key`, the vide

### #61735 fix: apply Gemini schema cleaning when modelId indicates Gemini behind proxy

- bucket: needs_proof
- author: pod4g
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:46:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix HTTP 400 errors when using Gemini through OpenAI-compatible proxies (e.g., NewAPI, OneAPI) - Add `modelId` check to Gemini provider detection in `normalizeToolParameterSchema()`, so `cleanSchemaForGemini()` triggers even when `modelProvider` i

### #90617 Add Entroly context compression skill

- bucket: needs_proof
- author: juyterman1000
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: low-signal-docs, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:46:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this PR adds Adds an **Entroly** skill to the skills directory — a local context compression engine that reduces LLM input tokens by 70-95% on large repos. ### How it works - Ranks repo files by query relevance (BM25 + entropy + dependency graph) - Sel

### #62157 fix: only drop streamed payloads, not all final payloads

- bucket: needs_proof
- author: ericyoshida
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:46:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When block streaming is enabled (`blockStreamingDefault: "on"`), text generated by the agent **before** tool calls is correctly streamed to the user. However, text generated **after** tool calls (final payloads) is silently dropped and never deliver

