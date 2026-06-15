---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-100
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
  - "#90738"
  - "#43493"
  - "#79397"
  - "#79910"
  - "#79982"
  - "#79990"
  - "#80453"
  - "#80497"
  - "#80681"
  - "#80707"
  - "#80928"
  - "#80981"
  - "#81258"
  - "#81572"
  - "#81786"
  - "#91660"
  - "#84028"
  - "#84060"
  - "#84140"
  - "#84156"
  - "#84157"
  - "#84288"
  - "#84389"
  - "#90226"
  - "#90517"
cluster_refs:
  - "#90738"
  - "#43493"
  - "#79397"
  - "#79910"
  - "#79982"
  - "#79990"
  - "#80453"
  - "#80497"
  - "#80681"
  - "#80707"
  - "#80928"
  - "#80981"
  - "#81258"
  - "#81572"
  - "#81786"
  - "#91660"
  - "#84028"
  - "#84060"
  - "#84140"
  - "#84156"
  - "#84157"
  - "#84288"
  - "#84389"
  - "#90226"
  - "#90517"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.213Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 100

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90738 fix(msteams): read file attachments on Teams channel messages (team GUID + channel fallback + thread-reply URL)

- bucket: ready_for_maintainer
- author: colton-octaria
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:25:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes inbound **file attachments on Microsoft Teams channel messages** (`@openclaw/msteams`). Three independent bugs meant the agent could never read a file attached in a channel — and for thread replies it silently returned the *thread root's* file

### #43493 feat: configure metadata (contextWindow, maxTokens, etc.) for custom provider setup

- bucket: ready_for_maintainer
- author: IdrisHanafi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: L, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T00:36:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: `openclaw configure --section model` sets up providers and auth but never prompts for model metadata (contextWindow, maxTokens, reasoning, input types, cost). Users must hand-edit config or run

### #79397 fix(nextcloud-talk): parse structured mention payloads

- bucket: ready_for_maintainer
- author: iclem
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: nextcloud-talk, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:36:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem 1 — mention parsing:** Nextcloud Talk webhooks deliver messages as structured JSON (`{"message":"hi {mention-user1} !","parameters":{"mention-user1":{"type":"user","id":"agent",...}}}`) per the documented bot API spec — not plain text. T

### #79910 fix(sessions): recover store from stale temp artifacts safely

- bucket: ready_for_maintainer
- author: wAngByg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: blank-template, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:37:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: an interrupted session-store atomic write can leave the primary `sessions.json` zero-byte or malformed while an older writer temp artifact still contains valid session metadata. - **Fix**: `loadSessionStore` can now recover from stale

### #79982 feat(tools): introduce group:core for all built-in core tools

- bucket: ready_for_maintainer
- author: seank-com
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, docker, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T00:37:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `group:openclaw` is documented as "all built-in tools" but actually filters out filesystem and shell runtime tools, so there is no obvious `group:*` shorthand for "all built-in core tools." - Why it matters: operators writing `tools.allow

### #79990 feat: add per-agent and per-cron-job provider request headers

- bucket: ready_for_maintainer
- author: longstoryscott
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:37:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 🤖 **AI-assisted PR** Closes #80026. - Add `providers` field to agent config (`agents.list[].providers.<provider>.request`) for per-agent provider request overrides (custom headers, auth, proxy, TLS, allowPrivateNetwork) - Add `providers` to cron jo

### #80453 fix(env): propagate service-managed GH_TOKEN to trusted exec

- bucket: ready_for_maintainer
- author: seank-com
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, commands, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T00:37:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `~/.openclaw/.env` could not be used as a durable source for operator-curated tool secrets like `GH_TOKEN` because override-only-dangerous keys were stripped before the managed gateway service could expose them to trusted exec children. -

### #80497 feat(plugin-sdk): onModelDiagnosticEvent for trusted model.* events

- bucket: ready_for_maintainer
- author: arniesaha
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:37:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Why Plugins subscribing to diagnostic events via `onDiagnosticEvent` (from `openclaw/plugin-sdk/diagnostic-runtime`) never see the `model.*` lifecycle. The public API filter at [`src/infra/diagnostic-events.ts:879-886`](https://github.com/openclaw/openclaw/

### #80681 feat(trajectory): allow OPENCLAW_TRAJECTORY_RUNTIME_EVENT_MAX_BYTES override for per-event byte cap

- bucket: ready_for_maintainer
- author: wAngByg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:38:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The trajectory per-event byte cap is currently fixed at 256 KiB, so large but valid events are replaced by a truncation sentinel. - This PR adds a startup-scoped `OPENCLAW_TRAJECTORY_RUNTIME_EVENT_MAX_BYTES` override for both trajectory writers wh

### #80707 fix(cron): guard task liveness during startup

- bucket: ready_for_maintainer
- author: nanookclaw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:38:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Task registry maintenance now treats cron active-job liveness as non-authoritative until cron startup reconciliation exits. This prevents a pre-start maintenance sweep from marking persisted cron task records lost while the process-local active-job 

### #80928 fix(telegram): suppress fallback reply when plugin command returns suppressReply: true

- bucket: ready_for_maintainer
- author: alexuser
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: XS, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T00:38:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Plugin commands registered via `api.registerCommand` that send responses directly via Telegram Bot API (with custom retry logic, IPv4 forcing, etc.) currently trigger a spurious "No response generated. Please try again." fallback message from the Te

### #80981 docs(cli): clarify strict json parsing

- bucket: ready_for_maintainer
- author: addu2612
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:38:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the CLI docs said values use JSON5 parsing with string fallback, but did not clearly separate the strict JSON mode. - Why it matters: users trying `--strict-json` need to know it errors instead of silently falling back to a raw string. - 

### #81258 feat(feishu): add tts.preserveText to keep text alongside voice media

- bucket: ready_for_maintainer
- author: KhanCold
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:39:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When TTS auto-reply is enabled on Feishu, text is unconditionally suppressed when voice media is present. This makes it impossible for users (especially children learning to read) to see the text while listening to the voice. This PR adds a `tts.pre

