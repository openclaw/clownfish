---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-064
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
  - "#83517"
  - "#93098"
  - "#83632"
  - "#93100"
  - "#84434"
  - "#84438"
  - "#84453"
  - "#84465"
  - "#84485"
  - "#84525"
  - "#84545"
  - "#84547"
  - "#84554"
  - "#84557"
  - "#84573"
  - "#84584"
  - "#84589"
  - "#84636"
  - "#84645"
  - "#84708"
  - "#84728"
  - "#84738"
  - "#84772"
  - "#90749"
  - "#90750"
  - "#88872"
  - "#90799"
  - "#90836"
  - "#93113"
  - "#93051"
  - "#73704"
  - "#80823"
  - "#81333"
  - "#81341"
  - "#81714"
  - "#82165"
  - "#82354"
  - "#82950"
  - "#83244"
  - "#83698"
cluster_refs:
  - "#83517"
  - "#93098"
  - "#83632"
  - "#93100"
  - "#84434"
  - "#84438"
  - "#84453"
  - "#84465"
  - "#84485"
  - "#84525"
  - "#84545"
  - "#84547"
  - "#84554"
  - "#84557"
  - "#84573"
  - "#84584"
  - "#84589"
  - "#84636"
  - "#84645"
  - "#84708"
  - "#84728"
  - "#84738"
  - "#84772"
  - "#90749"
  - "#90750"
  - "#88872"
  - "#90799"
  - "#90836"
  - "#93113"
  - "#93051"
  - "#73704"
  - "#80823"
  - "#81333"
  - "#81341"
  - "#81714"
  - "#82165"
  - "#82354"
  - "#82950"
  - "#83244"
  - "#83698"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.486Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 64

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #83517 feat(feishu): add agent message delete and recall

- bucket: ready_for_maintainer
- author: Sailiono
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T01:25:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # PR 1 draft: Feishu agent message delete and recall Title: ```text feat(feishu): add agent message delete and recall actions ``` ## Summary - Add an agent-callable `feishu_message` tool for `list`, `delete`, `recall`, `read_receipts`, and `read_users`. - Wire

### #93098 fix(tools): add encoding parameter to read tool for non-UTF-8 files

- bucket: ready_for_maintainer
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:25:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted (Claude). All behavior proof below was produced and verified by a human-run command in a real local checkout using OpenClaw CLI. ## Summary - **Problem:** The read tool always decodes files as UTF-8, causing garbled text (mojibake) when reading G

### #83632 feat(telegram): add guest mode

- bucket: ready_for_maintainer
- author: HoroTW
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: XL, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T01:26:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw did not support Telegram Guest Mode, so users could not summon a Telegram bot for a one-off answer from supported chats unless the bot was already participating through normal Telegram message handling. - Why it matters: Guest Mo

### #93100 fix(compaction): emit after_compaction on no-op and use JSON-safe validator delimiters (#81925)

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:26:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary OpenClaw issue #81925 documents two coupled defects that surface as HTTP 500s on voice channels when the context engine runs under memory pressure, especially for open-weight tool-calling models: 1. `after_compaction` is never emitted when compactio

### #84434 fix(cli): disable ScheduleWakeup/CronCreate in --print claude runs

- bucket: ready_for_maintainer
- author: SkyWolfDreamer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: anthropic, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:26:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `ScheduleWakeup` and `CronCreate` are Claude Code built-in tools that schedule deferred re-invocations managed by the persistent CLI runtime. In OpenClaw's one-shot `claude -p` runs the process exits at `end_turn`, so any wakeup or cr

### #84438 fix(cli): use flag terminator constant

- bucket: ready_for_maintainer
- author: humanbeingz-7
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:27:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replace the hardcoded `--` comparison in command path parsing with `FLAG_TERMINATOR` - update the argv terminator regression test to use the shared constant - add a CLI invocation regression test proving after-terminator tokens do not affect comma

### #84453 fix(scripts): detect destructured/re-export/dynamic imports in dist scanner

