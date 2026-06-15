---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-077
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
  - "#91279"
  - "#91280"
  - "#91286"
  - "#91288"
  - "#93226"
cluster_refs:
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
  - "#91279"
  - "#91280"
  - "#91286"
  - "#91288"
  - "#93226"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.209Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 77

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #91279 fix(ui): show config path in overview snapshot (Fixes #53958)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:09:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #53958. Operators looking at Control UI Overview often need to answer a basic troubleshooting question quickly: which config file is this gateway actually using? The gateway snapshot already includes `configPath`, so this change simply surface

### #91280 fix(cli): add exec approval recovery guidance (Fixes #53250)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-15T11:09:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #53250. When `host=node` exec approval is required but no approval UI is available, the CLI currently fails with a generic error: `exec denied: approval required (approval UI not available)` That tells the operator something is wrong, but not 

### #91286 fix: minSecurity order inverted — full should be least restrictive

- bucket: needs_proof
- author: korewaChino
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:09:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: `minSecurity` was treating `"full"` as rank 2 (most restrictive) and `"deny"` as rank 0 (least restrictive), which is backwards. When `resolveExecHostApprovalContext` computes: ```ts const hostSecurity = minSecurity(params.security, approvals.agent.security); 

### #91288 fix: minSecurity inverted security rank order (#91283)

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:09:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixed the `minSecurity()` function which had the security rank order backwards, treating `full` as the most restrictive instead of the least restrictive. ## Real behavior proof **Behavior addressed**: Session-level `security="full"` configuration wa

### #93226 fix(auth-health): prefer usable OAuth over expired inventory in provider status

- bucket: needs_proof
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XS, proof: supplied, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:10:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix the Control UI auth badge showing "expired" when the provider has a healthy OAuth profile alongside stale expired profiles, by preferring usable credential status over expired inventory in the provider health aggregation. ## Root Cause `buildAut

