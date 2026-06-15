---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-066
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
  - "#85505"
  - "#85616"
  - "#85678"
  - "#85710"
  - "#85748"
  - "#85770"
  - "#85104"
  - "#85793"
  - "#85828"
  - "#85866"
  - "#85899"
  - "#85916"
  - "#85993"
  - "#86062"
  - "#86085"
  - "#86088"
  - "#90731"
  - "#86138"
  - "#86224"
  - "#86233"
  - "#86272"
  - "#86335"
  - "#86386"
  - "#86527"
  - "#86561"
  - "#86608"
  - "#86649"
  - "#86670"
  - "#86674"
  - "#86676"
  - "#86776"
  - "#86893"
  - "#86900"
  - "#86913"
  - "#87061"
  - "#88908"
  - "#87121"
  - "#87205"
  - "#87231"
  - "#79568"
cluster_refs:
  - "#85505"
  - "#85616"
  - "#85678"
  - "#85710"
  - "#85748"
  - "#85770"
  - "#85104"
  - "#85793"
  - "#85828"
  - "#85866"
  - "#85899"
  - "#85916"
  - "#85993"
  - "#86062"
  - "#86085"
  - "#86088"
  - "#90731"
  - "#86138"
  - "#86224"
  - "#86233"
  - "#86272"
  - "#86335"
  - "#86386"
  - "#86527"
  - "#86561"
  - "#86608"
  - "#86649"
  - "#86670"
  - "#86674"
  - "#86676"
  - "#86776"
  - "#86893"
  - "#86900"
  - "#86913"
  - "#87061"
  - "#88908"
  - "#87121"
  - "#87205"
  - "#87231"
  - "#79568"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.487Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 66

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #85505 fix(cli-runner): add host-only CLI auth epoch mode

- bucket: ready_for_maintainer
- author: SkyWolfDreamer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:44:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** claude-cli OpenClaw sessions are reset (`cli session reset: reason=auth-profile`) and lose their entire conversation whenever the automatic auth-profile rotation flips the session between two OpenClaw auth profiles — triggered by a bi

### #85616 fix(auto-reply): fast path text control commands

- bucket: ready_for_maintainer
- author: litang9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, channel: feishu, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:47:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a strict fast path for whole-message text control commands such as `/status`, `/thinking`, `/id`, `/usage`, `/send`, and `/activation`. - Mark Feishu/Lark whole-message text slash commands as structured text command turns so the core fast path

### #85678 fix(telegram): send typing cue from isolated ingress worker

- bucket: ready_for_maintainer
- author: Shor73
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:50:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Send a best-effort Telegram `sendChatAction("typing")` from the isolated polling ingress worker as soon as a private message update is received, before the update is spooled and before the main gateway/runtime drains it. This makes Telegram DMs show

### #85710 fix: use FLAG_TERMINATOR constant in getCommandPathInternal

- bucket: ready_for_maintainer
- author: d3Lap1ace
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:52:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #83902 `getCommandPathInternal` was the only function in `argv.ts` using a hardcoded `"--"` instead of the imported `FLAG_TERMINATOR` constant. Replaced the literal with the constant for consistency — if FLAG_TERMINATOR ever changes, command-path resolu

### #85748 feat(doctor): warn early when session store size will slow doctor

