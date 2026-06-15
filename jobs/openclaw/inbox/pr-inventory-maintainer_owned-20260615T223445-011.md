---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-011
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
  - "#93220"
  - "#84205"
  - "#84972"
  - "#86564"
  - "#86584"
  - "#87471"
  - "#87573"
  - "#87669"
  - "#88970"
  - "#89031"
  - "#89056"
  - "#89061"
  - "#89072"
  - "#89076"
  - "#89077"
  - "#89078"
  - "#89079"
  - "#89081"
  - "#89089"
  - "#89105"
  - "#89113"
  - "#89136"
  - "#89141"
  - "#89149"
  - "#89157"
cluster_refs:
  - "#93220"
  - "#84205"
  - "#84972"
  - "#86564"
  - "#86584"
  - "#87471"
  - "#87573"
  - "#87669"
  - "#88970"
  - "#89031"
  - "#89056"
  - "#89061"
  - "#89072"
  - "#89076"
  - "#89077"
  - "#89078"
  - "#89079"
  - "#89081"
  - "#89089"
  - "#89105"
  - "#89113"
  - "#89136"
  - "#89141"
  - "#89149"
  - "#89157"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.788Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 11

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93220 fix(status): avoid stale session context windows

- bucket: maintainer_owned
- author: hxy91819
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, agents, maintainer, size: M, clawsweeper:automerge, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-15T10:23:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `/status` context-window reporting when persisted session runtime metadata is stale. The status message can display the currently selected/configured model while still using an old `session.contextTokens` or old runtime-model snapshot to compute

### #84205 fix(agents): forward turn-source for embedded plugin before_tool_call approvals

