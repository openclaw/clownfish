---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-205
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
  - "#69904"
  - "#68565"
  - "#68197"
  - "#69245"
  - "#66041"
  - "#68685"
  - "#70051"
  - "#67655"
  - "#66327"
  - "#68464"
cluster_refs:
  - "#69904"
  - "#68565"
  - "#68197"
  - "#69245"
  - "#66041"
  - "#68685"
  - "#70051"
  - "#67655"
  - "#66327"
  - "#68464"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.678Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 205

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #69904 fix: drop stale transient async notices after session advance

- bucket: needs_proof
- author: OpenSpek
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: M, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:07:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This narrows late async/system notices so transient success-style notices do not surface after the session has already advanced. It keeps durable blocked, error, and timeout notices intact. ## What changed - mark transient async completion notices w

### #68565 fix(agents/anthropic-replay): preserve signed/redacted thinking block…

- bucket: needs_proof
- author: AstronautGumbo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:07:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: …s across cross-model replay The prior behavior in `transformTransportMessages` preserved signed and redacted thinking blocks only on same-model replay; any cross-model replay downgraded the block to a plain `text` block (signed case) or dropped it entirely (r

### #68197 feat(line): add optional requireMentionForNonText group gate

- bucket: needs_proof
- author: revision-co-ltd
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: line, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:07:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `requireMention: true` is set on a LINE group, text messages are correctly gated by `resolveInboundMentionDecision`, but non-text messages (image, sticker, video, audio, file, location) always bypass the gate via `canDetectMention: message.type

### #69245 feat: enable cache-ttl context pruning for openai-completions providers

- bucket: needs_proof
- author: g18166599417-svg
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-07T05:07:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Enable cache-ttl based context pruning for all providers using the \openai-completions\ API type. Currently, \isCacheTtlEligibleProvider\ only returns \ rue\ for Anthropic-family and Google-family providers (plus those registered via provider plugin

### #66041 fix(telegram): keep ack reactions without mentions

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:07:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Telegram ack reactions stop when group `requireMention` is disabled, even though those group messages still trigger runs. - Why it matters: always-on Telegram groups look ignored while the agent is actually working. - What changed: when T

### #68685 fix(config): strip obsolete memorySearch keys before schema validation (#68664)

- bucket: needs_proof
- author: Tmalone1250
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:07:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: Obsolete `memorySearch` keys (`chunkSize`, `chunkOverlap`, `maxResults`) in `agents.defaults` cause schema validation to fail because the current migration path moves the root key but fails to strip stale sub-keys before `validateConf

### #70051 [codex] suppress heartbeat-isolated exec self-wake loop

- bucket: needs_proof
- author: dashhuang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:07:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Suppress node-level `exec` system-event replay for synthetic heartbeat-isolated sessions. When a heartbeat run is already executing inside a synthetic `:heartbeat` session, any internal `exec.started` / `exec.finished` / `exec.denied` node event sho

### #67655 fix(exec): fail closed on Windows shell wrappers in allowlist mode

- bucket: needs_proof
- author: plgonzalezrx8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-07T05:07:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Issue In Windows allowlist mode, the wrapper guard only failed closed for `cmd.exe`-style invocations. That left a gap where other shell-wrapper transports such as `powershell -Command` could still be analyzed like a normal allowlisted command, which is the

### #66327 feat(msteams): implement sendPayload for interactive approval cards

- bucket: needs_proof
- author: johnturek
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:08:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements `sendPayload` for the MS Teams channel extension so approval prompts render as Adaptive Cards with clickable buttons instead of plain text with raw `/approve` commands. Closes #64690 ## Problem The Teams outbound adapter only implemented 

### #68464 Harden subagent completion delivery

- bucket: needs_proof
- author: nnlevy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: imessage, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:08:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - persist a per-run delivery claim and user-safe delivery payload for subagent completions - route active-parent completion announces queue-first with fail-closed semantics instead of direct-first fallback behavior - harden iMessage delivery normali