- bucket: ready_for_maintainer
- author: joeyfrasier
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:54:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Symptom On installations whose per-agent session store has grown past `session.maintenance.maxEntries`, or whose sessions directory has accumulated thousands of transcript files, `openclaw doctor` spends most of its wall-clock inside `doctor:state-integrity

### #85770 fix(heartbeat): bound pending final delivery replay

- bucket: ready_for_maintainer
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:55:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: heartbeat replay kept re-sending orphaned `pendingFinalDeliveryText` forever because the replay branch had no terminal retry or age bound. - Solution: add a heartbeat-only replay give-up gate that clears stale pending final delivery after

### #85104 feat: fast talks auto mode

- bucket: ready_for_maintainer
- author: alexph-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, app: web-ui, gateway, scripts, commands, agents, size: XL, extensions: anthropic, extensions: codex, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, extensions: xai, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 🎥 video, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T02:55:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #85087 ## Summary - adds `fast: auto` alongside `fast: on/off`, with the default 60s cutoff and configurable `fast_seconds` - resolves effective fast mode dynamically so follow-up model calls after the cutoff can run without priority/fast tier where the 

### #85793 docs(github): make post-install restart explicit

- bucket: ready_for_maintainer
- author: nielskaspers
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:55:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: GitHub skill restart requirement after installing `gh` is easy to miss. - Solution: Make the restart guidance explicit and add the canonical restart command. - What changed: Expanded `skills/github/SKILL.md` Auth section with restart + HO

### #85828 [codex] web_search: add Perplexity model override

- bucket: ready_for_maintainer
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, extensions: perplexity, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:56:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Perplexity web_search now accepts a per-call `model` override, but only allowlisted models from `plugins.entries.perplexity.config.webSearch.allowedModels` are honored. ## Verification - `node scripts/run-vitest.mjs src/agents/tools/web-search.test.

### #85866 [codex] Add WhatsApp phone-code login

- bucket: ready_for_maintainer
- author: VishalJ99
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, app: macos, cli, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:57:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `openclaw channels login --phone-number <number>` to the generic channel auth adapter and CLI - implement WhatsApp phone-code pairing through Baileys as a headless/QR-free login fallback, including cleanup for stale partial phone-code credenti

### #85899 docs(memory): align descriptors and docs with recursive memory/**/*.md

- bucket: ready_for_maintainer
- author: leafbird
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:58:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The runtime already walks `memory/` recursively via `collectMemoryFilesFromDir` (`packages/memory-host-sdk/src/host/internal.ts`), so nested files like `memory/YYYY-MM/YYYY-MM-DD.md` are indexed and searched. But several agent-facing descriptors a

### #85916 fix(gateway): require admin scope for browser proxy invoke

- bucket: ready_for_maintainer
- author: LaPhilosophie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, plugin: google-meet, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:58:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `browser.request` is admin-scoped, but the equivalent node-host browser proxy command could also be reached through direct `node.invoke(browser.proxy)` from an `operator.write` caller. - Solution: require `operator.admin` before forwardin

### #85993 feat(browser): expand Chrome MCP web capabilities

- bucket: ready_for_maintainer
- author: ACSKamloops
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T03:01:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the Browser plugin's Chrome MCP existing-session transport only exposed a small subset of the browser automation and debug surface that was available in the local testbed, so real browser workflows still fell back to partial behavior. - S

### #86062 feat(ui): timestamp unnamed dashboard sessions

- bucket: ready_for_maintainer
- author: davidmosiah
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:03:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: new Control UI dashboard sessions without a label/displayName fall back to raw session keys, making multiple new chats hard to distinguish. - Solution: add a Control UI fallback that renders unnamed dashboard sessions as their local creat

### #86085 i18n(zh-TW): align Control UI locale with Taiwan-standard terminology

- bucket: ready_for_maintainer
- author: p3nchan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:03:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The `zh-TW` Control UI locale on `main` still uses a number of mainland-China terms that are not idiomatic Traditional Chinese (Taiwan). Key parity is already complete (1228/1228), so this is a focused **terminology** pass — no key additions, no str

### #86088 fix(tasks): recover terminal lost cron rows

- bucket: ready_for_maintainer
- author: liaoandi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:04:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces closed #75036 with the same task-registry fix on a narrow branch. This keeps only the terminal lost cron recovery change and focused regression coverage. The previous PR branch had accumulated unrelated generated/runtime changes, so this branch was re

### #90731 fix(agents): hydrate allowlisted dynamic model metadata

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:06:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Fixes gateway/model catalog metadata for exact allowlisted dynamic models such as `ollama/minimax-m3:cloud`. - Full catalog loads now hydrate exact `agents.defaults.models` refs even when discovery already returned

### #86138 Allow agents to harden bundled plugin discovery

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:06:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #86136. This PR allows agents to apply one specific doctor-recommended hardening change through the agent-facing gateway config tool: ```json { "plugins": { "bundledDiscovery": "allowlist" } } ``` It does not generally open plugin discovery co

