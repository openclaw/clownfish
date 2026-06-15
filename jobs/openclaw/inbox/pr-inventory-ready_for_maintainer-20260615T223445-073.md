---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-073
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
  - "#18860"
  - "#58823"
  - "#77539"
  - "#78639"
  - "#80181"
  - "#81131"
  - "#81278"
  - "#81279"
  - "#83156"
  - "#93100"
  - "#84434"
  - "#84438"
  - "#84453"
  - "#84485"
  - "#84545"
  - "#84547"
  - "#84554"
  - "#84584"
  - "#84589"
  - "#84636"
  - "#84708"
  - "#84728"
  - "#84772"
  - "#88872"
  - "#90799"
cluster_refs:
  - "#18860"
  - "#58823"
  - "#77539"
  - "#78639"
  - "#80181"
  - "#81131"
  - "#81278"
  - "#81279"
  - "#83156"
  - "#93100"
  - "#84434"
  - "#84438"
  - "#84453"
  - "#84485"
  - "#84545"
  - "#84547"
  - "#84554"
  - "#84584"
  - "#84589"
  - "#84636"
  - "#84708"
  - "#84728"
  - "#84772"
  - "#88872"
  - "#90799"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.802Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 73

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #18860 feat(agents): expose tools and their schemas via new after_tools_resolved hook [AI-assisted]

- bucket: ready_for_maintainer
- author: lan17
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:17:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Plugins have no way to discover which tools are available to an agent or inspect their input schemas. The plugin API exposes `registerTool()` but no `listTools()` or `getTools()`. Built-in tools (exec, read, write, web_fetch, etc.) ar

### #58823 fix(agents): restore global subagent model default priority over agent own model

- bucket: ready_for_maintainer
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:20:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #58822. - Restores correct subagent model precedence in `resolveSubagentConfiguredModelSelection`: global `agents.defaults.subagents.model` now takes priority over the parent agent's own `model.primary`, with the agent's own model only used as

### #77539 fix(subagent): preserve steered task text on restart redispatch

- bucket: ready_for_maintainer
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:21:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Update 2026-06-02**: addressed ClawSweeper P1 findings on `cd6056478b`: > - Dropped the `CHANGELOG.md` hunk (release-owned per root `AGENTS.md` rules). > - Reworked `subagent-orphan-recovery.ts:158` to persist the stable original `task` instead of the synt

### #78639 perf(plugins,gateway): async-ify channels.status + messages.send discovery (and split WhatsApp transport closes)

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, gateway, size: L, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:22:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #78100. Companion to (not blocked by) #78101 — that PR coalesces repeated calls within a 2 s TTL as a near-term win; this PR is the deeper structural fix #78100 proposed as item 2. ## Summary Async-ify the persisted-read hot path inside `loadPluginRegis

### #80181 fix: add resilient fallback policy for user model overrides

- bucket: ready_for_maintainer
- author: jetd1
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:23:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: session/user model overrides always disabled configured fallback chains. - Why it matters: operators could configure provider fallback behavior, but a user-selected model had no fallback safety

### #81131 fix(telegram): combine voice payload with preceding streamed text

- bucket: ready_for_maintainer
- author: sdimantsd
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T01:23:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a final voice payload arrives in Telegram after partial/block streaming has already sent the text, two separate Telegram messages appear: first the streamed text, then the voice note. This restores the pre-bca16d0f00 behavior where audioAsVoice

### #81278 docs: clarify local-prefix managed Node runtime

- bucket: ready_for_maintainer
- author: ThiagoCAltoe
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: XS, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:23:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Clarify that `install-cli.sh` uses a managed local-prefix Node runtime that currently defaults to 22.22.0. - Call out that this can intentionally differ from shell/global Node 24. - Update install output wording so users see the managed-runtime di

### #81279 ui(i18n): localize skills page grouping labels, status chips and missing prefixes for zh-CN

- bucket: ready_for_maintainer
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T01:24:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Skills page had hardcoded English strings in grouping labels ("Built-in Skills", "Workspace Skills", etc.), status chips ("eligible", "blocked", "bundled", "disabled"), and missing-requirement prefixes ("bin:", "env:", "config:", "os:") w

### #83156 fix(matrix): accept bracketed display-name mentions

- bucket: ready_for_maintainer
- author: wdx-agent-io
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: S, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:25:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - accept `@[Display Name]` as a visible Matrix mention label for formatted `matrix.to` links - strip leading `@[Display Name]` mention prefixes before command handling - add Matrix monitor regression coverage for parser, prefix stripping, and room h

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

### #84485 fix(discord): guard message-tool-only final delivery

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:28:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Discord `message_tool_only` turns can currently end without any visible source-channel delivery when the model does not call the `message` tool: - terminal `NO_REPLY` despite an owed visible status/result; - empty assistant final after tool work; -

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

### #84772 fix(codex): honor tool result cap in app-server transcripts

- bucket: ready_for_maintainer
- author: hansolo949
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:35:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Codex app-server transcript projection had its own hardcoded tool-output cap (`12_000` chars), so configured OpenClaw limits such as `agents.defaults.contextLimits.toolResultMaxChars = 8000` did not apply before tool output was mirrored into the nat

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
