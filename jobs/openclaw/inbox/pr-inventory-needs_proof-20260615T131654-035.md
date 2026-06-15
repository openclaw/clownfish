---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-035
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
  - "#91211"
  - "#93082"
  - "#93083"
  - "#92966"
  - "#93091"
  - "#90511"
  - "#90542"
  - "#90561"
  - "#90577"
  - "#90582"
  - "#90603"
  - "#90618"
  - "#93086"
  - "#79192"
  - "#83174"
  - "#83178"
  - "#83203"
  - "#83242"
  - "#83254"
  - "#83295"
  - "#83306"
  - "#83458"
  - "#83537"
  - "#83629"
  - "#83630"
  - "#83665"
  - "#83689"
  - "#83703"
  - "#83715"
  - "#83754"
  - "#83819"
  - "#83826"
  - "#90371"
  - "#83862"
  - "#90636"
  - "#90641"
  - "#90661"
  - "#90683"
  - "#90700"
  - "#90095"
cluster_refs:
  - "#91211"
  - "#93082"
  - "#93083"
  - "#92966"
  - "#93091"
  - "#90511"
  - "#90542"
  - "#90561"
  - "#90577"
  - "#90582"
  - "#90603"
  - "#90618"
  - "#93086"
  - "#79192"
  - "#83174"
  - "#83178"
  - "#83203"
  - "#83242"
  - "#83254"
  - "#83295"
  - "#83306"
  - "#83458"
  - "#83537"
  - "#83629"
  - "#83630"
  - "#83665"
  - "#83689"
  - "#83703"
  - "#83715"
  - "#83754"
  - "#83819"
  - "#83826"
  - "#90371"
  - "#83862"
  - "#90636"
  - "#90641"
  - "#90661"
  - "#90683"
  - "#90700"
  - "#90095"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.479Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 35

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91211 feat(tui): classify every model as CLI / OAuth / API in /model picker

- bucket: needs_proof
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:21:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary PR #91168 introduced a `runtimeLabel` field that only emitted `"CLI"` for models pinned to a CLI agentRuntime. Non-CLI models kept their old description (the human-readable model name), so users could not tell from the picker whether a given model i

### #93082 fix(ui): show coalesced update restarts

- bucket: needs_proof
- author: goutamadwant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:23:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes a Control UI update feedback gap where `update.run` can return `ok: true` with `restart.coalesced`, but the UI treated that as a normal silent success. This matters now because the gateway already exposes the in-progress restart signal

### #93083 fix(agents): resolve bound agent workspace for unscoped inbound session keys (fixes #92903)

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:25:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92903 ## Summary Multi-agent inbound turns could load the wrong workspace: a channel message routed to a bound, non-default agent injected its system-prompt **Project Context** (`SOUL.md`/`AGENTS.md`/`USER.md`/`IDENTITY.md`) from the **default** workspa

### #92966 fix(session-memory): deduplicate consecutive assistant messages with identical text

- bucket: needs_proof
- author: hnlqt666
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:47:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When thinking/reasoning is enabled, the session JSONL stores both the original assistant message (with thinking blocks) and a stripped copy (without thinking blocks), causing session-memory hook to produce duplicate entries. Skip consecutive assistant messages

### #93091 fix(feishu): recover CJK filenames from JSON file_name field (fixes #81103)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:51:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem CJK filenames in inbound Feishu messages produce mojibake when the filename is delivered via the JSON `file_name` field (distinct from the Content-Disposition path already fixed in #72388). The `recoverUtf8FileNameFromLatin1Header` helper is called 

### #90511 fix: allow Discord DM reads for allowlisted peers

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:51:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Allow Discord `readMessages` / `message.read` to authorize one-to-one DM history reads when the fetched DM recipient is already allowlisted in `channels.discord.allowFrom`. ## Changes - normalize the Discord DM allowlist once inside the messaging re

### #90542 fix(mentions): enforce scoped regex pattern allowlists

