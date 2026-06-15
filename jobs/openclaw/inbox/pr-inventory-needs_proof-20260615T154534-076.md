---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-076
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
  - "#75011"
  - "#75024"
  - "#75270"
  - "#76332"
  - "#84666"
  - "#84763"
  - "#85664"
  - "#74411"
  - "#85696"
  - "#93184"
  - "#88738"
  - "#88961"
  - "#88962"
  - "#88971"
  - "#88980"
  - "#89014"
  - "#89033"
  - "#93262"
  - "#89083"
  - "#89086"
  - "#93256"
  - "#89099"
  - "#89107"
  - "#89117"
  - "#89190"
cluster_refs:
  - "#75011"
  - "#75024"
  - "#75270"
  - "#76332"
  - "#84666"
  - "#84763"
  - "#85664"
  - "#74411"
  - "#85696"
  - "#93184"
  - "#88738"
  - "#88961"
  - "#88962"
  - "#88971"
  - "#88980"
  - "#89014"
  - "#89033"
  - "#93262"
  - "#89083"
  - "#89086"
  - "#93256"
  - "#89099"
  - "#89107"
  - "#89117"
  - "#89190"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.209Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 76

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #75011 pairing.md documents that commands are dropped during the pending st…

- bucket: needs_proof
- author: Angfr95
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:47:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Problem: pairing.md documents that commands are dropped during the pending state but provides no operator guidance for recovery. Solution: add a Troubleshooting section covering commands dropped before pairing approval, pending requests not appearing, and stal

### #75024 fix(feishu): preserve threads without root_id

- bucket: needs_proof
- author: stevenchouai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:47:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve Feishu threaded reply grouping when message events omit `root_id` - Fall back to `reply_target_message_id`, `parent_id`, then `upper_message_id` as the best available root message anchor - Add coverage for the fallback order and include `

### #75270 fix(agent): prevent sticky model fallback

- bucket: needs_proof
- author: Komzpa
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XL, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:47:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - roll back temporary auto fallback model overrides after successful fallback attempts - keep session routing pointed at the selected model while still recording usage/cost for the actual fallback model used - update runner/session accounting covera

### #76332 fix: harden subagent completion announce cleanup races

- bucket: needs_proof
- author: neilofneils404
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:48:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a set of subagent completion lifecycle races that can leave completed child runs stuck behind cleanup/announce sequencing or overwrite a terminal error with a later success signal. The patch makes three related changes: - Do not block completi

### #84666 fix(diagnostic): avoid aborting queued embedded work

- bucket: needs_proof
- author: vice-magus-faolan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:48:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Diagnostic stuck-session recovery could actively abort an embedded run even when the session was still processing and had queued work remaining behind the active item. - Solution: Gate the acti

### #84763 fix(acpx): scrub provider credential env from ACP harness spawns

- bucket: needs_proof
- author: apoussaint
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: acpx, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:49:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `sessions_spawn` with `runtime:"acp"` + `agentId:"claude"` fails immediately with `AcpRuntimeError: Internal error: Invalid API key · code=ACP_TURN_FAILED`. - **Solution:** Strip provider-credential env vars from the ACP harness launc

### #85664 feat(gateway): wire read coding tool into HTTP /tools/invoke (narrow)

- bucket: needs_proof
- author: simonusa
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: M, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:50:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Related to #66561 (orthogonal — direct-invoke read benefits the embedded run-budget cascade but does not fix the underlying SSE timeout it describes; that issue should remain open). narrow first landing of the broader direct-invoke umbrella tracked in #37131. 

### #74411 feat(browser): add agent download actions

- bucket: needs_proof
- author: GRD-Chang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:50:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the agent-facing `browser` tool did not expose the managed browser download helpers even though the CLI/control API already supported `/download` and `/wait/download`. - Why it matters: agents could inspect pages and snapshots but could n

### #85696 fix(agent): use static catalog for embedded model fast path

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:50:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Closes #84783. - Lets the embedded agent runner use bundled static catalog rows during its skip-agent-discovery model-resolution fast path. - Resolves static catalog rows before provider dynamic hooks on that fast path, avoiding Moonshot runtime/p

### #93184 fix(ui): preserve live tool stream order

- bucket: needs_proof
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:50:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes live WebChat ordering when a tool event timestamp is older than the assistant stream segment that introduced that tool call. - Threads optional `toolCallId` metadata through chat stream segment types so the renderer can keep the matching too

### #88738 docs: document wacli message verification

- bucket: needs_proof
- author: shbernal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:52:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add the exact `wacli messages show --chat <jid> --id <message_id>` verification syntax to the bundled wacli skill. - Clarify that `messages show` does not accept the message ID as a positional argument. - Recommend verifying stored messages when e

### #88961 fix(agents): suppress enabled plugin tool allowlist warnings

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:52:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: <!-- hermes-auto-maintainer --> ## Summary - Treat enabled plugin ids as known when analyzing tool allowlists before plugin tools are registered. - Suppress the misleading unknown-entry warning for enabled plugin-only allowlist entries while preserving warning

### #88962 fix: complete preserveKeys implementation for session maintenance

- bucket: needs_proof
- author: AllynSheep
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:52:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem PR #81303 was closed but the preserveKeys implementation was incomplete. The ClawSweeper review identified that while the preserveKeys field was added to types and Zod schema, it was not being used by the actual maintenance callers. ## Root Cause Th

### #88971 fix(agents): suppress EmbeddedAttemptSessionTakeoverError on user-ini…

- bucket: needs_proof
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, scripts, agents, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:53:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a user presses the Stop button during agent thinking, the session fence mechanism detects session file modification and throws `EmbeddedAttemptSessionTakeoverError`. This error is injected into the conversation context, polluting the agent's ne

### #88980 fix(telegram): gate bot-authored group messages

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: M, triage: mock-only-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:53:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #88967 by adding an explicit Telegram `allowBots` policy for bot-authored group messages. - Bot-authored Telegram group `message` updates now stay dropped by default, can be accepted with `allowBots: true`, or can require an explicit bot men

### #89014 fix(feishu): preserve first streaming final card

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: mock-only-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:53:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes the Feishu streaming-card ordering bug from #89009 where a later final-shaped tool diagnostic can overwrite the first real final answer before the card is closed. - Tracks when a streaming final has claimed the active card, ignores later blo

### #89033 feat(whatsapp): agent tools for group create / add participants / invite link

- bucket: needs_proof
- author: pallaoro
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: L, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:53:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds three WhatsApp agent tools so an agent can manage groups programmatically, gated behind a new `channels.whatsapp.actions.groups` flag (default `false`): | Tool | Purpose | |------|---------| | `whatsapp_group_create` | Create a group with a subjec

### #93262 fix(plugins): start non-bundled channel plugins with no channels.* config entry (#93219)

- bucket: needs_proof
- author: rushindrasinha
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:56:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Fixes a silent startup regression where externally-installed npm channel plugins were never started at gateway startup, even when explicitly enabled via `plugins.entries.<id>.enabled = true`. ## Root Cause `resolveGatewayStartupPluginPlanFromRegistry` 

### #89083 fix(feishu): prevent later final-shaped diagnostics from overwriting streaming card answer

- bucket: needs_proof
- author: luoxiao6645
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:56:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary In Feishu with `renderMode=auto` and streaming enabled, when two `final`-shaped payloads arrive before `onIdle` closes the streaming card, the second one (e.g. a tool-error diagnostic) overwrites `streamText`. The visible card ends up showing the di

### #89086 fix(browser): preserve HTTP status in node-proxied browser errors

- bucket: needs_proof
- author: rhclaw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: refactor-only, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:57:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The node browser proxy (`runBrowserProxyCommand` in `extensions/browser/src/node-host/invoke-browser.ts`) collapsed a `>= 400` browser-route response into `new Error(<body.error>)`, **dropping the HTTP status**. - That error crosses the `node.invo

