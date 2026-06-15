---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-061
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
  - "#85241"
  - "#85261"
  - "#85293"
  - "#85317"
  - "#85335"
  - "#85399"
  - "#90625"
  - "#90875"
  - "#90905"
  - "#90931"
  - "#90960"
  - "#93116"
  - "#85507"
  - "#85546"
  - "#85561"
  - "#85571"
  - "#85583"
  - "#93102"
  - "#85611"
  - "#85671"
  - "#85716"
  - "#85727"
  - "#85745"
  - "#85747"
  - "#85758"
cluster_refs:
  - "#85241"
  - "#85261"
  - "#85293"
  - "#85317"
  - "#85335"
  - "#85399"
  - "#90625"
  - "#90875"
  - "#90905"
  - "#90931"
  - "#90960"
  - "#93116"
  - "#85507"
  - "#85546"
  - "#85561"
  - "#85571"
  - "#85583"
  - "#93102"
  - "#85611"
  - "#85671"
  - "#85716"
  - "#85727"
  - "#85745"
  - "#85747"
  - "#85758"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.206Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 61

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #85241 fix(cli-runner): only the creating run closes the shared MCP loopback server

- bucket: needs_proof
- author: wmelonw
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:14:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A run that **reused** an existing in-process MCP loopback server still tore it down on run end, killing a server another run was actively using. `ensureMcpLoopbackServer()` returns a shared singleton. When a parent session created it and a one-shot 

### #85261 fix(gateway): streaming double-finalization, replace-event accumulation, session-key 400, module cache retry, trusted-proxy case sensitivity

- bucket: needs_proof
- author: cropsgg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:15:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ```md ## Summary Describe the problem, fix, and scope in 2–5 bullets. - Problem: - Fix: - Key changes: - Explicit non-goals / out-of-scope: --- ## Why This Change Explain the user pain, regression, maintainer need, or product goal. If purely mechanical, write 

### #85293 fix(codex): prevent isolated app-server process leaks on timeout

- bucket: needs_proof
- author: shivam-9090
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:15:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary This PR fixes a bug where isolated `codex app-server` child processes were leaked and left orphaned when client initialization or individual requests timed out or hung. ### Details of Changes 1. **Combined Setup Timeout (`shared-client.ts`)**: Grou

### #85317 fix(google): bypass SSRF private network restrictions for Gemini search

- bucket: needs_proof
- author: it114115-student
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, scripts, commands, size: M, proof: supplied, extensions: google, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:16:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Configuring a custom local or private network base URL (such as a local LiteLLM proxy at `<private-ip>:4000`) for the Gemini `webSearch` provider resulted in `SsrFBlockedError: Blocked hostname or private/internal/special-use IP addres

### #85335 feat(cron): add acpTurn for isolated ACP cron jobs

- bucket: needs_proof
- author: lxf-lxf
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, scripts, size: XL, triage: refactor-only, triage: blank-template, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:16:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Support acpTurn payloads through acpx (oneshot Cursor/Codex runs), CLI --acp, Control UI editing, job validation, and docs for install and troubleshooting. ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, 

### #85399 fix(gateway): bound startup sidecar fanout

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:17:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #85366 by moving the two startup sidecar fanout paths from fully serial sweeps to bounded, yielding background work: - ACP startup identity reconciliation now runs pending session work through `runTasksWithConcurrency` with a small concurrency

### #90625 docs: add supported iOS install path when public beta is full

- bucket: needs_proof
- author: tarsopsbot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: ios, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:24:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Document the supported install path for the iOS node when the public beta or TestFlight capacity is full. Closes #90599 ## Changes - Add explicit wording to `docs/platforms/ios.md` stating that building the iOS app from source is the supported path 

### #90875 fix(clawdock-helpers): rename path name in loop to stop mutating PATH via zsh path<->PATH linkage

- bucket: needs_proof
- author: lshgdut
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:32:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Sourcing `scripts/clawdock/clawdock-helpers.sh` from `~/.zshrc` silently mutates the user's `PATH`. The for-loop variable `path` in `_clawdock_ensure_dir` shadows zsh's special `path` array, which is bidirectionally 

### #90905 Suppress recovered read-only tool warnings after block replies

- bucket: needs_proof
- author: keshavbotagent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T02:33:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace broad visible block-reply count suppression with explicit ordering evidence from the embedded subscription state, so only block replies delivered after the terminal tool execution suppress recovered read-only/probe warnings. - Preserve lat

### #90931 fix(ui): scope local assistant avatar overrides per agent (#90890)

- bucket: needs_proof
- author: hanZeng-08
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T02:34:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90890 # Comment for Issue #90890 — Agent avatar changes overwrite all agents ## Summary The Control UI stores the assistant avatar override in `localStorage` under a single global key (`openclaw.control.assistant.v1`). Because the key is not scoped by a

### #90960 fix(google): enable vertex image and video generation

