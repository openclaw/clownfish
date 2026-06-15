---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-015
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
  - "#84827"
  - "#84836"
  - "#84848"
  - "#84853"
  - "#84867"
  - "#84978"
  - "#85136"
  - "#85183"
  - "#85229"
  - "#85235"
  - "#85264"
  - "#85403"
  - "#90908"
  - "#85359"
  - "#85404"
  - "#85471"
  - "#85478"
  - "#85788"
  - "#85845"
  - "#89990"
  - "#90054"
  - "#90061"
  - "#90077"
  - "#86094"
  - "#90238"
cluster_refs:
  - "#84827"
  - "#84836"
  - "#84848"
  - "#84853"
  - "#84867"
  - "#84978"
  - "#85136"
  - "#85183"
  - "#85229"
  - "#85235"
  - "#85264"
  - "#85403"
  - "#90908"
  - "#85359"
  - "#85404"
  - "#85471"
  - "#85478"
  - "#85788"
  - "#85845"
  - "#89990"
  - "#90054"
  - "#90061"
  - "#90077"
  - "#86094"
  - "#90238"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.197Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 15

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #84827 fix(control-ui): add guarded dashboard shortcuts

- bucket: maintainer_owned
- author: BunsDev
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, maintainer, size: L, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:02:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refreshes the guarded Control UI dashboard shortcuts for #81946 on current `origin/main`. - Adds a centralized dashboard shortcut resolver for `/`, `N`, `Esc`, and existing Cmd/Ctrl+K palette behavior. - Keeps shortcut no-ops inside editable targets

### #84836 fix(gateway): surface delayed fetch timeouts

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: galiniliev
- labels: extensions: diagnostics-otel, cli, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:03:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `fetchWithTimeout` detects late timeout timers, but event-loop starvation evidence is only attached to the warning log. - Solution: emit a structured `fetch.timeout.delayed` diagnostic event whenever the timeout fires late enough to produ

### #84848 fix(memory-core): bound managed dreaming under pressure

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: galiniliev
- labels: docs, gateway, extensions: memory-core, agents, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:03:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: managed memory dreaming cron could keep adding workspace and Dream Diary work while the gateway was already under RSS/heap pressure, and the pressure wait path did not observe the enclosing cron timeout/cancellation. - Solution: preserve 

### #84853 fix(agents): drop throttled exec update events

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:03:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: exec live output throttling capped detailed payloads, but throttled `tool_execution_update` events still emitted generic tool/item updates with no new user-visible payload. - Solution: make throttled exec updates a true no-op until the ne

### #84867 fix: allow user-switched model to use agent fallback chain

