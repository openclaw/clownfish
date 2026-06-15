---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T060018-005
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
  - "#76235"
  - "#76245"
  - "#76730"
  - "#76895"
  - "#76927"
  - "#77020"
  - "#77045"
  - "#77134"
  - "#77213"
  - "#77542"
cluster_refs:
  - "#76235"
  - "#76245"
  - "#76730"
  - "#76895"
  - "#76927"
  - "#77020"
  - "#77045"
  - "#77134"
  - "#77213"
  - "#77542"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.659Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 5

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #76235 [codex] Fix doctor completion cache plugin loading

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:24:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the Windows `openclaw doctor` shell-completion cache path observed in the maintainer workshop: doctor was spawning `openclaw completion --write-state` without the plugin-command skip guard, so completion cache generation could load plugin CLI 

### #76245 [codex] Fallback when Windows gateway task exits early

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a Windows scheduled-task fallback for the failure shape from Brad's workshop log: `schtasks /Run` is accepted, but the task quickly reports `Last Run Result=0` / stopped and no gateway listener appears. Previously the fallback only handled the 

### #76730 fix: isolate WhatsApp direct sessions by account

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the WhatsApp direct-message context leak reported in #76263. With the default shared DM scope, inbound WhatsApp DMs could collapse into the agent main session, so distinct contacts shared one session file and model context. ## Root Cause Whats

### #76895 perf(core): trim channel RTT hot paths

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: mattermost, channel: slack, channel: telegram, channel: voice-call, scripts, agents, maintainer, extensions: device-pair, size: XL, extensions: qa-lab
- gitcrawl snapshot updated: 2026-05-14T05:24:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Trims Telegram, Slack, Discord, Mattermost, agent-turn, plugin control-plane, channel snapshot, catalog, media, and model-catalog hot paths. - Adds Convex credential-source support to the Telegram RTT package harness. - Records the optimization inven

### #76927 [codex] Queue subagent completion announces

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, agents, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:24:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Route subagent completion announces through the requester session steer/announce queue before direct fallback. - Force completion handoffs onto an internal queue independent of channel queue mode, while preserving bound route delivery. - Keep dire

### #77020 [codex] fix delivery suppression diagnostics

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - mark message-tool-only/send-policy-suppressed turns with generated visible output as `source-reply-delivery-suppressed` in diagnostics - use the shared reply-content predicate so rich presentation/channel payloads are counted consistently with fin

### #77045 fix(slack): tag gateway failure echoes

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #77134 feat(plugin-state): add atomic dedupe claims

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: bluebubbles, maintainer, size: M, plugin: file-transfer
- gitcrawl snapshot updated: 2026-05-14T05:24:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: claim/check dedupe consumers need an atomic durable claim primitive before they can safely use the SQLite-backed plugin runtime state store. - Why it matters: lookup + register can race for inbound message dedupe; BlueBubbles also needs t

### #77213 fix(secrets): degrade stale auth profile refs on startup

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #75814. - Keeps gateway startup online when a stale SecretRef exists only in a stored auth profile. - Degrades the affected runtime auth profile by removing the failed keyRef/tokenRef from the prepared snapshot, making it ineligible as missi

### #77542 [codex] add gateway stall diagnostics

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: slack, gateway, cli, scripts, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:24:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This adds higher-signal gateway stall diagnostics for slow Telegram turns where the transport is healthy but the Gateway/embedded Codex run stops making useful progress. Changes: - Add a lightweight diagnostic phase ring and emit `diagnostic.phase.c

