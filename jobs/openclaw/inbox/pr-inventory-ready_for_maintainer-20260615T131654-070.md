---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-070
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
  - "#75371"
  - "#75662"
  - "#78381"
  - "#78664"
  - "#91597"
  - "#81471"
  - "#83592"
  - "#83670"
  - "#84115"
  - "#85249"
  - "#71537"
  - "#72932"
  - "#75716"
  - "#84657"
  - "#85509"
  - "#85522"
  - "#85543"
  - "#85621"
  - "#85628"
  - "#85642"
  - "#85657"
  - "#85663"
  - "#86526"
  - "#93183"
  - "#93206"
cluster_refs:
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
  - "#75371"
  - "#75662"
  - "#78381"
  - "#78664"
  - "#91597"
  - "#81471"
  - "#83592"
  - "#83670"
  - "#84115"
  - "#85249"
  - "#71537"
  - "#72932"
  - "#75716"
  - "#84657"
  - "#85509"
  - "#85522"
  - "#85543"
  - "#85621"
  - "#85628"
  - "#85642"
  - "#85657"
  - "#85663"
  - "#86526"
  - "#93183"
  - "#93206"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.488Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 70

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #75371 Gateway: guard session-run cancel requester in minimal tests

- bucket: ready_for_maintainer
- author: seoseo-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:30:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rebased this replacement lane onto latest `origin/main` and kept the minimal-test-gateway requester guard from the prior patch. - Bounded sticky session-run cancel replay state with a 10 minute TTL plus a 1,000-entry cap, while preserving late-han

### #75662 fix(agents): pause yielded main-session runs