- bucket: needs_proof
- author: patrick-slimelab
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: matrix, channel: slack, channel: telegram, channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:51:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Follow-up to #70864. ## Summary - Treat explicit provider `mentionPatterns.mode: "allow"` as an allowlist scoped by `allowIn` instead of enabling regex mention patterns everywhere except `denyIn`. - Preserve backward-compatible permissive behavior when no prov

### #90561 fix(agents): harden subagent announce retry and error handling

- bucket: needs_proof
- author: FradSer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: mock-only-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:52:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Increase retry budget from 3 to 5 attempts with longer exponential backoff (up to 30s) - Extend announce expiry from 5min to 10min, completion hard expiry from 30min to 45min - Add jitter to retry delays to prevent thundering herd scenarios - Extr

### #90577 fix(ui): show session name in browser title

- bucket: needs_proof
- author: BSG2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:52:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Updates the Control UI browser tab title to include the active session name, for example `Release triage - OpenClaw Control`. - Keeps the static `OpenClaw Control` title when no session is selected. - Syncs the title when the active session change

### #90582 fix: persist sender metadata in group chat JSONL records

- bucket: needs_proof
- author: yichu10c
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:52:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Group chat user messages in session JSONL were missing the `__openclaw` metadata block (senderId, from.id, from.first_name, from.username) that is present in 1:1 direct session messages. This made it impossible for agents and transcript loggers to d

### #90603 fix(secrets): use configured default agent ID in auth/model path discovery (#90573)

- bucket: needs_proof
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:53:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace hard-coded `"main"` with `resolveDefaultAgentId(config)` in the two storage-scan helpers that seed path discovery - Remove the `agentId === "main"` early-exit branches so all configured agents (including `"main"`) resolve through `resolveA

### #90618 fix: recover stuck Control UI chat runs

- bucket: needs_proof
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, clawsweeper, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:53:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Repairs #42258 as the canonical fix path for #42213. - Keeps the stuck-run recovery scoped to the Control UI chat lifecycle and queued-message flush behavior. - Addresses hydrated Greptile findings: do not surface transient background probe failur

### #93086 fix(agents): strip truncation sentinel lines from user-facing text (fixes #82121)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:58:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Internal truncation sentinels (`…(truncated)…`, `...(truncated)...`, `[... N more characters truncated]`) leak into user-facing assistant replies, degrading reply quality and exposing internal implementation details to end users. - *

### #79192 feat(cron): add maintenance-window role isolation

- bucket: needs_proof
- author: JFWaskin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: XL, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:59:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a first-class daily maintenance window for cron and heartbeat execution with hard role isolation and deferred replay. ## What changed - Adds `cron.maintenance` config with `enabled`, `window.start`, `window.end`, `window.timezone`, and `mainten

### #83174 gateway: gate tool invoke until startup hooks are ready

- bucket: needs_proof
- author: constructzero7
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:05:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - gate tools.invoke through the existing startup-unavailable method mechanism so tool invocation returns 503 while startup sidecars/plugins are still loading - propagate unavailableGatewayMethods into the HTTP /tools/invoke path, covering direct HTT

### #83178 fix(memory-flush): fallback to estimatePromptTokensFromSessionTranscript when usage data is unavailable

- bucket: needs_proof
- author: njuboy11
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:05:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #83177 — When a model provider (e.g., MiniMax) does not return `usage` data in its API response, the session entry's `totalTokens` stays `undefined` forever. The **preflight compaction path** already handles this via `estimatePromptTokensFromS

### #83203 fix(gateway): separate finish_reason from content chunks in streaming

- bucket: needs_proof
- author: niuma996
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:05:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Split writeAssistantContentChunk (always finish_reason: null) from a new writeAssistantFinishChunk (empty delta, finish_reason: stop) - Emit the finish chunk from the lifecycle end handler, the error path, and the finally fallback path - Updated s

