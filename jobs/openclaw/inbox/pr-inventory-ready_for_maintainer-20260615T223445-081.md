---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-081
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
  - "#86719"
  - "#86730"
  - "#86733"
  - "#86744"
  - "#86759"
  - "#86873"
  - "#86915"
  - "#86925"
  - "#87255"
  - "#87300"
  - "#87373"
  - "#87393"
  - "#87478"
  - "#87481"
  - "#87530"
  - "#87560"
  - "#87601"
  - "#91988"
  - "#87831"
  - "#87912"
  - "#88103"
  - "#88159"
  - "#91217"
  - "#93222"
  - "#88449"
cluster_refs:
  - "#86719"
  - "#86730"
  - "#86733"
  - "#86744"
  - "#86759"
  - "#86873"
  - "#86915"
  - "#86925"
  - "#87255"
  - "#87300"
  - "#87373"
  - "#87393"
  - "#87478"
  - "#87481"
  - "#87530"
  - "#87560"
  - "#87601"
  - "#91988"
  - "#87831"
  - "#87912"
  - "#88103"
  - "#88159"
  - "#91217"
  - "#93222"
  - "#88449"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.803Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 81

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #87255 fix(config): skip .openclaw append when OPENCLAW_HOME already names a state dir (#45765)

- bucket: ready_for_maintainer
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:59:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Setting `OPENCLAW_HOME=~/.openclaw` produces the nested directory `~/.openclaw/.openclaw/` and onboarding writes the config file to the wrong place. Reporter on Linux Kylin V10 / aarch64 (and macOS 15.4) documented a 100% reproduction rate on OpenCl

### #87300 feat: group model select with collapsible panel in Control UI

- bucket: ready_for_maintainer
- author: newbie-yu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:59:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Why does this matter now? What is the intended outcome? What is intentionally out of scope? What does success look like? What should reviewers focus on? <details> <summary>Summary guidance</summary> This PR descripti

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

### #87601 fix(docs): render onboarding CLI info callout

- bucket: ready_for_maintainer
- author: Muggle-akko
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:04:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the onboarding docs page renders the CLI step `<Info>` callout with garbled text on `/start/onboarding`. - Why it matters: readers can see mojibake instead of the optional-step note during onboarding. - What changed: rewrote the inline `<

### #91988 fix: preserve BOOTSTRAP.md in preseeded workspaces (#91931)

- bucket: ready_for_maintainer
- author: LiuwqGit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:06:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #91931: preseeded `SOUL.md` / `IDENTITY.md` / `USER.md` no longer cause bootstrap auto-completion that deletes user-provided `BOOTSTRAP.md` before first onboarding. - When `BOOTSTRAP.md` exists and `setupCompletedAt` is unset, completion evi

### #87831 perf: skip manifest normalization in status summary

- bucket: ready_for_maintainer
- author: ACSKamloops
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:07:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - `status`/`status --json` builds model labels for configured and persisted session rows in a shallow read-only path. - That path already avoids plugin/runtime model normalization, but it still let manifest model-id

### #87912 Handle Codex toolResult blocks in tool-result truncation

- bucket: ready_for_maintainer
- author: AdrianIp0204
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:08:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR makes the existing tool-result truncation helpers treat Codex protocol blocks with `type: "toolResult"` as text-bearing tool output. - Count `type: "toolResult"` content blocks when measuring tool-result text length. - Truncate those blocks

### #88103 Update Teams CLI install command

- bucket: ready_for_maintainer
- author: heyitsaamir
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:08:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Updates the Microsoft Teams setup docs to install `@microsoft/teams.cli` without the old `@preview` tag. ## Why Teams CLI is out of preview now, so the docs should point folks at the current stable package. Less vintage npm incantation, more happy s

### #88159 fix(cli): retry logs.tail after journal fallback in logs follow

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:09:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes `openclaw logs --follow` getting stuck on Linux systemd journal fallback after a transient local Gateway RPC outage or Gateway restart. When implicit local `logs.tail` fails in follow mode, the CLI can use the active systemd journal as a bridg

### #91217 feat(gateway): add deterministic dummy model (AI-assisted)

- bucket: ready_for_maintainer
- author: safrano9999
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T08:29:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `dummy/dummy` as an explicit “No AI - deterministic gateway only” model in the interactive default-model picker and support the same value when written directly to `openclaw.json`. - Return a deterministic help response after command and plugi

### #93222 fix(discord): add configurable REST API timeout

- bucket: ready_for_maintainer
- author: geekhuashan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: S, proof: supplied, proof: sufficient, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:35:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `channels.discord.apiTimeoutMs` to the Discord channel config surface and threads it into Discord REST request-client construction. Default behavior stays at `15000` ms. Configured values are accepted at both `channels.discord.apiTimeoutMs` and

### #88449 Fix home path replacement in shortenHomeInString utility

- bucket: ready_for_maintainer
- author: ashyyhere
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:44:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix `shortenHomeInString()` so it only replaces `display.home` when the match occurs at a real path boundary. - Prevents incorrect shortening of home-like substrings such as `/srv/openclaw-home-other/dir`. - Adds focused regression coverage for th
