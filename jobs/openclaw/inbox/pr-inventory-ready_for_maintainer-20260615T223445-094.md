---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-094
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
  - "#86607"
  - "#89183"
  - "#89334"
  - "#89567"
  - "#89618"
  - "#89628"
  - "#89671"
  - "#89783"
  - "#90095"
  - "#90184"
  - "#90206"
  - "#90267"
  - "#91474"
  - "#91660"
  - "#91663"
  - "#91674"
  - "#62063"
  - "#91797"
  - "#91803"
  - "#91810"
  - "#91870"
  - "#91889"
  - "#91907"
  - "#91921"
  - "#91967"
cluster_refs:
  - "#86607"
  - "#89183"
  - "#89334"
  - "#89567"
  - "#89618"
  - "#89628"
  - "#89671"
  - "#89783"
  - "#90095"
  - "#90184"
  - "#90206"
  - "#90267"
  - "#91474"
  - "#91660"
  - "#91663"
  - "#91674"
  - "#62063"
  - "#91797"
  - "#91803"
  - "#91810"
  - "#91870"
  - "#91889"
  - "#91907"
  - "#91921"
  - "#91967"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.806Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 94

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #86607 fix(gateway): log hook rejection diagnostics

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T17:55:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add compact, sanitized warning logs for authenticated Gateway hook JSON rejection paths. - Preserve existing hook HTTP statuses, response bodies, auth behavior, mapping behavior, and dispatch behavior. - Keep the fix scoped to `src/gateway/server/

### #89183 fix(tui): keep local slash commands out of model prompts

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:56:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #71592. ## Summary - Keep known local embedded TUI control commands out of the model path. - Treat shared commands that local embedded mode cannot execute, including `/status`, `/compact`, `/context`, and `/commands all`, as unsupported local commands i

### #89334 docs: note active memory timeout circuit breaker

- bucket: ready_for_maintainer
- author: AdrianIp0204
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: refactor-only, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:56:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - note that repeated Active Memory timeouts are handled by the existing automatic circuit breaker - add a troubleshooting entry for repeated Active Memory timeout delays - document and point operators at the real `circuitBreakerMaxTimeouts` and `cir

### #89567 fix(memory-wiki): use crypto randomness for import run IDs

- bucket: ready_for_maintainer
- author: Lucenx9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:56:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - ChatGPT import run IDs in the memory-wiki plugin included `Math.random()` in their seed. - This PR switches that seed entropy to Node crypto randomness while preserving the existing `chatgpt-<12 hex>` run ID shape.

### #89618 feat(atomicchat): add Atomic Chat as a bundled local provider

- bucket: ready_for_maintainer
- author: danyurkin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, commands, size: M, proof: supplied, proof: sufficient, dependencies-changed, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:57:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #89617 ## What & why [Atomic Chat](https://github.com/AtomicBot-ai/Atomic-Chat) is an open-source cross-platform desktop/mobile app that runs open-weight LLMs locally and exposes a single **OpenAI-compatible** HTTP API at `http://127.0.0.1:1337/v1` (a R

### #89628 Speed up precomputed command help startup

- bucket: ready_for_maintainer
- author: yyzquwu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, scripts, size: M, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:57:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add strict launcher/entry fast paths for precomputed `doctor`, `gateway`, `models`, `plugins`, `sessions`, and `tasks` help - keep container routing in control for those precomputed subcommand help paths - fix Windows `node --import` RSS hook path

### #89671 fix(google-meet): resolve join and caption failures on Chinese locales

