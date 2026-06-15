---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-114
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
  - "#87601"
  - "#91988"
  - "#87831"
  - "#87912"
  - "#88103"
  - "#88159"
  - "#92872"
  - "#91087"
  - "#91089"
  - "#91203"
  - "#91208"
  - "#91210"
  - "#91217"
  - "#81360"
  - "#93222"
  - "#88449"
  - "#88798"
  - "#90968"
  - "#93194"
  - "#92125"
  - "#93225"
  - "#93007"
  - "#91691"
  - "#88988"
  - "#78395"
cluster_refs:
  - "#87601"
  - "#91988"
  - "#87831"
  - "#87912"
  - "#88103"
  - "#88159"
  - "#92872"
  - "#91087"
  - "#91089"
  - "#91203"
  - "#91208"
  - "#91210"
  - "#91217"
  - "#81360"
  - "#93222"
  - "#88449"
  - "#88798"
  - "#90968"
  - "#93194"
  - "#92125"
  - "#93225"
  - "#93007"
  - "#91691"
  - "#88988"
  - "#78395"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.216Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 114

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #87601 fix(docs): render onboarding CLI info callout

- bucket: ready_for_maintainer
- author: Muggle-akko
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:04:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the onboarding docs page renders the CLI step `<Info>` callout with garbled text on `/start/onboarding`. - Why it matters: readers can see mojibake instead of the optional-step note during onboarding. - What changed: rewrote the inline `<

### #91988 fix: preserve BOOTSTRAP.md in preseeded workspaces (#91931)

- bucket: ready_for_maintainer
- author: LiuwqGit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:06:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #91931: preseeded `SOUL.md` / `IDENTITY.md` / `USER.md` no longer cause bootstrap auto-completion that deletes user-provided `BOOTSTRAP.md` before first onboarding. - When `BOOTSTRAP.md` exists and `setupCompletedAt` is unset, completion evi

### #87831 perf: skip manifest normalization in status summary

- bucket: ready_for_maintainer
- author: ACSKamloops
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:07:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - `status`/`status --json` builds model labels for configured and persisted session rows in a shallow read-only path. - That path already avoids plugin/runtime model normalization, but it still let manifest model-id 

### #87912 Handle Codex toolResult blocks in tool-result truncation

- bucket: ready_for_maintainer
- author: AdrianIp0204
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:08:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR makes the existing tool-result truncation helpers treat Codex protocol blocks with `type: "toolResult"` as text-bearing tool output. - Count `type: "toolResult"` content blocks when measuring tool-result text length. - Truncate those blocks 

### #88103 Update Teams CLI install command

- bucket: ready_for_maintainer
- author: heyitsaamir
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:08:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Updates the Microsoft Teams setup docs to install `@microsoft/teams.cli` without the old `@preview` tag. ## Why Teams CLI is out of preview now, so the docs should point folks at the current stable package. Less vintage npm incantation, more happy s

### #88159 fix(cli): retry logs.tail after journal fallback in logs follow

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:09:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes `openclaw logs --follow` getting stuck on Linux systemd journal fallback after a transient local Gateway RPC outage or Gateway restart. When implicit local `logs.tail` fails in follow mode, the CLI can use the active systemd journal as a bridg

### #92872 fix(qqbot): allow scoped sandbox media sends

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, channel: qqbot, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:12:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: sandbox-enabled agents can produce media paths such as `/workspace/...`, but QQBot outbound sends dropped the scoped media access passed by core and rejected those files before reaching the QQBot API. - Solution: thread core-provided scop

### #91087 Fix Control UI CJK IME composition

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, extensions: memory-core, cli, scripts, extensions: device-pair, size: M, extensions: qa-lab, clawsweeper, clawsweeper:automerge, clawsweeper:human-review, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 🚀 automerge armed, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T08:26:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Makes https://github.com/openclaw/openclaw/pull/86036 merge-ready for the ClawSweeper automerge loop. The edit pass should inspect the live PR diff, review comments, and failing checks; rebase if needed; keep the contributor branch credited; and stop only when

### #91089 ci(github): add windows-node version drift detection

Adds PowerShell script and tests to detect when OpenClaw releases are
behind the latest openclaw-windows-node version. Helps prevent future
instances of issue #90953 where critical fixes (localized WSL parsing)
were available but not promoted to stable releases.

AI-assisted: true

- bucket: ready_for_maintainer
- author: LiuwqGit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-15T08:27:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a maintainer-facing Windows Hub drift check that compares the Windows Hub build promoted on an OpenClaw release against the latest `openclaw-windows-node` release. **Problem** - Issue #90953 was caused by localized WSL output (`Versione

### #91203 fix(matrix): neutralize command progress failure labels

- bucket: ready_for_maintainer
- author: bdjben
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:29:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - narrow this PR to the false command-progress `failed` label only - render vague terminal command-progress statuses (`failed`, `error`, `cancelled`, and related terminal statuses) as neutral command lifecycle text instead of a user-visible failure 

### #91208 fix #91047: Plugin session-extension registry not pinned; sessions.pluginPatch fails after agent/subagent plugin-load churn

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:29:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: startup-registered plugin session extensions could disappear from `sessions.pluginPatch` after later agent/subagent plugin-load churn replaced the active plugin registry. - Solution: add a pinned session-extension registry surface alongsi

### #91210 fix(ui): localize skill workshop switcher

