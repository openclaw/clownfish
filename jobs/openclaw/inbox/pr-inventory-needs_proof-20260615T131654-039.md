---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-039
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
  - "#85716"
  - "#85727"
  - "#85745"
  - "#85747"
  - "#85758"
  - "#84987"
  - "#85833"
  - "#85932"
  - "#92751"
  - "#86053"
  - "#86064"
  - "#86079"
  - "#86168"
  - "#86175"
  - "#86421"
  - "#92692"
  - "#86460"
  - "#86491"
  - "#86605"
  - "#86622"
  - "#86681"
  - "#86716"
  - "#86749"
  - "#86936"
  - "#86955"
  - "#87046"
  - "#88810"
  - "#87083"
  - "#87088"
  - "#87092"
  - "#87100"
  - "#87119"
  - "#87122"
  - "#87164"
  - "#87206"
  - "#87260"
  - "#87275"
  - "#92455"
  - "#82303"
  - "#86711"
cluster_refs:
  - "#85716"
  - "#85727"
  - "#85745"
  - "#85747"
  - "#85758"
  - "#84987"
  - "#85833"
  - "#85932"
  - "#92751"
  - "#86053"
  - "#86064"
  - "#86079"
  - "#86168"
  - "#86175"
  - "#86421"
  - "#92692"
  - "#86460"
  - "#86491"
  - "#86605"
  - "#86622"
  - "#86681"
  - "#86716"
  - "#86749"
  - "#86936"
  - "#86955"
  - "#87046"
  - "#88810"
  - "#87083"
  - "#87088"
  - "#87092"
  - "#87100"
  - "#87119"
  - "#87122"
  - "#87164"
  - "#87206"
  - "#87260"
  - "#87275"
  - "#92455"
  - "#82303"
  - "#86711"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.480Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 39

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #85716 fix(agents,gateway): three subagent announce delivery failures in loopback token-auth setups

- bucket: needs_proof
- author: jailbirt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:53:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Three related bugs that break subagent completion delivery when running OpenClaw with loopback token-auth (e.g. Google Chat channel, `sessions_spawn` orchestration pattern). All three were found and validated on a production Linux/GCP deployment: Op

### #85727 docs: add first run setup steps to CONTRIBUTING.md

- bucket: needs_proof
- author: Arvuno
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:53:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Added "First Run Setup" section to CONTRIBUTING.md with step-by-step instructions - Covers API key setup, doctor verification, gateway startup, and quick test - Added links to full config and provider docs ## Problem New contributors didn't have c

### #85745 fix(discord): add configurable REST API timeout via channels.discord.apiTimeoutMs

- bucket: needs_proof
- author: AuroraBrain666
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:53:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `channels.discord.apiTimeoutMs` to the Discord channel config schema (max 120000ms). Threads it through to `RequestClient` where the REST timeout was previously hardcoded at 15s. ## Root Cause Large guild operations (ban lists, channel enumerat

### #85747 fix(agents): add worker thread pool for event-loop isolation of model calls

- bucket: needs_proof
- author: AuroraBrain666
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, gateway, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:53:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Offloads LLM API `fetch()` calls to a bounded `worker_threads` pool to prevent event-loop starvation on the main gateway thread during long-running streaming model responses. ## Root Cause Model API calls (Chat Completions, streaming LLM responses) 

### #85758 feat: add retries field to HealthCheckRunContext for transient failure handling

- bucket: needs_proof
- author: Arvuno
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:54:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Added `retries?: number` field to `HealthCheckRunContext` interface - Implemented retry loop in `runRunnableHealthCheck` with exponential backoff (100ms × attempt) - Add `retries` field to `HealthRepairContext` interface - Full test coverage for r

### #84987 fix(models): omit plaintext api keys from models.json

- bucket: needs_proof
- author: junn-dev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:55:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #11829. This implements the Layer 1 hardening for `models.json` generation: - omit plaintext provider `apiKey` values before serializing agent-visible `models.json` - preserve non-secret auth markers such as known environment variable markers so marker-b

### #85833 fix(sandbox): add apt-get retries and --fix-missing to Dockerfiles

