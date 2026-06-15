---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-034
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
  - "#82435"
  - "#82505"
  - "#82512"
  - "#82519"
  - "#82520"
  - "#82535"
  - "#82536"
  - "#77899"
  - "#82577"
  - "#78836"
  - "#78886"
  - "#82587"
  - "#79538"
  - "#79562"
  - "#82684"
  - "#79653"
  - "#79872"
  - "#80208"
  - "#80251"
  - "#80646"
  - "#80685"
  - "#80845"
  - "#82734"
  - "#81176"
  - "#81388"
  - "#82880"
  - "#82894"
  - "#82895"
  - "#82934"
  - "#82966"
  - "#82971"
  - "#82972"
  - "#83010"
  - "#90419"
  - "#90065"
  - "#90469"
  - "#90115"
  - "#90125"
  - "#90204"
  - "#90211"
cluster_refs:
  - "#82435"
  - "#82505"
  - "#82512"
  - "#82519"
  - "#82520"
  - "#82535"
  - "#82536"
  - "#77899"
  - "#82577"
  - "#78836"
  - "#78886"
  - "#82587"
  - "#79538"
  - "#79562"
  - "#82684"
  - "#79653"
  - "#79872"
  - "#80208"
  - "#80251"
  - "#80646"
  - "#80685"
  - "#80845"
  - "#82734"
  - "#81176"
  - "#81388"
  - "#82880"
  - "#82894"
  - "#82895"
  - "#82934"
  - "#82966"
  - "#82971"
  - "#82972"
  - "#83010"
  - "#90419"
  - "#90065"
  - "#90469"
  - "#90115"
  - "#90125"
  - "#90204"
  - "#90211"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.479Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 34

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #82435 fix: broadcast tool result transcript updates

- bucket: needs_proof
- author: papayachat
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:00:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `toolResult` messages were persisted to session JSONL but did not emit transcript update events. - Why it matters: Realtime clients could see tool calls start, but miss completion updates until session history was reloaded. - What changed

### #82505 fix: Canvas WebSocket creation in browser context silently swallows...

- bucket: needs_proof
- author: coygeek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:02:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: In `extensions/canvas/src/host/a2ui-shared.ts` (injected into HTML via `injectCanvasLiveReload()`), the WebSocket connection to the canvas host is created inside a `try {} catch {}` block (lines 54-62). If the WebSocket construction throw

### #82512 fix(exec): strip skill secrets from generic exec env

- bucket: needs_proof
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:02:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #78528 ## Summary - Strip active skill-injected env keys from generic host `exec` child environments before spawning. - Reuse the existing active skill env registry already used by ACP harness spawning. - Cover both the shared host env sanitizer and the 

### #82519 fix(test): stabilize red CI tests

- bucket: needs_proof
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:03:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep empty cron payload text/message values shape-valid so the cron service can record the intended skipped status. - Adjust the malformed reload schedule test to use a shape-valid cron schedule with an invalid expression. - Avoid catalog/setup di

### #82520 fix: inject compaction summary into post-compaction context for seamless task continuation

- bucket: needs_proof
- author: sunvember
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:03:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem After compaction, agents **lose task context and restart instead of continuing**. The post-compaction system message only injected AGENTS.md sections with instructions to "Run your Session Startup sequence", causing agents to reinitialize rather tha

### #82535 fix(security): exclude test files from plugin code-safety scans (#82469)