- bucket: maintainer_owned
- author: njuboy11
- author association: CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: commands, agents, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:04:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `resolveEffectiveModelFallbacks()` returns `[]` for `modelOverrideSource: "user"`, disabling all fallbacks when a user manually switches models (e.g., `/model deepseek-v4-pro`). If the chosen model becomes unavailable (provider 503, timeo

### #84978 feat(mantis): add Discord desktop proof draft

- bucket: maintainer_owned
- author: thewilloftheshadow
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, maintainer, size: XL, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:07:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **Untested first draft.** This is a first-pass Discord mirror of the existing Telegram desktop proof workflow. It has syntax/YAML sanity only; no live Crabbox/Discord proof has been run yet. Describe the problem and fix in 2–5 bullets: If this PR fi

### #85136 feat(crabbox): add PR desktop lease workflow

- bucket: maintainer_owned
- author: Takhoffman
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, scripts, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:11:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a generic Crabbox PR desktop lease workflow for maintainer-triggered Linux and macOS inspection leases - install a pinned Crabbox CLI from `openclaw/crabbox` before leasing - post ready/status/failure handoff comments back to the target PR wit

### #85183 Preserve authored config intent during update

- bucket: maintainer_owned
- author: joshavant
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, maintainer, size: XL, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:13:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve pre-update authored `agents` model intent after post-core doctor/plugin update rewrites - keep legacy Codex routes canonicalized to `openai/*` while retaining `agentRuntime.id: "codex"` - preserve authored plugin/agent `${VAR}` references

### #85229 Deny sensitive host file mutations

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, dependencies-changed, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:14:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Bump `@openclaw/fs-safe` to `0.3.0` and expose the deny-mutation types/helpers OpenClaw needs. - Add a sensitive host mutation policy for write/edit/apply_patch, including SSH keys, shell profiles, credential stores, OpenClaw state/OAuth paths, co

### #85235 surface message-tool-only diagnostics

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, maintainer, size: M, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:14:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Carry message-tool-only delivery mode, prompt-persistence suppression, and inbound event kind through agent run context. - Surface non-deliverable message-tool-only lifecycle endings as chat error diagnostics for GUI/TUI consumers. - Mirror suppre

### #85264 fix(infra): scope Windows path realpath caches

- bucket: maintainer_owned
- author: 211-lee
- author association: FIRST_TIMER
- draft: no
- assignees: vincentkoc
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:15:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Windows `lstat`/realpath calls are expensive enough that repeated path-boundary checks can dominate startup and agent-path flows. The original version tried to fix that with process-wide realpath caches, but those caches sit on plugin, skill, hook, 

### #85403 fix(telegram): suppress message-tool reply previews

- bucket: maintainer_owned
- author: jimdawdy-hub
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, cli, scripts, commands, agents, size: XL, extensions: memory-wiki, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T02:18:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refs #80520. Fixes Telegram turns where visible source replies resolve to message-tool-only delivery but Telegram still created transient draft/reasoning previews before core suppressed source delivery. - Share the harness `sourceVisibleReplies` def

### #90908 fix(model-fallback): don't rethrow provider-side AbortErrors as user cancellations

- bucket: maintainer_owned
- author: shengting
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: altaywtf
- labels: agents, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:33:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the LLM API closes the connection mid-stream, the fetch layer surfaces `AbortError("This operation was aborted")` with **no external abort signal triggered** (`"externalAbort: false"` in trajectory). The existing guard `shouldRethrowAbort()` re

### #85359 feat(agents): add local skill route tool

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: shakkernerd
- labels: docs, agents, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:41:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `local_skill_route`, a read-only local tool that ranks available skills for the current user task and returns matched/ambiguous/nomatch guidance - wire the tool through `createOpenClawTools` from the per-run `skillsSnapshot`, and pass that sna

### #85404 fix(agents): serialize new-session resolution per session key

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: osolmaz
- labels: agents, size: S, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:41:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #84575 reports that two requests carrying the **same `x-openclaw-session-key`** at the OpenAI-compatible endpoints (`/v1/chat/completions`, `/v1/responses`) can run in **separate sessions** when the second arrives while the fir

### #85471 Suppress cron announce control replies

- bucket: maintainer_owned
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:43:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #85421 ## Summary - Cron announce/direct delivery now uses the shared suppressed-control-reply predicate before sending outbound payloads, so token-only `NO_REPLY`, `ANNOUNCE_SKIP`, and `REPLY_SKIP` replies are treated as silent instead of leaking to ext

### #85478 fix(slack): soften benign search no-result progress

- bucket: maintainer_owned
- author: kesslerio
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: channel: discord, channel: matrix, channel: msteams, channel: slack, channel: telegram, agents, size: L, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:44:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Slack progress for optional local context searches no longer presents clean `rg` no-match results as scary exit-code failures. Direct `rg` exit 1 and `find ... | xargs rg ...` exit 123 now carry a narrow `benign_no_result` classification through exec c

### #85788 Fix/spawned by cache leak

- bucket: maintainer_owned
- author: georgeboiko
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: gateway, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:55:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # fix(gateway): evict `spawnedByCache` on lifecycle end to prevent memory leak ## Summary - **Problem:** `spawnedByCache` — a `Map<string, string | null>` inside the `createAgentEventHandler` closure — has no eviction. Every unique subagent / ACP sessionKey is

### #85845 fix(msteams): route file.download.info links via graph shares

- bucket: maintainer_owned
- author: IWhatsskill
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: channel: msteams, size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:56:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: MSTeams `application/vnd.microsoft.teams.file.download.info` attachments can expose SharePoint/OneDrive `downloadUrl` values that require Graph auth, but the download path used those URLs directly. - Solution: Route eligible `downloadUrl`

### #89990 fix(gateway): isolate web login descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T03:03:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate plugin-owned web login gateway method discovery so malformed descriptor rows do not hide later healthy providers - add a regression covering a throwing descriptor `name` getter and an unreadable descriptor array row before a valid web-logi

### #90054 fix(gateway): isolate method descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:03:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard plugin/channel gateway method descriptor reads before listing method names or scopes - skip malformed descriptor rows while preserving healthy method discovery and QR-login provider resolution - keep plugin descriptor registry construction r

### #90061 fix(agent-runtime): guard prompt cache tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:03:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR keeps prompt-cache observability from crashing an agent turn when tool-name diagnostics encounter malformed tool rows. - Guard `collectPromptCacheToolNames()` against unreadable array rows and throwing `name` getters. - Preserve existing beh

### #90077 fix(plugins): guard provider discovery credential metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:03:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard provider-discovery credential probing so a malformed plugin row with unreadable `setup` or `providerAuthEnvVars` metadata is treated as having no env credential evidence. - Add a provider-discovery regression covering poisoned credential met

### #86094 feat(codex): diagnose native thread lifecycle

- bucket: maintainer_owned
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, extensions: diagnostics-otel, agents, size: XL, extensions: codex, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:04:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is PR #3 in the Codex native-thread reuse stack, after #85978 and #86069. It does **not** change the 70k default guard, and it does **not** preserve bindings across context-engine compaction or successor transcript rollover yet. It makes Codex 

### #90238 fix(plugins): skip unreadable tool descriptor cache entries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:05:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make plugin tool descriptor-cache capture best-effort when plugin-controlled descriptor fields throw - keep live plugin tools available even when their cache descriptor cannot be captured safely - add regression coverage for direct descriptor capt

