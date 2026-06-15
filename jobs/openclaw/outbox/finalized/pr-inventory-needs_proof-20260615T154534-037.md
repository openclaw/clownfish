---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-037
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
  - "#67826"
  - "#67836"
  - "#67967"
  - "#68019"
  - "#68046"
  - "#68060"
  - "#68112"
  - "#68129"
  - "#68146"
  - "#68176"
  - "#68180"
  - "#68196"
  - "#68240"
  - "#68257"
  - "#68283"
  - "#68306"
  - "#68307"
  - "#68338"
  - "#68422"
  - "#68455"
  - "#68464"
  - "#68503"
  - "#68506"
  - "#68685"
  - "#68785"
cluster_refs:
  - "#67826"
  - "#67836"
  - "#67967"
  - "#68019"
  - "#68046"
  - "#68060"
  - "#68112"
  - "#68129"
  - "#68146"
  - "#68176"
  - "#68180"
  - "#68196"
  - "#68240"
  - "#68257"
  - "#68283"
  - "#68306"
  - "#68307"
  - "#68338"
  - "#68422"
  - "#68455"
  - "#68464"
  - "#68503"
  - "#68506"
  - "#68685"
  - "#68785"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.202Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 37

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #67826 Telegram: harden setup allowFrom and target resolution

- bucket: needs_proof
- author: devlux76
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:21:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Rebase `bugfix/undefined-trim` onto the latest `main`, harden Telegram `allowFrom` handling and target resolution, and verify with `extensions/telegram/src/setup-surface.test.ts`. Flight test: - `pnpm vitest run extensions/telegram/src/setup-surface.test.ts --

### #67836 feat(memory-core): Memory v2 foundation — sidecar, ingest, rerank (all default-off)

- bucket: needs_proof
- author: BowieSequoia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:21:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Additive foundation for a SQLite-backed Memory v2 sidecar and two pipelines (ingest, rerank). Every surface is wired behind a plugin-config flag and defaults to **off**, so this PR is behaviorally a no-op until a workspace opts in via `memoryV2.ingest.enabled`

### #67967 fix(minimax): disable tool call ID sanitization for Anthropic-compatible API

- bucket: needs_proof
- author: sebykrueger
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: minimax, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:22:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Re-opens #65371 against the current replay-hook API (the original PR was written before the `buildProviderReplayFamilyHooks` factory landed and no longer applies). - **Problem:** MiniMax's Anthropic-compatible API generates its own tool call IDs and

### #68019 feat(memory-core): add multi-strategy chunking support

- bucket: needs_proof
- author: Luuuk12321
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:22:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Memory search chunking was hardcoded to a single fixed-size strategy, offering no flexibility for different document types (markdown-heavy, narrative, multi-lingual, hierarchical) that benefit from different segmentation approaches. -

### #68046 fix: pass through image/audio/resource content blocks in MCP HTTP gateway

- bucket: needs_proof
- author: nightq
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:22:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the HTTP MCP gateway stripping image, audio, and resource fields from tool results. ## Root Cause The `normalizeToolCallContent` function was mapping all content blocks to only `{type, text}`, discarding other fields like `data`, `mimeType`, `

### #68060 feat(memory-lancedb): add smart extraction with atomic fact decomposition

