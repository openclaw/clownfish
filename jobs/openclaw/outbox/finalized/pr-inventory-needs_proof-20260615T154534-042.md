---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-042
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
  - "#74223"
  - "#91875"
  - "#74425"
  - "#74891"
  - "#74979"
  - "#75043"
  - "#75065"
  - "#75118"
  - "#75121"
  - "#75126"
  - "#75160"
  - "#75198"
  - "#75201"
  - "#75217"
  - "#75336"
  - "#89807"
  - "#76120"
  - "#76495"
  - "#76668"
  - "#76806"
  - "#93024"
  - "#41299"
  - "#55592"
  - "#59214"
  - "#59898"
cluster_refs:
  - "#74223"
  - "#91875"
  - "#74425"
  - "#74891"
  - "#74979"
  - "#75043"
  - "#75065"
  - "#75118"
  - "#75121"
  - "#75126"
  - "#75160"
  - "#75198"
  - "#75201"
  - "#75217"
  - "#75336"
  - "#89807"
  - "#76120"
  - "#76495"
  - "#76668"
  - "#76806"
  - "#93024"
  - "#41299"
  - "#55592"
  - "#59214"
  - "#59898"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.203Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 42

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #74223 plugin-sdk: restore Feishu pairing facade

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: S, triage: needs-real-behavior-proof, dependencies-changed, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:56:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #91875 fix(github-copilot): claude-opus-4.8 context window to 1M with reasoning support

- bucket: needs_proof
- author: yichu10c
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, extensions: github-copilot, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:00:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Updates model metadata in the GitHub Copilot plugin to match live Copilot endpoint capabilities. ## Changes **** - Added to with: - (was 128,000 — the default) - (was 8,192) - - - **** - Updated the bundled manifest entry for with the same values. #

### #74425 fix: ensure CLI processes exit after command completion on Windows

- bucket: needs_proof
- author: 1yihui
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:02:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes CLI processes (node.exe openclaw.mjs) remaining alive after command execution on Windows. The CLI entrypoint was missing process.exit() calls after commands completed, causing processes to hang. ## Changes - Added explicit `process.exit(proces

### #74891 fix(onboard): skip API-key prompt when user skipped installing the skill (#74382)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:05:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** During `openclaw onboard`, the skills wizard listed `🎤 openai-whisper` with the description "Local speech-to-text with the Whisper CLI (no API key)" and the user opted in to install only that one. They were then asked for `OPENAI_API

### #74979 fix(agents): guard promptActiveSession against pre-aborted signal

- bucket: needs_proof
- author: zhumengzhu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:06:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: When `runAbortController.signal` is already aborted before `promptActiveSession()` is called, JS evaluates `activeSession.prompt()` first (starting a new `Agent._runLoop` with a fresh `abortController`), then `abortable()` rejects imm

### #75043 Add provider-aware automatic TTS emotion mapping

