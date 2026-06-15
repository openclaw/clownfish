---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-024
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
  - "#93237"
  - "#56904"
  - "#93265"
  - "#59842"
  - "#59986"
  - "#92154"
  - "#61519"
  - "#93216"
  - "#87697"
  - "#88454"
  - "#88514"
  - "#88780"
  - "#88789"
  - "#88880"
  - "#88881"
  - "#88931"
  - "#88950"
  - "#89098"
  - "#89263"
  - "#89266"
  - "#89270"
  - "#89272"
  - "#89273"
  - "#89275"
  - "#89280"
cluster_refs:
  - "#93237"
  - "#56904"
  - "#93265"
  - "#59842"
  - "#59986"
  - "#92154"
  - "#61519"
  - "#93216"
  - "#87697"
  - "#88454"
  - "#88514"
  - "#88780"
  - "#88789"
  - "#88880"
  - "#88881"
  - "#88931"
  - "#88950"
  - "#89098"
  - "#89263"
  - "#89266"
  - "#89270"
  - "#89272"
  - "#89273"
  - "#89275"
  - "#89280"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.199Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 24

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93237 Fix Mattermost open DM validation

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: mattermost, cli, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:21:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - reject Mattermost `dmPolicy="open"` without wildcard `allowFrom` in config validation - surface the same misconfiguration in Mattermost channel status - include DM drop reason/hint in Mattermost monitor logs ## Root Cause Mattermost's Zod schema a

### #56904 feat(plugins): add guard delivery and subagent review hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:24:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the current hook surface can gate tool execution, but it cannot synchronously guard tool results before the agent sees them and it has no explicit pre-spawn / pre-return subagent review phases. - Why it matters: phase 1-3 guard work needs

### #93265 feat(onboard): streamline setup with agent-assisted configuration

- bucket: maintainer_owned
- author: fuller-stack-dev
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, cli, scripts, commands, docker, agents, size: XL, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author, extensions: copilot
- gitcrawl snapshot updated: 2026-06-15T11:28:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Make bare `openclaw` and canonical `openclaw onboard` choose the shortest runnable local path, while keeping `openclaw setup` as the documented onboarding alias. - Offer migration from supported agent environments before separate model setup, keep

### #59842 fix(gateway): cap authenticated websocket identities

- bucket: maintainer_owned
- author: eleqtrizit
- author association: MEMBER
- draft: no
- assignees: jacobtomlinson
- labels: gateway, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:29:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Cap authenticated gateway websocket sessions per device identity instead of moving every successful handshake into an unbounded shared client set. - Keep device-less authenticated sessions inside the existing pre-auth budget so shared-auth clients

### #59986 refactor(plugins): add lane-oriented channel interface

- bucket: maintainer_owned
- author: huntharo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: msteams, channel: slack, channel: telegram, maintainer, channel: feishu, size: XL, P2, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-15T11:30:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: plugin-facing channel runtime and interactive APIs were still shaped around channel-specific surfaces, which pushed plugins toward Telegram/Discord/Slack-specific logic. - Why it matters: that 

### #92154 Gate private QQBot group commands

- bucket: maintainer_owned
- author: sliverp
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: maintainer, size: L, channel: qqbot, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-15T11:31:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add QQBot-local command visibility classification for OpenClaw core slash commands. - Add per-group `commandLevel` config alongside `requireMention`: - `all`: allow all core slash commands and group-safe QQBot plugin slash commands in the group. -

### #61519 CI: report circular dependencies in PRs

- bucket: maintainer_owned
- author: huntharo
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:31:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: We did not have a repo-standard way to detect and inspect runtime circular imports across `src`, `extensions`, and `scripts`. - Why it matters: These cycles can drag large strongly connected co

