---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-064
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
  - "#92817"
  - "#88899"
  - "#88919"
  - "#88681"
  - "#92877"
  - "#92873"
  - "#92819"
  - "#50177"
  - "#51067"
  - "#92613"
  - "#90998"
  - "#92399"
  - "#90846"
  - "#90864"
  - "#90923"
  - "#92957"
  - "#92939"
  - "#66985"
  - "#92947"
  - "#92990"
  - "#89745"
  - "#89767"
  - "#92996"
  - "#75213"
  - "#88901"
cluster_refs:
  - "#92817"
  - "#88899"
  - "#88919"
  - "#88681"
  - "#92877"
  - "#92873"
  - "#92819"
  - "#50177"
  - "#51067"
  - "#92613"
  - "#90998"
  - "#92399"
  - "#90846"
  - "#90864"
  - "#90923"
  - "#92957"
  - "#92939"
  - "#66985"
  - "#92947"
  - "#92990"
  - "#89745"
  - "#89767"
  - "#92996"
  - "#75213"
  - "#88901"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.800Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 64

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92817 fix(cron): trust agent output when channel is unresolved without explicit delivery

- bucket: ready_for_maintainer
- author: fsdwen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T01:20:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `--no-deliver` cron jobs that encounter recoverable tool warnings were marked `status: error` even when the agent successfully produced a final answer. The basic fix (`deliveryRequested === false`) was already implemented on main, but it missed the

### #88899 fix(android): widen chat bubbles and render markdown consistently

- bucket: ready_for_maintainer
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T01:36:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #88014 by making the active Android `ChatScreen` bubbles use a readable 90% width instead of the previous 56% assistant / 64% user caps. - Routes active chat text through the existing `ChatMarkdown` renderer consistently, matching the siblin

### #88919 fix: allow preflight compaction to reenter session locks

- bucket: ready_for_maintainer
- author: plexustech2006
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:32:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow embedded preflight compaction to re-enter the same-process transcript write lock - add a regression guard so compaction's lock acquisition keeps `allowReentrant: true` ## Why When a visible chat turn times out near the context ceiling, a sam

### #88681 Make runtime plugin startup stalls name in-flight plugins

- bucket: ready_for_maintainer
- author: alexzhu0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T03:09:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds diagnostic progress snapshots while runtime plugins load. - Threads runtime plugin progress into embedded-agent and cron execution phase reporting. - Appends attempted/completed/in-flight plugin ids to cron timeout messages only while the las

### #92877 fix(usage): make built-in footer easier to wrap on Telegram

- bucket: ready_for_maintainer
- author: Marvinthebored
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T05:47:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Simplify the built-in `/usage full` default footer so Telegram has a cleaner wrap point. - Keep the model/provider/status badges compact and glue the context meter label to the meter. - Remove the default token-count and cache-percentage atoms fro

### #92873 test(diffs): add viewerState, toolbar toggle, shadow root, and hydrateProps tests (fixes #83915)

- bucket: ready_for_maintainer
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, extensions: diffs, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T05:48:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Add comprehensive test coverage for `extensions/diffs/src/viewer-client.ts` (361 lines, previously only bundle-content grep coverage). Covers four untested code paths: 1. **viewerState initialization** — theme/diffStyle/overflow seeding from `firstPayl

### #92819 Fix stale auto-fallback origin model selection

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T07:22:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a shared stale auto-fallback-origin classifier so reply and agent-command selection agree when recorded fallback origin no longer matches the current primary. - Defers reply-side model/auth cleanup until after read-only slash/inline actions h

### #50177 fix(webchat): slash menu clipped by overflow and missing keyboard scroll

- bucket: ready_for_maintainer
- author: RickyTong1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: refactor-only, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, proof: 🎥 video, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T07:34:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: The webchat slash command menu (`/`) is completely invisible — typing `/` changes the input border color and arrow-key selection works, but the dropdown never appears. This is because `.agent-chat__input` uses `overflow: hidden` (for text

### #51067 feat(gateway): add configurable Control UI title

- bucket: ready_for_maintainer
- author: ryan-dyer-sp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, stale, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T07:35:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: Allow users to set a custom browser tab title for the Control UI via the gateway.controlUi.title config option. Useful when running multiple OpenClaw instances to distinguish between tabs. ## Change Type

### #92613 fix(agents): cap tool results at LLM boundary

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T08:13:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Cap provider-boundary replay to the latest 24 `toolResult` messages so histories with 25+ completed tool results do not cross the model boundary intact. - Drop the matching oldest assistant tool-call blocks when old tool results are omitted, avoid

### #90998 fix(sms): authorize text slash commands

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, channel: sms
- gitcrawl snapshot updated: 2026-06-14T08:13:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Native SMS direct messages that begin with text slash commands now carry command-turn metadata and command authorization into the inbound reply pipeline. This makes allowlisted/pairing-approved SMS senders follow the same command handoff shape used

### #92399 fix(llm): collapse cumulative openai-responses message snapshots instead of concatenating [AI-assisted]

- bucket: ready_for_maintainer
- author: amersheeny
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T08:58:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91959 — Bedrock Mantle's `openai-responses` endpoint (GPT-5.x with reasoning enabled) re-emits the assistant message as many **cumulative snapshot items**, each a strict prefix-superset of the previous one, instead of a single final message i

### #90846 fix(media): stop pruning media on write; let the configured timer do it

- bucket: ready_for_maintainer
- author: lundog
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T09:55:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `saveMediaSource` ran an inline `cleanOldMedia(DEFAULT_TTL_MS, { recursive: false })` on every call. Two problems compounded: 1. `DEFAULT_TTL_MS` is **2 minutes**, hardcoded — it ignores the configurable `media.ttlHours` retention. 2. `cleanOldMedia

