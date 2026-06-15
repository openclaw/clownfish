---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-068
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
  - "#44288"
  - "#44884"
  - "#46303"
  - "#46502"
  - "#47277"
  - "#48940"
  - "#49063"
  - "#85540"
  - "#49869"
  - "#86018"
  - "#52951"
  - "#54183"
  - "#86646"
  - "#86826"
  - "#87076"
  - "#56869"
  - "#60048"
  - "#61464"
  - "#68278"
  - "#68389"
  - "#69562"
  - "#69618"
  - "#70192"
  - "#70306"
  - "#70518"
cluster_refs:
  - "#44288"
  - "#44884"
  - "#46303"
  - "#46502"
  - "#47277"
  - "#48940"
  - "#49063"
  - "#85540"
  - "#49869"
  - "#86018"
  - "#52951"
  - "#54183"
  - "#86646"
  - "#86826"
  - "#87076"
  - "#56869"
  - "#60048"
  - "#61464"
  - "#68278"
  - "#68389"
  - "#69562"
  - "#69618"
  - "#70192"
  - "#70306"
  - "#70518"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.207Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 68

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #44288 feat(backup): add exclude patterns, --smart-exclude, and protected path guards [ai]

- bucket: needs_proof
- author: brettdavies
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:10:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `openclaw backup create` has no way to exclude files/directories, causing (1) bloated archives from `venvs/`, `models/`, `logs/`, `completions/` and (2) silent backup stalls on installations with 4GB+ state directories (#42273, #41830

### #44884 security: gateway public network hardening

- bucket: needs_proof
- author: yeyanle6
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, commands, size: XL, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:10:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements comprehensive security hardening for OpenClaw Gateway when exposed to public networks (e.g. `https://openclaw.allegro.earth/`). The existing security mechanisms (non-loopback auth enforcement, auth rate limiting, CORS checks) leave gaps t

### #46303 fix: drain inbound debounce buffer and followup queues before SIGUSR1 reload

- bucket: needs_proof
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: bluebubbles, channel: discord, channel: msteams, channel: slack, channel: whatsapp-web, app: web-ui, gateway, cli, agents, channel: feishu, size: XL, extensions: memory-wiki, triage: dirty-candidate, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:10:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `config.patch` triggers a SIGUSR1 restart, two in-memory message buffers are silently wiped, causing inbound messages to be permanently lost: 1. **Inbound debounce buffers** — per-channel debounce timers (`createInboundDebouncer` closure-local 

### #46502 Rescue: add watchdog core service and cron engine

- bucket: needs_proof
- author: shichangs
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:10:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw had no built-in isolated rescue watchdog that could detect an unhealthy managed gateway profile and repair it without going through the failing primary session. - Why it matters: the larger rescue-watchdog feature is hard to revi

### #47277 feat: add user-specific memory isolation

- bucket: needs_proof
- author: jung-geun
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, agents, size: XL, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:11:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds user-specific memory isolation to OpenClaw, enabling per-user memory files in multi-user environments. ## Changes ### Core Feature - **MemoryIsolationConfig** type added to `src/config/types.memory.ts` - `isolation.enabled` (default: `true`) to

### #48940 ACP: add gateway-owned node-backed runtime

- bucket: needs_proof
- author: jorgensandhaug
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: googlechat, gateway, channel: feishu, size: XL, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:11:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw did not yet have a complete **node-backed ACP runtime** where the gateway owns the durable state and a paired node acts only as the execution worker. - Why it matters: without that split, restart/replay/reconnect behavior is too 

### #49063 Telegram: allow native channel commands in explicitly allowed chats

- bucket: needs_proof
- author: sonim1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:12:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Telegram `channel_post` updates could carry regular text, but native slash commands such as `/status` were not authorized correctly in channel relay setups. - Why it matters: OpenClaw bot-to-bo

### #85540 feat(telegram): add botMessagePolicy to filter inbound messages from other bots

- bucket: needs_proof
- author: coyotefreman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:12:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds optional `telegram.botMessagePolicy` config (default `"allow"`) that, when set to `"ignore"`, drops inbound messages where `from.is_bot=true`. Self-echoes are already filtered by the existing `from.id === ctx.me?.id` check immediately above the

### #49869 fix(nextcloud-talk): parse rich object file shares from webhook payload

- bucket: needs_proof
- author: VivoKrei
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: nextcloud-talk, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:12:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #29152 When a user shares a file or image in Nextcloud Talk, the bot webhook receives the message but the NC Talk plugin was not parsing the rich object parameters — so the agent never saw the attachment. NC Talk encodes file shares as rich ob

### #86018 Clarify QQBot passive group event wording

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, channel: qqbot, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:13:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Clarifies the QQBot group-message event comment to describe passive context collection and visible-reply gating without implying that non-mentioned group messages directly trigger agent replies. ## Scope Comment-only advisory cleanup. No runtime beh

### #52951 feat: add tools.fs.roots — per-agent filesystem roots with access modes

- bucket: needs_proof
- author: JuanRdBO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: googlechat, channel: imessage, channel: matrix, channel: mattermost, channel: signal, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, commands, agents, channel: feishu, size: XL, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:13:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `tools.fs.workspaceOnly` is binary, so operators cannot safely allow agents to read or write a specific host path outside the workspace without opening broader filesystem access. - Why it matters: multi-tenant and shared-gateway deploymen

### #54183 WhatsApp: add configurable send retry for transient network errors

- bucket: needs_proof
- author: hassansys2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:14:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #54103 ## Summary Adds configurable outbound send retry with exponential backoff for the WhatsApp channel, applied to all three send paths (text, media, poll). The retry is active by default with no config change needed. **What changed:** - `src/config/

### #86646 fix(ui): deduplicate assistant messages on chat.status final event

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:14:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #85755 ## Summary Fix duplicate assistant messages appearing in WebChat when `loadChatHistory` and the `final` chat event race. **Guard**: `isTailDuplicate` uses `messageDisplaySignature` to detect when the same message arrives via both history load and 

### #86826 fix(gateway): preserve raw external session aliases

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:15:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #86743. ## Summary Implements raw external session alias preservation to prevent session splitting when internal agent activity touches the same logical conversation. ## Changes - Added src/gateway/session-store-aliases.ts with alias resolution logic - U

### #87076 Skip QMD memory search when scope denies

- bucket: needs_proof
- author: GSUCAS
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:15:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - short-circuit QMD-backed `memory_search` when the current session is denied by `memory.qmd.scope` - return an empty successful result with `debug.skipped = "skipped_by_scope"` instead of opening the memory manager - keep the QMD manager's own scop

### #56869 feat(docker): add outbound proxy environment variable examples for Docker deployments

- bucket: needs_proof
- author: CodeTeamster
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, docker, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:15:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: feat(docker): add outbound proxy environment variable examples for Docker deployments - Add commented HTTP_PROXY, HTTPS_PROXY, and NO_PROXY variables to docker-compose.yml - Document how to set the proxy port to match the host's actual proxy - Improve cross-pl

### #60048 docs(memory): add memory system deep dive guide

- bucket: needs_proof
- author: neyric
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:16:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a comprehensive memory system deep dive guide, addressing #43032. ### Problem `docs/concepts/memory.md` covers basics (~600 words) but lacks depth on memory best practices, search optimization, lifecycle management, and advanced patterns. ### Ne

### #61464 Docker: add Mac migration and keep-awake helpers

- bucket: needs_proof
- author: ruslansv
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, docker, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:16:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Add operator helpers for Mac-hosted Docker deployments. ## Why Running OpenClaw in Docker on macOS is easier to operate if the repo includes a simple host-awake helper and a low-disruption backup/restore path for moving from an Intel Mac to Apple Silic

### #68278 fix(discord): honor explicit accountId token resolution in cron deliveries

- bucket: needs_proof
- author: zoneblaze
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:17:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - prevents explicit non-default Discord `accountId` sends from silently inheriting the default/top-level token - returns `source: none` when the explicit account has no token instead of falling back to default identity - adds regression coverage in 

### #68389 plugins: clarify allowlist warning when entries don't match discovered ids

- bucket: needs_proof
- author: lyfuci
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:17:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: When users set `plugins.allow` to a channel-style id (for example `["feishu"]`) instead of the real plugin id (`openclaw-lark`), the loader still emits `plugins.allow is empty; discovered non-bundled plugins may auto-load: ...` even thoug

### #69562 fix: validate cron announce account ids

- bucket: needs_proof
- author: iamlukethedev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #69618 feat(messages): add responseFooter and enrich /usage full

- bucket: needs_proof
- author: arminanton
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, app: web-ui, gateway, commands, size: XL, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary _AI-assisted PR. Prepared with AI assistance against a repo snapshot; targeted validation only. See Repro + Verification and Human Verification for exact coverage._ Describe the problem and fix in 2–5 bullets: - Problem: OpenClaw had a native `messa

### #70192 chore(observability): scope eslint/no-console rule to src with allowlist + mark FileReader listeners { once: true }

- bucket: needs_proof
- author: clivemoore
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Additive observability hygiene — one new lint rule + a small listener cleanup clarity fix. No runtime behavior change. **1. Scoped `eslint/no-console: error` rule** Enabled for `src/**/*.{ts,tsx}` (excluding test files) in `.oxlintrc.json`. Prevents

### #70306 fix(acp+gateway): clean final emit, fallback visibility, legacy unit resolve

- bucket: needs_proof
- author: nrubioru
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, cli, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Three related rough edges in ACP/Codex orchestration and gateway ops: 1. Parent sessions could fail to surface a coherent final answer after `sessions_spawn(runtime="acp")`. Mid-flight snippet flushes compacted whitespace and truncated aggressively,

### #70518 fix(config): add heartbeat skill allowlist

- bucket: needs_proof
- author: akai-shuuichi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: heartbeat runs currently inherit the target agent's full skill set, even when heartbeat only needs a small subset or none. - Why it matters: large skill catalogs inflate the skills prompt and waste input context on every heartbeat turn. -

