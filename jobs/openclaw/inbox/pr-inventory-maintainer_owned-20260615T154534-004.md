---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-004
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
  - "#91770"
  - "#88876"
  - "#92833"
  - "#88959"
  - "#47523"
  - "#88382"
  - "#88884"
  - "#92886"
  - "#88875"
  - "#88878"
  - "#88936"
  - "#90708"
  - "#91483"
  - "#91573"
  - "#92356"
  - "#92837"
  - "#90963"
  - "#89322"
  - "#89323"
  - "#89324"
  - "#89327"
  - "#89333"
  - "#89340"
  - "#89346"
  - "#89353"
cluster_refs:
  - "#91770"
  - "#88876"
  - "#92833"
  - "#88959"
  - "#47523"
  - "#88382"
  - "#88884"
  - "#92886"
  - "#88875"
  - "#88878"
  - "#88936"
  - "#90708"
  - "#91483"
  - "#91573"
  - "#92356"
  - "#92837"
  - "#90963"
  - "#89322"
  - "#89323"
  - "#89324"
  - "#89327"
  - "#89333"
  - "#89340"
  - "#89346"
  - "#89353"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.195Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 4

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91770 fix(memory): abort search embeddings on tool timeout

- bucket: maintainer_owned
- author: ai-hpc
- author association: MEMBER
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T01:00:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91718 by making the memory_search tool timeout cancel the underlying builtin memory embedding search instead of only racing the outer tool promise. - Adds an optional `AbortSignal` to the memory search manager options contract. - Aborts the i

### #88876 fix(ci): restore cron schema snapshots

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, extensions: phone-control, size: L, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T01:35:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - refreshes the affected Codex prompt snapshots against the provider-normalized cron tool schema - keeps the cron runtime schema nullable so `null` clear values still reach cron patch normalization - fixes the phone-control test lint/type regression

