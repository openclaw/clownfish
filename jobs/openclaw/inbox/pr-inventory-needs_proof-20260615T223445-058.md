---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-058
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
  - "#92254"
  - "#92284"
  - "#92298"
  - "#92303"
  - "#92342"
  - "#92351"
  - "#92375"
  - "#92394"
  - "#92456"
  - "#92310"
  - "#92363"
  - "#91549"
  - "#91553"
  - "#93379"
  - "#93328"
  - "#41299"
  - "#50483"
  - "#54692"
  - "#86551"
  - "#60183"
  - "#90931"
  - "#61329"
  - "#61396"
  - "#63375"
  - "#64064"
cluster_refs:
  - "#92254"
  - "#92284"
  - "#92298"
  - "#92303"
  - "#92342"
  - "#92351"
  - "#92375"
  - "#92394"
  - "#92456"
  - "#92310"
  - "#92363"
  - "#91549"
  - "#91553"
  - "#93379"
  - "#93328"
  - "#41299"
  - "#50483"
  - "#54692"
  - "#86551"
  - "#60183"
  - "#90931"
  - "#61329"
  - "#61396"
  - "#63375"
  - "#64064"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.798Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 58

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92254 fix(model-picker): preserve auth profile override when selecting a model

- bucket: needs_proof
- author: jbetala7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:23:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The native model pickers call `applyModelOverrideToSessionEntry()` (`src/sessions/model-overrides.ts`) with only a model `selection` and no `profileOverride`. In that case the helper takes its default-clear branch and **unconditionally deletes** `au

### #92284 fix(queue): kick followup drain on enqueue to prevent race-induced stall

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:24:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a new inbound message arrives during the terminal window of a previous run, the `enqueue-followup` path called `enqueueFollowupRun` with `restartIfIdle=false`. This relied on a non-atomic `isRunActive()` snapshot to decide whether to schedule a

### #92298 fix(codex): isolate CODEX_HOME per authProfileId to prevent cross-acc…

- bucket: needs_proof
- author: hanZeng-08
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:25:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix #92275 # Issue #92275 PR Comment ## Transformation Plan Details - **Root Cause**: When multiple Codex OAuth accounts on the same machine use the same Agent configuration, they share the same `CODEX_HOME` directory. The Codex app-server persists local state

### #92303 fix(recovery): reset command lane when abort leaves pre-existing task blocked

- bucket: needs_proof
- author: hanZeng-08
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:25:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix #92270 # PR Comment for Issue #92270 > **Branch**: `fix/92270-stuck-session-recovery-lane-release` > **Files Changed**: > - `src/logging/diagnostic-stuck-session-recovery.runtime.ts` > - `src/logging/diagnostic-stuck-session-recovery.runtime.test.ts` --- #

### #92342 OpenClaw 1 Codex reliability build

- bucket: needs_proof
- author: dredozubov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: XL, extensions: codex, triage: external-plugin-candidate, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:27:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - carries the openclaw-1 Codex reliability build branch - includes the provider-id TDZ/bootstrap fix already deployed in core package 2026.5.26-openclaw.2 - bumps @openclaw/codex package metadata/shrinkwrap to 2026.5.26-openclaw.2 for matching exter

### #92351 #92241: Gateway holds stale module import paths after update/rollback — inbound messages silently dropped (ERR_MODULE_NOT_FOUND)

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:27:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Guard lazy reply-module loaders against `ERR_MODULE_NOT_FOUND` caused by stale dist chunk hashes after an in-place `npm install -g` upgrade or rollback. Previously, a running gateway process would silently drop all inbound messages because the lazy

### #92375 #92134: fix(memory-wiki): retry transient path-alias errors during source page write

- bucket: needs_proof
- author: zhangqueping
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: memory-wiki, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:28:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `wiki_status` intermittently aborting with "Refusing to write imported source page through symlink" when the memory-wiki bridge concurrently replaces source pages via atomic rename. ## Root Cause Concurrent bridge re-exports use atomic temp-writ

### #92394 fix(webchat): fall back to resolved name when senderLabel is empty

- bucket: needs_proof
- author: fsdwen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T17:28:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary In WebChat UI, `sessions_send` inter-session messages render without sender attribution when `senderLabel` is empty or whitespace-only. The root cause: `group.senderLabel?.trim()` returns `""` (empty string), and `??` only treats `null`/`undefined`

### #92456 feat: add exec approvals denylist (STOP list) screening

- bucket: needs_proof
- author: Hidetsugu55
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:30:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an optional per-agent `denylist` to `exec-approvals.json`: a small STOP list that forces an explicit human approval for matching commands even when policy would otherwise auto-allow them (including `security=full` + `ask="off"`). This enables a

### #92310 fix(telegram): restore sent-message ledger writes for delivery replies

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:34:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - restore `recordSentMessage` for successful Telegram `deliverReplies` sends - keep the existing `message_sent` hook behavior, but persist the same send into the sent-message ledger first - add a regression test that verifies `wasSentByBot` sees del

### #92363 #92224: fix(models): report local models as available in CLI list output

- bucket: needs_proof
- author: zhangqueping
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:34:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `openclaw models list --json` showing `available: false` for local Ollama models that are running and working correctly. ## Root Cause `toModelRow` in `list.model-row.ts` determined availability via provider auth (API keys). Local providers like

### #91549 fix: enable DeepSeek DSML filtering for proxy providers via model id detection

- bucket: needs_proof
- author: studentzhou-svg
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:34:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Root Cause DSML filtering was gated on `compat.thinkingFormat === "deepseek"`, which resolves only for native deepseek endpoint (api.deepseek.com) or providers with provider key "deepseek". When DeepSeek models are served through proxy providers like Silico

### #91553 fix(tailscale): retry status json after serve startup

- bucket: needs_proof
- author: TUARAN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:34:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the transient `tailscale status --json` startup race in Tailscale Serve mode. - add a narrow same-binary retry helper around the status JSON read used by `getTailnetHostname` - keep the change scoped to serve-startup hostname discovery; no con

### #93379 fix(whatsapp): thread authDir through command authorization and owner bypass for LID JID resolution

- bucket: needs_proof
- author: xialonglee
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:38:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - WhatsApp group commands (`/new`, `/stop`) can be silently ignored when Baileys reports the sender as a LID JID (`@lid`) instead of a phone JID (`@s.whatsapp.net`) - Root cause: `resolveWhatsAppCommandAuthorized()` and `isOwnerSender()` called `get

