---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-036
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
  - "#91533"
  - "#80683"
  - "#81208"
  - "#81298"
  - "#81299"
  - "#81306"
  - "#81352"
  - "#81407"
  - "#81418"
  - "#81431"
  - "#81470"
  - "#81592"
  - "#83868"
  - "#83980"
  - "#84023"
  - "#84036"
  - "#84072"
  - "#84111"
  - "#84122"
  - "#84123"
  - "#84161"
  - "#84248"
  - "#84280"
  - "#84300"
  - "#84325"
  - "#84334"
  - "#84424"
  - "#83874"
  - "#93101"
  - "#93099"
  - "#90644"
  - "#90069"
  - "#76386"
  - "#78071"
  - "#78815"
  - "#78827"
  - "#79185"
  - "#82572"
  - "#83094"
  - "#83095"
cluster_refs:
  - "#91533"
  - "#80683"
  - "#81208"
  - "#81298"
  - "#81299"
  - "#81306"
  - "#81352"
  - "#81407"
  - "#81418"
  - "#81431"
  - "#81470"
  - "#81592"
  - "#83868"
  - "#83980"
  - "#84023"
  - "#84036"
  - "#84072"
  - "#84111"
  - "#84122"
  - "#84123"
  - "#84161"
  - "#84248"
  - "#84280"
  - "#84300"
  - "#84325"
  - "#84334"
  - "#84424"
  - "#83874"
  - "#93101"
  - "#93099"
  - "#90644"
  - "#90069"
  - "#76386"
  - "#78071"
  - "#78815"
  - "#78827"
  - "#79185"
  - "#82572"
  - "#83094"
  - "#83095"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.479Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 36

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91533 fix(ui): scope avatar storage per agent ID

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:34:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted (Claude). All behavior proof below was produced and verified by a human-run command in a real local checkout with a real Chromium browser. ## Summary - **Problem:** The avatar storage used a single global localStorage key `openclaw.control.assist

### #80683 fix(memory-lancedb): add retry mechanism for Windows Docker bind mount sync delays

- bucket: needs_proof
- author: mturac
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-lancedb, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:38:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Hey! 👋 This PR hardens the memory-lancedb plugin initialization path for transient LanceDB table metadata errors seen with Docker bind-mounted data directories. ## The Problem When a LanceDB data directory is backed by a host bind mount, table metadata can be

### #81208 fix(amazon-bedrock-mantle): gate implicit discovery on AWS creds presence (#67288)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:39:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #67288. The `amazon-bedrock-mantle` plugin ran implicit Mantle provider discovery on every catalog refresh even when the user had no AWS credentials configured, emitting `[bedrock-mantle-discovery] Mantle IAM token generation unavailable` log 

### #81298 fix(cli): honor ZDOTDIR/XDG_CONFIG_HOME in completion install (#63069)

