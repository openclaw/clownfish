---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-024
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
  - "#92759"
  - "#88192"
  - "#88850"
  - "#88883"
  - "#92822"
  - "#48396"
  - "#92831"
  - "#92716"
  - "#92770"
  - "#52120"
  - "#92847"
  - "#92867"
  - "#50454"
  - "#92893"
  - "#92929"
  - "#55085"
  - "#55390"
  - "#55742"
  - "#55861"
  - "#90833"
  - "#90855"
  - "#92936"
  - "#54862"
  - "#55770"
  - "#57364"
cluster_refs:
  - "#92759"
  - "#88192"
  - "#88850"
  - "#88883"
  - "#92822"
  - "#48396"
  - "#92831"
  - "#92716"
  - "#92770"
  - "#52120"
  - "#92847"
  - "#92867"
  - "#50454"
  - "#92893"
  - "#92929"
  - "#55085"
  - "#55390"
  - "#55742"
  - "#55861"
  - "#90833"
  - "#90855"
  - "#92936"
  - "#54862"
  - "#55770"
  - "#57364"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.791Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 24

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92759 fix(memory): guard against missing agentIds in wiki artifact clone and sort

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T00:42:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `cloneMemoryPublicArtifact` crashed with `artifact.agentIds is not iterable` when the artifact had no `agentIds` field. The sort comparator had the same bug. All `wiki_*` tools threw `artifact.agentIds is not iterable`. ## Fix - `cloneMemoryPublicAr

### #88192 fix: recover stale diagnostic session lanes

- bucket: needs_proof
- author: lyvoraai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T00:54:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - release stale per-session command lanes when no embedded run owns the active lane task - keep the lane only when a shared non-session lane has active or queued work that can explain the wait - add diagnostic skip reason and focused runtime/integra

### #88850 fix(msteams): thread proactive file sends

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: S, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T01:35:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #88883 fix(ts): narrow type guard for api_key in oauth-manager

- bucket: needs_proof
- author: andrewwaites
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T01:35:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix TypeScript errors in phase (tsdown/tsgo) that cause the nightly CI to fail. ### Fix 1 — `src/agents/auth-profiles/oauth-manager.ts` (line 329) ```diff - if (mainCred?.type !== "oauth") { + if (mainCred?.type !== "oauth" || mainCred.type === "api

### #92822 #92715: Fix Discord intermediate status reaction emojis missing during tool/skill execution

- bucket: needs_proof
- author: sheyanmin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T01:37:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix Discord intermediate status reaction emojis (🔧, 🔍, 🛠️, etc.) not displaying during tool/skill execution phases. The dispatch callback wrapper's `requiresToolSummaryVisibility` gate was blocking the entire `onToolStart` callback when verbose w

### #48396 feat(ui): add message preview to session list

- bucket: needs_proof
- author: SiriuSM00N
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T01:44:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Show timestamp + last message preview in Control UI session list. ## Why Session list shows long technical IDs that are hard to distinguish. ## Changes - Add `truncatePreview()` function with null safety (50 char limit) - Modify Updated column to dual-

### #92831 fix(qqbot): honor durable media roots for cron TTS

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, channel: qqbot, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T02:16:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - pass durable mediaLocalRoots through QQBot outbound media sends - allow QQBot voice sends to re-validate trusted temp/local TTS files against those roots - throw channel-adapter send errors so durable cron delivery is not marked sent on failure -

### #92716 fix(daemon): detect silently dropped schtasks /Run in Session 0 for restart

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T02:52:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91926 ## What `openclaw gateway restart` via the exec tool (Session 0 on Windows) stops the gateway but never restarts it. `schtasks /Run` returns exit code 0 but Task Scheduler silently drops the request — no Event 325 is logged. ## Root cause `shouldF

### #92770 fix(media-understanding): place Qwen/DashScope image prompts in user content (#92688)

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T03:05:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92688 ## Summary DashScope vision models (qwen3.7-max, qwen3.7-plus) return 400 "Unexpected item type in content" when the image tool sends the prompt in a system message and only image blocks in the user message. The fix adds DashScope/Qwen endpoint de

### #52120 fix(mattermost): inherit thread context in message tool send action

- bucket: needs_proof
- author: teconomix
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T03:34:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the agent uses the `message` tool to send a proactive message (without an explicit `replyTo`) from a Mattermost thread-scoped session, the message lands at the channel root instead of the current thread. ## Root Cause Two issues: 1. The Matterm

### #92847 fix(codex): drain terminal native tool results

- bucket: needs_proof
- author: postrednik
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T04:09:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add unresolved native tool result tracking to the Codex app-server event projector. - Add a bounded terminal notification drain before `buildResult()` so delayed native `item/completed` results can arrive after `turn/completed`. - Add attempt-leve

