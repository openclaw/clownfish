---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T131654-015
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
  - "#89157"
  - "#89159"
  - "#89171"
  - "#89175"
  - "#89201"
  - "#89213"
  - "#89253"
  - "#89261"
  - "#89262"
  - "#91262"
  - "#89071"
  - "#91289"
  - "#89975"
  - "#92220"
  - "#84975"
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
  - "#89157"
  - "#89159"
  - "#89171"
  - "#89175"
  - "#89201"
  - "#89213"
  - "#89253"
  - "#89261"
  - "#89262"
  - "#91262"
  - "#89071"
  - "#91289"
  - "#89975"
  - "#92220"
  - "#84975"
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
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.474Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 15

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89157 docs: document reusable helper contracts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, channel: voice-call, app: web-ui, gateway, cli, commands, agents, maintainer, size: XL, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:59:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Continue the inline-comment pass after #88554, focused on declaration/API docs and runtime contract notes. - Document reusable CLI, Gateway, plugin SDK, channel, markdown, media, and voice-call helper surfaces without file headers or import-block 

### #89159 fix(plugin-sdk): validate tool plugin names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:59:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Validate tool plugin tool definitions at the consumed list boundary, not only through the `tool(...)` helper. - Reject non-string/empty names and wrap unreadable name accessors with a clear SDK registration error. - Preserve valid execute/factory 

### #89171 fix(agent-core): validate harness tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:59:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Validate AgentHarness tool names before constructor registration and `setTools()` replacement. - Convert malformed/non-string/empty names and unreadable name accessors into `AgentHarnessError("invalid_argument", ...)`. - Build the constructor tool

### #89175 fix(talk): quarantine malformed realtime tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, extensions: openai, extensions: google, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:59:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable, blank, or whitespace custom realtime tool names in the shared agent-consult tool resolver without dropping valid provider-specific names. - Quarantine OpenAI realtime tools against the OpenAI name contract before WebSocket session

### #89201 refactor: add transcript runtime identity contract

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, scripts, agents, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:00:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds the canonical file-backed transcript runtime identity/state contract for Path 3.1b, building on the session accessor seam without adding SQLite storage, production storage flips, runtime dual-read/fallback, or doctor migration code. ## Why Path 3 

### #89213 fix(agents): guard CLI loopback prompt tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:00:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Sanitize bundled MCP loopback prompt tools before CLI prompt construction, prompt-tool session hashing, and system-prompt reporting. - Reuse the MCP loopback `tools/list` schema projection so unreadable names and unreadable schemas are dropped con

### #89253 fix(plugins): guard runtime tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:01:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden runtime plugin tool candidate inspection against poisoned descriptor getters for `name`, `execute`, `parameters`, `description`, `label`, and `displaySummary`. - Return accepted plugin tools through the scoped proxy with snapshotted descrip

### #89261 refactor: add public transcript identity API

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, scripts, maintainer, size: M, plugin: file-transfer, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:02:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds the public SDK transcript identity API used by Path 3 session/transcript seam work. The PR introduces storage-neutral transcript identity and memory-hit key helpers so plugin and memory consumers can stop deriving transcript identity from file bas

### #89262 refactor: add scoped transcript target writers

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: M, plugin: file-transfer, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:02:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds public SDK transcript target and writer helpers on top of the transcript identity API. The PR lets callers bind scoped transcript identity to an active `sessionFile` target and then read, append, publish, or run locked transcript work against that

### #91262 fix(build): fall back to tsx for build TypeScript scripts

- bucket: maintainer_owned
- author: smoe-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: scripts, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:08:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR was triggered by @smoe hitting a real build failure on a Debian trixie host while moving beyond the packaged OpenClaw install and toward building OpenClaw directly from the git checkout. That host was running Debian’s Node.js 24 build, where `process.f

### #89071 fix(agent-tools): skip unreadable tool names in policy

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:08:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a guarded tool-policy name reader for hostile or unreadable tool name accessors - drop unreadable tool entries from effective allowlists, plugin groups, policy filtering, and policy audit paths - cover the full policy pipeline so an unreadable

### #91289 fix(codex): quarantine unreadable dynamic tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, agents, maintainer, size: M, extensions: codex, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:09:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Quarantines Codex dynamic tools whose input schemas cannot be safely normalized before they reach the Codex app-server bridge. - Preserves plugin/owner attribution for tool-schema quarantine diagnostics so `openclaw doctor` can point at the owning so

### #89975 fix(reply): suppress direct tool-error progress leaks

- bucket: maintainer_owned
- author: jewseppi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: extensions: memory-core, agents, size: M, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:11:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - suppress text-only tool error progress in direct chats when the turn still produces a normal final reply - keep the existing terminal fallback path intact so real failures still surface when there is no usable final answer - add a regression test 

### #92220 fix(media): extract large managed inbound PDFs via media-understanding

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:13:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Large inbound PDFs/documents from messaging channels and the Control UI were delivered to text-only/locked-down agents as just an attachment marker — the agent never saw the document text. This fixes that by extending the **existing** media-understa

### #84975 fix(heartbeat): suppress fallback after route-matched message tool

- bucket: maintainer_owned
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T11:20:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When heartbeat runs in message-tool-only mode, a successful generic message tool delivery can still be followed by duplicate free-text fallback narration in the same Telegram chat. Fixes #84217 ## Affected surface - `src/auto-reply/reply/agent-runner.ts` - Add

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

