---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-031
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
  - "#92371"
  - "#92355"
  - "#92370"
  - "#92388"
  - "#92392"
  - "#92351"
  - "#92432"
  - "#90637"
  - "#92342"
  - "#92466"
  - "#92274"
  - "#91973"
  - "#92502"
  - "#91509"
  - "#92514"
  - "#92515"
  - "#92518"
  - "#92526"
  - "#92234"
  - "#92530"
  - "#92528"
  - "#92527"
  - "#92529"
  - "#92542"
  - "#92543"
cluster_refs:
  - "#92371"
  - "#92355"
  - "#92370"
  - "#92388"
  - "#92392"
  - "#92351"
  - "#92432"
  - "#90637"
  - "#92342"
  - "#92466"
  - "#92274"
  - "#91973"
  - "#92502"
  - "#91509"
  - "#92514"
  - "#92515"
  - "#92518"
  - "#92526"
  - "#92234"
  - "#92530"
  - "#92528"
  - "#92527"
  - "#92529"
  - "#92542"
  - "#92543"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.201Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 31

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92371 fix(codex): restore continuity after cron interleave

- bucket: needs_proof
- author: jerem-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T07:28:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - detect BlueBubbles cron direct-delivery mirrors before building Codex prompt context - inject a cron interleave continuity guard plus restore surfaces before workspace context - keep cron runs isolated while forcing the next normal chat turn to re

### #92355 #92240: fix(plugins): resolve bundled public surfaces from package dist output

- bucket: needs_proof
- author: zhangqueping
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T07:43:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix gateway startup failure: `Unable to resolve bundled plugin public surface speech-core/runtime-api.js` after upgrading to 2026.6.1. ## Root Cause `resolveBundledPluginPublicSurfacePath` in `public-surface-runtime.ts` only searched for bundled plu

### #92370 #92080: fix(skills): skip skill workshop approval when config is unavailable

- bucket: needs_proof
- author: zhangqueping
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T08:07:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `skill_workshop action=apply` returning "Plugin approval unavailable (no approval route)" on feishu channels even when `approvalPolicy: "auto"` is configured. ## Root Cause `resolveSkillWorkshopToolApproval` in `src/skills/workshop/policy.ts` re

### #92388 #92379: fix(session): refresh stale model before reading contextWindow in checkCompaction

- bucket: needs_proof
- author: sheyanmin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T08:20:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix auto-compaction using stale `contextWindow` after model switch via Telegram `/model` picker. The in-memory `agent.state.model` now gets refreshed from the registry before `checkCompaction` reads the compaction threshold. ## Root Cause When the T

### #92392 #92374: fix(dispatch): include message_sending hooks when channel supplies custom beforeDeliver

- bucket: needs_proof
- author: sheyanmin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T08:56:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix plugin `message_sending` hooks being silently bypassed on Telegram agent-reply delivery. When a channel supplies `dispatcherOptions.beforeDeliver`, the hook chain now always includes `buildMessageSendingBeforeDeliver` alongside the channel hook 

### #92351 #92241: Gateway holds stale module import paths after update/rollback — inbound messages silently dropped (ERR_MODULE_NOT_FOUND)

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T09:13:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Guard lazy reply-module loaders against `ERR_MODULE_NOT_FOUND` caused by stale dist chunk hashes after an in-place `npm install -g` upgrade or rollback. Previously, a running gateway process would silently drop all inbound messages because the lazy 

### #92432 fix(issue): resolve #92372 [Bug]: read tool drops memory/ prefix in multi-agent setup, 

- bucket: needs_proof
- author: xuwei-xy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: qa-lab, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T11:32:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 修复 issue #92372 中报告的问题。 ### Bug type Regression (worked before, now fails) ### Beta release blocker No ### Summary In a multi-agent setup, the secondary agent's read tool call drops the memory/ subdirectory prefix from ## Changes - `extensions/qa-la

### #90637 fix(nextcloud-talk): ignore signed non-message webhooks

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: nextcloud-talk, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T13:24:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - distinguish malformed webhook JSON / malformed supported Note payloads from signed Activity Streams events that are not chat messages - acknowledge signed non-message Talk events with 200 without dispatching them to the bot - add a signed Document

### #92342 OpenClaw 1 Codex reliability build

- bucket: needs_proof
- author: dredozubov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: XL, extensions: codex, triage: external-plugin-candidate, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T13:51:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - carries the openclaw-1 Codex reliability build branch - includes the provider-id TDZ/bootstrap fix already deployed in core package 2026.5.26-openclaw.2 - bumps @openclaw/codex package metadata/shrinkwrap to 2026.5.26-openclaw.2 for matching exter

### #92466 Add EvoLink provider integration

- bucket: needs_proof
- author: EvoLinkAI
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: M, triage: needs-real-behavior-proof, dependencies-changed, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T14:12:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a bundled `evolink` OpenAI-compatible provider plugin with `EVOLINK_API_KEY` auth, `evolink/auto` static catalog entry, and OpenAI replay/tool compatibility hooks. - Preserves EvoLink's literal provider-prefixed model id so `evolink/auto` rou

### #92274 fix(agents): classify embedded prompt lock error as permanent announce failure

