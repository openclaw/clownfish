---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-018
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
  - "#91924"
  - "#88270"
  - "#91885"
  - "#88506"
  - "#88507"
  - "#88522"
  - "#88531"
  - "#88584"
  - "#91994"
  - "#88651"
  - "#88668"
  - "#88684"
  - "#88754"
  - "#88776"
  - "#92006"
  - "#40392"
  - "#49750"
  - "#43656"
  - "#43953"
  - "#92066"
cluster_refs:
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
  - "#91924"
  - "#88270"
  - "#91885"
  - "#88506"
  - "#88507"
  - "#88522"
  - "#88531"
  - "#88584"
  - "#91994"
  - "#88651"
  - "#88668"
  - "#88684"
  - "#88754"
  - "#88776"
  - "#92006"
  - "#40392"
  - "#49750"
  - "#43656"
  - "#43953"
  - "#92066"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.475Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 18

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #91924 feat(macos): add Simplified Chinese (zh-Hans) localization for InfoPlist

- bucket: needs_proof
- author: Demon904050
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: macos, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T11:26:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add Simplified Chinese (`zh-Hans`) localization for the macOS app bundle, enabling native permission dialogs to display in Chinese when the system language is set to Chinese. ## Changes 1. **`Info.plist`** — add `CFBundleLocalizations = [en, zh-Hans

### #88270 fix: retry loopback probes without device identity after pairing repair

- bucket: needs_proof
- author: koatomic88
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T13:44:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix a gateway probe edge case where a loopback probe with explicit gateway auth can get stuck in a pairing-repair path because the probe eagerly reuses cached device identity. The new behavior is narrow: - probe normally first, including cached devi

### #91885 fix(message): plumb maxLinesPerMessage from channel config into CLI send formatting

- bucket: needs_proof
- author: kagura-agent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T14:21:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91860 The `sendMessage` entrypoint (used by `openclaw message send` CLI) only forwarded `parseMode` into the formatting options passed to `sendDurableMessageBatch`. The channel-level `maxLinesPerMessage` config value was never included, so CL

### #88506 feat: add per-agent compaction overrides

- bucket: needs_proof
- author: kklouzal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, gateway, extensions: memory-core, commands, agents, size: XL, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:19:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds per-agent `compaction` and `contextPruning` overrides so each configured agent can resolve maintenance/runtime behavior from its active agent scope instead of always inheriting every value from `agents.defaults`. This is for multi-agent install

### #88507 feat(plugins): accept slot owner records

- bucket: needs_proof
- author: kklouzal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, commands, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:19:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR implements the read-side normalization layer proposed in #70823: `plugins.slots.memory` and `plugins.slots.contextEngine` can now be read as either a bare plugin id string or an object-form ownership record with an `owner` field. What proble

### #88522 Fix Telegram active-run ingress sequencing

- bucket: needs_proof
- author: Hilo-Hilo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:19:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Let Telegram plain-text follow-ups enter an active-run ingress lane for the same account/chat/thread while an earlier handler is still running. - Keep media/media-group updates on the normal serialized lane. - Document the runtime behavior and add a

### #88531 Suggest closest edit match when oldText is missing

- bucket: needs_proof
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P3, rating: 🦐 gold shrimp, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:20:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add line-numbered closest-match hints when the edit tool cannot find an `oldText` block. - Reuse the edit diff failure path so execution and preview errors share the same hint wording. - Keep hint generation bounded for large files, oversized oldT

### #88584 Surface ACP reconcile errors in startup logs