- bucket: needs_proof
- author: wahajahmed010
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, docker, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:56:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `-o Acquire::Retries=5` to both `apt-get update` and `apt-get install` commands, and `--fix-missing` to `apt-get install`, in both `scripts/docker/sandbox/Dockerfile` and `scripts/docker/sandbox/Dockerfile.common`. This makes sandbox image buil

### #85932 fix(voice-call): suppress duplicate OpenAI initial greeting (#85846)

- bucket: needs_proof
- author: lml2468
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: voice-call, size: M, extensions: openai, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:59:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #85846 ## Summary Outbound OpenAI realtime voice calls with an initial message could arm two first-turn response sources: OpenClaw's explicit `triggerGreeting()` path and OpenAI server VAD `create_response`. This keeps the explicit greeting as the startu

### #92751 #91868: Include raw stale path in transcript candidate resolution

- bucket: needs_proof
- author: Pandah97
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:01:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Constrain `resolveSessionTranscriptCandidates()` to only include a raw stale `sessionFile` path when it resolves under a known OpenClaw-owned legacy transcript root (`~/.openclaw/sessions/`). Without this fix, legacy `.jsonl` transcript files at `~/

### #86053 fix(codex): honor explicit native tool allowlists

- bucket: needs_proof
- author: jaywillingham
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:03:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - enable Codex app-server native code mode when runtime toolsAllow explicitly includes the full native surface: exec/read/write/edit - keep dynamic-only and partial-native allowlists fail-closed - preserve current memory-flush, node exec host, and s

### #86064 fix(agents): count exec-path openclaw cron add in successfulCronAdds

- bucket: needs_proof
- author: martingarramon
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:03:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### What This PR fixes an issue where the `successfulCronAdds` counter was not incremented when an agent ran `openclaw cron add` as a shell command via `exec` or `bash`. ### Why The existing logic only checked for the structured `cron` tool. This caused the ag

### #86079 fix(codex): verify plugin elicitation source

- bucket: needs_proof
- author: LaPhilosophie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:03:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Prevents Codex plugin app elicitations from being auto-approved solely because the request self-declares `_meta.app_id`. - Requires the request source to be verified before plugin destructive-action policy is appli

### #86168 fix(edit): show best matching region on mismatch instead of raw file head

- bucket: needs_proof
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:07:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `edit` oldText doesn't match the file contents exactly, the current error hint shows the **first 800 characters** of the file regardless of where the closest match might be. For large files this is rarely helpful — the model sees the file heade

### #86175 fix(auto-reply): turn-level NO_REPLY substrate-leak suppression (buffer-until-final)

- bucket: needs_proof
- author: todd-chisel
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:07:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes the substrate leak that delivers agent reasoning text to operator chats when a `NO_REPLY` final follows leading `block`-kind payloads in the same turn. ## The leak shape From the 2026-05-24 forensic (fleet-ops session `cf23b629`): ``` [block]

### #86421 Allow SubRip subtitle media uploads

- bucket: needs_proof
- author: kittenofdeath
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:19:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - map .srt files to application/x-subrip - allow validated SubRip caption files through host-read media sends - add coverage for valid and binary-disguised .srt files ## Tests - npx vitest run src/media/web-media.test.ts

### #92692 fix(doctor): suppress false-positive group allowlist warning for parent-only channel records (#92684)

- bucket: needs_proof
- author: sheyanmin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:20:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix false-positive doctor warning: when a channel has per-account configs with populated `groupAllowFrom` lists, the empty top-level `groupAllowFrom` no longer triggers a misleading "all group messages will be silently dropped" warning. ## Root Caus

### #86460 Redesign Overview as an operator-first OpenClaw dashboard

- bucket: needs_proof
- author: homer-byte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, extensions: diagnostics-otel, extensions: memory-core, scripts, agents, size: XL, channel: qqbot, extensions: diagnostics-prometheus, proof: supplied, extensions: openrouter, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T03:21:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rework the connected Overview page into an operator-first dashboard instead of a setup/status landing page. - Keep first-run Gateway Access and Snapshot cards intact for disconnected installs, then move them below daily operating signals once the 

### #86491 [codex] mirror proactive deliveries into session transcripts

