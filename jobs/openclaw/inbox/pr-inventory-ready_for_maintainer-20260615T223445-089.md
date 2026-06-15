---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-089
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
  - "#91013"
  - "#91049"
  - "#91057"
  - "#91087"
  - "#91089"
  - "#91093"
  - "#91146"
  - "#91192"
  - "#91193"
  - "#91210"
  - "#91220"
  - "#91221"
  - "#91234"
  - "#91203"
  - "#91208"
  - "#65359"
  - "#65783"
  - "#82638"
  - "#85643"
  - "#87694"
  - "#88686"
  - "#89469"
  - "#91237"
  - "#91240"
  - "#91257"
cluster_refs:
  - "#91013"
  - "#91049"
  - "#91057"
  - "#91087"
  - "#91089"
  - "#91093"
  - "#91146"
  - "#91192"
  - "#91193"
  - "#91210"
  - "#91220"
  - "#91221"
  - "#91234"
  - "#91203"
  - "#91208"
  - "#65359"
  - "#65783"
  - "#82638"
  - "#85643"
  - "#87694"
  - "#88686"
  - "#89469"
  - "#91237"
  - "#91240"
  - "#91257"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.805Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 89

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91013 fix(gateway): ignore stale abort markers for fresh chat events

- bucket: ready_for_maintainer
- author: nxmxbbd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:18:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Prevents a retained chat abort marker from suppressing chat events for a fresh run registered after that marker. - Keeps current-abort behavior intact: an abort marker created for the active run still suppresses li

### #91049 fix: handle terminal chat send acknowledgements

- bucket: ready_for_maintainer
- author: nxmxbbd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, app: ios, app: macos, app: web-ui, gateway, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:19:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves terminal `chat.send` ACK status (`ok`, `timeout`, `error`) through clients/helper paths that previously reduced the response to "has a run id". - Clears, restores, or fails pending/optimistic state when the gateway has already returned a

### #91057 fix(sessions): prune stale gateway model-run sessions

- bucket: ready_for_maintainer
- author: wangwllu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:19:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a model-run-specific session retention setting with a conservative default of 24h - validate `session.maintenance.modelRunPruneAfter` in the strict session schema (`duration | number | false`) - prune stale `agent:*:explicit:model-run-<uuid>`

### #91087 Fix Control UI CJK IME composition

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, extensions: memory-core, cli, scripts, extensions: device-pair, size: M, extensions: qa-lab, clawsweeper, clawsweeper:automerge, clawsweeper:human-review, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: 🚀 automerge armed, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T14:20:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Makes https://github.com/openclaw/openclaw/pull/86036 merge-ready for the ClawSweeper automerge loop. The edit pass should inspect the live PR diff, review comments, and failing checks; rebase if needed; keep the contributor branch credited; and stop only when

### #91089 ci(github): add windows-node version drift detection

Adds PowerShell script and tests to detect when OpenClaw releases are
behind the latest openclaw-windows-node version. Helps prevent future
instances of issue #90953 where critical fixes (localized WSL parsing)
were available but not promoted to stable releases.

AI-assisted: true

- bucket: ready_for_maintainer
- author: LiuwqGit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:20:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a maintainer-facing Windows Hub drift check that compares the Windows Hub build promoted on an OpenClaw release against the latest `openclaw-windows-node` release. **Problem** - Issue #90953 was caused by localized WSL output (`Versione

### #91093 Feat/acp hub delegated sessions

- bucket: ready_for_maintainer
- author: scotthuang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, commands, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 📸 screenshot, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T14:20:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: Hub sessions (WebChat, WeChat, and other main chat surfaces) need persistent external ACP harness workers without binding a Discord/Telegram thread. The existing ACP persistent path requires `mode: "session"` plus `thread: true`, whic

### #91146 fix(telegram): improve section spacing in replies

- bucket: ready_for_maintainer
- author: paul-cch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T14:21:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Telegram final replies can feel cramped when model output uses Markdown headings or short section-label paragraphs, because Telegram Bot API HTML has no real heading/list block layout. - This teaches the Telegram f

### #91192 fix(tts): allow trusted local media in message_tool_only mode

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:22:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes openclaw/openclaw#83636. Trusted local TTS media generated by tools can be dropped in `message_tool_only` room-event flows because the media was attached to message-tool source-reply transcript mirrors or consumed through suppressed block deli

### #91193 fix(cli): document Commander rawArgs internal API dependency in action-reparse.ts

- bucket: ready_for_maintainer
- author: whiteyzy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:22:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a comment documenting that `rawArgs` is accessed via an unsafe cast because it is not part of Commander's public TypeScript interface. Makes the technical debt visible so future maintainers know the risk. ## Linked context Closes #83893 ## Real

### #91210 fix(ui): localize skill workshop switcher

- bucket: ready_for_maintainer
- author: SYU8384
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T14:23:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Splits out the i18n portion of #79745. This PR localizes the Skill Workshop mode switcher (Board / Today) into all supported Control UI locales. It does not touch the qmd/mcporter memory path. ## Verification Rebased onto current `upstream/main` (`ded3a93058`)

### #91220 fix(docs): lint workspace templates

