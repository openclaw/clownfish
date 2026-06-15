---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-043
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
  - "#48940"
  - "#49063"
  - "#85540"
  - "#49869"
  - "#86018"
  - "#52951"
  - "#54183"
  - "#86646"
  - "#86826"
  - "#87076"
  - "#56869"
  - "#60048"
  - "#61464"
  - "#68278"
  - "#68389"
  - "#69562"
  - "#69618"
  - "#70192"
  - "#70306"
  - "#70518"
  - "#71235"
  - "#71940"
  - "#72215"
  - "#72253"
  - "#72267"
  - "#72495"
  - "#72713"
  - "#72792"
  - "#72843"
  - "#73122"
  - "#73171"
  - "#73311"
  - "#73355"
  - "#73382"
  - "#73746"
  - "#73883"
  - "#73897"
  - "#74083"
  - "#74200"
  - "#74231"
cluster_refs:
  - "#48940"
  - "#49063"
  - "#85540"
  - "#49869"
  - "#86018"
  - "#52951"
  - "#54183"
  - "#86646"
  - "#86826"
  - "#87076"
  - "#56869"
  - "#60048"
  - "#61464"
  - "#68278"
  - "#68389"
  - "#69562"
  - "#69618"
  - "#70192"
  - "#70306"
  - "#70518"
  - "#71235"
  - "#71940"
  - "#72215"
  - "#72253"
  - "#72267"
  - "#72495"
  - "#72713"
  - "#72792"
  - "#72843"
  - "#73122"
  - "#73171"
  - "#73311"
  - "#73355"
  - "#73382"
  - "#73746"
  - "#73883"
  - "#73897"
  - "#74083"
  - "#74200"
  - "#74231"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.481Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 43

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #48940 ACP: add gateway-owned node-backed runtime

- bucket: needs_proof
- author: jorgensandhaug
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: googlechat, gateway, channel: feishu, size: XL, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:11:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw did not yet have a complete **node-backed ACP runtime** where the gateway owns the durable state and a paired node acts only as the execution worker. - Why it matters: without that split, restart/replay/reconnect behavior is too 

### #49063 Telegram: allow native channel commands in explicitly allowed chats

- bucket: needs_proof
- author: sonim1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:12:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Telegram `channel_post` updates could carry regular text, but native slash commands such as `/status` were not authorized correctly in channel relay setups. - Why it matters: OpenClaw bot-to-bo

### #85540 feat(telegram): add botMessagePolicy to filter inbound messages from other bots

- bucket: needs_proof
- author: coyotefreman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:12:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds optional `telegram.botMessagePolicy` config (default `"allow"`) that, when set to `"ignore"`, drops inbound messages where `from.is_bot=true`. Self-echoes are already filtered by the existing `from.id === ctx.me?.id` check immediately above the

### #49869 fix(nextcloud-talk): parse rich object file shares from webhook payload

- bucket: needs_proof
- author: VivoKrei
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: nextcloud-talk, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:12:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #29152 When a user shares a file or image in Nextcloud Talk, the bot webhook receives the message but the NC Talk plugin was not parsing the rich object parameters — so the agent never saw the attachment. NC Talk encodes file shares as rich ob

### #86018 Clarify QQBot passive group event wording

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, channel: qqbot, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:13:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Clarifies the QQBot group-message event comment to describe passive context collection and visible-reply gating without implying that non-mentioned group messages directly trigger agent replies. ## Scope Comment-only advisory cleanup. No runtime beh

### #52951 feat: add tools.fs.roots — per-agent filesystem roots with access modes

- bucket: needs_proof
- author: JuanRdBO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: googlechat, channel: imessage, channel: matrix, channel: mattermost, channel: signal, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, commands, agents, channel: feishu, size: XL, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:13:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `tools.fs.workspaceOnly` is binary, so operators cannot safely allow agents to read or write a specific host path outside the workspace without opening broader filesystem access. - Why it matters: multi-tenant and shared-gateway deploymen

### #54183 WhatsApp: add configurable send retry for transient network errors

