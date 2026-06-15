---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-074
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
  - "#91345"
  - "#89044"
  - "#89045"
  - "#89062"
  - "#89073"
  - "#89096"
  - "#89104"
  - "#89110"
  - "#89126"
  - "#89152"
  - "#89155"
  - "#93261"
  - "#89183"
  - "#89226"
  - "#89260"
  - "#91220"
  - "#91221"
  - "#91234"
  - "#91240"
  - "#91244"
  - "#91245"
  - "#89002"
  - "#91257"
  - "#89038"
  - "#91268"
  - "#91274"
  - "#91277"
  - "#89783"
  - "#51762"
  - "#93242"
  - "#53467"
  - "#55851"
  - "#93243"
  - "#56145"
  - "#57609"
  - "#58636"
  - "#59920"
  - "#61151"
  - "#61775"
  - "#62682"
cluster_refs:
  - "#91345"
  - "#89044"
  - "#89045"
  - "#89062"
  - "#89073"
  - "#89096"
  - "#89104"
  - "#89110"
  - "#89126"
  - "#89152"
  - "#89155"
  - "#93261"
  - "#89183"
  - "#89226"
  - "#89260"
  - "#91220"
  - "#91221"
  - "#91234"
  - "#91240"
  - "#91244"
  - "#91245"
  - "#89002"
  - "#91257"
  - "#89038"
  - "#91268"
  - "#91274"
  - "#91277"
  - "#89783"
  - "#51762"
  - "#93242"
  - "#53467"
  - "#55851"
  - "#93243"
  - "#56145"
  - "#57609"
  - "#58636"
  - "#59920"
  - "#61151"
  - "#61775"
  - "#62682"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.489Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 74

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91345 fix: suggest close CLI commands

- bucket: ready_for_maintainer
- author: glenn-agent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:55:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a small shared helper for close root-command suggestions using known CLI command metadata - suggest `openclaw update` for close typos such as `upate` and explicit adjacent terminology such as `upgrade` - wire suggestions into both Commander un

### #89044 [codex] Group sidebar recent sessions by channel

- bucket: ready_for_maintainer
- author: GimingRao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:55:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Group the sidebar's existing five most recent sessions by resolved channel. - Resolve the channel from session row metadata first, then fall back to session key parsing for channel-backed sessions, including account-scoped direct session keys. - A

### #89045 fix: recover terminal session status on visible inbound turns

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:55:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #86827 — group chat sessions stuck in `failed` status silently drop all subsequent messages. When a group chat session enters a terminal status (`failed`, `timeout`, or `killed`), the reply dispatch path returns a successful no-op (`queuedFina

### #89062 feat(docker): support offline setup reruns

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, docker, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:55:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #70443. ## Summary - Add `scripts/docker/setup.sh --offline` for airgapped reruns with a preloaded `OPENCLAW_IMAGE`. - Skip Docker build/pull in offline mode, but still run the normal setup flow: `.env` sync, permission fix, onboarding/config sync, and C

### #89073 fix(exec): reuse duplicate background sessions

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:56:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Linked context Closes #62432. ## Summary - Repeated identical scoped background-capable `exec` retries now reuse the existing running process session instead of launching another child process. - Reuse covers explicit `background: true`, explicit `yieldMs`,

### #89096 [codex] fix launchd restart when gateway port is busy

