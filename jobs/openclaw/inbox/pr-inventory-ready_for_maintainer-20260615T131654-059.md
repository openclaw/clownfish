---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-059
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
  - "#79861"
  - "#79880"
  - "#79892"
  - "#79913"
  - "#79959"
  - "#79985"
  - "#79999"
  - "#80139"
  - "#80142"
  - "#80193"
  - "#80235"
  - "#80243"
  - "#80246"
  - "#80293"
  - "#80383"
  - "#80392"
  - "#80422"
  - "#80455"
  - "#80473"
  - "#80499"
  - "#80596"
  - "#80666"
  - "#80670"
  - "#80726"
  - "#80770"
  - "#80779"
  - "#80805"
  - "#80818"
  - "#80889"
  - "#80916"
  - "#80929"
  - "#80957"
  - "#80965"
  - "#80985"
  - "#81008"
  - "#81019"
  - "#81047"
  - "#81053"
  - "#81157"
  - "#81184"
cluster_refs:
  - "#79861"
  - "#79880"
  - "#79892"
  - "#79913"
  - "#79959"
  - "#79985"
  - "#79999"
  - "#80139"
  - "#80142"
  - "#80193"
  - "#80235"
  - "#80243"
  - "#80246"
  - "#80293"
  - "#80383"
  - "#80392"
  - "#80422"
  - "#80455"
  - "#80473"
  - "#80499"
  - "#80596"
  - "#80666"
  - "#80670"
  - "#80726"
  - "#80770"
  - "#80779"
  - "#80805"
  - "#80818"
  - "#80889"
  - "#80916"
  - "#80929"
  - "#80957"
  - "#80965"
  - "#80985"
  - "#81008"
  - "#81019"
  - "#81047"
  - "#81053"
  - "#81157"
  - "#81184"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.485Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 59

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #79861 fix(gateway): handle exec approvals persistence errors

- bucket: ready_for_maintainer
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:15:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Wrap local `exec.approvals.get` and `exec.approvals.set` gateway handlers in structured unavailable-error handling. ## Why May gateway logs showed approval RPC traffic (`exec.approval.list`) but local approvals persistence paths could still throw throu

### #79880 feat(doctor): suppress warnings for docker-out-of-docker architectures

- bucket: ready_for_maintainer
- author: jlapenna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:16:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add environment variables to suppress Docker-specific warnings. In proxy-managed Docker-out-of-Docker architectures, the doctor commands report false positives for bind warnings and multiple state directories. This adds `OPENCLAW_IGNORE_BIND_WARNING` and `OPEN

### #79892 fix(daemon/launchd): cap unbounded gateway stdout/stderr log growth (refs #79422)

- bucket: ready_for_maintainer
- author: adhirajhangal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:16:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this fixes `gateway.err.log` (and `gateway.log`) under `~/.openclaw/logs/` can grow without bound on macOS because the LaunchAgent plist sets `StandardOutPath` / `StandardErrorPath` to fixed paths and launchd appends forever. The reporter on #79422 saw

### #79913 fix(config): apply SPAWN_ALLOWLIST env for sessions_spawn (#79490)

- bucket: ready_for_maintainer
- author: Jefsky
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:17:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Applies `OPENCLAW_SPAWN_ALLOWLIST` or `SPAWN_ALLOWLIST` during config load → `agents.defaults.subagents.allowAgents`. - Supports `*`, comma-separated ids, JSON string arrays. Env wins when set (Docker-focused). Fixes #79490 ## Test plan - [x] `pnp

### #79959 feat(gateway): allow chat.inject to override provider attribution via originAgent

- bucket: ready_for_maintainer
- author: wherewolf87
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, scripts, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:18:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an optional `originAgent` field to `ChatInjectParamsSchema` and persists it as a **separate, dedicated attribution field** on the injected assistant transcript entry. The pre-existing `(provider: "openclaw", model: "gateway-injected")` sentinel

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

### #80142 fix(skills): warn for untrusted local sources

- bucket: ready_for_maintainer
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, cli, commands, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:22:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #57535 ## Problem summary Local skills from workspace, `.agents`, managed, and extra skill roots were shown as ordinary ready/blocked skills. Operators had no first-class status signal distinguishing ClawHub/bundled skills from local skill files that sho

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

### #80243 [codex] Further optimize Telegram media and reply context flow

- bucket: ready_for_maintainer
- author: safzanpirani
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:30:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add scoped indexes to the Telegram message cache so `recentBefore` and `around` avoid scanning and sorting the full cache - cache successful Telegram media resolutions by file identity and relevant runtime options - revalidate cached media paths b

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

### #80392 fix(gateway): disable startup trace monitor on startup failure

