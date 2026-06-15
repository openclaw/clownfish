---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-060
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
  - "#81190"
  - "#92900"
  - "#90227"
  - "#90234"
  - "#90266"
  - "#80632"
  - "#92892"
  - "#77784"
  - "#79747"
  - "#79882"
  - "#80033"
  - "#81158"
  - "#81243"
  - "#89635"
  - "#81300"
  - "#81415"
  - "#81641"
  - "#81778"
  - "#90300"
  - "#90328"
  - "#90331"
  - "#90356"
  - "#90365"
  - "#90373"
  - "#90394"
  - "#90401"
  - "#90407"
  - "#89517"
  - "#92307"
  - "#81794"
  - "#81825"
  - "#81834"
  - "#81857"
  - "#81864"
  - "#81907"
  - "#81916"
  - "#81921"
  - "#82232"
  - "#82458"
  - "#82495"
cluster_refs:
  - "#81190"
  - "#92900"
  - "#90227"
  - "#90234"
  - "#90266"
  - "#80632"
  - "#92892"
  - "#77784"
  - "#79747"
  - "#79882"
  - "#80033"
  - "#81158"
  - "#81243"
  - "#89635"
  - "#81300"
  - "#81415"
  - "#81641"
  - "#81778"
  - "#90300"
  - "#90328"
  - "#90331"
  - "#90356"
  - "#90365"
  - "#90373"
  - "#90394"
  - "#90401"
  - "#90407"
  - "#89517"
  - "#92307"
  - "#81794"
  - "#81825"
  - "#81834"
  - "#81857"
  - "#81864"
  - "#81907"
  - "#81916"
  - "#81921"
  - "#82232"
  - "#82458"
  - "#82495"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.485Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 60

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #81190 fix(agents): truncate tool results before overflow compaction

- bucket: ready_for_maintainer
- author: LLagoon3
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:53:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: tool-heavy context overflows could wait for the full LLM auto-compaction timeout before trying the existing deterministic tool-result truncation recovery. - Why it matters: small follow-up turns in long-lived Telegram sessions can appear 

### #92900 fix(ui): refresh overview model auth status on demand

- bucket: ready_for_maintainer
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:57:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92888 ## Summary - pass `{ refresh: true }` from `refreshActiveTab` when the Overview tab is manually refreshed - keep the existing deferred Overview secondary loader behavior, but force the model auth status call to bypass the gateway's 60s cache - add

### #90227 test: make zalo credentials tests compatible with Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalouser, size: XS, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:58:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Enables running Zalo credentials tests on Windows: 1) by conditionalizing POSIX-specific permission stat mode checks so we only assert them on POSIX platforms, while validating directory/file presence on Windows, and 2) by replacing the hardcoded Windows skip 

### #90234 fix(agents): filter unresolved model registry rows

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:58:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #66961. - Filter generated `models.json` provider rows before write so model-bearing providers only survive when they have a usable execution contract: `baseUrl` plus usable auth, or an explicit runtime-accepted no-key auth mode such as `aws-s

### #90266 test: detect file symlink support dynamically in json-file tests

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:59:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skip in JSON file helper tests with a dynamic file symlink capability check. If file symlinks are supported by the environment, the tests execute. Otherwise, they skip gracefully, allowing correct platform-specific testing. ### V

### #80632 fix(slack): route mission replies to canonical threads

- bucket: ready_for_maintainer
- author: Chw5722
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:00:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Root Cause Hermes carries Slack thread affinity as first-class routing state. OpenClaw only propagated Slack thread IDs through some paths. For mission messages in Slack channels, `replyToMode=off` could leave `MessageThreadId` unset, so final replies, stre

### #92892 fix(gateway): allow Gemini CLI image-capable models

- bucket: ready_for_maintainer
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:05:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91739 ## Summary - treat `google-gemini-cli` Gemini flash/pro chat models as image-capable when catalog metadata is stale or missing image input - preserve fail-closed behavior for non-chat Gemini models such as embeddings - add focused `resolveGatewayM

### #77784 Add Teams delegated auth for plugin tools

