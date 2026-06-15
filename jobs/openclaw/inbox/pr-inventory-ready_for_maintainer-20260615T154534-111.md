---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-111
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
  - "#86901"
  - "#57824"
  - "#59414"
  - "#69199"
  - "#71863"
  - "#72055"
  - "#72129"
  - "#72984"
  - "#73079"
  - "#73162"
  - "#73199"
  - "#73338"
  - "#73809"
  - "#73817"
  - "#93105"
  - "#73976"
  - "#74613"
  - "#74735"
  - "#83933"
  - "#74940"
  - "#75018"
  - "#75054"
  - "#75165"
  - "#75351"
  - "#75369"
cluster_refs:
  - "#86901"
  - "#57824"
  - "#59414"
  - "#69199"
  - "#71863"
  - "#72055"
  - "#72129"
  - "#72984"
  - "#73079"
  - "#73162"
  - "#73199"
  - "#73338"
  - "#73809"
  - "#73817"
  - "#93105"
  - "#73976"
  - "#74613"
  - "#74735"
  - "#83933"
  - "#74940"
  - "#75018"
  - "#75054"
  - "#75165"
  - "#75351"
  - "#75369"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.215Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 111

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #86901 fix(feishu): fall back to post mode when markdown tables exceed card limit

- bucket: ready_for_maintainer
- author: name5566
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:15:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When an agent's reply contains more than 5 Markdown tables, the Feishu plugin detects tables and automatically sends the reply as an interactive card. However, the Feishu card API limits each card to at most 5 table components (`ErrCode: 11310; card

### #57824 Fix ACP image forwarding and Synology invalid-token throttling

- bucket: ready_for_maintainer
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, channel: synology-chat, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:16:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR bundles two small, low-risk fixes: 1. Fix ACP attachment collection so URL-only image attachments are forwarded into ACP turns. 2. Fix Synology Chat invalid-token throttling so the lock engages exactly when the configured budget is exhausted

### #59414 feat(doctor): add Node.js runtime info health contribution

- bucket: ready_for_maintainer
- author: alkor2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:16:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a new Doctor health contribution that displays Node.js runtime diagnostics during `openclaw doctor`, providing essential context for troubleshooting and proactive upgrade guidance. ## What it does **Runtime summary note** (always shown): Node 24

### #69199 fix(memory): improve error message when node:sqlite is unavailable

- bucket: ready_for_maintainer
- author: rrrrrredy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:17:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keeps the existing PR branch scoped to `extensions/memory-core`. - Classifies `node:sqlite` / missing built-in sqlite runtime errors in `buildMemorySearchUnavailableResult(error, overrides?)`. - Keeps the existing quota and generic branches, and k

### #71863 fix(signal): await daemon shutdown on restart

- bucket: ready_for_maintainer
- author: ZHOUKAILIAN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: signal, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:19:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make Signal daemon shutdown asynchronous and await process exit - fall back to SIGKILL if signal-cli does not exit after SIGTERM - add regression coverage for daemon stop semantics and aborted monitor shutdown ## Testing - corepack pnpm exec vites

### #72055 feat(bonjour): add instanceName plugin config to override mDNS service name [AI-assisted]

- bucket: ready_for_maintainer
- author: jeffjhunter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, plugin: bonjour, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:19:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #54467. ## Summary Adds a `plugins.entries.bonjour.config.instanceName` plugin config key so each gateway can advertise a distinct mDNS service instance name, instead of all gateways on the same host sharing `<machine display name> (OpenClaw)` and getti

### #72129 feat(huggingface): add text-to-image generation via hf-inference Inference Providers route

- bucket: ready_for_maintainer
- author: lyfuci
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: huggingface, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:19:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Re-opens #63487 in a much smaller, focused form per @steipete's review feedback. Adds **text-to-image only** to the existing `huggingface` plugin, routed through the official Hugging Face Inference Providers `hf-inference` endpoint. No new credentia

### #72984 fix(subagent): resolve runtime model from subagent default instead of parent primary

