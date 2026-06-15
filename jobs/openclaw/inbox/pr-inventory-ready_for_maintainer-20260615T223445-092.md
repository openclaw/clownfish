---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-092
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
  - "#91481"
  - "#91963"
  - "#91981"
  - "#91984"
  - "#92012"
  - "#92035"
  - "#92040"
  - "#92063"
  - "#93376"
  - "#93369"
  - "#92126"
  - "#92147"
  - "#92165"
  - "#92178"
  - "#92185"
  - "#92223"
  - "#92236"
  - "#92237"
  - "#92025"
  - "#92261"
  - "#92283"
  - "#92287"
  - "#91245"
  - "#92328"
  - "#92383"
cluster_refs:
  - "#91481"
  - "#91963"
  - "#91981"
  - "#91984"
  - "#92012"
  - "#92035"
  - "#92040"
  - "#92063"
  - "#93376"
  - "#93369"
  - "#92126"
  - "#92147"
  - "#92165"
  - "#92178"
  - "#92185"
  - "#92223"
  - "#92236"
  - "#92237"
  - "#92025"
  - "#92261"
  - "#92283"
  - "#92287"
  - "#91245"
  - "#92328"
  - "#92383"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.805Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 92

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91481 fix #89217: Surface approval delivery failures

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:09:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89217. ## Summary - Track explicit exec/plugin approval delivery attempts separately from successful delivery. - Surface configured delivery failures as no-route approval responses instead of silently falling back to turn-source routing. - Add regressio

### #91963 fix(auto-reply): defer foreground fence until delivery

- bucket: ready_for_maintainer
- author: xmoxmo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:10:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91914. This defers foreground reply fence creation until a buffered dispatch first attempts visible/source delivery, instead of creating the fence as soon as the inbound dispatch enters `dispatchInboundMessageWithBufferedDispatcher()`. The pr

### #91981 test(gateway): widen chat-b fast-wait timeout to 1s

- bucket: ready_for_maintainer
- author: kingdoooo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:10:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `src/gateway/server.chat.gateway-server-chat-b.test.ts` uses `FAST_WAIT_OPTS = { timeout: 250, interval: 2 }` for all 14 of its `vi.waitFor` assertions. 250ms is too tight for the async hop chain behind `chat.send`: the RPC acks before reply dispa

### #91984 fix(telegram): resolve local Bot API container file paths against trustedLocalFileRoots [AI-assisted]

- bucket: ready_for_maintainer
- author: Dizesales
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:11:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Self-hosted `telegram-bot-api` servers running with `--local` in a container report **absolute container paths** (`/var/lib/telegram-bot-api/<token>/...`) in `getFile`, while the OpenClaw host mounts that data volume somewhere else. The absolute p

### #92012 docs(providers): add LLMBase setup guide

- bucket: ready_for_maintainer
- author: mariusbolik
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:12:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a provider-directory page for configuring LLMBase as a custom OpenAI-compatible provider in OpenClaw. - Documents the LLMBase agent API base URL, chat-agent key type, Pro plan requirement, $19/month price, model-ref prefixing, daemon environm

### #92035 feat(memory): apply temporal decay to QMD search results

- bucket: ready_for_maintainer
- author: fall4knight
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, scripts, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:13:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `memorySearch.query.hybrid.temporalDecay` currently only applies in the builtin hybrid engine merge path (`mergeHybridResults` in `hybrid.ts`). When `memory.backend = "qmd"` — the backend the docs recommend for advanced recall — search results skip

### #92040 fix(provider): route thinking profiles by model API

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, extensions: anthropic, extensions: openai, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:14:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes custom Anthropic-compatible providers whose selected model API is `anthropic-messages` but whose provider id is not literally `anthropic`. - Carries the selected catalog/config model API into thinking policy resolution so Anthropic Messages

### #92063 fix(ui): collapse duplicate assistant groups during segmented streaming