- bucket: needs_proof
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:40:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Shell completion install/check helpers hardcoded zsh, fish, and bash profile paths under `$HOME`, ignoring `$ZDOTDIR` and `$XDG_CONFIG_HOME` and disagreeing on bash `.bashrc` vs `.bash_profile`. Reporter on macOS / zsh with `$ZDOTDIR=$HOME/.config/z

### #81299 fix(line): pack Flex extras into Reply API slots before token is consumed (#65656)

- bucket: needs_proof
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: line, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:40:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary LINE auto-reply previously sent text via the Reply API (max 5 messages per token, quota-free) and then sent Flex/media via the Push API (subject to the free-plan 200/month quota). Once Push quota was exhausted, table-derived Flex Messages were silen

### #81306 fix(gateway): keep explicit loopback bind pinned to 127.0.0.1 (#65619)

- bucket: needs_proof
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:40:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On macOS, the best-effort `canBindToHost("127.0.0.1")` preflight in `resolveGatewayBindHost` can fail intermittently (port temporarily held, IPv4/IPv6 dual-stack quirks). When that probe returned false for an explicit `bind: "loopback"` configuratio

### #81352 Require non-empty owner keys for task access

- bucket: needs_proof
- author: MarkSurfas
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:40:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - require both task owner keys and caller owner keys to normalize to non-empty values before owner-scoped task access succeeds - add regression coverage for blank caller keys and restored legacy session tasks with blank owner keys ## Tests - ./node_

### #81407 feat(hooks): add senderId to outbound message:sent event

- bucket: needs_proof
- author: haseo-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: refactor-only, triage: blank-template, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:41:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Outbound hook events (`message:sent`) currently lack `senderId`, while inbound events (`message:received`) include it via `metadata.senderId`. This imbalance forces hook handlers to use workarounds to identify the bot's own user ID. ## Problem | Event | sender

### #81418 fix(mcp): parent-PID watchdog to prevent orphan channel-server workers

- bucket: needs_proof
- author: 22kyasue
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:41:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a parent-PID watchdog inside `serveOpenClawChannelMcp` (`src/mcp/channel-server.ts:73`) so an MCP STDIO child cleanly exits when its gateway parent dies abruptly. Cross-platform (Windows + POSIX) via `process.kill(parentPid, 0)`. ## Why When th

### #81431 feat(feishu): add filter, sort, field_names, view_id to feishu_bitable_list_records

- bucket: needs_proof
- author: manusjs
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:41:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds server-side filtering, sorting, field selection, and view scoping to `feishu_bitable_list_records`. ## Changes - **`filter`**: Feishu filter expression syntax (e.g. `AND(CurrentValue.[Status]="Open")`) - **`sort`**: Array of `"field_name:desc"`

### #81470 fix(webchat): include TTS audio in broadcastChatFinal when media already appended

- bucket: needs_proof
- author: zlh66
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:42:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `appendWebchatAgentMediaTranscriptIfNeeded` has already appended TTS audio to the session transcript, the broadcast phase clears `rawFinalPayloads` to an empty array: ```js const rawFinalPayloads = appendedWebchatAgentMedia ? [] : deliveredRepl

### #81592 [codex] Route Telegram management commands to the control lane

- bucket: needs_proof
- author: Kyzcreig
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:43:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Routes Telegram `/steer`, `/tell`, and `/queue` text commands onto the existing per-chat control sequentialization lane. ## Why Telegram updates are sequentialized by chat/thread so normal messages do not race with each other. That is correct for co

### #83868 fix(feishu): eliminate streaming card content duplication

- bucket: needs_proof
- author: hpumajun
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, triage: external-plugin-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:45:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Feishu streaming card messages show duplicated content during streaming — earlier text reappears concatenated with newer text. Content corrects itself only when the stream finishes (via `close()`). ## Root Cause `FeishuStreamingSession.update(text)`

### #83980 fix: stabilize macOS app node connection and eliminate pairing file read/write race

- bucket: needs_proof
- author: AllynSheep
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:49:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #83958 — macOS app node flaps online/offline and gateway invokes time out. ## Root Cause 1. **`pending.json` read/write race**: `node-pairing.ts` read-only operations (`listNodePairing()`, `getPairedNode()`, `verifyNodeToken()`) called `loadSt

### #84023 Emit WhatsApp Web health hook events

- bucket: needs_proof
- author: girgizrazvan-lgtm
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:50:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - emit internal `whatsapp:*` hook events when WhatsApp Web watchdog/reconnect state changes - include context for watchdog timeouts, scheduled reconnects, and terminal disconnects - cover health hook emission in the existing WhatsApp Web connection 

### #84036 feat(cli): suggest closest command for unknown subcommands (#83999)

- bucket: needs_proof
- author: 0xghost42
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:50:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #83999. ## Summary \`openclaw upate\` and \`openclaw upgrade\` previously failed with a generic \`OpenClaw does not know the command "upate".\` and left the user to inspect \`openclaw --help\` manually. This change appends npm-style \`Did you mean this?

### #84072 [codex] Add model fallback circuit breaker

- bucket: needs_proof
- author: wiatrM
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:51:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an in-memory per provider/model circuit breaker to model fallback - skip an open model circuit with `circuit_open` and HTTP 503 so fallback can move to the next candidate - reset circuit state on candidate success and add focused unit coverage

### #84111 feat (auth): offer interactive repair for undecryptable legacy agent OAuth sidecars

- bucket: needs_proof
- author: bdjben
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: L, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:51:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - detect undecryptable legacy OAuth sidecars for non-main agent auth stores during doctor/update auth health checks - show affected non-main agent ids and auth/sidecar paths, explain that choosing no preserves custom per-agent auth, and prompt with 