- bucket: ready_for_maintainer
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:21:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Two-part fix for subagent model resolution: - **Commit 1 — read-side fallback (defense in depth, fbbd3c2d5f):** `resolveSessionModelRef` had no subagent awareness. When `entry.model` was empty (race between the spawn-side write and the gateway-side 

### #73079 fix(minimax): request hex TTS output explicitly

- bucket: ready_for_maintainer
- author: efe-arv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: minimax, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:21:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - send \`output_format: "hex"\` in MiniMax TTS requests - send \`stream: false\` explicitly for the non-streaming path - extend the MiniMax speech-provider test to lock the request shape ## Why The MiniMax provider decodes \`data.audio\` as hex, but

### #73162 fix(slack): remove socket reconnect attempt cap so gateway stays connected indefinitely

- bucket: ready_for_maintainer
- author: suboss87
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: XS, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:21:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What and why After 12 consecutive failed Slack socket reconnects the provider threw an error and exited permanently. The gateway never restarts providers after they exit, so all subsequent Slack messages were silently dropped while the bot still appeared on

### #73199 Add hook capability smoke gate

- bucket: ready_for_maintainer
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:21:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Task: 9f6c25b3 Adds a dry-run hook capability smoke gate/report for Codex/native guardrail parity. Rex verification before push: - node --check - scripts/hook-capability-smoke.mjs PASS (4 focused test files / 49 tests) - hook-capability script test 2/2 - corep

### #73338 fix(tui): follow active gateway port

- bucket: ready_for_maintainer
- author: haishmg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:22:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw tui` could still build its default local Gateway URL from config/defaults after a Gateway was started with an explicit runtime `--port`. - Why it matters: local TUI users with a custom active Gateway port had to pass `--url` man

### #73809 fix(heartbeat): archive rotated transcript on isolated-session reset

- bucket: ready_for_maintainer
- author: truffle-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:23:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Refs #65564. When `heartbeat.isolatedSession === true` and `resolveCronSession({ forceNew: true })` mints a new `sessionId` for an `isolatedSessionKey` that already holds an entry, the prior entry is overwritten in-place at `heartbeat-runner.ts`. The existing 

### #73817 fix(media): allow private openai compatible audio transcription endpoints

- bucket: ready_for_maintainer
- author: spi3
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:23:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Audio media-understanding transcription could target self-hosted OpenAI-compatible endpoints, but audio config did not expose the private-network request opt-in used by guarded provider HTTP. - Why it matters: Trusted local, RFC1918, or t

### #93105 fix(doctor): repair null agents.list[].workspace values

- bucket: ready_for_maintainer
- author: xydigit-sj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:24:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #77718. A literal null `workspace` field in an `agents.list` entry still failed Zod schema validation at startup (workspace is optional but must be a string when present). Because `openclaw doctor --fix` never normalized the malformed field, u

### #73976 fix(memory): use per-keyword FTS search in hybrid mode #39484

- bucket: ready_for_maintainer
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, clawsweeper, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:24:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Canonical repair path for #39555. Before merge, rebase or refresh the contributor branch against main 79159f11f6952ac063f0d13585ab7575ef4594bc if needed, verify the bounded per-keyword hybrid FTS fan-out remains narrow, rerun Codex /review and address every fi

### #74613 docs(cli): add agent selector to CLI backend quick start

- bucket: ready_for_maintainer
- author: vyctorbrzezowski
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, stale, size: XS, proof: supplied, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:26:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #68940. - Updates the CLI Backends quick start to keep the current Claude CLI backend example while adding the required `--agent main` selector. - Explains that `main` is the default agent id when no explicit agent list is configured. - No C

### #74735 feat(bootstrap): support session-scoped extra files

- bucket: ready_for_maintainer
- author: presidenzo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:27:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `bootstrap-extra-files` could only apply one global extra file set, and explicitly configured extra files were still constrained by the default bootstrap basename list. - Why it matters: operators with long-lived group/session workflows n

### #83933 fix(cron): skip deleteAfterRun and preserve counters for manual runs (#83538)

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XL, triage: needs-real-behavior-proof, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:27:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw cron run` (manual/debug runs) on a `deleteAfterRun` at-job deletes the job on success — consuming the one-shot and preventing its scheduled execution. Manual runs also mutate `consecutiveErrors`/`consecutiveSkipped` counters, interfering w

### #74940 Fix legacy LLM timeout diagnostics

- bucket: ready_for_maintainer
- author: chiyouYCH
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:27:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve the numeric `agents.defaults.llm.idleTimeoutSeconds` value in `doctor --fix` output instead of silently dropping it. - Add a one-shot config-load warning when `agents.defaults.llm` is still present, pointing users to `models.providers.<id

### #75018 feat: add Gradium realtime speech-to-text provider

- bucket: ready_for_maintainer
- author: timpratim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: gradium, triage: refactor-only, triage: blank-template, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:28:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** PR #64958 added Gradium TTS but no matching STT, so Gradium-only voice deployments still had to bring in a second vendor for inbound transcription on Voice Call. - **Why it matters:** Lets operators run end-to-end speech (in and out) 

### #75054 docs(contextInjection): document always as a valid option and default

- bucket: ready_for_maintainer
- author: ayesha-aziz123
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:28:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `agents.defaults.contextInjection` accepts three values — `"always"`, `"continuation-skip"`, and `"never"` — as defined in `src/config/types.agent-defaults.ts` (line 19) and validated by the Zod schema. The docs stated `"always"` as the d

### #75165 feat(agents): composable termination algebra + GSAR grounding scorer

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:29:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #77981 ## What this does Adds a **composable termination algebra** for A2A agent loops and implements **GSAR** (Typed Grounding for Hallucination Detection and Recovery) from [Kamelhar 2026, arxiv:2604.23366](https://arxiv.org/abs/2604.23366) as a first

### #75351 fix(ui): improve Thai locale copy

- bucket: ready_for_maintainer
- author: gokusenz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, scripts, size: M, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:30:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the new Thai Control UI locale still had high-visible English fallback copy and a few unnatural Thai labels around common controls, the agent detail surface, files, channels, cron panels, and the language picker. - Why it matters: Thai us

### #75369 fix: harden sessions_send delegated announce trust

- bucket: ready_for_maintainer
- author: jinon86
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:30:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## 요약 - clawsweeper P1/P2 지적 대응: `sessions_send` delegated announce 경로에서 caller-supplied `task.runtime.roundOneReply`를 신뢰하지 않도록 제거했습니다. - delegated announce/ping-pong seed는 plugin-owned `dispatch.roundOneReply` 또는 core가 reply-history wait/read로 검증한 reply만 사용하도

