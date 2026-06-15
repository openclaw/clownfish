---
repo: openclaw/openclaw
cluster_id: pr-inventory-recent_active-20260615T223445-097
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
  - "#88898"
  - "#91776"
  - "#91768"
  - "#92430"
  - "#92440"
  - "#92156"
  - "#92570"
  - "#88845"
  - "#92860"
  - "#92953"
  - "#78031"
  - "#76082"
  - "#93034"
  - "#77629"
  - "#79846"
  - "#90841"
  - "#80924"
  - "#81305"
  - "#84560"
  - "#87932"
  - "#73923"
  - "#87247"
  - "#89409"
  - "#73989"
  - "#79141"
cluster_refs:
  - "#88898"
  - "#91776"
  - "#91768"
  - "#92430"
  - "#92440"
  - "#92156"
  - "#92570"
  - "#88845"
  - "#92860"
  - "#92953"
  - "#78031"
  - "#76082"
  - "#93034"
  - "#77629"
  - "#79846"
  - "#90841"
  - "#80924"
  - "#81305"
  - "#84560"
  - "#87932"
  - "#73923"
  - "#87247"
  - "#89409"
  - "#73989"
  - "#79141"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.806Z; bucket=recent_active; no GitHub mutation is possible in plan mode."
---

# PR Inventory recent_active 97

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #88898 fix(reply): also drop tool-error progress payloads under messages.suppressToolErrors

