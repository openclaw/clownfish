---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-109
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
  - "#91117"
  - "#91134"
  - "#91146"
  - "#91193"
  - "#93185"
  - "#93149"
  - "#93189"
  - "#69729"
  - "#72009"
  - "#72404"
  - "#73163"
  - "#73785"
  - "#75754"
  - "#75857"
  - "#75860"
  - "#80008"
  - "#80147"
  - "#80204"
  - "#80396"
  - "#93188"
  - "#80690"
  - "#81185"
  - "#81260"
  - "#81391"
  - "#81397"
cluster_refs:
  - "#91117"
  - "#91134"
  - "#91146"
  - "#91193"
  - "#93185"
  - "#93149"
  - "#93189"
  - "#69729"
  - "#72009"
  - "#72404"
  - "#73163"
  - "#73785"
  - "#75754"
  - "#75857"
  - "#75860"
  - "#80008"
  - "#80147"
  - "#80204"
  - "#80396"
  - "#93188"
  - "#80690"
  - "#81185"
  - "#81260"
  - "#81391"
  - "#81397"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.215Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 109

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91117 refactor: remove dead code and improve string concatenation

- bucket: ready_for_maintainer
- author: Pommelle
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:10:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Change Type / Scope / Linked Issue Type: refactor Scope: utils/shared --- ## Motivation Remove dead code paths and improve performance in shared utility functions. The changes simplify code without altering behavior. ## Changes ### Dead code removal **src/util

### #91134 ci: check bundled channel config metadata

- bucket: ready_for_maintainer
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:11:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #80536 ## Problem `src/config/bundled-channel-config-metadata.generated.ts` is checked in and used by runtime channel config validation. The repository already has `pnpm check:bundled-channel-config-metadata`, but the main CI `check-shard` job does not r

### #91146 fix(telegram): improve section spacing in replies

- bucket: ready_for_maintainer
- author: paul-cch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T06:11:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Telegram final replies can feel cramped when model output uses Markdown headings or short section-label paragraphs, because Telegram Bot API HTML has no real heading/list block layout. - This teaches the Telegram f

### #91193 fix(cli): document Commander rawArgs internal API dependency in action-reparse.ts

- bucket: ready_for_maintainer
- author: whiteyzy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:12:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a comment documenting that `rawArgs` is accessed via an unsafe cast because it is not part of Commander's public TypeScript interface. Makes the technical debt visible so future maintainers know the risk. ## Linked context Closes #83893 ## Real 

### #93185 [codex] fix(telegram): drop unused rich markdown parameter

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:16:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Remove the unused `markdown` parameter from `findRichMarkdownTableLineIndexes`. - Keep the table line detection behavior unchanged while restoring `tsgo:extensions` cleanliness. ## Verification - `node scripts/run-tsgo.mjs -p tsconfig.extensions.j

### #93149 feat(cron): add add dry-run preview

- bucket: ready_for_maintainer
- author: rrrrrredy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:28:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Clean replacement for #59490 / #59452. - Adds `cron add --dry-run`. - Builds the exact params that normal `cron add` would send to `cron.add`. - Prints those params as JSON and returns before any gateway RPC. - `--dry-run --json` keeps stdout pure J

### #93189 fix(gateway): archive legacy-root stale transcript files on reset/delete

- bucket: ready_for_maintainer
- author: xydigit-sj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:28:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91868. ## Summary When a stale legacy transcript path such as `~/.openclaw/sessions/<old-uuid>.jsonl` is stored in session state, `resolveSessionFilePath()` silently normalizes it to a generated path for the *current* sessionId. The legacy file therefor

### #69729 fix(qwen): enable qwen3.6-plus on Coding Plan CN, correct reasoning flag

- bucket: ready_for_maintainer
- author: wAnyBug-Com
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:30:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **What changed**: Enables `qwen3.6-plus` on the DashScope Coding Plan CN endpoint (`coding.dashscope.aliyuncs.com`) and corrects its `reasoning` flag (`false` → `true`). - `extensions/qwen/models.ts`: `reasoning: false` → `reasoning: true` on the 

### #72009 Make typing indicator TTL configurable

- bucket: ready_for_maintainer
- author: suntp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, stale, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:32:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Increase the default typing indicator TTL from 2 minutes to 5 minutes. - Add configurable `typingTtlSeconds` support via session config and agent defaults. - Document the new setting and regenerate the base config schema. Closes #71999 ## Tests - 

### #72404 fix(models): default input=[text,image] for vision-capable explicit-only models

- bucket: ready_for_maintainer
- author: aaronedell
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: M, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:33:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #71921. When a user's `openclaw.json` contains a static model catalog for a provider (e.g. `amazon-bedrock`) and an entry omits the `input` field, `mergeProviderModels` previously returned that entry unchanged whenever discovery had no matchin

### #73163 fix(gateway): warn for insecure Control UI access

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, scripts, stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:35:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Emit a gateway startup warning when Control UI is enabled on non-loopback HTTP with device auth still required - Keep loopback, TLS, trusted-proxy auth mode, disabled Control UI, and `dangerouslyDisableDeviceAuth` cases quiet - Pass resolved Contr