- bucket: needs_proof
- author: Jay-ju
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-lancedb, size: L, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:22:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add LLM-based memory extraction that decomposes conversations into atomic, self-contained memories via a single LLM call. Key design (differs from Pro's multi-pipeline approach): - Single-shot extraction instead of extract→classify→dedup→merge - Atomic fact gr

### #68112 fix(cron): prevent scheduler death when startup catch-up fails

- bucket: needs_proof
- author: alexanderxfgl-bit
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:23:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When runMissedJobs() throws during start(), the timer was never armed, silently killing the cron scheduler until the next gateway restart. ## Root Cause The start() function in src/cron/service/ops.ts calls runMissedJobs() outside of any try/catch, 

### #68129 Fix delivery-ready verification blockers

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: matrix, app: web-ui, scripts, commands, agents, size: XL, extensions: qa-lab, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:23:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR closes the remaining delivery-ready verification blockers for the current branch. It completes three founder-visible fixes: - suppress non-actionable historical task delivery warning noise on operator surfaces - normalize heartbeat `0m` sema

### #68146 fix(gateway): hold startup-gated requests at server until post-attach (closes #67160)

- bucket: needs_proof
- author: sparkeros
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:23:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** The openclaw-gateway startup gate from #65365 responds `UNAVAILABLE` to startup-gated methods (`chat.history`, `models.list`, `sessions.*`, `tools.effective`, `agent.wait`) for the 8–15 s window between `[gateway] ready` and post-atta

### #68176 CLI: bake git commit at build time so --version reports built commit not live HEAD [AI-assisted]

- bucket: needs_proof
- author: sparkeros
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:23:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #68148. ## Summary Before: `node dist/index.js --version` reports the current value of `.git/HEAD`, which can drift past the commit the binary was actually built from. After: the short SHA is baked into `dist/` at build time as a tsdown compile-time defi

### #68180 fix(daemon): add aliases/default/bin to Linux fnm PATH resolver (fixes #68169)

- bucket: needs_proof
- author: Jimmy-xuzimo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:23:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fix issue #68169: Linux service PATH resolver now checks both aliases/default/bin (modern fnm) and current/bin (legacy fnm).

### #68196 fix(agents): post-timeout compensation in sessions_send

- bucket: needs_proof
- author: glfruit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:24:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Fixes #68065 `sessions_send` with a non-zero timeout previously returned `status=timeout` whenever the wait window expired, even when the target agent had already accepted the message and produced a reply after the window closed. ### Behavior contract | Sce

### #68240 feat(onboard): add --daemon-env flag to openclaw onboard --install-daemon

- bucket: needs_proof
- author: dlebee-agent
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:24:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #67565 ## What Adds a repeatable `--daemon-env KEY=VALUE` option to `openclaw onboard --install-daemon` so that extra `Environment=` lines can be injected directly into the generated systemd unit at bootstrap time — no post-onboard restart required. ```b

### #68257 fix(gateway): stop restarting gateway on OAuth token refresh (auth.profiles.*) [AI-assisted]

- bucket: needs_proof
- author: mkoslacz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:24:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Bug `buildGatewayReloadPlan()` in [`src/gateway/config-reload-plan.ts`](src/gateway/config-reload-plan.ts) treats any unmatched config path as a gateway restart trigger (existing test at L250: *"defaults unknown paths to restart"*). The reload rules list ha

### #68283 fix(approvals): back off native handler bootstrap retries

- bucket: needs_proof
- author: TheDillonHall
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:25:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a native approval handler bootstrap retry storm observed in production when the handler could not connect to the gateway because the local device lacked `operator.approvals`. The previous behavior retried every 1000ms for all startup failures.

### #68306 fix(telegram): reject zero and negative replyToMessageId values

- bucket: needs_proof
- author: 1aifanatic
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:25:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `normalizeTelegramReplyToMessageId` now rejects `0` and negative values in addition to non-numeric inputs - Telegram message IDs are always positive integers; passing `0` or a negative value would result in a `400 Bad Request` from the Telegram AP

### #68307 fix(commands): emit WARN when bootstrap files are truncated

- bucket: needs_proof
- author: 1aifanatic
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:25:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `resolveCommandsSystemPromptBundle` was calling `resolveBootstrapContextForRun` without a `warn` callback - Bootstrap file truncation warnings were silently discarded in the commands / system-prompt path - Wires up `makeBootstrapWarn` backed by a 

### #68338 Parse multiline MEDIA directives

- bucket: needs_proof
- author: evgyur
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:25:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Parse empty `MEDIA:` directives whose media path appears on the following line. - Preserve ordered text/media segments when consuming the continuation path. - Keep the change scoped to media output parsing only; no delivery, routeReply, prompt, co

### #68422 fix(ui): constrain web chat width to 920px for better readability

- bucket: needs_proof
- author: nightq
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:26:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #68369 The "new chat" welcome state and message thread in the web dashboard were stretching to the full width of the content area instead of being constrained to a readable column width. This is a regression fix. ## Root Cause had no or constr

### #68455 feat(feishu): allow custom accountId during Feishu channel onboarding

- bucket: needs_proof
- author: ahbi1006-hue
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:26:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When adding a second Feishu IM channel in the same OpenClaw instance, the accountId is always forced to DEFAULT_ACCOUNT_ID ("default"), making it impossible to register multiple independent Feishu bots. ## Changes - `extensions/feishu/src/setup-surf

### #68464 Harden subagent completion delivery

- bucket: needs_proof
- author: nnlevy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: imessage, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:26:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - persist a per-run delivery claim and user-safe delivery payload for subagent completions - route active-parent completion announces queue-first with fail-closed semantics instead of direct-first fallback behavior - harden iMessage delivery normali

### #68503 status: reduce diagnosis noise in status --all

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:26:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: $## Summary\n- filter routine gateway tail noise and wrapper residue from `status --all` diagnosis output\n- group repeated lane-wait, subagent-end, detached-flow, and context-overflow diagnostics into concise summaries\n- stop surfacing unrelated fallback `Ga

### #68506 status: improve degraded-state recovery guidance

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:26:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: $## Summary\n- add clearer cause and next-step guidance for degraded `status --all` diagnosis states\n- classify gateway log and health failures into actionable recovery hints instead of raw errors alone\n- cover invalid config, unreachable/query-failed gatewa

### #68685 fix(config): strip obsolete memorySearch keys before schema validation (#68664)

- bucket: needs_proof
- author: Tmalone1250
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:28:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: Obsolete `memorySearch` keys (`chunkSize`, `chunkOverlap`, `maxResults`) in `agents.defaults` cause schema validation to fail because the current migration path moves the root key but fails to strip stale sub-keys before `validateConf

### #68785 feat: add circuit breaker for command lane saturation

- bucket: needs_proof
- author: chrisabad
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:28:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add `CommandLaneCircuitBreakerError` and opt-in circuit breaker options (`circuitBreakerDepth`, `circuitBreakerWaitMs`) to `enqueueCommandInLane`. Enable by default for the main run lane: depth >= 9 or oldest queued entry wait >= 600s triggers the b

