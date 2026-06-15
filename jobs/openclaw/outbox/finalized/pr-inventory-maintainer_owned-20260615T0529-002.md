---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T0529-002
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
  - "#70762"
  - "#70922"
  - "#71497"
  - "#72610"
  - "#73342"
  - "#73374"
  - "#73399"
  - "#73606"
  - "#73724"
  - "#74041"
cluster_refs:
  - "#70762"
  - "#70922"
  - "#71497"
  - "#72610"
  - "#73342"
  - "#73374"
  - "#73399"
  - "#73606"
  - "#73724"
  - "#74041"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.600Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 2

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #70762 refactor(agents): share hook history windows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XL
- gitcrawl snapshot updated: 2026-05-14T05:23:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## summary - add a shared bounded hook-history helper so cli and embedded runners stop drifting on llm_input/agent_end payload windows - switch cli session-history loading and embedded hook emission to the shared windowing logic - add a deterministic live cli-

### #70922 refactor(whatsapp): centralize account policy

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, maintainer, size: L
- gitcrawl snapshot updated: 2026-05-14T05:23:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a canonical WhatsApp-local account policy seam in `extensions/whatsapp/src/account-policy.ts` - migrate inbound policy, send, heartbeat recipient resolution, and action target auth to consume that seam instead of re-deriving multi-account poli

### #71497 fix(skills): refresh persisted snapshots after restart

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, dedupe:parent
- gitcrawl snapshot updated: 2026-05-14T05:23:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Seed the process-local skills snapshot version at gateway/CLI startup instead of starting every process at version `0`. - Force persisted `version: 0` snapshots from older processes to refresh once after restart, covering both gateway reply and CL

### #72610 feat(migrations): add Hermes import path

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, commands, maintainer, size: XL, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:23:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a generic migration framework and fresh-setup guard - add the built-in Hermes importer with memory/config/plugin/MCP/skill mappings - add `openclaw migrate` and onboarding import flags - document migration imports and i18n labels ## Tests - `O

### #73342 refactor(memory-host): replace core runtime bridge with services

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XL
- gitcrawl snapshot updated: 2026-05-14T05:23:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `packages/memory-host-sdk` still reached into core through private `openclaw-runtime*` bridge files. - Why it matters: the package boundary was package-shaped but not actually core-independent. - What changed: added package-local `MemoryH

### #73374 fix: gate same-model retries to idempotent calls

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, agents, maintainer, size: L, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is a narrow ProjectClownfish replacement for the same-model transient retry behavior proposed in #44385. It preserves attribution to @nicolasgrasset and source PR https://github.com/openclaw/openclaw/pull/44385 while excluding unrelated outboun

### #73399 fix(feishu): carry forward DM fallback and topic labels

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, channel: feishu, size: L, clawsweeper, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:23:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Carry forward the remaining Feishu display-name behavior from #38958 after #51032 already landed the group-name session label fix. This replacement should stay narrow: - keep #51032's group-name implementation as the baseline - add/repair DM display

### #73606 docs(rfd): @openclaw/call-sdk — provider-agnostic real-time call SDK

- bucket: maintainer_owned
- author: visionik
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:23:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds an RFC + two companion design docs proposing **`@openclaw/call-sdk`** — a provider-agnostic real-time call SDK — and its binding into OpenClaw's `ChannelPlugin` model. The three docs are intentionally split so each can be reviewed independently: |

### #73724 fix(cli): avoid false local gateway unreachable on probe timeout

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, cli, commands, maintainer, size: XL, clawsweeper, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:23:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - separate local gateway reachability from follow-up detail/read probe failures - add a bounded direct status-RPC fallback or degraded classification for local status/probe paths when the default probe times out or returns unknown capability but the

### #74041 [codex] Route generated media through assistant delivery

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, agents, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:23:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - remove the async media completion direct-send path and its `tools.media.asyncCompletion.directSend` config surface - keep async music/video completion as a requester-session wake so the assistant receives the generated paths and owns the follow-up

