---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-048
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
  - "#89209"
  - "#89211"
  - "#89214"
  - "#89234"
  - "#89236"
  - "#89239"
  - "#57889"
  - "#59285"
  - "#93264"
  - "#91222"
  - "#91229"
  - "#91237"
  - "#91239"
  - "#87589"
  - "#91249"
  - "#91250"
  - "#89074"
  - "#91271"
  - "#91273"
  - "#91276"
cluster_refs:
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
  - "#89209"
  - "#89211"
  - "#89214"
  - "#89234"
  - "#89236"
  - "#89239"
  - "#57889"
  - "#59285"
  - "#93264"
  - "#91222"
  - "#91229"
  - "#91237"
  - "#91239"
  - "#87589"
  - "#91249"
  - "#91250"
  - "#89074"
  - "#91271"
  - "#91273"
  - "#91276"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.482Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 48

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #89209 fix(sessions): remove trajectory files on delete

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:00:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Removes session trajectory runtime and pointer artifacts when `sessions.delete` deletes a session. - Reuses the existing trajectory cleanup helper already used by age/count pruning, keeping the delete path aligned with maintenance cleanup. - Keeps

### #89211 fix(sessions): rewrite first assistant flush

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:00:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes the first-assistant flush path so a resumed no-assistant transcript is rewritten to the current in-memory buffer instead of appending that whole buffer onto existing disk contents. - This prevents duplicate session headers and duplicate pend

### #89214 whatsapp: expose connection watchdog tuning in account config

- bucket: needs_proof
- author: danashburn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:00:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds optional `channels.whatsapp.watchdog.*` (and per-account override at `channels.whatsapp.accounts.<id>.watchdog.*`) to the WhatsApp channel config schema, plumbed through to the existing `WebMonitorTuning` parameter of `monitorWebChannel`. Fixes

### #89234 feat(browser): type secrets from env vars via {{env:KEY}} placeholders

- bucket: needs_proof
- author: pallaoro
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: external-plugin-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:01:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What The browser tool can now substitute `{{env:KEY}}` placeholders with the value of an environment variable, anywhere a value is supplied to an action — `type` text, a `fill` field value, a `select` value, and nested `batch` actions. ```json { "action": "

### #89236 fix(slack): default member-info userId to inbound sender

- bucket: needs_proof
- author: stroupaloop
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:01:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Draft:** code + unit/contract coverage are complete; holding for human-run real-behavior proof from a live Slack OpenClaw setup before marking ready (per CONTRIBUTING's external-PR proof gate). ## Summary The Slack `message` tool's `member-info` action req

### #89239 fix(imessage): repair DM sender fallback before pairing

- bucket: needs_proof
- author: darinkishore
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: imessage, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:01:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - repair direct-message sender when the watch payload temporarily reports the local `destination_caller_id` as `sender` - use direct-chat participant / `chat_identifier` data already present on the payload before falling back to history recovery - k

### #57889 fix(gateway): preserve operator scopes for token-authenticated non-local clients

- bucket: needs_proof
- author: Vitalcheffe
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:04:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Operators authenticated via Tailscale or trusted-proxy lose all declared scopes on connect, causing "missing scope: operator.write" errors. Fixes #51396, #57331, #46997, #48229. ## Root cause `handleMissingDeviceIdentity()` depends on `sharedAuthOk`

### #59285 Clarify optional cleanup hints in gateway status output

- bucket: needs_proof
- author: safrano9999
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: XS, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:05:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #93264 fix(mattermost): wake agent on bare @bot mention [AI]

- bucket: needs_proof
- author: LiuwqGit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:06:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Mattermost posts whose only content is a bare `@bot` mention were silently dropped after `normalizeMention` stripped the mention and left an empty body. Why does this matter now? - Issue #93205: users naturally sen

### #91222 fix(google-vertex): retry transient pre-stream failures and stale ADC

- bucket: needs_proof
- author: damianFelixPago
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:06:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Vertex streaming requests currently fail the entire turn on two transient, recoverable conditions: 1. **Pre-stream `429` / `503`** from the Vertex endpoint (rate limiting / backend unavailability), surfaced as a hard error before any SSE chunk is re

### #91229 feat(ui): gateway SSO postMessage token handoff and ack

- bucket: needs_proof
- author: pstagner
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:06:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `gateway-sso-postmessage` listener for `openclaw-gateway-token` from allowed parent origins - Apply token, reconnect gateway, and acknowledge with `openclaw-gateway-token-ack` - Wire listener lifecycle into control UI `app-lifecycle` connect/d

### #91237 fix(providers/openrouter): treat OpenRouter (URL + default route) as long-TTL-eligible for Anthropic cache_control

- bucket: needs_proof
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:07:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `isLongTtlEligibleEndpoint()` decides whether the env-driven `OPENCLAW_CACHE_RETENTION=long` default (and conservative implicit-long behavior) promotes an Anthropic `cache_control` marker from the 5-minute to the 1-hour `ttl`. It only whitelisted `a

### #91239 fix(opencode-go): complete catalog, onboarding, and tiered pricing

- bucket: needs_proof
- author: samson910022
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, extensions: opencode-go, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T11:07:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #91238. This PR completes the OpenCode Go catalog repair initially attempted in #91351. The prior fix was incomplete — it only added Flat Pricing assertions in test files without implementing the official tiered pricing in `provider-catalog.t

### #87589 fix(memory): show signalCount in dreaming promotion annotation (#87588)

- bucket: needs_proof
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:08:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The promotion annotation written to `MEMORY.md` has shown `recalls=<recallCount>` since the feature shipped, but the actual promotion gate checks the *total signal count* (`recallCount + dailyCount + groundedCount`), not `recallCount` alone. This pr

### #91249 fix(windows): hide startup fallback launcher with VBS

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:08:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Windows Startup-folder fallback installs currently launch the gateway through a visible `cmd.exe` hop. - Even with `start /min`, Windows still flashes the terminal frame briefly at logon before minimizing it. - Thi

### #91250 fix(agents): rename timezone-only prompt section (Fixes #63181)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:08:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #63181. Rename the timezone-only system prompt section from `Current Date & Time` to `Time Zone`. This keeps the prompt wording aligned with current behavior: the section only injects the configured timezone to preserve cache stability, and ag

### #89074 fix(tui): let gateway queue active-run sends

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:08:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes TUI active-run sends being blocked before they reach the Gateway queue. - Allows normal gateway-mode prompts during an active run so /queue followup, /queue collect, /queue steer, and /queue interrupt can be handled by the backend policy ins

### #91271 fix(agents): include requester identity in sessions_send context (Fixes #38570)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:08:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #38570. Include the requester agent's configured `identity.name` in the `sessions_send` agent-to-agent prompt contexts. This updates the three A2A prompt builders used by the flow: - initial `sessions_send` request context - bounded ping-pong 

### #91273 fix(windows): remove findstr from scheduled-task restart probe (Fixes #84600)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:08:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #84600. The Windows scheduled-task restart helper still probed task state with a PowerShell command piped into `findstr /I /C:"Running"`. That leaves a visible `cmd.exe -> findstr.exe` child process shape on some Windows hosts, which matches t

### #91276 fix(tui): include pairing approval command in recovery hint (Fixes #67618)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:09:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #67618. When the TUI disconnects with a pairing-required error, it currently tells the user to run `openclaw devices list` and then "approve your request ID" without ever naming the actual approval command. This keeps the scope narrow: - updat