### #73785 fix(heartbeat): suppress no-op system event replies

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, scripts, stale, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:35:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add centralized no-op sentinel detection for silent heartbeat/system-event replies - suppress exact `HEARTBEAT_OK`, `NO_REPLY`, `NO_NEW_AUDIO`, and `SESSION_WATCHDOG_OK` outputs before delivery - keep meaningful relayable exec summaries deliverabl

### #75754 fix(clawdock): open dashboard via clawdock-dashboard on published port instead of hardcoded default port

- bucket: ready_for_maintainer
- author: dhoman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:36:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `clawdock-dashboard` could open the container-internal dashboard URL/port instead of the Docker-published host port. - Why it matters: Docker users with remapped ports could get a dashboard URL that does not work from the host browser, ev

### #75857 fix(telegram): suppress silent callback fallback

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:37:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - suppress Telegram direct-chat silent reply fallback for synthetic `callback_query` button turns - keep answering callback queries so Telegram clears the button spinner - preserve normal visible callback replies and non-callback silent reply behavi

### #75860 fix(memory): improve QMD recall for channel queries

- bucket: ready_for_maintainer
- author: codexGW
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:37:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow QMD recall for Discord channel sessions in the default scope - retry empty/noisy QMD search queries once with a tighter lexical query built from priority memory anchors - report scope-denied QMD searches in debug output instead of making the

### #80008 feat(plugins): expose ACP spawn and prompt in plugin runtime

- bucket: ready_for_maintainer
- author: dhruvkelawala
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, agents, size: L, plugin: file-transfer, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:41:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Plugins can orchestrate subagents via `api.runtime.subagent.*` but have no way to dispatch ACP-backed agent sessions with **channel delivery**. This PR adds `api.runtime.acp.spawn()` and `api.runtime.acp.prompt()` to the plugin runtime, gated behind

### #80147 fix(browser): time out remote tab enumeration

- bucket: ready_for_maintainer
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:41:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #58968 by bounding remote CDP Playwright tab enumeration with the existing remote CDP timeout budget. - Evicts the scoped cached/in-flight Playwright connection on enumeration timeout so the next request can reconnect instead of reusing a st

### #80204 fix: propagate gateway TLS fingerprints to bootstrap clients

- bucket: ready_for_maintainer
- author: jetd1
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:42:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Gateway clients bootstrapped outside `callGateway` (ACP, MCP channel bridge, and native approval handling) did not receive the local TLS certificate fingerprint for a self-signed local WSS gateway. - Why it matters: those clients could fa

### #80396 fix(media): warn when MEDIA: token is skipped inside fenced code block (#41966)

- bucket: ready_for_maintainer
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:42:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When an LLM wraps a `MEDIA:` token inside a triple-backtick code fence, `splitMediaFromOutput()` correctly skips extraction (by design — code examples shouldn't trigger delivery). However, this creates a **silent failure**: the user sees the raw `ME

### #93188 test(macos): cover root CLI command parsing

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, app: macos, scripts, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:42:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #83879. Adds a small root-command parser/dispatch helper for the macOS CLI and covers usage/help, known-command argument forwarding, and unknown-command dispatch. Also refreshes the Swift protocol generator so current literal-union schemas emit the Swif

### #80690 feat(telegram): presence indicator (typing + phased reactions)

- bucket: ready_for_maintainer
- author: 22kyasue
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: L, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T06:43:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds three-phase presence indicator for Telegram messages: 👀 on receive, 👨‍💻 + typing while processing, cleared on done. - Eliminates silent-agent UX where users can't tell if a message was received or is still being worked on. - Per-account co

### #81185 Redact exec tool result payloads

- bucket: ready_for_maintainer
- author: nicknmorty
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:44:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - redact exec foreground tool-result text and structured `details.aggregated` before returning results to the agent - redact node-host exec stdout/stderr/error output before formatting tool results - redact process poll/log/list output and structure

### #81260 fix(progress-draft): only trigger onToolStart on phase=start to remove duplicate tool lines

- bucket: ready_for_maintainer
- author: iFwu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T06:44:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `onToolStart` is triggered on both `phase === "start"` and `phase === "update"` for the same tool call, producing duplicate, interleaved progress-draft lines in Telegram/Discord - **Why it matters:** Users see garbled progress like `�

### #81391 feat(control-ui): add workspace boundary warning card with honest unavailable state

- bucket: ready_for_maintainer
- author: DeVisionLabs
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:45:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a read-only Workspace Boundary status card to the Overview screen. This introduces the zero-parameter gateway method `system.workspaceBoundaryStatus` and surfaces a conservative, honest unavailable state in the UI when an approved canonical-roo

### #81397 fix(agents): repair persisted tool result pairing

- bucket: ready_for_maintainer
- author: stainlu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, triage: blank-template, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:45:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: interrupted or killed tool runs can leave persisted session JSONL with `toolResult` entries separated from their assistant tool-call entry, duplicated, or orphaned. - Why it matters: session-file repair runs before OpenClaw loads a transc

