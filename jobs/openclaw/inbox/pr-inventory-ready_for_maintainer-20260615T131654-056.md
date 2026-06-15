---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-056
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
  - "#89396"
  - "#74320"
  - "#75469"
  - "#89935"
  - "#89962"
  - "#89966"
  - "#89967"
  - "#89334"
  - "#69346"
  - "#92731"
  - "#92654"
  - "#89752"
  - "#90552"
  - "#91728"
  - "#77848"
  - "#76873"
  - "#89443"
  - "#90885"
  - "#89981"
  - "#89992"
  - "#90030"
  - "#73594"
  - "#75179"
  - "#75223"
  - "#77973"
  - "#77987"
  - "#77999"
  - "#78090"
  - "#78105"
  - "#78113"
  - "#78115"
  - "#78139"
  - "#78199"
  - "#78411"
  - "#78436"
  - "#78438"
  - "#78452"
  - "#78554"
  - "#90033"
  - "#90041"
cluster_refs:
  - "#89396"
  - "#74320"
  - "#75469"
  - "#89935"
  - "#89962"
  - "#89966"
  - "#89967"
  - "#89334"
  - "#69346"
  - "#92731"
  - "#92654"
  - "#89752"
  - "#90552"
  - "#91728"
  - "#77848"
  - "#76873"
  - "#89443"
  - "#90885"
  - "#89981"
  - "#89992"
  - "#90030"
  - "#73594"
  - "#75179"
  - "#75223"
  - "#77973"
  - "#77987"
  - "#77999"
  - "#78090"
  - "#78105"
  - "#78113"
  - "#78115"
  - "#78139"
  - "#78199"
  - "#78411"
  - "#78436"
  - "#78438"
  - "#78452"
  - "#78554"
  - "#90033"
  - "#90041"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.484Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 56

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89396 fix(doctor): drop inert legacy cron notify when cron.webhook is unset

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:13:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #44460. `openclaw doctor --fix` left the legacy top-level `notify: true` cron field in place whenever `cron.webhook` was **unset**, so the dead flag survived every repair. Because the legacy-store preview line and the "Doctor warnings" note ar

### #74320 fix(heartbeat): keep parsing tasks when an unrecognized indented field appears

- bucket: ready_for_maintainer
- author: BSG2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:15:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `parseHeartbeatTasks` in `src/auto-reply/heartbeat.ts` silently drops every heartbeat task that follows a task entry containing an unrecognized indented field (e.g. `notes:`, `tags:`, `model:`, or just a typo). Two end-of-`tasks:`-block guards compa

### #75469 fix: same-session inferred commitments can be starved indefinitely when a normal HEARTBEAT.md...

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, clawsweeper, clawsweeper:commit-finding, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:16:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one regression risk: same-session inferred commitments can be starved indefinitely when a normal `HEARTBEAT.md` task is due on every heartbeat tick. ## What ClawSweeper Is Fixing - **Medium: recurring due heartbeat tasks can prevent same-sessi

### #89935 fix: redact media urls in plugin logs

- bucket: ready_for_maintainer
- author: zhukeyu8303
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: tlon, channel: feishu, size: L, channel: qqbot, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:20:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Prevents credential-bearing and signed media URLs from being written raw in QQBot, Tlon, and Feishu media failure logs. - Prevents QQBot URL download fallback errors from surfacing raw signed URLs in user-visible e

### #89962 fix(discord): fall back to text when voice delivery fails

- bucket: ready_for_maintainer
- author: danhayman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:22:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes a Discord final-reply failure mode I hit locally: when an `audioAsVoice` reply failed during voice-note delivery, the reply could disappear completely instead of falling back to visible text. - Try Discord voice-note delivery first, as be

### #89966 docs: add firecrawl.dev links on the Firecrawl tool page

- bucket: ready_for_maintainer
- author: rakshith48
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:22:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The Firecrawl tool page mentioned Firecrawl only as plain text (the only URLs were `api.firecrawl.dev` API endpoints inside code blocks). This adds two links to `docs/tools/firecrawl.md`: - the first **Firecrawl** brand mention in the intro → https://www.firec