### #83242 fix(ui): clarify imported insights cluster tabs

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: mock-only-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:06:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #80301. ## Summary - Turns the Imported Insights cluster chips into a labeled, more prominent horizontal tab bar. - Adds cluster counts directly to each tab so users can scan chats, sensitive clusters, and candidate signals before switching. - Adds ARIA 

### #83254 fix(telegram): stamp bot api user agent

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, P2, rating: 🦐 gold shrimp, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:07:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #80446. ## Summary - Stamps Telegram Bot API outbound fetches with a stable versioned `User-Agent` of `OpenClawBot/<telegram-plugin-version>` when callers have not explicitly provided one. - Applies the header at the Telegram transport boundary, includin

### #83295 perf(agents): bootstrap context cache, PI model-discovery cache, auth-store option keys, tool-descriptor kill switch

- bucket: needs_proof
- author: atlaspetco
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:08:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Rebased follow-up to #76348. Since #76348 was filed, upstream landed the simpler half it proposed — the per-session bootstrap-files snapshot cache (`src/agents/bootstrap-cache.ts`'s `getOrLoadBootstrapFiles`). This PR isolates and re-bases the **still-relevant

### #83306 feat(browser): add browserbase profile driver with per-attach connectUrl resolution

- bucket: needs_proof
- author: esqandil
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:08:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a new `browserbase` profile driver to the OpenClaw browser plugin. Profiles using this driver declare a Browserbase keep-alive session id and an env var name for the API key; on every CDP attach OpenClaw fetches a fresh `connectUrl` from `GET /

### #83458 fix(feishu): preserve ACP topic conversation bindings

- bucket: needs_proof
- author: veryoung
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, channel: feishu, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:12:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Refreshes #50943 onto current `openclaw/main` as a narrow Feishu plugin fix. - Adds Feishu `messaging.resolveInboundConversation` so ACP thread binding uses plugin-owned topic conversation grammar. - Covers topic, sender-scoped topic, and direct c

### #83537 codex: log app-server startup close diagnostics

- bucket: needs_proof
- author: flashosophy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:13:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a structured diagnostic payload for Codex app-server startup-close retry/exhaustion logs. - Include run/session/model/auth/workspace/thread context so startup exits can be diagnosed without guessing which agent/model/session launched the app-s

### #83629 fix(sessions): include subagent metadata in json

- bucket: needs_proof
- author: YuanHanzhong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:15:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add existing spawned-session lineage fields to sessions JSON rows - cover store-backed JSON output for spawned session metadata Fixes #80286 ## Real behavior proof - **Behavior or issue addressed:** `openclaw sessions --json` now includes the stor

### #83630 fix(doctor): preview missing transcript cleanup

- bucket: needs_proof
- author: YuanHanzhong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:15:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - include --fix-missing in the doctor dry-run preview for missing transcript cleanup - tighten state-integrity coverage for the suggested preview command Fixes #54877 ## Real behavior proof - **Behavior or issue addressed:** The doctor dry-run previ

### #83665 fix(codex): unwrap app-server auth token wrappers

- bucket: needs_proof
- author: ecochran76
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:16:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - unwrap JSON token wrapper strings returned from Codex auth profile resolution before calling `account/login/start` - preserve wrapper-provided ChatGPT account ids for both OAuth and token-backed Codex profiles - add app-server auth bridge regressi

### #83689 fix(pi-embedded-runner): handle concatenated tool-call argument JSON

- bucket: needs_proof
- author: wuzishu3-web
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:16:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #83703 Add Claude ignore rules for generated assets

- bucket: needs_proof
- author: sravan27
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:16:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a repo-level `.claudeignore` so Claude Code skips generated output, dependency/build directories, lockfiles, screenshots, and bulky binary media assets during normal code navigation - keep source, docs, tests, scoped `AGENTS.md` / `CLAUDE.md`,

### #83715 [codex] Guard doctor repairs for newer configs

- bucket: needs_proof
- author: ejames-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:17:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Block `doctor --fix`, `--yes`, and gateway-token generation from applying repairs when the config was last written by a newer OpenClaw binary. - Downgrade the doctor prompter to read-only after that guard trips, so later health contributions do no

### #83754 fix: strip apiKey from models.json to prevent secret leakage (Layer 1, #11829)

- bucket: needs_proof
- author: jing11223344
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:17:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Description Layer 1 quick fix for #11829: strip `apiKey` from each provider before serializing to `models.json` to prevent secret leakage into prompt context. ## Problem The model catalog serializes resolved `apiKey` values into `models.json`, which gets in

### #83819 fix(heartbeat-runner): add wakeGuard pre-flight hook to skip no-op wakes (OME-332)

- bucket: needs_proof
- author: Omerbahari
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:18:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem (OME-332) The `startHeartbeatRunner` wake dispatch path calls `runOnce` for every targeted agent/session without checking whether that agent actually has actionable work. On installations with an orchestration layer (e.g. Paperclip/Ronen brainOS), a

### #83826 test(android): poll for stale TLS probe cleanup in auth test

- bucket: needs_proof
- author: NeatGuyCoding
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:18:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `connect_ignoresStaleTlsProbeAfterDisconnect` used a fixed `Thread.sleep(100)` before asserting async TLS probe cleanup after disconnect. - Why it matters: Under CI load, 100ms may be insufficient, causing flaky unit test failures. - What

### #90371 fix(auto-reply): keep the message_sending gate when a channel sets beforeDeliver

- bucket: needs_proof
- author: dwty11
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:18:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a channel installs its own dispatcher `beforeDeliver`, the `message_sending` hook is silently skipped for that channel's replies. In both `dispatchInboundMessageWithBufferedDispatcher` and `dispatchInboundMessageWithDispatcher`, a channel-suppl

### #83862 fix(cli): add configure and onboard to interactive TTY command skip list

- bucket: needs_proof
- author: lml2468
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:19:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `openclaw configure` and `openclaw onboard` hang and leave high-CPU child processes on some Linux kernel/Node.js combinations. Reported in #83560. ## Root Cause The ExperimentalWarning suppression respawn in `buildCliRespawnPlan` wraps the command i

### #90636 fix(feishu): send p2p replies to user target

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:23:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - route Feishu p2p top-level replies through the sender `user:<open_id>` target instead of the p2p `oc_*` chat id - keep typing and reply-to lifecycle tied to the inbound message while suppressing reply metadata for DM sends - add regression coverag

### #90641 fix(compaction): preserve assistant boundary replies

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:23:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve the summarized assistant reply immediately before a surviving pre-compaction user message when writing successor transcripts - move the successor compaction replay boundary to that preserved assistant so agent context stays `summary -> as

