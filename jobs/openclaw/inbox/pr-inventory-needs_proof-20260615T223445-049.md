---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-049
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
  - "#89965"
  - "#89982"
  - "#89987"
  - "#89989"
  - "#93275"
  - "#93110"
  - "#92680"
  - "#59285"
  - "#62157"
  - "#93267"
  - "#92253"
  - "#92946"
  - "#62727"
  - "#62822"
  - "#63007"
  - "#63347"
  - "#65301"
  - "#90038"
  - "#90066"
  - "#90079"
  - "#90143"
  - "#90199"
  - "#90248"
  - "#92945"
  - "#91332"
cluster_refs:
  - "#89965"
  - "#89982"
  - "#89987"
  - "#89989"
  - "#93275"
  - "#93110"
  - "#92680"
  - "#59285"
  - "#62157"
  - "#93267"
  - "#92253"
  - "#92946"
  - "#62727"
  - "#62822"
  - "#63007"
  - "#63347"
  - "#65301"
  - "#90038"
  - "#90066"
  - "#90079"
  - "#90143"
  - "#90199"
  - "#90248"
  - "#92945"
  - "#91332"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.796Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 49

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89965 fix(agents): emit user-visible notice when a turn exhausts its time budget

- bucket: needs_proof
- author: spencer2211
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:49:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When an agent turn exhausts its time budget (`agents.defaults.timeoutSeconds`) or a run-level deadline **while no assistant reply has been produced**, the gateway can go completely silent — no message reaches the channel, no indication a limit was h

### #89982 fix(agents): use appropriate log levels in tools-manager and resource-loader

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:50:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Aligns log level usage with message severity in two agent utility files. ## Changes ### `src/agents/utils/tools-manager.ts` - `console.log` → `console.warn` for user-actionable warnings: - Offline mode enabled (tool skipped) - Android/Termux package

### #89987 fix(cron): suppress control diagnostics in delivery

- bucket: needs_proof
- author: bdjben
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:51:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat leading cron `NO_SUBPROCESS_STARTED` diagnostics as non-deliverable control replies only for Matrix cron delivery. - Suppress that diagnostic before Matrix/channel delivery while preserving ordinary explanatory text that merely mentions the

### #89989 fix(heartbeat): debounce requests-in-flight retries

- bucket: needs_proof
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:51:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #40611. ## What changed - Adds a requests-in-flight heartbeat retry delay of 60 seconds. - Keeps the existing 1 second retry delay for other retryable busy skips such as cron-in-progress and lanes-busy. - Updates heartbeat wake and scheduler tests to cov

### #93275 #92776: fix(agents): prevent indefinite session model pinning from polluted fallback origin

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:52:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix indefinite session model pinning caused by polluted `modelOverrideFallbackOrigin` fields. When the origin recorded the failing model instead of the configured primary, the snap-back probe (`resolveAutoFallbackPrimaryProbe`) returned undefined

### #93110 fix(cron): add delivery route lease store for isolated cron announce context

- bucket: needs_proof
- author: wangmiao0668000666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:52:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92460. Replaces the previously rejected approach from PR #92580. Instead of persisting the resolved delivery target onto the isolated cron session entry (which created a lifecycle leak — route data accumulated with no retirement hook), this P

### #92680 feat(read): add encoding parameter for GBK and non-UTF-8 text files (#92664)

- bucket: needs_proof
- author: wangmiao0668000666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:54:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92664. The built-in `read` session tool always decoded text files as UTF-8, which produced mojibake for files saved in legacy encodings such as GBK on Chinese Windows. This change routes session read-tool text buffers through the shared `deco

### #59285 Clarify optional cleanup hints in gateway status output

- bucket: needs_proof
- author: safrano9999
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: XS, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:00:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #62157 fix: only drop streamed payloads, not all final payloads

- bucket: needs_proof
- author: ericyoshida
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:02:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When block streaming is enabled (`blockStreamingDefault: "on"`), text generated by the agent **before** tool calls is correctly streamed to the user. However, text generated **after** tool calls (final payloads) is silently dropped and never deliver

### #93267 fix(session-memory): skip delivery-mirror entries and dedup consecutive identical assistant messages (#92563)

- bucket: needs_proof
- author: fsdwen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:07:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `getRecentSessionContent` in the session-memory hook would produce duplicate `assistant:` lines when thinking-enabled models caused two entries to be written to the session JSONL for the same assistant response. Two fixes: 1. **Skip `delivery-mirror

### #92253 [codex] active-memory default to configured agents

