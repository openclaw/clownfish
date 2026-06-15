---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-067
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
  - "#92340"
  - "#87343"
  - "#87414"
  - "#87449"
  - "#88935"
  - "#89154"
  - "#90970"
  - "#90975"
  - "#90986"
  - "#90989"
  - "#90992"
  - "#90994"
  - "#91000"
  - "#91013"
  - "#91049"
  - "#91057"
  - "#91078"
  - "#89569"
  - "#83942"
  - "#84540"
  - "#93156"
  - "#93088"
  - "#86279"
  - "#71400"
  - "#87771"
  - "#87800"
  - "#87861"
  - "#87872"
  - "#88886"
  - "#87891"
  - "#87898"
  - "#87919"
  - "#87923"
  - "#87969"
  - "#87986"
  - "#88048"
  - "#88052"
  - "#88060"
  - "#88061"
  - "#88062"
cluster_refs:
  - "#92340"
  - "#87343"
  - "#87414"
  - "#87449"
  - "#88935"
  - "#89154"
  - "#90970"
  - "#90975"
  - "#90986"
  - "#90989"
  - "#90992"
  - "#90994"
  - "#91000"
  - "#91013"
  - "#91049"
  - "#91057"
  - "#91078"
  - "#89569"
  - "#83942"
  - "#84540"
  - "#93156"
  - "#93088"
  - "#86279"
  - "#71400"
  - "#87771"
  - "#87800"
  - "#87861"
  - "#87872"
  - "#88886"
  - "#87891"
  - "#87898"
  - "#87919"
  - "#87923"
  - "#87969"
  - "#87986"
  - "#88048"
  - "#88052"
  - "#88060"
  - "#88061"
  - "#88062"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.487Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 67

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92340 feat(feishu): handle VC meeting invites

- bucket: ready_for_maintainer
- author: Ren1104
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:56:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Register Feishu `vc.bot.meeting_invited_v1` in the bundled `feishu` monitor dispatcher. - Convert valid VC meeting invite events into synthetic inbound Feishu direct-message turns from the inviter, reusing the existing DM pairing, allowlist, dynam

### #87343 feat(cron): surface fallback progress

- bucket: ready_for_maintainer
- author: riosbotchen-source
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, commands, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:06:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop already-admitted model fallback chains from losing their embedded cron fallback candidate when Gateway drain begins; new queue enqueues still reject during drain. - Carry the drain-continuation state through `LiveSessionModelSwitchError` redi

### #87414 [codex] Key llama.cpp sessions for local reuse

- bucket: ready_for_maintainer
- author: ezcoder
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:10:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a narrow OpenClaw wrapper for the `llama-cpp-turboquant` provider that injects stable `cache_key` and `session_id` values into OpenAI-compatible request payloads. The key is derived from the OpenClaw session key when available, falling back to 

### #87449 fix(mattermost): preserve text-block boundaries in draft preview (#87322)

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: mattermost, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:12:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #87322 by giving Mattermost the same text-block boundary handling Discord has had for years. Today the draft preview edits a single post across every phase of a tool-heavy turn, so earlier text blocks disappear before the user reads them — Iss

### #88935 fix(agent): load shared tools bootstrap instructions

- bucket: ready_for_maintainer
- author: mantisai-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, cli, scripts, agents, size: M, extensions: memory-wiki, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:13:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Auto-load `TOOLS_SHARED.md` as an optional workspace bootstrap file. - Route `TOOLS_SHARED.md` through Codex inherited developer instructions alongside `TOOLS.md`. - Allow the intended workspace-local symlink shape: `<agent>/TOOLS_SHARED.md -> ../

### #89154 feat(hooks): add ACP turn transcript save hook

- bucket: ready_for_maintainer
- author: mantisai-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, commands, agents, size: XL, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T04:20:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a separate `agent:turn:transcript:save` internal hook event for the ACP turn transcript save phase. This PR is scoped to transcript-save durability outcomes and does not include the sibling `agent:turn:end` lifecycle hook from #89152. ## Curren

### #90970 i18n(fr): expand French glossary with page titles and common terms

- bucket: ready_for_maintainer
- author: notadev99
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T04:21:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Expands `docs/.i18n/glossary.fr.json` from 19 to 52 entries. The French glossary previously held only proper nouns kept in English (OpenClaw, CLI, Gateway, etc.), so the translation pipeline had no guidance for how to render descriptive page titles or 

### #90975 feat(google): add Antigravity CLI backend

- bucket: ready_for_maintainer
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, extensions: google, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:21:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a Google Antigravity CLI runtime backend that delegates OAuth and execution to the local `agy` binary while keeping the user-facing model identity on the existing Google provider. Fixes #84527. ## Scope Plugin surface: - `extensions/google/cli-

