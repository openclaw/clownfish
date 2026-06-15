---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-017
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
  - "#90066"
  - "#89989"
  - "#90617"
  - "#90417"
  - "#50250"
  - "#47087"
  - "#52515"
  - "#50682"
  - "#91176"
  - "#90754"
  - "#89959"
  - "#91309"
  - "#91407"
  - "#91397"
  - "#91414"
  - "#91393"
  - "#91443"
  - "#91444"
  - "#91446"
  - "#91447"
  - "#91466"
  - "#91477"
  - "#91474"
  - "#91490"
  - "#91493"
  - "#91511"
  - "#91515"
  - "#91549"
  - "#91545"
  - "#91544"
  - "#91535"
  - "#91584"
  - "#91596"
  - "#91603"
  - "#91606"
  - "#91609"
  - "#91610"
  - "#91612"
  - "#91611"
  - "#48690"
cluster_refs:
  - "#90066"
  - "#89989"
  - "#90617"
  - "#90417"
  - "#50250"
  - "#47087"
  - "#52515"
  - "#50682"
  - "#91176"
  - "#90754"
  - "#89959"
  - "#91309"
  - "#91407"
  - "#91397"
  - "#91414"
  - "#91393"
  - "#91443"
  - "#91444"
  - "#91446"
  - "#91447"
  - "#91466"
  - "#91477"
  - "#91474"
  - "#91490"
  - "#91493"
  - "#91511"
  - "#91515"
  - "#91549"
  - "#91545"
  - "#91544"
  - "#91535"
  - "#91584"
  - "#91596"
  - "#91603"
  - "#91606"
  - "#91609"
  - "#91610"
  - "#91612"
  - "#91611"
  - "#48690"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.475Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 17

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90066 fix(telegram): suppress reconnect drain re-entry while delivery is in-flight

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-05T16:42:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89953 ## Problem After a Telegram transport reconnect, the polling session repeatedly calls `drainPendingDeliveries`, producing "already being recovered" log noise for entries that are still held by an in-flight live delivery claim. ## Fix 1. **Return d

### #89989 fix(heartbeat): debounce requests-in-flight retries

- bucket: needs_proof
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-06T02:08:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #40611. ## What changed - Adds a requests-in-flight heartbeat retry delay of 60 seconds. - Keeps the existing 1 second retry delay for other retryable busy skips such as cron-in-progress and lanes-busy. - Updates heartbeat wake and scheduler tests to cov

### #90617 Add Entroly context compression skill

- bucket: needs_proof
- author: juyterman1000
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: low-signal-docs, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:46:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this PR adds Adds an **Entroly** skill to the skills directory — a local context compression engine that reduces LLM input tokens by 70-95% on large repos. ### How it works - Ranks repo files by query relevance (BM25 + entropy + dependency graph) - Sel

### #90417 Guard Telegram and iMessage dispatch against fleet loops

- bucket: needs_proof
- author: jonah-ux
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T01:12:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `fleet-loop-guard` checks at the shared provider dispatcher before buffered/plain agent fanout - cover Telegram, iMessage, and BlueBubbles/iMessage-compatible inbound surfaces - fail open if the guard binary is unavailable, but suppress immedi

### #50250 fix(health): show gateway probe duration in text output

- bucket: needs_proof
- author: JonathanJing
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T04:55:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - show gateway probe duration in the standard text output for `openclaw health` - keep `openclaw health --json` unchanged - add regression coverage for the text output ## Why `openclaw health --json` already includes `durationMs`, but the default hu

### #47087 Attach provenance to spawned subagent tasks

- bucket: needs_proof
- author: Christoffer91
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:02:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This adds explicit inter-session provenance to child tasks launched via `sessions_spawn`. Changes in this PR: - attach `inputProvenance` when `spawnSubagentDirect()` starts the child `agent` run - preserve requester session/channel lineage on the sp

### #52515 fix(doctor): skip cleanup hints for active gateway and downgrade exec SecretRef errors to warnings

- bucket: needs_proof
- author: daniel-knox
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:03:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Fixes #52510 ### Problem `openclaw doctor` has two false-positive issues: 1. **Cleanup hints suggest removing the active gateway** - When doctor detects ANY extra gateway-like services (e.g., an unrelated `imessage-watcher`), it unconditionally generates cl

