---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-103
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
  - "#73704"
  - "#80823"
  - "#81333"
  - "#81341"
  - "#81714"
  - "#82165"
  - "#82354"
  - "#82950"
  - "#83244"
  - "#83698"
  - "#84009"
  - "#84860"
  - "#84868"
  - "#84871"
  - "#84894"
  - "#84895"
  - "#84906"
  - "#84924"
  - "#92910"
  - "#84977"
  - "#85003"
  - "#85035"
  - "#93001"
  - "#85039"
  - "#85055"
cluster_refs:
  - "#73704"
  - "#80823"
  - "#81333"
  - "#81341"
  - "#81714"
  - "#82165"
  - "#82354"
  - "#82950"
  - "#83244"
  - "#83698"
  - "#84009"
  - "#84860"
  - "#84868"
  - "#84871"
  - "#84894"
  - "#84895"
  - "#84906"
  - "#84924"
  - "#92910"
  - "#84977"
  - "#85003"
  - "#85035"
  - "#93001"
  - "#85039"
  - "#85055"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.214Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 103

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #73704 fix(safeguard): resolve compaction provider/model before registering runtime

- bucket: ready_for_maintainer
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, channel: whatsapp-web, app: web-ui, gateway, cli, scripts, agents, size: L, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:57:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #57901. ## Summary Two-part fix for the safeguard auto-compaction path ignoring `agents.defaults.compaction.model`: 1. **`extensions.ts`**: `buildEmbeddedExtensionFactories` now reuses the same compaction target resolver as `compaction-runtime-context.ts

### #80823 fix(cli): differentiate gateway-restart hint for hot-loadable agent config sets (#80722)

- bucket: ready_for_maintainer
- author: kiranmagic7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:58:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `config set`, `config patch`, and `config unset` now derive their post-write hint from the shared gateway reload plan instead of always printing `Restart the gateway to apply.` - Hot-reloadable config paths, including `agents.list.*`, `agents.defa

### #81333 feat(i18n): translate Nodes page UI strings to Simplified Chinese

- bucket: ready_for_maintainer
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T01:58:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Nodes page (`/nodes`) had extensive hardcoded English strings in the `nodes` namespace of `zh-CN.ts` (historical omission) and the entire `nodes-exec-approvals.ts` sub-component was not internationalized at all. - Why it matters: Non-Engl

### #81341 [AI-assisted] Fix ACP bound thread follow-up delivery

- bucket: ready_for_maintainer
- author: qiyueqiu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:58:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: follow-up messages sent inside a Discord Thread bound to a spawned ACP runtime session could run the ACP turn but suppress the child session's visible reply. - Why it matters: `/acp spawn ... --thread` creates a user-facing thread; follow

### #81714 ui(i18n): localize agents panels (overview and tools/skills) for zh-CN

- bucket: ready_for_maintainer
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, proof: sufficient, P3, rating: 🧂 unranked krab, status: ⏳ waiting on author, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T01:59:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Agents page overview panel and tools/skills panel had hardcoded English strings when using Simplified Chinese locale. - Why it matters: Non-English users see English labels, tabs, buttons, and tool metadata in the agents page. - What chan

### #82165 feat(agents): add opt-in identityLine + identityMode config knobs

- bucket: ready_for_maintainer
- author: cael-dandelion-cult
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:00:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary OpenClaw hard-codes the system-prompt opening line to: > "You are a personal assistant running inside OpenClaw." There's an existing `systemPromptOverride` knob, but it requires authoring the entire prompt from scratch — losing all tooling/skills/me

### #82354 fix(msteams): emit message:sent hook on reply delivery

- bucket: ready_for_maintainer
- author: ndholakia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:00:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes a parity gap with telegram: the msteams reply-dispatcher previously bypassed both the internal hook bus AND the plugin-SDK `message_sent` hook entirely on outbound delivery. Downstream listeners (audit-loggers, per-user memory substrates) can

### #82950 fix(security): add ReDoS guard to exec approval argPattern matching

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:01:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90014 ## Problem `matchArgPattern` in `src/infra/exec-command-resolution.ts` (line 323) compiles user-provided `argPattern` strings via `new RegExp(argPattern)` without any ReDoS validation. While patterns auto-generated by `buildArgPatternFromArgv` are

### #83244 fix(config): tolerate unknown metadata keys

- bucket: ready_for_maintainer
- author: efe-arv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:01:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary OpenClaw currently treats `meta` as a strict object containing only `lastTouchedVersion` and `lastTouchedAt`. If a newer runtime, tool, or config writer adds another bookkeeping field under `meta`, current binaries reject the whole config with an er

### #83698 fix(gateway): rejected config.patch/apply never queues SIGUSR1 restart

- bucket: ready_for_maintainer
- author: adapepper
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:02:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Pins the invariant that a **rejected** `config.patch` / `config.apply` RPC never schedules a gateway SIGUSR1 restart, with both a structural guard and regression tests. Filed in response to a downstream incident where a long-running gateway ended up

### #84009 fix(gateway): run daily session resets on schedule

- bucket: ready_for_maintainer
- author: stevenepalmer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: XL, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:02:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Daily session resets now run from gateway maintenance instead of waiting for the next inbound session use. - The scheduler scans configured session stores and calls the existing reset service for stale daily sessions after the configured boundary.

### #84860 fix(skills): require resolved approval before mutating actions

- bucket: ready_for_maintainer
- author: trackoor
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:03:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: several skill docs mention confirmation near mutating commands, but do not always bind approval to the resolved target/content. - Solution: require preview or resolution first, then approval of the exact action before send/reorder/upload-

### #84868 [codex] Preserve request SecretRef markers in models.json

- bucket: ready_for_maintainer
- author: zr9959
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:04:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve SecretRef markers for nested provider `request` secrets when generating prompt-visible `models.json`, including request headers, auth token/value, TLS material, and proxy TLS material. - Strip request SecretRef marker strings before inlin

### #84871 fix(codex): preserve responses session streams

- bucket: ready_for_maintainer
- author: nxmxbbd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:04:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Codex Responses sessions using ChatGPT/Codex OAuth could be routed away from the session stream that owns native continuation state when runtime auth was resolved. - The patch keeps the exact `openai` + `openai-cha

