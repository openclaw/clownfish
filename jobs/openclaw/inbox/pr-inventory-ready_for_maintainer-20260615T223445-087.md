---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-087
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
  - "#76092"
  - "#89168"
  - "#89483"
  - "#90305"
  - "#90356"
  - "#90468"
  - "#90474"
  - "#90490"
  - "#90503"
  - "#90514"
  - "#90517"
  - "#90547"
  - "#90566"
  - "#90572"
  - "#90592"
  - "#90622"
  - "#90648"
  - "#90703"
  - "#90727"
  - "#90745"
  - "#90749"
  - "#90750"
  - "#93291"
  - "#90902"
  - "#93276"
cluster_refs:
  - "#76092"
  - "#89168"
  - "#89483"
  - "#90305"
  - "#90356"
  - "#90468"
  - "#90474"
  - "#90490"
  - "#90503"
  - "#90514"
  - "#90517"
  - "#90547"
  - "#90566"
  - "#90572"
  - "#90592"
  - "#90622"
  - "#90648"
  - "#90703"
  - "#90727"
  - "#90745"
  - "#90749"
  - "#90750"
  - "#93291"
  - "#90902"
  - "#93276"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.804Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 87

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #76092 fix(daemon): prefer bundled node for gateway service

- bucket: ready_for_maintainer
- author: Squirbie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:09:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prefer an installed OpenClaw bundled Node runtime from the active state dir when generating gateway service runtime paths. - Validate discovered `tools/node-v*/bin/node` candidates before using them. - Fall back to the current/system Node behavior

### #89168 fix(browser): recover stale managed Chrome CDP listener

- bucket: ready_for_maintainer
- author: rohitjavvadi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:11:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #41750. This adds a guarded recovery path for the managed local browser profile when its loopback CDP port is still held by an unresponsive Chrome-family process from the same OpenClaw-managed profile. Instead of immediately failing launch wit

### #89483 [AI-assisted] Persist agent-run error replies in chat history

- bucket: ready_for_maintainer
- author: IWhatsskill
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, clawsweeper:automerge, clawsweeper:human-review, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-15T13:12:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: A started Control UI agent run could surface a terminal provider/runtime error live, but `chat.history` after refresh did not retain an assistant error turn for that failed run. - Solution: Treat agent-run failure replies as real error pa

### #90305 [daemon] Preserve gateway drain during supervised restarts

- bucket: ready_for_maintainer
- author: Glucksberg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:12:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Change generated systemd gateway units from `KillMode=control-group` to `KillMode=mixed` so systemd sends the initial stop signal to the gateway main process before final cgroup cleanup. - Centralize the managed gateway service stop budget at `330

### #90356 fix(status): use legacy Codex OAuth profiles for OpenAI usage

- bucket: ready_for_maintainer
- author: sovushik
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:12:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - map legacy `openai-codex` OAuth/token profiles to the canonical `openai` usage provider - let provider usage auth resolution try `openai-codex:*` credentials when collecting `openai` ChatGPT usage, including plugins that explicitly request `resolv

### #90468 fix(agents): keep apostrophes in slash-command prompt-template arguments

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:14:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `parseCommandArgs` (`packages/agent-core/src/harness/prompt-template-arguments.ts`) expands `$ARGUMENTS` / `$@` / `$1..$N` in user prompt templates and custom slash commands. It does shell-style quote parsing with **no escape and no unbalanced-quo

### #90474 fix(state): retire superseded plugin install index

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:15:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Fixes repeated legacy plugin install index conflict warnings after a successful external plugin update leaves newer shared SQLite install metadata for the same npm package. - Teaches the legacy install-index migrat

### #90490 fix(gateway): retry restart continuation recovery

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:15:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Added periodic restart/session-delivery recovery so entries deferred by retry backoff are retried after startup. - Added a focused gateway lifecycle regression test that proves the first startup recovery and later 60s retry both call restart-

### #90503 fix(sessions): sweep orphan store temp files

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:16:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89520. ## What Changed - Added a startup/load-time sweep for stale session store temp files matching the active store basename. - Preserves fresh temp files and unrelated files so an in-flight atomic write is not removed. - Added focused regression cove

### #90514 fix(session): clear stale fallback model state on reset

- bucket: ready_for_maintainer
- author: baskduf
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:17:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refs #90496. This fixes the reset/session-target portion of the Discord oversized-session report: - Clear stale runtime model, context-window, fallback notice, and harness metadata when `/new` or `/reset` rotates a reply session. - Treat source-less

### #90517 fix(gateway): hint missing external plugin for web login

- bucket: ready_for_maintainer
- author: TUARAN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:17:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #83277 ## Summary - reuse the existing official external plugin repair-hint path when `web.login.start` cannot find any loaded QR-login provider - append the official external plugin install or `openclaw doctor --fix` guidance to the existing invalid-re

