---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-047
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
  - "#72972"
  - "#74120"
  - "#74529"
  - "#73138"
  - "#74955"
  - "#74735"
  - "#73197"
  - "#74783"
  - "#73594"
  - "#74232"
cluster_refs:
  - "#72972"
  - "#74120"
  - "#74529"
  - "#73138"
  - "#74955"
  - "#74735"
  - "#73197"
  - "#74783"
  - "#73594"
  - "#74232"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.605Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 47

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #72972 fix(feishu): scope sequential queue by group session

- bucket: needs_proof
- author: AaronLuo00
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:57:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix Feishu inbound queue scoping so grouped sessions are not still serialized at the whole-chat level. When `groupSessionScope` is configured as `group_topic` or `group_topic_sender`, Feishu conversations are already routed into separate sessions, b

### #74120 fix(failover): classify 'budget exceeded' proxy errors as billing

- bucket: needs_proof
- author: luckylhb90
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:57:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Problem: OpenAI-compatible proxies return "Budget has been exceeded" on quota/budget overruns, but this message isn't in the billing pattern list, so it gets misclassified as a format error (on HTTP 400) or a generic rate limit (on HTTP 429). Why it

### #74529 fix(matrix): rewrite /keys/upload OTK ID-collision 400 to a synthetic 200

- bucket: needs_proof
- author: nklock
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:58:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Rewrite /keys/upload OTK ID-collision 400 to a synthetic 200 ## What this PR does Unblocks Matrix E2EE bootstrap on accounts where `matrix-rust-sdk` regenerates a one-time-key with an ID it has already published. Before this change, the OTK upload determinis

### #73138 Add observe-first MCP runtime guardrails

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-30T04:58:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds observe-first MCP runtime guardrails around bundle MCP tool execution. - Tracks per-tool circuit state, budget/rate observations, and runtime snapshots. - Keeps production behavior observe-only; fail-closed enforcement is test-helper-only and

### #74955 [AI-assisted] fix(outbound): run tagged TTS hook on message tool sends

- bucket: needs_proof
- author: performlikemj
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:58:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## TL;DR The `mcp__openclaw__message` tool (and the equivalent `openclaw message send` CLI / gateway `send` RPC) ignored `[[tts:text]]...[[/tts:text]]` markup — only the auto-reply path ran the TTS hook. Cron jobs that wrap a sentence in those tags to get a vo

### #74735 feat(bootstrap): support session-scoped extra files

- bucket: stale_unassigned
- author: presidenzo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:58:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `bootstrap-extra-files` could only apply one global extra file set, and explicitly configured extra files were still constrained by the default bootstrap basename list. - Why it matters: operators with long-lived group/session workflows n

### #73197 fix(runtime): prevent resource leaks and silent failures [AI-assisted]

- bucket: needs_proof
- author: Spongeacer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:58:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix 3 resource leaks / crash paths and 1 silent failure mode discovered during a stability audit. ## Changes | File | Problem | Fix | |------|---------|-----| | `media/server.ts` | `setInterval` handle never saved; leaks on every config reload | Sav

### #74783 Add gateway health connection telemetry

- bucket: needs_proof
- author: trialanderrorstudios
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:58:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add per-client `connection` telemetry to authenticated WebSocket `health` responses. - Track WebSocket protocol ping/pong RTT on each gateway client without mutating the cached global health snapshot. - Document `health.connection` and add tests f

### #73594 feat(openrouter): inject cache_control for closed-source qwen models

- bucket: needs_proof
- author: simpx
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:58:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Extend the existing OpenRouter cache_control wrapper to cover Alibaba's closed-source qwen commercial line (`qwen3-max` / `qwen3-plus` / `qwen3-flash` and future versioned tiers), in addition to `anthropic/*` models. ## Why this is safe Closed-sourc

### #74232 fix: log and inject synthetic error results for unknown tool calls

- bucket: needs_proof
- author: none0663
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:58:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add WARN logging when unknown/invalid tool calls are silently dropped by the session guard, recording tool name, ID, and drop reason - Inject synthetic `isError: true` toolResult into the transcript so the model receives explicit feedback ("Tool X

