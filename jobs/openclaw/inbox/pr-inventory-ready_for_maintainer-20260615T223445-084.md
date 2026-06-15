---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-084
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
  - "#89104"
  - "#89110"
  - "#89126"
  - "#89152"
  - "#93261"
  - "#89260"
  - "#89038"
  - "#93242"
  - "#53467"
  - "#55851"
  - "#93243"
  - "#56145"
  - "#59920"
  - "#61151"
  - "#61775"
  - "#62682"
  - "#87333"
  - "#89277"
  - "#89279"
  - "#89291"
  - "#89744"
  - "#89762"
  - "#89846"
  - "#89858"
  - "#89884"
cluster_refs:
  - "#89104"
  - "#89110"
  - "#89126"
  - "#89152"
  - "#93261"
  - "#89260"
  - "#89038"
  - "#93242"
  - "#53467"
  - "#55851"
  - "#93243"
  - "#56145"
  - "#59920"
  - "#61151"
  - "#61775"
  - "#62682"
  - "#87333"
  - "#89277"
  - "#89279"
  - "#89291"
  - "#89744"
  - "#89762"
  - "#89846"
  - "#89858"
  - "#89884"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.804Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 84

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #93261 fix(plugins): resolve provider policy surface for plugin-owned CLI backends

- bucket: ready_for_maintainer
- author: BitmapAsset
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:59:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What `pluginOwnsProviderPolicyRef` now also treats a plugin's `cliBackends` as owned providers, so a plugin's bundled provider-policy surface resolves for the CLI backends it declares — not only for `providers` / `providerAuthAliases`. ## Why `claude-cli` i

### #89260 fix(doctor): separate platform-incompatible skills from missing requirements

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:02:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89232 ## Summary `openclaw doctor` reported skills with a declared OS requirement that doesn't match the current platform (e.g. macOS-only `apple-notes`, `imsg`, `homebrew` on Linux/Windows) under the same "Missing requirements" count as genuinely-broke

### #89038 fix: skip setup-only channel plugins in outbound resolution and drain pending deliveries on qqbot reconnect

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, channel: qqbot, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:08:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the qqbot WebSocket reconnects after a session timeout (close code `4009`), `resolveOutboundChannelPlugin()` returns a setup-only plugin stub that lacks any send capability. This causes the `"Outbound not configured for channel: qqbot"` error,

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

### #87333 fix: prevent toolDiscovery from overwriting pinned channel registry

- bucket: ready_for_maintainer
- author: klioen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:36:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When tools.catalog is called from the frontend, it triggers ensureStandalonePluginToolRegistryLoaded with surface=channel and toolDiscovery=true. In toolDiscovery mode, the loaded registry contains no channels, but installStandaloneRegistry still overwrites th

### #89277 Optionally show runtime status after /new and /reset

- bucket: ready_for_maintainer
- author: ree9622
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:40:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds an opt-in `commands.showRuntimeStatusOnReset` setting for successful bare `/new` and `/reset` acknowledgements. - Keeps the compact default reply unchanged. - Applies the same acknowledgement formatting to chat command resets and Gateway agen

### #89279 fix(tasks): deliver ACP completions to bound Discord threads

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:40:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #84022 by delivering successful parent-review ACP task terminal updates to the explicitly bound Discord thread that originated the request. This is a narrow replacement shape after #86672 and #88251 were closed: - does **not** reopen or reuse

### #89291 test(plugins): cover filtered bundle MCP servers

- bucket: ready_for_maintainer
- author: Haruhiyuki
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:41:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR tightens the existing compatible-bundle MCP path for bundles that need a narrower default tool surface. - Adds regression coverage that a Codex-compatible bundle `.mcp.json` preserves `toolFilter.include`, `toolFilter.exclude`, and a relativ

### #89744 Fix Discord default account startup priority

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:42:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #77429 ## Real behavior proof - Behavior or issue addressed: Discord multi-account startup delay ordering previously followed the configured account id list directly, so a configured primary account such as `channels.discord.defaultAccount: "tech"` could

### #89762 feat(messages): config-level default for responseUsage (persistent /usage footer)

- bucket: ready_for_maintainer
- author: Marvinthebored
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T11:42:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds a config-level default for `responseUsage` (the per-reply usage footer mode `on|off|tokens|full`). Today the mode is **per-session** — sticky within a session, but every new session starts effectively `off` until a user runs `/usage`. There is no

### #89846 feat(slack): add ignoreOtherMentions config option for channels

- bucket: ready_for_maintainer
- author: priyansh19
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:43:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #89625 Adds \`ignoreOtherMentions\` support to Slack channel config, matching the existing Discord behavior. When \`ignoreOtherMentions: true\` is set on a Slack channel entry, the bot drops incoming room messages that mention another user bu

### #89858 Fix systemd gateway unit scope conflicts

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:44:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #79375. - Detect same-name user-scope and system-scope systemd gateway units and prefer the active/enabled system unit instead of blindly selecting the user unit. - Retire only live opposite-scope conflicts, and stage/preflight the replacement

### #89884 fix(voice-call): emit canonical session keys

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: voice-call, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:45:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: voice-call generated persisted session keys still used raw `voice:*` keys, so multi-agent voice routing could diverge from the gateway's canonical `agent:<agentId>:voice:*` session key shape. - Solution: generate canonical voice session k
