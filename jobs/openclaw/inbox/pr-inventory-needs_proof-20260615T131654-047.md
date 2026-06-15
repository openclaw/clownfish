---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-047
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
  - "#89687"
  - "#90579"
  - "#90770"
  - "#90779"
  - "#90817"
  - "#90827"
  - "#90828"
  - "#90887"
  - "#91315"
  - "#91479"
  - "#93249"
  - "#55018"
  - "#55211"
  - "#55487"
  - "#55644"
  - "#55766"
  - "#55789"
  - "#55970"
  - "#56116"
  - "#56258"
  - "#56674"
  - "#56830"
  - "#56861"
  - "#57597"
  - "#58051"
  - "#58478"
  - "#58482"
  - "#58971"
  - "#59013"
  - "#68590"
  - "#70990"
  - "#71887"
  - "#72535"
  - "#72749"
  - "#93260"
  - "#75011"
  - "#75024"
  - "#75270"
  - "#76332"
  - "#84666"
cluster_refs:
  - "#89687"
  - "#90579"
  - "#90770"
  - "#90779"
  - "#90817"
  - "#90827"
  - "#90828"
  - "#90887"
  - "#91315"
  - "#91479"
  - "#93249"
  - "#55018"
  - "#55211"
  - "#55487"
  - "#55644"
  - "#55766"
  - "#55789"
  - "#55970"
  - "#56116"
  - "#56258"
  - "#56674"
  - "#56830"
  - "#56861"
  - "#57597"
  - "#58051"
  - "#58478"
  - "#58482"
  - "#58971"
  - "#59013"
  - "#68590"
  - "#70990"
  - "#71887"
  - "#72535"
  - "#72749"
  - "#93260"
  - "#75011"
  - "#75024"
  - "#75270"
  - "#76332"
  - "#84666"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.482Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 47

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89687 fix(feishu): scope queues by topic sessions

- bucket: needs_proof
- author: hanhuihanhui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:27:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Why does this matter now? What is the intended outcome? What is intentionally out of scope? What does success look like? What should reviewers focus on? <details> <summary>Summary guidance</summary> This PR descripti

### #90579 fix: allow trusted host-read html after outbound staging

- bucket: needs_proof
- author: wangwllu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T10:32:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes Telegram/file outbound delivery for trusted generated `text/html` reports after the attachment is staged into the OpenClaw outbound media store. PR #87982 allowed generated HTML reports under the OpenClaw temp root, but the live outbound flow 

### #90770 fix(ui): thread agent scope through Skill Workshop proposals