- bucket: maintainer_owned
- author: jzakirov
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:48:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A plugin `before_tool_call` hook that returns `requireApproval` is **unusable from the embedded agent runner** when the only delivery path is the originating chat (e.g. a self-hosted Telegram bot with no connected operator approval client and no for

### #84972 fix(agent): treat Anthropic long-context usage errors as context overflow for compact+retry

- bucket: maintainer_owned
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:49:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Re-opening as new PR after #52030 was auto-closed by barnaclebot for the 10-PR cap; reviewers and Greptile evaluated the fix positively at the time and the underlying bug still applies on current main. Anthropic returns HTTP 429 with body `"Extra us

### #86564 fix(gateway): disable provider auth prewarm by default

- bucket: maintainer_owned
- author: wesleysimplicio
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: gateway, size: S, proof: override, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:50:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip the provider-auth startup warm on the normal gateway path unless `providerAuthPrewarm.enabled === true`. - Keep the gateway lifetime provider-auth sidecar installed when the runtime supplies `providerAuthPrewarm`, so auth-profile failures sti

### #86584 fix(agents): gate owned-write publish on pre-append fingerprint (#86572)

- bucket: maintainer_owned
- author: ubehera
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:51:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Converts the embedded session-takeover fence's post-write handling from a **fail-open** unconditional fence refresh into a **fail-closed**, trust-gated owned-write publish. On current `main`, after a lane's own message persists, `onMessagePersisted

### #87471 fix(webchat): mirror visible tool status on replay

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, maintainer, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:52:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #87321. ## Summary - generalize the existing WebChat replay mirror into an internal visible-tool mirror path - keep current `message` tool replay behavior and compatibility marker intact - add `sessions_yield` replay support for successful `{ status: "yi

### #87573 Repair active npm host after plugin installs

- bucket: maintainer_owned
- author: mbelinky
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:52:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Detect when a managed plugin npm install prunes dependencies from the active global-prefix OpenClaw package. - Repair the active OpenClaw package at the same installed version before reporting plugin install success, including required dependencies a

### #87669 feat(skills): add SkillRouter abstraction for pre-routing

- bucket: maintainer_owned
- author: lanzhi-lee
- author association: MEMBER
- draft: no
- assignees: shakkernerd
- labels: docs, agents, size: XL, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:52:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Introduces a pluggable `SkillRouter` interface that lets plugins pre-filter skills before the final model request is built. - Keeps core strategy-agnostic: core defines the router protocol, registry, config surface, lifecycle handling, and prompt

### #88970 fix #85871: [Bug]: Heartbeat scheduler silently fails to fire on 5.20 and all 5.x versions (regression from 4.23)

- bucket: maintainer_owned
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:53:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: scheduled heartbeat turns could be accepted by the scheduler but never reach a real model turn when reply work was already active around the same session/agent. - Why it matters / User impact: affected 5.x installs can look like heartbeat

### #89031 fix(plugins): guard plugin tool descriptor accessors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:53:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat unreadable plugin tool required fields as malformed before wrapping, caching, or exposing the tool. - Keep valid sibling plugin tools available when one tool has hostile `name`, `execute`, `description`, or descriptor-cache accessors. - Make

### #89056 fix(mcp): validate plugin tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:55:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens the standalone plugin tools MCP bridge so `tools/list` no longer reads plugin `parameters` through brittle object operators. - Materializes plugin MCP tool descriptors through the existing runtime schema projection, then validates the list

### #89061 fix(agent-core): skip unreadable tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:55:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard tool-name lookup in agent-core tool execution and llm-core validation so unreadable sibling tool names do not abort healthy tool calls - preserve the per-tool sequential safety contract by treating unreadable `executionMode` on a matched too

### #89072 fix(codex): guard prompt report tool metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, extensions: codex, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:55:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make Codex system prompt tool reports tolerate unreadable dynamic-tool metadata - use fallback `tool[index]`, empty summaries, and null-schema stats when report-only fields throw - preserve healthy sibling tool report entries instead of aborting t

### #89076 fix(agent-tools): guard system prompt tool reports

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:56:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make generic system prompt tool reports tolerate unreadable tool metadata - use fallback `tool[index]`, empty summaries, and empty schema stats when report-only fields throw - preserve healthy sibling tool report entries instead of aborting report

### #89077 fix(agent-runtime): guard provider schema diagnostics

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:56:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make provider tool-schema diagnostic logging tolerate unreadable tool metadata - normalize provider-returned diagnostic fields before summarizing/logging them - preserve the structured warning for healthy diagnostics while dropping hostile diagnos

### #89078 fix(tui): respect queue mode in sendMessage busy guard

- bucket: maintainer_owned
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: gateway, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:56:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90012 ## Summary The TUI `sendMessage()` hardcodes a busy check that blocks new messages when the agent is running, completely ignoring the `/queue` mode setting configured on the Gateway. This makes `followup`, `collect`, and `interrupt` modes unusable

### #89079 fix(agent-runtime): skip unreadable allowlist tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:56:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make embedded runtime allowlist collection skip unreadable local tool names - skip unreadable client tool function names while preserving readable client entries - treat tools whose core/plugin classification throws as non-core for conflict allowl

### #89081 fix(agent-runtime): skip unreadable construction tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:56:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip tools whose `name` accessor cannot be read before embedded construction-plan allowlist filtering. - Reuse the readable name snapshot for wildcard, explicit-name, and plugin-id group matching so one hostile tool does not abort the assistant tu

### #89089 fix(agent-runtime): guard tool search catalog descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:57:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard Tool Search catalog registration against unreadable tool descriptor fields. - Clone parameter schemas before catalog fingerprinting so nested bad schema accessors cannot crash compaction. - Preserve healthy tool identity/reuse and avoid doub

### #89105 fix(agent-core): guard tool-call validation lookup

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:57:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard low-level tool lookup so unreadable sibling tool names cannot abort validation or agent-loop preparation for a healthy requested tool - turn unreadable selected parameter schemas into normal validation failures with the original error preser

### #89113 fix(agent-runtime): quarantine normalized tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:58:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - filter provider/runtime-plan normalized tools through runtime-compatible schema inspection before metadata preservation - preserve plugin/channel metadata on normalized descriptors before quarantine diagnostics are emitted - make runtime tool meta

### #89136 fix(agent-core): guard harness tool registry

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:58:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - build the `AgentHarness` tool registry through a guarded helper that skips descriptors whose `name` cannot be read - derive default active tool names from readable descriptors and keep `setTools()` validation on the filtered registry - add regress

### #89141 fix(agents): guard provider tool diagnostic names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:58:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard provider tool-schema diagnostic log metadata from unreadable tool `name` accessors - keep diagnostics visible by rendering malformed tool names as `<unreadable>` / `<unnamed>` instead of throwing - add a focused regression for diagnostic log

### #89149 fix(agents): validate extension tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:58:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - validate extension-registered tool names before inserting tools into the extension registry - fail closed through the existing extension load error path for non-string, empty, or unreadable names - add regression coverage for numeric tool names an

### #89157 docs: document reusable helper contracts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, channel: voice-call, app: web-ui, gateway, cli, commands, agents, maintainer, size: XL, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:59:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Continue the inline-comment pass after #88554, focused on declaration/API docs and runtime contract notes. - Document reusable CLI, Gateway, plugin SDK, channel, markdown, media, and voice-call helper surfaces without file headers or import-block
