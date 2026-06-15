---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-027
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
  - "#59517"
  - "#75138"
  - "#75139"
  - "#75141"
  - "#75951"
  - "#76034"
  - "#76141"
  - "#76175"
  - "#76230"
  - "#76234"
  - "#76341"
  - "#76364"
  - "#76473"
  - "#76479"
  - "#76590"
  - "#76617"
  - "#76618"
  - "#76631"
  - "#76709"
  - "#76717"
  - "#77996"
  - "#78020"
  - "#78026"
  - "#78033"
  - "#78034"
cluster_refs:
  - "#59517"
  - "#75138"
  - "#75139"
  - "#75141"
  - "#75951"
  - "#76034"
  - "#76141"
  - "#76175"
  - "#76230"
  - "#76234"
  - "#76341"
  - "#76364"
  - "#76473"
  - "#76479"
  - "#76590"
  - "#76617"
  - "#76618"
  - "#76631"
  - "#76709"
  - "#76717"
  - "#77996"
  - "#78020"
  - "#78026"
  - "#78033"
  - "#78034"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.791Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 27

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #59517 fix: drop replayed tool-call stubs from malformed assistant history

- bucket: needs_proof
- author: xDarkicex
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:59:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: provider-switched or malformed assistant transcript entries can replay literal `[TOOL CALL STUB]` placeholder text back into context. - Why it matters: those stub-only turns are dead transcript artifacts, not meaningful memory, and they c

### #75138 fix(daemon): load <stateDir>/gateway.env into runtime env

- bucket: needs_proof
- author: keane-751892
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:59:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `loadGlobalRuntimeDotEnvFiles` was reading `<stateDir>/.env` and (as a fallback) `~/.config/openclaw/gateway.env`, but never `<stateDir>/gateway.env`. That left a real-world gap: many users keep API keys and `GATEWAY_AUTH_TOKEN` in `~/.openclaw/gate

### #75139 fix(memory-core): drop dreaming theme echoes from promotion candidates

- bucket: needs_proof
- author: keane-751892
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:59:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Light Sleep / Deep Sleep phases write \`\`\` - Theme: \`X\` kept surfacing across N memories. \`\`\` into daily notes. The next dreaming cycle re-ingests the first line as a fresh candidate before the indented \`status: staged\` and \`recalls: 0\` r

### #75141 fix(gateway): silence mcp loopback conflict warn for typed unions

- bucket: needs_proof
- author: keane-751892
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:59:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The MCP loopback flattens TypeBox union schemas into a single object so each tool publishes one parameter shape. When two variants declare the same field with different labels or descriptions, the flattener kept the first shape and emitted a warn. W

### #75951 fix(memory-core): add actionable remediation hints for memory search embedding errors

- bucket: needs_proof
- author: QihongRuan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T18:59:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fresh port of #55684 onto current `main` (the source branch was 16k commits behind and unmergeable). Adds actionable remediation hints when `memory_search` or `openclaw memory status` surfaces an embedding-provider failure, so leaked-key, quota, and

### #76034 feat(config-ui): add basic/advanced field split and doc-link affordance

- bucket: needs_proof
- author: symonbaikov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:00:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ● - [x] Add FIELD_ADVANCED set in schema.hints.ts to mark technical config fields (auth cooldowns, gateway infra knobs, diagnostics subsections, etc.) as advanced, so the config form can hide them by default - [x] Add docLink field to ConfigUiHint type for fut

### #76141 fix(tui): expose verbose full mode [AI-assisted]

- bucket: needs_proof
- author: bdjben
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:00:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `full` to TUI `/verbose` completions and command description - update `/verbose` usage/help text to show `on|full|off` - cover `/verbose full` in command handler tests ## Tests - `node scripts/run-vitest.mjs run --config test/vitest/vitest.tui

### #76175 feat(whatsapp): add replyToOfflineMessages config to process missed messages after reconnect

- bucket: needs_proof
- author: rafaelmariano-glitch
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:00:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Messages received during WhatsApp disconnects are **silently lost**. When the gateway reconnects, offline messages arrive with `upsert.type === "append"` (history sync) and are **skipped** by default. This causes: - DM messages lost after reconnect

### #76230 perf: optimize agent tool result middleware runtime check

- bucket: needs_proof
- author: arcanis2k3
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:00:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces an $O(N \times M)$ array lookup with an $O(N + M)$ Set-based lookup when filtering runtimes against declared middleware in the plugin registry. This improves efficiency during plugin registration. ## Summary - Problem: Suboptimal O(N*M) data structure

### #76234 feat: pass scopeEnvelope to before_prompt_build hooks

- bucket: needs_proof
- author: NikolaFC
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, agents, size: M, triage: dirty-candidate, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:00:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a typed `PromptBuildScopeEnvelope` session metadata object - persist/patch `scopeEnvelope` through session state and gateway session patch APIs - pass `scopeEnvelope` into `before_prompt_build` so prompt-build hooks can receive structured work

### #76341 fix(slack): make tool-progress draft preview ephemeral; preserve agent text segments

- bucket: needs_proof
- author: ShadowWalker2014
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, scripts, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:01:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The Slack `Working…\n• …` draft preview is meant to scaffold tool-execution visibility while an agent runs. Today, those scaffolding messages linger as separate Slack messages every time the agent emits a new assistant-message segment mid-turn, or f