### #50682 feat(telegram): handle unknown groups with warn or leave

- bucket: needs_proof
- author: monk0bot0
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:03:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add Telegram unknown-group handling with configurable actions: - `unknownGroupAction` - `unknownGroupMessage` - `unknownGroupCooldownMs` This lets OpenClaw ignore, warn, or leave unknown Telegram groups before assistant execution. ## What changed - 

### #91176 feat(voice-call): Microsoft Teams provider (msteams) — voice + inbound video + outbound call-back

- bucket: needs_proof
- author: ahenawy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, channel: voice-call, size: XL, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T15:47:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds the **Microsoft Teams (`msteams`) provider** to the `voice-call` extension — inbound voice + inbound video vision **and** outbound "call me back" — over an HMAC-authenticated WebSocket endpoint. Works in **1:1 calls and group/meeting calls**, o

### #90754 feat(control-ui): add toggle to collapse/expand workspace files panel [AI-assisted]

- bucket: needs_proof
- author: vanmai40
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-07T16:44:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## AI-Assisted PR 🤖 This PR was built collaboratively with an AI coding agent (OpenClaw's assistant agent using DeepSeek V4) as part of an iterative pair-programming workflow. The human author (Van Mai) reviewed all code changes, tested the build, and confirm

### #89959 Enable native meta skill orchestration

- bucket: needs_proof
- author: nice-code-la
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, agents, channel: twitch, size: XL, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T18:13:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a native meta skill foundation in OpenClaw: typed frontmatter parsing, catalog projection, DAG runner, template rendering, pause/resume primitives, SQLite run-state schema, gates, auto-propose helpers, and a bundled `meta-skill-creator` flow.

### #91309 fix(tts): strip reasoning tags from summarized text before speech

- bucket: needs_proof
- author: LiLan0125
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T06:30:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - When a reasoning model (e.g., MiniMax with `reasoning: true`) is used as the TTS summary model, its output can include `<think>` / `<thinking>` / `<thought>` tags wrapping chain-of-thought content. - These tags were passed through to the speech sy

### #91407 Feature/whatsapp group tool

- bucket: needs_proof
- author: elip-OE
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: L, triage: needs-real-behavior-proof, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T11:50:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Why does this matter now? What is the intended outcome? What is intentionally out of scope? What does success look like? What should reviewers focus on? <details> <summary>Summary guidance</summary> This PR descripti

### #91397 feat(neosantara): add Neosantara gateway provider and responses API alias