- bucket: needs_proof
- author: xuruiray
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XL, extensions: openai, extensions: tts-local-cli, plugin: azure-speech, triage: dirty-candidate, proof: supplied, extensions: microsoft, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:06:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add opt-in `messages.tts.autoEmotion` support that infers a conservative abstract emotion from synthesized text. - Map inferred emotions into provider-specific controls: Volcengine `emotion`, Xiaomi `style`, OpenAI `instructions`, ElevenLabs `voic

### #75065 cron: optional custom job id and duplicate-id validation

- bucket: needs_proof
- author: Saitop
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, cli, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:06:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces #40218. The previous PR was closed when the old public fork was removed during repo hygiene cleanup; this is the same upstreamable change from the new public contribution fork. ## Summary - **Problem:** Cron jobs get random UUIDs; no way to set a stab

### #75118 feat(mcp): opt-in injectCallerContext for bundle MCP remote servers

- bucket: needs_proof
- author: david-garcia-garcia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:07:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When OpenClaw bundles MCP servers into agent CLIs, internal/sibling **remote MCP servers** had no first-class way to learn the OpenClaw caller (agent / account / message channel / session). - **Why it matters:** The loopback MCP alrea

### #75121 fix(telegram): preserve forwarded context in agent body

- bucket: needs_proof
- author: Komzpa
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: L, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:07:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep Telegram forwarded-message bodies clean in `BodyForAgent` - rely on typed `ForwardedFrom*` fields for single forwarded messages so prompt assembly renders the existing structured forwarded context block - preserve per-message forwarded attrib

### #75126 Add strict tool mode diagnostics and report contracts

- bucket: needs_proof
- author: JasonZHANGTianrui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:08:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Implements strict tool mode plumbing across embedded runs, transport streams, and OpenAI-compatible gateway responses. Changes include: Adds strict/warn/off tool strictness handling for tool argument repairs, alias repairs, and tool-name normalization. Surface

### #75160 fix(gateway): allow memory slot tool plugin invokes

- bucket: needs_proof
- author: Etnly
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:11:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add regression coverage for Gateway HTTP `/tools/invoke` fallback to plugin-backed memory slot tools - verify memory slot tool ids resolve successfully when they are cataloged core ids but only available through the configured plugin slot - verify

### #75198 fix(models): resolve provider-qualified aliases in session switches

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:12:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #75201 fix(agent): keep cleanup hooks isolated

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:12:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: PR #74543 fixed timeout fallback session keys, but CLI run cleanup still had a shared `finally` path where one failing cleanup hook could skip later cleanup. - Why it matters: timeout fallback now avoids the surfaced session-lock issue, b

### #75217 fix(agents): honor skipBootstrap at runtime injection path (#75184)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:13:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `agents.defaults.skipBootstrap: true` was advertised as a way to skip workspace bootstrap content, but it was a no-op for the runtime system-prompt injection. `systemPromptReport` still showed AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md

### #75336 feat(compaction): add identifier survival validation after summarization

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:15:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90010 Fixes #79588 ## Summary Improve compaction identifier survival with transcript-wide extraction and quality-guard retry hints. Fixes two security/correctness issues found during review: **Fix 1 — Sanitize string-encoded JSON arguments before extrac

### #89807 Bound WhatsApp outbound send duration

- bucket: needs_proof
- author: hussein1362
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:20:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a bounded timeout around WhatsApp Web socket send operations - fail stalled provider sends with a clear timeout error instead of waiting indefinitely - cover the timeout path with focused send API tests ## Tests - pnpm exec vitest run extensio

### #76120 [codex] Suppress empty native reasoning placeholders

- bucket: needs_proof
- author: pradeep7127
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:30:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop fabricating a visible reasoning placeholder when a native reasoning block has only a signature and no summary text. - Preserve normal reasoning display when the provider returns actual thinking/summary text. - Add regression coverage for payl

### #76495 fix(memory): load configured memory slot for runtime checks

- bucket: needs_proof
- author: jonathangu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:38:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- load the configured plugins.slots.memory plugin when memory runtime checks run before the full runtime registry is active\n- keep status/doctor/memory-search paths from reporting no active memory plugin when a memory plugin is installed in the co

### #76668 meta(issue-template): add dedicated docs bug report form

- bucket: needs_proof
- author: WadydX
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T16:42:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a dedicated docs bug issue form at `.github/ISSUE_TEMPLATE/docs_bug_report.yml` - keep existing runtime bug form unchanged - label docs defects as `bug` + `docs` ## Why Issue #76664 requests a docs-focused intake path so docs-only defects do n

### #76806 fix(agents): detect irreducible context overflow to prevent compaction loop DoS

- bucket: needs_proof
- author: jlapenna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:43:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add circuit breaker for irreducible context overflow and exhausted compaction attempts. When an agent's system prompt + user prompt alone exceeds the model's context window, compaction cannot reduce the overflow because it only removes session history messages

### #93024 fix(telegram): dead-letter ERR_MODULE_NOT_FOUND and poison-retry spooled updates (#92980)

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:56:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Telegram spooled updates that hit a permanent error were released for retry, picked up again on the same drain, and looped until the gateway became unresponsive. Issue [#92980](https://github.com/openclaw/openclaw/issues/92980) reports a ~10 minute 

### #41299 fix: add clear separator between metadata and user message

- bucket: needs_proof
- author: puppylpg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:01:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When a user message is passed to the LLM, the metadata blocks (sender info, conversation info, etc.) and the actual user message content are joined with only double newlines. This causes the LLM to sometimes misinterpret the message s

### #55592 fix(ui): sync message delete to session transcript backend

- bucket: needs_proof
- author: Hou-Yufan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, app: macos, app: web-ui, gateway, scripts, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:05:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Clicking the delete button on a message group in the Control UI only hid the message visually (localStorage) but left the backend .jsonl transcript untouched. The AI could still see the "deleted" content on the next turn. - **Why it m

### #59214 Add user chat bubble color selector for macOS application

- bucket: needs_proof
- author: kihayu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: L, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T17:06:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Summary Describe the problem and fix in 2–5 bullets: - Problem: The macOS chat bubble color is hardcoded to a static blue, with no way for users to personalize it. - Why it matters: Users want visual customization of the chat interface to match their prefere

### #59898 fix(agents): handle explicit empty tool lists in system prompt

- bucket: needs_proof
- author: martinfrancois
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:07:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: when tools are explicitly disabled for a session, OpenClaw can still build a prompt that looks partly like a normal tool-enabled session. That can leave behind leaked skills content or other to

