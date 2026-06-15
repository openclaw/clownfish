---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-091
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
  - "#93262"
  - "#88968"
  - "#89226"
  - "#93334"
  - "#90275"
  - "#90367"
  - "#90610"
  - "#90689"
  - "#91274"
  - "#91457"
  - "#93301"
  - "#92930"
  - "#93186"
  - "#93351"
  - "#93356"
  - "#88887"
  - "#91728"
  - "#91923"
  - "#93349"
  - "#90453"
  - "#51762"
  - "#66478"
  - "#75100"
  - "#75293"
  - "#90694"
cluster_refs:
  - "#93262"
  - "#88968"
  - "#89226"
  - "#93334"
  - "#90275"
  - "#90367"
  - "#90610"
  - "#90689"
  - "#91274"
  - "#91457"
  - "#93301"
  - "#92930"
  - "#93186"
  - "#93351"
  - "#93356"
  - "#88887"
  - "#91728"
  - "#91923"
  - "#93349"
  - "#90453"
  - "#51762"
  - "#66478"
  - "#75100"
  - "#75293"
  - "#90694"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.805Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 91

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93262 fix(plugins): start non-bundled channel plugins with no channels.* config entry (#93219)

- bucket: ready_for_maintainer
- author: rushindrasinha
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:50:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Fixes a silent startup regression where externally-installed npm channel plugins were never started at gateway startup, even when explicitly enabled via `plugins.entries.<id>.enabled = true`. ## Root Cause `resolveGatewayStartupPluginPlanFromRegistry`

### #88968 fix: prevent memory flush failure from aborting user reply (#85645)

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-15T15:51:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `memoryFlush` fails during the reply pipeline (provider timeout, rate limit, network error), the visible error payload was treated as the final reply via `replyOperation.fail("run_failed", ...)`. This aborted the user's actual message. Since th

### #89226 fix(agent-tools): resolve workspace-scoped tool fs root lazily

- bucket: ready_for_maintainer
- author: sasan1200
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:52:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - `openclaw doctor` aborts with `[openclaw] Unhandled promise rejection: FsSafeError: root dir not found` whenever an agent's resolved workspace directory does not exist at doctor time. Why does this matter now? - Do

### #93334 fix(whatsapp): notify user when trailing media send fails instead of silent drop

- bucket: ready_for_maintainer
- author: rushindrasinha
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:55:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a reply contains multiple media attachments and a **non-first** send fails, the `onError` callback in `deliver-reply.ts` returns early without any user notification: ```typescript onError: async ({ error, mediaUrl, caption, isFirst }) => { what

### #90275 test: make install-safe-path symlink tests compatible with Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:56:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skips in the install-safe-path test suite with a dynamic `canCreateDirectorySymlinks` capability check. If directory symlinking is supported by the OS environment, the tests execute. Additionally, uses directory junctions (via th

### #90367 Fix unreadable Sessions label column

- bucket: ready_for_maintainer
- author: toruvieI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T15:56:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - give the Sessions table `Label` column an explicit, text-sized width instead of letting the browser table algorithm squeeze it down - move the label input's inline styling into CSS and size it in `ch`, with room for padding/border - keep the exist

### #90610 Surface Codex final answer candidates in activity

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:57:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Emit Codex app-server `phase: "final_answer"` answer-candidate activity records with `candidate`, `superseded`, and `selected` states. - Route those `stream: "item"` / `kind: "answer_candidate"` records into the Control UI Activity model and Activ

### #90689 fix(agents): align custom provider auth labels with runtime (#82020)

- bucket: ready_for_maintainer
- author: ly85206559
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, status: 🛠️ actively grinding, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T15:57:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix `resolveModelAuthLabel` so `/status` and other UI surfaces show the same auth source as runtime resolution for custom providers like `zai-light`. - Keep per-entry literal `apiKey` bindings labeled as `api-key (models.json)` when runtime also r

### #91274 refactor(memory): drop redundant agent-id scoping from qmd collection names

- bucket: ready_for_maintainer
- author: sasan1200
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:58:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **What:** drop the redundant `-<agentId>` scoping from managed qmd collection names. Each agent has its **own isolated qmd index** (`agents/<agentId>/qmd/index.sqlite`), so collection names can't collide across agents — the agent-id suffix adds no

### #91457 fix(control-ui): persist Set Default agent through config save

- bucket: ready_for_maintainer
- author: ZengWen-DT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: blank-template, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:59:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Agents page **Set Default** button did not persist the chosen default agent: clicking it only staged a config *form draft* and never wrote it back, so the selection was silently discarded on refresh. This PR routes the one-click action through t

### #93301 fix(skill-workshop): add Global/Selected-agent scope toggle to Control UI

- bucket: ready_for_maintainer
- author: ragesaq
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: L, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T16:09:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On a multi-agent install the **Skill Workshop** panel in the Control UI renders an empty "No proposals yet" state for every agent, even when proposals exist on disk. This adds a **Global / Selected-agent** scope toggle (and the server `scope` param

### #92930 fix(status): warm model context-window cache before /status reads it

- bucket: ready_for_maintainer
- author: samson910022
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, commands, agents, size: M, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T16:12:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem CLI openclaw status shows 200K context window for models that haven't been discovered yet. The cache-warming logic (ensureContextWindowCacheLoaded) was never triggered during normal operation due to llowAsyncLoad: false blockers in status paths. ##

### #93186 fix(cache): stable tool result aggregate truncation

- bucket: ready_for_maintainer
- author: L-Trump
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T16:15:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reduces prompt-cache churn during long tool-heavy agent runs by making live tool-result prompt projection less eager to rewrite old prefix content. - Changes live aggregate tool-result reduction from exact byte shaving to coarse 20% budget quanta,

### #93351 feat(cli): add --message-file to openclaw agent

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T16:20:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `openclaw agent` currently requires inline `--message`, which makes long prompts, Markdown/code blocks, JSON, and Windows PowerShell multiline content awkward or fragile to pass through shell quoting. - This PR adds `--message-file <path>` to the

### #93356 fix(plugins): cache plugin setup registry to kill the /models CPU storm

- bucket: ready_for_maintainer
- author: obuchowski
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T16:25:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? TL;DR: `/model` command in the chat (author tested on Telegram) was runinng for dozen seconds at 100% CPU at VPS, the same after picking provider from the list, the same after picking model. The whole process of pick

### #88887 fix(memory-core): don't run the LLM reranker in vsearch/search modes

- bucket: ready_for_maintainer
- author: potterdigital
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T16:30:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What `searchMode: "vsearch"` / `"search"` are documented as vector/lexical-only modes that must not do LLM work — `buildV2Searches`' own doc comment says they exist "so lexical-only or vector-only modes don't trigger unnecessary LLM/embedding work." But `ru

### #91728 fix(github-copilot): prefer live model catalog

- bucket: ready_for_maintainer
- author: saju01
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, extensions: github-copilot, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T16:31:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - prefer GitHub Copilot's live `/models` catalog rows for visible model metadata - keep bounded static Copilot rows as a degraded fallback when live discovery is disabled, unauthenticated, or unavailable - merge live + fallback rows by model id with

### #91923 fix(ios): clean up notification settings state

- bucket: ready_for_maintainer
- author: zats
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: S, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T16:35:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace notification settings string state with typed state. - Open the app notification Settings page via `UIApplication.openNotificationSettingsURLString`. > [!WARNING] > Local proof used beta macOS/Xcode. ## Real behavior proof - Behavior addre

### #93349 fix(control-ui): keep workboard card titles visible in overflowing columns (fixes #91717)

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T16:49:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #91717. - In the Control UI Workboard, any column tall enough to overflow its visible height rendered its cards **without titles** (and notes/footer) — only the priority/agent chips and action buttons stayed visible. Sparse columns were fine

### #90453 fix(memory-core): guard searches during safe reindex

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T16:53:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Fixes an intermittent memory search/status race where safe full reindex temporarily points the manager at a half-built temp DB, allowing readers to see chunks without matching index metadata and fail closed with `i

### #51762 feat: configurable default agent ID (escape the 'main' prison) 🦞

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:00:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds support for overriding the hardcoded `"main"` fallback agent ID, so users with a single custom-named agent no longer get a ghost `agents/main/` default path/session identity when no `agents.list` is configured. ## The Problem `DEFAULT_AGENT_ID`

### #66478 fix(feishu): normalize unicode emojis to Feishu emoji type strings for reactions API (#66406)

- bucket: ready_for_maintainer
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, clawsweeper, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:02:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Feishu reactions API returns error `231001` ("reaction type is invalid") because the agent sends raw unicode emojis (e.g. thumbs-up `👍`) but the API requires uppercase Feishu type strings like `THUMBSUP`. ## Root Cause In `extensions/feishu/src/cha

### #75100 feat(feishu): add segment streaming mode

- bucket: ready_for_maintainer
- author: joeia26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: L, triage: blank-template, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:04:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add an opt-in Feishu streaming delivery mode that accumulates model output and flushes complete segments at pause points, without changing the existing CardKit streaming-card default. ## Motivation Feishu currently uses `channels.feishu.streaming` f

### #75293 fix: macOS-only Parallels smoke harness regression

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, clawsweeper, clawsweeper:commit-finding, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:05:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one macOS-only Parallels smoke harness regression. The new guest script writer creates a root-owned `700` script, then the macOS lane executes it as the desktop user. ## What ClawSweeper Is Fixing - **Low: macOS update script is not readable b

### #90694 fix(amazon-bedrock): skip IMDS during credential auto-detection (#64891)

- bucket: ready_for_maintainer
- author: ly85206559
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, extensions: amazon-bedrock, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:09:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop Bedrock memory auto-detection from probing AWS IMDS (`169.254.169.254`) when no AWS credential signals are configured. - Keep the AWS SDK default credential chain available for explicitly selected/configured Bedrock memory providers, includin
