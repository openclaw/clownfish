---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-028
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
  - "#91609"
  - "#91610"
  - "#91612"
  - "#91611"
  - "#48690"
  - "#44098"
  - "#91655"
  - "#91698"
  - "#91703"
  - "#91459"
  - "#91680"
  - "#91714"
  - "#91702"
  - "#91726"
  - "#91729"
  - "#90192"
  - "#91812"
  - "#60402"
  - "#58455"
  - "#91857"
  - "#91863"
  - "#91877"
  - "#48278"
  - "#87691"
  - "#87707"
cluster_refs:
  - "#91609"
  - "#91610"
  - "#91612"
  - "#91611"
  - "#48690"
  - "#44098"
  - "#91655"
  - "#91698"
  - "#91703"
  - "#91459"
  - "#91680"
  - "#91714"
  - "#91702"
  - "#91726"
  - "#91729"
  - "#90192"
  - "#91812"
  - "#60402"
  - "#58455"
  - "#91857"
  - "#91863"
  - "#91877"
  - "#48278"
  - "#87691"
  - "#87707"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.200Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 28

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91609 fix(docs): make check:docs work in native PowerShell on Windows

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:32:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR ensures that \check:docs\ and doc formatting scripts work correctly when executed in native PowerShell / cmd environments on Windows. Details: - Add safety checks for child process \stderr\ and errors in \ ormat-docs.mjs\ to prevent crashes when spawni

### #91610 ci(windows): add native PowerShell smoke coverage for contributor commands

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:33:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR adds Native PowerShell smoke coverage for contributor commands under the Windows CI job. Details: - Add a new step to \checks-windows\ in \.github/workflows/ci.yml\ using \shell: pwsh\. - Run \pnpm check:docs\ and \pnpm build:strict-smoke\ in native Po

### #91612 docs(secrets): generate secretref reference docs from target registry metadata

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: S, triage: needs-real-behavior-proof, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:33:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR automates the generation of the secretref matrix JSON and reference markdown documentation from secret target registry metadata. Details: - Add \scripts/generate-secretref-docs.ts\ script to compile the secretref credentials matrix and sync with \docs/

### #91611 fix(agents): reconcile stale restart-aborted subagent runs instead of resurrecting them (fixes #90766)

- bucket: needs_proof
- author: ly-wang19
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:39:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** After the gateway is down for a long time, restart/orphan recovery **resurrects** subagent runs that were aborted hours ago — replaying `agent.wait` on a run that is no longer relevant. - **Root cause:** The restore reconciliation in 

### #48690 fix: add task-level timeout to lane queue to prevent permanent session blocking

