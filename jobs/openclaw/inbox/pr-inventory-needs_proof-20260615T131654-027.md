---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-027
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
  - "#61396"
  - "#64064"
  - "#65398"
  - "#75554"
  - "#68127"
  - "#68197"
  - "#68537"
  - "#75127"
  - "#75140"
  - "#75218"
  - "#75228"
  - "#75299"
  - "#86551"
  - "#86554"
  - "#86898"
  - "#87961"
  - "#92962"
  - "#92983"
  - "#92989"
  - "#90324"
  - "#93028"
  - "#60383"
  - "#76545"
  - "#70348"
  - "#91462"
  - "#93045"
  - "#93030"
  - "#77653"
  - "#76140"
  - "#54830"
cluster_refs:
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
  - "#61396"
  - "#64064"
  - "#65398"
  - "#75554"
  - "#68127"
  - "#68197"
  - "#68537"
  - "#75127"
  - "#75140"
  - "#75218"
  - "#75228"
  - "#75299"
  - "#86551"
  - "#86554"
  - "#86898"
  - "#87961"
  - "#92962"
  - "#92983"
  - "#92989"
  - "#90324"
  - "#93028"
  - "#60383"
  - "#76545"
  - "#70348"
  - "#91462"
  - "#93045"
  - "#93030"
  - "#77653"
  - "#76140"
  - "#54830"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.477Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 27

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #61396 fix(i18n): add device/node pairing terms to zh-CN glossary

- bucket: needs_proof
- author: zeuming
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:07:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - The zh-CN translation pipeline confused openclaw devices list/approve with openclaw nodes pending/approve when translating the node host pairing section, because the glossary had no entries distinguishing the two pairing subsystems. - Added glossary 

### #64064 feat(anthropic): add advisor tool support [AI-assisted]

- bucket: needs_proof
- author: clearlift-paul
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, agents, size: XL, extensions: anthropic, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:09:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds support for Anthropic's **advisor tool** (beta: `advisor-tool-2026-03-01`), a server-side tool that lets Claude consult a separate model instance during inference. Also adds generic handling for all server-side tool blocks (`server_tool_use`, `

### #65398 fix(feishu): preserve top-level groupPolicy and avoid duplicate registration

- bucket: needs_proof
- author: bin448482
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, channel: feishu, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:09:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu had two regressions in the same flow: repeated tool/hook registration on plugin cache misses, and named-account config loads silently rewrote top-level `groupPolicy: "open"` back to `allowlist`. - Why it matters: repeated registrat

### #75554 [codex] Add plugin task lifecycle API

- bucket: needs_proof
- author: goldmar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, plugin: file-transfer, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:10:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a plugin-safe task run lifecycle API under `api.runtime.tasks.runs.bindSession(...).lifecycle` / `fromToolContext(...).lifecycle`. - Creates plugin-owned records as existing `cli` task runtime rows with required plugin-namespaced `taskKind`. 

### #68127 fix: prevent toLowerCase error when model.id or model.name is undefined

- bucket: needs_proof
- author: nightq
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:10:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the "f.toLowerCase is not a function" error that occurs in the agent:bootstrap hook when model.id or model.name is undefined. ## Root Cause In `canonicalizeLegacyResolvedModel()` (src/agents/pi-embedded-runner/model.ts), the code called `.trim

### #68197 feat(line): add optional requireMentionForNonText group gate

- bucket: needs_proof
- author: revision-co-ltd
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: line, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:10:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `requireMention: true` is set on a LINE group, text messages are correctly gated by `resolveInboundMentionDecision`, but non-text messages (image, sticker, video, audio, file, location) always bypass the gate via `canDetectMention: message.type

### #68537 [codex] fix(telegram): allow ACP bindings for direct chats

- bucket: needs_proof
- author: TTTT-T
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: telegram, gateway, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:11:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This change allows top-level Telegram `bindings[]` entries with `type: "acp"` to target direct chats in addition to forum topics. ## Root Cause Telegram ACP binding normalization and matching only accepted topic-shaped conversation ids. Plain direct

### #75127 fix: guard session reset prompts against fabricated data

- bucket: needs_proof
- author: afurm
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:16:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Bare `/new` and `/reset` startup prompts did not explicitly prevent models from presenting invented data as user-provided context. - Why it matters: On session reset, a model can fabricate realistic calendar/email/JSON-style data and act 

### #75140 feat(memory-core): record terminal task outcomes for dreaming feedback

- bucket: needs_proof
- author: keane-751892
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, scripts, size: M, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:16:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a plugin-sdk seam (`openclaw/plugin-sdk/task-events`) that lets plugins subscribe to the task registry's lifecycle events without owning the singleton observer that tests rely on. Multiple listeners can register in parallel via `addTaskRegistry

