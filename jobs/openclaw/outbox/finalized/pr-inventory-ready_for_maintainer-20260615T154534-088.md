---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-088
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
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.211Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 88

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Cron webhook URLs could include embedded credentials (e.g. https://<credentials>@example.com/hook), which can leak secrets in logs, config, or URLs. - Why it matters: URL-embedded credentials are d

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

