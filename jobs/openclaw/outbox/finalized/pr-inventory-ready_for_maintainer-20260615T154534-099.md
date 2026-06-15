---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-099
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
  - "#83118"
  - "#83161"
  - "#83227"
  - "#83275"
  - "#83296"
  - "#83305"
  - "#83368"
  - "#93093"
  - "#83489"
  - "#83492"
  - "#83531"
  - "#83590"
  - "#93002"
  - "#83718"
  - "#83760"
  - "#83842"
  - "#90449"
  - "#90628"
  - "#90653"
  - "#90659"
  - "#90672"
  - "#90689"
  - "#90694"
  - "#90703"
  - "#90727"
cluster_refs:
  - "#83118"
  - "#83161"
  - "#83227"
  - "#83275"
  - "#83296"
  - "#83305"
  - "#83368"
  - "#93093"
  - "#83489"
  - "#83492"
  - "#83531"
  - "#83590"
  - "#93002"
  - "#83718"
  - "#83760"
  - "#83842"
  - "#90449"
  - "#90628"
  - "#90653"
  - "#90659"
  - "#90672"
  - "#90689"
  - "#90694"
  - "#90703"
  - "#90727"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.213Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 99

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #83118 feat(hooks): support tokenFile auth secrets

- bucket: ready_for_maintainer
- author: honor2030
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:03:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `hooks.tokenFile` as a file-backed alternative to inline `hooks.token`. - Share token resolution across gateway hooks, startup auth hardening, and Gmail hook runtime/setup. - Update schema/help/path normalization/security docs and add regressi

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

### #83275 fix(secrets): audit config backup secret residues

- bucket: ready_for_maintainer
- author: jynbil1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:07:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - scan adjacent openclaw.json backup and rejected-payload artifacts for plaintext secret fields before active config validity gates - include openclaw.json.rejected.* beside .bak, .bak.*, .pre-update, and .clobbered.* audit coverage - document the r

### #83296 Avoid writing plaintext profile keys to models.json

- bucket: ready_for_maintainer
- author: JackSpiece
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:08:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This keeps plaintext auth-profile API keys out of generated `models.json`. The provider normalization path already preserves env and SecretRef-backed credentials as markers. Plaintext auth-profile keys could still be copied into the generated provid

### #83305 ci: add regression detector checkout gate

- bucket: ready_for_maintainer
- author: bryangauvin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:08:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a dedicated regression detector gate workflow job for bug-fix evidence - check out the repository before running the gate script so the CI job has repo files available - require reviewer approval for market-sensitive fixes ## Evidence Pre-fix 

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

### #83531 feat(feishu): expose reaction tool

- bucket: ready_for_maintainer
- author: Sailiono
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:13:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # PR 2 draft: Feishu reaction tool registration Title: ```text feat(feishu): expose reaction tool ``` ## Summary - Add an agent-callable `feishu_reaction` tool with `add`, `remove`, and `list` actions. - Wire the tool through Feishu tool config defaults, confi

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

### #90449 fix(matrix): preserve threaded replies and owner commands

- bucket: ready_for_maintainer
- author: sibbl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: S, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T00:18:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Fixes Matrix replies in threads so outbound messages preserve the thread root and the current-event reply fallback. - Fixes Matrix owner commands such as `/status` and `/model` being rejected by the Matrix pre-disp

### #90628 fix(matrix): prune finished fake-indexeddb transactions

- bucket: ready_for_maintainer
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: M, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:23:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: <!-- hermes-auto-maintainer --> ## Summary - Adds a Matrix-owned fake-indexeddb transaction pruner that is installed immediately after `fake-indexeddb/auto` in the Matrix crypto runtime. - Scopes pruning to Matrix rust-crypto IndexedDB stores whose names end w

### #90653 fix(gateway): watch config include files

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:24:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #59616 Relates #41587 Supersedes the closed/unmerged attempts in #59632 and #82698. Replaces #90652, which was auto-closed by the active-PR queue gate. ## Summary - Seed gateway config include watches from the startup `ConfigFileSnapshot` so `$include` d

### #90659 feat(plugins): expose compaction summary with hook opt-in

- bucket: ready_for_maintainer
- author: 5p00kyy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: M, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:24:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #61447. ## Summary - Adds optional `summary` to `after_compaction` hook payloads when compaction produced summary text. - Gates summary delivery behind the existing `plugins.entries.<id>.hooks.allowConversationAccess` policy. - Keeps default/non-trusted 

### #90672 fix(telegram): report blocked group ingress in /status

- bucket: ready_for_maintainer
- author: FilipHarald
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T00:24:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Telegram-only `/status` diagnostic for groups/topics where native commands are authorized but normal group-message ingress would be blocked by group access policy. - Threads optional channel-supplied `StatusNotes` through the shared `/statu

### #90689 fix(agents): align custom provider auth labels with runtime (#82020)

- bucket: ready_for_maintainer
- author: ly85206559
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:24:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix `resolveModelAuthLabel` so `/status` and other UI surfaces show the same auth source as runtime resolution for custom providers like `zai-light`. - Keep per-entry literal `apiKey` bindings labeled as `api-key (models.json)` when runtime also r

### #90694 fix(amazon-bedrock): skip IMDS during credential auto-detection (#64891)

- bucket: ready_for_maintainer
- author: ly85206559
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, extensions: amazon-bedrock, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:24:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop Bedrock memory auto-detection from probing AWS IMDS (`169.254.169.254`) when no AWS credential signals are configured. - Keep the AWS SDK default credential chain available for explicitly selected/configured Bedrock memory providers, includin

### #90703 Support compat reasoning levels for thinking xhigh

- bucket: ready_for_maintainer
- author: Alex-Govorov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:24:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Allows OpenAI-compatible reasoning models to expose `xhigh` thinking when the model configuration explicitly declares API support through `compat.supportedReasoningEfforts`. - Keeps `xhigh` hidden for reasoning mod

### #90727 fix(memory): refresh rebuilt index handles

- bucket: ready_for_maintainer
- author: dr00-eth
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:25:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes a persistent live-manager failure where the injected memory search path can keep reporting `index metadata is missing` after a separate CLI/status manager has rebuilt the durable SQLite index successfully. - Ensures safe atomic reindex write