- bucket: recent_active
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T05:42:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `messages.suppressToolErrors` is an existing user-facing config knob that hides tool-error noise from chat (landed in #16620 / #81561). Today it only drops the warning TEXT inside `src/auto-reply/reply/payloads.ts`. The error tool-result payload is

### #91776 fix(ios): refresh permission rows after grants

- bucket: recent_active
- author: zats
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: XS, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T10:06:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes stale iOS permission rows after Contacts / Calendar / Reminders grants by applying the granted callback result to the local SwiftUI status after re-reading current OS status. > [!WARNING] > Local validation used beta macOS 27 / Xcode 27. The a

### #91768 fix(ios): respect chat header safe area

- bucket: recent_active
- author: zats
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: XS, proof: supplied, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T10:24:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the iOS chat header overlapping the status bar / Dynamic Island by applying the existing top inset through SwiftUI safe-area layout. > [!WARNING] > Local validation used beta macOS 27 / Xcode 27. The app deployment target is unchanged, and iOS

### #92430 fix(memory-wiki): guard against missing agentIds in cloneMemoryPublicArtifact

- bucket: recent_active
- author: whiteyzy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T11:25:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92207: All `wiki_*` tools throw `artifact.agentIds is not iterable` because `listMemoryHostPublicArtifacts()` may omit `agentIds` for some workspaces. **Fix**: Guard `artifact.agentIds` with `?? []` in: 1. `cloneMemoryPublicArtifact` — spread

### #92440 fix(dispatch): include message_sending hooks when channel supplies custom beforeDeliver (fixes #92374)

- bucket: recent_active
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T14:19:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: When a channel (e.g. Telegram) supplies `dispatcherOptions.beforeDeliver`, the documented `message_sending` plugin hook is silently excluded from the before-deliver composition chain. Plugin guard/filter extensions register and load

### #92156 fix(ui): allow chat composer row to shrink when sidebar collapsed

- bucket: recent_active
- author: fsdwen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-12T23:19:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the sidebar is collapsed and the browser window is narrow (~500px), the chat composer row overflows — the send button and settings chip get pushed out of view. This is caused by flexbox's default `min-width: auto` on `.chat-compose__row`, plus

### #92570 fix(test): exclude browser cache and profile directories from live auth staging (fixes #91893)

- bucket: recent_active
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T03:00:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `test/test-env.ts` `copyDirIfExists` uses unfiltered `fs.cpSync` to copy `LIVE_EXTERNAL_AUTH_DIRS` (which includes `.gemini`) into a temp home during live test setup. On machines where `.gemini` contains browser profile data (e.g. An

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

### #92953 fix(read): reuse strict-utf8-then-codepage decoder for non-UTF-8 text files (fixes #92664)

- bucket: recent_active
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-14T18:46:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: The session `read` tool decodes all text files as UTF-8 via `buffer.toString("utf-8")`. On Chinese Windows (and other non-UTF-8 locales), GBK-encoded text files produce mojibake (garbled characters) instead of readable Chinese text.

### #78031 feat(bootstrap): teach compact writing style for workspace templates

- bucket: recent_active
- author: jimdawdy-hub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:05:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **Problem:** Default workspace templates are verbose. On current `main`, `SOUL.md` + `AGENTS.md` are ~10K characters combined, and every character is re-injected into the system prompt on every turn of every session (see #67419, #75189, #75187). **W

### #76082 docs(capabilities): define workspace discovery convention

- bucket: recent_active
- author: MertBasar0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:47:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: workspace-local integrations and durable procedures can be documented ad hoc, so agents may miss valid local capability paths before saying a task is unsupported. - Why it matters: users with b

### #93034 fix(cli): tolerate deleted startup cwd

- bucket: recent_active
- author: llljjjwww333
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, scripts, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-14T19:58:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #73676 Adds a small safe cwd helper for startup paths that may run after the invoking directory has been deleted. CLI/runtime dotenv loading now skips project-local `.env` when `process.cwd()` fails while still loading global env, PATH bootstrap no longe

### #77629 docs(plugins): clarify hook runtime activation

- bucket: recent_active
- author: Beandon13
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:16:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - document that chat-path hooks such as `before_dispatch` only run when Gateway startup planning actually loads the plugin into the messaging runtime - tie the hook docs back to the manifest activation contract, especially `activation.onCapabilities

### #79846 docs: add troubleshooting table to getting-started guide

- bucket: recent_active
- author: RockENZO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: refactor-only, proof: supplied, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:14:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a concise troubleshooting table to the [Getting Started](https://docs.openclaw.ai/start/getting-started) guide covering the four most common first-run blockers: missing command, gateway not starting, model auth errors, and outdated Node versi

### #90841 fix(control-ui): validate Telegram cron To against full target contract (#90467)

- bucket: recent_active
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-14T21:59:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds save-time Control UI validation for the cron **announce → To** field when the delivery channel is Telegram, so a cron job cannot be saved with a recipient Telegram can never deliver to. Previously the announce `To` field accepted any string and

### #80924 feat(i18n): translate dreaming module UI strings to Simplified Chinese

- bucket: recent_active
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-14T22:00:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Dreaming module diary UI had hardcoded English strings and incomplete Chinese translations (restartConfirmation was still in English). - Why it matters: Non-English users see mixed-language UI in the Dreaming tab. - What changed: Extracte

### #81305 fix(commands): preserve multiline slash skill args

- bucket: recent_active
- author: web3blind
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-14T22:14:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #79155 by preserving multiline payload text after the first slash-command line during command body normalization. - Keeps command-head normalization intact for aliases, colon syntax, and Telegram-style `@bot` suffix cleanup. - Adds regressio

### #84560 feat(cli): support --dm-policy and --dm-allowlist in channels add

- bucket: recent_active
- author: akang1798
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: googlechat, channel: imessage, channel: line, channel: matrix, channel: mattermost, channel: msteams, channel: nextcloud-talk, channel: nostr, channel: signal, channel: slack, channel: telegram, channel: tlon, channel: voice-call, channel: whatsapp-web, channel: zalo, channel: zalouser, app: ios, app: macos, gateway, extensions: copilot-proxy, extensions: diagnostics-otel, extensions: llm-task, extensions: lobster, extensions: memory-core, extensions: memory-lancedb, extensions: open-prose, cli, commands, channel: feishu, channel: twitch, channel: irc, extensions: acpx, extensions: anthropic, extensions: openai, extensions: minimax, extensions: cloudflare-ai-gateway, extensions: byteplus, extensions: huggingface, extensions: kimi-coding, extensions: moonshot, extensions: synthetic, extensions: together, extensions: venice, extensions: volcengine, extensions: xiaomi, extensions: kilocode, extensions: nvidia, extensions: qianfan, extensions: vercel-ai-gateway, extensions: fal, extensions: tavily, extensions: duckduckgo, extensions: deepseek, channel: qqbot, extensions: stepfun, channel: qa-channel, extensions: qa-lab, extensions: memory-wiki, extensions: webhooks, extensions: arcee, extensions: codex, extensions: lmstudio, extensions: tokenjuice, extensions: tencent, plugin: bonjour, plugin: google-meet, extensions: senseaudio, extensions: tts-local-cli, extensions: litellm, extensions: inworld, extensions: gradium, plugin: azure-speech, extensions: diagnostics-prometheus, plugin: migrate-hermes, channel: synology-chat, plugin: migrate-claude, extensions: cerebras, extensions: deepinfra, plugin: file-transfer, extensions: oc-path, extensions: amazon-bedrock, extensions: anthropic-vertex, extensions: brave, extensions: chutes, extensions: diffs, extensions: elevenlabs, extensions: firecrawl, extensions: github-copilot, extensions: google, extensions: microsoft, extensions: mistral, extensions: ollama, extensions: opencode, extensions: opencode-go, extensions: openrouter, extensions: openshell, dependencies-changed, extensions: admin-http-rpc
- gitcrawl snapshot updated: 2026-06-15T05:05:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR adds support for `--dm-policy` and `--dm-allowlist` flags to the `channels add` command. This is part of the fix for #79553, enabling non-interactive configuration of DM policies. Note: Corresponding logic changes in plugins may be required to consume

### #87932 feat(compaction): support percentage strings for token thresholds

- bucket: recent_active
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-15T05:14:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Four compaction parameters (`reserveTokens`, `keepRecentTokens`, `reserveTokensFloor`, `softThresholdTokens`) use absolute token counts that don't scale with the model's context window. Switching from a 1M-token model to a 200K-token mode

### #73923 fix(ui): preserve gateway token during safe websocket url edits

- bucket: recent_active
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, clawsweeper, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:24:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #41545 by preserving the Gateway Token while the user makes harmless same-normalized-endpoint WebSocket URL edits in Overview > Gateway Access. - Clears or reloads the token when the normalized gateway endpoint changes so a gateway-scoped cr

### #87247 docs: clarify LanceDB dreaming settings vs vector-native plugins

- bucket: recent_active
- author: airbing11
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:59:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a short "LanceDB and dreaming" note to `docs/concepts/dreaming.md`: - A selected memory-slot plugin may expose dreaming **settings** when it owns `plugins.slots.memory`. - That is separate from LanceDB-**vector-native** dreaming behavior; for t

### #89409 [codex] docs(memory-wiki): clarify sources wrapper contract

- bucket: recent_active
- author: spacegeologist
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:04:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #69700. Clarifies the Memory Wiki `sources/` contract so the docs match the current lint, ingest, compile, and search behavior: - describe `sources/` as structured source-page wrappers, not arbitrary raw Markdown storage - explain that source

### #73989 fix(health-monitor): add reconnect grace for gateway reconnects

- bucket: recent_active
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, clawsweeper, clawsweeper:automerge, clawsweeper:human-review, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-15T10:47:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Repairs the existing #45712 branch rather than replacing it. Summary: - add shared reconnectGraceMs/lastDisconnectAt handling so running-but-recently-disconnected channels are not restarted before provider reconnect grace expires - consume typed lastDisconnect

### #79141 Clarify group chat style guidance

- bucket: recent_active
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, docker, size: S, triage: refactor-only, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:10:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - shorten generated group-chat style guidance so agents sound more natural in messaging surfaces - replace channel-specific link-preview wording with generic preview-spam guidance - keep single useful links free to preview while steering multi-link
