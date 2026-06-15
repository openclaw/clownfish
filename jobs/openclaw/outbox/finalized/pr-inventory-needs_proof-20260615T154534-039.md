---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-039
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
  - "#69355"
  - "#69413"
  - "#69426"
  - "#69428"
  - "#69491"
  - "#69494"
  - "#69495"
  - "#69954"
  - "#69972"
  - "#69999"
  - "#70056"
  - "#70105"
  - "#70287"
  - "#70332"
  - "#70471"
  - "#70497"
  - "#70605"
  - "#70630"
  - "#70813"
  - "#70876"
  - "#71113"
  - "#89656"
  - "#89680"
  - "#89688"
  - "#89693"
cluster_refs:
  - "#69355"
  - "#69413"
  - "#69426"
  - "#69428"
  - "#69491"
  - "#69494"
  - "#69495"
  - "#69954"
  - "#69972"
  - "#69999"
  - "#70056"
  - "#70105"
  - "#70287"
  - "#70332"
  - "#70471"
  - "#70497"
  - "#70605"
  - "#70630"
  - "#70813"
  - "#70876"
  - "#71113"
  - "#89656"
  - "#89680"
  - "#89688"
  - "#89693"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.202Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 39

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #69355 feat(doctor): detect local rebuild vs pristine npm release

- bucket: needs_proof
- author: mikaeldiakhate-cell
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:33:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem A stock `openclaw update` silently overwrites locally patched installs. Regressions return quietly because operators have no signal that the running package has diverged from the pristine npm release. Concrete trigger: the 2026-04-20 dist-overlay au

### #69413 signal: detect bot mentions from native envelope metadata

- bucket: needs_proof
- author: danicuki
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: signal, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:33:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Signal renders native @mentions as `@<uuid>` or `@<phone>` after hydrating `\uFFFC` placeholders, but the mention-gating regex patterns are derived from the agent's display name (e.g. `\b@?caio\b`). These never match, so `wasMentioned

### #69426 agents/context: unlock context1m on proxied Anthropic 1M-capable models (#69353)

- bucket: needs_proof
- author: sk7n4k3d
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:33:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #69353. ### Summary `isAnthropic1MModel` in `src/agents/context.ts` gates the 1M context window on `provider === "anthropic"`, so `context1m: true` was a silent no-op for any provider proxying Claude Opus 4 / Sonnet 4 — notably the bundled `github-copilo

### #69428 fix(msteams): paginate thread replies and keep recent context

- bucket: needs_proof
- author: hkalkoti1
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: msteams, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:33:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Title: fix(msteams): paginate thread replies and keep recent context ## Summary - Problem: Teams thread context enrichment only used the first Graph replies page, so long threads could skew toward the oldest replies. - Why it matters: the bot could miss the ne

### #69491 feat(amazon-bedrock): forward default Anthropic betas through the bedrock-converse stream route

- bucket: needs_proof
- author: adhajar-amzn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:33:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds the anthropic default beta headers to the bedrock flow to allow openclaw deployed using claude models on bedrock the ability to get tool call streaming - Problem: - Why it matters: Using OC on Bedrock in time sensitive systems would lea

### #69494 fix: resolve SecretRef keychain tokens in desktop app browser proxy

- bucket: needs_proof
- author: shad0wca7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:34:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `gateway.auth.token` is configured as a SecretRef (e.g., `{source: "exec", provider: "keychain", id: "gateway-auth-token"}`), the macOS desktop app fails to resolve the actual token value. This causes: 1. Desktop app reads `gateway.auth.token` 

### #69495 feat(heartbeat): support model fallbacks via {primary,fallbacks} (#69434)

- bucket: needs_proof
- author: zote
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:34:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Accept `agents.*.heartbeat.model` as `{ primary, fallbacks }` in addition to the existing string form, mirroring `agents.defaults.model`. Closes #69434. - Heartbeat ticks now fail over to the next fallback on retriable provider errors (rate-limit/

### #69954 fix: fall back to canonical session transcripts during cleanup

- bucket: needs_proof
- author: Blahdude
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:35:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `sessions cleanup --fix-missing` can prune a live session when the persisted `sessionFile` path is stale even though the canonical `<sessionId>.jsonl` transcript still exists. - Why it matters: valid sessions can be incorrectly deleted du

### #69972 fix restart CI typings and prefer the current worktree under Vitest

- bucket: needs_proof
- author: OpenCnid
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, agents, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:36:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - repair the restart transaction typing fallout from the gateway restart handoff merge - prefer the current source checkout when Vitest or tsx resolves argv[1] through a borrowed node_modules tree - cover the worktree case with a bundled-dir regress

### #69999 feat(macos): wallboard shell — fullscreen WKWebView on external display (REL-433)

- bucket: needs_proof
- author: moneypennyrasener
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:36:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** No native macOS shell exists for the wall dashboard MVP; REL-434 needs a fullscreen, chrome-free host before it can wire in the clock-only Concept A surface. - **Why it matters:** The wall dashboard requires a dedicated window that fi

### #70056 fix(gateway): clean up store and set running=false on stop timeout

