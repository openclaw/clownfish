---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-082
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
  - "#91963"
  - "#88504"
  - "#88550"
  - "#88551"
  - "#88683"
  - "#88709"
  - "#88726"
  - "#91376"
  - "#91427"
  - "#92037"
cluster_refs:
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
  - "#91963"
  - "#88504"
  - "#88550"
  - "#88551"
  - "#88683"
  - "#88709"
  - "#88726"
  - "#91376"
  - "#91427"
  - "#92037"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.210Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 82

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #91963 fix(auto-reply): defer foreground fence until delivery

- bucket: ready_for_maintainer
- author: xmoxmo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:06:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91914. This defers foreground reply fence creation until a buffered dispatch first attempts visible/source delivery, instead of creating the fence as soon as the inbound dispatch enters `dispatchInboundMessageWithBufferedDispatcher()`. The pr

### #88504 feat(memory): add multi-slot memory role architecture

- bucket: ready_for_maintainer
- author: kklouzal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, extensions: memory-lancedb, cli, commands, agents, size: XL, extensions: qa-lab, extensions: memory-wiki, plugin: migrate-hermes, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-10T16:19:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a purpose-specific memory role-slot contract so memory plugins can compose instead of replacing each other through one global `plugins.slots.memory` selector. What changes: - Adds canonical memory role slots: `memory.recall`, `memory.co

### #88550 fix(codex-supervisor): disable app-server websocket compression

- bucket: ready_for_maintainer
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, extensions: codex-supervisor
- gitcrawl snapshot updated: 2026-06-10T16:20:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - disable `permessage-deflate` on Codex Supervisor app-server WebSocket clients - add a Unix socket handshake regression test that verifies the client does not offer WebSocket compression ## Verification - `node scripts/run-vitest.mjs extensions/cod

### #88551 fix(agents): skip auth gate for CLI-owned transport

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:20:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - Skip the model-fallback auth cooldown gate for explicitly configured CLI agent runtimes such as `anthropic/*` with `agentRuntime.id: "claude-cli"`. - Keep the attempt-level auth-profile selection guard so CLI-owned transports preserve only `authP

### #88683 Reject unpublished npm targets consistently in update dry-run

- bucket: ready_for_maintainer
- author: alexzhu0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T17:43:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #87320 ## User-facing bug `openclaw update --tag <version> --dry-run` could report a clean package-update plan when the requested OpenClaw version was not actually available from the npm registry that the update would use. Running the same update without

### #88709 fix(auth): cooldown inline api key billing failures

- bucket: ready_for_maintainer
- author: MertBasar0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T17:43:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - record provider-level cooldown state for inline `models.providers.<id>.apiKey` credentials - block literal, env-marker, and env SecretRef inline API keys while provider-level auth/billing cooldown is active - keep healthy stored auth profiles avai

### #88726 [codex] Read exact X posts via FxTwitter

- bucket: ready_for_maintainer
- author: SnowBelt
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: L, extensions: qa-lab, proof: supplied, proof: sufficient, extensions: xai, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-10T17:44:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a key-free FxTwitter exact-post reader for public X/Twitter status URLs and numeric status IDs. - Route exact post references through FxTwitter before falling back to xAI-backed broader `x_search`. - Keep generic X search on the existing xAI a

### #91376 fix(docs): lint workspace templates

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, commands, agents, size: S, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T18:43:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Extends the existing markdownlint docs lane to cover shipped workspace template markdown. - Includes `src/agents/templates/HEARTBEAT.md` in markdownlint coverage because it is part of the workspace template pack. - Removes the broad `docs/referenc

### #91427 fix(openai-completions): reject provider empty stop replies

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T19:19:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes OpenAI-compatible chat completion streams that finish with `finish_reason: "stop"` after emitting no assistant output, which currently reaches channels as `content: []` and a silent blank reply. - Applies the guard to both OpenAI completions

### #92037 feat(cron): on-exit schedule — wake on a watched command's exit

- bucket: ready_for_maintainer
- author: anagnorisis2peripeteia
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-11T01:11:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an **`on-exit` cron schedule kind**: a job that fires once when a watched shell command exits, starting a fresh agent turn in the originating conversation. It's "a #83738 cron wake, triggered by a process exit instead of by the tool call" — it 