- bucket: needs_proof
- author: hassansys2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:14:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #54103 ## Summary Adds configurable outbound send retry with exponential backoff for the WhatsApp channel, applied to all three send paths (text, media, poll). The retry is active by default with no config change needed. **What changed:** - `src/config/

### #86646 fix(ui): deduplicate assistant messages on chat.status final event

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:14:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #85755 ## Summary Fix duplicate assistant messages appearing in WebChat when `loadChatHistory` and the `final` chat event race. **Guard**: `isTailDuplicate` uses `messageDisplaySignature` to detect when the same message arrives via both history load and 

### #86826 fix(gateway): preserve raw external session aliases

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:15:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #86743. ## Summary Implements raw external session alias preservation to prevent session splitting when internal agent activity touches the same logical conversation. ## Changes - Added src/gateway/session-store-aliases.ts with alias resolution logic - U

### #87076 Skip QMD memory search when scope denies

- bucket: needs_proof
- author: GSUCAS
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:15:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - short-circuit QMD-backed `memory_search` when the current session is denied by `memory.qmd.scope` - return an empty successful result with `debug.skipped = "skipped_by_scope"` instead of opening the memory manager - keep the QMD manager's own scop

### #56869 feat(docker): add outbound proxy environment variable examples for Docker deployments

- bucket: needs_proof
- author: CodeTeamster
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, docker, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:15:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: feat(docker): add outbound proxy environment variable examples for Docker deployments - Add commented HTTP_PROXY, HTTPS_PROXY, and NO_PROXY variables to docker-compose.yml - Document how to set the proxy port to match the host's actual proxy - Improve cross-pl

### #60048 docs(memory): add memory system deep dive guide

- bucket: needs_proof
- author: neyric
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:16:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a comprehensive memory system deep dive guide, addressing #43032. ### Problem `docs/concepts/memory.md` covers basics (~600 words) but lacks depth on memory best practices, search optimization, lifecycle management, and advanced patterns. ### Ne

### #61464 Docker: add Mac migration and keep-awake helpers

- bucket: needs_proof
- author: ruslansv
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, docker, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:16:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Add operator helpers for Mac-hosted Docker deployments. ## Why Running OpenClaw in Docker on macOS is easier to operate if the repo includes a simple host-awake helper and a low-disruption backup/restore path for moving from an Intel Mac to Apple Silic

### #68278 fix(discord): honor explicit accountId token resolution in cron deliveries

- bucket: needs_proof
- author: zoneblaze
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:17:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - prevents explicit non-default Discord `accountId` sends from silently inheriting the default/top-level token - returns `source: none` when the explicit account has no token instead of falling back to default identity - adds regression coverage in 

### #68389 plugins: clarify allowlist warning when entries don't match discovered ids

- bucket: needs_proof
- author: lyfuci
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:17:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: When users set `plugins.allow` to a channel-style id (for example `["feishu"]`) instead of the real plugin id (`openclaw-lark`), the loader still emits `plugins.allow is empty; discovered non-bundled plugins may auto-load: ...` even thoug

### #69562 fix: validate cron announce account ids

- bucket: needs_proof
- author: iamlukethedev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #69618 feat(messages): add responseFooter and enrich /usage full

