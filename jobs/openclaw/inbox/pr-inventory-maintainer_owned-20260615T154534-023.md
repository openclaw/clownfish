---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-023
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
  - "#89078"
  - "#89079"
  - "#89081"
  - "#89089"
  - "#89105"
  - "#89113"
  - "#89124"
  - "#89136"
  - "#89141"
  - "#89149"
  - "#89157"
  - "#89159"
  - "#89171"
  - "#89175"
  - "#89201"
  - "#89213"
  - "#89253"
  - "#89261"
  - "#89262"
  - "#91262"
  - "#89071"
  - "#91289"
  - "#89975"
  - "#92220"
  - "#84975"
cluster_refs:
  - "#89078"
  - "#89079"
  - "#89081"
  - "#89089"
  - "#89105"
  - "#89113"
  - "#89124"
  - "#89136"
  - "#89141"
  - "#89149"
  - "#89157"
  - "#89159"
  - "#89171"
  - "#89175"
  - "#89201"
  - "#89213"
  - "#89253"
  - "#89261"
  - "#89262"
  - "#91262"
  - "#89071"
  - "#91289"
  - "#89975"
  - "#92220"
  - "#84975"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.199Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 23

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #89124 refactor: route auto-reply sessions through session seam

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, agents, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:58:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Path 3 / PR 3.1b auto-reply/agent: routes auto-reply and agent runtime session writes through the 3.1a session accessor seam while preserving current file-backed behavior. Refs #88838. ## Why This moves the auto-reply/agent slice off direct session-sto

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

### #89159 fix(plugin-sdk): validate tool plugin names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:59:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Validate tool plugin tool definitions at the consumed list boundary, not only through the `tool(...)` helper. - Reject non-string/empty names and wrap unreadable name accessors with a clear SDK registration error. - Preserve valid execute/factory 

### #89171 fix(agent-core): validate harness tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:59:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Validate AgentHarness tool names before constructor registration and `setTools()` replacement. - Convert malformed/non-string/empty names and unreadable name accessors into `AgentHarnessError("invalid_argument", ...)`. - Build the constructor tool

### #89175 fix(talk): quarantine malformed realtime tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, extensions: openai, extensions: google, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:59:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable, blank, or whitespace custom realtime tool names in the shared agent-consult tool resolver without dropping valid provider-specific names. - Quarantine OpenAI realtime tools against the OpenAI name contract before WebSocket session

### #89201 refactor: add transcript runtime identity contract

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, scripts, agents, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:00:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds the canonical file-backed transcript runtime identity/state contract for Path 3.1b, building on the session accessor seam without adding SQLite storage, production storage flips, runtime dual-read/fallback, or doctor migration code. ## Why Path 3 

### #89213 fix(agents): guard CLI loopback prompt tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:00:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Sanitize bundled MCP loopback prompt tools before CLI prompt construction, prompt-tool session hashing, and system-prompt reporting. - Reuse the MCP loopback `tools/list` schema projection so unreadable names and unreadable schemas are dropped con

### #89253 fix(plugins): guard runtime tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:01:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden runtime plugin tool candidate inspection against poisoned descriptor getters for `name`, `execute`, `parameters`, `description`, `label`, and `displaySummary`. - Return accepted plugin tools through the scoped proxy with snapshotted descrip

### #89261 refactor: add public transcript identity API

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, scripts, maintainer, size: M, plugin: file-transfer, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:02:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds the public SDK transcript identity API used by Path 3 session/transcript seam work. The PR introduces storage-neutral transcript identity and memory-hit key helpers so plugin and memory consumers can stop deriving transcript identity from file bas

### #89262 refactor: add scoped transcript target writers

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: M, plugin: file-transfer, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:02:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds public SDK transcript target and writer helpers on top of the transcript identity API. The PR lets callers bind scoped transcript identity to an active `sessionFile` target and then read, append, publish, or run locked transcript work against that

### #91262 fix(build): fall back to tsx for build TypeScript scripts

- bucket: maintainer_owned
- author: smoe-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: scripts, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:08:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR was triggered by @smoe hitting a real build failure on a Debian trixie host while moving beyond the packaged OpenClaw install and toward building OpenClaw directly from the git checkout. That host was running Debian’s Node.js 24 build, where `process.f

### #89071 fix(agent-tools): skip unreadable tool names in policy

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:08:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a guarded tool-policy name reader for hostile or unreadable tool name accessors - drop unreadable tool entries from effective allowlists, plugin groups, policy filtering, and policy audit paths - cover the full policy pipeline so an unreadable

### #91289 fix(codex): quarantine unreadable dynamic tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, agents, maintainer, size: M, extensions: codex, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:09:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Quarantines Codex dynamic tools whose input schemas cannot be safely normalized before they reach the Codex app-server bridge. - Preserves plugin/owner attribution for tool-schema quarantine diagnostics so `openclaw doctor` can point at the owning so

### #89975 fix(reply): suppress direct tool-error progress leaks

- bucket: maintainer_owned
- author: jewseppi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: extensions: memory-core, agents, size: M, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:11:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - suppress text-only tool error progress in direct chats when the turn still produces a normal final reply - keep the existing terminal fallback path intact so real failures still surface when there is no usable final answer - add a regression test 

### #92220 fix(media): extract large managed inbound PDFs via media-understanding

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:13:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Large inbound PDFs/documents from messaging channels and the Control UI were delivered to text-only/locked-down agents as just an attachment marker — the agent never saw the document text. This fixes that by extending the **existing** media-understa

### #84975 fix(heartbeat): suppress fallback after route-matched message tool

- bucket: maintainer_owned
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T11:20:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When heartbeat runs in message-tool-only mode, a successful generic message tool delivery can still be followed by duplicate free-text fallback narration in the same Telegram chat. Fixes #84217 ## Affected surface - `src/auto-reply/reply/agent-runner.ts` - Add

