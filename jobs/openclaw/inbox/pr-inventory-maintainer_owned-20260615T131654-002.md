---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T131654-002
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
  - "#87695"
  - "#88121"
  - "#88292"
  - "#91957"
  - "#88533"
  - "#88589"
  - "#88621"
  - "#88649"
  - "#91878"
  - "#88673"
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
  - "#91770"
  - "#88876"
  - "#92833"
  - "#88959"
  - "#47523"
cluster_refs:
  - "#87695"
  - "#88121"
  - "#88292"
  - "#91957"
  - "#88533"
  - "#88589"
  - "#88621"
  - "#88649"
  - "#91878"
  - "#88673"
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
  - "#91770"
  - "#88876"
  - "#92833"
  - "#88959"
  - "#47523"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.468Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 2

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #87695 fix(types): unblock changed gate checks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T09:55:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds the optional approval-action marker that `approval-reaction-runtime` already reads. - Narrows package manifest cache stat handling through an explicit non-null local. - Unblocks `check:changed` type/lint gates that are currently blocking the 

### #88121 Lower profile tool policy filter audit logs

- bucket: maintainer_owned
- author: sjf
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T13:41:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Log profile-stage tool catalog trimming at debug instead of info. - Keep explicit allow/deny, sender/group, provider policy removals, and sandbox tool blocks visible at info. Verification - Not run (single log-level routing change requested).

### #88292 fix(update): guard Windows task autostart during package updates

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, cli, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T14:13:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - disables enabled Windows Scheduled Task autostart while a managed package update replaces the OpenClaw package tree - covers running, stopped, and unclassified installed task runtimes, including `--no-restart` stopped/unknown cases where the task 

### #91957 perf(sessions): share one enumeration across archive retention sweeps

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: M, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-10T14:51:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Every non-warn session-store save runs archived-transcript retention cleanup, and reset-archive retention **defaults on** (`resolveResetArchiveRetentionMs` falls back to `pruneAfterMs` when unset). So `saveSessionStoreUnlocked` invoked `cleanupArchi

### #88533 test(core): align changed gate type fixtures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:20:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR is currently parked as a narrow changed-gate fixture cleanup. It was useful while the schema-runtime PR was blocked by transient main drift, but newer main now enables stricter unsafe-assertion lint on the full changed test files. Making thi

### #88589 fix(cli): allow agent gateway auth overrides

- bucket: maintainer_owned
- author: mbelinky
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, commands, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:20:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Add --url, --token, and --password overrides to openclaw agent. - Forward those overrides into the Gateway agent RPC and the follow-up abort RPC. - Document the overrides as per-invocation Gateway auth escapes for unavailable SecretRefs. Verification

### #88621 fix(types): restore current changed gate

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:21:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - updates the sanitize-session-history test harness type so tests can pass the runtime `model` metadata used by current callers - parses persisted device-auth token maps through the existing canonical token copier instead of returning raw `Record<st

### #88649 test(agents): use neutral tool schema fixtures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, commands, agents, maintainer, size: M, extensions: codex, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:21:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replaces private plugin/tool fixture names in tool-schema tests with neutral `fuzzplugin` / `mockplugin` names - keeps this PR test-only so follow-up runtime hardening can land separately ## Verification - `node scripts/run-vitest.mjs <14 changed 

### #91878 fix(codex): validate maintained app-server types

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: kevinslin
- labels: scripts, maintainer, size: M, extensions: codex, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T17:40:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - validate OpenClaw's maintained Codex app-server request and raw inbound types against temporary TypeScript generated from the pinned Codex source - keep only the selected JSON schemas in the repository; no generated TypeScript files are committed 

### #88673 test(outbound): align implicit source reply sink

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T17:43:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Updates the current-main outbound routing test to expect the internal source sink for implicit `message_tool_only` source replies. - Keeps explicit current-source sends covered by the following Slack plugin-delivery test. ## Verification - `node s

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

### #91770 fix(memory): abort search embeddings on tool timeout

- bucket: maintainer_owned
- author: ai-hpc
- author association: MEMBER
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T01:00:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91718 by making the memory_search tool timeout cancel the underlying builtin memory embedding search instead of only racing the outer tool promise. - Adds an optional `AbortSignal` to the memory search manager options contract. - Aborts the i

### #88876 fix(ci): restore cron schema snapshots

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, extensions: phone-control, size: L, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T01:35:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - refreshes the affected Codex prompt snapshots against the provider-normalized cron tool schema - keeps the cron runtime schema nullable so `null` clear values still reach cron patch normalization - fixes the phone-control test lint/type regression

### #92833 fix(memory): search memory and wiki concurrently for corpus=all (#92633)

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:18:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - `memory_search` with `corpus=all` ran the builtin memory/sessions branch and the wiki/supplement branch **sequentially** under one 15s tool deadline. Two searches that each finished well under 15s individually summed past the deadline, so `corpus

### #88959 fix(plugins): ignore throwing provider runtime hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:33:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - catch throwing provider runtime `normalizeModelId` and `normalizeTransport` hooks so model/transport normalization keeps its existing fallback paths - log sanitized provider hook failures instead of letting a bad plugin poison provider lookup - ke

### #47523 Agents: tighten tool name trust and preflight tool collisions

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, commands, agents, maintainer, size: L, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T03:44:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: tool-result local media trust relied on normalized names, so external tools could collide with built-in names and inherit local path passthrough. - Why it matters: that made it possible for non-built-in tool results to be treated as trust