- bucket: ready_for_maintainer
- author: SYU8384
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T08:29:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Splits out the i18n portion of #79745. This PR localizes the Skill Workshop mode switcher (Board / Today) into all supported Control UI locales. It does not touch the qmd/mcporter memory path. ## Verification Rebased onto current `upstream/main` (`ded3a93058`)

### #91217 feat(gateway): add deterministic dummy model (AI-assisted)

- bucket: ready_for_maintainer
- author: safrano9999
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T08:29:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `dummy/dummy` as an explicit “No AI - deterministic gateway only” model in the interactive default-model picker and support the same value when written directly to `openclaw.json`. - Return a deterministic help response after command and plugi

### #81360 runtime: suppress lost-context subagent raw output

- bucket: ready_for_maintainer
- author: glfruit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P3, rating: 🌊 off-meta tidepool, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:30:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Prevent lost-context subagent completions from surfacing raw child transcript/tool-result content. ## Problem When a subagent ends with `subagent run lost active execution context`, the output selection path can fall back to `snapshot.latestRawText`

### #93222 fix(discord): add configurable REST API timeout

- bucket: ready_for_maintainer
- author: geekhuashan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: S, proof: supplied, proof: sufficient, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:35:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `channels.discord.apiTimeoutMs` to the Discord channel config surface and threads it into Discord REST request-client construction. Default behavior stays at `15000` ms. Configured values are accepted at both `channels.discord.apiTimeoutMs` and

### #88449 Fix home path replacement in shortenHomeInString utility

- bucket: ready_for_maintainer
- author: ashyyhere
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:44:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix `shortenHomeInString()` so it only replaces `display.home` when the match occurs at a real path boundary. - Prevents incorrect shortening of home-like substrings such as `/srv/openclaw-home-other/dir`. - Adds focused regression coverage for th

### #88798 fix: keep insecure Control UI auth disabled after onboarding

- bucket: ready_for_maintainer
- author: jason-allen-oneal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:44:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #78855. The QuickStart setup path could leave `gateway.controlUi.allowInsecureAuth=true` in generated setup config for loopback Control UI compatibility. This keeps the post-onboarding default safe by no longer enabling `allowInsecureAuth` unl

### #90968 fix(acp): strip chat options for Claude ACP sessions

- bucket: ready_for_maintainer
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:46:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve startup ACP runtime options without replaying them as post-start controls - strip chat-only model/thinking options from managed Claude ACP startup and resume paths - keep timeout/cwd runtime options intact and add regressions for spawn, i

### #93194 fix(agents): allow prompt-released session control metadata entries

- bucket: ready_for_maintainer
- author: snowzlm
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:46:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #93193. This keeps embedded attempts from treating append-only session control metadata as a session takeover while the prompt lock is released for provider I/O. The takeover fence already accepts benign transcript-only OpenClaw assistant app

### #92125 build(deps): bump the android-deps group across 1 directory with 2 updates

- bucket: ready_for_maintainer
- author: dependabot[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: dependencies, app: android, size: XS, java, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:48:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Bumps the android-deps group with 2 updates in the /apps/android directory: [com.squareup.okhttp3:mockwebserver](https://github.com/square/okhttp) and [com.squareup.okhttp3:okhttp](https://github.com/square/okhttp). Updates `com.squareup.okhttp3:mockwebserver`

### #93225 build(deps): bump github.com/steipete/peekaboo from 3.4.1 to 3.5.3 in /apps/macos in the swift-deps group

- bucket: ready_for_maintainer
- author: dependabot[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: dependencies, app: macos, size: XS, swift_package_manager, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:54:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Bumps the swift-deps group in /apps/macos with 1 update: [github.com/steipete/peekaboo](https://github.com/steipete/Peekaboo). Updates `github.com/steipete/peekaboo` from 3.4.1 to 3.5.3 <details> <summary>Release notes</summary> <p><em>Sourced from <a href="ht

### #93007 feat(gateway): forward web_search_options through OpenAI-compatible chat completions

- bucket: ready_for_maintainer
- author: Lellansin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: XL, extensions: openai, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:59:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Forward `web_search_options` (`search_context_size`, `user_location`) from the OpenAI-compatible HTTP chat completions endpoint through to the provider-native web search injection layer. ### What this does - **Gateway layer** (`src/gateway/openai-ht

### #91691 [AI] fix(memory): prevent empty-string expectedModel in resolveMemory…

- bucket: ready_for_maintainer
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:11:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveMemoryIndexIdentityState` computes `expectedModel` from `provider.model`, but when `provider.model` is an empty string (as happens when `resolveEmbeddingProviderFallbackModel` returns `""` for an unregistered adapter, or when `createWithAdap

### #88988 feat(status): show session duration in footer

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:24:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #68226. ## Summary - adds a session duration segment to the shared status footer when `sessionStartedAt` is available - uses the existing session lifecycle timestamp resolver so stored session metadata and transcript header fallback stay centralized - re

### #78395 fix(agents): resolve bare alias fallbacks via alias index

- bucket: ready_for_maintainer
- author: AtelyPham
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T09:26:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix Telegram/Discord/Mattermost `/model` pickers misclassifying configured CLI-runtime bare aliases (`opus-cli`, `sonnet-cli`, etc.) under the agent's primary provider. `buildAllowedModelSetWithFallbacks` (`src/agents/model-selection-shared.ts`) was