- bucket: needs_proof
- author: NeoGeoSNK
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, scripts, commands, size: M, proof: supplied, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:35:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Vertex AI generative video currently experiences SDK integration failures when fetching credentials dynamically during the predictLongRunning and polling lifecycle via `gaxios`. This patch safely unblocks video generation by explicitly identifying `

### #93116 fix(xai): respect ssrfPolicy and request.allowPrivateNetwork in image_generate

- bucket: needs_proof
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, extensions: xai, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:37:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: `extensions/xai/image-generation-provider.ts` hardcodes `resolveAllowPrivateNetwork: () => false`, blocking xAI image generation when the user configures a private-network gateway (e.g., `http://<private-ip>:8090`). The SSRF guard fires 

### #85507 fix(slack): include assistant loading messages

- bucket: needs_proof
- author: emergentash
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:44:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - pass Slack assistant `loading_messages` into native `assistant.threads.setStatus` calls - cover loading messages in Slack monitor status tests and preview fallback dispatch tests - add a changelog entry for the native Slack thinking/status message

### #85546 feat(ui): add session rename slash command

- bucket: needs_proof
- author: btilus
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:46:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Control UI slash commands did not expose chat-side session rename commands, even though `sessions.patch` already supports session labels. - Solution: Add `/rename <title>` with `/title` as an alias and execute it locally through `sessions

### #85561 docs: use concrete URLs in markdown examples

- bucket: needs_proof
- author: SeashoreShi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:46:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replace placeholder `url` targets in inline markdown examples with concrete `https://example.com/...` URLs - do the same for markdown image examples used in channel docs ## Why Several docs pages currently use inline examples like `[label](url)` a

### #85571 fix(diagnostic): recover terminal-progress orphan embedded runs at 60s

- bucket: needs_proof
- author: rhclaw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:46:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the codex app-server emits a terminal-looking progress event (`rawResponseItem/completed`, `response.completed`, `output_item.done`, …) and then goes silent, the turn lifecycle orphans: codex effectively finished the work but `turn/completed` n

### #85583 Control-plane hardening from Optimus ops findings

- bucket: needs_proof
- author: fchaudhryspear
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, extensions: diagnostics-otel, extensions: memory-core, cli, scripts, commands, docker, agents, size: XL, channel: qqbot, extensions: qa-lab, extensions: codex, extensions: diagnostics-prometheus, extensions: deepinfra, plugin: file-transfer, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:46:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Completes the OpenClaw control-plane hardening project stack from Optimus ops findings: - ADP-237: structured A2A handoff IDs and return-route tracing. - ADP-238: session/status diagnostics and safer control-plane visibility. - ADP-239: channel/runt

### #93102 feat(gateway): accept thinkingLevel/reasoningLevel at sessions.create (operator.write)

- bucket: needs_proof
- author: LightDriverCS
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:46:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `sessions.create` now accepts `thinkingLevel` and `reasoningLevel`, applying them to the new session entry using the same validators `sessions.patch` already uses. ## Motivation `sessions.patch` requires `operator.admin`, so a client that only holds

### #85611 Replace curl-piped install in duplicate PR tagging skill

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:47:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces curl-piped-to-shell prtags install guidance with a pinned download and checksum-verification flow. This removes the SafeOps curl-pipe-shell reviewed risk for the duplicate PR tagging skill.

### #85671 fix(outbound): auto-select single enabled message account

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:50:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #20756. - Add a shared outbound message account resolver after channel selection. - Preserve explicit `accountId`, CLI/default account overrides, and agent binding account IDs before inference. - When the message tool omits an account, prefer 

### #85716 fix(agents,gateway): three subagent announce delivery failures in loopback token-auth setups

- bucket: needs_proof
- author: jailbirt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:53:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Three related bugs that break subagent completion delivery when running OpenClaw with loopback token-auth (e.g. Google Chat channel, `sessions_spawn` orchestration pattern). All three were found and validated on a production Linux/GCP deployment: Op

### #85727 docs: add first run setup steps to CONTRIBUTING.md

- bucket: needs_proof
- author: Arvuno
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:53:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Added "First Run Setup" section to CONTRIBUTING.md with step-by-step instructions - Covers API key setup, doctor verification, gateway startup, and quick test - Added links to full config and provider docs ## Problem New contributors didn't have c

### #85745 fix(discord): add configurable REST API timeout via channels.discord.apiTimeoutMs

- bucket: needs_proof
- author: AuroraBrain666
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:53:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `channels.discord.apiTimeoutMs` to the Discord channel config schema (max 120000ms). Threads it through to `RequestClient` where the REST timeout was previously hardcoded at 15s. ## Root Cause Large guild operations (ban lists, channel enumerat

### #85747 fix(agents): add worker thread pool for event-loop isolation of model calls

- bucket: needs_proof
- author: AuroraBrain666
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, gateway, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:53:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Offloads LLM API `fetch()` calls to a bounded `worker_threads` pool to prevent event-loop starvation on the main gateway thread during long-running streaming model responses. ## Root Cause Model API calls (Chat Completions, streaming LLM responses) 

### #85758 feat: add retries field to HealthCheckRunContext for transient failure handling

- bucket: needs_proof
- author: Arvuno
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:54:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Added `retries?: number` field to `HealthCheckRunContext` interface - Implemented retry loop in `runRunnableHealthCheck` with exponential backoff (100ms × attempt) - Add `retries` field to `HealthRepairContext` interface - Full test coverage for r

