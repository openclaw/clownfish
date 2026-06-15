---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-101
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
  - "#81467"
  - "#84017"
  - "#85179"
  - "#92294"
  - "#18860"
  - "#89949"
  - "#58823"
  - "#92813"
  - "#75225"
  - "#77539"
  - "#78247"
  - "#78639"
  - "#78927"
  - "#79404"
  - "#80181"
  - "#81131"
  - "#81278"
  - "#81279"
  - "#82638"
  - "#83156"
  - "#83517"
  - "#93098"
  - "#83632"
  - "#93100"
  - "#84434"
cluster_refs:
  - "#81467"
  - "#84017"
  - "#85179"
  - "#92294"
  - "#18860"
  - "#89949"
  - "#58823"
  - "#92813"
  - "#75225"
  - "#77539"
  - "#78247"
  - "#78639"
  - "#78927"
  - "#79404"
  - "#80181"
  - "#81131"
  - "#81278"
  - "#81279"
  - "#82638"
  - "#83156"
  - "#83517"
  - "#93098"
  - "#83632"
  - "#93100"
  - "#84434"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.213Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 101

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #81467 fix(usage): show every calendar day in Daily Token Usage / Daily Cost chart

- bucket: ready_for_maintainer
- author: adapepper
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:00:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Wayne (downstream developer) selected the **30d** range filter on the `/openclaw/usage` page and only saw ~15 bars on the Daily Token Usage chart instead of the expected 30. Days with no recorded activity were silently dropped from the series, so a 

### #84017 fix(gateway): bind MCP loopback scope to tokens

- bucket: ready_for_maintainer
- author: zozo123
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:01:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Bind MCP loopback session/account/channel context to server-issued scoped bearer tokens. - Stop emitting mutable loopback scope headers in bundled MCP config and CLI env. - Add regressions proving spoofed scope/owner headers do not change loopback

### #85179 test(qa-lab): add personal redacted traceability scenario

- bucket: ready_for_maintainer
- author: iFiras-Max1
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: qa-lab, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:07:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds one small personal-agent QA case for redacted traceability. The new scenario checks that a personal agent can write a local review artifact that maps claims to evidence without copying raw personal material. It covers fake secrets, raw transcri

### #92294 fix(codex): keep OpenClaw exec when native surface has no environment (#92238)

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:08:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Isolated cron jobs on the OpenAI/Codex runtime (gpt-5.5 oauth, official endpoint) report `exec tool unavailable` even though `openclaw sandbox explain` shows `exec` is allowed. The same isolated cron job succeeds on a Google model with identical con

### #18860 feat(agents): expose tools and their schemas via new after_tools_resolved hook [AI-assisted]

- bucket: ready_for_maintainer
- author: lan17
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:17:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Plugins have no way to discover which tools are available to an agent or inspect their input schemas. The plugin API exposes `registerTool()` but no `listTools()` or `getTools()`. Built-in tools (exec, read, write, web_fetch, etc.) ar

### #89949 fix(announce-delivery): backfill effectiveDirectOrigin.to from requester session entry

- bucket: ready_for_maintainer
- author: wangwllu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T01:20:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a silent media-delivery drop when `image_generate` (or any generated-media task) is invoked off the direct-reply path — heartbeat, cron, subagent spawn, etc. — where `agentTo` is undefined. In that case the persisted `requesterOrigin` carries 

### #58823 fix(agents): restore global subagent model default priority over agent own model

- bucket: ready_for_maintainer
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:20:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #58822. - Restores correct subagent model precedence in `resolveSubagentConfiguredModelSelection`: global `agents.defaults.subagents.model` now takes priority over the parent agent's own `model.primary`, with the agent's own model only used as

### #92813 fix(state): refuse chmod-less agent database volumes that cannot prove credential privacy

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:21:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The per-agent SQLite database stores credentials (API keys and OAuth tokens under `agents/<agentId>/agent/`). On filesystems that reject `chmod` (Azure Files, NFS without `no_root_squash`, some Docker/SMB volume drivers), `ensureOpenClawAgentDatabas

### #75225 feat(agents): add description field for dynamic agent discovery

- bucket: ready_for_maintainer
- author: shannon0430
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:21:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Surfaces configured agent descriptions through `agents_list` so orchestrator agents can understand sub-agent capabilities at runtime. This was originally requested in #7490. Current `main` already accepts `description` in agent config; this PR compl

### #77539 fix(subagent): preserve steered task text on restart redispatch

- bucket: ready_for_maintainer
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:21:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Update 2026-06-02**: addressed ClawSweeper P1 findings on `cd6056478b`: > - Dropped the `CHANGELOG.md` hunk (release-owned per root `AGENTS.md` rules). > - Reworked `subagent-orphan-recovery.ts:158` to persist the stable original `task` instead of the synt

### #78247 Include token usage in model usage summaries

- bucket: ready_for_maintainer
- author: AntSentry
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:22:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - include per-model token totals in `model-usage --mode all` text and JSON output when CodexBar model breakdowns expose token fields - support CodexBar-style token fields and OpenAI-style `prompt_tokens` / `completion_tokens` / `total_tokens` - repo

### #78639 perf(plugins,gateway): async-ify channels.status + messages.send discovery (and split WhatsApp transport closes)

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, gateway, size: L, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:22:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #78100. Companion to (not blocked by) #78101 — that PR coalesces repeated calls within a 2 s TTL as a near-term win; this PR is the deeper structural fix #78100 proposed as item 2. ## Summary Async-ify the persisted-read hot path inside `loadPluginRegis