### #84122 fix(feishu): use middle-dot separator in card note footer

- bucket: needs_proof
- author: bugkill3r
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:52:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Feishu's card markdown renderer parses 'Agent: name' as definition-list syntax and hoists the agent name to the top of the rendered message. Switch the key/value separator from ': ' to ' · ' so the footer stays in the footer. Closes #59360 ## Summary Describe 

### #84123 feat(google-vertex): support per-model location override

- bucket: needs_proof
- author: bugkill3r
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:52:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Vertex AI requires different regional endpoints for different models under the same GCP project (preview models need 'global', GA models need regional like 'us-central1'). Add a per-model 'location' field to the model entry config so different google-vertex mo

### #84161 fix(voice-call): persist assistant transcript on call.speaking events

- bucket: needs_proof
- author: happydog-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: voice-call, gateway, extensions: memory-core, size: L, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:53:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `onTranscript(role, text, isFinal)` in the realtime bridge fires `call.speaking` events with the assistant's finalized utterance in `event.text`, but the manager's `call.speaking` handler only transitions state and drops the text. That means realtim

### #84248 [codex] isolate heartbeat context-engine session keys

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, extensions: codex, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:55:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: isolated heartbeat runs kept a stable `:heartbeat` routing key everywhere, so context-engine lifecycle hooks could still associate later ticks with prior heartbeat state. - Solution: preserve the stable routing `SessionKey`, but forward a

### #84280 fix: handle SIGUSR1 restart on Windows where the signal is unsupported

- bucket: needs_proof
- author: Thatgfsj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:55:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On Windows, `process.kill(pid, "SIGUSR1")` throws `TypeError [ERR_UNKNOWN_SIGNAL]: Unknown signal: SIGUSR1` because SIGUSR1 is a Unix-only signal. This broke `openclaw gateway restart` for unmanaged gateway processes on Windows. ## Changes ### 1. `s

### #84300 fix(discord): stop typing keepalive on message_tool_only delivery (#84276)

- bucket: needs_proof
- author: Rohang2005
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, agents, size: M, extensions: codex, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:56:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: in `message_tool_only` source-reply mode the Discord typing bubble keeps showing for ~10s after the reply has already landed in the channel. - Solution: add an explicit "source reply delivered" signal so the typing keepalive is sealed the

### #84325 fix(signal): mark slash text as command source

- bucket: needs_proof
- author: sebastian-openclaw
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: signal, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:56:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Signal text messages that start with `/` currently carry `CommandBody` and `CommandAuthorized`, but they do not mark the inbound context as a text command source. After the command-turn normalization changes, that leaves Signal slash messages classi

### #84334 fix(gateway): mark SIGUSR1 token consumed on restartIntent path, reset stale tokens on in-process restart

- bucket: needs_proof
- author: 6a6f686e6e79
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:56:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `update.run` from the control UI downloads the new package but the gateway never restarts to pick it up. Every attempt logs `restart coalesced (already in-flight)` and is silently dropped for the lifetime of the process. ### Root cause Two bugs comb

### #84424 fix(doctor): honor per-agent bootstrap profile in size check

- bucket: needs_proof
- author: kasangyong
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🦐 gold shrimp, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:57:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted: drafted with Claude Code. Bug discovery, fix, regression test, and behavior-proof reproducer all verified by the author on Windows 11 + Node 24. ## Summary - Problem: `openclaw doctor` reports bootstrap-file-size warnings against the global `age

### #83874 feat: add agent architecture runtime contracts

- bucket: needs_proof
- author: seanzhao-debug
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, cli, agents, size: XL, extensions: qa-lab, extensions: memory-wiki, proof: supplied, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:00:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add runtime contracts for agent task state, tool results, compact summaries, memory judgment, and context fragments - Add tests covering tool result bridge/model output/next hints, subagent task bridge, heartbeat task progress, and compaction help

### #93101 fix(message-tool): parse inline [[...]] button JSON from model text output

- bucket: needs_proof
- author: crh-code
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:01:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Some models (e.g. Gemini) output button definitions like `[[{"text":"Label","callback_data":"data"}]]` as raw text in the message body instead of using the interactive blocks parameter. - Add `extractInlineButtons()` helper that scans text for dou