### #86224 [AI-assisted] fix(agents): resolve CLI runtime in preflight + memory-flush gates

- bucket: ready_for_maintainer
- author: adele-with-a-b
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:08:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `runPreflightCompactionIfNeeded` and `runMemoryFlushIfNeeded` in `src/auto-reply/reply/agent-runner-memory.ts` gate on `isCliProvider(params.followupRun.run.provider, params.cfg)`. `isCliProvider` only returns true when the passed provider id is its

### #86233 fix(codex): cap managed app-server trace logs

- bucket: ready_for_maintainer
- author: ghitafilali
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:08:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes/ref: #86214 Adds startup retention for OpenClaw-managed Codex app-server trace logs under `CODEX_HOME`: - applies before shared and isolated Codex app-server startup - rotates `logs_2.sqlite`, `logs_2.sqlite-wal`, and `logs_2.sqlite-shm` when 

### #86272 fix(cron): recover from local scope upgrades

- bucket: ready_for_maintainer
- author: matin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, scripts, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:09:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Request `operator.write` for `cron.add`, `cron.update`, `cron.remove`, and `cron.run` instead of `operator.admin`, so local cron mutations fit the normal write-scoped operator baseline. - Teach cron CLI error handling to recognize pairing and scop

### #86335 feat(webchat): allow safe app-protocol links (obsidian://, things://, etc.)

