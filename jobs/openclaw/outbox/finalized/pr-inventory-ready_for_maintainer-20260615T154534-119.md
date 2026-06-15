---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-119
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
  - "#53467"
  - "#55851"
  - "#93243"
  - "#56145"
  - "#57609"
  - "#58636"
  - "#59920"
  - "#61151"
  - "#61775"
  - "#62682"
  - "#63789"
  - "#75727"
  - "#86577"
  - "#87333"
  - "#87694"
  - "#88374"
  - "#88686"
  - "#88887"
  - "#88906"
  - "#78441"
  - "#88968"
  - "#89277"
  - "#89279"
  - "#89291"
  - "#89744"
cluster_refs:
  - "#53467"
  - "#55851"
  - "#93243"
  - "#56145"
  - "#57609"
  - "#58636"
  - "#59920"
  - "#61151"
  - "#61775"
  - "#62682"
  - "#63789"
  - "#75727"
  - "#86577"
  - "#87333"
  - "#87694"
  - "#88374"
  - "#88686"
  - "#88887"
  - "#88906"
  - "#78441"
  - "#88968"
  - "#89277"
  - "#89279"
  - "#89291"
  - "#89744"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.216Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 119

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #53467 feat(slack): add ignoreOtherMentions channel config

- bucket: ready_for_maintainer
- author: hanamizuki
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, size: M, triage: dirty-candidate, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:28:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `ignoreOtherMentions` option for Slack channel config, mirroring the existing Discord guild/channel feature - When enabled, messages that mention another user (`<@U...>`) but do not explicitly mention the bot are dropped — even inside bot-part

### #55851 feat: include provider/model/profile/trigger context in overloaded and rate limit error messages

- bucket: ready_for_maintainer
- author: TinyTb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:28:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Transient provider failures were still too terse to act on. When an overloaded or rate-limit response reached the embedded agent formatter, the visible message could omit the provider, model, active profile presence, and trigger that operators need 

### #93243 fix(mattermost): backfill thread history from server when in-memory window is empty

- bucket: ready_for_maintainer
- author: iloveleon19
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:28:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Thread/conversation history is in-memory only, so after a gateway restart or a session clear the window for a thread is empty. A user who @mentions the bot inside an existing thread to wake it then gets a reply with no thread context — worst exact

### #56145 fix(gateway): preserve indentation when recombining non-streaming replies

- bucket: ready_for_maintainer
- author: vrurg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:28:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: AI-assisted: yes (OpenClaw agent-authored). Testing: targeted local validation (gateway regression tests + targeted lint + pre-commit repo checks). ## Summary - Companion to merged #55960, not a duplicate: #55960 fixed indentation loss while stripping inline r

### #57609 fix(mattermost): record pending history for non-allowlisted group senders

- bucket: ready_for_maintainer
- author: JasonWang1124
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: XS, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:29:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When `groupPolicy: "allowlist"`, messages from non-allowlisted senders are dropped at the access-check stage before `recordPendingHistoryEntryIfEnabled()` is called. The bot loses all conversation context from those users. - **Why it 

### #58636 feat(tui): add /upload command for file context

- bucket: ready_for_maintainer
- author: GillbertHsu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: L, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:29:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: No way to interactively browse and attach local files as context in the TUI - Why it matters: Users often need to provide file content for the AI to reference, but currently must copy-paste file path or reference files manually - What cha

### #59920 [codex] prefer terminal reply fields in CLI JSONL parser

- bucket: ready_for_maintainer
- author: mySebbe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, clawsweeper, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:29:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the CLI JSONL parser only special-cases Claude `type:"result"` events and otherwise falls back to generic text collection, so OpenAI/Codex-style fallback runs can lose terminal reply semantics. - Why it matters: in channel-visible fallbac

### #61151 fix(agents): drop partialJson streaming artifacts from session history repair

- bucket: ready_for_maintainer
- author: drvoss
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:31:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: session transcript repair was stripping `partialJson` from every otherwise-complete tool-call block, which could keep interrupted Anthropic artifacts as replayable calls. - Why it matters: replaying an interrupted tool call can corrupt pa

### #61775 enhance Makefile with standard build, test, and quality targets

