---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-057
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
  - "#68958"
  - "#68996"
  - "#93187"
  - "#74425"
  - "#74891"
  - "#74979"
  - "#76120"
  - "#76806"
  - "#86898"
  - "#87589"
  - "#91977"
  - "#92006"
  - "#92065"
  - "#93377"
  - "#92091"
  - "#92099"
  - "#93374"
  - "#92128"
  - "#92164"
  - "#92167"
  - "#92179"
  - "#92188"
  - "#92202"
  - "#93378"
  - "#92227"
cluster_refs:
  - "#68958"
  - "#68996"
  - "#93187"
  - "#74425"
  - "#74891"
  - "#74979"
  - "#76120"
  - "#76806"
  - "#86898"
  - "#87589"
  - "#91977"
  - "#92006"
  - "#92065"
  - "#93377"
  - "#92091"
  - "#92099"
  - "#93374"
  - "#92128"
  - "#92164"
  - "#92167"
  - "#92179"
  - "#92188"
  - "#92202"
  - "#93378"
  - "#92227"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.798Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 57

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #68958 fix: Remove comments from tsconfig.json to resolve JSON parsing error

- bucket: needs_proof
- author: kejw05
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:02:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The `qa/convex-credential-broker/convex/tsconfig.json` file contains `/* */` style comments, which cause JSON parsing errors in strict JSON parsers: ``` Expected ',' or '}' after property value in JSON at position 70 ``` ## Solution - Removed all co

### #68996 fix(google): route Gemma models through native Generative AI API

- bucket: needs_proof
- author: tanjinlimkelvin-dot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:02:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Gemma models (gemma-4-31b-it, gemma-4-26b-it, etc.) fail silently when used through the Google provider. The OpenAI-compatible endpoint (`/v1beta/openai/chat/completions`) returns 400/401 errors for Gemma models — only the native Generative AI endpo

### #93187 fix(memory-core): exclude archive transcripts from dreaming corpus and propagate cron parentage to subagents