- bucket: needs_proof
- author: fsdwen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T14:14:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Subagent announce delivery enters an infinite retry loop when `EmbeddedPromptLockFileChangedError` occurs during concurrent session access. Each retry sends a duplicate outbound message, causing 3× identical Telegram messages as reported in #91527. 

### #91973 Improve realtime voice-call consult progress

- bucket: needs_proof
- author: moellenbeck
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: voice-call, app: web-ui, gateway, size: L, extensions: openai, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T17:31:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - stabilizes realtime voice-call barge-in around provider speech-started events and queued telephony audio - adds configurable working responses plus progress talkback for long-running openclaw_agent_consult calls - exposes workingResponseMessage in v

### #92502 Add Telegram voice STT telemetry and cron payload audit

- bucket: needs_proof
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, app: web-ui, gateway, size: XL, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T17:36:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add Telegram voice/STT handoff telemetry into inbound context, including download bytes/MIME/path, Telegram file metadata, STT provider/model/base URL, duration, error class, transcript length/hash/trust/truncation, and context-entry marker - labe

### #91509 Update Google Meet chrome-node invoke policy [AI]

- bucket: needs_proof
- author: mmaps
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, plugin: google-meet, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T18:30:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Google Meet node-invoke policy for the Chrome-node command path. - For `action=start`, the policy forwards audio helper commands from the Google Meet plugin config rather than per-request command arrays. - Marks `googlemeet.chrome` as an ex

### #92514 fix: allow session write lock re-entry for same-process abort race

- bucket: needs_proof
- author: icemaple77
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T18:53:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the user presses the stop button mid-response, the session write lock release is fire-and-forget (non-blocking). If a new message arrives before the async release completes, the same process cannot reclaim its own lock because `allowReentrant` 

### #92515 Recover memory search from transient missing metadata

- bucket: needs_proof
- author: EleutheroiEdge
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T19:11:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Recover `memory_search` from transient missing index metadata by retrying once after a short delay. - Reopen the SQLite handle, reset vector state, ensure schema, and rerun the normal search path only for `index metadata is missing`. - Add metadat

### #92518 googlechat: deliver media as a text link when attachment upload is unauthorized (app auth)

- bucket: needs_proof
- author: jailbirt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T19:32:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the Google Chat channel is configured with **app authentication** (service account, `chat.bot` scope — the default for most Chat apps), any agent reply that includes media (`MEDIA:<url>`, a markdown image, or the message tool's media param) fai

### #92526 fix(gateway): treat google-gemini-cli Gemini models as image-capable (fixes #91739)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T19:53:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `google/gemini-3.5-flash` routed through `google-gemini-cli` gets `UnsupportedAttachmentError` before Gemini CLI is invoked, even though the CLI supports `@<workspace-image-path>` natively. - **Root Cause**: `resolveGatewayModelSuppo

### #92234 fix(gateway): surface OAuth auth URLs in wizard protocol

- bucket: needs_proof
- author: bkudiess
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, commands, size: L, extensions: openai, triage: mock-only-proof, extensions: chutes, extensions: google, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T20:16:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: RPC wizard clients could ask users to paste an OAuth redirect URL without receiving the authorization URL in the wizard protocol. - Why it matters: Windows/remote wizard clients cannot reliably complete OAuth setup when the URL only appea

### #92530 fix(release): tolerate semver build metadata in changelog packaging

- bucket: needs_proof
- author: jml001
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T20:19:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `scripts/package-changelog.mjs` rejects valid semver build metadata, so `pnpm pack` of any package with `version: X.Y.Z+suffix` crashes during prepack with `Unsupported OpenClaw package version for changelog packaging`. pnpm 10 preserves build metad

### #92528 fix(daemon): omit service environment maps from status output

- bucket: needs_proof
- author: jml001
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T20:20:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Daemon status output included service environment maps, so any status consumer (logs, transcripts, support bundles) could capture secret-bearing values. Status now omits the environment value map and reports `environmentValueSources` instead, preser

### #92527 fix(gmail): keep gmail watch secrets out of process argv

- bucket: needs_proof
- author: jml001
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T20:20:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The gmail watcher launched `gog watch serve` with the push token passed via `--token` and the hook token embedded in `--hook-url`, exposing both to any local process via `ps`/procfs for the lifetime of the watcher. The watcher now writes both secret

### #92529 fix(agents): prevent local exec policy errors from triggering model fallback

- bucket: needs_proof
- author: jml001
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, extensions: codex, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T20:24:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A Codex app-server local exec policy denial was classified as a model failure, so the agent switched providers/models on what is a local configuration outcome - burning fallback budget and changing models mid-session with no availability reason. Pol

### #92542 feat(sessions): auto-prune orphan store pointers during periodic main…

- bucket: needs_proof
- author: BNGZ18
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T22:37:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: …tenance When transcript .jsonl files are removed (by archive cleanup, disk-budget enforcement, or external tooling) without clearing the corresponding pointer in sessions.json, those pointers become orphans. Inbound resolution cannot match them and the affect

### #92543 docs: point Windows Hub downloads to companion release

- bucket: needs_proof
- author: kingrubic
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T22:39:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Update Windows Hub installer links to the openclaw-windows-node companion release assets. - Clarify that canonical OpenClaw release assets may promote these installers, with companion releases as the fallback/source. ## Verification - pnpm docs:ch