### #78927 fix(feishu): fix topic session splitting for both native topic_group and normal groups with topic message format

- bucket: ready_for_maintainer
- author: joeyzenghuan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: S, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:22:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: Feishu topic session splitting persists after #78310 — affects **both** native `topic_group` and normal groups with topic message format. - **Why it matters**: With `groupSessionScope: "group_topic"`, the first turn routes by `rootId`

### #79404 chore: harden OpenClaw certification gates

- bucket: ready_for_maintainer
- author: halvo78
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, scripts, docker, agents, size: M, extensions: qa-lab, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:23:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - harden certification gates and supply-chain fixtures - add reviewed Gitleaks/Trivy policy coverage - normalize SBOM ownership coverage for current dependency surface - strengthen regression tests around notification/session behavior ## Local proof

### #80181 fix: add resilient fallback policy for user model overrides

- bucket: ready_for_maintainer
- author: jetd1
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:23:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: session/user model overrides always disabled configured fallback chains. - Why it matters: operators could configure provider fallback behavior, but a user-selected model had no fallback safety

### #81131 fix(telegram): combine voice payload with preceding streamed text

- bucket: ready_for_maintainer
- author: sdimantsd
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T01:23:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a final voice payload arrives in Telegram after partial/block streaming has already sent the text, two separate Telegram messages appear: first the streamed text, then the voice note. This restores the pre-bca16d0f00 behavior where audioAsVoice

### #81278 docs: clarify local-prefix managed Node runtime

- bucket: ready_for_maintainer
- author: ThiagoCAltoe
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: XS, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:23:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Clarify that `install-cli.sh` uses a managed local-prefix Node runtime that currently defaults to 22.22.0. - Call out that this can intentionally differ from shell/global Node 24. - Update install output wording so users see the managed-runtime di

### #81279 ui(i18n): localize skills page grouping labels, status chips and missing prefixes for zh-CN

- bucket: ready_for_maintainer
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T01:24:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Skills page had hardcoded English strings in grouping labels ("Built-in Skills", "Workspace Skills", etc.), status chips ("eligible", "blocked", "bundled", "disabled"), and missing-requirement prefixes ("bin:", "env:", "config:", "os:") w

### #82638 fix(agents): skip implicit provider discovery when models.mode is 'replace' [AI-assisted]

- bucket: ready_for_maintainer
- author: eldar702
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:24:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `src/agents/models-config.plan.ts:60-61` unconditionally `await`s `resolveImplicitProvidersImpl(...)` (the provider-discovery scan) before reading `cfg.models?.mode`. When the user has set `models.mode: "replace"` to opt out of discov

### #83156 fix(matrix): accept bracketed display-name mentions

- bucket: ready_for_maintainer
- author: wdx-agent-io
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: S, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:25:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - accept `@[Display Name]` as a visible Matrix mention label for formatted `matrix.to` links - strip leading `@[Display Name]` mention prefixes before command handling - add Matrix monitor regression coverage for parser, prefix stripping, and room h

### #83517 feat(feishu): add agent message delete and recall

- bucket: ready_for_maintainer
- author: Sailiono
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T01:25:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # PR 1 draft: Feishu agent message delete and recall Title: ```text feat(feishu): add agent message delete and recall actions ``` ## Summary - Add an agent-callable `feishu_message` tool for `list`, `delete`, `recall`, `read_receipts`, and `read_users`. - Wire

### #93098 fix(tools): add encoding parameter to read tool for non-UTF-8 files

- bucket: ready_for_maintainer
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:25:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted (Claude). All behavior proof below was produced and verified by a human-run command in a real local checkout using OpenClaw CLI. ## Summary - **Problem:** The read tool always decodes files as UTF-8, causing garbled text (mojibake) when reading G

### #83632 feat(telegram): add guest mode

- bucket: ready_for_maintainer
- author: HoroTW
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: XL, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T01:26:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw did not support Telegram Guest Mode, so users could not summon a Telegram bot for a one-off answer from supported chats unless the bot was already participating through normal Telegram message handling. - Why it matters: Guest Mo

### #93100 fix(compaction): emit after_compaction on no-op and use JSON-safe validator delimiters (#81925)

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:26:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary OpenClaw issue #81925 documents two coupled defects that surface as HTTP 500s on voice channels when the context engine runs under memory pressure, especially for open-weight tool-calling models: 1. `after_compaction` is never emitted when compactio

### #84434 fix(cli): disable ScheduleWakeup/CronCreate in --print claude runs

- bucket: ready_for_maintainer
- author: SkyWolfDreamer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: anthropic, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:26:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `ScheduleWakeup` and `CronCreate` are Claude Code built-in tools that schedule deferred re-invocations managed by the persistent CLI runtime. In OpenClaw's one-shot `claude -p` runs the process exits at `end_turn`, so any wakeup or cr