### #89967 fix #87199: [Bug]: macOS LaunchAgent generated by 2026.5.22 uses env-wrapper and missing gateway run, causing EX_CONFIG / Permission denied on external home volumes

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:22:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #87199 ## Summary - Problem: macOS LaunchAgent plists with service environment entries made the generated env-wrapper script the executable that launchd spawned; on permission-constrained home/state volumes that can fail at `posix_spawn` before the gatew

### #89334 docs: note active memory timeout circuit breaker

- bucket: ready_for_maintainer
- author: AdrianIp0204
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: refactor-only, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:24:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - note that repeated Active Memory timeouts are handled by the existing automatic circuit breaker - add a troubleshooting entry for repeated Active Memory timeout delays - document and point operators at the real `circuitBreakerMaxTimeouts` and `cir

### #69346 fix(embedded-runner): actionable diagnostic for empty-stream config errors

- bucket: ready_for_maintainer
- author: abajirao
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:25:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Iteration log (review-driven changes since open) This PR has been through three rounds of bot review. Summary for human reviewers: | Commit | Source | Change | |---|---|---| | `a0426ed6c8` | Initial | Original `isLikelyConfigErrorEmptyStream` + `buildConfig

### #92731 fix(doctor): skip top-level group-allowlist scan when sub-accounts exist

- bucket: ready_for_maintainer
- author: 425072024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:32:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: `openclaw doctor` falsely warns "all group messages will be silently dropped" when top-level `groupAllowFrom` is empty but every sub-account has its own populated `groupAllowFrom`. Issue #92684. - **Root Cause**: `scanEmptyAllowlistPo

### #92654 feat(control-ui): add right-click Reply in Dashboard webchat

- bucket: ready_for_maintainer
- author: programmingWTF
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T17:51:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds right-click Reply to messages in the Dashboard / Control UI webchat - Right-click any chat bubble → "Reply" option → reply preview bar appears above the composer → type reply → message auto-prepended with Markdown blockquote - Click ✕ on the 

### #89752 fix(sessions): make transcript migration rewrite atomic

- bucket: ready_for_maintainer
- author: masatohoshino
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:03:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The one-time legacy linear→parent-linked transcript migration rewrote the whole conversation-history JSONL **in place** (`fs.writeFile` = `O_TRUNC` then write). A crash, power loss, or `ENOSPC` mid-write left the transcript empty or partially rewr

### #90552 fix(sessions): persist sender metadata in user turn transcript JSONL

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:17:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Thread `senderId`/`senderName`/`senderUsername` from the channel inbound context into the persisted user-turn transcript message - Group chat session JSONL records now include `__openclaw` sender identity metadata, matching the metadata already pr

### #91728 fix(github-copilot): prefer live model catalog

- bucket: ready_for_maintainer
- author: saju01
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, extensions: github-copilot, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:28:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - prefer GitHub Copilot's live `/models` catalog rows for visible model metadata - keep bounded static Copilot rows as a degraded fallback when live discovery is disabled, unauthenticated, or unavailable - merge live + fallback rows by model id with

### #77848 fix: scope provider resolution caches to catalog runs

- bucket: ready_for_maintainer
- author: rolandrscheel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:31:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Scopes provider-resolution caches to a single provider-catalog/catalog-auth operation instead of relying on repeated uncached plugin/provider lookups. This adds an explicit `ProviderResolutionScope` and threads it through the provider catalog/auth/d

### #76873 fix(discord): preserve target intent during normalization

- bucket: ready_for_maintainer
- author: AScriver
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:32:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Discord-like explicit DM targets could be normalized through the id-like target path without preserving the intended direct-message kind. - Why it matters: A Discord target that is syntactically a user/direct target should stay routed as 

### #89443 fix(active-memory): drop assistant chitchat boilerplate from recall summaries

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:40:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #84034. The `active-memory` recall subagent sometimes returned assistant-style chitchat — greetings, "your message got cut off" clarifications, date/time announcements, and help-offer text — when it had nothing useful to recall. `normalizeActi

