---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-113
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
  - "#86607"
  - "#86710"
  - "#86719"
  - "#86730"
  - "#83612"
  - "#86733"
  - "#86744"
  - "#86759"
  - "#86873"
  - "#86915"
  - "#86925"
  - "#86971"
  - "#87255"
  - "#87273"
  - "#84896"
  - "#87300"
  - "#87349"
  - "#87373"
  - "#87393"
  - "#87478"
  - "#87481"
  - "#87529"
  - "#87530"
  - "#87560"
  - "#87568"
cluster_refs:
  - "#86607"
  - "#86710"
  - "#86719"
  - "#86730"
  - "#83612"
  - "#86733"
  - "#86744"
  - "#86759"
  - "#86873"
  - "#86915"
  - "#86925"
  - "#86971"
  - "#87255"
  - "#87273"
  - "#84896"
  - "#87300"
  - "#87349"
  - "#87373"
  - "#87393"
  - "#87478"
  - "#87481"
  - "#87529"
  - "#87530"
  - "#87560"
  - "#87568"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.215Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 113

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #86607 fix(gateway): log hook rejection diagnostics

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:56:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Linked context Addresses #69192 (JSON rejection paths only). ## Summary - Add compact, sanitized warning logs for authenticated Gateway hook JSON rejection paths. - Preserve existing hook HTTP statuses, response bodies, auth behavior, mapping behavior, and 

### #86710 fix: summarize gateway startup sidecars

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, commands, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:56:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #14861. - Add a small redacted Gateway startup outcome summary after sidecars settle and before readiness is logged. - Surface the missing Gmail watcher account case as `gmail-watcher=skipped (no gmail account configured)`. - Keep raw except

### #86719 fix(skills): retarget stale plugin skill symlinks

- bucket: ready_for_maintainer
- author: stevenepalmer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:56:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes plugin skill publishing when a generated symlink points at an install path that no longer exists. - Adds regression coverage confirming a current skill with the same basename replaces the stale generated symlink instead of failing with EEXIS

### #86730 fix(agents): resolve /btw transcript to post-compaction file when stored entry points at checkpoint

- bucket: ready_for_maintainer
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:56:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #86393. After a Codex `/btw` side question hits an auto-compaction, the stored session entry can still reference the pre-compaction checkpoint transcript (`session-N.checkpoint.<id>.jsonl`). The Codex app-server binding is persisted next to th

### #83612 [codex] make workspace prompt routing selectable

- bucket: ready_for_maintainer
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XL, extensions: codex, proof: supplied, proof: sufficient, extensions: openrouter, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:57:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This rebuild turns the Codex workspace prompt routing from a forced token-efficiency change into an explicit, user-selectable prompt-surface policy. - Adds `plugins.entries.codex.config.workspacePromptSurface`: - `per_turn_context` (default): qualit

### #86733 fix(cron): extend main system event timeout

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, channel: whatsapp-web, app: web-ui, extensions: memory-core, cli, scripts, commands, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:57:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Linked context Closes #50621. ## Summary - Extend the cron outer watchdog only for main-session `systemEvent` jobs with `wakeMode: "now"`. - Preserve the existing 10-minute default for other `systemEvent` jobs, including `wakeMode: "next-heartbeat"`. - Pres

### #86744 fix(tasks): recover from corrupted task registry SQLite on startup

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, channel: whatsapp-web, app: web-ui, extensions: memory-core, cli, scripts, commands, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:57:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Gateway startup can fail with uncaught SQLite corruption errors when the shared OpenClaw state database (`state/openclaw.sqlite`) is malformed; the task registry now restores through this shared database opener. - Solution: Detect SQLite 

### #86759 fix(webchat): broadcast agent TTS media final payloads

- bucket: ready_for_maintainer
- author: spacegeologist
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:57:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #81468. - Bridges WebChat-managed agent-run TTS/media supplements into the final `chat` broadcast payload, so the live WebChat path receives the audio attachment that was already appended to the transcript. - Keeps media-bearing `block` repl

### #86873 fix(line): add chunk-idle timeout to inbound media download

- bucket: ready_for_maintainer
- author: masatohoshino
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: line, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:58:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `downloadLineMedia` in `extensions/line/src/download.ts` wraps the LINE Messaging API `getMessageContent` response in a `for-await` loop with no read deadline. When the LINE CDN returns HTTP headers but then stalls the body stream, the function bloc

### #86915 docs(doctor): clarify unknown lint selections

- bucket: ready_for_maintainer
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:58:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - update the doctor CLI docs for unknown `--only` check ids - document that `doctor --lint` now returns a `core/doctor/lint-selection` error instead of a false-clean run - mention `findings` alongside `checksRun` and `checksSkipped` for focused gate

### #86925 i18n(zh-CN): Fix and unify Chinese translation

- bucket: ready_for_maintainer
- author: YDYm233
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:58:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: The zh-CN translation file had 3 issues: (1) new panel fields were untranslated (English fallback), (2) manually-reviewed translations from the previous PR were overwritten by the CI locale sync script, (3) terminology was inconsisten

