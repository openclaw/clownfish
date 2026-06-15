---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-003
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
  - "#88713"
  - "#88732"
  - "#92014"
  - "#88793"
  - "#88835"
  - "#91903"
  - "#92119"
  - "#92114"
  - "#92107"
  - "#92160"
  - "#92161"
  - "#88841"
  - "#92190"
  - "#92111"
  - "#47263"
  - "#92288"
  - "#92011"
  - "#92016"
  - "#92520"
  - "#92557"
  - "#88633"
  - "#92667"
  - "#92681"
  - "#89991"
  - "#90262"
cluster_refs:
  - "#88713"
  - "#88732"
  - "#92014"
  - "#88793"
  - "#88835"
  - "#91903"
  - "#92119"
  - "#92114"
  - "#92107"
  - "#92160"
  - "#92161"
  - "#88841"
  - "#92190"
  - "#92111"
  - "#47263"
  - "#92288"
  - "#92011"
  - "#92016"
  - "#92520"
  - "#92557"
  - "#88633"
  - "#92667"
  - "#92681"
  - "#89991"
  - "#90262"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.195Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 3

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #88713 docs: document agent helper comments

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, commands, docker, agents, maintainer, size: XL, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T17:43:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Follow-up to landed PR #88554 for the inline-comment pass, rebased onto current `main` and kept free of file-top/header comments and import-block comments. - Adds targeted JSDoc and inline comments around command helpers, status/doctor flows, mode

### #88732 feat(feeds): add native feed search defaults

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof, extensions: policy
- gitcrawl snapshot updated: 2026-06-10T17:44:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds the opt-in path for native `openclaw skills search` and `openclaw plugins search` to use configured catalog feeds. This PR keeps the rollout explicit: - `--catalog-feeds` searches configured feed sources for one command. - `--feed-source <id>` 

### #92014 fix(doctor): survive throwing plugin hooks and warn on build-version skew

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: L
- gitcrawl snapshot updated: 2026-06-10T19:52:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hardens `openclaw doctor` and plugin loading against installed plugins built for a different OpenClaw release, the failure class behind #91991 (reported by @cn1313113): `@openclaw/feishu@2026.6.5-beta.5` imports an SDK export that `openclaw@2026.6.5

### #88793 docs: document cli command path helpers

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, maintainer, size: XL, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-11T04:02:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Documents exported CLI command-path matching helpers. - Documents CLI JSON output helpers for pre-parse flag detection and stderr routing restoration. - Documents CLI respawn policy helpers and the foreground gateway no-respawn invariant. - Docume

### #88835 fix(gateway): guard node approval policy writes

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-11T04:03:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a gateway-side fresh read before `exec.approvals.node.set` forwards node approval policy writes. - Reject missing/stale `baseHash` values against the current node snapshot so stale UI/CLI state cannot overwrite newer node approval rules. - Nor

### #91903 feat(plugin-sdk): add extensible channel identity hook context

- bucket: maintainer_owned
- author: lanzhi-lee
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, agents, size: M, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-11T08:32:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds an extensible channel sender/chat context to plugin hook contexts and exposes the same context to `exec`. It lets a channel plugin pass channel-owned identity metadata, such as Feishu/Lark sender and chat identifiers, without adding mor

### #92119 fix(supervisor): resolve Claude/Gemini CLI .cmd shims on Windows [AI-assisted] (alternative to #91490)

- bucket: maintainer_owned
- author: luyao618
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: XS, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T08:40:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > 🤖 AI-assisted (built with Claude Code via Hermes orchestration). Test level: fully tested locally on macOS via tsx-driven reproducer against the real `resolveWindowsCommandShim`. Prompt summary available on request. ## Summary - **Problem:** On Windows, `op

### #92114 fix(memory): report indexed vector store in status

- bucket: maintainer_owned
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: extensions: memory-core, size: XS, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T08:40:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Report the builtin vector store as ready in plain `memory status` when indexed chunks already exist, even before sqlite-vec is lazily loaded in the current CLI process. - Keep semantic vector readiness unchanged so plain status does not probe embe

### #92107 fix(gateway): use normalizeMessageChannel for send validation to support plugin channels

- bucket: maintainer_owned
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: gateway, size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T08:58:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92094. The `message` tool `action=send` was returning "unsupported channel: telegram" because the gateway send method was using `normalizeChannelId` which only checks the active plugin registry, causing failures when the registry wasn't fully

### #92160 fix(outbound): honor NO_REPLY in message tool sends

- bucket: maintainer_owned
- author: lanzhi-lee
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T12:12:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Honor `NO_REPLY` in outbound message-tool `send` calls so model-emitted silent-reply tokens are not delivered to users. - Strip trailing `NO_REPLY` from direct-message sends while preserving the visible text. - Return a suppressed success payload 

### #92161 feat(diagnostics): chain gateway traces into runs