### #90885 fix(agent): resolve compaction model alias to canonical model ref

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-14T18:42:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Auto-compaction dispatched a bare model alias (e.g. `gpt54mini`) as-is instead of resolving it to its canonical model reference, causing `Unknown model: openai/gpt54mini` errors - Resolve bare `agents.defaults.compaction.model` overrides through t

### #89981 fix(diagnostics-otel): keep full model id on spans instead of collapsing to "unknown"

- bucket: ready_for_maintainer
- author: mycarrysun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: diagnostics-otel, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:44:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `assignGenAiSpanIdentityAttrs` sets the span attribute `gen_ai.request.model` via `lowCardinalityAttr(input.model)`. `lowCardinalityAttr` validates against `LOW_CARDINALITY_VALUE_RE = /^[A-Za-z0-9_.:-]{1,120}$/`, which does **not** include `/`. So p

### #89992 feat(config): write local editor schema

- bucket: ready_for_maintainer
- author: danhayman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:45:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: I don’t seem to be able to touch my `openclaw.json` without breaking something, and it’s hard to discover all the available options. This PR adds a small breadcrumb for humans and our agents: when OpenClaw writes config, it also leaves behind the local schema 

### #90030 fix(memory-core): skip qmd zero-hit search sync

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:46:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed Fixes #90023. `memory_search` no longer runs the synchronous zero-hit forced sync path when the active memory backend is `qmd`. Non-QMD backends keep the existing zero-hit repair behavior. ## Real behavior proof Behavior or issue addressed: QMD

### #73594 feat(openrouter): inject cache_control for closed-source qwen models

- bucket: ready_for_maintainer
- author: simpx
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:59:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Extend the existing OpenRouter cache_control wrapper to cover Alibaba's closed-source qwen commercial line (`qwen3-max` / `qwen3-plus` / `qwen3-flash` and future versioned tiers), in addition to `anthropic/*` models. ## Why this is safe Closed-sourc

### #75179 fix(memory): incremental session sync (openclaw#40919) (openclaw#59577)

