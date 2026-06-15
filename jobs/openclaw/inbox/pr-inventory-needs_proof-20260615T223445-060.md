---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-060
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
  - "#91729"
  - "#82303"
  - "#91924"
  - "#91973"
  - "#92079"
  - "#93218"
  - "#92556"
  - "#93389"
  - "#93390"
  - "#84758"
  - "#67758"
  - "#67761"
  - "#93395"
  - "#59214"
  - "#93397"
  - "#59898"
  - "#63112"
  - "#67734"
  - "#68537"
  - "#70056"
  - "#70471"
  - "#74223"
  - "#75127"
  - "#75198"
  - "#75218"
cluster_refs:
  - "#91729"
  - "#82303"
  - "#91924"
  - "#91973"
  - "#92079"
  - "#93218"
  - "#92556"
  - "#93389"
  - "#93390"
  - "#84758"
  - "#67758"
  - "#67761"
  - "#93395"
  - "#59214"
  - "#93397"
  - "#59898"
  - "#63112"
  - "#67734"
  - "#68537"
  - "#70056"
  - "#70471"
  - "#74223"
  - "#75127"
  - "#75198"
  - "#75218"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.799Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 60

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91729 fix(msteams): trim streamed prefix in long-reply fallback to stop >4000-char double-post (regressed #59297 in #76262)

- bucket: needs_proof
- author: devinkuhn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:03:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Restores streamed-prefix suppression for MS Teams long-reply block fallback. When native streaming fails mid-delivery (e.g. Teams 4000-char limit) or `finalize()` falls back after a suppressed stream close, block delivery now sends only the **un-str

### #82303 feat(telegram): add progress assistant preview lane

- bucket: needs_proof
- author: Fuma2013
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, agents, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:03:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `streaming.progress.assistantPreview` to enable assistant partial previews while staying in `mode: "progress"` - keep the existing Telegram progress/tool/status draft on the answer lane and stream assistant partial text on a separate transient

### #91924 feat(macos): add Simplified Chinese (zh-Hans) localization for InfoPlist

- bucket: needs_proof
- author: Demon904050
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: macos, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T18:04:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add Simplified Chinese (`zh-Hans`) localization for the macOS app bundle, enabling native permission dialogs to display in Chinese when the system language is set to Chinese. ## Changes 1. **`Info.plist`** — add `CFBundleLocalizations = [en, zh-Hans

### #91973 Improve realtime voice-call consult progress

- bucket: needs_proof
- author: moellenbeck
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: voice-call, app: web-ui, gateway, size: L, extensions: openai, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:05:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - stabilizes realtime voice-call barge-in around provider speech-started events and queued telephony audio - adds configurable working responses plus progress talkback for long-running openclaw_agent_consult calls - exposes workingResponseMessage in v

### #92079 [AI] fix(memory): auto-fix providerKey mismatch from CLI index --force

- bucket: needs_proof
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:05:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary MemoryIndexManager can encounter a stale FTS-only sentinel providerKey written by CLI `memory index --force` before provider initialization. The auto-fix in `refreshIndexIdentityDirty()` detects the exact FTS-only sentinel hash and replaces it with

### #93218 feat: add session stream mode command

- bucket: needs_proof
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: slack, channel: telegram, size: M, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:06:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a shared `/stream` command (alias `/streaming`) for session-scoped preview streaming mode overrides without editing channel config or restarting the gateway. - Persists the canonical mode on `SessionEntry.streamingMode`; accepted modes are `o

### #92556 feat(llm): add Inworld as built-in llm provider

- bucket: needs_proof
- author: smolskayanastassia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, extensions: inworld, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:09:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Inworld is currently a TTS-only plugin in OpenClaw. Users cannot use Inworld as an LLM provider for chat completions, despite Inworld offering an OpenAI-compatible LLM API with routing, tool calls, and reasoning. Why

### #93389 fix(memory-core): clear daily-ingestion sqlite namespace on dreaming repair

- bucket: needs_proof
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:15:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: `repairDreamingArtifacts()` (driven by `openclaw memory status --fix`) archives the dreaming session corpus and clears the migrated SQLite ingestion state, but it only clears the `dreaming-session-ingestion-files` and `dreaming-sessio

### #93390 #93381: Expose tool_use blocks in llm_output / agent_end hook payloads

- bucket: needs_proof
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:16:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Expose tool-use content blocks (`tool_use`) in the `llm_output` and `agent_end` hook event payloads via a new `toolUses` field. Each entry carries the tool `name` + `input`, enabling downstream supervisor plugins to enforce per-bot tool-level policy

### #84758 feat(subagents): add execution backend placement contract

- bucket: needs_proof
- author: napetrov
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T18:16:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds the first real implementation slice for #82017: `sessions_spawn` now accepts an optional execution placement request and validates it against `agents.executionBackends`. This PR keeps runtime behavior conservative: the built-in `local` `process

### #67758 fix(google): correct gemini preview model versions

- bucket: needs_proof
- author: eyjohn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:19:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Minor fix for incorrect model from existing, I didn't think the template was necessary given the model referenced doesn't exist, so this wouldn't work, and the default is actually specified correctly as -3-flash

### #67761 fix: remove truncated preview from inbound system events

- bucket: needs_proof
- author: jaredgalloway
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, channel: slack, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:19:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Removes the truncated 160-char message preview from system event headers for Slack, MS Teams, and Mattermost channels. ## Problem System events were including a truncated preview of the message body: ``` System: [2026-04-15 21:56:40 MDT] Slack DM fr

### #93395 feat(cron): add compact list responses

- bucket: needs_proof
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, agents, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:35:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an opt-in compact response mode for cron list calls. - `cron.list` now accepts `compact: true` and returns lightweight job summaries with `id`, `name`, `enabled`, `nextRunAtMs`, `scheduleKind`, and `lastRunStatus`. - `cron(action: "list")` expo

### #59214 Add user chat bubble color selector for macOS application

- bucket: needs_proof
- author: kihayu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: L, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T18:36:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Summary Describe the problem and fix in 2–5 bullets: - Problem: The macOS chat bubble color is hardcoded to a static blue, with no way for users to personalize it. - Why it matters: Users want visual customization of the chat interface to match their prefere

### #93397 fix(minimax): correct volume range warning to match inclusive max

- bucket: needs_proof
- author: Quratulain-bilal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: minimax, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:36:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The MiniMax T2A `vol` (volume) parameter is documented as the range `(0, 10]` — exclusive minimum, inclusive maximum (per the [official T2A API docs](https://platform.minimax.io/docs/api-reference/speech-t2a-http): `exclusiveMinimum: 0`, `maximum: 1

### #59898 fix(agents): handle explicit empty tool lists in system prompt

- bucket: needs_proof
- author: martinfrancois
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:36:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: when tools are explicitly disabled for a session, OpenClaw can still build a prompt that looks partly like a normal tool-enabled session. That can leave behind leaked skills content or other to

### #63112 fix(cron): warn when --system-event on main session contains shell commands

- bucket: needs_proof
- author: liaoandi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: M, triage: blank-template, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T18:37:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `cron add --system-event "./run.sh" --session main` and similar commands used to create or edit the job silently even though main-session system events do not execute shell commands. - Adds a shared `looksLikeShellCommand()` helper for common runt

### #67734 fix(feishu): silence sdk logs during setup probe

- bucket: needs_proof
- author: zhyongrui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:38:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - silence Feishu SDK logger output during setup/status probing - avoid reusing the shared runtime client when a custom probe logger is supplied - add regression coverage for probe/client logger behavior ## Testing - node scripts/run-vitest.mjs run e

### #68537 [codex] fix(telegram): allow ACP bindings for direct chats

- bucket: needs_proof
- author: TTTT-T
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: telegram, gateway, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:38:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This change allows top-level Telegram `bindings[]` entries with `type: "acp"` to target direct chats in addition to forum topics. ## Root Cause Telegram ACP binding normalization and matching only accepted topic-shaped conversation ids. Plain direct

### #70056 fix(gateway): clean up store and set running=false on stop timeout

- bucket: needs_proof
- author: garnetlyx
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, stale, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:39:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `stopChannel` timeout path set `running: true` and skipped `store.aborts`/`store.tasks` cleanup, leaving a dead promise that blocked all future starts and fooled the health monitor - Fix: set `running: false`, clean up store entries, and add `last

### #70471 Feishu: harden comment reply delivery and bot identity refresh

- bucket: needs_proof
- author: wittam-01
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, stale, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:39:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu comment handling could process notices not meant for the current bot, duplicate replies after tool-visible replies, fail on raw `<` / `>` text, and reuse stale bot identity. - Why it matters: This caused misrouted comment handling,

### #74223 plugin-sdk: restore Feishu pairing facade

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: S, triage: needs-real-behavior-proof, dependencies-changed, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:39:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #75127 fix: guard session reset prompts against fabricated data

- bucket: needs_proof
- author: afurm
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:40:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Bare `/new` and `/reset` startup prompts did not explicitly prevent models from presenting invented data as user-provided context. - Why it matters: On session reset, a model can fabricate realistic calendar/email/JSON-style data and act

### #75198 fix(models): resolve provider-qualified aliases in session switches

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:40:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #75218 feat(web-fetch): add Tavily as a native `web_fetch` provider

- bucket: needs_proof
- author: lakshyaag-tavily
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: tavily, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:40:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Tavily ships as a `web_search` provider and exposes `tavily_extract` as a tool, but `tools.web.fetch` only auto-detects Firecrawl. Users with a Tavily key have no first-class `web_fetch` path. - Why it matters: parity with the Tavily `web