- bucket: ready_for_maintainer
- author: iFwu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:27:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `scripts/lib/package-dist-imports.mjs` is used by `postinstall-bundled-plugins`, `check-package-dist-imports`, `release-check`, and `check-openclaw-package-tarball` to make sure every relative `import` / `export ... from` / `import()` in `dist/**` r

### #84465 Strip apiKey fields from generated models.json

- bucket: ready_for_maintainer
- author: javi-codeworks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:27:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: generated `models.json` could persist `apiKey` fields from provider config rows. - Solution: strip `apiKey` recursively from the final `models.json` write payload. - What changed: provider/model metadata still writes, but provider-level a

### #84485 fix(discord): guard message-tool-only final delivery

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:28:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Discord `message_tool_only` turns can currently end without any visible source-channel delivery when the model does not call the `message` tool: - terminal `NO_REPLY` despite an owed visible status/result; - empty assistant final after tool work; - 

### #84525 fix: avoid serializing plaintext model api keys

- bucket: ready_for_maintainer
- author: gKev1n
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: refactor-only, triage: blank-template, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:28:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent config/source-managed plaintext provider API keys from being serialized into generated models.json contents. - Preserve the models.json auth/registry contract by writing a non-secret `openclaw-managed` apiKey marker instead of deleting the

### #84545 feat(google): route gemini-3.5-flash through forward-compat resolver

