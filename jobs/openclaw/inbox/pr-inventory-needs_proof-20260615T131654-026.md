---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-026
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
  - "#72515"
  - "#73349"
  - "#73440"
  - "#73511"
  - "#73628"
  - "#73635"
  - "#69305"
  - "#69022"
  - "#54647"
  - "#54692"
  - "#56190"
  - "#56741"
  - "#89484"
  - "#60183"
  - "#60990"
  - "#61112"
  - "#61183"
  - "#61306"
  - "#61329"
  - "#63375"
  - "#64310"
  - "#67008"
  - "#67727"
  - "#91168"
  - "#73822"
  - "#74223"
  - "#91875"
  - "#74425"
  - "#74891"
  - "#74979"
  - "#75043"
  - "#75065"
  - "#75118"
  - "#75121"
  - "#75126"
  - "#75160"
  - "#75198"
  - "#75201"
  - "#75217"
  - "#75336"
cluster_refs:
  - "#72515"
  - "#73349"
  - "#73440"
  - "#73511"
  - "#73628"
  - "#73635"
  - "#69305"
  - "#69022"
  - "#54647"
  - "#54692"
  - "#56190"
  - "#56741"
  - "#89484"
  - "#60183"
  - "#60990"
  - "#61112"
  - "#61183"
  - "#61306"
  - "#61329"
  - "#63375"
  - "#64310"
  - "#67008"
  - "#67727"
  - "#91168"
  - "#73822"
  - "#74223"
  - "#91875"
  - "#74425"
  - "#74891"
  - "#74979"
  - "#75043"
  - "#75065"
  - "#75118"
  - "#75121"
  - "#75126"
  - "#75160"
  - "#75198"
  - "#75201"
  - "#75217"
  - "#75336"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.477Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 26

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #72515 fix(mcp): reject mixed command+url transport config (#72111)

- bucket: needs_proof
- author: Bojun-Vvibe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:19:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #72111. ## Problem When an MCP server config carries **both** a non-empty `command` and a non-empty `url` (e.g. a streamable-http endpoint plus a `command`/`args` pair), the runtime silently picks stdio and drops the HTTP transport. The user sees: ``` M

### #73349 feat(exec): inject OPENCLAW_SESSION_KEY and OPENCLAW_AGENT_ID env vars for child processes

- bucket: needs_proof
- author: name5566
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:24:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Inject `OPENCLAW_SESSION_KEY` and `OPENCLAW_AGENT_ID` environment variables into child processes spawned by the exec tool, allowing scripts and skills to reliably identify the current session and agent without relying on model parameter passing. Sup

### #73440 fix(gateway/command-auth): memoize ownerAllowFrom list per raw array (#50289)