- bucket: needs_proof
- author: VishalJ99
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:21:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Mirror proactive cron announce/failure delivery into custom/main session transcripts with a stable `cron-announce-mirror:v1:*` idempotency key. - Keep routed direct, legacy dm, group, and channel session transcripts out of cron mirrors, including 

### #86605 feat(stepfun): register image generation provider for image_generate routing

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: stepfun, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:23:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Register image generation providers for both `stepfun` (standard) and `stepfun-plan` StepFun provider surfaces so `image_generate` routes requests to StepFun's image API endpoints - Add `createOpenAiCompatibleImageGenerationProvider`-based provide

### #86622 fix(tavily): pass api_key in request body instead of Authorization header

- bucket: needs_proof
- author: masonarc-b
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: XS, extensions: tavily, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:24:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When Tavily is configured as the web search provider (`tools.web.search.provider: "tavily"`) with a valid API key, all `web_search` calls return **0 results** with no error message. This affects all agents including family bots, security research, a

### #86681 Clarify secrets runtime plugin source test hook

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:25:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Clarifies a secrets runtime test-hook comment to avoid implying runtime origin allowlist behavior. ## Scope Comment-only advisory cleanup in `src/secrets/runtime.ts`. No runtime behavior, secret resolution behavior, auth store loading, plugin metada

### #86716 fix(discord): harden reply delivery accounting

- bucket: needs_proof
- author: Steady-ai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, triage: refactor-only, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:25:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Scope - Return an explicit delivery result from Discord interaction replies so expired interactions are not counted as delivered. - Fail final Discord delivery when sanitizer removes all visible/sendable payload content. - Normalize Discord message send ext

### #86749 fix: install gogcli and add linuxbrew to global PATH

- bucket: needs_proof
- author: jarvis-ai-gregmoser
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:26:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes missing gogcli and PATH issues for sandbox image.

### #86936 fix(gateway): persist media metadata in agent.request transcripts

- bucket: needs_proof
- author: peterdsp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:32:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Images shared via the iOS Share Extension reach the gateway through `agent.request` node events. The handler correctly parses attachments via `parseMessageWithAttachments`, but never persists the decoded media to disk or emits transcript updates car

### #86955 fix(runtime): isolate workers and bound cron top-off

- bucket: needs_proof
- author: Joshtt23
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, extensions: codex, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:32:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - wrap Linux service-managed Codex app-server and supervised child launches in user systemd scopes under openclaw-workers.slice, with an opt-out to avoid recursive scopes - make cron reserve only available run slots, finalize jobs as they finish, an

### #87046 fix(plugins): preserve agent harnesses across empty-plugin-scope reloads

- bucket: needs_proof
- author: tejasphatak
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:34:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > 🤖 **AI-assisted PR** (Claude). Root-cause analysis, patch, and test were AI-generated; the real-environment evidence below is from a human-operated production gateway. ## Summary **Problem:** A config/plugin reload that resolves to an *empty plugin scope* t

### #88810 fix(telegram): silently skip empty-text sends

- bucket: needs_proof
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:35:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Supersedes #59725. The original PR was auto-closed on 2026-04-02 by openclaw-barnacle for the 10-open-PR cap. Reopening it programmatically fails because the close `stateReason` is `COMPLETED` plus the branch was force-pushed since, so this is a fresh PR carry

### #87083 fix(agents): break bootstrap-context append doomloop with a recent-entry circuit breaker

