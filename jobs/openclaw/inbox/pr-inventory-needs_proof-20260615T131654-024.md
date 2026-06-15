---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-024
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
  - "#68464"
  - "#68503"
  - "#68506"
  - "#68685"
  - "#68785"
  - "#68801"
  - "#68833"
  - "#68857"
  - "#68860"
  - "#68927"
  - "#67011"
  - "#68116"
  - "#92978"
  - "#89602"
  - "#92976"
  - "#63456"
  - "#55351"
  - "#63710"
  - "#92986"
  - "#64044"
  - "#64703"
  - "#64820"
  - "#65180"
  - "#65198"
  - "#67174"
  - "#68958"
  - "#68996"
  - "#69010"
  - "#69245"
  - "#69319"
  - "#69355"
  - "#69413"
  - "#69426"
  - "#69428"
  - "#69491"
  - "#69494"
  - "#69495"
  - "#69954"
  - "#69972"
  - "#69999"
cluster_refs:
  - "#68464"
  - "#68503"
  - "#68506"
  - "#68685"
  - "#68785"
  - "#68801"
  - "#68833"
  - "#68857"
  - "#68860"
  - "#68927"
  - "#67011"
  - "#68116"
  - "#92978"
  - "#89602"
  - "#92976"
  - "#63456"
  - "#55351"
  - "#63710"
  - "#92986"
  - "#64044"
  - "#64703"
  - "#64820"
  - "#65180"
  - "#65198"
  - "#67174"
  - "#68958"
  - "#68996"
  - "#69010"
  - "#69245"
  - "#69319"
  - "#69355"
  - "#69413"
  - "#69426"
  - "#69428"
  - "#69491"
  - "#69494"
  - "#69495"
  - "#69954"
  - "#69972"
  - "#69999"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.476Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 24

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #68464 Harden subagent completion delivery

- bucket: needs_proof
- author: nnlevy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: imessage, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:26:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - persist a per-run delivery claim and user-safe delivery payload for subagent completions - route active-parent completion announces queue-first with fail-closed semantics instead of direct-first fallback behavior - harden iMessage delivery normali

### #68503 status: reduce diagnosis noise in status --all

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:26:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: $## Summary\n- filter routine gateway tail noise and wrapper residue from `status --all` diagnosis output\n- group repeated lane-wait, subagent-end, detached-flow, and context-overflow diagnostics into concise summaries\n- stop surfacing unrelated fallback `Ga

### #68506 status: improve degraded-state recovery guidance

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:26:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: $## Summary\n- add clearer cause and next-step guidance for degraded `status --all` diagnosis states\n- classify gateway log and health failures into actionable recovery hints instead of raw errors alone\n- cover invalid config, unreachable/query-failed gatewa

### #68685 fix(config): strip obsolete memorySearch keys before schema validation (#68664)

- bucket: needs_proof
- author: Tmalone1250
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:28:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: Obsolete `memorySearch` keys (`chunkSize`, `chunkOverlap`, `maxResults`) in `agents.defaults` cause schema validation to fail because the current migration path moves the root key but fails to strip stale sub-keys before `validateConf

### #68785 feat: add circuit breaker for command lane saturation

- bucket: needs_proof
- author: chrisabad
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:28:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add `CommandLaneCircuitBreakerError` and opt-in circuit breaker options (`circuitBreakerDepth`, `circuitBreakerWaitMs`) to `enqueueCommandInLane`. Enable by default for the main run lane: depth >= 9 or oldest queued entry wait >= 600s triggers the b

### #68801 Gateway: prune orphaned agentRunStarts entries

- bucket: needs_proof
- author: CuzG-lab
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:28:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `pruneAgentRunCache()` clears `agentRunCache` entries on TTL but never touches the sibling `agentRunStarts` map, so timestamps for runs that lose their terminal lifecycle event (crash, race, forced disconnect) accumulate forever. - Why it

### #68833 fix(telegram): preserve customCommands priority in menu budget trimming

- bucket: needs_proof
- author: ayeshakhalid192007-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:28:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What & Why Telegram `customCommands` defined by operators were silently dropped on startup whenever the combined native + plugin + custom command list exceeded Telegram's 100-command or 5700-char `setMyCommands` payload cap. `allCommandsFull` was assembled 

### #68857 feat: add gateway.nodes.invokeTimeoutMs config option

- bucket: needs_proof
- author: tianhaocui
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:28:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #68090 ## Summary The `node.invoke` timeout was hardcoded to 30 seconds with no way to configure it. Users running long operations through node commands had to accept the fixed timeout. ## Changes 1. **`src/config/types.gateway.ts`** — Added `invokeTimeo

