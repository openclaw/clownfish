---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-033
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
  - "#92284"
  - "#92723"
  - "#92726"
  - "#91682"
  - "#92517"
  - "#92755"
  - "#91800"
  - "#92763"
  - "#92774"
  - "#92756"
  - "#92762"
  - "#92759"
  - "#91668"
  - "#88192"
  - "#90216"
  - "#88850"
  - "#88883"
  - "#92822"
  - "#48396"
  - "#92831"
  - "#92682"
  - "#92420"
  - "#92716"
  - "#92660"
  - "#92770"
cluster_refs:
  - "#92284"
  - "#92723"
  - "#92726"
  - "#91682"
  - "#92517"
  - "#92755"
  - "#91800"
  - "#92763"
  - "#92774"
  - "#92756"
  - "#92762"
  - "#92759"
  - "#91668"
  - "#88192"
  - "#90216"
  - "#88850"
  - "#88883"
  - "#92822"
  - "#48396"
  - "#92831"
  - "#92682"
  - "#92420"
  - "#92716"
  - "#92660"
  - "#92770"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.201Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 33

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92284 fix(queue): kick followup drain on enqueue to prevent race-induced stall

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T15:15:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a new inbound message arrives during the terminal window of a previous run, the `enqueue-followup` path called `enqueueFollowupRun` with `restartIfIdle=false`. This relied on a non-atomic `isRunActive()` snapshot to decide whether to schedule a

### #92723 fix(issue): resolve #91873 [Bug]: Slack channel silently drops after upgrade to 2026.6.

- bucket: needs_proof
- author: xuwei-xy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T15:30:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 修复 issue #91873 中报告的问题。 ### Bug type Regression (worked before, now fails) ### Beta release blocker No ### Summary Version: 2026.4.26 → 2026.6.5Platform: Linux (Bluehost VPS), Slack channel via Socket Mode What happene ## Changes - `.agents/skills/r

### #92726 fix(windows): replace cmd handoff with Node.js subprocess for gateway restart

- bucket: needs_proof
- author: likuoping136
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T16:36:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem On Windows, the `/restart` command (and config-change triggered restarts) frequently fail to relaunch the gateway. The gateway shuts down but never comes back, requiring manual `openclaw gateway restart`. ## Root Cause Commit `6d26609` (#52487) adde

### #91682 fix(ui): add tooltip to Thinking dropdown in quick settings

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T17:03:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a `title` tooltip to the "Thinking" label in the Model & Thinking quick settings card. - Explains that this controls session-level thinking/reasoning mode and is separate from provider-level reasoning effort in agent config. - Partial fix for 

### #92517 Suppress failed tool progress in Discord

- bucket: needs_proof
- author: davefano
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T17:04:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skip failed/error item progress before Discord draft rendering - skip failed command-output progress before Discord draft rendering - preserve existing fallback tool-error warning delivery for unacknowledged failures - add Discord monitor regressi

### #92755 #92715: [Bug]: Discord intermediate status reaction emojis missing during tool/skill execution

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T18:15:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When verbose progress is disabled, the followup runner unconditionally blocked all non-compaction events from reaching `onToolStart`. This prevented Discord status reactions from updating during tool execution — users saw only the initial and final 

### #91800 fix(tools): propagate external content provenance to policy hooks

- bucket: needs_proof
- author: jason-allen-oneal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T18:34:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Adds structured external-content provenance to tool-call policy hook types. - Propagates provenance through HookContext, before_tool_call plugin events, trusted tool policy events, and tool hook context. - Detects EXTERNAL_UNTRUSTED_CONTENT markers 