- bucket: needs_proof
- author: Glucksberg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:11:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Default Active Memory to configured OpenClaw agents when `plugins.entries.active-memory.config.agents` is omitted. - Fall back to the implicit `main` agent for minimal configs that do not define `agents.list`. - Preserve explicit empty `config.age

### #92946 fix(telegram): preserve delivery without rich API

- bucket: needs_proof
- author: Glucksberg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: L, triage: blank-template, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:14:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves Telegram text delivery when rich Bot API methods are unavailable on a custom or lagging Bot API root. - Falls back from `sendRichMessage` / rich text edit to legacy `sendMessage` / `editMessageText`. - Re-chunks legacy fallback sends to

### #62727 fix: parse descriptive identity avatar lines

- bucket: needs_proof
- author: onEnterFrame
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:21:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extract trailing avatar paths from descriptive IDENTITY.md avatar lines - keep direct avatar path/url handling intact - add regression coverage for descriptive avatar text with a trailing local avatar path ## Testing - pnpm exec vitest run --confi

### #62822 Speed up Discord permission audits

- bucket: needs_proof
- author: RONNYKHALIL
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:21:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - speed up the Discord permission audit path that feeds `channels.status` - audit Discord channel permissions with a small bounded worker pool while preserving output order - cache Discord bot and guild/member permission context for 30 seconds to av

### #63007 Pass outbound session identity into message_sending and surface guarded gateway send denial

- bucket: needs_proof
- author: gullirg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:21:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Make `gateway call send` sufficient for one truthful guarded outbound message path. This patch: - passes outbound session identity into `message_sending` hook context when available - includes `agentId` and `sessionKey` additively and backwards-comp

### #63347 feat(msteams): support webhook host binding

- bucket: needs_proof
- author: sharkqwy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:22:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add optional `channels.msteams.webhook.host` to Teams config schema/types - forward configured host to `expressApp.listen(port, host)` while preserving default behavior when omitted - include host in startup logs for bind-scope auditing - add life

### #65301 Fix/send poll intent detection clean

- bucket: needs_proof
- author: weichengdeng
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:22:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #90038 fix(discord): surface failed bulk reaction removals instead of false success

- bucket: needs_proof
- author: masatohoshino
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: XS, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:24:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `removeOwnReactionsDiscord` reported success even when Discord reaction deletions failed. It pushed every reaction identifier into `removed` before the `deleteOwnMessageReaction` promise settled, ran the deletes with `Promise.allSettled` (which neve

### #90066 fix(telegram): suppress reconnect drain re-entry while delivery is in-flight

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:26:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89953 ## Problem After a Telegram transport reconnect, the polling session repeatedly calls `drainPendingDeliveries`, producing "already being recovered" log noise for entries that are still held by an in-flight live delivery claim. ## Fix 1. **Return d

### #90079 Fix Discord native empty reply fallback for compact commands

- bucket: needs_proof
- author: AliAbuelkheir
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: XS, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:27:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Gate the Discord native empty-visible-reply fallback on the shared dispatcher `noVisibleReplyFallbackEligible` signal. - Keep the warning for genuinely fallback-eligible empty command dispatches. - Add a Discord native `/compact` regression coveri

### #90143 feat(doctor): add narrow deterministic gating check

- bucket: needs_proof
- author: ski3md
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:29:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is a narrowed replacement for prior closed broad control-plane scaffolding PRs. It keeps only deterministic doctor/control-plane gating inside existing OpenClaw seams. It does not add a repo-root registry, queue, ledger, dashboard, artifact hie

### #90199 fix(agents): defer bootstrap context-engine maintenance to background

- bucket: needs_proof
- author: dripsmvcp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:32:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Bootstrap/reconcile context-engine maintenance runs in **foreground**, where deferred compaction debt cannot execute (`allowDeferredCompactionExecution` is background-only) and no background follow-up is scheduled (only turns defer). So debt creat

### #90248 Add channel turn delivery and control-lane diagnostics

- bucket: needs_proof
- author: sbuchberger
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: telegram, gateway, extensions: diagnostics-otel, cli, commands, agents, size: XL, triage: dirty-candidate, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:35:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a small, source-level Agentic Kernel spike for OpenClaw channel turns. The goal is not a rewrite: it makes Telegram/direct-message delivery and control-lane health observable and testable through existing runtime paths. Key pieces: - Ad

### #92945 #92944: Telegram commands can remain empty after interrupted sync due to stale local command hash

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T12:43:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Verify remote Telegram command state via `getMyCommands()` before skipping command sync based on the local hash cache. This prevents the bot menu from staying empty when the remote state was cleared but the local hash still matches. ## Root Cause In

### #91332 fix(session): add fallback lock file cleanup on session write-lock release

- bucket: needs_proof
- author: immortal-autumn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:58:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `sidecar-lock`'s `removeLockIfUnchanged` fails because the lock file snapshot doesn't match (content/inode changed between acquisition and release), the session write-lock file persists on disk permanently. This blocks all subsequent messages t