### #84894 [codex] Fix empty result after exec stdout turns

- bucket: ready_for_maintainer
- author: zhulijin1991
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:04:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes empty user-visible results from Codex exec-only turns where the harness can finish with tool output recorded but no final assistant text. ## Root cause Two ordering/result-shaping gaps could surface as `payloads=0` even though the command itse

### #84895 Forward cron toolsAllow to CLI runs

- bucket: ready_for_maintainer
- author: zhulijin1991
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:05:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Forward isolated cron payload `toolsAllow` into the CLI runner path. - Keep CLI/native-tool backends fail-closed when a cron job requests a runtime allowlist. - Add a regression test covering a cron agent turn with `toolsAllow: ["web_fetch", "mess

### #84906 Add Gradium realtime transcription provider

- bucket: ready_for_maintainer
- author: timpratim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: voice-call, size: L, extensions: gradium, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:05:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a Gradium realtime transcription provider and register it through the plugin manifest - cover provider behavior with focused tests and plugin registration checks - update Gradium voice/media docs, plugin inventory docs, and changelog ## Testin

### #84924 feat(zalouser): surface inbound photo attachments via media array

- bucket: ready_for_maintainer
- author: JOY
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalouser, size: M, triage: blank-template, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T02:05:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Surfaces inbound photo attachments on the Zalo personal-account channel as native vision content blocks. Previously the `zalouser` monitor handler dropped Zalo photo metadata, so agents only saw the user's text caption and could not respond to image

### #92910 fix(memory-core): safely refresh qmd index during collection repair

- bucket: ready_for_maintainer
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, clownfish, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:06:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Repair source PR #68590 on its contributor branch. - Write QMD index.yml with safely quoted collection name, path, and pattern values. - Preserve the existing forced remove/add rebuild in rebuildManagedCollectionsForRepair so duplicate-document an

### #84977 feat: handle gemma 4 format tool call

- bucket: ready_for_maintainer
- author: ouchuan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: lmstudio, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T02:07:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Gemma 4 model might return tool calls in its own format, which are not handled correctly and would leak directly into user prompt - Solution: Add corresponding parsing logic to intercept these tool calls properly - What changed: Add parsi

### #85003 fix(line): register credential secret targets

- bucket: ready_for_maintainer
- author: DYSfu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: line, commands, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:07:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Register LINE channel credentials in the channel secret contract so `channels.line.channelAccessToken`, `channels.line.channelSecret`, and their account-scoped equivalents participate in audit/configure/apply surfaces. - Resolve LINE credential Se

### #85035 Add follow-up queue plugin hooks for OpenCOAT weaving

- bucket: ready_for_maintainer
- author: HyperdustLabs
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:08:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add native `queue_before_enqueue` and `queue_after_enqueue` plugin hooks around follow-up queue enqueue (`agent-runner`). - Emit the same hooks on embedded steering (`queueEmbeddedPiMessageWithOutcomeAsync`) with `queueMode: "steer"`, `originating

### #93001 fix(daemon): prefer stderr over stale stdout in gateway restart diagnostics

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:08:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `readLastGatewayErrorLine` (`src/daemon/diagnostics.ts`) surfaces the most relevant gateway error line for daemon restart diagnostics (shown in `status` / `doctor`). On non-darwin platforms it reads both stderr and stdout, builds `[...stderrRaw.spli

### #85039 feat(zalouser): normalize agent-emitted markdown for Zalo client rendering

- bucket: ready_for_maintainer
- author: JOY
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalouser, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T02:08:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Zalo personal-account client (mobile + web) renders agent-style markdown poorly in two specific ways that the zalouser plugin currently passes through unchanged: 1. **Triple-dash / triple-asterisk horizontal rules** (`---`, `***`) render as lite

### #85055 Memory wiki cache manifest and claim supersession

- bucket: ready_for_maintainer
- author: Artifact-LV
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:09:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - separate `wiki.status` read purity from write-scoped `wiki.refresh` - emit strict `wiki-cache-manifest.json` atomically from wiki refresh/compile - add deterministic claim-key normalization and claim reconciliation with schema coverage - allow the

