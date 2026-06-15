---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-086
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
  - "#90223"
  - "#90226"
  - "#90230"
  - "#93038"
  - "#90273"
  - "#90280"
  - "#90300"
  - "#90328"
  - "#90331"
  - "#90357"
  - "#90363"
  - "#90373"
  - "#90421"
  - "#90433"
  - "#92251"
  - "#91310"
  - "#91345"
  - "#91346"
  - "#91409"
  - "#90271"
  - "#93274"
  - "#41284"
  - "#50463"
  - "#75403"
  - "#75469"
cluster_refs:
  - "#90223"
  - "#90226"
  - "#90230"
  - "#93038"
  - "#90273"
  - "#90280"
  - "#90300"
  - "#90328"
  - "#90331"
  - "#90357"
  - "#90363"
  - "#90373"
  - "#90421"
  - "#90433"
  - "#92251"
  - "#91310"
  - "#91345"
  - "#91346"
  - "#91409"
  - "#90271"
  - "#93274"
  - "#41284"
  - "#50463"
  - "#75403"
  - "#75469"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.804Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 86

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90223 test: make qqbot symlinked media helper test robust on Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, channel: qqbot, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:33:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skip in QQ Bot file-utils test with a dynamic file symlink capability check. If file symlinks are supported by the environment, the test executes. Otherwise, it skips gracefully, allowing correct platform-specific testing. ### Ve

### #90226 [AI-assisted] Preserve thread sessions across daily reset by default

- bucket: ready_for_maintainer
- author: simplyclever914
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T12:33:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Thread-scoped chat sessions currently inherit the global implicit daily reset policy when users do not configure `session.resetByType.thread`. For long-running Telegram/Slack/Discord topics this can rotate the OpenClaw session after the daily bounda

### #90230 test: run permission hardening backup test on Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:33:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Enables running the config backup permission hardening test logic on Windows by splitting it into two distinct test cases: 1. `hardenBackupPermissions sets 0o600 on all backup files`: Gated to POSIX platforms (`it.skipIf(IS_WINDOWS)`), where we verify the exac

### #93038 Add agent role eval harness

- bucket: ready_for_maintainer
- author: SnowBelt
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T12:33:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a minimal deterministic agent role evaluation harness: CLI, reusable contract catalog, tests, package scripts, and a read-only contract-catalog workflow. - Creates a clean prerequisite for follow-up Browser Steward runtime-enforcement work wi

### #90273 test: make fs-safe hardlink tests compatible with Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T12:37:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skips in the fs-safe hardlink-related test cases with a dynamic `canCreateHardlinks` capability check. If hardlink creation is supported by the partition and environment (which it is for NTFS local file system tests), the tests r

### #90280 test: make zalo token resolver symlink test compatible with Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalo, size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:37:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skip in the Zalo token resolver test suite with a dynamic `canCreateFileSymlinks` capability check. If file symlinking is supported by the OS environment, the test executes. Otherwise, it skips gracefully, allowing correct platfo

### #90300 fix: route agent command replies through reply hooks

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:39:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes agent-command durable final delivery so recovered/main-session replies carry `reply_payload_sending` hook metadata into the existing outbound send path. - Lets channel plugins that rely on `reply_payload_sending` observe, rewrite, cancel, or

### #90328 Expose model picker agent runtimes

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:40:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds additive `agentRuntime` metadata to `models.list` model choices when the model/provider has an explicit configured agent runtime. - Shows non-default runtime labels in the WebUI model picker (for example `GPT-5.5 · OpenAI Codex`) without chan

### #90331 fix(agents): harden gateway config self-edits

- bucket: ready_for_maintainer
- author: Daozheyuanxi
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:40:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Keep agent-facing gateway config self-edits within the existing narrow trust boundary; global media/model routing remains operator-owned. - Add regression coverage proving defaults-level media/PDF model routing fields stay protected from agent confi

### #90357 fix(agents): resolve compaction model alias before dispatch

- bucket: ready_for_maintainer
- author: alkor2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T12:41:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Auto-compaction read `agents.defaults.compaction.model` verbatim, so a configured alias (no provider prefix) was forwarded unchanged and rejected downstream. With the alias `gpt54mini` configured for `openai/gpt-5.4-mini`, embedded auto-compaction d

### #90363 Fix CI guard baselines

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:42:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - mark the `buildSystemPrompt` back-compat alias with deprecated JSDoc so the deprecated-JSDoc guard accepts the existing export - update the include-permissions regression to create a real `0644` config include file instead of relying on a fragile

