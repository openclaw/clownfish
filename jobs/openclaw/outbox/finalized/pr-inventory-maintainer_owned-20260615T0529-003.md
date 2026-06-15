---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T0529-003
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
  - "#74176"
  - "#74402"
  - "#75614"
  - "#76221"
  - "#76235"
  - "#76245"
  - "#76895"
  - "#77020"
  - "#77045"
  - "#77134"
cluster_refs:
  - "#74176"
  - "#74402"
  - "#75614"
  - "#76221"
  - "#76235"
  - "#76245"
  - "#76895"
  - "#77020"
  - "#77045"
  - "#77134"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.600Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 3

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #74176 feat(telegram): support mini app URL buttons

- bucket: maintainer_owned
- author: obviyus
- author association: MEMBER
- draft: no
- assignees: obviyus
- labels: docs, channel: telegram, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:23:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reuse shared presentation URL buttons in Telegram inline keyboards. - Render direct-chat HTTPS presentation buttons as Telegram Mini App web_app buttons. - Document the Telegram HTTPS, private-chat, and initData constraints. ## Validation - pnpm t

### #74402 fix(agents): route async media completions through wake media

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:24:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop async media completion wakes from instructing the parent to call the message tool - rely on structured media carried by the wake, with MEDIA lines only as fallback - assert fallback instructions no longer mention message-tool delivery or NO_R

### #75614 docs: consolidate remote testing around Crabbox

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: L
- gitcrawl snapshot updated: 2026-05-14T05:24:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #76221 [codex] Fix Anthropic Vertex npm audit regression

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, maintainer, size: M, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:24:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - remove the `@anthropic-ai/vertex-sdk` runtime dependency from the shipped OpenClaw package - replace it with a small local Anthropic Vertex client built on the existing `@anthropic-ai/sdk` and `google-auth-library@10.6.2` - update the lockfile so 

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

### #76895 perf(core): trim channel RTT hot paths

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: mattermost, channel: slack, channel: telegram, channel: voice-call, scripts, agents, maintainer, extensions: device-pair, size: XL, extensions: qa-lab
- gitcrawl snapshot updated: 2026-05-14T05:24:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Trims Telegram, Slack, Discord, Mattermost, agent-turn, plugin control-plane, channel snapshot, catalog, media, and model-catalog hot paths. - Adds Convex credential-source support to the Telegram RTT package harness. - Records the optimization inven

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

