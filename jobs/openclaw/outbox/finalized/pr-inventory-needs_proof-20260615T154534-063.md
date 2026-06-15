---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-063
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
  - "#87100"
  - "#87119"
  - "#87122"
  - "#87164"
  - "#87206"
  - "#87260"
  - "#87275"
  - "#92455"
  - "#82303"
  - "#86711"
  - "#93039"
  - "#93108"
  - "#87330"
  - "#87377"
  - "#93157"
  - "#90966"
  - "#90969"
  - "#90990"
  - "#90997"
  - "#91002"
  - "#91015"
  - "#91028"
  - "#91050"
  - "#91055"
  - "#87480"
cluster_refs:
  - "#87100"
  - "#87119"
  - "#87122"
  - "#87164"
  - "#87206"
  - "#87260"
  - "#87275"
  - "#92455"
  - "#82303"
  - "#86711"
  - "#93039"
  - "#93108"
  - "#87330"
  - "#87377"
  - "#93157"
  - "#90966"
  - "#90969"
  - "#90990"
  - "#90997"
  - "#91002"
  - "#91015"
  - "#91028"
  - "#91050"
  - "#91055"
  - "#87480"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.206Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 63

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #87100 fix(channels): defensively handle non-string prompter.text() results in token replace flow

- bucket: needs_proof
- author: YOMXXX
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:36:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop calling `.trim()` directly on `await prompter.text({...})` in `promptSingleChannelToken` (`src/channels/plugins/setup-wizard-helpers.ts`) and in the `runTextInputSteps` block inside `runChannelSetupWizard` (`src/channels/plugins/setup-wizard.

### #87119 fix(plugins): resolve openclaw/plugin-sdk/<subpath> imports without root-alias.cjs fall-through (AI-assisted)

- bucket: needs_proof
- author: mbennett37
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:36:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Imports like `openclaw/plugin-sdk/agent-harness-task-runtime` could fall through to `dist/plugin-sdk/root-alias.cjs/agent-harness-task-runtime` (a nested-under-a-file path that does not exist), breaking Codex/OpenC

### #87122 Avoid profile cooldowns for provider overloads

- bucket: needs_proof
- author: cbcampos
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:36:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- Record provider overloaded failures without setting auth-profile cooldownUntil\n- Preserve cooldown/disable behavior for rate-limit, auth, and billing failures\n- Update fallback and auth-profile tests for repeated overload attempts\n\n## Testing

### #87164 Fix Session File Corruption During Embedded Retry (critical bug)

- bucket: needs_proof
- author: wmaulanaaishq
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:37:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary What problem does this PR solve? Fixes critical bug where session files become permanently corrupted with an EmbeddedAttemptSessionTakeoverError if an embedded retry fails while the model I/O lock is released. Previously, if the session file fingerprin

### #87206 fix(memory-core): recover narrative text from trajectory when session archived early (#87182)

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:39:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes #87182 where the gateway's post-completion session cleanup races with memory-core's narrative extraction, causing model-generated narrative text to be silently discarded. ## Root Cause After subagent runs complete, the gateway immediat

### #87260 docs: add secure multi-agent routing pattern for research workflows

- bucket: needs_proof
- author: SeverinQuan
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:40:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a documentation example for a secure Multi-Agent routing pattern in OpenClaw. The pattern separates routine execution from research-heavy workflows: - `main Agent` remains the default interaction and execution entrypoint. - `main Agent`

### #87275 fix(tools): treat non-positive gateway timeoutMs as absent

- bucket: needs_proof
- author: valkyriweb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:40:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveGatewayOptions` in `src/agents/tools/gateway.ts` clamps an optional `opts.timeoutMs` via `Math.max(1, Math.floor(opts.timeoutMs))` before falling back to the 30s default. A caller-supplied `0` was rewritten to `1ms` instead of falling back t

### #92455 fix(issue): resolve #92451 v2026.6.x system prompt bloat causes instruction following d

- bucket: needs_proof
- author: xuwei-xy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-15T03:42:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 修复 issue #92451 中报告的问题。 ### Bug type Regression (worked before, now fails) ### Beta release blocker No ### Summary v2026.6.x added ~20+ new default tools/system instructions to the initial context (MEDIA, Control UI, Sa ## Changes - `src/agents/comm

### #82303 feat(telegram): add progress assistant preview lane

- bucket: needs_proof
- author: Fuma2013
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, agents, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:54:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `streaming.progress.assistantPreview` to enable assistant partial previews while staying in `mode: "progress"` - keep the existing Telegram progress/tool/status draft on the answer lane and stream assistant partial text on a separate transient

### #86711 fix(acp): skip oneshot sessions during startup identity reconcile

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:59:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #72013 ## Summary Gateway startup identity reconciliation attempts to resolve pending ACP session identities. Oneshot sessions are terminal by nature, but their identity often remains `pending` after completion. The reconcile loop tries to ensure a runti

### #93039 fix(dreaming): increase narrative timeout from 60s to 120s for ARM cold-load (fixes #92494)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:04:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary ARM devices with 600+ skills need ~57 seconds just to cold-load tool definitions on the first narrative phase, leaving almost no headroom for the LLM call within the current 60-second timeout. This causes consistent timeouts for light and REM phases

### #93108 fix(codex): pass maxRenderedContextChars to legacy mirrored-history fallback calls (fixes #84084)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: codex, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:05:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The legacy mirrored-history fallback paths in `runCodexAppServerAttempt` did not pass `maxRenderedContextChars` to `projectContextEngineAssemblyForCodex`, causing them to use `DEFAULT_RENDERED_CONTEXT_CHARS` (24,000) regardless of the agent's `conte

### #87330 fix: prevent sessions_yield completion wake freeze

- bucket: needs_proof
- author: adam-birddog
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:06:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prefer direct requester-agent handoff for expected subagent completion messages so yielded parent sessions resume instead of being steered into an aborting active run. - Mark sessions_yield abort transitions as temporarily not accepting embedded m

### #87377 feat: add task flow lifecycle observability with tags, hooks, and diagnostic events

- bucket: needs_proof
- author: ffluk3
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, extensions: diagnostics-otel, size: XL, extensions: diagnostics-prometheus, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:08:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds comprehensive observability for the task flow lifecycle via diagnostic events, internal hooks, and OTel/Prometheus metrics. Also introduces a `tags` field on `TaskFlowRecord` for arbitrary user-defined metadata that propagates through all obser

### #93157 #93041: fix(control-ui): restore Codex usage quota pill in sidebar session switcher

- bucket: needs_proof
- author: qingminglong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:19:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Codex/OpenAI usage quota pill (shown in the Control UI chat that displays usage limits e.g. "5h remaining") was accidentally removed when the old chat header was replaced with a sidebar in PR #88772 ("calm composer controls"). ## Root Cause `ui/

### #90966 fix(feishu): report transport activity (connected/lastEventAt) for health monitor

- bucket: needs_proof
- author: Acache
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:21:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Description fix(feishu): report transport activity (connected/lastEventAt) for health monitor feishu channel never published transport-level status such as connected, lastConnectedAt, lastEventAt, or lastTransportActivityAt. This meant the gateway's channel

### #90969 [codex] fix discord missing voice state handling

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:21:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat Discord Unknown Voice State/404 lookups as an absent voice state instead of a CLI/gateway error. - Add focused regression coverage for active, absent, 404, and unrelated REST failure paths. ## Validation - node scripts/run-vitest.mjs run --c

### #90990 fix(agents): use appropriate log levels in model-resolver fallback paths

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:22:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix severity misclassification of log statements in `model-resolver.ts` fallback paths. This is a follow-up to the log-level cleanup in `tools-manager.ts` and `resource-loader.ts` (PR #89982), completing the same fix pattern across the remaining aff

### #90997 fix(telegram): keep tool progress after non-final commentary

- bucket: needs_proof
- author: wsyjh8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:22:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary In non-persist `progress` streaming mode with `streaming.progress.commentary` enabled, Telegram drops the tool-progress lines that follow inter-tool commentary: the live progress draft shows the model's "Let me check X…" commentary, but the subseque

### #91002 fix(tui): show last tool-error summary on aborted runs

- bucket: needs_proof
- author: wsyjh8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T04:23:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a run ends while looping on tool-call validation errors, the TUI previously showed only `run aborted`, making a validation-failure loop indistinguishable from a model crash, a network timeout, or a context-overflow abort. This surfaces the last

### #91015 fix(sandbox): bound Docker exec with a deadline so a wedged engine can't hang the gateway

- bucket: needs_proof
- author: wsyjh8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, docker, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:23:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What / why A present-but-unresponsive Docker engine (the socket accepts the connection but never answers — distinct from "daemon not running", which returns a stderr quickly) makes `docker …` emit nothing and never exit. `execDockerRaw` awaited that child w

### #91028 feat(lobster): in-process LLM adapters for embedded runner (#90909)

- bucket: needs_proof
- author: bosszukung
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: lobster, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:23:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements the embedded-runner LLM bridge proposed in #90909 (follow-up to #76101, closed docs-only by #78736). `openclaw.invoke` is HTTP-only and would require injecting operator credentials into the workflow environment to work in the embedded run

### #91050 fix(active-memory): keep a runnable iMessage channel so memory thread key builds

- bucket: needs_proof
- author: 7thfloorindustries
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:23:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **Problem** — Active memory stops persisting iMessage conversations. On the iMessage (bluebubbles) path the inbound channel id is a *scoped* conversation id (`imessage:group:<peerId>`, `sms:...`, `chat_guid:...`). The `isRunnableChannelName()` guard (which rej

### #91055 fix(codex): compact group context without losing mission

- bucket: needs_proof
- author: juanbamorelli-source
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, extensions: codex, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:24:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep compact group-channel Codex context focused on the current mission/request while preserving needed source-conversation metadata. - Preserve session tool compatibility and document/configure the compact context behavior. - Refresh prompt snaps

### #87480 fix(anthropic): configure undici Agent with extended keep-alive to prevent socket failures

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: mock-only-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:25:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed This fix configures Anthropic provider to use a custom undici Agent with extended keep-alive timeout, preventing socket failures on long-running gateways. **Root cause**: The Anthropic SDK uses undici with default `keepAliveTimeout` of 4 second