### #90661 feat(gateway): add controlUi.timezone for Control UI timestamp rendering

- bucket: needs_proof
- author: RishabhKodes
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:24:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Control UI formats all timestamps client-side using browser-local `Date.toLocaleString()` APIs. Browsers with fingerprinting protection (hardened Firefox, Tor-derived configs) report UTC instead of the user's actual timezone. Chat tim

### #90683 fix: retry safe post-tool continuation turns

- bucket: needs_proof
- author: JuanHuaXu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:24:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Prevents terminal assistant turns that only promise to act, such as “Hold on, let me look that up” or “Now let me get the details,” from being accepted as complete when replay is safe. - Covers no-tool narration st

### #90700 fix(agents): reconnect streamable-HTTP MCP sessions on session loss [AI-assisted]

- bucket: needs_proof
- author: lucidlearning314
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:24:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When a remote streamable-HTTP MCP server restarts, it drops the in-memory session it handed us. OpenClaw keeps using the stale session id, so every subsequent `callTool` fails — HTTP `404` (the MCP-spec session-terminated signal) or a

### #90095 fix: suppress Telegram fallback for message-tool-only skips

- bucket: needs_proof
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:34:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent Telegram from sending the generic empty-response fallback when a turn is intentionally `message_tool_only`. - Add a Telegram regression for the skipped/failed delivery-lane path that still affected v2026.6.1/current main after the silent f

