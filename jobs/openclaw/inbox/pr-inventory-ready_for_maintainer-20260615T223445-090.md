---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-090
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
  - "#91277"
  - "#93314"
  - "#93324"
  - "#91520"
  - "#93303"
  - "#91559"
  - "#91640"
  - "#91807"
  - "#91828"
  - "#40874"
  - "#59694"
  - "#64782"
  - "#67432"
  - "#69059"
  - "#69707"
  - "#93330"
  - "#70002"
  - "#93338"
  - "#92411"
  - "#93340"
  - "#72092"
  - "#72314"
  - "#72557"
  - "#93206"
  - "#86577"
cluster_refs:
  - "#91277"
  - "#93314"
  - "#93324"
  - "#91520"
  - "#93303"
  - "#91559"
  - "#91640"
  - "#91807"
  - "#91828"
  - "#40874"
  - "#59694"
  - "#64782"
  - "#67432"
  - "#69059"
  - "#69707"
  - "#93330"
  - "#70002"
  - "#93338"
  - "#92411"
  - "#93340"
  - "#72092"
  - "#72314"
  - "#72557"
  - "#93206"
  - "#86577"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.805Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 90

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91277 docs(ios): clarify official app availability (Fixes #90835)

- bucket: ready_for_maintainer
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: ios, size: XS, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T14:50:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90835. The iOS platform page already says the app is an internal preview, but it does not answer the practical question users are asking: whether there is an official public App Store listing and how they are supposed to get the app. This doc

### #93314 fix(skills): preserve ClawHub origin provenance on readback

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:56:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary PR #93283 ("Persist ClawHub skill install provenance") started writing install provenance — `sourceUrl`, `artifact` (`kind`/`sha256`/`integrity`), and `skillFile` (`path`/`sha256`) — into each skill's `.clawhub/origin.json`. But the shared origin re

### #93324 fix(cli): accept --no-color after subcommands

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:57:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Root `--no-color` is accepted before a subcommand, but non-help subcommands can reject it when callers append it after the subcommand, for example `openclaw doctor --no-color ...` or `openclaw doctor --lint --json --no-color`. - This matters for a

### #91520 fix(control-ui): show agents as a visible list instead of a dropdown

- bucket: ready_for_maintainer
- author: ZengWen-DT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:57:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Agents page hid every agent behind a single `<select>`, so switching agents meant opening a dropdown every time — high friction once you have many agents (the core complaint in #57067). This PR renders a **visible agent navigation list** on desk

### #93303 fix(whatsapp): bound stalled read-receipt socket operations

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:58:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Bound the WhatsApp inbound read-receipt socket call (`readMessages`) with the same `withWhatsAppSocketOperationTimeout` wrapper introduced for outbound `sendMessage`/`sendPresenceUpdate` in #93094. - A stalled WhatsApp Web socket could otherwise l

### #91559 fix(agents): clean Gemini tool schemas by model id

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:01:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #91542 by applying the existing Gemini tool-schema cleanup when an OpenAI-compatible provider uses a Gemini model id, not only when the provider id itself is `google` or `gemini`. - Includes `modelCompat.toolSchemaProfile` in both the Gemini

### #91640 docs(compaction): warn that compaction.model breaks native compaction on claude-cli/OAuth

- bucket: ready_for_maintainer
- author: z1pp090
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:04:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Compaction docs present `agents.defaults.compaction.model` as a safe "use a more capable model for summaries" knob. On CLI backends that own native compaction (e.g. `claude-cli`), it is a footgun: the override cancels the backend deferral and fo

### #91807 feat(cli): support --file for image generate command

- bucket: ready_for_maintainer
- author: wangmiao0668000666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T15:08:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The `image generate` CLI command was missing the `--file` option that `image edit` already supported. This PR adds `--file` support to achieve parity, forwarding input files to the image generation runtime. Fixes #91734. ## Changes - `src/cli/capabi

### #91828 Harden memory wiki bridge imports

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: memory-wiki, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:08:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add bounded retry handling for transient `FsSafeError: path-mismatch` while writing imported memory-wiki source pages. - Coalesce concurrent bridge imported-source syncs for the same vault/config through index refresh while keying on bridge artifa

### #40874 feat(ios): Liquid Glass UI, Action Button & Dynamic Island

- bucket: ready_for_maintainer
- author: eulicesl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: L, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T15:31:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: N/A — this PR adds iOS 26 user-facing capabilities rather than fixing a regression. - Why it matters: OpenClaw’s iOS app gains modern platform-native UX for glass styling, quick voice entry via Action Button/App Intent, and Dynamic Island

### #59694 Add prototype pollution guard to resolveConfigPath

- bucket: ready_for_maintainer
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:34:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveConfigPath` in `src/shared/config-eval.ts` traverses config objects by dot-separated path strings (e.g. `"foo.bar.baz"`), but does not check whether any path segment is a dangerous prototype key (`__proto__`, `prototype`, or `constructor`).

### #64782 fix(gateway): restore codex-cli chat history imports

- bucket: ready_for_maintainer
- author: byliu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:36:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `chat.history` only backfilled external CLI transcript history for `claude-cli`, so Codex-backed sessions could look empty after refresh when the local transcript was missing. - Why it matters: users could lose visible history in Gateway/

### #67432 fix(ui): add aria-label to pinned message Unpin button

- bucket: ready_for_maintainer
- author: akinshaywai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:37:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The icon-only Unpin button in the pinned messages section had a `title="Unpin"` tooltip but no `aria-label`, so screen readers announced it as plain "button" with no context. **Fix:** Add `aria-label="Unpin"` to match the existing `title`. ## Files

### #69059 fix: retry sqlite-vec load without .dll suffix on Windows

- bucket: ready_for_maintainer
- author: JustInCache
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:40:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #68892. On Windows, `node:sqlite`'s `DatabaseSync.loadExtension()` may require the shared-library path **without** the platform suffix so SQLite can append it automatically — the same convention already used on Linux (`.so`) and macOS (`.dylib

### #69707 fix(memory-lancedb): stop forwarding embedding dimensions upstream

- bucket: ready_for_maintainer
- author: badgerbees
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-lancedb, size: L, triage: refactor-only, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T15:42:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `memory-lancedb` forwarded `dimensions` to every direct OpenAI-compatible embeddings request, which breaks vLLM/NVIDIA-style providers that reject that field. - Why it matters: memory recall/search can fail at embed time for otherwise com

### #93330 fix(whatsapp): remove dead Math.max in watchdog app-silence formula

- bucket: ready_for_maintainer
- author: rushindrasinha
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:42:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `WhatsAppConnectionController` computes the app-silence timeout at construction: ```typescript // connection-controller.ts:366 (before fix) this.appSilenceTimeoutMs = Math.max(params.messageTimeoutMs, params.messageTimeoutMs * 4); ``` `messageTimeou

### #70002 ci: skip docs sync & translate-trigger workflows in forks

- bucket: ready_for_maintainer
- author: xudaiyanzi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: risky-infra, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T15:42:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Two upstream-only workflows (`docs-sync-publish.yml`, `docs-translate-trigger-release.yml`) fail with `Authentication failed for 'https://github.com/openclaw/docs.git/'` on every push to `main` in any fork, because they rely on the `O

### #93338 #89216: fix(routing): treat missing accountId in binding match as wildcard

- bucket: ready_for_maintainer
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:43:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix Matrix per-room agent routing bindings being silently ignored when the binding match does not specify an explicit `accountId`. ## Linked context Closes #89216 - Matrix bindings configured without `accountId` in the match were scoped only to the

### #92411 fix(tools): surface empty availability group diagnostics via onHiddenDiagnostic callback

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:44:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Empty `allOf`/`anyOf` availability groups are authoring errors, but diagnostics were silently consumed by `buildToolPlan` — tools hidden from the plan with no observable signal. - Adds `onHiddenDiagnostic` callback to `BuildToolPlanOptions`, wires

### #93340 fix(channels): use resolved accounts for status snapshots

- bucket: ready_for_maintainer
- author: khoek
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:44:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes channel status snapshots for plugins, like SMS, whose safe `inspectAccount()` output is not the same shape as their resolved runtime account. - This matters now because a real Twilio SMS account was configured and the gateway registered its

### #72092 fix(media): allow aws-sdk auth mode for image and audio/video paths

- bucket: ready_for_maintainer
- author: truffle-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:46:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The chat path's `prepareSimpleCompletionModel` exposes an `allowMissingApiKeyModes` escape hatch so providers whose `auth.mode === "aws-sdk"` (notably `amazon-bedrock`) can resolve credentials at call time via the AWS SDK chain instead of a static `apiKey`. Th

### #72314 fix(auto-reply): dedupe idless inbound retries

- bucket: ready_for_maintainer
- author: mjamiv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:47:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a content/timestamp fallback inbound dedupe key when providers do not supply a stable message id - keep normal provider-message-id dedupe unchanged - cover idless retry dedupe and same-body/different-timestamp non-collapse ## Why Some channel

### #72557 feat: PluginStatusProvider plugin API for TUI footer status (resolves #64086)

- bucket: ready_for_maintainer
- author: dodge1218
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:47:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Resolves #64086. Coordinates with #53774 (broader footer-customization tracker). ## What this PR does Adds a typed `PluginStatusProvider` interface and `registerStatusProvider` method to `OpenClawPluginApi`, following the same registration shape as `registerTo

### #93206 fix(minimax): wrap simple completion requests

- bucket: ready_for_maintainer
- author: extrasmall0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: minimax, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:48:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes the MiniMax direct `infer model run` path so it uses the same MiniMax thinking payload wrapper as the embedded-agent stream path. - Adds the MiniMax thinking wrapper to the existing MiniMax provider hook bundle for simple completions. - K

### #86577 fix(discord): persist inbound replay recovery

- bucket: ready_for_maintainer
- author: seanbc618-tech
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T15:50:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - persist Discord inbound replay claims per account so retryable worker failures can recover without dropping the inbound event - wire the Discord provider state dir into the replay guard and keep queue commit/release paths on the same replay namesp