- bucket: ready_for_maintainer
- author: shawnduggan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:57:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw gateway restart` on macOS was treating a busy gateway port as a fatal precondition before calling `launchctl kickstart -k`. During a normal LaunchAgent restart, the currently running gateway is expected to own that port until launchd repla

### #89104 fix(exec): expose termination metadata in tool details

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:57:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refs #69242. This diagnostics-only PR exposes termination metadata that OpenClaw already records internally through the user-visible structured tool details: - foreground `exec` failed details now include `exitSignal`, `failureKind`, `exitReason`, a

### #89110 fix(whatsapp): suppress typing for unmentioned group runs regardless of delivery mode

- bucket: ready_for_maintainer
- author: Bluetegu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:58:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** On silent agent runs, `signalTextDelta` fires `sendPresenceUpdate("composing")` if the model streams renderable text before the silent-token decision. Once fired, composing is never retracted. Group members see a

### #89126 docs(contributing): add pnpm check:test-types to pre-PR checklist

- bucket: ready_for_maintainer
- author: Bluetegu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: mock-only-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:58:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a bullet to the **Before You PR** checklist in `CONTRIBUTING.md` instructing contributors to run `pnpm check:test-types` when they add or change test files. - `pnpm check` (which the existing checklist line already calls) runs `tsgo:prod` and

### #89152 feat(hooks): add agent turn end hook

- bucket: ready_for_maintainer
- author: mantisai-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:59:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a clean `agent:turn:end` internal hook event for ACP runtime turn completion. This split intentionally keeps the event as a runtime lifecycle boundary only; it does not claim transcript/session-write durability. ## Changes - Registers and valid

### #89155 feat(openrouter): forward OpenClaw session id as session_id

- bucket: ready_for_maintainer
- author: Alex-vonAllmen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, extensions: openrouter, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:59:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Optionally forward the active OpenClaw session id to OpenRouter as the chat-completion session_id body field. OpenRouter uses it as a sticky routing key (better prompt-cache hits) and for observability. Opt-in per the OpenRouter plugin config (forwardSessionId

### #93261 fix(plugins): resolve provider policy surface for plugin-owned CLI backends

- bucket: ready_for_maintainer
- author: BitmapAsset
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:59:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What `pluginOwnsProviderPolicyRef` now also treats a plugin's `cliBackends` as owned providers, so a plugin's bundled provider-policy surface resolves for the CLI backends it declares — not only for `providers` / `providerAuthAliases`. ## Why `claude-cli` i

### #89183 fix(tui): keep local slash commands out of model prompts

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:59:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #71592. ## Summary - Keep known local embedded TUI control commands out of the model path. - Render local `/status` from TUI session state. - Report known shared commands that local embedded mode cannot run, such as `/compact`, `/context`, and `/command

### #89226 fix(agent-tools): resolve workspace-scoped tool fs root lazily

- bucket: ready_for_maintainer
- author: sasan1200
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:01:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - `openclaw doctor` aborts with `[openclaw] Unhandled promise rejection: FsSafeError: root dir not found` whenever an agent's resolved workspace directory does not exist at doctor time. Why does this matter now? - Do

### #89260 fix(doctor): separate platform-incompatible skills from missing requirements

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:02:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89232 ## Summary `openclaw doctor` reported skills with a declared OS requirement that doesn't match the current platform (e.g. macOS-only `apple-notes`, `imsg`, `homebrew` on Linux/Windows) under the same "Missing requirements" count as genuinely-broke

### #91220 fix(docs): lint workspace templates

- bucket: ready_for_maintainer
- author: AdvancedForge
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, commands, agents, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:06:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Extends the existing markdownlint docs lane to cover shipped workspace template markdown. * Adds `src/agents/templates/HEARTBEAT.md` to markdownlint coverage because it is part of the shipped workspace template pack. * Removes the explicit markdow

### #91221 fix(daemon): detect and resolve dueling user+system systemd gateway units (#79375)

- bucket: ready_for_maintainer
- author: 24373054
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, commands, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:06:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #79375 — on Linux, after an upgrade a **user-scope** unit (`~/.config/systemd/user/openclaw-gateway.service`) and a **system-scope** unit (`/etc/systemd/system/openclaw-gateway.service`) can both exist and both try to manage the gateway. They 

### #91234 fix #91224: Bug: internal inter-session confirmation acks leak to external channels

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:06:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Internal inter-session confirmation acknowledgements from `sessions_send` or `subagent_announce` could inherit the parent session's persisted external route and leak to a Slack DM after the actual user-facing reply had already been delive