### #86971 docs(backup): describe manual restore flow

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:58:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Document that `openclaw backup` currently supports create/verify, not a first-class restore command. - Add manual restore guidance for trusted archives: verify before extraction, stage into a private temporary directory with cleanup, inspect `mani

### #87255 fix(config): skip .openclaw append when OPENCLAW_HOME already names a state dir (#45765)

- bucket: ready_for_maintainer
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:59:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Setting `OPENCLAW_HOME=~/.openclaw` produces the nested directory `~/.openclaw/.openclaw/` and onboarding writes the config file to the wrong place. Reporter on Linux Kylin V10 / aarch64 (and macOS 15.4) documented a 100% reproduction rate on OpenCl

### #87273 fix(talk): diagnose invalid OpenAI realtime auth

- bucket: ready_for_maintainer
- author: BSG2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: openai, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:59:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Talk configured for OpenAI Realtime could surface a raw provider error such as `Incorrect API key provided` when the available credential was an Azure AI Foundry / Azure OpenAI model key or OpenAI-compatible proxy 

### #84896 fix(memory): export LanceDB artifacts for wiki bridge

- bucket: ready_for_maintainer
- author: manisandher
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-lancedb, cli, scripts, agents, size: L, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:59:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add shared workspace public artifact listing for memory bridge consumers - make memory-lancedb export a deterministic Markdown bridge artifact for local file-backed dbPath values - derive LanceDB bridge artifact agent ids from configured memory wo

### #87300 feat: group model select with collapsible panel in Control UI

- bucket: ready_for_maintainer
- author: newbie-yu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:59:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Why does this matter now? What is the intended outcome? What is intentionally out of scope? What does success look like? What should reviewers focus on? <details> <summary>Summary guidance</summary> This PR descripti

### #87349 Allow host-local APK media sends

- bucket: ready_for_maintainer
- author: dankarization
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:00:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow host-read local `.apk` attachments through the existing safe-document gate - preserve `.apk` as `application/vnd.android.package-archive` in MIME mapping - add targeted media/outbound tests and a docs note for the host-local APK case ## Why 

### #87373 Add stale Claude session janitor

- bucket: ready_for_maintainer
- author: cablackmon
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, triage: refactor-only, triage: risky-infra, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:01:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add scripts/janitor/clean_claude_sessions.py for conservative Claude CLI JSONL session cleanup - default to dry-run with explicit --delete/--live for live cleanup - enforce a 14-day minimum age floor and append live summaries to memory/janitor.log

### #87393 fix(media): suppress local whisper progress transcripts

- bucket: ready_for_maintainer
- author: kesslerio
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:01:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What CLI audio transcription now treats deterministic transcript-file outputs as authoritative instead of falling back to progress/status stdout. This covers: - `whisper-cli` with `-otxt` / `--output-txt` and `-of` / `--output-file` - `whisper` with `--outp

### #87478 fix(codex): project MCP OAuth config

- bucket: ready_for_maintainer
- author: konarkm
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: M, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:01:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - OpenClaw-owned remote MCP server config could not carry the OAuth descriptors Codex needs for OAuth-capable remote MCP servers. - As a result, users could configure a remote MCP server in `mcp.servers`, but the Cod

### #87481 fix(agents): broadcast agent stream=thinking to gateway clients without channel callback (supersedes #79687)

- bucket: ready_for_maintainer
- author: LikeDege
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: matrix, channel: telegram, channel: zalo, gateway, cli, scripts, commands, docker, agents, size: L, extensions: codex, proof: supplied, proof: sufficient, extensions: google, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T08:01:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Decouple `streamReasoning` from the optional `onReasoningStream` channel callback so `chat.send`-originated runs (webchat / Control UI / WebSocket / ACP / cron auto-reply / heartbeat) receive live `agent.stream === "thinking"` events when `reasoning

### #87529 Add generic webhooks plugin

- bucket: ready_for_maintainer
- author: marchpure
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: XL, extensions: webhooks, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:03:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a configurable `webhooks` plugin for authenticated inbound webhook routes - support route-specific auth, event allowlists, idempotency, fast ACK, TaskFlow dispatch, scheduled agent dispatch, delivery-only routes, and completion delivery - spli

### #87530 fix(discord): account-scoped voice groups + delayed autoJoin safety net

- bucket: ready_for_maintainer
- author: geekhuashan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:03:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Scopes `@discordjs/voice` connections by account ID (`group: "openclaw:<accountId>"`) to prevent multi-bot connection collisions - Delays initial autoJoin by 6s so voice gateway state settles after READY/RESUMED before joining - Adds 8s and 75s de

### #87560 fix(agents): isolate RTL lines on outbound assistant text

- bucket: ready_for_maintainer
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T08:03:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Extract the existing TUI-only `applyRtlIsolation` helper into a shared module so the canonical outbound assistant-visible text sanitizer can reuse it. - Apply U+2067/U+2069 line-level isolation in the `delivery` profile of `sanitizeAssistantVisibl

### #87568 feat(ui): add KaTeX math rendering support

- bucket: ready_for_maintainer
- author: tered12114-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: XL, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T08:03:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add KaTeX-based mathematical formula rendering to OpenClaw chat interface. When `ui.mathRendering` is set to `"katex"`, LaTeX math expressions (both inline `$...$` and display `$$...$$`) are rendered as beautifully formatted math in chat messages. #

