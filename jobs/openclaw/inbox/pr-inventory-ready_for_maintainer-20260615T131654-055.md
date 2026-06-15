---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-055
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
  - "#92996"
  - "#75100"
  - "#75157"
  - "#75213"
  - "#88901"
  - "#75293"
  - "#77736"
  - "#89800"
  - "#89806"
  - "#89818"
  - "#92243"
  - "#92185"
  - "#89855"
  - "#89864"
  - "#89882"
  - "#87487"
  - "#51822"
  - "#55901"
  - "#92899"
  - "#64316"
  - "#64546"
  - "#66150"
  - "#66174"
  - "#66478"
  - "#67432"
cluster_refs:
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
  - "#92996"
  - "#75100"
  - "#75157"
  - "#75213"
  - "#88901"
  - "#75293"
  - "#77736"
  - "#89800"
  - "#89806"
  - "#89818"
  - "#92243"
  - "#92185"
  - "#89855"
  - "#89864"
  - "#89882"
  - "#87487"
  - "#51822"
  - "#55901"
  - "#92899"
  - "#64316"
  - "#64546"
  - "#66150"
  - "#66174"
  - "#66478"
  - "#67432"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.484Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 55

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #92996 fix(cli): reject present-but-invalid --timeout on status/health fast path

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-14T16:05:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw status` and `openclaw health` have a route-first fast path (`parseStatusRouteArgs` / `parseHealthRouteArgs` in `src/cli/program/route-args.ts`) that skips full Commander startup. Its `--timeout` guard was `if (getPositiveIntFlagValue(...) 

### #75100 feat(feishu): add segment streaming mode

- bucket: ready_for_maintainer
- author: joeia26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: L, triage: blank-template, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:07:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add an opt-in Feishu streaming delivery mode that accumulates model output and flushes complete segments at pause points, without changing the existing CardKit streaming-card default. ## Motivation Feishu currently uses `channels.feishu.streaming` f

### #75157 fix(ui): use catalog display names for agent models

- bucket: ready_for_maintainer
- author: liaoandi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:10:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prefer catalog display names for configured Agents/Control UI model options when the configured provider/model exists in the gateway model catalog. - Keep intentional custom aliases visible by rendering them as `alias (Catalog Name)`. - Avoid dupl

### #75213 fix: Codex app-server silence timeout reliability issue

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, clawsweeper, clawsweeper:commit-finding, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:13:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one reliability issue in the new Codex app-server silence timeout: unrelated traffic on the shared app-server client can reset the silent-turn timer before the notification/request is scoped to the active turn. ## What ClawSweeper Is Fixing - 

### #88901 fix(mattermost): preserve Codex progress drafts

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:14:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #88766 ## Summary - Allow Mattermost draft tool-progress callbacks to keep running when source reply delivery is `message_tool_only`. - Preserve the existing final-reply delivery behavior; this only restores the in-flight draft preview path. - Add regres

### #75293 fix: macOS-only Parallels smoke harness regression

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, clawsweeper, clawsweeper:commit-finding, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:14:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one macOS-only Parallels smoke harness regression. The new guest script writer creates a root-owned `700` script, then the macOS lane executes it as the desktop user. ## What ClawSweeper Is Fixing - **Low: macOS update script is not readable b

### #77736 [codex] Fix explicit custom web_search provider routing

- bucket: ready_for_maintainer
- author: goldmar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:16:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes `web_search` routing when `tools.web.search.provider` explicitly names a custom or installed web-search provider. The agent tool wrapper was resolving late-bound runtime metadata and then allowing that runtime-selected provider to determine wh

### #89800 fix(agents): resolve webchat current session status

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Resolve semantic `session_status({ sessionKey: "current" })` against the full effective requester key before alias fallback. - Use the full requester key when synthesizing an unpersisted semantic-current fallback without `runSessionKey`. - Add Web

### #89806 fix(feishu): avoid axios interceptor internals

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop clearing `Lark.defaultHttpInstance.interceptors.request.handlers` at module load. - Register the Feishu User-Agent override through the public `request.use(...)` interceptor API. - Cover the import-time regression with a mocked interceptor th

### #89818 fix(providers): forward stop sequences in bundled Anthropic transports

- bucket: ready_for_maintainer
- author: masatohoshino
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, extensions: amazon-bedrock, extensions: anthropic-vertex, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:20:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Forwards `stop` sequences through the remaining **bundled Anthropic-family transports** that build their own request payload: Anthropic Vertex, Amazon Bedrock, and Amazon Bedrock Mantle. Each dropped the contractually-forwardable `stop` field (`pa

### #92243 feat(coreweave): add CoreWeave Serverless Inference model provider

- bucket: ready_for_maintainer
- author: juan-lee
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: L, proof: supplied, proof: sufficient, dependencies-changed, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:31:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? OpenClaw has no first-class support for CoreWeave Serverless Inference (formerly Weights & Biases Inference); users must hand-wire a custom OpenAI-compatible provider (base URL, auth, per-model context windows, the p

### #92185 fix(exec): preserve approved gateway output

- bucket: ready_for_maintainer
- author: llljjjwww333
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:42:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves multiline output for approved async gateway exec follow-ups instead of tailing it to the compact background-notification limit. - Keeps ordinary background `notifyOnExit` summaries on the existing compact formatter, so this does not expa

### #89855 fix(telegram): avoid duplicate dm chat window context

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Telegram private DMs already route into a persistent OpenClaw session transcript, but the inbound prompt also injected the recent Telegram `chat_window` context on every plain DM turn. That duplicated prior messages inside each new user message and 

### #89864 fix(mentions): support single-char CJK names in mention pattern matching

- bucket: ready_for_maintainer
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(mentions): support single-char CJK names in mention pattern matching ## Summary **Problem:** The `\b` word boundary assertion in JavaScript regex does not recognise CJK characters as word characters. When an agent identity name is a single CJK character (e

### #89882 fix(plugins): rebuild missing installs on policy refresh

- bucket: ready_for_maintainer
- author: baskduf
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #89606. `policy-changed` registry refresh can take a persisted fast path that only updates enablement. That is safe only when the persisted `plugins[]` view is complete. If persisted install records still point at recoverable path/npm plugins 

### #87487 fix(cli): clarify mcp list registry scope

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: XS, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:01:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #65209 ## Summary - label human-readable `openclaw mcp list` output as OpenClaw-managed `mcp.servers` config - add a visible note that `openclaw mcp list` does not include mcporter servers from `config/mcporter.json` - clarify the matching MCP CLI docs -

### #51822 cron: reject webhook URLs with embedded credentials

- bucket: ready_for_maintainer
- author: RogueL90
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:04:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Cron webhook URLs could include embedded credentials (e.g. https://user:pass@example.com/hook), which can leak secrets in logs, config, or URLs. - Why it matters: URL-embedded credentials are d

### #55901 feat(irc): support markdown messages via draft/multiline

- bucket: ready_for_maintainer
- author: grepsuzette
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: irc, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T17:05:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds support for sending markdown-formatted messages over IRC using the `draft/multiline` CAP extension. This preserves newlines in bot responses, allowing IRC clients to properly render markdown content. ## Motivation OpenClaw bots typically genera

### #92899 fix compaction timeout partial progress

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:06:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve completed chunk summaries when a later compaction chunk times out, so timeout recovery can reuse partial progress instead of falling back to a generic “summary unavailable” note and restarting from chunk 1 on the next attempt. - Preserve 

### #64316 fix(agents): release bundle MCP runtime on mid-run session reset

- bucket: ready_for_maintainer
- author: xxxxxmax
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:09:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `resetReplyRunSession` rotated the active `sessionId` after auto-compaction failure, context overflow, or role-ordering conflicts, but it never released the previous session id's entry from the bundle MCP runtime cache. - Why it matters: 

### #64546 fix: Mattermost interaction token forgeable via hardcoded HMAC...

- bucket: ready_for_maintainer
- author: coygeek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:09:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Fix Summary The `deriveInteractionSecret` function in the Mattermost extension uses a hardcoded public string as the HMAC key, making the interaction signing secret fully reproducible by anyone who knows the bot token. An attacker who obtains the bot token 

### #66150 fix: drop stale operational alerts from transcript mirror

- bucket: ready_for_maintainer
- author: ismael-81
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:09:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - filter backup/git operational alert text out of `resolveMirroredTranscriptText` - add regression coverage so stale backup/conflict alerts do not pollute session transcripts - keep normal delivery-mirror text unchanged, including Spanish error text

### #66174 Fix session transcript path canonicalization on save

- bucket: ready_for_maintainer
- author: rocklobster-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:09:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # OpenClaw session-store path fix, 2026-04-12 ## Status Applied live to installed runtime. Also ported carefully into a fresh source clone of the matching `v2026.4.11` upstream tag, but not yet merged upstream or installed from that source tree. ## Source clon

### #66478 fix(feishu): normalize unicode emojis to Feishu emoji type strings for reactions API (#66406)

- bucket: ready_for_maintainer
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, clawsweeper, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:10:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Feishu reactions API returns error `231001` ("reaction type is invalid") because the agent sends raw unicode emojis (e.g. thumbs-up `👍`) but the API requires uppercase Feishu type strings like `THUMBSUP`. ## Root Cause In `extensions/feishu/src/cha

### #67432 fix(ui): add aria-label to pinned message Unpin button

- bucket: ready_for_maintainer
- author: akinshaywai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:10:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The icon-only Unpin button in the pinned messages section had a `title="Unpin"` tooltip but no `aria-label`, so screen readers announced it as plain "button" with no context. **Fix:** Add `aria-label="Unpin"` to match the existing `title`. ## Files 

