---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-026
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
  - "#59221"
  - "#92999"
  - "#64805"
  - "#54647"
  - "#56190"
  - "#56741"
  - "#60990"
  - "#61112"
  - "#61183"
  - "#67727"
  - "#89807"
  - "#76495"
  - "#93024"
  - "#65398"
  - "#86554"
  - "#92962"
  - "#92983"
  - "#92989"
  - "#93028"
  - "#60383"
  - "#70348"
  - "#93045"
  - "#77653"
  - "#54830"
  - "#92889"
cluster_refs:
  - "#59221"
  - "#92999"
  - "#64805"
  - "#54647"
  - "#56190"
  - "#56741"
  - "#60990"
  - "#61112"
  - "#61183"
  - "#67727"
  - "#89807"
  - "#76495"
  - "#93024"
  - "#65398"
  - "#86554"
  - "#92962"
  - "#92983"
  - "#92989"
  - "#93028"
  - "#60383"
  - "#70348"
  - "#93045"
  - "#77653"
  - "#54830"
  - "#92889"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.791Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 26

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #59221 feat: add built-in command aliases (/c, /ctx, /s, /n, /m, /ms, /h, /f, /u)

- bucket: needs_proof
- author: RegulusZ
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:08:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add 9 command aliases to reduce typing for frequently used slash commands: - /c → /compact (session context compaction) - /ctx → /context (context diagnostics) - /s → /status (status check) - /n → /new (new session) - /m → /model (model switching) - /ms → /mod

### #92999 fix(agents): truncate frozen subagent result on a UTF-8 character boundary

- bucket: needs_proof
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:11:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `capFrozenResultText` (`src/agents/subagent-registry-helpers.ts`) caps an oversized subagent completion result before it is frozen for later announce/recovery delivery to the parent session. It truncated with `Buffer.from(text, "utf8").subarray(0, m

### #64805 feat(feishu): add token and context usage to streaming card footer

- bucket: needs_proof
- author: TaoXieSZ
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:11:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Append session token usage and context window size to the Feishu streaming card footer note. **Before:** `Agent: {name} | Model: {model} | Provider: {provider}` **After:** `Agent: {name} | Model: {model} | Provider: {provider} | Tokens: {n} / Contex

### #54647 Fix ACP session model reporting in sessions list

- bucket: needs_proof
- author: cyan-ember
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:48:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - read the ACP runtime model from session entry ACP metadata when resolving session model identity - avoid falling back to the configured default model for ACP session rows when no explicit ACP model is known - add regression coverage for ACP sessio

### #56190 config: support ${VAR:-default} env var fallbacks

- bucket: needs_proof
- author: evanjacobson
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:49:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Config values using `${VAR}` env substitution have no way to specify a fallback when the var is unset — they either throw `MissingEnvVarError` or get swallowed by the `onMissing` warning path, leaving a literal `${VAR}` placeholder in

### #56741 fix(telegram): respect topic-level groupPolicy overrides for /commands in forum topics (fixes #56699)

- bucket: needs_proof
- author: JuniperTheDev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, stale, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:49:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #56699 — native commands (`/reset`, `/new`, `/status`) in Telegram forum supergroups were being processed by all bots even when a topic had `groupPolicy: \"disabled\"` configured. **Root cause:** `resolveTelegramCommandAuth` called `evaluateTe

### #60990 fix(macos): prevent menubar icon from freezing when AI providers overload

- bucket: needs_proof
- author: xantorres
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:50:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Prevents menubar icon from freezing when AI providers return overload/timeout errors and the gateway never sends run-end events. **IMPORTANT: This only affects menubar display state. Background jobs continue running normally.** ## Implementation - **Fast watch

### #61112 UI: localize markdown sidebar labels

- bucket: needs_proof
- author: rubensfox20
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:51:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the markdown sidebar still had a few hardcoded English labels even when a non-English locale was selected. - Why it matters: these strings appear in a shared sidebar surface, so they create mixed-language UI despite the surrounding locale

### #61183 fix(agents): honor adjusted message tool bookkeeping

- bucket: needs_proof
- author: ShionEria
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:51:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make embedded message bookkeeping commit the adjusted `before_tool_call` params rather than stale start-event args - keep message text / target / media tracking aligned with the actual rewritten send payload - add regressions for direct `message`

### #67727 feat(messages): add botDebounceMs to inbound debounce config

- bucket: needs_proof
- author: Manuel-Jentic
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:53:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When two AI agents share a channel, they can exchange messages faster than any human — burning tokens and generating noise. The existing `messages.inbound.debounceMs` config applies uniformly to all senders; there is no way to enforce a longer coold

### #89807 Bound WhatsApp outbound send duration

- bucket: needs_proof
- author: hussein1362
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:20:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a bounded timeout around WhatsApp Web socket send operations - fail stalled provider sends with a clear timeout error instead of waiting indefinitely - cover the timeout path with focused send API tests ## Tests - pnpm exec vitest run extensio

