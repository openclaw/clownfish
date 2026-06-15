---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-077
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
  - "#93088"
  - "#86279"
  - "#71400"
  - "#87800"
  - "#87861"
  - "#87872"
  - "#88886"
  - "#87891"
  - "#87923"
  - "#87986"
  - "#88048"
  - "#88052"
  - "#88061"
  - "#88062"
  - "#88085"
  - "#88503"
  - "#88098"
  - "#88150"
  - "#88203"
  - "#88206"
  - "#88301"
  - "#88323"
  - "#88437"
  - "#88400"
  - "#88401"
cluster_refs:
  - "#93088"
  - "#86279"
  - "#71400"
  - "#87800"
  - "#87861"
  - "#87872"
  - "#88886"
  - "#87891"
  - "#87923"
  - "#87986"
  - "#88048"
  - "#88052"
  - "#88061"
  - "#88062"
  - "#88085"
  - "#88503"
  - "#88098"
  - "#88150"
  - "#88203"
  - "#88206"
  - "#88301"
  - "#88323"
  - "#88437"
  - "#88400"
  - "#88401"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.802Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 77

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93088 fix(telegram): bind bot mentions to assistant identity

- bucket: ready_for_maintainer
- author: kesslerio
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, scripts, docker, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:00:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes Telegram group/topic turns where an explicit @bot-handle mention could still be interpreted as addressing someone other than the current assistant, allowing a run to execute tools and then end as `NO_REPLY`. The patch carries explicit bot ment

### #86279 fix: keep media generation success on delivery failure

- bucket: ready_for_maintainer
- author: tianxiaochannel-oss88
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:05:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix async media generation completion handling so generated media tasks stay successful when requester completion delivery fails. - Record completion delivery failure separately on the detached task and mark the terminal outcome blocked instead of

### #71400 feat(sessions): add adaptive reset mode with daily AND idle semantics

- bucket: ready_for_maintainer
- author: mantisai-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: M, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:08:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Session reset currently supports only `daily` and `idle`, and when both are configured the behavior is OR-based, which can reset an active conversation as soon as the daily boundary passes. - Why it matters: Some users want the daily roll

### #87800 fix(google-vertex): add Google Vertex AI onboarding wizard, fix ADC auth, add provider docs

