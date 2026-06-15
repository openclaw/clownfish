---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-054
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
  - "#92939"
  - "#59336"
  - "#60212"
  - "#66685"
  - "#66985"
  - "#67077"
  - "#92956"
  - "#67946"
  - "#68079"
  - "#68558"
  - "#68677"
  - "#65359"
  - "#89349"
  - "#89618"
  - "#89628"
  - "#64782"
  - "#65065"
  - "#65783"
  - "#68967"
  - "#69059"
  - "#69417"
  - "#69707"
  - "#69822"
  - "#70002"
  - "#89648"
  - "#89671"
  - "#80947"
  - "#92947"
  - "#92990"
  - "#40874"
  - "#52664"
  - "#54724"
  - "#55596"
  - "#56806"
  - "#72092"
  - "#72314"
  - "#72557"
  - "#92524"
  - "#73649"
  - "#89724"
cluster_refs:
  - "#92939"
  - "#59336"
  - "#60212"
  - "#66685"
  - "#66985"
  - "#67077"
  - "#92956"
  - "#67946"
  - "#68079"
  - "#68558"
  - "#68677"
  - "#65359"
  - "#89349"
  - "#89618"
  - "#89628"
  - "#64782"
  - "#65065"
  - "#65783"
  - "#68967"
  - "#69059"
  - "#69417"
  - "#69707"
  - "#69822"
  - "#70002"
  - "#89648"
  - "#89671"
  - "#80947"
  - "#92947"
  - "#92990"
  - "#40874"
  - "#52664"
  - "#54724"
  - "#55596"
  - "#56806"
  - "#72092"
  - "#72314"
  - "#72557"
  - "#92524"
  - "#73649"
  - "#89724"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.484Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 54

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92939 #92015: Skip default workspace auto-scaffold & git init for runtime-managed (ACP) agents

- bucket: ready_for_maintainer
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T13:09:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Skip default workspace auto-scaffold and git init for runtime-managed agents (e.g., ACP) that do not have an explicit `workspace` configured. Runtime-managed agents declare their effective `cwd` through their binding and do not need local workspace 

### #59336 fix: Config Raw mode permanently disabled due to round-trip check regression

- bucket: ready_for_maintainer
- author: rayseling
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T13:10:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #59330 — Control UI Config editor permanently shows "Raw mode disabled (snapshot cannot safely round-trip raw text)" since 2026.3.31. ## Root Cause Two issues cause `shouldFallbackToStructuredRawRedaction()` to always return `true`: ### 1. `no

### #60212 [codex] Cron: repair empty sanitized final replies

- bucket: ready_for_maintainer
- author: mySebbe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, app: web-ui, gateway, agents, size: XL, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:10:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ???## Summary - Problem: cron-owned agent runs could finish with no deliverable final text after sanitization and end up as silent `not-delivered` outcomes. - Why it matters: scheduled reports can vanish without a clear error even though the cron job itself ra

### #66685 Suppress expired exec approval followup warnings

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:12:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Suppress exec approval followup warning logs when the approval id is already gone (`unknown or expired approval id`). ## Why During investigation of #66675, restart/reporting flows could leave the gateway healthy while adding noisy log lines like: -

### #66985 fix(agents): resolve requestedNode to canonical ID before boundNode comparison

- bucket: ready_for_maintainer
- author: mujiannan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:14:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The bound-node guard in `executeNodeHostCommand` compared `params.boundNode` (a full 64-char device ID) directly against `params.requestedNode` (which may be a display name, IP address, or partial ID prefix). Because the two formats never match, `ex

### #67077 fix(auth-profiles): make post-success bookkeeping saves non-fatal

- bucket: ready_for_maintainer
- author: ademczuk
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T13:14:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #62099. On Windows, concurrent config hot-reload can leave `auth-profiles.json` with a ReadOnly attribute. The atomic write in `saveAuthProfileStore` then throws `EPERM`, and because `markAuthProfileGood` / `markAuthProfileUsed` / `markAuthPro

### #92956 #91927: Export langfuse.session.id attribute on OTel spans for Langfuse session grouping

- bucket: ready_for_maintainer
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: diagnostics-otel, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T13:21:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add an opt-in `diagnostics.otel.sessionAttribute` configuration option that exports a SHA-256 hashed session identifier as `langfuse.session.id` on root OTel spans, enabling Langfuse session grouping without exposing raw session keys. ## Root Cause 

