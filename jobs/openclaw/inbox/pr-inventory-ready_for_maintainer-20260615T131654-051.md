---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-051
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
  - "#90230"
  - "#90271"
  - "#90273"
  - "#90280"
  - "#90275"
  - "#90357"
  - "#90142"
  - "#90514"
  - "#90206"
  - "#89944"
  - "#90019"
  - "#90363"
  - "#90592"
  - "#90819"
  - "#90530"
  - "#91346"
  - "#88479"
  - "#91409"
  - "#91488"
  - "#91520"
  - "#91559"
  - "#90433"
  - "#91543"
  - "#91640"
  - "#91646"
  - "#91663"
  - "#90500"
  - "#91706"
  - "#90367"
  - "#91758"
  - "#91674"
  - "#91803"
  - "#91797"
  - "#91438"
  - "#91810"
  - "#91907"
  - "#87627"
  - "#87681"
  - "#87702"
  - "#88442"
cluster_refs:
  - "#90230"
  - "#90271"
  - "#90273"
  - "#90280"
  - "#90275"
  - "#90357"
  - "#90142"
  - "#90514"
  - "#90206"
  - "#89944"
  - "#90019"
  - "#90363"
  - "#90592"
  - "#90819"
  - "#90530"
  - "#91346"
  - "#88479"
  - "#91409"
  - "#91488"
  - "#91520"
  - "#91559"
  - "#90433"
  - "#91543"
  - "#91640"
  - "#91646"
  - "#91663"
  - "#90500"
  - "#91706"
  - "#90367"
  - "#91758"
  - "#91674"
  - "#91803"
  - "#91797"
  - "#91438"
  - "#91810"
  - "#91907"
  - "#87627"
  - "#87681"
  - "#87702"
  - "#88442"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.483Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 51

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90230 test: run permission hardening backup test on Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-04T09:06:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Enables running the config backup permission hardening test logic on Windows by splitting it into two distinct test cases: 1. `hardenBackupPermissions sets 0o600 on all backup files`: Gated to POSIX platforms (`it.skipIf(IS_WINDOWS)`), where we verify the exac

### #90271 test: make fs-safe symlink tests compatible with Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-04T10:09:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skips in the fs-safe symlink-related test cases with dynamic `canCreateFileSymlinks` and `canCreateDirectorySymlinks` capability checks. If symlinking is supported by the OS environment, the tests run. This permits test coverage 

### #90273 test: make fs-safe hardlink tests compatible with Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-04T10:09:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skips in the fs-safe hardlink-related test cases with a dynamic `canCreateHardlinks` capability check. If hardlink creation is supported by the partition and environment (which it is for NTFS local file system tests), the tests r

### #90280 test: make zalo token resolver symlink test compatible with Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalo, size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-04T10:10:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skip in the Zalo token resolver test suite with a dynamic `canCreateFileSymlinks` capability check. If file symlinking is supported by the OS environment, the test executes. Otherwise, it skips gracefully, allowing correct platfo

### #90275 test: make install-safe-path symlink tests compatible with Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-04T14:22:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skips in the install-safe-path test suite with a dynamic `canCreateDirectorySymlinks` capability check. If directory symlinking is supported by the OS environment, the tests execute. Additionally, uses directory junctions (via th

### #90357 fix(agents): resolve compaction model alias before dispatch

- bucket: ready_for_maintainer
- author: alkor2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-04T15:45:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Auto-compaction read `agents.defaults.compaction.model` verbatim, so a configured alias (no provider prefix) was forwarded unchanged and rejected downstream. With the alias `gpt54mini` configured for `openai/gpt-5.4-mini`, embedded auto-compaction d

### #90142 fix(crestodian): retry local gateway startup probe

- bucket: ready_for_maintainer
- author: yyzquwu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-04T20:01:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - retry local-loopback Crestodian Gateway startup probes once after a short delay - keep remote Gateway probes single-shot, and keep probing `/healthz` - cover retry/no-retry behavior for loopback, IPv4-mapped loopback, and remote URLs Fixes #88254 

