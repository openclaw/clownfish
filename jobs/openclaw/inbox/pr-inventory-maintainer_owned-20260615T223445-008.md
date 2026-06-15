---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-008
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
  - "#87927"
  - "#87958"
  - "#88142"
  - "#88175"
  - "#88181"
  - "#88212"
  - "#93118"
  - "#88296"
  - "#88300"
  - "#88311"
  - "#88361"
  - "#88379"
  - "#88384"
  - "#93178"
  - "#89972"
  - "#88750"
  - "#93181"
  - "#93174"
  - "#70596"
  - "#80426"
  - "#75025"
  - "#74068"
  - "#83169"
  - "#24661"
  - "#39046"
cluster_refs:
  - "#87927"
  - "#87958"
  - "#88142"
  - "#88175"
  - "#88181"
  - "#88212"
  - "#93118"
  - "#88296"
  - "#88300"
  - "#88311"
  - "#88361"
  - "#88379"
  - "#88384"
  - "#93178"
  - "#89972"
  - "#88750"
  - "#93181"
  - "#93174"
  - "#70596"
  - "#80426"
  - "#75025"
  - "#74068"
  - "#83169"
  - "#24661"
  - "#39046"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.787Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 8

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #87927 fix(agents): cap compaction budgets for small contexts

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:14:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - cap embedded-agent compaction reserve when the known model context window would otherwise leave no usable prompt budget - cap keep-recent tokens to the prompt budget remaining after reserve while preserving explicit summary overhead - centralize t

### #87958 fix(agents): scale read output for small contexts

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:15:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This keeps default `read` output smaller for small-context local models without changing explicit caller limits. It is part of the small-model stability work: smaller models were getting oversized file reads by default, then losing useful context or stalling a

### #88142 perf(agents): skip tool prep for toolless models

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:20:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skip OpenClaw runtime tool construction when the selected model declares `compat.supportsTools: false` - add regression coverage so no-tool small-model runs do not pay the tool factory/import cost before the runner drops tools from the prompt ## V

### #88175 fix(codex): omit tool controls without tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:20:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stops the legacy `openai-codex-responses` transport from sending `tool_choice` and `parallel_tool_calls` when the request has no tools. - Preserves the existing `tool_choice: "auto"` and `parallel_tool_calls: true` payload when tools are present.

### #88181 feat(agents): add strict local model lean profile

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:20:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an experimental `localModelLeanProfile` knob for `agents.defaults.experimental` and per-agent runtime config - keep `localModelLean: true` on the existing basic profile by default, while allowing `strict` to trim the local-model tool surface t

### #88212 feat(agents): auto-trim lean local model tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: XL, extensions: codex, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:21:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `localModelLean: "auto"` so small resolved model context caps trim heavyweight browser, cron, and message tools without forcing lean mode on larger models - route the effective model context cap through embedded runs, Codex dynamic tools, Code

### #93118 fix(cron): run legacy cron store migration in gateway fast path

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: cli, commands, size: XS, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:22:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #93032 reports the cron scheduler loads 0 jobs after upgrading from v2026.5.28 to v2026.6.6; a second gateway restart recovers them, but a managed-service deployment that only ever runs `openclaw gateway run` never recovers. -

### #88296 fix(gateway): advertise exec approval node commands

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:23:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #57775 by keeping `system.execApprovals.get` and `system.execApprovals.set` in the desktop node command policy instead of dropping them after the node host advertises them. The commands are now eligible during desktop node pairing and preserve

### #88300 fix(agents): strip leaked arg_value suffixes

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:23:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Strip leaked malformed `</arg_value>>` suffixes from exec/read/write/edit path and executable argument fields before before_tool_call/trusted policy, diagnostics, and execution. - Cover shell exec `command`, code-mode exec `code`, and direct `runBefo

### #88311 fix(windows): repair doctor update fallback migration

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, commands, maintainer, size: L, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:23:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - fixes Windows update-mode doctor repair so running managed gateways are activated/restarted, while stopped services stay staged - audits stale `OPENCLAW_SERVICE_VERSION` values and repairs version drift through the existing gateway service doctor

### #88361 fix(daemon): clean stale Windows startup fallback

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:24:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Remove stale Windows Startup-folder fallback launchers after a Scheduled Task install/update is confirmed running. - Preserve the fallback when Task Scheduler only gets a one-shot fallback launch instead of a real running task. - Normalize root schta

### #88379 fix(plugins): start configured external channel plugins

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:25:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat explicit channel config as startup trust for external manifest-owned channel plugins. - Keep workspace-origin channel plugins behind explicit plugin activation. - Cover the WSL2 Weixin failure shape where `channels.openclaw-weixin.enabled=tr

