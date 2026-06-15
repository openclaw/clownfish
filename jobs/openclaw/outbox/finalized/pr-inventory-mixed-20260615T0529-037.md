---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-037
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
  - "#83306"
  - "#83275"
  - "#82909"
  - "#82665"
  - "#82538"
  - "#82458"
  - "#82386"
  - "#81590"
  - "#81407"
  - "#80958"
cluster_refs:
  - "#83306"
  - "#83275"
  - "#82909"
  - "#82665"
  - "#82538"
  - "#82458"
  - "#82386"
  - "#81590"
  - "#81407"
  - "#80958"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.604Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 37

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #83306 feat(browser): add browserbase profile driver with per-attach connectUrl resolution

- bucket: needs_proof
- author: esqandil
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:27:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a new `browserbase` profile driver to the OpenClaw browser plugin. Profiles using this driver declare a Browserbase keep-alive session id and an env var name for the API key; on every CDP attach OpenClaw fetches a fresh `connectUrl` from `GET /

### #83275 fix(secrets): audit config backup secret residues

- bucket: ready_for_maintainer
- author: jynbil1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T06:27:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - scan adjacent openclaw.json backup and rejected-payload artifacts for plaintext secret fields before active config validity gates - include openclaw.json.rejected.* beside .bak, .bak.*, .pre-update, and .clobbered.* audit coverage - document the r

### #82909 fix(telegram): repair message cache reply types

- bucket: ready_for_maintainer
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, P2, impact:session-state
- gitcrawl snapshot updated: 2026-05-29T06:28:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Repair the Telegram message cache types introduced by the latest reply-chain context changes on `main`. - Keep cached nodes' normalized `messageId` required after normalization so cache upserts can use it without widening to `undefined`. - Narrow 

### #82665 docs(messages): clarify session key queue lanes

- bucket: stale_unassigned
- author: vingov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3
- gitcrawl snapshot updated: 2026-05-29T06:28:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: #72633 was closed because it introduced a broad standalone architecture page without current maintainer ownership. - Why it matters: the existing Messages page names the routing -> session key -> queue flow, but does not connect session-k

### #82538 fix(gateway): harden token comparison paths

- bucket: stale_unassigned
- author: bactiar291
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XS, proof: supplied
- gitcrawl snapshot updated: 2026-05-29T06:28:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: gateway runtime token and assistant media ticket comparisons used manual length checks before `timingSafeEqual`. - Why it matters: these are secret-bearing validation paths, so keeping them on one shared constant-time helper avoids drift 

### #82458 fix(infra): drop duplicated "restart" word in restart-sentinel summary

- bucket: ready_for_maintainer
- author: jameswniu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T06:28:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Restart-event chat messages emit the word `restart` twice when `payload.kind === "restart"`, producing strings like `Gateway restart restart ok (gateway.restart)`. This is the most common `kind` value (every `/restart` from a chat cli

### #82386 docs: sync maintainer roster source

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S
- gitcrawl snapshot updated: 2026-05-29T06:28:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replace the stale partial maintainer list in CONTRIBUTING.md with the current GitHub Maintainer team roster - document the source-of-truth split: GitHub team membership for the public roster, private Discord #maintainer-whois for human-readable ma

### #81590 Add gateway watchdog authenticated handshake probe

- bucket: stale_unassigned
- author: bryangauvin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: L, triage: refactor-only, triage: risky-infra, proof: supplied, P2
- gitcrawl snapshot updated: 2026-05-29T06:29:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a local `scripts/gateway_health_watchdog.py` self-healing probe for OpenClaw gateway health - complete the authenticated OpenClaw WebSocket `connect` handshake instead of treating HTTP 101 as a successful health check - align the watchdog prob

### #81407 feat(hooks): add senderId to outbound message:sent event

- bucket: needs_proof
- author: haseo-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: refactor-only, triage: blank-template, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:29:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Outbound hook events (`message:sent`) currently lack `senderId`, while inbound events (`message:received`) include it via `metadata.senderId`. This imbalance forces hook handlers to use workarounds to identify the bot's own user ID. ## Problem | Event | sender

### #80958 Add browser dictation to Control UI chat

- bucket: stale_unassigned
- author: Al-Qassim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: refactor-only, proof: supplied
- gitcrawl snapshot updated: 2026-05-29T06:30:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a Web Speech API dictation button to the Control UI chat composer when SpeechRecognition is available - Stream interim/final recognition text into the existing draft state - Reset/stop dictation with chat view cleanup and cover supported/unsup

