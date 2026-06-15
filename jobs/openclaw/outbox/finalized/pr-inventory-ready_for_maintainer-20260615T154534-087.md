---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-087
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
  - "#52664"
  - "#54724"
  - "#55596"
  - "#56806"
  - "#72092"
  - "#72314"
  - "#72557"
  - "#92524"
  - "#73649"
  - "#89724"
  - "#89745"
  - "#89767"
  - "#89428"
  - "#59695"
  - "#89567"
  - "#62063"
  - "#74131"
  - "#74136"
  - "#92725"
  - "#74185"
  - "#74235"
  - "#74252"
  - "#74369"
  - "#74444"
  - "#89577"
cluster_refs:
  - "#52664"
  - "#54724"
  - "#55596"
  - "#56806"
  - "#72092"
  - "#72314"
  - "#72557"
  - "#92524"
  - "#73649"
  - "#89724"
  - "#89745"
  - "#89767"
  - "#89428"
  - "#59695"
  - "#89567"
  - "#62063"
  - "#74131"
  - "#74136"
  - "#92725"
  - "#74185"
  - "#74235"
  - "#74252"
  - "#74369"
  - "#74444"
  - "#89577"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.211Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 87

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #52664 feat: expose rawBody on user messages in plugin hook events

- bucket: ready_for_maintainer
- author: kingdoooo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:06:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Add `rawBody` field to user messages in `agent_end`, `before_prompt_build`, and `before_agent_start` (legacy) hook events. This provides plugins with the original user input before channel structural context, `buildInboundUserContextPrefix()` metad

### #54724 fix/agents-primary-model-selection-and-catalog-loading-41344

- bucket: ready_for_maintainer
- author: wsyjh8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T15:06:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes incorrect Primary Model selection when switching between agents in Agents > Overview. - Fixes partial / blank Primary Model dropdowns after refresh or first load by ensuring the model catalog is available on Agents Overview paths. - Adds tar

### #55596 fix(CLI) Markdown table columns misaligned with CJK characters on Telegram and Discord

- bucket: ready_for_maintainer
- author: sparkyrider
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T15:06:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Draft Closes: #55512

### #56806 feat(exec): expose knownLongFlags in safeBinProfiles config schema

- bucket: ready_for_maintainer
- author: spencer2211
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:07:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Expose the `knownLongFlags` field in the `safeBinProfiles` config schema, allowing operators to declare long flags as "known" for GNU abbreviation resolution without misusing `allowedValueFlags` or `deniedFlags`. Closes #56805 > **Rebased 2026-06-10

### #72092 fix(media): allow aws-sdk auth mode for image and audio/video paths

- bucket: ready_for_maintainer
- author: truffle-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:16:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The chat path's `prepareSimpleCompletionModel` exposes an `allowMissingApiKeyModes` escape hatch so providers whose `auth.mode === "aws-sdk"` (notably `amazon-bedrock`) can resolve credentials at call time via the AWS SDK chain instead of a static `apiKey`. Th

### #72314 fix(auto-reply): dedupe idless inbound retries

- bucket: ready_for_maintainer
- author: mjamiv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:17:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a content/timestamp fallback inbound dedupe key when providers do not supply a stable message id - keep normal provider-message-id dedupe unchanged - cover idless retry dedupe and same-body/different-timestamp non-collapse ## Why Some channel 

### #72557 feat: PluginStatusProvider plugin API for TUI footer status (resolves #64086)

- bucket: ready_for_maintainer
- author: dodge1218
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:19:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Resolves #64086. Coordinates with #53774 (broader footer-customization tracker). ## What this PR does Adds a typed `PluginStatusProvider` interface and `registerStatusProvider` method to `OpenClawPluginApi`, following the same registration shape as `registerTo

### #92524 fix(memory-core): preserve keyword-only hybrid results

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:32:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes hybrid memory search so keyword-only FTS hits survive the post-merge minScore boundary even when another vector result already passes the strict threshold. Fixes #92337. ## Real Behavior Proof - Behavior addressed: Hybrid search no longer drop

### #73649 fix(issue-template): split logs and screenshots into separate fields

- bucket: ready_for_maintainer
- author: d1rshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T15:33:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Splits the **Logs, screenshots, and evidence** field in the bug report issue template into two separate fields: - **Logs** - retains `render: shell` for syntax highlighting - **Screenshots, recordings, and evidence** - a plain textarea that accepts ima

### #89724 feat(voice-call): add Microsoft Teams voice provider (OpenClawTeamsBridge)

- bucket: ready_for_maintainer
- author: ahenawy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: voice-call, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T15:37:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** - OpenClaw's `voice-call` extension supports Twilio, Telnyx, Plivo, and a mock provider, but has no way to handle **Microsoft Teams** calls. Teams audio cannot reach the existing webhook/media-stream plane becaus

### #89745 fix(usage): exclude untimestamped records from daily ranges

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:38:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Fixes ranged dashboard/session usage summaries so untimestamped cached transcript rows do not inflate selected-day totals or model usage. - Keeps all-time cache summaries intact, but forces finite date ranges to de

### #89767 fix(skills): route installs to requested agent workspace [AI-assisted]

