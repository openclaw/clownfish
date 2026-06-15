---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-056
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
  - "#90192"
  - "#90216"
  - "#90252"
  - "#90754"
  - "#65409"
  - "#93335"
  - "#93343"
  - "#92711"
  - "#93285"
  - "#93352"
  - "#92696"
  - "#92898"
  - "#92712"
  - "#93332"
  - "#92217"
  - "#93350"
  - "#70630"
  - "#93365"
  - "#93368"
  - "#93315"
  - "#93268"
  - "#93304"
  - "#93372"
  - "#40311"
  - "#40877"
cluster_refs:
  - "#90192"
  - "#90216"
  - "#90252"
  - "#90754"
  - "#65409"
  - "#93335"
  - "#93343"
  - "#92711"
  - "#93285"
  - "#93352"
  - "#92696"
  - "#92898"
  - "#92712"
  - "#93332"
  - "#92217"
  - "#93350"
  - "#70630"
  - "#93365"
  - "#93368"
  - "#93315"
  - "#93268"
  - "#93304"
  - "#93372"
  - "#40311"
  - "#40877"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.798Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 56

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90192 fix(feishu): fetch quoted content before empty-message guard

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:55:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix #90177 — Feishu group reply with only `@bot` gets dropped before quoted content is fetched. ## Real behavior proof **Behavior addressed**: Feishu group reply with only `@bot` mention (no additional text) is no longer dropped before quoted conten

### #90216 [codex] fix(google): register Vertex media generation contracts

- bucket: needs_proof
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:55:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Register `google-vertex` for the Google plugin's image and video generation contracts. - Add a manifest regression test so Vertex remains listed alongside AI Studio for media generation. Fixes #90209. ## Verification - `node scripts/run-vitest.mjs

### #90252 fix(state-migrations): archive plugin install index on conflict instead of keeping it

- bucket: needs_proof
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:56:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Archive the legacy plugin install JSON file even when conflicting records are detected, instead of leaving it in place. - Conflict warning is now emitted exactly once (on first migration) rather than on every subsequent gateway start. - Fix warnin

### #90754 feat(control-ui): add toggle to collapse/expand workspace files panel [AI-assisted]

- bucket: needs_proof
- author: vanmai40
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T15:57:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## AI-Assisted PR 🤖 This PR was built collaboratively with an AI coding agent (OpenClaw's assistant agent using DeepSeek V4) as part of an iterative pair-programming workflow. The human author (Van Mai) reviewed all code changes, tested the build, and confirm

### #65409 Populate codex-cli tool entries in system prompt report

- bucket: needs_proof
- author: marinosabijan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:58:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - materialize bundle MCP tools for the codex-cli system prompt report path - feed those effective tools into `buildSystemPromptReport(...)` instead of `[]` - assert via the existing bundle MCP e2e that CLI runs now report tool entries and schema cha

### #93335 fix(thinking): clamp below-range requests down to the cheapest level,…

- bucket: needs_proof
- author: obuchowski
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:05:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **TL;DR** For session sitting at thinking `off` no-off ("reasoning only") models get silently bumped to the **most expensive** reasoning level — and the wrong value is persisted into the session. ## Summary **What's wrong?** `resolveSupportedThinkingLevelFromP

### #93343 fix(codex): de-duplicate commentary notes across the raw response lane

- bucket: needs_proof
- author: Marvinthebored
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:06:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #93296. With `openai/gpt-5.4-mini` (OpenAI Codex app-server runtime) in verbose/rv mode, every inter-tool 💬 commentary "note" was delivered **twice** on Discord — two messages, identical text, distinct message ids. The codex event projector s

### #92711 [Bug]: Session write lock held for entire turn duration causes queued user messages to silently fail

- bucket: needs_proof
- author: lzyyzznl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:10:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Remove the turn-scoped `heldLock` acquisition at session start in `attempt.session-lock.ts` — the write lock is no longer acquired at `let heldLock = await acquireLock()` (line 688) and held across the entire turn lifecycle - Remove `reacquireAfte

### #93285 fix(control-ui): restore provider quota pill in chat composer controls

- bucket: needs_proof
- author: lzyyzznl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T16:11:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Restore the provider quota pill (usage/limit UI) that was accidentally removed from the Chat composer controls in v2026.6.1 - PR #88772 refactored the Chat header and moved session selection to the sidebar with `sessionSwitcherOnly=true`, which su

### #93352 fix(auth-profiles): import legacy auth-profiles.json into SQLite store on load

- bucket: needs_proof
- author: jailbirt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:12:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem After upgrading an install that stored credentials in per-agent `auth-profiles.json` to a 6.x build, **every agent fails with `401 invalid api key`** for any provider whose credentials resolve through an auth profile. The runtime auth-profile store

### #92696 fix(gateway): reap stale MCP processes on session reset regardless of agent run timeout

- bucket: needs_proof
- author: lzyyzznl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:15:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move `retireSessionMcpRuntime()` call to BEFORE `waitForEmbeddedAgentRunEnd()` in `src/gateway/session-reset-service.ts` - Previously, MCP process cleanup was conditional on the old agent run terminating within the 15-second grace window - With th

### #92898 skill_workshop: increase or make configurable the 160-byte description limit

- bucket: needs_proof
- author: lzyyzznl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T16:16:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Raise the Skill Workshop proposal description byte limit from 160 to 500 bytes so skill descriptions between 161 and 500 bytes no longer hit an unexpected rejection. - Bumped service-layer constant `MAX_SKILL_PROPOSAL_DESCRIPTION_BYTES` from 160 to

### #92712 [Bug]: Session stuck in permanent busy state after mid-turn gateway restart — no auto-recovery, only /new or /reset clears it

- bucket: needs_proof
- author: lzyyzznl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:20:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `clearStaleAbortedRunFlags()` function that scans all session stores and clears `abortedLastRun=true` from any session still in `status=running` state - Call it after all retry recovery attempts are exhausted (`attempt >= maxRetries` with `res

