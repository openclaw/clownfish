---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-053
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
  - "#91162"
  - "#91177"
  - "#91206"
  - "#90700"
  - "#91132"
  - "#93317"
  - "#67011"
  - "#68116"
  - "#91222"
  - "#91239"
  - "#91249"
  - "#91250"
  - "#91271"
  - "#91273"
  - "#91276"
  - "#91279"
  - "#91280"
  - "#91393"
  - "#91399"
  - "#91444"
  - "#91446"
  - "#91447"
  - "#91466"
  - "#91473"
  - "#91477"
cluster_refs:
  - "#91162"
  - "#91177"
  - "#91206"
  - "#90700"
  - "#91132"
  - "#93317"
  - "#67011"
  - "#68116"
  - "#91222"
  - "#91239"
  - "#91249"
  - "#91250"
  - "#91271"
  - "#91273"
  - "#91276"
  - "#91279"
  - "#91280"
  - "#91393"
  - "#91399"
  - "#91444"
  - "#91446"
  - "#91447"
  - "#91466"
  - "#91473"
  - "#91477"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.797Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 53

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91162 fix(cron): honor configured delivery.channel instead of misrouting (#46899)

- bucket: needs_proof
- author: sumitaich1998
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:21:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A cron job configured with an explicit `delivery.channel` (e.g. Telegram) could be silently misrouted to a different enabled channel (e.g. Feishu) using a stale/leftover recipient id, failing with `Invalid ids: [-1002381931352]`. This makes the conf

### #91177 fix(tui): persist canonical provider in session modelProvider

- bucket: needs_proof
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:22:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary After a CLI-routed agent run (any model with `agentRuntime.id` pinned to a CLI backend such as `claude-cli` or `google-antigravity-cli`), the TUI footer renders `claude-cli/claude-sonnet-4-6` instead of `anthropic/claude-sonnet-4-6` — leaking the im

### #91206 fix(agents/subagent-spawn): pass resolved model to gateway agent call

- bucket: needs_proof
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:23:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91171. AI-generated fix, human-reviewed. ## Summary The gateway `agent` call in `spawnSubagentDirect` was missing the `model` parameter. The plan resolver (`resolveSubagentModelAndThinkingPlan`) correctly canonicalizes `modelOverride` into `resolvedMode

### #90700 fix(agents): reconnect streamable-HTTP MCP sessions on session loss [AI-assisted]

- bucket: needs_proof
- author: lucidlearning314
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:25:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When a remote streamable-HTTP MCP server restarts, it drops the in-memory session it handed us. OpenClaw keeps using the stale session id, so every subsequent `callTool` fails — HTTP `404` (the MCP-spec session-terminated signal) or a

### #91132 feat(gateway): add first-output and completed latency phases to chat.send_timing

- bucket: needs_proof
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:25:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Partially addresses #90556. Narrow, server-only change. ## Change Type / Scope / Linked Issue - **Type**: feat - **Scope**: gateway - **Linked Issue**: Partially addresses #90556 ## Motivation Issue #90556 requests displaying response latency in the

### #93317 fix(codex): dedupe raw commentary progress

- bucket: needs_proof
- author: AgentArcLab
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: needs-real-behavior-proof, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:37:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #93296. - dedupes Codex app-server commentary progress when the same assistant note arrives through both the typed `agentMessage` lane and the raw `rawResponseItem/completed` lane - keeps normal same-item commentary progress snapshots intact -

### #67011 fix: avoid false circular detection for shared references

- bucket: needs_proof
- author: wzhgba
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:41:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # PR: fix false circular detection for shared references in diagnostic payload traversal ## Summary This PR fixes a false-positive circular detection bug in diagnostic payload traversal. Previously, the traversal used a global `seen` set. That caused sibling f

### #68116 feat(memory-lancedb): support reindex and drop-index command

- bucket: needs_proof
- author: zhangyue19921010
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-lancedb, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:41:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `ltm reindex` rebuilt the LanceDB vector index but did not wait for index creation to finish before reporting success. - Why it matters: the command could print a successful result while the index was still building in the background, whi

### #91222 fix(google-vertex): retry transient pre-stream failures and stale ADC

- bucket: needs_proof
- author: damianFelixPago
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:47:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Vertex streaming requests currently fail the entire turn on two transient, recoverable conditions: 1. **Pre-stream `429` / `503`** from the Vertex endpoint (rate limiting / backend unavailability), surfaced as a hard error before any SSE chunk is re

### #91239 fix(opencode-go): complete catalog, onboarding, and tiered pricing

- bucket: needs_proof
- author: samson910022
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, extensions: opencode-go, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T14:48:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #91238. This PR completes the OpenCode Go catalog repair initially attempted in #91351. The prior fix was incomplete — it only added Flat Pricing assertions in test files without implementing the official tiered pricing in `provider-catalog.t

### #91249 fix(windows): hide startup fallback launcher with VBS

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:48:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Windows Startup-folder fallback installs currently launch the gateway through a visible `cmd.exe` hop. - Even with `start /min`, Windows still flashes the terminal frame briefly at logon before minimizing it. - Thi

### #91250 fix(agents): rename timezone-only prompt section (Fixes #63181)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:49:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #63181. Rename the timezone-only system prompt section from `Current Date & Time` to `Time Zone`. This keeps the prompt wording aligned with current behavior: the section only injects the configured timezone to preserve cache stability, and ag

### #91271 fix(agents): include requester identity in sessions_send context (Fixes #38570)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:49:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #38570. Include the requester agent's configured `identity.name` in the `sessions_send` agent-to-agent prompt contexts. This updates the three A2A prompt builders used by the flow: - initial `sessions_send` request context - bounded ping-pong

### #91273 fix(windows): remove findstr from scheduled-task restart probe (Fixes #84600)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:49:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #84600. The Windows scheduled-task restart helper still probed task state with a PowerShell command piped into `findstr /I /C:"Running"`. That leaves a visible `cmd.exe -> findstr.exe` child process shape on some Windows hosts, which matches t

### #91276 fix(tui): include pairing approval command in recovery hint (Fixes #67618)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:50:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #67618. When the TUI disconnects with a pairing-required error, it currently tells the user to run `openclaw devices list` and then "approve your request ID" without ever naming the actual approval command. This keeps the scope narrow: - updat

### #91279 fix(ui): show config path in overview snapshot (Fixes #53958)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:50:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #53958. Operators looking at Control UI Overview often need to answer a basic troubleshooting question quickly: which config file is this gateway actually using? The gateway snapshot already includes `configPath`, so this change simply surface

### #91280 fix(cli): add exec approval recovery guidance (Fixes #53250)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:50:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #53250. When `host=node` exec approval is required but no approval UI is available, the CLI currently fails with a generic error: `exec denied: approval required (approval UI not available)` That tells the operator something is wrong, but not

### #91393 fix(embedded-runner): refresh compaction retry diagnostics

- bucket: needs_proof
- author: fangkaigedaima
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:51:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Refresh diagnostic run progress while active compaction retries keep an embedded run waiting. - Preserve the aggregate timeout fallback for idle/lost compaction retry waits. - Add focused regression coverage proving the heartbeat refreshes diagnos

### #91399 fix(cron): keep no-channel implicit cron runs successful instead of failing delivery (#56078)

- bucket: needs_proof
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:52:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On a local / no-channel setup, backend- or Control-UI-created isolated `agentTurn` cron jobs fail their whole run with `Channel is required (no configured channels detected)` even though the agent turn ran successfully (e.g. it wrote a report file).

### #91444 fix(google): register 'google' alias for memory embedding provider

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, extensions: google, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:52:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(google): register 'google' alias for memory embedding provider ## Summary **Problem:** Users configure `memorySearch.provider: "google"` but the Google memory embedding provider is registered with id `"gemini"`. This causes "Unknown memory embedding provid

### #91446 fix(agents): expose sessions_spawn in TUI when subagents.allowAgents is configured

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:53:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(agents): expose sessions_spawn in TUI when subagents.allowAgents is configured ## Summary **Problem:** The `sessions_spawn` tool was only included for non-embedded agents or when `allowGatewaySubagentBinding` was explicitly true. This prevented TUI users f

### #91447 fix(ui): scope local assistant avatar override to agent ID (fixes #90890)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:53:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Local assistant avatar overrides are stored under a single global `localStorage` key (`openclaw.control.assistant.v1`), so setting an avatar for one agent changes it for all agents. - **Root Cause**: `loadLocalAssistantIdentity` and

### #91466 Gateway: server-side WebSocket keepalive + close-on-timeout

- bucket: needs_proof
- author: hoangsaga123
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:54:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Gateway: server-side WebSocket keepalive + close-on-timeout Branch: `ticket-214-gateway-ws-keepalive` · base `main@35eb63e6` · patch: `patches/ticket-214-gateway-ws-keepalive.diff` (12 files, +~520/-15) ## Summary The gateway has no keepalive on its post-aut

### #91473 feat(google): filter English "I will"/"I am" pre-tool narration from antigravity-cli

- bucket: needs_proof
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:54:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary agy 1.0.6 emits English first-person pre-tool narration in two forms: - `I will <verb> …` (imminent action — `"I will list the contents of the project workspace."`) - `I am <verb-ing> …` (background/long-running — `"I am running the openclaw status

### #91477 feat(plugin-sdk): add optional CliBackendPlugin.estimateUsage hook for text-output backends

- bucket: needs_proof
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:55:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Draft — depends on #91282 product decision.** This PR implements the API discussed in #91282 (CliBackendPlugin.estimateUsage hook for text-output backends), including the maintainer-requested `estimated: true` discriminator that the most recent issue comme