- bucket: needs_proof
- author: arminanton
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, app: web-ui, gateway, commands, size: XL, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary _AI-assisted PR. Prepared with AI assistance against a repo snapshot; targeted validation only. See Repro + Verification and Human Verification for exact coverage._ Describe the problem and fix in 2–5 bullets: - Problem: OpenClaw had a native `messa

### #70192 chore(observability): scope eslint/no-console rule to src with allowlist + mark FileReader listeners { once: true }

- bucket: needs_proof
- author: clivemoore
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Additive observability hygiene — one new lint rule + a small listener cleanup clarity fix. No runtime behavior change. **1. Scoped `eslint/no-console: error` rule** Enabled for `src/**/*.{ts,tsx}` (excluding test files) in `.oxlintrc.json`. Prevents

### #70306 fix(acp+gateway): clean final emit, fallback visibility, legacy unit resolve

- bucket: needs_proof
- author: nrubioru
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, cli, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Three related rough edges in ACP/Codex orchestration and gateway ops: 1. Parent sessions could fail to surface a coherent final answer after `sessions_spawn(runtime="acp")`. Mid-flight snippet flushes compacted whitespace and truncated aggressively,

### #70518 fix(config): add heartbeat skill allowlist

- bucket: needs_proof
- author: akai-shuuichi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: heartbeat runs currently inherit the target agent's full skill set, even when heartbeat only needs a small subset or none. - Why it matters: large skill catalogs inflate the skills prompt and waste input context on every heartbeat turn. -

### #71235 Dockerfile: add python -> python3 symlink for bookworm

- bucket: needs_proof
- author: boundedagency
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, size: XS, triage: risky-infra, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a conditional `python` → `python3` symlink to every Debian-based OpenClaw Dockerfile so agents that default to `python` (rather than `python3`) don't waste a tool round trip on `command not found`. ## Problem Debian bookworm dropped the unversio

### #71940 fix(browser): fall back to Hyprland grim capture for headed viewport screenshots

- bucket: needs_proof
- author: Angfr95
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:19:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #54470 ### Problem On native Windows, `openclaw webhooks gmail setup --account` crashed immediately with `Error: spawn gcloud ENOENT`. Node's `child_process.spawn` with `shell: false` does not consult `PATHEXT`, so bare `gcloud`, `gog`, and `tailscale` 

### #72215 Gateway: allow cron.enabled and compaction mode config paths

- bucket: needs_proof
- author: YangManBOBO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:19:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `cron.enabled` to the gateway tool config mutation allowlist so owner automation can toggle cron through `config.patch`. - Add `agents.defaults.compaction.mode` to the same allowlist so compaction mode can be updated via API-driven gateway edi

### #72253 fix(heartbeat): keep benign exec completions internal

- bucket: needs_proof
- author: GodsBoy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:19:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: benign async exec completions, including restart-cleanup `signal SIGTERM`, can be relayed into user chat as noisy failure summaries. - Why it matters: routine gateway/session restarts can produ

### #72267 fix: zsh compdef directive on first line

- bucket: needs_proof
- author: gigamonster256
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:19:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: zsh completions do not work when auto loaded - Why it matters: zsh completions must have the #compdef directive on the first line to work properly (works fine when sourced but not loaded automatically from fpath) - What changed: zsh compl

### #72495 fix(agents): harden workspace bootstrap cache identity

- bucket: needs_proof
- author: aimqwest
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:20:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Objective Harden the guarded workspace bootstrap file cache identity so an equal-size in-place edit with restored `mtime` cannot keep stale bootstrap instructions cached. This is the narrow cache-identity follow-up to the security tradeoff surfaced on #72406 a

### #72713 [codex] fix: allow trusted .openclaw symlink

- bucket: needs_proof
- author: sgaofen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:20:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #72572. This restores support for dotfile-managed `~/.openclaw` directories while keeping exec approval paths hardened on both the Node and macOS node-host paths. - allow trusted first-level `~/.openclaw` symlinks on POSIX after validating li

### #72792 fix(talk): resolve config from runtime secrets

- bucket: needs_proof
- author: haishmg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, extensions: qa-lab, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:20:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `talk.config` could pass raw `talk.providers.*.apiKey` SecretRef wrappers into provider-specific config resolution. - Why it matters: Talk clients use `talk.config` for discovery, so a documented SecretRef-backed provider key could break 

### #72843 fix(agents): warm context-window cache for the gateway daemon

- bucket: needs_proof
- author: jakepresent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:20:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What The long-running gateway daemon never warms the context-window cache, so synchronous lookups on the status path return `DEFAULT_CONTEXT_TOKENS = 200_000` until the first agent run completes. That value then gets persisted onto the session record and ra

### #73122 test claude-cli backend registration guardrails

- bucket: needs_proof
- author: szupzj18
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: anthropic, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:21:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a bundled Anthropic loader guardrail proving `claude-cli` is registered and resolvable as a CLI backend. - Assert the same test does not register `claude-cli` as an embedded agent harness, matching the current runtime-family split. - Add a leg

### #73171 Add bounded status gateway auth fallback

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:21:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a bounded fallback when resolving gateway auth for deep/status scans - preserve existing status behavior while avoiding hangs when auth lookup stalls - keep promised Discord decision digest artifact path present for tool-call audit output ## V

### #73311 Add Control UI session kind filter

- bucket: needs_proof
- author: Shawn-Kim96
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, size: M, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:21:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Control UI chat-header session kind filter for main/direct, group, subagent, dreaming, cron, and other sessions. - Keeps filtering UI-local so `sessions.list` params and gateway protocol stay unchanged. - Preserves the selected session in t

### #73355 fix(cron): add .catch() re-arm and watchdog to prevent runtime timer chain death

- bucket: needs_proof
- author: SkywingsWang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:22:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the cron `setTimeout` chain breaks at runtime, the scheduler silently stops firing and never recovers until a gateway restart. This was observed after ~2.5 days of continuous gateway uptime on macOS (Apple Silicon) with no errors logged. **Root

### #73382 fix(amazon-bedrock): resolve 200K context window for Claude 3.x and unlisted Anthropic Bedrock variants

- bucket: needs_proof
- author: wenxu007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:22:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `extensions/amazon-bedrock/discovery.ts` only listed a handful of Anthropic models in `KNOWN_CONTEXT_WINDOWS`. Common Bedrock IDs such as `anthropic.claude-3-opus-20240229-v1:0`, `anthropic.claude-3-sonnet-20240229-v1:0`, and `anthropic.c

