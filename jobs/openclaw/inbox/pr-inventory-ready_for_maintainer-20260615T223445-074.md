---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-074
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
  - "#90836"
  - "#93113"
  - "#93051"
  - "#73704"
  - "#80823"
  - "#81333"
  - "#81341"
  - "#81714"
  - "#82165"
  - "#82354"
  - "#83244"
  - "#84009"
  - "#84871"
  - "#84894"
  - "#84895"
  - "#92910"
  - "#84977"
  - "#93001"
  - "#85039"
  - "#85055"
  - "#85112"
  - "#85155"
  - "#93006"
  - "#85238"
  - "#85292"
cluster_refs:
  - "#90836"
  - "#93113"
  - "#93051"
  - "#73704"
  - "#80823"
  - "#81333"
  - "#81341"
  - "#81714"
  - "#82165"
  - "#82354"
  - "#83244"
  - "#84009"
  - "#84871"
  - "#84894"
  - "#84895"
  - "#92910"
  - "#84977"
  - "#93001"
  - "#85039"
  - "#85055"
  - "#85112"
  - "#85155"
  - "#93006"
  - "#85238"
  - "#85292"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.802Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 74

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90836 fix(cron): block self-narrating auto-announce replies

- bucket: ready_for_maintainer
- author: jsasson
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T01:41:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - tighten cron auto-delivery instructions so automatic final answers must be the exact user-facing message, not a narration of what was sent - add a delivery-side guard that blocks compact self-narrating cron auto-announce text before it reaches out

### #93113 fix(memory-core): report active dreaming phases in status

- bucket: ready_for_maintainer
- author: AgentArcLab
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:51:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix `memory status` so it reports active light-only and REM-only dreaming instead of deriving the `Dreaming` line solely from the deep promotion config. - Keep the existing deep-only status detail intact, including the current promotion thresholds

### #93051 fix(cron): honor configured retry.backoffMs for recurring error backoff floor

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T01:52:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary For recurring (`every`/`cron`) cron jobs that error, the safety-net backoff floor that sets `nextRunAtMs` was computed with the hardcoded `DEFAULT_ERROR_BACKOFF_SCHEDULE_MS`, **silently ignoring the operator-configured `cronConfig.retry.backoffMs`**

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

### #83244 fix(config): tolerate unknown metadata keys

- bucket: ready_for_maintainer
- author: efe-arv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:01:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary OpenClaw currently treats `meta` as a strict object containing only `lastTouchedVersion` and `lastTouchedAt`. If a newer runtime, tool, or config writer adds another bookkeeping field under `meta`, current binaries reject the whole config with an er

### #84009 fix(gateway): run daily session resets on schedule

- bucket: ready_for_maintainer
- author: stevenepalmer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: XL, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:02:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Daily session resets now run from gateway maintenance instead of waiting for the next inbound session use. - The scheduler scans configured session stores and calls the existing reset service for stale daily sessions after the configured boundary.

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

### #85112 feat(matrix): opt-in mention bypass for in-thread replies (threadBindings.bypassMentionInBoundThreads)

- bucket: ready_for_maintainer
- author: paulmeier
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: matrix, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:11:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #85111. ## Summary Adds an opt-in `channels.matrix.threadBindings.bypassMentionInBoundThreads` (boolean, default false). When true, the matrix inbound handler skips the room-level `requireMention` gate for events that are replying inside a thread the bot

### #85155 fix(agents): avoid inviting provider swaps in model alias guidance

- bucket: ready_for_maintainer
- author: extrasmall0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:12:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop telling the model to prefer aliases when a full provider/model override is already present - clarify that aliases are only shortcuts for unqualified model requests - update the prompt test to lock in the exact-ref guidance ## Real behavior pr

### #93006 fix(tui): keep stderr visible when local shell stdout fills the output cap

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:13:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The TUI local shell (`!`-prefixed, operator-only, behind an explicit in-session approval) caps command output at `maxOutputChars`. While streaming it keeps the **tail** (`appendWithCap` → `slice(-maxChars)`), but on `close` it built `(stdout + "\n"

### #85238 fix: include pnpm 11 bins in gateway PATH

- bucket: ready_for_maintainer
- author: shbernal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:14:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - include pnpm 11's `PNPM_HOME/bin` layout in managed gateway service PATH generation - keep pnpm 10-style `PNPM_HOME` paths for compatibility - add npm-global and package-manager env bin fallbacks to runtime PATH bootstrap while keeping user-writab

### #85292 fix(config): scope dry-run bundled channel validation

- bucket: ready_for_maintainer
- author: zarapharr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:15:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allow empty/no-op `config patch --dry-run` payloads without writing config. - Preserve dry-run touched paths and only force bundled-channel validation when a touched path is under `channels.<id>`. - Forward `touchedPaths` / `validateBundledChannel
