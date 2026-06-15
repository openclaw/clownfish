---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-005
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
  - "#78857"
  - "#78875"
  - "#79518"
  - "#79818"
  - "#82105"
  - "#82193"
  - "#82213"
  - "#80845"
  - "#82112"
  - "#80774"
cluster_refs:
  - "#78857"
  - "#78875"
  - "#79518"
  - "#79818"
  - "#82105"
  - "#82193"
  - "#82213"
  - "#80845"
  - "#82112"
  - "#80774"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.600Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 5

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #78857 perf(agents): trim agent tool helper queues

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: channel: slack, channel: telegram, app: web-ui, gateway, agents, maintainer, size: XL
- updated: 2026-05-14T05:25:32Z
- body excerpt: ## Summary - Cherry-pick the agents/tools performance bucket onto main. - Replace queue `shift()`/array-chain hot paths in OpenAI WebSocket streaming, tool-call id resolution, agent reply/tool helpers, Slack, Telegram, SDK, and bundled channel helper assembly.

### #78875 perf(plugins): trim catalog and setup normalization

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: channel: discord, channel: mattermost, channel: slack, channel: telegram, gateway, agents, maintainer, size: XL, extensions: qa-lab
- updated: 2026-05-14T05:25:33Z
- body excerpt: ## Summary - Replays the catalog/plugin/setup normalization bucket onto current `main`. - Keeps the catalog/setup, plugin control-plane, setup formatter, channel catalog, and plugin helper rewrites. - Intentionally omits the stale package-entry-resolution hunk

### #79518 Prefer task-tracked Codex delegation

- bucket: maintainer_owned
- author: mbelinky
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, extensions: codex
- updated: 2026-05-14T05:25:41Z
- body excerpt: ## Summary - Add a Codex app-server developer-instruction guardrail that prefers OpenClaw `sessions_spawn` for delegated/background/"let me know when done" work when that dynamic tool is available. - Keep native Codex `spawnAgent` available for explicit Codex-

### #79818 feat(slack): expand message action parity

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: slack, agents, maintainer, size: XL, clawsweeper:automerge, clawsweeper:human-review
- updated: 2026-05-14T05:25:43Z
- body excerpt: ## Summary - Adds opt-in Slack message actions for search, channel discovery, permalinks, scheduled and ephemeral delivery, files, bookmarks, reminders, and canvases. - Adds Slack send controls for reply broadcast and unfurl preferences. - Gates Slack search d

### #82105 chore(docker): bundle channel voice plugin deps

- bucket: stale_unassigned
- author: exoulster
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, docker, size: XS, proof: supplied
- updated: 2026-05-15T10:50:50Z
- body excerpt: ## Summary - Problem: default Docker builds pruned optional bundled plugin runtime dependencies unless operators knew to set `OPENCLAW_EXTENSIONS`. - Why it matters: Discord, Feishu, and Voice Call are externalized plugin packages but should be ready in the st

### #82193 feat(tools): add sessions_broadcast for multi-session A2A fan-out

- bucket: needs_proof
- author: bryanbaer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, triage: needs-real-behavior-proof
- updated: 2026-05-15T15:18:51Z
- body excerpt: ## Summary Adds `sessions_broadcast` — a fan-out primitive for multi-session A2A coordination. **Motivation:** `sessions_send` is one-to-one. Notifying multiple agent sessions (e.g. before a gateway restart, or coordinating a swarm) requires N sequential `sess

### #82213 plugin-sdk: add runtime.session.cancel and channel.outbound.sendToSession

- bucket: needs_proof
- author: satoy-bot
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: dirty-candidate, plugin: file-transfer, triage: needs-real-behavior-proof
- updated: 2026-05-15T16:28:28Z
- body excerpt: ## Summary - add `runtime.session.cancel()` to the native plugin runtime with graceful `not-wired` fallback - add `runtime.channel.outbound.sendToSession()` for direct text delivery to a session’s last recorded route - wire gateway plugin runtimes to existing 

### #80845 feat(voice-call): implement asynchronous email delivery for consult results

- bucket: needs_proof
- author: kevin-suaza-insidetrack
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: voice-call, size: M, triage: needs-real-behavior-proof
- updated: 2026-05-16T02:57:04Z
- body excerpt: ## Summary - **Problem:** During realtime voice calls, complex questions (e.g., data queries requiring tool execution) block the caller waiting for an answer that may take minutes, with no fallback if the consult times out or the caller prefers email delivery.

### #82112 Add named session resume command

- bucket: needs_proof
- author: marchpure
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, size: XL, triage: dirty-candidate, triage: external-plugin-candidate, triage: needs-real-behavior-proof, dependencies-changed
- updated: 2026-05-16T03:00:10Z
- body excerpt: ## Summary - add `/resume [session-label]` as a Gateway conversation command for named OpenClaw sessions - keep `/resume` label-only and current-conversation-only, without changing existing `/focus` implementation or tests - gate both list and bind paths throu

### #80774 [codex] Add manifest plugin auth requirements

- bucket: maintainer_owned
- author: scoootscooob
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: L, proof: sufficient
- updated: 2026-05-16T03:39:32Z
- body excerpt: ## Summary - Add optional native plugin manifest `authRequirements` metadata for provider credentials, channel accounts, external services, and host runtime capabilities. - Carry the metadata through manifest registry records and export `collectPluginAuthRequi