- bucket: ready_for_maintainer
- author: AliAbuelkheir
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:38:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Routes workspace-affecting skill install/update calls through the existing agent workspace resolver when an explicit `agentId` is provided. - Keeps default behavior unchanged for callers that do not pass an `agentI

### #89428 fix: keep inbound metadata in runtime context

- bucket: ready_for_maintainer
- author: SweetSophia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:50:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the remaining #72704-shaped path where current-turn inbound channel metadata was still prepended into the user prompt text. Current `main` already builds ordinary inbound metadata as `currentInboundContext`, but `run/attempt.ts` immediately me

### #59695 Replace SHA-1 with SHA-256 for config fingerprinting

- bucket: ready_for_maintainer
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:50:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace `crypto.createHash("sha1")` with `crypto.createHash("sha256")` in two files: - `src/agents/agent-bundle-mcp-runtime.ts` - MCP server catalog fingerprinting - `src/media-understanding/apply.test.ts` - temp media file content hashing in test

### #89567 fix(memory-wiki): use crypto randomness for import run IDs

- bucket: ready_for_maintainer
- author: Lucenx9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:50:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - ChatGPT import run IDs in the memory-wiki plugin included `Math.random()` in their seed. - This PR switches that seed entropy to Node crypto randomness while preserving the existing `chatgpt-<12 hex>` run ID shape.

### #62063 Add Swedish control UI locale

- bucket: ready_for_maintainer
- author: yeager
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, scripts, size: XL, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:51:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add Swedish (`sv`) as a supported control UI locale - generate and register `ui/src/i18n/locales/sv.ts` against the current 1118-key source locale set - preserve the newer `ar`, `it`, `vi`, `nl`, and `fa` locale registrations while syncing metadat

### #74131 fix(agents): harden subagent lifecycle calls against transient gateway readiness failures

- bucket: ready_for_maintainer
- author: xiaobao-k8s
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, extensions: qa-lab, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:55:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a bounded `sessions.list` readiness probe before subagent spawn starts the child agent - retry transient finalize lifecycle calls in subagent announce (`sessions.patch` / `sessions.delete`) - retry transient sweep cleanup `sessions.delete` cal

### #74136 fix(agents): accept multi-line ANNOUNCE_SKIP on final line

- bucket: ready_for_maintainer
- author: yelog
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:55:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix `isAnnounceSkip()` to also accept multi-line sub-agent output where `ANNOUNCE_SKIP` appears as the final line after a newline, not just as the sole content. - Add focused unit tests for `sessions-send-tokens.ts` covering exact, whitespace-padd

### #92725 External reranker

- bucket: ready_for_maintainer
- author: michmill1970
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: googlechat, channel: line, channel: msteams, channel: slack, channel: telegram, channel: tlon, channel: zalouser, gateway, extensions: diagnostics-otel, extensions: memory-core, extensions: memory-lancedb, scripts, agents, channel: feishu, channel: twitch, size: XL, extensions: acpx, proof: supplied, proof: sufficient, extensions: amazon-bedrock, extensions: diffs, dependencies-changed, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 🔁 re-review loop, extensions: llama-cpp
- gitcrawl snapshot updated: 2026-06-14T15:56:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? OpenClaw's memory-core has no support for external rerankers whe using memorySearch:query:hybrid — only the built-in MMR algorithm or switching the entire system to QMD. QMD is local-only, so the reranker runs on the

### #74185 fix(infra): wrap provider auth resolution in timeout for status --usage --json

- bucket: ready_for_maintainer
- author: yelog
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:56:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Wraps `resolveProviderAuths()` in the existing `withTimeout` helper so auth resolution (OAuth token refresh, plugin auth hooks, secret exec resolvers) cannot hang indefinitely - Returns empty providers on auth timeout instead of blocking forever, 

### #74235 fix(googlechat): preserve thread reply target through delivery

- bucket: ready_for_maintainer
- author: jai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, size: XL, extensions: minimax, proof: supplied, proof: sufficient, extensions: google, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T15:57:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Google Chat replies could leave the inbound Chat thread and appear as new top-level messages. - **Why it matters:** delayed or tool-driven assistant replies break group-thread UX when they detach from the conversation the user spoke i

### #74252 fix(logs): only report rotation when the log file actually shrank

- bucket: ready_for_maintainer
- author: BSG2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T15:57:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **PR title:** `fix(logs): only report rotation when the log file actually shrank` --- ## Summary - **Problem:** `openclaw logs --follow` prints `Log cursor reset (file rotated).` to stderr whenever the gateway log grows faster than `--max-bytes` between polls,

### #74369 fix(control-ui): preserve numeric chat input in composer

- bucket: ready_for_maintainer
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:59:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add autocomplete/autocorrect/autocapitalize/spellcheck/inputmode attributes to chat textarea to prevent browser/OS numeric auto-formatting. Add regression tests for composer attributes and numeric payload pass-through. ## Summary **Problem:** Control UI chat c

### #74444 feat(openai): add queryTask/documentTask config for Jina v5 task-specific embeddings

- bucket: ready_for_maintainer
- author: seoseo-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, agents, size: S, extensions: openai, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:02:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add typed `queryTask` and `documentTask` configuration under `agents.*.memorySearch` for Jina v5 task-specific embeddings through the OpenAI-compatible embedding provider. Closes #74419 ## Background Jina Embeddings v5 supports task-specific LoRA ad

### #89577 fix(canvas): use crypto randomness for A2UI action IDs

- bucket: ready_for_maintainer
- author: Lucenx9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:05:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replaces the Canvas A2UI action id `Math.random()` fallback with Web Crypto randomness. - Keeps `crypto.randomUUID()` as the preferred path when available. - Falls back to a 16-byte `crypto.getRandomValues()` hex suffix when `randomUUID()` is unav