- bucket: ready_for_maintainer
- author: yhakami
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, extensions: google, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:28:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Gemini 3.5 Flash went GA at Google I/O 2026 (model id: `gemini-3.5-flash`). The forward-compat resolver in `extensions/google/provider-models.ts` had no branch for the 3.5 family, so: 1. `resolveGoogleGeminiForwardCompatModel(...)` fell through to `

### #84547 perf: attach jiti-normalized alias via source-object property

- bucket: ready_for_maintainer
- author: jokemanfire
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:28:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Multiple duplicate strings were found in the snapshot, with each instance occupying 101K Change-Id: Ia253dc246c2422366643e2b2ce92580b571d5f4c ## Summary - Problem:Heap snapshots revealed that three LRU caches in sdk-alias.ts (normalizedJitiAliasMapCache, plugi

### #84554 fix(memory-core): guard builtin fallback after qmd failures

- bucket: ready_for_maintainer
- author: jetd1
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:28:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: QMD fallback could create a full builtin memory manager even when builtin memory search was disabled or unusable, leaving unnecessary long-lived builtin resources after QMD failures. - Solution: probe the builtin fallback with a transient

### #84557 fix: strip plaintext model api keys from models json

- bucket: ready_for_maintainer
- author: Kzics
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:29:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Strip plaintext provider apiKey values from generated models.json before prompt-visible serialization. - Preserve SecretRef/env-managed markers and known non-secret auth markers. - Add regression coverage for configured plaintext keys, existing me

### #84573 Allow trusted plugin session presentations

- bucket: ready_for_maintainer
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T01:29:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Why Workflow plugins can already own tools, session actions, and control surfaces, but the active-session attachment path is currently bundled-only. That leaves trusted workflow plugins with no safe way to deliver a session-scoped Markdown artifact or a ric

### #84584 fix: enforce slash command boundaries

- bucket: ready_for_maintainer
- author: JulyanXu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:30:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Built-in slash handlers accepted longer command names that only shared a prefix, such as `/config-check` matching `/config`. - Solution: Centralize slash-command rest extraction behind a token boundary check. - What changed: Reused the bo

### #84589 fix(message): describe channel parameter as provider name

- bucket: ready_for_maintainer
- author: spacegeologist
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:30:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Clarify the message tool `channel` parameter as a messaging provider name, such as `slack` or `discord`. - Add coverage that the generated schema describes `channel` as a provider name rather than a conversation/channel ID. Fixes #10354 ## Real be

### #84636 memory: add local continuity snapshot helpers

- bucket: ready_for_maintainer
- author: iHow1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:31:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds local-first helpers for reading and rendering recent continuity snapshots under `memory/recent`: - parse frontmatter-based and legacy markdown continuity notes; - render a structured recent snapshot document; - build a small continuity manifest

### #84645 Materialize node-host inline interpreter eval before exec approval

- bucket: ready_for_maintainer
- author: rayzhudev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:31:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Materialize exact direct node-host inline eval forms into deterministic scripts before system-run approval planning: - `python -c CODE` - `python3 -c CODE` - absolute/venv Python paths with `-c CODE` - `node -e CODE` - `node --eval CODE` - Preserv

### #84708 fix(agents): recover message-tool mirror replay poison

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:33:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix a session-poisoning class where a message-tool delivery can be visible to the channel but leave the persisted/replayed history as: 1. assistant `toolUse` / `function_call` for `message` 2. no matching `toolResult` / `function_call_output` 3. tra

### #84728 Repair orphaned Codex custom tool outputs before resume

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:34:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #84727 ## What changed - Adds a Codex rollout transcript repair helper that stream-scans bound native rollout JSONL files for `custom_tool_call` items missing a matching `custom_tool_call_output`. - Runs that repair before resuming a bound Codex app-serv

### #84738 Stop writing plaintext provider keys to models.json

- bucket: ready_for_maintainer
- author: Finesssee
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:34:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop preserving stale plaintext provider `apiKey` values from existing `models.json` during merge-mode regeneration. - Strip plaintext provider keys at the final `models.json` serialization boundary while preserving env, SecretRef, OAuth, AWS, and

### #84772 fix(codex): honor tool result cap in app-server transcripts

- bucket: ready_for_maintainer
- author: hansolo949
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:35:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Codex app-server transcript projection had its own hardcoded tool-output cap (`12_000` chars), so configured OpenClaw limits such as `agents.defaults.contextLimits.toolResultMaxChars = 8000` did not apply before tool output was mirrored into the nat

### #90749 Fix realtime voice-call barge-in cancellation

- bucket: ready_for_maintainer
- author: moellenbeck
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: voice-call, app: web-ui, gateway, size: M, extensions: openai, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:39:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move realtime voice-call barge-in cancellation from local MuLaw speech detection to the provider VAD `input_audio_buffer.speech_started` event. - Guard cancellation with `talk.outputAudioActive` so user speech only cancels an active assistant audi

### #90750 fix(diagnostics): evict orphaned tool/model activity on owner-less run end

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, extensions: diagnostics-otel, size: M, extensions: diagnostics-prometheus, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:39:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Stale native `tool_call` diagnostic activity could survive a clean run teardown and re-block later turns on the same `sessionKey` as `blocked_tool_call` (#87310). `markDiagnosticEmbeddedRunEnded({ clearRunActivity: false })` — used by the reply-run 

### #88872 fix: attribute spawned task runs to child agent

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:39:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #66670 ## Summary - Attribute spawned subagent task records to the child/executing agent instead of the parent requester. - Pass the resolved `targetAgentId` through `sessions_spawn` registration and let task creation fall back to `childSessionKey` agent

### #90799 fix: handle Claude CLI synthetic placeholders

- bucket: ready_for_maintainer
- author: wangwllu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:40:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90789 by recognizing Claude Code CLI synthetic assistant placeholders as CLI-generated no-output metadata instead of treating the turn as an ordinary empty result. This covers the observed `model: "<synthetic>"` assistant events with: - `No r

### #90836 fix(cron): block self-narrating auto-announce replies

- bucket: ready_for_maintainer
- author: jsasson
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T01:41:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - tighten cron auto-delivery instructions so automatic final answers must be the exact user-facing message, not a narration of what was sent - add a delivery-side guard that blocks compact self-narrating cron auto-announce text before it reaches out

### #93113 fix(memory-core): report active dreaming phases in status

- bucket: ready_for_maintainer
- author: AgentArcLab
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:51:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix `memory status` so it reports active light-only and REM-only dreaming instead of deriving the `Dreaming` line solely from the deep promotion config. - Keep the existing deep-only status detail intact, including the current promotion thresholds

### #93051 fix(cron): honor configured retry.backoffMs for recurring error backoff floor

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:52:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary For recurring (`every`/`cron`) cron jobs that error, the safety-net backoff floor that sets `nextRunAtMs` was computed with the hardcoded `DEFAULT_ERROR_BACKOFF_SCHEDULE_MS`, **silently ignoring the operator-configured `cronConfig.retry.backoffMs`**