### #90373 fix(gateway): remove device-backed node pairings

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: L, plugin: file-transfer, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:42:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #88488. `node.list` can surface Android/phone nodes from the device-pairing store (`devices/paired.json`) when the paired device has an effective `node` role, but `node.pair.remove` only removed records from the legacy node-pairing store (`nod

### #90421 fix(skills): reconcile stale workshop proposals when target skill exists or is missing

- bucket: ready_for_maintainer
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:44:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a pending create proposal's target skill file already exists (e.g. user manually installed it after the workshop agent's apply timed out), or a pending update proposal's target skill file has been removed, the proposal stays pending indefinitel

### #90433 fix(memory-core): exclude archived transcripts from Dreaming session corpus

- bucket: ready_for_maintainer
- author: xiaobao-k8s
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:44:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Archived session transcripts (`.jsonl.reset.*` and `.jsonl.deleted.*`) are currently ingested into the Dreaming corpus, polluting analysis with reset/deleted cron-spawned subagent noise. On a cron-heavy deployment, this causes 67-91% of the daily co

### #92251 fix(agents): carry provenance through active subagent wakes

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:57:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refs #91356, #91330, #91333. Carry typed `inputProvenance` through active subagent wake steering so resumed requester turns keep an explicit inter-session provenance signal instead of arriving as untyped queued messages. This is intentionally narrow

### #91310 fix(memory): resolve embedding provider by authProviderId fallback

- bucket: ready_for_maintainer
- author: LiLan0125
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T12:57:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - When a user configures `memorySearch.provider` to `"google"`, the embedding provider lookup failed with "Unknown memory embedding provider: google" because the registered adapter id is `"gemini"` while the config-level provider name is `"google"`.

### #91345 fix: suggest close CLI commands

- bucket: ready_for_maintainer
- author: glenn-agent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:58:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a small shared helper for close root-command suggestions using known CLI command metadata - suggest `openclaw update` for close typos such as `upate` and explicit adjacent terminology such as `upgrade` - wire suggestions into both Commander un

### #91346 fix(cli): quiet local no-auth gateway warning

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T12:58:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Quiet the Gateway `auth mode=none` startup warning only for strictly local loopback no-auth startup. - Keep the warning for non-loopback binds and loopback configs with exposure signals: Tailscale, `gateway.trustedProxies`, `gateway.controlUi.allo

### #91409 fix(update): run plugin convergence after RPC git updates

- bucket: ready_for_maintainer
- author: masatohoshino
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:00:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? The gateway `update.run` RPC updates git/source installs via `runGatewayUpdate`, but — unlike the `openclaw update` CLI — it never resumed the post-core plugin convergence that `runGatewayUpdate`'s doctor pass *defer

### #90271 test: make fs-safe symlink tests compatible with Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:02:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skips in the fs-safe symlink-related test cases with dynamic `canCreateFileSymlinks` and `canCreateDirectorySymlinks` capability checks. If symlinking is supported by the OS environment, the tests run. This permits test coverage

### #93274 Clarify plugin channel config additional-property errors

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:03:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Clarify plugin-owned channel config validation errors by naming the plugin that owns the selected channel schema. - Keep validation behavior unchanged: unsupported properties still fail, and bundled/raw channel diagnostics remain plugin-agnostic.

### #41284 fix(ios): read IDEProvisioningTeamByIdentifier

- bucket: ready_for_maintainer
- author: fetzig
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:07:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > UPDATE: created this PR while trying out the openclaw iOS app. Everything worked out of the box except of `scripts/ios-team-id.sh`. So I thought this tiny fix might be of use. Reg. agents feedback about tests: Didn't wrote tests that execute python code sinc

### #50463 fix(agents): hint when unknown tools are skills

- bucket: ready_for_maintainer
- author: Meelfy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T13:07:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When a model mistakenly calls a skill name as a tool (e.g. `my-skill`), the error message is a generic "Tool not found" with no guidance, so the model keeps retrying or gives up. This is especially common with weaker/smaller models th

### #75403 fix: making typing start fire-and-forget allows cleanup/idle to run before a persistent typin...

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, clawsweeper, clawsweeper:commit-finding, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:09:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one concrete regression: making typing start fire-and-forget allows cleanup/idle to run before a persistent typing indicator has finished starting, so the stop path can no-op and leave the indicator behind. ## What ClawSweeper Is Fixing - **Me

### #75469 fix: same-session inferred commitments can be starved indefinitely when a normal HEARTBEAT.md...

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, clawsweeper, clawsweeper:commit-finding, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:09:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one regression risk: same-session inferred commitments can be starved indefinitely when a normal `HEARTBEAT.md` task is due on every heartbeat tick. ## What ClawSweeper Is Fixing - **Medium: recurring due heartbeat tasks can prevent same-sessi
