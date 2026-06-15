---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-020
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
  - "#91786"
  - "#90383"
  - "#91878"
  - "#91906"
  - "#93175"
  - "#73365"
  - "#77134"
  - "#93156"
  - "#93194"
  - "#89124"
  - "#89975"
  - "#93265"
  - "#14432"
  - "#84975"
  - "#72409"
  - "#76115"
  - "#76245"
  - "#76895"
  - "#76927"
  - "#89327"
  - "#89329"
  - "#89333"
  - "#89518"
  - "#89547"
  - "#89579"
cluster_refs:
  - "#91786"
  - "#90383"
  - "#91878"
  - "#91906"
  - "#93175"
  - "#73365"
  - "#77134"
  - "#93156"
  - "#93194"
  - "#89124"
  - "#89975"
  - "#93265"
  - "#14432"
  - "#84975"
  - "#72409"
  - "#76115"
  - "#76245"
  - "#76895"
  - "#76927"
  - "#89327"
  - "#89329"
  - "#89333"
  - "#89518"
  - "#89547"
  - "#89579"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.790Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 20

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91786 fix(plugins): reconcile managed npm root overrides with managed peer pins

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: amknight
- labels: maintainer, size: L, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:03:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91772. 2026.6.5 started exporting the full `pnpm-workspace.yaml` override set (26 entries, including `hono: 4.12.18`) into managed plugin npm roots (392af2e612, 99e627b283), while `syncManagedNpmRootPeerDependencies()` kept preserving pre-exi

### #90383 fix(ollama): skip unreadable tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, extensions: ollama, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:03:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens native Ollama tool request construction so one unreadable, revoked, cyclic, or otherwise uncopyable tool schema is skipped instead of aborting the whole stream setup. - Preserves healthy sibling tools and valid large/readable schema shapes

### #91878 fix(codex): validate maintained app-server types

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: kevinslin
- labels: scripts, maintainer, size: M, extensions: codex, proof: sufficient, P3, rating: 🦞 diamond lobster, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:04:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - validate OpenClaw's maintained Codex app-server request and raw inbound types against temporary TypeScript generated from the pinned Codex source - keep only the selected JSON schemas in the repository; no generated TypeScript files are committed

### #91906 perf: skip subagent live stream parsing

- bucket: maintainer_owned
- author: lanzhi-lee
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:04:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip per-chunk live visible-text parsing for subagent runs, which have no live preview consumer. - Thread `suppressLiveStreamOutput` from the subagent lane through the embedded runner and subscription path. - Preserve final `message_end` delivery