### #93328 fix(matrix): prevent double bootstrapCrossSigning reset in --force-reset-cross-signing

- bucket: needs_proof
- author: xialonglee
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:43:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `--force-reset-cross-signing` calls `bootstrapCrossSigning` twice: once with `setupNewCrossSigning: true` in the forced-reset path, then again via a redundant repair block that can trigger a second reset, destroying E2EE state - Root cause: `Matri

### #41299 fix: add clear separator between metadata and user message

- bucket: needs_proof
- author: puppylpg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:46:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When a user message is passed to the LLM, the metadata blocks (sender info, conversation info, etc.) and the actual user message content are joined with only double newlines. This causes the LLM to sometimes misinterpret the message s

### #50483 fix(ios): stabilize chat streaming layout and session flow

- bucket: needs_proof
- author: eulicesl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:46:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: iOS chat streaming could attach to a synthetic placeholder lane, churn during initial history/bootstrap, and reparse streaming content in ways that caused flicker or session drift. - Why it matters: active conversations can show unstable

### #54692 CLI: clarify gateway url override auth hints

- bucket: needs_proof
- author: gmays
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:46:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - improve the gateway URL override auth error with source-specific follow-up hints - tell CLI users they can remove `--url` when they meant the default local or SSH-tunneled gateway - tell env override users to set `OPENCLAW_GATEWAY_TOKEN` or `OPENC

### #86551 fix(agents): add missing DeepSeek V4 proxy models to reasoning_content replay set

- bucket: needs_proof
- author: liaoyl830
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:46:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - DeepSeek V4 models (`deepseek-v4-flash-free`, `big-pickle`) accessed through proxy providers (e.g. OpenCode Zen) lose `reasoning_content` in assistant message replay, causing 500 errors from the API - `isDeepSeek` detection only checks `endpointCl

### #60183 fix: use linked task activity for TaskFlow audit freshness

- bucket: needs_proof
- author: Tang99-eng
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:47:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - use linked task activity when computing TaskFlow audit freshness - avoid stale_running findings when a managed flow is still progressing via linked child task activity - add regression coverage for linked task activity freshness ## Notes - the fre

### #90931 fix(ui): scope local assistant avatar overrides per agent (#90890)

- bucket: needs_proof
- author: hanZeng-08
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T17:47:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90890 # Comment for Issue #90890 — Agent avatar changes overwrite all agents ## Summary The Control UI stores the assistant avatar override in `localStorage` under a single global key (`openclaw.control.assistant.v1`). Because the key is not scoped by a

### #61329 ui: default usage view to last 7 days instead of today-only

- bucket: needs_proof
- author: hacky193
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:47:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix the Control UI Usage tab default date range. The Usage view currently initializes with: - `usageStartDate = today` - `usageEndDate = today` That makes the default view show only a single day. This change updates the initial state to: - `usageSta

### #61396 fix(i18n): add device/node pairing terms to zh-CN glossary

- bucket: needs_proof
- author: zeuming
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:47:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - The zh-CN translation pipeline confused openclaw devices list/approve with openclaw nodes pending/approve when translating the node host pairing section, because the glossary had no entries distinguishing the two pairing subsystems. - Added glossary

### #63375 docs: add logging best practices for plugin developers

- bucket: needs_proof
- author: QuBenhao
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: XS, triage: low-signal-docs, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:47:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add a section explaining why plugins should use `api.logger` instead of `console.log` in their `register()` functions. Using `console.log` pollutes stdout and corrupts JSON output for CLI commands like `openclaw config schema`. ## Summary Describe the problem

### #64064 feat(anthropic): add advisor tool support [AI-assisted]

- bucket: needs_proof
- author: clearlift-paul
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, agents, size: XL, extensions: anthropic, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:47:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds support for Anthropic's **advisor tool** (beta: `advisor-tool-2026-03-01`), a server-side tool that lets Claude consult a separate model instance during inference. Also adds generic handling for all server-side tool blocks (`server_tool_use`, `
