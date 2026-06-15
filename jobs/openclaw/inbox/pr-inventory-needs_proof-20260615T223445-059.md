---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-059
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
  - "#64310"
  - "#65962"
  - "#67008"
  - "#68176"
  - "#73628"
  - "#73635"
  - "#75043"
  - "#75065"
  - "#75121"
  - "#75126"
  - "#75160"
  - "#75201"
  - "#75554"
  - "#83988"
  - "#89039"
  - "#89040"
  - "#90690"
  - "#91168"
  - "#91463"
  - "#91493"
  - "#91515"
  - "#91668"
  - "#91680"
  - "#91698"
  - "#91721"
cluster_refs:
  - "#64310"
  - "#65962"
  - "#67008"
  - "#68176"
  - "#73628"
  - "#73635"
  - "#75043"
  - "#75065"
  - "#75121"
  - "#75126"
  - "#75160"
  - "#75201"
  - "#75554"
  - "#83988"
  - "#89039"
  - "#89040"
  - "#90690"
  - "#91168"
  - "#91463"
  - "#91493"
  - "#91515"
  - "#91668"
  - "#91680"
  - "#91698"
  - "#91721"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.799Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 59

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #64310 fix: Replaced mutable module-global workspacePackagePaths

- bucket: needs_proof
- author: lucia-w
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:47:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: …ble base list ## Summary This PR fixes scripts/audit-seams.mjs so repeated main() calls in the same Node process are idempotent and do not duplicate workspace package entries. - workspacePackagePaths was a mutable module-level array. collectWorkspacePackagePa

### #65962 fix(build): add missing config/sessions/store.runtime entry

- bucket: needs_proof
- author: JQRobert
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:48:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Runtime error when session-override loads the session store: ``` Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/path/to/dist/store.runtime-eZQ7KuiZ.js' ``` ## When This Bug Is Triggered This bug is triggered when users configure **multiple auth

### #67008 feat(chutes): add zai-org/GLM-5.1-TEE to static model catalog

- bucket: needs_proof
- author: tardigrde
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T17:48:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `zai-org/GLM-5.1-TEE` is available on the Chutes unified gateway but was missing from the bundled static catalog. The Chutes discovery endpoint (`GET /v1/models`) always times out from self-hosted VPS environments, so the static catalog is the only

### #68176 CLI: bake git commit at build time so --version reports built commit not live HEAD [AI-assisted]

- bucket: needs_proof
- author: sparkeros
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:48:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #68148. ## Summary Before: `node dist/index.js --version` reports the current value of `.git/HEAD`, which can drift past the commit the binary was actually built from. After: the short SHA is baked into `dist/` at build time as a tsdown compile-time defi

### #73628 Add sessions_yield completion truth metadata

- bucket: needs_proof
- author: richclaw-debug
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:50:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This patch adds an internal completion truth seam for `sessions_yield` and wires it through the embedded runner so parent/session orchestration can observe an explicit, trustworthy completion source. For a real `sessions_yield` turn, the expected se

### #73635 Errors: rewrite 403 HTML auth pages

- bucket: needs_proof
- author: sai8341
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:50:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix incorrect user-facing error reporting when provider requests return `403` HTML auth/challenge pages. Previously these failures could be surfaced as transport or rate-limit style errors, which sent users down the wrong debugging path. This change

### #75043 Add provider-aware automatic TTS emotion mapping