### #76364 fix(restart): skip unavailable lsof in initial scan

- bucket: needs_proof
- author: neilofneils404
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:01:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat ENOENT/EACCES/EPERM from the initial Unix lsof stale-PID scan as expected lsof-unavailable states - Keep warnings for unexpected spawn errors and nonzero lsof statuses - Share the permanent-unavailable classification with the later polling p

### #76473 Warn on high-frequency cron schedules (<30m)

- bucket: needs_proof
- author: LindalyX-Lee
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:01:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extract a shared high-frequency `every` warning helper - warn on high-frequency `every` schedules in CLI `cron add` and `cron edit` - warn on high-frequency `every` schedules in Gateway `cron.add` and `cron.update` - align the Gateway warning call

### #76479 docs: add macOS setup notes and common setup troubleshooting

- bucket: needs_proof
- author: Sujabaral
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: low-signal-docs, triage: docs-discoverability, triage: refactor-only, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:01:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Added macOS setup notes and a common troubleshooting section to improve onboarding for new contributors. ## Changes - Added macOS setup instructions (Xcode tools, Node, Homebrew) - Added common setup errors section - Improved clarity for new develop

### #76590 fix(sandbox): bump config hash when buildSandboxCreateArgs flags change

- bucket: needs_proof
- author: aaajiao
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:01:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a `SANDBOX_DOCKER_CREATE_ARGS_EPOCH` constant and a `createArgsEpoch` field to both `SandboxHashInput` and `SandboxBrowserHashInput`, so the existing config-hash recreate path also fires when `buildSandboxCreateArgs` adds, removes, or changes c

### #76617 fix(zalouser): split messages at line boundaries instead of mid-word

- bucket: needs_proof
- author: vinhnguyenthanhdn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalouser, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:02:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## TL;DR Long bot responses were split mid-word because the default chunk mode cut at exactly 2000 characters with no regard for word or sentence boundaries. --- ## Problem `DEFAULT_TEXT_CHUNK_MODE = "length"` cuts the outgoing message at exactly the 2000-char

### #76618 fix(comfy): match Comfy Cloud API completion status values

- bucket: needs_proof
- author: 547895019
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:02:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Comfy Cloud API returns `"success"` for completed workflows, but OpenClaw only checked for `"completed"`. This caused workflows that succeeded on Comfy Cloud to time out after 300s in OpenClaw. Additionally, Comfy Cloud uses `"error"` as a terminal

### #76631 docs(prometheus): warn that plugins.allow is strict-mode

- bucket: needs_proof
- author: RayWoo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:02:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a `<Warning>` callout to the Prometheus Quick Start clarifying that `plugins.allow` is **strict-mode** — when set, only listed plugins are eligible to load. The current Quick Start example shows `allow: ["diagnostics-prometheus"]` without warni

### #76709 fix(matrix): add async shared-client stop helpers awaiting final persist

- bucket: needs_proof
- author: pridelife4evr420
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: matrix, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:02:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: The synchronous `stopSharedClient`, `stopSharedClientForAccount`, and `stopSharedClientInstance` helpers in `extensions/matrix/src/matrix/client/shared.ts` kick off the final crypto/sync persist via `MatrixClient.stop()` but return before

### #76717 feat(telegram): add acknowledgement sticker support

- bucket: needs_proof
- author: okzapradhana
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, agents, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:02:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Telegram does not support streaming text, so users get no immediate interactive feedback while OpenClaw generates a response. - Why it matters: Ack reactions help, but stickers are more visible and expressive for Telegram conversations. -

### #77996 fix(control-ui): show archived transcripts and images after reset

- bucket: needs_proof
- author: Rene0422
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XL, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:04:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #77819. After a session reset, the prior `.jsonl.reset.<ts>` and `.jsonl.deleted.<ts>` transcripts persisted on disk but were unreachable from the Control UI, so the conversation and its image attachments looked deleted even though the data wa

### #78020 Fix Telegram Pinching progress previews

- bucket: needs_proof
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, scripts, agents, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:05:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - suppress Telegram progress-preview drafts that show internal tool/process status such as “Pinching...” - gate early Telegram typing to runs that originate from the same user-visible Telegram chat and are expected to produce visible output - propag

### #78026 fix(control-ui): strip <think>/<final> tags from rendered assistant text

- bucket: needs_proof
- author: Beandon13
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: mock-only-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:05:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `renderGroupedMessage` reads `message.content[].text` directly via `normalizeMessage`, so the streaming bubble and any non-streaming history message can render raw `<think>` / `<final>` scaffolding the model emitted as text. - Run the assembled as

### #78033 fix(feishu): serialize OpenClaw messages into Feishu v3 send payload

- bucket: needs_proof
- author: bradbox2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:05:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a source-level Feishu serializer for OpenClaw outbound envelopes that contain `payloads`, `to`, and `channel`. - Route Feishu `send` message actions with `payloads` through the serializer before calling the Feishu create-message API. - Add moc

### #78034 fix(control-ui): don't hard-deny local attachments before bootstrap roots load

- bucket: needs_proof
- author: Beandon13
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:06:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip the client-side `localMediaPreviewRoots` gate while roots are still empty (bootstrap config not yet loaded), so local `MEDIA:` attachments fall through to the authoritative `assistant-media?meta=1` server check instead of being permanently sh