- bucket: needs_proof
- author: ObliviateRickLin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:03:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `getCodeSafetySummary` in `src/security/audit-extra.async.ts` scans bundled plugin source via `skillScanner.scanDirectoryWithSummary` but never passes `excludeTestFiles: true`. The option is already supported end-to-end by `skill-scanner.ts` (`TEST_

### #82536 perf: skip packageManager.resolve() by loading extensionFactories directly

- bucket: needs_proof
- author: sunvember
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:04:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR eliminates the 5-9 second `packageManager.resolve()` overhead on every embedded run by skipping `reload()` and loading inline `extensionFactories` directly. ## Problem The previous approach (PR #82523, now closed) attempted to cache `Default

### #77899 fix(memory-core): use Promise.allSettled in searchMemoryCorpusSupplements

- bucket: needs_proof
- author: SimbaKingjoe
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:05:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `searchMemoryCorpusSupplements` uses `Promise.all` which fails fast — a single supplement failure discards ALL results. Switch to `Promise.allSettled` so surviving results are preserved. - **Problem:** `Promise.all` rejects on the first failure, dis

### #82577 feat: show user-installed channel plugins in openclaw configure

- bucket: needs_proof
- author: lukum21yandex-bit
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: commands, size: XS, triage: external-plugin-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:05:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a user installs a channel plugin (third-party, origin "global"), `openclaw configure` does not show it — it only displays channels from the bundled `channel-catalog.json` (17 built-in channels). This PR adds `listAllChatChannels()` which includ

### #78836 fix(agents): use max_tokens for NVIDIA NIM OpenAI-compat endpoint

- bucket: needs_proof
- author: cod3warrior
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:05:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary NVIDIA NIM (`integrate.api.nvidia.com/v1`) advertises OpenAI compatibility but its chat/completions endpoint rejects the newer `max_completion_tokens` field with HTTP 400 (`Extra inputs are not permitted`). It still expects the legacy `max_tokens`. 

### #78886 Talk: add additive sendVideoFrame/videoConfig seam for realtime voice plugins

- bucket: needs_proof
- author: dh999
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:05:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an additive, opt-in video-frame seam to the realtime voice provider contract on the public Plugin SDK so a realtime voice provider plugin can stream periodic still frames alongside audio when the existing `supportsVideoFrames` capability flag i

### #82587 fix(minimax): resolve portal catalog OAuth via resolveProviderAuth (#79731)

- bucket: needs_proof
- author: ObliviateRickLin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: minimax, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:06:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolvePortalCatalog` in `extensions/minimax/provider-registration.ts` was checking `listProfilesForProvider()` directly and, when any OAuth profile existed, hardcoding `MINIMAX_OAUTH_MARKER` as the catalog `apiKey`. The marker is a placeholder the

### #79538 Fix skill config requirements, spawn allowlists, chat stop lifecycle, and systemd status

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, agents, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:06:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #79488 by normalizing object-shaped `metadata.openclaw.requires.config` entries through their `path` field so skill status/info no longer prints `[object Object]` or blocks valid documented requirements. - Fixes #79490 by honoring `OPENCLAW_

### #79562 Fix Discord queue backpressure and related read-path bottlenecks

- bucket: needs_proof
- author: neuroradgist
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: discord, gateway, size: XL, extensions: codex, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:06:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds regression coverage and targeted performance/backpressure fixes for Discord queues, media downloads, preview writes, transcript idempotency, Codex RPC writes, and session-store reads. ## Real behavior proof Behavior or issue addressed: This PR addresses r

### #82684 feat(session): add /resume command for session restore

- bucket: needs_proof
- author: Lanfei
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: L, triage: blank-template, triage: dirty-candidate, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:06:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `/resume` command for session recovery: - `/resume` lists recent sessions - `/resume #<index>` resumes by list index - `/resume <id>` resumes by session id / 8-char prefix - Persist bounded session history (`MAX_SESSION_HISTORY = 20`) on sessi

### #79653 feat(ui): autostart hidden chat bootstrap

- bucket: needs_proof
- author: cola-runner
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, size: XL, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:06:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - parse one-shot `autostart` from Control UI/WebChat URLs and strip it after capture - defer captured autostart requests while a gateway URL confirmation is pending - run the bootstrap prompt only after an empty `chat.history` load succeeds - send a

### #79872 fix(cli): preserve portable default workspace paths in config writes

- bucket: needs_proof
- author: xinhuagu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:06:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - canonicalize recognized default workspace paths back to portable `~/.openclaw/...` forms when writing config - preserve explicit custom absolute workspaces unchanged - cover setup/onboarding/configure write paths with focused tests ## Problem Issu

### #80208 feat(plugin-sdk): export transcript.runtime subpath

- bucket: needs_proof
- author: clriesco
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:07:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Channel plugins that need to record outbound assistant turns to a session transcript have no public API. `recordInboundSession` covers user turns only; `appendAssistantMessageToSessionTranscript` already exists in the source tree but is n

### #80251 fix(sessions): rotate reset transcripts and clear compaction state

- bucket: needs_proof
- author: fredrikmacmini
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:07:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `sessions.reset` so a reset creates a fresh generated transcript path for the new session id and clears stale compaction state. This source patch makes permanent the behavior we previously had to protect with a local installed-dist hotfix: reset

### #80646 feat(tts): add word-level timestamps and memory dreaming fixes

- bucket: needs_proof
- author: MD-Mushfiqur123
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:07:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixed memory dreaming content leakage in MEMORY.md. - Enabled CJK-aware deduplication in memory dreaming pipeline. - Added word-level timestamps to TTS Synthesis result to support future word-highlighting. - Prepared ElevenLabs provider to capture

### #80685 Fix Discord ACP thread delivery

- bucket: needs_proof
- author: qiyueqiu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:07:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR fixes Discord ACP thread delivery and suppresses the ACP session info notice when session_info_update visibility is disabled.\n\nValidation: pnpm test src/agents/subagent-announce-delivery.test.ts src/auto-reply/reply/dispatch-acp.test.ts

### #80845 feat(voice-call): implement asynchronous email delivery for consult results

- bucket: needs_proof
- author: kevin-suaza-insidetrack
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: voice-call, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:07:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** During realtime voice calls, complex questions (e.g., data queries requiring tool execution) block the caller waiting for an answer that may take minutes, with no fallback if the consult times out or the caller prefers email delivery.

### #82734 Bound tool transcript payloads

- bucket: needs_proof
- author: TheeMoneyTree
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:07:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - bound oversized tool argument strings before they enter transcript events - apply the same bounded truncation to deeply nested tool result strings while preserving visible leading context and metadata - add focused tests for apply-patch-style args

### #81176 feat(agents): add context-window-relative compaction budget shares

- bucket: needs_proof
- author: adone0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:08:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `AgentCompactionConfig` only accepts absolute token counts for `reserveTokens`, `keepRecentTokens`, and `reserveTokensFloor`. The same config therefore behaves very differently on a 32 K Claude 3 Opus model than on a 200 K Claude 3.5 Sonnet model 

### #81388 fix(session-cost-usage): fall back to O_EXCL write when fs.link is unsupported (#81089)

- bucket: needs_proof
- author: 0xghost42
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:08:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `writeUsageCostCacheLockAtomically` in `src/infra/session-cost-usage.ts` publishes the usage-cost cache refresh lock by `fs.promises.link`'ing a fully-formed temp file to `<cache>.lock`. On filesystems without hard-link support — SMB/CIFS, some NFS 

### #82880 security: harden ACPX command binding and pin Firecrawl DNS resolution

- bucket: needs_proof
- author: thesomewhatyou
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: acpx, triage: needs-real-behavior-proof, extensions: firecrawl, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:09:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Worthy Security Hardening & Proof (Addressing Clawsweeper Feedback) This update provides the "worthy proof" requested by the maintainers and addresses the gaps identified by Clawsweeper. ### 1. ACPX Proxy: Cryptographic Command Binding - **Improvement:** Up

### #82894 fix(gateway): prewarm agent runtime before ready

- bucket: needs_proof
- author: hansolo949
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:09:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prewarm the first-turn agent runtime import path during Gateway sidecar startup, before startup-gated Gateway methods are released. - Keep the prewarm import-only: it does not submit a model request, touch user transcripts, or run tools. - Add `OP

### #82895 fix(slack): preserve interaction thread status

- bucket: needs_proof
- author: WuKongAI-CMU
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: S, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:09:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve Slack block-action thread context from `message.thread_ts` when `container.thread_ts` is absent. - Add Slack heartbeat typing and clear-typing support by updating Slack assistant thread status for thread-targeted follow-up turns. - Cover 

### #82934 fix(media): allow SSRF bypass for gateway-localhost URLs (Feishu media fetch)

- bucket: needs_proof
- author: zccyman
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:10:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #82198 When the Feishu channel receives an image, it is saved to the local media store. The agent's image analysis tool then needs to fetch this media, but the URL served by the gateway uses `http://localhost:18888/`, which is blocked by the S

### #82966 fix: return preserved totalTokens from resolveFreshSessionTotalTokens when stale (fixes #82900)

- bucket: needs_proof
- author: njuboy11
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:11:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #82900 — `resolveFreshSessionTotalTokens` returns `undefined` when `totalTokensFresh === false`, even though PR #82578 guarantees `totalTokens` is preserved. This causes `/context` command and Control UI context meter to show "stale/unavailab

### #82971 [codex] Guard Control UI protocol in npm release check

- bucket: needs_proof
- author: lamkan0210
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:11:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an npm release-package guard that scans packed Control UI JS assets for advertised Gateway protocol levels - compare those advertised `minProtocol` / `maxProtocol` values against `src/gateway/protocol/version.ts` - cover stale and current Cont

### #82972 fix(discord): scope message-tool schema groups to advertised actions

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:11:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #81484 — Discord guild reply regression where a single `@bot ping` produced malformed `action="send"` payloads (missing `message`) and repeated outbound replies. The message-tool schema previously merged every action group's properties (routin

### #83010 gateway: standardize URL base to localhost in mcp-http and tools-invoke handlers

- bucket: needs_proof
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:12:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Switches two remaining gateway HTTP handlers from a Host-header-derived URL base to the literal `"http://localhost"`, matching the pattern already used elsewhere in `src/gateway/` on `main`: - `src/gateway/mcp-http.request.ts` - `validateMcpLoopback

### #90419 fix: force-release session lock on dispose to prevent orphan locks

- bucket: needs_proof
- author: longkunbetter
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:16:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When an embedded attempt (sub-agent) is torn down via `dispose()`, the `disposeHeldLockAfterRetainedIdle()` function silently returns without releasing the session write lock if a write operation is still in progress (`retainedLockUseCount > 0` with

### #90065 fix(agents): bound abort-path session lock release; force-release on unsettled retained writes

- bucket: needs_proof
- author: matin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:17:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem A turn timeout aborts the embedded run, but the abort-path session-lock release is unbounded. On a deployment running a release that already contains #87278 (release lock on timeout abort), every embedded-run timeout still turned into 5–30 minutes o

### #90469 feat(extensions): openclaw-governance — AIBOM + DLP + cost ledger (BG1)

- bucket: needs_proof
- author: kelliott-cloud
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XL, proof: supplied, dependencies-changed, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:17:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Backports the chokepoint governance trio from the Nexus reference stack as an **optional, opt-in** OpenClaw extension at `extensions/openclaw-governance/`. Designed for personal / single-node operators who want a signed audit trail, regex DLP, and p

### #90115 fix(gateway): pass managed inbound PDFs through chat.send

- bucket: needs_proof
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:17:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90097. `chat.send` offloads large attachments to the managed inbound media store, then for a sandboxed session may copy non-image refs into the sandbox through `stageSandboxMedia`. That sandbox copy is optional for already-managed inbound PDF

### #90125 fix(embedded-runner): distinguish model initialization errors from assistant execution errors

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:17:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed This PR adds support for distinguishing between model initialization errors and assistant execution errors in the embedded agent runner. The key changes are: 1. Added `MODEL_INIT_ERROR_FALLBACK_TEXT` constant with value "[model initialization f

### #90204 fix(windows): resolve compatibility, path redaction, symlink EPERM, and channel sorting issues

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:18:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR fixes exactly 5 distinct Windows compatibility and test determinism issues to make the test suite pass stably on Windows. 1. **Deterministic Channel Sorting**: Sorted returned channel IDs alphabetically in package-state-probes.ts to prevent non-determi

### #90211 fix(acp): redact URL credentials in runtime errors

- bucket: needs_proof
- author: nahkhsinad
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:18:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed This tightens ACP runtime error redaction so URL userinfo never leaks into logs, tool results, lifecycle events, or chat-facing diagnostics. Today the ACP error formatter already catches obvious provider tokens, auth headers, query-string secre