### #81572 fix(cron): persist due job outcomes incrementally

- bucket: ready_for_maintainer
- author: efpiva
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:43:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: one-shot cron jobs that completed successfully could remain visible as `running` with null completion fields while later jobs from the same due batch were still executing or stuck. - Why it matters: operators and integrations saw complete

### #81786 chore(agent): port audit guardrails to mainline

- bucket: ready_for_maintainer
- author: chkh6
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: scripts, commands, agents, size: XL, extensions: qa-lab, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:45:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Latest landing status (2026-05-26) - Current head: `3157ed62287b87edc2b2841613a0c7e587ec3bfd`. - GitHub reported this PR as `MERGEABLE` / `CLEAN` before this metadata-only body refresh. - Current code checks are passing or intentionally skipped on the curre

### #91660 [AI] fix(memory): backfill provider.model with resolved model name in…

- bucket: ready_for_maintainer
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:50:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveProviderModel()` in `createWithAdapter()` correctly resolves the embedding model name (falling back to `adapter.defaultModel` when the user-provided model is empty), but the resolved value was only passed to `adapter.create()` as the `model`

### #84028 fix(ui): improve Arabic Control UI translations

- bucket: ready_for_maintainer
- author: aim9sour
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:50:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Improve Arabic Control UI translations for skills, browser/tool profile labels, chat controls, and cron empty states. - Align the Arabic glossary with the locale/TM decision for `Skills -> المهارات` so future i18n syncs preserve the term. - Keep t

### #84060 refactor(terminal): optimize OSC progress label sanitization

- bucket: ready_for_maintainer
- author: esadomer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:50:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Replaced the OSC progress label sanitizer's chained string passes with one module-level precompiled regex. The forbidden label tokens are still the same: OSC ST, BEL, C1 ST, bare ESC, and `]`. ### Benchmark Environment: Node `v22.17.0` on native Wi

### #84140 chore: format oxfmt-touched files

- bucket: ready_for_maintainer
- author: tw19880217-creator
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, scripts, commands, agents, size: M, extensions: kimi-coding, extensions: qa-lab, extensions: memory-wiki, triage: refactor-only, triage: dirty-candidate, extensions: deepinfra, proof: supplied, proof: sufficient, extensions: oc-path, extensions: google, extensions: openrouter, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:52:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Apply oxfmt formatting to files reported by the formatter - Add the bundled viewer runtime asset to oxfmt ignores to avoid generated diffs - Keep extensions/diffs/assets/viewer-runtime.js unchanged Verification: - pnpm format:check - pnpm check:chan

### #84156 fix(cron): respect recovered tool errors

- bucket: ready_for_maintainer
- author: Elarwei001
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:53:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: cron isolated runs can mark a recovered task as failed when the final payload list only contains `isError` tool payloads, even though the agent produced terminal assistant-visible output. - Solution: separate fatal run signals from recove

### #84157 fix(sessions): heal stale running rows on abort no-active-run and restart

- bucket: ready_for_maintainer
- author: Marvae
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:53:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `sessions.abort` can return `status: "no-active-run"` while leaving a persisted session row stuck in `status: "running"`, causing lane-level message starvation. - Solution: reconcile stale `running` rows on the no-active-run abort path an

### #84288 fix(discord): avoid duplicate typing keepalive for tool replies

- bucket: ready_for_maintainer
- author: dr00-eth
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:56:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: message-tool-only Discord replies could refresh typing from two lifecycle owners, making Discord show stale multi-second "bot is typing" after the visible reply was already delivered. - Solution: make the core typing keepalive an explicit

### #84389 Gateway: add oc heartbeat agents endpoint

- bucket: ready_for_maintainer
- author: hugin-vault
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:57:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Added `GET /oc/heartbeat/agents`, a read-only gateway endpoint that returns per-agent `lastSeenAt` values from the live in-memory heartbeat runner. - Exposed a small snapshot helper on the heartbeat runner so the HTTP layer can read the authoritative

### #90226 [AI-assisted] Preserve thread sessions across daily reset by default

- bucket: ready_for_maintainer
- author: simplyclever914
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T00:59:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Thread-scoped chat sessions currently inherit the global implicit daily reset policy when users do not configure `session.resetByType.thread`. For long-running Telegram/Slack/Discord topics this can rotate the OpenClaw session after the daily bounda

### #90517 fix(gateway): hint missing external plugin for web login

- bucket: ready_for_maintainer
- author: TUARAN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:59:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #83277 ## Summary - reuse the existing official external plugin repair-hint path when `web.login.start` cannot find any loaded QR-login provider - append the official external plugin install or `openclaw doctor --fix` guidance to the existing invalid-re