### #76495 fix(memory): load configured memory slot for runtime checks

- bucket: needs_proof
- author: jonathangu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:38:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- load the configured plugins.slots.memory plugin when memory runtime checks run before the full runtime registry is active\n- keep status/doctor/memory-search paths from reporting no active memory plugin when a memory plugin is installed in the co

### #93024 fix(telegram): dead-letter ERR_MODULE_NOT_FOUND and poison-retry spooled updates (#92980)

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:56:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Telegram spooled updates that hit a permanent error were released for retry, picked up again on the same drain, and looped until the gateway became unresponsive. Issue [#92980](https://github.com/openclaw/openclaw/issues/92980) reports a ~10 minute

### #65398 fix(feishu): preserve top-level groupPolicy and avoid duplicate registration

- bucket: needs_proof
- author: bin448482
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, channel: feishu, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:09:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu had two regressions in the same flow: repeated tool/hook registration on plugin cache misses, and named-account config loads silently rewrote top-level `groupPolicy: "open"` back to `allowlist`. - Why it matters: repeated registrat

### #86554 fix(agents): add missing DeepSeek V4 proxy models to reasoning_content replay set

- bucket: needs_proof
- author: liaoyl830
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:20:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - proxy providers like OpenCode Zen can expose DeepSeek V4 models through `opencode-native`, so endpoint-class detection alone does not preserve `reasoning_content` replay - add `deepseek-v4-flash-free` and `big-pickle` to the replay model allowlist

### #92962 [AI-assisted] fix(feishu): let active followups reach queue

- bucket: needs_proof
- author: IWhatsskill
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:34:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu same-chat message dispatch waits behind the plugin sequential queue until the prior full agent turn finishes, so `messages.queue.mode = "collect"` follow-ups can reach the shared queue after the session is no longer active and beco

### #92983 fix(read): decode Windows legacy text files

- bucket: needs_proof
- author: pony-maggie
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:34:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Route read-tool text buffers through the existing Windows decoder so valid UTF-8 stays unchanged while invalid UTF-8 can fall back to the active Windows code page. - Add a read-tool regression that simulates Chinese Windows code page 936 and verifies

### #92989 fix(tools): auto-detect file encoding in read tool for GBK support

- bucket: needs_proof
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:34:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92664. The read tool always decoded files as UTF-8, producing garbled text when reading GBK-encoded files on Chinese Windows. ## What changed - Added `decodeFileBuffer()` in `src/agents/sessions/tools/encoding.ts`. - On win32, delegates to th

### #93028 fix(channels): expose runtime controls in CLI

- bucket: needs_proof
- author: llljjjwww333
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:41:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #75153 Adds `openclaw channels start`, `openclaw channels stop`, and `openclaw channels restart` so linked channel listeners can be controlled through the existing gateway `channels.start` / `channels.stop` RPCs without rerunning login or clearing auth.

### #60383 fix(feishu): parse interactive card post-format fallback content

- bucket: needs_proof
- author: lskun
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:46:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `parseInteractiveCardContent()` to handle Feishu API post-format fallback content for interactive card messages. Fixes #60380 Related: #41609 #48281 ## Problem When reading card messages via `GET /im/v1/messages/{message_id}`, Feishu returns `bo

### #70348 Filter internal compaction artifacts from chat history

- bucket: needs_proof
- author: cholaolu-boop
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:49:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This patch addresses the dominant `chat.history` visibility path where internal compaction and memory-flush artifacts leak back into normal chat history. ## What This Fix Does - filters synthetic compaction markers from `chat.history` - filters inte

### #93045 fix(gateway): compute sessions.usage aggregate totals from all sessions, not just the limited page (fixes #76496)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:08:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Real behavior proof - **Behavior addressed:** `sessions.usage` aggregate totals (totalCost, totalTokens, etc.) were computed only from sessions within the `limit` page, silently excluding sessions beyond the limit. With >50 active sessions and default limit

### #77653 fix(feishu): normalize reaction message IDs for API calls

- bucket: needs_proof
- author: yfge
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:24:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #34528 by separating Feishu synthetic reaction event IDs from Open Message IDs used for Feishu API calls. - Adds `normalizeFeishuOpenMessageId` and applies it to replies, reads, edits, card updates, media replies, reactions, pins, and stream

### #54830 feat: context provenance metadata for injected bootstrap segments

- bucket: needs_proof
- author: jack91620
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:32:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add optional `provenance` metadata (`source`, `injectedAt`, `volatile`) to `EmbeddedContextFile` type - Bootstrap context files (SOUL.md, AGENTS.md, TOOLS.md, etc.) are now tagged with provenance when assembled by `buildBootstrapContextFiles()` -

### #92889 fix(doctor): suppress false group-allowlist warning when all accounts override groupAllowFrom (fixes #92684)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:46:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `openclaw doctor` over-warns about an empty top-level `groupAllowFrom` when every sub-account defines its own populated `groupAllowFrom`. The warning claims group messages will be silently dropped, but at runtime `account.groupAllowF
