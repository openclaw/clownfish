---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-040
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
  - "#90690"
  - "#91712"
  - "#89553"
  - "#89586"
  - "#92764"
  - "#92975"
  - "#39496"
  - "#40311"
  - "#40877"
  - "#41265"
  - "#58679"
  - "#59221"
  - "#61335"
  - "#92999"
  - "#64649"
  - "#64805"
  - "#70268"
  - "#70409"
  - "#70676"
  - "#71024"
  - "#71062"
  - "#71503"
  - "#71563"
  - "#72025"
  - "#72224"
cluster_refs:
  - "#90690"
  - "#91712"
  - "#89553"
  - "#89586"
  - "#92764"
  - "#92975"
  - "#39496"
  - "#40311"
  - "#40877"
  - "#41265"
  - "#58679"
  - "#59221"
  - "#61335"
  - "#92999"
  - "#64649"
  - "#64805"
  - "#70268"
  - "#70409"
  - "#70676"
  - "#71024"
  - "#71062"
  - "#71503"
  - "#71563"
  - "#72025"
  - "#72224"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.202Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 40

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90690 Fix Android chat optimistic send handling

- bucket: needs_proof
- author: StoneHub
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:51:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep Android chat composer text/attachments until chat.send is accepted - include the backing gateway sessionId in Android chat.send requests - preserve optimistic user messages through terminal event/history refresh until history contains them - 

### #91712 fix(logging): prune non-idle stale diagnostic session entries

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:55:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted (Claude). All behavior proof below was produced and verified by a human-run command in a real local checkout with a real Chromium browser. ## Summary - **Problem:** `pruneDiagnosticSessionStates()` in `src/logging/diagnostic-session-state.ts` onl

### #89553 Sandbox/Docker: add opt-in sandbox.docker.capAdd passthrough

- bucket: needs_proof
- author: l1f3ai
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, gateway, docker, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:57:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an opt-in `sandbox.docker.capAdd` field for the Docker sandbox backend so workloads that need elevated Linux capabilities (for example `NET_ADMIN`, `SYS_PTRACE`) can run inside sandboxed agents. Each entry is emitted as a separate `--cap-add` a

### #89586 feat(channels): add Zalo ClawBot external channel entry and documenta…

- bucket: needs_proof
- author: ken-kuro
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T14:57:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** Exposes the official Zalo ClawBot external channel (`@zalo-platforms/openclaw-zaloclawbot`) in the OpenClaw onboarding TUI and documentation. This solves the gap for a secure, vendor-backed, zero-configuration pe

### #92764 fix(ui): render tool progress text from stream:item events

