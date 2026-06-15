---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-040
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
  - "#93160"
  - "#93161"
  - "#49022"
  - "#43659"
  - "#60842"
  - "#75208"
  - "#87709"
  - "#87777"
  - "#87799"
  - "#87863"
  - "#87900"
  - "#87941"
  - "#88894"
  - "#88013"
  - "#88023"
  - "#88078"
  - "#88082"
  - "#88112"
  - "#88193"
  - "#88224"
  - "#88239"
  - "#88240"
  - "#88249"
  - "#88336"
  - "#88396"
cluster_refs:
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
  - "#93160"
  - "#93161"
  - "#49022"
  - "#43659"
  - "#60842"
  - "#75208"
  - "#87709"
  - "#87777"
  - "#87799"
  - "#87863"
  - "#87900"
  - "#87941"
  - "#88894"
  - "#88013"
  - "#88023"
  - "#88078"
  - "#88082"
  - "#88112"
  - "#88193"
  - "#88224"
  - "#88239"
  - "#88240"
  - "#88249"
  - "#88336"
  - "#88396"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.480Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 40

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #93160 fix(tui): recognize DEL (0x7f) as backspace for WSL2 terminals (fixes #92777)

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T04:30:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92777 ## Summary Add explicit `\x7f` (DEL) recognition to the TUI backspace deduper so backspace works on terminals that send `^?` instead of `^H`, such as WSL2 Ubuntu. ## Root Cause `createBackspaceDeduper` in `src/tui/tui.ts` explicitly checks for `\x

### #93161 perf(tasks): memoize reconcileInspectableTasks for same-tick calls (fixes #73531)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:39:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw status` and related commands call `reconcileInspectableTasks()` multiple times within the same event-loop tick (e.g. once for the task tree and once for the summary). Each call rebuilds the full reconciliation from the task registry, which

### #49022 feat(tui): inline image rendering via pi-tui Image component

- bucket: needs_proof
- author: ademczuk
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:47:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: When tools generate images (charts, diagrams, AI art via `image_generate`), the TUI shows `[image/png 800kb]` text placeholders. Users can't see images without switching to another app. - Why it matters: Breaks the flow during iterative v

### #43659 fix: copilot token cache ignores profile rotation on rate limit

- bucket: needs_proof
- author: faishalwahiduddin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:57:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #43658 ## Problem When multiple `github-copilot` auth profiles are configured, profile rotation after a rate limit has no effect. All profiles end up using the same Copilot API token because `resolveCopilotApiToken()` caches to a single shared file (`gi

### #60842 fix(agents): re-expose toolsAllow core tools in embedded runs

- bucket: needs_proof
- author: ricoyudog
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:59:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: embedded runs only post-filtered `toolsAllow` after `createOpenClawCodingTools`, so restrictive config allowlists could remove `exec`/`read`/`write` before `toolsAllow` had any effect. - Why it

### #75208 feat(gateway/sdk): artifact RPCs with cursor pagination, type filter, and provenance fix

- bucket: needs_proof
- author: Angfr95
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, stale, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:02:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **New artifact RPCs** (`artifacts.list`, `artifacts.get`, `artifacts.download`) exposed via the gateway and the SDK `oc.artifacts` namespace, with AJV validation and TypeBox schemas - **Cursor pagination and type filter** for `artifacts.list`: bas

### #87709 fix(feishu): honor session activation mode for group admission (#50490)

- bucket: needs_proof
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: L, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:08:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Feishu's group admission gate consults only the static `channels.feishu.mentionRequired` config when deciding whether to admit non-@-mentioned messages, so `/activation mention` returned its confirmation reply but the runtime kept forwarding every

### #87777 [codex] Add Speakeasy Telegram voice button

- bucket: needs_proof
- author: cablackmon
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XL, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T05:11:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add Speakeasy Telegram voice-button eligibility and callback handling - generate Airy V2 voice replies from cached eligible text via workspace TTS script - enforce 24h cache expiry and 50 tap generations/chat/day cap - add Telegram delivery and ca

### #87799 fix(install): harden stdin consumers to prevent pipe corruption in curl | bash

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:11:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90008 Fixes #73814 ## Problem When the OpenClaw installer is piped via `curl | bash`, child processes spawned under `gum spin` can inherit the script stream as stdin. Gum v0.17.0 sets the wrapped command's stdin to `os.Stdin`, allowing npm or other subp

### #87863 fix(qqbot): send user-facing error message when lane dispatch fails

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, channel: qqbot, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:13:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary QQ Bot silently swallows lane errors (rate limit, timeout, FailoverError) — the user receives no feedback at all, and the message simply disappears into the void. Unlike other channels (Telegram, Feishu), the QQ Bot has no "thinking" indicator, so a

### #87900 feat(memory): add Memory Audit review queue

- bucket: needs_proof
- author: SYU8384
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, extensions: memory-core, size: XL, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:14:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Adds Memory Audit as a human-reviewed memory quality pass for cleanup, correction, and promotion from daily/session evidence into durable targets. - Exposes audit collection/staging tools, Gateway doctor methods, a