### #92763 fix(gateway): add google-gemini-cli image capability fallback for stale catalog rows

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T18:58:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveGatewayModelSupportsImages` had legacy shims for `microsoft-foundry` and `claude-cli` but not `google-gemini-cli`. When catalog metadata was stale or missing, image attachments were rejected before the Gemini CLI runner could process them. #

### #92774 fix: drop retained session fence text after prompt lock reacquire

- bucket: needs_proof
- author: markus-lassfolk
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T19:01:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - compact retained `fenceSnapshot` payloads to `fingerprint + digest` once the session write lock is reacquired - keep full `fenceSnapshot.text` only during the released prompt window where rewrite detection needs it - clear retained fence snapshot 

### #92756 fix(read): decode GBK-encoded files on Windows via existing codepage fallback

- bucket: needs_proof
- author: EaveLuo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T19:04:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reuse the existing `decodeWindowsOutputBuffer()` in the read tool's text decode path, replacing hard-coded `buffer.toString("utf-8")` - On Windows with a non-UTF-8 console codepage (e.g. GBK on Chinese Windows), the function tries strict UTF-8 fir

### #92762 fix(dispatch): include message_sending hooks when channel beforeDeliver is configured

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-13T19:27:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a channel-specific `beforeDeliver` existed, the composed hook chain only included the channel hook + `reply_payload_sending`, silently bypassing global `message_sending` hooks. This meant `{ cancel: true }` and content rewrite from `message_sen

### #92759 fix(memory): guard against missing agentIds in wiki artifact clone and sort

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T00:42:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `cloneMemoryPublicArtifact` crashed with `artifact.agentIds is not iterable` when the artifact had no `agentIds` field. The sort comparator had the same bug. All `wiki_*` tools threw `artifact.agentIds is not iterable`. ## Fix - `cloneMemoryPublicAr

### #91668 fix(agents): skip stale orphaned subagent sessions during restart recovery

- bucket: needs_proof
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T00:49:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary After a gateway restart, `recoverOrphanedSubagentSessions()` scans for interrupted subagent runs and attempts to resume them — but it did not check whether a run had exceeded the **existing** subagent run-liveness window. A subagent interrupted days

### #88192 fix: recover stale diagnostic session lanes

- bucket: needs_proof
- author: lyvoraai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T00:54:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - release stale per-session command lanes when no embedded run owns the active lane task - keep the lane only when a shared non-session lane has active or queued work that can explain the wait - add diagnostic skip reason and focused runtime/integra

### #90216 [codex] fix(google): register Vertex media generation contracts

- bucket: needs_proof
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T01:16:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Register `google-vertex` for the Google plugin's image and video generation contracts. - Add a manifest regression test so Vertex remains listed alongside AI Studio for media generation. Fixes #90209. ## Verification - `node scripts/run-vitest.mjs

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

### #92682 fix(read): use system encoding fallback for non-UTF-8 text files on Windows

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T02:46:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92664. ## Summary The `read` tool hardcodes `buffer.toString("utf-8")` when decoding text files. On Chinese Windows systems where files are commonly encoded in GBK (codepage 936), this produces garbled output (mojibake). The codebase already has `decode

### #92420 fix(telegram): record sent messages in the source-delivery path

- bucket: needs_proof
- author: tangtaizong666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T02:48:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The Telegram source-delivery path (`deliverReplies` in `extensions/telegram/src/bot/delivery.replies.ts`) sends via `sendTelegramText` / raw media APIs and emits the `message_sent` hook, but never appends to the sent-message ledger. - The canonica

### #92716 fix(daemon): detect silently dropped schtasks /Run in Session 0 for restart

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T02:52:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91926 ## What `openclaw gateway restart` via the exec tool (Session 0 on Windows) stops the gateway but never restarts it. `schtasks /Run` returns exit code 0 but Task Scheduler silently drops the request — no Event 325 is logged. ## Root cause `shouldF

### #92660 fix(plugins): strip exact-version pin from install spec during dry-run update check (#92183)

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T02:52:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(plugins): strip exact-version pin from install spec during dry-run update check Fixes #92183 ## Summary When a plugin was installed with an exact version spec (e.g. `@openclaw/feishu@2026.6.1`), `resolveNpmUpdateSpecs` passed the full spec through to the i

### #92770 fix(media-understanding): place Qwen/DashScope image prompts in user content (#92688)

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T03:05:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92688 ## Summary DashScope vision models (qwen3.7-max, qwen3.7-plus) return 400 "Unexpected item type in content" when the image tool sends the prompt in a system message and only image blocks in the user message. The fix adds DashScope/Qwen endpoint de

