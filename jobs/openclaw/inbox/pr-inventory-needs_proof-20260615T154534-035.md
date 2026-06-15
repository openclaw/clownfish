---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-035
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
  - "#59298"
  - "#56152"
  - "#86563"
  - "#88172"
  - "#88210"
  - "#59141"
  - "#60860"
  - "#61522"
  - "#92937"
  - "#62195"
  - "#62727"
  - "#62822"
  - "#62937"
  - "#63007"
  - "#63193"
  - "#63347"
  - "#63380"
  - "#92948"
  - "#63662"
  - "#89387"
  - "#51623"
  - "#65301"
  - "#65409"
  - "#66001"
  - "#89403"
cluster_refs:
  - "#59298"
  - "#56152"
  - "#86563"
  - "#88172"
  - "#88210"
  - "#59141"
  - "#60860"
  - "#61522"
  - "#92937"
  - "#62195"
  - "#62727"
  - "#62822"
  - "#62937"
  - "#63007"
  - "#63193"
  - "#63347"
  - "#63380"
  - "#92948"
  - "#63662"
  - "#89387"
  - "#51623"
  - "#65301"
  - "#65409"
  - "#66001"
  - "#89403"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.201Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 35

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #59298 feat(skills): notify agents of available updates via skill preambles

- bucket: needs_proof
- author: simonemacario
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: M, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T10:37:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: No way to know a newer OpenClaw version is available when working inside a Claude Code skill. Users must remember to run `openclaw update` manually. - Why it matters: Stale versions mean missing bug fixes and features. Seamless upgrade no

### #56152 [codex] Fix symlinked local media root validation

- bucket: needs_proof
- author: dashhuang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T10:55:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - accept both resolved and canonical path variants when validating local media roots - add regression tests for macOS `/tmp` and `/private/tmp` symlinked path combinations ## Why On macOS, local files written under `/tmp/...` may canonicalize to `/p

### #86563 fix(gateway): skip transcript resolution for missing files

- bucket: needs_proof
- author: wesleysimplicio
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:00:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: What does this PR do? - Avoids resolving a session key from a transcript path when the transcript file no longer exists. - Adds a regression test that verifies a missing transcript path does not reach the broadcast path. Root cause - The transcript broadcast p

### #88172 fix(mcp): kill orphaned stdio children on session teardown + auto-reconnect dead transports

- bucket: needs_proof
- author: promptclickrun
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T11:02:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Two MCP stability issues causing cron failures and mid-turn `Not connected` errors: 1. **Orphaned MCP child processes:** When isolated cron sessions end, the CLI runner only closes the HTTP loopback server but leaves `SessionMcpRuntime` stdio childr

### #88210 Protect session store writes with a file lock

- bucket: needs_proof
- author: IYENTeam
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:02:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - wrap session store writes in the shared file-lock helper so concurrent OpenClaw processes serialize writes to the same sessions store - create the session-store parent directory before acquiring the advisory lock - add coverage that the session wr

### #59141 fix(memory-lancedb): prefer newer memories for latest queries

- bucket: needs_proof
- author: slip17mc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-lancedb, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:07:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - detect freshness-sensitive prompts in `memory-lancedb` (latest/last/most recent/newest/current/recent) - widen candidate recall and rerank recalled memories using recency + semantic similarity - surface timestamp/provenance hints in freshness-sens

### #60860 feat(google): add Google Vertex AI provider with ADC auth and global endpoint routing

- bucket: needs_proof
- author: PewterZz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, extensions: oc-path, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:13:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Registers a new `google-vertex` provider in the Google plugin that routes to `aiplatform.googleapis.com` using Application Default Credentials (ADC), separate from the existing `google-gemini-cli` OAuth path - Adds `vertex-region.ts` for region/pr

### #61522 config/io: add proper logging for IO error handling

- bucket: needs_proof
- author: soumojit-D48
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T11:16:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Config IO catches errors with empty catch blocks, making it impossible to debug configuration issues (disk full, permission denied, locked files) - **Why it matters:** Operators cannot see why config operations fail; silent data loss 

### #92937 fix(feishu): extract emoji-only from identity.emoji for card headers (fixes #55242)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:17:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## fix(feishu): extract emoji-only from identity.emoji for card headers (fixes #55242) The `identity.emoji` field can contain descriptive text alongside emojis (e.g. `"根据心情/语气自由切换 😊😅😄🤔😎😴🎉"`). Feishu card headers were displaying the raw field value verba

### #62195 feat(cron): add preHook gate for pre-run script checks

- bucket: needs_proof
- author: scottgl9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, agents, size: L, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:19:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an optional `preHook` configuration for cron jobs and heartbeat triggers that runs a shell command before agent execution. This gates agent runs on system preconditions (disk space, network, API availability) — eliminating wasteful runs on reso

### #62727 fix: parse descriptive identity avatar lines