### #93175 test(qa): expand smoke-ci and release categories and coverage

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, extensions: qa-lab, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:05:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add primary smoke-ci scorecard evidence links for six high-value already-covered behaviors - cover Control UI bootstrap, cron RPC/announce delivery, protected Prometheus scrape, media generation persistence, and thread placement - expand `smoke-ci

### #73365 fix: allow steer messages during active non-streaming runs

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, clawsweeper, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:23:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace the isStreaming-only steer/interrupt injection gate with lifecycle-aware active/stopped handling for embedded and reply runs. - Preserve the old conservative streaming fallback for handles that do not expose isStopped, addressing the lates

### #77134 feat(plugin-state): add atomic dedupe claims

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: bluebubbles, maintainer, size: M, plugin: file-transfer, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:26:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: claim/check dedupe consumers need an atomic durable claim primitive before they can safely use the SQLite-backed plugin runtime state store. - Why it matters: lookup + register can race for inbound message dedupe; BlueBubbles also needs t

### #93156 fix(doctor): import default-agent auth profiles into sqlite

- bucket: maintainer_owned
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: sallyom
- labels: commands, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:31:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Import legacy default-agent `auth.profiles` credentials into the per-agent SQLite auth store when no per-agent JSON files exist. - Strip migrated config credential fields back to metadata-only entries and mark the config changed so doctor does not

### #93194 fix(agents): preserve prompt-released session metadata

- bucket: maintainer_owned
- author: snowzlm
- author association: CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: agents, size: XL, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:32:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #93193. Embedded attempts now preserve safe session rows appended while the prompt lock is released without treating them as a takeover or letting a stale `SessionManager` discard them later. - Accept transcript-only OpenClaw delivery mirrors

### #89124 refactor: route auto-reply sessions through session seam

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, agents, maintainer, size: XL, P2, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-15T18:32:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Path 3 / PR 3.1b auto-reply/agent: routes auto-reply and agent runtime session writes through the 3.1a session accessor seam while preserving current file-backed behavior. Refs #88838. ## Why This moves the auto-reply/agent slice off direct session-sto

### #89975 fix(reply): suppress direct tool-error progress leaks

- bucket: maintainer_owned
- author: jewseppi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: extensions: memory-core, agents, size: M, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T18:33:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - suppress text-only tool error progress in direct chats when the turn still produces a normal final reply - keep the existing terminal fallback path intact so real failures still surface when there is no usable final answer - add a regression test

### #93265 feat(onboard): streamline setup with agent-assisted configuration

- bucket: maintainer_owned
- author: fuller-stack-dev
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, cli, scripts, commands, docker, agents, size: XL, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look, extensions: copilot
- gitcrawl snapshot updated: 2026-06-15T18:33:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Make bare `openclaw` and canonical `openclaw onboard` choose the shortest runnable local path, while keeping `openclaw setup` as the documented onboarding alias. - Offer migration from supported agent environments before separate model setup, keep

### #14432 System prompt: add guidance for spawning background sub-agents

- bucket: maintainer_owned
- author: vignesh07
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:35:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds concrete system-prompt guidance for when to use sessions_spawn (background sub-agents), plus a small unit test covering the new section. <!-- greptile_comment --> <h2>Greptile Overview</h2> <h3>Greptile Summary</h3> This PR updates the generated agent sys

### #84975 fix(heartbeat): suppress fallback after route-matched message tool

- bucket: maintainer_owned
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T18:38:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When heartbeat runs in message-tool-only mode, a successful generic message tool delivery can still be followed by duplicate free-text fallback narration in the same Telegram chat. Fixes #84217 ## Affected surface - `src/auto-reply/reply/agent-runner.ts` - Add

### #72409 fix(plugins): suppress false duplicate-id warnings across origins

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, clawsweeper, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:39:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Carry forward the narrow #42192 fix for false duplicate plugin-id warnings across expected plugin discovery origins. - Preserve genuine duplicate diagnostics by updating origin-bucket tracking when a same-root candidate is promoted to a higher-pre

### #76115 fix(diagnostics): experiment with stuck session aborts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, maintainer, size: L, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:40:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds experimental `diagnostics.stuckSessionAbortMs` for a second-stage stalled/stuck recovery threshold. - Keeps warn-threshold recovery observe-only for active work, but lets the longer experimental threshold abort active embedded reply work or r

### #76245 [codex] Fallback when Windows gateway task exits early

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:41:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a Windows scheduled-task fallback for the failure shape from Brad's workshop log: `schtasks /Run` is accepted, but the task quickly reports `Last Run Result=0` / stopped and no gateway listener appears. Previously the fallback only handled the

### #76895 perf(core): trim channel RTT hot paths

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: mattermost, channel: slack, channel: telegram, channel: voice-call, scripts, agents, maintainer, extensions: device-pair, size: XL, extensions: qa-lab, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:41:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Trims Telegram, Slack, Discord, Mattermost, agent-turn, plugin control-plane, channel snapshot, catalog, media, and model-catalog hot paths. - Adds Convex credential-source support to the Telegram RTT package harness. - Records the optimization inven

### #76927 [codex] Queue subagent completion announces

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, agents, maintainer, size: M, mantis: telegram-visible-proof, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:41:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Route subagent completion announces through the requester session steer/announce queue before direct fallback. - Force completion handoffs onto an internal queue independent of channel queue mode, while preserving bound route delivery. - Keep dire

### #89327 fix(sessions): guard agent tool definition mirroring

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:45:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Guard `createToolDefinitionFromAgentTool()` against unreadable AgentTool descriptor fields. - Use the base-tool registry key as the fallback name when mirroring base tool overrides. - Preserve readable metadata and fall back to an empty object param

### #89329 fix(auto-reply): guard exported session tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:45:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard `/export-session` tool metadata projection so unreadable or non-JSON-serializable parameter schemas are skipped instead of crashing HTML generation. - Preserve serializable sibling tool descriptors in the exported session data and report the

### #89333 fix(tools): guard planner descriptor reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:45:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot tool descriptor planning fields once before sorting, duplicate checks, and missing-executor reporting. - Convert unreadable or invalid descriptor names/sort keys into `ToolPlanContractError` instead of leaking arbitrary getter errors. - K

### #89518 refactor: migrate plugin transcript mirrors

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: L, extensions: codex, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof, extensions: copilot
- gitcrawl snapshot updated: 2026-06-15T18:46:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Migrate the Codex and Copilot transcript mirror/history consumers to the scoped public transcript target/writer APIs, stacked on the QMD session artifact identity branch (#89360). ## Why These plugin-owned mirrors need reads, write locks, appends, idem

### #89547 Control Telegram group history context

- bucket: maintainer_owned
- author: mmaps
- author association: CONTRIBUTOR
- draft: no
- assignees: eleqtrizit
- labels: docs, channel: telegram, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T18:46:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Telegram group history context mode with `mention-only`, `recent`, and `none`. - Defaults group prompt history to messages addressed to the bot while keeping `recent` as an explicit opt-in. - Applies the same mode during recovered forum-top

### #89579 fix(agents): harden code mode MCP schema docs

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:46:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden code-mode MCP API doc generation against hostile tool schema `properties` maps. - Snapshot schema properties with guarded key/value reads before rendering MCP TypeScript-style headers. - Keep generated docs usable by falling back to require