- bucket: needs_proof
- author: garnetlyx
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, stale, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:36:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `stopChannel` timeout path set `running: true` and skipped `store.aborts`/`store.tasks` cleanup, leaving a dead promise that blocked all future starts and fooled the health monitor - Fix: set `running: false`, clean up store entries, and add `last

### #70105 fix(ui): keep debug event log stable while viewing history

- bucket: needs_proof
- author: wfpaopao
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:36:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - prevent the Debug page event log from auto-jumping when users scroll up to inspect older entries - add sticky-at-bottom behavior for the debug event log, only auto-scrolling when the viewer is already near the bottom - keep event ordering consiste

### #70287 fix(msteams): drop unsupported $search on msteams:search (AI-assisted)

- bucket: needs_proof
- author: gaurav0107
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:37:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `msteams:search` action hits `HTTP 400: Search is not supported` because Graph API blocks `$search` on `/chats/{id}/messages` and `/teams/*/channels/*/messages` when called with Application permissions (the default for bot auth). - **

### #70332 fix(memory): harden dreaming diary pipeline

- bucket: needs_proof
- author: vivito
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:37:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - strip managed dream blocks even when they contain nested subheadings or legacy heading-only sections - turn request-scoped dream fallbacks back into diary-style prose instead of raw `Reflections:` fragments - dedupe diary entries by body so identi

### #70471 Feishu: harden comment reply delivery and bot identity refresh

- bucket: needs_proof
- author: wittam-01
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, stale, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:37:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu comment handling could process notices not meant for the current bot, duplicate replies after tool-visible replies, fail on raw `<` / `>` text, and reuse stale bot identity. - Why it matters: This caused misrouted comment handling,

### #70497 fix(agents): strip Gemini conditional schema keywords

- bucket: needs_proof
- author: yuaiccc
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:37:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Re-opening of PR #69964. The previous PR was automatically closed when the fork was made private.

### #70605 BUG: Strip strikethrough text from context files before sending to model

- bucket: needs_proof
- author: DeeptimaanB
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:38:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Addresses #47668 Struck-through text in context files was still being forwarded to the model as-is. This PR fixes that by stripping all strikethrough content in `sanitizeContextFileContentForPrompt()` before the context is embedded in the system prompt. It han

### #70630 fix(telegram): keep no-visible direct turns silent

- bucket: needs_proof
- author: notskynet-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:38:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This stops Telegram direct-message turns from fabricating silent-reply filler like `No added response from me.` when the turn ends with no visible final response and no actual error. Closes #70628. ## Root cause `extensions/telegram/src/bot-message-

### #70813 fix(whatsapp): support edit and unsend actions

- bucket: needs_proof
- author: Lucenx9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: L, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:38:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - WhatsApp message actions could not edit or revoke bot-owned messages. - The old PR also routed edit/unsend through PN-only JID conversion, which could misroute LID-addressed chats. Why does this matter now? - Whats

### #70876 fix: include MCP server tools in /tools inventory

- bucket: needs_proof
- author: armorbreak001
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:38:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `/tools` and `/tools verbose` now list tools from configured MCP servers (`mcp.servers`) in addition to built-in, plugin, and channel tools. ## Problem Previously, `/tools` only showed tools from `createOpenClawCodingTools()`, but MCP tools are mate

### #71113 CI: add AGENTS.md size guard to check-additional

- bucket: needs_proof
- author: Yellowfish23
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, stale, size: M, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:40:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `scripts/check-agents-md.ts` — caps every tracked `AGENTS.md` at 150 lines to stop any single guide from regrowing into a monolith. - Wires into the sharded `check-additional` layout via `BOUNDARY_CHECKS` in `scripts/run-additional-boundary-c

### #89656 [Fix] add subagent allowlist patch RPC

- bucket: needs_proof
- author: samzong
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: M, triage: mock-only-proof, extensions: admin-http-rpc, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:44:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Adds a typed Gateway RPC for updating an agent's subagent allowlist without forcing clients to write raw config patches. Why does this matter now? Issue #89372 requests a Gateway API so UI and RPC clients can manage 

### #89680 fix(feishu): redact audited content before send

- bucket: needs_proof
- author: hanhuihanhui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:44:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Why does this matter now? What is the intended outcome? What is intentionally out of scope? What does success look like? What should reviewers focus on? <details> <summary>Summary guidance</summary> This PR descripti

### #89688 fix: suppress duplicate Telegram plugin approvals 🤖

- bucket: needs_proof
- author: cyphercodes
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:45:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat a missing approval `turnSourceChannel` as unknown instead of a channel mismatch when checking native-delivery fallback suppression. - This lets Telegram suppress the generic forwarding fallback when native delivery is enabled for the resolve

### #89693 fix(cron): ignore optional scanner search misses

- bucket: needs_proof
- author: henryyuen168-ship-it
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:45:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat trailing optional scanner search-miss payloads as nonfatal when prior scanner output is deliverable. - Keep search misses fatal when there is no successful scanner output. - Preserve fatal classification for non-search tool errors. ## Verifi