- bucket: ready_for_maintainer
- author: Grynn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:32:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace the minimal single-target Makefile with a full developer workflow - `make help` (default) lists all targets with descriptions - Dependency tracking: `make deps` auto-runs `pnpm install` when lockfile changes - Build: `make build` (main + U

### #62682 fix(agents): distinguish terminal aborts from retryable failures (#60388)

- bucket: ready_for_maintainer
- author: simonusa
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:33:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Addresses #60388 (complementary to #52365, see "Relationship to PR #52365" below) Today the fallback layer cannot tell the difference between two very different aborts: 1. **"This model failed, try another"** -> fallback should retry 2. **"The whole run is ove

### #63789 Proposal: add minimal agent-to-agent handoff protocol (Phase 1)

- bucket: ready_for_maintainer
- author: glfruit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:34:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This draft PR proposes a minimal formal handoff protocol for agent-to-agent delegation. The goal is to make `sessions_send`-style agent handoff explicitly observable and less vulnerable to silent ambiguity. ## Proposed Phase 1 scope - add `handoff_i

### #75727 fix(gateway): render codex inline media once

- bucket: ready_for_maintainer
- author: Ittiz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:35:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Codex-harness replies that emitted local `MEDIA:` image directives could fail to become trusted outgoing media, leaving inline images text-only or unavailable to WebChat/Control UI. - Why it matters: Agents using the Codex harness should 

### #86577 fix(discord): persist inbound replay recovery

- bucket: ready_for_maintainer
- author: seanbc618-tech
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:36:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - persist Discord inbound replay claims per account so retryable worker failures can recover without dropping the inbound event - wire the Discord provider state dir into the replay guard and keep queue commit/release paths on the same replay namesp

### #87333 fix: prevent toolDiscovery from overwriting pinned channel registry

- bucket: ready_for_maintainer
- author: klioen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:36:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When tools.catalog is called from the frontend, it triggers ensureStandalonePluginToolRegistryLoaded with surface=channel and toolDiscovery=true. In toolDiscovery mode, the loaded registry contains no channels, but installStandaloneRegistry still overwrites th

### #87694 fix(auth): tighten billing cooldown defaults to recover from multi-hour lockouts (#70903)

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:36:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Multi-hour persisted `disabledUntil` (old 5h base / 24h cap billing defaults) keeps users locked out of a provider for the full window even after billing is fixed. The call layer skips disabled profiles before any probe runs, so `markAuthProfileSu

### #88374 fix(gateway): honor signed node ids

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XL, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:37:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Linked context Closes #61569. ## Summary Fixes #61569. - Honors explicit `openclaw node run --node-id ...` values across node pairing, registry, catalog/listing, pending ack/pull, node events, and invoke-result identity checks. - Uses a centralized resolver

### #88686 Replay sessions_yield wait text in WebChat history

- bucket: ready_for_maintainer
- author: alexzhu0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:37:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes https://github.com/openclaw/openclaw/issues/87321 ## User-facing bug WebChat replay could drop a visible `sessions_yield` wait message when that wait text was stored as a transcript tool result instead of a normal assistant text row. In practice, reopeni

### #88887 fix(memory-core): don't run the LLM reranker in vsearch/search modes

- bucket: ready_for_maintainer
- author: potterdigital
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:38:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What `searchMode: "vsearch"` / `"search"` are documented as vector/lexical-only modes that must not do LLM work — `buildV2Searches`' own doc comment says they exist "so lexical-only or vector-only modes don't trigger unnecessary LLM/embedding work." But `ru

### #88906 fix(openai): allow Codex Spark via harness

- bucket: ready_for_maintainer
- author: keshavbotagent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XL, extensions: openai, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:39:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow `openai/gpt-5.3-codex-spark` when the OpenAI provider is using the Codex harness transport - keep Spark suppressed for direct OpenAI API / Responses routes where the API catalog rejects it - add Spark to the Codex fallback catalog and update

### #78441 feat(subagents): forward toolsAllow from sessions_spawn

- bucket: ready_for_maintainer
- author: guanbear
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, commands, agents, size: L, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T11:39:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add optional `toolsAllow` to `sessions_spawn` for native subagent runs. - Validate it as a string array, trim entries, drop blank/whitespace-only entries, preserve explicit `[]`, and reject unsupported ACP paths instead of silently ignoring the po

### #88968 fix: prevent memory flush failure from aborting user reply (#85645)

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:39:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `memoryFlush` fails during the reply pipeline (provider timeout, rate limit, network error), the visible error payload was treated as the final reply via `replyOperation.fail("run_failed", ...)`. This aborted the user's actual message. Since th

### #89277 Optionally show runtime status after /new and /reset

- bucket: ready_for_maintainer
- author: ree9622
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:40:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds an opt-in `commands.showRuntimeStatusOnReset` setting for successful bare `/new` and `/reset` acknowledgements. - Keeps the compact default reply unchanged. - Applies the same acknowledgement formatting to chat command resets and Gateway agen

### #89279 fix(tasks): deliver ACP completions to bound Discord threads

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:40:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #84022 by delivering successful parent-review ACP task terminal updates to the explicitly bound Discord thread that originated the request. This is a narrow replacement shape after #86672 and #88251 were closed: - does **not** reopen or reuse 

### #89291 test(plugins): cover filtered bundle MCP servers

- bucket: ready_for_maintainer
- author: Haruhiyuki
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:41:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR tightens the existing compatible-bundle MCP path for bundles that need a narrower default tool surface. - Adds regression coverage that a Codex-compatible bundle `.mcp.json` preserves `toolFilter.include`, `toolFilter.exclude`, and a relativ

### #89744 Fix Discord default account startup priority

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:42:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #77429 ## Real behavior proof - Behavior or issue addressed: Discord multi-account startup delay ordering previously followed the configured account id list directly, so a configured primary account such as `channels.discord.defaultAccount: "tech"` could

