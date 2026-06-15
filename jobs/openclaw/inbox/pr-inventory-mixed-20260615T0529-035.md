---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-035
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
  - "#85642"
  - "#85611"
  - "#85561"
  - "#85400"
  - "#85293"
  - "#85173"
  - "#85134"
  - "#85004"
  - "#84937"
  - "#84791"
cluster_refs:
  - "#85642"
  - "#85611"
  - "#85561"
  - "#85400"
  - "#85293"
  - "#85173"
  - "#85134"
  - "#85004"
  - "#84937"
  - "#84791"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.603Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 35

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #85642 Clarify skill authentication and session boundaries

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- updated: 2026-05-29T06:24:13Z
- body excerpt: ## Summary Doc-only SafeOps reviewed-risk reduction pass for skill documentation. Changes: - Clarify Graincrawl encrypted source checks so they require explicit readiness checks and no unexpected OS approval prompts. - Clarify browser automation user-session g

### #85611 Replace curl-piped install in duplicate PR tagging skill

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: 📣 needs proof
- updated: 2026-05-29T06:24:19Z
- body excerpt: Replaces curl-piped-to-shell prtags install guidance with a pinned download and checksum-verification flow. This removes the SafeOps curl-pipe-shell reviewed risk for the duplicate PR tagging skill.

### #85561 docs: use concrete URLs in markdown examples

- bucket: needs_proof
- author: SeashoreShi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- updated: 2026-05-29T06:24:21Z
- body excerpt: ## Summary - replace placeholder `url` targets in inline markdown examples with concrete `https://example.com/...` URLs - do the same for markdown image examples used in channel docs ## Why Several docs pages currently use inline examples like `[label](url)` a

### #85400 test(perf): compare saved CLI startup benchmarks

- bucket: ready_for_maintainer
- author: FelixIsaac
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- updated: 2026-05-29T06:24:39Z
- body excerpt: ## Summary - add saved-report comparison mode to `scripts/bench-cli-startup.ts` - emit duration and RSS deltas as either terminal text or JSON - keep the existing entry-vs-entry comparison path for same-run experiments - refresh shrinkwrap snapshots so `check-

### #85293 fix(codex): prevent isolated app-server process leaks on timeout

- bucket: needs_proof
- author: shivam-9090
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-05-29T06:24:51Z
- body excerpt: ### Summary This PR fixes a bug where isolated `codex app-server` child processes were leaked and left orphaned when client initialization or individual requests timed out or hung. ### Details of Changes 1. **Combined Setup Timeout (`shared-client.ts`)**: Grou

### #85173 fix(discord): degrade audioAsVoice to media attachment when voice adapter unavailable

- bucket: needs_proof
- author: JulyanXu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- updated: 2026-05-29T06:25:06Z
- body excerpt: ## Summary When `messages.tts.auto = "always"`, the TTS pipeline sets `audioAsVoice = true` on reply payloads. The Discord outbound adapter then attempted to route through `discordVoice`, falling back to `sendVoiceMessageDiscord` runtime. In cron delivery cont

### #85134 fix(slack): respect mute / stop-responding requests in shared channel threads

- bucket: needs_proof
- author: cznworld
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: L, triage: needs-real-behavior-proof, rating: 🧂 unranked krab, status: 📣 needs proof
- updated: 2026-05-29T06:25:08Z
- body excerpt: ## Summary In shared Slack channel threads, the bot kept replying after users asked it to stop. Two failure modes: 1. After the bot's first reply in a thread, every subsequent message implicitly re-engaged the bot via `bot_thread_participant` in `prepareSlackM

### #85004 fix(plugins): allow disabled migration provider plugins to be discovered and loaded

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, rating: 🧂 unranked krab, status: 📣 needs proof
- updated: 2026-05-29T06:25:14Z
- body excerpt: Bypasses enablement check specifically for plugins implementing the migrationProviders contract, allowing them to be discovered and loaded during migration commands even if they are disabled in config.

### #84937 feat: add minimal Discord /ask command

- bucket: needs_proof
- author: ximanuki
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: discord, scripts, size: XL, triage: dirty-candidate, triage: external-plugin-candidate, proof: supplied, extensions: openrouter, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- updated: 2026-05-29T06:25:22Z
- body excerpt: ## Summary - add bundled Ask plugin with a Discord-native `/ask` command - choose button/select/modal from the prompt and store log-only ask sessions/feedback - add `/ask grill <request>` as a prefix-mode clarification flow that asks one modal question at a ti

### #84791 Fix Telegram TTS voice-note routing

- bucket: needs_proof
- author: staysharp-rgb
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- updated: 2026-05-29T06:25:32Z
- body excerpt: ## Summary - preserve generic `audioAsVoice` payload intent through Telegram sends - treat generated TTS voice output filenames as Telegram voice-note intent when routing audio - add regression coverage for generated TTS MP3 voice compatibility ## Verification