- bucket: ready_for_maintainer
- author: ctbritt
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:18:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds an allowlist of safe desktop-app URL schemes (`obsidian:`, `things:`, `fantastical:`, `shortcuts:`, `craftdocs:`, `notion:`, `bear:`, `vscode:`) to the DOMPurify sanitizer in `ui/src/ui/markdown.ts` - Extends both the `ALLOWED_URI_REGEXP` (so

### #86386 fix(feishu): route SDK HTTP through ambient proxy

- bucket: ready_for_maintainer
- author: larry-xue
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:19:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: AI-assisted contribution. ## Summary - Route Feishu/Lark SDK HTTP requests through OpenClaw's ambient proxy agent and set `proxy: false` so axios does not take a separate HTTPS proxy path. - Reuse the same proxy-aware HTTP instance for `WSClient` bootstrap req

### #86527 Fix voice-call trusted proxy matching for IPv4-mapped webhooks

- bucket: ready_for_maintainer
- author: rohitjavvadi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: voice-call, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:22:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #86525. Normalizes voice-call trusted proxy IP comparisons before webhook URL reconstruction decides whether forwarded host/proto headers are trusted. This aligns Twilio/Plivo webhook signature verification with the existing media-stream clien

### #86561 feat(zalouser): add groupLink action to fetch a group's invite link

- bucket: ready_for_maintainer
- author: JOY
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalouser, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:22:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds a `groupLink` action to the zalouser tool that returns a group's shareable invite link. The tool can already `groups` (list) and `link` (send a URL as a message), but there was no way to read a group's invite link. ## Changes - `zca-client.ts`: ad

### #86608 docs: add existing-solutions preflight guardrail

- bucket: ready_for_maintainer
- author: cablackmon
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:23:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a repo-root AGENTS.md rule requiring a lightweight existing-solutions check before custom builds - add the same reusable guardrail to default workspace AGENTS templates and the Kubernetes starter AGENTS config - keep wording scoped to open-sou

### #86649 fix: relay Claude CLI assistant partial messages as streaming deltas

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:24:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #86050 ## Summary Relay Claude CLI assistant records as streaming deltas so the WebChat UI shows progressive output instead of waiting for the full response. **Fix 1**: Parse `assistant` records from the Claude CLI JSONL stream and forward their text con

### #86670 Add Eden AI provider plugin

- bucket: ready_for_maintainer
- author: DinaAlSb
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T03:24:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add Eden AI as a bundled provider plugin. - Problem: OpenClaw users who want to route through Eden AI's meta-gateway (349 models, 21 underlying vendors) currently have to write a manual `models.providers.edenai` config and pick a base URL by hand. T

### #86674 feat: render cron job description as Summary in Control UI

- bucket: ready_for_maintainer
- author: mvanhorn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T03:25:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Cron jobs that carry a `description` now render it as a Summary section in the Control UI's job detail. Operators can see what a job is for without opening its source. What problem does this PR solve? Cron jobs have an optional `description` field o

### #86676 feat: configurable diagnostics.laneWaitWarnMs threshold

- bucket: ready_for_maintainer
- author: mvanhorn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:25:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `diagnostics.laneWaitWarnMs` is now configurable. The "lane wait exceeded" warning's 2-second floor was hard-coded, so contended lanes flooded the diagnostic log even when waits were within normal operating range. The default stays at 2_000 ms; user

### #86776 fix(models): apply provider policy defaults to inline models

- bucket: ready_for_maintainer
- author: kierandotai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:26:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - apply provider policy config defaults when building inline provider models - ensure Anthropic inline provider entries inherit the default `anthropic-messages` API - preserve model-level `api`/`baseUrl` precedence over provider-level defaults ## Re

### #86893 Fix isolated cron cold runner setup timeout

- bucket: ready_for_maintainer
- author: dredozubov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:31:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - let long isolated cron jobs wait up to 5 minutes for cold Codex runner setup - keep the existing 60s setup watchdog floor for short jobs - add regression coverage for the long-job watchdog window ## Tests - `node scripts/run-vitest.mjs src/cron/se

### #86900 fix(compaction): add circuit breaker to stop token burn when summarizer unavailable

- bucket: ready_for_maintainer
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:31:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the summarizer model is persistently unavailable (rate-limited, overloaded, misconfigured), `summarizeInStages` calls `summarizeWithFallback` for every split, each burning 3+ retries per call. With N splits, this burns N × 3 × chunkTokens befor

### #86913 fix(gateway): expose restart pending state

- bucket: ready_for_maintainer
- author: Dizesales
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, extensions: admin-http-rpc, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:31:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add read-only `gateway.restart.pending` state for restart/update guards - expose scheduled, preparing, active deferral, unconsumed signal, delay, reason, and deferral timeout state - register the method as `operator.read`, expose it through admin 

### #87061 feat(agents): add top-level subsystem logger

- bucket: ready_for_maintainer
- author: caulslorenzo1-png
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:35:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `src/agents/log.ts` exporting a `SubsystemLogger` for the `"agents"` subsystem - Follows the existing pattern of `src/agents/cli-runner/log.ts` and `src/agents/pi-embedded-runner/logger.ts` - Wires `agent-command.ts` as the first caller via `

### #88908 fix(gateway): force exit on zombie shutdown + 503 healthz during shutdown

- bucket: ready_for_maintainer
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:35:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On rh-bot.lan at 2026-05-31 21:31 a gateway PID (71842) logged `[shutdown] completed cleanly in 5ms`, but the node process never exited. It held port 18789 for 2h13m. Every subsequent launchd-spawned gateway then took the lock-recovery path: probe `

### #87121 test(cli): add banner emission reset helper

- bucket: ready_for_maintainer
- author: lizuju
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:36:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Add a CLI banner testing reset helper for the module-level emission guard. - Cover same-module reset/re-emit behavior in banner tests. Fixes #83903 ## Real behavior proof Behavior addressed: CLI banner module state can now be reset in the same loade

### #87205 fix: avoid gateway daemon repair on protocol mismatch

- bucket: ready_for_maintainer
- author: rifachnia
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, commands, size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:38:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Detect protocol mismatch explicitly during doctor gateway health checks * Avoid treating incompatible running gateways as dead/stale gateways * Skip daemon repair flow for protocol mismatch states * Add regression coverage for protocol mismatch ha

### #87231 feat(feishu): include reply context in comment auto replies

- bucket: ready_for_maintainer
- author: wittam-01
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:39:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu document comment auto replies did not carry source-reply context into the Drive comment write requests, so the receiving side could not distinguish which original comment reply triggered an automatic follow-up. - Why it matters: co

### #79568 docs(vps): move related links into standard Related section

- bucket: ready_for_maintainer
- author: GGzili
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:54:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move the VPS page's inline `Related pages:` links into the existing `## Related` section - Keep the Gateway remote access and Platforms hub links available from the page - Verify internal docs links still pass the repository docs-link audit ## Rea

