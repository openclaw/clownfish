---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-068
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
  - "#89997"
  - "#77921"
  - "#79336"
  - "#79401"
  - "#79547"
  - "#79572"
  - "#79593"
  - "#79619"
  - "#79626"
  - "#79635"
  - "#79655"
  - "#79724"
  - "#79811"
  - "#79852"
  - "#79855"
  - "#79861"
  - "#79892"
  - "#79985"
  - "#79999"
  - "#80139"
  - "#80193"
  - "#80235"
  - "#80246"
  - "#80293"
  - "#80383"
cluster_refs:
  - "#89997"
  - "#77921"
  - "#79336"
  - "#79401"
  - "#79547"
  - "#79572"
  - "#79593"
  - "#79619"
  - "#79626"
  - "#79635"
  - "#79655"
  - "#79724"
  - "#79811"
  - "#79852"
  - "#79855"
  - "#79861"
  - "#79892"
  - "#79985"
  - "#79999"
  - "#80139"
  - "#80193"
  - "#80235"
  - "#80246"
  - "#80293"
  - "#80383"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.801Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 68

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89997 fix(cli): suppress mcp serve startup stdout

- bucket: ready_for_maintainer
- author: kenners22
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T20:49:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat `openclaw mcp serve` as a stdio protocol mode for startup policy purposes. - Suppress doctor/config diagnostic notes from stdout for MCP serve so stdout remains JSON-RPC only. - Add a startup-policy regression test and changelog entry. ## Te

### #77921 feat(inworld): default to inworld-tts-2 (Realtime TTS-2)

- bucket: ready_for_maintainer
- author: cshape
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, extensions: tts-local-cli, extensions: inworld, plugin: azure-speech, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T20:53:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `inworld-tts-2` to the bundled Inworld TTS provider as the new default, while keeping `inworld-tts-1.5-max` and `inworld-tts-1.5-mini` as valid options. Updates types, the plugin manifest, and docs accordingly. ## Changes - `extensions/inworld/

### #79336 fix(voice-call): auto-respond on the webhook event transcript path

- bucket: ready_for_maintainer
- author: dvy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: voice-call, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:58:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #79118. ## Summary - Wire `processParsedEvents` (the generic webhook event path used by providers without OpenClaw streaming integration — Telnyx and Plivo today) to fire `handleInboundResponse` after a final `call.speech` event for inbound or conversat

### #79401 feat(reply): emit structured runtime incidents

- bucket: ready_for_maintainer
- author: TnzGit
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:59:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a typed `incident` agent event for runtime fallback failures - classify reply-runner fallbacks into command lane timeouts, response-generation timeouts, session-history desync, or generic runner failures - keep the existing user-visible fallba

### #79547 fix(memory): skip runtime cron promotion

- bucket: ready_for_maintainer
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:05:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skip the internal runtime-only event prompt and its immediate assistant response when exporting session JSONL for memory ingestion - persist an internal `__openclaw.runtimeOnlyEvent` marker on runtime-only user prompts so user-typed marker text ca

### #79572 fix(google): use parameters not parametersJsonSchema in realtime FunctionDeclarations

- bucket: ready_for_maintainer
- author: happydog-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:07:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Switch the Gemini Live realtime voice provider's `FunctionDeclaration` from `parametersJsonSchema` to `parameters` so the preview audio models actually honor tool parameter schemas. ## The bug The Live API preview audio models (`gemini-2.5-flash-nat

### #79593 fix(message-format): honor caller --limit for read, pins and search

- bucket: ready_for_maintainer
- author: pahuchi-joe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T21:08:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `renderMessageList` in `src/commands/message-format.ts` truncated CLI output with a hardcoded `messages.slice(0, 25)`. The CLI exposed `--limit` for `message read`, `message pins`, and Discord `message search`, and providers honored the u

### #79619 docs(notion): make allowlist examples direct

- bucket: ready_for_maintainer
- author: qkal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:09:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the bundled Notion skill documented shell-local `NOTION_KEY=$(cat ...)` setup and multi-line `curl` examples that are hostile to strict exec allowlists. - Why it matters: users running `security=allowlist` with `ask=off` can follow the bu

### #79626 [codex] Fix image describe MIME detection