- bucket: ready_for_maintainer
- author: koverholt
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, extensions: google, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T05:12:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** The `google-vertex` provider does not work end-to-end for developers using Application Default Credentials (ADC). The auth gate requires a credentials file on disk, rejecting metadata server ADC (GCE/GKE/Cloud Ru

### #87861 fix(model-usage): coerce numeric-string costs and ignore non-finite values

- bucket: ready_for_maintainer
- author: coder999999999
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:13:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `skills/model-usage/scripts/model_usage.py` only accepted cost values that were native numbers, which caused three problems: - **Numeric-string costs were silently dropped.** Payloads sometimes serialize cost as a string (e.g. `"1.75"`); `isinstance

### #87872 Fix Codex zero-cost usage accounting

- bucket: ready_for_maintainer
- author: agonza1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:13:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - assign known pricing to native Codex catalog rows instead of hardcoding zero cost for GPT-5 family models - fall back to local cost estimation when persisted Codex usage contains generated `$0` cost and configured pricing is nonzero - keep explici

### #88886 docs(agents): add recovery card handoff guidance

- bucket: ready_for_maintainer
- author: m4stanuj
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:13:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add recovery-note guidance to the compaction docs for long-running sessions. - Add a recovery-card output shape to the sub-agents docs so delegated work is easier to merge, resume, or hand off. - Call out proof, blockers, safety notes, and credent

### #87891 fix(telegram): expose spooled handler timeout config

- bucket: ready_for_maintainer
- author: khang-dogo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: XS, triage: dirty-candidate, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:14:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - expose `channels.telegram.spooledUpdateHandlerTimeoutMs` with top-level and per-account config support - pass the configured value into Telegram isolated polling sessions - document the timeout and regenerate bundled channel config metadata ## Why

### #87923 fix(thinking): keep explicit session thinkingLevel when runtime downgrades (#87740)

- bucket: ready_for_maintainer
- author: hoobnn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:14:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #87740. An explicit session `thinkingLevel` override (e.g. `high`) was permanently reset to a supported level (e.g. `off`) after every agent turn whenever the active model didn't support the stored level. Root cause: when the stored level was

### #87986 docs(skills): allow model-usage with Linux codexbar

- bucket: ready_for_maintainer
- author: shbernal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:16:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allow the bundled `model-usage` skill on Linux when `codexbar` is already installed. - Keep the existing Homebrew installer scoped to macOS so Linux users are not offered the brew path. - Update the skill docs to distinguish Linux live reads with

### #88048 feat(gateway): add opt-in WebChat OpenResponses progress event

- bucket: ready_for_maintainer
- author: Sunjae-k
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:18:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add an opt-in WebChat-only OpenResponses progress SSE event for #85702. - Keep `response.output_text.delta` reserved for real assistant text and the existing post-run fallback. - Document the new config and event shape so clients can render early

### #88052 fix(proxy): add error handler on upstream response stream

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:18:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #82442 ## Summary The debug proxy in `proxy-server.ts` subscribes to `"data"` and `"end"` on the upstream `IncomingMessage` but has no `"error"` handler. If the upstream server drops the connection mid-response, Node.js throws `ERR_UNHANDLED_ERROR` and c

### #88061 docs: fix accuracy drift across docs (config defaults, model aliases, anchors, terminology)

- bucket: ready_for_maintainer
- author: hoobnn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, channel: tlon, channel: zalouser, app: android, app: macos, gateway, channel: feishu, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, extensions: copilot
- gitcrawl snapshot updated: 2026-06-15T05:18:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Audited all of `docs/**` against the current codebase and fixed factual drift where the documentation no longer matched shipped behavior. Grouped into 8 commits by area. **Docs only — no source/runtime changes.** ### Correctness / safety - `channels

### #88062 fix(logging): avoid stalled warnings for active model calls

- bucket: ready_for_maintainer
- author: litang9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:18:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - classify silent `model_call` activity as `session.long_running` after the warning threshold instead of immediately reporting `session.stalled` - keep `session.stalled` and active-abort recovery for owned model calls once `stuckSessionAbortMs` is r

### #88085 fix(cli): guard against commander rawArgs API drift in action reparse

- bucket: ready_for_maintainer
- author: Ylsssq926
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:19:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #83893 ## Problem `reparseProgramFromActionArgs()` in `src/cli/program/action-reparse.ts` reads Commander's `rawArgs` through an unsafe cast: ```ts const rawArgs = (root as Command & { rawArgs?: string[] }).rawArgs; ``` `rawArgs` is not part of Commander

### #88503 fix(ui): preserve chat sends across reconnect

- bucket: ready_for_maintainer
- author: samzong
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, scripts, stale, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:19:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep in-flight Webchat sends tied to the current send attempt so stale pre-reconnect completions cannot remove or duplicate replayed queued messages. - Mark stopped same-scope Gateway requests as retryable, while preventing gateway-scope changes f

### #88098 feat(onboard): add --custom-context-window flag for non-interactive setup

- bucket: ready_for_maintainer
- author: ericlevine
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:19:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - `openclaw onboard --non-interactive --auth-choice custom-api-key` has no way to declare the model's context window. Custom providers always land with the conservative default (128k non-Azure, 400k Azure), even when

### #88150 fix(config): cap runtime session-store cache retention

- bucket: ready_for_maintainer
- author: yozakura-ava
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:20:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Fix: cap runtime session-store cache retention for oversized stores ## Summary This patch adds a runtime byte cap to the live session-store object and snapshot caches so oversized `sessions.json` loads do not stay resident as parsed object graphs in the gate

### #88203 fix(approvals): handle stale plugin waits

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:21:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Extend the shared approval-not-found classifier to cover the gateway waitDecision stale-id message `approval expired or not found`. - Reuse that classifier in plugin approval waits for before_tool_call, Codex app-server approvals, native hook rela

### #88206 fix(codex): coalesce in-flight dynamic tool calls

- bucket: ready_for_maintainer
- author: litang9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:21:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What changed? - Add a Codex dynamic-tool in-flight coalescer keyed by `threadId`, `turnId`, `namespace`, `tool`, and canonicalized `arguments`. - Wire the coalescer into both the main Codex app-server run path and the `/btw` side-question dynamic-to

### #88301 fix(prompt-cache): lock bootstrap warning default and surface system prompt digest drift

- bucket: ready_for_maintainer
- author: LikeDege
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: matrix, gateway, cli, scripts, commands, docker, agents, size: L, extensions: codex, proof: supplied, proof: sufficient, extensions: google, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T05:23:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? The `bootstrapPromptTruncationWarning="always"` default (PR #81918) silently doubles as the only thing keeping the system prompt digest stable across turns when bootstrap files are truncated. With `mode="once"` the w

### #88323 [codex] Dedupe generated media deliveries

- bucket: ready_for_maintainer
- author: compoodment
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:23:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add shared generated-media delivery idempotency keyed by generated artifact path. - Apply it at the durable message-send boundary, plus the message-action/final-delivery paths that can replay the same artifact. - Keep the narrow same-run final-pay

### #88437 docs: clarify blank Control UI recovery

- bucket: ready_for_maintainer
- author: Freedomziko
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:24:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Tiny docs tweak for the blank Control UI recovery section. - Adds the obvious first check: make sure the Gateway is actually reachable. - Spells out the hard-refresh shortcuts so the cache/service-worker advice is easier to act on. - AI-assisted w

### #88400 fix(config): accept overlays for bundled provider aliases

- bucket: ready_for_maintainer
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: blank-template, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:26:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allow bundled provider aliases to be configured as lightweight provider overlays without `baseUrl` or `models`. - Add the reviewer-identified bundled overlay aliases to the schema allowlist: `azure-openai-responses`, `moonshotai`, `moonshot-ai`, `

### #88401 fix(agents): safely record non-json transport errors

- bucket: ready_for_maintainer
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T05:26:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** `assignTransportErrorDetails()` used `JSON.stringify(error)` for non-`Error` transport rejections. If a provider rejected with a `BigInt` or circular object, the error handling path itself threw before the stream
