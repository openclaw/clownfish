---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-049
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
  - "#73536"
  - "#74687"
  - "#75076"
  - "#73511"
  - "#74954"
  - "#75140"
  - "#74274"
  - "#73938"
  - "#73628"
  - "#73982"
cluster_refs:
  - "#73536"
  - "#74687"
  - "#75076"
  - "#73511"
  - "#74954"
  - "#75140"
  - "#74274"
  - "#73938"
  - "#73628"
  - "#73982"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.605Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 49

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #73536 fix(agents/bundle-mcp): pass configured timeout to MCP callTool requests (#60967)

- bucket: needs_proof
- author: eric-zachary077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- updated: 2026-05-30T04:59:52Z
- body excerpt: ## What Bundled MCP tool calls in [src/agents/pi-bundle-mcp-runtime.ts](src/agents/pi-bundle-mcp-runtime.ts) always failed at the MCP SDK's hardcoded `DEFAULT_REQUEST_TIMEOUT_MSEC = 60_000`, no matter what the operator configured in `mcp.servers.<name>.connect

### #74687 fix: avoid replaying channel restart recovery turns

- bucket: needs_proof
- author: levineam
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T05:00:07Z
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: restart-aborted main-session recovery can auto-replay a synthetic recovery turn into channel-backed sessions. - Why it matters: channel-backed sessions have external delivery state; hidden repl

### #75076 Harden Control UI auth, status warnings, and build provenance

- bucket: needs_proof
- author: Shadow-3
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, app: web-ui, gateway, scripts, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T05:00:44Z
- body excerpt: ## Summary - Harden Control UI serving with security headers/CSP and authenticated bootstrap config. - Prefer fragment-token handoff, strip URL token material after bootstrap, and document the `?token=` deprecation plan. - Render assistant media through authen

### #73511 fix: allow custom control UI origins

- bucket: needs_proof
- author: ishangodawatta
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T05:00:50Z
- body excerpt: ## Summary - Problem: `gateway.controlUi.allowedOrigins` can include a custom desktop-app origin like `tauri://localhost`, but the gateway normalises that browser `Origin` header to the opaque `null` origin and never matches the explicit allowlist entry. - Why

### #74954 fix(agents): prevent provider defaultModel from overriding agents.defaults.model (fixes #24170)

- bucket: needs_proof
- author: WeiYu021
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XL, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T05:00:51Z
- body excerpt: When creating a new agent via 'openclaw agents add', the provider's defaultModel was incorrectly being set as the agent's model.primary, instead of inheriting from agents.defaults.model. Changes: - applyAuthChoiceLoadedPluginProvider: no longer returns agentMo

### #75140 feat(memory-core): record terminal task outcomes for dreaming feedback

- bucket: stale_unassigned
- author: keane-751892
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, scripts, size: M, triage: dirty-candidate, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T05:00:53Z
- body excerpt: ## Summary Adds a plugin-sdk seam (`openclaw/plugin-sdk/task-events`) that lets plugins subscribe to the task registry's lifecycle events without owning the singleton observer that tests rely on. Multiple listeners can register in parallel via `addTaskRegistry

### #74274 fix(control-ui): download assistant markdown attachments

- bucket: needs_proof
- author: Neomail2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- updated: 2026-05-30T05:01:03Z
- body excerpt: ## Summary - render assistant `mediaUrl` / `mediaUrls` payload fields as attachment cards in the Control UI - add download links for non-image assistant attachments instead of opening them inline - force `Content-Disposition: attachment` for local markdown fil

### #73938 fix(memory): thread remote batch HTTP timeout budget

- bucket: needs_proof
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, extensions: openai, clawsweeper, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-05-30T05:02:07Z
- body excerpt: ## Summary - Thread the configured remote embedding batch timeout through current memory-host SDK HTTP helpers and provider batch upload/create/status/error-read/download calls. - Use one shared remaining-time budget across submit, wait, error-read, retry, and

### #73628 Add sessions_yield completion truth metadata

- bucket: needs_proof
- author: richclaw-debug
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T05:02:17Z
- body excerpt: ## Summary This patch adds an internal completion truth seam for `sessions_yield` and wires it through the embedded runner so parent/session orchestration can observe an explicit, trustworthy completion source. For a real `sessions_yield` turn, the expected se

### #73982 fix(chat-bash): inherit exec policy defaults

- bucket: stale_unassigned
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, clawsweeper, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- updated: 2026-05-30T05:02:48Z
- body excerpt: ## Summary - repair #50392 so `/bash` chat sessions inherit the effective `tools.exec` defaults used by the exec tool - include security, ask, path prepend, safe-bin settings/profiles, strict inline eval, approval running notice timing, timeout, and notificati