- bucket: ready_for_maintainer
- author: MSNexploder
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, scripts, agents, size: XL, extensions: codex, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T22:08:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Plugin tools could not safely request a per-user Microsoft Teams delegated token from the current Teams conversation. - Why it matters: Teams/Graph OBO-style integrations need user-delegated context without leaking channel tokens into pro

### #79747 feat(control-ui): add pinned chat slots

- bucket: ready_for_maintainer
- author: hekunwang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T22:09:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a Control UI sidebar pinned-chats strip with configurable slots, drag reorder, inline rename, unpin, and one-click parallel chat creation - persist pinned chat keys/slot count locally and sync them through `sessions.patch` so the preference fo

### #79882 feat(mcp): add shared runtime scope for bundled MCP servers

- bucket: ready_for_maintainer
- author: shebson
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:10:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** session-scoped bundled MCP runtimes (`getOrCreateSessionMcpRuntime`) pay a full cold start (spawn + connect + `listTools` per server) on each fresh session, and explicitly retire on subagent step completion (`agent-step.ts:80,109`). F

### #80033 fix(opencode-go): add supportedReasoningEfforts to DeepSeek V4 model entries

- bucket: ready_for_maintainer
- author: wrcno1
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:10:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem DeepSeek V4 Flash and V4 Pro natively support reasoning_effort: "max" at the API level. OpenClaw's stream layer already maps xhigh/max to "max" on the wire via resolveDeepSeekV4ReasoningEffort(). However, the opencode-go provider did not expose thes

### #81158 fix(plugins): prevent workspace snapshot auto-trust

- bucket: ready_for_maintainer
- author: Lucenx9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:12:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: unscoped plugin auto-enable could reuse the process-wide current plugin metadata snapshot even when that snapshot was scoped to an active workspace. - Why it matters: a workspace plugin that claimed a built-in channel could be selected be

### #81243 feat(discord): add fetch action to retrieve a single message by ID or URL

- bucket: ready_for_maintainer
- author: yousan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, scripts, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T22:13:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## TL;DR (30-second review) - **What:** Adds `action: "fetch"` to the Discord `message` tool — retrieve a single message by `channelId` + `messageId`, or by Discord message URL (`url`). - **Why:** The internal `fetchMessage` path already existed but wasn't on 

### #89635 fix(security): cap state directory writes to 0700

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:13:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89589 ## Summary `writeTextAtomic` computes `dirMode` as `0o777 & ~process.umask()`, which yields `0o775` under the common `umask 0o002`. When the atomic replace helper ensures the parent directory exists, it sets that mode, relaxing a previously harden

### #81300 codex: plumb session reasoningLevel into codex model_reasoning_summary

- bucket: ready_for_maintainer
- author: iYoungblood
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, extensions: codex, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:14:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The codex app-server defaults `model_reasoning_summary` to `"none"` when it isnt explicitly configured. As a result codex still produces reasoning items internally (visible in its rollout `.jsonl`) but never emits `item/reasoning/summaryTextDelta` n

### #81415 fix(agents): attach read tool images to replies

- bucket: ready_for_maintainer
- author: aqilaziz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:16:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Persist trusted `read` tool image content into the inbound media store when the tool result has image blocks but no `MEDIA:` path or `details.path`. - Queue the saved `media://inbound/...` reference for the next assistant reply so shared outbound 

### #81641 fix(cli): make `models aliases remove` honest about built-in aliases

- bucket: ready_for_maintainer
- author: ScientificProgrammer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:17:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `openclaw models aliases list` and `openclaw models aliases remove` disagree about whether built-in aliases (the `DEFAULT_MODEL_ALIASES` table — `opus`, `sonnet`, `gpt`, `gpt-mini`, `gpt-nano`, `gemini`, `gemini-flash`, `gemini-flash-lite`) exist.

### #81778 fix(status): detect shell-wrapped gateway services

- bucket: ready_for_maintainer
- author: liaoandi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:19:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #81751. - Teaches gateway service audit to inspect shell-wrapped LaunchAgent command strings such as `/bin/zsh -lc "... index.js gateway --port 18890"`. - Reuses the expanded command tokens for gateway port detection so shell-wrapped service

