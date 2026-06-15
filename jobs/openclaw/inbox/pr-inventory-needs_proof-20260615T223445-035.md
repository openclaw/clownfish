---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-035
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
  - "#83295"
  - "#83458"
  - "#83629"
  - "#83630"
  - "#83665"
  - "#83703"
  - "#83715"
  - "#83819"
  - "#83826"
  - "#83862"
  - "#90683"
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
cluster_refs:
  - "#83295"
  - "#83458"
  - "#83629"
  - "#83630"
  - "#83665"
  - "#83703"
  - "#83715"
  - "#83819"
  - "#83826"
  - "#83862"
  - "#90683"
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
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.793Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 35

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #83295 perf(agents): bootstrap context cache, PI model-discovery cache, auth-store option keys, tool-descriptor kill switch

- bucket: needs_proof
- author: atlaspetco
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:08:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Rebased follow-up to #76348. Since #76348 was filed, upstream landed the simpler half it proposed — the per-session bootstrap-files snapshot cache (`src/agents/bootstrap-cache.ts`'s `getOrLoadBootstrapFiles`). This PR isolates and re-bases the **still-relevant

### #83458 fix(feishu): preserve ACP topic conversation bindings

- bucket: needs_proof
- author: veryoung
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, channel: feishu, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:12:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Refreshes #50943 onto current `openclaw/main` as a narrow Feishu plugin fix. - Adds Feishu `messaging.resolveInboundConversation` so ACP thread binding uses plugin-owned topic conversation grammar. - Covers topic, sender-scoped topic, and direct c

### #83629 fix(sessions): include subagent metadata in json

- bucket: needs_proof
- author: YuanHanzhong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:15:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add existing spawned-session lineage fields to sessions JSON rows - cover store-backed JSON output for spawned session metadata Fixes #80286 ## Real behavior proof - **Behavior or issue addressed:** `openclaw sessions --json` now includes the stor

### #83630 fix(doctor): preview missing transcript cleanup

- bucket: needs_proof
- author: YuanHanzhong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:15:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - include --fix-missing in the doctor dry-run preview for missing transcript cleanup - tighten state-integrity coverage for the suggested preview command Fixes #54877 ## Real behavior proof - **Behavior or issue addressed:** The doctor dry-run previ

### #83665 fix(codex): unwrap app-server auth token wrappers

- bucket: needs_proof
- author: ecochran76
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:16:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - unwrap JSON token wrapper strings returned from Codex auth profile resolution before calling `account/login/start` - preserve wrapper-provided ChatGPT account ids for both OAuth and token-backed Codex profiles - add app-server auth bridge regressi

### #83703 Add Claude ignore rules for generated assets

- bucket: needs_proof
- author: sravan27
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:16:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a repo-level `.claudeignore` so Claude Code skips generated output, dependency/build directories, lockfiles, screenshots, and bulky binary media assets during normal code navigation - keep source, docs, tests, scoped `AGENTS.md` / `CLAUDE.md`,

### #83715 [codex] Guard doctor repairs for newer configs

- bucket: needs_proof
- author: ejames-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:17:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Block `doctor --fix`, `--yes`, and gateway-token generation from applying repairs when the config was last written by a newer OpenClaw binary. - Downgrade the doctor prompter to read-only after that guard trips, so later health contributions do no

### #83819 fix(heartbeat-runner): add wakeGuard pre-flight hook to skip no-op wakes (OME-332)

- bucket: needs_proof
- author: Omerbahari
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:18:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem (OME-332) The `startHeartbeatRunner` wake dispatch path calls `runOnce` for every targeted agent/session without checking whether that agent actually has actionable work. On installations with an orchestration layer (e.g. Paperclip/Ronen brainOS), a

### #83826 test(android): poll for stale TLS probe cleanup in auth test

- bucket: needs_proof
- author: NeatGuyCoding
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:18:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `connect_ignoresStaleTlsProbeAfterDisconnect` used a fixed `Thread.sleep(100)` before asserting async TLS probe cleanup after disconnect. - Why it matters: Under CI load, 100ms may be insufficient, causing flaky unit test failures. - What

### #83862 fix(cli): add configure and onboard to interactive TTY command skip list

- bucket: needs_proof
- author: lml2468
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:19:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `openclaw configure` and `openclaw onboard` hang and leave high-CPU child processes on some Linux kernel/Node.js combinations. Reported in #83560. ## Root Cause The ExperimentalWarning suppression respawn in `buildCliRespawnPlan` wraps the command i

### #90683 fix: retry safe post-tool continuation turns

- bucket: needs_proof
- author: JuanHuaXu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:24:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Prevents terminal assistant turns that only promise to act, such as “Hold on, let me look that up” or “Now let me get the details,” from being accepted as complete when replay is safe. - Covers no-tool narration st

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