- bucket: ready_for_maintainer
- author: AdvancedForge
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, commands, agents, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:23:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Extends the existing markdownlint docs lane to cover shipped workspace template markdown. * Adds `src/agents/templates/HEARTBEAT.md` to markdownlint coverage because it is part of the shipped workspace template pack. * Removes the explicit markdow

### #91221 fix(daemon): detect and resolve dueling user+system systemd gateway units (#79375)

- bucket: ready_for_maintainer
- author: 24373054
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, commands, size: L, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:23:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #79375 — on Linux, after an upgrade a **user-scope** unit (`~/.config/systemd/user/openclaw-gateway.service`) and a **system-scope** unit (`/etc/systemd/system/openclaw-gateway.service`) can both exist and both try to manage the gateway. They

### #91234 fix #91224: Bug: internal inter-session confirmation acks leak to external channels

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:24:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Internal inter-session confirmation acknowledgements from `sessions_send` or `subagent_announce` could inherit the parent session's persisted external route and leak to a Slack DM after the actual user-facing reply had already been delive

### #91203 fix(matrix): neutralize command progress failure labels

- bucket: ready_for_maintainer
- author: bdjben
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:25:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - narrow this PR to the false command-progress `failed` label only - render vague terminal command-progress statuses (`failed`, `error`, `cancelled`, and related terminal statuses) as neutral command lifecycle text instead of a user-visible failure

### #91208 fix #91047: Plugin session-extension registry not pinned; sessions.pluginPatch fails after agent/subagent plugin-load churn

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:25:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: startup-registered plugin session extensions could disappear from `sessions.pluginPatch` after later agent/subagent plugin-load churn replaced the active plugin registry. - Solution: add a pinned session-extension registry surface alongsi

### #65359 fix(config): allow historyLimit: 0 in GroupChatSchema

- bucket: ready_for_maintainer
- author: maxreith
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:41:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `GroupChatSchema.historyLimit` used `.positive()`, which rejects `0`, while the other `historyLimit` schemas accept `0` with `.min(0)`. This made `messages.groupChat.historyLimit: 0` invalid even though `0` is the existing config value for disabling

### #65783 fix(memory): preserve surrogate pairs in chunker; sanitize embed inputs

- bucket: ready_for_maintainer
- author: jensenwang560-blip
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:41:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix the outer coarse-split loop in `chunkMarkdown` so it does not bisect a UTF-16 surrogate pair (root cause of indexing stalls). - Add a defensive `stripUnpairedSurrogates` sanitizer at the embed boundary (the safety net #27753 originally request

### #82638 fix(agents): skip implicit provider discovery when models.mode is 'replace' [AI-assisted]

- bucket: ready_for_maintainer
- author: eldar702
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:42:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `src/agents/models-config.plan.ts:60-61` unconditionally `await`s `resolveImplicitProvidersImpl(...)` (the provider-discovery scan) before reading `cfg.models?.mode`. When the user has set `models.mode: "replace"` to opt out of discov

### #85643 fix(sessions): honor explicit default model pins

- bucket: ready_for_maintainer
- author: latensified
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, agents, size: XL, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T14:43:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Persist explicit user selections of the configured default model as exact session model pins instead of clearing them as if they were unpinned defaults. - Keep `/model default`, `session_status(model=default)`, and `sessions.patch model:null` as t

### #87694 fix(auth): tighten billing cooldown defaults to recover from multi-hour lockouts (#70903)

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:44:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Multi-hour persisted `disabledUntil` (old 5h base / 24h cap billing defaults) keeps users locked out of a provider for the full window even after billing is fixed. The call layer skips disabled profiles before any probe runs, so `markAuthProfileSu

### #88686 Replay sessions_yield wait text in WebChat history

- bucket: ready_for_maintainer
- author: alexzhu0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:45:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes https://github.com/openclaw/openclaw/issues/87321 ## User-facing bug WebChat replay could drop a visible `sessions_yield` wait message when that wait text was stored as a transcript tool result instead of a normal assistant text row. In practice, reopeni

### #89469 feat(agents): inherit requester model for subagents

- bucket: ready_for_maintainer
- author: Gausons
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:45:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Let native subagent spawns resolve `model: "inherit"` from the requester session's active model, including model context passed through `sessions_spawn` and persisted requester session state fallback. - Normalize inherited provider/model refs so p

### #91237 fix(providers/openrouter): treat OpenRouter (URL + default route) as long-TTL-eligible for Anthropic cache_control

- bucket: ready_for_maintainer
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:47:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `isLongTtlEligibleEndpoint()` decides whether the env-driven `OPENCLAW_CACHE_RETENTION=long` default (and conservative implicit-long behavior) promotes an Anthropic `cache_control` marker from the 5-minute to the 1-hour `ttl`. It only whitelisted `a

### #91240 fix: report Codex ChatGPT status auth

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:48:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Teach `/status` auth labels for OpenAI models running on the Codex harness to check the agent-owned Codex app-server `codex-home` before ambient OpenAI env keys. - Align OpenClaw's Codex `auth.json` OAuth reader with Codex auth-mode resolution so

### #91257 perf: split subagent registry runtime imports

- bucket: ready_for_maintainer
- author: poison
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:49:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Split the subagent registry lazy runtime imports across three narrower runtime entries: `context-engine-init.runtime`, `context-engine-registry.runtime`, and `runtime-plugins.runtime`. - Keep the existing `subagent-registry.runtime` build entry fo