### #88384 fix(plugins): keep openclaw chunks native in jiti

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:26:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `nativeModules: ["openclaw"]` to the plugin-loader jiti options so jiti-loaded plugin entries keep OpenClaw's own package chunks on the native module graph instead of evaluating them again in jiti's cache. - Add a regression assertion for the

### #93178 test: fold gateway smoke into qa e2e

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, scripts, maintainer, size: M, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:47:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - delete `scripts/dev/gateway-smoke.ts` - fold Gateway smoke connect/health validation into the QA e2e test - remove stale changed-test routing and keep the protocol guard focused on remaining dev/native clients Stacked on #93114. ## Verification -

### #89972 feat(watch): replace chokidar dep with in-repo chokidar-slim + async add API

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: extensions: memory-core, scripts, maintainer, size: XL, dependencies-changed, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T05:47:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Replaces the external `chokidar@5.0.0` dependency with an in-repo, single-file trim and adds the async-settlement API the memory watcher needs. `packages/chokidar-slim/src/index.ts` is chokidar v5.0.0's `src/index.ts` + `src/handler.ts` merged into

### #88750 feat(context-engine): pass runtime settings into lifecycle

- bucket: maintainer_owned
- author: ragesaq
- author association: CONTRIBUTOR
- draft: no
- assignees: jalehman
- labels: docs, agents, size: XL, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:14:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary AI-assisted change: yes. Forge/Codex produced the implementation and PR shepherding with OpenAI `gpt-5.5`; ragesaq reviewed the direction and required production-grade proof before merge. Pass a typed `ContextEngineRuntimeSettings` contract through

### #93181 test: fold otel smoke into qa e2e

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, maintainer, size: XL, extensions: qa-lab, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:21:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - delete `scripts/qa-otel-smoke.ts` - fold the OTEL smoke runner and receiver assertions into `test/e2e/qa-lab/runtime/qa-otel-smoke.e2e.test.ts` - keep `pnpm qa:otel:smoke` and `pnpm qa:otel:collector-smoke` by routing them to the e2e file's `--smo

### #93174 test: fold channel message flows into qa e2e

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: RomneyDa
- labels: scripts, maintainer, size: L, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:22:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - delete `scripts/dev/channel-message-flows.ts` - fold Telegram channel flow parsing, preview clearing, and durable-final proof into the QA e2e test - remove stale changed-test routing for the deleted script and update the local channel-message-flow

### #70596 perf(memory): prewarm explicit local embeddings on gateway startup

- bucket: maintainer_owned
- author: taosiyuan163
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: gateway, extensions: memory-core, stale, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:30:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: builtin `memory_search` with explicit `memorySearch.provider = "local"` still pays model/context initialization on the first post-startup search because gateway startup only warmed QMD. - Why it matters: the first memory-backed reply afte

### #80426 feat(mattermost): add automatic ack reactions

- bucket: maintainer_owned
- author: mukhtharcm
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: mattermost, gateway, size: L, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:42:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Mattermost supported typing, preview streaming, and manual `message action=react`, but it did not send automatic ack reactions for accepted inbound messages. - Why it matters: Mattermost was the main chat-channel outlier versus Discord, S

### #75025 fix(heartbeat): refresh stale Current time line on every helper call (#44993)

- bucket: maintainer_owned
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: agents, stale, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-15T06:58:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `appendCronStyleCurrentTimeLine()` in `src/agents/current-time.ts` early-returns when its input already contains `Current time:`, so heartbeat and cron prompts that flow the previously formatted prompt back through the helper keep emitting the same

### #74068 fix(cron): keep recurring backoff stable after reload

- bucket: maintainer_owned
- author: ai-hpc
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: XS, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:25:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep recurring cron error backoff on the fixed recurring schedule during reload/recompute - stop applying one-shot `cron.retry.backoffMs` to recurring jobs after reload - add regression coverage for an errored recurring job with custom one-shot re

### #83169 Discord: add reaction notification wake policy

- bucket: maintainer_owned
- author: 100menotu001
- author association: CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: docs, channel: discord, stale, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:33:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add shared `notificationWake.reactions` policy support so notification-backed reaction events queue by default, can opt into immediate wake, or can be disabled with `off`. - Wire Discord reaction notifications through that shared helper after exis

### #24661 feat: Provider/Cohere onboarding + auth-choice support

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, commands, agents, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:45:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Cohere was missing as a first-class onboarding/auth choice, so users had to hand-roll custom provider config. - Why it matters: this made Cohere setup inconsistent with other supported providers and harder to script in non-interactive onb

### #39046 AI-assisted: Gateway hook event routing respects target agent session

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P3, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:45:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Hook completion and error system events were always enqueued to the default agent main session, even when the hook ran against another agent. - Why it matters: In multi-agent setups this leaked hook summaries, including email-derived cont