### #93216 fix(plugins): run message_sending on all channel agent-reply deliveries (#92374)

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: amknight
- labels: channel: telegram, maintainer, size: L, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T11:36:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92374. The `message_sending` plugin hook was silently **bypassed** whenever a channel supplied its own `dispatcherOptions.beforeDeliver`. The dispatcher composed the canonical `buildMessageSendingBeforeDeliver` gate only into the **global** `

### #87697 fix(auth): clear stale provider cooldowns after reauth

- bucket: maintainer_owned
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: altaywtf
- labels: commands, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:36:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allow billing cooldown probes when configured model fallbacks share the same unavailable auth-profile path, instead of treating any configured fallback as a real recovery path. - Clear stale provider auth-profile cooldown/disabled state after succ

### #88454 Store restart recovery delivery routes in SQLite

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, agents, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:37:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move restart-recovery delivery route metadata into `openclaw-state` SQLite, keyed by session store path/session key with run + session ownership. - Keep runtime recovery SQLite-only; old `sessions.json` restart recovery fields are stripped from no

### #88514 fix(gateway): avoid default provider auth startup prewarm

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:37:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR stops the gateway from running the provider-auth warm sweep by default during startup. The issue report shows Docker/WSL2 gateway event-loop starvation, local RPC timeouts, and a 284s provider-auth prewarm on 2026.5.22; current main had move

### #88780 fix(check): clean ingress queue lint blockers

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:38:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Remove lint-invalid casts/generic JSON helper in the SQLite ingress queue implementation. - Remove an empty object-spread fallback in plugin state queue construction. - Leaves the pending duplicate test narrowing to current `main`, where that fix ha

### #88789 feat(agents): auto-trim lean local tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:38:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Adds `agents.*.experimental.localModelLean: "auto"` so lean local tool trimming activates only for models/effective context caps at 64K tokens or smaller. - Threads the effective context cap through embedded attempts, tool construction, `/tools`, an

### #88880 fix(agents): project nullable tool schemas for providers

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: L, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:38:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - project nullable and string-literal tool schemas into provider-compatible shapes before sending runtime tool schemas to providers - keep unsupported dynamic-schema diagnostics on the raw serialized schema so projection cannot hide a blocker - pres

### #88881 fix(agents): trim media tools in lean mode

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:38:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - trim additional heavyweight optional tools from `localModelLean`: media generation, voice, and PDF alongside browser, cron, and message - keep image-understanding available so lean local agents can still inspect inbound images when configured - do

### #88931 fix(agents): cap tool search fanout in lean mode

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, agents, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:39:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - make Tool Search config resolution agent/session-aware so localModelLean agents get smaller implicit search fanout - default lean Tool Search results to 4 and max to 8 while preserving explicit searchDefaultLimit/maxSearchLimit - cover resolver and 

### #88950 fix(plugins): ignore throwing provider policy hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:39:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - wraps bundled provider-policy public-artifact hooks so a throwing hook is ignored instead of poisoning provider/config resolution - logs the plugin id and hook name when a bundled policy hook fails - preserves existing no-op short-circuit semantic

### #89098 fix(gateway): guard tools catalog descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:39:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard Gateway `tools.catalog` rendering against unreadable plugin tool descriptor getters - quarantine malformed plugin tool factory results before manifest policy, denylist, metadata, or descriptor-cache paths read them - materialize validated pl

### #89263 fix(plugin-sdk): reject malformed static tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, cli, scripts, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:39:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - harden `defineToolPlugin` static tool descriptors so poisoned/malformed entries are skipped with diagnostics instead of crashing plugin definition or registering unsafe defaults - surface malformed static descriptor diagnostics through `openclaw p

### #89266 fix(doctor): harden runtime tool schema findings

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:39:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Quarantine primitive/array runtime tool descriptors before provider normalization so invalid entries cannot be normalized into apparently valid schemas. - Sanitize plugin-controlled runtime tool schema diagnostics before rendering doctor health fi

### #89270 fix(agents): sanitize provider tool schema logs

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:40:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Sanitize provider/runtime tool-schema diagnostic warning text and structured log metadata. - Avoid reading plugin-owned `tool.name` directly while logging diagnostics; unreadable names now fall back to `tool[index]`. - Preserve the existing 12-vio

### #89272 fix(doctor): sanitize bundle MCP schema diagnostics

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:40:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Sanitize bundle MCP runtime diagnostic server names before rendering doctor health finding messages and paths. - Sanitize bundle MCP diagnostic messages before rendering doctor health finding requirements. - Add focused coverage for ANSI/newline M

### #89273 fix(doctor): sanitize provider catalog findings

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:40:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Sanitize provider catalog doctor finding messages, targets, plugin paths, and requirements before rendering. - Sanitize provider catalog discovery failure requirements, which bypass the shared provider catalog finding helper. - Add focused coverag

### #89275 fix(agents): quarantine malformed normalized tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:40:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Re-project provider/runtime-plan normalized tools before runtime metadata preservation. - Quarantine malformed normalized outputs, including tools with unreadable `name` fields, instead of letting metadata preservation crash the turn. - Preserve c

### #89280 fix(agents): skip unreadable MCP catalog tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:40:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot readable bundle MCP catalog tool descriptor fields before sorting/materializing them. - Skip unreadable or invalid catalog tool descriptors instead of letting one bad MCP entry abort all materialization. - Add focused coverage that a pois

