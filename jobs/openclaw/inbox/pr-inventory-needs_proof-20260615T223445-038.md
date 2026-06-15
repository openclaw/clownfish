---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-038
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
  - "#82490"
  - "#82561"
  - "#83000"
  - "#83043"
  - "#84869"
  - "#84902"
  - "#84916"
  - "#85159"
  - "#85172"
  - "#85225"
  - "#85241"
  - "#85293"
  - "#85399"
  - "#90875"
  - "#90905"
  - "#85507"
  - "#85546"
  - "#85561"
  - "#85571"
  - "#85611"
  - "#85671"
  - "#85727"
  - "#85745"
  - "#85747"
  - "#85758"
cluster_refs:
  - "#82490"
  - "#82561"
  - "#83000"
  - "#83043"
  - "#84869"
  - "#84902"
  - "#84916"
  - "#85159"
  - "#85172"
  - "#85225"
  - "#85241"
  - "#85293"
  - "#85399"
  - "#90875"
  - "#90905"
  - "#85507"
  - "#85546"
  - "#85561"
  - "#85571"
  - "#85611"
  - "#85671"
  - "#85727"
  - "#85745"
  - "#85747"
  - "#85758"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.794Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 38

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #82490 fix(browser): reject credentialed navigation URLs

- bucket: needs_proof
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:01:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reject HTTP(S) browser navigation URLs that contain embedded username/password credentials before the browser tool sends them to a local browser client or remote browser proxy. - Enforce the same credentialed-URL block in the browser navigation gu

### #82561 feat(commands): add /long to fork long-running tasks into a detached subagent

- bucket: needs_proof
- author: gado-ships-it
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T02:01:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Long-running tool calls (deploys, broad test runs, slow web-scraping, multi-file refactors) are easy to start without realizing they'll exceed the conversation turn's no-output watchdog and get killed mid-run, losing all progress and

### #83000 [codex] Fix delta-only assistant chat projection

- bucket: needs_proof
- author: flashosophy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:01:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - project assistant live-chat deltas when events carry `data.delta` without cumulative `data.text` - apply the same delta-only handling to the embedded TUI backend - add gateway and embedded TUI regressions for delta-only assistant events Fixes #829

### #83043 perf(gateway): cache compiled regexes used by oversized-transcript field extract

- bucket: needs_proof
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:01:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `src/gateway/session-utils.fs.ts:extractJsonStringFieldPrefix` and `extractJsonNullableStringFieldPrefix` recompile fresh regex objects on every invocation. `buildOversizedTranscriptRecord` calls them repeatedly for oversized records (`id`, `parentI

### #84869 fix(browser): normalize profile color matching and simplify port parsing

- bucket: needs_proof
- author: sovushik
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:04:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- normalize used profile colors to uppercase before palette checks\n- simplify URL port parsing logic while preserving default 80/443 fallback\n- update case-insensitive color allocation test to assert expected next color\n\n## Validation\n- pnpm t

### #84902 fix(openai): honor provider thinking profiles

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: openai, triage: mock-only-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:05:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes openclaw/openclaw#84880. OpenAI/Codex GPT-5 thinking validation was still able to collapse to off-only when the model catalog contained a stale `reasoning: false` row. That made `sessions_spawn(...thinking: "high")` reject supported models suc

### #84916 [codex] Skip ACP timeout session config

- bucket: needs_proof
- author: henkterharmsel
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:05:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR stops OpenClaw from sending runtime timeouts as ACP `session/set_config` options. OpenClaw still enforces timeouts through its own manager/gateway run watchdogs. The change only removes the ACP session config emission for `timeout` / `timeou

### #85159 fix(commands): show current level in /verbose and /reasoning menus

- bucket: needs_proof
- author: yiyouguisu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:12:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The v1 fix (#85150, closed) added `argsMenu: "auto"` to `/verbose` but bypassed the current status display. This proper fix: 1. Adds `argsMenu: "auto"` to `/verbose` (matching `/think`, `/trace`, `/fast`) 2. Extends `formatTelegramCommandArgMenuTitl

### #85172 fix(matrix): respect is_direct: false in isStrictDirectRoom

- bucket: needs_proof
- author: JulyanXu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:12:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `isStrictDirectRoom` in `extensions/matrix/src/matrix/direct-room.ts` returned `evidence.strict` directly without checking `memberStateFlag`. When a 2-person Matrix room has `is_direct: false` on the membership event, the function still classified i

### #85225 fix: skip default idle heartbeat without HEARTBEAT.md

- bucket: needs_proof
- author: ANONYMOUSZED-beep
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:14:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Skip default, unconfigured idle heartbeat runs when the agent workspace has no HEARTBEAT.md, no due commitments, and no event wake payload. - Preserve existing behavior for explicit heartbeat configuration and wake/cron/exec-triggered runs. - Add a r

### #85241 fix(cli-runner): only the creating run closes the shared MCP loopback server

- bucket: needs_proof
- author: wmelonw
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:14:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A run that **reused** an existing in-process MCP loopback server still tore it down on run end, killing a server another run was actively using. `ensureMcpLoopbackServer()` returns a shared singleton. When a parent session created it and a one-shot

### #85293 fix(codex): prevent isolated app-server process leaks on timeout

- bucket: needs_proof
- author: shivam-9090
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:15:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary This PR fixes a bug where isolated `codex app-server` child processes were leaked and left orphaned when client initialization or individual requests timed out or hung. ### Details of Changes 1. **Combined Setup Timeout (`shared-client.ts`)**: Grou

### #85399 fix(gateway): bound startup sidecar fanout

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:17:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #85366 by moving the two startup sidecar fanout paths from fully serial sweeps to bounded, yielding background work: - ACP startup identity reconciliation now runs pending session work through `runTasksWithConcurrency` with a small concurrency

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
