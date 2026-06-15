---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-018
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
  - "#74402"
  - "#91510"
  - "#93345"
  - "#70906"
  - "#76235"
  - "#76730"
  - "#77020"
  - "#77045"
  - "#86627"
  - "#89041"
  - "#89820"
  - "#92014"
  - "#92107"
  - "#92111"
  - "#92154"
  - "#92160"
  - "#92161"
  - "#92288"
  - "#92356"
  - "#75614"
  - "#93359"
  - "#93238"
  - "#59842"
  - "#71497"
  - "#73374"
cluster_refs:
  - "#74402"
  - "#91510"
  - "#93345"
  - "#70906"
  - "#76235"
  - "#76730"
  - "#77020"
  - "#77045"
  - "#86627"
  - "#89041"
  - "#89820"
  - "#92014"
  - "#92107"
  - "#92111"
  - "#92154"
  - "#92160"
  - "#92161"
  - "#92288"
  - "#92356"
  - "#75614"
  - "#93359"
  - "#93238"
  - "#59842"
  - "#71497"
  - "#73374"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.789Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 18

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #74402 fix(agents): route async media completions through wake media

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T16:22:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop async media completion wakes from instructing the parent to call the message tool - rely on structured media carried by the wake, with MEDIA lines only as fallback - assert fallback instructions no longer mention message-tool delivery or NO_R

### #91510 Add claw score taxonomy

- bucket: maintainer_owned
- author: kevinslin
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XL, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:29:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add the repo-local `claw-score` taxonomy source at `.agents/skills/claw-score/taxonomy.yaml`. - Preserve the copied taxonomy as a standalone agent skill data file for OpenClaw maturity scorecard work. ## Verification - `git diff --check origin/mai

### #93345 fix(telegram): avoid rich messages in group chats

- bucket: maintainer_owned
- author: hxy91819
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, maintainer, size: L, mantis: telegram-visible-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T16:37:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a Telegram group-chat regression where bot replies could render in Telegram Desktop/macOS as an unsupported-message card instead of normal text. The regression came from the rich-message send path being used for Telegram group replies. Product

### #70906 docs(codex): document native compaction hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, maintainer, size: XS, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:03:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - document Codex native `PreCompact` / `PostCompact` hooks as Codex-owned command hooks - clarify that OpenClaw `before_compaction` / `after_compaction` remain adapter-level plugin hook events - note that OpenClaw uses the app-server compaction item

### #76235 [codex] Fix doctor completion cache plugin loading

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: XS, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:06:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the Windows `openclaw doctor` shell-completion cache path observed in the maintainer workshop: doctor was spawning `openclaw completion --write-state` without the plugin-command skip guard, so completion cache generation could load plugin CLI

### #76730 fix: isolate WhatsApp direct sessions by account

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, maintainer, size: S, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:06:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the WhatsApp direct-message context leak reported in #76263. With the default shared DM scope, inbound WhatsApp DMs could collapse into the agent main session, so distinct contacts shared one session file and model context. ## Root Cause Whats

### #77020 [codex] fix delivery suppression diagnostics

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:07:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - mark message-tool-only/send-policy-suppressed turns with generated visible output as `source-reply-delivery-suppressed` in diagnostics - use the shared reply-content predicate so rich presentation/channel payloads are counted consistently with fin

### #77045 fix(slack): tag gateway failure echoes

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, maintainer, size: S, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:07:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #86627 Keep core doctor health in contribution order

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, maintainer, size: XL, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:08:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR integrates structured health checks with the ordered core doctor checks. The goal is to make it cheap and safe to add structured findings, dry-run previews, and diff/effect reporting to existing doctor rules without moving those rules out of

### #89041 fix(discord): disable ws 8.21.0 receiver part limits for gateway sockets

- bucket: maintainer_owned
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: channel: discord, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:09:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary ws 8.21.0 introduced `maxBufferedChunks` and `maxFragments` receiver limits (commit `[security] Limit retained message parts`) that can trigger `WS_ERR_TOO_MANY_BUFFERED_PARTS` and close connections with code 1008 under certain traffic patterns. Thi

### #89820 feat(mobile): D-1+D-2 — hamburger nav + viewport-responsive layout

- bucket: maintainer_owned
- author: BunsDev
- author association: MEMBER
- draft: no
- assignees: BunsDev
- labels: app: web-ui, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:09:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** - Nav was inaccessible on small screens (hidden with `display:none` below 900px) and workboard columns overflowed the viewport on phones. **Why does this matter now?** - Mobile users have no navigation path and w