### #67946 Clear stale subagent lineage on top-level sessions

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:21:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #67943. ## Summary Prevents normal top-level sessions from inheriting stale subagent lineage metadata that can incorrectly trip `sessions_spawn` depth limits. ## What changed - clear persisted subagent lineage fields on ordinary top-level session turns -

### #68079 feat(providers/zai): inject X-Session-Id header for prompt cache stickiness

- bucket: ready_for_maintainer
- author: Frrrrrrrrank
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, proof: supplied, proof: sufficient, extensions: zai, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T13:22:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add `X-Session-Id` header injection for the `zai` provider to enable sticky routing on ZhipuAI's backend load balancer. On a live agent workload (78 GLM-5.1 calls in a single session), this lifts prompt-cache hit rate from **~52% → ~96%** without an

### #68558 fix(auto-reply): stop rendering misleading /compact labels on small sessions

- bucket: ready_for_maintainer
- author: Ante042
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T13:27:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: Running \`/compact\` on a session with little or no summarizable history can render labels like \`Compacted (0 → 36) • Context 36/1.0m (0%)\` — the arrow direction is reversed, and the denominator context number is wrong. - **Why it m

### #68677 Agents/tool-images: memoize resize to avoid per-turn sharp decode (#64418)

- bucket: ready_for_maintainer
- author: nitinjwadhawan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:27:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Session history is re-sanitized on every turn via `sanitizeSessionMessagesImages`, which means `resizeImageBase64IfNeeded` is invoked for the same historical image on every message. Both the `getImageMetadata` header read and any `resizeToJpeg` call

### #65359 fix(config): allow historyLimit: 0 in GroupChatSchema

- bucket: ready_for_maintainer
- author: maxreith
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:33:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `GroupChatSchema.historyLimit` used `.positive()`, which rejects `0`, while the other `historyLimit` schemas accept `0` with `.min(0)`. This made `messages.groupChat.historyLimit: 0` invalid even though `0` is the existing config value for disabling

### #89349 fix(agents): allow runtime wildcard tool allowlist to override static…

- bucket: ready_for_maintainer
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T13:36:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a cron job sets `toolsAllow: ["*"]`, the runtime wildcard should override the agent's static tool profile (e.g. `messaging`) so that `exec` and other coding tools remain available — including background/yield behavior. Previously, `createOpenCl

### #89618 feat(atomicchat): add Atomic Chat as a bundled local provider

- bucket: ready_for_maintainer
- author: danyurkin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, commands, size: M, proof: supplied, proof: sufficient, dependencies-changed, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T13:45:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #89617 ## What & why [Atomic Chat](https://github.com/AtomicBot-ai/Atomic-Chat) is an open-source cross-platform desktop/mobile app that runs open-weight LLMs locally and exposes a single **OpenAI-compatible** HTTP API at `http://127.0.0.1:1337/v1` (a R

### #89628 Speed up precomputed command help startup

- bucket: ready_for_maintainer
- author: yyzquwu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, scripts, size: M, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:45:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add strict launcher/entry fast paths for precomputed `doctor`, `gateway`, `models`, `plugins`, `sessions`, and `tasks` help - keep container routing in control for those precomputed subcommand help paths - fix Windows `node --import` RSS hook path

### #64782 fix(gateway): restore codex-cli chat history imports

- bucket: ready_for_maintainer
- author: byliu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:26:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `chat.history` only backfilled external CLI transcript history for `claude-cli`, so Codex-backed sessions could look empty after refresh when the local transcript was missing. - Why it matters: users could lose visible history in Gateway/

### #65065 Add missing message channel admin subcommands

- bucket: ready_for_maintainer
- author: mikepatraw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:26:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add CLI registration for `openclaw message channel create|edit|delete|move` - add targeted tests covering the new channel admin routes - update CLI docs to list the newly exposed `message channel` subcommands ## Problem Discord provider capabiliti

### #65783 fix(memory): preserve surrogate pairs in chunker; sanitize embed inputs