### #68860 Agents: emit turn events from embedded sessions

- bucket: needs_proof
- author: 404notfoundhh
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:29:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Emit embedded Pi `turn_start` / `turn_end` events through OpenClaw's agent event pipeline so external observers can detect stable loop boundaries. ## Changes - handle `turn_start` and `turn_end` in `src/agents/pi-embedded-subscribe.handlers.ts` - ad

### #68927 ui(chat): show explicit qualified model refs

- bucket: needs_proof
- author: jckm14
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:29:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - show exact qualified provider/model refs in the model picker - stop collapsing them into friendlier but ambiguous labels - update tests to lock in the explicit behavior ## Why This is better for power users and debugging, but it is also a more opi

### #67011 fix: avoid false circular detection for shared references

- bucket: needs_proof
- author: wzhgba
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:34:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # PR: fix false circular detection for shared references in diagnostic payload traversal ## Summary This PR fixes a false-positive circular detection bug in diagnostic payload traversal. Previously, the traversal used a global `seen` set. That caused sibling f

### #68116 feat(memory-lancedb): support reindex and drop-index command

- bucket: needs_proof
- author: zhangyue19921010
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-lancedb, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:34:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `ltm reindex` rebuilt the LanceDB vector index but did not wait for index creation to finish before reporting success. - Why it matters: the command could print a successful result while the index was still building in the background, whi

### #92978 refactor: consolidate duplicated escapeRegExp helpers

- bucket: needs_proof
- author: ericcurtin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:41:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Ten core modules each defined a byte-identical private regex-literal escape helper under varying names. They all used the same character class as the existing canonical helper in `src/shared/regexp.ts`: ```ts value.replace(/[.*+?^${}()|[\]\\]/g, "\\

### #89602 fix(status): show effective channel model override

- bucket: needs_proof
- author: zerone0x
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:45:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - resolve channel-level `channels.modelByChannel` overrides in `/status` even when they differ from the session/default model - show the effective channel override model as the primary model and include the session/default model separately - add reg

### #92976 fix(auto-reply): preserve message sending hooks

- bucket: needs_proof
- author: pony-maggie
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:56:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Compose channel/custom `beforeDeliver` hooks with both `reply_payload_sending` and `message_sending` in the shared dispatcher paths. - Keeps the existing order explicit: channel/custom transform first, reply payload hooks second, message-sending g

### #63456 Scope workspace guidance to coding contexts

- bucket: needs_proof
- author: ImLukeF
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, maintainer, size: XL, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:06:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - scope repo-style workspace guidance to coding contexts only - stop injecting commit reminders for general assistant/product sessions - add tests covering coding vs non-coding prompt behavior ## Testing - pnpm exec vitest run src/agents/system-prom

### #55351 Preserve Open WebUI UUID sessions across Control UI

- bucket: needs_proof
- author: SHAREN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:06:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve Open WebUI UUID chat ids instead of canonicalizing them to `agent:main:<uuid>` in the gateway session store - normalize `agent:main:<uuid>` back to the original bare UUID when the Control UI reads or writes chat URLs - pass agent context 

### #63710 fix(image): mixed-source image input for vision-capable models

- bucket: needs_proof
- author: xiaoHEI-312
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T14:06:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: In WebUI, when a prompt mixes an uploaded inline image with an explicit HTTP(S) image URL, only the inline image is included in the first native vision request. The HTTP(S) URL remains plain text and is effectively ignored unless the mode

### #92986 fix(onboard): skip Homebrew prompt on unsupported platforms

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:24:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Gate the Homebrew install recommendation behind a platform check so FreeBSD and other non-darwin/non-linux platforms no longer see a misleading brew prompt during onboarding. Previously, `needsBrewPrompt` used `process.platform !== "win32"` which al

### #64044 fix(infra): upgrade base image from Debian 12 to Debian 13 (trixie)

- bucket: needs_proof
- author: junmo-kim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, docker, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:24:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Debian 13 (trixie) reached stable on 2025-08-09; advances the base image to the current Debian stable release - Updates `node:24-bookworm` → `node:24-trixie` across the Dockerfile, smoke-test images, and ARG digest pins - GLIBC advances from 2.36 

### #64703 fix: parse scientific notation as number in parseConfigValue

- bucket: needs_proof
- author: Rahulkumar070
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:25:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `parseConfigValue` did not recognize scientific notation (e.g. `1e5`, `2.5e10`) as a number. The regex `/^-?\d+(\.\d+)?$/` only matched plain integers and decimals, so scientific notation was silently returned as a string instead of a num

### #64820 fix(feishu): break circular module init causing ReferenceError on group mention

- bucket: needs_proof
- author: Ricardo-M-L
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:26:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #64783 When mentioning (`@`) a bot in a Feishu group chat with multi-agent configuration, the gateway throws: ``` ReferenceError: Cannot access 'utils_1' before initialization ``` **Root cause:** `monitor.account.ts` statically imports `handle