### #92833 fix(memory): search memory and wiki concurrently for corpus=all (#92633)

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:18:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - `memory_search` with `corpus=all` ran the builtin memory/sessions branch and the wiki/supplement branch **sequentially** under one 15s tool deadline. Two searches that each finished well under 15s individually summed past the deadline, so `corpus

### #88959 fix(plugins): ignore throwing provider runtime hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:33:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - catch throwing provider runtime `normalizeModelId` and `normalizeTransport` hooks so model/transport normalization keeps its existing fallback paths - log sanitized provider hook failures instead of letting a bad plugin poison provider lookup - ke

### #47523 Agents: tighten tool name trust and preflight tool collisions

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, commands, agents, maintainer, size: L, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T03:44:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: tool-result local media trust relied on normalized names, so external tools could collide with built-in names and inherit local path passthrough. - Why it matters: that made it possible for non-built-in tool results to be treated as trust

### #88382 fix(config): compare size-drop guard against canonical config

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T04:01:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #71865. - compare config size-drop protection against the canonical previous source config for valid existing files, instead of raw editor-format bytes - keep the raw-byte fallback for invalid existing configs so malformed/clobbered files rema

### #88884 fix(agents): trim web tools in lean mode

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: L, extensions: openai, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T04:50:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extend `localModelLean` so it trims `web_search`, `web_fetch`, and `x_search` along with `browser`, `cron`, and `message` - keep explicit override behavior for exact, grouped, and wildcard web preserves (`group:web`, `web_*`) while suppressing nat

### #92886 docs: add Plugin Inspector development and CI workflow

- bucket: maintainer_owned
- author: fuller-stack-dev
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: docs-discoverability, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T05:59:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a canonical Plugin Inspector guide for plugin-author development, CI, trusted runtime capture, beta-checkout comparison, reports, and plugin-shipped skill proof. - Reorder the plugin testing guide so external authors see package, runtime, and 

### #88875 docs: document markdown and shared helpers

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, commands, agents, maintainer, size: XL, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T06:05:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Continue the post-#88554 inline-comment pass on a fresh PR branch. - Add public/API docs and invariant notes for markdown, shared helper, channel, gateway, plugin SDK, logging, restart, update, install, port-probe, PATH, JSON byte, secure-random, 

### #88878 fix(agents): project cron tool schemas for providers

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: M, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T07:17:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - project runtime tool schemas into provider-facing OpenAPI-friendly shapes by dropping nullable composition wrappers and converting string literal unions to enums - keep raw TypeBox validation intact so `null` clear sentinels still reach cron runti

### #88936 fix(plugins): skip broken web provider factories

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T07:17:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skips bundled web provider factories that throw during public-artifact discovery - keeps healthy sibling providers active when another selected plugin's factory is broken - preserves the existing `null` fallback path for modules that simply do not

### #90708 test: stabilize maintainer prepare baseline

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, channel: telegram, maintainer, size: S, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T08:13:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Stabilizes the local maintainer prepare baseline failures seen while preparing #85791. - updates the node-host allow-always coverage test to use a supported direct executable fixture instead of a shell-wrapped interpreter command that is now rejecte

### #91483 docs: add maturity test skeleton

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: docs, maintainer, size: XS, extensions: qa-lab, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T09:09:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a short `docs/reference/maturity-tests.md` page for maturity scorecard coverage - describe the current source files, scenario coverage IDs, and `qa coverage` workflow - link the page from QA/testing docs, docs navigation, labeler metadata, and

### #91573 fix(gateway): hide stream-error sentinel from chat history

- bucket: maintainer_owned
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: gateway, size: S, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T09:54:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Chat history could display the canonical stream-error sentinel `[assistant turn failed before producing content]` as a visible assistant row before the real assistant response. - **Solution:** Treat a pure sentinel assistant message a

### #92356 fix(heartbeat): skip reasoning payloads when selecting heartbeat reply

- bucket: maintainer_owned
- author: tangtaizong666
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T09:54:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Heartbeat could deliver the model's reasoning/thinking text to the channel as the user-visible reply even when `includeReasoning` is false. - `resolveHeartbeatReplyPayload` (`src/auto-reply/heartbeat-reply-payload.ts`) returns the last payload wit

### #92837 fix(android): show live chat context usage

- bucket: maintainer_owned
- author: Tosko4
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: app: android, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T09:54:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes the Android chat context meter so it renders live session context usage from gateway `totalTokens` / `contextTokens` metadata instead of mapping the thinking preset to a fixed percentage. - Keeps the compact thinking control visible by showi

### #90963 fix(codex): strengthen agent soul adherence

- bucket: maintainer_owned
- author: hannesrudolph
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: XS, extensions: codex, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T11:15:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Strengthen the existing Codex app-server `AGENT_SOUL` preamble in one line. - Name the failure mode this is meant to reduce: after longer interactions, persona and collaboration traits from workspace soul files can fade and the model can drift bac

### #89322 fix(ollama): skip unreadable tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, extensions: ollama, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Guard Ollama tool name collection and tools payload projection against unreadable tool descriptors. - Preserve healthy sibling tools when a malformed descriptor is skipped. - Add focused regression coverage for unreadable descriptors in the Ollama pr

### #89323 fix(web-ui): skip hidden subagent picker pages

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, maintainer, size: M, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89249. Summary: - Advance the chat session picker through raw `sessions.list` pages that add no visible rows after hidden spawn-child subagent filtering. - Stop showing raw total counts when the picker is filtering out loaded rows, avoiding misleading s

### #89324 fix(xai): skip unreadable tool payload entries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, extensions: xai, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Guard xAI tool payload compatibility against unreadable tool/function/strict accessors. - Drop only unreadable tool payload entries while preserving healthy siblings. - Keep existing xAI `strict` stripping behavior for readable function tools. Verif

### #89327 fix(sessions): guard agent tool definition mirroring

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Guard `createToolDefinitionFromAgentTool()` against unreadable AgentTool descriptor fields. - Use the base-tool registry key as the fallback name when mirroring base tool overrides. - Preserve readable metadata and fall back to an empty object param

### #89333 fix(tools): guard planner descriptor reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot tool descriptor planning fields once before sorting, duplicate checks, and missing-executor reporting. - Convert unreadable or invalid descriptor names/sort keys into `ToolPlanContractError` instead of leaking arbitrary getter errors. - K

### #89340 fix(agents): guard bootstrap tool name lookup

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard embedded-attempt workspace-bootstrap file-access detection against unreadable raw tool names - keep bootstrap routing able to see a healthy `read` sibling after a malformed descriptor is skipped later by schema projection ## Verification Beh

### #89346 fix(agents): guard compact reserved tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - collect compact bundled-runtime reserved tool names through a guarded helper so unreadable tool-name accessors cannot abort setup - keep readable sibling names reserved for MCP/LSP collision avoidance while leaving malformed descriptors for the ex

### #89353 fix(plugin-sdk): guard provider schema inspection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes a provider schema inspection crash when a nested tool-parameter schema property is unreadable. - Converts throwing child schema getters into stable unsupported-schema diagnostics. - Keeps sibling schema traversal intact for Gemini/DeepSeek p

