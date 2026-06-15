---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-034
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
  - "#80685"
  - "#82734"
  - "#81176"
  - "#81388"
  - "#82894"
  - "#82895"
  - "#82966"
  - "#82971"
  - "#82972"
  - "#83010"
  - "#90419"
  - "#90065"
  - "#90125"
  - "#90204"
  - "#91211"
  - "#93082"
  - "#92966"
  - "#93091"
  - "#90582"
  - "#93086"
  - "#79192"
  - "#83178"
  - "#83203"
  - "#83242"
  - "#83254"
cluster_refs:
  - "#80685"
  - "#82734"
  - "#81176"
  - "#81388"
  - "#82894"
  - "#82895"
  - "#82966"
  - "#82971"
  - "#82972"
  - "#83010"
  - "#90419"
  - "#90065"
  - "#90125"
  - "#90204"
  - "#91211"
  - "#93082"
  - "#92966"
  - "#93091"
  - "#90582"
  - "#93086"
  - "#79192"
  - "#83178"
  - "#83203"
  - "#83242"
  - "#83254"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.793Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 34

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #80685 Fix Discord ACP thread delivery

- bucket: needs_proof
- author: qiyueqiu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:07:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR fixes Discord ACP thread delivery and suppresses the ACP session info notice when session_info_update visibility is disabled.\n\nValidation: pnpm test src/agents/subagent-announce-delivery.test.ts src/auto-reply/reply/dispatch-acp.test.ts

### #82734 Bound tool transcript payloads

- bucket: needs_proof
- author: TheeMoneyTree
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:07:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - bound oversized tool argument strings before they enter transcript events - apply the same bounded truncation to deeply nested tool result strings while preserving visible leading context and metadata - add focused tests for apply-patch-style args

### #81176 feat(agents): add context-window-relative compaction budget shares

- bucket: needs_proof
- author: adone0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:08:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `AgentCompactionConfig` only accepts absolute token counts for `reserveTokens`, `keepRecentTokens`, and `reserveTokensFloor`. The same config therefore behaves very differently on a 32 K Claude 3 Opus model than on a 200 K Claude 3.5 Sonnet model

### #81388 fix(session-cost-usage): fall back to O_EXCL write when fs.link is unsupported (#81089)

- bucket: needs_proof
- author: 0xghost42
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:08:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `writeUsageCostCacheLockAtomically` in `src/infra/session-cost-usage.ts` publishes the usage-cost cache refresh lock by `fs.promises.link`'ing a fully-formed temp file to `<cache>.lock`. On filesystems without hard-link support — SMB/CIFS, some NFS

### #82894 fix(gateway): prewarm agent runtime before ready

- bucket: needs_proof
- author: hansolo949
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:09:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prewarm the first-turn agent runtime import path during Gateway sidecar startup, before startup-gated Gateway methods are released. - Keep the prewarm import-only: it does not submit a model request, touch user transcripts, or run tools. - Add `OP

### #82895 fix(slack): preserve interaction thread status

- bucket: needs_proof
- author: WuKongAI-CMU
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: S, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:09:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve Slack block-action thread context from `message.thread_ts` when `container.thread_ts` is absent. - Add Slack heartbeat typing and clear-typing support by updating Slack assistant thread status for thread-targeted follow-up turns. - Cover

### #82966 fix: return preserved totalTokens from resolveFreshSessionTotalTokens when stale (fixes #82900)

- bucket: needs_proof
- author: njuboy11
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:11:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #82900 — `resolveFreshSessionTotalTokens` returns `undefined` when `totalTokensFresh === false`, even though PR #82578 guarantees `totalTokens` is preserved. This causes `/context` command and Control UI context meter to show "stale/unavailab

### #82971 [codex] Guard Control UI protocol in npm release check

- bucket: needs_proof
- author: lamkan0210
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:11:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an npm release-package guard that scans packed Control UI JS assets for advertised Gateway protocol levels - compare those advertised `minProtocol` / `maxProtocol` values against `src/gateway/protocol/version.ts` - cover stale and current Cont

### #82972 fix(discord): scope message-tool schema groups to advertised actions

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:11:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #81484 — Discord guild reply regression where a single `@bot ping` produced malformed `action="send"` payloads (missing `message`) and repeated outbound replies. The message-tool schema previously merged every action group's properties (routin

### #83010 gateway: standardize URL base to localhost in mcp-http and tools-invoke handlers

- bucket: needs_proof
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:12:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Switches two remaining gateway HTTP handlers from a Host-header-derived URL base to the literal `"http://localhost"`, matching the pattern already used elsewhere in `src/gateway/` on `main`: - `src/gateway/mcp-http.request.ts` - `validateMcpLoopback

### #90419 fix: force-release session lock on dispose to prevent orphan locks

