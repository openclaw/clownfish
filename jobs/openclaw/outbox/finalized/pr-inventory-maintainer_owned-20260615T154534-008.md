---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-008
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
  - "#89579"
  - "#76730"
  - "#77020"
  - "#77045"
  - "#77134"
  - "#77213"
  - "#89755"
  - "#89836"
  - "#89860"
  - "#89863"
  - "#88945"
  - "#65205"
  - "#66444"
  - "#68020"
  - "#70762"
  - "#74041"
  - "#74302"
  - "#74402"
  - "#89906"
  - "#89912"
  - "#89924"
  - "#89940"
  - "#89945"
  - "#89946"
  - "#89948"
cluster_refs:
  - "#89579"
  - "#76730"
  - "#77020"
  - "#77045"
  - "#77134"
  - "#77213"
  - "#89755"
  - "#89836"
  - "#89860"
  - "#89863"
  - "#88945"
  - "#65205"
  - "#66444"
  - "#68020"
  - "#70762"
  - "#74041"
  - "#74302"
  - "#74402"
  - "#89906"
  - "#89912"
  - "#89924"
  - "#89940"
  - "#89945"
  - "#89946"
  - "#89948"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.196Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 8

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89579 fix(agents): harden code mode MCP schema docs

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:41:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden code-mode MCP API doc generation against hostile tool schema `properties` maps. - Snapshot schema properties with guarded key/value reads before rendering MCP TypeScript-style headers. - Keep generated docs usable by falling back to require

### #76730 fix: isolate WhatsApp direct sessions by account

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, maintainer, size: S, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:43:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the WhatsApp direct-message context leak reported in #76263. With the default shared DM scope, inbound WhatsApp DMs could collapse into the agent main session, so distinct contacts shared one session file and model context. ## Root Cause Whats

### #77020 [codex] fix delivery suppression diagnostics

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:46:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - mark message-tool-only/send-policy-suppressed turns with generated visible output as `source-reply-delivery-suppressed` in diagnostics - use the shared reply-content predicate so rich presentation/channel payloads are counted consistently with fin

### #77045 fix(slack): tag gateway failure echoes

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, maintainer, size: S, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:47:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #77134 feat(plugin-state): add atomic dedupe claims

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: bluebubbles, maintainer, size: M, plugin: file-transfer, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:49:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: claim/check dedupe consumers need an atomic durable claim primitive before they can safely use the SQLite-backed plugin runtime state store. - Why it matters: lookup + register can race for inbound message dedupe; BlueBubbles also needs t

### #77213 fix(secrets): degrade stale auth profile refs on startup

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, maintainer, size: S, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:50:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #75814. - Keeps gateway startup online when a stale SecretRef exists only in a stored auth profile. - Degrades the affected runtime auth profile by removing the failed keyRef/tokenRef from the prepared snapshot, making it ineligible as missi

### #89755 fix(gateway): guard node invoke plugin policies

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:52:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden `node.invoke` plugin policy dispatch against unreadable plugin policy and node command registrations. - Preserve healthy matching policy dispatch, including method-style handler receivers, while failing closed when policy or dangerous-comma

### #89836 fix(security): guard plugin audit collector metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin security audit collector metadata before invoking collectors. - Keep security audit/doctor collector execution alive when one stale plugin collector row has unreadable owner metadata. - Add a regression covering a failed collector wit

### #89860 fix(media): guard hosted resolver failure logging

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard hosted plugin media resolver failure logging so an unreadable `pluginId` accessor falls back to `unknown` instead of escaping the resolver catch path. - Add regression coverage for poisoned failed-resolver metadata followed by a healthy fall

### #89863 fix(channels): guard package-state failure logging

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard channel package-state probe load-failure logging so an unreadable catalog `pluginId` accessor falls back to `unknown`. - Add a regression for a stale package-state catalog entry whose checker cannot load and whose `pluginId` getter throws. #

### #88945 fix(plugins): serialize binding approval saves

- bucket: maintainer_owned
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:02:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Serializes plugin-binding approval persistence so overlapping `allow-always` saves cannot write stale approval state after a newer save updates the in-memory cache. - Keeps the existing in-memory cache behavior imm

### #65205 feat(discord): add canvas-first Discord Activities support