- bucket: needs_proof
- author: onEnterFrame
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:22:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extract trailing avatar paths from descriptive IDENTITY.md avatar lines - keep direct avatar path/url handling intact - add regression coverage for descriptive avatar text with a trailing local avatar path ## Testing - pnpm exec vitest run --confi

### #62822 Speed up Discord permission audits

- bucket: needs_proof
- author: RONNYKHALIL
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:23:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - speed up the Discord permission audit path that feeds `channels.status` - audit Discord channel permissions with a small bounded worker pool while preserving output order - cache Discord bot and guild/member permission context for 30 seconds to av

### #62937 feat(exec): macOS sandbox-exec wrapper for host process isolation

- bucket: needs_proof
- author: Bobby-Bot-00
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:23:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements macOS `sandbox-exec` wrapping for the `exec()` tool, addressing Issue #58730. ## Changes - **`src/agents/sandbox-exec-wrapper.ts`** — Built-in Seatbelt profile definitions for macOS sandbox - **`src/agents/bash-tools.sandbox-exec.test.ts`

### #63007 Pass outbound session identity into message_sending and surface guarded gateway send denial

- bucket: needs_proof
- author: gullirg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:23:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Make `gateway call send` sufficient for one truthful guarded outbound message path. This patch: - passes outbound session identity into `message_sending` hook context when available - includes `agentId` and `sessionKey` additively and backwards-comp

### #63193 [codex] finish android release handoff

- bucket: needs_proof
- author: Mquarmoc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:25:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed This finishes the Android release handoff so the release process is reproducible from the repo instead of relying on chat history. - add a manual GitHub Actions workflow to build signed Android release AABs and upload them to a GitHub release -

### #63347 feat(msteams): support webhook host binding

- bucket: needs_proof
- author: sharkqwy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:26:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add optional `channels.msteams.webhook.host` to Teams config schema/types - forward configured host to `expressApp.listen(port, host)` while preserving default behavior when omitted - include host in startup logs for bind-scope auditing - add life

### #63380 fix(telegram): allow agentId in account config for multi-account routing

- bucket: needs_proof
- author: mraleko
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:26:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes regression where Telegram multi-account configs with `agentId` were rejected as 'must NOT have additional properties' after upgrading from 2026.4.5 to 2026.4.8. ## Root cause `agentId` was only defined in `TelegramTopicSchema` (for forum group

### #92948 #92546: fix(whatsapp): backup Baileys session credentials before clearing

- bucket: needs_proof
- author: qingminglong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:27:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add automatic timestamped backup of Baileys session credentials in `logoutWeb()` before clearing, so plugin updates and unintended logouts no longer permanently destroy WhatsApp Web sessions. ## Root Cause When `openclaw plugins update whatsapp` run

### #63662 feat(memory-core): configurable MEMORY.md injection mode + per-turn autoRecall

- bucket: needs_proof
- author: ZardLi1115
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, scripts, agents, size: L, extensions: qa-lab, triage: dirty-candidate, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:28:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `agents.defaults.memoryInjection` with `full`, `core-only`, and `recall-only` modes - add `agents.defaults.memorySearch.autoRecall` for per-turn memory recall injection in `memory-core` - update memory docs and schema metadata for the new conf

### #89387 fix(agents): dedupe transcript rewrite suffix replay

- bucket: needs_proof
- author: dripsmvcp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:33:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Context-overflow recovery re-runs transcript suffix replay without a replay-identity guard, so byte-identical `role=user` entries are re-appended on every recovery pass and the persisted session JSONL accumulates duplicate messages (issue #66443). -

### #51623 fix: persist pending followup queues across gateway restart

- bucket: needs_proof
- author: tomsalphaclawbot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XL, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:52:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #51620 — gateway restart drops queued and in-flight inbound messages. ## Changes ### New: `src/auto-reply/reply/queue/persist.ts` Serializes all non-empty `FOLLOWUP_QUEUES` entries to `state/pending-messages.json` before shutdown. Strips non-p

### #65301 Fix/send poll intent detection clean

- bucket: needs_proof
- author: weichengdeng
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T12:07:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #65409 Populate codex-cli tool entries in system prompt report

- bucket: needs_proof
- author: marinosabijan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T12:08:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - materialize bundle MCP tools for the codex-cli system prompt report path - feed those effective tools into `buildSystemPromptReport(...)` instead of `[]` - assert via the existing bundle MCP e2e that CLI runs now report tool entries and schema cha

### #66001 fix(process): reconcile orphaned bash exec runs

- bucket: needs_proof
- author: andydoucet
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T12:10:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a real `reconcileOrphans(...)` contract to the process supervisor - reconcile active managed runs against bash session ownership - invoke reconciliation before serving process-tool requests and after registering new exec sessions - add focused

### #89403 fix(feishu): use resolved runtime config for gateway sends

- bucket: needs_proof
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, channel: feishu, size: S, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T12:15:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - use the hot runtime config snapshot for gateway send requests when it matches the caller source config, so resolved Feishu SecretRef credentials reach delivery - keep Feishu mediaUrl as a plain payload input instead of resolving media URLs through

