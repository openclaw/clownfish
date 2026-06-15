---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-085
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
  - "#92883"
  - "#50177"
  - "#51067"
  - "#92613"
  - "#90998"
  - "#92399"
  - "#90846"
  - "#90864"
  - "#90923"
  - "#89345"
  - "#89369"
  - "#88815"
  - "#76092"
  - "#89469"
  - "#50520"
  - "#63634"
  - "#92957"
  - "#90709"
  - "#92081"
  - "#41892"
  - "#92939"
  - "#59336"
  - "#60212"
  - "#66685"
  - "#66985"
cluster_refs:
  - "#92883"
  - "#50177"
  - "#51067"
  - "#92613"
  - "#90998"
  - "#92399"
  - "#90846"
  - "#90864"
  - "#90923"
  - "#89345"
  - "#89369"
  - "#88815"
  - "#76092"
  - "#89469"
  - "#50520"
  - "#63634"
  - "#92957"
  - "#90709"
  - "#92081"
  - "#41892"
  - "#92939"
  - "#59336"
  - "#60212"
  - "#66685"
  - "#66985"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.211Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 85

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92883 fix(security): audit open dm tool exposure

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T07:26:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #55612. Extends the security exposure matrix from only `groupPolicy="open"` to all open inbound conversation policies that can expose tools: - `channels.<id>.groupPolicy` - `channels.<id>.dmPolicy` - legacy `channels.<id>.dm.policy` - the same

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

### #89345 fix(backup): resolve legacy hardlink targets by link subtree (follow-up to #89328)

- bucket: ready_for_maintainer
- author: hoobnn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Follow-up to #89328 (merged as 5be282e459), which still leaves the originally reported failure in place. `backup verify` rejected previously valid backups containing internal hardlinks with `Archive hardlink target is outside the declared archive ro

### #89369 fix(agents): persist forked transcript when parent branch has no assistant turn

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:33:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A subagent spawned with `context="fork"` (and the realtime voice-consult fork and the reply-session fork) could silently start with an **empty** transcript, dropping the parent conversation it was meant to inherit, with no error surfaced. This happe

### #88815 feat: channel echo / session pinning

- bucket: ready_for_maintainer
- author: anagnorisis2peripeteia
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, app: web-ui, gateway, cli, scripts, commands, size: XL, triage: refactor-only, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T11:36:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Pin-from-here: channel-agnostic turn mirroring A session can mirror its turns to other threads bound to the **same** session. You run `/pin on` in a thread; from then on, when any other thread of that session drives a turn, this thread receives it — rendere

### #76092 fix(daemon): prefer bundled node for gateway service

- bucket: ready_for_maintainer
- author: Squirbie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, proof: sufficient
- gitcrawl snapshot updated: 2026-06-14T11:39:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prefer an installed OpenClaw bundled Node runtime from the active state dir when generating gateway service runtime paths. - Validate discovered `tools/node-v*/bin/node` candidates before using them. - Fall back to the current/system Node behavior

### #89469 feat(agents): inherit requester model for subagents

- bucket: ready_for_maintainer
- author: Gausons
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T12:17:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Let native subagent spawns resolve `model: "inherit"` from the requester session's active model, including model context passed through `sessions_spawn` and persisted requester session state fallback. - Normalize inherited provider/model refs so p

### #50520 fix(outbound): strip inbound metadata before delivery

- bucket: ready_for_maintainer
- author: p3nchan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T12:39:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #39847. Related to #41355, #30405, #28170. When an LLM echoes internal metadata blocks (e.g., `Conversation info (untrusted metadata):`, `Sender (untrusted metadata):`) in its response, the outbound delivery pipeline sends them verbatim to the

### #63634 fix: accept valid MCP tool schemas without strict inputSchema.type check

- bucket: ready_for_maintainer
- author: zozo123
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T12:44:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes MCP server loading failure when tools have `inputSchema` without explicit `type: "object"`. Closes #63602 ## Changes - `listAllTools` validates each `tools/list` page **once** with `RelaxedListToolsResultSchema` and catalogs **that same valida

### #92957 feat(gateway): add agents.setDefault RPC method

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, commands, size: M, proof: supplied, proof: sufficient, extensions: admin-http-rpc, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T12:52:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary There is no dedicated Gateway RPC to change the default agent. `agents.list` already returns a read-only `defaultId` and full CRUD exists (`agents.create`/`agents.update`/`agents.delete`), but `agents.update` does not accept a `default` field, so th

### #90709 feat(Signal): support note-to-self ingress

- bucket: ready_for_maintainer
- author: recallmenot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: signal, channel: telegram, app: web-ui, gateway, extensions: memory-core, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T12:56:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary ### What problem does this PR solve? - Adds explicit Signal `ingressMode: "note-to-self"` support so linked-device `signal-cli` setups can use the operator's Signal Note to Self chat as the OpenClaw conversation surface. - Removes the practical need

### #92081 feat(msteams): Teams voice (CVI) + chat + governance integration

- bucket: ready_for_maintainer
- author: ahenawy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, channel: voice-call, size: XL, extensions: openai, proof: supplied, proof: sufficient, extensions: elevenlabs, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T13:00:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Stacked on #91438 — review the increment** (`b98d5a0a7a…fdb99003cb`, 51 commits): the foundation is #91438. The full diff includes #91438's commits only until that PR lands; this branch then rebases to exactly the increment. A commit→feature map is below. 

### #41892 feat(control-ui): add cron calendar timeline view

- bucket: ready_for_maintainer
- author: xvchris
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: sufficient, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T13:08:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a 24h timeline strip to the Cron Jobs page in the Control UI, providing an at-a-glance view of today's scheduled tasks. Closes #40644 ## Screenshots ### Dark Theme — Full View ![Full page dark](https://raw.githubusercontent.com/xvchris/cron-cal

### #92939 #92015: Skip default workspace auto-scaffold & git init for runtime-managed (ACP) agents

- bucket: ready_for_maintainer
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T13:09:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Skip default workspace auto-scaffold and git init for runtime-managed agents (e.g., ACP) that do not have an explicit `workspace` configured. Runtime-managed agents declare their effective `cwd` through their binding and do not need local workspace 

### #59336 fix: Config Raw mode permanently disabled due to round-trip check regression

- bucket: ready_for_maintainer
- author: rayseling
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T13:10:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #59330 — Control UI Config editor permanently shows "Raw mode disabled (snapshot cannot safely round-trip raw text)" since 2026.3.31. ## Root Cause Two issues cause `shouldFallbackToStructuredRawRedaction()` to always return `true`: ### 1. `no

### #60212 [codex] Cron: repair empty sanitized final replies

- bucket: ready_for_maintainer
- author: mySebbe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, app: web-ui, gateway, agents, size: XL, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:10:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ???## Summary - Problem: cron-owned agent runs could finish with no deliverable final text after sanitization and end up as silent `not-delivered` outcomes. - Why it matters: scheduled reports can vanish without a clear error even though the cron job itself ra

### #66685 Suppress expired exec approval followup warnings

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:12:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Suppress exec approval followup warning logs when the approval id is already gone (`unknown or expired approval id`). ## Why During investigation of #66675, restart/reporting flows could leave the gateway healthy while adding noisy log lines like: -

### #66985 fix(agents): resolve requestedNode to canonical ID before boundNode comparison

- bucket: ready_for_maintainer
- author: mujiannan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:14:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The bound-node guard in `executeNodeHostCommand` compared `params.boundNode` (a full 64-char device ID) directly against `params.requestedNode` (which may be a display name, IP address, or partial ID prefix). Because the two formats never match, `ex

