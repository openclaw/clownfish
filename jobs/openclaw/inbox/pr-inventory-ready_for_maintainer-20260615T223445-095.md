---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-095
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
  - "#93388"
  - "#93266"
  - "#74235"
  - "#54724"
  - "#55596"
  - "#63789"
  - "#64316"
  - "#65065"
  - "#66174"
  - "#93308"
  - "#93105"
  - "#69346"
  - "#76873"
  - "#80497"
  - "#82718"
  - "#85249"
  - "#89396"
  - "#89443"
  - "#93394"
  - "#89577"
  - "#92072"
  - "#89648"
  - "#91134"
  - "#92176"
  - "#92230"
cluster_refs:
  - "#93388"
  - "#93266"
  - "#74235"
  - "#54724"
  - "#55596"
  - "#63789"
  - "#64316"
  - "#65065"
  - "#66174"
  - "#93308"
  - "#93105"
  - "#69346"
  - "#76873"
  - "#80497"
  - "#82718"
  - "#85249"
  - "#89396"
  - "#89443"
  - "#93394"
  - "#89577"
  - "#92072"
  - "#89648"
  - "#91134"
  - "#92176"
  - "#92230"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.806Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 95

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93388 fix(google): use stable Gemini image model

- bucket: ready_for_maintainer
- author: vortexopenclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, agents, size: M, triage: dirty-candidate, proof: supplied, proof: sufficient, extensions: google, extensions: openrouter, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:08:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Google's preview Gemini image IDs and legacy Imagen 4 IDs are being retired, but OpenClaw still advertised the preview IDs as the Google/OpenRouter image-generation defaults. This updates the built-in defaults and docs to the stable `gemini-3.1-flash-image` mo

### #93266 fix(feishu): scope topic queue dispatch

- bucket: ready_for_maintainer
- author: LucienShui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:23:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes Feishu inbound queue routing for group/topic messages by deriving the sequential queue key from the same scoped peer identity used by session routing. - Preserves existing chat-wide escape lanes for `/stop` and `/btw`, while keeping other se

### #74235 fix(googlechat): preserve thread reply target through delivery

- bucket: ready_for_maintainer
- author: jai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, size: XL, extensions: minimax, proof: supplied, proof: sufficient, extensions: google, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T18:25:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Google Chat replies could leave the inbound Chat thread and appear as new top-level messages. - **Why it matters:** delayed or tool-driven assistant replies break group-thread UX when they detach from the conversation the user spoke i

### #54724 fix/agents-primary-model-selection-and-catalog-loading-41344

- bucket: ready_for_maintainer
- author: wsyjh8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T18:36:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes incorrect Primary Model selection when switching between agents in Agents > Overview. - Fixes partial / blank Primary Model dropdowns after refresh or first load by ensuring the model catalog is available on Agents Overview paths. - Adds tar

### #55596 fix(CLI) Markdown table columns misaligned with CJK characters on Telegram and Discord

- bucket: ready_for_maintainer
- author: sparkyrider
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T18:36:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Draft Closes: #55512

### #63789 Proposal: add minimal agent-to-agent handoff protocol (Phase 1)

- bucket: ready_for_maintainer
- author: glfruit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, feature: ✨ showcase, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T18:37:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This draft PR proposes a minimal formal handoff protocol for agent-to-agent delegation. The goal is to make `sessions_send`-style agent handoff explicitly observable and less vulnerable to silent ambiguity. ## Proposed Phase 1 scope - add `handoff_i

### #64316 fix(agents): release bundle MCP runtime on mid-run session reset

- bucket: ready_for_maintainer
- author: xxxxxmax
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:37:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `resetReplyRunSession` rotated the active `sessionId` after auto-compaction failure, context overflow, or role-ordering conflicts, but it never released the previous session id's entry from the bundle MCP runtime cache. - Why it matters:

### #65065 Add missing message channel admin subcommands

- bucket: ready_for_maintainer
- author: mikepatraw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:38:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add CLI registration for `openclaw message channel create|edit|delete|move` - add targeted tests covering the new channel admin routes - update CLI docs to list the newly exposed `message channel` subcommands ## Problem Discord provider capabiliti

### #66174 Fix session transcript path canonicalization on save

- bucket: ready_for_maintainer
- author: rocklobster-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:38:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # OpenClaw session-store path fix, 2026-04-12 ## Status Applied live to installed runtime. Also ported carefully into a fresh source clone of the matching `v2026.4.11` upstream tag, but not yet merged upstream or installed from that source tree. ## Source clon

### #93308 fix(discord): reject malformed realtime consult calls

- bucket: ready_for_maintainer
- author: khoek
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:38:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? The entire gateway crashes using Google's Realtime voice provider if the realtime agent makes an malformed realtime consult tool invocation. Why does this matter now? The whole gateway crashes, it's awful. What is th

### #93105 fix(doctor): repair null agents.list[].workspace values

- bucket: ready_for_maintainer
- author: xydigit-sj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:38:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #77718. A literal null `workspace` field in an `agents.list` entry still failed Zod schema validation at startup (workspace is optional but must be a string when present). Because `openclaw doctor --fix` never normalized the malformed field, u