- bucket: needs_proof
- author: YOMXXX
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:35:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `FULL_BOOTSTRAP_COMPLETED_PERSIST_LIMIT = 10` plus two pure helpers (`countRecentCompletedBootstrapTurns`, `hasReachedBootstrapPersistLimit`) in `src/agents/bootstrap-files.ts`. The helpers reuse the existing tail-scan budget (`CONTINUATION_SC

### #87088 fix(reply): flush memory for pending in-turn auto-compaction even when tokens drop below threshold

- bucket: needs_proof
- author: YOMXXX
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:36:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Make `shouldRunMemoryFlush` in `src/auto-reply/reply/memory-flush.ts` honor the explicit `compaction.memoryFlush.enabled` contract for in-turn auto-compaction: when the session entry's `compactionCount` has moved past `memoryFlushCompactionCount` 

### #87092 Update contributors in CONTRIBUTING.md

- bucket: needs_proof
- author: wmaulanaaishq
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: docs-discoverability, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T03:36:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Added Wahyu Maulana Ishaq to the contributors list. ## Summary What problem does this PR solve? * Missing recognition for community contribution. This PR adds my profile to the contributor list in `CONTRIBUTING.md`. Why does this matter now? * I have been acti

### #87100 fix(channels): defensively handle non-string prompter.text() results in token replace flow

- bucket: needs_proof
- author: YOMXXX
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:36:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop calling `.trim()` directly on `await prompter.text({...})` in `promptSingleChannelToken` (`src/channels/plugins/setup-wizard-helpers.ts`) and in the `runTextInputSteps` block inside `runChannelSetupWizard` (`src/channels/plugins/setup-wizard.

### #87119 fix(plugins): resolve openclaw/plugin-sdk/<subpath> imports without root-alias.cjs fall-through (AI-assisted)

- bucket: needs_proof
- author: mbennett37
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:36:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Imports like `openclaw/plugin-sdk/agent-harness-task-runtime` could fall through to `dist/plugin-sdk/root-alias.cjs/agent-harness-task-runtime` (a nested-under-a-file path that does not exist), breaking Codex/OpenC

### #87122 Avoid profile cooldowns for provider overloads

- bucket: needs_proof
- author: cbcampos
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:36:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- Record provider overloaded failures without setting auth-profile cooldownUntil\n- Preserve cooldown/disable behavior for rate-limit, auth, and billing failures\n- Update fallback and auth-profile tests for repeated overload attempts\n\n## Testing

### #87164 Fix Session File Corruption During Embedded Retry (critical bug)

- bucket: needs_proof
- author: wmaulanaaishq
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:37:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary What problem does this PR solve? Fixes critical bug where session files become permanently corrupted with an EmbeddedAttemptSessionTakeoverError if an embedded retry fails while the model I/O lock is released. Previously, if the session file fingerprin

### #87206 fix(memory-core): recover narrative text from trajectory when session archived early (#87182)

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:39:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes #87182 where the gateway's post-completion session cleanup races with memory-core's narrative extraction, causing model-generated narrative text to be silently discarded. ## Root Cause After subagent runs complete, the gateway immediat

### #87260 docs: add secure multi-agent routing pattern for research workflows

- bucket: needs_proof
- author: SeverinQuan
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:40:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a documentation example for a secure Multi-Agent routing pattern in OpenClaw. The pattern separates routine execution from research-heavy workflows: - `main Agent` remains the default interaction and execution entrypoint. - `main Agent`

### #87275 fix(tools): treat non-positive gateway timeoutMs as absent

- bucket: needs_proof
- author: valkyriweb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:40:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveGatewayOptions` in `src/agents/tools/gateway.ts` clamps an optional `opts.timeoutMs` via `Math.max(1, Math.floor(opts.timeoutMs))` before falling back to the 30s default. A caller-supplied `0` was rewritten to `1ms` instead of falling back t

### #92455 fix(issue): resolve #92451 v2026.6.x system prompt bloat causes instruction following d

- bucket: needs_proof
- author: xuwei-xy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-15T03:42:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 修复 issue #92451 中报告的问题。 ### Bug type Regression (worked before, now fails) ### Beta release blocker No ### Summary v2026.6.x added ~20+ new default tools/system instructions to the initial context (MEDIA, Control UI, Sa ## Changes - `src/agents/comm

### #82303 feat(telegram): add progress assistant preview lane

- bucket: needs_proof
- author: Fuma2013
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, agents, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:54:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `streaming.progress.assistantPreview` to enable assistant partial previews while staying in `mode: "progress"` - keep the existing Telegram progress/tool/status draft on the answer lane and stream assistant partial text on a separate transient

### #86711 fix(acp): skip oneshot sessions during startup identity reconcile

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:59:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #72013 ## Summary Gateway startup identity reconciliation attempts to resolve pending ACP session identities. Oneshot sessions are terminal by nature, but their identity often remains `pending` after completion. The reconcile loop tries to ensure a runti

