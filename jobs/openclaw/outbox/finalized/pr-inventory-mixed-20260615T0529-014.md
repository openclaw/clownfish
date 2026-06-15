---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-014
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
  - "#85159"
  - "#85172"
  - "#85195"
  - "#84819"
  - "#84525"
  - "#84582"
  - "#67421"
  - "#85345"
  - "#84977"
  - "#84906"
cluster_refs:
  - "#85159"
  - "#85172"
  - "#85195"
  - "#84819"
  - "#84525"
  - "#84582"
  - "#67421"
  - "#85345"
  - "#84977"
  - "#84906"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.601Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 14

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #85159 fix(commands): show current level in /verbose and /reasoning menus

- bucket: needs_proof
- author: yiyouguisu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T01:53:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The v1 fix (#85150, closed) added `argsMenu: "auto"` to `/verbose` but bypassed the current status display. This proper fix: 1. Adds `argsMenu: "auto"` to `/verbose` (matching `/think`, `/trace`, `/fast`) 2. Extends `formatTelegramCommandArgMenuTitl

### #85172 fix(matrix): respect is_direct: false in isStrictDirectRoom

- bucket: needs_proof
- author: JulyanXu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T02:11:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `isStrictDirectRoom` in `extensions/matrix/src/matrix/direct-room.ts` returned `evidence.strict` directly without checking `memberStateFlag`. When a 2-person Matrix room has `is_direct: false` on the membership event, the function still classified i

### #85195 fix: strip sub-second precision from Gemini timeRangeFilter timestamps

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T03:27:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Gemini's Search grounding endpoint rejects timestamps with fractional seconds in `timeRangeFilter`, returning: ``` Granularity of nano is not supported [code=INVALID_ARGUMENT] ``` All four call sites that build `timeRangeFilter` values used `Date.to

### #84819 Restore Vietnamese dashboard updates for 2026.5.19

- bucket: needs_proof
- author: manhhai999
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: nostr, app: web-ui, gateway, scripts, commands, docker, size: XL, extensions: acpx, extensions: qa-lab, extensions: codex, triage: dirty-candidate, proof: supplied, extensions: oc-path, extensions: diffs, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof, extensions: policy
- gitcrawl snapshot updated: 2026-05-22T05:03:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Restores the 2026.5.19 Control UI Vietnamese dashboard updates. - Adds the login/top-bar locale picker path and keeps non-Vietnamese locales from leaking Vietnamese fallback text. - Fixes stale module-scope locale labels so Skills, exec approvals,

### #84525 fix: avoid serializing plaintext model api keys

- bucket: ready_for_maintainer
- author: gKev1n
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: refactor-only, triage: blank-template, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-22T06:37:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent config/source-managed plaintext provider API keys from being serialized into generated models.json contents. - Preserve the models.json auth/registry contract by writing a non-secret `openclaw-managed` apiKey marker instead of deleting the

### #84582 fix(net): conditionalize proxyTls only for HTTPS proxies to fix Telegram plugin proxy issues

- bucket: needs_proof
- author: tanjingme
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T08:08:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Fixes an issue in the Telegram plugin where using SOCKS5 or plain HTTP proxies resulted in immediate connection failure with `ECONNRESET`. This was caused by `createHttp1ProxyAgent` unconditionally setting `proxyTls: true`. This patch conditionally

### #67421 feat: add per-agent web_fetch ssrf overrides

- bucket: maintainer_owned
- author: Takhoffman
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T09:26:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR makes `web_fetch` SSRF policy configurable per named agent at: ```json5 agents: { list: [ { id: "ops", tools: { web: { fetch: { ssrfPolicy: { dangerouslyAllowPrivateNetwork: true, allowedHostnames: ["matrix.home.arpa"], hostnameAllowlist: ["

### #85345 [codex] fix gateway derived plugin metadata reuse

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-22T12:11:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allows Gateway-owned derived plugin metadata snapshots to remain reusable for the Gateway process when the persisted registry is stale or missing. - Threads the prepared metadata snapshot into provider auth prewarm model catalog loading. - Keeps r

### #84977 feat: handle gemma 4 format tool call

- bucket: ready_for_maintainer
- author: ouchuan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: lmstudio, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-05-22T12:16:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Gemma 4 model might return tool calls in its own format, which are not handled correctly and would leak directly into user prompt - Solution: Add corresponding parsing logic to intercept these tool calls properly - What changed: Add parsi

### #84906 Add Gradium realtime transcription provider

- bucket: ready_for_maintainer
- author: timpratim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: voice-call, size: L, extensions: gradium, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-22T13:04:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a Gradium realtime transcription provider and register it through the plugin manifest - cover provider behavior with focused tests and plugin registration checks - update Gradium voice/media docs, plugin inventory docs, and changelog ## Testin