- bucket: needs_proof
- author: longkunbetter
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:16:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When an embedded attempt (sub-agent) is torn down via `dispose()`, the `disposeHeldLockAfterRetainedIdle()` function silently returns without releasing the session write lock if a write operation is still in progress (`retainedLockUseCount > 0` with

### #90065 fix(agents): bound abort-path session lock release; force-release on unsettled retained writes

- bucket: needs_proof
- author: matin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:17:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem A turn timeout aborts the embedded run, but the abort-path session-lock release is unbounded. On a deployment running a release that already contains #87278 (release lock on timeout abort), every embedded-run timeout still turned into 5–30 minutes o

### #90125 fix(embedded-runner): distinguish model initialization errors from assistant execution errors

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:17:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed This PR adds support for distinguishing between model initialization errors and assistant execution errors in the embedded agent runner. The key changes are: 1. Added `MODEL_INIT_ERROR_FALLBACK_TEXT` constant with value "[model initialization f

### #90204 fix(windows): resolve compatibility, path redaction, symlink EPERM, and channel sorting issues

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:18:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR fixes exactly 5 distinct Windows compatibility and test determinism issues to make the test suite pass stably on Windows. 1. **Deterministic Channel Sorting**: Sorted returned channel IDs alphabetically in package-state-probes.ts to prevent non-determi

### #91211 feat(tui): classify every model as CLI / OAuth / API in /model picker

- bucket: needs_proof
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:21:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary PR #91168 introduced a `runtimeLabel` field that only emitted `"CLI"` for models pinned to a CLI agentRuntime. Non-CLI models kept their old description (the human-readable model name), so users could not tell from the picker whether a given model i

### #93082 fix(ui): show coalesced update restarts

- bucket: needs_proof
- author: goutamadwant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:23:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes a Control UI update feedback gap where `update.run` can return `ok: true` with `restart.coalesced`, but the UI treated that as a normal silent success. This matters now because the gateway already exposes the in-progress restart signal

### #92966 fix(session-memory): deduplicate consecutive assistant messages with identical text

- bucket: needs_proof
- author: hnlqt666
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:47:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When thinking/reasoning is enabled, the session JSONL stores both the original assistant message (with thinking blocks) and a stripped copy (without thinking blocks), causing session-memory hook to produce duplicate entries. Skip consecutive assistant messages

### #93091 fix(feishu): recover CJK filenames from JSON file_name field (fixes #81103)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:51:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem CJK filenames in inbound Feishu messages produce mojibake when the filename is delivered via the JSON `file_name` field (distinct from the Content-Disposition path already fixed in #72388). The `recoverUtf8FileNameFromLatin1Header` helper is called

### #90582 fix: persist sender metadata in group chat JSONL records

- bucket: needs_proof
- author: yichu10c
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:52:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Group chat user messages in session JSONL were missing the `__openclaw` metadata block (senderId, from.id, from.first_name, from.username) that is present in 1:1 direct session messages. This made it impossible for agents and transcript loggers to d

### #93086 fix(agents): strip truncation sentinel lines from user-facing text (fixes #82121)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:58:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Internal truncation sentinels (`…(truncated)…`, `...(truncated)...`, `[... N more characters truncated]`) leak into user-facing assistant replies, degrading reply quality and exposing internal implementation details to end users. - *

### #79192 feat(cron): add maintenance-window role isolation

- bucket: needs_proof
- author: JFWaskin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: XL, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:59:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a first-class daily maintenance window for cron and heartbeat execution with hard role isolation and deferred replay. ## What changed - Adds `cron.maintenance` config with `enabled`, `window.start`, `window.end`, `window.timezone`, and `mainten

### #83178 fix(memory-flush): fallback to estimatePromptTokensFromSessionTranscript when usage data is unavailable

- bucket: needs_proof
- author: njuboy11
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:05:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #83177 — When a model provider (e.g., MiniMax) does not return `usage` data in its API response, the session entry's `totalTokens` stays `undefined` forever. The **preflight compaction path** already handles this via `estimatePromptTokensFromS

### #83203 fix(gateway): separate finish_reason from content chunks in streaming

- bucket: needs_proof
- author: niuma996
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:05:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Split writeAssistantContentChunk (always finish_reason: null) from a new writeAssistantFinishChunk (empty delta, finish_reason: stop) - Emit the finish chunk from the lifecycle end handler, the error path, and the finally fallback path - Updated s

### #83242 fix(ui): clarify imported insights cluster tabs

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: mock-only-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:06:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #80301. ## Summary - Turns the Imported Insights cluster chips into a labeled, more prominent horizontal tab bar. - Adds cluster counts directly to each tab so users can scan chats, sensitive clusters, and candidate signals before switching. - Adds ARIA

### #83254 fix(telegram): stamp bot api user agent

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, P2, rating: 🦐 gold shrimp, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:07:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #80446. ## Summary - Stamps Telegram Bot API outbound fetches with a stable versioned `User-Agent` of `OpenClawBot/<telegram-plugin-version>` when callers have not explicitly provided one. - Applies the header at the Telegram transport boundary, includin