- bucket: ready_for_maintainer
- author: justinbao19
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:10:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes `openclaw infer image describe` so local image files pass their detected MIME type into the media-understanding runtime. Previously the CLI resolved the file path but did not pass a MIME type to `describeImageFile` / `describeImageFileWithMode

### #79635 fix(sessions): drop dead-end orphan entries when retry forks parentId chain (#48810)

- bucket: ready_for_maintainer
- author: jeffrey701
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:10:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Reported by @taohaowei in #48810: when compaction retries against a session JSONL file, the original (failed) compaction event and the successful retry both get appended under the same `parentId`. One side becomes a dead-end (no descendants), the o

### #79655 Prune completed Codex Responses tool replay

- bucket: ready_for_maintainer
- author: fanfanliu964-web
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:11:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - prune completed OpenAI Codex native Responses tool-call replay after a later assistant/user turn has consumed the tool output - keep active tail function call outputs so tool continuation still works - add synthetic regression coverage for complet

### #79724 fix(agent): detect CJK terminal continuation promises

- bucket: ready_for_maintainer
- author: boyzcl
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:12:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes terminal-turn holes in strict-agentic recovery for Chinese/CJK conversations. Today the planning-only guard recognizes English future-action promises such as `I'll ...`, `next I'll ...`, and `let me ...`, but it does not recognize comm

### #79811 fix(cron): avoid delivered status for empty outbound receipts

- bucket: ready_for_maintainer
- author: indulgeback
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:13:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #79753. Cron announce/direct delivery could still treat an outbound adapter result with no platform delivery identity as a successful send on text/media paths. That lets a run show `delivered: true` even though the channel adapter produced no

### #79852 fix(memory-core): apply temporal decay to session-reset archive paths

- bucket: ready_for_maintainer
- author: buyitsydney
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:15:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `memorySearch.query.hybrid.temporalDecay` is silently a no-op for session-reset archives in real deployments. Enabling it ends up *demoting* the curated `memory/YYYY-MM-DD.md` notes while leaving the much larger pool of stale session transcripts at

### #79855 plugin SDK: add inbound_activity hook + discord emit points

- bucket: ready_for_maintainer
- author: AriAriXO
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: discord, size: M, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:15:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a new plugin hook `inbound_activity` that lets a sibling plugin participate in per-channel inbound debouncing without owning the channel inbound flow. Currently `@openclaw/discord` owns its `createChannelInboundDebouncer` privately; `inbound_cl

### #79861 fix(gateway): handle exec approvals persistence errors

- bucket: ready_for_maintainer
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:15:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Wrap local `exec.approvals.get` and `exec.approvals.set` gateway handlers in structured unavailable-error handling. ## Why May gateway logs showed approval RPC traffic (`exec.approval.list`) but local approvals persistence paths could still throw throu

### #79892 fix(daemon/launchd): cap unbounded gateway stdout/stderr log growth (refs #79422)

- bucket: ready_for_maintainer
- author: adhirajhangal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:16:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this fixes `gateway.err.log` (and `gateway.log`) under `~/.openclaw/logs/` can grow without bound on macOS because the LaunchAgent plist sets `StandardOutPath` / `StandardErrorPath` to fixed paths and launchd appends forever. The reporter on #79422 saw

### #79985 docs+tests: clarify agents.list visibility scope across CLI and Gateway

- bucket: ready_for_maintainer
- author: Kansodata
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:18:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - document the visibility-scope difference between `openclaw agents list` (config-scoped) and Gateway `agents.list` (runtime-scoped) - add a focused gateway test proving intentional divergence when `agents.list` is not explicitly configured - keep b

### #79999 fix(agents): honor path for gateway config.get

- bucket: ready_for_maintainer
- author: Alexander-Green
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:19:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the agent uses the `gateway` tool action `config.get` with a `path` argument, the current implementation ignores `path` and always returns the full gateway `config.get` snapshot. In real deployments the gateway `config.get` response is a large

### #80139 fix: record cron delivery failures as warnings

- bucket: ready_for_maintainer
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, scripts, agents, size: L, extensions: qa-lab, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:21:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #49190. ## Problem summary Cron isolated-agent runs currently collapse final delivery failures into the primary `error` run status even when the agent execution itself succeeded. That makes notification/channel failures look like execution failures, incr

### #80193 fix(acp): reject fractional runtime timeouts

- bucket: ready_for_maintainer
- author: yxjsxy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:23:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - reject fractional numeric ACP runtime timeout patches instead of silently rounding them - add regression coverage for fractional `timeoutSeconds` values ## Real behavior proof **Behavior or issue addressed:** ACP runtime option validation should r

### #80235 feat(discord): add implicit reply mention policy

- bucket: ready_for_maintainer
- author: JiehoonKwak
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:29:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #80234. Adds `channels.discord.implicitReplyMentions`: ```json5 { fromUsers: true, fromBots: true } ``` Defaults preserve current behavior. Multi-bot deployments can set `fromBots: false` so bot-authored native replies do not wake another bot via the im

### #80246 feat(cron): include event time in failure alerts

- bucket: ready_for_maintainer
- author: haishmg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T21:30:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #77497. Cron failure notifications now include the failed event time instead of relying only on the delivery timestamp. The timestamp uses the cron schedule timezone when present and falls back to UTC for non-cron schedules or missing timezon

### #80293 fix: apply thread routing to plugin actions

- bucket: ready_for_maintainer
- author: artdaal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:31:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - apply existing outbound thread-id resolution to targeted plugin-owned message actions before local/gateway dispatch - cover targeted plugin actions such as stickers so Telegram/forum thread ids are preserved - add regression coverage for auto-thre

### #80383 acp: cancel queued SessionActorQueue items on caller abort

- bucket: ready_for_maintainer
- author: helaskeutuja
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:32:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR is narrower than #52747 and targets a different failure mode: it makes already-enqueued `SessionActorQueue` items cancellable on caller abort, so `pendingBySession` does not stay inflated when the predecessor tail never settles. Complementary to #52747