### #90300 fix: route agent command replies through reply hooks

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:24:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes agent-command durable final delivery so recovered/main-session replies carry `reply_payload_sending` hook metadata into the existing outbound send path. - Lets channel plugins that rely on `reply_payload_sending` observe, rewrite, cancel, or

### #90328 Expose model picker agent runtimes

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:24:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds additive `agentRuntime` metadata to `models.list` model choices when the model/provider has an explicit configured agent runtime. - Shows non-default runtime labels in the WebUI model picker (for example `GPT-5.5 · OpenAI Codex`) without chan

### #90331 fix(agents): harden gateway config self-edits

- bucket: ready_for_maintainer
- author: Daozheyuanxi
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:25:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Keep agent-facing gateway config self-edits within the existing narrow trust boundary; global media/model routing remains operator-owned. - Add regression coverage proving defaults-level media/PDF model routing fields stay protected from agent confi

### #90356 fix(status): use legacy Codex OAuth profiles for OpenAI usage

- bucket: ready_for_maintainer
- author: sovushik
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:25:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - map legacy `openai-codex` OAuth/token profiles to the canonical `openai` usage provider - let provider usage auth resolution try `openai-codex:*` credentials when collecting `openai` ChatGPT usage, including plugins that explicitly request `resolv

### #90365 test(browser): replace broad win32 skip with dynamic directory symlink check

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:25:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Description Replaced the broad and unconditional `win32` platform check in `output-directories.test.ts` with a dynamic capability check for directory symlink support (`canCreateDirectorySymlinks`). If the capability is not present, the test skips gracefull

### #90373 fix(gateway): remove device-backed node pairings

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: L, plugin: file-transfer, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:26:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #88488. `node.list` can surface Android/phone nodes from the device-pairing store (`devices/paired.json`) when the paired device has an effective `node` role, but `node.pair.remove` only removed records from the legacy node-pairing store (`nod

### #90394 fix(discord): extend component callback ttl

- bucket: ready_for_maintainer
- author: 100menotu001
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:26:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Raise the default Discord component callback registry TTL from 30 minutes to 7 days. - Expand the bounded `agentComponents.ttlMs` override maximum from 24 hours to 30 days. - Refresh Discord config docs, UI hints, generated config metadata, and ba

### #90401 docs(local-models): add Atomic Chat as an OpenAI-compatible local server

