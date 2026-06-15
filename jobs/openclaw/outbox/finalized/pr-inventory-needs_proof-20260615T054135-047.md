---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-047
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
  - "#62740"
  - "#62092"
  - "#62552"
  - "#62733"
  - "#62021"
  - "#90617"
  - "#61973"
  - "#61624"
  - "#62822"
  - "#62528"
cluster_refs:
  - "#62740"
  - "#62092"
  - "#62552"
  - "#62733"
  - "#62021"
  - "#90617"
  - "#61973"
  - "#61624"
  - "#62822"
  - "#62528"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.455Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 47

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #62740 fix(zalo): check response.ok before parsing JSON body

- bucket: needs_proof
- author: oliviareid-svg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalo, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:45:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `callZaloApi` in `extensions/zalo/src/api.ts` calls `response.json()` without checking `response.ok` - On HTTP errors (5xx, gateway timeouts), the response body may be HTML or plain text, causing a `SyntaxError: Unexpected token` instead of a clea

### #62092 memory-core: don't abort auto provider selection on auth/config errors

- bucket: needs_proof
- author: ricardoshiroma14
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-06T04:45:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Problem When `memorySearch.provider` is set to `auto` (the default), the first remote embedding provider candidate can throw on missing API key / unauthorized errors. Because the adapter doesn't always provide `shouldContinueAutoSelection`, this aborts aut

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

### #90617 Add Entroly context compression skill

- bucket: needs_proof
- author: juyterman1000
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: low-signal-docs, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:46:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this PR adds Adds an **Entroly** skill to the skills directory — a local context compression engine that reduces LLM input tokens by 70-95% on large repos. ### How it works - Ranks repo files by query relevance (BM25 + entropy + dependency graph) - Sel

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

### #62822 Speed up Discord permission audits

- bucket: needs_proof
- author: RONNYKHALIL
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:47:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - speed up the Discord permission audit path that feeds `channels.status` - audit Discord channel permissions with a small bounded worker pool while preserving output order - cache Discord bot and guild/member permission context for 30 seconds to av

### #62528 Gateway: add /hooks/message ingress with webhook auth parity

- bucket: needs_proof
- author: vrknetha
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:47:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a generic webhook ingress endpoint at `POST /hooks/message` with auth + safety parity to existing webhook routes, and enforces single-responsibility boundaries between `/hooks/agent` and `/hooks/message`. Closes #62526. ## Single-Responsibility