### #91240 fix: report Codex ChatGPT status auth

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:07:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Teach `/status` auth labels for OpenAI models running on the Codex harness to check the agent-owned Codex app-server `codex-home` before ambient OpenAI env keys. - Align OpenClaw's Codex `auth.json` OAuth reader with Codex auth-mode resolution so 

### #91244 feat(channels/slack): add mode: "trusted-upstream" for sidecar-verified ingress

- bucket: ready_for_maintainer
- author: damianFelixPago
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: XL, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:07:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Implements #91242 ## Summary OpenClaw's Slack channel supports two production transports today: - **Socket Mode** — the gateway opens a Slack WSS connection authenticated with an app-level token. - **HTTP Request URLs** — Slack posts directly to the gateway an

### #91245 fix(plugin-runtime): restore channel turn alias

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:07:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Restores the deprecated `core.channel.turn.*` runtime surface as an alias of `core.channel.inbound.*` for shipped channel plugins compiled before the inbound rename. - Keeps the alias as the same object as `inbound`, so there is no second implemen

### #89002 fix(plugins): preserve mutable hook context

- bucket: ready_for_maintainer
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:08:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: <!-- hermes-auto-maintainer --> ## Summary - Preserve the original mutable hook context object when plugin `registerHook` handlers run. - Temporarily expose `pluginConfig` to each handler and restore/remove it afterward so config does not leak onto the shared 

### #91257 perf: split subagent registry runtime imports

- bucket: ready_for_maintainer
- author: poison
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:08:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Split the subagent registry lazy runtime imports across three narrower runtime entries: `context-engine-init.runtime`, `context-engine-registry.runtime`, and `runtime-plugins.runtime`. - Keep the existing `subagent-registry.runtime` build entry fo

### #89038 fix: skip setup-only channel plugins in outbound resolution and drain pending deliveries on qqbot reconnect

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, channel: qqbot, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:08:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the qqbot WebSocket reconnects after a session timeout (close code `4009`), `resolveOutboundChannelPlugin()` returns a setup-only plugin stub that lacks any send capability. This causes the `"Outbound not configured for channel: qqbot"` error, 

### #91268 fix: treat trusted-proxy gateway auth as doctor auth proof