- bucket: maintainer_owned
- author: thewilloftheshadow
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, gateway, agents, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:09:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #66444 fix(systemd): reconcile managed-env unit migrations

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: XL, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:10:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - carry `#66295` onto current `main` - fix the two real migration regressions from review: rebuild malformed units when `ExecStart=` is missing, and reconcile stale `WorkingDirectory=` in-place instead of leaving `CHDIR` failures behind - remove the

### #68020 fix(memory-core): silence expected operator.admin scope miss in dreaming cleanup

- bucket: maintainer_owned
- author: ImLukeF
- author association: CONTRIBUTOR
- draft: no
- assignees: vignesh07
- labels: extensions: memory-core, maintainer, size: XS, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T17:10:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Dreaming cron's narrative cleanup logs `memory-core: narrative session cleanup failed for <phase> phase: missing scope: operator.admin` on **every** dreaming cycle, making healthy instances look broken. Root cause: `subagent.deleteSession` dispatche

### #70762 refactor(agents): share hook history windows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XL, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:10:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## summary - add a shared bounded hook-history helper so cli and embedded runners stop drifting on llm_input/agent_end payload windows - switch cli session-history loading and embedded hook emission to the shared windowing logic - add a deterministic live cli-

### #74041 [codex] Route generated media through assistant delivery

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, agents, maintainer, size: M, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:11:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - remove the async media completion direct-send path and its `tools.media.asyncCompletion.directSend` config surface - keep async music/video completion as a requester-session wake so the assistant receives the generated paths and owns the follow-up

### #74302 fix(security): block untrusted workspace providers in startup discovery

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, codex, aardvark, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:15:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Motivation - Prevent untrusted workspace plugin discovery entries from being imported/executed during startup prewarm when `providerDiscoveryEntriesOnly` is enabled, closing a path that could run workspace code without explicit trust. ### Description - Whe

### #74402 fix(agents): route async media completions through wake media

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:15:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop async media completion wakes from instructing the parent to call the message tool - rely on structured media carried by the wake, with MEDIA lines only as fallback - assert fallback instructions no longer mention message-tool delivery or NO_R

### #89906 fix(googlechat): fall back to text link when remote media upload fails with 403

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: googlechat, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:19:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #89430 reports that Google Chat agents using app-auth (service-account, `chat.bot` scope) cannot deliver replies that include image or file attachments. The official Google Chat API contract requires user auth for `media.upload

### #89912 refactor: add transcript update identity contract

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: telegram, gateway, extensions: memory-core, agents, maintainer, size: L, extensions: codex, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 🛠️ actively grinding, extensions: copilot
- gitcrawl snapshot updated: 2026-06-14T17:20:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds storage-neutral identity to `SessionTranscriptUpdate` delivery while keeping `sessionFile` as deprecated file-backed compatibility for existing path-based emitters and subscribers. ## Why Path 3 SQLite writer validation could not honestly route tr

### #89924 fix(plugins): guard effective channel owner metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:20:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable bundled channel-owner manifest metadata to the affected plugin row during effective plugin id resolution - keep healthy bundled channel owners eligible when a different manifest row throws while exposing `origin`, `channels`, or

### #89940 fix(models): guard manifest model id metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:21:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable plugin records while collecting manifest model-id normalization policies. - Preserve policy collection from healthy records before and after a poisoned metadata row. - Add regression coverage for both throwing `modelIdNormalization

### #89945 fix(plugins): guard provider discovery metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:21:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard manifest model-catalog metadata reads during provider discovery so one unreadable plugin row is skipped instead of aborting discovery. - Keep healthy manifest static catalog entries available before and after a bad row. - Add a poisoned meta

### #89946 fix(plugins): guard provider policy metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:21:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard bundled provider policy owner resolution against unreadable per-plugin metadata rows. - Continue resolving later valid bundled provider policy owners after a malformed row. - Add a regression covering poisoned `providers` and `providerAuthAl

### #89948 fix(plugins): guard plugin id alias metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:21:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin-registry config id alias collection against unreadable manifest metadata. - Skip only the malformed manifest alias row, while preserving healthy channel/provider aliases for config id normalization. - Add regression coverage for poiso