- bucket: maintainer_owned
- author: lanzhi-lee
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, extensions: diagnostics-otel, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T12:21:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Chain gateway diagnostic traces into embedded agent runs using the existing `DiagnosticTraceContext` instead of adding a second run/request scope. - Add trusted-boundary-aware gateway request/message trace helpers, plus `run.invocation` / `run.inv

### #88841 fix(discord): reconnect after abnormal gateway close

- bucket: maintainer_owned
- author: levineam
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: channel: discord, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-11T17:50:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - re-arm Discord gateway reconnect after abnormal non-intentional closes when shouldReconnect had been cleared - preserve intentional disconnect and normal close behavior - add regression coverage for abnormal 1006 recovery and intentional disconnec

### #92190 Route app-owned web egress through managed proxy path

- bucket: maintainer_owned
- author: joshavant
- author association: MEMBER
- draft: no
- assignees: joshavant
- labels: docs, commands, agents, maintainer, size: XL, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, extensions: policy
- gitcrawl snapshot updated: 2026-06-11T23:25:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR moves ordinary app-owned web/media/download egress onto a neutral app fetch transport so the managed runtime proxy is the central place for outbound destination policy. Key behavior changes: - `web_fetch`, app-owned media URL reads, marketpl

### #92111 fix(update): restart managed gateway when update handoff fails after stop

- bucket: maintainer_owned
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-12T00:39:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92088. When a managed-service update handoff fails after the update command has already stopped `openclaw-gateway.service`, nothing restarted the gateway, leaving the host with no live gateway until manual recovery (`loaded inactive dead`, re

### #47263 Improve macOS onboarding UX and gateway setup

- bucket: maintainer_owned
- author: ImLukeF
- author association: CONTRIBUTOR
- draft: no
- assignees: ImLukeF
- labels: app: macos, commands, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T12:03:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - improve macOS onboarding flow so local installs reach the CLI step and don’t race the gateway/node connection paths - refresh the onboarding wizard layout and provider selection UI so the primary action stays visible and provider copy/defaults are

### #92288 fix(agents): quiet extra_body tuning-key collisions

- bucket: maintainer_owned
- author: ai-hpc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, size: S, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T14:08:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes noisy `extra_body` collision warnings for OpenAI-compatible requests. - Treats `extra_body` as the provider-specific escape hatch for intentional tuning-key overrides such as `thinking`. - Keeps warning coverage for framework-owned req

### #92011 fix(agents): prevent recursive task execution during model fallback

- bucket: maintainer_owned
- author: MertBasar0
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: agents, size: M, proof: supplied, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T18:54:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a session's primary model becomes unavailable mid-session and a fallback model serves a turn that was triggered by an internal completion announcement, the fallback can misread the announced report as a directive and spawn duplicate work. In th

### #92016 fix(plugins): compose live hook registry view for tool-call hooks

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-12T20:08:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91918. After upgrading 2026.5.27 → 2026.6.5, `before_tool_call` / `after_tool_call` hooks of local (global-dir) extensions register but never fire during agent runs, silently disabling hook-based safety/observability plugins. **Root cause.** 

### #92520 Fix Codex synthetic usage in status without local OpenAI profiles

- bucket: maintainer_owned
- author: brokemac79
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, commands, size: L, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-12T21:11:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - route `/status` Codex synthetic usage through the Codex app-server marker even when no local OpenAI OAuth/token profile label exists - teach shared `status --usage` to add the Codex synthetic OpenAI usage snapshot only for configured OpenAI Codex 

### #92557 Validate ClawHub plugin metadata in PRs

- bucket: maintainer_owned
- author: Patrick-Erichsen
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, scripts, maintainer, size: XL, dependencies-changed, rating: 🌊 off-meta tidepool, extensions: llama-cpp
- gitcrawl snapshot updated: 2026-06-13T02:10:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix `@openclaw/llama-cpp-provider` ClawHub metadata so `clawhub@0.21.0 package validate extensions/llama-cpp` reports zero warnings. - Add a PR-only workflow for `extensions/**` changes that validates changed ClawHub-publishable plugin packages. -

### #88633 fix(ci): restore cron run-log Kysely guard

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T06:34:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - routes cron run-log count, page, max-seq, and prune queries through Kysely instead of raw SQLite strings - preserves the existing filter semantics, including `not-requested` delivery status rows stored as `NULL` - keeps this as a one-file current-

### #92667 ci: add process exec CodeQL security shard

- bucket: maintainer_owned
- author: hxy91819
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T15:19:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a `process-exec-boundary` CodeQL high-security shard for local shell, subprocess helpers, subprocess-owning bundled plugin runtimes, and workflow script glue - wire the new shard into the existing `CodeQL` security matrix and PR/push path filt

### #92681 ci: gate secret scanning remediation approval

- bucket: maintainer_owned
- author: hxy91819
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-13T15:20:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace the public secret-scanning nudge approach from #71370 with a protected-environment remediation flow. - Add a `secret_scanning_alert` workflow that first runs a read-only sanitized plan job, then waits on the `secret-remediation` environmen

### #89991 fix(gateway): isolate method list rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T17:08:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate plugin-owned gateway method list rows so malformed channel metadata does not break advertised method catalogs - share the guarded projection with gateway runtime startup so the live `gatewayMethods` list and method-list APIs behave consist

### #90262 fix(agents): guard tool definition schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T17:08:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard agent tool definition adaptation against unreadable `parameters` getters - guard client tool definition adaptation against unreadable `function.parameters` getters - fall back to the minimal empty object schema instead of crashing the adapte