### #90864 fix(tasks): accept completion summaries with result markers

- bucket: ready_for_maintainer
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T09:56:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Make the required-completion classifier accept summaries that begin with progress narration but contain a real result/report/verification marker later in the text. This keeps genuine progress-only messages blocked, while avoiding false `Required com

### #90923 fix(daemon): write LaunchAgent plist to boot volume when home is on external APFS

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T11:15:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary macOS `launchd` refuses to bootstrap a LaunchAgent plist that lives on an external APFS volume (`Bootstrap failed: 5: Input/output error`). When a user's `$HOME` is on an external drive, `openclaw gateway install` always fails. This PR makes the mac

### #92957 feat(gateway): add agents.setDefault RPC method

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, commands, size: M, proof: supplied, proof: sufficient, extensions: admin-http-rpc, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T12:52:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary There is no dedicated Gateway RPC to change the default agent. `agents.list` already returns a read-only `defaultId` and full CRUD exists (`agents.create`/`agents.update`/`agents.delete`), but `agents.update` does not accept a `default` field, so th

### #92939 #92015: Skip default workspace auto-scaffold & git init for runtime-managed (ACP) agents

- bucket: ready_for_maintainer
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T13:09:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Skip default workspace auto-scaffold and git init for runtime-managed agents (e.g., ACP) that do not have an explicit `workspace` configured. Runtime-managed agents declare their effective `cwd` through their binding and do not need local workspace

### #66985 fix(agents): resolve requestedNode to canonical ID before boundNode comparison

- bucket: ready_for_maintainer
- author: mujiannan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:14:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The bound-node guard in `executeNodeHostCommand` compared `params.boundNode` (a full 64-char device ID) directly against `params.requestedNode` (which may be a display name, IP address, or partial ID prefix). Because the two formats never match, `ex

### #92947 fix(qqbot): deliver cron auto-TTS voice by trusting OpenClaw temp root

- bucket: ready_for_maintainer
- author: ZengWen-DT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, channel: qqbot, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:53:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92816. When `messages.tts.auto = "always"`, cron deliveries to QQBot are silently lost while the run is still recorded as delivered. Root cause: cron auto-TTS (speech-core) writes the generated voice file under OpenClaw's preferred temp root

### #92990 fix(doctor): suppress false groupAllowFrom warning when per-account allowlists cover all accounts

- bucket: ready_for_maintainer
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T14:54:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92684. When `channels.<platform>.groupPolicy` is "allowlist" and the top-level `groupAllowFrom` is empty, but every account has its own populated `groupAllowFrom`, `openclaw doctor` incorrectly warns that inbound group messages will be droppe

### #89745 fix(usage): exclude untimestamped records from daily ranges

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:38:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Fixes ranged dashboard/session usage summaries so untimestamped cached transcript rows do not inflate selected-day totals or model usage. - Keeps all-time cache summaries intact, but forces finite date ranges to de

### #89767 fix(skills): route installs to requested agent workspace [AI-assisted]

- bucket: ready_for_maintainer
- author: AliAbuelkheir
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:38:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Routes workspace-affecting skill install/update calls through the existing agent workspace resolver when an explicit `agentId` is provided. - Keeps default behavior unchanged for callers that do not pass an `agentI

### #92996 fix(cli): reject present-but-invalid --timeout on status/health fast path

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-14T16:05:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw status` and `openclaw health` have a route-first fast path (`parseStatusRouteArgs` / `parseHealthRouteArgs` in `src/cli/program/route-args.ts`) that skips full Commander startup. Its `--timeout` guard was `if (getPositiveIntFlagValue(...)

### #75213 fix: Codex app-server silence timeout reliability issue

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, clawsweeper, clawsweeper:commit-finding, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:13:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one reliability issue in the new Codex app-server silence timeout: unrelated traffic on the shared app-server client can reset the silent-turn timer before the notification/request is scoped to the active turn. ## What ClawSweeper Is Fixing -

### #88901 fix(mattermost): preserve Codex progress drafts

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:14:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #88766 ## Summary - Allow Mattermost draft tool-progress callbacks to keep running when source reply delivery is `message_tool_only`. - Preserve the existing final-reply delivery behavior; this only restores the in-flight draft preview path. - Add regres