- bucket: needs_proof
- author: joelnishanth
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:32:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Fix:** Skill Workshop GUI shows no proposals when using a non-default agent, while CLI `openclaw skills workshop --agent <id> list` works correctly - **Root cause:** `loadSkillWorkshopProposals` called `skills.proposals.list` with `{}` (no `agen

### #90779 fix(channels): restart gateway when channels.start fails for unloaded plugin

- bucket: needs_proof
- author: joelnishanth
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:32:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90296 After `openclaw channels login --channel <plugin-channel>`, the CLI calls `channels.start` to reconcile the running gateway. If the channel plugin was installed or enabled **after** the gateway started, the plugin is not in the gateway'

### #90817 fix(agents): apply stale-run liveness check to aborted subagent orphan recovery

- bucket: needs_proof
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:33:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix #90766: stale subagent runs (>2h) with `abortedLastRun: true` were exempt from stale-unended pruning, causing very old aborted child sessions to be resurrected after long gateway downtime. Changes: - **`subagent-registry-helpers.ts`**: Remove th

### #90827 fix(memory-core): surface empty narrative generation instead of silent fallback (#90781)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:33:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Bug**: `memory-core` narrative generation logs a bare `WARN` ("produced no text") and silently writes a placeholder fallback diary entry whenever the subagent session returns no assistant text — operators cannot tell whether the model returned a

### #90828 fix(mac-gateway): route launchd plist stderr to log file instead of /dev/null (#90711)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:33:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - bug: post-5.28 generated `~/Library/LaunchAgents/ai.openclaw.gateway.plist` hardcoded `StandardErrorPath` to `/dev/null`, silently discarding all gateway stderr (prompt-cache diagnostics, model fallback warnings, liveness warnings) - fix: drop the

### #90887 fix(cron): route failure alerts to thread ids

- bucket: needs_proof
- author: azhangd
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, agents, size: L, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:33:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #89848 by adding per-job `failureAlert.threadId` through cron schemas, CLI edit, storage, gateway send plumbing, and agent tool exposure. - Route announce failure alerts to the explicit thread id, or inherit the primary delivery thread only 

### #91315 fix(agents): expose sessions_spawn in embedded mode when allowAgents is configured

- bucket: needs_proof
- author: LiLan0125
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:35:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - In embedded mode (TUI, `--local`), the `sessions_spawn` tool was unconditionally excluded unless `allowGatewaySubagentBinding` was explicitly set. - This made `agents.defaults.subagents.allowAgents` silently ineffective for TUI users — the tool wa

### #91479 fix(acp): preserve timeout progress summaries

- bucket: needs_proof
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:36:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve partial streamed progress as the terminal summary when parented managed ACP turns hit the OpenClaw-owned timeout. - Check timeout status before required-completion progress-only inference so text like `I'll inspect the repo now.` is prese

### #93249 fix(telegram): rotate in-flight answer preamble at tool boundary

- bucket: needs_proof
- author: sancho-csillag
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:39:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a Telegram bug where an **in-flight answer preamble is overwritten instead of preserved** when a tool runs mid-stream and post-tool text resumes. When the model streams a short preamble (e.g. *"Let me actually check the current state of this f

### #55018 fix: avoid O(N²) shallow-copy in mapSensitivePaths schema traversal

- bucket: needs_proof
- author: xdhuangyandi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:42:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `mapSensitivePaths` performed `{ ...hints }` shallow copy on every recursive call while traversing the Zod schema tree, resulting in O(N²) allocation overhead. - **Why it matters:** For the full `OpenClawSchema` tree (hundreds of node

### #55211 fix: prevent re-entrant loop in internal hook trigger

- bucket: needs_proof
- author: ggzeng
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:42:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes re-entrant infinite loop in `triggerInternalHook` when a handler calls `triggerInternalHook` again with the same `type:action:sessionKey` combination. Fixes #55211 ## Problem Before this fix, if a hook handler (e.g., `command:new`) triggered t

### #55487 fix(gateway): survive transient network/TLS errors in uncaughtException handler

- bucket: needs_proof
- author: sfwn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:42:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The `uncaughtException` handler exits unconditionally on any error, but transient network/TLS errors (e.g. `Client network socket disconnected before secure TLS connection was established`) are non-fatal I/O failures that should not crash the gatewa

### #55644 chore: add .history/ to .gitignore

- bucket: needs_proof
- author: Mephistofer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:42:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Description Add `.history/` to `.gitignore` to exclude editor-generated history files. ## Motivation Trae and other code editors automatically create a `.history/` directory for local file versioning. This directory should not be committed to the repository

### #55766 feat(acp): forward image blocks in tool call results

- bucket: needs_proof
- author: David553
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:43:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `extractToolCallContent()` in the ACP event mapper previously only extracted `type: "text"` blocks from tool results, silently dropping image content blocks - ACP clients (Feishu, Discord, etc.) could not display images produced by tools (e.g. the

### #55789 fix(gateway): block internal HTTP session overrides

- bucket: needs_proof
- author: RichardCao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:43:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - reject explicit `x-openclaw-session-key` overrides that target internal namespaces like `subagent:`, `acp:`, or `cron:` - return a 400 `invalid_request_error` from the OpenAI and OpenResponses HTTP endpoints instead of passing those keys into owne

### #55970 fix(telegram): clarify inbound document fallback reason

- bucket: needs_proof
- author: wsyjh8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, stale, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:43:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Problem: Inbound Telegram document download failures could degrade into a placeholder-only body like `<media:document>` with no explanation. * Why it matters: This makes attachment failures ambiguous and harder for the agent to interpret, especial

### #56116 Improve Feishu streaming visibility and filter scratchpad text

- bucket: needs_proof
- author: mattclawcn
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:43:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Upstream Draft: Feishu IM Long-Task Visibility ## Issue Draft ### Title Feishu IM long-task visibility: status footer, last activity, completion confirmation, and scratchpad suppression ### Summary When OpenClaw is used through Feishu IM, long-running agent 

### #56258 fix(gateway): add per-subsystem timeouts to shutdown close handler

- bucket: needs_proof
- author: p3nchan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:43:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - A single hung subsystem `stop()` call (e.g. Telegram polling stuck during network recovery) can consume the entire 25 s `SHUTDOWN_TIMEOUT_MS` budget, preventing remaining subsystems from cleaning up and forcing users to `kill -9` the gateway proce

### #56674 feat(openresponses): return reasoning/thinking content in /v1/responses output

- bucket: needs_proof
- author: tonga54
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:43:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** The `/v1/responses` endpoint does not return model reasoning/thinking content. When models produce chain-of-thought reasoning (Anthropic Claude, OpenAI o-series, Gemini thinking, Ollama thinking models), the reasoning output is silent

### #56830 Gateway/UI: clarify insecure-context device-auth errors

- bucket: needs_proof
- author: tonga54
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:44:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Control UI error/hint copy around device identity and insecure auth can mislead users into expecting remote plain-HTTP flows to work with `allowInsecureAuth`. - **Why it matters:** users spend time on non-working paths and misdiagnose

### #56861 feat(signal): reply-target media, structured mentions, and data URI attachments

- bucket: needs_proof
- author: joe2643
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: signal, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:44:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Signal channel lacks reply-target media support, structured mention detection, and remote signal-cli attachment handling - Why it matters: Users replying to media messages lose context; mention detection is basic; remote signal-cli setups

### #57597 fix(acp): persist spawn labels in target session store

- bucket: needs_proof
- author: guanyu-zhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:44:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: `/acp spawn ... --label <name>` persisted the spawned ACP session metadata into the target agent store, but tried to persist the label into the requester store. - Why it matters: Cross-agent AC

### #58051 fix: primary probe should not consume transient probe slot for same-provider fallbacks

- bucket: needs_proof
- author: Nicholasweng
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:44:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the primary model is in cooldown and gets probed (near expiry), the probe failure marks the provider in `cooldownProbeUsedProviders`. This blocks same-provider fallback candidates from getting their own probe attempt, causing the fallback chain

### #58478 fix(android): resolve TLS handshake failure on Android 15

- bucket: needs_proof
- author: whisky0809
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, stale, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:45:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes a TLS handshake crash on Android 15 devices during gateway onboarding - Android's `RootTrustManager` requires hostname-aware `checkServerTrusted` when `<domain-config>` entries exist in `network_security_config.xml`, but the custom `X509Trus

### #58482 fix(memory-host): add AbortSignal support to batch polling (OpenAI, Voyage, Gemini)

- bucket: needs_proof
- author: ViagraFixesMyBug
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:45:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add AbortSignal support to batch polling loops to enable immediate cancellation when clients disconnect. Problem When HTTP clients disconnect during batch embedding operations, server-side polling continues until timeout, wasting API quota. Solution - Replace 

### #58971 feat(cron): add webhookAllowPrivateNetwork opt-in to bypass SSRF guard for cron webhook POSTs

- bucket: needs_proof
- author: luohui8891
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: zalouser, gateway, size: S, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:45:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** After the SSRF hardening from CVE-2026-27488 / GHSA-w45g-5746-x9fp, `delivery.mode: webhook` jobs targeting `127.0.0.1` or private-network addresses are blocked. `tools.web.fetch.allowPrivateNetwork` does not apply to the cron webhook

### #59013 fix: tolerate EPERM in session write-lock on Windows

- bucket: needs_proof
- author: He-Pin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:45:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - On Windows, `fs.open(path, "wx")` can throw `EPERM` instead of `EEXIST` when another process holds the lock file open (Windows mandatory file locking). This causes an unhandled promise rejection crash in `acquireSessionWriteLock`. - Treat `EPERM` 

### #68590 fix(memory-core): rewrite qmd index on managed collection repair

- bucket: needs_proof
- author: imadal1n
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:46:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - rewrite `index.yml` before ensuring managed QMD collections - reuse `ensureCollections()` during managed collection repair instead of hand-rolling remove/add loops - keep repair behavior aligned with the normal collection bootstrap path ## Why The

### #70990 feat(plugins): add model failover and terminal failure hooks

- bucket: needs_proof
- author: mantisai-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, commands, agents, size: XL, extensions: memory-wiki, triage: blank-template, triage: dirty-candidate, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:46:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds two plugin observability hooks for model failure handling: - `model_failover`: observes embedded-runner failover decisions, including failed source refs, selected target refs, stage, decision, reason metadata, recoverability, timeout/abort/stat

### #71887 fix(channels): remove stale --deep guidance

- bucket: needs_proof
- author: yangxiyucs
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:46:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - remove stale `--deep` guidance from `channels status` help and runtime tips - clarify that broader gateway health probes live on top-level `openclaw status --deep` - add a regression test covering the config-only status footer ## Why `openclaw cha

### #72535 fix(config): add actionable hints to version-mismatch warning on downgrade

- bucket: needs_proof
- author: Schlaflied
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:46:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a user downgrades from a newer OpenClaw version (e.g. 2026.4.24 → 2026.3.2), `openclaw.json` may contain keys and value formats written by the newer binary that are invalid in the older schema. The gateway currently emits: > Config was last wri

### #72749 Fix: Compact inbound metadata

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:47:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #93260 fix(memory): fall back to keyword search without sqlite

- bucket: needs_proof
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:47:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: On Node runtimes without the experimental `node:sqlite` builtin, `memory_search` becomes unavailable even though durable memory markdown files still exist locally. - Solution: Add a memory-core keyword fallback manager for the specific mi

### #75011 pairing.md documents that commands are dropped during the pending st…

- bucket: needs_proof
- author: Angfr95
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:47:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Problem: pairing.md documents that commands are dropped during the pending state but provides no operator guidance for recovery. Solution: add a Troubleshooting section covering commands dropped before pairing approval, pending requests not appearing, and stal

### #75024 fix(feishu): preserve threads without root_id

- bucket: needs_proof
- author: stevenchouai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:47:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve Feishu threaded reply grouping when message events omit `root_id` - Fall back to `reply_target_message_id`, `parent_id`, then `upper_message_id` as the best available root message anchor - Add coverage for the fallback order and include `

### #75270 fix(agent): prevent sticky model fallback

- bucket: needs_proof
- author: Komzpa
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XL, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:47:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - roll back temporary auto fallback model overrides after successful fallback attempts - keep session routing pointed at the selected model while still recording usage/cost for the actual fallback model used - update runner/session accounting covera

### #76332 fix: harden subagent completion announce cleanup races

- bucket: needs_proof
- author: neilofneils404
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:48:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a set of subagent completion lifecycle races that can leave completed child runs stuck behind cleanup/announce sequencing or overwrite a terminal error with a later success signal. The patch makes three related changes: - Do not block completi

### #84666 fix(diagnostic): avoid aborting queued embedded work

- bucket: needs_proof
- author: vice-magus-faolan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:48:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Diagnostic stuck-session recovery could actively abort an embedded run even when the session was still processing and had queued work remaining behind the active item. - Solution: Gate the acti

