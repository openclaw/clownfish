---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-068
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
  - "#88075"
  - "#88085"
  - "#88503"
  - "#88098"
  - "#88150"
  - "#88203"
  - "#88206"
  - "#90741"
  - "#88301"
  - "#88323"
  - "#88437"
  - "#88400"
  - "#88401"
  - "#92930"
  - "#93025"
  - "#93176"
  - "#93182"
  - "#90979"
  - "#91093"
  - "#91097"
  - "#91117"
  - "#91134"
  - "#91146"
  - "#91193"
  - "#93185"
  - "#93149"
  - "#93189"
  - "#69729"
  - "#72009"
  - "#72404"
  - "#73163"
  - "#73785"
  - "#75754"
  - "#75857"
  - "#75860"
  - "#80008"
  - "#80147"
  - "#80204"
  - "#80396"
  - "#93188"
cluster_refs:
  - "#88075"
  - "#88085"
  - "#88503"
  - "#88098"
  - "#88150"
  - "#88203"
  - "#88206"
  - "#90741"
  - "#88301"
  - "#88323"
  - "#88437"
  - "#88400"
  - "#88401"
  - "#92930"
  - "#93025"
  - "#93176"
  - "#93182"
  - "#90979"
  - "#91093"
  - "#91097"
  - "#91117"
  - "#91134"
  - "#91146"
  - "#91193"
  - "#93185"
  - "#93149"
  - "#93189"
  - "#69729"
  - "#72009"
  - "#72404"
  - "#73163"
  - "#73785"
  - "#75754"
  - "#75857"
  - "#75860"
  - "#80008"
  - "#80147"
  - "#80204"
  - "#80396"
  - "#93188"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.487Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 68

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #88075 feat(security/exec): add tools.exec.denyPathPatterns hard-deny gate (#74379)