### #73746 feat(tasks): improve task state transitions and lifecycle formatting

- bucket: needs_proof
- author: neofdezf-cloud
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XL, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:23:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add explicit intermediate active task states for approval waits and external waits - propagate those active-state semantics across registry maintenance, flow guards, CLI views, and auto-reply task rendering - add compressed operational summaries p

### #73883 feat(session): add includeArchived to chat.history and sessions_history

- bucket: needs_proof
- author: CadanHu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, app: web-ui, gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:23:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements the read-only path of [#45003](https://github.com/openclaw/openclaw/issues/45003)'s 3-PR roadmap: give agents and `chat.history` callers a way to recover context that lives in `.reset.<ts>` archives, **without** resurrecting those archive

### #73897 Fix Android node system.run shell wrapper

- bucket: needs_proof
- author: alixchow
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:23:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Title: Fix Android node system.run shell wrapper Summary: - Use Termux's shell path for Android node system.run wrappers. - Keep Windows and other POSIX platforms unchanged. - Document the Android/Termux node-host shell behavior. Problem: Android/Termux does n

### #74083 fix(sandbox): pass --init so tini reaps zombie processes

- bucket: needs_proof
- author: luckylhb90
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, agents, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:25:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: What: Adding --init to the docker sandbox makes tini the PID 1 and reaps zombie processes. Why: Long-running sandboxes generate a large number of short-lived child processes (shell/browser helpers), and the entrypoint does not reap them →

### #74200 fix(skills): never wipe target skills dir on sync to prevent data los…

- bucket: needs_proof
- author: luckylhb90
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:25:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: …s on partial load `syncSkillsToWorkspace` used to call `fsp.rm(targetSkillsDir)` before recopying every skill. Any transient failure inside `loadWorkspaceSkillEntries` (a filesystem hiccup, a config parse error, an agent-filter edge case) returns fewer entrie

### #74231 fix(media): include configured roots in path-not-allowed error hint

- bucket: needs_proof
- author: ebarkhordar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:25:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `assertLocalMediaAllowed` rejects out-of-tree paths with: ``` Local media path is not under an allowed directory: /tmp/file.png ``` This tells the operator their path was wrong but not what *was* allowed. In production the user just sees the rejecti