### #93332 fix(agents): repair retained compaction tool-use pairs

- bucket: needs_proof
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:20:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #93321 ## Summary - Repairs compaction history pruning before any budget-driven chunk drop so retained history cannot keep an assistant tool call without a matching tool result. - Adopts the repaired prune output in the production `compaction-safeguard`

### #92217 feat(fireworks): catalog DeepSeek V4 Pro, MiniMax M2.7, GLM-5.1, GPT-OSS 120B reasoning models

- bucket: needs_proof
- author: obuchowski
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T16:21:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **TL;DR** I run OpenClaw against Fireworks serverless and wanted their current reasoning lineup — DeepSeek V4 Pro, MiniMax M3, GLM-5.1, GPT-OSS 120B — selectable like any bundled model instead of falling through to the dynamic-model guesswork. Cataloging DeepS

### #93350 #93346: fix(ui): show effective runtime model in dropdown after fallback

- bucket: needs_proof
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:23:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix the chat model dropdown showing a stale selected model when the runtime silently falls back to the default model. The dropdown now reflects the effective runtime model. ## Linked context Closes #93346 - User selects `codex/gpt-5.5` in the dropdo

### #70630 fix(telegram): keep no-visible direct turns silent

- bucket: needs_proof
- author: notskynet-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:29:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This stops Telegram direct-message turns from fabricating silent-reply filler like `No added response from me.` when the turn ends with no visible final response and no actual error. Closes #70628. ## Root cause `extensions/telegram/src/bot-message-

### #93365 fix(memory-core): EPERM fallback for atomic reindex on Windows (#78640)

- bucket: needs_proof
- author: xydigit-sj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:29:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #78640. On Windows, `fs.rename()` can fail with `EPERM` when any handle holds the target file. The existing `renameWithRetry` loop treats `EPERM` as transient and retries, but on Windows the failure is persistent, so the atomic reindex eventua

### #93368 #92561: fix(security): bound context file ancestor walk to workspace root

- bucket: needs_proof
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:36:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Bound the `loadProjectContextFiles` ancestor directory walk to the workspace root instead of the filesystem root. This prevents untrusted AGENTS.md/CLAUDE.md files outside the workspace from being silently injected into agent context. ## Linked cont

### #93315 fix(acp): recover from kiro-style SessionResumeRequiredError in persistent session resume

- bucket: needs_proof
- author: xialonglee
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:38:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Thread-bound ACP sessions (Kiro) get stuck after backend invalidation — messages show processing signals but never return a normal text reply - Root cause: `isRecoverableMissingManagerPersistentSessionError` only matches `resource not found` and `

### #93268 fix(status): resolve "Vector store: unknown" on memory status fast path

- bucket: needs_proof
- author: lzyyzznl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T16:42:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When memory status is queried without probing the vector store (status-only manager), `status().vector?.storeAvailable` returns `undefined` even when the vector store has been successfully built in a previous session. This causes "Vector store: unkn

### #93304 fix(systemd): verify SUDO_USER unit file exists before targeting its scope (fixes #81410)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:49:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What does this PR do? Verifies the `SUDO_USER`'s systemd unit file actually exists before targeting that user's scope. A stale `SUDO_USER` env var from a previous `sudo` invocation can linger in a root shell, causing `openclaw gateway stop/start/status` to

### #93372 fix(telegram): default replies to legacy sendMessage

- bucket: needs_proof
- author: snowzlm
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:54:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #93263. This changes the default Telegram outbound reply path back to the widely supported Bot API `sendMessage` transport with `parse_mode: "HTML"`, instead of sending regular replies through Bot API 10.1 `sendRichMessage`. The regression in

### #40311 feat(web-search): expose Brave Goggles for custom search filtering and ranking

- bucket: needs_proof
- author: remusao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:59:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Brave Search supports [Goggles](https://search.brave.com/help/goggles), a [query-time DSL](https://brave.com/static-assets/files/goggles.pdf) that redefines how results are ranked at the index level (not client-side post-filtering), but O

### #40877 fix(ios): resolve main-thread warnings for CLLocationManager and SFSpeechRecognizer

- bucket: needs_proof
- author: eulicesl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:59:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `GatewayConnectionController.currentPermissions()` triggered iOS UI-responsiveness warnings by repeatedly constructing `CLLocationManager` and querying speech authorization in a main-actor-sensitive way. - Why it matters: repeated main-th