### #75218 feat(web-fetch): add Tavily as a native `web_fetch` provider

- bucket: needs_proof
- author: lakshyaag-tavily
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: tavily, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:16:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Tavily ships as a `web_search` provider and exposes `tavily_extract` as a tool, but `tools.web.fetch` only auto-detects Firecrawl. Users with a Tavily key have no first-class `web_fetch` path. - Why it matters: parity with the Tavily `web

### #75228 fix(macos): auto-repair stale gateway TLS pins on system-trusted hosts (#74848)

- bucket: needs_proof
- author: PfanP
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:16:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The macOS companion app pins gateway TLS leaf fingerprints with `required: true`. Until now, auto-repair of a stale pin only ran for **loopback** and **`.ts.net`** hosts (added in #75038). For any other `wss://` host — e.g. a self-hosted gateway beh

### #75299 feat(process): add starvation guard to priority command queue

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:16:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #79589 ## Problem Upstream added priority scheduling (foreground/normal/background) via insertion-sort at enqueue time (#82765). This works well for the common case but has no protection against indefinite starvation: a steady stream of foreground enqueu

### #86551 fix(agents): add missing DeepSeek V4 proxy models to reasoning_content replay set

- bucket: needs_proof
- author: liaoyl830
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:19:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - DeepSeek V4 models (`deepseek-v4-flash-free`, `big-pickle`) accessed through proxy providers (e.g. OpenCode Zen) lose `reasoning_content` in assistant message replay, causing 500 errors from the API - `isDeepSeek` detection only checks `endpointCl

### #86554 fix(agents): add missing DeepSeek V4 proxy models to reasoning_content replay set

- bucket: needs_proof
- author: liaoyl830
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:20:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - proxy providers like OpenCode Zen can expose DeepSeek V4 models through `opencode-native`, so endpoint-class detection alone does not preserve `reasoning_content` replay - add `deepseek-v4-flash-free` and `big-pickle` to the replay model allowlist

### #86898 fix(context-engine): resolve turn-maintenance livelock on Telegram DM sessions (#77340)

- bucket: needs_proof
- author: baghvn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:20:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Closes #77340. Under steady Telegram DM traffic, the deferred turn-maintenance worker livelocks. It waits for `resolveSessionLane(sessionKey)` to reach zero queue depth before committing — but that lane is also used by inference, so it never empties

### #87961 fix: recognize bundle-mcp as known synthetic plugin in tool policy allowlist

- bucket: needs_proof
- author: Tazio7
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T17:21:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `openclaw doctor` reports `bundle-mcp` as an "unknown allowlist entry" when it is included in `tools.allow`: ``` [tools] agents.main.tools.allow allowlist contains unknown entries (bundle-mcp). These entries won't match any tool unless the plugin is

### #92962 [AI-assisted] fix(feishu): let active followups reach queue

- bucket: needs_proof
- author: IWhatsskill
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:34:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu same-chat message dispatch waits behind the plugin sequential queue until the prior full agent turn finishes, so `messages.queue.mode = "collect"` follow-ups can reach the shared queue after the session is no longer active and beco

### #92983 fix(read): decode Windows legacy text files

- bucket: needs_proof
- author: pony-maggie
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:34:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Route read-tool text buffers through the existing Windows decoder so valid UTF-8 stays unchanged while invalid UTF-8 can fall back to the active Windows code page. - Add a read-tool regression that simulates Chinese Windows code page 936 and verifies

### #92989 fix(tools): auto-detect file encoding in read tool for GBK support

