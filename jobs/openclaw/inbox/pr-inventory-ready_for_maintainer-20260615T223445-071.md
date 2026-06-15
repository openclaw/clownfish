---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-071
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
  - "#82870"
  - "#82906"
  - "#82909"
  - "#85829"
  - "#82955"
  - "#82985"
  - "#83041"
  - "#83048"
  - "#90450"
  - "#90489"
  - "#90493"
  - "#93080"
  - "#79687"
  - "#79702"
  - "#90537"
  - "#90571"
  - "#90586"
  - "#79832"
  - "#93072"
  - "#83161"
  - "#83227"
  - "#83368"
  - "#93093"
  - "#83489"
  - "#83492"
cluster_refs:
  - "#82870"
  - "#82906"
  - "#82909"
  - "#85829"
  - "#82955"
  - "#82985"
  - "#83041"
  - "#83048"
  - "#90450"
  - "#90489"
  - "#90493"
  - "#93080"
  - "#79687"
  - "#79702"
  - "#90537"
  - "#90571"
  - "#90586"
  - "#79832"
  - "#93072"
  - "#83161"
  - "#83227"
  - "#83368"
  - "#93093"
  - "#83489"
  - "#83492"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.801Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 71

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #82870 fix(agent): keep tool media authoritative in replies

- bucket: ready_for_maintainer
- author: Merlinzy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:08:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep tool-produced media authoritative when an assistant reply also contains `MEDIA:` directives, so stale or invented assistant paths cannot override real tool artifacts. - Preserve attempt-level tool media after pending media is consumed by stre

### #82906 fix(codex): gate CLI session resume behind plugin approval

- bucket: ready_for_maintainer
- author: LaPhilosophie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:09:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `codex.cli.session.resume` did not consistently pass through plugin approval before node dispatch. - Solution: require a restricted plugin approval for resume, limited to `allow-once` and `deny`. - What changed: the resume policy now requ

### #82909 fix(telegram): repair message cache reply types

- bucket: ready_for_maintainer
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:09:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Repair the Telegram message cache types introduced by the latest reply-chain context changes on `main`. - Keep cached nodes' normalized `messageId` required after normalization so cache upserts can use it without widening to `undefined`. - Narrow

### #85829 Avoid post-run auth success lane delay

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:10:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - move post-run auth-profile success bookkeeping off the reply-blocking embedded-run path - log slow or failed post-run auth-success bookkeeping so future lock contention is visible - redact auth profile IDs in the new slow/failure diagnostics - add

### #82955 fix(install): validate downloaded scripts before execution

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:10:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90013 ## Problem Four code paths in `scripts/install.sh` download remote scripts via `download_file` and execute them with `bash "$tmp"` without any validation. While HTTPS/TLS1.2 protects the transport, truncated downloads, HTML error pages (e.g., CDN

### #82985 feat(plugins): pass engine candidates to MemoryCorpusSupplement.search

- bucket: ready_for_maintainer
- author: ubehera
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:11:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #82984. ## Problem `MemoryCorpusSupplement.search` is designed for reranker-style plugins, but the current contract gives the supplement only `{ query, maxResults?, agentSessionKey? }`. To get candidates to rerank, the supplement has to call `manager.se

### #83041 Fix config patch restart-required notices

- bucket: ready_for_maintainer
- author: xuruiray
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:12:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #46797. This makes config write restart sentinel payloads carry whether the write actually requires a gateway restart, so pending/status summaries can say `Gateway restart required (...)` instead of `Gateway restart config-patch ok (...)`. It

### #83048 fix(a2a): resolve direct/dm announce target from session-key fallback

- bucket: ready_for_maintainer
- author: avatasia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:12:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix announce target resolution fallback for direct-session keys like `agent:main:<channel>:direct:<peerId>` and `...:dm:<peerId>`. - Keep channel plugin routing first (`resolveDeliveryTarget`) and fallback safely when plugin returns null. - Add fo

### #90450 fix(agents): preserve streamed assistant text when Claude CLI result event is empty

- bucket: ready_for_maintainer
- author: totobusnello
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:17:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The claude `stream-json` dialect can emit a final `result` event with **empty text** even though assistant text deltas were already streamed (or the turn was tool-only). Both JSONL parsers trust the final event and discard everything accumulated,

### #90489 fix(sessions): clarify cross-agent visibility guidance

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:18:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Updated cross-agent session visibility errors to name both required controls instead of only `tools.sessions.visibility=all`. - Updated session access tests for the new operator-facing guidance. Fixes #90443 ## Real behavior proof - Behavior

### #90493 fix(skills): stale create proposals with existing targets

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:18:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reconciles pending Skill Workshop `create` proposals when their target skill file already exists in the workspace. - Marks those proposals `stale` during scoped list/inspect flows so the UI and tool surface stop presenting an already-installed ski

### #93080 docs(browser): clarify networkidle is managed-browser only, not existing-session (fixes #80587)

