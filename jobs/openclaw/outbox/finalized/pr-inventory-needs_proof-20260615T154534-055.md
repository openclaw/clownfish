---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-055
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
  - "#82971"
  - "#82972"
  - "#83010"
  - "#90419"
  - "#90065"
  - "#90469"
  - "#90115"
  - "#90125"
  - "#90204"
  - "#90211"
  - "#91211"
  - "#93082"
  - "#93083"
  - "#92966"
  - "#93091"
  - "#90511"
  - "#90542"
  - "#90561"
  - "#90577"
  - "#90582"
  - "#90603"
  - "#90618"
  - "#93086"
  - "#79192"
  - "#83174"
cluster_refs:
  - "#82971"
  - "#82972"
  - "#83010"
  - "#90419"
  - "#90065"
  - "#90469"
  - "#90115"
  - "#90125"
  - "#90204"
  - "#90211"
  - "#91211"
  - "#93082"
  - "#93083"
  - "#92966"
  - "#93091"
  - "#90511"
  - "#90542"
  - "#90561"
  - "#90577"
  - "#90582"
  - "#90603"
  - "#90618"
  - "#93086"
  - "#79192"
  - "#83174"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.205Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 55

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #90469 feat(extensions): openclaw-governance — AIBOM + DLP + cost ledger (BG1)

- bucket: needs_proof
- author: kelliott-cloud
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XL, proof: supplied, dependencies-changed, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:17:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Backports the chokepoint governance trio from the Nexus reference stack as an **optional, opt-in** OpenClaw extension at `extensions/openclaw-governance/`. Designed for personal / single-node operators who want a signed audit trail, regex DLP, and p

### #90115 fix(gateway): pass managed inbound PDFs through chat.send

- bucket: needs_proof
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:17:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90097. `chat.send` offloads large attachments to the managed inbound media store, then for a sandboxed session may copy non-image refs into the sandbox through `stageSandboxMedia`. That sandbox copy is optional for already-managed inbound PDF

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

### #90211 fix(acp): redact URL credentials in runtime errors

- bucket: needs_proof
- author: nahkhsinad
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:18:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed This tightens ACP runtime error redaction so URL userinfo never leaks into logs, tool results, lifecycle events, or chat-facing diagnostics. Today the ACP error formatter already catches obvious provider tokens, auth headers, query-string secre

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

### #93083 fix(agents): resolve bound agent workspace for unscoped inbound session keys (fixes #92903)

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:25:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92903 ## Summary Multi-agent inbound turns could load the wrong workspace: a channel message routed to a bound, non-default agent injected its system-prompt **Project Context** (`SOUL.md`/`AGENTS.md`/`USER.md`/`IDENTITY.md`) from the **default** workspa

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

### #90511 fix: allow Discord DM reads for allowlisted peers

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:51:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Allow Discord `readMessages` / `message.read` to authorize one-to-one DM history reads when the fetched DM recipient is already allowlisted in `channels.discord.allowFrom`. ## Changes - normalize the Discord DM allowlist once inside the messaging re

### #90542 fix(mentions): enforce scoped regex pattern allowlists

- bucket: needs_proof
- author: patrick-slimelab
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: matrix, channel: slack, channel: telegram, channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:51:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Follow-up to #70864. ## Summary - Treat explicit provider `mentionPatterns.mode: "allow"` as an allowlist scoped by `allowIn` instead of enabling regex mention patterns everywhere except `denyIn`. - Preserve backward-compatible permissive behavior when no prov

### #90561 fix(agents): harden subagent announce retry and error handling

- bucket: needs_proof
- author: FradSer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: mock-only-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:52:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Increase retry budget from 3 to 5 attempts with longer exponential backoff (up to 30s) - Extend announce expiry from 5min to 10min, completion hard expiry from 30min to 45min - Add jitter to retry delays to prevent thundering herd scenarios - Extr

### #90577 fix(ui): show session name in browser title

- bucket: needs_proof
- author: BSG2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:52:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Updates the Control UI browser tab title to include the active session name, for example `Release triage - OpenClaw Control`. - Keeps the static `OpenClaw Control` title when no session is selected. - Syncs the title when the active session change

### #90582 fix: persist sender metadata in group chat JSONL records

- bucket: needs_proof
- author: yichu10c
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:52:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Group chat user messages in session JSONL were missing the `__openclaw` metadata block (senderId, from.id, from.first_name, from.username) that is present in 1:1 direct session messages. This made it impossible for agents and transcript loggers to d

### #90603 fix(secrets): use configured default agent ID in auth/model path discovery (#90573)

- bucket: needs_proof
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:53:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace hard-coded `"main"` with `resolveDefaultAgentId(config)` in the two storage-scan helpers that seed path discovery - Remove the `agentId === "main"` early-exit branches so all configured agents (including `"main"`) resolve through `resolveA

### #90618 fix: recover stuck Control UI chat runs

- bucket: needs_proof
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, clawsweeper, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:53:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Repairs #42258 as the canonical fix path for #42213. - Keeps the stuck-run recovery scoped to the Control UI chat lifecycle and queued-message flush behavior. - Addresses hydrated Greptile findings: do not surface transient background probe failur

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

### #83174 gateway: gate tool invoke until startup hooks are ready

- bucket: needs_proof
- author: constructzero7
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:05:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - gate tools.invoke through the existing startup-unavailable method mechanism so tool invocation returns 503 while startup sidecars/plugins are still loading - propagate unavailableGatewayMethods into the HTTP /tools/invoke path, covering direct HTT