### #69346 fix(embedded-runner): actionable diagnostic for empty-stream config errors

- bucket: ready_for_maintainer
- author: abajirao
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:39:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Iteration log (review-driven changes since open) This PR has been through three rounds of bot review. Summary for human reviewers: | Commit | Source | Change | |---|---|---| | `a0426ed6c8` | Initial | Original `isLikelyConfigErrorEmptyStream` + `buildConfig

### #76873 fix(discord): preserve target intent during normalization

- bucket: ready_for_maintainer
- author: AScriver
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:41:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Discord-like explicit DM targets could be normalized through the id-like target path without preserving the intended direct-message kind. - Why it matters: A Discord target that is syntactically a user/direct target should stay routed as

### #80497 feat(plugin-sdk): onModelDiagnosticEvent for trusted model.* events

- bucket: ready_for_maintainer
- author: arniesaha
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:42:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Why Plugins subscribing to diagnostic events via `onDiagnosticEvent` (from `openclaw/plugin-sdk/diagnostic-runtime`) never see the `model.*` lifecycle. The public API filter at [`src/infra/diagnostic-events.ts:879-886`](https://github.com/openclaw/openclaw/

### #82718 docs(telegram): clarify account-local group config

- bucket: ready_for_maintainer
- author: hyjkimbot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:43:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Telegram docs pointed group setup at root \`channels.telegram.groups\`, which is easy to misread in multi-account configs. - Why it matters: a bot account can receive a group message from Telegram but still drop it during OpenClaw group p

### #85249 fix(cron): guard against undefined sourceDelivery in isolated executor

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:43:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Guard against `undefined` `sourceDelivery` in the isolated cron executor to prevent `TypeError: Cannot read properties of undefined (reading 'sourceReplyDeliveryMode')`, and unify the cron source-delivery planner into a single shared helper used by

### #89396 fix(doctor): drop inert legacy cron notify when cron.webhook is unset

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:45:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #44460. `openclaw doctor --fix` left the legacy top-level `notify: true` cron field in place whenever `cron.webhook` was **unset**, so the dead flag survived every repair. Because the legacy-store preview line and the "Doctor warnings" note ar

### #89443 fix(active-memory): drop assistant chitchat boilerplate from recall summaries

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:45:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #84034. The `active-memory` recall subagent sometimes returned assistant-style chitchat — greetings, "your message got cut off" clarifications, date/time announcements, and help-offer text — when it had nothing useful to recall. `normalizeActi

### #93394 fix(memory): abort orphaned qmd search subprocess when memory_search times out

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:45:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary PR #91742 ("abort orphaned embedding work when memory_search times out") added an `AbortSignal` to `MemorySearchManager.search()` so that when the 15s `memory_search` tool deadline fires, in-flight embedding work is cancelled instead of running orph

### #89577 fix(canvas): use crypto randomness for A2UI action IDs

- bucket: ready_for_maintainer
- author: Lucenx9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:46:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replaces the Canvas A2UI action id `Math.random()` fallback with Web Crypto randomness. - Keeps `crypto.randomUUID()` as the preferred path when available. - Falls back to a 16-byte `crypto.getRandomValues()` hex suffix when `randomUUID()` is unav

### #92072 fix(gateway): treat `google-gemini-cli` Gemini models as image-capable

- bucket: ready_for_maintainer
- author: HaozheZhang6
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:46:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `google-gemini-cli` models (e.g. `google/gemini-3.5-flash`) were rejected at the Gateway attachment gate with `UnsupportedAttachmentError: active model does not accept image inputs` before the Gemini CLI was ever invoked — even though the CLI acce

### #89648 fix(agents): restore model-fetch info logs

- bucket: ready_for_maintainer
- author: xiaobao-k8s
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:47:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Restores default `info` logging for `[model-fetch]` request metadata (`start` / `response` / `error`) so provider/model/API/status/latency diagnostics are visible in normal gateway logs again. ## Changes - Treat `[model-fetch]` transport metadata me

### #91134 ci: check bundled channel config metadata

- bucket: ready_for_maintainer
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T18:48:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #80536 ## Problem `src/config/bundled-channel-config-metadata.generated.ts` is checked in and used by runtime channel config validation. The repository already has `pnpm check:bundled-channel-config-metadata`, but the main CI `check-shard` job does not r

### #92176 fix(media-understanding): resolve image model input from catalog, preserve explicit text-only (#92104)

- bucket: ready_for_maintainer
- author: zhangqueping
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:50:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix model resolution so that models in `models.providers` without explicit `input` correctly inherit `["text","image"]` from the bundled catalog, rather than defaulting to `["text"]`. ## Root Cause `resolveProviderModelInput` defaults to `["text"]`

### #92230 feat: add model switch choices to /model

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:50:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add dynamic configured-model choices to the native `/model` command - enable the existing command argument menu path for `/model` so Slack can render model picks with its existing buttons/static_select/external_select machinery - keep bare `/model