- bucket: ready_for_maintainer
- author: Unayung
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, plugin: google-meet, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:58:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR addresses a critical localization (L10n) issue with the Google Meet browser automation in the `google-meet` extension: - **The Problem**: The Chrome browser automation script relied entirely on hardcoded English regex/labels (e.g., `/join no

### #89783 feat(feishu): bot-to-bot conversation support with @mention handling

- bucket: ready_for_maintainer
- author: GeekyMax
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: XL, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:58:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Makes Feishu bot-to-bot conversations actually work. Bot-authored messages already reach dispatch on `main` (nothing gates them out), so bots could already "talk" — but the experience was broken: replies frequently never reached the peer bot because

### #90095 fix: suppress Telegram fallback for message-tool-only skips

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:58:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent Telegram from sending the generic empty-response fallback when a turn is intentionally `message_tool_only`. - Add a Telegram regression for the skipped/failed delivery-lane path that still affected v2026.6.1/current main after the silent f

### #90184 fix(ui): rename chat sessions from the picker

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T17:59:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add inline session-title rename controls to the chat session picker/sidebar using the existing `sessions.patch` label contract - preserve picker state around rename by blocking conflicting actions during save, keeping close behavior predictable, a

### #90206 Fix Bedrock aws-sdk compaction auth

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:59:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Bedrock models configured with `auth: "aws-sdk"` can authenticate through the AWS SDK credential chain without static request credentials, but the compaction safeguard treated a successful request-auth lookup with no `apiKey` or headers a

### #90267 fix(doctor): archive conflicting plugin install index

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:59:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: legacy `plugins/installs.json` can keep producing migration warnings after `openclaw doctor --fix` when shared SQLite already has the authoritative resolved npm artifact metadata, but broad archival would hide real install metadata drift.

### #91474 feat(google): enable raw-transcript reseed for antigravity-cli (multi-turn context fix)

- bucket: ready_for_maintainer
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, extensions: google, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:01:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Stacked on top of #90975** (`feature/antigravity-cli-fresh`). The first 9 commits in this PR belong to #90975 (the Antigravity-CLI backend itself); the net change introduced by **this** PR is the last 2 commits (`7c00796ae8`, `7d4d4588fe`). Once #90975 mer

### #91660 [AI] fix(memory): backfill provider.model with resolved model name in…

- bucket: ready_for_maintainer
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:01:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveProviderModel()` in `createWithAdapter()` correctly resolves the embedding model name (falling back to `adapter.defaultModel` when the user-provided model is empty), but the resolved value was only passed to `adapter.create()` as the `model`

### #91663 fix(backup): clean up stale .tmp archives from interrupted runs before creating new backup

- bucket: ready_for_maintainer
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:01:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `openclaw backup create` is interrupted (timeout, SIGKILL, process crash), the temporary `.tar.gz.<uuid>.tmp` file created by `buildTempArchivePath()` is left on disk. On successive runs, each interrupted backup leaves a new `.tmp` file, accumu

### #91674 fix(heartbeat): allow exec-event wakes to bypass interval cooldown

- bucket: ready_for_maintainer
- author: solodmd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:02:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Background exec completion events (`exec-event`) are silently dropped when a second background process exits within the heartbeat interval window. The agent never receives the completion notification for the second process. - **Why it matters:** use

### #62063 Add Swedish control UI locale

- bucket: ready_for_maintainer
- author: yeager
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, scripts, size: XL, proof: supplied, proof: sufficient, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:02:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add Swedish (`sv`) as a supported control UI locale - generate and register `ui/src/i18n/locales/sv.ts` against the current 1118-key source locale set - preserve the newer `ar`, `it`, `vi`, `nl`, and `fa` locale registrations while syncing metadat

### #91797 fix(embedded-agent-runner): treat the run's own no-op in-place session rewrite as benign

- bucket: ready_for_maintainer
- author: gucasbrg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:03:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Long, streaming agentic turns on channel chats (Matrix in our case) intermittently abort with `EmbeddedAttemptSessionTakeoverError: session file changed while embedded prompt lock was released`, and the already-streamed reply gets redacted ("Messa

### #91803 fix(imessage): stage remote media before plugin dispatch

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:03:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stage remote inbound media during dispatch before plugin hook and plugin-bound inbound-claim metadata is built. - Mark successfully staged remote media as already staged so the later agent reply path does not restage the same attachment. - Add reg

### #91810 fix(ui): reload WebChat history for deferred thinking

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:03:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91727. ## Summary WebChat now keeps a deferred persisted assistant `session.message` with thinking/reasoning pending while the local run is active, then reloads the selected transcript after the terminal final when that final payload only contains rende

### #91870 fix(github-copilot): claude-opus-4.8 is native 1M context + thinking (not 128K)

- bucket: ready_for_maintainer
- author: wyhgoodjob
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, extensions: github-copilot, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:04:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Fix `github-copilot/claude-opus-4.8` metadata so it reflects its real capabilities: **native 1M context window** + **adaptive thinking** (reasoning efforts `low/medium/high/xhigh/max`). - `model-metadata.ts`: add a `STATIC_MODEL_OVERRIDES` entry for `c

### #91889 feat(plugin-sdk): surface accountId on agent hook context

- bucket: ready_for_maintainer
- author: yukunlabs
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:04:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## TL;DR Adds an optional `accountId` to the plugin **agent hook context** so account-aware plugins can read which channel account a turn belongs to, instead of reverse-engineering it from `sessionKey` (which doesn't carry it for group or cron runs). Fully add

### #91907 fix(test): skip live auth browser caches

- bucket: ready_for_maintainer
- author: BryanTegomoh
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:04:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent live test auth staging from copying generated browser profile, cache, and recording trees from external auth directories such as `.gemini`. - Preserve staged auth/config files, including `.gemini/oauth_creds.json` and `.gemini/settings.jso

### #91921 fix(agents): deliver background exec completion to agent via [OpenClaw exec completion]

- bucket: ready_for_maintainer
- author: solodmd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:04:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: When a background exec command (`exec background=true`) completes, the agent receives a heartbeat wake with `[OpenClaw heartbeat poll]` as the transcript placeholder. This causes the model to treat the turn as a heartbeat poll — it re

### #91967 feat(ios): show OpenClaw logo in notch

- bucket: ready_for_maintainer
- author: zats
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T18:05:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Show the existing `OpenClawIcon` in the iOS notch/Dynamic Island capture area. - Add `TopNotch` from `zats/TopNotch` pinned to `0.1.0`. - Present the notch view when the app scene becomes active. ## Proof <table> <tr> <td><img width="200" alt="IMG