### #87941 feat(ui): add KaTeX math rendering support

- bucket: needs_proof
- author: deepshekhardas
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: XL, triage: needs-real-behavior-proof, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T05:15:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Rebased fix of PR #87568 by @tered12114-bot with conflicts resolved. - Adds KaTeX math rendering support to the chat UI - Adds mathRendering config option - Threads mathRendering through render pipeline - Adds toSanitizedMarkdownHtmlWithKatex with D

### #88894 docs(feishu): document raw-mode card fallback

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:15:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Documents the Feishu/Lark CardKit fallback symptom from #88888, where an interactive-card reply can show only the client-upgrade fallback text instead of the final answer. - Adds the plain-rendering workaround using `streaming: false` plus `render

### #88013 fix(secrets): stage all files then commit so apply never half-migrates

- bucket: needs_proof
- author: Feelw00
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:17:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # fix(secrets): stage all files then commit so apply never half-migrates > AI-assisted PR. Drafted with Claude Code (claude-opus-4-8). Fully tested: a new regression test in `src/secrets/apply.test.ts` fails before this change and passes after, and the fix was

### #88023 feat(hooks): emit session:aborted + opt-in auto-continue hook

- bucket: needs_proof
- author: Petr1t
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:17:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the stuck-session watchdog hard-aborts an embedded run, the run goes silent — all queued progress is lost and the agent never resumes on its own. This adds a self-healing backstop: 1. **Emit `session:aborted`** — when `recoverStuckDiagnosticSes

### #88078 fix(active-memory): trim recall prompt envelope

- bucket: needs_proof
- author: gisk0
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:19:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Trim Active Memory's recall "latest user message" before building the recall subagent conversation context. - Prefer the explicit `Current user request:` section when a prompt envelope contains OpenClaw runtime context, then fall back to short pro

### #88082 feat(stepfun): add step-3.7-flash model

- bucket: needs_proof
- author: lit26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XS, extensions: stepfun, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:19:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `step-3.7-flash` to the bundled StepFun provider plugin on both surfaces (`stepfun`, `stepfun-plan`). - Make `step-3.7-flash` the default model (`STEPFUN_DEFAULT_MODEL_ID`); propagates to onboarding + provider registration via the derived `STE

### #88112 fix(agents): ensure inline image attachments use ASCII base64 (Fixes #86984)

- bucket: needs_proof
- author: alkor2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:19:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Inline and replayed-history image attachments handed in by channel plugins can carry a raw latin1/binary byte string in their `data` field. This value was forwarded untouched into the provider `source.base64`. The Anthropic Messages API rejects any 

### #88193 [codex] tighten final Telegram DM recovery

- bucket: needs_proof
- author: Jaehdawg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T05:21:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Preserve the real durable suppression reason in Telegram final delivery results instead of collapsing every no-send into `no_visible_result`. - Retry the missing-final Telegram recovery path only when the durable send truly reports `no_visibl

### #88224 fix(update): prefer package root as managed-service handoff cwd (fixes #87889)

- bucket: needs_proof
- author: ztexydt-cqh
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T05:21:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes **#87889** — Dashboard updates for global installs are skipped with `managed-service-handoff-started`, while CLI updates succeed. ## Root Cause `resolveManagedServiceHandoffCwd` preferred `os.homedir()` over the package `root` when choosing th

### #88239 fix(agents): surface terminal stream errors

- bucket: needs_proof
- author: Darclindy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:22:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Surface terminal stream/timeout errors as assistant text events on both the process event bus and the local run observer. - Preserve terminal error payload returns even if local event observers reject. - Add coverage for OpenAI stream parsing, inc

### #88240 fix(ui): keep session switching responsive

- bucket: needs_proof
- author: Darclindy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XL, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:22:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep chat/session switching responsive by coalescing explicit session-switch reloads without caching event-driven `commands.list` results. - Harden lifecycle recovery so internal webchat late errors can recover persisted successful output without 

### #88249 feat(desktop): add Tauri model setup app

- bucket: needs_proof
- author: Darclindy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, scripts, size: XL, proof: supplied, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:22:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add the Tauri desktop app shell, runtime preparation/smoke scripts, native gateway sidecar launcher, and desktop packaging ignores for generated artifacts. - Add desktop model setup UI/controllers and gateway model probe support with guarded crede

### #88336 fix(codex): normalize native command exit status

- bucket: needs_proof
- author: shbernal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: mock-only-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:24:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Normalize only the reported Codex-native grep/rg no-match shape: direct `grep`/`rg` commands and grep/rg pipeline segments with `exitCode: 1` are completed tool results instead of `lastToolError` warnings. - Keep generic `exitCode: 1` native comma

### #88396 feat(cron): make isolated-agent setup watchdog configurable

- bucket: needs_proof
- author: Kaspnov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:26:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The cron **setup watchdog** that aborts an isolated agent job which has not reached `runner started` is a hardcoded `60_000` ms (`CRON_AGENT_SETUP_WATCHDOG_MS` in `src/cron/service/timer.ts`). It is not overridable via config. - When several heavy