- bucket: ready_for_maintainer
- author: jensenwang560-blip
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T14:27:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix the outer coarse-split loop in `chunkMarkdown` so it does not bisect a UTF-16 surrogate pair (root cause of indexing stalls). - Add a defensive `stripUnpairedSurrogates` sanitizer at the embed boundary (the safety net #27753 originally request

### #68967 feat(googlechat): add sessionThread option to bind OpenClaw sessions to Google Chat threads

- bucket: ready_for_maintainer
- author: dyaskur
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: googlechat, size: M, triage: dirty-candidate, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T14:29:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: AI-assisted: yes (Claude Opus 4.7). ## Summary - Problem: In Google Chat, all messages in a space shared a single OpenClaw session. Starting a new thread to change topic still inherited memory from prior threads, and replies did not reliably land in the user's

### #69059 fix: retry sqlite-vec load without .dll suffix on Windows

- bucket: ready_for_maintainer
- author: JustInCache
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T14:31:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #68892. On Windows, `node:sqlite`'s `DatabaseSync.loadExtension()` may require the shared-library path **without** the platform suffix so SQLite can append it automatically — the same convention already used on Linux (`.so`) and macOS (`.dylib

### #69417 fix(mcp): allow SecretRef values in mcp.servers env and headers [AI-assisted]

- bucket: ready_for_maintainer
- author: fgabelmannjr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T14:33:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds SecretRef support to core MCP server configuration so `mcp.servers.*.env.*` and `mcp.servers.*.headers.*` can use SecretInput values in addition to plaintext literals. Before this change, core `mcp.servers` only accepted primitive liter

### #69707 fix(memory-lancedb): stop forwarding embedding dimensions upstream

- bucket: ready_for_maintainer
- author: badgerbees
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-lancedb, size: L, triage: refactor-only, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T14:34:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `memory-lancedb` forwarded `dimensions` to every direct OpenAI-compatible embeddings request, which breaks vLLM/NVIDIA-style providers that reject that field. - Why it matters: memory recall/search can fail at embed time for otherwise com

### #69822 feat(session-message-events) socket.drain

- bucket: ready_for_maintainer
- author: gdibble
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T14:35:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 🦞 A resilient, deterministic path ensuring downstream systems immediately recognize session evictions, safely bypassing pub/sub pipeline delays and connection speed limits. It also firmly resolves persistent `vite` test deadlocks bound to orphan he

### #70002 ci: skip docs sync & translate-trigger workflows in forks

- bucket: ready_for_maintainer
- author: xudaiyanzi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: risky-infra, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T14:36:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Two upstream-only workflows (`docs-sync-publish.yml`, `docs-translate-trigger-release.yml`) fail with `Authentication failed for 'https://github.com/openclaw/docs.git/'` on every push to `main` in any fork, because they rely on the `O

### #89648 fix(agents): restore model-fetch info logs

- bucket: ready_for_maintainer
- author: xiaobao-k8s
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:44:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Restores default `info` logging for `[model-fetch]` request metadata (`start` / `response` / `error`) so provider/model/API/status/latency diagnostics are visible in normal gateway logs again. ## Changes - Treat `[model-fetch]` transport metadata me

### #89671 fix(google-meet): resolve join and caption failures on Chinese locales

- bucket: ready_for_maintainer
- author: Unayung
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, plugin: google-meet, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:44:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR addresses a critical localization (L10n) issue with the Google Meet browser automation in the `google-meet` extension: - **The Problem**: The Chrome browser automation script relied entirely on hardcoded English regex/labels (e.g., `/join no

### #80947 fix(doctor): warn and document QMD session recall gates

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:46:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add an `openclaw doctor` warning when QMD is the active memory backend and the default agent searches `sessions`, but QMD session transcript export is not enabled. - Clarify the session transcript recall gates in memory docs: - session-memory must

### #92947 fix(qqbot): deliver cron auto-TTS voice by trusting OpenClaw temp root

- bucket: ready_for_maintainer
- author: ZengWen-DT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, channel: qqbot, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:53:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92816. When `messages.tts.auto = "always"`, cron deliveries to QQBot are silently lost while the run is still recorded as delivered. Root cause: cron auto-TTS (speech-core) writes the generated voice file under OpenClaw's preferred temp root 

### #92990 fix(doctor): suppress false groupAllowFrom warning when per-account allowlists cover all accounts

- bucket: ready_for_maintainer
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T14:54:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92684. When `channels.<platform>.groupPolicy` is "allowlist" and the top-level `groupAllowFrom` is empty, but every account has its own populated `groupAllowFrom`, `openclaw doctor` incorrectly warns that inbound group messages will be droppe

### #40874 feat(ios): Liquid Glass UI, Action Button & Dynamic Island

- bucket: ready_for_maintainer
- author: eulicesl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: L, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T15:05:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: N/A — this PR adds iOS 26 user-facing capabilities rather than fixing a regression. - Why it matters: OpenClaw’s iOS app gains modern platform-native UX for glass styling, quick voice entry via Action Button/App Intent, and Dynamic Island

### #52664 feat: expose rawBody on user messages in plugin hook events

- bucket: ready_for_maintainer
- author: kingdoooo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:06:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Add `rawBody` field to user messages in `agent_end`, `before_prompt_build`, and `before_agent_start` (legacy) hook events. This provides plugins with the original user input before channel structural context, `buildInboundUserContextPrefix()` metad

### #54724 fix/agents-primary-model-selection-and-catalog-loading-41344

- bucket: ready_for_maintainer
- author: wsyjh8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T15:06:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes incorrect Primary Model selection when switching between agents in Agents > Overview. - Fixes partial / blank Primary Model dropdowns after refresh or first load by ensuring the model catalog is available on Agents Overview paths. - Adds tar

### #55596 fix(CLI) Markdown table columns misaligned with CJK characters on Telegram and Discord

- bucket: ready_for_maintainer
- author: sparkyrider
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T15:06:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Draft Closes: #55512

### #56806 feat(exec): expose knownLongFlags in safeBinProfiles config schema

- bucket: ready_for_maintainer
- author: spencer2211
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:07:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Expose the `knownLongFlags` field in the `safeBinProfiles` config schema, allowing operators to declare long flags as "known" for GNU abbreviation resolution without misusing `allowedValueFlags` or `deniedFlags`. Closes #56805 > **Rebased 2026-06-10

### #72092 fix(media): allow aws-sdk auth mode for image and audio/video paths

- bucket: ready_for_maintainer
- author: truffle-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:16:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The chat path's `prepareSimpleCompletionModel` exposes an `allowMissingApiKeyModes` escape hatch so providers whose `auth.mode === "aws-sdk"` (notably `amazon-bedrock`) can resolve credentials at call time via the AWS SDK chain instead of a static `apiKey`. Th

### #72314 fix(auto-reply): dedupe idless inbound retries

- bucket: ready_for_maintainer
- author: mjamiv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:17:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a content/timestamp fallback inbound dedupe key when providers do not supply a stable message id - keep normal provider-message-id dedupe unchanged - cover idless retry dedupe and same-body/different-timestamp non-collapse ## Why Some channel 

### #72557 feat: PluginStatusProvider plugin API for TUI footer status (resolves #64086)

- bucket: ready_for_maintainer
- author: dodge1218
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:19:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Resolves #64086. Coordinates with #53774 (broader footer-customization tracker). ## What this PR does Adds a typed `PluginStatusProvider` interface and `registerStatusProvider` method to `OpenClawPluginApi`, following the same registration shape as `registerTo

### #92524 fix(memory-core): preserve keyword-only hybrid results

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:32:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes hybrid memory search so keyword-only FTS hits survive the post-merge minScore boundary even when another vector result already passes the strict threshold. Fixes #92337. ## Real Behavior Proof - Behavior addressed: Hybrid search no longer drop

### #73649 fix(issue-template): split logs and screenshots into separate fields

- bucket: ready_for_maintainer
- author: d1rshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T15:33:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Splits the **Logs, screenshots, and evidence** field in the bug report issue template into two separate fields: - **Logs** - retains `render: shell` for syntax highlighting - **Screenshots, recordings, and evidence** - a plain textarea that accepts ima

### #89724 feat(voice-call): add Microsoft Teams voice provider (OpenClawTeamsBridge)

- bucket: ready_for_maintainer
- author: ahenawy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: voice-call, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T15:37:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** - OpenClaw's `voice-call` extension supports Twilio, Telnyx, Plivo, and a mock provider, but has no way to handle **Microsoft Teams** calls. Teams audio cannot reach the existing webhook/media-stream plane becaus