### #73704 fix(safeguard): resolve compaction provider/model before registering runtime

- bucket: ready_for_maintainer
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, channel: whatsapp-web, app: web-ui, gateway, cli, scripts, agents, size: L, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:57:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #57901. ## Summary Two-part fix for the safeguard auto-compaction path ignoring `agents.defaults.compaction.model`: 1. **`extensions.ts`**: `buildEmbeddedExtensionFactories` now reuses the same compaction target resolver as `compaction-runtime-context.ts

### #80823 fix(cli): differentiate gateway-restart hint for hot-loadable agent config sets (#80722)

- bucket: ready_for_maintainer
- author: kiranmagic7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:58:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `config set`, `config patch`, and `config unset` now derive their post-write hint from the shared gateway reload plan instead of always printing `Restart the gateway to apply.` - Hot-reloadable config paths, including `agents.list.*`, `agents.defa

### #81333 feat(i18n): translate Nodes page UI strings to Simplified Chinese

- bucket: ready_for_maintainer
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T01:58:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Nodes page (`/nodes`) had extensive hardcoded English strings in the `nodes` namespace of `zh-CN.ts` (historical omission) and the entire `nodes-exec-approvals.ts` sub-component was not internationalized at all. - Why it matters: Non-Engl

### #81341 [AI-assisted] Fix ACP bound thread follow-up delivery

- bucket: ready_for_maintainer
- author: qiyueqiu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:58:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: follow-up messages sent inside a Discord Thread bound to a spawned ACP runtime session could run the ACP turn but suppress the child session's visible reply. - Why it matters: `/acp spawn ... --thread` creates a user-facing thread; follow

### #81714 ui(i18n): localize agents panels (overview and tools/skills) for zh-CN

- bucket: ready_for_maintainer
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, proof: sufficient, P3, rating: 🧂 unranked krab, status: ⏳ waiting on author, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T01:59:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Agents page overview panel and tools/skills panel had hardcoded English strings when using Simplified Chinese locale. - Why it matters: Non-English users see English labels, tabs, buttons, and tool metadata in the agents page. - What chan

### #82165 feat(agents): add opt-in identityLine + identityMode config knobs

- bucket: ready_for_maintainer
- author: cael-dandelion-cult
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:00:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary OpenClaw hard-codes the system-prompt opening line to: > "You are a personal assistant running inside OpenClaw." There's an existing `systemPromptOverride` knob, but it requires authoring the entire prompt from scratch — losing all tooling/skills/me

### #82354 fix(msteams): emit message:sent hook on reply delivery

- bucket: ready_for_maintainer
- author: ndholakia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:00:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes a parity gap with telegram: the msteams reply-dispatcher previously bypassed both the internal hook bus AND the plugin-SDK `message_sent` hook entirely on outbound delivery. Downstream listeners (audit-loggers, per-user memory substrates) can

### #82950 fix(security): add ReDoS guard to exec approval argPattern matching

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:01:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90014 ## Problem `matchArgPattern` in `src/infra/exec-command-resolution.ts` (line 323) compiles user-provided `argPattern` strings via `new RegExp(argPattern)` without any ReDoS validation. While patterns auto-generated by `buildArgPatternFromArgv` are

### #83244 fix(config): tolerate unknown metadata keys

- bucket: ready_for_maintainer
- author: efe-arv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:01:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary OpenClaw currently treats `meta` as a strict object containing only `lastTouchedVersion` and `lastTouchedAt`. If a newer runtime, tool, or config writer adds another bookkeeping field under `meta`, current binaries reject the whole config with an er

### #83698 fix(gateway): rejected config.patch/apply never queues SIGUSR1 restart

- bucket: ready_for_maintainer
- author: adapepper
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:02:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Pins the invariant that a **rejected** `config.patch` / `config.apply` RPC never schedules a gateway SIGUSR1 restart, with both a structural guard and regression tests. Filed in response to a downstream incident where a long-running gateway ended up

