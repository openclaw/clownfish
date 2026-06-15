---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-042
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
  - "#82024"
  - "#82253"
  - "#93195"
  - "#93192"
  - "#88329"
  - "#82148"
  - "#36630"
  - "#41067"
  - "#43837"
  - "#46303"
  - "#85540"
  - "#86018"
  - "#54183"
  - "#86646"
  - "#86826"
  - "#87076"
  - "#60048"
  - "#61464"
  - "#68278"
  - "#68389"
  - "#69562"
  - "#70192"
  - "#70306"
  - "#71235"
  - "#72253"
cluster_refs:
  - "#82024"
  - "#82253"
  - "#93195"
  - "#93192"
  - "#88329"
  - "#82148"
  - "#36630"
  - "#41067"
  - "#43837"
  - "#46303"
  - "#85540"
  - "#86018"
  - "#54183"
  - "#86646"
  - "#86826"
  - "#87076"
  - "#60048"
  - "#61464"
  - "#68278"
  - "#68389"
  - "#69562"
  - "#70192"
  - "#70306"
  - "#71235"
  - "#72253"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.795Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 42

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #82024 Fix noninteractive Control UI auto-builds

- bucket: needs_proof
- author: keshavbotagent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, scripts, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:48:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary:\n- Run git-install dependency and Control UI build steps with CI plus pnpm confirm-modules-purge disabled.\n- Make scripts/ui.js auto-install dependencies noninteractively so gateway Control UI repair cannot block without a TTY.\n- Pass CI through the

### #82253 feat(slack): support per-channel replyToMode

- bucket: needs_proof
- author: truiem-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, size: S, triage: dirty-candidate, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:49:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `replyToMode` to Slack per-channel config/schema/types and generated channel metadata - resolve channel config before account/chat-type fallback when determining Slack reply/thread mode - pass resolved channel config through the regex-mention

### #93195 feat(sessions): add per-label summary to cleanup dry-run output (fixes #76826)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:52:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Enhance `openclaw sessions cleanup --dry-run` output to include a summary grouped by session label, helping users understand cleanup impact before applying. ## Changes - **`sessions-table.ts`**: Added `label` and `displayName` fields to `SessionDisplayRow` typ

### #93192 fix(dreaming): filter already-emitted entries in light phase to prevent verbatim repeats (fixes #72096)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:55:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## fix(dreaming): filter already-emitted entries in light phase to prevent verbatim repeats (fixes #72096) During overnight dreaming, the light-phase work summary emits identical commit-list content every cycle because `recentEntries` is re-fetched from the sa

### #88329 fix: user-pinned model falls back to global chain on quota exhaustion

- bucket: needs_proof
- author: Knowcheng
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:59:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a user selects a model via \`/model <name>\`, \`modelOverride\` is stored in \`sessions.json\` with \`modelOverrideSource: \"user\"\`. The \`resolveEffectiveModelFallbacks\` function returns \`[]\` for user-sourced overrides, making \`hasFallba

### #82148 feat(agents): allow spawn fast mode overrides

- bucket: needs_proof
- author: jai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:07:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `fastMode` override support to `sessions_spawn` - persist the override before first native subagent or ACP child turn - document fast-mode override behavior for subagents, ACP agents, and thinking config ## Real behavior proof - **Behavior or

### #36630 fix(signal): complete bidirectional quote-reply support

- bucket: needs_proof
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, channel: imessage, channel: mattermost, channel: signal, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, cli, agents, size: XL, extensions: memory-wiki, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:08:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds complete bidirectional Signal quote-reply support — both outbound (agent → user) and inbound (user → agent) quote context handling. ## Problem **Outbound (agent → user):** When the assistant includes reply tags (`[[reply_to_current]]`, `[[reply

### #41067 Fix dashboard chat run recovery across reconnects

- bucket: needs_proof
- author: Elysium-Seeker
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, app: web-ui, gateway, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:09:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes two closely related Gateway Dashboard chat reliability problems: 1. Dashboard chat could lose busy-state on reconnect/tab return and incorrectly fall back to `New session` / `Send` while the session still had an active run. 2. Gateway

### #43837 feat: one-shot thinking level via `/think <level> <body>`

- bucket: needs_proof
- author: Astro-Han
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: L, triage: dirty-candidate, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:09:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `/think <level>` changes the session default permanently, requiring users to toggle back after a one-off deep-thinking request. - Why it matters: Users running cost-efficient defaults (e.g., `medium`) need occasional deeper thinking witho

### #46303 fix: drain inbound debounce buffer and followup queues before SIGUSR1 reload

- bucket: needs_proof
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: bluebubbles, channel: discord, channel: msteams, channel: slack, channel: whatsapp-web, app: web-ui, gateway, cli, agents, channel: feishu, size: XL, extensions: memory-wiki, triage: dirty-candidate, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:10:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `config.patch` triggers a SIGUSR1 restart, two in-memory message buffers are silently wiped, causing inbound messages to be permanently lost: 1. **Inbound debounce buffers** — per-channel debounce timers (`createInboundDebouncer` closure-local

### #85540 feat(telegram): add botMessagePolicy to filter inbound messages from other bots

- bucket: needs_proof
- author: coyotefreman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:12:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds optional `telegram.botMessagePolicy` config (default `"allow"`) that, when set to `"ignore"`, drops inbound messages where `from.is_bot=true`. Self-echoes are already filtered by the existing `from.id === ctx.me?.id` check immediately above the

### #86018 Clarify QQBot passive group event wording

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, channel: qqbot, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:13:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Clarifies the QQBot group-message event comment to describe passive context collection and visible-reply gating without implying that non-mentioned group messages directly trigger agent replies. ## Scope Comment-only advisory cleanup. No runtime beh

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

### #71235 Dockerfile: add python -> python3 symlink for bookworm

- bucket: needs_proof
- author: boundedagency
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, size: XS, triage: risky-infra, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a conditional `python` → `python3` symlink to every Debian-based OpenClaw Dockerfile so agents that default to `python` (rather than `python3`) don't waste a tool round trip on `command not found`. ## Problem Debian bookworm dropped the unversio

### #72253 fix(heartbeat): keep benign exec completions internal

- bucket: needs_proof
- author: GodsBoy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:19:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: benign async exec completions, including restart-cleanup `signal SIGTERM`, can be relayed into user chat as noisy failure summaries. - Why it matters: routine gateway/session restarts can produ