### #93256 fix(plugins): start explicitly enabled external channel plugins at gateway boot (#93219)

- bucket: needs_proof
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:57:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary After the runtime/layout migration, the gateway loaded only the bundled stock plugins and never any externally-installed npm plugin (e.g. a third-party WeChat channel plugin enabled via `plugins.entries.openclaw-weixin.enabled=true`). The channel ne

### #89099 fix(gateway): preserve pending run timeouts

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:57:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves pending hard-timeout snapshots when `waitForAgentJob()` reaches its caller timeout before the timeout grace timer fires. - Keeps existing pending-error precedence, then falls back to `getPendingAgentRunTimeout(runId)` so timeout metadata

### #89107 feat(secrets): add native OS keychain exec SecretRef resolver

- bucket: needs_proof
- author: jeslor
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:58:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this does Adds `scripts/secrets/openclaw-keychain-resolver.mjs` — a native OS keychain exec SecretRef resolver following the same pattern as the existing `openclaw-bws-resolver.mjs`. Closes #43794 ## OS compatibility | Platform | Backend | Status | |--

### #89117 Support Gemini Embedding 2 GA

- bucket: needs_proof
- author: abel-zer0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:58:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add support for the GA `gemini-embedding-2` Gemini API embedding model id - keep `gemini-embedding-2-preview` configs working by normalizing them to the GA id - allow Gemini Embedding 2 output dimensions across the documented 128-3072 range while 

### #89190 feat(xai): add grok-composer-2.5-fast model

- bucket: needs_proof
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, extensions: xai, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:00:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `grok-composer-2.5-fast` to xAI model catalog in `extensions/xai/model-definitions.ts` - Adds `grok-composer` prefix to modern model list in `extensions/xai/provider-models.ts` - Model is live on xAI `/v1/chat/completions` with `reasoning_con