- bucket: needs_proof
- author: kyletabor
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:48:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `Promise.race` timeout wrapper around `await entry.task()` in `pump()` to prevent hung promises from permanently jamming session lanes - New `CommandLaneTaskTimeoutError` error class for timed-out tasks - New `taskTimeoutMs` option on `enqueue

### #44098 fix(security): add default pidsLimit for sandbox containers

- bucket: needs_proof
- author: Jackey0903
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:54:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Sandbox containers were created without a default pidsLimit, making them vulnerable to fork bomb attacks that could exhaust host resources. ## Security Impact - **Prevents fork bomb attacks**: Malicious or compromised agents cannot execute `:(){ :|:

### #91655 fix(tools): sanitize url parameter in web_fetch to handle model formatting errors

- bucket: needs_proof
- author: akang1798
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T07:29:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Description This PR fixes a bug where `web_fetch` fails when the LLM generates a URL containing whitespaces (e.g., `"https:// docs.openclaw.ai"`). ### Rationale LLMs (especially smaller models) sometimes introduce spaces after protocol markers or surroundi

### #91698 fix(feishu): accumulate streamed final delta chunks (#91562)

- bucket: needs_proof
- author: draix
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T12:52:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91562 — Feishu streaming replies only showed the **latest token** (`你` / `好` / `啊`) instead of progressively accumulating text (`你` / `你好` / `你好啊`) in 6.1. The regression lives in the Feishu streaming-card reply dispatcher. When a reply is st

### #91703 feat(discord): capture reaction feedback

- bucket: needs_proof
- author: lueksche
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T13:14:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds durable reaction-feedback capture to the Discord runtime. Summary: - fetch reacted message once - capture assistant-authored reactions as append-only JSONL in state dir - reuse fetched message for notifications - add unit tests for capture behavior - bump

### #91459 fix(memory-wiki): include workspace in bridge artifact hash to prevent collisions

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: memory-wiki, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T13:44:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(memory-wiki): include workspace in bridge artifact hash to prevent collisions ## Summary **Problem:** When multiple workspaces produce artifacts with the same relative path (e.g. `memory/.dreams/events.jsonl`), the 8-char SHA1 hash suffix collided, causing

### #91680 fix(ui): keep composer on Send when run-status toast expires (#88033)

- bucket: needs_proof
- author: tiffanychum
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T14:10:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The webchat composer button could snap back to the red **Stop** button several seconds *after* a response had visibly completed (issue #88033, step 5: "it returns to the send button and then many seconds later, it returns to the Stop button even tho

### #91714 fix(agents): apply Gemini schema cleaning for Gemini models via OpenAI-compat providers

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T14:25:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **Problem:** `isGeminiProvider` only checked if the provider name contained "google" or "gemini". This missed OpenAI-compatible providers (like jjcc) that route to Gemini models, causing cron tool schema with `anyOf` to be rejected by Gemini's stric

### #91702 feat(session): add session.groupScope to fold group chats into the agent main session

- bucket: needs_proof
- author: ikenraf
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T14:52:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds `session.groupScope`, mirroring the existing `session.dmScope`: - `"per-group"` (default) — each group keeps its own session (unchanged behavior) - `"main"` — group chats route into the agent's main session (`agent:<id>:main`) Also supported as a 

### #91726 feat(gateway): add POST /api/mcp/servers/:id/reload endpoint

- bucket: needs_proof
- author: ramontpalomo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T15:20:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Why When a customer connects a new Composio integration via our UI, the upstream MCP server's tool list changes but Composio's MCP server does not emit a `notifications/tools/list_changed` notification (see ComposioHQ/composio#3118). Without a reload trigge

### #91729 fix(msteams): trim streamed prefix in long-reply fallback to stop >4000-char double-post (regressed #59297 in #76262)

- bucket: needs_proof
- author: devinkuhn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T16:18:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Restores streamed-prefix suppression for MS Teams long-reply block fallback. When native streaming fails mid-delivery (e.g. Teams 4000-char limit) or `finalize()` falls back after a suppressed stream close, block delivery now sends only the **un-str

### #90192 fix(feishu): fetch quoted content before empty-message guard

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, P2, rating: 🦐 gold shrimp, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T16:26:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix #90177 — Feishu group reply with only `@bot` gets dropped before quoted content is fetched. ## Real behavior proof **Behavior addressed**: Feishu group reply with only `@bot` mention (no additional text) is no longer dropped before quoted conten

### #91812 fix(cron): report sqlite path in cron status

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T02:28:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - report the SQLite state DB path from `cron.status` instead of the internal cron mirror JSON path - thread an optional user-facing `statusStorePath` into the cron service so status callers can override the display path without changing persistence 

### #60402 fix: wake targeted ACP parent sessions when heartbeat is disabled

- bucket: needs_proof
- author: dapzthelegend
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:06:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow targeted session wake requests (including `acp:spawn:*`) to execute even when periodic heartbeat scheduling is disabled - move targeted wake handling ahead of global heartbeat-disabled / empty-schedule guards in `startHeartbeatRunner` - add 

### #58455 Improve compaction with microCompact pre-pass and analysis scratchpad

- bucket: needs_proof
- author: eliot-onbox
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:11:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adopts three techniques to improve compaction quality and reduce LLM cost, addressing #58398: - **microCompact pre-pass** — Before LLM summarization runs, clears old tool result content from messages whose `toolName` is in the bulky-result set (`rea

### #91857 fix(identity): ackReaction falls back to wildcard channel config when channel not found

- bucket: needs_proof
- author: NarahariRaghava
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: mock-only-proof, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:27:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - When a message arrives on a channel without a specific ackReaction configured, OpenClaw should fall back to `channels["*"].ackReaction` if one is set - Instead it was skipping the wildcard entirely and using the default 👀 even when the user had e

### #91863 fix(config): allow wildcard * as a valid channel id in channel config validation

- bucket: needs_proof
- author: NarahariRaghava
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: mock-only-proof, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:32:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Config validation was rejecting `channels["*"]` with "unknown channel id: *" - The `*` wildcard is a valid special case meaning "apply to all channels" - This blocked users from configuring wildcard channel settings like `channels["*"].ackReaction

### #91877 fix(discord): prime voice receive with op-5 Speaking burst on join

- bucket: needs_proof
- author: gabrielexito-stack
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T07:30:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - When the bot joined a Discord voice channel and another speaker was already mid-utterance, the receive side could miss the first window of audio because no `Speaking` (op-5) frame had been observed. - This PR primes the receive side with a synthet

### #48278 Config: scaffold compaction loop guard settings

- bucket: needs_proof
- author: xz0831
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T09:53:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the loop-aware compaction guard plan needed a small, reviewable config/schema landing point before detector/runtime work. - Why it matters: separating config scaffolding from runtime behavior keeps review narrow and lets follow-up PRs bui

### #87691 fix(auto-reply): preserve post-compaction failure context in user-facing recovery message (#67750)

- bucket: needs_proof
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T09:55:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? When auto-compaction succeeds inside a turn and the retried run still fails (e.g. `LLM idle timeout (120s)`, fallback exhausted with billing-skipped candidates), `runAgentTurnWithFallback`'s catch path collapses the 

### #87707 fix(auto-reply): direct-send text-only block replies when streaming off (#57225)

- bucket: needs_proof
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T09:55:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? When block streaming is disabled (the Discord, Telegram, msteams, IRC, Mattermost, Synology Chat, NextCloud Talk, Slack Block Kit, etc. default), the shared block-reply delivery handler in `src/auto-reply/reply/reply

