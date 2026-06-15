---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-023
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
  - "#61485"
  - "#92963"
  - "#92933"
  - "#54652"
  - "#59816"
  - "#65058"
  - "#65382"
  - "#65962"
  - "#66213"
  - "#66720"
  - "#66735"
  - "#67420"
  - "#67433"
  - "#67623"
  - "#67669"
  - "#67734"
  - "#67758"
  - "#67761"
  - "#67782"
  - "#67788"
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
cluster_refs:
  - "#61485"
  - "#92963"
  - "#92933"
  - "#54652"
  - "#59816"
  - "#65058"
  - "#65382"
  - "#65962"
  - "#66213"
  - "#66720"
  - "#66735"
  - "#67420"
  - "#67433"
  - "#67623"
  - "#67669"
  - "#67734"
  - "#67758"
  - "#67761"
  - "#67782"
  - "#67788"
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
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.476Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 23

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #61485 feat(plugins): upgrade llm_input/llm_output hooks from fire-and-forget to modifying

- bucket: needs_proof
- author: parthamehta123
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T12:43:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `llm_input` and `llm_output` plugin hooks are fire-and-forget (observe-only). Plugins cannot block, modify, or redact LLM calls/responses. - Why it matters: Plugin authors need the ability to intercept LLM traffic for compliance, content 

### #92963 doctor: accept KeepAlive dict form in launchd service audit

- bucket: needs_proof
- author: dertbv
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T12:55:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The launchd plist audit (`src/daemon/service-audit.ts`) tests only the bare boolean form: ```ts const hasKeepAlive = /<key>KeepAlive<\/key>\s*<true\s*\/>/i.test(content); ``` So `openclaw doctor` reports **"LaunchAgent is missing KeepAlive=true"** for any plis

### #92933 fix(auto-reply): persist CLI and gap-fill assistant responses to transcript

- bucket: needs_proof
- author: Itsmeakash248
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T13:06:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Ensures that assistant responses from CLI backends (e.g. agy) and embedded gap-fills are persisted to the session transcript in the auto-reply path. Previously, these were returned to the user but not saved to the `.jsonl` file, causing them to disappear on pa

### #54652 test(auth): align device auth store scopes

- bucket: needs_proof
- author: giulio-leone
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:08:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - align `device-auth-store` expectations with the already-landed implied-scope normalization - keep the fix scoped to the stale test surface only ## Why Current `main` expands `operator.write` to include `operator.read` in `src/shared/device-auth.ts

### #59816 fix(discord): record history entry when dropping bot message in allowBots=mentions mode

- bucket: needs_proof
- author: Hou-Yufan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:10:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When `allowBots=mentions` is configured on a Discord account, bot messages that are dropped (no mention) skip `recordPendingHistoryEntryIfEnabled()`, causing gaps in guild channel history. Other bots in the same channel lose context a

### #65058 fix(googlechat): accept add-on space lifecycle payload variants

- bucket: needs_proof
- author: Yanhu007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, stale, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:11:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The Google Chat add-on payload parser only handled `chat.messagePayload`, rejecting valid `addedToSpacePayload` and `removedFromSpacePayload` events as "invalid payload". Expand `parseGoogleChatInboundPayload` to recognise all three payload variants and map to

### #65382 fix(ui): format common cron intervals

- bucket: needs_proof
- author: OwenYWT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:11:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - format common cron patterns (every N minutes/hours) so the control tooltip reads "Every ..." instead of raw cron syntax - keep the existing fallback for unusual schedules and preserve timezone annotations ## Testing - pnpm --dir ui test src/ui/pre

### #65962 fix(build): add missing config/sessions/store.runtime entry

- bucket: needs_proof
- author: JQRobert
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:11:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Runtime error when session-override loads the session store: ``` Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/path/to/dist/store.runtime-eZQ7KuiZ.js' ``` ## When This Bug Is Triggered This bug is triggered when users configure **multiple auth 

### #66213 fix(ci): add post-publish asset verification for macOS stable releases

