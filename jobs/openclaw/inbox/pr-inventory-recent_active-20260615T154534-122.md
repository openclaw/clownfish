---
repo: openclaw/openclaw
cluster_id: pr-inventory-recent_active-20260615T154534-122
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
  - "#92430"
  - "#92441"
  - "#92445"
  - "#92456"
  - "#92440"
  - "#91656"
  - "#92541"
  - "#92156"
  - "#92556"
  - "#92394"
  - "#92375"
  - "#92575"
  - "#92287"
  - "#92570"
  - "#92499"
  - "#92591"
  - "#92035"
  - "#91721"
  - "#92697"
  - "#88845"
  - "#92860"
  - "#74564"
  - "#75403"
  - "#75148"
  - "#89515"
cluster_refs:
  - "#92430"
  - "#92441"
  - "#92445"
  - "#92456"
  - "#92440"
  - "#91656"
  - "#92541"
  - "#92156"
  - "#92556"
  - "#92394"
  - "#92375"
  - "#92575"
  - "#92287"
  - "#92570"
  - "#92499"
  - "#92591"
  - "#92035"
  - "#91721"
  - "#92697"
  - "#88845"
  - "#92860"
  - "#74564"
  - "#75403"
  - "#75148"
  - "#89515"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.217Z; bucket=recent_active; no GitHub mutation is possible in plan mode."
---

# PR Inventory recent_active 122

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92430 fix(memory-wiki): guard against missing agentIds in cloneMemoryPublicArtifact

- bucket: recent_active
- author: whiteyzy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T11:25:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92207: All `wiki_*` tools throw `artifact.agentIds is not iterable` because `listMemoryHostPublicArtifacts()` may omit `agentIds` for some workspaces. **Fix**: Guard `artifact.agentIds` with `?? []` in: 1. `cloneMemoryPublicArtifact` — spread

### #92441 Harden synthetic session cleanup safety

- bucket: recent_active
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, commands, size: L, triage: refactor-only, triage: dirty-candidate, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-12T12:37:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - protect every `agent:<agentId>:main` session plus metadata-less and provider-scoped direct/dm customer sessions during native cleanup - make `--synthetic-only` skip unclassified orphan artifact deletion, including disk-budget orphan sweeps - expos

### #92445 fix(feishu): redact audit-sensitive contact info

- bucket: recent_active
- author: winger007
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-12T13:08:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Redact Feishu audit-sensitive contact identifiers at outbound message boundaries before sending text, cards, edited cards, and streaming Card Kit updates. - Cover email addresses, mainland China mobile numbers, 95xxx service numbers, and 400/800 h

### #92456 feat: add exec approvals denylist (STOP list) screening

- bucket: recent_active
- author: Hidetsugu55
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, proof: supplied, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-12T13:57:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an optional per-agent `denylist` to `exec-approvals.json`: a small STOP list that forces an explicit human approval for matching commands even when policy would otherwise auto-allow them (including `security=full` + `ask="off"`). This enables a

### #92440 fix(dispatch): include message_sending hooks when channel supplies custom beforeDeliver (fixes #92374)

- bucket: recent_active
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T14:19:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: When a channel (e.g. Telegram) supplies `dispatcherOptions.beforeDeliver`, the documented `message_sending` plugin hook is silently excluded from the before-deliver composition chain. Plugin guard/filter extensions register and load 

### #91656 test(cron): expand parseAbsoluteTimeMs test coverage to 39 cases

- bucket: recent_active
- author: SpecialLeon
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T14:25:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `parseAbsoluteTimeMs` in `src/cron/parse.ts` had minimal test coverage (only 2 test cases), leaving edge cases untested for ISO 8601 timezone parsing variants that cron schedules commonly use. - **What changed:** Expanded test suite f

### #92541 fix(plugins): load dreaming engine when memory slot plugin omitted from allowlist

- bucket: recent_active
- author: yxshee
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T23:05:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When a third-party Dreaming-compatible memory plugin holds the memory slot and `plugins.allow` is restrictive (omitting `memory-core`, the default dreaming engine), the dreaming engine is rejected as `not-in-allowlist` and never loads

### #92156 fix(ui): allow chat composer row to shrink when sidebar collapsed

- bucket: recent_active
- author: fsdwen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-12T23:19:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the sidebar is collapsed and the browser window is narrow (~500px), the chat composer row overflows — the send button and settings chip get pushed out of view. This is caused by flexbox's default `min-width: auto` on `.chat-compose__row`, plus 