- bucket: needs_proof
- author: eric-zachary077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:28:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What [`resolveOwnerAllowFromList`](src/auto-reply/command-auth.ts) walks `commands.ownerAllowFrom` linearly to: 1. Filter channel-scoped entries of the form `provider:value` (drop ones whose `provider` does not match the active `providerId`, strip the prefi

### #73511 fix: allow custom control UI origins

- bucket: needs_proof
- author: ishangodawatta
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:29:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `gateway.controlUi.allowedOrigins` can include a custom desktop-app origin like `tauri://localhost`, but the gateway normalises that browser `Origin` header to the opaque `null` origin and never matches the explicit allowlist entry. - Why

### #73628 Add sessions_yield completion truth metadata

- bucket: needs_proof
- author: richclaw-debug
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:32:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This patch adds an internal completion truth seam for `sessions_yield` and wires it through the embedded runner so parent/session orchestration can observe an explicit, trustworthy completion source. For a real `sessions_yield` turn, the expected se

### #73635 Errors: rewrite 403 HTML auth pages

- bucket: needs_proof
- author: sai8341
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:33:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix incorrect user-facing error reporting when provider requests return `403` HTML auth/challenge pages. Previously these failures could be surfaced as transport or rate-limit style errors, which sent users down the wrong debugging path. This change

### #69305 CLI: complete positional args in zsh completion

- bucket: needs_proof
- author: sk7n4k3d
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:39:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: \`openclaw wiki ingest <file>\`, \`openclaw wiki scan <dir>\`, and every other leaf command with a positional argument emits a zsh completion function that lists options only. Typing \`openclaw wiki ingest T<Tab>\` triggers the terminal b

### #69022 Fix: apply humanDelay between Telegram streamed block replies (Resolves #68945)

- bucket: needs_proof
- author: Mlightsnow
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, clawsweeper, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:41:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #68945. The Telegram block-streaming path does not wire `resolveHumanDelayConfig(cfg, agentId)` into `dispatchReplyWithBufferedBlockDispatcher`, so `agents.defaults.humanDelay` / per-agent `humanDelay` overrides have no effect on Telegram block replies. 

### #54647 Fix ACP session model reporting in sessions list

- bucket: needs_proof
- author: cyan-ember
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:48:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - read the ACP runtime model from session entry ACP metadata when resolving session model identity - avoid falling back to the configured default model for ACP session rows when no explicit ACP model is known - add regression coverage for ACP sessio

### #54692 CLI: clarify gateway url override auth hints

- bucket: needs_proof
- author: gmays
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:48:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - improve the gateway URL override auth error with source-specific follow-up hints - tell CLI users they can remove `--url` when they meant the default local or SSH-tunneled gateway - tell env override users to set `OPENCLAW_GATEWAY_TOKEN` or `OPENC

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

### #89484 Fix: gateway restart detects npm package version updates

- bucket: needs_proof
- author: FUSHENG66866
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:50:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n\nFix the `/restart` command so that when the globally-installed npm package has been updated (e.g. `npm update -g openclaw`), the gateway performs a **full process restart** instead of a SIGUSR1 in-process reload. SIGUSR1 only reloads runtime stat

### #60183 fix: use linked task activity for TaskFlow audit freshness

- bucket: needs_proof
- author: Tang99-eng
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:50:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - use linked task activity when computing TaskFlow audit freshness - avoid stale_running findings when a managed flow is still progressing via linked child task activity - add regression coverage for linked task activity freshness ## Notes - the fre

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

### #61306 Claw: add mission control backbone

- bucket: needs_proof
- author: digvijayyadav93
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: zalo, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:51:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add the initial Claw mission backbone across service, gateway, shared types, and Control UI - add the Claw spec package under docs/claw and wire it into docs navigation - tighten Claw mission lifecycle and gateway scope handling, plus keep the req

### #61329 ui: default usage view to last 7 days instead of today-only

- bucket: needs_proof
- author: hacky193
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:51:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix the Control UI Usage tab default date range. The Usage view currently initializes with: - `usageStartDate = today` - `usageEndDate = today` That makes the default view show only a single day. This change updates the initial state to: - `usageSta

### #63375 docs: add logging best practices for plugin developers

- bucket: needs_proof
- author: QuBenhao
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: XS, triage: low-signal-docs, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:51:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add a section explaining why plugins should use `api.logger` instead of `console.log` in their `register()` functions. Using `console.log` pollutes stdout and corrupts JSON output for CLI commands like `openclaw config schema`. ## Summary Describe the problem 

### #64310 fix: Replaced mutable module-global workspacePackagePaths

- bucket: needs_proof
- author: lucia-w
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:51:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: …ble base list ## Summary This PR fixes scripts/audit-seams.mjs so repeated main() calls in the same Node process are idempotent and do not duplicate workspace package entries. - workspacePackagePaths was a mutable module-level array. collectWorkspacePackagePa

### #67008 feat(chutes): add zai-org/GLM-5.1-TEE to static model catalog

- bucket: needs_proof
- author: tardigrde
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T15:52:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `zai-org/GLM-5.1-TEE` is available on the Chutes unified gateway but was missing from the bundled static catalog. The Chutes discovery endpoint (`GET /v1/models`) always times out from self-hosted VPS environments, so the static catalog is the only 

### #67727 feat(messages): add botDebounceMs to inbound debounce config

- bucket: needs_proof
- author: Manuel-Jentic
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:53:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When two AI agents share a channel, they can exchange messages faster than any human — burning tokens and generating noise. The existing `messages.inbound.debounceMs` config applies uniformly to all senders; there is no way to enforce a longer coold

### #91168 feat(tui,gateway): show CLI-routing label in /model picker

- bucket: needs_proof
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:53:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The `/model` picker today shows the human-readable model name as the description line (e.g. `anthropic/claude-opus-4-6 Claude Opus 4.6`). When a model is pinned to a CLI backend via user-config `agents.defaults.models[...].agentRuntime.id` (e.g. `cl

### #73822 feat(config): support SecretRef for phone numbers in channel configs

- bucket: needs_proof
- author: nickytonline
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: bluebubbles, channel: imessage, channel: signal, channel: voice-call, channel: whatsapp-web, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:54:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Phone numbers are PII. If you're putting them in `allowFrom`, `defaultTo`, or `groupAllowFrom`, they're sitting in plaintext config. This PR adds SecretRef support for phone number fields across all messaging channels so those values can live in a s

### #74223 plugin-sdk: restore Feishu pairing facade

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: S, triage: needs-real-behavior-proof, dependencies-changed, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:56:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #91875 fix(github-copilot): claude-opus-4.8 context window to 1M with reasoning support

- bucket: needs_proof
- author: yichu10c
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, extensions: github-copilot, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:00:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Updates model metadata in the GitHub Copilot plugin to match live Copilot endpoint capabilities. ## Changes **** - Added to with: - (was 128,000 — the default) - (was 8,192) - - - **** - Updated the bundled manifest entry for with the same values. #

### #74425 fix: ensure CLI processes exit after command completion on Windows

- bucket: needs_proof
- author: 1yihui
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:02:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes CLI processes (node.exe openclaw.mjs) remaining alive after command execution on Windows. The CLI entrypoint was missing process.exit() calls after commands completed, causing processes to hang. ## Changes - Added explicit `process.exit(proces

### #74891 fix(onboard): skip API-key prompt when user skipped installing the skill (#74382)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:05:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** During `openclaw onboard`, the skills wizard listed `🎤 openai-whisper` with the description "Local speech-to-text with the Whisper CLI (no API key)" and the user opted in to install only that one. They were then asked for `OPENAI_API

### #74979 fix(agents): guard promptActiveSession against pre-aborted signal

- bucket: needs_proof
- author: zhumengzhu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:06:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: When `runAbortController.signal` is already aborted before `promptActiveSession()` is called, JS evaluates `activeSession.prompt()` first (starting a new `Agent._runLoop` with a fresh `abortController`), then `abortable()` rejects imm

### #75043 Add provider-aware automatic TTS emotion mapping

- bucket: needs_proof
- author: xuruiray
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XL, extensions: openai, extensions: tts-local-cli, plugin: azure-speech, triage: dirty-candidate, proof: supplied, extensions: microsoft, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:06:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add opt-in `messages.tts.autoEmotion` support that infers a conservative abstract emotion from synthesized text. - Map inferred emotions into provider-specific controls: Volcengine `emotion`, Xiaomi `style`, OpenAI `instructions`, ElevenLabs `voic

### #75065 cron: optional custom job id and duplicate-id validation

- bucket: needs_proof
- author: Saitop
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, cli, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:06:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces #40218. The previous PR was closed when the old public fork was removed during repo hygiene cleanup; this is the same upstreamable change from the new public contribution fork. ## Summary - **Problem:** Cron jobs get random UUIDs; no way to set a stab

### #75118 feat(mcp): opt-in injectCallerContext for bundle MCP remote servers

- bucket: needs_proof
- author: david-garcia-garcia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:07:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When OpenClaw bundles MCP servers into agent CLIs, internal/sibling **remote MCP servers** had no first-class way to learn the OpenClaw caller (agent / account / message channel / session). - **Why it matters:** The loopback MCP alrea

### #75121 fix(telegram): preserve forwarded context in agent body

- bucket: needs_proof
- author: Komzpa
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: L, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:07:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep Telegram forwarded-message bodies clean in `BodyForAgent` - rely on typed `ForwardedFrom*` fields for single forwarded messages so prompt assembly renders the existing structured forwarded context block - preserve per-message forwarded attrib

### #75126 Add strict tool mode diagnostics and report contracts

- bucket: needs_proof
- author: JasonZHANGTianrui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:08:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Implements strict tool mode plumbing across embedded runs, transport streams, and OpenAI-compatible gateway responses. Changes include: Adds strict/warn/off tool strictness handling for tool argument repairs, alias repairs, and tool-name normalization. Surface

### #75160 fix(gateway): allow memory slot tool plugin invokes

- bucket: needs_proof
- author: Etnly
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:11:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add regression coverage for Gateway HTTP `/tools/invoke` fallback to plugin-backed memory slot tools - verify memory slot tool ids resolve successfully when they are cataloged core ids but only available through the configured plugin slot - verify

### #75198 fix(models): resolve provider-qualified aliases in session switches

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:12:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #75201 fix(agent): keep cleanup hooks isolated

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:12:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: PR #74543 fixed timeout fallback session keys, but CLI run cleanup still had a shared `finally` path where one failing cleanup hook could skip later cleanup. - Why it matters: timeout fallback now avoids the surfaced session-lock issue, b

### #75217 fix(agents): honor skipBootstrap at runtime injection path (#75184)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:13:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `agents.defaults.skipBootstrap: true` was advertised as a way to skip workspace bootstrap content, but it was a no-op for the runtime system-prompt injection. `systemPromptReport` still showed AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md

### #75336 feat(compaction): add identifier survival validation after summarization

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:15:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90010 Fixes #79588 ## Summary Improve compaction identifier survival with transcript-wide extraction and quality-guard retry hints. Fixes two security/correctness issues found during review: **Fix 1 — Sanitize string-encoded JSON arguments before extrac