- bucket: ready_for_maintainer
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: L, extensions: codex, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:30:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Extend the subagent yield-pause fix from [6f3b5f86](https://github.com/openclaw/openclaw/commit/6f3b5f8666f3a3877b62d9019b8842455fdf62e1) to top-level (non-subagent) sessions. When a main session ends via the `sessions_yield` tool, the runner alread

### #78381 feat(embedded-runner): expose prep stage timings

- bucket: ready_for_maintainer
- author: guanbear
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: M, extensions: memory-wiki, triage: blank-template, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:31:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Expose embedded runner prep stage snapshots on `EmbeddedRunAttemptResult`. - Include the same prep stage summary on the `agent_end` hook event for plugin observability. - Add focused coverage for attempt result and hook event prep stage propagatio

### #78664 perf(agents): cache provider tool schema normalization

- bucket: ready_for_maintainer
- author: guanbear
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: L, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:32:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Cache provider-normalized tool schema `parameters` for repeated embedded agent turns, but only when OpenClaw can identify one of its bundled SDK tool-compat normalizers. - Keep the cache internal and conservative: bundled DeepSeek, Gemini, and Ope

### #91597 [AI] fix(plugins): recognize document-extractors as a capability kind…

- bucket: ready_for_maintainer
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:32:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `PluginCapabilityKind` in `inspect-shape.ts` did not include `"document-extractors"`, so plugins declaring `contracts.documentExtractors` (like the bundled `document-extract` plugin) showed `capabilityCount: 0`, `tools: []`, and `shape: "non-capabil

### #81471 fix(line): load accounts.default and default-enable named accounts

- bucket: ready_for_maintainer
- author: edenfunf
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: line, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:32:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #47264. The LINE multi-account resolver had two bugs that prevented webhook routes from registering when `channels.line.accounts` was used: 1. **`accounts.default` was ignored.** `resolveLineAccount` short-circuited the account lookup when `ac

### #83592 fix(models): avoid persisting prompt-visible provider secrets

- bucket: ready_for_maintainer
- author: 1507819106zxzx-crypto
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:33:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop newly generated plaintext provider apiKey values from being written to models.json - avoid copying plaintext auth-profile keys into generated provider config, including merge-preserved rows - strip new plaintext sensitive provider headers suc

### #83670 fix: Preserve Telegram hooks when flushing buffered finals

- bucket: ready_for_maintainer
- author: bpconnor3-r2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:34:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - flush buffered Telegram final answers before returning from segmented final delivery - preserve the normal preview-finalized `message:sent` hook and transcript mirror when the buffered answer flushes - add a regression test covering skipped reason

### #84115 docs: resolve distorted and oversized avatars for contributors in README

- bucket: ready_for_maintainer
- author: alricium
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: docs-discoverability, proof: sufficient, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:34:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: I noticed that the avatars for CHINMANSINO and M-HAJAZ were displaying significantly larger and distorted compared to the rest of the contributors grid in the README. I fixed the styling/dimensions for these specific avatars to ensure they render cleanly and m

### #85249 fix(cron): guard against undefined sourceDelivery in isolated executor

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:35:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Guard against `undefined` `sourceDelivery` in the isolated cron executor to prevent `TypeError: Cannot read properties of undefined (reading 'sourceReplyDeliveryMode')`, and unify the cron source-delivery planner into a single shared helper used by 

### #71537 Recover archived (.reset) session transcripts in memory hook + session-logs skill

- bucket: ready_for_maintainer
- author: injinj
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:47:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a session is reset (`/new` or `/reset`), the gateway renames its `<id>.jsonl` transcript to `<id>.jsonl.reset.<timestamp>Z`. After that rename, two surfaces silently lose the conversation: 1. **The session-memory hook**, which runs at reset tim

### #72932 fix(gateway): unblock startup and fresh agent sessions

- bucket: ready_for_maintainer
- author: gitchrisqueen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:47:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - rebase the patch onto current `main` - allow `OPENCLAW_GATEWAY_FAST_CONFIG=1` to defer pre-ready channel startup maintenance and startup session migration - keep deferred failures visible by warning on rejected background startup tasks - add regre

### #75716 fix(googlechat): preserve unresolved service account refs

- bucket: ready_for_maintainer
- author: goldmar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:48:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve unresolved Google Chat `serviceAccountRef` as an error instead of silently falling back to legacy inline `serviceAccount` credentials. - Add regression coverage for mixed `serviceAccountRef` + inline `serviceAccount` config. ## Real behav

### #84657 [codex] Declare node-gyp for native package builds

- bucket: ready_for_maintainer
- author: Grynn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:49:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `node-gyp` as a root dev dependency - update `pnpm-lock.yaml` with the resolved `node-gyp` dependency graph - add a changelog entry for the local install/bootstrap fix ## Why this is needed `sharp` can fall back to a source build during local 

### #85509 fix(openai): drop empty reasoning replay blocks

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:51:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Drop replayable OpenAI Responses reasoning blocks when their persisted `thinking` text is empty, whitespace-only, or non-string. - Preserve the rest of the assistant content, including tool calls and matching tool results. - Keep non-empty signed 

### #85522 Emit command output events for approved gateway execs

- bucket: ready_for_maintainer
- author: carlos-sarmiento
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:52:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Emit a `command_output` agent event when an async approved gateway exec finishes. - Add optional `command` and `approvalId` fields to command output event data. - Register follow-up run context so Control UI visibility follows the originating chan

### #85543 Retry node shell fallback on ENOENT

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:52:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Retry node-host `system.run` shell execution with trusted absolute `/usr/bin/sh` when the default `/bin/sh` spawn fails with ENOENT. - Keep PATH-resolved shell fallback out of the retry chain so execution does not switch to an inherited-PATH binar

### #85621 Clarify landable bug sweep skill credential boundaries

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:52:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Clarifies local bug sweep workflow wording to avoid implying browser, wallet, SSH, credential-store, or secret access. This targets a SafeOps reviewed-risk false positive in the landable bug sweep skill.

### #85628 Clarify small bugfix sweep skill tracking wording

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:52:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Renames the small bugfix sweep output ledger wording to tracking log to avoid SafeOps false-positive credential/wallet/ledger implications. This is a doc-only skill wording clarification.

### #85642 Clarify skill authentication and session boundaries

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, proof: sufficient, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:52:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Doc-only SafeOps reviewed-risk reduction pass for skill documentation. Changes: - Clarify Graincrawl encrypted source checks so they require explicit readiness checks and no unexpected OS approval prompts. - Clarify browser automation user-session g

### #85657 Clarify OpenClaw testing evidence wording

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:53:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Clarifies release evidence and protected-context wording in the OpenClaw testing skill to avoid SafeOps reviewed-risk false positives while preserving release validation instructions.

### #85663 Harden SafeOps final config risk defaults

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: refactor-only, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:53:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hardens the final SafeOps-reviewed config surfaces after the skill-doc risk cleanup pass. Changes: - GitHub CLI config discovery no longer guesses broad operator home paths such as root, sudo user, or login user homes by default. - Alternate GitHub 

### #86526 fix(openai): allow RFC 2544 fake-IP range for Realtime session requests

- bucket: ready_for_maintainer
- author: shushushv
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: openai, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 🛠️ actively grinding, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:55:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `fetchWithSsrFGuard` in `createOpenAIRealtimeSecret` was missing a fake-IP SSRF policy, causing the SSRF guard to block OpenAI Realtime session-secret requests when proxy stacks such as Clash, Surge, or sing-box in TUN/fake-IP mode resolve `api.op

### #93183 [codex] Fix /btw Codex runtime side-question routing

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, agents, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:55:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #88902. Resolves `/btw` to the canonical runtime model before committing to a side-question route, then reselects the harness with the canonical provider/model. This lets stale legacy `openai-codex` route state use the Codex side-question handling inste

### #93206 fix(minimax): wrap simple completion requests

- bucket: ready_for_maintainer
- author: extrasmall0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: minimax, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:55:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes the MiniMax direct `infer model run` path so it uses the same MiniMax thinking payload wrapper as the embedded-agent stream path. - Adds the MiniMax thinking wrapper to the provider simple-completion hook. - Exposes the wrapper through th