- bucket: needs_proof
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:34:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92664. The read tool always decoded files as UTF-8, producing garbled text when reading GBK-encoded files on Chinese Windows. ## What changed - Added `decodeFileBuffer()` in `src/agents/sessions/tools/encoding.ts`. - On win32, delegates to th

### #90324 fix(feishu): disable ambient proxy inheritance for WebSocket by default

- bucket: needs_proof
- author: googlerest
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:39:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #65799. Feishu WebSocket currently inherits ambient proxy environment variables (`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`) via `resolveAmbientNodeProxyAgent()`. When a proxy is configured for unrelated outbound traffic (e.g. Gemini API) and th

### #93028 fix(channels): expose runtime controls in CLI

- bucket: needs_proof
- author: llljjjwww333
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:41:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #75153 Adds `openclaw channels start`, `openclaw channels stop`, and `openclaw channels restart` so linked channel listeners can be controlled through the existing gateway `channels.start` / `channels.stop` RPCs without rerunning login or clearing auth. 

### #60383 fix(feishu): parse interactive card post-format fallback content

- bucket: needs_proof
- author: lskun
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:46:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `parseInteractiveCardContent()` to handle Feishu API post-format fallback content for interactive card messages. Fixes #60380 Related: #41609 #48281 ## Problem When reading card messages via `GET /im/v1/messages/{message_id}`, Feishu returns `bo

### #76545 fix(cron): sweep base cron sessions, not just run sessions

- bucket: needs_proof
- author: byungskers
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:49:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: `sweepCronRunSessions` was filtering with `isCronRunSessionKey`, which only matches run sessions (`agent:main:cron:run:...`). Base sessions (`agent:main:cron:<jobId>`) were never cleaned up. Switch to `isCronSessionKey` to include both base and run sessions. F

### #70348 Filter internal compaction artifacts from chat history

- bucket: needs_proof
- author: cholaolu-boop
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T17:49:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This patch addresses the dominant `chat.history` visibility path where internal compaction and memory-flush artifacts leak back into normal chat history. ## What This Fix Does - filters synthetic compaction markers from `chat.history` - filters inte

### #91462 fix(tts): strip reasoning content from summarization output

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:04:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When TTS summarization uses a reasoning model, the output includes chain-of-thought reasoning content (wrapped in `<thinking>` tags). The TTS engine reads this internal reasoning aloud, producing garbled speech output. - **Why now:** 

### #93045 fix(gateway): compute sessions.usage aggregate totals from all sessions, not just the limited page (fixes #76496)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:08:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Real behavior proof - **Behavior addressed:** `sessions.usage` aggregate totals (totalCost, totalTokens, etc.) were computed only from sessions within the `limit` page, silently excluding sessions beyond the limit. With >50 active sessions and default limit

### #93030 fix(infra): resolve ssh client from trusted system dirs (#83289)

- bucket: needs_proof
- author: manan-tech
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:23:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveSshConfig` and `startSshPortForward` spawned a hard-coded `/usr/bin/ssh`. On hosts where the system ssh client lives elsewhere, both SSH config discovery and gateway tunneling fail, notably: - **Windows**: the built-in OpenSSH client is at `

### #77653 fix(feishu): normalize reaction message IDs for API calls

- bucket: needs_proof
- author: yfge
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:24:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #34528 by separating Feishu synthetic reaction event IDs from Open Message IDs used for Feishu API calls. - Adds `normalizeFeishuOpenMessageId` and applies it to replies, reads, edits, card updates, media replies, reactions, pins, and stream

### #76140 fix(memory): prevent cross-agent dreaming contamination (Bug #65374)

- bucket: needs_proof
- author: dryftr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XL, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:32:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a cross-agent identity contamination vector in the memory dreaming pipeline. When multiple agents share a workspace, `resolveSessionAgentsForWorkspace()` returns ALL agent IDs with zero isolation, allowing one agent's dreaming sweep to ingest 

### #54830 feat: context provenance metadata for injected bootstrap segments

- bucket: needs_proof
- author: jack91620
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:32:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add optional `provenance` metadata (`source`, `injectedAt`, `volatile`) to `EmbeddedContextFile` type - Bootstrap context files (SOUL.md, AGENTS.md, TOOLS.md, etc.) are now tagged with provenance when assembled by `buildBootstrapContextFiles()` - 