### #90986 feat(fs): allow configured workspace aliases

- bucket: ready_for_maintainer
- author: stevenepalmer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:22:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - `tools.fs.workspaceOnly=true` currently rejects workspace symlink parents whose realpath lands outside the agent workspace. That blocks memory flushes for setups where `memory/` is intentionally shared outside the 

### #90989 fix(channels): recover stale ingress queue claims at gateway startup

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:22:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #90945 — after a gateway crash, `channel_ingress_events` rows left in `claimed` state are never recovered. Every new message into the affected session adds another stuck claim, silently deadlocking the channel (observed with Te

### #90992 docs(windows): fix WSL gateway-autostart recipe for WSL ≥ 2.6.1.0 idle-termination

- bucket: ready_for_maintainer
- author: spencer2211
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T04:22:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The documented headless-boot recipe for WSL2 ("Gateway auto-start before Windows login") contains two issues: **1. `/bin/true` causes idle-termination on WSL ≥ 2.6.1.0** On WSL ≥ 2.6.1.0 ([microsoft/WSL #13416](https://github.com/microsoft/WSL/issue

### #90994 fix(codex): restore native PreToolUse relay delivery

- bucket: ready_for_maintainer
- author: Kaspre
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, agents, size: L, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:22:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is a narrow positive-delivery fix for Codex native `PreToolUse` relay enforcement. It does not disable Codex native shell/file/MCP surfaces, does not disable `/btw`, and does not apply the broader fail-closed fallback from #90633 / #90805. The 

### #91000 fix(gateway): preserve abort after dispatch rejection

- bucket: ready_for_maintainer
- author: nxmxbbd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T04:23:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Preserves the terminal `chat.abort` outcome when `chat.send` dispatch rejects after the abort already completed. - Preserves the real dispatch `error` outcome when abort arrives only during awaited error persistenc

### #91013 fix(gateway): ignore stale abort markers for fresh chat events

- bucket: ready_for_maintainer
- author: nxmxbbd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T04:23:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Prevents a retained chat abort marker from suppressing chat events for a fresh run registered after that marker. - Keeps current-abort behavior intact: an abort marker created for the active run still suppresses li

### #91049 fix: handle terminal chat send acknowledgements

- bucket: ready_for_maintainer
- author: nxmxbbd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, app: ios, app: macos, app: web-ui, gateway, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T04:23:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves terminal `chat.send` ACK status (`ok`, `timeout`, `error`) through clients/helper paths that previously reduced the response to "has a run id". - Clears, restores, or fails pending/optimistic state when the gateway has already returned a

### #91057 fix(sessions): prune stale gateway model-run sessions

- bucket: ready_for_maintainer
- author: wangwllu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T04:24:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a model-run-specific session retention setting with a conservative default of 24h - validate `session.maintenance.modelRunPruneAfter` in the strict session schema (`duration | number | false`) - prune stale `agent:*:explicit:model-run-<uuid>` 

### #91078 fix(sandbox): repair fs bridge stat for Codex exec-server native writes

- bucket: ready_for_maintainer
- author: crhan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-15T04:24:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Native Codex `apply_patch` failed for **every** write inside an OpenClaw Docker sandbox with `appServer.experimental.sandboxExecServer=true` (`Failed to write file ...`), while shell writes in the same sandboxed session succeeded. Live diagnosis aga

### #89569 feat(channels): add pre-auth access requests and grouped DM allowlists

- bucket: ready_for_maintainer
- author: Hyroshima
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, channel: whatsapp-web, gateway, scripts, commands, size: XL, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 🎥 video, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T04:26:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a silent access-request workflow for blocked Telegram and WhatsApp direct messages. - Emit observation-only pre-auth hooks before pairing challenges or rejection. - Support grouped DM allowlists and propagate trusted `sender_group` meta

### #83942 feat(voice-call): add private outbound objectives

- bucket: ready_for_maintainer
- author: PashaGanson
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: voice-call, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: L, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:29:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: realtime outbound Voice Call had only a spoken `message`, so callers had to overload the opening line with the task goal or rely on static config/consults. - Solution: add an optional private per-call `objective` that is stored on the cal

### #84540 fix(cli-runner): emit run.progress diagnostic events during CLI stdou…

- bucket: ready_for_maintainer
- author: SkyWolfDreamer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T04:35:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** The diagnostic stuck-session watchdog aborts CLI-backend sessions after about six minutes with `lastProgress=embedded_run:started`, killing long Opus reasoning turns and triggering a session reset that wipes conversation context. - **

### #93156 fix(doctor): import default-agent auth profiles into sqlite

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T04:51:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Import legacy default-agent `auth.profiles` credentials into the per-agent SQLite auth store when no per-agent JSON files exist. - Strip migrated config credential fields back to metadata-only entries and mark the config changed so doctor does not

### #93088 fix(telegram): bind bot mentions to assistant identity

- bucket: ready_for_maintainer
- author: kesslerio
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, scripts, docker, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:00:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes Telegram group/topic turns where an explicit @bot-handle mention could still be interpreted as addressing someone other than the current assistant, allowing a run to execute tools and then end as `NO_REPLY`. The patch carries explicit bot ment

### #86279 fix: keep media generation success on delivery failure

- bucket: ready_for_maintainer
- author: tianxiaochannel-oss88
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:05:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix async media generation completion handling so generated media tasks stay successful when requester completion delivery fails. - Record completion delivery failure separately on the detached task and mark the terminal outcome blocked instead of

### #71400 feat(sessions): add adaptive reset mode with daily AND idle semantics

- bucket: ready_for_maintainer
- author: mantisai-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: M, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:08:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Session reset currently supports only `daily` and `idle`, and when both are configured the behavior is OR-based, which can reset an active conversation as soon as the daily boundary passes. - Why it matters: Some users want the daily roll

### #87771 feat(config): add $includeText raw-text include directive

- bucket: ready_for_maintainer
- author: apcooley
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:10:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a `$includeText` config directive — a sibling to `$include` — that injects a file's **raw text** as a plain string value, instead of merging parsed JSON5 into the surrounding object. - **Problem:** people want to maintain long string config val

### #87800 fix(google-vertex): add Google Vertex AI onboarding wizard, fix ADC auth, add provider docs

- bucket: ready_for_maintainer
- author: koverholt
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, extensions: google, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T05:12:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** The `google-vertex` provider does not work end-to-end for developers using Application Default Credentials (ADC). The auth gate requires a credentials file on disk, rejecting metadata server ADC (GCE/GKE/Cloud Ru

### #87861 fix(model-usage): coerce numeric-string costs and ignore non-finite values

- bucket: ready_for_maintainer
- author: coder999999999
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:13:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `skills/model-usage/scripts/model_usage.py` only accepted cost values that were native numbers, which caused three problems: - **Numeric-string costs were silently dropped.** Payloads sometimes serialize cost as a string (e.g. `"1.75"`); `isinstance

### #87872 Fix Codex zero-cost usage accounting

- bucket: ready_for_maintainer
- author: agonza1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:13:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - assign known pricing to native Codex catalog rows instead of hardcoding zero cost for GPT-5 family models - fall back to local cost estimation when persisted Codex usage contains generated `$0` cost and configured pricing is nonzero - keep explici

### #88886 docs(agents): add recovery card handoff guidance

- bucket: ready_for_maintainer
- author: m4stanuj
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:13:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add recovery-note guidance to the compaction docs for long-running sessions. - Add a recovery-card output shape to the sub-agents docs so delegated work is easier to merge, resume, or hand off. - Call out proof, blockers, safety notes, and credent

### #87891 fix(telegram): expose spooled handler timeout config

- bucket: ready_for_maintainer
- author: khang-dogo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: XS, triage: dirty-candidate, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:14:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - expose `channels.telegram.spooledUpdateHandlerTimeoutMs` with top-level and per-account config support - pass the configured value into Telegram isolated polling sessions - document the timeout and regenerate bundled channel config metadata ## Why

### #87898 fix(secrets): skip PLAINTEXT_FOUND for apiKey values that look like env var references

- bucket: ready_for_maintainer
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: L, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:14:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `apiKey` config fields contain environment variable names (e.g. `OPENCLAW_DEEPSEEK_API_KEY`, `OPENAI_API_KEY`) instead of actual secret values, `openclaw secrets audit --check` still reports PLAINTEXT_FOUND warnings. Users with multiple provide

### #87919 Harden SSRF reserved-host IDNA checks [AI]

- bucket: ready_for_maintainer
- author: nxmxbbd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:14:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Behavior addressed: block raw SSRF helper inputs whose IDNA/UTS46 ToASCII mapping becomes an existing reserved hostname/suffix or blocked private/special-use IP literal before DNS pinning. - Root cause: raw hostname helper paths compared only the 

### #87923 fix(thinking): keep explicit session thinkingLevel when runtime downgrades (#87740)

- bucket: ready_for_maintainer
- author: hoobnn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:14:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #87740. An explicit session `thinkingLevel` override (e.g. `high`) was permanently reset to a supported level (e.g. `off`) after every agent turn whenever the active model didn't support the stored level. Root cause: when the stored level was 

### #87969 docs: add config unset dry-run documentation

- bucket: ready_for_maintainer
- author: EnjouZeratul
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:16:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add documentation for `config unset` command including: - Basic usage examples - `--dry-run` option for validation without writing - `--dry-run --json` for structured output - `--allow-exec` for exec SecretRef resolvability checks - SecretRef fallou

### #87986 docs(skills): allow model-usage with Linux codexbar

- bucket: ready_for_maintainer
- author: shbernal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:16:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allow the bundled `model-usage` skill on Linux when `codexbar` is already installed. - Keep the existing Homebrew installer scoped to macOS so Linux users are not offered the brew path. - Update the skill docs to distinguish Linux live reads with 

### #88048 feat(gateway): add opt-in WebChat OpenResponses progress event

- bucket: ready_for_maintainer
- author: Sunjae-k
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:18:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add an opt-in WebChat-only OpenResponses progress SSE event for #85702. - Keep `response.output_text.delta` reserved for real assistant text and the existing post-run fallback. - Document the new config and event shape so clients can render early 

### #88052 fix(proxy): add error handler on upstream response stream

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:18:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #82442 ## Summary The debug proxy in `proxy-server.ts` subscribes to `"data"` and `"end"` on the upstream `IncomingMessage` but has no `"error"` handler. If the upstream server drops the connection mid-response, Node.js throws `ERR_UNHANDLED_ERROR` and c

### #88060 fix(cli): skip plugin preload for config-only agents add

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:18:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #66936. - Add an exact startup policy for `agents add` that skips plugin preload only when argv selects the documented config-only/non-interactive add path. - Keep interactive `agents add` on the existing all-plugin preload path so the wizard 

### #88061 docs: fix accuracy drift across docs (config defaults, model aliases, anchors, terminology)

- bucket: ready_for_maintainer
- author: hoobnn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, channel: tlon, channel: zalouser, app: android, app: macos, gateway, channel: feishu, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, extensions: copilot
- gitcrawl snapshot updated: 2026-06-15T05:18:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Audited all of `docs/**` against the current codebase and fixed factual drift where the documentation no longer matched shipped behavior. Grouped into 8 commits by area. **Docs only — no source/runtime changes.** ### Correctness / safety - `channels

### #88062 fix(logging): avoid stalled warnings for active model calls

- bucket: ready_for_maintainer
- author: litang9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:18:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - classify silent `model_call` activity as `session.long_running` after the warning threshold instead of immediately reporting `session.stalled` - keep `session.stalled` and active-abort recovery for owned model calls once `stuckSessionAbortMs` is r