- bucket: ready_for_maintainer
- author: koshaji
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T05:19:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an opt-in `tools.exec.denyPathPatterns` — a config-level deny gate that blocks `exec` / `system.run` invocations whose path arguments match configured glob patterns, **before** allowlist/approval/safe-bin checks. A denied path (e.g. `~/.opencla

### #88085 fix(cli): guard against commander rawArgs API drift in action reparse

- bucket: ready_for_maintainer
- author: Ylsssq926
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:19:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #83893 ## Problem `reparseProgramFromActionArgs()` in `src/cli/program/action-reparse.ts` reads Commander's `rawArgs` through an unsafe cast: ```ts const rawArgs = (root as Command & { rawArgs?: string[] }).rawArgs; ``` `rawArgs` is not part of Commander

### #88503 fix(ui): preserve chat sends across reconnect

- bucket: ready_for_maintainer
- author: samzong
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, scripts, stale, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:19:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep in-flight Webchat sends tied to the current send attempt so stale pre-reconnect completions cannot remove or duplicate replayed queued messages. - Mark stopped same-scope Gateway requests as retryable, while preventing gateway-scope changes f

### #88098 feat(onboard): add --custom-context-window flag for non-interactive setup

- bucket: ready_for_maintainer
- author: ericlevine
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:19:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - `openclaw onboard --non-interactive --auth-choice custom-api-key` has no way to declare the model's context window. Custom providers always land with the conservative default (128k non-Azure, 400k Azure), even when

### #88150 fix(config): cap runtime session-store cache retention

- bucket: ready_for_maintainer
- author: yozakura-ava
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:20:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Fix: cap runtime session-store cache retention for oversized stores ## Summary This patch adds a runtime byte cap to the live session-store object and snapshot caches so oversized `sessions.json` loads do not stay resident as parsed object graphs in the gate

### #88203 fix(approvals): handle stale plugin waits

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:21:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Extend the shared approval-not-found classifier to cover the gateway waitDecision stale-id message `approval expired or not found`. - Reuse that classifier in plugin approval waits for before_tool_call, Codex app-server approvals, native hook rela

### #88206 fix(codex): coalesce in-flight dynamic tool calls

- bucket: ready_for_maintainer
- author: litang9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:21:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What changed? - Add a Codex dynamic-tool in-flight coalescer keyed by `threadId`, `turnId`, `namespace`, `tool`, and canonicalized `arguments`. - Wire the coalescer into both the main Codex app-server run path and the `/btw` side-question dynamic-to

### #90741 perf(models-config): unify auth-profile fingerprint cache + targetProvider short-circuit

- bucket: ready_for_maintainer
- author: zeroaltitude
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, commands, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:21:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Improves `models.json` preparation so OpenClaw can skip expensive implicit-provider discovery when the relevant inputs are unchanged, while still re-planning when canonical auth state, plugin catalogs, or generated config inputs drift. This PR recon

### #88301 fix(prompt-cache): lock bootstrap warning default and surface system prompt digest drift

- bucket: ready_for_maintainer
- author: LikeDege
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: matrix, gateway, cli, scripts, commands, docker, agents, size: L, extensions: codex, proof: supplied, proof: sufficient, extensions: google, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T05:23:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? The `bootstrapPromptTruncationWarning="always"` default (PR #81918) silently doubles as the only thing keeping the system prompt digest stable across turns when bootstrap files are truncated. With `mode="once"` the w

### #88323 [codex] Dedupe generated media deliveries

- bucket: ready_for_maintainer
- author: compoodment
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:23:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add shared generated-media delivery idempotency keyed by generated artifact path. - Apply it at the durable message-send boundary, plus the message-action/final-delivery paths that can replay the same artifact. - Keep the narrow same-run final-pay

### #88437 docs: clarify blank Control UI recovery

- bucket: ready_for_maintainer
- author: Freedomziko
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:24:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Tiny docs tweak for the blank Control UI recovery section. - Adds the obvious first check: make sure the Gateway is actually reachable. - Spells out the hard-refresh shortcuts so the cache/service-worker advice is easier to act on. - AI-assisted w

### #88400 fix(config): accept overlays for bundled provider aliases

- bucket: ready_for_maintainer
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: blank-template, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:26:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allow bundled provider aliases to be configured as lightweight provider overlays without `baseUrl` or `models`. - Add the reviewer-identified bundled overlay aliases to the schema allowlist: `azure-openai-responses`, `moonshotai`, `moonshot-ai`, `

### #88401 fix(agents): safely record non-json transport errors

- bucket: ready_for_maintainer
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:26:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** `assignTransportErrorDetails()` used `JSON.stringify(error)` for non-`Error` transport rejections. If a provider rejected with a `BigInt` or circular object, the error handling path itself threw before the stream

### #92930 fix(status): warm model context-window cache before /status reads it

- bucket: ready_for_maintainer
- author: samson910022
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, commands, agents, size: S, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T05:37:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem CLI openclaw status shows 200K context window for models that haven't been discovered yet. The cache-warming logic (ensureContextWindowCacheLoaded) was never triggered during normal operation due to llowAsyncLoad: false blockers in status paths. ##

### #93025 [codex] fix(provider): expose session identity to stream hooks

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:06:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Refs #73488 ## Summary - Add optional `sessionId` and `sessionKey` to `ProviderCreateStreamFnContext`. - Thread that request-scoped identity through provider stream registration for embedded agent turns, compaction, and `/btw` side questions. - Keep one-off im

### #93176 fix(agents): skip bootstrap seeding in inherited nested workspaces (#83593)

- bucket: ready_for_maintainer
- author: manan-tech
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:08:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `ensureAgentWorkspace` re-seeds bootstrap templates (`SOUL.md`, `USER.md`, `IDENTITY.md`, `HEARTBEAT.md`, …) into directories nested **inside** an already-established OpenClaw workspace, because it only consulted the directory's *own* `.openclaw/wor

### #93182 fix(memory): clean rollback-journal reindex temp sidecar on NFS stores

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:08:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `cleanupAgedMemoryReindexTempFiles` (added in #92891) removes aged orphaned reindex temp databases at memory-store startup, but it only knows about the **WAL** sidecars `-wal`/`-shm`. On NFS-backed memory stores the temp database is **not** in WAL m

### #90979 fix(agents): guard CLI MCP resume reuse

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:08:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - Invalidate stored CLI session bindings when they have a strict `mcpResumeHash` but the current run cannot provide one. - Add regression coverage for the one-sided resume-hash case while keeping legacy `mcpConfigHash` fallback for bindings that ne

### #91093 Feat/acp hub delegated sessions

- bucket: ready_for_maintainer
- author: scotthuang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, commands, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 📸 screenshot, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T06:10:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: Hub sessions (WebChat, WeChat, and other main chat surfaces) need persistent external ACP harness workers without binding a Discord/Telegram thread. The existing ACP persistent path requires `mode: "session"` plus `thread: true`, whic

### #91097 fix(test): add missing reasoning field to overflow compaction harness mock defaults

- bucket: ready_for_maintainer
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:10:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix tsgo type error in `run.overflow-compaction.loop.test.ts` by adding the missing `reasoning` field to `mockedResolveModelAsync` default return values in the harness file. **Changes**: 1 file, +2 lines ## Root Cause The `Model` interface (`package

### #91117 refactor: remove dead code and improve string concatenation

- bucket: ready_for_maintainer
- author: Pommelle
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:10:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Change Type / Scope / Linked Issue Type: refactor Scope: utils/shared --- ## Motivation Remove dead code paths and improve performance in shared utility functions. The changes simplify code without altering behavior. ## Changes ### Dead code removal **src/util

### #91134 ci: check bundled channel config metadata

- bucket: ready_for_maintainer
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:11:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #80536 ## Problem `src/config/bundled-channel-config-metadata.generated.ts` is checked in and used by runtime channel config validation. The repository already has `pnpm check:bundled-channel-config-metadata`, but the main CI `check-shard` job does not r

### #91146 fix(telegram): improve section spacing in replies

- bucket: ready_for_maintainer
- author: paul-cch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T06:11:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Telegram final replies can feel cramped when model output uses Markdown headings or short section-label paragraphs, because Telegram Bot API HTML has no real heading/list block layout. - This teaches the Telegram f

### #91193 fix(cli): document Commander rawArgs internal API dependency in action-reparse.ts

- bucket: ready_for_maintainer
- author: whiteyzy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:12:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a comment documenting that `rawArgs` is accessed via an unsafe cast because it is not part of Commander's public TypeScript interface. Makes the technical debt visible so future maintainers know the risk. ## Linked context Closes #83893 ## Real 

### #93185 [codex] fix(telegram): drop unused rich markdown parameter

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:16:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Remove the unused `markdown` parameter from `findRichMarkdownTableLineIndexes`. - Keep the table line detection behavior unchanged while restoring `tsgo:extensions` cleanliness. ## Verification - `node scripts/run-tsgo.mjs -p tsconfig.extensions.j

### #93149 feat(cron): add add dry-run preview

- bucket: ready_for_maintainer
- author: rrrrrredy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:28:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Clean replacement for #59490 / #59452. - Adds `cron add --dry-run`. - Builds the exact params that normal `cron add` would send to `cron.add`. - Prints those params as JSON and returns before any gateway RPC. - `--dry-run --json` keeps stdout pure J

### #93189 fix(gateway): archive legacy-root stale transcript files on reset/delete

- bucket: ready_for_maintainer
- author: xydigit-sj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:28:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91868. ## Summary When a stale legacy transcript path such as `~/.openclaw/sessions/<old-uuid>.jsonl` is stored in session state, `resolveSessionFilePath()` silently normalizes it to a generated path for the *current* sessionId. The legacy file therefor

### #69729 fix(qwen): enable qwen3.6-plus on Coding Plan CN, correct reasoning flag

- bucket: ready_for_maintainer
- author: wAnyBug-Com
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:30:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **What changed**: Enables `qwen3.6-plus` on the DashScope Coding Plan CN endpoint (`coding.dashscope.aliyuncs.com`) and corrects its `reasoning` flag (`false` → `true`). - `extensions/qwen/models.ts`: `reasoning: false` → `reasoning: true` on the 

### #72009 Make typing indicator TTL configurable

- bucket: ready_for_maintainer
- author: suntp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, stale, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:32:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Increase the default typing indicator TTL from 2 minutes to 5 minutes. - Add configurable `typingTtlSeconds` support via session config and agent defaults. - Document the new setting and regenerate the base config schema. Closes #71999 ## Tests - 

### #72404 fix(models): default input=[text,image] for vision-capable explicit-only models

- bucket: ready_for_maintainer
- author: aaronedell
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: M, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:33:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #71921. When a user's `openclaw.json` contains a static model catalog for a provider (e.g. `amazon-bedrock`) and an entry omits the `input` field, `mergeProviderModels` previously returned that entry unchanged whenever discovery had no matchin

### #73163 fix(gateway): warn for insecure Control UI access

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, scripts, stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:35:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Emit a gateway startup warning when Control UI is enabled on non-loopback HTTP with device auth still required - Keep loopback, TLS, trusted-proxy auth mode, disabled Control UI, and `dangerouslyDisableDeviceAuth` cases quiet - Pass resolved Contr

### #73785 fix(heartbeat): suppress no-op system event replies

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, scripts, stale, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:35:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add centralized no-op sentinel detection for silent heartbeat/system-event replies - suppress exact `HEARTBEAT_OK`, `NO_REPLY`, `NO_NEW_AUDIO`, and `SESSION_WATCHDOG_OK` outputs before delivery - keep meaningful relayable exec summaries deliverabl

### #75754 fix(clawdock): open dashboard via clawdock-dashboard on published port instead of hardcoded default port

- bucket: ready_for_maintainer
- author: dhoman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:36:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `clawdock-dashboard` could open the container-internal dashboard URL/port instead of the Docker-published host port. - Why it matters: Docker users with remapped ports could get a dashboard URL that does not work from the host browser, ev

### #75857 fix(telegram): suppress silent callback fallback

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:37:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - suppress Telegram direct-chat silent reply fallback for synthetic `callback_query` button turns - keep answering callback queries so Telegram clears the button spinner - preserve normal visible callback replies and non-callback silent reply behavi

### #75860 fix(memory): improve QMD recall for channel queries

- bucket: ready_for_maintainer
- author: codexGW
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:37:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow QMD recall for Discord channel sessions in the default scope - retry empty/noisy QMD search queries once with a tighter lexical query built from priority memory anchors - report scope-denied QMD searches in debug output instead of making the

### #80008 feat(plugins): expose ACP spawn and prompt in plugin runtime

- bucket: ready_for_maintainer
- author: dhruvkelawala
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, agents, size: L, plugin: file-transfer, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:41:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Plugins can orchestrate subagents via `api.runtime.subagent.*` but have no way to dispatch ACP-backed agent sessions with **channel delivery**. This PR adds `api.runtime.acp.spawn()` and `api.runtime.acp.prompt()` to the plugin runtime, gated behind

### #80147 fix(browser): time out remote tab enumeration

- bucket: ready_for_maintainer
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:41:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #58968 by bounding remote CDP Playwright tab enumeration with the existing remote CDP timeout budget. - Evicts the scoped cached/in-flight Playwright connection on enumeration timeout so the next request can reconnect instead of reusing a st

### #80204 fix: propagate gateway TLS fingerprints to bootstrap clients

- bucket: ready_for_maintainer
- author: jetd1
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:42:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Gateway clients bootstrapped outside `callGateway` (ACP, MCP channel bridge, and native approval handling) did not receive the local TLS certificate fingerprint for a self-signed local WSS gateway. - Why it matters: those clients could fa

### #80396 fix(media): warn when MEDIA: token is skipped inside fenced code block (#41966)

- bucket: ready_for_maintainer
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:42:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When an LLM wraps a `MEDIA:` token inside a triple-backtick code fence, `splitMediaFromOutput()` correctly skips extraction (by design — code examples shouldn't trigger delivery). However, this creates a **silent failure**: the user sees the raw `ME

### #93188 test(macos): cover root CLI command parsing

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, app: macos, scripts, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:42:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #83879. Adds a small root-command parser/dispatch helper for the macOS CLI and covers usage/help, known-command argument forwarding, and unknown-command dispatch. Also refreshes the Swift protocol generator so current literal-union schemas emit the Swif