- bucket: needs_proof
- author: soumikbhatta
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:11:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `verify-release-assets.yml` — polls for macOS binaries after a stable GitHub release is published - add CODEOWNERS entry for `appcast.xml` requiring maintainer review ## Why v2026.4.12 stable was published at 2026-04-13T12:35:53Z with 0 assets

### #66720 fix: strip runtime-specific properties from sessions_spawn tool schema for provider compatibility

- bucket: needs_proof
- author: Gi99lin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:12:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When OpenClaw sends the `sessions_spawn` tool schema to non-native OpenAI-compatible providers (e.g., via proxy gateways like OmniRoute → MiniMax, Codex proxy, or other OpenAI-compatible endpoints), the schema includes **all** runtime-specific param

### #66735 fix(daemon): hand off systemd self-restarts

- bucket: needs_proof
- author: alexlomt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: L, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:13:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On Linux/systemd, restarting the gateway from inside the running gateway service can kill the calling CLI process with `SIGTERM` even though the service restart succeeds. This happens because the restart command runs inside the same `openclaw-gatewa

### #67420 feat(memory): per-agent dreaming control

- bucket: needs_proof
- author: aaronwong1989
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:16:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add ability to selectively enable/disable dreaming for specific agents, addressing OOM issues when all agents run dreaming simultaneously. ## Problem Gateway was killed by OOM Killer (exceeding 6GB MemoryMax) because all 13 agents ran dreaming simul

### #67433 feat(hooks): add waitForResult mode to POST /hooks/agent endpoint

- bucket: needs_proof
- author: adapepper
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:17:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements the `waitForResult` mode for `POST /hooks/agent` as proposed in #49019. When a caller sends `{"message": "...", "waitForResult": true}`, the endpoint holds the connection open until the agent turn completes and returns a machine-readable 

### #67623 fix: Change the scope of the variable SANDBOX_BACKEND_FACTORIES from …

- bucket: needs_proof
- author: earon-han
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: blank-template, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:18:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: …module-level to process-level global(#67610) ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <su

### #67669 Add custom-test sub command to verify configured custom providers

- bucket: needs_proof
- author: qidu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:19:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: It is easy to make errors when user configuring custom provider models by themselves. - Why it matters: verify custom llm models to make user understand why openclaw works or not. - What change

### #67734 fix(feishu): silence sdk logs during setup probe

- bucket: needs_proof
- author: zhyongrui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:19:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - silence Feishu SDK logger output during setup/status probing - avoid reusing the shared runtime client when a custom probe logger is supplied - add regression coverage for probe/client logger behavior ## Testing - node scripts/run-vitest.mjs run e

### #67758 fix(google): correct gemini preview model versions

- bucket: needs_proof
- author: eyjohn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:19:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Minor fix for incorrect model from existing, I didn't think the template was necessary given the model referenced doesn't exist, so this wouldn't work, and the default is actually specified correctly as -3-flash

### #67761 fix: remove truncated preview from inbound system events

- bucket: needs_proof
- author: jaredgalloway
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, channel: slack, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:19:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Removes the truncated 160-char message preview from system event headers for Slack, MS Teams, and Mattermost channels. ## Problem System events were including a truncated preview of the message body: ``` System: [2026-04-15 21:56:40 MDT] Slack DM fr

### #67782 fix(telegram): skip delete before non-empty command sync

- bucket: needs_proof
- author: p3nchan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:20:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skip `deleteMyCommands()` before syncing a non-empty Telegram command menu - preserve explicit deletes when syncing an empty menu - add targeted tests for both paths and stabilize the unchanged-hash test ## Why PR #32059 already avoids unnecessary

### #67788 fix: improve cli help and gateway guidance

- bucket: needs_proof
- author: Dodo1021
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:20:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - expand nested help more reliably for deeper `--help` invocations - clarify gateway foreground runtime vs supervised service commands - improve gateway status/auth/help output and models auth guidance ## Testing - corepack pnpm install --frozen-loc

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