### #92556 feat(llm): add Inworld as built-in llm provider

- bucket: recent_active
- author: smolskayanastassia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, extensions: inworld, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T00:36:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Inworld is currently a TTS-only plugin in OpenClaw. Users cannot use Inworld as an LLM provider for chat completions, despite Inworld offering an OpenAI-compatible LLM API with routing, tool calls, and reasoning. Why

### #92394 fix(webchat): fall back to resolved name when senderLabel is empty

- bucket: recent_active
- author: fsdwen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: mock-only-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T01:04:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary In WebChat UI, `sessions_send` inter-session messages render without sender attribution when `senderLabel` is empty or whitespace-only. The root cause: `group.senderLabel?.trim()` returns `""` (empty string), and `??` only treats `null`/`undefined` 

### #92375 #92134: fix(memory-wiki): retry transient path-alias errors during source page write

- bucket: recent_active
- author: zhangqueping
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: memory-wiki, proof: supplied, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T02:09:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `wiki_status` intermittently aborting with "Refusing to write imported source page through symlink" when the memory-wiki bridge concurrently replaces source pages via atomic rename. ## Root Cause Concurrent bridge re-exports use atomic temp-writ

### #92575 fix(sessions): preserve user behavior overrides across daily/idle rollover (#92562) [AI-assisted]

- bucket: recent_active
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T02:19:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Session-level behavior overrides — `/think`, `/verbose`, `/reasoning`, `/trace`, and auto-TTS — survive an explicit `/new` but were **dropped after the automatic daily/idle session reset**, reverting to defaults with no user action. Root cause is i

### #92287 fix: start typing for queued followup turns and honor configured typingMode for Telegram room events

- bucket: recent_active
- author: binhdoan123
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T02:51:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92267 ## Problem `agents.defaults.typingMode: "instant"` is silently ineffective for message-tool delivery setups — the configuration the ambient-room-events docs recommend (`unmentionedInbound: "room_event"` + `visibleReplies: "message_tool"`). Two ind

### #92570 fix(test): exclude browser cache and profile directories from live auth staging (fixes #91893)

