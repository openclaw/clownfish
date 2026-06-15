---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-093
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
  - "#92445"
  - "#69022"
  - "#90259"
  - "#92028"
  - "#92359"
  - "#91597"
  - "#91656"
  - "#55901"
  - "#59695"
  - "#91955"
  - "#93384"
  - "#66150"
  - "#73649"
  - "#74131"
  - "#74136"
  - "#74185"
  - "#74252"
  - "#74320"
  - "#74369"
  - "#74444"
  - "#75157"
  - "#77736"
  - "#80947"
  - "#83933"
  - "#84792"
cluster_refs:
  - "#92445"
  - "#69022"
  - "#90259"
  - "#92028"
  - "#92359"
  - "#91597"
  - "#91656"
  - "#55901"
  - "#59695"
  - "#91955"
  - "#93384"
  - "#66150"
  - "#73649"
  - "#74131"
  - "#74136"
  - "#74185"
  - "#74252"
  - "#74320"
  - "#74369"
  - "#74444"
  - "#75157"
  - "#77736"
  - "#80947"
  - "#83933"
  - "#84792"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.806Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 93

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92445 fix(feishu): redact audit-sensitive contact info

- bucket: ready_for_maintainer
- author: winger007
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:29:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Redact Feishu audit-sensitive contact identifiers at outbound message boundaries before sending text, cards, edited cards, and streaming Card Kit updates. - Cover email addresses, mainland China mobile numbers, 95xxx service numbers, and 400/800 h

### #69022 Fix: apply humanDelay between Telegram streamed block replies (Resolves #68945)

- bucket: ready_for_maintainer
- author: Mlightsnow
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, clawsweeper, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T17:32:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #68945. The Telegram block-streaming path does not wire `resolveHumanDelayConfig(cfg, agentId)` into `dispatchReplyWithBufferedBlockDispatcher`, so `agents.defaults.humanDelay` / per-agent `humanDelay` overrides have no effect on Telegram block replies.

### #90259 Add reset family carryover summaries

- bucket: ready_for_maintainer
- author: simplyclever914
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, channel: whatsapp-web, app: web-ui, gateway, cli, scripts, commands, agents, size: XL, extensions: qa-lab, extensions: memory-wiki, plugin: bonjour, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:32:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Behavior or issue addressed Depends on #90239. When a session has been reset/rotated, the active transcript can be clean while the previous reset archive still contains the latest compaction summary. The next embedded-agent prompt therefore starts without t

### #92028 feat(skills): report malformed SKILL.md files via `skills lint`

- bucket: ready_for_maintainer
- author: hansraj316
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: L, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:33:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Malformed SKILL.md directories were silently dropped. `loadSkillsFromDirSafe` now returns skipped dirs with a discriminated reason (parse-error, or missing-required-field naming the field); `status.ts` threads it through, and a new `openclaw skills

### #92359 fix(config): allow model.compat.sendSessionAffinityHeaders in ModelCompatSchema

- bucket: ready_for_maintainer
- author: jiewent1-cmyk
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:34:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # fix(config): allow model.compat.sendSessionAffinityHeaders in ModelCompatSchema > Suggested PR title: **fix(config): allow model.compat.sendSessionAffinityHeaders in ModelCompatSchema** > Branch: `fix/modelcompat-allow-sendSessionAffinityHeaders` (one commit

### #91597 [AI] fix(plugins): recognize document-extractors as a capability kind…

- bucket: ready_for_maintainer
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:35:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `PluginCapabilityKind` in `inspect-shape.ts` did not include `"document-extractors"`, so plugins declaring `contracts.documentExtractors` (like the bundled `document-extract` plugin) showed `capabilityCount: 0`, `tools: []`, and `shape: "non-capabil

### #91656 test(cron): expand parseAbsoluteTimeMs test coverage to 39 cases

- bucket: ready_for_maintainer
- author: SpecialLeon
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:36:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `parseAbsoluteTimeMs` in `src/cron/parse.ts` had minimal test coverage (only 2 test cases), leaving edge cases untested for ISO 8601 timezone parsing variants that cron schedules commonly use. - **What changed:** Expanded test suite f

### #55901 feat(irc): support markdown messages via draft/multiline

- bucket: ready_for_maintainer
- author: grepsuzette
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: irc, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T17:46:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds support for sending markdown-formatted messages over IRC using the `draft/multiline` CAP extension. This preserves newlines in bot responses, allowing IRC clients to properly render markdown content. ## Motivation OpenClaw bots typically genera

### #59695 Replace SHA-1 with SHA-256 for config fingerprinting

- bucket: ready_for_maintainer
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:46:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace `crypto.createHash("sha1")` with `crypto.createHash("sha256")` in two files: - `src/agents/agent-bundle-mcp-runtime.ts` - MCP server catalog fingerprinting - `src/media-understanding/apply.test.ts` - temp media file content hashing in test

### #91955 fix(agents): keep BOOTSTRAP.md pending on preseeded managed workspaces [AI-assisted]

- bucket: ready_for_maintainer
- author: luyao618
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:47:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > 🤖 AI-assisted (built with Hermes orchestration; reviewer = 麻酱, code review = Codex CLI). Test level: fully tested. Prompt summary available on request. ## Summary - Problem: On a managed / GitOps / operator-style deployment (e.g. Kubernetes with a PVC-backe

