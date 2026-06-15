---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-057
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
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.205Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 57

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