- bucket: needs_proof
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:20:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Problem: startup reconcile failures for individual ACP sessions were invisible at non-verbose log levels; operators only saw the aggregate failed count. Fix: add an additive warn log for each failed startup identity reconcile with sanitized `session

### #91994 Fix Docker setup repair before onboarding

- bucket: needs_proof
- author: j-sustr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, docker, size: XS, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-06-10T17:31:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Run `openclaw doctor --fix` during Docker setup after data-dir permissions are repaired and before onboarding/config writes. - Cover the setup-time command ordering in the Docker setup E2E harness. This preserves the release-branch Docker update p

### #88651 fix: add memory leak protection for steer rate limit map

- bucket: needs_proof
- author: jokemanfire
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:42:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **Add size-based eviction (max 1024 entries) and periodic stale sweep (every 60s) to prevent unbounded growth of the steerRateLimit Map.** ## Summary **What problem does this PR solve?** `steerRateLimit` Map 会随着每次 steer 操作插入新条目而无限制增长，导致长期运行后内存泄漏。 **Why does th

### #88668 [codex] Add per-DM active directive prompt

- bucket: needs_proof
- author: molle-png
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:43:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a DM-scoped active directive path so deployments can steer direct-message behavior for a turn without folding that directive into ambient group/subagent context. The new `agents.defaults.dmDirective` setting is routed as `extraSystemPromptDirec

### #88684 Keep agent web_search on runtime provider resolution

- bucket: needs_proof
- author: alexzhu0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:43:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #87347 ## User-facing bug Agent-side `web_search` could report `web_search is disabled or no provider is available` even when the configured search provider was already loaded in the runtime and worked through other runtime-backed paths. The agent tool w

### #88754 fix(text): normalize CJK/fullwidth quotes in reasoning tag delimiters

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:44:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Models that emit inline thinking content at stream boundaries may insert CJK fullwidth quotation marks (U+300C-U+300F: 「」❲❳) in place of ASCII angle brackets around reasoning tag names. The pattern matcher uses ASCII brackets, so fullwidth-delimited

### #88776 fix: normalise wiki lint targets

- bucket: needs_proof
- author: ishangodawatta
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: memory-wiki, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-10T17:45:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw wiki lint` can report valid imported wiki links as `broken-wikilink` when they use page titles, slug variants, fragments, or imported source-path suffixes. - Why it matters: imported evidence should not need provenance-damaging 

### #92006 build: add tsdown DTS diagnostics controls

- bucket: needs_proof
- author: ld99ba
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-06-10T18:49:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add tsdown wrapper diagnostics for selecting a single config shard with `--config-index <number>` - add a diagnostics-only `--allow-ineffective-dynamic-import` escape hatch for known tsdown warning behavior - keep the root unified DTS graph opt-in

### #40392 config: use datetime suffix for config backup files instead of numeric rotation

- bucket: needs_proof
- author: davidxcli
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T20:20:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #39923 ## Summary Replaces the numeric rotation ring (`openclaw.json.bak.1`–`.bak.4`) with datetime-stamped backup files (`openclaw.json.bak.YYYYMMDD-HHmmssSSS`, UTC). This makes it immediately clear *when* each backup was taken without needing to inspe

### #49750 fix(sessions): preserve slack thread routing for A2A sessions

- bucket: needs_proof
- author: qqchang2nd
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T21:28:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes a related A2A routing regression for Slack thread sessions. Two issues were contributing to the failure mode: 1. `resolveGroupSessionKey()` could normalize agent-prefixed Slack thread keys such as `agent:builder:slack:channel:C123:thre

### #43656 feat: cross-gateway sessions_send and sessions_spawn via gateway.peers

- bucket: needs_proof
- author: SPFAdvisors
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T00:47:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `sessions_send` and `sessions_spawn` only work within a single gateway. In multi-machine setups (agents split across MacBook, iMac, Mac Studio — each running their own OpenClaw gateway), there's no native way for agents to communicate cross-gateway.

### #43953 feat(feishu): pass through form_value, input_value, option(s) from card actions

- bucket: needs_proof
- author: Edison94hu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T00:48:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Feishu card action callbacks include more than just `action.value` (button values). They also carry `form_value`, `input_value`, `name`, `option`, and `options` fields for form submissions, input components, and select menus. Currently, `handleFeish

### #92066 fix(workboard): let gateway resolve dispatch scopes

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, plugin: workboard
- gitcrawl snapshot updated: 2026-06-11T01:52:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- stop hardcoding workboard dispatch CLI scopes to write/read\n- let the gateway CLI runtime choose scopes for plugin methods it cannot classify locally\n- add coverage that dispatch forwards scope selection to the gateway runtime\n\n## Testing\n- 