- bucket: needs_proof
- author: ErRickow
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, triage: needs-real-behavior-proof, dependencies-changed, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-08T12:12:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Add bundled Neosantara provider plugin backed by the OpenAI-compatible Neosantara Gateway. - Register API-key onboarding and provider catalog metadata. - Support both `openai-completions` and `openai-responses` APIs by declaring `neosantara-response

### #91414 fix(agent): agents.defaults.model.fallbacks not inherited by isolated cron sessions

- bucket: needs_proof
- author: Linux2010
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T12:53:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91362 ## Summary When `agents.defaults.model.fallbacks` is configured globally, isolated cron sessions did not inherit these fallbacks when the agent's model config is a plain string. ## Root Cause `resolveSelectedModelFallbacksOverride` returned `[]` f

### #91393 fix(embedded-runner): refresh compaction retry diagnostics

- bucket: needs_proof
- author: fangkaigedaima
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T14:23:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Refresh diagnostic run progress while active compaction retries keep an embedded run waiting. - Preserve the aggregate timeout fallback for idle/lost compaction retry waits. - Add focused regression coverage proving the heartbeat refreshes diagnos

### #91443 macos: resolve canvas/a2ui paths through gateway capability URL

- bucket: needs_proof
- author: hanZeng-08
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T14:24:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix #91083 When the macOS Canvas navigates to paths like `/__openclaw__/canvas/...` or `/__openclaw__/a2ui/...`, the existing code passes them directly to the WKWebView, which breaks hosted canvas surfaces that must be resolved through the gateway c

### #91444 fix(google): register 'google' alias for memory embedding provider

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, extensions: google, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T14:26:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(google): register 'google' alias for memory embedding provider ## Summary **Problem:** Users configure `memorySearch.provider: "google"` but the Google memory embedding provider is registered with id `"gemini"`. This causes "Unknown memory embedding provid

### #91446 fix(agents): expose sessions_spawn in TUI when subagents.allowAgents is configured

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T14:40:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(agents): expose sessions_spawn in TUI when subagents.allowAgents is configured ## Summary **Problem:** The `sessions_spawn` tool was only included for non-embedded agents or when `allowGatewaySubagentBinding` was explicitly true. This prevented TUI users f

### #91447 fix(ui): scope local assistant avatar override to agent ID (fixes #90890)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T14:59:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Local assistant avatar overrides are stored under a single global `localStorage` key (`openclaw.control.assistant.v1`), so setting an avatar for one agent changes it for all agents. - **Root Cause**: `loadLocalAssistantIdentity` and 

### #91466 Gateway: server-side WebSocket keepalive + close-on-timeout

- bucket: needs_proof
- author: hoangsaga123
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T16:55:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Gateway: server-side WebSocket keepalive + close-on-timeout Branch: `ticket-214-gateway-ws-keepalive` · base `main@35eb63e6` · patch: `patches/ticket-214-gateway-ws-keepalive.diff` (12 files, +~520/-15) ## Summary The gateway has no keepalive on its post-aut

### #91477 feat(plugin-sdk): add optional CliBackendPlugin.estimateUsage hook for text-output backends

- bucket: needs_proof
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T17:36:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Draft — depends on #91282 product decision.** This PR implements the API discussed in #91282 (CliBackendPlugin.estimateUsage hook for text-output backends), including the maintainer-requested `estimated: true` discriminator that the most recent issue comme

### #91474 feat(google): enable raw-transcript reseed for antigravity-cli (multi-turn context fix)

- bucket: needs_proof
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-08T18:39:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Stacked on top of #90975** (`feature/antigravity-cli-fresh`). The first 9 commits in this PR belong to #90975 (the Antigravity-CLI backend itself); the net change introduced by **this** PR is the last 2 commits (`7c00796ae8`, `7d4d4588fe`). Once #90975 mer

### #91490 fix(supervisor): spawn claude .cmd shim correctly on Windows

- bucket: needs_proof
- author: Vilard7
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T19:25:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes spawning the `claude` command on Windows, where it failed with `ENOENT` and `EINVAL`. On Windows, npm-style executables (such as `claude`) are installed as `.cmd` shims. Two problems prevented the supervisor from launching them: 1. `resolveCom

### #91493 Add fail-on-tool-failure contract for isolated cron agent turns

- bucket: needs_proof
- author: cristbc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T19:32:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Title: Add fail-on-tool-failure contract for isolated cron agent turns ## Summary - add `payload.failOnToolFailure` to agent-turn cron payload validation and runtime types - persist the flag through cron SQLite projections and additive state-schema repair - ma

### #91511 fix(ui): keep mobile composer above keyboard

- bucket: needs_proof
- author: stackingrockss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-08T21:35:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - track the mobile visual viewport keyboard overlap in `--keyboard-inset-bottom` - use that inset for the mobile chat composer bottom margin while preserving standalone/PWA home-indicator clearance - add unit coverage for the inset calculation and C

### #91515 fix(cron): classify spaced 'timed out' failures as retryable timeout

- bucket: needs_proof
- author: jaxonparrott
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-08T22:21:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Broaden the cron `timeout` transient-retry classifier so failures phrased with a **space** — e.g. `isolated agent setup timed out before runner start` — are recognized as retryable timeouts. ## Why `src/cron/retry-hint.ts` classified timeouts with `/(t

### #91549 fix: enable DeepSeek DSML filtering for proxy providers via model id detection

- bucket: needs_proof
- author: studentzhou-svg
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T01:49:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Root Cause DSML filtering was gated on `compat.thinkingFormat === "deepseek"`, which resolves only for native deepseek endpoint (api.deepseek.com) or providers with provider key "deepseek". When DeepSeek models are served through proxy providers like Silico