- bucket: needs_proof
- author: xuruiray
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XL, extensions: openai, extensions: tts-local-cli, plugin: azure-speech, triage: dirty-candidate, proof: supplied, extensions: microsoft, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:52:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add opt-in `messages.tts.autoEmotion` support that infers a conservative abstract emotion from synthesized text. - Map inferred emotions into provider-specific controls: Volcengine `emotion`, Xiaomi `style`, OpenAI `instructions`, ElevenLabs `voic

### #75065 cron: optional custom job id and duplicate-id validation

- bucket: needs_proof
- author: Saitop
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, cli, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:52:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces #40218. The previous PR was closed when the old public fork was removed during repo hygiene cleanup; this is the same upstreamable change from the new public contribution fork. ## Summary - **Problem:** Cron jobs get random UUIDs; no way to set a stab

### #75121 fix(telegram): preserve forwarded context in agent body

- bucket: needs_proof
- author: Komzpa
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: L, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:53:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep Telegram forwarded-message bodies clean in `BodyForAgent` - rely on typed `ForwardedFrom*` fields for single forwarded messages so prompt assembly renders the existing structured forwarded context block - preserve per-message forwarded attrib

### #75126 Add strict tool mode diagnostics and report contracts

- bucket: needs_proof
- author: JasonZHANGTianrui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:53:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Implements strict tool mode plumbing across embedded runs, transport streams, and OpenAI-compatible gateway responses. Changes include: Adds strict/warn/off tool strictness handling for tool argument repairs, alias repairs, and tool-name normalization. Surface

### #75160 fix(gateway): allow memory slot tool plugin invokes

- bucket: needs_proof
- author: Etnly
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:53:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add regression coverage for Gateway HTTP `/tools/invoke` fallback to plugin-backed memory slot tools - verify memory slot tool ids resolve successfully when they are cataloged core ids but only available through the configured plugin slot - verify

### #75201 fix(agent): keep cleanup hooks isolated

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:53:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: PR #74543 fixed timeout fallback session keys, but CLI run cleanup still had a shared `finally` path where one failing cleanup hook could skip later cleanup. - Why it matters: timeout fallback now avoids the surfaced session-lock issue, b

### #75554 [codex] Add plugin task lifecycle API

- bucket: needs_proof
- author: goldmar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, plugin: file-transfer, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:53:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a plugin-safe task run lifecycle API under `api.runtime.tasks.runs.bindSession(...).lifecycle` / `fromToolContext(...).lifecycle`. - Creates plugin-owned records as existing `cli` task runtime rows with required plugin-namespaced `taskKind`.

### #83988 fix(tts): defer text settlement for final-mode TTS to eliminate churn (#83511)

- bucket: needs_proof
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: XL, extensions: tts-local-cli, plugin: azure-speech, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T17:55:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `messages.tts.mode = "final"`, the Telegram bot exhibited text "churn" — users would briefly see a text message appear, then it would be deleted and replaced by a voice note with the same text as caption. This happened on **both** the ACP dispa

### #89039 fix: prevent silent message loss from EmbeddedAttemptSessionTakeoverError

- bucket: needs_proof
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:55:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the OpenAI SDK retried an `ECONNRESET` internally (default `maxRetries=2`), the session write lock was released during the retry window. Incoming steering messages could then modify the transcript without updating the fence, causing a fingerpri

### #89040 perf: avoid event-loop stall during embedded_run bootstrap-context

- bucket: needs_proof
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:56:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix event-loop stalls during `embedded_run` bootstrap-context that block the event loop for 14-22 seconds, causing message loss. ### Root causes addressed 1. **Synchronous file I/O** — `readFileSync`/`closeSync` in workspace file loading blocks the

### #90690 Fix Android chat optimistic send handling

- bucket: needs_proof
- author: StoneHub
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:00:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep Android chat composer text/attachments until chat.send is accepted - include the backing gateway sessionId in Android chat.send requests - preserve optimistic user messages through terminal event/history refresh until history contains them -

### #91168 feat(tui,gateway): show CLI-routing label in /model picker

- bucket: needs_proof
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:00:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The `/model` picker today shows the human-readable model name as the description line (e.g. `anthropic/claude-opus-4-6 Claude Opus 4.6`). When a model is pinned to a CLI backend via user-config `agents.defaults.models[...].agentRuntime.id` (e.g. `cl

### #91463 fix #63343: Browser bridge tab not found race

- bucket: needs_proof
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:00:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #63343. ## Summary - Preserve the `openTab("about:blank")` result in `ensureTabAvailable()` so a newly created target remains selectable while CDP `/json/list` is still catching up. - For local-managed profiles, wait through the existing tab discovery wi

### #91493 Add fail-on-tool-failure contract for isolated cron agent turns

- bucket: needs_proof
- author: cristbc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:01:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Title: Add fail-on-tool-failure contract for isolated cron agent turns ## Summary - add `payload.failOnToolFailure` to agent-turn cron payload validation and runtime types - persist the flag through cron SQLite projections and additive state-schema repair - ma

### #91515 fix(cron): classify spaced 'timed out' failures as retryable timeout

- bucket: needs_proof
- author: jaxonparrott
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:01:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Broaden the cron `timeout` transient-retry classifier so failures phrased with a **space** — e.g. `isolated agent setup timed out before runner start` — are recognized as retryable timeouts. ## Why `src/cron/retry-hint.ts` classified timeouts with `/(t

### #91668 fix(agents): skip stale orphaned subagent sessions during restart recovery

- bucket: needs_proof
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:01:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary After a gateway restart, `recoverOrphanedSubagentSessions()` scans for interrupted subagent runs and attempts to resume them — but it did not check whether a run had exceeded the **existing** subagent run-liveness window. A subagent interrupted days

### #91680 fix(ui): keep composer on Send when run-status toast expires (#88033)

- bucket: needs_proof
- author: tiffanychum
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:02:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The webchat composer button could snap back to the red **Stop** button several seconds *after* a response had visibly completed (issue #88033, step 5: "it returns to the send button and then many seconds later, it returns to the Stop button even tho

### #91698 fix(feishu): accumulate streamed final delta chunks (#91562)

- bucket: needs_proof
- author: draix
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:02:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91562 — Feishu streaming replies only showed the **latest token** (`你` / `好` / `啊`) instead of progressively accumulating text (`你` / `你好` / `你好啊`) in 6.1. The regression lives in the Feishu streaming-card reply dispatcher. When a reply is st

### #91721 fix(logging): prune non-idle stale diagnostic session states

- bucket: needs_proof
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:02:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `requestStuckSessionRecovery()` fails with `status: "failed"`, the diagnostic session state stays non-idle forever because `recoveryOutcomeMutatesSessionState()` returns `false` and `applyRecoveryOutcomeToDiagnosticState()` returns early. The e