- bucket: needs_proof
- author: xialonglee
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:03:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix two defects in Dreaming session-corpus ingestion that cause cron-heavy deployment corpora to be dominated by automation noise (67%+ archive transcripts): 1. **Archive re-ingestion**: `listSessionFilesForAgent` used `isUsageCountedSessionTransc

### #74425 fix: ensure CLI processes exit after command completion on Windows

- bucket: needs_proof
- author: 1yihui
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:04:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes CLI processes (node.exe openclaw.mjs) remaining alive after command execution on Windows. The CLI entrypoint was missing process.exit() calls after commands completed, causing processes to hang. ## Changes - Added explicit `process.exit(proces

### #74891 fix(onboard): skip API-key prompt when user skipped installing the skill (#74382)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:04:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** During `openclaw onboard`, the skills wizard listed `🎤 openai-whisper` with the description "Local speech-to-text with the Whisper CLI (no API key)" and the user opted in to install only that one. They were then asked for `OPENAI_API

### #74979 fix(agents): guard promptActiveSession against pre-aborted signal

- bucket: needs_proof
- author: zhumengzhu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:04:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: When `runAbortController.signal` is already aborted before `promptActiveSession()` is called, JS evaluates `activeSession.prompt()` first (starting a new `Agent._runLoop` with a fresh `abortController`), then `abortable()` rejects imm

### #76120 [codex] Suppress empty native reasoning placeholders

- bucket: needs_proof
- author: pradeep7127
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:05:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop fabricating a visible reasoning placeholder when a native reasoning block has only a signature and no summary text. - Preserve normal reasoning display when the provider returns actual thinking/summary text. - Add regression coverage for payl

### #76806 fix(agents): detect irreducible context overflow to prevent compaction loop DoS

- bucket: needs_proof
- author: jlapenna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:06:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add circuit breaker for irreducible context overflow and exhausted compaction attempts. When an agent's system prompt + user prompt alone exceeds the model's context window, compaction cannot reduce the overflow because it only removes session history messages

### #86898 fix(context-engine): resolve turn-maintenance livelock on Telegram DM sessions (#77340)

- bucket: needs_proof
- author: baghvn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:08:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Closes #77340. Under steady Telegram DM traffic, the deferred turn-maintenance worker livelocks. It waits for `resolveSessionLane(sessionKey)` to reach zero queue depth before committing — but that lane is also used by inference, so it never empties

### #87589 fix(memory): show signalCount in dreaming promotion annotation (#87588)

- bucket: needs_proof
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:08:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The promotion annotation written to `MEMORY.md` has shown `recalls=<recallCount>` since the feature shipped, but the actual promotion gate checks the *total signal count* (`recallCount + dailyCount + groundedCount`), not `recallCount` alone. This pr

### #91977 fix(ios): preserve glass surface identity

- bucket: needs_proof
- author: zats
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T17:10:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move the iOS 26 light-mode `glassEffect` availability/color check into the background surface layer. - Keep card and control content on the same SwiftUI structural path across light/dark and OS versions. ## Why The previous modifier wrapped the wh

### #92006 build: add tsdown DTS diagnostics controls

- bucket: needs_proof
- author: ld99ba
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:12:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add tsdown wrapper diagnostics for selecting a single config shard with `--config-index <number>` - add a diagnostics-only `--allow-ineffective-dynamic-import` escape hatch for known tsdown warning behavior - keep the root unified DTS graph opt-in

### #92065 fix(memory): honor configured qmd search timeouts

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:15:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- derive the memory_search tool deadline from the configured QMD timeout when the qmd backend is active\n- keep a bounded wrapper overhead so hung searches still fail cleanly\n- add regression coverage for slow successful QMD searches and timeout b

### #93377 fix(model-fallback): classify Codex/OpenAI auth failures

- bucket: needs_proof
- author: pandaAIGC
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:16:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Draft fix for #93272. This teaches the shared failover matcher to treat Codex/OpenAI auth payloads as auth failures so configured model fallback can run instead of surfacing a generic `LLM request failed` response. Covered auth shapes: - `auth_unava

### #92091 feat(discord): reprocess edited messages and cancel runs on delete

- bucket: needs_proof
- author: sws-apps
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: L, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:16:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Discord: reprocess edited messages, cancel runs when the source message is deleted Closes #53654. Also covers the edit-to-reprocess half tracked in #20173 and #38505. ## Summary Adds Discord `MESSAGE_UPDATE` / `MESSAGE_DELETE` gateway handling to the bundled

### #92099 feat(active-memory): add messageMaxChars config to cap latest user message in message mode

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:16:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: Active Memory's `queryMode: "message"` was documented to send only the latest user message, but in practice it forwarded the full assembled request/context envelope (hundreds of KB to multiple MB) to the blocking memory sub-agent, cau

### #93374 fix(agents): suggest recovery for unknown tool ids

- bucket: needs_proof
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:17:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #92273 by making Tool Search unknown-id failures actionable instead of returning only a bare `Unknown tool id` message. - Adds closest-match suggestions for guessed tool ids such as `file_write` when the catalog contains `write`. - Points th

### #92128 fix(feishu): prefer native thread id for topic sessions

- bucket: needs_proof
- author: hanhuihanhui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:18:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Why does this matter now? What is the intended outcome? What is intentionally out of scope? What does success look like? What should reviewers focus on? <details> <summary>Summary guidance</summary> This PR descripti

### #92164 fix(memory-core): score CJK keyword search instead of textScore=0 with trigram FTS5

- bucket: needs_proof
- author: draix
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:19:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hybrid memory search scored **every** Chinese/Japanese/Korean (CJK) query at `textScore: 0` when the FTS5 store uses the `trigram` tokenizer. Vector search still returned correct matches, but the BM25/full-text component contributed nothing, draggin

### #92167 fix(media): recognize .m2a files as audio

- bucket: needs_proof
- author: llljjjwww333
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:19:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Maps `.m2a` filenames to `audio/mpeg` in shared media-core MIME detection. - Treats `.m2a` as audio across the related filename-based audio surfaces: voice-message compatibility, auto-reply transcription note stripping, webchat local audio attachm

### #92179 Improve TUI control-plane progress rendering

- bucket: needs_proof
- author: wnlen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:19:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - render TUI tool progress as control-plane milestones instead of generic tool labels like Bash - show live command output with redaction and strip plain text fences - separate control-plane progress from final assistant replies in the chat log ## V

### #92188 fix(logging): prune non-idle stale diagnostic session states (fixes #91697)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:20:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `pruneDiagnosticSessionStates()` only cleans up diagnostic entries where `state === "idle"` AND `queueDepth <= 0`. Entries that never transition back to "idle" — for example after a failed stuck-session recovery — accumulate in the p

### #92202 fix(embedded-runner): recheck owned-writes before session takeover (#91236)

- bucket: needs_proof
- author: DouglasCherry
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:21:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Status: DRAFT — proposed fix, needs validation.** The fix and regression test were authored from source analysis against the harness conventions but **have not been executed in my environment** (deps not installed). Please treat this as a starting point fo

### #93378 #93375: fix(telegram): recover from stale polling lease after crash loop

- bucket: needs_proof
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:22:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix Telegram polling crash loop that occurs after a transient network timeout. When the worker exits without aborting its signal, the polling lease becomes stuck, causing every subsequent restart to fail with a "duplicate polling" error. Only a full

### #92227 fix(codex): avoid refreshing valid app-server OAuth

- bucket: needs_proof
- author: dredozubov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, extensions: codex, triage: mock-only-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:22:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Avoid forced OAuth refresh for Codex app-server token callbacks when the selected OAuth credential is still usable. - Keep near-expiry credentials refreshing through the existing provider-auth path. - Classify OpenAI app-session termination messag