- bucket: ready_for_maintainer
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:22:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Real behavior proof - **Behavior addressed:** Two docs files (`browser-control.md` and `browser.md`) gave contradictory answers about whether `wait --load networkidle` is supported. `browser-control.md` showed it without qualification; `browser.md` stated f

### #79687 fix(agents): emit reasoning stream events to gateway clients without channel callback (AI-assisted)

- bucket: ready_for_maintainer
- author: maxwhipw
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T23:25:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Gateway-connected clients (webchat, custom WebSocket clients) never receive live `agent stream=thinking` events during agent runs, even when the user has set `reasoningLevel: "stream"`. Thinking only surfaces post-run via `chat.histor

### #79702 [AI-assisted] fix(openai): prefix instruction-aware embedding queries

- bucket: ready_for_maintainer
- author: kreucher
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: openai, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:29:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary AI-assisted PR. - Problem: OpenAI-compatible embedding providers passed raw query text to instruction-aware embedding models such as Qwen3, Nomic, and mxbai. - Why it matters: Raw queries produced lower-quality retrieval for instruction-aware embedd

### #90537 Warn on generated wrapper overwrites and status diagnostics

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:51:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - warn before overwriting a customized generated launchd env wrapper during gateway service install/repair/restart rewrite - preserve install warnings in JSON daemon install output - preserve restart overwrite warnings in JSON daemon restart output

### #90571 fix(configure): mask gateway password input in CLI wizard prompt

- bucket: ready_for_maintainer
- author: anurag-bg-neu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T23:52:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? The `openclaw configure --section gateway` wizard echoes the typed Gateway password in cleartext on the terminal. This is reproducible on the latest published CLI with no special setup — anyone using documented onboa

### #90586 fix(telegram): avoid restarts for runtime reloads

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, gateway, size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:52:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Narrow Telegram reload restart prefixes to transport-affecting settings only. - Add a broad Telegram no-op prefix so runtime-only settings like `historyLimit` and `dmPolicy` do not restart the channel. - Add focused gateway reload-plan covera

### #79832 feishu: replace deprecated card V2 `action` container with `column_set`

- bucket: ready_for_maintainer
- author: xiabee
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:00:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #79824. Feishu's V2 card schema dropped the V1 `{ tag: "action", actions: [...] }` container. The Open Platform API now rejects every button-bearing card with: ``` http_status: 400 feishu_code: 230099 feishu_msg : Failed to create card content

### #93072 fix(sessions): preserve titles on release upsert

- bucket: ready_for_maintainer
- author: serkonyc
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, plugin: file-transfer, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-15T00:03:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves existing non-empty `label` and `displayName` during `upsertSessionEntry` replacement writes when the incoming runtime entry omits those fields. - Keeps explicit replacement semantics intact: non-empty titles still replace previous titles

### #83161 fix(telegram): move preview-streamed dedup to channel layer (#80520)

- bucket: ready_for_maintainer
- author: Elarwei001
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:04:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the Telegram "reply appears briefly then disappears" regression reported in #80520. The previous core-layer dedup (#82625 / commit `bd51d8f2dd`) suppressed final payloads matching preview-streamed text but had no path to also signal the channe

### #83227 fix(openai): mark mp3 TTS voice output compatible

- bucket: ready_for_maintainer
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: openai, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:06:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #80317. ## Summary - Fixes OpenAI-compatible TTS voice-note compatibility for configured `responseFormat: "mp3"`. - Reuses the shared media runtime voice-compatibility contract instead of hard-coding OpenAI response formats. - Adds provider and speech-co

### #83368 fix(gateway): preserve raw external session aliases

- bucket: ready_for_maintainer
- author: stainlu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XL, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:09:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #63005. ## Behavior addressed External raw session keys such as `conversation:pair:...` and opaque provider keys such as `Signal:Group:<mixed-case-id>` should survive gateway session-key canonicalization. Any follow-up mutation should keep the raw key a

### #93093 docs(memory): warn about session memory overlap

- bucket: ready_for_maintainer
- author: ZengWen-DT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:10:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Documents that the bundled `session-memory` hook and raw session transcript indexing can cover the same conversation. - Adds guidance to choose one session recall path: keep `memorySearch.sources` at `["memory"]` when using the hook, or disable th

### #83489 Fix gateway service startup race

- bucket: ready_for_maintainer
- author: ThiagoCAltoe
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: refactor-only, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:12:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix a gateway service startup race where one service-mode gateway can kill another healthy gateway listener before the normal gateway lock/startup path runs. - Move service-mode stale listener cleanup behind bind resolution and a `/healthz` probe

### #83492 fix: skip TTS for explicit command replies

- bucket: ready_for_maintainer
- author: honor2030
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:12:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: explicit slash/native command replies such as `/active-memory status` were still passed through final TTS when TTS was configured to synthesize final replies. - Why it matters: command/status output should remain visible text only; speaki