- bucket: ready_for_maintainer
- author: ejames-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, channel: matrix, gateway, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T21:33:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an explicit `startupTrace.close()` cleanup path in gateway startup tracing - call `startupTrace.close()` in the startup failure catch path so `monitorEventLoopDelay` is always disabled on failed startup - keep current extension type tests comp

### #80422 feat(android): add chat agent selector

- bucket: ready_for_maintainer
- author: bcperry
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: S, proof: supplied, proof: sufficient, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T21:34:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the Android chat surface could show multiple agents indirectly, but users had no explicit way to choose which configured gateway agent should receive new chat messages. - Why it matters: multi-agent OpenClaw setups need an obvious mobile 

### #80455 fix(doctor): suppress --fix trailer when no pending config changes remain

- bucket: ready_for_maintainer
- author: KeWang0622
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:34:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw doctor` (without `--fix`) prints `Run "openclaw doctor --fix" to apply changes.` on every run, even when nothing in the run actually had a pending config change. After a successful `--fix` settles the workspace, a follow-up plai

### #80473 fix(discord): resolve redundant type constituents in native-command-route

- bucket: ready_for_maintainer
- author: KhanCold
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:34:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(discord): resolve redundant type constituents in native-command-route Replace ReturnType-based type aliases with explicit non-any local types to eliminate oxlint no-redundant-type-constituents errors. - Use ConfiguredBindingRouteResult directly instead of 

### #80499 Fix Claude ACP config controls

- bucket: ready_for_maintainer
- author: qianhaoq
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: acpx, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:34:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - detect Claude ACP package and wrapper commands before forwarding config controls - skip unsupported timeout/Codex-style model values for Claude ACP - map generic thinking/reasoning controls to Claude ACP's effort key - add runtime tests covering C

### #80596 Expose transcript update emitter to plugins

- bucket: ready_for_maintainer
- author: WangBRen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:37:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - expose emitSessionTranscriptUpdate on plugin runtime events - keep onSessionTranscriptUpdate listener support unchanged - cover the runtime event surface in tests ## Test - pnpm exec vitest run src/plugins/runtime/index.test.ts

### #80666 Filter assistant process chatter from Dreaming session corpus

- bucket: ready_for_maintainer
- author: ArthurNie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:39:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #80664. Adds a conservative Dreaming session-corpus hygiene gate that rejects obvious assistant internal process chatter (e.g. `Assistant: Need commit PR`, `Assistant: Now inspect`, `Assistant: Oops ... poll`) before snippets enter session-corpus recall 

### #80670 fix(gateway): reduce WebChat ingress latency

- bucket: ready_for_maintainer
- author: AndyTane
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, agents, size: XL, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:39:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Persist WebChat user turns to the active session JSONL immediately after `chat.send` ACK and before agent dispatch enters the serialized session lane. - Pass an entry-scoped suppression marker through reply options, queued followups, and the embed

### #80726 fix(telegram): resolve DM topic thread ids

- bucket: ready_for_maintainer
- author: Audiofool934
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T21:40:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a shared Telegram helper that resolves thread ids from `message_thread_id` or Bot API `direct_messages_topic.topic_id` - use that helper across Telegram inbound message context, native commands, runtime handlers, and sequential keys - add regr

### #80770 fix(tools): let apply_patch inherit trusted exec mode

- bucket: ready_for_maintainer
- author: demonbane
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:40:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `apply_patch` stayed workspace-contained even when `exec` was explicitly configured as `security=full` and `ask=off`, forcing trusted owner/operator setups to manage a second, protected `tools.exec.applyPatch.workspaceOnly=false` knob. - 

### #80779 fix(devices): always route stale-approve operator to openclaw devices list

- bucket: ready_for_maintainer
- author: luijoc
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:41:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted: drafted with Claude (Opus 4.7). Bug surfaced by the agent > while operating an OpenClaw 2026.5.7 ECS Fargate deployment in production; > full transcript available on request. > **Update (rebased 2026-05-14):** Post-refactor in `fe25ed214e` ("ref

### #80805 SUP-1563 restore channel responsiveness health

- bucket: ready_for_maintainer
- author: levineam
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: telegram, gateway, extensions: memory-core, scripts, commands, agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:42:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Surface real busy/active-run/stale activity state in channel status instead of relying only on connected transport state. - Record Telegram outbound activity with the correct account id and avoid treating bot-authored Discord messages as human inb

### #80818 googlechat: add appPrincipal setup input + docs

- bucket: ready_for_maintainer
- author: alexuser
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: googlechat, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:42:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #51694 - Adds optional `appPrincipal` to the shared `ChannelSetupInput` type so `setup-core.ts` typechecks cleanly. - Keeps the existing patch scope for Google Chat app principal support and documentation. - Tests run: extensions/googlechat vitest suite 

### #80889 fix(compaction): make overflow tuning configurable

- bucket: ready_for_maintainer
- author: hyspacex
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:45:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `agents.defaults.compaction.preemptiveOverflowRatio` for Pi tool-loop preemptive overflow threshold tuning - add `agents.defaults.compaction.maxOverflowAttempts` for Pi overflow compaction retry tuning - preserve current defaults (`0.9` ratio,

### #80916 fix(memory): skip empty dreaming placeholders

- bucket: ready_for_maintainer
- author: hyspacex
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:46:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop REM preview from writing the `No strong candidate truths surfaced` placeholder under `### Possible Lasting Truths` - defensively classify historical empty-result placeholders as contaminated so already-written daily memory candidates do not p