### #91545 fix: use Start-Process FilePath on Windows

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T01:54:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - switch dashboard config-opening on Windows from `Start-Process -LiteralPath` to the supported `-FilePath` parameter - keep the existing single-quoted PowerShell escaping behavior - update the config command test to assert the working PowerShell in

### #91544 [codex] fix Claude AskUserQuestion bridge

- bucket: needs_proof
- author: jsi-tross
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T02:26:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add Claude live-session handling for `AskUserQuestion` so Claude CLI interactive prompts no longer fall through the generic exec-approval path. - Deliver prompt text through the reply surface when one exists, with a no-surface fallback that lets C

### #91535 fix(ui): route skill workshop RPCs through current session agent

- bucket: needs_proof
- author: zhouhe-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T03:31:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Pass the current session's `agentId` to all Skill Workshop Gateway RPCs (`skills.proposals.list`, `skills.proposals.inspect`, `skills.proposals.apply`, `skills.proposals.reject`) when the session key is explicitly agent-scoped. - For default sessi

### #91584 Fail closed when Slack mention detection is unavailable

- bucket: needs_proof
- author: hiragram
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T03:39:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes Slack mention gating so channels that require a mention do not accept ordinary messages when explicit mention detection is unavailable. This can happen when `auth.test` fails during Slack monitor startup, leaving `botUserId` empty until restar

### #91596 fix(memory): use local modelPath for status identity so custom local models aren't always dirty (fixes #91001)

- bucket: needs_proof
- author: ly-wang19
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:06:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** With `memorySearch.provider: "local"` and a custom `local.modelPath`, `openclaw memory status` always reports the index as **dirty** even right after a clean `memory index --force`. The index never looks "valid," so it appears to need

### #91603 fix(acp): preserve structured error kinds

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:26:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR updates the ACP translator to preserve structured error kinds rather than mapping them all to end_turn. Details: - If the error kind is a refusal, it maps to refusal. - If the error kind is context_length, it maps to max_tokens. - For other error kinds

### #91606 fix(ui): prevent false busy state in Control UI webchat

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:29:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #87387: Control UI webchat could keep showing a false "In progress" status and "Stop" button after the assistant response completed because the main composer consumed session-list abortability even when local send/stream state was idle. ## Cha

### #91609 fix(docs): make check:docs work in native PowerShell on Windows

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:32:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR ensures that \check:docs\ and doc formatting scripts work correctly when executed in native PowerShell / cmd environments on Windows. Details: - Add safety checks for child process \stderr\ and errors in \ ormat-docs.mjs\ to prevent crashes when spawni

### #91610 ci(windows): add native PowerShell smoke coverage for contributor commands

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:33:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR adds Native PowerShell smoke coverage for contributor commands under the Windows CI job. Details: - Add a new step to \checks-windows\ in \.github/workflows/ci.yml\ using \shell: pwsh\. - Run \pnpm check:docs\ and \pnpm build:strict-smoke\ in native Po

### #91612 docs(secrets): generate secretref reference docs from target registry metadata

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: S, triage: needs-real-behavior-proof, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:33:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR automates the generation of the secretref matrix JSON and reference markdown documentation from secret target registry metadata. Details: - Add \scripts/generate-secretref-docs.ts\ script to compile the secretref credentials matrix and sync with \docs/

### #91611 fix(agents): reconcile stale restart-aborted subagent runs instead of resurrecting them (fixes #90766)

- bucket: needs_proof
- author: ly-wang19
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:39:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** After the gateway is down for a long time, restart/orphan recovery **resurrects** subagent runs that were aborted hours ago — replaying `agent.wait` on a run that is no longer relevant. - **Root cause:** The restore reconciliation in 

### #48690 fix: add task-level timeout to lane queue to prevent permanent session blocking

- bucket: needs_proof
- author: kyletabor
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:48:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `Promise.race` timeout wrapper around `await entry.task()` in `pump()` to prevent hung promises from permanently jamming session lanes - New `CommandLaneTaskTimeoutError` error class for timed-out tasks - New `taskTimeoutMs` option on `enqueue