- bucket: needs_proof
- author: kangjinghang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:58:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem During long-running tool executions (e.g. a 5-minute analysis tool), webchat shows no interim progress — only the final result. Users see the tool card sit idle until completion. Tracing the full pipeline (SDK contract → runtime event wiring → runti

### #92975 #92595: fix(feishu): handle uninitialized runtime gracefully on inbound messages

- bucket: needs_proof
- author: qingminglong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:59:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix issue #92595 — Feishu bot silently drops inbound user replies when the plugin runtime store was never initialized (config-selected plugin overrides bundled plugin, causing `setFeishuRuntime` to never be called). ## Root Cause When a user-configu

### #39496 feat(feishu): comprehensive plugin enhancements — streaming, dedup, skills, calendar, and stability

- bucket: needs_proof
- author: shenyingjun5
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, channel: feishu, size: XL, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:05:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR consolidates all Feishu plugin enhancements developed across multiple iterations (supersedes #38770, #38772, #39409, #39440). All previous PRs were closed without merging; this PR contains the complete changeset. --- ## Issues Fixed ### Stre

### #40311 feat(web-search): expose Brave Goggles for custom search filtering and ranking

- bucket: needs_proof
- author: remusao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:05:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Brave Search supports [Goggles](https://search.brave.com/help/goggles), a [query-time DSL](https://brave.com/static-assets/files/goggles.pdf) that redefines how results are ranked at the index level (not client-side post-filtering), but O

### #40877 fix(ios): resolve main-thread warnings for CLLocationManager and SFSpeechRecognizer

- bucket: needs_proof
- author: eulicesl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:05:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `GatewayConnectionController.currentPermissions()` triggered iOS UI-responsiveness warnings by repeatedly constructing `CLLocationManager` and querying speech authorization in a main-actor-sensitive way. - Why it matters: repeated main-th

### #41265 fix(discord): preserve content-type and skip optimization for animated/WebP images

- bucket: needs_proof
- author: skidder
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: whatsapp-web, size: M, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:05:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Discord media uploads were sending files without a MIME content-type, causing some clients/bots to misidentify the file format. Additionally, WebP images were being converted to JPEG (losing quality) and animated images (GIF, WebP, AP

### #58679 feat(config): add provenance tracking and explain command

- bucket: needs_proof
- author: tejasghalsasi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:07:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds an initial config provenance surface to OpenClaw and exposes it through a new CLI command: - `openclaw config explain` - `openclaw config explain --json` The goal is to improve operator/debug UX by showing: - the active config path - wh

### #59221 feat: add built-in command aliases (/c, /ctx, /s, /n, /m, /ms, /h, /f, /u)

- bucket: needs_proof
- author: RegulusZ
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:08:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add 9 command aliases to reduce typing for frequently used slash commands: - /c → /compact (session context compaction) - /ctx → /context (context diagnostics) - /s → /status (status check) - /n → /new (new session) - /m → /model (model switching) - /ms → /mod

### #61335 fix(usage): handle Daylight saving time (DST) hour boundaries

- bucket: needs_proof
- author: rex993
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:10:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes a Control UI Usage-page freeze when a long session spans a local Daylight saving time (DST) transition. Today the hour-slicing code computes a local `:59:59.999` hour end from the current wall-clock time. In a repeated local hour at Dayli

### #92999 fix(agents): truncate frozen subagent result on a UTF-8 character boundary

- bucket: needs_proof
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:11:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `capFrozenResultText` (`src/agents/subagent-registry-helpers.ts`) caps an oversized subagent completion result before it is frozen for later announce/recovery delivery to the parent session. It truncated with `Buffer.from(text, "utf8").subarray(0, m

### #64649 Test/run state machine clamp guard

- bucket: needs_proof
- author: Rahulkumar070
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:11:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: The `activeRuns` clamp guard in `onRunEnd()` (`Math.max(0, activeRuns - 1)`) was completely untested. Calling `onRunEnd()` more times than `onRunStart()` (e.g. error handling paths, race conditions) would cause `activeRuns` to go negative

### #64805 feat(feishu): add token and context usage to streaming card footer

- bucket: needs_proof
- author: TaoXieSZ
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:11:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Append session token usage and context window size to the Feishu streaming card footer note. **Before:** `Agent: {name} | Model: {model} | Provider: {provider}` **After:** `Agent: {name} | Model: {model} | Provider: {provider} | Tokens: {n} / Contex

### #70268 fix: route wake hooks to explicit sessions

- bucket: needs_proof
- author: howardclaw26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T15:12:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - let direct `/hooks/wake` payloads carry an optional `sessionKey` - honor `action: "wake"` mapping `sessionKey` / `agentId` routing instead of always waking `main` - extend wake-hook tests and config guards so templated wake session keys follow the

### #70409 feat(memory-core): stage-only dreaming maintenance with apply/rollback

- bucket: needs_proof
- author: neo250324
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, scripts, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:12:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: 动机：让 Dreaming 达到 Neo 预期的 stage-only 自维护闭环：deep sweep 默认只产出可审计 staged artifacts，不直接写 MEMORY.md；显式 apply 才落盘；rollback 可撤销；memory/daily-log.md 首次出现时也能进入 short-term 证据链。 行为变化：deep 不再直接写 MEMORY.md，而是生成 staged plan/summary artifacts；只有显式 apply 才写入 Dreaming-managed b

### #70676 Fix/gateway silent revocation failures

- bucket: needs_proof
- author: davidangularme
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:12:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Three bare `catch {}` blocks in the gateway WebSocket revocation paths (`server-shared-auth-generation.ts:28,43` and `server-request-context.ts:116`) silently swallow `socket.close()` failures. When an admin rotates gateway auth or re

### #71024 fix(mattermost): keep status read-only for SecretRef tokens

- bucket: needs_proof
- author: afurm
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:12:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw status` text mode crashed when Mattermost `botToken` used an unresolved `exec:keychain` SecretRef. - Why it matters: Mattermost could be healthy at runtime, but read-only diagnostics failed before printing the channel table. - W

### #71062 fix(/v1/responses): drop the extra phantom assistant turn on client-tool calls

- bucket: needs_proof
- author: PopFlamingo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:12:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - **Problem:** Two issues affected `/v1/responses` client-tool calls (tools the API caller passes in `tools: [...]` for the agent to delegate back to them): - **Bug:** every client-tool call shipped an ex

### #71503 fix(gateway): prefer physical LAN addresses before bridge interfaces

- bucket: needs_proof
- author: deepkilo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, extensions: device-pair, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:14:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #71493. `gateway.bind=lan` address selection now prefers physical/default-looking LAN interfaces before Docker/bridge/container-style interfaces when advertising automatic LAN URLs. The change intentionally does **not** hard-ban Docker/bridge/

### #71563 fix(telegram): route /new, /reset to control lane to bypass queue

- bucket: needs_proof
- author: kiranvk-2011
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:14:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Session lifecycle commands (`/new`, `/reset`) were getting queued behind active agent runs in the Telegram sequential key system. When a user sent one of these commands while an agent was running, the command would be queued and never execute until 

### #72025 fix(signal): enable inbound status reactions

- bucket: needs_proof
- author: Hua688
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: signal, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:16:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: Signal has reaction send helpers, but inbound runs never wired `messages.statusReactions.enabled` into the shared status reaction lifecycle. - Why it matters: Signal users get no queued/thinkin

### #72224 fix gateway restart outside systemd

- bucket: needs_proof
- author: myagizmaktav
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: L, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:17:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #72223 ## Summary - detect Linux background gateway listeners via native `/proc` inspection before falling back to `lsof` and `ss` - treat bare `openclaw-gateway` process titles as verified gateway processes for unmanaged restart signaling - reuse resol