### #92014 fix(doctor): survive throwing plugin hooks and warn on build-version skew

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: L, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:12:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hardens `openclaw doctor` and plugin loading against installed plugins built for a different OpenClaw release, the failure class behind #91991 (reported by @cn1313113): `@openclaw/feishu@2026.6.5-beta.5` imports an SDK export that `openclaw@2026.6.5

### #92107 fix(gateway): use normalizeMessageChannel for send validation to support plugin channels

- bucket: maintainer_owned
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: gateway, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:17:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92094. The `message` tool `action=send` was returning "unsupported channel: telegram" because the gateway send method was using `normalizeChannelId` which only checks the active plugin registry, causing failures when the registry wasn't fully

### #92111 fix(update): restart managed gateway when update handoff fails after stop

- bucket: maintainer_owned
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:17:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92088. When a managed-service update handoff fails after the update command has already stopped `openclaw-gateway.service`, nothing restarted the gateway, leaving the host with no live gateway until manual recovery (`loaded inactive dead`, re

### #92154 Gate private QQBot group commands

- bucket: maintainer_owned
- author: sliverp
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: maintainer, size: L, channel: qqbot, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T17:18:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add QQBot-local command visibility classification for OpenClaw core slash commands. - Add per-group `commandLevel` config alongside `requireMention`: - `all`: allow all core slash commands and group-safe QQBot plugin slash commands in the group. -

### #92160 fix(outbound): honor NO_REPLY in message tool sends

- bucket: maintainer_owned
- author: lanzhi-lee
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:19:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Honor `NO_REPLY` in outbound message-tool `send` calls so model-emitted silent-reply tokens are not delivered to users. - Strip trailing `NO_REPLY` from direct-message sends while preserving the visible text. - Return a suppressed success payload

### #92161 feat(diagnostics): chain gateway traces into runs

- bucket: maintainer_owned
- author: lanzhi-lee
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, extensions: diagnostics-otel, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T17:19:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Chain gateway diagnostic traces into embedded agent runs using the existing `DiagnosticTraceContext` instead of adding a second run/request scope. - Add trusted-boundary-aware gateway request/message trace helpers, plus `run.invocation` / `run.inv

### #92288 fix(agents): quiet extra_body tuning-key collisions

- bucket: maintainer_owned
- author: ai-hpc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:24:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes noisy `extra_body` collision warnings for OpenAI-compatible requests. - Treats `extra_body` as the provider-specific escape hatch for intentional tuning-key overrides such as `thinking`. - Keeps warning coverage for framework-owned req

### #92356 fix(heartbeat): skip reasoning payloads when selecting heartbeat reply

- bucket: maintainer_owned
- author: tangtaizong666
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:27:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Heartbeat could deliver the model's reasoning/thinking text to the channel as the user-visible reply even when `includeReasoning` is false. - `resolveHeartbeatReplyPayload` (`src/auto-reply/heartbeat-reply-payload.ts`) returns the last payload wit

### #75614 docs: consolidate remote testing around Crabbox

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: L, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:32:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #93359 fix(signal): require approval id header for reactions

- bucket: maintainer_owned
- author: eleqtrizit
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: signal, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:35:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Harden Signal approval reaction binding so native reaction targets are only attached to canonical OpenClaw approval prompts. ## Changes - Require a canonical `ID: <approvalId>` header before Signal extracts approval reaction bindings from outbound t

### #93238 fix(agents): honor disabled envelope timestamps at model boundary

- bucket: maintainer_owned
- author: osolmaz
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: M, clawsweeper:automerge, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-15T17:38:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Opened on behalf of Onur Solmaz (`osolmaz`). AI-assisted contribution. ## Summary OpenClaw could still send timestamp bytes to model input even when `agents.defaults.envelopeTimestamp` was `"off"`. That matters for cache-sensitive local inference servers such

### #59842 fix(gateway): cap authenticated websocket identities

- bucket: maintainer_owned
- author: eleqtrizit
- author association: MEMBER
- draft: no
- assignees: jacobtomlinson
- labels: gateway, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:46:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Cap authenticated gateway websocket sessions per device identity instead of moving every successful handshake into an unbounded shared client set. - Keep device-less authenticated sessions inside the existing pre-auth budget so shared-auth clients

### #71497 fix(skills): refresh persisted snapshots after restart

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, dedupe:parent, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:49:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Seed the process-local skills snapshot version at gateway/CLI startup instead of starting every process at version `0`. - Force persisted `version: 0` snapshots from older processes to refresh once after restart, covering both gateway reply and CL

### #73374 fix: gate same-model retries to idempotent calls

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, agents, maintainer, size: L, clawsweeper, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:49:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is a narrow ProjectClownfish replacement for the same-model transient retry behavior proposed in #44385. It preserves attribution to @nicolasgrasset and source PR https://github.com/openclaw/openclaw/pull/44385 while excluding unrelated outboun