### #65180 fix(cli,sessions): make local model run stateless by default and keep transcript fallback profile-scoped

- bucket: needs_proof
- author: jnk0423
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:26:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## 요약 이 PR은 local one-shot model run correctness를 복구하기 위한 승격 패치셋이다. 포함된 변경은 두 가지다. 1. `infer model run --local`의 기본 동작을 stateless로 변경 - 기본 one-shot은 ephemeral session을 사용 - explicit `sessionId/sessionKey`가 있을 때만 reuse가 살아 있음 2. session store / transcript fallb

### #65198 test: cover string-backed non-streaming assistant replies

- bucket: needs_proof
- author: alexuser
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:27:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a single regression test covering the case where a `message_end` event carries its assistant reply as a plain string rather than an array of typed content blocks. The implementation path under test (`extractAssistantTextForPhase` in `pi-embedde

### #67174 Teams: support separate graphTenantId for cross-tenant Graph API access

- bucket: needs_proof
- author: hddevteam
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, size: M, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:29:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `graphTenantId` config field (and `MSTEAMS_GRAPH_TENANT_ID` env var) to the Microsoft Teams provider so deployments where the bot app is registered in one Azure tenant but Teams/M365 data lives in a separate Microsoft 365 tenant can acquire tok

### #68958 fix: Remove comments from tsconfig.json to resolve JSON parsing error

- bucket: needs_proof
- author: kejw05
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:29:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The `qa/convex-credential-broker/convex/tsconfig.json` file contains `/* */` style comments, which cause JSON parsing errors in strict JSON parsers: ``` Expected ',' or '}' after property value in JSON at position 70 ``` ## Solution - Removed all co

### #68996 fix(google): route Gemma models through native Generative AI API

- bucket: needs_proof
- author: tanjinlimkelvin-dot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:30:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Gemma models (gemma-4-31b-it, gemma-4-26b-it, etc.) fail silently when used through the Google provider. The OpenAI-compatible endpoint (`/v1beta/openai/chat/completions`) returns 400/401 errors for Gemma models — only the native Generative AI endpo

### #69010 fix(gateway): prefer current route delivery context

- bucket: needs_proof
- author: cgdusek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, clawsweeper, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:30:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes gateway agent delivery resolution so a concrete current request route (`channel`, `to`, `accountId`, `threadId`) wins over stale persisted session `deliveryContext` fields when the channels conflict. - Clears stale route fields on channel sw

### #69245 feat: enable cache-ttl context pruning for openai-completions providers

- bucket: needs_proof
- author: g18166599417-svg
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:31:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Enable cache-ttl based context pruning for all providers using the \openai-completions\ API type. Currently, \isCacheTtlEligibleProvider\ only returns \ rue\ for Anthropic-family and Google-family providers (plus those registered via provider plugin

### #69319 gateway: register skills.uninstall RPC (mirror of skills.install)

- bucket: needs_proof
- author: sk7n4k3d
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:32:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #69299. Adds a `skills.uninstall` Gateway RPC method, mirroring `skills.install`, so operators can remove an installed ClawHub skill from the default agent workspace over the Gateway control plane. ## Changes - Schema: `SkillsUninstallParamsSchema` in `s

### #69355 feat(doctor): detect local rebuild vs pristine npm release

- bucket: needs_proof
- author: mikaeldiakhate-cell
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:33:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem A stock `openclaw update` silently overwrites locally patched installs. Regressions return quietly because operators have no signal that the running package has diverged from the pristine npm release. Concrete trigger: the 2026-04-20 dist-overlay au

### #69413 signal: detect bot mentions from native envelope metadata

- bucket: needs_proof
- author: danicuki
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: signal, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:33:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Signal renders native @mentions as `@<uuid>` or `@<phone>` after hydrating `\uFFFC` placeholders, but the mention-gating regex patterns are derived from the agent's display name (e.g. `\b@?caio\b`). These never match, so `wasMentioned

### #69426 agents/context: unlock context1m on proxied Anthropic 1M-capable models (#69353)

- bucket: needs_proof
- author: sk7n4k3d
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:33:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #69353. ### Summary `isAnthropic1MModel` in `src/agents/context.ts` gates the 1M context window on `provider === "anthropic"`, so `context1m: true` was a silent no-op for any provider proxying Claude Opus 4 / Sonnet 4 — notably the bundled `github-copilo

### #69428 fix(msteams): paginate thread replies and keep recent context

- bucket: needs_proof
- author: hkalkoti1
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: msteams, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:33:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Title: fix(msteams): paginate thread replies and keep recent context ## Summary - Problem: Teams thread context enrichment only used the first Graph replies page, so long threads could skew toward the oldest replies. - Why it matters: the bot could miss the ne

### #69491 feat(amazon-bedrock): forward default Anthropic betas through the bedrock-converse stream route

- bucket: needs_proof
- author: adhajar-amzn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:33:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds the anthropic default beta headers to the bedrock flow to allow openclaw deployed using claude models on bedrock the ability to get tool call streaming - Problem: - Why it matters: Using OC on Bedrock in time sensitive systems would lea

### #69494 fix: resolve SecretRef keychain tokens in desktop app browser proxy

- bucket: needs_proof
- author: shad0wca7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:34:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `gateway.auth.token` is configured as a SecretRef (e.g., `{source: "exec", provider: "keychain", id: "gateway-auth-token"}`), the macOS desktop app fails to resolve the actual token value. This causes: 1. Desktop app reads `gateway.auth.token` 

### #69495 feat(heartbeat): support model fallbacks via {primary,fallbacks} (#69434)

- bucket: needs_proof
- author: zote
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:34:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Accept `agents.*.heartbeat.model` as `{ primary, fallbacks }` in addition to the existing string form, mirroring `agents.defaults.model`. Closes #69434. - Heartbeat ticks now fail over to the next fallback on retriable provider errors (rate-limit/

### #69954 fix: fall back to canonical session transcripts during cleanup

- bucket: needs_proof
- author: Blahdude
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:35:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `sessions cleanup --fix-missing` can prune a live session when the persisted `sessionFile` path is stale even though the canonical `<sessionId>.jsonl` transcript still exists. - Why it matters: valid sessions can be incorrectly deleted du

### #69972 fix restart CI typings and prefer the current worktree under Vitest

- bucket: needs_proof
- author: OpenCnid
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, agents, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:36:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - repair the restart transaction typing fallout from the gateway restart handoff merge - prefer the current source checkout when Vitest or tsx resolves argv[1] through a borrowed node_modules tree - cover the worktree case with a bundled-dir regress

### #69999 feat(macos): wallboard shell — fullscreen WKWebView on external display (REL-433)

- bucket: needs_proof
- author: moneypennyrasener
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:36:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** No native macOS shell exists for the wall dashboard MVP; REL-434 needs a fullscreen, chrome-free host before it can wire in the clock-only Concept A surface. - **Why it matters:** The wall dashboard requires a dedicated window that fi

