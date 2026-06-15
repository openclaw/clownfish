---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-044
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
  - "#93045"
  - "#93030"
  - "#77653"
  - "#76140"
  - "#54830"
  - "#77053"
  - "#77067"
  - "#77312"
  - "#77393"
  - "#90868"
  - "#89982"
  - "#92889"
  - "#58421"
  - "#59517"
  - "#75138"
  - "#75139"
  - "#75141"
  - "#75951"
  - "#76034"
  - "#76141"
  - "#76175"
  - "#76230"
  - "#76234"
  - "#76341"
  - "#76364"
cluster_refs:
  - "#93045"
  - "#93030"
  - "#77653"
  - "#76140"
  - "#54830"
  - "#77053"
  - "#77067"
  - "#77312"
  - "#77393"
  - "#90868"
  - "#89982"
  - "#92889"
  - "#58421"
  - "#59517"
  - "#75138"
  - "#75139"
  - "#75141"
  - "#75951"
  - "#76034"
  - "#76141"
  - "#76175"
  - "#76230"
  - "#76234"
  - "#76341"
  - "#76364"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.203Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 44

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93045 fix(gateway): compute sessions.usage aggregate totals from all sessions, not just the limited page (fixes #76496)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:08:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Real behavior proof - **Behavior addressed:** `sessions.usage` aggregate totals (totalCost, totalTokens, etc.) were computed only from sessions within the `limit` page, silently excluding sessions beyond the limit. With >50 active sessions and default limit

### #93030 fix(infra): resolve ssh client from trusted system dirs (#83289)

- bucket: needs_proof
- author: manan-tech
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:23:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveSshConfig` and `startSshPortForward` spawned a hard-coded `/usr/bin/ssh`. On hosts where the system ssh client lives elsewhere, both SSH config discovery and gateway tunneling fail, notably: - **Windows**: the built-in OpenSSH client is at `

### #77653 fix(feishu): normalize reaction message IDs for API calls

- bucket: needs_proof
- author: yfge
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:24:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #34528 by separating Feishu synthetic reaction event IDs from Open Message IDs used for Feishu API calls. - Adds `normalizeFeishuOpenMessageId` and applies it to replies, reads, edits, card updates, media replies, reactions, pins, and stream

### #76140 fix(memory): prevent cross-agent dreaming contamination (Bug #65374)

- bucket: needs_proof
- author: dryftr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XL, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:32:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a cross-agent identity contamination vector in the memory dreaming pipeline. When multiple agents share a workspace, `resolveSessionAgentsForWorkspace()` returns ALL agent IDs with zero isolation, allowing one agent's dreaming sweep to ingest 

### #54830 feat: context provenance metadata for injected bootstrap segments

- bucket: needs_proof
- author: jack91620
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:32:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add optional `provenance` metadata (`source`, `injectedAt`, `volatile`) to `EmbeddedContextFile` type - Bootstrap context files (SOUL.md, AGENTS.md, TOOLS.md, etc.) are now tagged with provenance when assembled by `buildBootstrapContextFiles()` - 

### #77053 feat(lmstudio): opt-in idle TTL via native load API

- bucket: needs_proof
- author: firat-elbey
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, extensions: lmstudio, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:33:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Title: feat(lmstudio): opt-in idle TTL via native load API ## Summary - Problem: LM Studio JIT (Just-In-Time) loaded models — models loaded on-demand when inference is first requested — can stay resident in VRAM longer than desired on shared/local GPU boxes. -

### #77067 fix(qqbot): add TCP keepalive + heartbeat interval logging to prevent silent connection drops

- bucket: needs_proof
- author: Allonz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, channel: qqbot, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:33:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Problem **Messages delayed by up to 9 minutes due to silent WebSocket connection failures.** On 2026-05-04 07:13, a user sent a message via QQBot. The message was not received until 07:22:18 — **9 minutes of delay**. During this entire period, the OpenClaw

### #77312 fix: display file path when model uses 'file' parameter alias (#54882)

- bucket: needs_proof
- author: LvShaoJunloveYuanZaiChen
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:33:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #54882 When the model calls `Read`, `Write`, or `Edit` tools using the `file` parameter alias (instead of `path`/`file_path`/`filePath`), the verbose/block-streaming tool summary shows only the emoji + label (e.g. `📖 Read`) without the file p

### #77393 fix: typing TTL, context display, rate limit messages, slack catch-up reconnect

- bucket: needs_proof
- author: TristanTs
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:33:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Several bug fixes and improvements discovered during production use: ### Bug fixes - **Typing TTL too short** — default 60s TTL caused typing indicators to expire during long LLM responses; increased to 20min (`typing.ts`) - **Context token display 

### #90868 fix(codex): map Code Mode exec hooks to shell policy

- bucket: needs_proof
- author: Kaspre
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, extensions: codex, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:42:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is the narrower positive-delivery fix for the Codex Code Mode PreToolUse bypass. - keeps the native hook relay path intact instead of disabling Codex-native surfaces - maps Codex's patched `code_mode_exec` PreToolUse payload into OpenClaw's exi

### #89982 fix(agents): use appropriate log levels in tools-manager and resource-loader

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:45:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Aligns log level usage with message severity in two agent utility files. ## Changes ### `src/agents/utils/tools-manager.ts` - `console.log` → `console.warn` for user-actionable warnings: - Offline mode enabled (tool skipped) - Android/Termux package

### #92889 fix(doctor): suppress false group-allowlist warning when all accounts override groupAllowFrom (fixes #92684)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:46:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `openclaw doctor` over-warns about an empty top-level `groupAllowFrom` when every sub-account defines its own populated `groupAllowFrom`. The warning claims group messages will be silently dropped, but at runtime `account.groupAllowF

### #58421 feat(plugins): add optional api.resetSession()

- bucket: needs_proof
- author: MrGPUs
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: L, plugin: file-transfer, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:59:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `main` already has gateway-side session reset support through `performGatewaySessionReset()`. This PR adds optional plugin-side `api.resetSession(key, reason?)` support on top of the current mainline architecture. - Adds `PluginResetSessionResult` t

### #59517 fix: drop replayed tool-call stubs from malformed assistant history

- bucket: needs_proof
- author: xDarkicex
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:59:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: provider-switched or malformed assistant transcript entries can replay literal `[TOOL CALL STUB]` placeholder text back into context. - Why it matters: those stub-only turns are dead transcript artifacts, not meaningful memory, and they c

### #75138 fix(daemon): load <stateDir>/gateway.env into runtime env

- bucket: needs_proof
- author: keane-751892
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:59:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `loadGlobalRuntimeDotEnvFiles` was reading `<stateDir>/.env` and (as a fallback) `~/.config/openclaw/gateway.env`, but never `<stateDir>/gateway.env`. That left a real-world gap: many users keep API keys and `GATEWAY_AUTH_TOKEN` in `~/.openclaw/gate

### #75139 fix(memory-core): drop dreaming theme echoes from promotion candidates

- bucket: needs_proof
- author: keane-751892
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:59:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Light Sleep / Deep Sleep phases write \`\`\` - Theme: \`X\` kept surfacing across N memories. \`\`\` into daily notes. The next dreaming cycle re-ingests the first line as a fresh candidate before the indented \`status: staged\` and \`recalls: 0\` r

### #75141 fix(gateway): silence mcp loopback conflict warn for typed unions

- bucket: needs_proof
- author: keane-751892
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:59:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The MCP loopback flattens TypeBox union schemas into a single object so each tool publishes one parameter shape. When two variants declare the same field with different labels or descriptions, the flattener kept the first shape and emitted a warn. W

### #75951 fix(memory-core): add actionable remediation hints for memory search embedding errors

- bucket: needs_proof
- author: QihongRuan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:59:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fresh port of #55684 onto current `main` (the source branch was 16k commits behind and unmergeable). Adds actionable remediation hints when `memory_search` or `openclaw memory status` surfaces an embedding-provider failure, so leaked-key, quota, and

### #76034 feat(config-ui): add basic/advanced field split and doc-link affordance

- bucket: needs_proof
- author: symonbaikov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:00:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ● - [x] Add FIELD_ADVANCED set in schema.hints.ts to mark technical config fields (auth cooldowns, gateway infra knobs, diagnostics subsections, etc.) as advanced, so the config form can hide them by default - [x] Add docLink field to ConfigUiHint type for fut

### #76141 fix(tui): expose verbose full mode [AI-assisted]

- bucket: needs_proof
- author: bdjben
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:00:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `full` to TUI `/verbose` completions and command description - update `/verbose` usage/help text to show `on|full|off` - cover `/verbose full` in command handler tests ## Tests - `node scripts/run-vitest.mjs run --config test/vitest/vitest.tui

### #76175 feat(whatsapp): add replyToOfflineMessages config to process missed messages after reconnect

- bucket: needs_proof
- author: rafaelmariano-glitch
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:00:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Messages received during WhatsApp disconnects are **silently lost**. When the gateway reconnects, offline messages arrive with `upsert.type === "append"` (history sync) and are **skipped** by default. This causes: - DM messages lost after reconnect 

### #76230 perf: optimize agent tool result middleware runtime check

- bucket: needs_proof
- author: arcanis2k3
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:00:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces an $O(N \times M)$ array lookup with an $O(N + M)$ Set-based lookup when filtering runtimes against declared middleware in the plugin registry. This improves efficiency during plugin registration. ## Summary - Problem: Suboptimal O(N*M) data structure

### #76234 feat: pass scopeEnvelope to before_prompt_build hooks

- bucket: needs_proof
- author: NikolaFC
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, agents, size: M, triage: dirty-candidate, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:00:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a typed `PromptBuildScopeEnvelope` session metadata object - persist/patch `scopeEnvelope` through session state and gateway session patch APIs - pass `scopeEnvelope` into `before_prompt_build` so prompt-build hooks can receive structured work

### #76341 fix(slack): make tool-progress draft preview ephemeral; preserve agent text segments

- bucket: needs_proof
- author: ShadowWalker2014
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, scripts, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:01:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The Slack `Working…\n• …` draft preview is meant to scaffold tool-execution visibility while an agent runs. Today, those scaffolding messages linger as separate Slack messages every time the agent emits a new assistant-message segment mid-turn, or f

### #76364 fix(restart): skip unavailable lsof in initial scan

- bucket: needs_proof
- author: neilofneils404
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:01:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat ENOENT/EACCES/EPERM from the initial Unix lsof stale-PID scan as expected lsof-unavailable states - Keep warnings for unexpected spawn errors and nonzero lsof statuses - Share the permanent-unavailable classification with the later polling p