- bucket: ready_for_maintainer
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:15:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - During a streaming reply, Control UI rendered each in-flight stream segment as its own top-level assistant group, so a segmented reply flashed a separate avatar + footer per segment and collapsed into one group on completion (#63956). Segments ari

### #93376 fix(state): archive rollback-journal sidecar during legacy SQLite migration

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:15:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Legacy SQLite state-migration archiving missed the rollback-journal (`-journal`) sidecar. When doctor/startup migrates a legacy `*.sqlite` sidecar into the shared `openclaw.sqlite`, it renames the source database and its `-shm`/`-wal` companions to

### #93369 fix(cron): expose per-job fallbacks in CLI

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:18:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #90302 by adding `--fallbacks <list>` to `openclaw cron add/create` and `openclaw cron edit`. - Adds `cron edit --clear-fallbacks` so jobs can return from a persisted per-job fallback override back to configured fallback inheritance. - Keeps

### #92126 [codex] fix(skill-creator): accept mixed-case resources

- bucket: ready_for_maintainer
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:18:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Normalize `init_skill.py --resources` tokens to canonical lowercase before validation. - Keep invalid resource diagnostics tied to the original user spelling. - Add focused regression tests for mixed-case input, case-insensitive deduplication, emp

### #92147 [codex] support Responses system prompts in instructions

- bucket: ready_for_maintainer
- author: skingford
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:18:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add an OpenAI Responses compatibility switch for providers that reject `system` or `developer` messages inside the Responses `input` array. When a configured Responses model sets `compat.systemPromptPlacement: "instructions"`, OpenClaw now sends `co

### #92165 fix(memory): show dreaming status without search

- bucket: ready_for_maintainer
- author: bennewell35
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:19:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keeps `doctor.memory.status` reporting memory-core dreaming status even when the embedding memory-search manager is unavailable or disabled. - Carries the gateway dreaming payload through `probeGatewayMemoryStatus` so `openclaw doctor` can render

### #92178 fix(gateway): guard formatAuditList against non-string items to prevent handshake trim crash (#90654)

- bucket: ready_for_maintainer
- author: wangmiao0668000666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, scripts, size: M, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:19:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90654. CLI write commands (`openclaw message send`, `broadcast`, `probe`) crash the gateway WebSocket handshake with `TypeError: Cannot read properties of null/undefined (reading 'trim')` when the device pairing state contains non-string entr

### #92185 fix(exec): preserve approved gateway output

- bucket: ready_for_maintainer
- author: llljjjwww333
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:20:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves multiline output for approved async gateway exec follow-ups instead of tailing it to the compact background-notification limit. - Keeps ordinary background `notifyOnExit` summaries on the existing compact formatter, so this does not expa

### #92223 Fix stack-safe large attachment handling

- bucket: ready_for_maintainer
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:21:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is the canonical-source replacement for the closed #90111 approach, following amknight's review: it uses the existing media-understanding/file-extraction pipeline instead of adding a parallel inbound-PDF prompt-context subsystem. - Route inboun

### #92236 fix(webchat): surface Codex commentary progress

- bucket: ready_for_maintainer
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:22:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What This PR Fixes OpenClaw's default Codex app-server harness already emits live commentary while an agent is thinking or working. Those updates arrive in WebChat as agent events with: - `stream: "item"` - `data.kind: "preamble"` - `data.progressText: "...

### #92237 fix(agents): preserve runtime settings overrides [AI-assisted]

- bucket: ready_for_maintainer
- author: sercada
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:22:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep `SettingsManager.applyOverrides()` as a runtime override layer instead of merging it only into the current settings snapshot - recompute effective settings from global + project + runtime overrides after `save()` and `reload()` - cover the em

### #92025 feat(skills): add per-section remediation hints to skills check

- bucket: ready_for_maintainer
- author: hansraj316
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:22:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `skills check` listed hidden / agent-excluded / missing-requirement skills but never told the author how to fix each. Append a per-section `Fix:` hint: hidden -> frontmatter `disable-model-invocation: false`; excluded -> add to the agent's `skills`

### #92261 Fix live orphan session transcript visibility

- bucket: ready_for_maintainer
- author: skocher
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:23:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow owner-scoped live transcript hits to fall back to synthetic session keys when the combined session store has no entry - keep the fallback scoped to the transcript owner/current agent so cross-agent live orphan hits still fail closed - apply

### #92283 fix(agents): don't inject A2A turns into isolated-cron sessions_send (#92257)

- bucket: ready_for_maintainer
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:24:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fire-and-forget cross-session `sessions_send` ran the A2A ping-pong loop for every requester, and for an isolated cron requester its first iteration fed the target agent's reply back into the isolated cron session as a new turn, corrupting that ru

### #92287 fix: start typing for queued followup turns and honor configured typingMode for Telegram room events

- bucket: ready_for_maintainer
- author: binhdoan123
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:24:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92267 ## Problem `agents.defaults.typingMode: "instant"` is silently ineffective for message-tool delivery setups — the configuration the ambient-room-events docs recommend (`unmentionedInbound: "room_event"` + `visibleReplies: "message_tool"`). Two ind

### #91245 fix(plugin-runtime): restore channel turn alias

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:25:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Restores the deprecated `core.channel.turn.*` runtime surface as an alias of `core.channel.inbound.*` for shipped channel plugins compiled before the inbound rename. - Keeps the alias as the same object as `inbound`, so there is no second implemen

### #92328 Fix dashboard history projection and approval followups

- bucket: ready_for_maintainer
- author: Hidetsugu55
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:26:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes dashboard history projection so toolCall-only assistant messages do not hide recent user context, and suppresses prompt persistence for exec approval follow-up resumes. This is a clean replacement for #92312 with only the intended minimal diff. Tests: -

### #92383 fix(gateway): never return an empty chat.history transcript

- bucket: ready_for_maintainer
- author: Hidetsugu55
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:28:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: `enforceChatHistoryFinalBudget` returned an **empty array** when even a single oversized-message placeholder could not fit the chat-history byte budget — for example when the source transcript message carried very large metadata (a corrupted or huge `__opencla
