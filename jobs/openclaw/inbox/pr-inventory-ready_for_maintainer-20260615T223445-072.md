---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-072
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
  - "#83590"
  - "#93002"
  - "#83718"
  - "#83760"
  - "#83842"
  - "#90628"
  - "#90738"
  - "#43493"
  - "#79397"
  - "#79910"
  - "#80681"
  - "#80707"
  - "#80928"
  - "#80981"
  - "#81258"
  - "#81572"
  - "#84028"
  - "#84060"
  - "#84140"
  - "#84156"
  - "#84157"
  - "#84288"
  - "#81467"
  - "#85179"
  - "#92294"
cluster_refs:
  - "#83590"
  - "#93002"
  - "#83718"
  - "#83760"
  - "#83842"
  - "#90628"
  - "#90738"
  - "#43493"
  - "#79397"
  - "#79910"
  - "#80681"
  - "#80707"
  - "#80928"
  - "#80981"
  - "#81258"
  - "#81572"
  - "#84028"
  - "#84060"
  - "#84140"
  - "#84156"
  - "#84157"
  - "#84288"
  - "#81467"
  - "#85179"
  - "#92294"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.801Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 72

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #83590 plugin-sdk: restore legacy compat helper exports

- bucket: ready_for_maintainer
- author: san-tian
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:14:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extend the deprecated `openclaw/plugin-sdk/compat` surface with additional legacy channel plugin helpers - keep the root `openclaw/plugin-sdk` export small; this only affects the explicit compat subpath - add coverage that imports the restored hel

### #93002 Fix Telegram progress draft cleanup before tool output

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T00:14:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Telegram progress-mode drafts could remain visible when verbose tool output or visible tool artifacts were delivered as standalone messages. - Solution: Rotate and clear tool-progress-only answer drafts before sending visible tool output

### #83718 fix(memory-core): treat dreaming fence marker lines as inside-fence in promotion guard (#80613)

- bucket: ready_for_maintainer
- author: grifjef
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:17:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem.** `lineRangeOverlapsDreamingFence` in `extensions/memory-core/src/short-term-promotion.ts` tracked `insideFence` state from the fence marker lines but never flagged ranges that included the marker lines themselves. A relocated promotion

### #83760 feat(comfy): dynamic aspect ratio → width/height injection

- bucket: ready_for_maintainer
- author: sola-ryu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, agents, size: L, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:17:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Make the Comfy image generation tool respect `aspectRatio` and `size` parameters instead of ignoring them due to hard-coded dimensions in the workflow JSON. **This change also makes the `capabilities` config on all image providers dynamic**, not just C

### #83842 fix(discord): add native reply opt-out

- bucket: ready_for_maintainer
- author: reirei-agent
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:18:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: Discord sends platform-native replies whenever a resolved `replyTo` value is present, but there was no Discord-scoped way for callers to explicitly opt out. - Solution: Add a Discord-only `useR

### #90628 fix(matrix): prune finished fake-indexeddb transactions

- bucket: ready_for_maintainer
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: M, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:23:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: <!-- hermes-auto-maintainer --> ## Summary - Adds a Matrix-owned fake-indexeddb transaction pruner that is installed immediately after `fake-indexeddb/auto` in the Matrix crypto runtime. - Scopes pruning to Matrix rust-crypto IndexedDB stores whose names end w

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

### #81467 fix(usage): show every calendar day in Daily Token Usage / Daily Cost chart

- bucket: ready_for_maintainer
- author: adapepper
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:00:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Wayne (downstream developer) selected the **30d** range filter on the `/openclaw/usage` page and only saw ~15 bars on the Daily Token Usage chart instead of the expected 30. Days with no recorded activity were silently dropped from the series, so a

### #85179 test(qa-lab): add personal redacted traceability scenario

- bucket: ready_for_maintainer
- author: iFiras-Max1
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: qa-lab, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:07:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds one small personal-agent QA case for redacted traceability. The new scenario checks that a personal agent can write a local review artifact that maps claims to evidence without copying raw personal material. It covers fake secrets, raw transcri

### #92294 fix(codex): keep OpenClaw exec when native surface has no environment (#92238)

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:08:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Isolated cron jobs on the OpenAI/Codex runtime (gpt-5.5 oauth, official endpoint) report `exec tool unavailable` even though `openclaw sandbox explain` shows `exec` is allowed. The same isolated cron job succeeds on a Google model with identical con