### #93384 [Bug]: /status usage should follow session-selected model after /model switch

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:47:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes `/status` so model/auth/usage/context lookup follows the session-selected model after `/model` pins a session to another provider. - Keeps the configured default visible, so reviewers can still see that new or unpinned sessions use `deepseek

### #66150 fix: drop stale operational alerts from transcript mirror

- bucket: ready_for_maintainer
- author: ismael-81
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:48:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - filter backup/git operational alert text out of `resolveMirroredTranscriptText` - add regression coverage so stale backup/conflict alerts do not pollute session transcripts - keep normal delivery-mirror text unchanged, including Spanish error text

### #73649 fix(issue-template): split logs and screenshots into separate fields

- bucket: ready_for_maintainer
- author: d1rshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T17:50:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Splits the **Logs, screenshots, and evidence** field in the bug report issue template into two separate fields: - **Logs** - retains `render: shell` for syntax highlighting - **Screenshots, recordings, and evidence** - a plain textarea that accepts ima

### #74131 fix(agents): harden subagent lifecycle calls against transient gateway readiness failures

- bucket: ready_for_maintainer
- author: xiaobao-k8s
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, extensions: qa-lab, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:51:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a bounded `sessions.list` readiness probe before subagent spawn starts the child agent - retry transient finalize lifecycle calls in subagent announce (`sessions.patch` / `sessions.delete`) - retry transient sweep cleanup `sessions.delete` cal

### #74136 fix(agents): accept multi-line ANNOUNCE_SKIP on final line

- bucket: ready_for_maintainer
- author: yelog
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:51:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix `isAnnounceSkip()` to also accept multi-line sub-agent output where `ANNOUNCE_SKIP` appears as the final line after a newline, not just as the sole content. - Add focused unit tests for `sessions-send-tokens.ts` covering exact, whitespace-padd

### #74185 fix(infra): wrap provider auth resolution in timeout for status --usage --json

- bucket: ready_for_maintainer
- author: yelog
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:51:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Wraps `resolveProviderAuths()` in the existing `withTimeout` helper so auth resolution (OAuth token refresh, plugin auth hooks, secret exec resolvers) cannot hang indefinitely - Returns empty providers on auth timeout instead of blocking forever,

### #74252 fix(logs): only report rotation when the log file actually shrank

- bucket: ready_for_maintainer
- author: BSG2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:51:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **PR title:** `fix(logs): only report rotation when the log file actually shrank` --- ## Summary - **Problem:** `openclaw logs --follow` prints `Log cursor reset (file rotated).` to stderr whenever the gateway log grows faster than `--max-bytes` between polls,

### #74320 fix(heartbeat): keep parsing tasks when an unrecognized indented field appears

- bucket: ready_for_maintainer
- author: BSG2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:52:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `parseHeartbeatTasks` in `src/auto-reply/heartbeat.ts` silently drops every heartbeat task that follows a task entry containing an unrecognized indented field (e.g. `notes:`, `tags:`, `model:`, or just a typo). Two end-of-`tasks:`-block guards compa

### #74369 fix(control-ui): preserve numeric chat input in composer

- bucket: ready_for_maintainer
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:52:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add autocomplete/autocorrect/autocapitalize/spellcheck/inputmode attributes to chat textarea to prevent browser/OS numeric auto-formatting. Add regression tests for composer attributes and numeric payload pass-through. ## Summary **Problem:** Control UI chat c

### #74444 feat(openai): add queryTask/documentTask config for Jina v5 task-specific embeddings

- bucket: ready_for_maintainer
- author: seoseo-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, agents, size: S, extensions: openai, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:52:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add typed `queryTask` and `documentTask` configuration under `agents.*.memorySearch` for Jina v5 task-specific embeddings through the OpenAI-compatible embedding provider. Closes #74419 ## Background Jina Embeddings v5 supports task-specific LoRA ad

### #75157 fix(ui): use catalog display names for agent models

- bucket: ready_for_maintainer
- author: liaoandi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:53:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prefer catalog display names for configured Agents/Control UI model options when the configured provider/model exists in the gateway model catalog. - Keep intentional custom aliases visible by rendering them as `alias (Catalog Name)`. - Avoid dupl

### #77736 [codex] Fix explicit custom web_search provider routing

- bucket: ready_for_maintainer
- author: goldmar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:54:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes `web_search` routing when `tools.web.search.provider` explicitly names a custom or installed web-search provider. The agent tool wrapper was resolving late-bound runtime metadata and then allowing that runtime-selected provider to determine wh

### #80947 fix(doctor): warn and document QMD session recall gates

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:54:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add an `openclaw doctor` warning when QMD is the active memory backend and the default agent searches `sessions`, but QMD session transcript export is not enabled. - Clarify the session transcript recall gates in memory docs: - session-memory must

### #83933 fix(cron): skip deleteAfterRun and preserve counters for manual runs (#83538)

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XL, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:54:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw cron run` (manual/debug runs) on a `deleteAfterRun` at-job deletes the job on success — consuming the one-shot and preventing its scheduled execution. Manual runs also mutate `consecutiveErrors`/`consecutiveSkipped` counters, interfering w

### #84792 Run memory flush before preflight compaction

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:55:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #84695. ## Summary - run automatic memory flush before preflight compaction in `runReplyAgent` - keep visible memory-flush errors on the same pre-run return path before the main reply - add regression coverage proving memory flush is invoked before prefl