### #93099 #93031: [Bug] v2026.6.6 cron migration: jobs migrated from jobs.json have blank agent_id — scheduler silently skips them

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:06:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Default agent_id to 'main' when writing cron jobs to SQLite. Jobs from legacy jobs.json lack agentId, causing NULL that the scheduler skips. ## Root Cause row-codec.ts: agent_id: job.agentId ?? null → NULL for legacy jobs → scheduler filters by agen

### #90644 fix(telegram): trust open group policy for native commands

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:08:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow Telegram native commands in groups when the resolved group policy is open and no commands.allowFrom override is configured - keep commands.allowFrom.telegram as the sole command auth source when configured - add regression coverage for /stat

### #90069 docs: explain message tool turn termination

- bucket: needs_proof
- author: ffluk3
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T01:13:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Document that `visibleReplies: "message_tool"` maps to message-tool-only delivery. - Explain that successful implicit current-source `message(action="send")` calls terminate the turn. - Add sub-agent guidance to use explicit routing for intermediate

### #76386 fix(install): trap SIGINT so Ctrl+C exits cleanly during upgrade doctor

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, commands, size: S, triage: refactor-only, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:21:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90011 Fixes #82304 ## Problem When running `curl -fsSL https://openclaw.ai/install.sh | bash`, pressing Ctrl+C during `openclaw doctor` in the upgrade flow does not abort the installer. The SIGINT kills the doctor subprocess but the installer catches it

### #78071 test(gateway): cover reserved admin method scopes

- bucket: needs_proof
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:22:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a focused gateway method-scope regression harness for listed reserved-admin methods. - Verifies config, legacy exec approvals, wizard, and update methods resolve to `operator.admin` and reject `operator.write`. ## Verification - `PATH="/tmp/o

### #78815 fix(compaction): resolve Claude CLI model aliases

- bucket: needs_proof
- author: mobykax949
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:22:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move default model aliases into a shared model-registry helper and add Claude CLI aliases (`opus`, `sonnet`, `haiku`, plus fast variants) that resolve to canonical Anthropic model IDs. - Resolve compaction targets through that alias source before 

### #78827 fix(agents): handle MiniMax prompt_cache_hit_tokens in normalizeUsage

- bucket: needs_proof
- author: lykeion-dev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:22:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: MiniMax reports prompt_tokens (total, including cached tokens) and prompt_cache_hit_tokens (cache portion) as separate fields. Without handling prompt_cache_hit_tokens in normalizeUsage, the cache subtraction is skipped, causing derivePromptTokens to double-co

### #79185 fix(tts/xiaomi): support Token Plan TTS endpoint

- bucket: needs_proof
- author: kidding1412
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, size: S, extensions: xiaomi, extensions: tts-local-cli, plugin: azure-speech, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:23:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix Xiaomi MiMo TTS for Token Plan users by: - sending Xiaomi TTS requests with `Authorization: Bearer <key>` instead of the `api-key` header - reusing `models.providers.xiaomi.baseUrl` for Xiaomi TTS when `messages.tts.providers.xiaomi.baseUrl` is 

### #82572 feat(queue): persist followup queues across gateway restarts

- bucket: needs_proof
- author: jewseppi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, scripts, commands, agents, size: XL, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 🎥 video, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T01:24:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the gateway process restarts, followup messages queued during an active agent turn are silently lost. ## Solution Persist followup queues in shared SQLite (`followup_queue_entries`), migrate legacy JSON sidecars via doctor, rehydrate from live 

### #83094 feat(agents): add sessions_send handoff acknowledgements

- bucket: needs_proof
- author: glfruit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:24:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements the Phase 1 A2A handoff acknowledgement contract for `sessions_send`. This builds on the existing handoff proposal work by adding: - stable handoff ids for resolved `sessions_send` agent-to-agent delivery - structured `handoff` acknowledg

### #83095 fix(canvas): prefer path-scoped capability tokens

- bucket: needs_proof
- author: LaPhilosophie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:24:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Canvas path-scoped capability URLs could keep a stale `oc_cap` query parameter after Gateway URL normalization. - Solution: make the path-scoped capability token authoritative when both path and query tokens are present. - What changed: G