- bucket: ready_for_maintainer
- author: wr-web
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:59:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(memory): incremental session sync;fix bugs;move to extensions:memory-core (openclaw#40919) (openclaw#59577) ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <

### #75223 fix: CLI auth status/probe path regression

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, clawsweeper, clawsweeper:commit-finding, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T18:59:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one regression in the CLI auth status/probe path. The commit intentionally makes unscoped external CLI discovery skip missing runtime-only profiles, but `models status` and `models status --probe` still load the auth store without passing the 

### #77973 fix(gateway): cap agentRunCache to prevent unbounded growth under run fan-out

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:03:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #77976 ## Summary `src/gateway/server-methods/agent-job.ts` keeps an in-process `agentRunCache: Map<runId, AgentRunSnapshot>` populated by every terminal lifecycle event. There is a 10-minute TTL pruned on every `set` via `pruneAgentRunCache`, but **no 

### #77987 fix(gateway): cap auth-rate-limit entries map under unique-IP flood

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:04:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #77986 ## Summary `src/gateway/auth-rate-limit.ts` keeps an in-memory `entries: Map<scope:ip, RateLimitEntry>` of failed auth attempts. There is a periodic `setInterval(prune)` (default 60s) that walks the Map and drops entries with empty attempts, but 

### #77999 fix(memory): reopen closed sqlite handles

- bucket: ready_for_maintainer
- author: dmbyte
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:04:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Detect when a cached memory index manager holds a closed sqlite handle and reopen it before search/status/sync. - Drop closed cached managers before reuse. - Add a regression test that closes the underlying DB handle and verifies status/search rec

### #78090 docs: call out discord external plugin install

- bucket: ready_for_maintainer
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: XS, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:08:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Documents the Discord external plugin install step in the Discord quick setup. The root package/Docker image no longer bundles the Discord runtime by default. A config-only `channels.discord` block can therefore leave Docker/npm users with Discord m

### #78105 fix(plugins): make empty-allowlist actionable for new users

- bucket: ready_for_maintainer
- author: pahuchi-joe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:09:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: On fresh installs, `plugins.allow is empty; discovered non-bundled plugins may auto-load: ...` and `loaded without install/load-path provenance` warnings list ids but give no remediation, and users routinely confuse channel ids (`feishu`)

### #78113 fix(agents): restore workspace-<id> sibling layout for non-default agents

- bucket: ready_for_maintainer
- author: jkf87
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:09:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** PR #59789 changed `resolveAgentWorkspaceDir` so that non-default agents would use `agents.defaults.workspace` as a base, resulting in nested paths like `~/.openclaw/workspace/newbot/` instead of the expected sibling layout `~/.opencla

### #78115 feat: add worker trigger loop CLI contract

- bucket: ready_for_maintainer
- author: Gforce10-design
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T19:09:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds the bounded `openclaw worker trigger loop` CLI contract. - Registers the worker command in the CLI command registry and descriptors. - Adds command and registry tests for the local contract path. ## Real behavior proof - Behavior or issue add

### #78139 fix(cron): hint after disable about list filtering disabled jobs

- bucket: ready_for_maintainer
- author: kate
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:10:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw cron disable <id>` appears to delete recurring cron jobs because `openclaw cron list` hides disabled jobs by default. Users see a successful disable response, then `cron list` shows the job is gone, and reasonably conclude the j

### #78199 fix(config): tolerate stale model catalog entries

- bucket: ready_for_maintainer
- author: YannCedric
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:11:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: A stale suppressed model entry in `agents.defaults.models` could make config validation fail even when that entry was only an inactive catalog/allowlist option. - Why it matters: Config validation failure can prevent the gateway from beco

### #78411 docs(concepts): standardize active memory related heading

- bucket: ready_for_maintainer
- author: GGzili
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: refactor-only, proof: supplied, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:19:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rename `## Related pages` to `## Related` in the Active memory concept doc - Align the page with the heading used by the rest of the docs set ## Real behavior proof **Behavior or issue addressed:** The Active memory concept doc used `## Related pa

### #78436 fix(agents): scope session-history guard to latest-user-answered

- bucket: ready_for_maintainer
- author: kenners22
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:20:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Addresses part of #69086 (session-history guard only; retry-prompt hook/override remains separate). ## Summary - scope the session-history guard to assistant messages that occur after the latest user message - inspect the transcript tail rather than only the f

### #78438 fix(telegram): add OPENCLAW_TELEGRAM_FORCE_IPV4 opt-in env var

- bucket: ready_for_maintainer
- author: glasswings-lang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:20:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Some hosts (notably Windows 11 with broken or partial IPv6 connectivity) see Telegram polling stalls because the dual-stack happy-eyeballs attempt sits in the IPv6 half-open state long enough to wedge the long-poll dispatcher pool. The existing stic

### #78452 feat(whatsapp): add native location send + action routing

- bucket: ready_for_maintainer
- author: cpena28
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, app: web-ui, gateway, cli, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:21:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add native location send support to WhatsApp outbound adapter (`sendLocation`) - wire `message.send` latitude/longitude flow through gateway + outbound runner - expose WhatsApp `location` action in plugin action runtime - add validation and tests 

### #78554 fix(googlechat): fix googlechat grant_type

- bucket: ready_for_maintainer
- author: donbowman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T19:25:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary in recent refactor of gaxios, Google chat was broken. #77307 has more details. - Resolves the `unsupported_grant_type` error by ensuring we instantiate the exact same version of `Gaxios` that `google-auth-library` uses internally. - Previously, the 

### #90033 fix(llm): apply model.compat.sendSessionAffinityHeaders at openai-tra…

- bucket: ready_for_maintainer
- author: obuchowski
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:28:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Fix a regression where [model.compat.sendSessionAffinityHeaders](https://github.com/openclaw/openclaw/blob/main/packages/llm-core/src/types.ts#L403-L404) stopped being honored after the major inference “gate” moved from `src/llm/providers/openai-c

### #90041 fix(subagents): prevent message_tool_only from swallowing subagent completion message (AI-assisted)

- bucket: ready_for_maintainer
- author: GanglyPuma22
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T19:28:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Three coordinated fixes that together ensure subagent completions reliably reach the user in group chats, topic threads, and DMs — regardless of group-chat delivery mode configuration (`message_tool_only`). 1. **Lifecycle honesty (agent-command.ts):** Classify