### #90514 fix(session): clear stale fallback model state on reset

- bucket: ready_for_maintainer
- author: baskduf
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-05T03:53:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refs #90496. This fixes the reset/session-target portion of the Discord oversized-session report: - Clear stale runtime model, context-window, fallback notice, and harness metadata when `/new` or `/reset` rotates a reply session. - Treat source-less

### #90206 Fix Bedrock aws-sdk compaction auth

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-05T07:11:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Bedrock models configured with `auth: "aws-sdk"` can authenticate through the AWS SDK credential chain without static request credentials, but the compaction safeguard treated a successful request-auth lookup with no `apiKey` or headers a

### #89944 Idr msteams adaptive card tables

- bucket: ready_for_maintainer
- author: rrajp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-05T15:05:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** Microsoft Teams renders markdown tables as plain-text code blocks (```` ``` ````-wrapped ASCII tables), which are hard to read on mobile, lose column alignment in narrow viewports, and cannot be scrolled horizont

### #90019 fix(memory-search): default periodic sync fallback

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-05T23:05:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Default `memorySearch.sync.intervalMinutes` to `30` when neither agent overrides nor defaults configure it. - Preserve explicit `intervalMinutes` values from agent overrides or defaults, including `intervalMinutes: 0` as the opt-out. - Make t

### #90363 Fix CI guard baselines

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-06T00:54:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - mark two backward-compatible aliases as deprecated so the deprecated-JSDoc guard accepts them - update the production lint-suppression baseline for host-hook-runtime after the suppression tail dropped from 2 to 1 ## Validation - pnpm check:depreca

### #90592 fix(synology-chat): remove local deliver timeout

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, channel: synology-chat, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-06T02:25:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #59966. ## What changed Removed the Synology Chat webhook handler's local `Promise.race` wrapper with the hardcoded 120s timeout. The handler now awaits `params.deliver(...)` directly, so the channel layer no longer overrides the core agent timeout confi

### #90819 fix(gateway): pin plugin workspace dir during sessions.list to stop O(rows) metadata scans under concurrency

- bucket: ready_for_maintainer
- author: k-l-lambda
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-06T03:00:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the residual concurrency facet of #76562, tracked in #90814. `sessions.list` becomes O(rows) slow — tens of seconds — **only when other agents/crons run concurrently**; on an idle gateway it is fast. The per-row plugin model-id-normalization l

### #90530 chore: formatDiskSpaceBytes emits "1024 MiB" instead of "1.0 GiB" a

- bucket: ready_for_maintainer
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-07T20:03:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90245. AI-generated fix, human-reviewed. ## Change Type / Scope / Linked Issue - **Type**: chore - **Scope**: infra/disk-space - **Linked Issue**: Fixes #90245 ## Motivation `formatDiskSpaceBytes` in `src/infra/disk-space.ts` can render the i

### #91346 fix(cli): quiet local no-auth gateway warning

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-08T07:14:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Quiet the Gateway `auth mode=none` startup warning only for strictly local loopback no-auth startup. - Keep the warning for non-loopback binds and loopback configs with exposure signals: Tailscale, `gateway.trustedProxies`, `gateway.controlUi.allo

### #88479 feat(ui): inline rename in the in-chat session picker

- bucket: ready_for_maintainer
- author: BSG2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-08T07:59:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** The in-chat session picker only lets users *switch* sessions. Renaming still requires the admin "Sessions" tab, which is cumbersome when juggling several parallel, topic-specific chats — exactly the friction reported in #54397. - **Ch

### #91409 fix(update): run plugin convergence after RPC git updates

- bucket: ready_for_maintainer
- author: masatohoshino
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-08T13:32:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? The gateway `update.run` RPC updates git/source installs via `runGatewayUpdate`, but — unlike the `openclaw update` CLI — it never resumed the post-core plugin convergence that `runGatewayUpdate`'s doctor pass *defer

### #91488 fix(reply): project preflight compaction gate by next-input size on fresh tokens

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-08T20:33:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On the embedded runtime, proactive **preflight** compaction under-triggers on long-lived sessions. The pre-send gate (`runPreflightCompactionIfNeeded`) decides whether to compact *before* the next request, but in the common fresh-tokens path it size

### #91520 fix(control-ui): show agents as a visible list instead of a dropdown

- bucket: ready_for_maintainer
- author: ZengWen-DT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-08T23:01:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Agents page hid every agent behind a single `<select>`, so switching agents meant opening a dropdown every time — high friction once you have many agents (the core complaint in #57067). This PR renders a **visible agent navigation list** on desk

### #91559 fix(agents): clean Gemini tool schemas by model id

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-09T02:31:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #91542 by applying the existing Gemini tool-schema cleanup when an OpenAI-compatible provider uses a Gemini model id, not only when the provider id itself is `google` or `gemini`. - Includes `modelCompat.toolSchemaProfile` in both the Gemini

### #90433 fix(memory-core): exclude archived transcripts from Dreaming session corpus

- bucket: ready_for_maintainer
- author: xiaobao-k8s
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-09T02:50:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Archived session transcripts (`.jsonl.reset.*` and `.jsonl.deleted.*`) are currently ingested into the Dreaming corpus, polluting analysis with reset/deleted cron-spawned subagent noise. On a cron-heavy deployment, this causes 67-91% of the daily co

### #91543 feat: add collapsible workspace files rail

- bucket: ready_for_maintainer
- author: AdvancedForge
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-09T03:20:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Adds a collapse/expand control for the Workspace Files rail in the Control UI chat view. * Persists the Workspace Files rail state across page refreshes using the existing UI settings mechanism. * Reclaims horizontal space for the chat workspace w

### #91640 docs(compaction): warn that compaction.model breaks native compaction on claude-cli/OAuth

- bucket: ready_for_maintainer
- author: z1pp090
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-09T07:12:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Compaction docs present `agents.defaults.compaction.model` as a safe "use a more capable model for summaries" knob. On CLI backends that own native compaction (e.g. `claude-cli`), it is a footgun: the override cancels the backend deferral and fo

### #91646 fix(browser): remove dead void requireRef in navigation registration

- bucket: ready_for_maintainer
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-09T07:44:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `register.navigation.ts` imports `requireRef` and pins it with `void requireRef` to silence the unused-import lint warning. The void expression is a side-effect hack. - What changed: Removed the unused `requireRef` import and the `void re

### #91663 fix(backup): clean up stale .tmp archives from interrupted runs before creating new backup

- bucket: ready_for_maintainer
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-09T08:48:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `openclaw backup create` is interrupted (timeout, SIGKILL, process crash), the temporary `.tar.gz.<uuid>.tmp` file created by `buildTempArchivePath()` is left on disk. On successive runs, each interrupted backup leaves a new `.tmp` file, accumu

### #90500 Fix stale session routes for removed providers

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-09T08:51:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Prevents stale persisted session model/provider state from routing through a provider that is no longer visible to the current gateway model catalog/config. - Applies the guard in `resolveSessionModelRef`, and wire

### #91706 fix(memory): keep local embedding indexes clean when only local.modelPath is set

- bucket: ready_for_maintainer
- author: tiffanychum
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-09T14:27:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91001. A local (llama.cpp) embeddings index configured solely via `local.modelPath` was permanently reported as `Dirty: yes`, pausing vector search even right after a successful `openclaw memory status --index`. **Root cause:** the llama.cpp 

### #90367 Fix unreadable Sessions label column

- bucket: ready_for_maintainer
- author: toruvieI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-09T16:29:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - give the Sessions table `Label` column an explicit, text-sized width instead of letting the browser table algorithm squeeze it down - move the label input's inline styling into CSS and size it in `ch`, with room for padding/border - keep the exist

### #91758 Preserve parent delivery for webchat-spawned child sessions

- bucket: ready_for_maintainer
- author: njhallman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-09T20:02:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve the parent external delivery context when child work is spawned from a webchat view attached to an external-channel session - keep SMS/iMessage-origin sessions from drifting to webchat for spawned child/session work - add a regression tes

### #91674 fix(heartbeat): allow exec-event wakes to bypass interval cooldown

- bucket: ready_for_maintainer
- author: solodmd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T01:23:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Background exec completion events (`exec-event`) are silently dropped when a second background process exits within the heartbeat interval window. The agent never receives the completion notification for the second process. - **Why it matters:** use

### #91803 fix(imessage): stage remote media before plugin dispatch

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T01:59:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stage remote inbound media during dispatch before plugin hook and plugin-bound inbound-claim metadata is built. - Mark successfully staged remote media as already staged so the later agent reply path does not restage the same attachment. - Add reg

### #91797 fix(embedded-agent-runner): treat the run's own no-op in-place session rewrite as benign

- bucket: ready_for_maintainer
- author: gucasbrg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-10T04:51:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Long, streaming agentic turns on channel chats (Matrix in our case) intermittently abort with `EmbeddedAttemptSessionTakeoverError: session file changed while embedded prompt lock was released`, and the already-streamed reply gets redacted ("Messa

### #91438 feat(voice-call): Microsoft Teams provider — CVI voice/video calls

- bucket: ready_for_maintainer
- author: ahenawy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, channel: voice-call, size: XL, extensions: openai, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-10T05:01:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds the **Microsoft Teams (`msteams`) provider** to the `voice-call` extension — inbound voice + inbound video vision, group/meeting awareness, and outbound "call me back" — over an HMAC-authenticated WebSocket endpoint. Works in **1:1 and group/me

### #91810 fix(ui): reload WebChat history for deferred thinking

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T06:28:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91727. ## Summary WebChat now keeps a deferred persisted assistant `session.message` with thinking/reasoning pending while the local run is active, then reloads the selected transcript after the terminal final when that final payload only contains rende

### #91907 fix(test): skip live auth browser caches

- bucket: ready_for_maintainer
- author: BryanTegomoh
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T09:18:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent live test auth staging from copying generated browser profile, cache, and recording trees from external auth directories such as `.gemini`. - Preserve staged auth/config files, including `.gemini/oauth_creds.json` and `.gemini/settings.jso

### #87627 docs(platforms): add ClawBox (Jetson hardware appliance)

- bucket: ready_for_maintainer
- author: KrasimirKralev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: external-plugin-candidate, proof: supplied, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-10T09:54:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds a **Hardware** section to the Platforms page and a short `platforms/clawbox.md` page documenting ClawBox — an NVIDIA Jetson appliance that ships with the OpenClaw Gateway preconfigured. The Platforms page currently covers OS targets and VPS/hostin

### #87681 fix(exec): surface oom_score_adj raise when SIGKILLs hit broad find/grep on Linux (#69242)

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T09:55:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - On Linux, broad `find` / `grep -R` discovery commands intermittently terminate with SIGKILL and the exec tool reports the bare `Command aborted by signal SIGKILL` reason. `journalctl -k` shows no system OOM line, s

### #87702 fix(coding-agent): strip Claude Code nesting env vars when spawning claude (#57858)

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, extensions: anthropic, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T09:55:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Coding-agent skill SKILL.md now spawns Claude Code with `env -u CLAUDECODE -u CLAUDE_CODE_SESSION_ID -u CLAUDE_CODE_ENTRYPOINT claude ...` so a nested OpenClaw-inside-Claude-Code dispatch does not inherit the parent's nesting guard and silently no

### #88442 Add report-only agent safety regression gate

- bucket: ready_for_maintainer
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-10T14:59:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds deterministic RAMPART-style OpenClaw agent safety regression coverage for four report-only incident classes: agent overreach, prompt injection, credential access, and destructive action. ## Why Safety incidents need runnable CI artifacts, not one-