### #80929 fix(outbound): classify deterministic delivery errors

- bucket: ready_for_maintainer
- author: honor2030
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:46:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Classify deterministic outbound delivery failures for disallowed local media paths as permanent errors. - Classify overlong message failures as permanent errors. - Add regression coverage for both failure strings in the delivery queue policy tests

### #80957 fix: refresh status context window after model switch

- bucket: ready_for_maintainer
- author: chenyanchen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:47:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Ignore stale persisted contextTokens when /status sees a selected/default model change that is not an active fallback. - Preserve equivalent runtime aliases while doing the stale-context check, so CLI runtime aliases keep their live context window

### #80965 fix(channels): keep groupPolicy=open loose when groups dict has per-group overrides

- bucket: ready_for_maintainer
- author: voicewitness
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:48:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `channels.<provider>.groupPolicy: "open"` is documented as *"Groups bypass allowlists; mention-gating still applies."* (see `docs/channels/groups.md`), but `resolveChannelGroupPolicy` flipped the channel into allowlist mode the moment `channels.<p

### #80985 fix(cron): reject announce->webchat at create time and runtime

- bucket: ready_for_maintainer
- author: esqandil
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:48:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Reject `delivery.mode="announce"` + `delivery.channel="webchat"` cron configurations at three layers so the misconfiguration never reaches the runtime delivery path with the generic "Channel is required (no configured channels detected)" error. 1. **CL

### #81008 feat(memory-core): Memory Privacy Audit + Encrypted Backup

- bucket: ready_for_maintainer
- author: sagarkothapalli
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: zalo, app: web-ui, gateway, extensions: memory-core, cli, scripts, commands, agents, size: XL, triage: dirty-candidate, extensions: diagnostics-prometheus, extensions: deepinfra, proof: supplied, proof: sufficient, extensions: openrouter, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:48:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Build the first contribution as **privacy visibility plus encrypted backup**, not live encrypted memory. The feature adds a safe CLI workflow that audits where OpenClaw stores memory-related data, flags privacy risks, and supports encrypted export/i

### #81019 fix: track systemd unit provenance

- bucket: ready_for_maintainer
- author: WT-WSL
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: L, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:49:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: update-mode doctor needed a way to refresh untouched generated Linux systemd gateway units without overwriting operator-owned edits. - Why it matters: generated-unit improvements can roll forward safely while custom `ExecStart`, `Environm

### #81047 fix(cli-runner): drop volatile systemPromptHash from claude-cli live fingerprint

- bucket: ready_for_maintainer
- author: benjamin1492
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:49:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #81041. The `buildClaudeLiveFingerprint` helper in `src/agents/cli-runner/claude-live-session.ts` hashes `context.systemPrompt` as one of the keys deciding whether the active claude-cli subprocess is still valid. On chat channels (Telegram, D

### #81053 feat(whatsapp): per-group allowFrom for sender authorization

- bucket: ready_for_maintainer
- author: jack-stormentswe
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:49:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #69926. Brings WhatsApp to parity with Feishu, IRC, LINE, Telegram, and Nextcloud-talk by accepting a per-group `allowFrom` list on `channels.whatsapp.groups.<jid>` (and the matching account-scoped entry). A non-empty per-group `allowFrom` overrides (doe

### #81157 fix(agents): reject invalid process.action at the tool invocation boundary

- bucket: ready_for_maintainer
- author: adone0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:52:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `createProcessTool().execute` in `src/agents/bash-tools.process.ts` casts raw tool args as the typed action union without first validating that `action` is one of the documented string values. When a model emits `process({action: {}})` (the GLM/Z.

### #81184 fix(agents): dedup subagent completion announces to prevent double Slack post

- bucket: ready_for_maintainer
- author: EricCheungAO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:53:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a process-local dedup/coalesce wrapper around `deliverSubagentAnnouncement`, keyed on the announce's stable `directIdempotencyKey`, so racing lifecycle/retry paths cannot post a subagent completion twice in the requester's Slack thread. - Fai