### #90547 docs: map guanbear clawtributor emails

- bucket: ready_for_maintainer
- author: guanbear
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:18:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Map the commit author emails used by already-merged guanbear contributions to the `guanbear` GitHub login in `scripts/clawtributors-map.json`. - This keeps the clawtributors generator attribution-based instead of adding a manual `ensureLogins` ent

### #90566 fix(agents): warn on cron announce skip

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:19:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Log a warning when a cron requester receives `ANNOUNCE_SKIP` from a completed subagent announce flow. - Add regression coverage that proves the cron path no longer suppresses the completion silently. Fixes #68561. ## Real behavior proof - **B

### #90572 fix(feishu): drop self-authored receive echoes

- bucket: ready_for_maintainer
- author: baskduf
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:20:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Drop Feishu receive events authored by the current bot open_id before the in-flight processing claim and inbound debounce queue. - Add focused monitor-message-handler regressions for bot-open-id echoes, ordinary users, and other app-authored sende

### #90592 fix(synology-chat): remove local deliver timeout

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, channel: synology-chat, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:21:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #59966. ## What changed Removed the Synology Chat webhook handler's local `Promise.race` wrapper with the hardcoded 120s timeout. The handler now awaits `params.deliver(...)` directly, so the channel layer no longer overrides the core agent timeout confi

### #90622 fix(ports): batch macOS lsof listener inspection to one spawn per cycle

- bucket: ready_for_maintainer
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:22:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refs #90548. This is a partial mitigation and intentionally does not close the issue. This changes Unix listener inspection from one `lsof` spawn per inspected port to one LISTEN snapshot per same-cycle multi-port inspection, then filters the snapsh

### #90648 fix(discord): protect mention aliases in code fences

- bucket: ready_for_maintainer
- author: rohitjavvadi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:24:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90643. Discord mention alias rewriting now skips Markdown code spans with a local scanner instead of a non-greedy regex, so a triple-backtick literal inside a fenced code block no longer makes later in-fence `@handle` text eligible for outbou

### #90703 Support compat reasoning levels for thinking xhigh

- bucket: ready_for_maintainer
- author: Alex-Govorov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:26:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Allows OpenAI-compatible reasoning models to expose `xhigh` thinking when the model configuration explicitly declares API support through `compat.supportedReasoningEfforts`. - Keeps `xhigh` hidden for reasoning mod

### #90727 fix(memory): refresh rebuilt index handles

- bucket: ready_for_maintainer
- author: dr00-eth
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:28:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes a persistent live-manager failure where the injected memory search path can keep reporting `index metadata is missing` after a separate CLI/status manager has rebuilt the durable SQLite index successfully. - Ensures safe atomic reindex write

### #90745 fix: carry reply metadata into runtime context

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:29:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a first-class current-turn reply metadata payload to `CurrentInboundPromptContext` so Telegram/forum reply facts survive the reply prompt/runtime handoff as structured OpenClaw metadata. This is the Morty patch shape, polished for upstream: - s

### #90749 Fix realtime voice-call barge-in cancellation

- bucket: ready_for_maintainer
- author: moellenbeck
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: voice-call, app: web-ui, gateway, size: M, extensions: openai, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:29:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move realtime voice-call barge-in cancellation from local MuLaw speech detection to the provider VAD `input_audio_buffer.speech_started` event. - Guard cancellation with `talk.outputAudioActive` so user speech only cancels an active assistant audi

### #90750 fix(diagnostics): evict orphaned tool/model activity on owner-less run end

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, extensions: diagnostics-otel, size: M, extensions: diagnostics-prometheus, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:29:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Stale native `tool_call` diagnostic activity could survive a clean run teardown and re-block later turns on the same `sessionKey` as `blocked_tool_call` (#87310). `markDiagnosticEmbeddedRunEnded({ clearRunActivity: false })` — used by the reply-run

### #93291 fix(reply): preserve pending thread evidence when reconciling partial send results

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:33:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary In a Mattermost thread, when the agent posts into the current channel via the `message` tool (implicit threading, no explicit `replyToId`) and then emits its final composed reply, the user receives the reply twice in the thread. This hits both the n

### #90902 fix #90743: emit MCP screenshot image source

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:34:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #90743. - The plugin tools MCP bridge now keeps returned image content in the repository's pinned `@modelcontextprotocol/sdk` 1.29.0 result schema: `{ type: "image", data, mimeType }`. - Source-shaped image blocks from tool implementations a

### #93276 WIP(plugins): stop tool-discovery loads from clearing active providers

- bucket: ready_for_maintainer
- author: medns
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:34:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Tool-discovery plugin loads run with `activate: false` and a tool-only plugin scope, so the registry they build omits provider-only plugins. - `installStandaloneRegistry` unconditionally called `setActivePluginRegistry`, so those loads replaced th