- bucket: ready_for_maintainer
- author: danyurkin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:26:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds Atomic Chat to the local-models guide as another OpenAI-compatible local server, alongside the existing LM Studio / Ollama / MLX / custom-proxy guidance. [Atomic Chat](https://atomic.chat/) is a desktop app that runs open-weight models locally and exposes

### #90407 fix(memory-lancedb): align apache arrow peer dependency

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-lancedb, size: XS, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T22:26:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Pin `extensions/memory-lancedb` from `apache-arrow@21.1.0` to `18.1.0`, the highest version accepted by `@lancedb/lancedb@0.30.0`. - Regenerate the plugin `npm-shrinkwrap.json` with the repo shrinkwrap generator (`scripts/generate-npm-shrinkwrap.m

### #89517 [codex] fix gateway hot-mode restart reloads

- bucket: ready_for_maintainer
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:26:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes the silent-staleness hole in `gateway.reload.mode: "hot"` without changing the shipped default contract. Hot mode keeps warn-and-keep for routine restart-required config edits; two scoped behaviors layer on top: - **`gateway.reload.autoRestar

### #92307 Warn when host approvals clamp exec security at startup

- bucket: ready_for_maintainer
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:37:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Warn once during gateway startup when requested global `tools.exec` security is stricter-clamped by the local host approvals file. - Reuse the same clamp predicate as `openclaw exec-policy show`, keep the diagnostic read-only, and suppress node/sa

### #81794 feat(control-ui): compress static assets

- bucket: ready_for_maintainer
- author: jbetala7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:45:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #81754. ## Summary - add Accept-Encoding negotiation for Control UI static assets - serve gzip or brotli for compressible text assets while leaving images raw - advertise negotiated encoding on HEAD requests ## Real behavior proof Behavior or issue addre

### #81825 fix(skills/1password): stop forcing tmux for desktop app auth (#52540)

- bucket: ready_for_maintainer
- author: koshaji
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:46:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The bundled `1password` skill instructed agents to wrap every `op` invocation in a tmux session. That blanket requirement breaks the **desktop app** integration path: the 1Password CLI desktop-app integration uses a per-user IPC channel (XPC on macO

### #81834 feat(senseaudio): add SenseAudio TTS provider

- bucket: ready_for_maintainer
- author: KLilyZ
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, extensions: senseaudio, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:46:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `senseaudio` bundled plugin only has ASR; no TTS. - Why it matters: completes the round trip in the same plugin; SenseAudio's `/v1/t2a_v2` is solid TTS and pairs with the ASR added in #66943. - What changed: registers a `speechProvider` i

### #81857 fix(plugins): scope tool lookup to loaded plugins

- bucket: ready_for_maintainer
- author: seank-com
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T22:47:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: with `tools.allow: ["group:core", "group:plugins"]` and `plugins.slots.memory: "memory-core"`, plugin tool resolution returned zero tools whenever the manifest snapshot also included a bundled-but-not-loaded sibling such as `memory-lanced

### #81864 feat(approvals): add plain-language plugin approvals

- bucket: ready_for_maintainer
- author: kennykankush
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: imessage, channel: matrix, channel: nostr, channel: signal, channel: slack, channel: telegram, channel: whatsapp-web, channel: zalo, app: web-ui, extensions: memory-core, scripts, docker, agents, stale, size: XL, extensions: qa-lab, extensions: memory-wiki, extensions: codex, extensions: diagnostics-prometheus, extensions: deepinfra, proof: supplied, proof: sufficient, extensions: oc-path, mantis: telegram-visible-proof, extensions: diffs, extensions: google, extensions: openrouter, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:47:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Mission Plugin approvals are a security boundary, but they are often delivered in chat where the old fallback text read like internal debug output. A normal approval could show a raw title, full command text, proposed exec policy, session key, tool/plugin I

### #81907 fix(webchat): preserve code block whitespace

- bucket: ready_for_maintainer
- author: jbetala7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:48:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #81339 ## Summary - stop trimming normal WebChat send payloads before `chat.send` - keep slash/local command matching, dedup, and history on the trimmed text while preserving the user-authored chat text on the wire - preserve queued and steered queued me

### #81916 fix(compaction): bound stale transcript usage

- bucket: ready_for_maintainer
- author: jbetala7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:48:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #81178 ## Summary - bound stale raw transcript prompt-usage snapshots against the recent active replay estimate - keep post-usage tail pressure additive for fresh usage records so interrupted tool output after the latest usage record remains conservative

### #81921 fix(plugin-sdk): expose skills helper surfaces

- bucket: ready_for_maintainer
- author: jbetala7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:49:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #81913 ## Summary - re-export workspace skill loaders and frontmatter metadata helpers from `openclaw/plugin-sdk/skills-runtime` - re-export host env override sanitizer helpers from `openclaw/plugin-sdk/sandbox` - add focused SDK contract tests for the n

### #82232 Add CLI tool plan execution

- bucket: ready_for_maintainer
- author: MAdArab872
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:56:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a deterministic tool-plan execution CLI that replays planned tool calls through the existing Gateway `tools.invoke` boundary instead of creating a parallel dispatcher. - adds `executeToolPlan` with array and `{ steps }` plan support - adds `ope

### #82458 fix(infra): drop duplicated "restart" word in restart-sentinel summary

- bucket: ready_for_maintainer
- author: jameswniu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:01:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Restart-event chat messages emit the word `restart` twice when `payload.kind === "restart"`, producing strings like `Gateway restart restart ok (gateway.restart)`. This is the most common `kind` value (every `/restart` from a chat cli

### #82495 fix(doctor): scope state dir scan to current home

- bucket: ready_for_maintainer
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:01:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw doctor` state-integrity checks enumerated sibling account homes under `/home` or `/Users` while looking for extra `.openclaw` state dirs. - Why it matters: the warning can disclose other users' OpenClaw state paths and can flag 

