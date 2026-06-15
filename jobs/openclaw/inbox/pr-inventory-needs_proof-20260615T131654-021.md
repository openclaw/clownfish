---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-021
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
  - "#52120"
  - "#92847"
  - "#92867"
  - "#50454"
  - "#92893"
  - "#92878"
  - "#92929"
  - "#55085"
  - "#55390"
  - "#55742"
  - "#55861"
  - "#56031"
  - "#92932"
  - "#90833"
  - "#90855"
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
  - "#52120"
  - "#92847"
  - "#92867"
  - "#50454"
  - "#92893"
  - "#92878"
  - "#92929"
  - "#55085"
  - "#55390"
  - "#55742"
  - "#55861"
  - "#56031"
  - "#92932"
  - "#90833"
  - "#90855"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.476Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 21

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

### #92878 fix(telegram): respect group-level groupPolicy: open for /models callbacks in forum topics

- bucket: needs_proof
- author: renaudcerrato
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T06:24:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem In Telegram forum topics, clicking provider/model buttons from the `/models` inline menu silently does nothing when: - the account-level `channels.telegram.groupPolicy` is `"allowlist"`, - `channels.telegram.groupAllowFrom` is empty, and - the speci

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

### #56031 fix(pi-runner): use post-hook assistant for expect-final payloads

- bucket: needs_proof
- author: ninjaa
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T09:55:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Makes `--expect-final` payloads reflect the post-hook assistant message when `before_message_write` hooks are active, instead of reusing stale raw `assistantTexts`. ## What changes - `src/agents/pi-embedded-runner/run.ts`: when `before_message_write

### #92932 #92931: Bug: catalog.json caches API key in plaintext after auth migration to encrypted SQLite

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T09:55:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Remove the plaintext apiKey from the plugin model catalog output. After auth migration to encrypted SQLite, the apiKey should not be cached in catalog.json. ## Root Cause In `src/plugin-sdk/provider-catalog-live-runtime.ts`, `buildProviderConfig()` 

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