- bucket: ready_for_maintainer
- author: veteranbv
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:08:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Count a complete `trusted-proxy` gateway setup as authentication proof for the network-exposure doctor check. - Keep incomplete trusted-proxy setups on the existing critical path by requiring both `gateway.auth.trustedProxy.userHeader` and `gatewa

### #91274 refactor(memory): drop redundant agent-id scoping from qmd collection names

- bucket: ready_for_maintainer
- author: sasan1200
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:09:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **What:** drop the redundant `-<agentId>` scoping from managed qmd collection names. Each agent has its **own isolated qmd index** (`agents/<agentId>/qmd/index.sqlite`), so collection names can't collide across agents — the agent-id suffix adds no

### #91277 docs(ios): clarify official app availability (Fixes #90835)

- bucket: ready_for_maintainer
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: ios, size: XS, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:09:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90835. The iOS platform page already says the app is an internal preview, but it does not answer the practical question users are asking: whether there is an official public App Store listing and how they are supposed to get the app. This doc

### #89783 feat(feishu): bot-to-bot conversation support with @mention handling

- bucket: ready_for_maintainer
- author: GeekyMax
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: XL, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:16:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Makes Feishu bot-to-bot conversations actually work. Bot-authored messages already reach dispatch on `main` (nothing gates them out), so bots could already "talk" — but the experience was broken: replies frequently never reached the peer bot because

### #51762 feat: configurable default agent ID (escape the 'main' prison) 🦞

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:21:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds support for overriding the hardcoded `"main"` fallback agent ID, so users with a single custom-named agent no longer get a ghost `agents/main/` default path/session identity when no `agents.list` is configured. ## The Problem `DEFAULT_AGENT_ID`

### #93242 fix(mattermost): keep bare @mention with empty body instead of dropping it

- bucket: ready_for_maintainer
- author: iloveleon19
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:21:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - A Mattermost message whose only content is a mention of the bot (e.g. just `@bot`) normalizes to an empty body and is then dropped by the empty-body guard, so a bare mention never wakes the agent. - Extract `shouldDropEmptyMattermostBody` and use 

### #53467 feat(slack): add ignoreOtherMentions channel config

- bucket: ready_for_maintainer
- author: hanamizuki
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, size: M, triage: dirty-candidate, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:28:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `ignoreOtherMentions` option for Slack channel config, mirroring the existing Discord guild/channel feature - When enabled, messages that mention another user (`<@U...>`) but do not explicitly mention the bot are dropped — even inside bot-part

### #55851 feat: include provider/model/profile/trigger context in overloaded and rate limit error messages

- bucket: ready_for_maintainer
- author: TinyTb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:28:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Transient provider failures were still too terse to act on. When an overloaded or rate-limit response reached the embedded agent formatter, the visible message could omit the provider, model, active profile presence, and trigger that operators need 

### #93243 fix(mattermost): backfill thread history from server when in-memory window is empty

- bucket: ready_for_maintainer
- author: iloveleon19
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:28:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Thread/conversation history is in-memory only, so after a gateway restart or a session clear the window for a thread is empty. A user who @mentions the bot inside an existing thread to wake it then gets a reply with no thread context — worst exact

### #56145 fix(gateway): preserve indentation when recombining non-streaming replies

- bucket: ready_for_maintainer
- author: vrurg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:28:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: AI-assisted: yes (OpenClaw agent-authored). Testing: targeted local validation (gateway regression tests + targeted lint + pre-commit repo checks). ## Summary - Companion to merged #55960, not a duplicate: #55960 fixed indentation loss while stripping inline r

### #57609 fix(mattermost): record pending history for non-allowlisted group senders

- bucket: ready_for_maintainer
- author: JasonWang1124
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: XS, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:29:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When `groupPolicy: "allowlist"`, messages from non-allowlisted senders are dropped at the access-check stage before `recordPendingHistoryEntryIfEnabled()` is called. The bot loses all conversation context from those users. - **Why it 

### #58636 feat(tui): add /upload command for file context

- bucket: ready_for_maintainer
- author: GillbertHsu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: L, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:29:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: No way to interactively browse and attach local files as context in the TUI - Why it matters: Users often need to provide file content for the AI to reference, but currently must copy-paste file path or reference files manually - What cha

### #59920 [codex] prefer terminal reply fields in CLI JSONL parser

- bucket: ready_for_maintainer
- author: mySebbe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, clawsweeper, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:29:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the CLI JSONL parser only special-cases Claude `type:"result"` events and otherwise falls back to generic text collection, so OpenAI/Codex-style fallback runs can lose terminal reply semantics. - Why it matters: in channel-visible fallbac

### #61151 fix(agents): drop partialJson streaming artifacts from session history repair

- bucket: ready_for_maintainer
- author: drvoss
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:31:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: session transcript repair was stripping `partialJson` from every otherwise-complete tool-call block, which could keep interrupted Anthropic artifacts as replayable calls. - Why it matters: replaying an interrupted tool call can corrupt pa

### #61775 enhance Makefile with standard build, test, and quality targets

- bucket: ready_for_maintainer
- author: Grynn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:32:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace the minimal single-target Makefile with a full developer workflow - `make help` (default) lists all targets with descriptions - Dependency tracking: `make deps` auto-runs `pnpm install` when lockfile changes - Build: `make build` (main + U

### #62682 fix(agents): distinguish terminal aborts from retryable failures (#60388)

- bucket: ready_for_maintainer
- author: simonusa
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:33:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Addresses #60388 (complementary to #52365, see "Relationship to PR #52365" below) Today the fallback layer cannot tell the difference between two very different aborts: 1. **"This model failed, try another"** -> fallback should retry 2. **"The whole run is ove