- bucket: recent_active
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T03:00:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `test/test-env.ts` `copyDirIfExists` uses unfiltered `fs.cpSync` to copy `LIVE_EXTERNAL_AUTH_DIRS` (which includes `.gemini`) into a temp home during live test setup. On machines where `.gemini` contains browser profile data (e.g. An

### #92499 Memory/QMD: isolate mcporter sidecars per agent

- bucket: recent_active
- author: SYU8384
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, size: XL, proof: supplied, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-13T03:16:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Isolates QMD mcporter configuration per agent while preserving user/workspace-owned mcporter definitions that must stay external. For agents without an explicit user-owned mcporter server definition, OpenClaw generates a per-agent stdio config under

### #92591 feat(msteams): respond to channel messages by keyword without an @mention

- bucket: recent_active
- author: colton-octaria
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T04:11:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The MS Teams channel is the only group-capable channel that ignores `messages.groupChat.mentionPatterns`. Discord, Slack and WhatsApp each expose a per-provider `mentionPatterns` policy that scopes those patterns and treats a text match as an implic

### #92035 feat(memory): apply temporal decay to QMD search results

- bucket: recent_active
- author: fall4knight
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, scripts, size: M, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-13T04:25:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `memorySearch.query.hybrid.temporalDecay` currently only applies in the builtin hybrid engine merge path (`mergeHybridResults` in `hybrid.ts`). When `memory.backend = "qmd"` — the backend the docs recommend for advanced recall — search results skip 

### #91721 fix(logging): prune non-idle stale diagnostic session states

- bucket: recent_active
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-13T07:23:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `requestStuckSessionRecovery()` fails with `status: "failed"`, the diagnostic session state stays non-idle forever because `recoveryOutcomeMutatesSessionState()` returns `false` and `applyRecoveryOutcomeToDiagnosticState()` returns early. The e

### #92697 feat(sessions): surface blocked and stale session run statuses

- bucket: recent_active
- author: Hidetsugu55
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, app: web-ui, gateway, agents, size: L, extensions: memory-wiki, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T14:19:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds two session run statuses so stuck and orphaned sessions are recognizable in `sessions.list` and the Control UI: - **`blocked`** — the blocked-liveness watchdog now maps to a distinct *terminal* status instead of being folded into `failed`. A ru

### #88845 Require signed beta desktop distribution

- bucket: recent_active
- author: reidmcgill
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: googlechat, channel: imessage, channel: line, channel: matrix, channel: mattermost, channel: msteams, channel: nextcloud-talk, channel: nostr, channel: signal, channel: slack, channel: telegram, channel: tlon, channel: voice-call, channel: whatsapp-web, channel: zalo, channel: zalouser, gateway, extensions: copilot-proxy, extensions: diagnostics-otel, extensions: llm-task, extensions: lobster, extensions: memory-core, extensions: memory-lancedb, extensions: open-prose, scripts, agents, channel: feishu, channel: twitch, channel: irc, size: XL, extensions: acpx, extensions: anthropic, extensions: openai, extensions: minimax, extensions: cloudflare-ai-gateway, extensions: byteplus, extensions: huggingface, extensions: kimi-coding, extensions: moonshot, extensions: synthetic, extensions: together, extensions: venice, extensions: volcengine, extensions: xiaomi, extensions: kilocode, extensions: nvidia, extensions: qianfan, extensions: vercel-ai-gateway, extensions: fal, extensions: tavily, extensions: duckduckgo, extensions: deepseek, channel: qqbot, extensions: stepfun, channel: qa-channel, extensions: qa-lab, extensions: memory-wiki, extensions: webhooks, extensions: arcee, extensions: codex, extensions: lmstudio, extensions: tokenjuice, extensions: tencent, plugin: bonjour, plugin: google-meet, extensions: senseaudio, extensions: tts-local-cli, extensions: litellm, extensions: inworld, extensions: gradium, plugin: azure-speech, triage: dirty-candidate, extensions: diagnostics-prometheus, plugin: migrate-hermes, channel: synology-chat, plugin: migrate-claude, extensions: cerebras, extensions: deepinfra, plugin: file-transfer, proof: supplied, extensions: oc-path, extensions: amazon-bedrock, extensions: anthropic-vertex, dependencies-changed, extensions: admin-http-rpc, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: 🛠️ actively grinding, extensions: policy, plugin: pixverse, extensions: codex-supervisor, extensions: copilot, plugin: workboard, extensions: gmi, extensions: novita, channel: sms
- gitcrawl snapshot updated: 2026-06-14T01:34:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Point beta and alpha desktop builds at channel-specific Sparkle appcasts. - Make `scripts/make_appcast.sh` honor beta/alpha appcast output paths. - Require signed beta desktop assets plus `appcast-beta.xml` in the beta verifier. - Add `--desktop-o

### #92860 #92077: skills/ClawHub: add sourceUrl to skill metadata schema and CLI display

- bucket: recent_active
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, size: XS, proof: supplied, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation
- gitcrawl snapshot updated: 2026-06-14T05:18:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a `sourceUrl` field to skill metadata, allowing skill authors to declare a link to their source code repository in `SKILL.md` frontmatter (via `metadata.openclaw.sourceUrl`). This is the first deliverable for ClawHub provenance transparency (as

### #74564 fix: use agent auth scope in /models provider data

- bucket: recent_active
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, clawsweeper, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, status: needs maintainer proof decision
- gitcrawl snapshot updated: 2026-06-14T11:02:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This replaces and credits #74525 with the same narrow fix path: `/models` should use the target agent auth scope when building visible provider data for agent-scoped sessions. ## What changed - Derive or pass the target agent auth directory at the s

### #75403 fix: making typing start fire-and-forget allows cleanup/idle to run before a persistent typin...

- bucket: recent_active
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, clawsweeper, clawsweeper:commit-finding, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: needs maintainer proof decision
- gitcrawl snapshot updated: 2026-06-14T11:02:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one concrete regression: making typing start fire-and-forget allows cleanup/idle to run before a persistent typing indicator has finished starting, so the stop path can no-op and leave the indicator behind. ## What ClawSweeper Is Fixing - **Me

### #75148 fix: fallback path user-visible bug

- bucket: recent_active
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, clawsweeper, clawsweeper:commit-finding, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:10:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one user-visible bug in the new fallback path: some channel flows still keep replies private even when the `message` tool is unavailable, so the intended “surface private group replies” behavior is bypassed. ## What ClawSweeper Is Fixing - **M

### #89515 docs: add third-party UIs page

- bucket: recent_active
- author: intrepid37
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T16:41:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a Third-party UIs docs page under Web interfaces - List DeepClaw UI as a community dashboard for OpenClaw Gateway - Add connection guidance and a security checklist for external UIs - Link the new page from the Web docs overview Closes #88920 