### #92867 fix(memory-qmd): preserve Windows absolute paths in QMD command resolution

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T04:28:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92302 When `memory.qmd.command` contains a Windows absolute path (e.g. `C:\Users\bin\qmd.exe`), the raw value was passed through `splitShellArgs()` which treats backslashes as POSIX escape characters, mangling the drive-letter path into a garbage token

### #50454 fix: use explicit agent workspace when writing transcript headers

- bucket: needs_proof
- author: eggyrooch-blip
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T06:14:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop deriving transcript header `cwd` from `process.cwd()` and resolve the target agent workspace explicitly before appending mirrored transcript entries - add a regression test covering per-agent cwd isolation for transcript header creation - cov

### #92893 fix(feishu): ignore bot_p2p_chat_entered_v1 events to prevent gateway restarts (fixes #42351)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T06:16:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What does this PR do? Adds a no-op handler for `im.chat.access_event.bot_p2p_chat_entered_v1` events in the Feishu extension. Without this handler, the unhandled event warning accumulates and can trigger gateway restarts (~10 events). ## Related Issue Fixes

### #92929 #90299: [Bug]: Agent Teams subagent completion can report "lost active execution context" while still delivering child output

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T09:26:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Detect archived subagent sessions (status="running" with an endedAt timestamp) as completed rather than reporting "lost active execution context". This prevents the subagent sweeper from falsely flagging subagents that already produced deliverable o

### #55085 CLI: add stable setup surface export for dynamic provider/channel configuration UIs

- bucket: needs_proof
- author: cgf120
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T09:46:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # CLI: add a stable setup surface export for dynamic provider/channel configuration UIs ## Summary This PR adds a stable, machine-readable setup surface export for OpenClaw so external UIs can render provider and channel configuration dynamically without impor

### #55390 WIP feat(cli): sync local schema artifacts on startup

- bucket: needs_proof
- author: kvokka
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T09:47:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: JSON schema for the config is should be manually set for new and existing configs and updated afterwards - Why it matters: It's inconvenient to bother about it - What changed: Added local json

### #55742 feat(plugins): inject execute context (agentId) into plugin tool calls

- bucket: needs_proof
- author: justinjkline
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T09:51:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **Author: 📐 Drew Prints** (`mcfiddles_architect_51132`) ## Problem Plugin tools that need the calling agent's identity (e.g. `platform_tasks_complete`, `platform_comms_inbox`) have no reliable way to resolve `agentId` at execute time. The plugin tool factory

### #55861 fix(ui): prevent collapsed sidebar overlap in control UI

- bucket: needs_proof
- author: betamod
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T09:53:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - widen the collapsed desktop control UI nav rail from 78px to 96px - add a browser navigation test that asserts collapsed content does not render under the nav rail - address Safari/macOS rendering overlap reported in #55850 ## Testing - `corepack

### #90833 feat(control-ui): allow renaming sessions in sidebar (#90655)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T09:55:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #90655. Adds a display-only rename affordance to Control UI sidebar session rows. Hovering a session reveals a small edit (pencil) button; clicking it turns the row into an inline input. Pressing Enter (or blurring) saves the new label; Escap

### #90855 Recover stale pending final deliveries

- bucket: needs_proof
- author: jeremykraklist
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T09:55:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replay durable pending final-delivery text only when the saved delivery context exactly matches the current source-reply route - mark pending final-delivery state in diagnostics and classify queued stale work with pending final delivery as recover

### #92936 #92684: doctor over-warns on an empty top-level groupAllowFrom despite populated per-account allowlists (2026.6.5)

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T10:16:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Suppress the empty-group-allowlist doctor warning for channel-level records when the channel has active per-account configs. This prevents false positives where doctor warns "all group messages will be silently dropped" even though every account sup

### #54862 Adding OpenRouter support for allowedModels

- bucket: needs_proof
- author: GavinJaynes
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T10:24:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: 🤖 AI-assisted PR, validated by a human (me) — tested locally, all openrouter extension tests pass. ## Background I'm the founder of [ClawOps](https://clawops.io), a managed AI assistant platform built on top of OpenClaw. While there are other hosting options

### #55770 Add "verbose limit" support for configuring exec tool display truncat…

- bucket: needs_proof
- author: hiqiuyi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, stale, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T10:25:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ● Summary - Problem: Verbose mode always truncated exec tool command display at a hard-coded 120 chars with no way to change it per session. - Why it matters: Users running long commands (e.g. complex shell pipelines) couldn't see enough of the command in tool

### #57364 fix(msteams): delete FileConsentCard after user accepts, declines, or upload expires

- bucket: needs_proof
- author: HangGlidersRule
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T10:30:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The `FileConsentCard` (Allow/Decline prompt for file uploads) remains in the Teams chat after the user acts on it, cluttering the conversation with stale interactive cards. Users see orphaned Allow/Decline buttons even after files have been successf
